# Shadow Tower Creature Power Value Table

**Generated:** 2025-12-18T10:55:55.363Z

**Purpose:** Verify PR #14 magic/projectile attack damage scaling fix

This table shows power values for all creatures, including:
- **Type 0x20**: Physical attack EntityStateData
- **Type 0x30**: Spell/Magic attack EntityStateData (fixed in PR #14)

---

## Summary Statistics

- **Total Unique Creatures**: 34
- **Creatures with Physical Attacks (0x20)**: 13
- **Creatures with Magic Attacks (0x30)**: 18
- **Average Power Score**: 8733
- **Highest Power Score**: 33726
- **Lowest Power Score**: 154

### Important Notes

⚠️ **Progression-Based Scaling:** The power values shown reflect global difficulty scaling only.
They do NOT include position-based normalization (e.g., strong creatures weakened when placed in early areas).
This feature is planned but not yet implemented.

- **Area Score**: Indicates creature's position in randomized map progression (0 = start, higher = later)
- **Power Score**: Calculated from base attributes + attacks + defenses after difficulty scaling
- **Attack Values**: Shown are the actual scaled values (Type 0x20 = physical, Type 0x30 = magic)

---

## Compact Creature Table (Sorted by Power)

**Note:** Power values shown are after global difficulty scaling but do NOT include progression-based normalization.
Area Score indicates the creature's position in game progression (0 = start area, higher = later areas).

| Creature Name | Power | HP | Area Score | Physical (0x20) | Magic (0x30) | Area |
|---------------|-------|----|-----------|-----------------|--------------|-----------|
| 00_abraxus | 33726 | 65535 | 0 | - | 95/181/181; 95/181/181 | fire world molten cavern |
| 0d_fat_mole_e | 32867 | 65535 | 0 | - | - | death world undead layer |
| 02_fat_mole_d | 32846 | 65535 | 0 | - | - | illusion world worship do |
| 00_fat_mole_f | 32840 | 65535 | 7 | - | - | water world impure pool a |
| 08_fat_mole_b | 32807 | 65535 | 0 | - | - | fire world molten cavern |
| 0c_fat_mole_c | 32807 | 65535 | 0 | - | - | fire world molten cavern |
| 04_fat_mole_a | 32768 | 65535 | 5 | - | - | human world cursed region |
| 01_unknown_b | 5838 | 7560 | 0 | 520/450/550; 620/480/550 | 124; 125 | death world undead layer |
| 01_auriel_c | 5793 | 7560 | 0 | 550/450/540; 550/450/540 | 160; 161 | monster world screeching  |
| 0c_hollow_mage | 5167 | 7800 | 0 | - | 59; 64 | death world gate of the d |
| 04_king_edward | 4829 | 6500 | 0 | 50/45/50; 40/40/20; 90/40/80 | 246 | death world undead layer |
| 04_wildowess | 4765 | 6600 | 0 | 205/150/340 | 242 | illusion world worship do |
| 00_unused_a | 4522 | 6000 | 0 | - | - | death world gate of the d |
| 0e_necron | 4459 | 4800 | 0 | 340/290/460; 100/120/400; 350/250/270 | 164/308; 163/279; 162/365 | monster world screeching  |
| 0c_ebony_knight | 4383 | 4270 | 0 | 305/252/230; 225/230/305; 300/190/128 | 104; 105 | fire world ashen cavern |
| 08_armored_guardian | 3486 | 4200 | 0 | 380/460/280; 365/335/240 | - | death world dark castle l |
| 05_magi_magus | 3276 | 3730 | 10 | - | 117/298; 118 | water world white rain ar |
| 08_fester | 2964 | 4650 | 0 | - | 145 | illusion world worship do |
| 00_panak | 2714 | 5100 | 0 | - | - | death world lingering cur |
| 01_disguise | 2375 | 2700 | 0 | - | 151; 150/23 | illusion world dream doma |
| 01_gorthaur | 2292 | 3450 | 0 | 195/110/180 | 146 | illusion world worship do |
| 04_dread_knight | 1949 | 2400 | 0 | 190/145/112; 110/155/245 | 84 | earth world hostile rock  |
| 09_pulsating_heart | 1767 | 2000 | 0 | 150/100/140 | 127/40/84 | death world undead layer |
| 04_auriel_b | 1041 | 1000 | 0 | - | - | earth world poisonous cav |
| 08_guardian_b | 886 | 870 | 5 | 92/70/148; 92/70/218 | 200/1 | earth world false pit cav |
| 02_dead_abraxus | 687 | 1 | 0 | - | - | fire world molten cavern |
| 0a_guardian_a | 510 | 480 | 5 | 30/33/91 | 200/1 | human world cursed region |
| 0c_dybbuk | 445 | 520 | 0 | - | 75 | earth world stone cavern |
| 00_dybbuk | 423 | 520 | 0 | - | - | earth world stone cavern |
| 04_dybbuk | 423 | 520 | 0 | - | - | earth world stone cavern |
| 00_duhrin | 390 | 600 | 0 | - | - | earth world poisonous cav |
| 02_lizard_servant | 355 | 1 | 0 | - | - | monster world false eye a |
| 06_lizard_servant | 355 | 1 | 0 | - | - | monster world false eye a |
| 01_acid_slime | 154 | 95 | 0 | 10/11/13 | 49 | death world dark castle l |

---

## Creatures with Type 0x30 (Magic/Spell Attacks)

**These creatures were fixed in PR #14 to properly scale with difficulty settings.**

| Creature | Power | HP | Magic Attack Values |
|----------|-------|----|--------------------|\n| 00_abraxus | 33726 | 65535 | 95/181/181; 95/181/181 |
| 01_unknown_b | 5838 | 7560 | 124; 125 |
| 01_auriel_c | 5793 | 7560 | 160; 161 |
| 0c_hollow_mage | 5167 | 7800 | 59; 64 |
| 04_king_edward | 4829 | 6500 | 246 |
| 04_wildowess | 4765 | 6600 | 242 |
| 0e_necron | 4459 | 4800 | 164/308; 163/279; 162/365 |
| 0c_ebony_knight | 4383 | 4270 | 104; 105 |
| 05_magi_magus | 3276 | 3730 | 117/298; 118 |
| 08_fester | 2964 | 4650 | 145 |
| 01_disguise | 2375 | 2700 | 151; 150/23 |
| 01_gorthaur | 2292 | 3450 | 146 |
| 04_dread_knight | 1949 | 2400 | 84 |
| 09_pulsating_heart | 1767 | 2000 | 127/40/84 |
| 08_guardian_b | 886 | 870 | 200/1 |
| 0a_guardian_a | 510 | 480 | 200/1 |
| 0c_dybbuk | 445 | 520 | 75 |
| 01_acid_slime | 154 | 95 | 49 |

---

## Full Attribute Table

| Creature | Power | HP | STR | SPD | DEF | BAL | SLA | SMH | PIR | SPR | FOC | HAM | PUR | PAR | MEL | SOL |
|----------|-------|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| 00_abraxus | 33726 | 65535 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 5 | 2 | 1 | 0 | 5 | 0 | 4 |
| 0d_fat_mole_e | 32867 | 65535 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 02_fat_mole_d | 32846 | 65535 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 00_fat_mole_f | 32840 | 65535 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 08_fat_mole_b | 32807 | 65535 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0c_fat_mole_c | 32807 | 65535 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 04_fat_mole_a | 32768 | 65535 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 01_unknown_b | 5838 | 7560 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 01_auriel_c | 5793 | 7560 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0c_hollow_mage | 5167 | 7800 | 0 | 4 | 0 | 2 | 0 | 0 | 1 | 16 | 10 | 0 | 5 | 2 | 0 | 10 |
| 04_king_edward | 4829 | 6500 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 04_wildowess | 4765 | 6600 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 6 | 4 | 0 | 5 | 0 | 0 | 3 |
| 00_unused_a | 4522 | 6000 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 12 | 5 | 0 | 1 |
| 0e_necron | 4459 | 4800 | 12 | 5 | 0 | 0 | 3 | 2 | 8 | 2 | 2 | 0 | 1 | 0 | 3 | 3 |
| 0c_ebony_knight | 4383 | 4270 | 0 | 7 | 0 | 0 | 0 | 0 | 4 | 11 | 3 | 9 | 0 | 1 | 0 | 0 |
| 08_armored_guardian | 3486 | 4200 | 7 | 0 | 1 | 0 | 2 | 2 | 0 | 0 | 0 | 0 | 1 | 2 | 0 | 0 |
| 05_magi_magus | 3276 | 3730 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 10 | 1 | 6 | 0 | 0 | 12 | 9 |
| 08_fester | 2964 | 4650 | 2 | 3 | 0 | 0 | 0 | 0 | 6 | 0 | 0 | 0 | 2 | 5 | 0 | 0 |
| 00_panak | 2714 | 5100 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 01_disguise | 2375 | 2700 | 0 | 5 | 0 | 0 | 0 | 0 | 0 | 21 | 7 | 3 | 8 | 0 | 0 | 0 |
| 01_gorthaur | 2292 | 3450 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 10 | 7 | 1 | 0 | 0 | 0 |
| 04_dread_knight | 1949 | 2400 | 10 | 0 | 0 | 3 | 8 | 6 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 7 |
| 09_pulsating_heart | 1767 | 2000 | 6 | 2 | 0 | 0 | 6 | 0 | 1 | 6 | 0 | 0 | 6 | 4 | 4 | 4 |
| 04_auriel_b | 1041 | 1000 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 08_guardian_b | 886 | 870 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 1 | 0 | 0 | 0 | 0 | 1 |
| 02_dead_abraxus | 687 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 5 | 2 | 1 | 0 | 5 | 0 | 4 |
| 0a_guardian_a | 510 | 480 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 1 | 0 | 0 | 0 | 0 | 1 |
| 0c_dybbuk | 445 | 520 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 00_dybbuk | 423 | 520 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 04_dybbuk | 423 | 520 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 00_duhrin | 390 | 600 | 0 | 0 | 0 | 5 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 02_lizard_servant | 355 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 06_lizard_servant | 355 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 01_acid_slime | 154 | 95 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

---

## Power Score Formula

```
Power = STR×2 + SPD×1 + DEF×3 + BAL×1 +
        SLA×1.5 + SMH×1.5 + PIR×1.5 + SPR×1.5 +
        FOC×1 + HAM×1 + PUR×1.5 + PAR×1 +
        MEL×2 + SOL×1.5 +
        HP×0.5 +
        EntityStateData attacks×0.3 +
        Base attacks×3 +
        Defenses×0.1
```

