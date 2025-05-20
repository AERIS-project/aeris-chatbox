const aerisEndpoint = "https://aeris-framework.onrender.com/v1/chat/completions";
const baselineEndpoint = "https://openrouter.ai/api/v1/chat/completions"; // Hypothétique endpoint public brut

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
      model: "google/gemma-27b-it", // ou autre, selon ce que tu veux comparer
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
      model: "gpt-4", // ou "gemma-27b-it" (nom utilisé côté Render)
      messages: [
        { role: "system", content: "You are AERIS, a dialectical reasoning assistant." },
        { role: "user", content: input }
      ]
    })
  }).then(r => r.json());

  const response = enriched.choices?.[0]?.message?.content || "No response.";
  document.getElementById("aeris-window").innerHTML = response;
}
