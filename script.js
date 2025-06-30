const endpoint = "https://aeris-framework.onrender.com/v1/chat/completions";

const chatWindow = document.getElementById("chat-window");
const userInput = document.getElementById("user-input");

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

function appendMessage(role, text) {
  const message = document.createElement("div");
  message.className = "message " + (role === "You" ? "user" : "aeris");
  
  if (role === "You") {
    message.innerHTML = `<strong>${role}:</strong> ${text}`;
  } else {
    // Pour les messages AERIS, créer la structure avec le bouton
    const strongEl = document.createElement("strong");
    strongEl.textContent = role + ":";
    
    const textSpan = document.createElement("span");
    // Appliquer le formatage markdown au texte
    textSpan.innerHTML = parseBasicMarkdown(text);
    
    const copyBtn = document.createElement("button");
    copyBtn.className = "copy-button";
    copyBtn.textContent = "Copy";
    copyBtn.onclick = function() {
      // Extraire le texte pur (sans HTML)
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = text;
      const textContent = tempDiv.textContent || tempDiv.innerText || "";
      
      // Copier dans le presse-papiers
      navigator.clipboard.writeText(textContent).then(() => {
        copyBtn.textContent = "Copied!";
        copyBtn.classList.add("copied");
        
        setTimeout(() => {
          copyBtn.textContent = "Copy";
          copyBtn.classList.remove("copied");
        }, 2000);
      }).catch(err => {
        // Fallback pour les navigateurs plus anciens
        const textArea = document.createElement("textarea");
        textArea.value = textContent;
        document.body.appendChild(textArea);
        textArea.select();
        try {
          document.execCommand('copy');
          copyBtn.textContent = "Copied!";
          copyBtn.classList.add("copied");
          setTimeout(() => {
            copyBtn.textContent = "Copy";
            copyBtn.classList.remove("copied");
          }, 2000);
        } catch (err) {
          console.error('Failed to copy: ', err);
        }
        document.body.removeChild(textArea);
      });
    };
    
    message.appendChild(strongEl);
    message.appendChild(document.createTextNode(" "));
    message.appendChild(textSpan);
    message.appendChild(copyBtn);
  }
  
  chatWindow.appendChild(message);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

async function sendMessage() {
  const input = userInput.value.trim();
  if (!input) return;

  appendMessage("You", input);
  userInput.value = "";

  appendMessage("AERIS", "<em>thinking…</em>");

  try {
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
  } catch (error) {
    chatWindow.lastChild.remove(); // remove thinking…
    appendMessage("AERIS", "Error: Failed to connect to the server.");
  }
}

function clearChat() {
  chatWindow.innerHTML = "";
}

// Permettre l'envoi avec Enter
userInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});
