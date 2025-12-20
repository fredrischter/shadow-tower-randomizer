#!/usr/bin/env node
'use strict';

/**
 * FDAT.T Magic Damage Analysis Tool
 * 
 * Analyzes creature spell/magic attack data in FDAT.T data files.
 * This is the correct approach for modifying magic damage - modify the data
 * files directly, not the executable code.
 * 
 * EntityStateData Type 0x30 = Spell/Magic Attack
 * - Offset 0x1a: attack1 (16-bit) - Primary magic damage
 * - Offset 0x1c: attack2 (16-bit) - Secondary magic damage  
 * - Offset 0x1e: attack3 (16-bit) - Tertiary magic damage
 * 
 * CreatureData:
 * - Offset 0x09: magic1 (8-bit) - Base magic attack stat
 */

const fs = require('fs');
const path = require('path');

// Import data model to parse FDAT.T
require('./data_model.js');

const FDAT_PATH = './generated/st/extracted/ST/COM/FDAT.T';

function analyzeMagicDamage() {
  if (!fs.existsSync(FDAT_PATH)) {
    console.error(`ERROR: FDAT.T not found at ${FDAT_PATH}`);
    console.error('Run: npm run mod "./generated/st.bin" first to extract FDAT.T');
    return;
  }

  console.log('=== FDAT.T Magic Damage Analysis ===\n');
  console.log(`Reading: ${FDAT_PATH}\n`);

  const randomizer_common = require('./randomizer_common.js');
  const tfile = new randomizer_common.TFILEReader(FDAT_PATH).readTFormat();
  
  // Setup data model (creates global.data_model)
  const params = { difficulty: 'medium', seed: '1' };
  global.data_model.setup(tfile, './generated/st/extracted', params);

  let magicCreatureCount = 0;
  let magicAttackCount = 0;
  let maxMagicDamage = 0;
  let totalMagicDamage = 0;

  console.log('Creatures with Magic Attacks (Type 0x30 EntityStateData):\n');
  console.log('Area                              | Creature          | Mag1 | Attack1 | Attack2 | Attack3');
  console.log('----------------------------------|-------------------|------|---------|---------|--------');

  // Scan all areas and creatures
  for (const area of Object.values(global.data_model.areas)) {
    for (const [creatureName, creature] of Object.entries(area)) {
      if (typeof creature !== 'object' || !creature.entityStates) continue;

      // Check CreatureData magic1 stat
      const baseMagic = creature.magic1 ? creature.magic1.get() : 0;
      
      // Check EntityStateData for spell/magic attacks (type 0x30)
      const magicAttacks = creature.entityStates.filter(state => state.type === 0x30);
      
      if (magicAttacks.length > 0 || baseMagic > 0) {
        magicCreatureCount++;
        
        // Display creature info
        const areaName = area.name.substring(0, 33).padEnd(33);
        const creaturePad = creatureName.substring(0, 17).padEnd(17);
        const mag1Str = baseMagic.toString().padStart(4);
        
        if (magicAttacks.length > 0) {
          for (const attack of magicAttacks) {
            const att1 = attack.attack1 ? attack.attack1.get() : 0;
            const att2 = attack.attack2 ? attack.attack2.get() : 0;
            const att3 = attack.attack3 ? attack.attack3.get() : 0;
            
            if (att1 > 0 || att2 > 0 || att3 > 0) {
              magicAttackCount++;
              const att1Str = att1.toString().padStart(7);
              const att2Str = att2.toString().padStart(7);
              const att3Str = att3.toString().padStart(7);
              
              console.log(`${areaName} | ${creaturePad} | ${mag1Str} | ${att1Str} | ${att2Str} | ${att3Str}`);
              
              maxMagicDamage = Math.max(maxMagicDamage, att1, att2, att3);
              totalMagicDamage += (att1 + att2 + att3);
            }
          }
        } else {
          // Only has base magic stat, no spell attacks
          console.log(`${areaName} | ${creaturePad} | ${mag1Str} |       - |       - |       -`);
        }
      }
    }
  }

  console.log('\n=== Summary ===\n');
  console.log(`Creatures with magic: ${magicCreatureCount}`);
  console.log(`Total magic attacks: ${magicAttackCount}`);
  console.log(`Max magic damage: ${maxMagicDamage}`);
  console.log(`Average magic damage: ${magicAttackCount > 0 ? Math.round(totalMagicDamage / magicAttackCount) : 0}`);
  console.log('\n=== How to Modify Magic Damage ===\n');
  console.log('1. In randomize.js, after creature stat randomization:');
  console.log('   - Scale creature.magic1.set(newValue)');
  console.log('   - Scale entityState.attack1/2/3.set(newValue) for type 0x30');
  console.log('2. This modifies FDAT.T data directly (correct approach)');
  console.log('3. No EXE patching needed - data file changes only');
}

// Run analysis
analyzeMagicDamage();
