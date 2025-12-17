# Projectile/Magic Attack Damage Scaling Fix

## Problem

Monsters' magic and projectile attacks were **not being scaled** by difficulty settings, while melee attributes were. This caused:

- Late-game enemies (like Apocrypha, Descrypha) doing full damage in early areas on easy difficulties
- Early-game enemies doing weak projectile damage in late areas on hard difficulties
- Inconsistent difficulty scaling across different enemy types

## Root Cause

In `randomize.js` lines 513-520, the code to scale creature attack values in EntityStateData was **commented out**. Additionally, the commented code had incorrect property names (`weaponAttack1/2/3` instead of `attack1/2/3`).

## Solution

### 1. Fixed Attack Scaling (`randomize.js` lines 486-535)

Uncommented and corrected the attack scaling logic in `applyDifficultyForEachValidCreature()`:

```javascript
// Scale attack values in entityState data (type 0x20 = attack)
if (creature.entityStates && creature.entityStates.length > 0) {
    creature.entityStates.forEach((entityState) => {
        if (entityState.type == 0x20) {
            // EntityStateData with type 0x20 contains attack1, attack2, attack3
            if (entityState.attack1) {
                var oldValue = entityState.attack1.get();
                var newValue = Math.min(65535, Math.ceil(oldValue * creatureAttributeFactor));
                entityState.attack1.set(newValue);
                console.log("  Scaled attack1: " + oldValue + " -> " + newValue);
            }
            // Same for attack2 and attack3...
        }
    });
}
```

**Key Changes:**
- Fixed property names: `attack1/2/3` (not `weaponAttack1/2/3`)
- Added bounds checking for UInt16: `Math.min(65535, ...)`
- Added detailed logging to verify scaling
- Scales by `creatureAttributeFactor` (based on difficulty setting)

### 2. Added Test Preset (`params/test-apocrypha-weak.json`)

Created a test configuration to verify the fix:

```json
{
  "label": "test-apocrypha-weak",
  "preset": "no-change",
  "difficulty": "extreme-easy",
  "testApocryphaInSolitaryRegion": true
}
```

**What it does:**
- Places **Apocrypha** (late-game projectile enemy) in **Solitary Region** (first area)
- Sets difficulty to "extreme-easy" (factor 0.1)
- Apocrypha's projectile attacks should be reduced to **10% of normal damage**
- Easy to test: just go through first door and fight the Apocrypha

### 3. Test Handler (`randomize.js` lines 1612-1640)

Added logic to handle the `testApocryphaInSolitaryRegion` parameter:

```javascript
if (params.testApocryphaInSolitaryRegion) {
    var solitaryRegion = areas.find(a => a.name === "human_world_solitary_region");
    var lingeringCurse = areas.find(a => a.name === "death_world_lingering_curse_layer");
    
    var darkSpider = solitaryRegion.creatures[0];
    var apocrypha = lingeringCurse.creatures[8];
    
    setCreature(darkSpider, apocrypha, changeSet);
}
```

## Technical Details

### EntityStateData Structure

- **Type 0x20** = Attack entity state
- **attack1** (UInt16 @ offset 0x1a): Primary attack damage
- **attack2** (UInt16 @ offset 0x1c): Secondary attack damage
- **attack3** (UInt16 @ offset 0x1e): Tertiary attack damage

These values control the damage dealt by:
- Projectile attacks (Apocrypha's fireballs, Imp's magic, etc.)
- Magic attacks
- Special attack moves

### Difficulty Scaling

The scaling factor is defined in `randomize.js`:

```javascript
var factorByDificultyParam = {
    "extreme-easy": 0.1,
    "easy": 0.5,
    "medium": 1,
    "hard": 1.3,
    "very-hard": 1.6,
    "even-harder": 2
};

var creatureAttributeFactor = factorByDificultyParam[params.difficulty];
```

**Examples:**
- **extreme-easy** (0.1): Attacks reduced to 10%
- **easy** (0.5): Attacks reduced to 50%
- **hard** (1.3): Attacks increased to 130%
- **even-harder** (2.0): Attacks doubled

## Testing

### Prerequisites
You need the original Shadow Tower ISO file (`st.bin`).

### Test Command

```bash
npm run mod "path/to/st.bin" "./params/test-apocrypha-weak.json"
```

### Expected Results

1. **In Logs** (`generated/test-apocrypha-weak/spoilers/randomize.txt`):
   ```
   TEST: Placing Apocrypha in Solitary Region
   TEST: Replacing 00_dark_spider with 08_apocrypha
   DEBUG - Creature 08_apocrypha
     Scaled attack1: 100 -> 10 (factor: 0.1)
     Scaled attack2: 150 -> 15 (factor: 0.1)
   ```

2. **In-Game**:
   - Load: `generated/test-apocrypha-weak/modified-test-apocrypha-weak-st.bin`
   - Go through first door in Shadow Tower
   - You'll encounter an Apocrypha (eyeball monster)
   - Its projectile attacks should do very low damage (~10% of normal)

### Testing Other Difficulties

You can modify `test-apocrypha-weak.json` to test other difficulty levels:

```json
{
  "difficulty": "hard",  // Apocrypha should be 130% stronger
  ...
}
```

## Impact

This fix affects **all presets** that use difficulty settings:
- `randomized-easy` - Projectile enemies now properly weakened
- `randomized-hard` - Projectile enemies now properly strengthened
- `scary-game` - Maximum difficulty now applies to projectiles too

## Enemies Affected

Enemies with significant projectile/magic attacks that benefit from this fix:

**Early Game:**
- Demon Bat (magic)
- Imp (projectiles)
- Tongue Imp (ranged)

**Mid Game:**
- Watcher Plant (projectiles)
- Star Serpent (magic)
- Dark Fairy (magic)

**Late Game:**
- **Apocrypha** (fireball projectiles) ⚡
- **Descrypha** (magic attacks) ⚡
- Wizcrypha (magic)
- Ring Demon (projectiles)
- Death Mage (magic)
- Dark Spirits (magic)

⚡ = Previously had full damage regardless of difficulty

## Verification

To verify the fix is working:

1. Check the logs for "Scaled attack" messages
2. Compare attack values before/after scaling
3. Test in-game with different difficulty presets
4. Confirm projectile enemies feel appropriately scaled

## Files Modified

- `randomize.js` (lines 486-535, 1612-1640)
- `params/test-apocrypha-weak.json` (new file)
- `PROJECTILE_ATTACK_FIX.md` (this file)

## Related Issues

This fix addresses the core problem described in the issue:
> "monsters attack and more attribute are being changed for ease/hard, to regulate the game difficulty, but that doesn't work totally since the magic/projectile attacks still keep the default damage levels"

The attack values are now properly scaled along with other creature attributes.
