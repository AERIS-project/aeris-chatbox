const aerisEndpoint = "https://aeris-framework.onrender.com/v1/chat/completions";
const baselineEndpoint = "https://aeris-framework.onrender.com/v1/chat/baseline";

const headers = {
  "Content-Type": "application/json"
};

async function runComparison() {
  const input = document.getElementById("compare-input").value.trim();
  if (!input) return;

  // Clean outputs
  document.getElementById("baseline-window").innerHTML = "<em>Loading…</em>";
  document.getElementById("aeris-window").innerHTML = "<em>Thinking…</em>";

  // Baseline request (sans AERIS)
  const baseline = await fetch(baselineEndpoint, {
    method: "POST",
    headers,
    body: JSON.stringify({
      model: "google/gemma-3-27b-it",
      temperature: 1.0,
      max_tokens: 800,
      messages: [{ role: "user", content: input }]
    })
  }).then(r => r.json());

  const raw = baseline.choices?.[0]?.message?.content || "No response.";
  document.getElementById("baseline-window").innerHTML = raw;

  // AERIS request
  const enriched = await fetch(aerisEndpoint, {
    method: "POST",
    headers,
    body: JSON.stringify({
      model: "gpt-4", // ou "google/gemma-3-27b-it" si AERIS tourne dessus
      temperature: 1.0,
      max_tokens: 800,
      messages: [
        { role: "system", content: "You are AERIS, a dialectical reasoning assistant." },
        { role: "user", content: input }
      ]
    })
  }).then(r => r.json());

  const response = enriched.choices?.[0]?.message?.content || "No response.";
  document.getElementById("aeris-window").innerHTML = response;
}
