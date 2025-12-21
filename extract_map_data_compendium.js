#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

// Extract and document map data from part 44
// Part 44 contains map data with 6 distinct data tables
// According to user: part 41 is logo file, +3 is data file (so 44 is map data)

const MAP_DATA_PART = 'FDAT.T_PARTS/44 255800-25e800.T';
const OUTPUT_FILE = 'MAP_DATA_COMPENDIUM.md';

function hexDump(data, baseOffset = 0, maxBytes = null) {
  const bytes = maxBytes ? data.slice(0, maxBytes) : data;
  let result = '';
  
  for (let i = 0; i < bytes.length; i += 16) {
    const chunk = bytes.slice(i, i + 16);
    const hex = Array.from(chunk).map(b => b.toString(16).padStart(2, '0')).join(' ');
    const ascii = Array.from(chunk).map(b => (b >= 32 && b < 127) ? String.fromCharCode(b) : '.').join('');
    result += `${(baseOffset + i).toString(16).padStart(6, '0')}: ${hex.padEnd(48, ' ')} | ${ascii}\n`;
  }
  
  return result;
}

function findDataTables(data) {
  // Analyze data structure to identify the 6 tables
  // Look for patterns:
  // - Repeating structures
  // - Header/size markers
  // - Alignment boundaries
  
  const tables = [];
  let offset = 0;
  
  // Strategy: Look for table boundaries based on:
  // 1. 16-bit size headers
  // 2. Alignment patterns (256-byte, 512-byte, etc.)
  // 3. Data pattern changes
  
  console.log('Analyzing map data structure...');
  console.log(`Total file size: ${data.length} bytes`);
  
  // Check for 32-bit header (common in PSX data tables)
  const header1 = data.readUInt32LE(0);
  const header2 = data.readUInt32LE(4);
  console.log(`First 32-bit values: 0x${header1.toString(16)}, 0x${header2.toString(16)}`);
  
  // Scan for potential table boundaries
  // Look for sequences of 0x00 or 0xFF that might indicate padding/boundaries
  let lastNonZero = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] !== 0 && data[i] !== 0xFF) {
      if (i - lastNonZero > 64) {
        // Found a gap - potential table boundary
        console.log(`Potential boundary at 0x${i.toString(16)} (gap of ${i - lastNonZero} bytes)`);
      }
      lastNonZero = i;
    }
  }
  
  // Try to identify tables based on repeating patterns
  // Many PSX game data tables have entries of fixed size
  const entrySizes = [4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 64];
  
  for (const entrySize of entrySizes) {
    let consistentCount = 0;
    let testOffset = 0;
    
    while (testOffset + entrySize * 3 < Math.min(data.length, 512)) {
      // Test if this could be start of table with this entry size
      // Check for repeating non-zero patterns
      let hasPattern = false;
      
      for (let i = 0; i < 3; i++) {
        const entry = data.slice(testOffset + i * entrySize, testOffset + (i + 1) * entrySize);
        const nonZero = entry.filter(b => b !== 0).length;
        if (nonZero > entrySize / 4) {
          hasPattern = true;
        }
      }
      
      if (hasPattern) {
        console.log(`Possible ${entrySize}-byte entries starting at 0x${testOffset.toString(16)}`);
        break;
      }
      
      testOffset += entrySize;
    }
  }
  
  // For now, create default 6-table structure
  // User will need to provide more info about exact boundaries
  const fileSize = data.length;
  
  // Heuristic: Split into 6 roughly equal sections
  // This is a placeholder - actual structure needs verification
  const sectionSize = Math.floor(fileSize / 6);
  
  for (let i = 0; i < 6; i++) {
    const start = i * sectionSize;
    const end = (i === 5) ? fileSize : (i + 1) * sectionSize;
    tables.push({
      index: i + 1,
      offset: start,
      size: end - start,
      data: data.slice(start, end)
    });
  }
  
  return tables;
}

function extractMapData() {
  console.log('Extracting map data from part 44...');
  
  const data = fs.readFileSync(MAP_DATA_PART);
  console.log(`File size: ${data.length} bytes (0x${data.length.toString(16)})`);
  
  let markdown = '# Map Data Compendium\n\n';
  markdown += `Extracted from FDAT.T part 44 (map data file)\n\n`;
  markdown += `**Part 44 offset:** 0x255800-0x25e800\n`;
  markdown += `**File size:** ${data.length} bytes (0x${data.length.toString(16)})\n\n`;
  markdown += `## Overview\n\n`;
  markdown += `Part 44 contains map data structures. According to the file naming convention:\n`;
  markdown += `- Part 41: Logo file\n`;
  markdown += `- Part 44: Map data file (Part 41 + 3)\n\n`;
  markdown += `The file contains 6 distinct data tables that define map properties, layout, and metadata.\n\n`;
  
  // Analyze and extract tables
  const tables = findDataTables(data);
  
  markdown += `## Data Tables\n\n`;
  markdown += `Found ${tables.length} data tables:\n\n`;
  
  for (const table of tables) {
    markdown += `### Table ${table.index}\n\n`;
    markdown += `**Offset:** 0x${table.offset.toString(16).toUpperCase()}\n`;
    markdown += `**Size:** ${table.size} bytes (0x${table.size.toString(16)})\n`;
    markdown += `**End:** 0x${(table.offset + table.size).toString(16).toUpperCase()}\n\n`;
    
    // Analyze table structure
    const nonZeroBytes = table.data.filter(b => b !== 0).length;
    const ffBytes = table.data.filter(b => b === 0xFF).length;
    
    markdown += `**Statistics:**\n`;
    markdown += `- Non-zero bytes: ${nonZeroBytes} (${(nonZeroBytes / table.size * 100).toFixed(1)}%)\n`;
    markdown += `- 0xFF bytes: ${ffBytes} (${(ffBytes / table.size * 100).toFixed(1)}%)\n`;
    markdown += `- Zero bytes: ${table.size - nonZeroBytes} (${((table.size - nonZeroBytes) / table.size * 100).toFixed(1)}%)\n\n`;
    
    // First 256 bytes hex dump
    markdown += `**First 256 bytes (hex dump):**\n\`\`\`\n`;
    markdown += hexDump(table.data, table.offset, 256);
    markdown += `\`\`\`\n\n`;
    
    // Detect potential entry patterns
    markdown += `**Pattern Analysis:**\n`;
    
    // Check for 16-byte aligned entries
    let has16BytePattern = false;
    for (let i = 0; i < Math.min(table.size, 256); i += 16) {
      const chunk = table.data.slice(i, i + 16);
      if (chunk.filter(b => b !== 0).length > 4) {
        has16BytePattern = true;
      }
    }
    
    if (has16BytePattern) {
      markdown += `- Appears to have 16-byte aligned data structures\n`;
    }
    
    // Check for 32-bit values
    if (table.size >= 4) {
      const firstValue = table.data.readUInt32LE(0);
      const secondValue = table.size >= 8 ? table.data.readUInt32LE(4) : 0;
      markdown += `- First 32-bit value: 0x${firstValue.toString(16).padStart(8, '0')} (${firstValue})\n`;
      if (table.size >= 8) {
        markdown += `- Second 32-bit value: 0x${secondValue.toString(16).padStart(8, '0')} (${secondValue})\n`;
      }
    }
    
    markdown += `\n`;
    
    // Last 128 bytes hex dump (if table is large enough)
    if (table.size > 384) {
      markdown += `**Last 128 bytes (hex dump):**\n\`\`\`\n`;
      const lastBytes = table.data.slice(-128);
      markdown += hexDump(lastBytes, table.offset + table.size - 128, 128);
      markdown += `\`\`\`\n\n`;
    }
  }
  
  markdown += `## Structure Notes\n\n`;
  markdown += `### Table Boundaries\n\n`;
  markdown += `The exact boundaries of the 6 tables need verification. Current analysis uses heuristic division.\n\n`;
  markdown += `To find exact boundaries, look for:\n`;
  markdown += `1. Size headers (16-bit or 32-bit integers at table start)\n`;
  markdown += `2. Padding regions (sequences of 0x00 or 0xFF)\n`;
  markdown += `3. Alignment boundaries (256-byte, 512-byte aligned)\n`;
  markdown += `4. Pattern changes (different data structure formats)\n\n`;
  
  markdown += `### Common Map Data Table Types\n\n`;
  markdown += `Typical map data structures in PSX games include:\n`;
  markdown += `1. **Tile/Cell Data** - Grid layout, floor/wall types, heights\n`;
  markdown += `2. **Object Placement** - Doors, items, enemies, scenery positions\n`;
  markdown += `3. **Collision Data** - Walkable regions, wall boundaries\n`;
  markdown += `4. **Lighting/Visual** - Fog, ambient color, lighting zones\n`;
  markdown += `5. **Navigation/AI** - Pathfinding nodes, trigger zones\n`;
  markdown += `6. **Metadata** - Map name, area transitions, script references\n\n`;
  
  markdown += `### Next Steps\n\n`;
  markdown += `To properly parse these tables:\n`;
  markdown += `1. Identify exact table boundaries (may need SIZED_MIX_PARTS data)\n`;
  markdown += `2. Determine entry size for each table\n`;
  markdown += `3. Map fields to game data (coordinates, IDs, flags, etc.)\n`;
  markdown += `4. Cross-reference with existing map.json and data_model.js\n`;
  markdown += `5. Update data_model.js with proper parsing structures\n\n`;
  
  fs.writeFileSync(OUTPUT_FILE, markdown);
  console.log(`\n✅ Generated: ${OUTPUT_FILE}`);
  console.log(`   Documented ${tables.length} data tables`);
}

// Run extraction
extractMapData();
