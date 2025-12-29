# Weight Validation Tests

## Overview
Tests to ensure equipment weight remains proportional to item stats and doesn't become unreasonably heavy.

## Problem
Prior to this fix, equipment weight could become unrealistic (e.g., "58 lb" for basic weapons) due to:
1. Difficulty factor division without capping
2. Random variation multiplication without limits
3. No relationship enforcement between weight and item power

## Solution
Added weight capping logic that ensures:
- Weight ≤ item_score × max_ratio
- max_ratio varies by difficulty (0.3 for medium, 0.15 for easy, 0.39 for hard)
- Capping applied after both difficulty adjustment and random variation

## Test Files

### test_weight_logic.js
**Purpose:** Unit tests for weight capping logic

**Usage:**
```bash
node test_weight_logic.js
```

**What it tests:**
- Weight capping for easy/medium/hard difficulties
- Worst-case random variation (divide by 0.125)
- Multiple item types (weapons, armor)

**Expected output:**
```
=== Weight Capping Unit Tests ===

Medium difficulty (equipsAttributeFactor=1):
  ✓ PASS short_sword     score= 150 original= 11 → final= 45 (max=45)
  ✓ PASS blood_sword     score= 900 original= 44 → final=255 (max=270)
  
=== Summary ===
✓ All tests PASSED
```

### test_weight_validation.sh
**Purpose:** Validates weight values in generated readable.txt files

**Usage:**
```bash
./test_weight_validation.sh
```

**What it tests:**
- Scans all generated presets
- Checks for unreasonably heavy items by difficulty
- Reports max weight and any violations

**Thresholds:**
- Easy/Extreme-easy: weight ≤ 100
- Medium: weight ≤ 150
- Hard/Very-hard/Even-harder: weight ≤ 200

**Output:** Creates `test_weight_validation.csv` with results

## Test Presets

Test-specific parameter files for validation:
- `params/test-weight-easy.json` - Easy difficulty test
- `params/test-weight-medium.json` - Medium difficulty test
- `params/test-weight-hard.json` - Hard difficulty test

All use same seed (12345) for reproducibility.

## Running Tests

**Quick test:**
```bash
# Run unit tests
node test_weight_logic.js

# Expected: All tests PASSED
```

**Full validation:**
```bash
# Generate test presets (requires st.bin)
npm run mod "./generated/st.bin" "./params/test-weight-medium.json"

# Run validation on all generated files
./test_weight_validation.sh

# Check results
cat test_weight_validation.csv
```

## Integration with CI/CD

Add to test suite:
```bash
# In test_all_presets.sh or similar
node test_weight_logic.js || exit 1
./test_weight_validation.sh || exit 1
```

## Expected Behavior

### Before Fix
- Short sword could have weight > 50 on easy mode
- No relationship between item power and weight
- Random variation could make items absurdly heavy

### After Fix
- Short sword (score≈150): 
  - Easy: weight ≤ 23
  - Medium: weight ≤ 45
  - Hard: weight ≤ 59
- Blood sword (score≈900):
  - Easy: weight ≤ 135
  - Medium: weight ≤ 255 (byte max)
  - Hard: weight ≤ 255 (byte max)

## Maintenance

When adjusting weight formula:
1. Update `test_weight_logic.js` with new expected values
2. Run tests to verify
3. Update this documentation
