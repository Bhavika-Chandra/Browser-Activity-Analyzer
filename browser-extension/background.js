chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete" && tab.url.startsWith("http")) {
      const visitData = {
        url: tab.url,
        title: tab.title,
        time: new Date().toISOString()
      };
      predictAnomaly(visitData);

      chrome.storage.local.get({ visits: [] }, (result) => {
        let visits = result.visits;
        visits.push(visitData);
        chrome.storage.local.set({ visits });
      });
    }
  });
function predictAnomaly(visitData) {
  fetch('http://127.0.0.1:5000/predict', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(visitData)
  })
  .then(response => response.json())
  .then(result => {
      if (result.anomaly) {
          console.log("⚠️ Anomaly detected:", visitData.url);
          alert(`Warning! Suspicious site detected: ${visitData.url}`);
      } else {
          console.log("✅ Normal visit:", visitData.url);
      }
  })
  .catch(error => console.error('Error connecting to server:', error));
}

// Call it after capturing a tab
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url.startsWith("http")) {
    const visitData = {
      url: tab.url,
      title: tab.title,
      time: new Date().toISOString()
    };
    predictAnomaly(visitData);
  }
});
  