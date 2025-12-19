/**
 * Sized Mix Parts Analysis Tool
 * 
 * Analyzes the "sized mix parts" extracted from T files to look for animation/model data
 */

const fs = require('fs');
const path = require('path');

console.log('=== Sized Mix Parts Analysis Tool ===\n');

// Find all SIZED_MIX_PARTS directories
function findSizedMixDirs(startPath) {
    const results = [];
    
    function search(dir) {
        try {
            const items = fs.readdirSync(dir);
            items.forEach(item => {
                const fullPath = path.join(dir, item);
                const stat = fs.statSync(fullPath);
                
                if (stat.isDirectory()) {
                    if (item.endsWith('_SIZED_MIX_PARTS')) {
                        results.push(fullPath);
                    } else {
                        search(fullPath);
                    }
                }
            });
        } catch (err) {
            // Skip inaccessible directories
        }
    }
    
    search(startPath);
    return results;
}

const sizedMixDirs = findSizedMixDirs('generated/no-change/extracted');

if (sizedMixDirs.length === 0) {
    console.log('❌ No SIZED_MIX_PARTS directories found.');
    console.log('\nThis means either:');
    console.log('1. The extraction hasn\'t been run yet with sized mix enabled');
    console.log('2. No files have the sized mix format');
    console.log('3. The files are in a different location\n');
    console.log('Run: npm run mod "./generated/st.bin" "./params/no-change.json"');
    console.log('after enabling sized mix parts extraction in randomizer_common.js\n');
    process.exit(1);
}

console.log(`✓ Found ${sizedMixDirs.length} SIZED_MIX_PARTS directories\n`);

let totalParts = 0;
let totalSize = 0;
const fileTypeStats = {};
const potentialAnimationData = [];

sizedMixDirs.forEach(dir => {
    console.log(`\n📁 ${dir}`);
    
    const files = fs.readdirSync(dir);
    console.log(`   ${files.length} parts found`);
    
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const data = fs.readFileSync(filePath);
        totalParts++;
        totalSize += data.length;
        
        // Analyze file type
        let fileType = 'unknown';
        
        // Check for TIM texture
        if (data.length >= 4 && data[0] === 0x10 && data[1] === 0x00 && data[2] === 0x00 && data[3] === 0x00) {
            fileType = 'TIM texture';
        }
        // Check for TMD model (PlayStation 3D model format)
        else if (data.length >= 4 && data[0] === 0x41 && data[1] === 0x00 && data[2] === 0x00 && data[3] === 0x00) {
            fileType = 'TMD model (v0x41)';
            potentialAnimationData.push({ path: filePath, type: 'TMD model', size: data.length });
        }
        else if (data.length >= 8) {
            // Check for other PlayStation formats
            const header = data.toString('hex', 0, 8);
            
            // Some other patterns to look for
            if (data[0] === 0x00 && data[1] === 0x00 && data.length > 100) {
                // Could be binary data
                fileType = 'binary data';
                
                // Look for patterns that suggest animation data
                // Animation data often has repeating structures
                let hasRepeatingPattern = false;
                for (let i = 0; i < Math.min(data.length - 32, 100); i += 4) {
                    const val1 = data.readUInt32LE(i);
                    const val2 = data.readUInt32LE(i + 16);
                    if (val1 === val2 && val1 !== 0) {
                        hasRepeatingPattern = true;
                        break;
                    }
                }
                
                if (hasRepeatingPattern) {
                    fileType = 'binary data (repeating pattern - possible animation)';
                    potentialAnimationData.push({ path: filePath, type: 'Repeating pattern', size: data.length });
                }
            }
        }
        
        fileTypeStats[fileType] = (fileTypeStats[fileType] || 0) + 1;
        
        if (fileType !== 'TIM texture' && data.length > 50) {
            console.log(`     ${file.padEnd(40)} ${data.length.toString().padStart(8)} bytes - ${fileType}`);
        }
    });
});

console.log('\n' + '='.repeat(70));
console.log('=== Summary ===\n');
console.log(`Total parts extracted: ${totalParts}`);
console.log(`Total size: ${totalSize} bytes (${(totalSize/1024).toFixed(2)} KB)\n`);

console.log('File type distribution:');
Object.entries(fileTypeStats).forEach(([type, count]) => {
    console.log(`  ${type.padEnd(45)} ${count} files`);
});

if (potentialAnimationData.length > 0) {
    console.log('\n🎯 POTENTIAL ANIMATION/MODEL DATA FOUND:\n');
    potentialAnimationData.forEach(item => {
        console.log(`  ${item.type}:`);
        console.log(`    Path: ${item.path}`);
        console.log(`    Size: ${item.size} bytes`);
        
        // Read and show first bytes
        const data = fs.readFileSync(item.path);
        const hexDump = Buffer.from(data.slice(0, Math.min(64, data.length)))
            .toString('hex')
            .match(/.{2}/g)
            .join(' ');
        console.log(`    First bytes: ${hexDump}`);
        console.log('');
    });
    
    console.log('⚠️  NEXT STEPS:');
    console.log('1. Examine these files more closely');
    console.log('2. Compare with known PlayStation model/animation formats');
    console.log('3. Look for speed/timing parameters in the data');
    console.log('4. Test modifying values to confirm they affect speed');
} else {
    console.log('\n❌ No obvious animation/model data found in sized mix parts');
    console.log('\nThis suggests speed data is likely in:');
    console.log('1. ST.EXE (game executable) - MOST LIKELY');
    console.log('2. A different file format not yet recognized');
    console.log('3. Embedded in the TIM files themselves (unlikely)');
}

console.log('\n' + '='.repeat(70));
