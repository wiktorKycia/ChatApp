from flask import Flask, request, jsonify
from flask_socketio import SocketIO, emit

app = Flask(__name__)
app.config["SECRET_KEY"] = "secret!"
socketio = SocketIO(app, cors_allowed_origins="*")

username_list = []
messages_list = [
    {
        "author": "admin",
        "text": "Hello World!",
        "date": "2022-01-01 00:00:00"
    }
]

@app.route("/checkIn", methods=["POST"])
def checkIn():
    data = request.json
    user = data.get("username")
    if user not in username_list:
        username_list.append(user)
        return jsonify({"message": "success"})
    else:
        return jsonify({"message": "fail"})

@app.route("/getMessages", methods=["GET"])
def getMessages():
    return jsonify({"status": "success", "messages": messages_list})

@app.route("/message", methods=["POST"])
def message():
    data = request.json
    messages_list.append(data)
    socketio.emit('update_messages', {'messages': messages_list})
    return jsonify({"messages": messages_list})

if __name__ == "__main__":
    app.run(debug=True)