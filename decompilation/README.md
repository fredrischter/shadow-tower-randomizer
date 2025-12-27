# Decompilation Analysis - Quick Start

## 📖 What's in This Directory?

This directory contains the complete analysis of Shadow Tower's damage calculation system, tracking the discovery of `enemyPower` and `baseDamage` fields from isolation patches to binary data.

## 🎯 Quick Summary

**Problem:** Commented isolation patches in `randomize.js` set stats to 1, but damage was still high.

**Discovery:** The patches were incomplete - they missed `enemyPower` (0x0f) and `baseDamage` (0x11).

**Solution:** Binary analysis of hp_damage.mips revealed these fields. Now ready for randomization.

## 📚 Documentation Guide

### Start Here (Read First)

**[ISOLATION_PATCHES_RECAP.md](./ISOLATION_PATCHES_RECAP.md)** - Executive summary
- Complete overview of the analysis
- Discovery process explained
- Key insights and findings
- What was accomplished

### Deep Dive Documentation

1. **[ISOLATION_PATCHES_ANALYSIS.md](./analysis-notes/ISOLATION_PATCHES_ANALYSIS.md)** - Technical details
   - What isolation patches are
   - Why they exist
   - Complete field mapping
   - Testing strategy

2. **[BINARY_CHANGE_TRACKING.md](./analysis-notes/BINARY_CHANGE_TRACKING.md)** - Code-to-binary mapping
   - How `.set(1)` becomes binary writes
   - UInt8 vs UInt16 encoding
   - Hexdump verification examples
   - Changeset.json structure

3. **[INITIAL_ANALYSIS_RESULTS.md](./analysis-notes/INITIAL_ANALYSIS_RESULTS.md)** - Binary findings
   - hp_damage.mips analysis results
   - Offset reference counts
   - Pattern evidence

### Setup Guides

**[DECOMPILATION_NEXT_STEPS.md](./DECOMPILATION_NEXT_STEPS.md)** - How to continue
- Ghidra installation
- File import procedures
- Search strategy
- Testing procedures
- Timeline estimates

**[GHIDRA_IMPORT_INSTRUCTIONS.md](./GHIDRA_IMPORT_INSTRUCTIONS.md)** - Step-by-step
- Import ST.EXE
- Import hp_damage.mips
- Run analysis
- Search for functions

**[MIPS_REFERENCE.md](./MIPS_REFERENCE.md)** - Assembly guide
- MIPS instruction reference
- Common patterns
- What to look for

## 🔧 Analysis Tools

Located in repository root:

1. **`trace_isolation_patches.sh`**
   - Shows all field offsets
   - Identifies which were/weren't in patches
   - Visual structure map

2. **`analyze_mips_patterns.sh`**
   - Finds damage calculation functions
   - Identifies arithmetic operations
   - Located 6 candidate functions

3. **`analyze_binaries.sh`**
   - Hexdump generation
   - Offset search
   - Reference counting

## 🗂️ Directory Structure

```
decompilation/
├── README.md                           ← You are here
├── ISOLATION_PATCHES_RECAP.md          ← Start here!
├── DECOMPILATION_NEXT_STEPS.md         ← Next steps guide
├── GHIDRA_IMPORT_INSTRUCTIONS.md       ← Ghidra setup
├── MIPS_REFERENCE.md                   ← MIPS assembly guide
│
├── ST.EXE                              ← Main executable (491KB)
├── hp_damage.mips                      ← Damage routines (65KB)
│
├── analysis-notes/
│   ├── ISOLATION_PATCHES_ANALYSIS.md   ← Deep dive
│   ├── BINARY_CHANGE_TRACKING.md       ← Code-to-binary mapping
│   ├── INITIAL_ANALYSIS_RESULTS.md     ← Binary findings
│   └── damage-calculation-analysis.md  ← Template for new findings
│
├── analysis-output/
│   ├── hp_damage.mips.hexdump.txt      ← Full hexdump
│   ├── offset_patterns.txt             ← Search results
│   ├── mips_pattern_analysis.txt       ← Pattern findings
│   ├── file_info.txt                   ← File metadata
│   └── ST.EXE.strings.txt              ← String references
│
├── extracted-functions/                ← For Ghidra exports
└── ghidra-projects/                    ← For Ghidra project files
```

## 🎯 Key Findings

### Complete Field Mapping

| Offset | Size | Field | In Patches? | Status |
|--------|------|-------|-------------|--------|
| 0x07 | 1 byte | attack1 | ✅ YES | Known |
| 0x08 | 1 byte | attack2 | ✅ YES | Known |
| 0x09 | 1 byte | magic1 | ✅ YES | Known |
| **0x0f** | **2 bytes** | **enemyPower** | **❌ NO** | **Newly identified** ⭐ |
| **0x11** | **2 bytes** | **baseDamage** | **❌ NO** | **Newly identified** ⭐ |
| 0x4a-0x58 | 2 bytes each | defenses | ✅ YES | Known |

### Evidence

- ✅ 10 references to 0x0f in hp_damage.mips
- ✅ 10 references to 0x11 in hp_damage.mips
- ✅ Found in arithmetic operations (MULT, ADD)
- ✅ 6 code regions with sequential loads

### Hypothesis

```
damage = (baseDamage + attack1) × enemyPower - defenseValue
```

## 🚀 Next Steps

### For Developers

1. **Read** [ISOLATION_PATCHES_RECAP.md](./ISOLATION_PATCHES_RECAP.md)
2. **Install** Ghidra (see [DECOMPILATION_NEXT_STEPS.md](./DECOMPILATION_NEXT_STEPS.md))
3. **Import** ST.EXE and hp_damage.mips
4. **Decompile** functions at identified locations
5. **Verify** damage formula
6. **Test** in-game
7. **Implement** randomization

### For Researchers

1. **Review** [INITIAL_ANALYSIS_RESULTS.md](./analysis-notes/INITIAL_ANALYSIS_RESULTS.md)
2. **Run** `analyze_mips_patterns.sh` to see current findings
3. **Examine** analysis-output/mips_pattern_analysis.txt
4. **Use** Ghidra to verify hypotheses
5. **Document** findings in analysis-notes/

## 🔍 How to Use the Tools

```bash
# Show offset mapping
./trace_isolation_patches.sh

# Run advanced MIPS analysis
./analyze_mips_patterns.sh

# Search for specific offset in binary
grep "0f 00" decompilation/analysis-output/hp_damage.mips.hexdump.txt

# View function boundaries
grep "08 00 e0 03" decompilation/analysis-output/hp_damage.mips.hexdump.txt
```

## 💡 The Key Insight

> **"The isolation patches revealed what they DIDN'T know was important."**

By examining what was **missing** from the isolation patches (enemyPower and baseDamage), we discovered critical damage variables through binary analysis.

This demonstrates reverse engineering methodology: using incomplete debug code to identify knowledge gaps, then using binary analysis to fill those gaps.

## 📝 Status

- ✅ **Analysis Complete** - All binary offsets identified
- ✅ **Tools Created** - Scripts tested and working
- ✅ **Documentation Complete** - Comprehensive guides written
- ✅ **Code Updated** - data_model.js bug fixed
- ⏳ **Ghidra Decompilation** - Requires user installation
- ⏳ **In-Game Testing** - Pending decompilation results
- ⏳ **Randomization** - Pending field verification

## 🤝 Contributing

If you continue this work:

1. Document findings in `analysis-notes/`
2. Update status in this README
3. Add test results to `analysis-notes/TEST_RESULTS.md` (create if needed)
4. Export Ghidra decompiled functions to `extracted-functions/`
5. Update the hypothesis in ISOLATION_PATCHES_RECAP.md

## 📞 References

- **Main tracking:** `../DECOMPILATION_TRACKING.md`
- **Creature structure:** `../data_model.js` lines 1656-1850
- **Isolation patches:** `../randomize.js` lines 346-370
- **Ghidra:** https://ghidra-sre.org/
- **MIPS reference:** http://www.mrc.uidaho.edu/mrc/people/jff/digital/MIPSir.html

---

**Last Updated:** 2025-12-27  
**Status:** Analysis complete, ready for decompilation  
**Next Phase:** Ghidra installation and function decompilation
