const endpoint = "https://aeris-framework.onrender.com/v1/chat/completions";
const baselineEndpoint = "https://aeris-framework.onrender.com/v1/chat/baseline";

const chatWindow = document.getElementById("chat-window");
const userInput = document.getElementById("user-input");

function parseBasicMarkdown(text) {
    const codeBlocks = [];
    const mathBlocks = [];
    
    let protectedText = text.replace(/```[\s\S]*?```/g, (match) => {
        codeBlocks.push(match);
        return "~~~CODEBLOCK" + (codeBlocks.length - 1) + "~~~";
    });
    
    protectedText = protectedText.replace(/`([^`]+)`/g, (match, content) => {
        codeBlocks.push(content);
        return "~~~INLINECODE" + (codeBlocks.length - 1) + "~~~";
    });
    
    protectedText = protectedText.replace(/\\\((.*?)\\\)/g, (match, content) => {
        mathBlocks.push(content);
        return "~~~MATHINLINE" + (mathBlocks.length - 1) + "~~~";
    });
    
    protectedText = protectedText.replace(/\\\[(.*?)\\\]/g, (match, content) => {
        mathBlocks.push(content);
        return "~~~MATHBLOCK" + (mathBlocks.length - 1) + "~~~";
    });

    let html = protectedText;
    
    html = html.replace(/^### (.+)$/gm, "<h3>$1</h3>");
    html = html.replace(/^## (.+)$/gm, "<h2>$1</h2>");
    html = html.replace(/^# (.+)$/gm, "<h1>$1</h1>");
    
    html = html.replace(/^\* (.+)$/gm, "• $1");
    html = html.replace(/^- (.+)$/gm, "• $1");
    html = html.replace(/^\d+\. (.+)$/gm, "$1");
    
    html = html.replace(/\*\*([^*]+?)\*\*/g, "<strong>$1</strong>");
    html = html.replace(/__([^_]+?)__/g, "<strong>$1</strong>");
    
    html = html.replace(/\*([^*\n]+?)\*/g, "<em>$1</em>");
    html = html.replace(/_([^_\n]+?)_/g, "<em>$1</em>");
    
    html = html.replace(/\n/g, "<br>");
    
    html = html.replace(/~~~CODEBLOCK(\d+)~~~/g, (match, index) => {
        const code = codeBlocks[index].replace(/```(\w+)?\n?/, "").replace(/```$/, "");
        return '<pre><code class="code-block">' + escapeHtml(code) + "</code></pre>";
    });
    
    html = html.replace(/~~~INLINECODE(\d+)~~~/g, (match, index) => {
        return '<code class="inline-code">' + escapeHtml(codeBlocks[index]) + "</code>";
    });
    
    html = html.replace(/~~~MATHINLINE(\d+)~~~/g, (match, index) => {
        return '<span class="math-formula">\\(' + mathBlocks[index] + "\\)</span>";
    });
    
    html = html.replace(/~~~MATHBLOCK(\d+)~~~/g, (match, index) => {
        return '<div class="math-formula">\\[' + mathBlocks[index] + "\\]</div>";
    });
    
    return html;
}

function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
}

function typewriterEffect(element, html, callback) {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    const textContent = tempDiv.textContent || tempDiv.innerText || "";
    
    if (textContent.length > 500) {
        element.innerHTML = html;
        chatWindow.scrollTop = chatWindow.scrollHeight;
        if (callback) callback();
        return;
    }
    
    element.innerHTML = "";
    let currentIndex = 0;
    
    const typeChar = () => {
        if (currentIndex < html.length) {
            if (html[currentIndex] === "<") {
                const closeIndex = html.indexOf(">", currentIndex);
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
            setTimeout(typeChar, 15);
        } else {
            chatWindow.scrollTop = chatWindow.scrollHeight;
            if (callback) callback();
        }
    };
    
    typeChar();
}

function appendMessage(role, text, useTyping) {
    const message = document.createElement("div");
    const isDoubleBifurcation = text.startsWith("✦✦");
    const isBifurcation = text.startsWith("✦") && !isDoubleBifurcation;
    const hasDiamond = text.includes("◆");
    const hasStar = text.includes("✦");
    
    if (role === "You") {
        message.className = "message user";
    } else if (isDoubleBifurcation) {
        message.className = "message aeris double-bifurcation";
    } else if (isBifurcation) {
        message.className = "message aeris bifurcation";
    } else {
        message.className = "message aeris";
    }
    
    if (role !== "You") {
        if (hasDiamond && hasStar) {
            message.classList.add("state-has-both");
        } else if (hasDiamond) {
            message.classList.add("state-has-diamond");
        }
    }
    
    if (role === "You") {
        message.innerHTML = "<strong>" + role + ":</strong> " + escapeHtml(text);
        chatWindow.appendChild(message);
        chatWindow.scrollTop = chatWindow.scrollHeight;
        return;
    }
    
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
    
    if (useTyping && text.length < 800) {
        typewriterEffect(textSpan, parsedContent, () => {
            message.style.animation = "none";
            if (typeof MathJax !== "undefined") {
                MathJax.typesetPromise([message]).then(() => {
                    chatWindow.scrollTop = chatWindow.scrollHeight;
                }).catch(() => {});
            }
        });
    } else {
        textSpan.innerHTML = parsedContent;
        setTimeout(() => {
            message.style.animation = "none";
            chatWindow.scrollTop = chatWindow.scrollHeight;
            if (typeof MathJax !== "undefined") {
                MathJax.typesetPromise([message]).catch(() => {});
            }
        }, 400);
    }
}

function copyTextToClipboard(text, button) {
    navigator.clipboard.writeText(text).then(() => {
        button.textContent = "Copied!";
        button.classList.add("copied");
        setTimeout(() => {
            button.textContent = "Copy";
            button.classList.remove("copied");
        }, 2000);
    }).catch(() => {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.top = "-9999px";
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand("copy");
            button.textContent = "Copied!";
            button.classList.add("copied");
            setTimeout(() => {
                button.textContent = "Copy";
                button.classList.remove("copied");
            }, 2000);
        } catch (err) {
            console.error("Failed to copy: ", err);
        }
        document.body.removeChild(textArea);
    });
}

async function sendMessage() {
    const input = userInput.value.trim();
    if (!input) return;

    appendMessage("You", input, false);
    userInput.value = "";

    const thinkingMessage = document.createElement("div");
    thinkingMessage.className = "message aeris thinking";
    thinkingMessage.innerHTML = "<strong>AERIS:</strong> <em>Thinking</em><span class=\"typing-indicator\"></span>";
    chatWindow.appendChild(thinkingMessage);
    chatWindow.scrollTop = chatWindow.scrollHeight;
    
    const startTime = Date.now();

    try {
        const response = await fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                model: "google/gemma-3-27b-it",
                messages: [
                    { role: "system", content: "You are AERIS, a dialectical reasoning assistant." },
                    { role: "user", content: input }
                ]
            })
        });

        const data = await response.json();
        const message = data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content
            ? data.choices[0].message.content
            : "Error: no response.";
        
        const endTime = Date.now();
        const responseTime = ((endTime - startTime) / 1000).toFixed(1);
        
        chatWindow.removeChild(thinkingMessage);
        
        appendMessageWithTime("AERIS", message, responseTime, true, input);
    } catch (error) {
        chatWindow.removeChild(thinkingMessage);
        appendMessage("AERIS", "Error: Failed to connect to the server.", false);
    }
}

function appendMessageWithTime(role, text, responseTime, useTyping, originalPrompt) {
    const message = document.createElement("div");
    const isDoubleBifurcation = text.startsWith("✦✦");
    const isBifurcation = text.startsWith("✦") && !isDoubleBifurcation;
    const hasDiamond = text.includes("◆");
    const hasStar = text.includes("✦");
    
    if (isDoubleBifurcation) {
        message.className = "message aeris double-bifurcation";
    } else if (isBifurcation) {
        message.className = "message aeris bifurcation";
    } else {
        message.className = "message aeris";
    }
    
    if (hasDiamond && hasStar) {
        message.classList.add("state-has-both");
    } else if (hasDiamond) {
        message.classList.add("state-has-diamond");
    }
    
    const msgId = "msg-" + Date.now() + "-" + Math.random().toString(36).slice(2);
    message.dataset.msgId = msgId;
    
    const strongEl = document.createElement("strong");
    strongEl.textContent = role + ":";
    
    const timeSpan = document.createElement("span");
    timeSpan.className = "response-time";
    timeSpan.textContent = "(" + responseTime + "s)";
    
    const textSpan = document.createElement("span");
    const parsedContent = parseBasicMarkdown(text);
    
    const copyBtn = document.createElement("button");
    copyBtn.className = "copy-button";
    copyBtn.textContent = "Copy";
    copyBtn.onclick = function() {
        copyTextToClipboard(text, copyBtn);
    };

    const compareBtn = document.createElement("button");
    compareBtn.className = "compare-inline-button";
    compareBtn.textContent = "Show baseline";
    compareBtn.dataset.forMsg = msgId;
    compareBtn.onclick = function() {
        toggleBaseline(msgId, originalPrompt, compareBtn);
    };
    
    message.appendChild(strongEl);
    message.appendChild(timeSpan);
    message.appendChild(document.createTextNode(" "));
    message.appendChild(textSpan);
    message.appendChild(copyBtn);
    message.appendChild(compareBtn);
    
    chatWindow.appendChild(message);
    
    if (useTyping && text.length < 800) {
        typewriterEffect(textSpan, parsedContent, () => {
            message.style.animation = "none";
            if (typeof MathJax !== "undefined") {
                MathJax.typesetPromise([message]).then(() => {
                    chatWindow.scrollTop = chatWindow.scrollHeight;
                }).catch(() => {});
            }
        });
    } else {
        textSpan.innerHTML = parsedContent;
        setTimeout(() => {
            message.style.animation = "none";
            chatWindow.scrollTop = chatWindow.scrollHeight;
            if (typeof MathJax !== "undefined") {
                MathJax.typesetPromise([message]).catch(() => {});
            }
        }, 400);
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

async function toggleBaseline(msgId, originalPrompt, button) {
    const baselineDivExisting = document.querySelector('.baseline-reply[data-for="' + msgId + '"]');
    if (baselineDivExisting) {
        if (baselineDivExisting.style.display === "none") {
            baselineDivExisting.style.display = "";
            button.textContent = "Hide baseline";
        } else {
            baselineDivExisting.style.display = "none";
            button.textContent = "Show baseline";
        }
        return;
    }

    const messageEl = document.querySelector('.message.aeris[data-msg-id="' + msgId + '"]');
    if (!messageEl) return;

    const previousLabel = button.textContent;
    button.disabled = true;
    button.textContent = "Loading…";

    try {
        const response = await fetch(baselineEndpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                model: "google/gemma-3-27b-it",
                temperature: 1.0,
                max_tokens: 1600,
                messages: [
                    { role: "user", content: originalPrompt }
                ]
            })
        });

        const data = await response.json();
        const text = response.ok
            ? (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content
                ? data.choices[0].message.content
                : "No response.")
            : "Error: " + (data.detail || "Baseline error");

        const baselineDiv = document.createElement("div");
        baselineDiv.className = "message baseline baseline-reply";
        baselineDiv.dataset.for = msgId;

        const label = document.createElement("div");
        label.className = "baseline-label";
        label.textContent = "Baseline (Gemma-27B)";

        const contentSpan = document.createElement("span");
        const parsed = parseBasicMarkdown(text);
        contentSpan.innerHTML = parsed;

        const copyBtn = document.createElement("button");
        copyBtn.className = "copy-button";
        copyBtn.textContent = "Copy";
        copyBtn.onclick = function() {
            copyTextToClipboard(text, copyBtn);
        };

        baselineDiv.appendChild(label);
        baselineDiv.appendChild(contentSpan);
        baselineDiv.appendChild(copyBtn);

        messageEl.insertAdjacentElement("afterend", baselineDiv);
        chatWindow.scrollTop = chatWindow.scrollHeight;

        button.textContent = "Hide baseline";
    } catch (error) {
        button.textContent = "Error";
        setTimeout(() => {
            button.textContent = previousLabel;
        }, 2000);
    } finally {
        button.disabled = false;
    }
}
