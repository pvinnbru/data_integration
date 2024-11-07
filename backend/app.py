from flask import Flask, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)

CORS(app, resources={r"/recommendations/*": {"origins": ["http://localhost:3000","https://data-integration-ten.vercel.app"]}})

@app.route('/recommendations/for_you', methods=['GET'])
def get_recommendations_for_you():
    with open('assets/forYou.json', 'r') as file:
        data = json.load(file)
    return jsonify(data), 200

@app.route('/recommendations/popular', methods=['GET'])
def get_recommendations_popular():
    with open('assets/popular.json', 'r') as file:
        data = json.load(file)
    return jsonify(data), 200

if __name__ == '__main__':
    app.run(debug=True)