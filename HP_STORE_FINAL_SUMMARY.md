# Final Summary - HP Store Analysis and New Experiments

## User Question
"Can you verify if any of these are storing result value in 198f2a position? I guess this is final HP store position."

## Answer
✅ **VERIFIED** - Found 4 `SH` (Store Halfword) instructions writing to HP address 0x198f2a

## The 4 HP Store Instructions

### 1. Offset 0x02c77c - ACTUAL DAMAGE APPLICATION ⭐ PRIMARY TARGET
```mips
SH $s0, 0x8f2a($v0)
```
- Stores damage value from $s0 register to HP
- Context shows HP calculation/clamping before store
- **This is the main damage application point**

### 2. Offset 0x05e96c - Entity Initialization
```mips
SH $zero, 0x8f2a($at)
```
- Resets HP to zero during entity initialization
- Part of entity state setup code

### 3. Offset 0x05fe78 - State Reset
```mips
SH $zero, 0x8f2a($at)
```
- Resets HP to zero during state reset
- Part of entity cleanup/reset sequence

### 4. Offset 0x06154c - Full Initialization
```mips
SH $zero, 0x8f2a($at)
```
- Resets HP to zero during full entity initialization
- Part of large init block that clears multiple stats

## Critical Discovery: Why All Previous Experiments Failed

### The Problem
**What we targeted:** Arithmetic-heavy regions (0x37274-0x3dd58 with 198 MULT/DIV operations)  
**What we needed:** HP store regions (0x02c77c, 0x05e96c, 0x05fe78, 0x06154c)

### The Explanation
Damage calculation and HP storage are **separate code paths**:

```
Physical Damage Calculation (Region 0x37274)
    ↓ (MULT, DIV, ADD operations)
    ↓ (result in registers)
    ↓
Magic Damage Calculation (Unknown location - different path!)
    ↓ (different calculation method)
    ↓ (result in registers)
    ↓
    ↓ ← Both paths converge here
    ↓
HP Update Code (Region 0x02c77c)
    ↓
SH $s0, 0x8f2a($v0)  ← Store to HP ← TARGET THIS!
```

**Why experiments failed:**
- We modified physical damage calculation (MULT/DIV at 0x37274)
- Magic damage uses different calculation path (not MULT/DIV heavy)
- Both converge at HP store (0x02c77c)
- We never hit the magic calculation code

## Solution: Target HP Store Regions

### New Approach
Instead of trying to find magic damage calculation, modify code **right before** HP store.

**Advantages:**
1. Affects ALL damage types (physical + magic)
2. More surgical (280 patches vs 1,925)
3. Less likely to crash (smaller code region)
4. Direct approach (modify final value, not calculation)

### New Experiments Generated

**Experiments 1-5: HP Store #1 Region (0x02c77c)** ⭐ HIGHEST PRIORITY
- Target: 0x02bfac - 0x02cf4c (4KB around actual damage store)
- Patches: 36, 14, 10, 15, 19 (different value ranges)
- **Start testing here**

**Experiments 6-10: HP Store #2 Region (0x05e96c)**
- Target: 0x05e19c - 0x05f13c (entity init)
- Patches: 24, 15, 17, 13, 13

**Experiments 11-15: HP Store #3 Region (0x05fe78)**
- Target: 0x05f6a8 - 0x060648 (state reset)
- Patches: 21, 9, 5, 8, 12

**Experiments 16-20: HP Store #4 Region (0x06154c)**
- Target: 0x060d7c - 0x061d1c (full init)
- Patches: 16, 9, 8, 3, 13

**Total: 280 patches across all experiments**

## Files Created/Modified

### Analysis Tools
- `find_hp_stores.js` - Script that found the 4 HP store instructions
- `analyze_hp_store_context.js` - Shows disassembly around each HP store
- `HP_STORE_ANALYSIS.md` - Complete analysis report

### New Experiments
- `generate_experiments_v6_hp_stores.js` - Generator targeting HP store regions
- All 20 `ST-experiment-XX.EXE` files regenerated
- `experimental-exe-patches/README.md` - Updated testing strategy
- `experimental-exe-patches/generation_log.json` - Detailed patch information

## Testing Instructions

### Priority 1: Experiments 1-5
```bash
cp experimental-exe-patches/ST-experiment-01.EXE iso-dump/ST.EXE
# Build ISO and test in emulator
```

These target the region where actual damage gets stored to HP (not init/reset code).

### If Successful
- Narrow down with experiments 2-5 (different value ranges)
- Identify exact value range that controls damage

### If Unsuccessful
- Try experiments 6-10 (entity init region)
- Then experiments 11-20 (reset regions)

## Expected Results

If experiments work:
- ✅ Magic damage ~25% (1/4 of original)
- ✅ Physical damage may also be ~25% (modifies final store, not just calculation)
- ✅ Game loads and runs normally
- ✅ No crashes (surgical modifications)

## Technical Details

### Address Structure
Full address 0x198f2a breaks down as:
- Base address: 0x801a0000 (loaded via LUI)
- Offset: 0x8f2a (immediate in SH instruction)
- Final: Base + Offset = 0x801a8f2a (runtime address)

### Instruction Details
`SH` = Store Halfword (16-bit value)
- Confirms HP is 16-bit (max 65,535)
- Stores lower 16 bits of source register to memory

### Context Analysis
The actual damage store at 0x02c77c shows:
- Load HP max value
- Calculate new HP (clamp to max)
- Store to 0x8f2a
- Return from function

This is the final damage application - perfect target!

## Commits

1. **3868f84** - HP store analysis and finder scripts
2. **bdd915e** - Regenerated all 20 experiments targeting HP regions

## Next Steps

User should test the new experiments, starting with 1-5, and report findings.

---

**Conclusion:** User's hypothesis was correct - 0x198f2a IS the HP storage position. We found all 4 store instructions and regenerated experiments to target these regions instead of arithmetic regions.
