#!/usr/bin/env node

/**
 * Magic Data Compendium Extractor
 * 
 * Extracts ALL data for ALL 117 valid magic IDs from FDAT.T parts 482-808
 * and creates a comprehensive markdown file showing all attributes for each
 * magic entry so user can identify which fields are damage/power values.
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

// Magic names from magic.txt (known names)
const magicNames = {
  0x31: 'acid_slime',
  0x30: 'unknown_0x30',
  0x32: 'unknown_0x32',
  // Add more as we discover them
};

function getMagicName(id) {
  return magicNames[id] || `magic_0x${id.toString(16).toUpperCase()}`;
}

function findFDATPartsDir() {
  const possiblePaths = [
    'generated/no-change/extracted/ST/COM/FDAT.T_PARTS',
    'generated/randomized-medium/extracted/ST/COM/FDAT.T_PARTS',
    'generated/bonanza/extracted/ST/COM/FDAT.T_PARTS',
  ];
  
  for (const p of possiblePaths) {
    if (fs.existsSync(p)) {
      return p;
    }
  }
  
  throw new Error('FDAT.T_PARTS not found. Run: npm run mod "./generated/st.bin" "./params/no-change.json"');
}

function extractMagicData() {
  const partsDir = findFDATPartsDir();
  console.log(`Found FDAT.T_PARTS at: ${partsDir}\n`);
  
  const allMagicEntries = [];
  let totalOccurrences = 0;
  
  // Scan parts 482-808
  for (let partNum = 482; partNum <= 808; partNum++) {
    const partFiles = fs.readdirSync(partsDir).filter(f => {
      const match = f.match(/^(\d+)\s/);
      return match && parseInt(match[1]) === partNum;
    });
    
    if (partFiles.length === 0) continue;
    
    const partFile = path.join(partsDir, partFiles[0]);
    const data = fs.readFileSync(partFile);
    
    // Scan for magic IDs
    for (let offset = 0; offset < data.length - 19; offset++) {
      const byte = data[offset];
      
      if (validMagicIds.includes(byte)) {
        // Found a magic ID - extract 20 bytes starting from this position
        const entry = {
          magicId: byte,
          magicName: getMagicName(byte),
          part: partNum,
          offset: offset,
          bytes: []
        };
        
        // Extract all 20 bytes
        for (let i = 0; i < 20 && offset + i < data.length; i++) {
          entry.bytes.push(data[offset + i]);
        }
        
        allMagicEntries.push(entry);
        totalOccurrences++;
      }
    }
  }
  
  console.log(`Found ${totalOccurrences} magic ID occurrences\n`);
  return allMagicEntries;
}

function formatByteAsHex(byte) {
  return byte.toString(16).toUpperCase().padStart(2, '0');
}

function formatByteAsDecimal(byte) {
  return byte.toString().padStart(3, ' ');
}

function get16BitValue(bytes, offset) {
  if (offset + 1 >= bytes.length) return null;
  return bytes[offset] | (bytes[offset + 1] << 8);
}

function generateMarkdownCompendium(entries) {
  let md = '# Magic Data Compendium - FDAT.T Analysis\n\n';
  md += 'Comprehensive extraction of all magic/projectile data from FDAT.T parts 482-808.\n\n';
  md += `**Total magic ID occurrences found:** ${entries.length}\n\n`;
  md += '---\n\n';
  
  // Group by magic ID
  const groupedByID = {};
  for (const entry of entries) {
    if (!groupedByID[entry.magicId]) {
      groupedByID[entry.magicId] = [];
    }
    groupedByID[entry.magicId].push(entry);
  }
  
  // Sort by magic ID
  const sortedIds = Object.keys(groupedByID).map(k => parseInt(k)).sort((a, b) => a - b);
  
  md += '## Table of Contents\n\n';
  for (const id of sortedIds) {
    md += `- [0x${id.toString(16).toUpperCase()} - ${getMagicName(id)}](#0x${id.toString(16)})\n`;
  }
  md += '\n---\n\n';
  
  // Detailed entries for each magic ID
  for (const id of sortedIds) {
    const entries = groupedByID[id];
    md += `## 0x${id.toString(16).toUpperCase()} - ${getMagicName(id)}\n\n`;
    md += `**Occurrences found:** ${entries.length}\n\n`;
    
    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i];
      md += `### Occurrence ${i + 1} (Part ${entry.part}, Offset 0x${entry.offset.toString(16).toUpperCase()})\n\n`;
      
      // Show all 20 bytes in different formats
      md += '**Raw Bytes (Hex):**\n```\n';
      for (let j = 0; j < entry.bytes.length; j++) {
        md += formatByteAsHex(entry.bytes[j]) + ' ';
        if ((j + 1) % 10 === 0) md += '\n';
      }
      md += '\n```\n\n';
      
      md += '**Byte-by-Byte Breakdown:**\n\n';
      md += '| Offset | Hex | Dec | Interpretation |\n';
      md += '|--------|-----|-----|----------------|\n';
      md += `| +0 | 0x${formatByteAsHex(entry.bytes[0])} | ${formatByteAsDecimal(entry.bytes[0])} | **Magic ID** |\n`;
      md += `| +1 | 0x${formatByteAsHex(entry.bytes[1])} | ${formatByteAsDecimal(entry.bytes[1])} | **Type/Flags** |\n`;
      
      for (let j = 2; j < entry.bytes.length; j++) {
        const byte = entry.bytes[j];
        let interpretation = 'Unknown attribute';
        
        // Highlight potential damage values (typical range 10-500)
        if (byte >= 10 && byte <= 255) {
          interpretation = `Potential damage/stat value (${byte})`;
        } else if (byte === 0) {
          interpretation = 'Zero (unused or coordinate)';
        } else if (byte === 0xff) {
          interpretation = 'FF (null/max marker)';
        }
        
        md += `| +${j} | 0x${formatByteAsHex(byte)} | ${formatByteAsDecimal(byte)} | ${interpretation} |\n`;
      }
      md += '\n';
      
      // Show 16-bit interpretations
      md += '**16-bit Value Interpretations:**\n\n';
      md += '| Offset | Value (16-bit LE) | Dec | Notes |\n';
      md += '|--------|-------------------|-----|-------|\n';
      
      for (let j = 2; j < entry.bytes.length - 1; j += 2) {
        const val = get16BitValue(entry.bytes, j);
        if (val !== null) {
          let notes = '';
          if (val >= 10 && val <= 1000) {
            notes = '**Potential damage value**';
          } else if (val === 0) {
            notes = 'Zero';
          } else if (val > 1000 && val < 10000) {
            notes = 'Potential coordinate/large value';
          }
          md += `| +${j} | 0x${val.toString(16).toUpperCase().padStart(4, '0')} | ${val} | ${notes} |\n`;
        }
      }
      md += '\n';
      
      if (i < entries.length - 1) {
        md += '---\n\n';
      }
    }
    
    md += '\n';
  }
  
  return md;
}

function main() {
  try {
    console.log('Extracting magic data from FDAT.T parts 482-808...\n');
    
    const entries = extractMagicData();
    
    console.log('Generating markdown compendium...\n');
    const markdown = generateMarkdownCompendium(entries);
    
    const outputFile = 'MAGIC_DATA_COMPENDIUM.md';
    fs.writeFileSync(outputFile, markdown);
    
    console.log(`✓ Created ${outputFile}`);
    console.log(`✓ Found data for ${Object.keys(entries.reduce((acc, e) => { acc[e.magicId] = true; return acc; }, {})).length} unique magic IDs`);
    console.log(`✓ Total occurrences: ${entries.length}`);
    console.log('\nReview the compendium file to identify which byte offsets contain damage/power values.');
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main();
