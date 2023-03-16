from flask import Flask, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)
url = "https://us-states.p.rapidapi.com/basic"

headers = {
	"X-RapidAPI-Key": "864d16a6b7msh7cc3676adcedaf6p137a5ejsn4f8c5e3e5253",
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
