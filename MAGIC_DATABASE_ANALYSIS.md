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

## Complete Spell Database Table

| Spell ID | Monster Name(s)                              | Param1 | Param2 | Param3 | Param4 | Param5 | Param6 | Param7 | Param8 | Notes |
|----------|----------------------------------------------|--------|--------|--------|--------|--------|--------|--------|--------|-------|
| 0x30 | demon_bat | 528 | 502 | 16 | 10 | 528 | 502 | 16 | 10 | Early enemy |
| 0x31 | acid_slime | 65535 | 33035 | 33068 | 33001 | 33101 | 33034 | 33067 | 33100 | |
| 0x32 | blood_slime | 33133 | 32967 | 33000 | 33166 | 33199 | 33232 | 33165 | 0 | |
| 0x33 | fanged_worm | 65535 | 44396 | 46511 | 57115 | 46544 | 45487 | 58205 | 55033 | |
| 0x34 | shadow_spider | 50805 | 49748 | 60318 | 52919 | 48691 | 44429 | 43371 | 0 | |
| 0x36 | acid_skull | 65535 | 34882 | 35939 | 39110 | 40167 | 41224 | 42281 | 38054 | |
| 0x37 | blood_skull | 33826 | 35972 | 0 | 0 | 0 | 0 | 0 | 0 | |
| 0x38 | imp | 65535 | 38056 | 36999 | 33826 | 35942 | 38089 | 37032 | 37031 | Common caster |
| 0x3a | star_serpent | 65535 | 34882 | 35939 | 39110 | 40167 | 42281 | 43338 | 44395 | |
| 0x3b | chirper/doriwi/bone_wolf/elder/etc | 65535 | 35939 | 36996 | 38053 | 39110 | 40167 | 41224 | 42281 | Multiple creatures |
| 0x3e | acid_pod/cocoon_plant/trickster | 65535 | 33825 | 34882 | 35939 | 36996 | 38053 | 39110 | 40167 | |
| 0x47 | torg/freak | 65535 | 33890 | 34947 | 36004 | 37061 | 38118 | 39175 | 40232 | |
| 0x4c | cursed_demon/rotting_face/blood_bone | 65535 | 33888 | 34945 | 36002 | 37059 | 38116 | 39173 | 40230 | |
| 0x56 | jinn_lord | 65535 | 34944 | 36001 | 37058 | 38115 | 39172 | 40229 | 41286 | Fire world boss |
| 0x58 | horned_skull/fire_jinn | 65535 | 37057 | 38114 | 39171 | 40228 | 41285 | 42342 | 43399 | |
| 0x5f | abraxus | 65535 | 35968 | 37025 | 38082 | 39139 | 40196 | 41253 | 42310 | |
| 0x60 | arachness | 65535 | 38113 | 39170 | 40227 | 41284 | 42341 | 43398 | 44455 | |
| 0x63 | bone_demon/cerberus | 65535 | 39178 | 40235 | 41292 | 42349 | 43406 | 44463 | 45520 | Major boss |
| 0x6b | blood_brain | 44454 | 45511 | 46568 | 47625 | 48682 | 49739 | 50796 | 51853 | |
| 0x75 | magi_magus | 65535 | 41337 | 42394 | 43451 | 44508 | 45565 | 46622 | 47679 | |
| 0x78 | hell_hunter/claw_head | 65535 | 43393 | 44450 | 45507 | 46564 | 47621 | 48678 | 49735 | |
| 0x87 | dark_fairy | 65535 | 34950 | 36007 | 37064 | 38121 | 39178 | 40235 | 41292 | |
| 0x88 | maristella | 65535 | 35945 | 37002 | 38059 | 39116 | 40173 | 41230 | 42287 | |
| 0x8c | gargaral | 65535 | 33888 | 34945 | 36002 | 37059 | 38116 | 39173 | 40230 | |
| 0x8e | death_mage | 65535 | 36004 | 37061 | 38118 | 39175 | 40232 | 41289 | 42346 | |
| 0x92 | gorthaur | 65535 | 37057 | 38114 | 39171 | 40228 | 41285 | 42342 | 43399 | Boss NPC |
| 0x93 | warpoor | 37342 | 38399 | 39456 | 40513 | 41570 | 42627 | 43684 | 44741 | |
| 0x99 | dark_spirits | 65535 | 38122 | 39179 | 40236 | 41293 | 42350 | 43407 | 44464 | |
| 0x9c | dinogon | 65535 | 39168 | 40225 | 41282 | 42339 | 43396 | 44453 | 45510 | |
| 0xa0 | auriel_c | 65535 | 42344 | 43401 | 44458 | 45515 | 46572 | 47629 | 48686 | |
| 0xa4 | necron | 65535 | 42344 | 43401 | 44458 | 45515 | 46572 | 47629 | 48686 | Death world boss |
| 0xa7 | balron_b | 34066 | 35208 | 30600 | 26487 | 21862 | 12851 | 9012 | 8738 | |
| 0xa9 | balron_a | 52293 | 52420 | 52428 | 52377 | 18892 | 35228 | 30651 | 43683 | Major boss |
| 0xc8 | guardian_b/guardian_a | 65535 | 65535 | 65535 | 65535 | 65535 | 65535 | 65535 | 65535 | Final boss |
| 0xd8 | mystic_tower | 65535 | 65535 | 65535 | 65535 | 65535 | 61743 | 8191 | 65521 | |
| 0xdb | ruby_demon | 65535 | 65535 | 65535 | 65535 | 65535 | 65535 | 65535 | 65535 | |
| 0xde | demons_eye | 65535 | 65535 | 62002 | 65535 | 12287 | 61161 | 58681 | 65374 | |
| 0xe1 | **apocrypha** | **50175** | **65338** | **41983** | **65338** | **65535** | **43327** | **62297** | **65535** | **Major boss** |
| 0xe4 | descrypha | 65535 | 37887 | 16110 | 65535 | 65535 | 16383 | 10717 | 65535 | |
| 0xeb | ring_demon | 65535 | 65535 | 65535 | 65535 | 49919 | 9694 | 60497 | 65390 | |
| 0xee | gordoral | 65535 | 64230 | 60511 | 65306 | 65535 | 60465 | 65324 | 65535 | |
| 0xf2 | wildowess | 65535 | 62001 | 13055 | 65522 | 65535 | 23203 | 65521 | 65535 | Boss NPC |
| 0xf5 | dark_imp/black_imp | 65535 | 65535 | 65535 | 65535 | 65535 | 65535 | 65535 | 65535 | |
| 0xf6 | king_edward | 65535 | 65535 | 8191 | 65521 | 65535 | 65535 | 65535 | 65535 | Final boss |

**Analysis Notes:**
- Many spells have 65535 (0xFFFF) in Param1, suggesting it might be a "use default" flag
- Early enemies (demon_bat) have much lower values (528, 502, 16, 10)
- Boss enemies tend to have higher values or all 65535
- Params 2-4 show progressive increases across spell IDs, suggesting they might be effect-related
- **Hypothesis:** Param1 might be base damage, with 65535 meaning "calculate from creature level"

## Apocrypha Test Modifications

**Spell ID:** 0xe1  
**Offset in part 482:** 0x0b10 (2832 decimal)  
**File:** `FDAT.T_PARTS/482 139c000-13af000.T`

### Current Parameter Values

| Parameter | Value | Hex | Byte Position |
|-----------|-------|-----|---------------|
| Param1 | 50175 | 0xc3ff | 0x0b10-0x0b11 |
| Param2 | 65338 | 0xff3a | 0x0b12-0x0b13 |
| Param3 | 41983 | 0xa3ff | 0x0b14-0x0b15 |
| Param4 | 65338 | 0xff3a | 0x0b16-0x0b17 |
| Param5 | 65535 | 0xffff | 0x0b18-0x0b19 |
| Param6 | 43327 | 0xa93f | 0x0b1a-0x0b1b |
| Param7 | 62297 | 0xf359 | 0x0b1c-0x0b1d |
| Param8 | 65535 | 0xffff | 0x0b1e-0x0b1f |

### Test Byte Modifications (Assuming Param1 is Damage)

**To DOUBLE damage:**
```
Byte 0x0b10 = 0xfe
Byte 0x0b11 = 0x87
(Changes 50175 → 100350)
```

**To HALVE damage:**
```
Byte 0x0b10 = 0xff
Byte 0x0b11 = 0x61
(Changes 50175 → 25087)
```

**To set VERY LOW damage (easy testing):**
```
Byte 0x0b10 = 0x0a
Byte 0x0b11 = 0x00
(Changes 50175 → 10)
```

**To set VERY HIGH damage (hard testing):**
```
Byte 0x0b10 = 0xe8
Byte 0x0b11 = 0x03
(Changes 50175 → 1000)
```

### Alternative: Test Other Parameters

If Param1 doesn't affect damage, try modifying Param2, Param3, or Param4 using the same approach:

**For Param2 (currently 65338):**
```
Byte 0x0b12 = <low byte>
Byte 0x0b13 = <high byte>
```

**For Param3 (currently 41983):**
```
Byte 0x0b14 = <low byte>
Byte 0x0b15 = <high byte>
```

**For Param4 (currently 65338):**
```
Byte 0x0b16 = <low byte>
Byte 0x0b17 = <high byte>
```

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
