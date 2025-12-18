const fs = require('fs');
const path = require('path');

const targetDirs = [
    path.join(__dirname, '../data'),
    path.join(__dirname, '../protocols')
];

console.log("🔒 LOCKING GeFei Brain (Read-Only Mode)...");

targetDirs.forEach(dir => {
    if (fs.existsSync(dir)) {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
            const filePath = path.join(dir, file);
            // Mode 0o444 = Read only for everyone
            fs.chmodSync(filePath, 0o444);
            console.log(`  - Locked: ${file}`);
        });
    }
});

console.log("\n✅ Brain is now LOCKED.");
console.log("No AI or Script can modify your data/protocols.");
console.log("To edit, run: node scripts/unlock.js");
