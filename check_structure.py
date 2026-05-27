# check_structure.py
import os

print("="*50)
print("📁 Checking Project Structure")
print("="*50)

# Check current directory
print(f"\n📍 Current directory: {os.getcwd()}")

# Check projects folder
print(f"\n📂 'projects' folder exists: {os.path.exists('projects')}")

if os.path.exists('projects'):
    print("\n📁 Contents of 'projects' folder:")
    for item in os.listdir('projects'):
        item_path = os.path.join('projects', item)
        if os.path.isdir(item_path):
            print(f"   📁 {item}/")
            # Check contents of each subfolder
            for subitem in os.listdir(item_path):
                print(f"      📄 {subitem}")
        else:
            print(f"   📄 {item}")

# Specifically check ai_tools folder
print(f"\n🤖 'projects/ai_tools' exists: {os.path.exists('projects/ai_tools')}")

if os.path.exists('projects/ai_tools'):
    print("\n📁 Contents of 'projects/ai_tools':")
    for item in os.listdir('projects/ai_tools'):
        item_path = os.path.join('projects/ai_tools', item)
        if os.path.isdir(item_path):
            print(f"   📁 {item}/")
            for subitem in os.listdir(item_path):
                print(f"      📄 {subitem}")
        else:
            print(f"   📄 {item}")
else:
    print("\n❌ 'projects/ai_tools' folder not found!")

# Check database for AI Tools project
print("\n" + "="*50)
print("🗄️ Checking Database")
print("="*50)

try:
    from database.db import get_db
    db = get_db()
    
    ai_project = db.projects.find_one({'title': 'AI Tools Directory'})
    if ai_project:
        print(f"\n✅ AI Tools Directory found in database")
        print(f"   Live Demo: {ai_project.get('live_demo')}")
        print(f"   Category: {ai_project.get('category')}")
    else:
        print("\n❌ AI Tools Directory NOT found in database")
        
    print("\n📋 All projects in database:")
    for project in db.projects.find():
        print(f"   - {project.get('title')} → {project.get('live_demo')}")
        
except Exception as e:
    print(f"❌ Database error: {e}")