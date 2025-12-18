# Creature Speed Parameter Documentation

## Overview

This feature adds the ability to globally scale creature movement and action speeds through the `creatureSpeedMultiplier` parameter.

## Parameter

**Name:** `creatureSpeedMultiplier`  
**Type:** Number (float)  
**Default:** 1.0 (no change)  
**Range:** 0.1 to 10.0 recommended  

## What It Does

The parameter scales two speed-related bytes in EntityStateData (types 0x20 and 0x30):

1. **Movement Speed** (offset 0x08)
   - Higher value = faster movement
   - Scaled by direct multiplication: `newSpeed = oldSpeed × multiplier`
   
2. **Action Speed Timer** (offset 0x03)
   - **INVERSE RELATIONSHIP**: Lower value = faster actions
   - Scaled by division: `newTimer = oldTimer ÷ multiplier`

## Binary Analysis

### EntityStateData Structure (48 bytes, 0x30)

```
Offset  Description                    Example Values
------  ---------------------------    --------------
0x00    Type (0x20=physical/0x30=magic) 20 or 30
0x03    Action Speed Timer             08-80 (INVERSE: lower = faster)
0x08    Movement Speed                 14-35 (higher = faster)
0x1a    Attack Damage 1 (UInt16)       varies
0x1c    Attack Damage 2 (UInt16)       varies
0x1e    Attack Damage 3 (UInt16)       varies
```

### Speed Analysis by Creature Type

From analysis of game data:

**Slow Creatures:**
- Slimes: Timer=0x08, Movement=0x14
- Effect: Sluggish movement and slow attacks

**Medium Creatures:**
- Skeleton: Timer=0x14, Movement=0x14
- Dark Spider: Timer=0x14, Movement=0x16
- Effect: Normal movement and attack speed

**Fast Creatures:**
- Demon Bat: Timer=0x30, Movement=0x20
- Gargaral: Timer=0x50, Movement=0x21
- Effect: Quick movement and rapid attacks

## Example Presets

### 1. fast-creatures.json (5x faster)
```json
{
  "label": "fast-creatures",
  "preset": "no-change",
  "difficulty": "medium",
  "creatureSpeedMultiplier": 5.0,
  "seed": "1"
}
```

**Effect on a Skeleton:**
- Movement: 20 → 100 (5x faster movement)
- Timer: 20 → 4 (5x faster actions)

### 2. slow-creatures.json (0.5x slower)
```json
{
  "label": "slow-creatures",
  "preset": "no-change",
  "difficulty": "medium",
  "creatureSpeedMultiplier": 0.5,
  "seed": "1"
}
```

**Effect on a Skeleton:**
- Movement: 20 → 10 (half speed movement)
- Timer: 20 → 40 (half speed actions)

### 3. super-fast-creatures.json (10x faster)
```json
{
  "label": "super-fast-creatures",
  "preset": "no-change",
  "difficulty": "medium",
  "creatureSpeedMultiplier": 10.0,
  "seed": "1"
}
```

**Effect on a Skeleton:**
- Movement: 20 → 200 (10x faster movement)
- Timer: 20 → 2 (10x faster actions)

## Usage with Other Parameters

The speed multiplier can be combined with other randomization parameters:

```json
{
  "label": "fast-randomized",
  "preset": "any%",
  "difficulty": "hard",
  "randomizeMap": true,
  "randomizeCreatures": true,
  "creatureSpeedMultiplier": 3.0,
  "seed": "12345"
}
```

This creates a challenging mode where:
- Map is randomized
- Creatures are randomized
- All creatures move and attack 3x faster

## Technical Implementation

### Code Changes

**data_model.js (lines 1088-1109):**
- Added `actionSpeedTimer` accessor (UInt8 at offset 0x03)
- Added `movementSpeed` accessor (UInt8 at offset 0x08)

**randomize.js (lines 557-584):**
- Added speed scaling logic in `applyDifficultyForEachCreature()`
- Scales both movement and action speed when `params.creatureSpeedMultiplier` is set
- Includes bounds checking (1-255) and detailed logging

### Safety Limits

Both speed values are clamped to valid byte ranges:
- Minimum: 1 (prevents zero/negative values)
- Maximum: 255 (maximum uint8 value)

## Testing

A comprehensive test validates:
1. Parameter loading from JSON
2. Speed scaling mathematics
3. Bounds checking

Run test:
```bash
node /tmp/test_speed_params.js
```

## Known Limitations

1. **Visual Speed Only**: This affects creature animation and movement speed, not AI behavior patterns
2. **All Creatures Scaled**: Currently applies to all creatures globally, not per-creature customization
3. **Type Dependency**: Only affects creatures with EntityStateData types 0x20 (physical) or 0x30 (magic)

## Future Enhancements

Potential improvements:
- Per-creature speed customization
- Random speed variation within a range
- Boss-specific speed multipliers
- Speed scaling based on area/world
- Rotation speed parameter (currently not identified in binary data)

## Troubleshooting

**Q: Creatures moving too fast/clipping through walls?**  
A: Use lower multiplier values (2-3x) for stability. Values above 10x may cause physics issues.

**Q: Some creatures not affected?**  
A: Only creatures with EntityStateData types 0x20/0x30 are affected. Check creature type in debug output.

**Q: Speed seems inconsistent?**  
A: Different creatures have different base speeds. The multiplier is applied to their original values.

## References

- EntityStateData analysis: `randomize_entity_state_data.txt`
- Speed byte analysis: `/tmp/analyze_speed_bytes.js`
- Comprehensive creature stats: `/tmp/analyze_more_creatures.js`
