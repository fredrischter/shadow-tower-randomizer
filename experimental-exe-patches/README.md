# Zero Magic Damage Experiments - Based on Exp 19 Success

## Overview

20 experimental ST.EXE files that SET magic damage to 0 (complete immunity).

**Based on:** Exp 19 success (Region 0x22000 showed magic damage reduction)

## Strategy Change

**Previous:** Divide magic damage by 4  
**Current:** SET magic damage to 0 (easier to verify)

**Previous:** 0-50 patches per experiment  
**Current:** 0-2 patches total (ultra-conservative)

**Previous:** Blind searching  
**Current:** Based on Exp 19 actual success in Region 0x22000

## Testing Priority

1. **Exp 11** (1 patch in Region 0x21000-0x23000) ⭐ START HERE
2. **Exp 14** (1 patch in Region 0x21600-0x22400)
3. **Exp 01-10, 12-13, 15-20** (0 patches - baseline controls)

## Expected Results

**If Exp 11 or 14 work:**
- ✅ Magic damage = 0 (complete immunity)
- ✅ Physical damage normal
- ✅ Game loads and runs
- ✅ Very obvious to verify

## Testing Instructions

```bash
# Test Exp 11 first (has 1 patch)
cp experimental-exe-patches/ST-experiment-11.EXE iso-dump/ST.EXE
# Build ISO and test - take magic damage, should be 0

# If crashes, test Exp 14
cp experimental-exe-patches/ST-experiment-14.EXE iso-dump/ST.EXE
```

Generated with: `generate_experiments_v8_zero_magic.js`
