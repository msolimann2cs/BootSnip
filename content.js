console.log("Code Snippet Copier loaded");

function createTooltip(message, target) {
  const tooltip = document.createElement("div");
  tooltip.innerText = message;
  tooltip.style.position = "absolute";
  tooltip.style.background = "#333";
  tooltip.style.color = "#fff";
  tooltip.style.padding = "4px 8px";
  tooltip.style.borderRadius = "4px";
  tooltip.style.fontSize = "12px";
  tooltip.style.zIndex = 9999;
  tooltip.style.top = `${target.getBoundingClientRect().top + window.scrollY - 30}px`;
  tooltip.style.left = `${target.getBoundingClientRect().left + window.scrollX}px`;
  document.body.appendChild(tooltip);
  setTimeout(() => tooltip.remove(), 1500);
}

function attachCopyToElement(el, text) {
  if (el.dataset.copierAttached) return;
  el.dataset.copierAttached = "true";
  el.style.cursor = "pointer";
  el.addEventListener("click", () => {
    navigator.clipboard.writeText(text).then(() => {
      createTooltip("Copied!", el);
    });
  });
}

function attachCopyToCodeTags() {
  document.querySelectorAll("code:not([data-copier-attached])").forEach((el) => {
    attachCopyToElement(el, el.innerText);
  });
}

function wrapQuotesInTextNode(node) {
  if (
    node.nodeType !== Node.TEXT_NODE ||
    !node.nodeValue ||
    node.parentNode.dataset.copierAttached === "true"
  ) return;

  const text = node.nodeValue;
  const regex = /(["'“”‘’])((?:(?=(\\?))\3.)*?)\1/g;
  if (!regex.test(text)) return;

  const parent = node.parentNode;
  const frag = document.createDocumentFragment();
  let lastIndex = 0;
  let match;

  regex.lastIndex = 0;
  while ((match = regex.exec(text)) !== null) {
    const start = match.index;
    const fullMatch = match[0];
    const inner = match[2];

    if (start > lastIndex) {
      frag.appendChild(document.createTextNode(text.slice(lastIndex, start)));
    }

    const span = document.createElement("span");
    span.innerText = fullMatch;
    span.className = "copier-span";
    attachCopyToElement(span, inner);
    frag.appendChild(span);

    lastIndex = start + fullMatch.length;
  }

  if (lastIndex < text.length) {
    frag.appendChild(document.createTextNode(text.slice(lastIndex)));
  }

  parent.replaceChild(frag, node);
  parent.dataset.copierAttached = "true";
}

function scanQuotesSafely() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
  let count = 0;
  while (walker.nextNode()) {
    if (++count > 300) break;
    wrapQuotesInTextNode(walker.currentNode);
  }
}

// Initial run
attachCopyToCodeTags();
scanQuotesSafely();

// Observe new DOM content
const observer = new MutationObserver(() => {
  attachCopyToCodeTags();
  scanQuotesSafely();
});
observer.observe(document.body, { childList: true, subtree: true });
