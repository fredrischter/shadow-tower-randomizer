# Issue #31 - Creature Speed Fix Summary

## 🎯 Problem
"This changed exe has absolutely no change in creature speed, try more try other places aggressively"

## ✅ Solution Implemented

### Root Cause Found
The creature speed modification code **was commented out** in randomize.js. The code existed but never executed, explaining why the EXE had no effect on creature speed.

### Fix Applied: 4 Aggressive Approaches

#### 1️⃣ Creature.spd Field (offset 0x25)
- **Previously:** Commented out (line 495)
- **Now:** Active and modified
- **Formula:** `newSpeed = oldSpeed × multiplier`

#### 2️⃣ EntityStateData.movementSpeed (offset 0x08)
- **Previously:** Commented out (lines 564-568)
- **Now:** Active and modified
- **Formula:** `newSpeed = oldSpeed × multiplier`

#### 3️⃣ EntityStateData.actionSpeedTimer (offset 0x03)
- **Previously:** Commented out (lines 573-578)
- **Now:** Active and modified
- **Formula:** `newTimer = oldTimer ÷ multiplier` (INVERSE relationship)

#### 4️⃣ Experimental Bytes (AGGRESSIVE)
**EntityStateData:** offsets 0x02, 0x04, 0x05, 0x06, 0x07  
**Creature:** offsets 0x23, 0x24, 0x26, 0x27  
All modified if non-zero and non-0xFF.

## 📊 What Changed in Code

### Before
```javascript
// Lines 534-583: ALL COMMENTED OUT
/*if (creature.entityStates && creature.entityStates.length > 0) {
    // Speed modification code here but NEVER EXECUTED
}*/
```

### After
```javascript
// Lines 532-604: ACTIVE AND STANDALONE
if (params.creatureSpeedMultiplier && params.creatureSpeedMultiplier !== 1.0) {
    // APPROACH 1: Creature.spd
    creature.spd.set(newCreatureSpd);
    
    // APPROACH 2: EntityStateData speeds
    entityState.movementSpeed.set(newSpeed);
    entityState.actionSpeedTimer.set(newTimer);
    
    // APPROACH 3 & 4: Experimental bytes
    // Try multiple unknown bytes aggressively
}
```

## 🧪 Testing the Fix

### Step 1: Validate Code
```bash
node test_speed_code.js
```

**Expected output:**
```
✓ Issue #31 comment present
✓ creatureSpeedMultiplier parameter check
✓ Creature.spd modification code
✓ EntityStateData.movementSpeed modification
✓ SUCCESS: All code checks passed!
```

### Step 2: Build Test ISO
```bash
npm run mod "./path/to/st.bin" "./params/fast-creatures.json"
```

**Check console for:**
```
Applying speed multiplier: 50.0
  Scaled Creature.spd: 20 -> 255 (x50.0)
  Scaled EntityStateData.movementSpeed: 20 -> 255 (x50.0)
  Scaled EntityStateData.actionSpeedTimer: 20 -> 1 (÷50.0)
  EXPERIMENTAL: Scaled EntityStateData[0x02]: 10 -> 255
  EXPERIMENTAL: Scaled Creature[0x23]: 15 -> 255
```

### Step 3: Test in Emulator
1. Load `generated/fast-creatures/modified-fast-creatures-st.bin`
2. Start a new game
3. Observe creatures:
   - Do they move faster?
   - Do they attack faster?
   - Is rotation affected?

### Step 4: Report Results
Which bytes actually made a difference? This helps identify the true speed control bytes.

## 📁 Documentation Created

1. **CREATURE_SPEED_FIX_ISSUE_31.md**
   - Complete technical documentation
   - All 4 approaches explained
   - Debugging guide
   - What to do if it still doesn't work

2. **BEFORE_AFTER_CREATURE_SPEED.md**
   - Visual comparison of code changes
   - Shows commented vs active state
   - Example outputs

3. **show_speed_byte_map.js**
   - Run: `node show_speed_byte_map.js`
   - Shows which bytes are modified
   - Formulas and examples
   - Testing guidance

4. **test_speed_code.js**
   - Automated validation
   - Confirms all approaches are present
   - Checks code is uncommented

## 🔍 Why This Should Work

### Previous State
- ❌ Code commented out → No modifications
- ❌ Only tried 2 bytes (and they were disabled)
- ❌ No logging
- ❌ No experimental approaches

### Current State
- ✅ Code active and standalone
- ✅ Tries 11 different bytes simultaneously
- ✅ Comprehensive logging
- ✅ Multiple aggressive approaches
- ✅ Safe bounds checking (1-255)

**Result:** Much higher probability that at least one byte affects actual game speed.

## 🎮 Test Presets Available

1. **params/fast-creatures.json** - 50x speed multiplier
2. **params/super-fast-creatures.json** - 10x speed multiplier
3. **params/slow-creatures.json** - 0.5x speed multiplier

## ⚠️ If Still Not Working

If creatures still don't move faster after this fix, it means:

1. **Speed is in ST.EXE** - Would need assembly code patches
2. **Speed is in a lookup table** - Need to find the table
3. **Speed is hardcoded per creature ID** - Need deeper binary analysis
4. **Speed is controlled by animation timing** - Different approach needed

In that case, share:
- Console output showing which bytes were modified
- The changeset.json file
- In-game observations

## 📈 Success Metrics

- ✅ **Code fixed:** Previously commented out, now active
- ✅ **Aggressiveness:** 11 bytes tried (vs 0 before)
- ✅ **Logging:** Complete visibility into what's modified
- ⏳ **In-game validation:** Requires user with ISO

## 🚀 Next Steps

**For User:**
1. Build test ISO with fast-creatures.json
2. Test in emulator
3. Report findings:
   - Does speed change?
   - Which specific behaviors change? (movement/attacks/rotation)
   - Any bugs or glitches?

**For Developer:**
Based on user feedback:
- Remove ineffective byte modifications
- Document which bytes actually control speed
- Possibly add per-creature speed customization
- Add rotation speed if identified

## 📝 Implementation Date
December 19, 2025

## ✨ Status
✅ **IMPLEMENTED AND READY FOR TESTING**

All code changes complete. Waiting for in-game validation by user with game ISO.
