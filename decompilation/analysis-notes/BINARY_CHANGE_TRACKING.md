# Binary Change Tracking: Isolation Patches to FDAT.T

## Purpose

This document maps the high-level isolation patch code in `randomize.js` to the actual binary modifications in `FDAT.T_PARTS` files, enabling us to understand exactly where and how damage-related stats are stored.

## The Complete Data Flow

```
randomize.js                    data_model.js                  Binary File
============                    =============                  ===========

creature.attack1.set(1)   -->   UInt8 accessor    -->    FDAT.T_PARTS/xxx.T
                                offset: 0x07                  byte[offset+0x07] = 0x01

creature.weaponDefense1.set(1) --> UInt16 accessor  -->  FDAT.T_PARTS/xxx.T
                                   offset: 0x4a            byte[offset+0x4a] = 0x01
                                                           byte[offset+0x4b] = 0x00

creature.enemyPower.set(10) --> UInt16 accessor    -->  FDAT.T_PARTS/xxx.T
                                offset: 0x0f              byte[offset+0x0f] = 0x0a
                                                          byte[offset+0x10] = 0x00
```

## UInt8 vs UInt16 Binary Representation

### UInt8 (1 byte) - Little Endian

```
Value: 1
Binary: 0x01

Memory layout:
[offset+0] = 0x01
```

### UInt16 (2 bytes) - Little Endian

```
Value: 1
Binary: 0x0001

Memory layout (Little Endian):
[offset+0] = 0x01  (low byte)
[offset+1] = 0x00  (high byte)

Value: 256 (0x0100)
Memory layout:
[offset+0] = 0x00  (low byte)
[offset+1] = 0x01  (high byte)

Value: 1000 (0x03e8)
Memory layout:
[offset+0] = 0xe8  (low byte = 232)
[offset+1] = 0x03  (high byte = 3)
```

## Isolation Patch Binary Modifications

### Attack Stats (UInt8 Fields)

| Code Line | Field | Offset | Size | Binary Write | Hexdump Pattern |
|-----------|-------|--------|------|--------------|-----------------|
| `creature.attack1.set(1)` | attack1 | 0x07 | 1 | `[07] = 01` | `07: 01` |
| `creature.attack2.set(1)` | attack2 | 0x08 | 1 | `[08] = 01` | `08: 01` |
| `creature.magic1.set(1)` | magic1 | 0x09 | 1 | `[09] = 01` | `09: 01` |

**Hexdump verification:**
```bash
hexdump -C FDAT.T_PARTS/file.T | grep "07:"
```
Look for: `00000007: xx 01 01 01 ...` (attack1, attack2, magic1 all set to 1)

### Defense Stats (UInt16 Fields)

| Code Line | Field | Offset | Size | Binary Write | Hexdump Pattern |
|-----------|-------|--------|------|--------------|-----------------|
| `creature.weaponDefense1.set(1)` | weaponDefense1 | 0x4a | 2 | `[4a]=01 [4b]=00` | `4a: 01 00` |
| `creature.weaponDefense2.set(1)` | weaponDefense2 | 0x4c | 2 | `[4c]=01 [4d]=00` | `4c: 01 00` |
| `creature.weaponDefense3.set(1)` | weaponDefense3 | 0x4e | 2 | `[4e]=01 [4f]=00` | `4e: 01 00` |
| `creature.magDefense1.set(1)` | magDefense1 | 0x50 | 2 | `[50]=01 [51]=00` | `50: 01 00` |
| `creature.magDefense2.set(1)` | magDefense2 | 0x52 | 2 | `[52]=01 [53]=00` | `52: 01 00` |
| `creature.magDefense3.set(1)` | magDefense3 | 0x54 | 2 | `[54]=01 [55]=00` | `54: 01 00` |
| `creature.magDefense4.set(1)` | magDefense4 | 0x56 | 2 | `[56]=01 [57]=00` | `56: 01 00` |
| `creature.magDefense5.set(1)` | magDefense5 | 0x58 | 2 | `[58]=01 [59]=00` | `58: 01 00` |

**Hexdump verification:**
```bash
hexdump -C FDAT.T_PARTS/file.T | grep "4a:"
```
Look for pattern: `0000004a: 01 00 01 00 01 00 ...` (all defenses set to 1)

### Newly Identified Fields (NOT in original isolation patches)

| Field | Offset | Size | Hypothesis | Binary Write (if set to 10) | Hexdump Pattern |
|-------|--------|------|------------|------------------------------|-----------------|
| enemyPower | 0x0f | 2 | Damage multiplier | `[0f]=0a [10]=00` | `0f: 0a 00` |
| baseDamage | 0x11 | 2 | Base damage value | `[11]=0a [12]=00` | `11: 0a 00` |

**These were NOT set by isolation patches** because they weren't identified until hp_damage.mips analysis.

## Accessor Class Implementation (data_model.js)

### UInt8 Class

```javascript
class UInt8 {
  constructor(bin, offset) {
    this.bin = bin;
    this.offset = offset;
  }
  
  get() {
    return this.bin[this.offset];
  }
  
  set(value) {
    this.bin[this.offset] = value & 0xFF;  // Mask to 8 bits
  }
}
```

**Binary effect of `creature.attack1.set(1)`:**
```javascript
// Given: creature.offset_in_file = 0x1000
// attack1 offset = 0x07
this.bin[0x1000 + 0x07] = 1;  // Writes to offset 0x1007
```

### UInt16 Class (Little Endian)

```javascript
class UInt16 {
  constructor(bin, offset) {
    this.bin = bin;
    this.offset = offset;
  }
  
  get() {
    return this.bin[this.offset] | (this.bin[this.offset + 1] << 8);
  }
  
  set(value) {
    this.bin[this.offset] = value & 0xFF;           // Low byte
    this.bin[this.offset + 1] = (value >> 8) & 0xFF; // High byte
  }
}
```

**Binary effect of `creature.weaponDefense1.set(1)`:**
```javascript
// Given: creature.offset_in_file = 0x1000
// weaponDefense1 offset = 0x4a
this.bin[0x1000 + 0x4a] = 1 & 0xFF;        // 0x01 (low byte)
this.bin[0x1000 + 0x4b] = (1 >> 8) & 0xFF; // 0x00 (high byte)
```

**Binary effect of `creature.enemyPower.set(1000)`:**
```javascript
// 1000 = 0x03e8
this.bin[0x1000 + 0x0f] = 1000 & 0xFF;        // 0xe8 = 232
this.bin[0x1000 + 0x10] = (1000 >> 8) & 0xFF; // 0x03 = 3
```

## EntityState Attacks (Dynamic Combat Data)

EntityStates are stored in a separate section of creature data. Each creature can have multiple states (idle, attack, special move, etc.).

### EntityState Structure

```javascript
class EntityStateData {
  constructor(bin, offset) {
    this.attack1 = new UInt16(bin, offset + 0x1a);
    this.attack2 = new UInt16(bin, offset + 0x1c);
    this.attack3 = new UInt16(bin, offset + 0x1e);
  }
}
```

### Isolation Patch for EntityStates

```javascript
creature.attacks.forEach(attack => attack.set(1));
```

This iterates through all attack states and sets each to 1:

| Field | Offset in State | Binary Write | Hexdump Pattern |
|-------|-----------------|--------------|-----------------|
| attack1 | 0x1a | `[1a]=01 [1b]=00` | `1a: 01 00` |
| attack2 | 0x1c | `[1c]=01 [1d]=00` | `1c: 01 00` |
| attack3 | 0x1e | `[1e]=01 [1f]=00` | `1e: 01 00` |

## Complete Example: Before and After Isolation Patch

### Original Creature Data (Hypothetical Acid Slime)

```
Offset: 0x00001000 (creature base)

Hexdump before patch:
00001007: 0f 12 05 ...    // attack1=15, attack2=18, magic1=5
0000100f: 32 00 ...       // enemyPower=50
00001011: 14 00 ...       // baseDamage=20
0000104a: 64 00 ...       // weaponDefense1=100
0000104c: 64 00 ...       // weaponDefense2=100
0000104e: 64 00 ...       // weaponDefense3=100
00001050: 32 00 ...       // magDefense1=50
00001052: 32 00 ...       // magDefense2=50
00001054: 32 00 ...       // magDefense3=50
00001056: 32 00 ...       // magDefense4=50
00001058: 32 00 ...       // magDefense5=50
```

### After Isolation Patch (Original - without enemyPower/baseDamage)

```
Hexdump after patch:
00001007: 01 01 01 ...    // attack1=1, attack2=1, magic1=1
0000100f: 32 00 ...       // enemyPower=50 (UNCHANGED - not in patch)
00001011: 14 00 ...       // baseDamage=20 (UNCHANGED - not in patch)
0000104a: 01 00 ...       // weaponDefense1=1
0000104c: 01 00 ...       // weaponDefense2=1
0000104e: 01 00 ...       // weaponDefense3=1
00001050: 01 00 ...       // magDefense1=1
00001052: 01 00 ...       // magDefense2=1
00001054: 01 00 ...       // magDefense3=1
00001056: 01 00 ...       // magDefense4=1
00001058: 01 00 ...       // magDefense5=1
```

**Result:** Creature still deals significant damage because enemyPower (50) and baseDamage (20) are unchanged!

### After COMPLETE Isolation Patch (Including new fields)

```
Hexdump after complete patch:
00001007: 01 01 01 ...    // attack1=1, attack2=1, magic1=1
0000100f: 01 00 ...       // enemyPower=1 (NEW)
00001011: 01 00 ...       // baseDamage=1 (NEW)
0000104a: 01 00 ...       // weaponDefense1=1
0000104c: 01 00 ...       // weaponDefense2=1
0000104e: 01 00 ...       // weaponDefense3=1
00001050: 01 00 ...       // magDefense1=1
00001052: 01 00 ...       // magDefense2=1
00001054: 01 00 ...       // magDefense3=1
00001056: 01 00 ...       // magDefense4=1
00001058: 01 00 ...       // magDefense5=1
```

**Result:** Creature deals minimal damage (likely 1-2 HP per hit).

## Changeset.json Structure

When randomize.js generates modifications, they're written to changeset.json:

```json
{
  "file": "FDAT.T_PARTS/128 281000-2c0800.T",
  "bytes": {
    "0x1007": "0x01",  // attack1 = 1
    "0x1008": "0x01",  // attack2 = 1
    "0x1009": "0x01",  // magic1 = 1
    "0x104a": "0x01",  // weaponDefense1 low byte
    "0x104b": "0x00",  // weaponDefense1 high byte
    "0x104c": "0x01",  // weaponDefense2 low byte
    "0x104d": "0x00",  // weaponDefense2 high byte
    ...
  }
}
```

Then `change.js` reads this and applies the modifications to the binary files.

## How to Use This for Decompilation

### Finding the Damage Formula in Ghidra

1. **Load ST.EXE or hp_damage.mips in Ghidra**
2. **Search for offset patterns:**
   - Search for loads at offset 0x07 (attack1)
   - Search for loads at offset 0x0f (enemyPower) 
   - Search for loads at offset 0x11 (baseDamage)
3. **Find functions that load all three:**
   ```mips
   lbu $t0, 0x07($a0)  # Load attack1
   lhu $t1, 0x0f($a0)  # Load enemyPower
   lhu $t2, 0x11($a0)  # Load baseDamage
   # ... arithmetic operations
   ```
4. **Decompile to C** to understand the formula
5. **Verify** by setting test values and checking in-game

### Example MIPS Pattern to Look For

```mips
# Hypothetical damage calculation function
# $a0 = pointer to creature structure

lbu  $t0, 0x07($a0)   # Load attack1 (UInt8)
lhu  $t1, 0x0f($a0)   # Load enemyPower (UInt16)
lhu  $t2, 0x11($a0)   # Load baseDamage (UInt16)

add  $t3, $t2, $t0    # baseDamage + attack1
mult $t3, $t1         # (baseDamage + attack1) * enemyPower
mflo $v0              # Return result in $v0

jr   $ra              # Return
```

This would translate to C as:
```c
uint32_t calculate_damage(Creature* creature) {
    uint8_t attack1 = creature->attack1;      // offset 0x07
    uint16_t enemyPower = creature->enemyPower; // offset 0x0f
    uint16_t baseDamage = creature->baseDamage; // offset 0x11
    
    return (baseDamage + attack1) * enemyPower;
}
```

## Verification Checklist

To confirm the field locations are correct:

- [ ] Create test preset that sets enemyPower to 1
- [ ] Create test preset that sets baseDamage to 1  
- [ ] Create test preset that sets all isolation patch fields to 1
- [ ] Test in-game and measure damage output
- [ ] Use hexdump to verify binary was modified correctly
- [ ] Use Ghidra to decompile and confirm formula
- [ ] Document the exact damage formula

## Tools and Commands

### View binary at specific offset
```bash
hexdump -C -s 0x1007 -n 16 FDAT.T_PARTS/file.T
```

### Compare before/after modification
```bash
# Before
hexdump -C FDAT.T_PARTS/original.T > before.txt

# After modification
hexdump -C FDAT.T_PARTS/modified.T > after.txt

# Compare
diff before.txt after.txt
```

### Search for offset pattern
```bash
grep -E "0f 00|11 00" decompilation/analysis-output/hp_damage.mips.hexdump.txt
```

### Run trace script
```bash
./trace_isolation_patches.sh
```

## References

- `data_model.js` - UInt8/UInt16 accessor implementations
- `randomize.js` lines 346-370 - Isolation patch code
- `change.js` - Binary modification applier
- `decompilation/analysis-notes/INITIAL_ANALYSIS_RESULTS.md` - Offset analysis
- `decompilation/MIPS_REFERENCE.md` - MIPS instruction reference

---

**Last Updated:** 2025-12-27
**Purpose:** Map isolation patches to binary modifications for decompilation
**Status:** Ready for Ghidra analysis
