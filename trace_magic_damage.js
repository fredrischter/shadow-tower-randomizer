#!/usr/bin/env node

/**
 * Trace backwards from HP store to find magic damage calculation
 * 
 * Strategy:
 * 1. Start from HP store at 0x2c77c
 * 2. Find what sets $a0 (damage_value parameter)
 * 3. Trace backwards through function calls
 * 4. Look for magic-specific patterns (element multipliers, MP costs, etc.)
 */

const fs = require('fs');
const exe = fs.readFileSync('./iso-dump/ST.EXE');

function read32(offset) {
  return exe.readUInt32LE(offset);
}

function getRegName(reg) {
  const names = ['zero','at','v0','v1','a0','a1','a2','a3',
                 't0','t1','t2','t3','t4','t5','t6','t7',
                 's0','s1','s2','s3','s4','s5','s6','s7',
                 't8','t9','k0','k1','gp','sp','fp','ra'];
  return '$' + names[reg];
}

function disassembleSimple(offset) {
  const instr = read32(offset);
  const op = (instr >> 26) & 0x3F;
  const rs = (instr >> 21) & 0x1F;
  const rt = (instr >> 16) & 0x1F;
  const rd = (instr >> 11) & 0x1F;
  const funct = instr & 0x3F;
  const imm = instr & 0xFFFF;
  const signedImm = (imm & 0x8000) ? (imm - 0x10000) : imm;
  
  if (op === 0) {
    if (funct === 0x21) return `ADDU ${getRegName(rd)}, ${getRegName(rs)}, ${getRegName(rt)}`;
    if (funct === 0x23) return `SUBU ${getRegName(rd)}, ${getRegName(rs)}, ${getRegName(rt)}`;
    if (funct === 0x18) return `MULT ${getRegName(rs)}, ${getRegName(rt)}`;
    if (funct === 0x1a) return `DIV ${getRegName(rs)}, ${getRegName(rt)}`;
    if (funct === 0x12) return `MFLO ${getRegName(rd)}`;
    if (funct === 0x10) return `MFHI ${getRegName(rd)}`;
  }
  if (op === 0x09) return `ADDIU ${getRegName(rt)}, ${getRegName(rs)}, ${signedImm}`;
  if (op === 0x0f) return `LUI ${getRegName(rt)}, 0x${imm.toString(16)}`;
  if (op === 0x23) return `LW ${getRegName(rt)}, ${signedImm}(${getRegName(rs)})`;
  if (op === 0x25) return `LHU ${getRegName(rt)}, ${signedImm}(${getRegName(rs)})`;
  if (op === 0x29) return `SH ${getRegName(rt)}, ${signedImm}(${getRegName(rs)})`;
  if (op === 0x03) {
    const target = ((instr & 0x3FFFFFF) * 4) & 0xFFFFFF;
    return `JAL 0x${target.toString(16)}`;
  }
  return null;
}

console.log('=== TRACING BACKWARDS FROM HP STORE TO MAGIC DAMAGE CALCULATION ===\n');

// Step 1: Analyze the HP damage function itself
console.log('STEP 1: HP Damage Function (0x2c728 - 0x2c78c)');
console.log('========================================\n');

console.log('Key instruction at 0x2c744:');
console.log('  ADDU $s0, $v0, $a0');
console.log('  Meaning: new_hp = current_hp ($v0) + damage_value ($a0)\n');

console.log('This function receives damage_value in $a0 register.');
console.log('We need to find WHO calls this function and HOW they calculate $a0\n');

// Step 2: Search for patterns that might be magic damage
console.log('\nSTEP 2: Searching for Magic Damage Calculation Patterns');
console.log('========================================\n');

console.log('Looking for characteristic magic patterns:');
console.log('- MP (magic points) loads/checks');
console.log('- Element type multipliers');
console.log('- Spell power calculations');
console.log('- Magic-specific constants\n');

// Search for MP-related memory accesses
console.log('Searching for MP references (typical offset ~0x8f2c near HP at 0x8f2a):\n');

let mpAccesses = [];
for (let addr = 0x10000; addr < 0x60000; addr += 4) {
  const instr = read32(addr);
  const op = (instr >> 26) & 0x3F;
  const imm = instr & 0xFFFF;
  const signedImm = (imm & 0x8000) ? (imm - 0x10000) : imm;
  
  // Look for loads/stores near HP offset
  if ((op === 0x23 || op === 0x25 || op === 0x29 || op === 0x2b) && 
      (signedImm >= 0x8f20 && signedImm <= 0x8f40)) {
    const desc = disassembleSimple(addr);
    if (desc && signedImm !== 0x8f2a && signedImm !== 0x8f28) { // Exclude HP itself
      mpAccesses.push({ addr, offset: signedImm, instr: desc });
    }
  }
}

console.log(`Found ${mpAccesses.length} memory accesses near HP offset:\n`);
mpAccesses.slice(0, 20).forEach(access => {
  console.log(`0x${access.addr.toString(16)}: ${access.instr} (offset 0x${access.offset.toString(16)})`);
});

// Step 3: Look for multiplication regions that might be magic damage
console.log('\n\nSTEP 3: Analyzing Arithmetic Regions for Magic Patterns');
console.log('========================================\n');

// We know physical damage is at 0x37274-0x3dd58
// Magic damage is likely in a different region
console.log('Known regions:');
console.log('- Physical damage: 0x37274-0x3dd58 (198 MULT/DIV ops)');
console.log('- HP store: 0x2c77c (final damage application)');
console.log('- Unknown: Magic damage calculation region\n');

// Search for other high-arithmetic regions
console.log('Searching for other MULT/DIV heavy regions...\n');

let regions = {};
for (let addr = 0x1000; addr < 0x60000; addr += 0x100) {
  let multCount = 0;
  let divCount = 0;
  
  for (let off = 0; off < 0x100; off += 4) {
    const instr = read32(addr + off);
    const op = (instr >> 26) & 0x3F;
    const funct = instr & 0x3F;
    
    if (op === 0 && (funct === 0x18 || funct === 0x19)) multCount++;
    if (op === 0 && (funct === 0x1a || funct === 0x1b)) divCount++;
  }
  
  if (multCount + divCount >= 5) {
    const region = (addr >> 12) << 12;
    if (!regions[region]) regions[region] = { mult: 0, div: 0 };
    regions[region].mult += multCount;
    regions[region].div += divCount;
  }
}

console.log('Top arithmetic regions:\n');
Object.keys(regions)
  .map(r => ({ addr: parseInt(r), ...regions[r], total: regions[r].mult + regions[r].div }))
  .sort((a, b) => b.total - a.total)
  .slice(0, 15)
  .forEach((r, i) => {
    const isPhysical = (r.addr >= 0x37000 && r.addr <= 0x3e000);
    const marker = isPhysical ? ' <-- PHYSICAL DAMAGE' : '';
    console.log(`${i+1}. 0x${r.addr.toString(16).padStart(5, '0')}: ${r.mult} MULT, ${r.div} DIV (total: ${r.total})${marker}`);
  });

console.log('\n\nSTEP 4: Recommendations for Finding Magic Damage');
console.log('========================================\n');

console.log('Based on analysis, magic damage is likely in one of these regions:');
console.log('1. A separate arithmetic region NOT at 0x37274-0x3dd58');
console.log('2. Code that accesses MP/magic-specific offsets near 0x8f2a');
console.log('3. Functions that call the HP damage function with magic-calculated values\n');

console.log('Next steps:');
console.log('1. Examine non-physical arithmetic regions (see list above)');
console.log('2. Look for MP cost deduction (SH to offset near 0x8f2a)');
console.log('3. Find element multiplier tables (arrays of 16-bit values)');
console.log('4. Trace function calls that lead to HP damage function\n');

console.log('Key memory offsets to investigate:');
console.log('- 0x8f28: Max HP');
console.log('- 0x8f2a: Current HP (TARGET)');
console.log('- 0x8f2c-0x8f30: Possibly MP, stamina, or magic stats');
console.log('- Look for loads from these offsets in non-physical regions\n');
