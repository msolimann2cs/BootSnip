# BootSnip 🔖📋

A lightweight Chrome extension that lets you **click on `<code>` tags or quoted strings to instantly copy their content to clipboard** with a visual confirmation.

---

## 🚀 Overview

This extension was built to assist during my learning journey on [Boot.dev](https://boot.dev). While studying programming content and technical lessons, I often needed to copy small code snippets or quoted phrases — but it was tedious to highlight and copy manually.

**BootSnip** solves this by making all `<code>` tags and quoted text clickable. Just click — and it’s copied. No mess, no fuss.

---

## ✨ Features

- 🔘 Click any `<code>` tag to copy its content  
- 📝 Click any **quoted string** (e.g., `"hello world"` or `‘Boots, an Emote Story’`) to copy it  
- ✅ Small tooltip shows confirmation ("Copied!")  
- ⚡ Optimized for performance — won't crash large pages  
- 🛡️ Auto-attaches to new content (even if loaded dynamically)  
- 🌐 Only runs on `https://*.boot.dev/*` by default — but you can easily change this to work on any site by modifying the `matches` field in `manifest.json`

---

## 📸 Demo

> _Click on any code or quoted string, and it’s copied instantly_  
![BootSnipDemo](https://github.com/user-attachments/assets/725f90d2-e516-453e-8cb6-6cf98fc5311d)

---

## 🛠 Installation

1. Clone this repo or [Download ZIP](https://github.com/your-username/bootsnip/archive/refs/heads/main.zip)
2. Go to `chrome://extensions` in your browser
3. Enable **Developer Mode**
4. Click **Load unpacked**
5. Select the folder containing this extension

---

## 🧠 Use Case

This extension was created to:
- Speed up copying during Boot.dev coursework
- Reduce friction when working with tutorials or lesson content
- Make copy-paste feel effortless and smooth

---

## 🧩 Tech Stack

- **Chrome Extension (Manifest V3)**
- JavaScript (`content.js`)
- Native Clipboard API
- MutationObserver for live DOM updates

---


## 🤝 Contributing

Feel free to open issues or PRs if you’d like to improve the project or extend its functionality.

---

## 🪪 License

[MIT](./LICENSE)

---

## ⚠️ Disclaimer

This extension is not affiliated with or endorsed by Boot.dev.  
**BootSnip** is an independent, open-source tool built to enhance the learning experience while using the Boot.dev platform.

---

## 🙏 Acknowledgments

Built with love while studying on [Boot.dev](https://boot.dev).  
Big shoutout to the Boot.dev team for a clean and motivating learning experience.


