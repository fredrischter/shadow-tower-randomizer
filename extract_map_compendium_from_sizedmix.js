#!/usr/bin/env node
/**
 * Extract Map Data Compendium from SIZED_MIX_PARTS
 * 
 * Reads FDAT.T part 44 SIZED_MIX_PARTS files (map data tables).
 * Part 44 corresponds to map file (41 is logo, +3 is data file).
 * Contains 6 data tables that need to be documented.
 * 
 * Usage: node extract_map_compendium_from_sizedmix.js
 */

const fs = require('fs');
const path = require('path');

const SIZED_MIX_DIR = 'FDAT.T_PARTS/44 255800-25e800.T_SIZED_MIX_PARTS';
const OUTPUT_FILE = 'MAP_DATA_COMPENDIUM.md';

function readSizedMixParts() {
  console.log(`Reading SIZED_MIX_PARTS from: ${SIZED_MIX_DIR}`);
  
  const files = fs.readdirSync(SIZED_MIX_DIR)
    .filter(f => f.endsWith('.sizedMixPart'))
    .sort((a, b) => {
      const numA = parseInt(a.split(' ')[0]);
      const numB = parseInt(b.split(' ')[0]);
      return numA - numB;
    });
  
  const tables = [];
  
  for (const file of files) {
    const filePath = path.join(SIZED_MIX_DIR, file);
    const data = fs.readFileSync(filePath);
    
    // Parse filename to get offset range
    const match = file.match(/(\d+)\s+([0-9a-f]+)-([0-9a-f]+)\.sizedMixPart/i);
    if (match) {
      const tableIndex = parseInt(match[1]);
      const startOffset = parseInt(match[2], 16);
      const endOffset = parseInt(match[3], 16);
      
      tables.push({
        index: tableIndex,
        startOffset,
        endOffset,
        size: data.length,
        data,
        filename: file
      });
      
      console.log(`  Table ${tableIndex}: ${file} (${data.length} bytes, 0x${startOffset.toString(16)}-0x${endOffset.toString(16)})`);
    }
  }
  
  console.log(`\nTotal tables: ${tables.length}\n`);
  return tables;
}

function analyzeTableStructure(data) {
  const stats = {
    size: data.length,
    nonZero: 0,
    ff: 0,
    zero: 0,
    unique: new Set()
  };
  
  for (let i = 0; i < data.length; i++) {
    const byte = data[i];
    stats.unique.add(byte);
    if (byte === 0x00) stats.zero++;
    else if (byte === 0xFF) stats.ff++;
    else stats.nonZero++;
  }
  
  // Look for repeating patterns
  const patterns = {};
  for (let entrySize = 4; entrySize <= 64; entrySize++) {
    if (data.length % entrySize === 0) {
      patterns[entrySize] = {
        entryCount: data.length / entrySize,
        aligned: true
      };
    }
  }
  
  stats.patterns = patterns;
  stats.uniqueBytes = stats.unique.size;
  
  return stats;
}

function hexDump(data, startOffset, count) {
  let hex = '';
  for (let i = 0; i < Math.min(count, data.length); i += 16) {
    const chunk = data.slice(i, Math.min(i + 16, data.length));
    const hexStr = Array.from(chunk).map(b => b.toString(16).padStart(2, '0')).join(' ');
    const offset = (startOffset + i).toString(16).padStart(6, '0');
    hex += `${offset}: ${hexStr}\n`;
  }
  return hex;
}

function detectEntrySize(data) {
  // Try to detect entry size by looking for repeating patterns
  const candidates = [];
  
  for (let size = 8; size <= 128; size++) {
    if (data.length % size !== 0) continue;
    
    const entryCount = data.length / size;
    if (entryCount < 2) continue;
    
    // Check if entries have similar patterns
    let similarityScore = 0;
    for (let pos = 0; pos < size && pos < 8; pos++) {
      const values = [];
      for (let entry = 0; entry < Math.min(10, entryCount); entry++) {
        values.push(data[entry * size + pos]);
      }
      const uniqueValues = new Set(values).size;
      if (uniqueValues > 1 && uniqueValues < values.length) {
        similarityScore++;
      }
    }
    
    candidates.push({
      size,
      entryCount,
      similarityScore
    });
  }
  
  candidates.sort((a, b) => b.similarityScore - a.similarityScore);
  return candidates.slice(0, 5);
}

function generateMarkdown(tables) {
  let md = '# Map Data Compendium\n\n';
  md += `Generated from FDAT.T part 44 SIZED_MIX_PARTS\n\n`;
  md += `**Part 44 structure:** Map data file (part 41 = logo, part 41+3 = data)\n\n`;
  md += `**Total tables:** ${tables.length}\n\n`;
  
  // Overview
  md += '## Tables Overview\n\n';
  md += '| Table | Offset Range | Size | Purpose |\n';
  md += '|-------|--------------|------|----------|\n';
  
  for (const table of tables) {
    md += `| ${table.index} | 0x${table.startOffset.toString(16)}-0x${table.endOffset.toString(16)} | ${table.size} bytes | Table ${table.index} |\n`;
  }
  md += '\n---\n\n';
  
  // Detailed table analysis
  for (const table of tables) {
    md += `## Table ${table.index}\n\n`;
    md += `**Filename:** ${table.filename}\n\n`;
    md += `**Offset range:** 0x${table.startOffset.toString(16)} - 0x${table.endOffset.toString(16)}\n\n`;
    md += `**Size:** ${table.size} bytes (0x${table.size.toString(16)})\n\n`;
    
    // Statistics
    const stats = analyzeTableStructure(table.data);
    md += '**Statistics:**\n\n';
    md += `- Non-zero bytes: ${stats.nonZero} (${(stats.nonZero/stats.size*100).toFixed(1)}%)\n`;
    md += `- 0xFF bytes: ${stats.ff} (${(stats.ff/stats.size*100).toFixed(1)}%)\n`;
    md += `- Zero bytes: ${stats.zero} (${(stats.zero/stats.size*100).toFixed(1)}%)\n`;
    md += `- Unique byte values: ${stats.uniqueBytes}\n\n`;
    
    // Potential entry sizes
    const entrySizes = detectEntrySize(table.data);
    if (entrySizes.length > 0) {
      md += '**Potential entry sizes:**\n\n';
      md += '| Size | Entry Count | Confidence |\n';
      md += '|------|-------------|------------|\n';
      for (const candidate of entrySizes) {
        const confidence = candidate.similarityScore > 3 ? 'High' : 
                          candidate.similarityScore > 1 ? 'Medium' : 'Low';
        md += `| ${candidate.size} bytes | ${candidate.entryCount} | ${confidence} |\n`;
      }
      md += '\n';
    }
    
    // Hex dump - first 256 bytes
    md += '### First 256 bytes\n\n';
    md += '```\n';
    md += hexDump(table.data, table.startOffset, 256);
    md += '```\n\n';
    
    // Hex dump - last 128 bytes
    if (table.size > 256) {
      md += '### Last 128 bytes\n\n';
      md += '```\n';
      const lastStart = table.size - 128;
      md += hexDump(table.data.slice(lastStart), table.startOffset + lastStart, 128);
      md += '```\n\n';
    }
    
    md += '---\n\n';
  }
  
  // Notes section
  md += '## Notes\n\n';
  md += '### Common PSX Map Data Structures\n\n';
  md += '- **Table 0:** Often creature spawn data\n';
  md += '- **Table 1:** Item placement data\n';
  md += '- **Table 2:** Exit/entrance data\n';
  md += '- **Table 3:** Scenario objects (decorations, props)\n';
  md += '- **Table 4:** Collision data or triggers\n';
  md += '- **Table 5:** Unknown/additional data\n';
  md += '- **Table 6:** Unknown/additional data\n\n';
  md += '### Analysis Approach\n\n';
  md += '1. **Identify entry size:** Look for repeating patterns and common divisors\n';
  md += '2. **Cross-reference with map.json:** Match exits/entrances by ID\n';
  md += '3. **Test modifications:** Change values and observe in-game effects\n';
  md += '4. **Document structure:** Create data_model.js classes for each table\n\n';
  
  return md;
}

function main() {
  console.log('=== Map Data Compendium Generator ===\n');
  
  // Read all SIZED_MIX_PARTS tables
  const tables = readSizedMixParts();
  
  // Generate markdown
  console.log('Generating markdown...');
  const markdown = generateMarkdown(tables);
  
  // Write output
  fs.writeFileSync(OUTPUT_FILE, markdown);
  console.log(`\n✅ Generated: ${OUTPUT_FILE} (${(markdown.length / 1024).toFixed(1)} KB)`);
  console.log(`   Contains analysis of ${tables.length} map data tables`);
}

main();
