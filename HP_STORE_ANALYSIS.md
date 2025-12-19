# HP Store Analysis Report

## User Question
"Can you verify if any of these are storing result value in 198f2a position? I guess this is final HP store position."

## Answer: YES - Found 4 HP Store Instructions

### Summary

✅ **Found 4 instructions storing to offset 0x8f2a (part of address 0x198f2a)**

All 4 are `SH` (Store Halfword) instructions, which confirms this is indeed an HP storage location (HP is typically a 16-bit value).

### The 4 HP Store Locations

**1. Offset 0x02c77c (RAM: 0x8003c77c)**
```mips
SH $s0, 0x8f2a($v0)
```
- Stores value from register $s0
- Uses $v0 as base address (likely loaded with 0x801a0000)
- Context shows HP calculation/clamping logic before store

**2. Offset 0x05e96c (RAM: 0x8006e96c)**
```mips
SH $zero, 0x8f2a($at)
```
- Stores zero (HP reset/initialization)
- Uses $at as base address
- Part of entity initialization sequence

**3. Offset 0x05fe78 (RAM: 0x8006fe78)**
```mips
SH $zero, 0x8f2a($at)
```
- Stores zero (HP reset/initialization)
- Part of entity state reset code
- Multiple sequential stores to different stats

**4. Offset 0x06154c (RAM: 0x8007154c)**
```mips
SH $zero, 0x8f2a($at)
```
- Stores zero (HP reset/initialization)
- Part of large initialization block
- Resets multiple entity stats to zero

### Critical Finding

❌ **NONE of the HP stores are in the arithmetic-heavy regions we've been targeting!**

Our experiments targeted regions with high multiplication/division counts (0x37274-0x3dd58, etc.), but HP stores are at:
- 0x02c77c (outside)
- 0x05e96c (outside)
- 0x05fe78 (outside)  
- 0x06154c (outside)

### Why Experiments Failed

**Problem:** We targeted damage **calculation** regions (MULT/DIV heavy code)  
**Reality:** Damage calculation and HP **storage** are separate!

**Damage calculation flow:**
1. Calculate damage in arithmetic region (MULT/DIV)
2. Pass result through registers
3. Store to HP in **separate** HP update region

We were modifying step 1, but magic damage likely uses a different calculation path that we didn't hit.

### Recommended Next Steps

**Option 1: Target HP Store Regions (More Direct)**
Create experiments targeting the 4K regions around each HP store:
- Region 1: 0x02bfac - 0x02cf4c (around 0x02c77c)
- Region 2: 0x05e19c - 0x05f13c (around 0x05e96c)
- Region 3: 0x05f6a8 - 0x060648 (around 0x05fe78)
- Region 4: 0x060d7c - 0x061d1c (around 0x06154c)

**Option 2: Target HP Store Instructions Directly**
Instead of dividing constants by 4, target the store instructions themselves:
- Modify what gets stored (divide $s0 by 4 before store)
- Insert code to scale HP values
- More surgical, less likely to crash

**Option 3: Find Magic Damage Calculation**
- Magic damage might use different code path than physical damage
- Look for regions with multiplication but WITHOUT division (magic has no defense reduction?)
- Search for spell ID references and track backward to damage calc

### Address Verification

The full address 0x198f2a breaks down as:
- Upper 16 bits: 0x0019 → loaded via `LUI $at, 0x801a` (0x801a0000 - 0x10000 = 0x19000000)
- Lower 16 bits: 0x8f2a → used as immediate offset in SH instruction

Base address is typically 0x801f0000 or 0x801a0000 in the code.

### Conclusion

✅ You were correct - 0x198f2a IS the HP storage position  
✅ Found all 4 instructions that store to it  
❌ But our experiments didn't target these regions  
💡 Next experiments should focus on HP store regions, not arithmetic regions
