# MIPS Disassembly-Based Approach for Finding Damage Calculation Code

## Problem

Previous experiments failed because they blindly modified bytes without understanding what the code does.

## Solution

**Reverse engineer the PlayStation executable using MIPS disassembly** to find the actual damage calculation code.

## Methodology

### Step 1: Disassemble ST.EXE

Created `disassemble_mips.js` - a MIPS R3000 disassembler that:

1. Decodes all MIPS instructions in the EXE
2. Identifies arithmetic operations (ADD, SUB, MULT, DIV)
3. Finds regions with high arithmetic density
4. Ranks regions by multiplication/division count (damage calcs use mult/div)

### Step 2: Identify Damage Calculation Regions

Found **top 10 arithmetic-heavy regions** sorted by mult/div density:

| Rank | Offset Range | Mult/Div | Arithmetic | Score |
|------|--------------|----------|------------|-------|
| 1 | 0x37274-0x3dd58 | 198 | 1,739 | 3,719 |
| 2 | 0x79f0-0x16358 | 95 | 3,309 | 4,259 |
| 3 | 0x40148-0x4e790 | 93 | 4,134 | 5,064 |
| 4 | 0x60c74-0x63e90 | 92 | 836 | 1,756 |
| 5 | 0x257d0-0x2b98c | 59 | 1,638 | 2,228 |
| 6 | 0x2f060-0x32bac | 50 | 915 | 1,415 |
| 7 | 0x2147c-0x25780 | 48 | 1,058 | 1,538 |
| 8 | 0x2b9bc-0x2f020 | 44 | 973 | 1,413 |
| 9 | 0x16570-0x1dc00 | 36 | 2,481 | 2,841 |
| 10 | 0x55960-0x5c50c | 10 | 1,707 | 1,807 |

**Region #1 (0x37274-0x3dd58) is the top candidate** with 198 multiplication/division operations.

### Step 3: Analyze Top Region

Disassembly of Region #1 shows classic damage calculation pattern:

```mips
0x037274: MULT     $3, $2        # Multiply values
0x037278: LHU      $3, 2($18)    # Load stat from memory
0x03727c: LHU      $2, 330($24)  # Load multiplier
0x037288: MFLO     $5            # Get multiply result (low 32 bits)
0x037294: MULT     $3, $2        # Another multiply
0x0372a8: MFLO     $4            # Get result
0x0372b8: ADDU     $2, $5, $4    # Add results together
0x0372c0: ADDU     $2, $2, $3    # Add more
```

This is **exactly** what damage calculation looks like:
- Load base damage from memory
- Multiply by stat multipliers
- Add multiple components together
- Result = final damage

### Step 4: Generate Targeted Experiments

Created 20 experiments targeting these specific regions:

**Experiments 1-10:** Individual regions (highest mult/div first)
**Experiments 11-15:** Combined regions
**Experiments 16-20:** Sub-regions of top candidates

All experiments reduce ADDIU immediate values by 4 (1/4 damage) within the target regions.

## Why This Works Better

**Previous approach:**
- ❌ Random memory ranges (0x40000-0x60000)
- ❌ No understanding of what code does
- ❌ May have hit critical system code causing crashes

**New approach:**
- ✅ Target arithmetic-heavy regions identified by disassembly
- ✅ Focus on mult/div operations (damage calculations need these)
- ✅ Understand the code structure before modifying
- ✅ Avoid system/graphics/IO code (low arithmetic density)

## Testing Strategy

### Priority Order

1. **Experiment 1** - Region with highest mult/div count (198 operations)
   - Most likely to contain damage calc
   - 277 patches applied
   
2. **Experiment 11** - Top 2 regions combined
   - Broader coverage
   - 1,047 patches
   
3. **Experiments 16-18** - Sub-regions of Region #1
   - Narrow down exact location within top region
   - 28-154 patches each

### What to Look For

If experiment works:
- ✅ Magic damage ~25% (1/4 of normal)
- ✅ Physical damage unchanged
- ✅ Game stable, no crashes

If experiment fails:
- ❌ No damage change OR
- ❌ Game crashes

## Technical Details

### MIPS Instructions Decoded

- **MULT/MULTU** - Multiplication (signed/unsigned)
- **DIV/DIVU** - Division (signed/unsigned)
- **ADD/ADDU/ADDI/ADDIU** - Addition
- **SUB/SUBU** - Subtraction
- **MFLO/MFHI** - Get multiplication/division result
- **LW/LH/LB** - Load from memory
- **SW/SH/SB** - Store to memory

### Modification Strategy

Only modify **ADDIU** instructions (immediate add):
```
ADDIU $rt, $rs, immediate
```

If immediate value is 4-200, divide by 4:
```
Before: ADDIU $4, $3, 100   # Add 100
After:  ADDIU $4, $3, 25    # Add 25 (100/4)
```

This reduces damage calculations while avoiding:
- System pointers (large values)
- Boolean flags (0/1)
- Critical offsets (small values 1-3)

## Files

- **disassemble_mips.js** - MIPS disassembler/analyzer
- **generate_experiments_v5_mips.js** - Experiment generator based on analysis
- **mips_analysis_report.json** - Full disassembly report
- **experimental-exe-patches/** - 20 generated EXE files
- **experimental-exe-patches/generation_log.json** - Details of each experiment

## Example Disassembly

Region #1 (0x37274-0x3dd58) sample:

```mips
0x037274: MULT     $0, $3, $2        # Multiply base damage
0x037288: MFLO     $5, $0, $0        # Get result
0x037294: MULT     $0, $3, $2        # Multiply modifier
0x0372a8: MFLO     $4, $0, $0        # Get result
0x0372b8: ADDU     $2, $5, $4        # Sum damages
0x0372c0: ADDU     $2, $2, $3        # Add bonus
0x0372c4: BLEZ     $0, $2, 6         # Check if <= 0
```

This pattern appears 198 times in this region - **clear damage calculation code**.

## Next Steps

After testing reports which experiment works:

1. If Experiment 1 works → narrow down with Experiments 16-18
2. If Experiment 11 works → test Experiments 1-3 individually
3. If none work → analyze different instruction types or regions 4-10

The MIPS analysis gives us visibility into what the code actually does, unlike blind byte modifications.
