# Damage Zero Patch Test Plan

## Purpose

These patches prove the HP damage calculation data flow by zeroing damage at different stages.

## Patches Created

### 1. st_exe_patch_zero_attack_power_reads.txt
**What it does:** Zeros EntityStateData.attack1 reads at offset 0x1a  
**Expected result:** All attacks do 0 damage  
**Proves:** Attack power comes from EntityStateData offset 0x1a

### 2. st_exe_patch_zero_multiply_by_5.txt
**What it does:** Zeros the damage * 5 calculation  
**Expected result:** Damage is drastically reduced (only modifier remains)  
**Proves:** Formula includes (damage * 5) component

### 3. st_exe_patch_zero_final_damage_write.txt
**What it does:** Writes 0 instead of calculated damage to HP array  
**Expected result:** Player is invincible (no HP loss)  
**Proves:** HP is stored at PlayerState+0x19c (the original instruction!)

### 4. st_exe_patch_force_damage_to_one.txt
**What it does:** Forces all damage to be exactly 1 HP  
**Expected result:** Every attack does exactly 1 damage  
**Proves:** Data flows from calculation to HP write

## How to Test

1. **Backup original ST.EXE:**
   ```bash
   cp iso-dump/ST.EXE iso-dump/ST.EXE.backup
   ```

2. **Apply a patch:**
   Use a hex editor to apply bytes from patch file to ST.EXE at specified offsets

3. **Rebuild ISO:**
   ```bash
   mkpsxiso iso-dump/st.xml -o test_damage_zero.bin
   ```

4. **Test in emulator:**
   - Start game
   - Get attacked by slime (spray magic)
   - Observe damage value

5. **Expected Results:**

   | Patch | Slime Spray Result |
   |-------|-------------------|
   | None (original) | Normal damage (e.g., 15-30 HP) |
   | zero_attack_power_reads | 0 damage |
   | zero_multiply_by_5 | Very low damage (1-5 HP) |
   | zero_final_damage_write | 0 damage (HP doesn't decrease) |
   | force_damage_to_one | Exactly 1 HP damage |

## Interpretation

- **If zero_attack_power_reads → 0 damage:**  
  Confirms attack power comes from EntityStateData offset 0x1a

- **If zero_multiply_by_5 → reduced damage:**  
  Confirms formula is (damage * 5) + modifier

- **If zero_final_damage_write → invincibility:**  
  Confirms HP write location at 0x8003d7f8 (PlayerState+0x19c)

- **If force_damage_to_one → 1 HP damage:**  
  Confirms complete data flow path

## Conclusion

These patches allow empirical verification of the damage calculation data flow without requiring full reverse engineering of EntityStateData generation.

## Notes

- Patches target ST.EXE file offsets, not runtime addresses
- Runtime addresses are provided for reference
- Apply only ONE patch at a time for clear results
- Always test with same enemy (acid slime) for consistency
