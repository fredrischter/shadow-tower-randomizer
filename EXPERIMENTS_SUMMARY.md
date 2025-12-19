# Experimental EXE Patches - Implementation Summary

## User Request

**From @fredrischter:**
> "Please do some more aggressive attempts, perform the change and commit to branch the actual exe changed file, many of them as needed to try many different tries, you can do 20 different files, push all of them to branch."

## What Was Delivered

### 20 Experimental ST.EXE Files

Created and committed **20 different modified ST.EXE files**, each with a unique aggressive modification strategy targeting creature speed.

**Location:** `experimental-exe-patches/`

**Files:**
- `ST-experiment-01.EXE` through `ST-experiment-20.EXE` (20 files × 480KB = 9.6MB)
- `README.md` - Comprehensive testing guide (7.4KB)
- Generator script: `generate_experiments.js` (17.7KB)

**Total committed:** 22 files, ~9.4MB

---

## Experiment Details

### Low Risk - Start Here

| # | Description | Changes | Risk |
|---|-------------|---------|------|
| 02 | Halve all small constants (2-60) | 5,126 | Low |
| 03 | Set all delay constants to 1 (fastest) | 3,264 | Low |
| 20 | Quarter only large delays (16-60) | 2,668 | Low |
| 05 | Triple all velocity constants | 2,362 | Low-Med |

### Medium Risk

| # | Description | Changes | Risk |
|---|-------------|---------|------|
| 07 | Set all shifts to minimum (1) | 2,343 | Med |
| 10 | Round constants to powers of 2 | 2,977 | Med |
| 15 | Zero specific delay constants | 2,567 | Med |
| 01 | Double all small constants (SLOWER) | 5,571 | Med |

### High Risk - May Crash

| # | Description | Changes | Risk |
|---|-------------|---------|------|
| 09 | Replace multiply with add | 997 | High |
| 11 | Halve common byte values | 37,404 | High |
| 12 | Set all small constants to 1 | 7,985 | High |
| 13 | Invert shift direction (SRL→SLL) | 441 | High |
| 18 | Divide delays by 10 (extreme) | 6,412 | High |

### Experimental - Regional Targeting

| # | Description | Changes | Risk |
|---|-------------|---------|------|
| 04 | Zero all shift right amounts | 425 | Med |
| 06 | Halve bytes in first 64KB range | 3,926 | Med |
| 08 | Halve constants in branch delay slots | 357 | Med |
| 14 | Halve LUI immediate values | 1,014 | Med |
| 16 | Set first 32KB constants to 1 | 265 | Med |
| 17 | Reduce comparison thresholds | 484 | Med |
| 19 | Quarter delays in 0x10000-0x20000 | 1,018 | Med |

---

## Testing Instructions

### Quick Start

1. **Choose experiment** (start with low-risk ones)
2. **Copy to test location:**
   ```bash
   cp experimental-exe-patches/ST-experiment-03.EXE iso-dump/ST.EXE
   ```
3. **Build ISO:**
   ```bash
   npm run mod "./path/to/st.bin" "./params/no-change.json"
   ```
4. **Test in PSX emulator**
5. **Observe creature behavior**

### What to Look For

**Positive Results:**
- ✓ Creatures move faster
- ✓ Animations play faster
- ✓ Attacks execute quicker
- ✓ AI responds faster

**Negative Results:**
- ✗ Game crashes
- ✗ Graphical glitches
- ✗ Audio problems
- ✗ Incorrect behavior
- ✗ No speed change (experiment failed)

### Reporting Results

For each experiment tested, report:
1. **Experiment number** (e.g., "Experiment 03")
2. **Result:** Speed change observed? (Yes/No/Crash)
3. **Details:** What specifically changed?
4. **Side effects:** Any problems?

**Example:**
```
Experiment 03: YES - Creatures move 3x faster
  - Movement speed noticeably increased
  - Animations slightly choppy
  - No crashes observed
```

---

## Technical Approach

Each experiment targets different MIPS assembly patterns in the PlayStation executable:

### Pattern Categories

**1. Immediate Loads (ADDIU/LI)**
```asm
addiu $t0, $zero, [delay_value]
```
Experiments: 1, 2, 3, 10, 12, 15, 16, 18, 20

**2. Shift Operations (SRL/SLL)**
```asm
srl $t1, $t0, [shift_amount]  ; Divide by 2^shift_amount
```
Experiments: 4, 7, 13

**3. Velocity Constants (16-bit values)**
```
0x0100 = 1.0 speed
0x0200 = 2.0 speed
```
Experiment: 5

**4. Branch Delay Slots**
Instructions after branch/jump operations.
Experiment: 8

**5. Arithmetic Operations**
```asm
mult $t0, $t1  ; Multiply
```
Experiment: 9

**6. Upper Immediate (LUI)**
```asm
lui $t0, [upper_16_bits]
```
Experiment: 14

**7. Comparisons (SLTI)**
```asm
slti $t0, $t1, [threshold]
```
Experiment: 17

**8. Raw Byte Modifications**
Direct byte-level changes.
Experiments: 6, 11

---

## Generator Script

**File:** `generate_experiments.js`

Automated creation of all 20 experiments. Can be re-run to regenerate experiments with different parameters.

**Usage:**
```bash
node generate_experiments.js
```

**Features:**
- Reads original ST.EXE
- Applies 20 different modification strategies
- Logs changes per experiment
- Outputs to `experimental-exe-patches/` folder

---

## Modifications Summary

### Total Changes by Experiment

```
Experiment 01:  5,571 changes (Double constants)
Experiment 02:  5,126 changes (Halve constants)
Experiment 03:  3,264 changes (Set to 1)
Experiment 04:    425 changes (Zero shifts)
Experiment 05:  2,362 changes (Triple velocities)
Experiment 06:  3,926 changes (First 64KB)
Experiment 07:  2,343 changes (Minimize shifts)
Experiment 08:    357 changes (Branch delays)
Experiment 09:    997 changes (Replace multiply)
Experiment 10:  2,977 changes (Powers of 2)
Experiment 11: 37,404 changes (Byte halving) ⚠️
Experiment 12:  7,985 changes (All to 1)
Experiment 13:    441 changes (Invert shifts)
Experiment 14:  1,014 changes (Halve LUI)
Experiment 15:  2,567 changes (Zero specific)
Experiment 16:    265 changes (First 32KB)
Experiment 17:    484 changes (Reduce comparisons)
Experiment 18:  6,412 changes (Divide by 10)
Experiment 19:  1,018 changes (Specific range)
Experiment 20:  2,668 changes (Large delays)
───────────────────────────────
TOTAL:        87,605 total changes across all experiments
```

### File Sizes

Each modified EXE: **480 KB** (491,520 bytes)  
Total folder size: **~9.4 MB**

---

## Next Steps

### Phase 1: Initial Testing
Test low-risk experiments first:
- ✓ Experiment 02 (halve delays)
- ✓ Experiment 03 (set to 1)
- ✓ Experiment 20 (quarter large)
- ✓ Experiment 05 (triple velocities)

### Phase 2: Analysis
If any work, analyze what they modified:
- Which instruction patterns?
- Which memory ranges?
- What values changed?

### Phase 3: Refinement
Based on findings:
- Create targeted patches
- Combine successful approaches
- Document working solution

### Phase 4: Integration
If a solution is found:
- Update `patch_exe_speed.js` with working approach
- Remove failed experiments
- Document correct offsets/patterns

---

## Commit Information

**Commit:** 6c944c7  
**Branch:** copilot/fix-creature-speed-issue  
**Date:** December 19, 2025  
**Files Added:** 22 (20 EXE + 1 README + 1 generator)  
**Size:** 9.4 MB

---

## Success Criteria

**Minimum Success:**
- At least 1 experiment shows speed change in-game

**Ideal Success:**
- Identify which specific patches affect speed
- Document the working approach
- Understand the mechanism

**Learning Outcome:**
Even if none work, we learn:
- Speed is NOT controlled by these patterns
- Need different approach (data tables, different code sections)
- May require actual reverse engineering with debugger

---

## Status

✅ **COMPLETE** - All 20 experimental EXE files created and committed  
⏳ **AWAITING** - User testing in PSX emulator  
📝 **PENDING** - Results and feedback

The branch now contains 20 aggressive experimental modifications ready for systematic testing.
