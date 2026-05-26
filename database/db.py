# database/db.py

from pymongo import MongoClient
import os
from dotenv import load_dotenv
import certifi

# Load environment variables
load_dotenv()

client = None
db = None


def init_db():
    global client, db

    mongo_uri = os.getenv("MONGO_URI")

    if not mongo_uri:
        raise ValueError("❌ MONGO_URI not found in environment variables")

    print("🔄 Connecting to MongoDB Atlas...")

    try:
        # MongoDB Atlas connection
        client = MongoClient(
            mongo_uri,
            tlsCAFile=certifi.where(),
            serverSelectionTimeoutMS=10000
        )

        # Test connection
        client.admin.command("ping")

        # Get database
        db = client.get_database()

        print("✅ Connected to MongoDB Atlas successfully!")

        return db

    except Exception as e:
        print(f"❌ MongoDB Connection Error: {e}")
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
        print("🔒 MongoDB connection closed")