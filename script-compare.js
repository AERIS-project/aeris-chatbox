const aerisEndpoint = "https://aeris-framework.onrender.com/v1/chat/completions";
const baselineEndpoint = "https://aeris-framework.onrender.com/v1/chat/baseline";

const headers = {
  "Content-Type": "application/json"
};

function parseBasicMarkdown(text) {
    const codeBlocks = [];
    const mathBlocks = [];
    
    let protectedText = text.replace(/```[\s\S]*?```/g, (match) => {
        codeBlocks.push(match);
        return `__CODE_BLOCK_${codeBlocks.length - 1}__`;
    });
    
    protectedText = protectedText.replace(/`([^`]+)`/g, (match, content) => {
        codeBlocks.push(content);
        return `__INLINE_CODE_${codeBlocks.length - 1}__`;
    });
    
    protectedText = protectedText.replace(/\\\((.*?)\\\)/g, (match, content) => {
        mathBlocks.push(content);
        return `__MATH_INLINE_${mathBlocks.length - 1}__`;
    });
    
    protectedText = protectedText.replace(/\\\[(.*?)\\\]/g, (match, content) => {
        mathBlocks.push(content);
        return `__MATH_BLOCK_${mathBlocks.length - 1}__`;
    });

    let html = protectedText;
    
    html = html.replace(/^(#{3})\s+([^#\n].*)$/gm, '<h3>$2</h3>');
    html = html.replace(/^(#{2})\s+([^#\n].*)$/gm, '<h2>$2</h2>');
    html = html.replace(/^(#{1})\s+([^#\n].*)$/gm, '<h1>$2</h1>');
    
    html = html.replace(/^\* (.+)$/gm, '• $1');
    html = html.replace(/^- (.+)$/gm, '• $1');
    html = html.replace(/^\d+\. (.+)$/gm, '$1');
    
    html = html.replace(/\*\*([^*]+?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/__([^_]+?)__/g, '<strong>$1</strong>');
    
    html = html.replace(/\*([^*\n]+?)\*/g, '<em>$1</em>');
    html = html.replace(/_([^_\n]+?)_/g, '<em>$1</em>');
    
    html = html.replace(/\n/g, '<br>');
    
    html = html.replace(/__CODE_BLOCK_(\d+)__/g, (match, index) => {
        const code = codeBlocks[index].replace(/```(\w+)?\n?/, '').replace(/```$/, '');
        return `<pre><code class="code-block">${code}</code></pre>`;
    });
    
    html = html.replace(/__INLINE_CODE_(\d+)__/g, (match, index) => {
        return `<code class="inline-code">${codeBlocks[index]}</code>`;
    });
    
    html = html.replace(/__MATH_INLINE_(\d+)__/g, (match, index) => {
        return `<span class="math-formula">\\(${mathBlocks[index]}\\)</span>`;
    });
    
    html = html.replace(/__MATH_BLOCK_(\d+)__/g, (match, index) => {
        return `<div class="math-formula">\\[${mathBlocks[index]}\\]</div>`;
    });
    
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

  
  const loadingHTML = `<em>Loading</em><span class="typing-indicator"><span>.</span><span>.</span><span>.</span></span>`;
  
  const thinkingHTML = `<em>Thinking</em><span class="typing-indicator"><span>.</span><span>.</span><span>.</span></span>`;
  
  document.getElementById("baseline-window").innerHTML = loadingHTML;
  document.getElementById("aeris-window").innerHTML = thinkingHTML;
  
  const baselineStart = Date.now();
  const aerisStart = Date.now();

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
    
    const baselineTime = ((Date.now() - baselineStart) / 1000).toFixed(1);
    
    const baselineWindow = document.getElementById("baseline-window");
    baselineWindow.innerHTML = "";
    const baselineMessage = createCopyButton("baseline-window", baselineContent);
    
    const timeSpan = document.createElement("span");
    timeSpan.className = "response-time";
    timeSpan.textContent = `(${baselineTime}s)`;
    baselineMessage.insertBefore(timeSpan, baselineMessage.firstChild.nextSibling);
    
    baselineWindow.appendChild(baselineMessage);
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
    
    const aerisTime = ((Date.now() - aerisStart) / 1000).toFixed(1);
    
    const aerisWindow = document.getElementById("aeris-window");
    aerisWindow.innerHTML = "";
    const aerisMessage = createCopyButton("aeris-window", enrichedContent);
    
    const timeSpan = document.createElement("span");
    timeSpan.className = "response-time";
    timeSpan.textContent = `(${aerisTime}s)`;
    aerisMessage.insertBefore(timeSpan, aerisMessage.firstChild.nextSibling);
    
    aerisWindow.appendChild(aerisMessage);
  } catch (error) {
    const aerisWindow = document.getElementById("aeris-window");
    aerisWindow.innerHTML = "";
    aerisWindow.appendChild(createCopyButton("aeris-window", `Error: ${error.message}`));
  }
}

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









