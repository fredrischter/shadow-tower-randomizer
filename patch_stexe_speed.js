#!/usr/bin/env node

/**
 * ST.EXE Speed Patcher
 * 
 * Applies creature speed multiplier to the speed table in Shadow Tower executable.
 * 
 * Usage:
 *   node patch_stexe_speed.js <multiplier> [input_exe] [output_exe]
 * 
 * Examples:
 *   node patch_stexe_speed.js 5.0                          # 5x speed, patches iso-dump/ST.EXE
 *   node patch_stexe_speed.js 2.0 ST.EXE ST_FAST.EXE      # 2x speed, custom files
 *   node patch_stexe_speed.js 0.5                          # 0.5x speed (slower)
 */

const fs = require('fs');
const path = require('path');

// Speed table location (found during investigation)
const SPEED_TABLE_OFFSET = 0x000853;
const SPEED_TABLE_LENGTH = 8;

// Original speed values from investigation
const ORIGINAL_SPEED_VALUES = [32, 64, 96, 128, 160, 192, 224, 255];

function patchSpeedTable(exePath, multiplier, outputPath = null) {
    console.log(`\n=== ST.EXE Speed Patcher ===`);
    console.log(`Input: ${exePath}`);
    console.log(`Multiplier: ${multiplier}x`);
    
    if (!fs.existsSync(exePath)) {
        throw new Error(`ST.EXE not found at: ${exePath}`);
    }
    
    // Read executable
    const exeData = fs.readFileSync(exePath);
    console.log(`File size: ${exeData.length} bytes (${(exeData.length/1024).toFixed(1)} KB)`);
    
    // Validate PS-X EXE header
    const header = exeData.toString('ascii', 0, 8);
    if (!header.startsWith('PS-X EXE')) {
        throw new Error('Invalid PS-X EXE format - header mismatch');
    }
    console.log(`✓ Valid PS-X EXE format`);
    
    // Verify original speed table
    console.log(`\nVerifying speed table at offset 0x${SPEED_TABLE_OFFSET.toString(16).toUpperCase()}...`);
    const currentValues = [];
    for (let i = 0; i < SPEED_TABLE_LENGTH; i++) {
        currentValues.push(exeData[SPEED_TABLE_OFFSET + i]);
    }
    console.log(`Current values: [${currentValues.join(', ')}]`);
    
    // Check if already modified
    const isOriginal = currentValues.every((val, idx) => val === ORIGINAL_SPEED_VALUES[idx]);
    if (!isOriginal) {
        console.log(`⚠ Warning: Speed table doesn't match original values`);
        console.log(`  Original: [${ORIGINAL_SPEED_VALUES.join(', ')}]`);
        console.log(`  Current:  [${currentValues.join(', ')}]`);
        console.log(`  Proceeding with modification based on current values...`);
    }
    
    // Calculate new speed values
    const newValues = currentValues.map(val => {
        const modified = Math.round(val * multiplier);
        // Clamp to valid byte range (0-255)
        return Math.max(0, Math.min(255, modified));
    });
    
    console.log(`\nApplying ${multiplier}x multiplier:`);
    console.log(`  Original: [${currentValues.join(', ')}]`);
    console.log(`  Modified: [${newValues.join(', ')}]`);
    
    // Create output buffer (copy of original)
    const outputData = Buffer.from(exeData);
    
    // Apply patches
    for (let i = 0; i < SPEED_TABLE_LENGTH; i++) {
        outputData[SPEED_TABLE_OFFSET + i] = newValues[i];
    }
    
    // Determine output path
    if (!outputPath) {
        const dir = path.dirname(exePath);
        const ext = path.extname(exePath);
        const base = path.basename(exePath, ext);
        const multiplierStr = multiplier.toString().replace('.', '_');
        outputPath = path.join(dir, `${base}_speed${multiplierStr}x${ext}`);
    }
    
    // Write patched executable
    fs.writeFileSync(outputPath, outputData);
    console.log(`\n✓ Patched executable written to: ${outputPath}`);
    console.log(`✓ Speed multiplier ${multiplier}x applied successfully`);
    
    // Verification
    const verifyData = fs.readFileSync(outputPath);
    const verifyValues = [];
    for (let i = 0; i < SPEED_TABLE_LENGTH; i++) {
        verifyValues.push(verifyData[SPEED_TABLE_OFFSET + i]);
    }
    
    const success = verifyValues.every((val, idx) => val === newValues[idx]);
    if (success) {
        console.log(`✓ Verification passed - modifications confirmed`);
    } else {
        console.error(`✗ Verification failed - modifications not applied correctly`);
        process.exit(1);
    }
    
    return outputPath;
}

// Command-line interface
if (require.main === module) {
    const args = process.argv.slice(2);
    
    if (args.length < 1) {
        console.error('Usage: node patch_stexe_speed.js <multiplier> [input_exe] [output_exe]');
        console.error('');
        console.error('Examples:');
        console.error('  node patch_stexe_speed.js 5.0');
        console.error('  node patch_stexe_speed.js 2.0 ST.EXE ST_FAST.EXE');
        console.error('  node patch_stexe_speed.js 0.5  # Slower creatures');
        process.exit(1);
    }
    
    const multiplier = parseFloat(args[0]);
    if (isNaN(multiplier) || multiplier <= 0) {
        console.error('Error: Multiplier must be a positive number');
        process.exit(1);
    }
    
    const inputExe = args[1] || path.join(__dirname, 'iso-dump', 'ST.EXE');
    const outputExe = args[2] || null;
    
    try {
        patchSpeedTable(inputExe, multiplier, outputExe);
    } catch (error) {
        console.error(`\nError: ${error.message}`);
        process.exit(1);
    }
}

module.exports = { patchSpeedTable };
