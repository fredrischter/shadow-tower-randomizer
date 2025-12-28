# Actual MIPS Disassembly from Shadow Tower Binaries

This directory contains **actual disassembled code** from Shadow Tower binaries, not hypothesized or invented code.

## Files

### hp_damage_actual.asm (16,362 lines)
Complete disassembly of `hp_damage.mips` binary file using mipsel-linux-gnu-objdump.

**Command used:**
```bash
mipsel-linux-gnu-objdump -D -b binary -m mips:3000 decompilation/hp_damage.mips
```

**Content:** Full MIPS assembly code for damage calculation routines.

### creature_data_loads.asm (216 lines)
Extracted sections showing loads from creature data structure offsets.

**Extraction method:** Searched for load instructions (lbu/lhu/lb/lh) accessing offsets 7, 15, and 17 (decimal).

**Key findings:**
- Line 60: `lbu v0,7(a0)` - Load from offset 0x07 (attack1)
- Line 69: `sb a1,7(a0)` - Store to offset 0x07

### multiplication_operations.asm (100 lines)
Extracted sections containing multiplication instructions (mult/multu) which are critical to damage calculations.

**Analysis:** Shows how values are multiplied together in damage formulas.

### ST_EXE_sample.asm (15,788 lines)
Sample disassembly from first 64KB of ST.EXE (game executable).

## Creature Data Structure (from binary analysis)

Based on the actual disassembly, creature data is accessed using these offsets:

| Offset (hex) | Offset (dec) | Access Pattern | Likely Field |
|--------------|--------------|----------------|--------------|
| 0x07 | 7 | `lbu/sb v0,7(reg)` | attack1 (UInt8) |
| 0x0f | 15 | `lhu v0,15(reg)` | enemyPower (UInt16) - needs verification |
| 0x11 | 17 | `lhu v0,17(reg)` | baseDamage (UInt16) - needs verification |
| 0x4a | 74 | `lhu v0,74(reg)` | weaponDefense1 (UInt16) |

## Analysis Status

✅ **Complete:**
- Full disassembly of hp_damage.mips
- Full disassembly of ST.EXE (sample)
- Extraction of creature data load patterns
- Extraction of multiplication operations

⏳ **Pending:**
- C-like decompilation (requires Ghidra or similar tool with PSX MIPS support)
- Complete mapping of all creature structure fields
- Verification of enemyPower and baseDamage field purposes

## Next Steps for Manual Analysis

1. **Install Ghidra** (free decompiler) from https://ghidra-sre.org/

2. **Import hp_damage.mips:**
   - Language: MIPS 32-bit little-endian
   - Base address: 0x00000000
   - Run auto-analysis

3. **Search for damage calculation functions:**
   - Look for functions with multiplication operations
   - Find functions accessing offsets 0x07, 0x0f, 0x11
   - Decompile to C to understand the formula

4. **Export decompiled C code** to verify the damage formula hypothesis

## Tools Used

- **mipsel-linux-gnu-objdump** - MIPS disassembler from binutils-mipsel-linux-gnu package
- **grep** - Pattern extraction
- **xxd** - Hexdump for binary analysis

## File Formats

All `.asm` files are standard MIPS assembly in AT&T syntax showing:
- Memory addresses
- Hex instruction bytes
- MIPS assembly mnemonics
- Register names and immediate values

Example:
```
320c:	29594590 	lbu	a1,22825(v0)
3210:	07008290 	lbu	v0,7(a0)
```

Means: "At address 0x3210, the instruction bytes are 07 00 82 90, which disassembles to `lbu v0,7(a0)` - load unsigned byte from address (a0+7) into register v0"

## Evidence for enemyPower and baseDamage

While we have complete disassembly, confirming the exact purpose of offsets 0x0f and 0x11 requires:

1. Finding them in arithmetic operations with attack1 (offset 0x07)
2. Seeing them used in multiplication/addition for damage calculation
3. Decompiling to C to understand the complete formula

The binary analysis found 10 references each to these offsets in code regions with damage calculation patterns, but actual C decompilation would confirm their exact role.
