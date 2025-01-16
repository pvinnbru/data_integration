import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()
print(os.getenv('DATABASE_URI'))  # Check if this prints your supabase hurensohn URI

class Config:

    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URI')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = os.getenv('SECRET_KEY','default_secret_key')