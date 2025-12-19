#!/usr/bin/env node

/**
 * EXE Patcher for Creature Speed Modification (Issue #31)
 * 
 * This script applies binary patches to ST.EXE to modify creature speed behavior.
 * Instead of modifying creature data, this patches the game executable code itself.
 * 
 * EXPERIMENTAL APPROACHES:
 * 1. Patch animation timing routines
 * 2. Patch movement calculation code
 * 3. Patch AI update frequency
 * 4. Modify frame delay constants
 */

const fs = require('fs');
const path = require('path');

/**
 * Apply a binary patch to a file
 * @param {string} filePath - Path to the file to patch
 * @param {number} offset - Offset in the file (decimal or hex)
 * @param {Buffer|Array} newBytes - Bytes to write
 * @param {string} description - Description of what this patch does
 */
function applyPatch(filePath, offset, newBytes, description) {
    console.log(`Applying patch at 0x${offset.toString(16)}: ${description}`);
    
    const buffer = fs.readFileSync(filePath);
    
    // Backup original bytes
    const originalBytes = [];
    for (let i = 0; i < newBytes.length; i++) {
        originalBytes.push(buffer[offset + i]);
    }
    console.log(`  Original bytes: ${originalBytes.map(b => b.toString(16).padStart(2, '0')).join(' ')}`);
    
    // Write new bytes
    for (let i = 0; i < newBytes.length; i++) {
        buffer[offset + i] = newBytes[i];
    }
    console.log(`  New bytes:      ${newBytes.map(b => b.toString(16).padStart(2, '0')).join(' ')}`);
    
    fs.writeFileSync(filePath, buffer);
    console.log(`  ✓ Patch applied successfully`);
}

/**
 * Experimental Approach 1: Modify animation frame delay constants
 * 
 * PSX games often have frame delay constants that control animation speed.
 * We'll search for common delay patterns and try modifying them.
 */
function patchAnimationDelays(exePath, speedMultiplier) {
    console.log('\n=== EXPERIMENTAL APPROACH 1: Animation Frame Delays ===');
    
    const buffer = fs.readFileSync(exePath);
    
    // Search for common delay values (in MIPS assembly, these might be immediates in load instructions)
    // Common delays: 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 30, 60
    const commonDelays = [0x02, 0x03, 0x04, 0x05, 0x06, 0x08, 0x0A, 0x0C, 0x10, 0x14, 0x18, 0x1E, 0x3C];
    
    const patchesApplied = [];
    
    // MIPS immediate load patterns (li/addiu instructions)
    // Pattern: 24xx00yy (addiu reg, zero, immediate)
    for (let i = 0; i < buffer.length - 4; i += 4) {
        const instruction = buffer.readUInt32LE(i);
        
        // Check if it's an addiu/li instruction loading a small constant
        if ((instruction & 0xFC000000) === 0x24000000) { // addiu
            const immediate = instruction & 0xFFFF;
            
            if (commonDelays.includes(immediate)) {
                // Calculate new delay
                const newDelay = Math.max(1, Math.floor(immediate / speedMultiplier));
                
                if (newDelay !== immediate && newDelay < 256) {
                    const newInstruction = (instruction & 0xFFFF0000) | newDelay;
                    
                    console.log(`  Found delay constant ${immediate} at offset 0x${i.toString(16)}`);
                    console.log(`    Changing to ${newDelay} (÷${speedMultiplier})`);
                    
                    buffer.writeUInt32LE(newInstruction, i);
                    patchesApplied.push({
                        offset: i,
                        old: immediate,
                        new: newDelay
                    });
                }
            }
        }
    }
    
    if (patchesApplied.length > 0) {
        fs.writeFileSync(exePath, buffer);
        console.log(`  ✓ Applied ${patchesApplied.length} animation delay patches`);
    } else {
        console.log(`  ℹ No animation delay patterns found to patch`);
    }
    
    return patchesApplied.length;
}

/**
 * Experimental Approach 2: Modify movement speed multipliers
 * 
 * Search for multiplication/shift operations that might scale movement speed.
 */
function patchMovementMultipliers(exePath, speedMultiplier) {
    console.log('\n=== EXPERIMENTAL APPROACH 2: Movement Speed Multipliers ===');
    
    const buffer = fs.readFileSync(exePath);
    let patchesApplied = 0;
    
    // Common shift amounts for speed scaling (sll/srl instructions)
    // Pattern: 00xx xx00 (sll) or 00xx xx02 (srl)
    // We'll look for right shifts (srl) that might be dividing speed
    for (let i = 0; i < buffer.length - 4; i += 4) {
        const instruction = buffer.readUInt32LE(i);
        
        // SRL instruction: 00000000 000ttttt ddddd sssss000010
        if ((instruction & 0xFC00003F) === 0x00000002) {
            const shamt = (instruction >> 6) & 0x1F;
            
            // If shift amount is 1-4 (dividing by 2, 4, 8, 16)
            if (shamt >= 1 && shamt <= 4) {
                // Reduce shift amount to make movement faster
                const newShamt = Math.max(0, shamt - 1);
                const newInstruction = (instruction & 0xFFFFF83F) | (newShamt << 6);
                
                console.log(`  Found SRL shift by ${shamt} at offset 0x${i.toString(16)}`);
                console.log(`    Changing to shift by ${newShamt} (faster movement)`);
                
                buffer.writeUInt32LE(newInstruction, i);
                patchesApplied++;
            }
        }
    }
    
    if (patchesApplied > 0) {
        fs.writeFileSync(exePath, buffer);
        console.log(`  ✓ Applied ${patchesApplied} movement multiplier patches`);
    } else {
        console.log(`  ℹ No movement multiplier patterns found to patch`);
    }
    
    return patchesApplied;
}

/**
 * Experimental Approach 3: Patch AI update intervals
 * 
 * Modify constants that control how often creature AI updates.
 */
function patchAIUpdateIntervals(exePath, speedMultiplier) {
    console.log('\n=== EXPERIMENTAL APPROACH 3: AI Update Intervals ===');
    
    // Common AI update intervals in frames: 1, 2, 4, 8
    const targetIntervals = [
        { offset: 0x10000, value: 0x04, description: "AI main loop delay" },
        { offset: 0x15000, value: 0x02, description: "Animation update interval" },
        { offset: 0x20000, value: 0x08, description: "Movement calculation frequency" }
    ];
    
    const buffer = fs.readFileSync(exePath);
    let patchesApplied = 0;
    
    // These are placeholder offsets - would need actual reverse engineering
    console.log('  ℹ This approach requires specific offset knowledge from binary analysis');
    console.log('  ℹ Placeholder offsets shown for demonstration');
    
    for (const patch of targetIntervals) {
        if (patch.offset < buffer.length) {
            const newValue = Math.max(1, Math.floor(patch.value / speedMultiplier));
            console.log(`  Would patch "${patch.description}" at 0x${patch.offset.toString(16)}`);
            console.log(`    ${patch.value} → ${newValue}`);
            // Not actually applying since these are placeholder offsets
        }
    }
    
    return patchesApplied;
}

/**
 * Experimental Approach 4: Scale velocity constants
 * 
 * Search for and modify constants that might represent movement velocities.
 */
function patchVelocityConstants(exePath, speedMultiplier) {
    console.log('\n=== EXPERIMENTAL APPROACH 4: Velocity Constants ===');
    
    const buffer = fs.readFileSync(exePath);
    let patchesApplied = 0;
    
    // Fixed-point velocity constants (common in PSX games)
    // Format: 0x0100 = 1.0, 0x0080 = 0.5, 0x0200 = 2.0
    const velocityPatterns = [0x0080, 0x0100, 0x0180, 0x0200, 0x0280, 0x0300];
    
    for (let i = 0; i < buffer.length - 2; i += 2) {
        const value = buffer.readUInt16LE(i);
        
        if (velocityPatterns.includes(value)) {
            // Scale up velocity
            const newValue = Math.min(0xFFFF, Math.floor(value * speedMultiplier));
            
            if (newValue !== value && newValue > 0 && newValue < 0x1000) {
                console.log(`  Found velocity constant 0x${value.toString(16)} at offset 0x${i.toString(16)}`);
                console.log(`    Changing to 0x${newValue.toString(16)} (×${speedMultiplier})`);
                
                buffer.writeUInt16LE(newValue, i);
                patchesApplied++;
                
                // Limit patches to avoid false positives
                if (patchesApplied >= 10) break;
            }
        }
    }
    
    if (patchesApplied > 0) {
        fs.writeFileSync(exePath, buffer);
        console.log(`  ✓ Applied ${patchesApplied} velocity constant patches`);
    } else {
        console.log(`  ℹ No velocity constant patterns found to patch`);
    }
    
    return patchesApplied;
}

/**
 * Main patch function
 */
function patchSTExe(extractedPath, speedMultiplier) {
    console.log('╔══════════════════════════════════════════════════════════════╗');
    console.log('║  ST.EXE Binary Patcher - Creature Speed Modification        ║');
    console.log('╚══════════════════════════════════════════════════════════════╝');
    console.log();
    console.log(`Speed Multiplier: ${speedMultiplier}x`);
    console.log(`Target: ${extractedPath}/ST.EXE`);
    console.log();
    
    const exePath = path.join(extractedPath, 'ST.EXE');
    
    if (!fs.existsSync(exePath)) {
        console.log('ERROR: ST.EXE not found at ' + exePath);
        return false;
    }
    
    // Backup original EXE
    const backupPath = exePath + '.backup';
    if (!fs.existsSync(backupPath)) {
        fs.copyFileSync(exePath, backupPath);
        console.log(`✓ Created backup: ${backupPath}`);
        console.log();
    }
    
    let totalPatches = 0;
    
    // Try all experimental approaches
    totalPatches += patchAnimationDelays(exePath, speedMultiplier);
    totalPatches += patchMovementMultipliers(exePath, speedMultiplier);
    totalPatches += patchAIUpdateIntervals(exePath, speedMultiplier);
    totalPatches += patchVelocityConstants(exePath, speedMultiplier);
    
    console.log();
    console.log('═══════════════════════════════════════════════════════════════');
    console.log(`TOTAL PATCHES APPLIED: ${totalPatches}`);
    console.log('═══════════════════════════════════════════════════════════════');
    console.log();
    
    if (totalPatches > 0) {
        console.log('✓ ST.EXE has been patched');
        console.log('  Test by building ISO and running in emulator');
        console.log('  Restore from backup if needed: ST.EXE.backup');
    } else {
        console.log('⚠ No patches were applied');
        console.log('  This is experimental - binary patterns may not match');
        console.log('  May need manual reverse engineering to find correct offsets');
    }
    
    return totalPatches > 0;
}

// Export for use in mod.js
module.exports = { patchSTExe };

// Allow running standalone
if (require.main === module) {
    const args = process.argv.slice(2);
    
    if (args.length < 2) {
        console.log('Usage: node patch_exe_speed.js <extracted_path> <speed_multiplier>');
        console.log('Example: node patch_exe_speed.js ./generated/test/extracted 2.0');
        process.exit(1);
    }
    
    const extractedPath = args[0];
    const speedMultiplier = parseFloat(args[1]);
    
    if (isNaN(speedMultiplier) || speedMultiplier <= 0) {
        console.log('ERROR: Speed multiplier must be a positive number');
        process.exit(1);
    }
    
    patchSTExe(extractedPath, speedMultiplier);
}
