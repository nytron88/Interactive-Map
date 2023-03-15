from flask import Flask, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)
url = "https://us-states.p.rapidapi.com/basic"

headers = {
    "X-RapidAPI-Key": "d7ecfc7cd0msh92a5f54c9c75918p105c8cjsnf45d6db3f185",
    "X-RapidAPI-Host": "us-states.p.rapidapi.com"
}


@app.route("/<state_name>", methods=["GET", "POST"])
def state(state_name):
    responses = requests.request("GET", url, headers=headers)
    for state_details in responses.json():
        if state_details["name"] == state_name:
            return jsonify(state_details)


if __name__ == '__main__':
    app.run(debug=True)
