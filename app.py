# app.py
from flask import Flask, send_from_directory
from dotenv import load_dotenv
import os
from database.db import init_db, get_db
from routes.auth import auth_bp
from routes.main import main_bp
from werkzeug.security import generate_password_hash
from datetime import datetime

load_dotenv()

app = Flask(__name__)
app.secret_key = os.getenv('SECRET_KEY', 'dev-secret-key')

# Initialize database
init_db()

# Register blueprints
app.register_blueprint(auth_bp, url_prefix='/auth')
app.register_blueprint(main_bp)

# Serve AI Tools directory
@app.route('/projects/ai_tools/')
@app.route('/projects/ai-tools/')
def ai_tools_home():
    return send_from_directory('projects/ai_tools', 'index.html')

@app.route('/projects/ai_tools/<path:filename>')
@app.route('/projects/ai-tools/<path:filename>')
def ai_tools_files(filename):
    return send_from_directory('projects/ai_tools', filename)

# Create default admin user and seed projects if they don't exist
def setup_initial_data():
    db = get_db()
    
    # Create collections if they don't exist
    if 'users' not in db.list_collection_names():
        db.create_collection('users')
    if 'projects' not in db.list_collection_names():
        db.create_collection('projects')
    if 'contacts' not in db.list_collection_names():
        db.create_collection('contacts')
    
    # Create default admin user if not exists
    admin_email = os.getenv('ADMIN_EMAIL', 'infohub.net.in@gmail.com')
    if not db.users.find_one({'email': admin_email}):
        admin_user = {
            'name': 'Niranjan',
            'email': admin_email,
            'phone': '+0000000000',
            'password': generate_password_hash('infohub@27'),
            'is_admin': True,
            'created_at': datetime.now()
        }
        db.users.insert_one(admin_user)
        print(f"[OK] Admin user created - Email: {admin_email}, Password: infohub@27")
    else:
        print(f"[OK] Admin user exists - Email: {admin_email}")
    
    # Seed projects collection if empty
    if db.projects.count_documents({}) == 0:
        projects_data = [
            {
                'title': 'SmartGov Career Development',
                'short_desc': 'Comprehensive career guidance platform for government job aspirants',
                'long_desc': 'SmartGov provides curated resources, mock tests, application tracking, and personalized roadmaps for students preparing for various government competitive exams like UPSC, SSC, Banking, Railways, and State PSCs.',
                'image_url': 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
                'github_link': 'https://github.com/infohub/smartgov',
                'live_demo': 'https://smartgov.infohub.demo',
                'category': 'Education',
                'technologies': ['React', 'Node.js', 'MongoDB', 'Express'],
                'date_added': '2024-01-15'
            },
            
            {
                'title': 'AI Tools Directory',
                'short_desc': 'Discover 1000+ AI tools across 25+ categories',
                'long_desc': 'A comprehensive directory of artificial intelligence tools featuring 1000+ tools across 25+ categories including Video, Text, Image, Audio, Code, Marketing, and more.',
                'image_url': 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
                'github_link': 'https://github.com/infohub007/ai_tools',
                'live_demo': '/projects/ai_tools/',
                'category': 'AI Tools',
                'technologies': ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
                'date_added': datetime.now().strftime('%Y-%m-%d')
            }
        ]
        db.projects.insert_many(projects_data)
        print("[OK] Initial projects seeded successfully.")
    else:
        # Check if AI Tools Directory already exists, if not add it
        if not db.projects.find_one({'title': 'AI Tools Directory'}):
            ai_tools_project = {
                'title': 'AI Tools Directory',
                'short_desc': 'Discover 1000+ AI tools across 25+ categories',
                'long_desc': 'A comprehensive directory of artificial intelligence tools featuring 1000+ tools across 25+ categories including Video, Text, Image, Audio, Code, Marketing, and more.',
                'image_url': 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
                'github_link': '',
                'live_demo': '/projects/ai_tools/',
                'category': 'AI Tools',
                'technologies': ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
                'date_added': datetime.now().strftime('%Y-%m-%d')
            }
            db.projects.insert_one(ai_tools_project)
            print("[OK] AI Tools Directory added to projects.")
        print(f"[OK] Projects already exist - {db.projects.count_documents({})} projects in database")
with app.app_context():
    setup_initial_data()

if __name__ == '__main__':
    print("\n" + "="*50)
    print("InfoHub Portfolio Website")
    print("="*50)
    print(f"Admin Email: {os.getenv('ADMIN_EMAIL', 'infohub.net.in@gmail.com')}")
    print(f"Admin Password: infohub@27")
    print(f"Website: http://localhost:5000")
    print(f"AI Tools Directory: http://localhost:5000/projects/ai-tools/")
    print("="*50 + "\n")
    app.run(debug=True, host='0.0.0.0', port=10000)
    # At the bottom of app.py
if __name__ == '__main__':
    import os
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=False, host='0.0.0.0', port=port)