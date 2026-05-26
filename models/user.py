# models/user.py
from werkzeug.security import generate_password_hash, check_password_hash
from database.db import get_db
from bson import ObjectId

def create_user(name, email, phone, password, is_admin=False):
    db = get_db()
    if db.users.find_one({'email': email}):
        return None, "Email already registered"
    
    hashed_password = generate_password_hash(password)
    user = {
        'name': name,
        'email': email,
        'phone': phone,
        'password': hashed_password,
        'is_admin': is_admin,
        'created_at': datetime.utcnow()
    }
    result = db.users.insert_one(user)
    return str(result.inserted_id), None

def find_user_by_email(email):
    db = get_db()
    return db.users.find_one({'email': email})

def find_user_by_id(user_id):
    db = get_db()
    try:
        return db.users.find_one({'_id': ObjectId(user_id)})
    except:
        return None

def verify_password(user, password):
    return check_password_hash(user['password'], password)

def update_user(user_id, update_data):
    db = get_db()
    db.users.update_one({'_id': ObjectId(user_id)}, {'$set': update_data})

from datetime import datetime