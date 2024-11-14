from flask import Blueprint, jsonify, request
from ..models import DiveSiteRating, db

ratings_bp = Blueprint('ratings', __name__)

@ratings_bp.route('/', methods=['GET'])
def get_all_ratings(site_id):
    ratings = DiveSiteRating.query.filter_by(dive_site_id=site_id).all()
    return jsonify([rating.to_dict() for rating in ratings])

@ratings_bp.route('/', methods=['POST'])
def add_rating(site_id):
    data = request.get_json()
    new_rating = DiveSiteRating(dive_site_id=site_id, **data)
    db.session.add(new_rating)
    db.session.commit()
    return jsonify(new_rating.to_dict()), 201
