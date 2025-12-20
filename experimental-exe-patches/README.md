# Experimental EXE Patches - Magic Damage Calculation Targeting

## Overview

20 experimental ST.EXE files targeting magic damage calculation regions based on backward tracing analysis and previous test results.

## Previous Test Results

**HP Store Approach (Failed):**
- Exp 1-7, 10-19: Freeze on map load (hit critical HP init/reset code)
- Exp 8, 9: Load but freeze 1s after (hit entity initialization code)
- Exp 20: Works normally, no effect (safe but ineffective region)

**Lesson Learned:** HP storage regions are final step with surrounding init/reset code. Need to target CALCULATION regions instead.

## New Approach: Magic Damage Calculation

Based on backward tracing analysis:
- **Region 0x36000** (43 MULT ops) - TOP CANDIDATE for magic damage calculation
- Adjacent to physical damage region (0x37000) but distinct
- High arithmetic density suggests damage calculation code

## Experiments

### Experiments 1-5: Core Magic Region (512B) ⭐ START HERE
**Region:** 0x35f00-0x36100 (focused on center of suspected magic region)  
**Strategy:** MINIMAL patches (0-11) to avoid crashes  
**Priority:** HIGHEST

| Exp | Value Range | Patches | Description |
|-----|-------------|---------|-------------|
| 01  | 10-100      | 11      | Broad range |
| 02  | 20-60       | 1       | Mid range |
| 03  | 30-80       | 1       | Upper-mid range |
| 04  | 40-100      | 0       | High range (no patches found) |
| 05  | 15-50       | 9       | Lower-mid range |

### Experiments 6-10: Broader Magic Region (4KB)
**Region:** 0x35800-0x36800  
**Strategy:** More coverage while staying conservative  
**Priority:** HIGH

| Exp | Value Range | Patches | Description |
|-----|-------------|---------|-------------|
| 06  | 10-100      | 31      | Broad range |
| 07  | 20-60       | 12      | Mid range |
| 08  | 30-80       | 6       | Upper-mid range |
| 09  | 40-100      | 5       | High range |
| 10  | 15-50       | 21      | Lower-mid range |

### Experiments 11-15: Extended Magic Region (8KB)
**Region:** 0x35000-0x37000 (full suspected magic area)  
**Strategy:** Comprehensive coverage  
**Priority:** MEDIUM

| Exp | Value Range | Patches | Description |
|-----|-------------|---------|-------------|
| 11  | 10-100      | 50      | Broad range |
| 12  | 20-60       | 18      | Mid range |
| 13  | 30-80       | 14      | Upper-mid range |
| 14  | 40-100      | 15      | High range |
| 15  | 15-50       | 31      | Lower-mid range |

### Experiments 16-18: Alternative Region 0x07000
**Region:** 0x06f00-0x07700 (2KB)  
**Strategy:** Test alternative magic location (40 MULT ops)  
**Priority:** LOW

| Exp | Value Range | Patches | Description |
|-----|-------------|---------|-------------|
| 16  | 10-100      | 15      | Broad range |
| 17  | 20-60       | 11      | Mid range |
| 18  | 15-50       | 12      | Lower-mid range |

### Experiments 19-20: Alternative Region 0x22000
**Region:** 0x21f00-0x22300 (1KB)  
**Strategy:** Test third candidate location (24 MULT ops)  
**Priority:** LOW

| Exp | Value Range | Patches | Description |
|-----|-------------|---------|-------------|
| 19  | 10-100      | 14      | Broad range |
| 20  | 20-60       | 0       | Mid range (no patches found) |

## Testing Instructions

### 1. Copy Experimental EXE
```bash
cp experimental-exe-patches/ST-experiment-01.EXE iso-dump/ST.EXE
```

### 2. Build ISO
Build ISO using your preferred method (mkpsxiso, etc.)

### 3. Test in Emulator
- Load game and enter combat
- Test magic attacks
- Expected: ~25% magic damage (1/4 of original)
- Physical damage should remain unchanged

### 4. Report Findings
Note which experiment affects magic damage to identify the calculation region.

## Testing Priority

**Phase 1: Core Magic Region (Exp 1-5)**
- Start with Exp 01 (11 patches, broad range)
- If successful, test Exp 02-05 to narrow down value range
- These have minimal patches to minimize crash risk

**Phase 2: Broader Magic Region (Exp 6-10)**
- If Phase 1 unsuccessful or to confirm findings
- More comprehensive coverage

**Phase 3: Extended Magic Region (Exp 11-15)**
- If Phase 2 successful, test for completeness
- May affect both magic and physical if hitting shared code

**Phase 4: Alternative Regions (Exp 16-20)**
- If Region 0x36000 unsuccessful
- Test alternative magic damage candidates

## Expected Results

### If Region 0x36000 is Correct
✅ Magic damage reduced to ~25%  
✅ Physical damage unchanged (100%)  
✅ Game loads and works normally  
✅ Can narrow down to specific value ranges

### If Wrong Region
❌ No effect on magic damage  
OR ❌ Game crashes/freezes  
OR ⚠️ Both magic and physical affected (hit shared arithmetic code)

## Why This Approach is Better

**Previous (HP Store):**
- ❌ Targeted storage/init regions
- ❌ Hit entity initialization → freezes
- ❌ Affects ALL damage types

**New (Magic Calc):**
- ✅ Targets calculation region
- ✅ Avoids initialization code
- ✅ Should only affect magic (physical is separate)
- ✅ More conservative (0-50 patches vs 36)

## Generation Details

- **Generator:** generate_experiments_v7_magic_calc.js
- **Method:** ADDIU instruction modification (divide immediate by 4)
- **Total Patches:** 0-50 per experiment
- **Average:** ~13 patches (MUCH lower than HP store approach)

See `generation_log.json` for detailed specifications of each experiment.
