# Creature Power Value Table - PR #14 Verification

## Overview

This document explains the creature power value table generation feature added to verify the PR #14 magic/projectile attack damage scaling fix.

## What is PR #14?

PR #14 fixed a critical bug where **magic and spell-based attacks (EntityStateData type 0x30)** were not being scaled by difficulty settings. Only physical attacks (type 0x20) were being scaled.

**Impact:**
- Late-game enemies like Apocrypha dealt full damage even on "extreme-easy" difficulty
- Made early areas with randomized magic enemies nearly impossible
- Difficulty settings were inconsistent (physical scaled, magic didn't)

**Fix:**
Extended difficulty scaling in `randomize.js` and `data_model.js` to handle **both** type 0x20 (physical) and type 0x30 (spell/magic) attacks.

## Power Value Table Purpose

The power value table serves multiple purposes:

1. **Verify PR #14 Fix**: Shows which creatures have Type 0x30 attacks that are now properly scaled
2. **Balance Verification**: Helps verify power levels make sense across all creatures
3. **Difficulty Tuning**: Provides baseline data for difficulty factor adjustments
4. **Spawn Placement**: Aids in understanding which creatures are strongest/weakest

## How It Works

### Automatic Generation

The power table is **automatically generated** during any randomization run:

```bash
npm run mod "./path/to/st.bin" "./params/bonanza.json"
```

**Output Location:**
- `generated/{preset}/spoilers/creature_power_table.md` - Human-readable Markdown
- `generated/{preset}/spoilers/creature_power_table.csv` - Spreadsheet format

### Power Score Calculation

The power score uses a weighted formula based on all creature attributes:

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

**Weighting Rationale:**
- **DEF×3**: Defense is very important for survivability
- **STR×2, MEL×2**: Direct damage multipliers
- **HP×0.5**: High HP values would otherwise dominate score
- **SLA/SMH/PIR/SPR/PUR×1.5**: Damage type resistances/bonuses
- **EntityStateData×0.3**: Attack values can be very large (100-1000+)
- **Defenses×0.1**: Defense values are large numbers, lower impact

### Table Contents

Each generated table includes:

1. **Summary Statistics**
   - Total unique creatures
   - Count with physical (0x20) attacks
   - Count with magic (0x30) attacks
   - Average/min/max power scores

2. **Compact Power Table** (sorted by power)
   - Creature name
   - Power score
   - HP
   - Physical attack values (Type 0x20)
   - Magic attack values (Type 0x30)
   - Key stats summary

3. **Magic Attackers Table**
   - Highlights creatures with Type 0x30 attacks
   - **These are the ones fixed in PR #14**
   - Shows magic attack damage values

4. **Full Attributes Table**
   - All 15 combat attributes
   - Complete creature data for analysis

5. **Formula Documentation**
   - Explains power calculation
   - Reference for understanding scores

## Verifying PR #14 Fix

### Step 1: Generate the Table

Run randomizer with any preset:

```bash
npm run mod "./path/to/st.bin" "./params/bonanza.json"
```

### Step 2: Check Magic Attackers

Open `generated/bonanza/spoilers/creature_power_table.md` and locate the "Creatures with Type 0x30 (Magic/Spell Attacks)" section.

**Expected High-Power Magic Attackers:**
- Apocrypha
- Descrypha
- Wizcrypha
- Dark Spirits
- Dark Fairy
- Ring Demon
- Death Mage
- Maristella
- Fire Jinn / Jinn Lord
- Demon Bat
- Imps (various types)

### Step 3: Verify Attack Values Are Listed

Each magic attacker should show attack values like:
- `Apocrypha | 2500 | 1200 | 500/300/250`

The numbers (500/300/250) represent:
- attack1 / attack2 / attack3 from EntityStateData type 0x30

### Step 4: Test Difficulty Scaling

Generate with different difficulties and compare attack values:

```bash
# Extreme easy - should be 10% of normal
npm run mod "./path/to/st.bin" "./params/randomized-extreme-easy.json"

# Hard - should be 130% of normal
npm run mod "./path/to/st.bin" "./params/randomized-hard.json"
```

**Expected Results:**

| Difficulty | Factor | Apocrypha Attack1 (if base is 500) |
|------------|--------|-----------------------------------|
| extreme-easy | 0.1 | ~50 |
| easy | 0.5 | ~250 |
| medium | 1.0 | 500 |
| hard | 1.3 | ~650 |
| very-hard | 1.6 | ~800 |
| even-harder | 2.0 | ~1000 |

If the values scale correctly, **PR #14 fix is working!**

## Files Added

### 1. `randomize.js` (modified)

Added `generateCreaturePowerTable()` function at line ~1782:

```javascript
function generateCreaturePowerTable(outputPath) {
    // Collects all creatures from all areas
    // Calculates power scores
    // Generates Markdown and CSV tables
    // Writes to spoilers directory
}
```

Called automatically before changeset generation at line ~1963.

### 2. `extract_creature_power_table.js` (new)

Standalone script for manual extraction. Currently creates template documentation since it needs game data to be loaded by data_model.js.

### 3. `test_creature_power_table.js` (new)

Test script with mock creature data that validates:
- Power calculation logic is correct
- Both Type 0x20 and 0x30 attacks are included
- Formula produces expected results

**Run test:**
```bash
node test_creature_power_table.js
```

**Expected output:**
```
TOTAL POWER SCORE: 2254
✓ Test completed successfully!
```

### 4. `CREATURE_POWER_TABLE.md` (template)

Documentation template explaining what the table shows and how to use it.

## CSV Format for Analysis

The CSV file can be opened in Excel/Google Sheets for advanced analysis:

**Columns:**
1. Creature Name
2. Power Score
3. HP
4. STR, SPD, DEF, BAL (base attributes)
5. SLA, SMH, PIR, SPR (damage types)
6. FOC, HAM, PUR, PAR (special attributes)
7. MEL, SOL (additional stats)
8. Attack1, Attack2, Magic1 (base attacks)
9. Physical Attacks (0x20) - semicolon-separated
10. Magic Attacks (0x30) - semicolon-separated

**Example Analysis:**

Sort by different columns to answer questions:
- **Highest HP?** Sort by HP column
- **Most physical damage?** Sort by Physical Attacks
- **Most magic damage?** Sort by Magic Attacks
- **Overall strongest?** Sort by Power Score

Create pivot tables to analyze:
- Average power by world
- Distribution of magic vs physical attackers
- Correlation between HP and power

## Troubleshooting

### "Cannot find creature power table files"

**Cause:** Randomizer hasn't been run yet with game ISO

**Solution:** Run mod.js with actual Shadow Tower ISO file:
```bash
npm run mod "./path/to/st.bin" "./params/bonanza.json"
```

### "Table shows 0 magic attackers"

**Possible causes:**
1. Using a preset that removes creatures (like `only-bosses`)
2. Bug in EntityStateData parsing

**Solution:** Try with `bonanza.json` or `randomized-medium.json` presets

### "Power scores seem wrong"

**Verify:**
1. Check if creature has both base attributes AND EntityStateData
2. Some creatures may have low base stats but high attack values
3. Power formula weights defense heavily (×3)

## Future Enhancements

Potential improvements:

1. **Visual Graphs**: Generate charts showing power distribution
2. **Comparative Analysis**: Show before/after difficulty scaling
3. **Balance Recommendations**: Suggest spawn placement based on power
4. **Attack Type Analysis**: Breakdown physical vs magic vs hybrid creatures
5. **World-based Analysis**: Power averages per world

## Technical Details

### EntityStateData Structure

Shadow Tower uses two attack entity state types:

**Type 0x20 (Physical):**
- Offset 0x1a: attack1 (UInt16)
- Offset 0x1c: attack2 (UInt16)
- Offset 0x1e: attack3 (UInt16)
- Controls: Melee, physical projectiles

**Type 0x30 (Spell/Magic):**
- Offset 0x1a: attack1 (UInt16) - same offsets!
- Offset 0x1c: attack2 (UInt16)
- Offset 0x1e: attack3 (UInt16)
- Controls: Magic projectiles, spells, energy attacks

The type byte (0x20 vs 0x30) determines how the game engine interprets the attack values.

### Code Integration

The table generation is integrated into randomize.js workflow:

```
1. Load game data (data_model.js)
2. Parse all areas and creatures
3. Apply randomization
4. Apply difficulty scaling
   ↓
5. Generate creature power table ← NEW
   ↓
6. Generate changeset
7. Write output files
```

This ensures the table reflects the **final state** after all modifications.

## Contact

For questions or issues with the power table:

- **Email:** fredrischter@gmail.com
- **Discord:** FromSoft Modding Committee (https://discord.gg/jUzZwWWUXd)
- **GitHub:** https://github.com/fredrischter/shadow-tower-randomizer

## Related Documentation

- **PROJECTILE_ATTACK_FIX.md** - Original PR #14 fix documentation
- **TYPE_0x30_FIX_SUMMARY.md** - Type 0x30 extension details
- **KNOWLEDGE.md** - Complete technical documentation
- **README.md** - General project documentation

---

**Last Updated:** 2025-12-17  
**Related PR:** #14 - Fix magic/spell attack damage scaling
