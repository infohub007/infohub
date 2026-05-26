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
        # Use certifi to supply the correct CA bundle for secure verification on Windows/Python 3.9
        client = MongoClient(
            mongo_uri, 
            tlsCAFile=certifi.where(),
            serverSelectionTimeoutMS=5000
        )
        db = client.get_database()
        # Test connection
        client.admin.command('ping')
        print("Connected to MongoDB Atlas successfully!")
        return db
    except Exception as e:
        print("\n" + "="*80)
        print("CONNECTION WARNING: Failed to connect to MongoDB Atlas.")
        print("This is most commonly caused by your IP address not being whitelisted.")
        print("To fix this:")
        print("1. Log in to the MongoDB Atlas Dashboard (https://cloud.mongodb.com).")
        print("2. Navigate to Security -> Network Access.")
        print("3. Click 'Add IP Address' and select 'Add Current IP Address' to whitelist your network.")
        print("-" * 80)
        print("Attempting to connect to local MongoDB fallback...")
        print("="*80 + "\n")
        
        try:
            local_uri = os.getenv('LOCAL_MONGO_URI', 'mongodb://localhost:27017/infohub')
            client = MongoClient(
                local_uri,
                serverSelectionTimeoutMS=3000
            )
            db = client.get_database()
            # Test local connection
            client.admin.command('ping')
            print("Connected to local MongoDB fallback successfully!")
            return db
        except Exception as local_e:
            print("Failed to connect to local MongoDB fallback as well.")
            raise local_e

def get_db():
    global db
    if db is None:
        init_db()
    return db

def close_db():
    global client
    if client:
        client.close()