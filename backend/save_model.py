# save_model.py
import pandas as pd
from sklearn.ensemble import IsolationForest
import joblib

# Example dataset (you can load from 'visits.json' instead)
df = pd.read_json("C:/Users/luckn/Documents/Browser-Activity-Analyzer/dataset/visits.json")
df['hour'] = pd.to_datetime(df['time']).dt.hour
df['domain'] = df['url'].apply(lambda x: x.split('/')[2])
df['domain_length'] = df['domain'].apply(len)
X = df[['hour', 'domain_length']]

# Train model
model = IsolationForest(contamination=0.1)
model.fit(X)

# Save model
joblib.dump(model, "anomaly_model.pkl")
print("✅ Model saved as anomaly_model.pkl")
