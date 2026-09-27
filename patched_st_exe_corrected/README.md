# Corrected HP Damage Patches

This directory contains 6 ST.EXE patches that correctly target HP damage calculation.

## Patches

1. **ST.EXE.original** - Unmodified backup
2. **ST.EXE.hp_invincibility** - Player takes no HP damage (invincible)
3. **ST.EXE.hp_force_1** - All attacks deal exactly 1 HP damage
4. **ST.EXE.hp_force_10** - All attacks deal exactly 10 HP damage
5. **ST.EXE.hp_double** - All HP damage doubled (harder)
6. **ST.EXE.hp_half** - All HP damage halved (easier)
7. **ST.EXE.hp_zero** - All damage calculations result in 0 HP

## Important

These patches target **HP damage** (file offsets 0x2d740-0x2d8ec), NOT MP calculation.

Previous patches in `patched_st_exe/` directory incorrectly targeted MP and did not affect HP damage from enemy attacks.

## Usage

```bash
# Copy desired patch to iso-dump
cp patched_st_exe_corrected/ST.EXE.hp_invincibility iso-dump/ST.EXE

# Rebuild ISO
mkpsxiso iso-dump/st.xml -o test_invincible.bin

# Load in emulator and test
# HP should not decrease when taking damage from enemies
```

## Verification

Test by:
1. Loading patched ISO in emulator
2. Getting attacked by an enemy
3. Observing HP bar (red bar, not blue MP bar)

Expected results:
- **hp_invincibility** / **hp_zero**: HP does not decrease
- **hp_force_1**: HP decreases by exactly 1 per hit
- **hp_force_10**: HP decreases by exactly 10 per hit
- **hp_double**: HP decreases by 2x normal damage
- **hp_half**: HP decreases by 0.5x normal damage

See CORRECTED_HP_DAMAGE_PATCHES.md for full documentation.
