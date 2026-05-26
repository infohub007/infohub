# database/db.py
from pymongo import MongoClient
import os
from dotenv import load_dotenv
import certifi

load_dotenv()

client = None
db = None

def init_db():
    global client, db
    mongo_uri = os.getenv('MONGO_URI')
    
    if not mongo_uri:
        raise ValueError("MONGO_URI not found in environment variables")
    
    print("Connecting to MongoDB Atlas...")
    
    try:
        # For Render deployment - using certifi for SSL
        client = MongoClient(
            mongo_uri,
            tls=True,
            tlsCAFile=certifi.where(),
            serverSelectionTimeoutMS=10000
        )
        # Test connection
        client.admin.command('ping')
        db = client.get_database()
        print("✅ Connected to MongoDB Atlas successfully!")
        return db
    except Exception as e:
        print(f"❌ Connection failed: {e}")
        print("Attempting without custom SSL...")
        try:
            client = MongoClient(mongo_uri, serverSelectionTimeoutMS=10000)
            client.admin.command('ping')
            db = client.get_database()
            print("✅ Connected to MongoDB Atlas successfully (fallback mode)!")
            return db
        except Exception as e2:
            print(f"❌ Both connection attempts failed: {e2}")
            raise e

def get_db():
    global db
    if db is None:
        init_db()
    return db

def close_db():
    global client
    if client:
        client.close()