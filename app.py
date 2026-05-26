from flask import Flask, send_from_directory
from dotenv import load_dotenv
import os
from database.db import init_db, get_db
from routes.auth import auth_bp
from routes.main import main_bp
from werkzeug.security import generate_password_hash
from datetime import datetime

# Load environment variables
load_dotenv()

# Create Flask app
app = Flask(__name__)

# Secret key
app.secret_key = os.getenv('SECRET_KEY', 'dev-secret-key')

# Initialize database safely
try:
    init_db()
    print("[OK] Database initialized")
except Exception as e:
    print("[ERROR] Database initialization failed:", e)

# Register blueprints
app.register_blueprint(auth_bp, url_prefix='/auth')
app.register_blueprint(main_bp)

# ============================================
# AI TOOLS STATIC FILES
# ============================================

@app.route('/projects/ai_tools/')
@app.route('/projects/ai-tools/')
def ai_tools_home():
    return send_from_directory('projects/ai_tools', 'index.html')


@app.route('/projects/ai_tools/<path:filename>')
@app.route('/projects/ai-tools/<path:filename>')
def ai_tools_files(filename):
    return send_from_directory('projects/ai_tools', filename)

# ============================================
# INITIAL DATABASE SETUP
# ============================================

def setup_initial_data():
    db = get_db()

    # Create collections if not exists
    if 'users' not in db.list_collection_names():
        db.create_collection('users')

    if 'projects' not in db.list_collection_names():
        db.create_collection('projects')

    if 'contacts' not in db.list_collection_names():
        db.create_collection('contacts')

    # Default admin
    admin_email = os.getenv(
        'ADMIN_EMAIL',
        'infohub.net.in@gmail.com'
    )

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

        print(f"[OK] Admin created: {admin_email}")

    else:
        print(f"[OK] Admin already exists: {admin_email}")

    # Seed projects if empty
    if db.projects.count_documents({}) == 0:

        projects_data = [
            {
                'title': 'SmartGov Career Development',
                'short_desc': 'Career guidance platform',
                'long_desc': 'Platform for government exam aspirants.',
                'image_url': 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',
                'github_link': 'https://github.com/infohub/smartgov',
                'live_demo': 'https://smartgov.infohub.demo',
                'category': 'Education',
                'technologies': [
                    'React',
                    'Node.js',
                    'MongoDB',
                    'Express'
                ],
                'date_added': '2024-01-15'
            },

            {
                'title': 'AI Tools Directory',
                'short_desc': 'Discover AI tools',
                'long_desc': 'Directory of AI tools.',
                'image_url': 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
                'github_link': 'https://github.com/infohub007/ai_tools',
                'live_demo': '/projects/ai_tools/',
                'category': 'AI Tools',
                'technologies': [
                    'HTML',
                    'CSS',
                    'JavaScript'
                ],
                'date_added': datetime.now().strftime('%Y-%m-%d')
            }
        ]

        db.projects.insert_many(projects_data)

        print("[OK] Projects seeded")

    else:
        print("[OK] Projects already exist")


# Run setup safely
try:
    with app.app_context():
        setup_initial_data()

except Exception as e:
    print("[ERROR] Setup failed:", e)

# ============================================
# RUN APP
# ============================================

if __name__ == '__main__':

    port = int(os.environ.get('PORT', 5000))

    print("\n===================================")
    print("INFOHUB RUNNING")
    print("===================================")
    print(f"PORT: {port}")
    print("===================================\n")

    app.run(
        debug=False,
        host='0.0.0.0',
        port=port
    )