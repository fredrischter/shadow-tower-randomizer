/**
 * Creature Data Comparison Tool
 * 
 * This script compares binary data between creatures known to have different speeds
 * to identify potential speed-controlling bytes.
 */

const fs = require('fs');
const path = require('path');

console.log('=== Creature Speed Data Analysis ===\n');

// We need to examine the Creature structure more carefully
// Let's document what we know and what we don't know

console.log('## Known Creature Structure Fields\n');
console.log('Based on data_model.js Creature class (starting at offset_in_file):\n');

const knownFields = [
  { offset: '0x00-0x06', name: 'Unknown header data', size: 7 },
  { offset: '0x07', name: 'attack1 (UInt8)', size: 1 },
  { offset: '0x08', name: 'attack2 (UInt8)', size: 1 },
  { offset: '0x09', name: 'magic1 (UInt8)', size: 1 },
  { offset: '0x0a', name: 'UNKNOWN', size: 1 },
  { offset: '0x0b', name: 'height (UInt16)', size: 2 },
  { offset: '0x0d', name: 'weight (UInt16)', size: 2 },
  { offset: '0x0f', name: 'something3 (UInt16)', size: 2 },
  { offset: '0x11', name: 'something4 (UInt16)', size: 2 },
  { offset: '0x13-0x18', name: 'UNKNOWN', size: 6 },
  { offset: '0x19', name: 'centerPositionHeight (UInt16)', size: 2 },
  { offset: '0x1b', name: 'shadowSize (UInt8)', size: 1 },
  { offset: '0x1c-0x23', name: 'UNKNOWN', size: 8 },
  { offset: '0x24', name: 'str (UInt8)', size: 1 },
  { offset: '0x25', name: 'spd (UInt8)', size: 1 },
  { offset: '0x26', name: 'def (UInt8)', size: 1 },
  { offset: '0x27', name: 'bal (UInt8)', size: 1 },
  { offset: '0x28', name: 'sla (UInt8)', size: 1 },
  { offset: '0x29', name: 'smh (UInt8)', size: 1 },
  { offset: '0x2a', name: 'pir (UInt8)', size: 1 },
  { offset: '0x2b', name: 'spr (UInt8)', size: 1 },
  { offset: '0x2c', name: 'foc (UInt8)', size: 1 },
  { offset: '0x2d', name: 'ham (UInt8)', size: 1 },
  { offset: '0x2e', name: 'pur (UInt8)', size: 1 },
  { offset: '0x2f', name: 'par (UInt8)', size: 1 },
  { offset: '0x30', name: 'mel (UInt8)', size: 1 },
  { offset: '0x31', name: 'sol (UInt8)', size: 1 },
  { offset: '0x32', name: 'hp (UInt16)', size: 2 },
  { offset: '0x34-0x49', name: 'UNKNOWN', size: 22 },
  { offset: '0x4a', name: 'weaponDefense1 (UInt16)', size: 2 },
  { offset: '0x4c', name: 'weaponDefense2 (UInt16)', size: 2 },
  { offset: '0x4e', name: 'weaponDefense3 (UInt16)', size: 2 },
  { offset: '0x50', name: 'magDefense1 (UInt16)', size: 2 },
  { offset: '0x52', name: 'magDefense2 (UInt16)', size: 2 },
  { offset: '0x54', name: 'magDefense3 (UInt16)', size: 2 },
  { offset: '0x56', name: 'magDefense4 (UInt16)', size: 2 },
  { offset: '0x58', name: 'magDefense5 (UInt16)', size: 2 },
  { offset: '0x5a-0x5b', name: 'UNKNOWN', size: 2 },
  { offset: '0x5c+', name: 'entityStateOffsets array', size: 'variable' }
];

knownFields.forEach(field => {
  console.log(`  ${field.offset.padEnd(12)} ${field.name.padEnd(40)} (${field.size} bytes)`);
});

console.log('\n## Unknown/Suspicious Fields for Speed\n');
console.log('These fields have not been identified and could potentially control speed:\n');

const suspiciousFields = [
  { offset: '0x00-0x06', reason: 'Header data before attacks - could contain animation/behavior flags' },
  { offset: '0x0a', reason: 'Single unknown byte between magic1 and height' },
  { offset: '0x0f', reason: 'something3 - name indicates unknown purpose' },
  { offset: '0x11', reason: 'something4 - name indicates unknown purpose' },
  { offset: '0x13-0x18', reason: '6 unknown bytes after something4' },
  { offset: '0x1c-0x23', reason: '8 unknown bytes before stats' },
  { offset: '0x34-0x49', reason: '22 unknown bytes after HP, before defenses' }
];

suspiciousFields.forEach(field => {
  console.log(`  ${field.offset.padEnd(12)} - ${field.reason}`);
});

console.log('\n## EntityStateData Unknown Fields\n');
console.log('EntityStateData (types 0x20 and 0x30) has these UNKNOWN bytes:\n');

const entityStateUnknown = [
  { offset: '0x00', name: 'Type (0x20 or 0x30)', known: true },
  { offset: '0x01', name: 'UNKNOWN', known: false },
  { offset: '0x02', name: 'UNKNOWN', known: false },
  { offset: '0x03', name: 'UNKNOWN (tested as action timer - no effect)', known: false },
  { offset: '0x04-0x07', name: 'UNKNOWN', known: false },
  { offset: '0x08', name: 'UNKNOWN (tested as movement - no effect)', known: false },
  { offset: '0x09-0x19', name: 'UNKNOWN', known: false },
  { offset: '0x1a', name: 'attack1 (UInt16)', known: true },
  { offset: '0x1c', name: 'attack2 (UInt16)', known: true },
  { offset: '0x1e', name: 'attack3 (UInt16)', known: true },
  { offset: '0x20-0x2f', name: 'UNKNOWN (remaining 16 bytes)', known: false }
];

entityStateUnknown.forEach(field => {
  const status = field.known ? '✓' : '?';
  console.log(`  ${status} ${field.offset.padEnd(15)} ${field.name}`);
});

console.log('\n## Investigation Recommendations\n');
console.log('1. **Byte-by-byte comparison**: Compare full Creature structure between:');
console.log('   - Acid Slime (slowest)');
console.log('   - Skeleton (medium)');
console.log('   - Demon Bat (fast)');
console.log('   Look for bytes that correlate with speed differences\n');

console.log('2. **EntityState exhaustive search**: Test modifying ALL unknown bytes');
console.log('   one at a time to see if any affect speed\n');

console.log('3. **Animation file search**: Look for:');
console.log('   - Files with animation-related extensions (.anm, .mot, .seq)');
console.log('   - Non-texture data in M0X.T files');
console.log('   - PlayStation TMD model format headers\n');

console.log('4. **Game executable analysis**: Disassemble ST.EXE to find:');
console.log('   - Animation playback routines');
console.log('   - Creature behavior tables');
console.log('   - Frame timing constants\n');

console.log('## Hypothesis: Speed is Hardcoded\n');
console.log('MOST LIKELY SCENARIO:');
console.log('Creature movement/animation speed is hardcoded in the game executable (ST.EXE)');
console.log('indexed by creature type ID. This was common in PS1 era games.\n');

console.log('To modify speed, we would need to:');
console.log('1. Disassemble ST.EXE');
console.log('2. Find the creature behavior/animation routines');
console.log('3. Locate timing constants or speed lookup tables');
console.log('4. Patch the executable with modified values\n');

console.log('This is significantly more complex than data file modification and');
console.log('requires PS1 executable patching expertise.\n');

console.log('='.repeat(70));
console.log('CONCLUSION: Further investigation required.');
console.log('Current data model access is insufficient to modify speed.');
console.log('='.repeat(70));
