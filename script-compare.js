const aerisEndpoint = "https://aeris-framework.onrender.com/v1/chat/completions";
const baselineEndpoint = "https://aeris-framework.onrender.com/v1/chat/baseline";

const headers = {
  "Content-Type": "application/json"
};

// Fonction pour convertir le markdown basique en HTML
function parseBasicMarkdown(text) {
  // Remplacer les sauts de ligne par des <br>
  let html = text.replace(/\n/g, '<br>');
  
  // Gras: **texte** ou __texte__
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/__([^_]+)__/g, '<strong>$1</strong>');
  
  // Italique: *texte* ou _texte_ (mais pas à l'intérieur de **texte**)
  html = html.replace(/(?<!\*)\*(?!\*)([^*]+)\*(?!\*)/g, '<em>$1</em>');
  html = html.replace(/(?<!_)_(?!_)([^_]+)_(?!_)/g, '<em>$1</em>');
  
  // Listes à puces simples (lignes commençant par - ou *)
  html = html.replace(/^[\-\*]\s+(.+)$/gm, '• $1');
  
  // Code inline: `code`
  html = html.replace(/`([^`]+)`/g, '<code style="background: #2a2a2a; padding: 2px 4px; border-radius: 3px;">$1</code>');
  
  // Titres simples (lignes commençant par #)
  html = html.replace(/^###\s+(.+)$/gm, '<strong style="display: block; margin: 10px 0 5px 0; font-size: 1.1em;">$1</strong>');
  html = html.replace(/^##\s+(.+)$/gm, '<strong style="display: block; margin: 10px 0 5px 0; font-size: 1.2em;">$1</strong>');
  html = html.replace(/^#\s+(.+)$/gm, '<strong style="display: block; margin: 10px 0 5px 0; font-size: 1.3em;">$1</strong>');
  
  return html;
}

function createCopyButton(containerId, content, rawContent) {
  const messageId = 'cmp-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
  const formattedContent = parseBasicMarkdown(content);
  
  const messageDiv = document.createElement("div");
  messageDiv.className = "message aeris";
  messageDiv.style.position = "relative";
  
  const textSpan = document.createElement("span");
  textSpan.id = messageId;
  textSpan.innerHTML = formattedContent;
  
  const copyBtn = document.createElement("button");
  copyBtn.className = "copy-button";
  copyBtn.textContent = "Copy";
  copyBtn.onclick = function() {
    navigator.clipboard.writeText(rawContent || content).then(() => {
      copyBtn.textContent = "Copied!";
      copyBtn.classList.add("copied");
      setTimeout(() => {
        copyBtn.textContent = "Copy";
        copyBtn.classList.remove("copied");
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };
  
  messageDiv.appendChild(textSpan);
  messageDiv.appendChild(copyBtn);
  
  return messageDiv;
}

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
    const baselineContent = baselineResponse.ok 
      ? (baseline.choices?.[0]?.message?.content || "No response.") 
      : `Error: ${baseline.detail || 'Failed to fetch baseline response.'}`;
    
    const baselineWindow = document.getElementById("baseline-window");
    baselineWindow.innerHTML = "";
    baselineWindow.appendChild(createCopyButton("baseline-window", baselineContent));
  } catch (error) {
    const baselineWindow = document.getElementById("baseline-window");
    baselineWindow.innerHTML = "";
    baselineWindow.appendChild(createCopyButton("baseline-window", `Error: ${error.message}`));
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
    const enrichedContent = enrichedResponse.ok 
      ? (enriched.choices?.[0]?.message?.content || "No response.") 
      : `Error: ${enriched.detail || 'Failed to fetch AERIS response.'}`;
    
    const aerisWindow = document.getElementById("aeris-window");
    aerisWindow.innerHTML = "";
    aerisWindow.appendChild(createCopyButton("aeris-window", enrichedContent));
  } catch (error) {
    const aerisWindow = document.getElementById("aeris-window");
    aerisWindow.innerHTML = "";
    aerisWindow.appendChild(createCopyButton("aeris-window", `Error: ${error.message}`));
  }
}

// Permettre l'envoi avec Enter sur la page de comparaison
document.addEventListener("DOMContentLoaded", function() {
  const compareInput = document.getElementById("compare-input");
  if (compareInput) {
    compareInput.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        runComparison();
      }
    });
  }
});
