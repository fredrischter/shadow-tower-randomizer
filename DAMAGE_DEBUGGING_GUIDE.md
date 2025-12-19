# Shadow Tower Damage Calculation Debugging Guide

## Table of Contents
1. [Quick Start - Easy Desktop Approach](#quick-start---easy-desktop-approach)
2. [Understanding Damage-Related Data](#understanding-damage-related-data)
3. [Available Tools and Scripts](#available-tools-and-scripts)
4. [Step-by-Step Data Extraction](#step-by-step-data-extraction)
5. [Advanced Debugging Approaches](#advanced-debugging-approaches)
6. [Creating Damage Modification Patches](#creating-damage-modification-patches)
7. [Known Damage Calculation Insights](#known-damage-calculation-insights)

---

## Quick Start - Easy Desktop Approach

**Goal:** Extract all damage-related values from the game without needing emulator debugging or MIPS knowledge.

### Option 1: Use the Built-in Power Table Generator (EASIEST)

This is the simplest way to see all damage values for all creatures in the game.

**Steps:**

1. **Generate a randomization** (even "no-change" preset works):
   ```bash
   npm run mod "./path/to/st.bin" "./params/no-change.json"
   ```

2. **Open the generated power table**:
   ```
   generated/no-change/spoilers/creature_power_table.md
   ```

3. **What you get**:
   - All creature base attack values (attack1, attack2, magic1)
   - All EntityStateData attack values (physical and magic)
   - Defense values (weapon defense, magic defense)
   - Complete creature stats (STR, DEF, HP, etc.)
   - Power score calculations

**Example output:**
```markdown
| Creature     | Power | HP   | Base Attacks | EntityState Attacks | STR | DEF |
|--------------|-------|------|--------------|---------------------|-----|-----|
| apocrypha    | 2254  | 1200 | 100/80/120   | 500/300/250 (magic) | 50  | 40  |
| demon_bat    | 850   | 400  | 0/0/0        | 150/100/80 (magic)  | 20  | 15  |
| skeleton     | 580   | 350  | 60/50/0      | 80/60/0 (physical)  | 30  | 25  |
```

**CSV format also available** for Excel/spreadsheet analysis:
```
generated/no-change/spoilers/creature_power_table.csv
```

---

### Option 2: Extract Raw Binary Data

For deeper analysis, you can extract raw creature data dumps.

**Steps:**

1. **Run the randomizer** with logging enabled (happens automatically):
   ```bash
   npm run mod "./path/to/st.bin" "./params/no-change.json"
   ```

2. **Check the spoilers folder**:
   ```
   generated/no-change/spoilers/randomize.txt
   ```
   
   Contains detailed logs of all creature data including:
   - Binary offsets for each attribute
   - Raw hex values
   - Scaling calculations (if difficulty != medium)

3. **EntityStateData dump** (if it exists):
   ```
   randomize_entity_state_data.txt
   ```
   
   Contains hexadecimal dumps of all EntityStateData structures (48 bytes each).

---

## Understanding Damage-Related Data

Shadow Tower has **TWO separate systems** for creature damage:

### 1. Base Creature Attributes (UInt8, max 255)

Located in the main Creature data structure:

```javascript
// From data_model.js lines 1688-1690
this.attack1 = new UInt8(bin, offset + 0x07);  // Base physical attack 1
this.attack2 = new UInt8(bin, offset + 0x08);  // Base physical attack 2  
this.magic1  = new UInt8(bin, offset + 0x09);  // Base magic attack
```

**What these control:**
- Basic attack damage for simple enemies
- Foundation damage values
- Modified by difficulty settings (0.1x to 2.0x)

**Range:** 0-255 (UInt8)

### 2. EntityStateData Attack Attributes (UInt16, max 65535)

Located in EntityStateData structures for each creature AI state:

```javascript
// From data_model.js lines 1088-1102
// Type 0x20 = Physical attack state
// Type 0x30 = Spell/Magic attack state

if (this.type == 0x20 || this.type == 0x30) {
    this.attack1 = new UInt16(this.originalBin, 0x1a);  // Primary attack
    this.attack2 = new UInt16(this.originalBin, 0x1c);  // Secondary attack
    this.attack3 = new UInt16(this.originalBin, 0x1e);  // Tertiary attack
}
```

**What these control:**
- Projectile/magic attack damage (type 0x30)
- Advanced melee attack damage (type 0x20)
- Boss special attacks
- Modified by difficulty settings (0.1x to 2.0x)

**Range:** 0-65535 (UInt16)

### 3. Defense Attributes (UInt16, max 65535)

Also in main Creature structure:

```javascript
// From data_model.js lines 1716-1723
this.weaponDefense1 = new UInt16(bin, offset + 0x4a);
this.weaponDefense2 = new UInt16(bin, offset + 0x4c);
this.weaponDefense3 = new UInt16(bin, offset + 0x4e);
this.magDefense1    = new UInt16(bin, offset + 0x50);
this.magDefense2    = new UInt16(bin, offset + 0x52);
this.magDefense3    = new UInt16(bin, offset + 0x54);
this.magDefense4    = new UInt16(bin, offset + 0x56);
this.magDefense5    = new UInt16(bin, offset + 0x58);
```

**What these control:**
- Physical damage reduction
- Magic damage reduction  
- Elemental resistances (likely)

**Range:** 0-65535 (UInt16)

### 4. Other Damage-Influencing Stats

```javascript
// From data_model.js lines 1700-1714
this.str = new UInt8(bin, offset + 0x24);  // Strength (attack modifier?)
this.def = new UInt8(bin, offset + 0x26);  // Defense (damage reduction?)
this.sla = new UInt8(bin, offset + 0x28);  // Slash damage/resistance
this.smh = new UInt8(bin, offset + 0x29);  // Smash damage/resistance
this.pir = new UInt8(bin, offset + 0x2a);  // Pierce damage/resistance
this.spr = new UInt8(bin, offset + 0x2b);  // Spirit damage/resistance
this.mel = new UInt8(bin, offset + 0x30);  // Melee power
this.sol = new UInt8(bin, offset + 0x31);  // Holy/Solomon power
```

**Range:** 0-255 (UInt8)

---

## Available Tools and Scripts

### 1. Power Table Generator (Built-in)

**File:** `extract_creature_power_table.js` (integrated into randomize.js)

**What it does:**
- Automatically generates comprehensive creature tables
- Shows all attack values (base + EntityStateData)
- Calculates power scores
- Identifies magic attackers (type 0x30)
- Exports to Markdown and CSV

**How to use:**
```bash
# Automatic - just run any randomization
npm run mod "./path/to/st.bin" "./params/no-change.json"

# Output files:
# - generated/no-change/spoilers/creature_power_table.md
# - generated/no-change/spoilers/creature_power_table.csv
```

**Test without ISO:**
```bash
node test_creature_power_table.js
```

### 2. Tile Dump Utility

**File:** `dump_tiles.js`

**What it does:**
- Extracts map tile data
- May contain environmental damage zones
- Useful for understanding area-specific damage

**Usage:** (check file for specific parameters)

### 3. Data Extraction Example

Create a custom script to extract specific values:

```javascript
#!/usr/bin/env node

require('./data_model.js');
require('./randomizer_common.js');

const TFILEReader = global.TFILEReader;

// Read the game data
const tfile = new TFILEReader('./path/to/FDAT.T').readTFormat();

// Setup data model
const fs = require('fs');
const params = JSON.parse(fs.readFileSync('./params/no-change.json'));
global.data_model.setup(tfile, './extracted/ST/', params);

// Access all areas
const areas = global.data_model.areas;

// Extract damage data for all creatures
areas.forEach(area => {
    console.log(`\n=== ${area.name} ===`);
    
    area.creatures.forEach((creature, index) => {
        console.log(`\nCreature ${index}: ${creature.name}`);
        console.log(`  Base attacks: ${creature.attack1.get()}/${creature.attack2.get()}/${creature.magic1.get()}`);
        console.log(`  HP: ${creature.hp.get()}`);
        console.log(`  STR: ${creature.str.get()}, DEF: ${creature.def.get()}`);
        
        // EntityStateData attacks
        if (creature.entityStates && creature.entityStates.length > 0) {
            creature.entityStates.forEach((state, stateIndex) => {
                if (state.type == 0x20) {
                    console.log(`  Physical state ${stateIndex}:`);
                    if (state.attack1) console.log(`    Attack1: ${state.attack1.get()}`);
                    if (state.attack2) console.log(`    Attack2: ${state.attack2.get()}`);
                    if (state.attack3) console.log(`    Attack3: ${state.attack3.get()}`);
                }
                if (state.type == 0x30) {
                    console.log(`  Magic state ${stateIndex}:`);
                    if (state.attack1) console.log(`    Magic1: ${state.attack1.get()}`);
                    if (state.attack2) console.log(`    Magic2: ${state.attack2.get()}`);
                    if (state.attack3) console.log(`    Magic3: ${state.attack3.get()}`);
                }
            });
        }
    });
});
```

Save as `/tmp/extract_damage_data.js` and run:
```bash
node /tmp/extract_damage_data.js > damage_analysis.txt
```

---

## Step-by-Step Data Extraction

### Approach A: Extract All Creature Damage Values

**Goal:** Get a complete table of every creature's attack values

**Steps:**

1. **Ensure you have the Shadow Tower ISO** (`st.bin`)

2. **Generate baseline data** (no randomization):
   ```bash
   npm run mod "./path/to/st.bin" "./params/no-change.json"
   ```

3. **Open the power table**:
   ```bash
   # Markdown (human-readable)
   cat generated/no-change/spoilers/creature_power_table.md
   
   # Or CSV (for Excel)
   # Import: generated/no-change/spoilers/creature_power_table.csv
   ```

4. **Filter for specific creatures**:
   ```bash
   # Find all magic attackers
   grep "Magic:" generated/no-change/spoilers/creature_power_table.md
   
   # Find strongest creatures
   sort -t'|' -k3 -n generated/no-change/spoilers/creature_power_table.csv
   ```

5. **Analyze patterns**:
   - Look for correlation between base stats and damage
   - Compare physical vs magic attackers
   - Identify outliers (unusually high/low damage)

### Approach B: Test Specific Damage Modifications

**Goal:** Change creature damage and verify in logs

**Steps:**

1. **Create a test preset** (e.g., `params/test-damage.json`):
   ```json
   {
     "label": "test-damage",
     "preset": "no-change",
     "difficulty": "extreme-easy",
     "randomizeMap": false,
     "randomizeCreatures": false,
     "randomizeCollectablesAndDrops": false,
     "seed": "1"
   }
   ```

2. **Run the randomizer**:
   ```bash
   npm run mod "./path/to/st.bin" "./params/test-damage.json"
   ```

3. **Check scaling in logs**:
   ```bash
   grep -A 5 "Scaled.*attack" generated/test-damage/spoilers/randomize.txt
   ```

   You'll see output like:
   ```
   DEBUG - Creature 08_apocrypha
     Scaled base attack1: 100 -> 10 (factor: 0.1)
     Scaled base attack2: 80 -> 8 (factor: 0.1)
     Scaled base magic1: 120 -> 12 (factor: 0.1)
     Scaled spell/magic attack1: 500 -> 50 (factor: 0.1)
     Scaled spell/magic attack2: 300 -> 30 (factor: 0.1)
   ```

4. **Modify difficulty** to see different scaling:
   ```json
   {
     "difficulty": "even-harder"  // 2.0x damage
   }
   ```

5. **Compare outputs**:
   ```bash
   diff generated/test-damage/spoilers/creature_power_table.csv \
        generated/test-damage-hard/spoilers/creature_power_table.csv
   ```

### Approach C: Identify Unknown Bytes

**Goal:** Find damage-related bytes not yet documented

**Methodology:** (Based on SPEED_BYTE_IDENTIFICATION_METHODOLOGY.md)

1. **Generate EntityStateData dumps**:
   - Run randomizer with logging
   - Extract `randomize_entity_state_data.txt` (if available)
   - Contains hex dumps of all EntityStateData structures

2. **Compare similar creatures**:
   ```javascript
   // Analyze creatures with known damage differences
   const weakCreatures = ['acid_slime', 'blood_slime'];  // Low damage
   const strongCreatures = ['gargaral', 'demon_king'];   // High damage
   
   // Look for byte patterns that correlate with damage
   ```

3. **Statistical analysis**:
   - Group creatures by observed damage in-game
   - Find bytes that consistently differ between groups
   - Test hypothesis by modifying those bytes

4. **Validation**:
   - Modify suspected bytes in changeset
   - Generate ISO with changes
   - Test in-game

**Example Analysis Script:**

```javascript
// Pseudo-code for analyzing unknown bytes
const fs = require('fs');

// Load entity state data dump
const lines = fs.readFileSync('randomize_entity_state_data.txt', 'utf8').split('\n');

const samples = [];
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('EntityStateData')) {
        const creatureName = lines[i-1].match(/\d+_(\w+)/)[1];
        const bytes = lines[i].split(')')[1].trim().split(/\s+/).map(b => parseInt(b, 16));
        
        samples.push({
            creature: creatureName,
            type: bytes[0],
            unknownByte1: bytes[4],  // Test different offsets
            unknownByte2: bytes[6],
            knownAttack1: (bytes[26] << 8) | bytes[27]  // 0x1a = attack1
        });
    }
}

// Group by damage level
const lowDamage = samples.filter(s => s.knownAttack1 < 100);
const highDamage = samples.filter(s => s.knownAttack1 > 500);

// Compare byte patterns
console.log('Low damage average byte1:', 
    lowDamage.reduce((sum, s) => sum + s.unknownByte1, 0) / lowDamage.length);
console.log('High damage average byte1:', 
    highDamage.reduce((sum, s) => sum + s.unknownByte1, 0) / highDamage.length);
```

---

## Advanced Debugging Approaches

### Approach D: PSX Emulator Debugging (Advanced)

**Tools needed:**
- no$psx emulator (has MIPS debugger)
- Shadow Tower ISO
- MIPS assembly knowledge

**Steps:**

1. **Set up no$psx**:
   - Load Shadow Tower ISO
   - Enable debugger (Debug menu)
   - Find damage calculation code

2. **Set breakpoints**:
   - Break on HP decrease
   - Break on attack animations
   - Trace back to calculation code

3. **Analyze MIPS code**:
   - Look for load instructions (lw, lh, lb)
   - Find which memory addresses are read
   - Correlate with known data structures

4. **Cross-reference with data_model.js**:
   - Match memory addresses to offsets
   - Identify which bytes affect damage
   - Document findings

**Pros:**
- Can find exact damage formulas
- See real-time calculation
- Discover unknown mechanics

**Cons:**
- Requires MIPS knowledge
- Time-consuming
- Complex setup

### Approach E: Memory Inspection (Medium)

**Tools needed:**
- PSX emulator with memory viewer (ePSXe, DuckStation)
- Cheat Engine or similar memory editor

**Steps:**

1. **Find creature data in RAM**:
   - Load game in emulator
   - Use memory search to find HP values
   - Look around HP address for attack values

2. **Modify values in real-time**:
   - Change attack bytes
   - Observe damage changes in-game
   - Confirm which bytes control what

3. **Map RAM to ISO**:
   - RAM addresses != ISO file offsets
   - But patterns help identify structures
   - Document correlations

**Pros:**
- Interactive testing
- Quick validation
- No ISO rebuilding needed

**Cons:**
- RAM addresses unstable (change per load)
- Need to map back to file structure
- Requires running game

### Approach F: MIPS Disassembly (Expert)

**Tools needed:**
- MIPS disassembler (Ghidra, IDA Pro)
- ST.EXE executable from ISO
- Deep MIPS knowledge

**Steps:**

1. **Disassemble ST.EXE**:
   ```bash
   # Extract from ISO
   dumpsxiso st.bin -x extracted/
   
   # Load extracted/ST.EXE into Ghidra
   ```

2. **Find damage calculation functions**:
   - Search for floating-point operations
   - Look for multiplication/division
   - Find stat loading code

3. **Reverse engineer formulas**:
   - Trace data flow
   - Identify calculation steps
   - Document algorithm

**Pros:**
- Gets exact formulas
- Complete understanding
- Find hidden mechanics

**Cons:**
- Extremely time-consuming
- Requires expert skills
- May not be worth effort

---

## Creating Damage Modification Patches

### Method 1: Use Difficulty Scaling (Easiest)

**Already implemented** in the randomizer:

```json
{
  "difficulty": "extreme-easy"  // 0.1x damage (all creatures)
  "difficulty": "easy"           // 0.5x damage
  "difficulty": "medium"         // 1.0x damage (normal)
  "difficulty": "hard"           // 1.3x damage
  "difficulty": "very-hard"      // 1.6x damage
  "difficulty": "even-harder"    // 2.0x damage
}
```

**What gets scaled:**
- All creature base attacks (attack1, attack2, magic1)
- All EntityStateData attacks (physical and magic)
- HP values
- All defensive stats

### Method 2: Modify Specific Creatures

**Example:** Make Apocrypha 10x weaker

Edit `randomize.js`, add after line 535:

```javascript
// Custom damage modification
function customDamageModifications() {
    areas.forEach(area => {
        area.creatures.forEach(creature => {
            if (creature.name && creature.name.includes('apocrypha')) {
                // Reduce all attacks to 10%
                if (creature.attack1) creature.attack1.set(Math.ceil(creature.attack1.get() * 0.1));
                if (creature.attack2) creature.attack2.set(Math.ceil(creature.attack2.get() * 0.1));
                if (creature.magic1) creature.magic1.set(Math.ceil(creature.magic1.get() * 0.1));
                
                // Reduce EntityStateData attacks
                if (creature.entityStates) {
                    creature.entityStates.forEach(state => {
                        if (state.attack1) state.attack1.set(Math.ceil(state.attack1.get() * 0.1));
                        if (state.attack2) state.attack2.set(Math.ceil(state.attack2.get() * 0.1));
                        if (state.attack3) state.attack3.set(Math.ceil(state.attack3.get() * 0.1));
                    });
                }
                
                console.log("CUSTOM: Weakened " + creature.name);
            }
        });
    });
}

// Call it during randomization
if (params.customDamageModifications) {
    customDamageModifications();
}
```

### Method 3: Create Custom Changeset

**For manual binary patches**:

1. **Identify exact offset** of value to change:
   ```javascript
   // From power table or data extraction
   // Example: Apocrypha's magic attack1 at offset 0x12345
   ```

2. **Create changeset.json entry**:
   ```json
   {
     "file": "extracted/ST/COM/FDAT.T_PARTS/128 281000-2c0800.T",
     "bytes": {
       "0x12345": "0x32",  // Change to 50 (0x32 in hex)
       "0x12347": "0x1E"   // Change to 30 (0x1E in hex)
     }
   }
   ```

3. **Apply with change.js**:
   ```bash
   node change.js path/to/custom_changeset.json
   ```

### Method 4: Implement New Damage Formula

**Example:** Add player level scaling

1. **Find player level location** (would need debugging)

2. **Add formula to randomize.js**:
   ```javascript
   function scaleByPlayerLevel(baseValue, playerLevel) {
       // Example: Enemies get 5% stronger per player level
       const levelFactor = 1 + (playerLevel * 0.05);
       return Math.ceil(baseValue * levelFactor);
   }
   ```

3. **Apply during creature setup**:
   ```javascript
   // This would require accessing player data
   // Currently not implemented in randomizer
   ```

**Note:** Player data location is currently **unknown** and would need discovery through debugging.

---

## Known Damage Calculation Insights

### What We Know (Confirmed)

#### 1. Attack Value Scaling

**Formula in randomize.js (lines 511-535):**
```javascript
// Difficulty factor
const difficultyFactors = {
    "extreme-easy": 0.1,
    "easy": 0.5,
    "medium": 1.0,
    "hard": 1.3,
    "very-hard": 1.6,
    "even-harder": 2.0
};

// Base attacks (UInt8)
newAttack = Math.min(255, Math.ceil(oldAttack * creatureAttributeFactor));

// EntityStateData attacks (UInt16)
newAttack = Math.min(65535, Math.ceil(oldAttack * creatureAttributeFactor));
```

**Confirmed by:**
- In-game testing
- Log file analysis
- Community verification

#### 2. Two Attack Systems

**Confirmed in MAGIC_DAMAGE_COMPLETE_FIX.md:**

1. **Base Creature Attacks** (offsets 0x07-0x09)
   - Used by simple enemies
   - Foundation damage values
   - UInt8 (0-255)

2. **EntityStateData Attacks** (offsets 0x1a-0x1e in state data)
   - Used by advanced enemies
   - Projectile/magic attacks
   - UInt16 (0-65535)

**Both are scaled** by difficulty settings.

#### 3. Defense System

**Known defense attributes** (from data_model.js):
- weaponDefense1/2/3 - Physical damage reduction
- magDefense1/2/3/4/5 - Magic damage reduction

**Unknown:**
- Exact reduction formula
- How defenses interact with attack values
- Whether it's percentage or flat reduction

#### 4. Stat Modifiers

**Attributes that likely affect damage** (from data_model.js):
- `str` (offset 0x24) - Strength (attack modifier?)
- `sla/smh/pir/spr` (offsets 0x28-0x2b) - Damage type modifiers?
- `mel` (offset 0x30) - Melee power
- `sol` (offset 0x31) - Holy power

**Current state:** 
- These are exposed in data structures
- Their exact formulas are **unknown**
- They're included in power score calculations (estimated weights)

### What We Don't Know (Needs Discovery)

#### 1. Exact Damage Formula

**Unknown:**
```
PlayerDamage = ??? 
  - How are attack, strength, and weapon combined?
  - Is it additive or multiplicative?
  - Are there critical hits?
  - How do damage types (slash/smash/pierce) interact?
```

**To discover:**
- Need MIPS disassembly of damage calculation code
- Or controlled in-game testing with known values

#### 2. Defense Formula

**Unknown:**
```
DamageReduction = ???
  - Is defense a percentage?
  - Is it flat reduction?
  - Does it scale with attack value?
  - Are there defense caps?
```

**To discover:**
- Test with creatures of varying defense values
- Measure actual damage taken
- Reverse engineer formula

#### 3. Player Stats Impact

**Unknown:**
- Where player stats are stored
- How player level affects damage
- Player's own attack calculation
- Equipment bonuses formula

**To discover:**
- Memory debugging during gameplay
- Cheat engine to find player data
- Track damage changes with equipment swaps

#### 4. Environmental Damage

**Unknown:**
- How poison/lava/hazards calculate damage
- Whether it's fixed or stat-based
- How resistances work

**To discover:**
- Find environmental hazard data structures
- Test with different player stats
- Analyze map tile data

#### 5. Special Mechanics

**Unknown:**
- Critical hit system (if any)
- Backstab multipliers (if any)
- Combo damage (if any)
- Status effect damage formulas

**To discover:**
- Extensive in-game testing
- Code disassembly
- Community knowledge gathering

---

## Recommended Workflow for Discovery

### Phase 1: Data Collection (Easy - You can do this now)

1. **Extract all creature data**:
   ```bash
   npm run mod "./path/to/st.bin" "./params/no-change.json"
   ```

2. **Save baseline tables**:
   ```bash
   cp generated/no-change/spoilers/creature_power_table.md baseline_creatures.md
   cp generated/no-change/spoilers/creature_power_table.csv baseline_creatures.csv
   ```

3. **Test different difficulties**:
   ```bash
   # Generate extreme-easy
   npm run mod "./path/to/st.bin" "./params/randomized-extreme-easy.json"
   
   # Compare with baseline
   diff baseline_creatures.csv generated/randomized-extreme-easy/spoilers/creature_power_table.csv
   ```

4. **Document observations**:
   - Which creatures have highest base attacks?
   - Which have highest magic attacks?
   - Correlation between HP and attack values?
   - Patterns in defense values?

### Phase 2: Controlled Testing (Medium - Needs in-game testing)

1. **Create test creatures**:
   - Place strong enemy in first area
   - Set to extreme-easy difficulty
   - Test actual damage in-game

2. **Measure damage values**:
   - Record damage dealt to player
   - Record damage dealt by player
   - Compare with extracted attack values

3. **Look for formula**:
   ```
   ObservedDamage = f(ExtractedAttackValue, ???)
   ```

4. **Test variations**:
   - Different player equipment
   - Different creature types
   - Different attack types (slash/smash/pierce)

### Phase 3: Code Analysis (Hard - Needs expertise)

1. **Disassemble ST.EXE** with Ghidra

2. **Find damage calculation functions**:
   - Search for HP modification code
   - Trace back to calculation
   - Document assembly code

3. **Reverse engineer formula**:
   - Identify operations (multiply, divide, etc.)
   - Map to high-level formula
   - Validate with in-game testing

4. **Document findings** for community

---

## Summary: Your Best Options

### For Quick Data Extraction (Easiest):

**Use the built-in power table generator:**
```bash
npm run mod "./path/to/st.bin" "./params/no-change.json"
# Then open: generated/no-change/spoilers/creature_power_table.md
```

**What you get:**
- ✅ All creature base attacks
- ✅ All EntityStateData attacks (physical + magic)
- ✅ All defense values
- ✅ Complete stat breakdown
- ✅ Power score calculations
- ✅ CSV export for spreadsheet analysis

**What you DON'T get:**
- ❌ Exact damage formula (needs code analysis)
- ❌ How stats combine (needs testing/disassembly)
- ❌ Defense reduction formula (needs testing)
- ❌ Player stat impact (needs discovery)

### For Deeper Analysis:

1. **Extract baseline data** (power tables)
2. **Create test presets** (modify specific creatures)
3. **Test in-game** (measure actual damage)
4. **Compare observed vs extracted** (find formula)
5. **Share findings** (help the community!)

### For Modifications:

**Easiest:** Use difficulty presets
```json
{ "difficulty": "extreme-easy" }  // 10% damage
```

**Medium:** Modify specific creatures in randomize.js
```javascript
if (creature.name.includes('boss')) {
    creature.attack1.set(255);  // Max attack
}
```

**Advanced:** Create custom changeset for binary patches

---

## Questions and Next Steps

### Have data to share?

If you extract damage values or discover formulas, please share:
- Email: fredrischter@gmail.com
- Discord: FromSoft Modding Committee (https://discord.gg/jUzZwWWUXd)

### Want to contribute?

Help reverse engineer the exact damage formulas:
1. Extract data using this guide
2. Test in-game with known values  
3. Document patterns you find
4. Share on GitHub issues or Discord

### Need help?

- Check existing documentation (MAGIC_DAMAGE_COMPLETE_FIX.md, etc.)
- Ask on Discord
- Open GitHub issue with specific questions

---

**Last Updated:** 2025-12-19
**Version:** 1.0
**Related Files:**
- CREATURE_POWER_TABLE_README.md
- MAGIC_DAMAGE_COMPLETE_FIX.md
- SPEED_BYTE_IDENTIFICATION_METHODOLOGY.md
- data_model.js
- extract_creature_power_table.js
- randomize.js
