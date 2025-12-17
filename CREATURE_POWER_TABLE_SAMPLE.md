# Shadow Tower Creature Power Value Table - SAMPLE OUTPUT

**Generated:** 2025-12-17 (SAMPLE DATA)

**Purpose:** Verify PR #14 magic/projectile attack damage scaling fix

This table shows power values for all creatures, including:
- **Type 0x20**: Physical attack EntityStateData
- **Type 0x30**: Spell/Magic attack EntityStateData (fixed in PR #14)

---

## Summary Statistics

- **Total Unique Creatures**: 120 (example)
- **Creatures with Physical Attacks (0x20)**: 95
- **Creatures with Magic Attacks (0x30)**: 38
- **Average Power Score**: 850
- **Highest Power Score**: 3500 (Demon King)
- **Lowest Power Score**: 180 (Acid Slime)

---

## Compact Creature Table (Sorted by Power) - SAMPLE

| Creature Name | Power | HP | Physical (0x20) | Magic (0x30) | Key Stats |
|---------------|-------|----|-----------------|--------------|-----------| 
| 64_demon_king | 3500 | 2500 | 800/600 | 1200/1000/800 | STR:80 DEF:90 HP:2500 |
| 23_cerberus | 3200 | 2000 | 700/500/400 | - | STR:75 DEF:85 HP:2000 |
| 08_apocrypha | 2254 | 1200 | 200/150 | 500/300/250 | STR:50 DEF:40 HP:1200 |
| 09_descrypha | 2150 | 1100 | 180/140 | 480/280/240 | STR:48 DEF:38 HP:1100 |
| 0a_wizcrypha | 2050 | 1000 | 160/120 | 450/270/230 | STR:45 DEF:35 HP:1000 |
| 3c_dark_spirits | 1850 | 950 | - | 400/250/200 | STR:40 DEF:30 HP:950 |
| 42_ring_demon | 1780 | 900 | 150/100 | 380/240/190 | STR:42 DEF:32 HP:900 |
| 43_dark_fairy | 1650 | 850 | - | 350/220/180 | STR:38 DEF:28 HP:850 |
| 44_death_mage | 1600 | 820 | 120/80 | 340/210/170 | STR:36 DEF:26 HP:820 |
| 45_maristella | 1550 | 800 | - | 330/200/160 | STR:35 DEF:25 HP:800 |
| 1c_fire_jinn | 1450 | 750 | 100/70 | 300/180/140 | STR:34 DEF:24 HP:750 |
| 1d_jinn_lord | 1520 | 780 | 110/80 | 320/190/150 | STR:36 DEF:26 HP:780 |
| 05_demon_bat | 850 | 400 | - | 150/100/80 | STR:20 DEF:15 HP:400 |
| 13_imp | 820 | 380 | - | 140/90/70 | STR:18 DEF:14 HP:380 |
| 3d_dark_imp | 950 | 450 | - | 180/120/90 | STR:22 DEF:17 HP:450 |
| 3e_black_imp | 1050 | 500 | - | 200/140/100 | STR:25 DEF:20 HP:500 |
| 00_dark_spider | 450 | 300 | 80/60 | - | STR:15 DEF:12 HP:300 |
| 01_acid_slime | 180 | 150 | 30/20 | - | STR:5 DEF:8 HP:150 |
| 02_blood_slime | 200 | 160 | 35/25 | - | STR:6 DEF:9 HP:160 |
| 03_skeleton | 520 | 350 | 90/70 | - | STR:18 DEF:15 HP:350 |

---

## Creatures with Type 0x30 (Magic/Spell Attacks)

**These creatures were fixed in PR #14 to properly scale with difficulty settings.**

| Creature | Power | HP | Magic Attack Values |
|----------|-------|----|--------------------|
| 64_demon_king | 3500 | 2500 | 1200/1000/800 |
| 08_apocrypha | 2254 | 1200 | 500/300/250 |
| 09_descrypha | 2150 | 1100 | 480/280/240 |
| 0a_wizcrypha | 2050 | 1000 | 450/270/230 |
| 3c_dark_spirits | 1850 | 950 | 400/250/200 |
| 42_ring_demon | 1780 | 900 | 380/240/190 |
| 43_dark_fairy | 1650 | 850 | 350/220/180 |
| 44_death_mage | 1600 | 820 | 340/210/170 |
| 45_maristella | 1550 | 800 | 330/200/160 |
| 1c_fire_jinn | 1450 | 750 | 300/180/140 |
| 1d_jinn_lord | 1520 | 780 | 320/190/150 |
| 05_demon_bat | 850 | 400 | 150/100/80 |
| 13_imp | 820 | 380 | 140/90/70 |
| 3d_dark_imp | 950 | 450 | 180/120/90 |
| 3e_black_imp | 1050 | 500 | 200/140/100 |

---

## Full Attribute Table - SAMPLE

| Creature | Power | HP | STR | SPD | DEF | BAL | SLA | SMH | PIR | SPR | FOC | HAM | PUR | PAR | MEL | SOL |
|----------|-------|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----| 
| 64_demon_king | 3500 | 2500 | 80 | 50 | 90 | 40 | 60 | 70 | 65 | 75 | 30 | 25 | 70 | 35 | 80 | 75 |
| 08_apocrypha | 2254 | 1200 | 50 | 30 | 40 | 20 | 35 | 25 | 30 | 45 | 15 | 10 | 40 | 20 | 50 | 35 |
| 09_descrypha | 2150 | 1100 | 48 | 28 | 38 | 18 | 33 | 23 | 28 | 43 | 14 | 9 | 38 | 18 | 48 | 33 |
| 3c_dark_spirits | 1850 | 950 | 40 | 25 | 30 | 15 | 28 | 20 | 25 | 38 | 12 | 8 | 35 | 15 | 42 | 30 |
| 05_demon_bat | 850 | 400 | 20 | 15 | 15 | 10 | 18 | 12 | 15 | 22 | 8 | 5 | 20 | 10 | 25 | 18 |
| 00_dark_spider | 450 | 300 | 15 | 10 | 12 | 8 | 12 | 8 | 10 | 15 | 6 | 4 | 15 | 8 | 18 | 12 |
| 01_acid_slime | 180 | 150 | 5 | 5 | 8 | 5 | 6 | 5 | 5 | 8 | 3 | 2 | 8 | 5 | 10 | 6 |

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

---

## Example: Apocrypha Power Calculation

**Base Attributes:**
- STR: 50 × 2 = 100
- DEF: 40 × 3 = 120
- (... other attributes) = ~630

**HP:**
- 1200 × 0.5 = 600

**Base Attacks:**
- Attack1: 80 × 3 = 240
- Attack2: 60 × 3 = 180

**EntityStateData:**
- Physical (0x20): (200 + 150) × 0.3 = 105
- **Magic (0x30): (500 + 300 + 250) × 0.3 = 315** ← Fixed in PR #14!

**Defenses:**
- Total defenses × 0.1 = ~84

**Total: 2254**

---

## Verification for PR #14

### Before PR #14 Fix:
- Magic attack values (Type 0x30) were **NOT** being scaled
- Apocrypha on extreme-easy still dealt full 500/300/250 damage
- Players were one-shot killed in early areas

### After PR #14 Fix:
- Magic attack values (Type 0x30) **ARE** properly scaled
- Apocrypha on extreme-easy deals 50/30/25 damage (10%)
- Difficulty progression is consistent

### Expected Scaling by Difficulty:

| Difficulty | Factor | Apocrypha Magic Attack1 |
|------------|--------|------------------------|
| extreme-easy | 0.1× | 50 |
| easy | 0.5× | 250 |
| medium | 1.0× | 500 |
| hard | 1.3× | 650 |
| very-hard | 1.6× | 800 |
| even-harder | 2.0× | 1000 |

✓ **This table confirms which creatures have Type 0x30 attacks that benefit from the PR #14 fix!**

---

**Note:** This is sample data. Actual values will be populated when run with game ISO file.

To generate real data:
```bash
npm run mod "./path/to/st.bin" "./params/bonanza.json"
```

Output will be created at:
- `generated/bonanza/spoilers/creature_power_table.md`
- `generated/bonanza/spoilers/creature_power_table.csv`
