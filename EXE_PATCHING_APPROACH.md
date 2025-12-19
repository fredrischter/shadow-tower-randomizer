# Issue #31: EXE Binary Patching Approach for Creature Speed

## Problem
Previous attempts to modify creature speed by changing EntityStateData were unsuccessful.

## New Approach: Binary Patching of ST.EXE

Instead of modifying creature data structures, this approach **patches the game executable (ST.EXE) itself** with experimental binary modifications.

---

## How It Works

The `patch_exe_speed.js` script applies binary patches directly to the PlayStation executable file. This modifies the **game code** rather than the **game data**.

### 4 Experimental Patching Approaches

#### 1. Animation Frame Delays
- **Target:** MIPS immediate load instructions (addiu/li)
- **Pattern:** Instructions loading delay constants (2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 30, 60)
- **Modification:** Divide delay values by speed multiplier
- **Effect:** Animations play faster

#### 2. Movement Speed Multipliers  
- **Target:** MIPS shift right logical (SRL) instructions
- **Pattern:** Right shifts dividing movement values
- **Modification:** Reduce shift amount (divide by smaller value = faster)
- **Effect:** Creatures move faster

#### 3. AI Update Intervals (Placeholder)
- **Target:** Constants controlling AI update frequency
- **Note:** Requires specific offset knowledge from reverse engineering
- **Effect:** Creatures think/act more frequently

#### 4. Velocity Constants
- **Target:** Fixed-point velocity values (0x0080, 0x0100, 0x0180, 0x0200, etc.)
- **Modification:** Multiply by speed multiplier
- **Effect:** Base movement velocities increased

---

## Files Modified

### New Files Created

**patch_exe_speed.js** - Binary patcher for ST.EXE
- Searches for speed-related patterns in executable
- Applies experimental patches
- Creates automatic backup (ST.EXE.backup)

**randomize.js** - Integrated EXE patching
- Calls patcher when `creatureSpeedMultiplier` is set
- Runs after changeset generation
- Logs results to randomize.txt

---

## Usage

### Automatic (via randomize.js)

Just use the existing `creatureSpeedMultiplier` parameter:

```json
{
  "label": "fast-creatures-exe",
  "preset": "no-change",
  "creatureSpeedMultiplier": 5.0,
  "seed": "1"
}
```

Build:
```bash
npm run mod "./path/to/st.bin" "./params/fast-creatures.json"
```

The EXE patcher runs automatically during the randomize step.

### Manual (standalone)

Run the patcher directly:
```bash
node patch_exe_speed.js ./generated/test/extracted 2.0
```

Arguments:
- `extracted_path`: Path to extracted ISO folder (contains ST.EXE)
- `speed_multiplier`: Multiplier value (e.g., 2.0 = 2x faster)

---

## Testing

### Build Test ISO

```bash
npm run mod "./path/to/st.bin" "./params/fast-creatures.json"
```

### Check Console Output

Look for:
```
═══════════════════════════════════════════════════════════
Issue #31: Applying EXE patches for creature speed
═══════════════════════════════════════════════════════════

=== EXPERIMENTAL APPROACH 1: Animation Frame Delays ===
  Found delay constant 8 at offset 0x12340
    Changing to 2 (÷4)
  ✓ Applied 15 animation delay patches

=== EXPERIMENTAL APPROACH 2: Movement Speed Multipliers ===
  Found SRL shift by 2 at offset 0x23450
    Changing to shift by 1 (faster movement)
  ✓ Applied 8 movement multiplier patches

...

TOTAL PATCHES APPLIED: 35
✓ EXE patching completed - ST.EXE modified
```

### Test in Emulator

1. Load `generated/fast-creatures/modified-fast-creatures-st.bin`
2. Observe creature behavior
3. Report findings:
   - Did speed change?
   - Which behaviors changed?
   - Any crashes or glitches?

---

## How This Differs from Previous Approach

### Previous (Reverted)
- ❌ Modified EntityStateData fields (offsets 0x03, 0x08)
- ❌ Modified Creature.spd field (offset 0x25)
- ❌ Modified experimental creature data bytes
- ❌ **No effect on actual speed**

### Current (EXE Patching)
- ✅ Patches game executable code
- ✅ Modifies animation timing routines
- ✅ Modifies movement calculation code
- ✅ Changes constants in compiled code
- ✅ **Directly affects game behavior at code level**

---

## Technical Details

### MIPS Assembly Patterns

#### Example 1: Immediate Load
```asm
; Original
addiu $t0, $zero, 8      ; Load delay of 8 frames

; Patched (÷2)
addiu $t0, $zero, 4      ; Load delay of 4 frames
```

#### Example 2: Shift Right
```asm
; Original  
srl $t1, $t0, 2          ; Divide speed by 4

; Patched
srl $t1, $t0, 1          ; Divide speed by 2 (faster)
```

### Binary Format

PlayStation executables use MIPS R3000 instruction set:
- **32-bit instructions** (4 bytes each, little-endian)
- **Immediate values** in lower 16 bits
- **Shift amounts** in bits 6-10

---

## Limitations & Caveats

### Experimental Nature
- Pattern matching may have **false positives**
- Not all speed-related code may match patterns
- Some approaches are placeholders (need reverse engineering)

### Safety
- **Automatic backup** created (ST.EXE.backup)
- Can restore if patches cause issues
- Test thoroughly in emulator before playing

### Effectiveness Unknown
This approach is **experimental**. It may:
- ✓ Successfully modify creature speed
- ✗ Have no effect (patterns don't match actual code)
- ⚠ Cause unexpected side effects

**User feedback required to determine effectiveness.**

---

## Next Steps

### If It Works
1. Identify which specific approaches worked
2. Refine patterns to target only relevant code
3. Document working offsets
4. Remove ineffective approaches

### If It Doesn't Work
1. Perform manual reverse engineering of ST.EXE
2. Use PSX debugger to find speed-related code
3. Identify exact offsets and instruction patterns
4. Create targeted patches based on findings

### Additional Exploration
- Try patching other binaries in ST/ folder
- Examine CHR*/M*.T files for speed tables
- Look for speed data in FDAT.T
- Search for AI behavior routines

---

## Restore Original EXE

If patches cause issues:

```bash
# Manual restore
cd generated/your-preset/extracted
cp ST.EXE.backup ST.EXE

# Or rebuild from original ISO
npm run mod "./path/to/original-st.bin" "./params/no-change.json"
```

---

## Implementation Date
December 19, 2025

## Status
✅ **IMPLEMENTED** - Ready for user testing with game ISO

---

## For Developers

### Adding New Patch Approaches

Edit `patch_exe_speed.js` and add a new function:

```javascript
function patchMyNewApproach(exePath, speedMultiplier) {
    console.log('\n=== MY NEW APPROACH ===');
    
    const buffer = fs.readFileSync(exePath);
    let patchesApplied = 0;
    
    // Your pattern matching logic here
    
    if (patchesApplied > 0) {
        fs.writeFileSync(exePath, buffer);
        console.log(`  ✓ Applied ${patchesApplied} patches`);
    }
    
    return patchesApplied;
}
```

Then call it in `patchSTExe()`:
```javascript
totalPatches += patchMyNewApproach(exePath, speedMultiplier);
```

### Binary Analysis Tools

Recommended tools for finding speed-related code:
- **IDA Pro / Ghidra** - Disassembler/decompiler
- **no$psx** - PSX debugger
- **PCSX-Redux** - Debugger with Lua scripting
- **Cheat Engine** - Memory scanner

---

## Summary

This new approach focuses on **executable code modification** rather than **data modification**, providing multiple experimental attack vectors against the creature speed problem.
