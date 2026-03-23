const fs = require('fs');
const path = require('path');
const walk = function(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.tsx') || file.endsWith('.ts')) results.push(file);
        }
    });
    return results;
}
const files = walk('./src/components');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;
    
    // Make section backgrounds transparent
    content = content.replace(/bg-white dark:bg-gray-900/g, 'bg-transparent');
    content = content.replace(/bg-gray-50 dark:bg-gray-800/g, 'bg-transparent');
    content = content.replace(/bg-gray-100 dark:bg-gray-800/g, 'bg-transparent');
    
    // Convert common hardcoded backgrounds on cards to our new "glass-panel" class
    content = content.replace(/bg-white dark:bg-gray-700/g, 'glass-panel text-gray-800 dark:text-gray-100');
    
    // Also convert any standalone bg-white or bg-[something] inside cards if needed, but let's stick to the main ones found:
    // "bg-white dark:bg-gray-800"
    content = content.replace(/bg-white dark:bg-gray-800/g, 'glass-panel');
    
    // Enhance typography for headings
    content = content.replace(/text-3xl font-bold/g, 'text-4xl font-extrabold tracking-tight');
    content = content.replace(/text-4xl font-bold/g, 'text-5xl font-extrabold tracking-tighter');

    if (content !== originalContent) {
        console.log(`Updating ${file}`);
        fs.writeFileSync(file, content, 'utf8');
    }
});
