# Creature Template Data Tables - Complete Hex Dumps

## Overview

This document contains the actual binary data tables for creature type templates found in FDAT.T Part X3 files (MIPS + templates).

**Template Structure:** 16 bytes per creature type
- Bytes 0-13: Stats (Str/Spd/Def/Bal/Sla/Smh/Pir/Spr/Foc/Ham/Pur/Par/Mel/Sol)
- Bytes 14-15: HP (little-endian UInt16)

## Template Locations in FDAT.T

### Part 43 (Human World Solitary Region - logo_index 41+2)

**File offset range:** 0x253000 - 0x255800  
**Template section start:** 0x255000 (offset +0x2000 from part start)

**Acid Slime Template** - Offset 0x002558e8:
```
Offset: 0x002558e8
Hex:    00 00 00 01 00 00 00 00 00 00 00 00 00 00 5F 00
        ^  ^  ^  ^  ^  ^  ^  ^  ^  ^  ^  ^  ^  ^  ^--^
        |  |  |  |  |  |  |  |  |  |  |  |  |  |  HP=95
        |  |  |  |  |  |  |  |  |  |  |  |  |  Sol=0
        |  |  |  |  |  |  |  |  |  |  |  |  Mel=0
        |  |  |  |  |  |  |  |  |  |  |  Par=0
        |  |  |  |  |  |  |  |  |  |  Pur=0
        |  |  |  |  |  |  |  |  |  Ham=0
        |  |  |  |  |  |  |  |  Foc=0
        |  |  |  |  |  |  |  Spr=0  ← Spirit (enemy_power)
        |  |  |  |  |  |  Pir=0
        |  |  |  |  |  Smh=0
        |  |  |  |  Sla=0
        |  |  |  Bal=1
        |  |  Def=0
        |  Spd=0
        Str=0
```

**Blood Slime Template** - Offset 0x002559a8:
```
Offset: 0x002559a8
Hex:    00 00 00 00 00 00 00 00 00 00 00 00 01 00 60 00
        ^  ^  ^  ^  ^  ^  ^  ^  ^  ^  ^  ^  ^  ^  ^--^
        |  |  |  |  |  |  |  |  |  |  |  |  |  |  HP=96
        |  |  |  |  |  |  |  |  |  |  |  |  |  Sol=0
        |  |  |  |  |  |  |  |  |  |  |  |  Mel=1  ← Melee power
        |  |  |  |  |  |  |  |  |  |  |  Par=0
        |  |  |  |  |  |  |  |  |  |  Pur=0
        |  |  |  |  |  |  |  |  |  Ham=0
        |  |  |  |  |  |  |  |  Foc=0
        |  |  |  |  |  |  |  Spr=0  ← Spirit (enemy_power)
        |  |  |  |  |  |  Pir=0
        |  |  |  |  |  Smh=0
        |  |  |  |  Sla=0
        |  |  |  Bal=0
        |  |  Def=0
        |  Spd=0
        Str=0
```

**Skeleton Template** - Offset 0x00255c84:
```
Offset: 0x00255c84
Hex:    05 00 01 00 00 00 01 00 00 00 00 00 00 00 50 00
Stats:  Str=5, Spd=0, Def=1, Bal=0, Sla=0, Smh=0, Pir=1, Spr=0
        Foc=0, Ham=0, Pur=0, Par=0, Mel=0, Sol=0, HP=80
```

**Demon Bat Template** - Offset 0x00255ec4:
```
Offset: 0x00255ec4
Hex:    00 06 00 00 00 00 00 00 00 00 00 00 00 00 18 00
Stats:  Str=0, Spd=6, Def=0, Bal=0, Sla=0, Smh=0, Pir=0, Spr=0
        Foc=0, Ham=0, Pur=0, Par=0, Mel=0, Sol=0, HP=24
```

### Part 54 (Hybrid Part - logo_index 51+2 or 161+2)

**File offset range:** 0x2f0000 - 0x2f9000  
**Template section start:** 0x2f0000 (offset +0x0 from part start)

**Acid Slime (Copy 1)** - Offset 0x002f0004:
```
Offset: 0x002f0004
Hex:    00 00 00 01 00 00 00 00 00 00 00 00 00 00 5F 00
Stats:  Same as Part 43 - Str=0, Bal=1, HP=95
```

**Blood Slime (Copy 1)** - Offset 0x002f00c4:
```
Offset: 0x002f00c4
Hex:    00 00 00 00 00 00 00 00 00 00 00 00 01 00 60 00
Stats:  Same as Part 43 - Mel=1, HP=96
```

**Parasite Template** - Offset 0x002f0184:
```
Offset: 0x002f0184
Hex:    00 00 00 00 00 00 00 00 00 00 00 00 00 00 18 00
Stats:  All stats 0, HP=24
```

**Fanged Worm Template** - Offset 0x002f0484:
```
Offset: 0x002f0484
Hex:    00 00 04 00 00 00 00 00 00 00 00 00 00 00 19 00
Stats:  Def=4, HP=25
```

**Casket Template** - Offset 0x002f0604:
```
Offset: 0x002f0604
Hex:    07 00 03 00 00 00 01 00 00 00 00 00 00 00 28 00
Stats:  Str=7, Def=3, Pir=1, HP=40
```

### Part 55 (Additional Templates - logo_index 41+4)

**File offset range:** 0x2f9000 - 0x30f800  
**Template section start:** 0x305000 (offset +0xc000 from part start)

### Complete Template Index

**All templates found across Parts 43, 54, 55:**

| Creature Type | Part | Offset | Str | Spd | Def | Bal | Sla | Smh | Pir | Spr | Foc | Ham | Pur | Par | Mel | Sol | HP |
|---------------|------|--------|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|----|
| Acid Slime | 43 | 0x2558e8 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 95 |
| Blood Slime | 43 | 0x2559a8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 96 |
| Skeleton | 43 | 0x255c84 | 5 | 0 | 1 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 80 |
| Demon Bat | 43 | 0x255ec4 | 0 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 24 |
| Dark Spider | 43 | 0x255804 | 0 | 4 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 20 |
| Parasite | 54 | 0x2f0184 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 24 |
| Fanged Worm | 54 | 0x2f0484 | 0 | 0 | 4 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 25 |
| Casket | 54 | 0x2f0604 | 7 | 0 | 3 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 40 |

## Template Usage

These templates serve as base stats for creature TYPES. When a creature spawns:
1. Game loads global template for creature type from Part X3
2. Loads per-instance override from spawn data in Part X4 (map file)
3. Applies combined stats to creature instance

**Spirit stat is critical:** Feeds `EntityStateData.enemy_power` which is used in damage calculation:
```c
damage = (base_damage * player_stat * enemy_power) / 10
```

## Randomization Implications

To randomize creature stats comprehensively:
- **Level 1:** Modify global templates in ALL X3 parts (affects all instances of that creature type across all areas)
- **Level 2:** Modify per-instance stats in X4 parts (affects specific spawn locations)

Current implementation targets Level 2 only. For complete randomization, both levels should be modified.

## Finding Templates in Other X3 Parts

**Search methodology:**
1. Identify Part X3 for area (logo_index + 2)
2. Search for creature HP signatures (16-byte patterns ending with known HP values)
3. Common HP values: 20, 24, 25, 40, 80, 95, 96, 100, 120, etc.
4. Verify structure: 14 stats + 2-byte HP

**Example search for acid slime (HP=95) in Part 63:**
```
hex pattern: ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? 5F 00
```

Where `??` can be 00-FF (stats vary), but HP=95 (0x5F00 little-endian) is consistent.
