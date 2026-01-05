# Spawn Groups (mutexGroup) - Executive Summary

## What Is This?

This investigation addresses the question: **"What is the spawn group value and how does it work?"**

The "spawn group" (officially called `mutexGroup` in the code) is a critical byte in Shadow Tower's creature spawn system that controls how many creatures can exist simultaneously from a spawn pool.

## Quick Facts

- **Location:** Offset 0x0a in the 24-byte spawn structure
- **Type:** Single byte (UInt8), values 0x00-0xFF
- **Purpose:** Spawn pooling/mutex mechanism + memory management
- **Impact:** Wrong values cause spawn failures, crashes, or memory overflow

## Known Values

| Value | Behavior | Safe? | Notes |
|-------|----------|-------|-------|
| 0x0e  | 6 at once | ✓ | Most permissive |
| 0x14  | 6 at once | ✓ | King Hopper fix value |
| 0x1c  | 3 at once | ✓ | Common middle ground |
| 0x1d  | 3 at once | ✓ | Variant of 0x1c |
| 0x28  | 3 at once | ✓ | Another variant |
| 0x7f  | 1 at once | ✓ | Most restrictive |
| 0x5a  | 1 + limit 3 | ✗ | **BUG VALUE** - causes failures |

## The King Hopper Bug

**Problem:** King Hopper creatures had `mutexGroup = 0x5a`, which caused spawn failures and game freezes.

**Fix:** Change `mutexGroup` from `0x5a` to `0x14` (or `0x0e`).

**Status:** Already implemented in randomize.js line 436.

## Memory Connection

Shadow Tower has **two related limits**:

1. **16 unique item models** per area (tracked by `usedItemMemory()`)
2. **Spawn group limits** control creature instances

These work together:
- More simultaneous creatures → more active item drops → higher memory usage
- mutexGroup prevents too many creatures spawning at once
- Combined constraints prevent memory overflow crashes

## Documentation Files

For different audiences:

1. **This file (SPAWN_GROUPS_SUMMARY.md)**  
   → Quick overview for anyone

2. **SPAWN_GROUPS_DOCUMENTATION.md**  
   → Complete technical reference for developers

3. **SPAWN_GROUPS_INTEGRATION.md**  
   → Integration guide with code examples

4. **spawn_group_utils.js**  
   → Ready-to-use validation and utility functions

5. **analyze_spawn_groups.js**  
   → Tool to analyze spawn groups in game data

## For Users

**What you need to know:**
- Spawn groups control how many enemies appear at once
- Wrong values can break spawning or crash the game
- The randomizer already fixes the known King Hopper bug
- Memory limits (16 item models) can affect drop placement

**No action required** - the randomizer handles this automatically.

## For Modders

**What you need to know:**
- Always preserve `mutexGroup` when copying spawn data
- Validate spawn groups with `spawn_group_utils.js`
- Avoid `0x5a` (King Hopper bug value)
- Consider memory when assigning spawn groups
- Use `0x1c` (3 at once) as safe default for unknown cases

**Recommended:** Read SPAWN_GROUPS_INTEGRATION.md for integration patterns.

## For Researchers

**What we know:**
- Location, structure, and some behaviors documented
- 7 known values with observed behaviors
- Relationship to memory management understood
- King Hopper fix verified

**What we don't know:**
- Exact encoding scheme (how byte value maps to spawn limit)
- All possible valid values
- Whether behavior varies by area/game state
- Precise game engine mechanics

**Research opportunities:**
1. Decompile game engine spawn system
2. Test all byte values (0x00-0xFF) empirically
3. Extract all original spawn groups from unmodified game
4. Document any area-specific behavior
5. Find optimal values for randomization

## For Code Reviewers

**Changes made:**
- Added inline documentation to data_model.js (line 2588)
- Enhanced King Hopper fix comments in randomize.js (line 432)
- Created standalone utilities (spawn_group_utils.js)
- Created analysis tool (analyze_spawn_groups.js)
- Updated knowledge base (KNOWLEDGE.instructions.md)
- Updated README with documentation links

**No breaking changes:**
- Existing code behavior unchanged
- Utilities are additive, not yet integrated
- Integration is optional and documented
- All tools tested and working

## Quick Reference Card

```
Common Spawn Group Values:
┌──────┬─────────────┬────────┐
│ Hex  │ Description │ Safe?  │
├──────┼─────────────┼────────┤
│ 0x0e │ 6 at once   │ ✓ Yes  │
│ 0x1c │ 3 at once   │ ✓ Yes  │
│ 0x7f │ 1 at once   │ ✓ Yes  │
│ 0x5a │ King bug    │ ✗ NO!  │
│ 0xff │ Null/none   │ ✓ Yes  │
└──────┴─────────────┴────────┘

Memory Limits:
• 16 unique item models per area
• Check with area.usedItemMemory()
• Prevent with area.hasFreeItemMemory()

Fix King Hopper:
spawn.mutexGroup.set(0x14);
```

## Next Steps

**Immediate:**
- ✅ Documentation complete
- ✅ Utilities created and tested
- ✅ Integration guide written

**Short term (optional):**
- [ ] Integrate utilities into randomize.js
- [ ] Add spawn group stats to spoiler files
- [ ] Test with various presets

**Long term (research):**
- [ ] Decompile game engine spawn code
- [ ] Test all byte values in-game
- [ ] Map all original spawn groups
- [ ] Document complete behavior

## Contact

For questions about spawn groups:
1. Check SPAWN_GROUPS_DOCUMENTATION.md first
2. Ask in FromSoft Modding Committee Discord
3. Email fredrischter@gmail.com

## Version History

- **2026-01-05:** Initial investigation and documentation complete
- Tools created: spawn_group_utils.js, analyze_spawn_groups.js
- Documentation: 3 files totaling ~25KB
- Status: Ready for integration

---

**TL;DR:** Spawn groups control how many creatures spawn at once. Use 0x1c (3 at once) as safe default. Avoid 0x5a (breaks spawning). Memory limit is 16 item models per area. Utilities provided for validation. King Hopper already fixed.
