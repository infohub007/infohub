from pymongo import MongoClient
from dotenv import load_dotenv
import os

import certifi

load_dotenv()

mongo_uri = os.getenv("MONGO_URI")

try:
    client = MongoClient(mongo_uri, tlsCAFile=certifi.where())

    db = client["infohub"]

    print("MongoDB Connected Successfully!")
    print("Database:", db.name)
    print("Attempting to list collection names to trigger connection...")
    print("Collections:", db.list_collection_names())

except Exception as e:
    print("Error during network operation:")
    import traceback
    traceback.print_exc()