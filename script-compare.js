const aerisEndpoint = "https://aeris-framework.onrender.com/v1/chat/completions";
const baselineEndpoint = "https://aeris-framework.onrender.com/v1/chat/baseline";

const headers = {
  "Content-Type": "application/json"
};

async function runComparison() {
  const input = document.getElementById("compare-input").value.trim();
  if (!input) return;

  document.getElementById("baseline-window").innerHTML = "<em>Loading…</em>";
  document.getElementById("aeris-window").innerHTML = "<em>Thinking…</em>";

  try {
    const baselineResponse = await fetch(baselineEndpoint, {
      method: "POST",
      headers,
      body: JSON.stringify({
        model: "google/gemma-3-27b-it",
        temperature: 1.0,
        max_tokens: 800,
        messages: [{ role: "user", content: input }]
      })
    });
    const baseline = await baselineResponse.json();
    document.getElementById("baseline-window").innerHTML = baselineResponse.ok 
      ? (baseline.choices?.[0]?.message?.content || "No response.") 
      : `Error: ${baseline.detail || 'Failed to fetch baseline response.'}`;
  } catch (error) {
    document.getElementById("baseline-window").innerHTML = `Error: ${error.message}`;
  }

  try {
    const enrichedResponse = await fetch(aerisEndpoint, {
      method: "POST",
      headers,
      body: JSON.stringify({
        model: "google/gemma-3-27b-it",
        temperature: 1.0,
        max_tokens: 800,
        messages: [
          { role: "system", content: "You are AERIS, a dialectical reasoning assistant." },
          { role: "user", content: input }
        ]
      })
    });
    const enriched = await enrichedResponse.json();
    document.getElementById("aeris-window").innerHTML = enrichedResponse.ok 
      ? (enriched.choices?.[0]?.message?.content || "No response.") 
      : `Error: ${enriched.detail || 'Failed to fetch AERIS response.'}`;
  } catch (error) {
    document.getElementById("aeris-window").innerHTML = `Error: ${error.message}`;
  }
}
