#!/usr/bin/env node

/**
 * Ultra-aggressive magic damage zeroing tool
 * 
 * Zeros ALL potential damage attributes for ALL 117 valid magic IDs
 * across FDAT.T parts 482-808.
 * 
 * Per user request: "do more aggressive now - zero all possible candidate 
 * places all magic all attributes that might be that"
 * 
 * Usage:
 *   1. npm run mod "./generated/st.bin" "./params/no-change.json"
 *   2. node modify_all_magic_aggressive.js
 *   3. cd generated/no-change/extracted/ST/COM && npm run pack "FDAT.T"
 *   4. cd ../../.. && mkpsxiso st.xml -y -o test-all-magic-zero.bin
 *   5. Test in emulator - expect ALL magic attacks to do 0 damage
 */

const fs = require('fs');
const path = require('path');

// All 117 valid magic IDs from magic.txt
const validMagicIds = [
  0x30, 0x31, 0x32, 0x33, 0x34, 0x36, 0x37, 0x38, 0x39, 0x3a, 0x3b, 0x3c,
  0x3e, 0x40, 0x41, 0x43, 0x44, 0x45, 0x47, 0x4a, 0x4b, 0x4c, 0x4d, 0x4e,
  0x4f, 0x50, 0x51, 0x54, 0x55, 0x56, 0x57, 0x58, 0x59, 0x5b, 0x5c, 0x5d,
  0x5e, 0x5f, 0x60, 0x63, 0x65, 0x66, 0x68, 0x69, 0x6a, 0x6b, 0x6c, 0x6e,
  0x6f, 0x70, 0x71, 0x73, 0x74, 0x75, 0x76, 0x77, 0x78, 0x79, 0x7a, 0x7c,
  0x7d, 0x7f, 0x80, 0x83, 0x84, 0x85, 0x87, 0x88, 0x89, 0x8b, 0x8c, 0x8e,
  0x8f, 0x90, 0x91, 0x92, 0x93, 0x95, 0x96, 0x97, 0x98, 0x99, 0x9a, 0x9c,
  0x9d, 0x9e, 0x9f, 0xa0, 0xa1, 0xa2, 0xa3, 0xa4, 0xa5, 0xa6, 0xa7, 0xa8,
  0xa9, 0xc8, 0xca, 0xcd, 0xd0, 0xd3, 0xd8, 0xdb, 0xde, 0xe1, 0xe4, 0xe6,
  0xeb, 0xee, 0xf0, 0xf2, 0xf3, 0xf4, 0xf5, 0xf6, 0xff
];

// Find the generated directory
function findGeneratedDir() {
  const baseDir = process.cwd();
  const generatedPath = path.join(baseDir, 'generated');
  
  if (!fs.existsSync(generatedPath)) {
    console.error('ERROR: generated/ directory not found');
    console.error('Run: npm run mod "./generated/st.bin" "./params/no-change.json"');
    process.exit(1);
  }
  
  // Find the first subdirectory (preset folder)
  const subdirs = fs.readdirSync(generatedPath).filter(name => {
    return fs.statSync(path.join(generatedPath, name)).isDirectory();
  });
  
  if (subdirs.length === 0) {
    console.error('ERROR: No preset folder found in generated/');
    process.exit(1);
  }
  
  const presetDir = path.join(generatedPath, subdirs[0]);
  const fdatPartsPath = path.join(presetDir, 'extracted', 'ST', 'COM', 'FDAT.T_PARTS');
  
  if (!fs.existsSync(fdatPartsPath)) {
    console.error('ERROR: FDAT.T_PARTS not found');
    console.error('Expected:', fdatPartsPath);
    process.exit(1);
  }
  
  return fdatPartsPath;
}

// Main processing
function processAllParts() {
  const fdatPartsPath = findGeneratedDir();
  console.log(`Found FDAT.T_PARTS at: ${fdatPartsPath}`);
  console.log(`\nScanning parts 482-808 for all ${validMagicIds.length} magic IDs...\n`);
  
  let totalModifications = 0;
  let partsModified = 0;
  
  // Process parts 482-808
  for (let partNum = 482; partNum <= 808; partNum++) {
    // Find matching file
    const files = fs.readdirSync(fdatPartsPath);
    const partFile = files.find(f => f.startsWith(`${partNum} `));
    
    if (!partFile) {
      // Part doesn't exist, skip
      continue;
    }
    
    const filePath = path.join(fdatPartsPath, partFile);
    const data = fs.readFileSync(filePath);
    let modified = 0;
    
    // Scan every byte position
    for (let offset = 0; offset < data.length - 19; offset++) {
      const byteValue = data[offset];
      
      // Check if this byte is a valid magic ID
      if (validMagicIds.includes(byteValue)) {
        // Found a magic ID - zero the attribute bytes (offsets +2 to +19)
        // Preserve magic ID (offset 0) and type (offset 1)
        for (let i = 2; i <= 19; i++) {
          if (offset + i < data.length) {
            data[offset + i] = 0x00;
          }
        }
        modified++;
      }
    }
    
    // Save if modified
    if (modified > 0) {
      fs.writeFileSync(filePath, data);
      console.log(`Part ${partNum}: Modified ${modified} magic ID occurrences`);
      totalModifications += modified;
      partsModified++;
    }
  }
  
  console.log(`\n=== Summary ===`);
  console.log(`Total parts scanned: ${808 - 482 + 1} (parts 482-808)`);
  console.log(`Parts modified: ${partsModified}`);
  console.log(`Total magic ID occurrences zeroed: ${totalModifications}`);
  console.log(`Total bytes zeroed: ${totalModifications * 18}`);
  console.log(`\nAll modifications saved to FDAT.T_PARTS`);
  console.log(`\nNext steps:`);
  console.log(`1. cd generated/*/extracted/ST/COM`);
  console.log(`2. npm run pack "FDAT.T"`);
  console.log(`3. cd ../../.. && mkpsxiso st.xml -y -o test-all-magic-zero.bin`);
  console.log(`4. Test in emulator - ALL magic attacks should do 0 damage\n`);
}

// Run
try {
  processAllParts();
} catch (error) {
  console.error('ERROR:', error.message);
  process.exit(1);
}
