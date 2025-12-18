# Creature Speed Investigation - Comprehensive Analysis

## Problem Statement

The `creatureSpeedMultiplier` parameter does not affect creature movement or animation speed in-game. Multiple attempts to modify different data fields have failed to change actual creature speed.

## What Has Been Tested (All Failed)

### 1. EntityStateData Offsets 0x03 and 0x08
- **Location**: EntityStateData structure (types 0x20 and 0x30)
- **What was modified**: Bytes at offsets 0x03 (action timer) and 0x08 (movement value)
- **Result**: Changes applied to binary, but no effect on creature speed in-game
- **Side effects**: None observed (blood slime behavior was normal)

### 2. Creature.spd Field
- **Location**: Creature data structure, offset 0x25
- **What was modified**: The "spd" stat field
- **Result**: Changes applied, but no effect on creature speed
- **Note**: This field appears to be stat bonus awarded when killing creature

### 3. Conclusion from Testing
- User tested with fast-creatures.json (5x multiplier)
- Spider and slime movement unchanged
- Blood slime behavior unchanged (normal aggression)
- **The data fields we can access do NOT control movement/animation speed**

## Investigation: Where Could Speed Data Be?

### Current Data Model Access

We currently have access to:

1. **Creature Structure** (~100+ bytes)
   - Stats (str, spd, def, etc.) - offset 0x24-0x31
   - Attack values - offset 0x07-0x09
   - Height, weight - offset 0x0b-0x11
   - HP - offset 0x32
   - Defense values - offset 0x4a-0x58
   - EntityState offsets array - offset 0x5c+

2. **EntityStateData** (48 bytes for types 0x20/0x30)
   - Type - offset 0x00
   - Attack damage values - offset 0x1a, 0x1c, 0x1e
   - Various unknown bytes at 0x03, 0x08, etc.

3. **Spawn Data**
   - Position (x, y, z)
   - Creature type reference
   - Drop tables
   - Spawn chance

### Files Examined

1. **CHR0-CHR4 Directories**
   - Contains M00.T through M09.T files
   - Unpacked as M0X.T_PARTS folders
   - **Contents**: Only TIM texture files (.tim extension)
   - **Conclusion**: No animation or model data, only visual textures

2. **COM/FDAT.T**
   - Main game data file
   - Contains creature stats, spawns, items
   - **Already parsed by data_model.js**

## Possible Locations for Speed Data

### Theory 1: Hardcoded in Game Executable
**File**: ST.EXE (game executable)
**Likelihood**: HIGH

PlayStation 1 games often hardcode creature behavior parameters in the executable rather than data files. Speed/animation timings may be:
- In lookup tables indexed by creature type
- In the AI/animation routines themselves
- Not modifiable without patching the executable

**How to investigate**:
- Disassemble ST.EXE with PS1 disassembler (IDA Pro, Ghidra, no$psx debugger)
- Look for creature type constants and behavior tables
- Search for animation frame timing code

### Theory 2: Model/Animation Files Not Being Unpacked
**Current state**: M0X.T files unpack to only TIM textures

**Hypothesis**: The actual model/animation data might be:
1. In a different file format we're not recognizing
2. Embedded in M0X.T but not being extracted by unpack.js
3. Using a custom PlayStation model format (not standard TIM/TMD/TOD)

**How to investigate**:
- Examine M0X.T binary structure directly
- Check if there are non-texture segments being skipped
- Compare file sizes: total M0X.T vs sum of extracted TIM files
- Look for TMD (PlayStation model format) or animation data headers

### Theory 3: Animation Timing in Separate Files
**Files to check**:
- Look for files with extensions: .ANM, .MOT, .SEQ, .ACT
- Check for unnamed/unknown file types in the ISO
- Examine any files we're not currently unpacking

### Theory 4: Frame-based Animation System
**Possibility**: Speed is controlled by frame skip/delay values

If Shadow Tower uses frame-based animation:
- Speed = how many game frames between animation frames
- This data could be in animation sequences
- May be per-animation rather than per-creature

## Next Steps for Investigation

### Step 1: Analyze M04.T Binary Structure

Let's examine the actual M04.T file structure to see if there's non-texture data:

```bash
# Get M04.T file size
ls -lh path/to/M04.T

# Calculate total size of extracted TIM files
du -sh M04.T_PARTS/

# If M04.T is larger, there's unextracted data
```

### Step 2: Search for Model Format Headers

Common PlayStation model formats:
- **TMD**: Starts with 0x41 (or version markers)
- **TOD**: Animation data
- **PMD**: Some games use custom formats

Look for these magic bytes in M0X.T files.

### Step 3: Examine Creature Data More Carefully

There may be fields in the Creature structure we haven't identified:
- Unknown bytes between known fields
- The "something3" and "something4" fields at offsets 0x0f and 0x11
- Bytes before the EntityState offsets array

### Step 4: Check for Animation Speed in EntityState

EntityStateData has many unknown bytes. Speed might be in:
- Bytes we haven't mapped yet
- Different offset for different creature types
- Encoded in a way we don't understand (e.g., inverted, scaled)

### Step 5: Compare Different Creatures

Analyze binary differences between creatures known to have different speeds:
- Slime (slow)
- Skeleton (medium)
- Demon Bat (fast)

Look for byte patterns that correlate with speed differences.

## Files to Investigate

1. **M04.T** (and other M0X.T files)
   - Binary analysis for non-texture data
   - Check total file size vs extracted content
   - Look for model/animation headers

2. **ST.EXE**
   - Disassemble and search for creature behavior code
   - Look for timing constants
   - Find animation playback routines

3. **Unknown Files in ISO**
   - List all files in the game
   - Identify any we're not currently processing

## Questions for Further Research

1. What is the total size of M04.T vs the sum of extracted TIM files?
2. Are there any non-.tim files we should be extracting?
3. Does the game use a standard PlayStation model format or custom?
4. Is there any documentation on Shadow Tower's file formats?
5. Has anyone else modded Shadow Tower and found animation data?

## Community Resources to Check

- FromSoft Modding Discord
- PSX-Place forums
- Xentax game archive formats
- Any existing Shadow Tower modding documentation

## Conclusion

The creature speed parameter cannot be implemented until we discover where speed/animation data is actually stored. This requires deeper investigation into:
1. Game executable (most likely)
2. Model/animation file formats
3. Undiscovered data structures

**Status**: Investigation ongoing, no solution found yet.
