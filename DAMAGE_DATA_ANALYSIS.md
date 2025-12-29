# Damage Data Analysis - Shadow Tower

## UPDATE: Spell/Magic Damage Source Found

Based on user debugging feedback and further analysis, here's the complete damage flow from source to application.

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

## Spell/Magic Damage Calculation Source

### Function: `func_0x8003e0a0()` - Spell Damage Calculator
**Address:** 0x8003e0a0
**Location in fluid.c:** ~Line 11200-11400

This is the **source** function where spell/magic damage is calculated BEFORE being passed to the damage application function.

### How Spell Damage is Calculated

**Key Assembly Instructions (0x8003e488 - 0x8003e5b0):**

1. **Load Base Damage Values** (0x8003e488, 0x8003e4f4, 0x8003e4f8):
```assembly
8003e488:  lhu  v0,0(s1)       # Load damage component 1 from array pointed by s1
8003e4f4:  lhu  v0,0(s3)       # Load damage component 2 from array pointed by s3  
8003e4f8:  lhu  v1,0(s4)       # Load damage component 3 from array pointed by s4
```

These are loading **spell base damage values** from arrays. The registers s1, s3, s4 point to different damage component tables.

2. **Damage Calculation Loop** (0x8003e3f8 - 0x8003e57c):
The function loops 6 times (checking `slti v0,a2,6` at 0x8003e588), calculating damage for different spell elements/types.

3. **Formula Applied** (0x8003e430 - 0x8003e460):
```assembly
# Complex damage formula involving:
# - Base damage values from arrays (s1, s3, s4)
# - Distance modifier (650 - value)
# - Multiplication and division operations
# Result accumulated in s5 and s6
```

4. **Final Damage Calculation** (0x8003e594 - 0x8003e5b0):
```assembly
8003e594:  addu  v1,s6,s5         # Add accumulated damage components
8003e598:  andi  v0,s8,0xffff      # Get multiplier from s8
8003e59c:  mult  v1,v0             # Multiply total by spell power multiplier
8003e5a4:  lw    a2,84(sp)         # Load target pointer
8003e5a8:  mflo  t5                # Get multiplication result
8003e5ac:  jal   0x8003d788        # Call damage application function
8003e5b0:  sra   a0,t5,0xc         # Shift result right 12 bits = arg0 (damage value)
```

**The damage value passed to the application function is:** `(accumulated_damage * spell_power) >> 12`

### Data Structure Pointers

The spell damage components are loaded from memory arrays. To find the **source data addresses**, set breakpoints and check these registers:

**During spell damage calculation (func_0x8003e0a0):**
- **s1 register** - Points to damage component array 1
- **s3 register** - Points to damage component array 2  
- **s4 register** - Points to damage component array 3
- **s8 register** - Contains spell power multiplier
- **s5, s6 registers** - Accumulated damage values

### Complete Damage Flow

```
Spell Cast
  ↓
func_0x8003e0a0 (0x8003e0a0) - DAMAGE SOURCE
  │ 
  ├─ Loads base damage from arrays at [s1], [s3], [s4]
  ├─ Applies distance/range modifiers  
  ├─ Loops through 6 damage components
  ├─ Multiplies by spell power (s8)
  ├─ Shifts result >> 12 to get final damage
  │
  └─> Calls func_0x8003d788 (0x8003d788) with calculated damage
        ↓
      func_0x8003d784 (0x8003d784) - DAMAGE APPLICATION
        │
        ├─ Loads damage cap from 0x80198f28
        ├─ Compares calculated damage to cap
        └─ Applies final damage (clamped to max)
```

## Debugging Spell Damage Source

### Breakpoints for Spell Damage Origin

1. **Set breakpoint at:** `0x8003e0a0`
   - Entry point of spell damage calculation
   - Check what values are in memory arrays

2. **Set breakpoint at:** `0x8003e488`  
   - First damage component load
   - Check register **s1** to see array address
   - Check **v0** after instruction to see loaded value

3. **Set breakpoint at:** `0x8003e4f4`
   - Second damage component load  
   - Check register **s3** to see array address
   - Check **v0** after instruction to see loaded value

4. **Set breakpoint at:** `0x8003e4f8`
   - Third damage component load
   - Check register **s4** to see array address  
   - Check **v1** after instruction to see loaded value

5. **Set breakpoint at:** `0x8003e5b0`
   - Final damage value before calling application function
   - Check register **a0** for the calculated damage value
   - Check register **t5** for pre-shift value

### Memory Watches for Spell Damage

When debugging, watch these locations:
- **[s1]** - Spell damage component 1 array
- **[s3]** - Spell damage component 2 array  
- **[s4]** - Spell damage component 3 array
- **s8 register** - Spell power multiplier
- **s5 register** - Accumulated damage part 1
- **s6 register** - Accumulated damage part 2

## Binary File Reference

The damage data appears to be in the `hp_damage.mips` file (65KB) in the repository root.

This likely contains the damage tables and related data that gets loaded at runtime to address `0x80198f28` and the spell damage component arrays.
