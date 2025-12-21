#!/usr/bin/env node

/**
 * Magic Data Compendium Extractor
 * 
 * Extracts projectile/spell data from FDAT.T parts 482-808 using array index approach.
 * Magic IDs (0x30-0xFF) are treated as array indices, not byte values to search for.
 * 
 * Usage:
 *   1. npm run mod "./generated/st.bin" "./params/no-change.json"
 *   2. node extract_magic_compendium.js
 *   3. Review MAGIC_DATA_COMPENDIUM.md
 */

const fs = require('fs');
const path = require('path');

// All 117 valid magic IDs from magic.txt (as array indices)
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

// Magic names from magic.txt (for documentation)
const magicNames = {
  0x31: 'acid_slime',
  // Add more as needed for documentation
};

// Entry sizes to test
const entrySizes = [16, 20, 24, 28, 32, 40, 48, 56, 64];

console.log('Magic Data Compendium Extractor');
console.log('================================\n');

// Find FDAT.T_PARTS directory
const searchPaths = [
  'generated/no-change/extracted/ST/COM/FDAT.T_PARTS',
  'generated/randomized-medium/extracted/ST/COM/FDAT.T_PARTS',
];

let fdatPartsDir = null;
for (const searchPath of searchPaths) {
  if (fs.existsSync(searchPath)) {
    fdatPartsDir = searchPath;
    break;
  }
}

if (!fdatPartsDir) {
  console.error('ERROR: Could not find FDAT.T_PARTS directory');
  console.error('Please run: npm run mod "./generated/st.bin" "./params/no-change.json"');
  process.exit(1);
}

console.log(`Found FDAT.T_PARTS at: ${fdatPartsDir}\n`);

// Scan for candidate arrays
console.log('Scanning parts 482-808 for candidate projectile arrays...\n');

const candidates = [];
const MAX_CANDIDATES = 50; // Limit to top 50 candidates to avoid memory issues

for (let partNum = 482; partNum <= 808; partNum++) {
  const files = fs.readdirSync(fdatPartsDir);
  const partFile = files.find(f => f.startsWith(`${partNum} `));
  
  if (!partFile) continue;
  
  const partPath = path.join(fdatPartsDir, partFile);
  const partData = fs.readFileSync(partPath);
  
  if (partNum % 50 === 0) {
    console.log(`Scanning part ${partNum}... (${candidates.length} candidates found so far)`);
  }
  
  // Test different entry sizes
  for (const entrySize of entrySizes) {
    const maxIndex = 256; // Arrays go from 0x00 to 0xFF
    const arraySize = maxIndex * entrySize;
    
    // Only test well-aligned offsets (256-byte alignment is common for data arrays)
    // This dramatically reduces search space
    for (let offset = 0; offset < partData.length - arraySize; offset += 256) {
      
      // Quick validation: check if first few entries look reasonable
      let quickValid = 0;
      for (let testId of [0x30, 0x31, 0x32, 0x33, 0x34]) {
        const testOffset = offset + (testId * entrySize);
        if (testOffset + entrySize <= partData.length) {
          const testEntry = partData.slice(testOffset, testOffset + entrySize);
          if (testEntry.some(b => b !== 0)) quickValid++;
        }
      }
      
      // Skip if quick test fails
      if (quickValid < 3) continue;
      
      // Full validation: extract entries for all magic IDs
      const entries = [];
      let validCount = 0;
      let damageCount = 0;
      
      for (const magicId of validMagicIds) {
        const entryOffset = offset + (magicId * entrySize);
        
        if (entryOffset + entrySize > partData.length) break;
        
        const entry = partData.slice(entryOffset, entryOffset + entrySize);
        
        // Check if entry has data (not all zeros)
        const hasData = entry.some(b => b !== 0);
        if (hasData) validCount++;
        
        // Check for damage-like values
        for (let i = 0; i < entry.length; i++) {
          const byte = entry[i];
          if (byte >= 10 && byte <= 255) {
            damageCount++;
            break;
          }
        }
        
        entries.push({
          magicId,
          offset: entryOffset,
          data: entry
        });
      }
      
      // Validate candidate
      const validRatio = validCount / validMagicIds.length;
      
      if (validRatio >= 0.3 && damageCount >= 20) {
        const score = validCount + (damageCount * 0.5);
        
        candidates.push({
          part: partNum,
          offset,
          entrySize,
          validCount,
          damageCount,
          score,
          entries
        });
        
        // Keep only top candidates to avoid memory issues
        if (candidates.length > MAX_CANDIDATES * 2) {
          candidates.sort((a, b) => b.score - a.score);
          candidates.length = MAX_CANDIDATES;
        }
      }
    }
  }
}

console.log(`Found ${candidates.length} candidate arrays\n`);

if (candidates.length === 0) {
  console.error('No candidate arrays found. The data structure may be different than expected.');
  process.exit(1);
}

// Sort by score (highest first)
candidates.sort((a, b) => b.score - a.score);

// Generate markdown compendium
let markdown = '# Magic Projectile Data Compendium\n\n';
markdown += 'Generated from FDAT.T parts 482-808\n';
markdown += 'Treating magic IDs as array indices\n\n';

markdown += `## Summary\n\n`;
markdown += `Found ${candidates.length} candidate arrays\n`;
markdown += `Candidates ranked by confidence score (higher = better)\n\n`;

markdown += '| Rank | Part | Offset | Size | Valid | Damage | Score |\n';
markdown += '|------|------|--------|------|-------|--------|-------|\n';

candidates.slice(0, 10).forEach((cand, idx) => {
  markdown += `| ${idx + 1} | ${cand.part} | 0x${cand.offset.toString(16).toUpperCase()} | ${cand.entrySize} | ${cand.validCount} | ${cand.damageCount} | ${Math.floor(cand.score)} |\n`;
});

markdown += '\n---\n\n';

// Document top 5 candidates in detail
const topCandidates = candidates.slice(0, 5);

topCandidates.forEach((candidate, candIdx) => {
  markdown += `## Candidate ${candIdx + 1}`;
  if (candIdx === 0) markdown += ' ⭐ HIGHEST CONFIDENCE';
  markdown += '\n\n';
  
  markdown += `**Part:** ${candidate.part}\n`;
  markdown += `**Offset:** 0x${candidate.offset.toString(16).toUpperCase()}\n`;
  markdown += `**Entry Size:** ${candidate.entrySize} bytes\n`;
  markdown += `**Valid Entries:** ${candidate.validCount}/${validMagicIds.length} (${Math.floor(candidate.validCount / validMagicIds.length * 100)}%)\n`;
  markdown += `**Damage Candidates:** ${candidate.damageCount}/${validMagicIds.length} (${Math.floor(candidate.damageCount / validMagicIds.length * 100)}%)\n`;
  markdown += `**Confidence Score:** ${Math.floor(candidate.score)}\n\n`;
  
  markdown += '### Entries for All 117 Magic IDs\n\n';
  
  // Show entries for all magic IDs
  candidate.entries.forEach((entry, idx) => {
    const magicId = entry.magicId;
    const magicName = magicNames[magicId] || '';
    
    markdown += `#### Index 0x${magicId.toString(16).toUpperCase()} (${magicId})`;
    if (magicName) markdown += ` - ${magicName}`;
    if (magicId === 0x31) markdown += ' ⭐'; // Highlight acid slime
    markdown += '\n\n';
    
    markdown += `**Calculated Offset:** 0x${candidate.offset.toString(16).toUpperCase()} + (${magicId} × ${candidate.entrySize}) = 0x${entry.offset.toString(16).toUpperCase()}\n\n`;
    
    // Raw bytes
    markdown += '**Raw Bytes (Hex):**\n```\n';
    const hexBytes = [];
    for (let i = 0; i < entry.data.length; i++) {
      hexBytes.push(entry.data[i].toString(16).toUpperCase().padStart(2, '0'));
    }
    markdown += hexBytes.join(' ') + '\n```\n\n';
    
    // Byte-by-byte breakdown
    markdown += '| Offset | Hex | Dec | 16-bit LE | Notes |\n';
    markdown += '|--------|-----|-----|-----------|-------|\n';
    
    for (let i = 0; i < entry.data.length; i++) {
      const byte = entry.data[i];
      const hex = '0x' + byte.toString(16).toUpperCase().padStart(2, '0');
      const dec = byte;
      
      let val16 = '';
      let notes = '';
      
      if (i + 1 < entry.data.length) {
        const val = entry.data[i] | (entry.data[i + 1] << 8);
        val16 = val;
      }
      
      if (i === 0) notes = 'Magic ID';
      else if (i === 1) notes = 'Type/flags';
      else if (byte >= 10 && byte <= 255) notes = '**Potential damage/stat**';
      
      markdown += `| +${i} | ${hex} | ${dec} | ${val16} | ${notes} |\n`;
    }
    
    markdown += '\n';
    
    // Only show first 10 entries in detail, then summarize
    if (idx === 9 && candidate.entries.length > 10) {
      markdown += `... and ${candidate.entries.length - 10} more entries\n\n`;
      markdown += '(Full data available, showing first 10 for brevity)\n\n';
      return;
    }
  });
  
  markdown += '---\n\n';
});

// Write compendium
const outputPath = 'MAGIC_DATA_COMPENDIUM.md';
fs.writeFileSync(outputPath, markdown);

console.log(`✅ Generated: ${outputPath}`);
console.log(`\nTop candidate: Part ${candidates[0].part}, Offset 0x${candidates[0].offset.toString(16).toUpperCase()}, Entry Size ${candidates[0].entrySize} bytes`);
console.log(`Confidence Score: ${Math.floor(candidates[0].score)}`);
console.log(`\nReview the compendium to identify which candidate has sensible magic damage values.`);
console.log(`Check if acid slime (0x31) has low damage and boss magics have high damage.\n`);
