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

  // Créer l'indicateur de typing avec animation JavaScript
  const thinkingMessage = document.createElement("div");
  thinkingMessage.className = "message aeris";
  thinkingMessage.innerHTML = `<strong>AERIS:</strong> <em>Thinking</em><span class="typing-indicator"></span>`;
  chatWindow.appendChild(thinkingMessage);
  chatWindow.scrollTop = chatWindow.scrollHeight;
  
  // Animation des points
  const dotsElement = thinkingMessage.querySelector('.typing-indicator');
  let dots = 0;
  const dotsInterval = setInterval(() => {
    dots = (dots + 1) % 4;
    dotsElement.textContent = '.'.repeat(dots);
  }, 1000); // Change toutes les secondes
  
  // Stocker l'interval pour pouvoir l'arrêter plus tard
  dotsElement.dataset.intervalId = dotsInterval;

  // Enregistrer le temps de début
  const startTime = Date.now();

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
    
    // Calculer le temps de réponse
    const endTime = Date.now();
    const responseTime = ((endTime - startTime) / 1000).toFixed(1);
    
    // Arrêter l'animation des points
    const lastMessage = chatWindow.lastChild;
    const dotsElement = lastMessage.querySelector('.typing-indicator');
    if (dotsElement && dotsElement.dataset.intervalId) {
      clearInterval(dotsElement.dataset.intervalId);
    }
    
    chatWindow.lastChild.remove(); // remove typing indicator
    appendMessageWithTime("AERIS", message, responseTime);
  } catch (error) {
    // Arrêter l'animation des points en cas d'erreur
    const lastMessage = chatWindow.lastChild;
    const dotsElement = lastMessage.querySelector('.typing-indicator');
    if (dotsElement && dotsElement.dataset.intervalId) {
      clearInterval(dotsElement.dataset.intervalId);
    }
    
    chatWindow.lastChild.remove(); // remove typing indicator
    appendMessage("AERIS", "Error: Failed to connect to the server.");
  }
}

// Nouvelle fonction pour ajouter un message avec le temps de réponse
function appendMessageWithTime(role, text, responseTime) {
  const message = document.createElement("div");
  message.className = "message aeris";
  
  // Créer la structure avec le bouton et le temps
  const strongEl = document.createElement("strong");
  strongEl.textContent = role + ":";
  
  const timeSpan = document.createElement("span");
  timeSpan.className = "response-time";
  timeSpan.textContent = `(${responseTime}s)`;
  
  const textSpan = document.createElement("span");
  textSpan.innerHTML = parseBasicMarkdown(text);
  
  const copyBtn = document.createElement("button");
  copyBtn.className = "copy-button";
  copyBtn.textContent = "Copy";
  copyBtn.onclick = function() {
    // Extraire le texte pur (sans HTML)
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = text;
    const textContent = tempDiv.textContent || tempDiv.innerText || "";
    
    navigator.clipboard.writeText(textContent).then(() => {
      copyBtn.textContent = "Copied!";
      copyBtn.classList.add("copied");
      
      setTimeout(() => {
        copyBtn.textContent = "Copy";
        copyBtn.classList.remove("copied");
      }, 2000);
    }).catch(err => {
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
  message.appendChild(timeSpan);
  message.appendChild(document.createTextNode(" "));
  message.appendChild(textSpan);
  message.appendChild(copyBtn);
  
  chatWindow.appendChild(message);
  chatWindow.scrollTop = chatWindow.scrollHeight;
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
