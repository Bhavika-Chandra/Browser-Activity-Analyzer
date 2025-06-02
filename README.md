# 🔐 Personalized Browser Activity Analyzer

A Chrome extension + Flask-based adaptive cybersecurity tool that monitors user browsing behavior in real time, detects anomalies using machine learning, and visualizes browsing trends through a dashboard interface.

---

## 🚀 Project Overview

Cyber threats are constantly evolving. Static blacklists and fixed-rule systems are no longer sufficient. This project introduces an **adaptive cybersecurity solution** that:

- 📊 Analyzes browsing patterns
- 🤖 Detects abnormal activity using an unsupervised ML model (Isolation Forest)
- 🛡️ Alerts users of potential threats
- 📈 Visualizes threat summaries with an interactive dashboard

---

## 🔧 Technologies Used

| Layer | Tech |
|-------|------|
| 🧠 Machine Learning | Python, Scikit-learn, Isolation Forest |
| 🧩 Backend API | Flask |
| 🌐 Browser Extension | Chrome Extension (Manifest V3), JavaScript |
| 📊 Visualization | Chart.js |
| 🗃️ Data Storage | `chrome.storage.local`, JSON |

---

## 📁 Folder Structure

Browser-Activity-Analyzer/
├── backend/
│ ├── server.py # Flask API for ML prediction
│ ├── anomaly_model.pkl # Trained Isolation Forest model
│ └── save_model.py # Script to train and save model
├── browser-extension/
│ ├── manifest.json
│ ├── popup.html
│ ├── popup.js
│ ├── background.js
│ ├── chart.min.js
│ ├── style.css
├── dataset/
│ ├── visits.json
├── model/
│ ├── train_model.py


---

## ⚙️ Setup Instructions

🔹 1. Train the ML Model
In cmd/bash
-cd backend
-python save_model.py
This will generate anomaly_model.pkl using the data in visits.json.

🔹 2. Run the Flask Server
In bash/cmd
-python server.py
Server will run at http://127.0.0.1:5000/

🔹 3. Load the Chrome Extension
-Open Chrome → go to chrome://extensions
-Enable Developer Mode
-Click Load Unpacked
-Select the extension/ folder

🧪 How It Works
1. The extension monitors user browsing activity in real time.
2. Each visit (URL + time) is sent to the Flask API for anomaly detection.
3. The ML model flags unusual behavior (e.g., suspicious domains, late-night visits).
4. Detected anomalies are stored and visualized in the popup dashboard.
5. Pie charts show the ratio of normal vs anomalous activity.

✅ Features
✔️ Real-time anomaly detection
✔️ Lightweight and privacy-friendly
✔️ Adaptive behavior modeling (no pre-defined blacklist)
✔️ Visual analytics in extension popup

👨‍💻 Author
Name: BHAVIKA CHANDRA
GitHub: github.com/bhavika-chandra
Project Type: Academic / Research-Based Cybersecurity Tool
