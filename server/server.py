from flask import Flask, request, jsonify

app = Flask(__name__)

username_list = []
messages_list = []

@app.route("/checkIn", methods=["POST"])
def checkIn():
    data = request.json
    if data.username not in username_list:
        username_list.append(data.username)
        return jsonify({"message": "success"})
    else:
        return jsonify({"message": "fail"})

@app.route("/message", methods=["POST"])
def message():
    data = request.json
    messages_list.append(data.message)
    return jsonify({"messages": messages_list})