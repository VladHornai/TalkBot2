from flask import Flask, jsonify, request
from io import BytesIO
from flask_cors import CORS
from transformers import pipeline
from numpy import fromfile
import _io

app = Flask(__name__)
CORS(app)

def audio_from_file(file):
    return processing_utils.audio_from_file(file)

pipe = pipeline(model="VladHornai/whisper-small-ro") 

def transcribe(audio):
    print("before pipe", len(audio))
    text = pipe(audio)["text"]
    print("after pipe")
    return text

@app.route('/profile', methods=['POST'])
def upload_file():
    """Handles the upload of a file."""
    d = {}
    try:
        file = request.files['file_from_react']
        text = transcribe(file.stream._file.getbuffer().tobytes())

        d['status'] = 1
        d['result'] = text

    except Exception as e:
        print(f"Couldn't upload file {type(e), str(e)}")
        d['status'] = 0

    return jsonify(d)


if __name__ == '__main__':
    app.run(debug=True)

