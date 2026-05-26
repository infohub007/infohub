# update_profile.py - Edit these values as needed
from database.db import get_db

db = get_db()

# 👇 EDIT THESE VALUES 👇
result = db.users.update_one(
    {'email': 'infohub.net.in@gmail.com'},
    {'$set': {
        'name': 'Niranjan',           # Change your name
        'phone': '+91 7418203404',     # Change phone number
        'bio': 'Your new bio here...',  # Change your bio
        'location': 'India',            # Change location
        'github': 'https://github.com/yourusername',  # Your GitHub URL
        'linkedin': 'https://linkedin.com/in/yourusername',  # Your LinkedIn
        'website': 'https://yourwebsite.com',  # Your website
        'skills': ['Python', 'Flask', 'MongoDB', 'React', 'AI/ML'],  # Your skills
    }}
)
# 👆 EDIT THESE VALUES 👆

if result.modified_count > 0:
    print("✅ Profile updated successfully!")
else:
    print("⚠️ No changes made or user not found")