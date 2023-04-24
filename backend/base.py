from flask import Flask, jsonify, request
from io import BytesIO
from flask_cors import CORS
from transformers import pipeline
from numpy import fromfile
import processing_utils
import _io

app = Flask(__name__)
CORS(app)

# @app.route('/profile', methods=['GET'])
# def my_profile():
#     response_body = {
#         "name": "Vlad",
#         "about":"Hello! This is the begining of disertation thesis"
#     }

#     return response_body


def audio_from_file(file):
    return processing_utils.audio_from_file(file)

pipe = pipeline(model="VladHornai/whisper-small-ro") 
print("type is: ", type(pipe))

def transcribe(audio):
    print("before pipe", len(audio))
    text = pipe(audio)["text"]
    print("after pipe")
    return text

def save_to_file(filename, filestorage):
    with open(filename, 'wb') as file:
        file.write(filestorage.getbuffer().tobytes())


@app.route('/profile', methods=['POST'])
def upload_file():
    """Handles the upload of a file."""
    d = {}
    try:
        file = request.files['file_from_react']
        filename = '/home/vlad/TalkBot2/2.ogg'
        save_to_file(filename, file.stream._file)
         
        print(f"Uploading file {filename}")
        text = transcribe(filename)

        d['status'] = 1
        d['result'] = text

    except Exception as e:
        print(f"Couldn't upload file {type(e), str(e)}")
        d['status'] = 0

    return jsonify(d)


if __name__ == '__main__':
    app.run(debug=True)

