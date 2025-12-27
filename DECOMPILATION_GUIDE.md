# ST.EXE Decompilation Tools

This directory contains tools and documentation for analyzing and decompiling the Shadow Tower PlayStation executable (ST.EXE).

## Files

### HP_DECOMPILATION_ANALYSIS.md
Complete analysis of the HP initialization function, including:
- Runtime instruction at `0x8003d7f8` that modifies HP value
- Full MIPS assembly disassembly
- C code decompilation (both literal and optimized versions)
- PlayerState structure definition
- HP array layout documentation

### disassemble_st_exe.py
Python script for disassembling MIPS code from ST.EXE. Features:
- Runtime address to file offset conversion
- MIPS instruction disassembly
- Automatic function boundary detection
- Flexible output options

### hex_viewer.py
Python script for viewing raw bytes at specific addresses. Features:
- Hex dump display with ASCII representation
- Runtime address to file offset conversion
- Configurable byte range display
- Useful for examining data structures

## Quick Start

### Analyze the HP Function
```bash
python3 disassemble_st_exe.py 0x8003d7f8 --function
```

This will:
1. Convert runtime address `0x8003d7f8` to file offset `0x2dff8`
2. Find function boundaries automatically
3. Disassemble the entire `InitializePlayerState` function
4. Highlight the target instruction

### Disassemble Any Address
```bash
# Using runtime address (most common)
python3 disassemble_st_exe.py 0x80xxxxxx

# Using file offset
python3 disassemble_st_exe.py 0x2dff8 --file-offset

# Show more context (default is 32 instructions)
python3 disassemble_st_exe.py 0x8003d7f8 --count 64

# Show 16 instructions before target
python3 disassemble_st_exe.py 0x8003d7f8 --before 16
```

### View Raw Bytes
```bash
# View hex dump at runtime address
python3 hex_viewer.py 0x8003d7f8

# View 128 bytes
python3 hex_viewer.py 0x8003d7f8 --bytes 128

# Show 32 bytes before target
python3 hex_viewer.py 0x8003d7f8 --bytes 64 --before 32
```

## Address Conversion

### Runtime Address → File Offset
```
file_offset = runtime_address - 0x80010000 + 0x800
```

Example: `0x8003d7f8` → `0x2dff8`

### File Offset → Runtime Address
```
runtime_address = file_offset + 0x80010000 - 0x800
```

Example: `0x2dff8` → `0x8003d7f8`

## Understanding the Output

Example output:
```
0x8003d7f8: a440019c  sh    $zero, 0x19c($v0)  <-- TARGET
```

- `0x8003d7f8` - Runtime address (where code executes in PSX RAM)
- `a440019c` - Raw instruction bytes (little-endian MIPS)
- `sh $zero, 0x19c($v0)` - Disassembled instruction
  - `sh` = Store Halfword (16 bits)
  - `$zero` = Source register (always contains 0)
  - `0x19c($v0)` = Memory address (base register $v0 + offset 0x19c)

## PlayerState Structure

The HP function operates on a global structure at runtime address `0x801a8f28`:

```c
typedef struct {
    uint16_t field_0x002;
    uint16_t field_0x004;
    uint16_t field_0x006;
    // ... many fields ...
    uint16_t field_0x18a;
    uint16_t field_0x18c;
    uint16_t hp_array[26];  // +0x190 to +0x1c2
                            // Target HP at +0x19c (index 6)
    uint32_t field_0x02c;
    uint8_t  field_0x238;
} PlayerState;
```

## Common Tasks

### Find Where HP is Written
```bash
# Search for other instructions that write to offset 0x19c
grep -r "a44.019c" iso-dump/ST.EXE
```

### Find Where HP is Read
```bash
# Look for load halfword instructions (lh/lhu) reading from 0x19c
# This requires more advanced analysis
```

### Analyze a Different Function
```bash
# Example: Analyze the function called by InitializePlayerState
python3 disassemble_st_exe.py 0x8003c054 --function
```

## Tips for Reverse Engineering

1. **Look for patterns**: Unrolled loops appear as repeated similar instructions
2. **Function boundaries**: Look for `addiu $sp, $sp, -X` (prologue) and `jr $ra` (epilogue)
3. **Register usage**: 
   - `$v0-$v1`: Return values
   - `$a0-$a3`: Function arguments
   - `$sp`: Stack pointer
   - `$ra`: Return address
4. **Delayed branches**: MIPS always executes one instruction after branch/jump

## References

- [MIPS Instruction Set](https://www.mips.com/products/architectures/mips32-2/)
- [PSX-EXE Format](http://hitmen.c02.at/files/docs/psx/psx.pdf)
- [No$PSX Debugger](http://problemkaputt.de/psx.htm)

## Contributing

When documenting new functions:
1. Use the disassembler to get clean assembly
2. Create C decompilation (both literal and optimized)
3. Document the data structures involved
4. Add to this documentation

## Next Steps

To further investigate the HP system:
- [ ] Find all functions that read/write HP values
- [ ] Analyze the sub-function at `0x8003c054`
- [ ] Map out the complete PlayerState structure
- [ ] Find where HP is modified during gameplay
- [ ] Identify HP calculation formulas
