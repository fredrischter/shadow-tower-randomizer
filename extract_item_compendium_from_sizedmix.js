#!/usr/bin/env node
/**
 * Extract Item Data Compendium from SIZED_MIX_PARTS
 * 
 * Reads FDAT.T part 481 SIZED_MIX_PARTS files to extract item data with proper structure.
 * Generates comprehensive item data compendium with all fields documented.
 * 
 * Usage: node extract_item_compendium_from_sizedmix.js
 */

const fs = require('fs');
const path = require('path');

const SIZED_MIX_DIR = 'FDAT.T_PARTS/481 138b800-139c000.T_SIZED_MIX_PARTS';
const OUTPUT_FILE = 'ITEM_DATA_COMPENDIUM.md';

// Item field structure from data_model.js
const ITEM_FIELDS = [
  { name: 'unknown1', offset: 0, type: 'u8' },
  { name: 'unknown2', offset: 1, type: 'u8' },
  { name: 'unknown3', offset: 2, type: 'u8' },
  { name: 'unknown4', offset: 3, type: 'u8' },
  { name: 'texture_index_1', offset: 4, type: 'u8' },
  { name: 'texture_index_2', offset: 5, type: 'u8' },
  { name: 'unknown5', offset: 6, type: 'u8' },
  { name: 'type', offset: 7, type: 'u8', desc: 'WEAPON=1, ARMOR=2, HELMET=3, etc.' },
  { name: 'unknown6', offset: 8, type: 'u8' },
  { name: 'unknown7', offset: 9, type: 'u8' },
  { name: 'unknown8', offset: 10, type: 'u8' },
  { name: 'unknown9', offset: 11, type: 'u8' },
  { name: 'unknown10', offset: 12, type: 'u8' },
  { name: 'hand_type', offset: 13, type: 'u8', desc: '6=one-hand, 7=two-hand' },
  { name: 'unknown11', offset: 14, type: 'u8' },
  { name: 'unknown12', offset: 15, type: 'u8' },
  { name: 'str', offset: 16, type: 'u8', desc: 'Strength stat' },
  { name: 'spd', offset: 17, type: 'u8', desc: 'Speed stat' },
  { name: 'def', offset: 18, type: 'u8', desc: 'Defense stat' },
  { name: 'bal', offset: 19, type: 'u8', desc: 'Balance stat' },
  { name: 'sla', offset: 20, type: 'u8', desc: 'Slash resistance' },
  { name: 'smh', offset: 21, type: 'u8', desc: 'Smash resistance' },
  { name: 'pir', offset: 22, type: 'u8', desc: 'Pierce resistance' },
  { name: 'spr', offset: 23, type: 'u8', desc: 'Spirit stat' },
  { name: 'foc', offset: 24, type: 'u8', desc: 'Focus stat' },
  { name: 'ham', offset: 25, type: 'u8', desc: 'Hammer stat' },
  { name: 'pur', offset: 26, type: 'u8', desc: 'Purity stat' },
  { name: 'par', offset: 27, type: 'u8', desc: 'Parry stat' },
  { name: 'mel', offset: 28, type: 'u8', desc: 'Melee power' },
  { name: 'sol', offset: 29, type: 'u8', desc: 'Holy/Solomon stat' },
  { name: 'hp', offset: 30, type: 'u8', desc: 'HP bonus' },
  { name: 'attribute1_value', offset: 31, type: 'u8' },
  { name: 'attribute1_type', offset: 32, type: 'u8' },
  { name: 'attribute2_value', offset: 33, type: 'u8' },
  { name: 'attribute2_type', offset: 34, type: 'u8' },
  { name: 'elemental_type', offset: 35, type: 'u8' },
  { name: 'elemental_power', offset: 36, type: 'u8' },
  { name: 'max_dura', offset: 37, type: 'u8', desc: 'Max durability' },
  { name: 'weight', offset: 38, type: 'u8' },
  { name: 'unknown13', offset: 39, type: 'u8' },
  { name: 'dura', offset: 40, type: 'u8', desc: 'Current durability' },
  { name: 'unknown14', offset: 41, type: 'u8' },
  { name: 'unknown15', offset: 42, type: 'u8' },
  { name: 'unknown16', offset: 43, type: 'u8' }
];

const ITEM_SIZE = 44;

function readSizedMixParts() {
  console.log(`Reading SIZED_MIX_PARTS from: ${SIZED_MIX_DIR}`);
  
  const files = fs.readdirSync(SIZED_MIX_DIR)
    .filter(f => f.endsWith('.sizedMixPart'))
    .sort((a, b) => {
      const numA = parseInt(a.split(' ')[0]);
      const numB = parseInt(b.split(' ')[0]);
      return numA - numB;
    });
  
  let allData = Buffer.alloc(0);
  
  for (const file of files) {
    const filePath = path.join(SIZED_MIX_DIR, file);
    const data = fs.readFileSync(filePath);
    console.log(`  ${file}: ${data.length} bytes`);
    allData = Buffer.concat([allData, data]);
  }
  
  console.log(`Total data: ${allData.length} bytes (${Math.floor(allData.length / ITEM_SIZE)} items)\n`);
  return allData;
}

function extractItemData(data) {
  const items = [];
  const itemCount = Math.floor(data.length / ITEM_SIZE);
  
  for (let i = 0; i < itemCount; i++) {
    const offset = i * ITEM_SIZE;
    const itemData = data.slice(offset, offset + ITEM_SIZE);
    
    // Skip if all zeros or all FF
    const nonZero = itemData.filter(b => b !== 0x00 && b !== 0xFF).length;
    if (nonZero === 0) continue;
    
    items.push({
      index: i,
      offset: offset,
      data: itemData
    });
  }
  
  return items;
}

function parseItem(itemData) {
  const parsed = {};
  for (const field of ITEM_FIELDS) {
    parsed[field.name] = itemData[field.offset];
  }
  return parsed;
}

function generateMarkdown(items) {
  let md = '# Item Data Compendium\n\n';
  md += `Generated from FDAT.T part 481 SIZED_MIX_PARTS\n\n`;
  md += `**Total items found:** ${items.length}\n\n`;
  md += `**Entry size:** ${ITEM_SIZE} bytes\n\n`;
  
  // Field structure reference
  md += '## Item Data Structure (44 bytes)\n\n';
  md += '| Offset | Field | Type | Description |\n';
  md += '|--------|-------|------|-------------|\n';
  for (const field of ITEM_FIELDS) {
    const desc = field.desc || '';
    md += `| 0x${field.offset.toString(16).padStart(2, '0')} | ${field.name} | ${field.type} | ${desc} |\n`;
  }
  md += '\n---\n\n';
  
  // Per-item documentation
  md += '## Item Data Entries\n\n';
  
  for (const item of items.slice(0, 200)) {  // First 200 items
    md += `### Item ${item.index} (Offset 0x${item.offset.toString(16)})\n\n`;
    
    // Hex dump
    md += '**Raw hex:**\n```\n';
    for (let i = 0; i < item.data.length; i += 16) {
      const chunk = item.data.slice(i, Math.min(i + 16, item.data.length));
      const hex = Array.from(chunk).map(b => b.toString(16).padStart(2, '0')).join(' ');
      md += `${(item.offset + i).toString(16).padStart(6, '0')}: ${hex}\n`;
    }
    md += '```\n\n';
    
    // Parsed fields
    const parsed = parseItem(item.data);
    md += '**Parsed fields:**\n\n';
    md += '| Field | Hex | Dec | Notes |\n';
    md += '|-------|-----|-----|-------|\n';
    
    for (const field of ITEM_FIELDS) {
      const value = parsed[field.name];
      const hex = `0x${value.toString(16).padStart(2, '0')}`;
      const dec = value;
      let notes = '';
      
      // Add notes for interesting values
      if (field.name === 'type') {
        const types = ['', 'WEAPON', 'ARMOR', 'HELMET', 'SHIELD', 'ACCESSORY', 'CONSUMABLE', 'KEY'];
        notes = types[value] || `Type ${value}`;
      } else if (value === 0xFF) {
        notes = 'NULL/UNUSED';
      } else if (value > 0 && value < 255 && field.desc) {
        notes = field.desc;
      }
      
      md += `| ${field.name} | ${hex} | ${dec} | ${notes} |\n`;
    }
    md += '\n';
  }
  
  return md;
}

function main() {
  console.log('=== Item Data Compendium Generator ===\n');
  
  // Read all SIZED_MIX_PARTS
  const data = readSizedMixParts();
  
  // Extract item data
  console.log('Extracting item data...');
  const items = extractItemData(data);
  console.log(`Found ${items.length} non-empty items\n`);
  
  // Generate markdown
  console.log('Generating markdown...');
  const markdown = generateMarkdown(items);
  
  // Write output
  fs.writeFileSync(OUTPUT_FILE, markdown);
  console.log(`\n✅ Generated: ${OUTPUT_FILE} (${(markdown.length / 1024).toFixed(1)} KB)`);
  console.log(`   Contains documentation for ${Math.min(items.length, 200)} items`);
}

main();
