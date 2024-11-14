from flask import Blueprint, jsonify, request
from ..models import DiveSiteCategory, db

dive_site_categories_bp = Blueprint('dive_sites_categories_bp', __name__)

@dive_site_categories_bp.route('/', methods=['GET'])
def get_all_categories():
    categories = DiveSiteCategory.query.all()
    return jsonify([category.to_dict() for category in categories])

@dive_site_categories_bp.route('/', methods=['POST'])
def create_category():
    data = request.get_json()
    new_category = DiveSiteCategory(name=data['category_name'])
    db.session.add(new_category)
    db.session.commit()
    return jsonify({'message':'Category created'}), 201
