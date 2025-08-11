const endpoint = "https://aeris-framework.onrender.com/v1/chat/completions";

const chatWindow = document.getElementById("chat-window");
const userInput = document.getElementById("user-input");

function parseBasicMarkdown(text) {
    const codeBlocks = [];
    const mathBlocks = [];
    
    let protectedText = text.replace(/```[\s\S]*?```/g, (match) => {
        codeBlocks.push(match);
        return `~~~CODEBLOCK${codeBlocks.length - 1}~~~`;
    });
    
    protectedText = protectedText.replace(/`([^`]+)`/g, (match, content) => {
        codeBlocks.push(content);
        return `~~~INLINECODE${codeBlocks.length - 1}~~~`;
    });
    
    protectedText = protectedText.replace(/\\\((.*?)\\\)/g, (match, content) => {
        mathBlocks.push(content);
        return `~~~MATHINLINE${mathBlocks.length - 1}~~~`;
    });
    
    protectedText = protectedText.replace(/\\\[(.*?)\\\]/g, (match, content) => {
        mathBlocks.push(content);
        return `~~~MATHBLOCK${mathBlocks.length - 1}~~~`;
    });

    let html = protectedText;
    
    html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
    html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
    html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');
    
    html = html.replace(/^\* (.+)$/gm, '• $1');
    html = html.replace(/^- (.+)$/gm, '• $1');
    html = html.replace(/^\d+\. (.+)$/gm, '$1');
    
    html = html.replace(/\*\*([^*]+?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/__([^_]+?)__/g, '<strong>$1</strong>');
    
    html = html.replace(/\*([^*\n]+?)\*/g, '<em>$1</em>');
    html = html.replace(/_([^_\n]+?)_/g, '<em>$1</em>');
    
    html = html.replace(/\n/g, '<br>');
    
    html = html.replace(/~~~CODEBLOCK(\d+)~~~/g, (match, index) => {
        const code = codeBlocks[index].replace(/```(\w+)?\n?/, '').replace(/```$/, '');
        return `<pre><code class="code-block">${escapeHtml(code)}</code></pre>`;
    });
    
    html = html.replace(/~~~INLINECODE(\d+)~~~/g, (match, index) => {
        return `<code class="inline-code">${escapeHtml(codeBlocks[index])}</code>`;
    });
    
    html = html.replace(/~~~MATHINLINE(\d+)~~~/g, (match, index) => {
        return `<span class="math-formula">\\(${mathBlocks[index]}\\)</span>`;
    });
    
    html = html.replace(/~~~MATHBLOCK(\d+)~~~/g, (match, index) => {
        return `<div class="math-formula">\\[${mathBlocks[index]}\\]</div>`;
    });
    
    return html;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function typewriterEffect(element, html, callback) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    const textContent = tempDiv.textContent || tempDiv.innerText || '';
    
    if (textContent.length > 500) {
        element.innerHTML = html;
        chatWindow.scrollTop = chatWindow.scrollHeight;
        if (callback) callback();
        return;
    }
    
    element.innerHTML = '';
    let currentIndex = 0;
    let animationId = null;
    
    const typeChar = () => {
        if (currentIndex < html.length) {
            if (html[currentIndex] === '<') {
                const closeIndex = html.indexOf('>', currentIndex);
                if (closeIndex !== -1) {
                    element.innerHTML += html.substring(currentIndex, closeIndex + 1);
                    currentIndex = closeIndex + 1;
                } else {
                    element.innerHTML += html[currentIndex];
                    currentIndex++;
                }
            } else {
                element.innerHTML += html[currentIndex];
                currentIndex++;
            }
            
            animationId = setTimeout(typeChar, 15);
        } else {
            chatWindow.scrollTop = chatWindow.scrollHeight;
            if (callback) callback();
        }
    };
    
    typeChar();
}

function appendMessage(role, text, useTyping = false) {
    const message = document.createElement("div");
    const isBifurcation = text.startsWith('✦');
    message.className = "message " + (role === "You" ? "user" : isBifurcation ? "aeris bifurcation" : "aeris");
    
    if (role === "You") {
        message.innerHTML = `<strong>${role}:</strong> ${escapeHtml(text)}`;
    } else {
        const strongEl = document.createElement("strong");
        strongEl.textContent = role + ":";
        
        const textSpan = document.createElement("span");
        const parsedContent = parseBasicMarkdown(text);
        
        const copyBtn = document.createElement("button");
        copyBtn.className = "copy-button";
        copyBtn.textContent = "Copy";
        copyBtn.onclick = function() {
            copyTextToClipboard(text, copyBtn);
        };
        
        message.appendChild(strongEl);
        message.appendChild(document.createTextNode(" "));
        message.appendChild(textSpan);
        message.appendChild(copyBtn);
        
        chatWindow.appendChild(message);
        chatWindow.scrollTop = chatWindow.scrollHeight;
        
        if (useTyping && text.length < 800) {
            typewriterEffect(textSpan, parsedContent, () => {
                if (typeof MathJax !== 'undefined') {
                    MathJax.typesetPromise([message]).catch((err) => console.log('MathJax error:', err));
                }
            });
        } else {
            textSpan.innerHTML = parsedContent;
            chatWindow.scrollTop = chatWindow.scrollHeight;
            if (typeof MathJax !== 'undefined') {
                MathJax.typesetPromise([message]).catch((err) => console.log('MathJax error:', err));
            }
        }
        
        return;
    }
    
    chatWindow.appendChild(message);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

function copyTextToClipboard(text, button) {
    navigator.clipboard.writeText(text).then(() => {
        button.textContent = "Copied!";
        button.classList.add("copied");
        
        setTimeout(() => {
            button.textContent = "Copy";
            button.classList.remove("copied");
        }, 2000);
    }).catch(err => {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.top = "-9999px";
        document.body.appendChild(textArea);
        textArea.select();
        
        try {
            document.execCommand('copy');
            button.textContent = "Copied!";
            button.classList.add("copied");
            setTimeout(() => {
                button.textContent = "Copy";
                button.classList.remove("copied");
            }, 2000);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
        
        document.body.removeChild(textArea);
    });
}

async function sendMessage() {
    const input = userInput.value.trim();
    if (!input) return;

    appendMessage("You", input);
    userInput.value = "";

    const thinkingMessage = document.createElement("div");
    thinkingMessage.className = "message aeris thinking";
    thinkingMessage.innerHTML = `<strong>AERIS:</strong> <em>Thinking</em><span class="typing-indicator"></span>`;
    chatWindow.appendChild(thinkingMessage);
    chatWindow.scrollTop = chatWindow.scrollHeight;
    
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
        
        chatWindow.removeChild(thinkingMessage);
        
        appendMessageWithTime("AERIS", message, responseTime, true);
    } catch (error) {
        chatWindow.removeChild(thinkingMessage);
        appendMessage("AERIS", "Error: Failed to connect to the server.");
    }
}

function appendMessageWithTime(role, text, responseTime, useTyping = false) {
    const message = document.createElement("div");
    const isBifurcation = text.startsWith('✦');
    message.className = isBifurcation ? "message aeris bifurcation" : "message aeris";
    
    const strongEl = document.createElement("strong");
    strongEl.textContent = role + ":";
    
    const timeSpan = document.createElement("span");
    timeSpan.className = "response-time";
    timeSpan.textContent = `(${responseTime}s)`;
    
    const textSpan = document.createElement("span");
    const parsedContent = parseBasicMarkdown(text);
    
    const copyBtn = document.createElement("button");
    copyBtn.className = "copy-button";
    copyBtn.textContent = "Copy";
    copyBtn.onclick = function() {
        copyTextToClipboard(text, copyBtn);
    };
    
    message.appendChild(strongEl);
    message.appendChild(timeSpan);
    message.appendChild(document.createTextNode(" "));
    message.appendChild(textSpan);
    message.appendChild(copyBtn);
    
    chatWindow.appendChild(message);
    chatWindow.scrollTop = chatWindow.scrollHeight;
    
    if (useTyping && text.length < 800) {
        typewriterEffect(textSpan, parsedContent, () => {
            if (typeof MathJax !== 'undefined') {
                MathJax.typesetPromise([message]).catch((err) => console.log('MathJax error:', err));
            }
        });
    } else {
        textSpan.innerHTML = parsedContent;
        chatWindow.scrollTop = chatWindow.scrollHeight;
        if (typeof MathJax !== 'undefined') {
            MathJax.typesetPromise([message]).catch((err) => console.log('MathJax error:', err));
        }
    }
}

function clearChat() {
    chatWindow.innerHTML = "";
}

userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
    }
});

document.addEventListener("DOMContentLoaded", function() {
    userInput.focus();
});
