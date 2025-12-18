# Shadow Tower Creature Power Value Table

**Generated:** 2025-12-18T10:39:26.162Z

**Purpose:** Verify PR #14 magic/projectile attack damage scaling fix

This table shows power values for all creatures, including:
- **Type 0x20**: Physical attack EntityStateData
- **Type 0x30**: Spell/Magic attack EntityStateData (fixed in PR #14)

---

## Summary Statistics

- **Total Unique Creatures**: 34
- **Creatures with Physical Attacks (0x20)**: 13
- **Creatures with Magic Attacks (0x30)**: 18
- **Average Power Score**: 8447
- **Highest Power Score**: 33317
- **Lowest Power Score**: 124

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
| 00_abraxus | 33317 | 65535 | 0 | - | 48/91/91; 48/91/91 | fire world molten cavern |
| 0d_fat_mole_e | 32819 | 65535 | 0 | - | - | death world undead layer |
| 02_fat_mole_d | 32807 | 65535 | 0 | - | - | illusion world worship do |
| 00_fat_mole_f | 32804 | 65535 | 0 | - | - | water world impure pool a |
| 08_fat_mole_b | 32789 | 65535 | 0 | - | - | fire world molten cavern |
| 0c_fat_mole_c | 32789 | 65535 | 0 | - | - | fire world molten cavern |
| 04_fat_mole_a | 32768 | 65535 | 2 | - | - | human world cursed region |
| 01_unknown_b | 4974 | 7560 | 0 | 260/225/275; 310/240/275 | 62; 63 | death world undead layer |
| 01_auriel_c | 4953 | 7560 | 0 | 275/225/270; 275/225/270 | 80; 81 | monster world screeching  |
| 0c_hollow_mage | 4833 | 7800 | 0 | - | 30; 32 | death world gate of the d |
| 04_king_edward | 4217 | 6500 | 0 | 25/23/25; 20/20/10; 45/20/40 | 123 | death world undead layer |
| 04_wildowess | 4102 | 6600 | 0 | 103/75/170 | 121 | illusion world worship do |
| 00_unused_a | 3877 | 6000 | 0 | - | - | death world gate of the d |
| 0c_ebony_knight | 3826 | 4270 | 0 | 153/126/115; 113/115/153; 150/95/64 | 52; 53 | fire world ashen cavern |
| 0e_necron | 3562 | 4800 | 0 | 170/145/230; 50/60/200; 175/125/135 | 82/154; 82/140; 81/183 | monster world screeching  |
| 08_armored_guardian | 2853 | 4200 | 0 | 190/230/140; 183/168/120 | - | death world dark castle l |
| 08_fester | 2735 | 4650 | 0 | - | 73 | illusion world worship do |
| 05_magi_magus | 2689 | 3730 | 0 | - | 59/149; 59 | water world white rain ar |
| 00_panak | 2666 | 5100 | 0 | - | - | death world lingering cur |
| 01_gorthaur | 2060 | 3450 | 0 | 98/55/90 | 73 | illusion world worship do |
| 01_disguise | 1997 | 2700 | 0 | - | 76; 75/12 | illusion world dream doma |
| 09_pulsating_heart | 1671 | 2000 | 0 | 75/50/70 | 64/20/42 | death world undead layer |
| 04_dread_knight | 1653 | 2400 | 0 | 95/73/56; 55/78/123 | 42 | earth world hostile rock  |
| 04_auriel_b | 813 | 1000 | 0 | - | - | earth world poisonous cav |
| 08_guardian_b | 708 | 870 | 0 | 46/35/74; 46/35/109 | 100/1 | earth world false pit cav |
| 02_dead_abraxus | 414 | 1 | 0 | - | - | fire world molten cavern |
| 0a_guardian_a | 412 | 480 | 2 | 15/17/46 | 100/1 | human world cursed region |
| 0c_dybbuk | 380 | 520 | 0 | - | 38 | earth world stone cavern |
| 00_duhrin | 378 | 600 | 0 | - | - | earth world poisonous cav |
| 00_dybbuk | 369 | 520 | 0 | - | - | earth world stone cavern |
| 04_dybbuk | 369 | 520 | 0 | - | - | earth world stone cavern |
| 02_lizard_servant | 238 | 1 | 0 | - | - | monster world false eye a |
| 06_lizard_servant | 238 | 1 | 0 | - | - | monster world false eye a |
| 01_acid_slime | 124 | 95 | 0 | 1/1/1 | 1 | death world dark castle l |

---

## Creatures with Type 0x30 (Magic/Spell Attacks)

**These creatures were fixed in PR #14 to properly scale with difficulty settings.**

| Creature | Power | HP | Magic Attack Values |
|----------|-------|----|--------------------|\n| 00_abraxus | 33317 | 65535 | 48/91/91; 48/91/91 |
| 01_unknown_b | 4974 | 7560 | 62; 63 |
| 01_auriel_c | 4953 | 7560 | 80; 81 |
| 0c_hollow_mage | 4833 | 7800 | 30; 32 |
| 04_king_edward | 4217 | 6500 | 123 |
| 04_wildowess | 4102 | 6600 | 121 |
| 0c_ebony_knight | 3826 | 4270 | 52; 53 |
| 0e_necron | 3562 | 4800 | 82/154; 82/140; 81/183 |
| 08_fester | 2735 | 4650 | 73 |
| 05_magi_magus | 2689 | 3730 | 59/149; 59 |
| 01_gorthaur | 2060 | 3450 | 73 |
| 01_disguise | 1997 | 2700 | 76; 75/12 |
| 09_pulsating_heart | 1671 | 2000 | 64/20/42 |
| 04_dread_knight | 1653 | 2400 | 42 |
| 08_guardian_b | 708 | 870 | 100/1 |
| 0a_guardian_a | 412 | 480 | 100/1 |
| 0c_dybbuk | 380 | 520 | 38 |
| 01_acid_slime | 124 | 95 | 1 |

---

## Full Attribute Table

| Creature | Power | HP | STR | SPD | DEF | BAL | SLA | SMH | PIR | SPR | FOC | HAM | PUR | PAR | MEL | SOL |
|----------|-------|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| 00_abraxus | 33317 | 65535 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 5 | 2 | 1 | 0 | 5 | 0 | 4 |
| 0d_fat_mole_e | 32819 | 65535 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 02_fat_mole_d | 32807 | 65535 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 00_fat_mole_f | 32804 | 65535 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 08_fat_mole_b | 32789 | 65535 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0c_fat_mole_c | 32789 | 65535 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 04_fat_mole_a | 32768 | 65535 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 01_unknown_b | 4974 | 7560 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 01_auriel_c | 4953 | 7560 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0c_hollow_mage | 4833 | 7800 | 0 | 4 | 0 | 2 | 0 | 0 | 1 | 16 | 10 | 0 | 5 | 2 | 0 | 10 |
| 04_king_edward | 4217 | 6500 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 04_wildowess | 4102 | 6600 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 6 | 4 | 0 | 5 | 0 | 0 | 3 |
| 00_unused_a | 3877 | 6000 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 12 | 5 | 0 | 1 |
| 0c_ebony_knight | 3826 | 4270 | 0 | 7 | 0 | 0 | 0 | 0 | 4 | 11 | 3 | 9 | 0 | 1 | 0 | 0 |
| 0e_necron | 3562 | 4800 | 12 | 5 | 0 | 0 | 3 | 2 | 8 | 2 | 2 | 0 | 1 | 0 | 3 | 3 |
| 08_armored_guardian | 2853 | 4200 | 7 | 0 | 1 | 0 | 2 | 2 | 0 | 0 | 0 | 0 | 1 | 2 | 0 | 0 |
| 08_fester | 2735 | 4650 | 2 | 3 | 0 | 0 | 0 | 0 | 6 | 0 | 0 | 0 | 2 | 5 | 0 | 0 |
| 05_magi_magus | 2689 | 3730 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 10 | 1 | 6 | 0 | 0 | 12 | 9 |
| 00_panak | 2666 | 5100 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 01_gorthaur | 2060 | 3450 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 10 | 7 | 1 | 0 | 0 | 0 |
| 01_disguise | 1997 | 2700 | 0 | 5 | 0 | 0 | 0 | 0 | 0 | 21 | 7 | 3 | 8 | 0 | 0 | 0 |
| 09_pulsating_heart | 1671 | 2000 | 6 | 2 | 0 | 0 | 6 | 0 | 1 | 6 | 0 | 0 | 6 | 4 | 4 | 4 |
| 04_dread_knight | 1653 | 2400 | 10 | 0 | 0 | 3 | 8 | 6 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 7 |
| 04_auriel_b | 813 | 1000 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 08_guardian_b | 708 | 870 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 1 | 0 | 0 | 0 | 0 | 1 |
| 02_dead_abraxus | 414 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 5 | 2 | 1 | 0 | 5 | 0 | 4 |
| 0a_guardian_a | 412 | 480 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 1 | 0 | 0 | 0 | 0 | 1 |
| 0c_dybbuk | 380 | 520 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 00_duhrin | 378 | 600 | 0 | 0 | 0 | 5 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 00_dybbuk | 369 | 520 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 04_dybbuk | 369 | 520 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 02_lizard_servant | 238 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 06_lizard_servant | 238 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 01_acid_slime | 124 | 95 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

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

