from flask import Blueprint, jsonify, request
from ..models import Type, db

types_bp = Blueprint('types', __name__)

@types_bp.route('/', methods=['GET'])
def get_all_types():
    types = Type.query.all()
    return jsonify([type.to_dict() for type in types])

@types_bp.route('/', methods=['POST'])
def create_type():
    data = request.get_json()
    new_type = Type(type_name=data['type_name'])
    db.session.add(new_type)
    db.session.commit()
    return jsonify({'message':'Type created'}), 201
