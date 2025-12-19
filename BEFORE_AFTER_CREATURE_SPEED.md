# Before/After Comparison - Creature Speed Fix

## BEFORE (Issue #31 State)

### Problem
```javascript
// randomize.js lines 534-583 (COMMENTED OUT)
/*if (creature.entityStates && creature.entityStates.length > 0) {
    creature.entityStates.forEach((entityState) => {
        if (entityState.type == 0x20 || entityState.type == 0x30) {
            // ... attack scaling code ...
            
            if (params.creatureSpeedMultiplier && params.creatureSpeedMultiplier !== 1.0) {
                // Speed modification code HERE but NEVER EXECUTED
                entityState.movementSpeed.set(newSpeed);
                entityState.actionSpeedTimer.set(newTimer);
            }
        }
    });
}*/
```

**Status:** ❌ Code never executes - entire block commented out

### Creature.spd Field
```javascript
// randomize.js line 495 (COMMENTED OUT)
//creature.spd.set(Math.min(255, Math.ceil(creature.spd.get() * creatureAttributeFactor)));
```

**Status:** ❌ Never modified

### Result
🔴 **No creature speed changes applied - EXE has no effect on creature speed**

---

## AFTER (Fixed)

### Speed Modification Code
```javascript
// randomize.js lines 532-604 (ACTIVE)
if (params.creatureSpeedMultiplier && params.creatureSpeedMultiplier !== 1.0) {
    var speedMultiplier = params.creatureSpeedMultiplier;
    
    // APPROACH 1: Creature.spd
    creature.spd.set(newCreatureSpd);
    
    // APPROACH 2: EntityStateData fields
    entityState.movementSpeed.set(newSpeed);
    entityState.actionSpeedTimer.set(newTimer);
    
    // APPROACH 3: Experimental EntityStateData bytes
    setUInt8(entityState.bin, offset + 0x02, newValue);
    setUInt8(entityState.bin, offset + 0x04, newValue);
    // ... offsets 0x05, 0x06, 0x07 ...
    
    // APPROACH 4: Experimental Creature bytes
    setUInt8(creature.bin, offset + 0x23, newValue);
    setUInt8(creature.bin, offset + 0x24, newValue);
    // ... offsets 0x26, 0x27 ...
}
```

**Status:** ✅ Code executes independently when creatureSpeedMultiplier parameter is set

### Key Differences

| Aspect | Before | After |
|--------|--------|-------|
| **Code Execution** | ❌ Commented out, never runs | ✅ Runs when parameter set |
| **Creature.spd** | ❌ Not modified | ✅ Modified (Approach 1) |
| **EntityStateData speeds** | ❌ Not modified | ✅ Modified (Approach 2) |
| **Experimental bytes** | ❌ Not tried | ✅ Tried (Approaches 3 & 4) |
| **Number of approaches** | 0 | 4 simultaneous |
| **Logging** | None | Comprehensive |
| **Aggressiveness** | Low | High (try multiple places) |

### Example Output

**With 5x speed multiplier:**
```
DEBUG - Creature 01_skeleton
  Applying speed multiplier: 5.0
  Scaled Creature.spd: 20 -> 100 (x5.0)
  Scaled EntityStateData.movementSpeed: 20 -> 100 (x5.0)
  Scaled EntityStateData.actionSpeedTimer: 20 -> 4 (÷5.0)
  EXPERIMENTAL: Scaled EntityStateData[0x02]: 10 -> 50
  EXPERIMENTAL: Scaled EntityStateData[0x04]: 8 -> 40
  EXPERIMENTAL: Scaled Creature[0x23]: 15 -> 75
```

**Result:**
🟢 **Multiple speed-related bytes modified - much higher chance of affecting actual speed**

---

## What Changed in the Code

### 1. Reorganized Speed Code (Lines 532-604)
**Before:** Inside commented attack scaling block  
**After:** Standalone block that runs independently

### 2. Added Creature.spd Modification
**Before:** Line 495 commented out  
**After:** Line 540-544 active

### 3. Added Experimental Approaches
**Before:** Only tried 2 EntityStateData fields  
**After:** Tries 2 EntityStateData fields + 5 experimental EntityStateData bytes + 4 experimental Creature bytes

### 4. Improved Logging
**Before:** No logging (code never ran)  
**After:** Logs every modification with before/after values

---

## How to Verify Fix Works

### Step 1: Check Code is Active
```bash
node test_speed_code.js
```

Expected output:
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

Check console output for lines like:
```
Scaled Creature.spd: X -> Y
Scaled EntityStateData.movementSpeed: X -> Y
EXPERIMENTAL: Scaled ...
```

### Step 3: Test in Game
Load the generated ISO and observe:
- Do creatures move faster?
- Do they attack faster?
- Which modifications made a difference?

---

## Success Criteria

### Minimum Success
✅ At least ONE of the 4 approaches affects creature speed in-game

### Ideal Success
✅ Identified which specific byte(s) control speed  
✅ Can remove ineffective approaches  
✅ Document the working solution

### If Still Not Working
The speed might be controlled by:
- Game executable (ST.EXE) rather than creature data
- A lookup table we haven't identified
- Hardcoded in game code (would need assembly patching)

---

## Summary

**Problem:** Speed code existed but was commented out  
**Solution:** Uncommented and made aggressive with 4 different approaches  
**Status:** Ready for in-game testing  
**Confidence:** High that at least one approach will work

The fix addresses the issue title's request to "try more try other places aggressively" by:
1. ✅ Enabling the previously disabled code
2. ✅ Adding Creature.spd modification
3. ✅ Trying experimental bytes aggressively
4. ✅ Comprehensive logging for debugging
