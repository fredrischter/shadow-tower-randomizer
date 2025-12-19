# Possible Locations for Creature Animation/Movement Speed Data

## Question from User
"What other files elsewhere may contain creature animation data? May the movement be in some database or maybe in exe file?"

## Answer: Likely Locations

### 1. Game Executable (ST.EXE) - MOST LIKELY ⭐

**Probability: 90%**

**Why this is most likely:**
- PlayStation 1 games commonly hardcoded creature behavior in the executable
- Animation timing, frame rates, and movement speed were typically compiled into the game code
- FromSoftware games from this era (King's Field series) used similar patterns

**What would be in ST.EXE:**
```
Creature Behavior Tables:
  - creature_id → movement_speed
  - creature_id → animation_frame_rate
  - creature_id → walk_cycle_speed
  
Animation Routines:
  - Playback speed multipliers
  - Frame skip/delay values
  - Movement velocity per animation frame
```

**How to investigate:**
1. Disassemble ST.EXE with PS1 tools:
   - no$psx debugger (PSX emulator with debugger)
   - IDA Pro with MIPS processor module
   - Ghidra with PlayStation extension
   - PCSX-Redux with debug features

2. Look for:
   - Lookup tables indexed by creature type ID
   - Constants for movement speed (likely float or fixed-point values)
   - Animation playback routines with timing parameters

3. Search patterns:
   - Arrays of floats/fixed-point near creature type IDs
   - Function calls that take creature_id as parameter
   - Animation state machines

**Example from similar PS1 games:**
```c
// Typical PS1 creature behavior table
struct CreatureBehavior {
    u8 creature_id;
    u8 aggression;
    u16 walk_speed;        // ← This is what we need
    u16 run_speed;
    u16 attack_speed;
    u16 animation_rate;    // ← Or this
    // ... more fields
};

CreatureBehavior creature_table[] = {
    {SLIME, 5, 100, 150, 80, 30},
    {SKELETON, 7, 200, 300, 100, 24},
    {DEMON_BAT, 9, 400, 600, 120, 20},
    // ...
};
```

**To modify in executable:**
- Find the offset of speed values in ST.EXE
- Create patches to multiply these values
- Apply patches during ISO building process

---

### 2. Animation Files (Not Yet Found) - POSSIBLE

**Probability: 30%**

**What to look for:**
PlayStation games sometimes stored animations in separate files with extensions like:
- .ANM (animation)
- .MOT (motion)
- .SEQ (sequence)
- .ACT (action)
- .TMD (PlayStation model format - includes animation data sometimes)
- Custom FromSoftware format (unknown extension)

**Where they might be:**
1. **Embedded in M0X.T files** (not yet extracted)
   - The "sized mix parts" code in randomizer_common.js is disabled
   - Lines 570-580 would extract these if enabled
   - May contain model geometry AND animation data

2. **Separate files in the ISO**
   - Currently we only extract ST/COM/ and ST/CHR*/ directories
   - There may be other directories we're not examining
   - Check the full ISO file list

3. **Inside FDAT.T or other .T files**
   - Animation data could be embedded anywhere
   - May not have .tim extension

**How to investigate:**
```bash
# List ALL files in the ISO
dumpsxiso -lt st.bin

# Look for non-texture, non-code files
# Check file sizes - large files may contain multiple data types

# Enable sized mix extraction in randomizer_common.js
# Uncomment lines 570-580 to extract all sub-files
```

---

### 3. Model Files with Embedded Speed Data - POSSIBLE

**Probability: 20%**

**PlayStation model formats:**
- **TMD (PlayStation Model)** - Can include animation data
- **RSD (PlayStation Rendering Data)** - Sometimes includes timing
- **Custom FromSoftware format** - Unknown structure

**Where they might be:**
- Mixed with TIM textures in M0X.T files
- Using the "sized mix" format (currently not extracted)
- Different file parts we're not recognizing

**How to investigate:**
1. Check if M0X.T files contain TMD headers:
   ```
   TMD header starts with: 0x41 0x00 0x00 0x00 (version 0x41)
   or other version markers
   ```

2. Look for animation keyframe data:
   - Position/rotation data for bones
   - Frame timing information
   - Speed multipliers per animation

3. Parse the full M0X.T structure:
   - Not just TIM files
   - Look for non-texture data between/after TIM files

---

### 4. Area-Specific Configuration Files - UNLIKELY

**Probability: 10%**

**Files to check:**
- COM/FDAT.T - Main game data (already parsed by data_model.js)
- Area-specific .T files
- Configuration tables

**What might be there:**
- Per-area speed modifiers
- Environment-specific animation rates
- Difficulty-based speed scaling

**Why unlikely:**
- We already have access to most creature data
- No speed fields found in accessible structures
- Speed seems consistent across areas (not area-specific)

---

### 5. Save Game / Memory Card Data - NOT RELEVANT

**Probability: 0%**

Save data wouldn't contain animation speeds - this is game code, not player progress.

---

## Recommended Investigation Order

### Phase 1: Executable Analysis (Most Likely to Succeed)

1. **Extract ST.EXE from ISO**
   ```bash
   # ST.EXE should be in the root of the extracted ISO
   find generated/no-change/extracted -name "ST.EXE"
   ```

2. **Examine executable for creature tables**
   - Use hexdump/hexedit to look for data patterns
   - Search for sequences that match creature IDs
   - Look for float/fixed-point arrays

3. **Disassemble critical sections**
   - Find creature initialization routines
   - Locate animation playback functions
   - Identify movement update logic

4. **Create executable patcher**
   - Tool to modify speed values in ST.EXE
   - Apply during ISO building process
   - Test with modified executable

### Phase 2: Enable Full File Extraction

1. **Uncomment sized mix extraction**
   - Edit randomizer_common.js lines 570-580
   - Extract ALL sub-files from .T containers
   - Examine for non-texture data

2. **Check for TMD model files**
   - Search for PlayStation model format headers
   - Parse any found model files
   - Look for animation/timing data

3. **List full ISO contents**
   - Identify any files we're not currently processing
   - Check for animation-specific file types

### Phase 3: Exhaustive Data Analysis (Last Resort)

1. **Byte-by-byte creature comparison**
   - Extract full binary data for:
     - Slime (slow)
     - Skeleton (medium)
     - Demon Bat (fast)
   - Diff the data to find correlating bytes
   - Test modifying candidate bytes

2. **Unknown field testing**
   - Systematically modify each unknown byte in Creature structure
   - Test each change in-game
   - Document effects

---

## Current Tools Available

We already have these analysis tools:
- `analyze_creature_structure.js` - Documents known/unknown creature fields
- `analyze_m04_structure.js` - Examines M04.T_PARTS files
- `SPEED_INVESTIGATION.md` - Comprehensive investigation notes

## Next Steps

**Recommended action:**
1. **Examine ST.EXE first** - highest probability of success
2. **Enable sized mix extraction** - may reveal hidden animation files
3. **Disassemble if necessary** - requires PS1 reverse engineering expertise

**Key insight:**
Movement speed is almost certainly NOT in the data files we currently access (Creature, EntityStateData, Spawn). It's either in:
- The game executable (90% likely)
- Animation files we haven't extracted yet (30% likely)
- Both locations working together (possible)

---

## Conclusion

**Direct Answer:** Yes, movement speed is very likely in the EXE file (ST.EXE), not in a database or data file.

**Why:** PlayStation 1 games from this era typically hardcoded creature behavior parameters in the executable code, indexed by creature type ID. This was common practice because:
- Limited memory required lookup tables in compiled code
- Performance optimization (direct array access vs file I/O)
- Simpler development workflow (recompile vs repack data files)

**What we need to do:**
To implement the speed multiplier, we need to:
1. Disassemble ST.EXE
2. Find the creature behavior tables or animation routines
3. Locate speed/timing constants
4. Create patches to modify these values
5. Apply patches to ST.EXE during ISO building

This is significantly more complex than data file modification and requires PlayStation executable reverse engineering expertise.
