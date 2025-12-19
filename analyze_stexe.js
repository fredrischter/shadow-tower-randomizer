/**
 * ST.EXE Analysis Tool
 * 
 * This tool helps investigate the Shadow Tower executable for creature speed data
 */

const fs = require('fs');
const path = require('path');

console.log('=== ST.EXE Creature Speed Investigation Tool ===\n');

// Check if ST.EXE exists
const possiblePaths = [
    'generated/no-change/extracted/ST.EXE',
    'generated/no-change/extracted/SLPS_011.18', // Possible PS1 executable name
    'ST.EXE',
    'SLPS_011.18'
];

let exePath = null;
for (const p of possiblePaths) {
    if (fs.existsSync(p)) {
        exePath = p;
        break;
    }
}

if (!exePath) {
    console.log('❌ ST.EXE not found in expected locations.');
    console.log('\nTo extract ST.EXE from the ISO:');
    console.log('1. Use dumpsxiso to extract the full ISO');
    console.log('2. The executable should be in the root directory');
    console.log('3. Look for files like ST.EXE or SLPS_*.* (PlayStation executable format)');
    console.log('\nSearched locations:');
    possiblePaths.forEach(p => console.log(`  - ${p}`));
    console.log('\n=== What to do next ===\n');
    console.log('1. Extract the full ISO contents (not just ST/ folder)');
    console.log('2. Locate the game executable');
    console.log('3. Run this tool again to analyze it');
    process.exit(1);
}

console.log(`✓ Found executable: ${exePath}\n`);

// Read the executable
const exe = fs.readFileSync(exePath);
console.log(`Executable size: ${exe.length} bytes (${(exe.length/1024).toFixed(2)} KB)\n`);

// PS1 executable header check
console.log('=== PlayStation Executable Header ===\n');
const magic = exe.toString('ascii', 0, 8);
console.log(`Magic: ${magic}`);

if (magic === 'PS-X EXE') {
    console.log('✓ Valid PlayStation executable\n');
    
    // Parse PS-X EXE header
    const pc = exe.readUInt32LE(0x10);
    const gp = exe.readUInt32LE(0x14);
    const textAddr = exe.readUInt32LE(0x18);
    const textSize = exe.readUInt32LE(0x1C);
    
    console.log(`PC (entry point):   0x${pc.toString(16)}`);
    console.log(`GP (global pointer): 0x${gp.toString(16)}`);
    console.log(`Text address:       0x${textAddr.toString(16)}`);
    console.log(`Text size:          0x${textSize.toString(16)} (${textSize} bytes)`);
    
    const codeStart = 0x800; // PS-X EXE code typically starts at 0x800
    console.log(`Code section starts at: 0x${codeStart.toString(16)}\n`);
} else {
    console.log('⚠ Not a standard PS-X EXE format');
    console.log('Proceeding with generic analysis...\n');
}

// Search for potential creature data patterns
console.log('=== Searching for Creature Data Patterns ===\n');

// Known creature IDs from the game (from creatures_data.csv or constants.js)
const knownCreatureIds = [
    0x01, // acid_slime (slow)
    0x02, // blood_slime
    0x04, // skeleton (medium)
    0x10, // demon_bat (fast)
    // Add more if known
];

console.log('Known creature IDs to search for:', knownCreatureIds.map(id => `0x${id.toString(16)}`).join(', '));
console.log('');

// Search for sequences containing these IDs
let foundPatterns = [];

for (let i = 0; i < exe.length - 32; i++) {
    // Check if this looks like a creature data table entry
    // Pattern: [creature_id] [some bytes] [speed-like values]
    
    const byte = exe[i];
    if (knownCreatureIds.includes(byte)) {
        // Found a creature ID, examine surrounding bytes
        const context = exe.slice(Math.max(0, i-4), Math.min(exe.length, i+32));
        
        // Look for patterns that might be speed values
        // Speeds typically in range 50-500 for PS1 games
        const nextBytes = exe.slice(i+1, i+10);
        const hasLikelySpeedValues = Array.from(nextBytes).some(b => 
            b >= 50 && b <= 255
        );
        
        if (hasLikelySpeedValues && foundPatterns.length < 20) {
            foundPatterns.push({
                offset: i,
                creatureId: byte,
                context: Buffer.from(context).toString('hex').match(/.{2}/g).join(' ')
            });
        }
    }
}

console.log(`Found ${foundPatterns.length} potential creature data patterns:\n`);
foundPatterns.slice(0, 10).forEach(p => {
    console.log(`Offset 0x${p.offset.toString(16).padStart(6, '0')}: Creature 0x${p.creatureId.toString(16).padStart(2, '0')}`);
    console.log(`  Context: ${p.context}`);
    console.log('');
});

if (foundPatterns.length > 10) {
    console.log(`... and ${foundPatterns.length - 10} more patterns\n`);
}

// Search for float/fixed-point values that might be speeds
console.log('=== Searching for Speed-like Values ===\n');

const speedCandidates = [];
for (let i = 0; i < exe.length - 4; i += 4) {
    // Try as float
    const floatVal = exe.readFloatLE(i);
    if (floatVal > 0.5 && floatVal < 10.0 && !isNaN(floatVal)) {
        // Could be a speed multiplier
        if (speedCandidates.length < 50) {
            speedCandidates.push({ offset: i, value: floatVal, type: 'float' });
        }
    }
    
    // Try as uint16 (common for fixed-point speeds)
    const uint16Val = exe.readUInt16LE(i);
    if (uint16Val >= 50 && uint16Val <= 1000) {
        // Could be a speed value
        if (speedCandidates.length < 50) {
            speedCandidates.push({ offset: i, value: uint16Val, type: 'uint16' });
        }
    }
}

console.log(`Found ${speedCandidates.length} potential speed values (showing first 10):\n`);
speedCandidates.slice(0, 10).forEach(c => {
    console.log(`Offset 0x${c.offset.toString(16).padStart(6, '0')}: ${c.value.toFixed(2)} (${c.type})`);
});

console.log('\n=== Next Steps for Manual Analysis ===\n');
console.log('1. **Disassemble the executable:**');
console.log('   - Use IDA Pro, Ghidra, or no$psx debugger');
console.log('   - Look for MIPS assembly code');
console.log('   - Find creature initialization routines\n');

console.log('2. **Search for specific patterns:**');
console.log('   - Lookup tables indexed by creature ID');
console.log('   - Animation playback functions');
console.log('   - Movement update routines\n');

console.log('3. **Test hypothesis:**');
console.log('   - Modify suspected speed values in ST.EXE');
console.log('   - Rebuild ISO with modified executable');
console.log('   - Test in-game to confirm effect\n');

console.log('4. **Create patcher:**');
console.log('   - Once speed locations identified');
console.log('   - Create tool to patch ST.EXE automatically');
console.log('   - Integrate into randomizer build process\n');

console.log('=== Recommended Tools ===\n');
console.log('- **no$psx**: PS1 emulator with built-in debugger (easiest)');
console.log('- **PCSX-Redux**: Modern PS1 emulator with debugging');
console.log('- **Ghidra**: Free reverse engineering tool (needs PS1 extension)');
console.log('- **IDA Pro**: Professional disassembler (expensive but powerful)');

console.log('\n' + '='.repeat(70));
