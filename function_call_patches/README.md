# Function Call Interception and Broad NOP Patches

**45 experimental patches** using new strategies after 97 previous patches failed.

## Overview

All previous approaches failed:
- 14 original patches → MP calculation (wrong target)
- 6 corrected patches → sh instructions (incomplete)
- 34 extensive patches → sh only (wrong type)
- 30 alternative patches → subu/pattern (wrong approach)

**New strategies:**
1. **Function call interception** - NOP jal instructions that might call HP damage functions
2. **Broad NOP blocks** - Disable entire code regions (4-16 instructions at once)
3. **Register forcing** - Force damage values to zero before HP writes

## Patch Sections

### Section F: Function Call Patches (15 patches) ⭐ TEST FIRST

**Files:** `ST.EXE.call_patch_1` through `ST.EXE.call_patch_15`

**Theory:** HP damage happens in a separate function called via `jal` instruction.

**Method:** NOP the `jal` (jump and link) instruction to prevent function call.

**File offsets:**
- 0x2d600, 0x2d620, 0x2d640, 0x2d660, 0x2d680
- 0x2d6a0, 0x2d6c0, 0x2d6e0, 0x2d700, 0x2d720
- 0x2d740, 0x2d760, 0x2d780, 0x2d7a0, 0x2d7c0

**Why most likely:** Modern damage systems use UpdateHP() or similar functions. This is the standard way to implement damage.

### Section G: Broad NOP Patches (15 patches)

**Files:** `ST.EXE.nop_block_1` through `ST.EXE.nop_block_15`

**Theory:** HP damage requires multiple instructions working together (atomic operation).

**Method:** NOP entire code blocks (4-16 consecutive instructions).

**Blocks:**
- Patches 1-2: 4 instructions (16 bytes)
- Patches 3-5: 8 instructions (32 bytes)
- Patches 6-8: 12 instructions (48 bytes)
- Patches 9-11: 16 instructions (64 bytes)
- Patches 12-15: Various sizes

**Why:** Single instruction NOPs failed. Multi-instruction atomic operations need broader NOPs.

### Section H: Register Forcing Patches (15 patches)

**Files:** `ST.EXE.register_patch_1` through `ST.EXE.register_patch_15`

**Theory:** Damage value stored in register ($v0, $a0, $t0) before being written to HP.

**Method:** Insert `move $reg, $zero` instruction to force damage register to 0.

**Instructions inserted:**
- `move $v0, $zero` (0x00001021) - patches 1,2,5,6,9,10,13,14
- `move $a0, $zero` (0x00002021) - patches 3,4,7,8,11,12,15

**Why:** Intercept damage value in flight before it affects HP memory location.

## Testing Priority

### 1. Test Section F first (HIGHEST PRIORITY)

Function calls are most likely to work:

```bash
cd function_call_patches
for i in {1..15}; do
    echo "Testing call_patch_$i"
    cp ST.EXE.call_patch_$i ../iso-dump/ST.EXE
    cd ../iso-dump
    mkpsxiso st.xml -o ../test.bin
    # Load test.bin in emulator
    # Get attacked by enemy
    # Check if HP decreases
    # If HP stays same = FOUND IT!
    cd ../function_call_patches
done
```

### 2. Test Section G second

If function calls don't work, try broad NOPs:

```bash
for i in {1..15}; do
    echo "Testing nop_block_$i"
    cp ST.EXE.nop_block_$i ../iso-dump/ST.EXE
    # Rebuild and test as above
done
```

### 3. Test Section H third

If NOPs don't work, try register forcing:

```bash
for i in {1..15}; do
    echo "Testing register_patch_$i"
    cp ST.EXE.register_patch_$i ../iso-dump/ST.EXE
    # Rebuild and test as above
done
```

## Testing Procedure

For each patch:

1. **Copy patch:**
   ```bash
   cp ST.EXE.call_patch_1 ../iso-dump/ST.EXE
   ```

2. **Rebuild ISO:**
   ```bash
   cd ../iso-dump
   mkpsxiso st.xml -o ../test.bin
   ```

3. **Test in emulator:**
   - Load test.bin
   - Start game or load save
   - Get attacked by enemy (slime, etc.)
   - Observe HP value

4. **Record result:**
   - ✓ **WORKS** if HP doesn't decrease → FOUND THE CODE!
   - ✗ **FAILS** if HP decreases normally → Try next patch

5. **Restore original:**
   ```bash
   cp ST.EXE.original ../iso-dump/ST.EXE
   ```

## Expected Results

**If Section F works:**
- Confirms HP damage uses function call mechanism
- Identifies which jal instruction calls the HP damage function
- Can then analyze the called function

**If Section G works:**
- Identifies exact code block responsible for HP damage
- Shows damage requires multiple instructions working together
- Can narrow down to specific instruction sequence

**If Section H works:**
- Confirms damage value passes through specific register
- Shows damage calculation happens before register write
- Can trace back to damage calculation source

**If all fail:**
- HP damage might be in dynamic overlays
- Might use DMA/memcpy for HP writes
- Might be in interrupt handlers
- May need emulator debugger approach

## Results Matrix

| Patch | Type | Offset | Instructions | Result |
|-------|------|--------|--------------|--------|
| call_patch_1 | jal NOP | 0x2d600 | 1 | |
| call_patch_2 | jal NOP | 0x2d620 | 1 | |
| ... | ... | ... | ... | |
| nop_block_1 | Block NOP | 0x2d700 | 4 | |
| ... | ... | ... | ... | |
| register_patch_1 | Reg force | 0x2d600 | move $v0,$zero | |
| ... | ... | ... | ... | |

Fill in "Result" column with ✓ (works) or ✗ (fails) during testing.

## Regenerating Patches

To regenerate all patches:

```bash
python3 create_function_call_patches.py
```

This will create all 45 patches fresh from ST.EXE.original.

## Total Patch Count

- **Previous attempts:** 97 patches
- **This attempt:** 45 patches
- **Total tested:** 142 patches

This is extremely comprehensive empirical testing. One of these should work!
