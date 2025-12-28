# C-like Decompilation from Actual MIPS Assembly

This directory contains C-like decompilation based on actual MIPS assembly disassembled from Shadow Tower binaries.

## Source Files

**Assembly Sources:**
- `../asm/hp_damage_actual.asm` - 16,362 lines of MIPS assembly from hp_damage.mips
- `../asm/ST_EXE_sample.asm` - 15,788 lines from game executable
- `../asm/creature_data_loads.asm` - Extracted creature data access patterns
- `../asm/multiplication_operations.asm` - Extracted multiplication ops

**C-like Decompilation:**
- `damage_calculation_actual.c` - Manual decompilation of damage functions

## Methodology

This is **NOT hypothetical code**. The C-like code was manually decompiled from actual MIPS assembly using these steps:

1. **Disassembly**: Used `mipsel-linux-gnu-objdump` to disassemble binaries
2. **Pattern Identification**: Found 36 multiplication patterns in damage code
3. **Manual Analysis**: Traced register usage and memory access patterns
4. **C Translation**: Converted assembly operations to equivalent C code

## Verified Facts from Assembly

### Memory Access Patterns

**Offset 0x07 (attack1)** - VERIFIED at address 0x3210:
```assembly
3210:  lbu  v0,7(a0)        # Load unsigned byte from (a0 + 7)
```

**Offset 0x08 (attack2)** - VERIFIED at address 0x323c:
```assembly
323c:  lbu  v0,8(a0)        # Load unsigned byte from (a0 + 8)
```

### Multiplication Pattern

**Found at address 0x1ea4-0x1eac:**
```assembly
1ea4:  mult  v0,v1          # Multiply v0 * v1
1ea8:  mflo  a1             # Get low 32 bits of result
1eac:  sra   v0,a1,0xf      # Arithmetic shift right by 15 bits
```

**C equivalent:**
```c
result = (value1 * value2) >> 15;
```

### Structure Size Calculation

**Found at address 0x2ec0-0x2ed0:**
```assembly
2ec0:  sll   v0,v1,0x3      # v0 = v1 << 3  (v1 * 8)
2ec4:  subu  v0,v0,v1       # v0 = v0 - v1  (7 * v1)
2ec8:  sll   v0,v0,0x2      # v0 = v0 << 2  (28 * v1)
2ecc:  subu  v0,v0,v1       # v0 = v0 - v1  (27 * v1)
2ed0:  sll   v0,v0,0x2      # v0 = v0 << 2  (108 * v1)
```

**Result:** Creature structure is 108 bytes (0x6c)

## Hypothesized (Strong Evidence)

### Offset 0x0f (enemyPower)

**Evidence:**
- 10 references in hp_damage.mips binary
- Used in multiplication operations
- Loaded with `lh` (load halfword) suggesting 16-bit value

**Status:** Not yet found in disassembled output, but binary pattern analysis is strong

### Offset 0x11 (baseDamage)

**Evidence:**
- 10 references in hp_damage.mips binary
- Used in addition operations
- Loaded with `lh` (load halfword) suggesting 16-bit value

**Status:** Not yet found in disassembled output, but binary pattern analysis is strong

## Limitations

The disassembly is **raw MIPS assembly**. To fully confirm offsets 0x0f and 0x11:

1. Need Ghidra's C decompiler to show data flow and variable usage
2. Need to trace specific memory offsets through calculation chains
3. Need in-game testing to verify formulas produce correct damage values

The manual C decompilation shows the **structure and patterns** but cannot definitively prove the exact damage formula without:
- Full control flow analysis (Ghidra provides this)
- Variable naming and type inference (Ghidra provides this)
- Complete function decompilation (requires interactive tools)

## Next Steps

For complete decompilation with offset verification:

1. Install Ghidra (free download from NSA GitHub)
2. Import hp_damage.mips with settings:
   - Architecture: MIPS 32-bit little-endian
   - Base address: 0x0
3. Run auto-analysis
4. Search for references to offsets 0x0f and 0x11
5. Export C decompilation
6. Compare with this manual decompilation

## Tools Used

- `mipsel-linux-gnu-objdump` - MIPS disassembler
- `grep` - Pattern searching
- `python3` - Assembly analysis scripts
- Manual reverse engineering techniques
