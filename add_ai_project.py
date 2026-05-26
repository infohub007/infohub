# add_ai_project.py
from database.db import get_db
from datetime import datetime

db = get_db()

# Check if already exists
existing = db.projects.find_one({'title': 'AI Tools Directory'})

if not existing:
    ai_tools_project = {
        'title': 'AI Tools Directory',
        'short_desc': 'Discover 1000+ AI tools across 25+ categories. Search, filter, and find the best AI solutions.',
        'long_desc': 'A comprehensive directory of artificial intelligence tools featuring 1000+ tools across 25+ categories including Video, Text, Image, Audio, Code, Marketing, Productivity, and more. Each tool includes name, description, pricing, and direct link to the tool website.',
        'image_url': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
        'github_link': '',
        'live_demo': '/projects/ai-tools/index.html',
        'category': 'AI Tools',
        'technologies': ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'AI Integration'],
        'date_added': datetime.now().strftime('%Y-%m-%d')
    }
    
    db.projects.insert_one(ai_tools_project)
    print("✅ AI Tools Directory added to your portfolio!")
else:
    print("⚠️ AI Tools Directory already exists in portfolio")

# Show all projects
print("\n📁 Your portfolio projects:")
for project in db.projects.find():
    print(f"   - {project['title']}")