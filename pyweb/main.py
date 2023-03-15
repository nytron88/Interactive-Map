from flask import Flask, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)
url = "https://us-states.p.rapidapi.com/basic"

headers = {
    "X-RapidAPI-Key": "e3d3886ad3msh3f79822ba08a235p139b2cjsnbfb548c8c822",
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
