# Patched ST.EXE Versions for Empirical Testing

This directory contains 14 modified versions of ST.EXE.

## Files

- `ST.EXE.original` - Original unmodified ST.EXE
- `ST.EXE.zero_attack_power_reads`
  - **Description:** Zero EntityStateData.attack1 reads (offset 0x1a)
  - **Expected Result:** All attacks do 0 damage
- `ST.EXE.zero_multiply_by_5`
  - **Description:** Zero damage * 5 calculation
  - **Expected Result:** Drastically reduced damage (only modifier remains)
- `ST.EXE.zero_final_damage_write`
  - **Description:** Zero HP write at PlayerState+0x19c (invincibility)
  - **Expected Result:** Player invincible - HP never decreases
- `ST.EXE.force_damage_to_one`
  - **Description:** Force all damage to 1 HP
  - **Expected Result:** Every attack does exactly 1 damage
- `ST.EXE.double_all_damage`
  - **Description:** Double all damage values
  - **Expected Result:** All attacks do 2x damage
- `ST.EXE.half_all_damage`
  - **Description:** Half all damage values
  - **Expected Result:** All attacks do 0.5x damage
- `ST.EXE.multiply_by_10_not_5`
  - **Description:** Change damage formula from *5 to *10
  - **Expected Result:** All attacks do ~2x damage
- `ST.EXE.multiply_by_1_not_5`
  - **Description:** Change damage formula from *5 to *1 (remove multiplier)
  - **Expected Result:** All attacks do ~20% damage
- `ST.EXE.force_damage_to_100`
  - **Description:** Force all damage to 100 HP
  - **Expected Result:** Every attack does exactly 100 damage
- `ST.EXE.force_damage_to_255`
  - **Description:** Force all damage to 255 HP (max uint8)
  - **Expected Result:** Every attack does exactly 255 damage (likely instant death)
- `ST.EXE.ignore_armor`
  - **Description:** Skip armor/defense calculation
  - **Expected Result:** All attacks ignore player defense stats
- `ST.EXE.max_armor`
  - **Description:** Force 99% damage reduction (super armor)
  - **Expected Result:** All attacks do ~1% damage
- `ST.EXE.always_critical`
  - **Description:** Force all attacks to be critical hits
  - **Expected Result:** All attacks do critical hit damage
- `ST.EXE.never_critical`
  - **Description:** Disable all critical hits
  - **Expected Result:** No attacks do critical hit damage

## Usage

1. Copy desired ST.EXE version to `iso-dump/ST.EXE`
2. Rebuild ISO: `mkpsxiso iso-dump/st.xml -o test.bin`
3. Test in PSX emulator
4. Compare results with expected behavior

## Testing Methodology

Each patch tests a different aspect of the damage calculation:

1. **Data Flow Patches** - Verify where damage values come from
2. **Formula Patches** - Verify the damage calculation formula
3. **Multiplier Patches** - Verify the multiplication constants
4. **Defense Patches** - Verify armor/defense mechanics
5. **Critical Patches** - Verify critical hit system

