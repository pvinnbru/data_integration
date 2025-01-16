from flask import Blueprint, jsonify, request
from ..models import Animal
from ..extensions import db

animals_bp = Blueprint('animals_bp', __name__)

@animals_bp.route('/', methods=['GET'])
def get_all_animals():
    animals = Animal.query.order_by("name").all()
    return jsonify([{
        'id': animal.id,
        'name': animal.name,
        'image_url': animal.image_url
    } for animal in animals])

@animals_bp.route('/<int:id>', methods=['GET'])
def get_animal(id):
    animal = Animal.query.get_or_404(id)
    return jsonify({
        'id': animal.id,
        'name': animal.name,
        'image_url': animal.image_url
    })

@animals_bp.route('/', methods=['POST'])
def create_animal():
    data = request.get_json()
    new_animal = Animal(
        name=data['name'],
        image_url=data.get('image_url')
    )
    db.session.add(new_animal)
    db.session.commit()
    return jsonify({'message': 'Animal created'}), 201
