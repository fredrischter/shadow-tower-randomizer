# Damage Component Isolation Patches

These patches isolate individual components of the magic damage formula to identify their contribution.

## Damage Formula

From MAGIC_DAMAGE_CALCULATION_DECOMPILATION.md:
```c
damage = (base_damage * player_magic_stat * enemy_power) / 10
```

## Patches

### 1. force_base_damage_to_1.bin
**Purpose:** Isolate base_damage component by NOPing its multiplication

**Modification:** NOP instruction at file offset 0x2d4cc (mult instruction)

**Expected Result:** 
- If base_damage is the main factor: damage should drop significantly
- Formula becomes: `damage = (1 * player_stat * enemy_power) / 10`

### 2. force_player_stat_to_1.bin
**Purpose:** Isolate player_magic_stat component by forcing it to 1

**Modification:** Insert `li $a2, 1` at file offset 0x2d4c8

**Expected Result:**
- If player stats scale damage significantly: damage should drop
- Formula becomes: `damage = (base_damage * 1 * enemy_power) / 10`

### 3. force_enemy_power_to_1.bin
**Purpose:** Isolate enemy_power component by forcing it to 1

**Modification:** Insert `li $a1, 1` at file offset 0x2d4c4

**Expected Result:**
- If enemy power is the main damage factor: damage should drop significantly  
- Formula becomes: `damage = (base_damage * player_stat * 1) / 10`

## Testing Procedure

```bash
# Test each patch individually
cp isolation_patches/ST.EXE.force_base_damage_to_1 iso-dump/ST.EXE
cd iso-dump
mkpsxiso st.xml -o ../test.bin
cd ..
# Load test.bin in emulator and get hit by magic attack
# Note the damage value

# Repeat for other patches
cp isolation_patches/ST.EXE.force_player_stat_to_1 iso-dump/ST.EXE
# ... rebuild and test

cp isolation_patches/ST.EXE.force_enemy_power_to_1 iso-dump/ST.EXE
# ... rebuild and test
```

## Expected Damage Values

**Baseline (no patch):** ~40 HP per magic hit

**If each component is set to 1:**
- Shows which multiplier has the largest effect
- Helps identify primary damage scaling factor
- Reveals if any component is calculated incorrectly

## Restore Original

```bash
cp isolation_patches/ST.EXE.original iso-dump/ST.EXE
```
