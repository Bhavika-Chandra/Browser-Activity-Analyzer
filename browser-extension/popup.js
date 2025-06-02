chrome.storage.local.get("visits", (data) => {
    const visits = data.visits || [];
    const list = document.getElementById("visitList");

    let normal = 0;
    let anomalies = 0;
  
    visits.slice(-10).reverse().forEach((visit) => {
      const li = document.createElement("li");
      li.textContent = `${visit.title} - ${new Date(visit.time).toLocaleTimeString()}`;
      
      if (visit.anomaly) {
        li.style.color = "red";
        li.textContent += " (⚠️ Anomaly)";
        anomalies++;
      } else {
        li.style.color = "green";
        li.textContent += " (✅ Safe)";
        normal++;
      }

      list.appendChild(li);
    });
    if (anomalies === 0) {
        const note = document.createElement("p");
        note.textContent = "✅ No anomalies detected in recent browsing.";
        note.style.color = "green";
        list.appendChild(note);
      }
    console.log("Normal:", normal);
    console.log("Anomalies:", anomalies);
    console.log("Chart element:", document.getElementById('myChart'));
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Normal', 'Anomalies'],
        datasets: [{
          label: 'Threat Summary',
          data: [normal, anomalies],
          backgroundColor: ['#36A2EB', '#FF6384']
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          }
        }
      }
    });
});
  