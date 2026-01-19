# Anti Venom Rotation Fix

## Issue
Anti venom items in Shadow Tower have incorrect rotation values that need to be reset to zero.

## Solution
This fix implements a two-part solution:

### 1. Test Mode (Optional)
When `testAntiVenomRotation: true` is set in params, all collectables are converted to anti venom. This makes testing easy and comprehensive.

### 2. The Fix (Always Active)
For all presets, any collectable that is anti venom (`item_11e_anti_venom`, ID 0x11e) has its rotation (`rotation_z`) reset to 0.

## Implementation Details

### Code Location
File: `randomize.js`

**Functions:**
- `setAllCollectablesToAntiVenom(collectable, area)` - Lines 737-744
  - Converts all non-blank collectables to anti venom
  - Only runs when `params.testAntiVenomRotation` is true
  - Logs each conversion for verification

- `resetAntiVenomRotation(collectable, area)` - Lines 746-755
  - Checks if collectable is anti venom
  - Sets rotation_z to 0 if it is
  - Always runs for all presets
  - Logs each rotation reset for verification

**Integration:**
- Both functions are called via `forEachCollectable()` helper
- Execute after all randomization is complete (lines 2122-2129)
- Run before final preset directives

### Data Structure
The `Collectable` class (data_model.js, line 1553) has:
- `type` - Item ID at offset 0x00 (UInt16)
- `rotation_z` - Rotation value at offset 0x0f (UInt16)

## Testing

### Test Configuration
File: `params/test-anti-venom-rotation.json`
```json
{
  "label": "test-anti-venom-rotation",
  "preset": "no-change",
  "difficulty": "medium",
  "seed": "1",
  "testAntiVenomRotation": true
}
```

### Verification Script
Run: `node verify_anti_venom_fix.js`

This script performs 8 automated checks:
1. ✓ setAllCollectablesToAntiVenom function exists
2. ✓ resetAntiVenomRotation function exists
3. ✓ setAllCollectablesToAntiVenom is conditionally called
4. ✓ resetAntiVenomRotation is called
5. ✓ Uses item_11e_anti_venom constant
6. ✓ Sets rotation_z to 0
7. ✓ Test params file exists
8. ✓ Test params has testAntiVenomRotation flag

### Manual Testing
To test the fix with actual game data:
1. Run randomizer with test preset: `npm run mod "path/to/st.bin" "params/test-anti-venom-rotation.json"`
2. Check the generated `spoilers/readable.txt` for:
   - "TEST - Setting collectable to anti venom" messages (should see many)
   - "FIX - Resetting anti venom rotation to 0" messages (should match the number of collectables)
3. Verify in-game that anti venom items appear with correct rotation

## Impact

### Affected Items
- All anti venom items (`item_11e_anti_venom`, ID 0x11e)
- In test mode: ALL collectables (converted to anti venom)

### Unaffected Items
- All other item types are not touched by this fix
- Other properties of anti venom (position, tile location, etc.) remain unchanged

### Benefits
- ✅ Fixes visual rotation issue for anti venom
- ✅ Ensures consistent item appearance
- ✅ Easy to test with comprehensive coverage
- ✅ No side effects on other items
- ✅ Works for both randomized and non-randomized games

## Usage

### For Normal Gameplay
No special configuration needed. The fix automatically applies to all anti venom items in any preset.

### For Testing
Add to your params file:
```json
{
  "testAntiVenomRotation": true
}
```

This will convert all collectables to anti venom, making it easy to verify the rotation fix is working correctly.

## Related Constants
From `constants.js` line 287:
```javascript
global.item_11e_anti_venom = 0x11e;
```

## Author
Implemented as part of issue: "To reset rotation to zero when item is anti venom"
Date: 2026-01-19
