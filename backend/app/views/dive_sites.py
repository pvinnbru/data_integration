from flask import Blueprint, jsonify, request
from ..models import DiveSite, Type
from ..extensions import db

dive_sites_bp = Blueprint('dive_sites_bp', __name__)

@dive_sites_bp.route('/', methods=['GET'])
def get_all_dive_sites():
    dive_sites = DiveSite.query.all()
    return jsonify([{
        'id': site.id,
        'title': site.title,
        'description': site.description,
        'rating': site.rating,
        'types': [type.to_dict() for type in site.types],
        'latitude' : site.lat,
        'longitude' : site.long,
        'image_url' : site.image_url
    } for site in dive_sites])

@dive_sites_bp.route('/<int:id>', methods=['GET'])
def get_dive_site(id):
    site = DiveSite.query.get_or_404(id)
    return jsonify({
        'id': site.id,
        'title': site.title,
        'description': site.description,
        'rating': site.rating,
        'latitude' : site.lat,
        'longitude' : site.long,
    })

@dive_sites_bp.route('/', methods=['POST'])
def create_dive_site():
    data = request.get_json()
    new_site = DiveSite(
        title=data['title'],
        lat=data['lat'],
        long=data['long'],
        description=data.get('description',None),
        rating=data.get('rating',None),
        max_depth=data.get('max_depth',None),
        image_url=data.get('image_url',None)
    )
    db.session.add(new_site)
    db.session.commit()
    return jsonify({'message': 'Dive site created'}), 201

# Route to relate a type to a dive site
@dive_sites_bp.route('/<int:id>/types', methods=['POST'])
def add_type_to_dive_site(id):
    data = request.get_json()
    site = DiveSite.query.get_or_404(id)
    type = Type.query.get_or_404(data['type_id'])

    if type in site.types:
        return jsonify({'message': 'Type already added to dive site'}), 400

    site.types.append(type)
    db.session.commit()

    return jsonify({'message': 'Type added to dive site'}), 201
