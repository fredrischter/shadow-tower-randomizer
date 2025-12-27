# Ghidra Import Instructions for Shadow Tower

## Import ST.EXE

1. **Launch Ghidra**
   ```bash
   $GHIDRA_HOME/ghidraRun
   ```

2. **Create New Project**
   - File > New Project
   - Non-Shared Project
   - Project Name: "ShadowTower"
   - Project Directory: ./decompilation/ghidra-projects/

3. **Import ST.EXE**
   - File > Import File
   - Select: decompilation/ST.EXE
   - Format: "PlayStation Executable (PSX-EXE)"
     - If not available, select "Raw Binary"
   - Language: MIPS:LE:32:default (Little Endian, 32-bit)
   - Options:
     - Base Address: 0x80010000 (typical PSX load address)
     - Block Name: .text
     - Read: checked
     - Write: unchecked
     - Execute: checked

4. **Analyze ST.EXE**
   - Double-click ST.EXE in project
   - Analysis > Auto Analyze
   - Check all default analyzers
   - Click "Analyze"
   - Wait for analysis to complete (may take several minutes)

## Import hp_damage.mips

1. **Import File**
   - File > Import File
   - Select: decompilation/hp_damage.mips
   - Format: "Raw Binary"
   - Language: MIPS:LE:32:default

2. **Set Base Address**
   - Base Address: 0x80100000 (arbitrary, adjust if needed)
   - Block Name: hp_damage

3. **Analyze**
   - Analysis > Auto Analyze
   - Select MIPS analyzers
   - Click "Analyze"

## Search Strategy

### Find Damage Calculation Functions

1. **Search for HP references**
   - Search > For Scalars
   - Enter offset: 0x32 (HP offset)
   - Look for functions reading this offset

2. **Search for attack references**
   - Search for offsets: 0x07, 0x08, 0x09
   - Identify functions using these values in calculations

3. **Search for multiplication/division**
   - Search > For Instructions
   - MULT, MULTU, DIV, DIVU instructions
   - These likely indicate damage calculations

### Find Unknown Field Usage

1. **Search for offset 0x0f** (something3)
   - Identify all functions reading this offset
   - Analyze what they do with the value

2. **Search for offset 0x11** (something4)
   - Identify all functions reading this offset
   - Analyze what they do with the value

### Cross-Reference Analysis

1. **Find function that loads creature data**
   - Look for sequential loads of known offsets
   - Map the data structure being read

2. **Trace data flow**
   - Follow values from creature structure loads
   - See how they're used in calculations
   - Identify damage formula

## Tips

- Use Ghidra's "Function Call Tree" to trace calls
- Set up custom data types for Creature structure
- Use bookmarks to mark important functions
- Export decompiled code for reference
- Document findings in analysis-notes/

## Expected Results

- Identification of enemy_power field location
- Identification of base_damage field location
- Understanding of damage calculation formula
- Documentation of creature structure layout
