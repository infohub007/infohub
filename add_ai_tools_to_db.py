# add_ai_tools_to_db.py
from database.db import get_db
from datetime import datetime

db = get_db()

# Check if already exists
existing = db.projects.find_one({'title': 'AI Tools Directory'})

if existing:
    print(f"⚠️ AI Tools Directory already exists with link: {existing.get('live_demo')}")
else:
    ai_tools_project = {
        'title': 'AI Tools Directory',
        'short_desc': 'Discover 1000+ AI tools across 25+ categories',
        'long_desc': 'A comprehensive directory of artificial intelligence tools featuring 1000+ tools across 25+ categories including Video, Text, Image, Audio, Code, Marketing, Productivity, and more. Search, filter, and find the best AI tools for your needs.',
        'image_url': 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
        'live_demo': '/projects/ai_tools/',
        'category': 'AI Tools',
        'technologies': ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
        'date_added': datetime.now().strftime('%Y-%m-%d')
    }
    
    db.projects.insert_one(ai_tools_project)
    print("✅ AI Tools Directory added to database!")

# Verify it was added
print("\n📁 Updated project list:")
for project in db.projects.find():
    print(f"   - {project.get('title')} → {project.get('live_demo')}")