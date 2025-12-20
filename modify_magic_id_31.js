#!/usr/bin/env node

/**
 * Modifies all potential damage-related attributes for magic ID 0x31 (acid slime magic) to 0
 * 
 * Per user request: "Produce a FDAT.T with changed all candidate attributes to 0,
 * you can change many places, but do only for the id 31"
 * 
 * Strategy:
 * - Scan FDAT.T parts 482-808 for magic ID 0x31
 * - When found, zero out all following bytes that could be damage values
 * - Aggressive approach: zero bytes at various offsets after ID
 */

const fs = require('fs');
const path = require('path');

// Parts range to scan (user specified)
const START_PART = 482;
const END_PART = 808;

// Magic ID to target
const MAGIC_ID = 0x31;

console.log('=== Magic ID 0x31 (Acid Slime) Attribute Zeroing Tool ===\n');
console.log(`Target: Magic ID 0x${MAGIC_ID.toString(16).toUpperCase()}`);
console.log(`Scanning FDAT.T parts ${START_PART}-${END_PART}\n`);

// Find extracted FDAT.T parts directory
const extractedDir = path.join(__dirname, 'generated');
let fdatPartsDir = null;

// Look for most recent extracted directory
if (fs.existsSync(extractedDir)) {
    const dirs = fs.readdirSync(extractedDir).filter(d => {
        const fullPath = path.join(extractedDir, d, 'extracted', 'ST', 'COM');
        return fs.existsSync(fullPath);
    });
    
    if (dirs.length > 0) {
        // Use most recent (could also use specific preset)
        fdatPartsDir = path.join(extractedDir, dirs[dirs.length - 1], 'extracted', 'ST', 'COM', 'FDAT.T_PARTS');
    }
}

if (!fdatPartsDir || !fs.existsSync(fdatPartsDir)) {
    console.error('ERROR: FDAT.T_PARTS directory not found.');
    console.error('Please run: npm run mod "./generated/st.bin" first to extract FDAT.T');
    process.exit(1);
}

console.log(`Using: ${fdatPartsDir}\n`);

let totalModifications = 0;
let partsModified = 0;

// Scan each part in the range
for (let partNum = START_PART; partNum <= END_PART; partNum++) {
    // Find the part file
    const partFiles = fs.readdirSync(fdatPartsDir).filter(f => f.startsWith(`${partNum} `));
    
    if (partFiles.length === 0) continue;
    
    const partFile = path.join(fdatPartsDir, partFiles[0]);
    const data = fs.readFileSync(partFile);
    
    let modified = false;
    let partModifications = 0;
    
    // Scan for magic ID 0x31
    for (let i = 0; i < data.length - 20; i++) {
        if (data[i] === MAGIC_ID) {
            // Found magic ID 0x31
            // Based on magic.txt format: ID followed by 20 bytes of data
            // Format appears to be: [ID] [type?] [12 unknown bytes] [4 bytes that might be damage values]
            
            // Zero out potential damage fields
            // We'll zero multiple potential locations to be aggressive:
            
            // Bytes 2-13 (unknown data, might contain stats)
            for (let offset = 2; offset <= 13; offset++) {
                if (i + offset < data.length && data[i + offset] !== 0) {
                    data[i + offset] = 0;
                    modified = true;
                    partModifications++;
                }
            }
            
            // Bytes 14-19 (these look like they might be coordinates or damage values in magic.txt)
            // Example from magic.txt: "0  0  0  0  0  0  0  0" at end suggests these are important
            for (let offset = 14; offset <= 19; offset++) {
                if (i + offset < data.length && data[i + offset] !== 0) {
                    data[i + offset] = 0;
                    modified = true;
                    partModifications++;
                }
            }
            
            console.log(`Part ${partNum}: Found magic ID 0x31 at offset 0x${i.toString(16).padStart(6, '0')}, zeroed ${partModifications} bytes`);
        }
    }
    
    // Write modified data back
    if (modified) {
        fs.writeFileSync(partFile, data);
        partsModified++;
        totalModifications += partModifications;
        console.log(`  → Modified ${partModifications} bytes in part ${partNum}`);
    }
}

console.log(`\n=== Summary ===`);
console.log(`Parts modified: ${partsModified}`);
console.log(`Total bytes zeroed: ${totalModifications}`);
console.log(`\nNext steps:`);
console.log(`1. Pack modified FDAT.T: npm run pack`);
console.log(`2. Build ISO: mkpsxiso`);
console.log(`3. Test acid slime magic in-game`);
console.log(`4. If damage is now 0, we found the right data structure!`);
