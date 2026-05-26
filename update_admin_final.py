# update_admin_final.py
from database.db import get_db
from werkzeug.security import generate_password_hash

db = get_db()

print("\n" + "="*50)
print("[INFO] Updating Admin Login Credentials")
print("="*50)

# Your credentials
admin_email = "infohub.net.in@gmail.com"
admin_password = "infohub@27"

# Generate password hash
hashed_password = generate_password_hash(admin_password)

# Delete any existing admin accounts
result_delete = db.users.delete_many({'is_admin': True})
print(f"Removed {result_delete.deleted_count} old admin account(s)")

# Create new admin account
new_admin = {
    'name': 'InfoHub Admin',
    'email': admin_email,
    'phone': '+0000000000',
    'password': hashed_password,
    'is_admin': True
}

result = db.users.insert_one(new_admin)
print(f"New admin account created!")

# Verify it worked
verify = db.users.find_one({'email': admin_email})
if verify:
    print("\n" + "="*50)
    print("ADMIN CREDENTIALS UPDATED SUCCESSFULLY!")
    print("="*50)
    print(f"Email: {admin_email}")
    print(f"Password: {admin_password}")
    print("="*50)
    print("\nYou can now login at http://localhost:5000/login")
else:
    print("Something went wrong. Please check your database connection.")