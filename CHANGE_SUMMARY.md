# Summary: EXE Patching Implementation (Issue #31)

## User Feedback Received

**Comment from @fredrischter:**
> "No this is totally wrong, I dont want entitydata change but continuation on binary study, the attempt to change exe and other binaries, providing more other so I try"

## Actions Taken

### 1. Reverted Previous Approach ✅

**Removed:**
- EntityStateData speed field modifications
- Creature.spd field modifications  
- All experimental creature data byte modifications
- 5 documentation files related to old approach
- 3 test scripts for old approach

### 2. Implemented New EXE Patching Approach ✅

**Created:**
- `patch_exe_speed.js` - Binary patcher for ST.EXE (391 lines)
- `EXE_PATCHING_APPROACH.md` - Complete documentation (289 lines)

**Modified:**
- `randomize.js` - Integrated EXE patching at end of workflow

### 3. Four Experimental Patching Methods

#### Method 1: Animation Frame Delays
Searches for MIPS `addiu` instructions with delay constants and divides by speed multiplier.

#### Method 2: Movement Speed Multipliers  
Searches for MIPS `SRL` (shift right logical) instructions and reduces shift amount.

#### Method 3: AI Update Intervals
Placeholder for manual reverse engineering with specific offsets.

#### Method 4: Velocity Constants
Searches for fixed-point velocity values and multiplies by speed multiplier.

## Testing Results

**Standalone test:**
```bash
node patch_exe_speed.js iso-dump 2.0
```

**Output:**
```
TOTAL PATCHES APPLIED: 2583
  - Animation delays: 2572 patches
  - Movement multipliers: 1 patch
  - Velocity constants: 10 patches
✓ ST.EXE has been patched
```

## How It Works

1. User builds ISO with `creatureSpeedMultiplier` parameter
2. Randomize step runs (creature data unchanged)
3. `patch_exe_speed.js` patches ST.EXE binary
4. Modified EXE included in final ISO
5. User tests in emulator

## Key Differences

| Aspect | Old (Reverted) | New (Implemented) |
|--------|----------------|-------------------|
| Target | Creature data | ST.EXE executable |
| Level | Data modification | Code modification |
| Patches | ~11 per creature | 2583 total |
| Safety | Data only | Auto EXE backup |

## Next Steps

Build and test:
```bash
npm run mod "./st.bin" "./params/fast-creatures.json"
```

Check console for patch count, then test ISO in emulator.

## Commit

**Hash:** 867de30  
**Date:** December 19, 2025  
**Status:** ✅ COMPLETE - Ready for testing
