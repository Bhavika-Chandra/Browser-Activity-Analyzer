from flask import Flask, request, jsonify
import joblib
import pandas as pd

app = Flask(__name__)
model = joblib.load("anomaly_model.pkl")

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    hour = pd.to_datetime(data['time']).hour
    domain_len = len(data['url'].split('/')[2])

    features = pd.DataFrame([[hour, domain_len]], columns=['hour', 'domain_length'])
    pred = model.predict(features)[0]

    return jsonify({'anomaly': int(pred == -1)})

if __name__ == '__main__':
    app.run(port=5000)
