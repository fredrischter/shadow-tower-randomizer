# HP Write Locations Analysis - ST.EXE

## Overview

Complete documentation of all **161 HP array write instructions** found in ST.EXE. This analysis categorizes each write by purpose to enable accurate patch targeting.

## Summary

- **Total HP Writes**: 161 instructions
- **Damage Calculation Section** (0x2d740-0x2dffc): 46 writes
  - Active damage writes (0x2d740-0x2d8ec): 23 instructions ← **Target for HP damage patches**
  - Boundary/other writes (0x2d8ec-0x2dffc): 23 instructions
- **Initialization Section** (0x2dfac-0x2dff8): 26 writes
  - Clears all 26 HP values during `InitializePlayerState` function
  - Includes target instruction at 0x8003d7f8 (file offset 0x2dff8)
- **Other Sections**: 89 writes
  - Healing, UI display, status updates, etc.

## HP Array Structure

The PlayerState structure contains a 26-element HP array at offset +0x190:

```c
typedef struct {
    // ... other fields ...
    uint16_t hp_array[26];  // +0x190 to +0x1c2
    // ... other fields ...
} PlayerState;
```

Each HP value is 2 bytes (uint16_t), covering offsets:
- HP[0]:  +0x190
- HP[1]:  +0x192
- HP[2]:  +0x194
- ...
- HP[6]:  +0x19c ← Target of instruction at 0x8003d7f8
- ...
- HP[25]: +0x1c2

## Damage Calculation Section (0x2d740-0x2d8ec)

These 23 HP writes occur during active damage calculation when player takes damage from enemies. **These are the correct targets for HP damage patches.**

### File Offsets (ST.EXE)

```
0x2d740: HP[7]  at +0x19e
0x2d74c: HP[6]  at +0x19c
0x2d750: HP[6]  at +0x19c
0x2d75c: HP[7]  at +0x19e
0x2d77c: HP[3]  at +0x196
0x2d794: HP[3]  at +0x196
0x2d79c: HP[2]  at +0x194
0x2d7ac: HP[2]  at +0x194
0x2d7b8: HP[3]  at +0x196
0x2d7dc: HP[5]  at +0x19a
0x2d7e4: HP[4]  at +0x198
0x2d7f0: HP[4]  at +0x198
0x2d7fc: HP[5]  at +0x19a
0x2d858: HP[9]  at +0x1a2
0x2d860: HP[8]  at +0x1a0
0x2d88c: HP[8]  at +0x1a0
0x2d898: HP[9]  at +0x1a2
0x2d8e4: HP[0]  at +0x190
0x2d8ec: HP[1]  at +0x192
```

### Runtime Addresses

Add 0x80000000 to file offsets for runtime addresses:
- File 0x2d740 → Runtime 0x8002d740
- File 0x2d8ec → Runtime 0x8002d8ec

## Initialization Section (0x2dfac-0x2dff8)

These 26 HP writes occur in the `InitializePlayerState` function, clearing all HP values to 0 during player state initialization (not combat damage).

### File Offsets (ST.EXE)

```
0x2dfac: HP[0]  at +0x190  (loop iteration 0)
0x2dfb0: HP[1]  at +0x192  (loop iteration 1)
0x2dfb4: HP[2]  at +0x194  (loop iteration 2)
0x2dfb8: HP[3]  at +0x196  (loop iteration 3)
0x2dfbc: HP[4]  at +0x198  (loop iteration 4)
0x2dfc0: HP[5]  at +0x19a  (loop iteration 5)
0x2dfc4: HP[6]  at +0x19c  (loop iteration 6) ← Target instruction
...
0x2dff4: HP[24] at +0x1c0  (loop iteration 24)
0x2dff8: HP[25] at +0x1c2  (loop iteration 25) ← Original investigation target
```

### Purpose

This is the compiler-unrolled loop that clears the HP array during initialization:

```c
void InitializePlayerState(PlayerState* state) {
    // ... other initialization ...
    
    // Clear HP array (compiler unrolled this loop)
    for (int i = 0; i < 26; i++) {
        state->hp_array[i] = 0;
    }
    
    // ... more initialization ...
}
```

## Other HP Writes (89 locations)

The remaining 89 HP writes are scattered throughout ST.EXE in various functions:
- Healing/recovery functions
- HP display/UI updates  
- Status effect processing
- Save/load functions
- Debug/cheat code
- Etc.

These are NOT related to taking damage from enemies.

## Patch Targeting Guidelines

### For HP Damage Modification Patches:
✅ **Target**: Damage calculation section (0x2d740-0x2d8ec)
- These writes occur when player takes damage
- Modifying these affects actual combat damage

### Do NOT Target:
❌ Initialization section (0x2dfac-0x2dff8) - Only runs during state init
❌ Other sections - Healing, UI, save/load, etc.
❌ MP calculation code - Completely different system

## Previous Patch Error

The original 14 patches (force_damage_to_100, force_damage_to_one, etc.) were incorrectly targeting MP (magic points) calculation code, not HP damage writes.

**Incorrect targets**:
- File offsets in 0x1xxxx range (MP calculation)
- Did NOT affect HP array at +0x190-0x1c2

**Corrected targets**:
- File offsets 0x2d740-0x2d8ec (HP damage calculation)
- Directly modify HP array writes

## Verification

To verify a patch targets HP damage correctly:

1. Check file offset is in range 0x2d740-0x2d8ec
2. Verify instruction writes to offset +0x190 through +0x1c2
3. Test in-game: patch should affect HP when taking damage from enemies
4. Should NOT affect: MP, initialization, healing, UI display

## Tools

- **analyze_hp_writes.py** - Scans ST.EXE for all HP writes and categorizes them
- **disassemble_st_exe.py** - Disassembles instructions around HP writes for context

## Complete List

For the complete list of all 161 HP write locations with runtime addresses and instruction details, run:

```bash
python3 analyze_hp_writes.py
```

This will generate a full report with:
- File and runtime offsets
- HP array index and offset
- Instruction opcode
- Categorization by purpose
