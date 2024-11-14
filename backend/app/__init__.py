from flask import Flask
from config import Config
from .extensions import db	
from .views import register_blueprints
from flask_cors import CORS
from flask_migrate import Migrate

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)


    # Initialize extensions
    db.init_app(app)
    CORS(app)

    # Initialize Flask-Migrate
    migrate = Migrate(app, db)  # Add this line

    # Register blueprints
    register_blueprints(app)

    return app