# routes/main.py
from flask import Blueprint, render_template, request, redirect, url_for, session, flash, abort
from database.db import get_db
from bson import ObjectId
from functools import wraps
from datetime import datetime
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from dotenv import load_dotenv

load_dotenv()

main_bp = Blueprint('main', __name__)

def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if 'user_id' not in session:
            flash('Please login to access this page.', 'warning')
            return redirect(url_for('auth.login'))
        return f(*args, **kwargs)
    return decorated_function

def admin_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if not session.get('is_admin', False):
            flash('Admin access required.', 'error')
            return redirect(url_for('main.index'))
        return f(*args, **kwargs)
    return decorated_function

def send_email_notification(name, email, message):
    """Send email notification using Gmail SMTP"""
    try:
        sender_email = os.getenv('ADMIN_EMAIL')
        sender_password = os.getenv('GMAIL_APP_PASSWORD')
        
        if not sender_email or not sender_password:
            print("Email credentials not configured in .env")
            return False
        
        subject = f"New Contact Form Message from {name}"
        body = f"""
        <html>
        <body style="font-family: Arial, sans-serif;">
            <h2 style="color: #667eea;">New Message from InfoHub Contact Form</h2>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Message:</strong></p>
            <p style="background-color: #f3f4f6; padding: 15px; border-radius: 8px;">{message}</p>
            <hr>
            <p style="color: #6b7280; font-size: 12px;">Sent from InfoHub Portfolio Website</p>
        </body>
        </html>
        """
        
        msg = MIMEMultipart()
        msg['From'] = sender_email
        msg['To'] = sender_email
        msg['Subject'] = subject
        msg.attach(MIMEText(body, 'html'))
        
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login(sender_email, sender_password)
        server.send_message(msg)
        server.quit()
        
        print(f"Email sent successfully to {sender_email}")
        return True
    except Exception as e:
        print(f"Email error: {e}")
        return False

@main_bp.route('/')
def index():
    db = get_db()
    featured_projects = list(db.projects.find().limit(3))
    return render_template('index.html', featured_projects=featured_projects)

@main_bp.route('/about')
def about():
    return render_template('about.html')

@main_bp.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name = request.form.get('name')
        email = request.form.get('email')
        message = request.form.get('message')
        
        if name and email and message:
            db = get_db()
            contact_entry = {
                'name': name,
                'email': email,
                'message': message,
                'date': datetime.now()
            }
            db.contacts.insert_one(contact_entry)
            
            # Send email notification
            email_sent = send_email_notification(name, email, message)
            if email_sent:
                flash("Thank you! We've received your message and will respond soon.", 'success')
            else:
                flash("Your message was saved successfully!", 'success')
        else:
            flash("Please fill all fields.", 'error')
        return redirect(url_for('main.contact'))
    
    return render_template('contact.html')

@main_bp.route('/projects')
def projects():
    db = get_db()
    all_projects = list(db.projects.find().sort('date_added', -1))
    return render_template('projects.html', projects=all_projects)

@main_bp.route('/dashboard')
@login_required
def dashboard():
    db = get_db()
    user = db.users.find_one({'_id': ObjectId(session['user_id'])})
    total_projects = db.projects.count_documents({})
    return render_template('dashboard.html', user=user, total_projects=total_projects)

@main_bp.route('/admin/add-project', methods=['GET', 'POST'])
@admin_required
def add_project():
    if request.method == 'POST':
        title = request.form.get('title')
        short_desc = request.form.get('short_desc')
        long_desc = request.form.get('long_desc')
        image_url = request.form.get('image_url')
        github_link = request.form.get('github_link')
        live_demo = request.form.get('live_demo')
        category = request.form.get('category')
        technologies = request.form.get('technologies')
        
        if not all([title, short_desc, long_desc, image_url]):
            flash("Please fill required fields (Title, Short Description, Long Description, Image URL)", 'error')
            return render_template('add_project.html')
        
        project = {
            'title': title,
            'short_desc': short_desc,
            'long_desc': long_desc,
            'image_url': image_url,
            'github_link': github_link,
            'live_demo': live_demo,
            'category': category or 'General',
            'technologies': [tech.strip() for tech in technologies.split(',')] if technologies else [],
            'date_added': datetime.now().strftime('%Y-%m-%d')
        }
        
        db = get_db()
        db.projects.insert_one(project)
        flash("Project added successfully!", 'success')
        return redirect(url_for('main.projects'))
    
    return render_template('add_project.html')

@main_bp.route('/admin/delete-project/<project_id>')
@admin_required
def delete_project(project_id):
    db = get_db()
    db.projects.delete_one({'_id': ObjectId(project_id)})
    flash("Project deleted successfully.", 'success')
    return redirect(url_for('main.projects'))

@main_bp.route('/update-profile', methods=['POST'])
@login_required
def update_profile():
    db = get_db()
    skills = request.form.get('skills', '').split(',')
    skills = [s.strip() for s in skills if s.strip()]
    
    update_data = {
        'name': request.form.get('name'),
        'phone': request.form.get('phone'),
        'bio': request.form.get('bio'),
        'location': request.form.get('location'),
        'github': request.form.get('github'),
        'linkedin': request.form.get('linkedin'),
        'skills': skills
    }
    
    db.users.update_one(
        {'_id': ObjectId(session['user_id'])},
        {'$set': update_data}
    )
    
    flash("Profile updated successfully!", 'success')
    return redirect(url_for('main.dashboard'))

@main_bp.route('/analytics')
@login_required
@admin_required
def analytics():
    return render_template('analytics.html')