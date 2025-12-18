const { execSync } = require('child_process');
const path = require('path');

// Helper to run commands
function run(cmd) {
    try {
        console.log(`\n> Running: ${cmd}`);
        execSync(cmd, { stdio: 'inherit', cwd: path.join(__dirname, '../../') }); // Run from project root
    } catch (e) {
        console.error(`❌ Error running command: ${cmd}`);
        // If error, force lock before exiting to be safe
        try {
            execSync('node GeFei_Brain/scripts/lock.js', { stdio: 'inherit', cwd: path.join(__dirname, '../../') });
        } catch (lockError) {
            console.error("Critical: Could not re-lock after error.");
        }
        process.exit(1);
    }
}

console.log("🔄 STARTING SAFE UPDATE FROM NEW.WEB.CAFE...");

// 1. UNLOCK (Allow writing)
run('node GeFei_Brain/scripts/unlock.js');

// 2. SCRAPE & MIGRATE (The heavy lifting)
// Note: Assuming 'migrate_to_brain.js' is the tool to update the JSON
// If you have a live scraper command, replace this with that.
// For now, we simulate the update by running the migration tool (which refreshes knowledge.json from raw data)
console.log("   (Fetching new data...)");
// run('node scrape_chats.js');  // <--- Uncomment this when you want to run the live scraper
run('node migrate_to_brain.js');

// 3. WATCHDOG (Check for changes/alerts)
run('node GeFei_Brain/scripts/maintenance.js');

// 4. LOCK (Secure it again)
run('node GeFei_Brain/scripts/lock.js');

console.log("\n✅ SAFE UPDATE COMPLETE.");
console.log("Brain is updated and RE-LOCKED.");
