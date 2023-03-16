from flask import Flask, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)
url = "https://us-states.p.rapidapi.com/basic"

headers = {
	"X-RapidAPI-Key": "4448272141msh8110be6e29cdf9ep1eb0dbjsndcc359f771f8",
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
