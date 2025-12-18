# Magic Spell Database Analysis - Task #25

## Location

**File:** `FDAT.T_PARTS/482 139c000-13af000.T`  
**Size:** 76 KB  
**Format:** Binary data containing spell parameters and textures

## Structure

The magic spell database starts at the beginning of part 482. Each spell entry is **16 bytes** and is indexed by spell ID.

**Indexing:** Spell ID 0x30 (demon_bat) is at offset 0x00, spell ID 0x31 (acid_slime) is at offset 0x10, etc.

**Formula:** `offset = (spell_id - 0x30) * 16`

## Spell Data Format (16 bytes per spell)

```
Offset  Type    Purpose
0x00    UInt16  Unknown parameter 1
0x02    UInt16  Unknown parameter 2
0x04    UInt16  Unknown parameter 3  
0x06    UInt16  Unknown parameter 4
0x08    UInt16  Unknown parameter 5
0x0a    UInt16  Unknown parameter 6
0x0c    UInt16  Unknown parameter 7
0x0e    UInt16  Unknown parameter 8
```

## Sample Spell Data

### Spell 0x30 (demon_bat)
- Offset: 0x0000
- Raw hex: `10 02 f6 01 10 00 0a 00 10 02 f6 01 10 00 0a 00`
- Values: (528, 502, 16, 10, 528, 502, 16, 10)

### Spell 0x38 (imp)
- Offset: 0x0080
- Raw hex: `86 8c c8 90 64 88 43 84 85 8c 63 88 21 80 00 00`
- Values: (35974, 37064, 34916, 33859, 35973, 34915, 32801, 0)

### Spell 0xe1 (apocrypha)
- Offset: 0x0b10 (0xe1 - 0x30 = 0xb1, 0xb1 * 16 = 0x0b10)
- Raw hex: `5f c3 9a ff ff a3 ff ff ff ff 3f a9 b9 f3 ff ff`
- Values: (50175, 65338, 41983, 65338, 65535, 43327, 62297, 65535)

## Next Steps

1. **Determine which UInt16 value controls spell damage/power**
   - Likely candidates: values 1-4 (first 8 bytes)
   - May need in-game testing to confirm

2. **Implement magic damage scaling**
   - Add spell data reading in `data_model.js`
   - Create scaling logic in `randomize.js`
   - Apply `creatureAttributeFactor` to damage values

3. **Test with Apocrypha**
   - Scale Apocrypha's spell power (ID 0xe1)
   - Verify damage changes in-game
   - Confirm which parameter affects damage

## Code Implementation Plan

```javascript
// In data_model.js
class MagicSpell {
  constructor(bin, spellId) {
    this.offset = (spellId - 0x30) * 16;
    this.param1 = new UInt16(bin, this.offset + 0x00);
    this.param2 = new UInt16(bin, this.offset + 0x02);
    this.param3 = new UInt16(bin, this.offset + 0x04);
    this.param4 = new UInt16(bin, this.offset + 0x06);
    // ... params 5-8
  }
}

// In randomize.js
function scaleMagicPower(spell, factor) {
  // Scale damage parameter (TBD which one)
  spell.param1.set(Math.min(65535, Math.ceil(spell.param1.get() * factor)));
}
```

## Related Files

- Part 481: Item data (for reference)
- Parts 483-490: Additional magic-related data (textures, effects?)
- Parts 442-447: Potential "lost levels" data (non-empty, size 10KB-222KB)

## Issue #25 Resolution

This analysis addresses the core problem: magic damage doesn't scale with difficulty because we were trying to scale EntityStateData type 0x30 attack values (which are spell IDs) instead of the actual spell power values in this database.

**Solution:** Scale the appropriate parameter(s) in part 482 based on difficulty factor.
