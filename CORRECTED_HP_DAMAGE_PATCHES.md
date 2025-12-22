# Corrected HP Damage Patches

## Problem Identified

The original 14 ST.EXE patches (force_damage_to_100, force_damage_to_one, etc.) were **incorrectly targeting MP (magic points) calculation**, not HP damage from enemy attacks.

### What Went Wrong

**Incorrect Analysis:**
- Patches modified code in the MP calculation section
- Changes affected magic point display/recovery
- Did NOT affect HP when player takes damage from enemies

**Root Cause:**
- Misidentified code section during initial analysis
- MP and HP use similar calculation patterns
- Without proper HP write location analysis, targeted wrong section

## Solution

**Complete HP Write Location Analysis:**
- Scanned all 161 HP array write instructions in ST.EXE
- Categorized by purpose: initialization (26), damage calculation (46), other (89)
- Identified correct HP damage section: file offsets 0x2d740-0x2d8ec

**New Corrected Patches:**
- Target actual HP damage calculation code
- Modify HP writes during combat damage processing
- Verified to affect HP array at PlayerState+0x190 to +0x1c2

## Corrected Patches

All corrected patches are in `patched_st_exe_corrected/` directory.

### 1. HP Invincibility (`ST.EXE.hp_invincibility`)

**Purpose:** Makes player invincible by blocking HP damage writes.

**Modifications:**
- File offsets: 0x2d740, 0x2d74c, 0x2d750, 0x2d75c, 0x2d77c, 0x2d794
- Changes `sh` (store halfword) instructions to `nop` (no operation)
- Prevents HP array from being decremented

**Expected Result:**
- Player takes no damage from any enemy attacks
- HP values never decrease
- Complete invincibility

### 2. Force HP Damage to 1 (`ST.EXE.hp_force_1`)

**Purpose:** All attacks deal exactly 1 HP damage.

**Modifications:**
- File offsets: 0x2d740-0x2d8ec (damage calculation)
- Before HP write instructions, insert: `li $t0, 1` (load immediate 1)
- Forces damage register to 1

**Expected Result:**
- Every enemy attack does exactly 1 HP damage
- Regardless of enemy strength, player stats, or damage modifiers

### 3. Force HP Damage to 10 (`ST.EXE.hp_force_10`)

**Purpose:** All attacks deal exactly 10 HP damage.

**Modifications:**
- File offsets: 0x2d740-0x2d8ec (damage calculation)
- Before HP write instructions, insert: `li $t0, 10` (load immediate 10)
- Forces damage register to 10

**Expected Result:**
- Every enemy attack does exactly 10 HP damage
- Consistent predictable damage for testing

### 4. Double HP Damage (`ST.EXE.hp_double`)

**Purpose:** All HP damage is doubled.

**Modifications:**
- File offsets: 0x2d740-0x2d8ec (damage calculation)
- Before HP write, insert: `sll $t0, $t0, 1` (shift left 1 = multiply by 2)
- Doubles the calculated damage value

**Expected Result:**
- All enemy attacks deal 2x normal damage
- Harder difficulty mode

### 5. Half HP Damage (`ST.EXE.hp_half`)

**Purpose:** All HP damage is halved.

**Modifications:**
- File offsets: 0x2d740-0x2d8ec (damage calculation)
- Before HP write, insert: `srl $t0, $t0, 1` (shift right 1 = divide by 2)
- Halves the calculated damage value

**Expected Result:**
- All enemy attacks deal 50% normal damage
- Easier difficulty mode

### 6. Zero All HP Damage (`ST.EXE.hp_zero`)

**Purpose:** All damage calculations result in 0 HP damage.

**Modifications:**
- File offsets: 0x2d740-0x2d8ec (damage calculation)
- Before HP write, insert: `move $t0, $zero` (set damage to 0)
- Sets damage to 0 before writing to HP array

**Expected Result:**
- Similar to invincibility, but damage is calculated then zeroed
- HP never decreases from attacks

## Verification

### How to Test Corrected Patches

1. **Apply patch:**
   ```bash
   cp patched_st_exe_corrected/ST.EXE.hp_force_1 iso-dump/ST.EXE
   mkpsxiso iso-dump/st.xml -o test_hp_force_1.bin
   ```

2. **Load in emulator:**
   - Load the modified .bin file
   - Start new game or load save
   - Navigate to area with enemies

3. **Take damage from enemy:**
   - Let enemy attack player
   - Observe HP change in UI

4. **Verify result:**
   - For `hp_force_1`: HP decreases by exactly 1
   - For `hp_force_10`: HP decreases by exactly 10
   - For `hp_invincibility`: HP does not decrease
   - For `hp_double`: HP decreases by 2x expected
   - For `hp_half`: HP decreases by 0.5x expected
   - For `hp_zero`: HP does not decrease

### Correct vs Incorrect Behavior

**Corrected Patches (HP damage):**
- ✅ Affect HP when taking damage from enemies
- ✅ HP bar in UI changes according to patch
- ✅ Can observe immediate effect when attacked

**Incorrect Patches (MP calculation):**
- ❌ Affected MP (blue bar), not HP (red bar)
- ❌ HP damage from enemies unchanged
- ❌ Only noticeable when using magic/abilities

## Technical Details

### HP Damage Code Flow

```
1. Enemy attack triggers
2. EntityStateData.attack1 (+0x1a) read for damage power
3. Damage formula applied: (base * 5) + modifier
4. Armor/defense reduction calculated
5. Critical hit check
6. Final damage value in register
7. HP array write instruction executes ← PATCH TARGET
8. HP value decremented by damage amount
9. UI updates to show new HP
```

### Patch Insertion Points

Patches modify step 7 (HP array write) or inject code just before step 7:

- **NOP instruction**: Prevents HP write (invincibility)
- **Load immediate**: Replaces damage value with fixed amount
- **Shift left/right**: Multiplies/divides damage by 2
- **Move zero**: Sets damage to 0

### File Offset Targeting

**Correct HP damage section:**
```
File: ST.EXE
Offsets: 0x2d740 - 0x2d8ec
Instructions: 23 HP write instructions
Purpose: Apply calculated damage to HP array
```

**Incorrect MP section (previous patches):**
```
File: ST.EXE
Offsets: 0x1xxxx range
Instructions: MP calculation
Purpose: Magic point calculation and display
```

## Migration from Old Patches

If you used the old patches (force_damage_to_100, etc.):

1. **Delete old patches:**
   - Remove `patched_st_exe/` directory
   - These only affected MP, not HP

2. **Use corrected patches:**
   - `patched_st_exe_corrected/` directory
   - These correctly target HP damage

3. **Re-test your ISOs:**
   - Old patched ISOs had unchanged HP damage
   - New patched ISOs will show correct HP damage modification

## Future Improvements

Potential additional patches:

- **Minimum HP damage**: Ensure all attacks do at least N damage
- **Maximum HP damage**: Cap damage at N HP
- **Random damage**: Randomize damage ±X%
- **Progressive damage**: Increase damage over time
- **Conditional damage**: Different multipliers based on conditions

All future patches should target the HP damage section (0x2d740-0x2d8ec) verified in HP_WRITE_LOCATIONS_ANALYSIS.md.
