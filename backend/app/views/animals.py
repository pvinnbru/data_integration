from flask import Blueprint, jsonify, request
from ..models import Animal
from ..extensions import db

animals_bp = Blueprint('animals_bp', __name__)

@animals_bp.route('/', methods=['GET'])
def get_all_animals():
    animals = Animal.query.all()
    return jsonify([{
        'id': animal.id,
        'common_name': animal.common_name
    } for animal in animals])

@animals_bp.route('/<int:id>', methods=['GET'])
def get_animal(id):
    animal = Animal.query.get_or_404(id)
    return jsonify({
        'id': animal.id,
        'common_name': animal.common_name
    })

@animals_bp.route('/', methods=['POST'])
def create_animal():
    data = request.get_json()
    new_animal = Animal(
        common_name=data.get('common_name')
    )
    db.session.add(new_animal)
    db.session.commit()
    return jsonify({'message': 'Animal created'}), 201
