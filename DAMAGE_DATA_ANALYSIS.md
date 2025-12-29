# Damage Data Analysis - Shadow Tower

## Key Finding: HP/Damage Data Location

Based on analysis of the decompiled code, here are the key functions and addresses for tracking damage/effect data:

### Primary Damage Function

**Function:** `func_0x8003d784()` (Address: 0x8003d784)
- This is the main function that handles HP damage calculations
- **Location in fluid.c:** Line 10791

### Critical Damage Data Load

**Address:** `0x8003d7f8`
**Assembly Instruction:**
```assembly
8003d7f8:	288f2396 	lhu	v1,-28888(s1)
```

**What this does:**
- Loads a 16-bit unsigned value (halfword) from address offset -28888 relative to register s1
- This appears to be loading **max damage** or **damage cap** value
- The value is stored in register v1 (result2 in the C code)

### Memory Address Calculation

The base address is: `0x801a` << 16 = `0x801a0000`
Offset: `-28888` = `-0x70d8` 

**Actual runtime address:** `0x801a0000 - 0x70d8 = 0x80198f28`

This is where the **damage/HP data** is stored in memory.

### Related Functions

1. **func_0x8003d288()** (Address: 0x8003d288)
   - Called by func_0x8003d784 
   - Likely handles damage application/processing

2. **func_0x8003d284()** (Address: 0x8003d284)
   - Location in fluid.c: Line 10554
   - Appears to handle combat/effect calculations
   - Contains multiple references to the same base address (0x801a - 28888)

3. **func_0x8003d104()** (Address: 0x8003d104)
   - Called by func_0x8003d284
   - Helper function for damage/effect processing

### Code Context from func_0x8003d784

```c
// At address 0x8003d7f8
result2 = *(uint16_t*)(saved1 + -28888);  // Load damage data
result = saved4 & 0xffff;                  // Mask to 16 bits
// Check if damage exceeds max
// If so, cap it to the loaded max value
*(int16_t*)(saved0 + 2) = result2;
```

The pattern shows:
1. Load max damage value from `0x80198f28`
2. Compare actual damage to max
3. Cap damage if it exceeds the maximum

### Key Data Structure Offsets

Based on the code, the structure at base address `0x801a - 28888` contains:

- **Offset +2:** Current HP/damage value
- **Offset +30:** Some kind of damage modifier
- **Offset +88:** Status or flag value  
- **Offset +393:** State flag
- **Offset +536:** Another state byte
- **Offset +537-538:** Damage accumulator bytes
- **Offset +584-596:** Position/vector data (X, Y, Z coordinates)
- **Offset +756:** Damage calculation temporary storage

## Debugging Tips

### Setting Breakpoints

To track damage in a debugger:

1. **Set breakpoint at:** `0x8003d7f8`
   - This will catch when max damage is being loaded
   - Check register `s1` to see the base address
   - Check register `v1` (result) after the instruction to see the loaded value

2. **Set breakpoint at:** `0x8003d7f4`  
   - Just before damage is written
   - Check register `s4` to see the calculated damage value

3. **Set breakpoint at:** `0x8003d810`
   - After damage clamping
   - Final damage value will be in register `v1`

### Memory Watches

Add these memory watches:
- `0x80198f28` (uint16) - Max damage value
- `0x80198f2a` (uint16) - Next damage-related value
- `[s0 + 2]` when in func_0x8003d784 - Current damage being processed

### Function Call Chain

```
? (caller)
  └─> func_0x8003d784 (0x8003d784) - Main damage handler
        ├─> func_0x8003d288 (0x8003d288) - Damage processor
        ├─> func_0x8004a390 (various) - Math/calculation helpers
        └─> func_0x80057a68 (various) - Additional processing
```

## Data Flow

1. **Damage calculation** starts in calling function
2. **func_0x8003d784** receives:
   - arg0 (a0): Damage amount
   - arg2 (a2): Target/context pointer
   
3. **Damage is compared** against max value loaded from `0x80198f28`

4. **Result is clamped** and stored back

5. **Further processing** applies the damage to the entity

## Binary File Reference

The damage data appears to be in the `hp_damage.mips` file (65KB) in the repository root.

This likely contains the damage tables and related data that gets loaded at runtime to address `0x80198f28`.
