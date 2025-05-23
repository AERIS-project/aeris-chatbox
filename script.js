const endpoint = "https://aeris-framework.onrender.com/v1/chat/completions";

const chatWindow = document.getElementById("chat-window");
const userInput = document.getElementById("user-input");

function appendMessage(role, text) {
  const message = document.createElement("div");
  message.className = "message " + (role === "You" ? "user" : "aeris");
  message.innerHTML = `<strong>${role}:</strong> ${text}`;
  chatWindow.appendChild(message);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

async function sendMessage() {
  const input = userInput.value.trim();
  if (!input) return;

  appendMessage("You", input);
  userInput.value = "";

  appendMessage("AERIS", "<em>thinking…</em>");

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "google/gemma-3-27b-it",
      messages: [
        { role: "system", content: "You are AERIS, a dialectical reasoning assistant." },
        { role: "user", content: input }
      ]
    })
  });

  const data = await response.json();
  const message = data.choices?.[0]?.message?.content || "Error: no response.";
  
  chatWindow.lastChild.remove(); // remove thinking…
  appendMessage("AERIS", message);
}

function clearChat() {
  chatWindow.innerHTML = "";
}
