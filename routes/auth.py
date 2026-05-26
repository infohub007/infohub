# routes/auth.py
from flask import Blueprint, render_template, request, redirect, url_for, session, flash
from models.user import create_user, find_user_by_email, verify_password
from database.db import get_db
import re
import secrets
from datetime import datetime, timedelta

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        name = request.form.get('name', '').strip()
        email = request.form.get('email', '').strip().lower()
        phone = request.form.get('phone', '').strip()
        password = request.form.get('password', '')
        confirm_password = request.form.get('confirm_password', '')
        
        # Validation
        errors = []
        if not name or len(name) < 2:
            errors.append("Name must be at least 2 characters")
        if not re.match(r"[^@]+@[^@]+\.[^@]+", email):
            errors.append("Invalid email address")
        if not re.match(r"^\+?[1-9]\d{1,14}$", phone):
            errors.append("Invalid phone number (use international format, e.g., +1234567890)")
        if len(password) < 6:
            errors.append("Password must be at least 6 characters")
        if password != confirm_password:
            errors.append("Passwords do not match")
        
        if errors:
            for error in errors:
                flash(error, 'error')
            return render_template('register.html')
        
        # Check if admin email to set admin flag
        from os import getenv
        admin_email = getenv('ADMIN_EMAIL', 'infohub.net.in@gmail.com')
        is_admin = (email == admin_email)
        
        user_id, error = create_user(name, email, phone, password, is_admin)
        if error:
            flash(error, 'error')
            return render_template('register.html')
        
        flash("Registration successful! Please login.", 'success')
        return redirect(url_for('auth.login'))
    
    return render_template('register.html')

@auth_bp.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form.get('email', '').strip().lower()
        password = request.form.get('password', '')
        
        user = find_user_by_email(email)
        if user and verify_password(user, password):
            session['user_id'] = str(user['_id'])
            session['user_name'] = user['name']
            session['user_email'] = user['email']
            session['is_admin'] = user.get('is_admin', False)
            flash(f"Welcome back, {user['name']}!", 'success')
            return redirect(url_for('main.dashboard'))
        else:
            flash("Invalid email or password", 'error')
    
    return render_template('login.html')

@auth_bp.route('/logout')
def logout():
    session.clear()
    flash("You have been logged out.", 'info')
    return redirect(url_for('main.index'))

@auth_bp.route('/forgot-password', methods=['GET', 'POST'])
def forgot_password():
    if request.method == 'POST':
        email = request.form.get('email', '').strip().lower()
        db = get_db()
        user = db.users.find_one({'email': email})
        
        if user:
            # Generate reset token
            token = secrets.token_urlsafe(32)
            expiry = datetime.now() + timedelta(hours=1)
            
            # Save token to database
            db.users.update_one(
                {'email': email},
                {'$set': {
                    'reset_token': token,
                    'reset_token_expiry': expiry
                }}
            )
            
            # Send email with reset link
            reset_link = f"http://localhost:5000/auth/reset-password/{token}"
            
            # Send email
            from routes.main import send_email_notification
            email_sent = send_password_reset_email(email, reset_link)
            
            if email_sent:
                flash("Password reset link sent to your email!", 'success')
            else:
                flash("Failed to send email. Please try again.", 'error')
        else:
            # Don't reveal if email exists or not (security)
            flash("If an account exists with that email, you will receive a reset link.", 'info')
        
        return redirect(url_for('auth.login'))
    
    return render_template('forgot_password.html')

@auth_bp.route('/reset-password/<token>', methods=['GET', 'POST'])
def reset_password(token):
    db = get_db()
    user = db.users.find_one({
        'reset_token': token,
        'reset_token_expiry': {'$gt': datetime.now()}
    })
    
    if not user:
        flash("Invalid or expired reset link. Please try again.", 'error')
        return redirect(url_for('auth.forgot_password'))
    
    if request.method == 'POST':
        password = request.form.get('password')
        confirm_password = request.form.get('confirm_password')
        
        if len(password) < 6:
            flash("Password must be at least 6 characters", 'error')
            return render_template('reset_password.html')
        
        if password != confirm_password:
            flash("Passwords do not match", 'error')
            return render_template('reset_password.html')
        
        # Update password
        from werkzeug.security import generate_password_hash
        hashed_password = generate_password_hash(password)
        
        db.users.update_one(
            {'_id': user['_id']},
            {'$set': {
                'password': hashed_password,
                'reset_token': None,
                'reset_token_expiry': None
            }}
        )
        
        flash("Password reset successful! Please login with your new password.", 'success')
        return redirect(url_for('auth.login'))
    
    return render_template('reset_password.html')

def send_password_reset_email(email, reset_link):
    """Send password reset email"""
    try:
        import smtplib
        from email.mime.text import MIMEText
        from email.mime.multipart import MIMEMultipart
        import os
        
        sender_email = os.getenv('ADMIN_EMAIL')
        sender_password = os.getenv('GMAIL_APP_PASSWORD')
        
        subject = "Password Reset Request - InfoHub"
        body = f"""
        <html>
        <body style="font-family: Arial, sans-serif;">
            <h2 style="color: #667eea;">Password Reset Request</h2>
            <p>You requested to reset your password for your InfoHub account.</p>
            <p>Click the link below to reset your password (valid for 1 hour):</p>
            <p><a href="{reset_link}" style="background-color: #667eea; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Reset Password</a></p>
            <p>Or copy this link: <a href="{reset_link}">{reset_link}</a></p>
            <p>If you didn't request this, please ignore this email.</p>
            <hr>
            <p style="color: #6b7280; font-size: 12px;">InfoHub Portfolio</p>
        </body>
        </html>
        """
        
        msg = MIMEMultipart()
        msg['From'] = sender_email
        msg['To'] = email
        msg['Subject'] = subject
        msg.attach(MIMEText(body, 'html'))
        
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login(sender_email, sender_password)
        server.send_message(msg)
        server.quit()
        
        return True
    except Exception as e:
        print(f"Password reset email error: {e}")
        return False