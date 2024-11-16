# Import blueprints
from .dive_sites import dive_sites_bp
from .users import users_bp
from .animals import animals_bp
from .types import types_bp
from .ratings import ratings_bp

def register_blueprints(app):
    app.register_blueprint(dive_sites_bp, url_prefix='/dive-sites')
    app.register_blueprint(users_bp, url_prefix='/users')
    app.register_blueprint(animals_bp, url_prefix='/animals')
    app.register_blueprint(types_bp, url_prefix='/types')
    app.register_blueprint(ratings_bp, url_prefix='/dive-sites/<int:site_id>/ratings')
