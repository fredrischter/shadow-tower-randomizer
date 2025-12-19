#!/usr/bin/env node

/**
 * Visual demonstration of which bytes the creature speed fix modifies
 * Shows the byte locations in both Creature and EntityStateData structures
 */

console.log('=== Creature Speed Fix - Byte Modification Map ===\n');

console.log('## CREATURE STRUCTURE');
console.log('Offset  Field Name          Modification Type');
console.log('------  ------------------  ----------------------------------');
console.log('0x23    Unknown             EXPERIMENTAL (if non-zero, non-0xFF)');
console.log('0x24    Unknown             EXPERIMENTAL (if non-zero, non-0xFF)');
console.log('0x25    spd                 ✓ ACTIVE (Approach 1)');
console.log('0x26    Unknown             EXPERIMENTAL (if non-zero, non-0xFF)');
console.log('0x27    Unknown             EXPERIMENTAL (if non-zero, non-0xFF)');
console.log('');

console.log('## ENTITYSTATEDATA STRUCTURE (Type 0x20/0x30)');
console.log('Offset  Field Name          Modification Type');
console.log('------  ------------------  ----------------------------------');
console.log('0x00    type                Not modified (used for filtering)');
console.log('0x01    Unknown             Not modified');
console.log('0x02    Unknown             EXPERIMENTAL (if non-zero, non-0xFF)');
console.log('0x03    actionSpeedTimer    ✓ ACTIVE (Approach 2b - INVERSE)');
console.log('0x04    Unknown             EXPERIMENTAL (if non-zero, non-0xFF)');
console.log('0x05    Unknown             EXPERIMENTAL (if non-zero, non-0xFF)');
console.log('0x06    Unknown             EXPERIMENTAL (if non-zero, non-0xFF)');
console.log('0x07    Unknown             EXPERIMENTAL (if non-zero, non-0xFF)');
console.log('0x08    movementSpeed       ✓ ACTIVE (Approach 2a)');
console.log('');

console.log('## SCALING FORMULAS');
console.log('');
console.log('When creatureSpeedMultiplier = 5.0:');
console.log('');
console.log('ACTIVE Fields (Known purpose):');
console.log('  Creature.spd:                newValue = oldValue × 5.0');
console.log('  EntityStateData.movementSpeed: newValue = oldValue × 5.0');
console.log('  EntityStateData.actionSpeedTimer: newValue = oldValue ÷ 5.0  (INVERSE!)');
console.log('');
console.log('EXPERIMENTAL Fields (Unknown purpose):');
console.log('  All other modified bytes:    newValue = oldValue × 5.0');
console.log('  (Only if 0 < oldValue < 0xFF)');
console.log('');

console.log('## BOUNDS CHECKING');
console.log('All modifications are clamped:');
console.log('  Minimum: 1   (prevents zero/negative values)');
console.log('  Maximum: 255 (UInt8 limit)');
console.log('');

console.log('## EXAMPLE: Skeleton Creature with 5x Multiplier');
console.log('');
console.log('BEFORE:');
console.log('  Creature.spd = 20');
console.log('  EntityStateData.movementSpeed = 20');
console.log('  EntityStateData.actionSpeedTimer = 20');
console.log('  EntityStateData[0x02] = 10  (example)');
console.log('  Creature[0x23] = 15  (example)');
console.log('');
console.log('AFTER (with 5x multiplier):');
console.log('  Creature.spd = 100          (20 × 5 = 100)');
console.log('  EntityStateData.movementSpeed = 100  (20 × 5 = 100)');
console.log('  EntityStateData.actionSpeedTimer = 4  (20 ÷ 5 = 4)  ← INVERSE');
console.log('  EntityStateData[0x02] = 50  (10 × 5 = 50)');
console.log('  Creature[0x23] = 75  (15 × 5 = 75)');
console.log('');

console.log('## WHICH BYTES ACTUALLY CONTROL SPEED?');
console.log('');
console.log('Based on analysis of game data dumps:');
console.log('  ✓ LIKELY:   EntityStateData.actionSpeedTimer (0x03)');
console.log('  ✓ LIKELY:   EntityStateData.movementSpeed (0x08)');
console.log('  ? POSSIBLE: Creature.spd (0x25)');
console.log('  ? UNKNOWN:  Other experimental bytes');
console.log('');
console.log('The aggressive approach modifies ALL of them to maximize');
console.log('the chance that at least one affects actual game speed.');
console.log('');

console.log('## LOGGING OUTPUT');
console.log('');
console.log('When running with creatureSpeedMultiplier, look for:');
console.log('');
console.log('  Applying speed multiplier: 5.0');
console.log('  Scaled Creature.spd: 20 -> 100 (x5.0)');
console.log('  Scaled EntityStateData.movementSpeed: 20 -> 100 (x5.0)');
console.log('  Scaled EntityStateData.actionSpeedTimer: 20 -> 4 (÷5.0)');
console.log('  EXPERIMENTAL: Scaled EntityStateData[0x02]: 10 -> 50');
console.log('  EXPERIMENTAL: Scaled Creature[0x23]: 15 -> 75');
console.log('');
console.log('If you see these lines, the code is working correctly.');
console.log('');

console.log('## IN-GAME TESTING');
console.log('');
console.log('To determine which bytes actually affect speed:');
console.log('');
console.log('1. Build with: npm run mod "st.bin" "./params/fast-creatures.json"');
console.log('2. Test in emulator');
console.log('3. Observe creature behavior:');
console.log('   - Do they move faster?');
console.log('   - Do they attack faster?');
console.log('   - Do they rotate faster?');
console.log('4. Review console output to see which bytes were modified');
console.log('5. Report findings so ineffective modifications can be removed');
console.log('');

console.log('=== End of Byte Modification Map ===');
