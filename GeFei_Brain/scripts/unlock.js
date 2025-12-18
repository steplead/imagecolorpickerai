const fs = require('fs');
const path = require('path');

const targetDirs = [
    path.join(__dirname, '../data'),
    path.join(__dirname, '../protocols')
];

console.log("🔓 UNLOCKING GeFei Brain (Edit Mode)...");

targetDirs.forEach(dir => {
    if (fs.existsSync(dir)) {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
            const filePath = path.join(dir, file);
            // Mode 0o644 = Read/Write for Owner
            fs.chmodSync(filePath, 0o644);
            console.log(`  - Unlocked: ${file}`);
        });
    }
});

console.log("\n✅ Brain is now UNLOCKED.");
console.log("You can now edit protocols or ingest new data.");
