# ST.EXE Runtime Disassembly (0x80030000 - 0x80040000)

## Overview

Complete MIPS disassembly of ST.EXE covering runtime addresses 0x80030000 to 0x80040000 (65,536 bytes).

## File Information

**File:** `ST_EXE_0x80030000_to_0x80040000.asm`  
**Lines:** 16,358  
**Coverage:** 65,536 bytes (0x10000 bytes)  
**Runtime Range:** 0x80030000 - 0x80040000  
**File Offset Range:** 0x20800 - 0x30800 (accounting for 0x800 byte PSX header)

## Address Mapping

### PSX Executable Format

PSX .EXE files have a 0x800 byte header before the code begins. This must be accounted for in address mapping.

```
Runtime Address = (File Offset - 0x800) + 0x80010000
File Offset = (Runtime Address - 0x80010000) + 0x800

VMA Adjustment: 0x8000f800 (= 0x80010000 - 0x800)

Examples:
  Runtime 0x80030000 → File 0x20800 (0x20000 + 0x800)
  Runtime 0x8003d430 → File 0x2d430 + 0x800 = 0x2dc30
  Runtime 0x8003c7f8 → File 0x2cff8 (verified: lhu v1,-28888(s1))
  Runtime 0x80040000 → File 0x30800 (0x30000 + 0x800)
```

## Key Locations in This Region

### Magic Damage Function (0x8003d430)

**Runtime:** 0x8003d430 - 0x8003d7f8 (~968 bytes)  
**File Offset:** 0x2d430 - 0x2d7f8  
**Line in disassembly:** ~13,562  

This is the HP damage calculation function that was successfully patched in ST.EXE.full_nop_1. When the first 256 bytes were NOPed, magic damage was set to 1.

**First instruction at 0x8003d430:**
```mips
8003d430:  2000b0af  sw  s0,32(sp)
```

This is the expected MIPS function prologue (saving $s0 register to stack at offset 32).

### Other Notable Regions

This 64KB region contains critical game code including:
- Combat calculations
- Damage formulas
- Character state management
- Equipment handling

## Usage for Runtime Debugging

When debugging Shadow Tower at runtime:

1. **Find your breakpoint runtime address** (e.g., 0x8003d500)
2. **Search in this file:** `grep "8003d500" ST_EXE_0x80030000_to_0x80040000.asm`
3. **Context around address:** `grep -A 10 -B 10 "8003d500" ST_EXE_0x80030000_to_0x80040000.asm`

## Disassembly Generation

**Command used:**
```bash
mipsel-linux-gnu-objdump -D -b binary -m mips:3000 \
  --adjust-vma=0x8000f800 \
  --start-address=0x80030000 \
  --stop-address=0x80040000 \
  decompilation/ST.EXE > ST_EXE_0x80030000_to_0x80040000.asm
```

**Parameters:**
- `-D` - Disassemble all sections
- `-b binary` - Treat as raw binary
- `-m mips:3000` - MIPS R3000 architecture (PSX CPU)
- `--adjust-vma=0x8000f800` - Adjust VMA accounting for 0x800 byte PSX header (0x80010000 - 0x800)
- `--start-address` / `--stop-address` - Runtime address range to disassemble

**Why 0x8000f800?**
- PSX .EXE has 0x800 byte header
- Code starts at file offset 0x800, not 0x0
- Runtime 0x80030000 corresponds to file offset 0x20800
- VMA = Runtime - (File Offset - Header) = 0x80030000 - 0x20000 = 0x80010000 - 0x800 = 0x8000f800

## Finding Specific Patterns

### Load Creature Data (offset 0x0f, 0x11)

Search for load halfword unsigned instructions:
```bash
grep "lhu.*,15(" ST_EXE_0x80030000_to_0x80040000.asm  # offset 0x0f
grep "lhu.*,17(" ST_EXE_0x80030000_to_0x80040000.asm  # offset 0x11
```

### Multiplication Operations

```bash
grep "mult\|multu" ST_EXE_0x80030000_to_0x80040000.asm
```

### Function Entry Points

Look for typical MIPS function prologues:
```bash
grep "addiu.*sp,sp,-" ST_EXE_0x80030000_to_0x80040000.asm
```

## Related Files

- **ST_EXE_sample.asm** - First 64KB of ST.EXE (runtime 0x80010000-0x80020000)
- **st_exe_0x2d430_to_0x2d530_original.asm** - First 256 bytes of magic damage function
- **hp_damage_actual.asm** - Disassembly of hp_damage.mips file

## Next Steps for Analysis

1. **Locate creature data loads**
   - Search for `lhu` instructions with offsets 0x07, 0x08, 0x09, 0x0f, 0x11
   - Focus on region around 0x8003d430 (magic damage function)

2. **Trace damage formula**
   - Find multiplication operations near creature data loads
   - Identify addition/subtraction for base damage calculations
   - Look for shift operations (damage scaling)

3. **Verify against hp_damage.mips**
   - Compare patterns found here with hp_damage_actual.asm
   - Confirm if hp_damage.mips is the same code or different

4. **Create targeted patches**
   - Once formula is understood, create patches to:
     - Multiply damage by 2
     - Divide damage by 2
     - Set to fixed values
     - Modify specific components

## Status

✅ **Complete disassembly generated** (16,358 lines)  
✅ **Runtime address mapping verified**  
✅ **Magic damage function location confirmed** (line ~13,562)  
⏳ **Awaiting runtime debugging results** from user  
⏳ **Creature data offset analysis** pending breakpoint locations  

---

**Generated:** 2025-12-28  
**Purpose:** Runtime debugging support for Shadow Tower damage calculation analysis  
**For:** Identifying enemyPower (0x0f) and baseDamage (0x11) usage in actual code
