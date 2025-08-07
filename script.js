const endpoint = "https://aeris-framework.onrender.com/v1/chat/completions";

const chatWindow = document.getElementById("chat-window");
const userInput = document.getElementById("user-input");

function parseBasicMarkdown(text) {
    const mathBlocks = [];
    let protectedText = text.replace(/\\\((.*?)\\\)/g, (match, content) => {
        mathBlocks.push(content);
        return `__MATH_BLOCK_${mathBlocks.length - 1}__`;
    });

    let html = protectedText.replace(/\n/g, '<br>');

    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/__([^_]+)__/g, '<strong>$1</strong>');
    html = html.replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, '<em>$1</em>');
    html = html.replace(/(?<!_)_([^_]+)_(?!_)/g, '<em>$1</em>');

    html = html.replace(/^[\-\*]\s+(.+)$/gm, '• $1');
    html = html.replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>');

    html = html.replace(/^###\s+(.+)$/gm, '<h3>$1</h3>');
    html = html.replace(/^##\s+(.+)$/gm, '<h2>$1</h2>');
    html = html.replace(/^#\s+(.+)$/gm, '<h1>$1</h1>');

    html = html.replace(/__MATH_BLOCK_(\d+)__/g, (match, index) => {
        return `<code class="math-formula">\\(${mathBlocks[index]}\\)</code>`;
    });
    
    return html;
}

function appendMessage(role, text) {
  const message = document.createElement("div");
  message.className = "message " + (role === "You" ? "user" : "aeris");
  
  if (role === "You") {
    message.innerHTML = `<strong>${role}:</strong> ${text}`;
  } else {
    
    const strongEl = document.createElement("strong");
    strongEl.textContent = role + ":";
    
    const textSpan = document.createElement("span");

    textSpan.innerHTML = parseBasicMarkdown(text);
    
    const copyBtn = document.createElement("button");
    copyBtn.className = "copy-button";
    copyBtn.textContent = "Copy";
    copyBtn.onclick = function() {

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

  const thinkingMessage = document.createElement("div");
  thinkingMessage.className = "message aeris";
  thinkingMessage.innerHTML = `<strong>AERIS:</strong> <em>Thinking</em><span class="typing-indicator"></span>`;
  chatWindow.appendChild(thinkingMessage);
  chatWindow.scrollTop = chatWindow.scrollHeight;
  
  
  const dotsElement = thinkingMessage.querySelector('.typing-indicator');
  let dots = 0;
  const dotsInterval = setInterval(() => {
    dots = (dots + 1) % 4;
    dotsElement.textContent = '.'.repeat(dots);
  }, 1000);
  
  dotsElement.dataset.intervalId = dotsInterval;

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
    
   
    const endTime = Date.now();
    const responseTime = ((endTime - startTime) / 1000).toFixed(1);
    
    
    const lastMessage = chatWindow.lastChild;
    const dotsElement = lastMessage.querySelector('.typing-indicator');
    if (dotsElement && dotsElement.dataset.intervalId) {
      clearInterval(dotsElement.dataset.intervalId);
    }
    
    chatWindow.lastChild.remove(); 
    appendMessageWithTime("AERIS", message, responseTime);
  } catch (error) {
  
    const lastMessage = chatWindow.lastChild;
    const dotsElement = lastMessage.querySelector('.typing-indicator');
    if (dotsElement && dotsElement.dataset.intervalId) {
      clearInterval(dotsElement.dataset.intervalId);
    }
    
    chatWindow.lastChild.remove(); 
    appendMessage("AERIS", "Error: Failed to connect to the server.");
  }
}


function appendMessageWithTime(role, text, responseTime) {
  const message = document.createElement("div");
  message.className = "message aeris";
  
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

userInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});




