# Magic Damage Backward Tracing Analysis

## Overview

This document traces backwards from the HP storage instruction at **0x02c77c** to find where magic damage values originate. The goal is to identify the magic damage calculation region so we can modify it to reduce magic damage to 1/4.

## The Problem

We successfully identified the HP storage location (0x198f2a at offset 0x8f2a), but modifying code around this store affects **ALL damage types** (physical, magic, poison, etc.). To specifically target **magic damage**, we need to find where magic damage is **calculated** before it reaches the HP store.

## Backward Tracing Strategy

### Step 1: HP Store Function (FINAL STEP)

**Location:** 0x02c728 - 0x02c78c  
**Purpose:** Apply damage to HP (all damage types converge here)

```c
void apply_damage_to_hp(int16_t damage_value) {  // $a0 parameter
    uint16_t current_hp = load_hp();              // 0x8f2a
    int16_t new_hp = current_hp + damage_value;   // ADDU at 0x2c744
    
    if (new_hp <= 0) new_hp = 0;                  // Death
    if (new_hp >= max_hp) new_hp = max_hp;        // Clamp
    
    store_hp(new_hp);                             // SH at 0x2c77c ← TARGET
}
```

**Key observation:** This function receives `damage_value` in $a0 register. We need to find WHO calls this function and HOW they calculate $a0.

### Step 2: Damage Calculation (BEFORE HP STORE)

The `damage_value` parameter must come from somewhere. There are separate calculation paths:

```
Physical Damage Path:
  Load attacker stats → Calculate base damage (MULT/DIV at 0x37274-0x3dd58) →
  Apply defense reduction → Final damage_value → apply_damage_to_hp($a0)

Magic Damage Path:
  Load spell parameters → Calculate magic damage (MULT/DIV at ???) →
  Apply element multipliers → Apply defense → Final damage_value → apply_damage_to_hp($a0)
```

**The question:** Where is the magic damage MULT/DIV region?

### Step 3: Candidate Arithmetic Regions

Using the `trace_magic_damage.js` script, we found arithmetic-heavy regions ranked by MULT/DIV instruction count:

| Region   | MULT | DIV | Total | Notes                          |
|----------|------|-----|-------|--------------------------------|
| 0x36000  | 43   | 0   | 43    | ⭐ TOP CANDIDATE for magic     |
| 0x07000  | 40   | 0   | 40    | Alternative magic candidate    |
| 0x37000  | 40   | 0   | 40    | PHYSICAL DAMAGE (confirmed)    |
| 0x3a000  | 31   | 2   | 33    | PHYSICAL DAMAGE (confirmed)    |
| 0x22000  | 24   | 0   | 24    | Possible magic/element system  |
| 0x3b000  | 20   | 3   | 23    | PHYSICAL DAMAGE (confirmed)    |
| 0x2d000  | 16   | 0   | 16    | Possible utility/conversion    |

**Analysis:**
- **Region 0x37000-0x3e000:** Physical damage (we already identified this in earlier analysis)
- **Region 0x36000:** Immediately adjacent to physical damage but NOT part of it - **most likely magic damage**
- **Region 0x07000:** Far from physical damage, high arithmetic - could be magic or elemental system
- **Region 0x22000:** Moderate arithmetic - possible element multipliers or magic calculations

## Characteristics to Look For

### Magic Damage Code Should Have:

1. **MP (Magic Points) Access**
   ```mips
   LHU $v0, 0x8f2c($base)    # Load MP (offset near HP at 0x8f2a)
   SUBU $v0, $v0, $a0        # Subtract MP cost
   SH $v0, 0x8f2c($base)     # Store reduced MP
   ```

2. **Element Multiplier Tables**
   ```c
   const uint16_t element_multipliers[] = {
       100,  // Normal
       150,  // Fire effective
       50,   // Fire resistant
       200,  // Fire weak
       // etc...
   };
   ```

3. **Spell Power Calculation**
   ```mips
   LHU $v0, spell_power      # Load spell base damage
   LHU $v1, caster_intel     # Load caster intelligence stat
   MULT $v0, $v1             # Multiply base * intelligence
   MFLO $a0                  # Get result
   SRL $a0, $a0, 8           # Divide by 256 (scaling)
   ```

4. **Distance/Range Modifiers**
   ```c
   if (distance > max_range) damage = 0;
   else damage = base_damage * (max_range - distance) / max_range;
   ```

5. **Element Type Checks**
   ```mips
   LBU $v0, spell_element    # Load element type (0-7)
   LBU $v1, enemy_resist     # Load enemy resistance
   SLL $v0, $v0, 1           # Element * 2 (halfword index)
   ADDU $v0, $base, $v0      # Add to table base
   LHU $v0, 0($v0)           # Load multiplier from table
   MULT $a0, $v0             # Apply multiplier
   ```

## Search Methodology

### Method 1: Search for MP Memory Accesses

```bash
# Run trace_magic_damage.js to find MP offset accesses
node trace_magic_damage.js

# Look for SH/LHU instructions accessing 0x8f2c-0x8f30
# These would be MP cost deductions or magic stat loads
```

### Method 2: Examine Region 0x36000

Since 0x36000 is adjacent to physical damage (0x37000) but distinct, examine it first:

```bash
# Disassemble region 0x36000 - 0x37000 (4KB before physical damage)
node disassemble_mips.js | grep "0x36" | head -100
```

Look for patterns like:
- MULT followed by MFLO (damage calculation)
- LHU from magic-specific offsets
- Element multiplier tables (arrays of constants)

### Method 3: Find JAL to HP Store Function

Search for who calls `apply_damage_to_hp` at 0x2c728:

```bash
# Search for JAL 0x2c728
# Examine code before each JAL to see how $a0 is prepared
```

If physical damage JAL comes from 0x37xxx region, magic damage JAL should come from different region (0x36xxx?).

### Method 4: Look for Spell/Magic Constants

Magic systems often have:
- Spell ID tables (0-50 spell types)
- MP cost arrays (each spell has MP cost)
- Base damage arrays (each spell has base damage)
- Element type arrays (each spell has element)

Search for:
```mips
LUI $v0, 0x801a           # Load base address
ADDIU $v0, $v0, spell_table_offset
LBU $v1, spell_id         # Get spell ID (0-50)
ADDU $v0, $v0, $v1        # Index into table
LBU $a0, 0($v0)           # Load spell data
```

## Recommended Experiments Based on Findings

### Experiment Set A: Region 0x36000 (TOP PRIORITY)

Target 8KB around 0x36000 with different granularity:

- **Exp 1-3:** Broad coverage (0x35000-0x37000)
- **Exp 4-6:** Narrow center (0x35800-0x36800)
- **Exp 7:** Very narrow (0x35f00-0x36100)

### Experiment Set B: Region 0x07000

If 0x36000 doesn't work, try 0x07000:

- **Exp 8-10:** Broad coverage (0x06000-0x08000)
- **Exp 11-13:** Narrow center (0x06800-0x07800)

### Experiment Set C: Region 0x22000

Alternative magic candidate:

- **Exp 14-16:** Broad coverage (0x21000-0x23000)
- **Exp 17-19:** Narrow center (0x21800-0x22800)

### Experiment 20: HP Store Region (Control)

Keep one experiment targeting HP store region (0x2c000) as control - this should affect ALL damage types if successful.

## Expected Results

### If Magic Damage Region Found:

✅ Magic attacks deal ~25% damage (1/4)  
✅ Physical attacks deal 100% damage (unchanged)  
✅ Game loads normally  
✅ Can narrow down to specific functions

### If Wrong Region:

❌ No effect on magic damage  
OR  
❌ Game crashes (modified critical code)  
OR  
⚠️ Both magic AND physical reduced (hit shared code)

## Flow Diagram

```
User Casts Magic Spell
    ↓
Load Spell Parameters (ID, element, MP cost)
    ↓
Check MP >= Cost (if not, fail)
    ↓
Calculate Base Magic Damage ← REGION 0x36000? (MULT/DIV here)
    |
    ├─ Load spell base damage
    ├─ MULT by caster intelligence
    ├─ MULT by element multiplier
    ├─ DIV by distance factor
    └─ SUBU enemy magic defense
    ↓
Deduct MP Cost (SH to offset 0x8f2c?)
    ↓
Prepare damage_value in $a0
    ↓
JAL apply_damage_to_hp (0x2c728)
    ↓
HP Store Function (0x2c728-0x2c78c)
    |
    ├─ ADDU new_hp = current_hp + damage_value (0x2c744)
    ├─ Clamp to [0, max_hp]
    └─ SH new_hp to 0x8f2a (0x2c77c) ← FINAL HP STORE
```

## Key Insights

1. **HP Store is Common Final Path**
   - All damage types (physical, magic, poison) converge at 0x2c77c
   - Modifying HP store affects EVERYTHING
   - To target magic specifically, must find magic calculation region

2. **Physical Damage Region Known**
   - Region 0x37274-0x3dd58 (198 MULT/DIV ops)
   - This is NOT magic damage

3. **Magic Damage Region Unknown**
   - Top candidate: Region 0x36000 (43 MULT ops, adjacent to physical)
   - Alternative: Region 0x07000 (40 MULT ops, far from physical)
   - Third option: Region 0x22000 (24 MULT ops, moderate activity)

4. **Why Region 0x36000 is Most Likely**
   - High arithmetic density (43 MULT operations)
   - Immediately before physical damage region (logical code organization)
   - Same magnitude as physical damage (40 MULT ops)
   - Not overlapping with physical damage region

## Next Steps

1. **Generate new experiments targeting Region 0x36000** ⭐
2. Test in emulator to verify magic damage reduction
3. If successful, narrow down to specific functions
4. If unsuccessful, try Regions 0x07000 and 0x22000
5. Document findings and update experiment strategy

## Conclusion

We have successfully traced backwards from HP storage (0x2c77c) and identified the most likely magic damage calculation region (0x36000). The next experiments should target this region with various granularities to confirm and narrow down the exact location of magic damage code.

The backward tracing reveals that magic damage calculation is separate from physical damage but both eventually call the same HP storage function. To reduce ONLY magic damage, we must modify the magic calculation region, not the HP storage function.
