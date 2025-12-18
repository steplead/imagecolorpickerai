const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.resolve(process.cwd(), '.env.local') });

const DB_PATH = path.join(process.cwd(), 'src/data/chineseColors.json');
const TARGET_COUNT = 550; // Goal: 500+ colors
const BATCH_SIZE = 8; // Reduced to prevent token cut-off

const THEMES = [
    "Red & Pink (Vermilion, Rouge)",
    "Blue & Cyan (Glaze, Sky)",
    "Green (Jade, Tea, Bamboo)",
    "Yellow & Gold (Imperial, Autumn)",
    "Purple & Violet (Wisteria, Court)",
    "White & Silver (Moon, Snow)",
    "Black & Ink (Calligraphy, Night)",
    "Nature (Mountains, Rivers)",
    "Tang & Song Dynasty Poetry",
    "Porcelain & Ceramics",
    "Fabrics & Silk",
    "Minerals & Gemstones"
];

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function generateColors() {
    if (!process.env.OPENROUTER_API_KEY) {
        console.error("❌ Error: OPENROUTER_API_KEY missing in .env.local");
        process.exit(1);
    }

    // 1. Load existing data
    let existingData = [];
    try {
        const fileContent = fs.readFileSync(DB_PATH, 'utf-8');
        existingData = JSON.parse(fileContent);
    } catch (err) {
        console.log("ℹ️ No existing database found, starting fresh.");
    }

    console.log(`📊 Current Colors: ${existingData.length}`);
    const existingNames = new Set(existingData.map(c => c.name.toLowerCase()));
    const existingHex = new Set(existingData.map(c => c.hex.toLowerCase()));

    // 2. Loop until target
    while (existingData.length < TARGET_COUNT) {
        const theme = THEMES[Math.floor(Math.random() * THEMES.length)];
        console.log(`\n🚀 Generating batch (Target: ${TARGET_COUNT}, Current: ${existingData.length})... [Theme: ${theme}]`);

        const prompt = `
      You are an expert on Traditional Chinese Colors.
      Generate ${BATCH_SIZE} UNIQUE Traditional Chinese colors based on the theme: "${theme}".
      
      CRITICAL RULES:
      1. Returns a JSON ARRAY only. No markdown.
      2. Each object must have:
         - "id": kebab-case-english-name (e.g., "misted-willow")
         - "name": English Name
         - "chinese": Chinese Characters
         - "pinyin": Pinyin with tones
         - "hex": Valid Hex Code
         - "meaning": 1 sentence cultural/poetic meaning.
         - "tags": Array of 3-4 keywords (e.g., "green", "cool", "nature", "tang-dynasty").
      3. Do NOT duplicate these existing names: ${Array.from(existingNames).slice(-20).join(", ")}...
    `;

        try {
            const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "model": "deepseek/deepseek-chat",
                    "messages": [
                        { "role": "system", "content": "You are a JSON generator. Output valid JSON only." },
                        { "role": "user", "content": prompt }
                    ],
                    "temperature": 0.9 // Higher variety for themes
                })
            });

            if (!response.ok) {
                console.error(`❌ API Error: ${response.statusText}`);
                break;
            }

            const data = await response.json();
            const content = data.choices[0].message.content.replace(/```json/g, '').replace(/```/g, '').trim();

            let newColors = [];
            try {
                newColors = JSON.parse(content);
            } catch (parseErr) {
                console.error("❌ JSON Parse Failed. Raw content:", content.substring(0, 100));
                continue;
            }

            // 3. Validate & Dedup
            let addedCount = 0;
            for (const color of newColors) {
                if (!color.hex || !color.name || !color.chinese) continue;

                // Fix ID if missing
                if (!color.id) color.id = color.name.toLowerCase().replace(/\s+/g, '-');

                // Check duplicates
                if (existingNames.has(color.name.toLowerCase()) || existingHex.has(color.hex.toLowerCase())) {
                    continue;
                }

                existingData.push(color);
                existingNames.add(color.name.toLowerCase());
                existingHex.add(color.hex.toLowerCase());
                addedCount++;
            }

            console.log(`✅ Added ${addedCount} new colors.`);

            // 4. Save immediately
            fs.writeFileSync(DB_PATH, JSON.stringify(existingData, null, 2));

            // Rate limit safety
            await sleep(2000);

        } catch (err) {
            console.error("❌ Fatal Error:", err);
            break;
        }
    }

    console.log(`🎉 Done! Total Colors: ${existingData.length}`);
}

generateColors();
