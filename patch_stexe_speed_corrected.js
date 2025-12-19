#!/usr/bin/env node

/**
 * ST.EXE Speed Patcher (Corrected Version)
 * 
 * Applies creature speed multiplier to the speed table in Shadow Tower executable.
 * 
 * Speed data format:
 * - Offset: 0x856  
 * - Format: 16-bit little-endian integers
 * - Stride: 4 bytes between values
 * - Count: 7 speed values
 * 
 * Usage:
 *   node patch_stexe_speed_corrected.js <multiplier> [input_exe] [output_exe]
 * 
 * Examples:
 *   node patch_stexe_speed_corrected.js 5.0
 *   node patch_stexe_speed_corrected.js 2.0 ST.EXE ST_FAST.EXE
 */

const fs = require('fs');
const path = require('path');

// Speed table location (corrected from investigation)
const SPEED_TABLE_OFFSET = 0x856;
const SPEED_VALUE_COUNT = 7;
const SPEED_VALUE_STRIDE = 4;  // 4 bytes between each value

// Original speed values (in decimal, as 16-bit little-endian)
const ORIGINAL_SPEED_VALUES = [32, 64, 96, 128, 160, 192, 224];

function readUInt16LE(buffer, offset) {
    return buffer[offset] | (buffer[offset + 1] << 8);
}

function writeUInt16LE(buffer, offset, value) {
    buffer[offset] = value & 0xFF;
    buffer[offset + 1] = (value >> 8) & 0xFF;
}

function patchSpeedTable(exePath, multiplier, outputPath = null) {
    console.log(`\n=== ST.EXE Speed Patcher (Corrected) ===`);
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
    
    // Read current speed values (16-bit little-endian with 4-byte stride)
    console.log(`\nReading speed table at offset 0x${SPEED_TABLE_OFFSET.toString(16).toUpperCase()}...`);
    console.log(`Format: 16-bit little-endian, 4-byte stride`);
    
    const currentValues = [];
    for (let i = 0; i < SPEED_VALUE_COUNT; i++) {
        const offset = SPEED_TABLE_OFFSET + (i * SPEED_VALUE_STRIDE);
        const value = readUInt16LE(exeData, offset);
        currentValues.push(value);
    }
    console.log(`Current values: [${currentValues.join(', ')}]`);
    
    // Check if matches original
    const isOriginal = currentValues.every((val, idx) => val === ORIGINAL_SPEED_VALUES[idx]);
    if (isOriginal) {
        console.log(`✓ Speed table matches original values`);
    } else {
        console.log(`⚠ Warning: Speed table doesn't match original values`);
        console.log(`  Expected: [${ORIGINAL_SPEED_VALUES.join(', ')}]`);
        console.log(`  Current:  [${currentValues.join(', ')}]`);
        console.log(`  Proceeding with modification based on current values...`);
    }
    
    // Calculate new speed values
    const newValues = currentValues.map(val => {
        const modified = Math.round(val * multiplier);
        // Clamp to valid 16-bit range (0-65535, but practically 0-1000)
        return Math.max(0, Math.min(1000, modified));
    });
    
    console.log(`\nApplying ${multiplier}x multiplier:`);
    console.log(`  Original: [${currentValues.join(', ')}]`);
    console.log(`  Modified: [${newValues.join(', ')}]`);
    
    // Create output buffer (copy of original)
    const outputData = Buffer.from(exeData);
    
    // Apply patches (16-bit little-endian with 4-byte stride)
    for (let i = 0; i < SPEED_VALUE_COUNT; i++) {
        const offset = SPEED_TABLE_OFFSET + (i * SPEED_VALUE_STRIDE);
        writeUInt16LE(outputData, offset, newValues[i]);
    }
    
    // Determine output path
    if (!outputPath) {
        const dir = path.dirname(exePath);
        const ext = path.extname(exePath);
        const base = path.basename(exePath, ext);
        const multiplierStr = multiplier.toString().replace('.', '_');
        outputPath = path.join(dir, `${base}_SPEED${multiplierStr}X${ext}`);
    }
    
    // Write patched executable
    fs.writeFileSync(outputPath, outputData);
    console.log(`\n✓ Patched executable written to: ${outputPath}`);
    console.log(`✓ Speed multiplier ${multiplier}x applied successfully`);
    
    // Verification
    const verifyData = fs.readFileSync(outputPath);
    const verifyValues = [];
    for (let i = 0; i < SPEED_VALUE_COUNT; i++) {
        const offset = SPEED_TABLE_OFFSET + (i * SPEED_VALUE_STRIDE);
        verifyValues.push(readUInt16LE(verifyData, offset));
    }
    
    const success = verifyValues.every((val, idx) => val === newValues[idx]);
    if (success) {
        console.log(`✓ Verification passed - modifications confirmed`);
        console.log(`  Verified values: [${verifyValues.join(', ')}]`);
    } else {
        console.error(`✗ Verification failed`);
        console.error(`  Expected: [${newValues.join(', ')}]`);
        console.error(`  Got:      [${verifyValues.join(', ')}]`);
        process.exit(1);
    }
    
    return outputPath;
}

// Command-line interface
if (require.main === module) {
    const args = process.argv.slice(2);
    
    if (args.length < 1) {
        console.error('Usage: node patch_stexe_speed_corrected.js <multiplier> [input_exe] [output_exe]');
        console.error('');
        console.error('Examples:');
        console.error('  node patch_stexe_speed_corrected.js 5.0');
        console.error('  node patch_stexe_speed_corrected.js 2.0 iso-dump/ST.EXE ST_2X.EXE');
        console.error('  node patch_stexe_speed_corrected.js 0.5  # Slower creatures');
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
