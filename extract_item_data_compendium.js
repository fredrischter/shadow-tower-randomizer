#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

// Extract and document item data from part 481
// Part 481 contains the complete item database

const ITEM_DATA_PART = 'FDAT.T_PARTS/481 138b800-139c000.T';
const ITEM_SIZE = 44; // bytes per item entry
const OUTPUT_FILE = 'ITEM_DATA_COMPENDIUM.md';

// Field definitions based on data_model.js ItemData class
const ITEM_FIELDS = [
  { offset: 0x00, name: 'unknown1', type: 'u8' },
  { offset: 0x01, name: 'unknown2', type: 'u8' },
  { offset: 0x02, name: 'unknown3', type: 'u8' },
  { offset: 0x03, name: 'unknown4', type: 'u8' },
  { offset: 0x04, name: 'texture_index_1', type: 'u8' },
  { offset: 0x05, name: 'texture_index_2', type: 'u8' },
  { offset: 0x06, name: 'unknown5', type: 'u8' },
  { offset: 0x07, name: 'type', type: 'u8', notes: '1=WEAPON, 2=ARMOR, 3=HELMET, etc.' },
  { offset: 0x08, name: 'unknown6', type: 'u8' },
  { offset: 0x09, name: 'unknown7', type: 'u8' },
  { offset: 0x0A, name: 'unknown8', type: 'u8' },
  { offset: 0x0B, name: 'unknown9', type: 'u8' },
  { offset: 0x0C, name: 'unknown10', type: 'u8' },
  { offset: 0x0D, name: 'hand_type', type: 'u8', notes: '6=one-hand, 7=two-hand' },
  { offset: 0x0E, name: 'unknown11', type: 'u8' },
  { offset: 0x0F, name: 'unknown12', type: 'u8' },
  { offset: 0x10, name: 'str', type: 'u8', notes: 'Strength stat' },
  { offset: 0x11, name: 'spd', type: 'u8', notes: 'Speed stat' },
  { offset: 0x12, name: 'def', type: 'u8', notes: 'Defense stat' },
  { offset: 0x13, name: 'bal', type: 'u8', notes: 'Balance stat' },
  { offset: 0x14, name: 'sla', type: 'u8', notes: 'Slash stat' },
  { offset: 0x15, name: 'smh', type: 'u8', notes: 'Smash stat' },
  { offset: 0x16, name: 'pir', type: 'u8', notes: 'Pierce stat' },
  { offset: 0x17, name: 'spr', type: 'u8', notes: 'Spirit stat' },
  { offset: 0x18, name: 'foc', type: 'u8', notes: 'Focus stat' },
  { offset: 0x19, name: 'ham', type: 'u8', notes: 'Hammer stat' },
  { offset: 0x1A, name: 'pur', type: 'u8', notes: 'Purity stat' },
  { offset: 0x1B, name: 'par', type: 'u8', notes: 'Parry stat' },
  { offset: 0x1C, name: 'mel', type: 'u8', notes: 'Melee power stat' },
  { offset: 0x1D, name: 'sol', type: 'u8', notes: 'Solomon/Holy stat' },
  { offset: 0x1E, name: 'hp', type: 'u8', notes: 'HP bonus' },
  { offset: 0x1F, name: 'attribute1_value', type: 'u8' },
  { offset: 0x20, name: 'attribute1_type', type: 'u8' },
  { offset: 0x21, name: 'attribute2_value', type: 'u8' },
  { offset: 0x22, name: 'attribute2_type', type: 'u8' },
  { offset: 0x23, name: 'elemental_type', type: 'u8' },
  { offset: 0x24, name: 'elemental_power', type: 'u8' },
  { offset: 0x25, name: 'max_dura', type: 'u8', notes: 'Max durability' },
  { offset: 0x26, name: 'weight', type: 'u8' },
  { offset: 0x27, name: 'unknown13', type: 'u8' },
  { offset: 0x28, name: 'dura', type: 'u8', notes: 'Current durability' },
  { offset: 0x29, name: 'unknown14', type: 'u8' },
  { offset: 0x2A, name: 'unknown15', type: 'u8' },
  { offset: 0x2B, name: 'unknown16', type: 'u8' }
];

// Item names from constants.js
const ITEM_NAMES = [
  'short_sword', 'short_sword', 'deadly_short_sword', 'long_sword', 'long_sword',
  'long_sword', 'keenest_long_sword', 'fiery_long_sword', 'silent_sword', 'rapier',
  'rapier', 'lethal_rapier', 'shadow_blade', 'shadow_wolf', 'shadow_tiger',
  'broad_sword', 'broad_sword', 'broad_sword', 'deadly_broad_sword', 'broad_sword',
  'crushing_broad_sword', 'keenest_broad_sword', 'guardian_broad_sword', 'dragon_sword',
  'bastard_sword', 'bastard_sword', 'lethal_bastard_sword', 'swift_bastard_sword',
  'keenest_bastard_sword', 'crushing_bastard_sword', 'fiery_bastard_sword', 'frosty_bastard_sword',
  'shining_bastard_sword', 'deadly_bastard_sword', 'mighty_bastard_sword', 'guardian_bastard_sword',
  'dark_sword', 'magical_bastard_sword', 'righteous_sword', 'great_sword',
  'great_sword', 'great_sword', 'swift_great_sword', 'fiery_great_sword',
  'deadly_great_sword', 'keenest_great_sword', 'crushing_great_sword', 'mighty_great_sword',
  'guardian_great_sword', 'blood_sword', 'mace', 'crushing_mace',
  'shining_mace', 'morning_star', 'swift_morning_star', 'frosty_morning_star',
  'axe', 'axe', 'giant_axe', 'giant_axe',
  'crushing_axe', 'deadly_axe', 'living_axe', 'battle_axe',
  'deadly_battle_axe', 'keenest_battle_axe', 'bow', 'warrior_bow',
  'bow_gun', 'fiery_bow_gun', 'unknown', 'cap',
  'crown', 'crown_of_resist', 'crown_of_composure', 'wizard_crown',
  'devil_crown', 'helm', 'helm', 'magical_helm',
  'full_helm', 'full_helm', 'full_helm_of_curing', 'harden_full_helm',
  'fiery_full_helm', 'great_helm', 'great_helm', 'harden_great_helm',
  'fortune_great_helm', 'mystic_great_helm', 'holy_great_helm', 'quilted_armor'
  // ... continues up to item 200+
];

function extractItemData() {
  console.log('Extracting item data from part 481...');
  
  const data = fs.readFileSync(ITEM_DATA_PART);
  const totalItems = Math.floor(data.length / ITEM_SIZE);
  
  console.log(`File size: ${data.length} bytes`);
  console.log(`Total items: ${totalItems}`);
  
  let markdown = '# Item Data Compendium\n\n';
  markdown += `Extracted from FDAT.T part 481\n\n`;
  markdown += `**Total items:** ${totalItems}\n`;
  markdown += `**Entry size:** ${ITEM_SIZE} bytes\n\n`;
  markdown += `## Field Structure\n\n`;
  markdown += `Each item entry is ${ITEM_SIZE} bytes with the following fields:\n\n`;
  markdown += `| Offset | Field Name | Type | Description |\n`;
  markdown += `|--------|------------|------|-------------|\n`;
  
  for (const field of ITEM_FIELDS) {
    const notes = field.notes || '';
    markdown += `| 0x${field.offset.toString(16).toUpperCase().padStart(2, '0')} | ${field.name} | ${field.type} | ${notes} |\n`;
  }
  
  markdown += `\n## Item Entries\n\n`;
  
  // Extract each item
  for (let itemIndex = 0; itemIndex < Math.min(totalItems, 200); itemIndex++) {
    const offset = itemIndex * ITEM_SIZE;
    const itemData = data.slice(offset, offset + ITEM_SIZE);
    
    const itemName = ITEM_NAMES[itemIndex] || `item_${itemIndex}`;
    
    markdown += `### Item ${itemIndex} (0x${itemIndex.toString(16).toUpperCase()}): ${itemName}\n\n`;
    markdown += `**Offset:** 0x${offset.toString(16).toUpperCase()}\n\n`;
    
    // Raw hex dump
    markdown += `**Raw hex:**\n\`\`\`\n`;
    for (let i = 0; i < itemData.length; i += 16) {
      const chunk = itemData.slice(i, i + 16);
      const hex = Array.from(chunk).map(b => b.toString(16).padStart(2, '0')).join(' ');
      markdown += `${(offset + i).toString(16).padStart(6, '0')}: ${hex}\n`;
    }
    markdown += `\`\`\`\n\n`;
    
    // Parsed fields table
    markdown += `**Parsed fields:**\n\n`;
    markdown += `| Field | Hex | Dec | Notes |\n`;
    markdown += `|-------|-----|-----|-------|\n`;
    
    for (const field of ITEM_FIELDS) {
      const value = itemData[field.offset];
      const notes = field.notes || '';
      markdown += `| ${field.name} | 0x${value.toString(16).padStart(2, '0')} | ${value} | ${notes} |\n`;
    }
    
    markdown += `\n`;
    
    if (itemIndex % 20 === 19) {
      console.log(`Processed ${itemIndex + 1} items...`);
    }
  }
  
  markdown += `\n## Notes\n\n`;
  markdown += `- Entry size is consistently ${ITEM_SIZE} bytes\n`;
  markdown += `- Items are stored sequentially in part 481\n`;
  markdown += `- Unknown fields need further investigation\n`;
  markdown += `- Attribute types and elemental types need mapping\n`;
  
  fs.writeFileSync(OUTPUT_FILE, markdown);
  console.log(`\n✅ Generated: ${OUTPUT_FILE}`);
  console.log(`   Documented ${Math.min(totalItems, 200)} items`);
}

// Run extraction
extractItemData();
