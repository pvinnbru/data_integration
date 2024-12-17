from flask import Blueprint, jsonify, request
from ..models import DiveSiteRating, db

ratings_bp = Blueprint('ratings', __name__)

@ratings_bp.route('/<int:site_id>/ratings', methods=['GET'])
def get_all_ratings(site_id):
    ratings = DiveSiteRating.query.filter_by(dive_site_id=site_id).all()
    return jsonify([rating.to_dict() for rating in ratings])

@ratings_bp.route('/<int:site_id>/ratings', methods=['POST'])
def add_rating(site_id):
    data = request.get_json()
    user_id = data.get("user_id")
        # Check if the user has already rated this dive site
    existing_rating = DiveSiteRating.query.filter_by(dive_site_id=site_id, user_id=user_id).first()

    if existing_rating:
        # Update the existing rating
        existing_rating.rating = data.get("rating")
        db.session.commit()
        return jsonify(existing_rating.to_dict()), 200  # Return 200 OK for update
    else:
        # Create a new rating if no existing rating is found
        new_rating = DiveSiteRating(dive_site_id=site_id, **data)
        db.session.add(new_rating)
        db.session.commit()
        return jsonify(new_rating.to_dict()), 201  # Return 201 Created for new entry
