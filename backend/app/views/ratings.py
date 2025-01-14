from flask import Blueprint, jsonify, request
from ..models import DiveSiteRating, db

ratings_bp = Blueprint('ratings', __name__)

@ratings_bp.route('/<int:site_id>/ratings', methods=['GET'])
def get_all_ratings(site_id):
    # Get all ratings in the database in a dictionary with the keys from 1 to 5

    # Only get the ratings filds from the database
    ratings = DiveSiteRating.query.filter_by(dive_site_id=site_id).all()
    rating_dict = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0}

    for rating in ratings:
        rating_dict[rating.rating] += 1

    return jsonify(rating_dict), 200

@ratings_bp.route('/<int:site_id>/ratings/<user_id>', methods=['GET'])
def get_rating_by_user(site_id,user_id):

    rating = DiveSiteRating.query.filter_by(dive_site_id=site_id, user_id=user_id).first()

    # If no rating exists, return a null value for the rating
    rating_value = rating.rating if rating else None

    # Return the response
    return jsonify({"rating": rating_value}), 200


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
        new_rating = DiveSiteRating(dive_site_id=site_id, user_id=user_id,
            rating=data.get("rating"))
        print(new_rating)
        db.session.add(new_rating)
        db.session.commit()
        return jsonify(new_rating.to_dict()), 201  # Return 201 Created for new entry
    
'''
Little bug from autoincrements. How to fix it:

SELECT MAX(id) FROM dive_site_rating;
SELECT last_value FROM dive_site_rating_id_seq;
SELECT setval('dive_site_rating_id_seq', 19 + 1);


'''
