/**
 * M04.T Binary Structure Analysis
 * 
 * This script analyzes the structure of M04.T to find non-texture data
 */

const fs = require('fs');
const path = require('path');

// Find the M04.T_PARTS directory
const m04PartsDir = 'generated/no-change/extracted/ST/CHR0/M04.T_PARTS';

if (!fs.existsSync(m04PartsDir)) {
    console.log('ERROR: M04.T_PARTS directory not found');
    console.log('Expected at:', m04PartsDir);
    process.exit(1);
}

console.log('=== M04.T_PARTS Binary Analysis ===\n');

// List all files
const files = fs.readdirSync(m04PartsDir);
console.log(`Found ${files.length} files in M04.T_PARTS:\n`);

let totalSize = 0;
const fileInfo = [];

files.forEach(file => {
    const filePath = path.join(m04PartsDir, file);
    const stats = fs.statSync(filePath);
    totalSize += stats.size;
    fileInfo.push({ name: file, size: stats.size, path: filePath });
});

console.log('Files and sizes:');
fileInfo.forEach(info => {
    console.log(`  ${info.name.padEnd(30)} ${info.size.toString().padStart(8)} bytes`);
});

console.log(`\nTotal extracted size: ${totalSize} bytes (${(totalSize/1024).toFixed(2)} KB)\n`);

// Now analyze each file for non-TIM data
console.log('=== File Structure Analysis ===\n');

fileInfo.forEach(info => {
    const data = fs.readFileSync(info.path);
    
    console.log(`\nFile: ${info.name}`);
    console.log(`Size: ${info.size} bytes`);
    
    // Check first 16 bytes
    const header = data.slice(0, Math.min(16, data.length));
    console.log(`First 16 bytes: ${Buffer.from(header).toString('hex').match(/.{2}/g).join(' ')}`);
    
    // TIM files start with 0x10 00 00 00
    if (data[0] === 0x10 && data[1] === 0x00 && data[2] === 0x00 && data[3] === 0x00) {
        console.log('  → TIM texture file (magic: 0x10)');
        
        // Check if there's data AFTER the TIM
        // TIM format: check the image data size
        const timType = data[4];
        console.log(`  TIM type: 0x${timType.toString(16)}`);
    } else {
        console.log('  → NOT a TIM file!');
        console.log(`  First 4 bytes as uint32: 0x${data.readUInt32LE(0).toString(16)}`);
    }
    
    // Check for "sized mix" format (starts with a size uint32)
    if (data.length > 4) {
        const firstSize = data.readUInt32LE(0);
        if (firstSize > 0 && firstSize < data.length) {
            console.log(`  Possible sized mix: first size = ${firstSize} (0x${firstSize.toString(16)})`);
            
            // Try to parse as sized mix
            let cursor = 0;
            let parts = 0;
            while (cursor < data.length && parts < 20) {
                const size = data.readUInt32LE(cursor);
                cursor += 4;
                
                if (size === 0) {
                    console.log(`  → End marker at offset 0x${(cursor-4).toString(16)}`);
                    break;
                }
                
                if (cursor + size > data.length) {
                    console.log(`  → Invalid size at offset 0x${(cursor-4).toString(16)}: ${size}`);
                    break;
                }
                
                console.log(`  Part ${parts}: size=${size} (0x${size.toString(16)}) at offset 0x${(cursor-4).toString(16)}`);
                cursor += size;
                parts++;
            }
            
            if (parts > 0) {
                console.log(`  → Found ${parts} sized mix parts, total parsed: ${cursor} bytes of ${data.length}`);
            }
        }
    }
});

console.log('\n' + '='.repeat(70));
console.log('KEY FINDING:');
console.log('If files show "sized mix parts", the extraction code has this disabled.');
console.log('See randomizer_common.js lines 570-580 (commented out).');
console.log('This non-texture data might contain animation/speed parameters!');
console.log('='.repeat(70));
