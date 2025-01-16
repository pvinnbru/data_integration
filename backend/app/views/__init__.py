# Import blueprints
from .dive_sites import dive_sites_bp
from .users import users_bp
from .animals import animals_bp
from .dive_site_categories import dive_site_categories_bp
from .ratings import ratings_bp
from .recommendations import recommendations_bp

def register_blueprints(app):
    app.register_blueprint(dive_sites_bp, url_prefix='/dive-sites')
    app.register_blueprint(users_bp, url_prefix='/users')
    app.register_blueprint(animals_bp, url_prefix='/animals')
    app.register_blueprint(dive_site_categories_bp, url_prefix='/dive-site-categories')
    app.register_blueprint(ratings_bp, url_prefix='/dive-sites')
    app.register_blueprint(recommendations_bp, url_prefix='/recommendations/')
