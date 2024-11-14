from flask import Flask
from config import Config
from .extensions import db	
from .views import register_blueprints
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # Initialize extensions
    db.init_app(app)
    CORS(app)

    # Register blueprints
    register_blueprints(app)

    return app