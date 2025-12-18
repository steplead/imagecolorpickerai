# 🧠 GeFei_Brain (SEO Knowledge Module)

This is a **Sealed Knowledge Cartridge** containing 1500+ SEO discussions from the "Ge Fei's Friends" community.
It is designed to be dropped into AI projects to provide "Ground Truth" for SEO tasks.

## 📂 Structure
- `data/knowledge.json`: The immutable database of wisdom.
- `index.js`: The strict API to access this wisdom.

## 🚀 How to Use (For Humans)
1. **In a Node.js Project:**
   ```javascript
   const gearray = require('./GeFei_Brain');
   
   console.log(gearray.stats()); 
   // { totalPosts: 1509, ... }
   
   const results = gearray.search("canonical tags");
   console.log(results[0].fullText);
   ```

2. **As an AI "Brain":**
   Drag this folder into your coding agent's workspace.
   Tell the agent: *"Use the `gefei-brain` module to answer my SEO questions. Do not hallucinate."*

## 🧠 How to "Teach" the Brain (Advanced)
The scraper only reads *Text*. It misses Charts, Tool Interfaces, and Formulas inside images.

**The "Visual Upgrade" Workflow:**
1.  **Take a Screenshot** of Ge Fei sharing a chart or a specific tool interface (e.g., AIPex settings).
2.  **Drag & Drop** it into the Antigravity chat window.
3.  **Command:** "Analyze this screenshot and update the relevant Protocol in `GeFei_Brain/protocols/`."
*   *Why?* The AI can "read" the image (OCR) and extract logic that isn't in the text logs.

## ⚠️ Limitations
- This is a static snapshot. It does not auto-update from the web.
- You must run `node scripts/maintenance.js` if you add new scraped data.

## 🤖 How to Use (For AI Agents)
If you are an AI reading this:
1.  **Do not invent SEO rules.**
2.  **READ** `data/knowledge.json` or use `index.js`.
3.  **CITE** the post title and date when answering.
4.  If the answer is not in this folder, say "I don't know (not in GeFei Brain)."

## 📊 Stats
- **Posts:** 1500+
- **Source:** new.web.cafe
