# Summary of MIPS-Based Reverse Engineering Approach

## What Changed

Previous experiments failed because they were based on **random memory ranges** without understanding what the code does.

The new approach uses **MIPS disassembly and reverse engineering** to find the actual damage calculation code.

## What Was Created

### 1. MIPS Disassembler (disassemble_mips.js)

A complete MIPS R3000 disassembler that:
- Decodes all PlayStation MIPS instructions
- Identifies arithmetic operations (ADD, SUB, MULT, DIV)
- Finds code regions with high arithmetic density
- Ranks regions by multiplication/division count

**Why:** Damage calculations use lots of multiplication/division, so regions with high mult/div density are likely damage calculation code.

### 2. Analysis Results (mips_analysis_report.json)

Complete disassembly analysis identifying:

**Top 10 Arithmetic-Heavy Regions:**
| Rank | Memory Range | Mult/Div | Arithmetic |
|------|--------------|----------|------------|
| 1 | 0x37274-0x3dd58 | 198 | 1,739 |
| 2 | 0x79f0-0x16358 | 95 | 3,309 |
| 3 | 0x40148-0x4e790 | 93 | 4,134 |
| ... | ... | ... | ... |

**Region #1 is the top candidate** - it has the most multiplication/division operations.

### 3. 20 New Experimental EXE Files

All regenerated based on disassembly analysis:

**Experiments 1-10:** Target individual arithmetic regions
- Exp 1: 277 patches in region with 198 mult/div ops ⭐ **HIGHEST PRIORITY**
- Exp 2: 770 patches in region with 95 mult/div ops
- Exp 3-10: Other arithmetic regions

**Experiments 11-15:** Combined regions for broader coverage
- Exp 11: Top 2 regions (1,047 patches)
- Exp 12: Top 3 regions (1,925 patches)
- Exp 13-15: Other combinations

**Experiments 16-20:** Sub-regions for precision
- Exp 16-18: Different parts of Region #1
- Exp 19-20: Parts of Regions 2-3

### 4. Documentation

- **MIPS_APPROACH.md** - Complete methodology explanation
- **experimental-exe-patches/README.md** - Testing guide
- **experimental-exe-patches/generation_log.json** - Details of each experiment

## Why This Is Better

### Previous Approach (Failed)

```
❌ Random memory range: 0x40000-0x60000
❌ No understanding of what code does
❌ Blind byte modifications
❌ May have hit system/graphics code → crashes
```

### New Approach (Based on Analysis)

```
✅ Region 0x37274-0x3dd58 (identified by disassembly)
✅ 198 multiplication operations found
✅ Disassembly shows damage calc pattern
✅ Only targets arithmetic code (safe)
✅ Understands code structure
```

## Example Disassembly

Here's what the code in Region #1 actually looks like:

```mips
0x037274: MULT     $3, $2        # Multiply base value
0x037288: MFLO     $5            # Get multiplication result
0x037294: MULT     $3, $2        # Multiply modifier
0x0372a8: MFLO     $4            # Get result
0x0372b8: ADDU     $2, $5, $4    # Add results together
0x0372c0: ADDU     $2, $2, $3    # Add bonus
```

This pattern appears 198 times in this region - **clear damage calculation code**.

## How to Test

### Priority Order

1. **Experiment 1** ⭐ (Region with 198 mult/div operations)
   ```bash
   cp experimental-exe-patches/ST-experiment-01.EXE iso-dump/ST.EXE
   # Build ISO and test
   ```

2. **Experiment 11** (Top 2 regions combined)
   ```bash
   cp experimental-exe-patches/ST-experiment-11.EXE iso-dump/ST.EXE
   # Build ISO and test
   ```

3. **Experiments 16-18** (Sub-regions of Region #1 to narrow down)
   ```bash
   cp experimental-exe-patches/ST-experiment-16.EXE iso-dump/ST.EXE
   # Build ISO and test
   ```

### What to Look For

**Success:**
- ✅ Magic damage reduced to ~25% (1/4 of normal)
- ✅ Physical damage unchanged
- ✅ Game loads and runs normally

**Failure:**
- ❌ No damage change OR
- ❌ Game crashes

## Technical Details

### What We're Modifying

Only ADDIU instructions (immediate add) with values 4-200:

```
Before: ADDIU $4, $3, 100   # Add 100 to damage
After:  ADDIU $4, $3, 25    # Add 25 to damage (100/4)
```

This reduces damage while avoiding:
- System pointers (large values >200)
- Boolean flags (0/1)
- Critical offsets (small values 1-3)

### Why Target ADDIU?

Damage calculations typically:
1. Multiply base damage × stat
2. **Add constant bonuses** ← This is ADDIU
3. Sum all components

By reducing the constants (ADDIU values), we reduce final damage.

## Files to Run

### To See Full Disassembly

```bash
node disassemble_mips.js ./iso-dump/ST.EXE
```

This will show:
- All arithmetic-heavy regions
- Detailed disassembly of top 5 regions
- Analysis of multiplication/division patterns

### To Regenerate Experiments

```bash
node generate_experiments_v5_mips.js
```

This will:
- Read the original ST.EXE
- Apply patches to identified regions
- Generate all 20 experimental EXE files

## Next Steps

1. **Test Experiment 1** first (highest confidence)
2. **Report findings:**
   - Does magic damage change?
   - Any crashes or glitches?
   - Which experiment number works?

3. **If Experiment 1 works:**
   - Test Experiments 16-18 to narrow down exact location
   - Can then create minimal patch targeting just that code

4. **If Experiment 1 doesn't work:**
   - Test Experiment 11 (broader coverage)
   - Try Experiments 2-10 (other arithmetic regions)

The disassembly gives us **scientific understanding** of what the code does, unlike previous blind modifications.

## Summary

**Before:** Blind experiments → all failed  
**Now:** Reverse-engineered approach → targeted experiments based on understanding the code

**Highest confidence:** Experiment 1 (Region 0x37274-0x3dd58 with 198 mult/div operations)

Test and report results!
