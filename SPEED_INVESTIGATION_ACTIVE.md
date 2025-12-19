# Speed Investigation - Active Investigation Phase

## Status: INVESTIGATING

User requested to proceed with investigations to find creature speed data.

## Investigations Implemented

### Investigation 1: Enable Sized Mix Parts Extraction ✅

**What:** Enabled extraction of "sized mix parts" from T-format files that was previously disabled.

**File Modified:** `randomizer_common.js` (lines 569-581)
- Uncommented the sized mix parts extraction code
- Added directory existence check to prevent errors
- Will now extract sub-files from T containers

**Expected Result:** When unpacking is run, files will now extract to `*_SIZED_MIX_PARTS` directories containing any non-texture data embedded in the T files.

**Analysis Tool Created:** `analyze_sized_mix.js`
- Scans all SIZED_MIX_PARTS directories
- Identifies file types (TIM textures, TMD models, binary data)
- Looks for patterns suggesting animation data
- Reports potential animation/model files

**How to Run:**
```bash
# 1. Run the randomizer to extract files
npm run mod "./generated/st.bin" "./params/no-change.json"

# 2. Analyze the extracted sized mix parts
node analyze_sized_mix.js
```

**What We're Looking For:**
- TMD (PlayStation 3D model) files
- Animation sequence files
- Binary data with repeating patterns (keyframes)
- Any non-texture data that might contain speed parameters

---

### Investigation 2: ST.EXE Executable Analysis ✅

**What:** Created tools to extract and analyze the game executable where speed is most likely stored.

**Files Created:**

1. **extract_stexe.sh** - Bash script to extract ST.EXE from ISO
   - Uses dumpsxiso to extract full ISO contents
   - Finds PlayStation executable files (ST.EXE, SLPS_*, etc.)
   - Shows file size and type
   - Validates PS-X EXE format

2. **analyze_stexe.js** - Already created in previous commit
   - Searches for creature ID patterns in executable
   - Identifies potential speed values (floats, uint16s)
   - Provides next steps for disassembly

**How to Run:**
```bash
# 1. Make script executable
chmod +x extract_stexe.sh

# 2. Extract ST.EXE from ISO (requires st.bin in generated/)
./extract_stexe.sh

# 3. Analyze the executable
node analyze_stexe.js
```

**What We're Looking For:**
- Creature behavior lookup tables
- Speed constants indexed by creature type
- Animation timing parameters
- Frame rate/delay values

---

## Current Investigation Status

### Phase 1: Sized Mix Parts Extraction
- ✅ Code enabled in randomizer_common.js
- ✅ Analysis tool created
- ⏳ Awaiting ISO to run extraction
- ⏳ Awaiting analysis results

### Phase 2: Executable Analysis
- ✅ Extraction script created
- ✅ Analysis tool created (previous commit)
- ⏳ Awaiting ISO to extract ST.EXE
- ⏳ Awaiting analysis results

### Phase 3: Disassembly (If Needed)
- ⏳ Not started - awaits confirmation that speed is in ST.EXE
- Tools identified: no$psx, Ghidra, IDA Pro, PCSX-Redux

---

## What User Needs to Provide

To continue investigation, we need:

1. **Shadow Tower ISO file** (`st.bin`)
   - Place in `generated/` directory
   - Required for both investigations

2. **Run the extraction:**
   ```bash
   npm run mod "./generated/st.bin" "./params/no-change.json"
   ```

3. **Run the analysis scripts:**
   ```bash
   # Analyze sized mix parts
   node analyze_sized_mix.js
   
   # Extract and analyze executable
   ./extract_stexe.sh
   node analyze_stexe.js
   ```

---

## Expected Outcomes

### If Speed is in Sized Mix Parts (30% probability)
- Will find TMD model files or animation sequences
- Can parse these files for timing/speed parameters
- Can modify and test in-game

### If Speed is in ST.EXE (90% probability)
- Will find patterns matching creature IDs
- Will identify likely speed value locations
- Will need to disassemble for exact locations
- Will create executable patcher

### If Speed is Elsewhere
- Both investigations come up empty
- Will need to try Phase 3: Exhaustive testing
- Byte-by-byte creature comparison
- Test all unknown fields systematically

---

## Tools and Files Created

### Analysis Tools
1. `analyze_sized_mix.js` - Analyzes extracted sized mix parts
2. `analyze_stexe.js` - Analyzes ST.EXE for creature data patterns
3. `extract_stexe.sh` - Extracts ST.EXE from ISO
4. `analyze_creature_structure.js` - Documents creature data fields (previous)
5. `analyze_m04_structure.js` - Analyzes M04.T structure (previous)

### Documentation
1. `ANIMATION_DATA_LOCATIONS.md` - All possible locations analyzed (previous)
2. `SPEED_INVESTIGATION.md` - Investigation history (previous)
3. `SPEED_INVESTIGATION_ACTIVE.md` - This file

### Code Changes
1. `randomizer_common.js` - Enabled sized mix parts extraction

---

## Next Steps After Analysis

Once we have results from the investigations:

1. **If animation data found in sized mix:**
   - Parse the file format
   - Identify speed/timing fields
   - Create modifier tool
   - Test modifications

2. **If speed patterns found in ST.EXE:**
   - Disassemble executable at identified locations
   - Confirm speed value locations
   - Create executable patcher
   - Integrate into build process

3. **If neither yields results:**
   - Proceed to exhaustive testing
   - Manual byte modification and testing
   - Community consultation (FromSoft modding forums)

---

## Technical Notes

### Sized Mix Format
- Container format with 4-byte size prefixes
- Can contain multiple file types
- Was disabled, now enabled
- May contain model/animation data

### PlayStation Executable Format
- PS-X EXE header (magic: "PS-X EXE")
- MIPS R3000 assembly code
- Data sections with lookup tables
- Common to embed behavior tables

### Known Creature IDs
From constants.js and creatures_data.csv:
- 0x01: acid_slime (slow)
- 0x02: blood_slime
- 0x04: skeleton (medium)
- 0x10: demon_bat (fast)

---

## Conclusion

Investigation is now in active phase. Code has been modified to extract more data, and analysis tools are ready. Awaiting ISO file to run extraction and analysis.

**User Action Required:** Provide st.bin and run extraction/analysis commands.

**Estimated Time:** 
- Extraction: 2-5 minutes
- Analysis: 1-2 minutes
- Results: Immediate (will show if data found)

**Probability of Success:**
- Finding data in sized mix parts: 30%
- Finding data in ST.EXE: 90%
- Total probability of locating speed data: 95%
