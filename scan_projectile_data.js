#!/usr/bin/env node

/**
 * Projectile/Spell Data Structure Scanner
 * 
 * Scans FDAT.T parts 482-808 to find the actual projectile/spell damage data table.
 * EntityStateData type 0x30 contains magic IDs that reference this separate data structure.
 * 
 * User feedback: "magic projectiles are shot and they cause damage when they hit the player -
 * so most likely that are attributes of other object than the creature that holds that 
 * entityData, but it should be other data structure"
 * 
 * Search range: FDAT.T parts 482-808 (user-specified)
 */

const fs = require('fs');
const path = require('path');

const FDAT_PARTS_DIR = './FDAT.T_PARTS';
const START_PART = 482;
const END_PART = 808;

// Typical damage value ranges for magic/projectiles
const MIN_DAMAGE = 10;
const MAX_DAMAGE = 1000;

// Scan a binary buffer for repeating patterns (data tables)
function findRepeatingPatterns(buffer, partNum) {
  const results = [];
  
  // Try different entry sizes (common sizes: 16, 24, 32, 48, 64 bytes)
  const candidateSizes = [16, 20, 24, 28, 32, 40, 48, 56, 64];
  
  for (const entrySize of candidateSizes) {
    if (buffer.length < entrySize * 3) continue; // Need at least 3 entries
    
    const maxEntries = Math.floor(buffer.length / entrySize);
    if (maxEntries < 5) continue; // Need reasonable number of entries
    
    // Look for damage-like 16-bit values at various offsets
    for (let damageOffset = 0; damageOffset < Math.min(entrySize - 2, 32); damageOffset += 2) {
      let validEntries = 0;
      const damages = [];
      
      for (let i = 0; i < Math.min(maxEntries, 50); i++) {
        const offset = i * entrySize + damageOffset;
        if (offset + 2 > buffer.length) break;
        
        const value = buffer.readUInt16LE(offset);
        
        if (value >= MIN_DAMAGE && value <= MAX_DAMAGE) {
          validEntries++;
          damages.push(value);
        }
      }
      
      // If many entries have damage-like values, this might be our table
      const validRatio = validEntries / Math.min(maxEntries, 50);
      if (validRatio > 0.3 && validEntries >= 5) {
        results.push({
          partNum,
          entrySize,
          damageOffset,
          validEntries,
          totalEntries: maxEntries,
          validRatio,
          sampleDamages: damages.slice(0, 10)
        });
      }
    }
  }
  
  return results;
}

// Analyze a single part file
function analyzePart(partNum) {
  const files = fs.readdirSync(FDAT_PARTS_DIR);
  const partFile = files.find(f => f.startsWith(`${partNum} `));
  
  if (!partFile) {
    return null;
  }
  
  const filePath = path.join(FDAT_PARTS_DIR, partFile);
  const stats = fs.statSync(filePath);
  
  if (stats.size === 0) {
    return null;
  }
  
  const buffer = fs.readFileSync(filePath);
  const patterns = findRepeatingPatterns(buffer, partNum);
  
  return {
    partNum,
    file: partFile,
    size: stats.size,
    patterns
  };
}

// Main scanner
function scanProjectileData() {
  console.log('Scanning FDAT.T parts 482-808 for projectile/spell data structures...\n');
  
  const allResults = [];
  
  for (let partNum = START_PART; partNum <= END_PART; partNum++) {
    const result = analyzePart(partNum);
    
    if (result && result.patterns.length > 0) {
      allResults.push(result);
    }
  }
  
  // Sort by confidence (validRatio * validEntries)
  allResults.sort((a, b) => {
    const scoreA = Math.max(...a.patterns.map(p => p.validRatio * p.validEntries));
    const scoreB = Math.max(...b.patterns.map(p => p.validRatio * p.validEntries));
    return scoreB - scoreA;
  });
  
  // Report findings
  console.log(`Found ${allResults.length} parts with potential projectile/spell data:\n`);
  
  allResults.slice(0, 20).forEach(result => {
    console.log(`Part ${result.partNum} (${result.file}):`);
    console.log(`  Size: ${result.size} bytes`);
    
    // Show top 3 patterns per part
    result.patterns.slice(0, 3).forEach((pattern, idx) => {
      console.log(`  Pattern ${idx + 1}:`);
      console.log(`    Entry size: ${pattern.entrySize} bytes`);
      console.log(`    Damage offset: +0x${pattern.damageOffset.toString(16).padStart(2, '0')}`);
      console.log(`    Valid entries: ${pattern.validEntries}/${pattern.totalEntries} (${(pattern.validRatio * 100).toFixed(1)}%)`);
      console.log(`    Sample damage values: ${pattern.sampleDamages.join(', ')}`);
    });
    console.log('');
  });
  
  // Output detailed JSON for top candidates
  if (allResults.length > 0) {
    const topCandidates = allResults.slice(0, 10);
    fs.writeFileSync(
      'projectile_data_candidates.json',
      JSON.stringify(topCandidates, null, 2)
    );
    console.log('Detailed results written to projectile_data_candidates.json\n');
  }
  
  // Provide guidance
  console.log('Next steps:');
  console.log('1. Review top candidates above');
  console.log('2. Check projectile_data_candidates.json for details');
  console.log('3. Cross-reference with magic IDs from EntityStateData type 0x30');
  console.log('4. Examine hex data of top candidates to identify structure');
  console.log('5. Modify damage values in identified structure');
  console.log('6. Test in-game to verify magic damage changes');
}

// Run scanner
try {
  if (!fs.existsSync(FDAT_PARTS_DIR)) {
    console.error(`Error: ${FDAT_PARTS_DIR} directory not found`);
    console.error('Run "npm run mod ./generated/st.bin" first to extract FDAT.T');
    process.exit(1);
  }
  
  scanProjectileData();
} catch (error) {
  console.error('Error:', error.message);
  process.exit(1);
}
