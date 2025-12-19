
const fs = require('fs');
const path = require('path');

const colors = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/chineseColors.json'), 'utf8'));

function getColorsByTag(tag) {
    if (!tag) return [];
    // Simulate the OLD logic (case sensitive)
    const oldLogic = colors.filter(c => c.tags && c.tags.includes(tag.toLowerCase()));

    // Simulate the NEW logic (case insensitive)
    const searchTag = tag.toLowerCase();
    const newLogic = colors.filter(c => c.tags && c.tags.some(t => t.toLowerCase() === searchTag));

    return {
        tag,
        countOld: oldLogic.length,
        countNew: newLogic.length,
        items: newLogic.map(c => c.name)
    };
}

console.log(JSON.stringify(getColorsByTag("gold"), null, 2));
console.log(JSON.stringify(getColorsByTag("imperial"), null, 2));
console.log(JSON.stringify(getColorsByTag("Dragon"), null, 2));
