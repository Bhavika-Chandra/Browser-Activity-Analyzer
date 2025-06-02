import pandas as pd
from sklearn.ensemble import IsolationForest
from datetime import datetime

# Load data
df = pd.read_json('visits.json')

# Feature Engineering
df['hour'] = pd.to_datetime(df['time']).dt.hour
df['domain'] = df['url'].apply(lambda x: x.split('/')[2])
df['domain_length'] = df['domain'].apply(len)

# Encode domain length + hour
X = df[['hour', 'domain_length']]

# Train Isolation Forest
model = IsolationForest(contamination=0.1)
df['anomaly'] = model.fit_predict(X)

# Save predictions
df.to_csv("annotated_visits.csv", index=False)

# Save model
import joblib
joblib.dump(model, "anomaly_model.pkl")
