from flask import Blueprint, jsonify, request
from ..models import DiveSite, DiveSiteCategory
from ..extensions import db
from sqlalchemy import func

dive_sites_bp = Blueprint('dive_sites_bp', __name__)

@dive_sites_bp.route('/', methods=['GET'])
def get_all_dive_sites():
    dive_sites = DiveSite.query.order_by(func.random()).limit(500).all()
    return jsonify([{
        'id': site.id,
        'title': site.title,
        'latitude' : site.lat,
        'longitude' : site.long,
    } for site in dive_sites])
    
# get 10 random dive sites
@dive_sites_bp.route('/random', methods=['GET'])
def get_random_dive_sites():
    dive_sites = DiveSite.query.order_by(func.random()).limit(10).all()
    return jsonify([{
        'id': site.id,
        'title': site.title,
        'description': site.description,
        'categories': [category.to_dict() for category in site.categories],
        'latitude' : site.lat,
        'longitude' : site.long,
        'image_url' : site.image_url,
        'region' : site.region,
    } for site in dive_sites])


@dive_sites_bp.route('/<int:id>', methods=['GET'])
def get_dive_site(id):
    site = DiveSite.query.get_or_404(id)
    return jsonify({
        'id': site.id,
        'title': site.title,
        'description': site.description,
        'latitude' : site.lat,
        'longitude' : site.long,
        'categories': [category.to_dict() for category in site.categories],
        'animals': [occurrence.animal.to_dict() for occurrence in site.occurrences],
        'image_url' : site.image_url,
        'region' : site.region,
    })

@dive_sites_bp.route('/', methods=['POST'])
def create_dive_site():
    data = request.get_json()
    new_site = DiveSite(
        title=data['title'],
        lat=data['lat'],
        long=data['long'],
        url = data.get('url'),
        image_url=data.get('image_url'),
        description=data.get('description',None),
        max_depth=data.get('max_depth',None),
    )
    db.session.add(new_site)
    db.session.commit()
    return jsonify({'message': 'Dive site created'}), 201

# Route to relate a category to a dive site
@dive_sites_bp.route('/<int:id>/categories', methods=['POST'])
def add_category_to_dive_site(id):
    data = request.get_json()
    site = DiveSite.query.get_or_404(id)
    category = DiveSiteCategory.query.get_or_404(data['dive_site_category_id'])

    if category in site.categories:
        return jsonify({'message': 'Category already added to dive site'}), 400

    site.categories.append(category)
    db.session.commit()

    return jsonify({'message': 'Category added to dive site'}), 201

# Recommendations