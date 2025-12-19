# Experimental ST.EXE Patches - MIPS Analysis Based

**Generated based on MIPS disassembly analysis of damage calculation regions**

All experiments reduce magic damage to 1/4 by dividing ADDIU immediate values by 4.

## Approach

Used MIPS disassembler to find arithmetic-heavy code regions with high multiplication/division density.
These regions likely contain damage calculations.

## Experiments

### Single Regions (1-10)
Target individual arithmetic-heavy regions sorted by mult/div count.

**Experiment 1:** Highest mult/div density - likely damage calc
- Region: 0x37274-0x3dd58
- Mult/Div operations: 198
- Arithmetic operations: 1739
- Patches applied: 277

**Experiment 2:** High mult/div with loads of arithmetic
- Region: 0x79f0-0x16358
- Mult/Div operations: 95
- Arithmetic operations: 3309
- Patches applied: 770

**Experiment 3:** Very high arithmetic density
- Region: 0x40148-0x4e790
- Mult/Div operations: 93
- Arithmetic operations: 4134
- Patches applied: 878

**Experiment 4:** Compact mult/div heavy region
- Region: 0x60c74-0x63e90
- Mult/Div operations: 92
- Arithmetic operations: 836
- Patches applied: 86

**Experiment 5:** Medium mult/div region
- Region: 0x257d0-0x2b98c
- Mult/Div operations: 59
- Arithmetic operations: 1638
- Patches applied: 564

**Experiment 6:** Balanced mult/div region
- Region: 0x2f060-0x32bac
- Mult/Div operations: 50
- Arithmetic operations: 915
- Patches applied: 124

**Experiment 7:** Medium mult/div region 2
- Region: 0x2147c-0x25780
- Mult/Div operations: 48
- Arithmetic operations: 1058
- Patches applied: 303

**Experiment 8:** Medium mult/div region 3
- Region: 0x2b9bc-0x2f020
- Mult/Div operations: 44
- Arithmetic operations: 973
- Patches applied: 181

**Experiment 9:** Lower mult/div, high arith
- Region: 0x16570-0x1dc00
- Mult/Div operations: 36
- Arithmetic operations: 2481
- Patches applied: 800

**Experiment 10:** Low mult/div control test
- Region: 0x55960-0x5c50c
- Mult/Div operations: 10
- Arithmetic operations: 1707
- Patches applied: 352


### Combined Regions (11-15)
Test multiple regions together to increase coverage.

**Experiment 11:** Top 2 mult/div regions combined
- Regions: 1, 2
- Patches applied: 1047

**Experiment 12:** Top 3 mult/div regions combined
- Regions: 1, 2, 3
- Patches applied: 1925

**Experiment 13:** Regions 1 and 4 (both compact, high mult/div)
- Regions: 1, 4
- Patches applied: 363

**Experiment 14:** Regions 2 and 3 (high arithmetic)
- Regions: 2, 3
- Patches applied: 1648

**Experiment 15:** Medium mult/div regions 5-8
- Regions: 5, 6, 7, 8
- Patches applied: 1172


### Sub-Regions (16-20)
Narrow down to specific parts of top regions.

**Experiment 16:** First 8KB of region 1
- Range: 0x37274-0x39274
- Patches applied: 28

**Experiment 17:** Second 8KB of region 1
- Range: 0x39274-0x3b274
- Patches applied: 66

**Experiment 18:** Third 8KB of region 1
- Range: 0x3b274-0x3d274
- Patches applied: 154

**Experiment 19:** First 12KB of region 2
- Range: 0x79f0-0xa9f0
- Patches applied: 135

**Experiment 20:** First 12KB of region 3
- Range: 0x40148-0x43148
- Patches applied: 131


## Testing Priority

1. **Start with Experiments 1-3** (highest mult/div count - most likely damage calculations)
2. **Try Experiment 11** (top 2 regions combined)
3. **Try Experiments 16-18** (sub-regions of top region)
4. **If none work, try Experiments 4-10** (other arithmetic regions)

## Expected Result

If experiment works:
- ✅ Magic damage reduced to ~25% (1/4 of original)
- ✅ Game loads and runs normally
- ✅ No crashes or glitches

Report which experiment number affects magic damage!

## Technical Details

- All experiments modify ADDIU instructions (immediate add)
- Only targets values 4-200 (avoids system-critical values)
- Patches are applied to specific memory regions identified by disassembly
- Regions were ranked by multiplication/division density (damage calcs use mult/div)

## Analysis Source

Generated from `disassemble_mips.js` analysis of ST.EXE.
See `mips_analysis_report.json` for complete disassembly data.
