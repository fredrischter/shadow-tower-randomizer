# Decompilation Setup and Next Steps

## What Has Been Accomplished

### ✅ Phase 1: Binary Analysis (Complete)

1. **Identified candidate fields for enemyPower and baseDamage**
   - Offset 0x0f: enemyPower (UInt16) - 10 references in hp_damage.mips
   - Offset 0x11: baseDamage (UInt16) - 10 references in hp_damage.mips
   - Analysis in: `decompilation/analysis-notes/INITIAL_ANALYSIS_RESULTS.md`

2. **Added fields to data_model.js**
   - Line 1763: `this.enemyPower = new UInt16(bin, offset + 0x0f)`
   - Line 1764: `this.baseDamage = new UInt16(bin, offset + 0x11)`
   - Fixed toString() method to use correct names

3. **Documented isolation patches**
   - What they do: Set stats to 1 for testing
   - Where they write: Binary offset mapping complete
   - Analysis in: `decompilation/analysis-notes/ISOLATION_PATCHES_ANALYSIS.md`

4. **Created binary change tracking**
   - Maps high-level code to binary modifications
   - Documents UInt8/UInt16 encoding
   - Shows before/after hexdump patterns
   - Analysis in: `decompilation/analysis-notes/BINARY_CHANGE_TRACKING.md`

5. **Set up decompilation infrastructure**
   - Copied ST.EXE to decompilation/
   - Copied hp_damage.mips to decompilation/
   - Created Ghidra import instructions
   - Created MIPS reference guide
   - Created analysis scripts

### 📋 Phase 2: Decompilation Setup (Ready to Execute)

The next step is to **install Ghidra** and **decompile the damage calculation functions** to understand the exact formula.

## Installation and Setup Instructions

### Prerequisites

- **Java 11 or later** (Ghidra requirement)
- **Ghidra 10.x or later** (latest stable version recommended)
- **5GB disk space** (for Ghidra installation and project files)

### Step 1: Install Java (if not already installed)

#### Linux (Ubuntu/Debian)
```bash
sudo apt update
sudo apt install openjdk-17-jdk
java -version  # Verify installation
```

#### macOS
```bash
brew install openjdk@17
echo 'export PATH="/usr/local/opt/openjdk@17/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
java -version  # Verify installation
```

#### Windows
Download and install from: https://adoptium.net/

### Step 2: Install Ghidra

1. **Download Ghidra**
   ```bash
   # Visit https://ghidra-sre.org/
   # Download latest release (e.g., ghidra_10.4_PUBLIC_20230928.zip)
   
   # Or use wget (Linux/macOS)
   wget https://github.com/NationalSecurityAgency/ghidra/releases/download/Ghidra_10.4_build/ghidra_10.4_PUBLIC_20230928.zip
   ```

2. **Extract Ghidra**
   ```bash
   unzip ghidra_10.4_PUBLIC_20230928.zip
   mv ghidra_10.4_PUBLIC /opt/ghidra  # Or your preferred location
   ```

3. **Launch Ghidra**
   ```bash
   cd /opt/ghidra
   ./ghidraRun
   ```

### Step 3: Import Shadow Tower Files into Ghidra

Follow the detailed instructions in:
```
decompilation/GHIDRA_IMPORT_INSTRUCTIONS.md
```

**Summary:**

1. **Create Project**
   - File > New Project
   - Name: "ShadowTower"
   - Location: `decompilation/ghidra-projects/`

2. **Import ST.EXE**
   - File > Import File
   - Select: `decompilation/ST.EXE`
   - Language: MIPS:LE:32:default
   - Base Address: 0x80010000

3. **Import hp_damage.mips**
   - File > Import File
   - Select: `decompilation/hp_damage.mips`
   - Language: MIPS:LE:32:default
   - Base Address: 0x80100000

4. **Run Auto Analysis**
   - Analysis > Auto Analyze
   - Wait for completion (several minutes)

## Finding the Damage Formula

### Search Strategy in Ghidra

1. **Search for offset 0x0f (enemyPower)**
   ```
   Search > For Scalars
   Value: 0x0f
   ```
   
   Look for LHU instructions:
   ```mips
   lhu $t0, 0x0f($a0)  # Load halfword unsigned at offset 0x0f
   ```

2. **Search for offset 0x11 (baseDamage)**
   ```
   Search > For Scalars
   Value: 0x11
   ```
   
   Look for LHU instructions:
   ```mips
   lhu $t1, 0x11($a0)  # Load halfword unsigned at offset 0x11
   ```

3. **Find functions using both offsets**
   - Cross-reference the search results
   - Find functions that load BOTH 0x0f AND 0x11
   - These are likely damage calculation functions

4. **Analyze the function**
   - Right-click > Decompile
   - Study the C pseudocode
   - Identify the damage formula

### Expected Patterns

Based on the isolation patches analysis, look for:

**Pattern 1: Multiplicative Formula**
```mips
lhu  $t0, 0x0f($a0)   # enemyPower
lbu  $t1, 0x07($a0)   # attack1
mult $t0, $t1
mflo $t2              # enemyPower * attack1
```

**Pattern 2: Additive with Multiplier**
```mips
lhu  $t0, 0x11($a0)   # baseDamage
lbu  $t1, 0x07($a0)   # attack1
add  $t2, $t0, $t1    # baseDamage + attack1
lhu  $t3, 0x0f($a0)   # enemyPower
mult $t2, $t3         # (baseDamage + attack1) * enemyPower
mflo $v0
```

**Pattern 3: Complex Formula**
```mips
lhu  $t0, 0x11($a0)   # baseDamage
lbu  $t1, 0x07($a0)   # attack1
lhu  $t2, 0x0f($a0)   # enemyPower
# Complex arithmetic operations
# Possible defense calculations
# Possible element type modifiers
```

### What to Document

When you find the damage function:

1. **Function address** - Where it's located in the binary
2. **Decompiled C code** - Ghidra's pseudocode output
3. **MIPS assembly** - The actual instructions
4. **Variables used** - Which offsets are loaded
5. **Formula** - The mathematical relationship
6. **Defense calculations** - How weaponDefense/magDefense are used
7. **Special modifiers** - Element types, critical hits, etc.

## Testing Hypothesis

Once you have a formula hypothesis from Ghidra, **test it in-game**:

### Test 1: Verify enemyPower is a Multiplier

Create test preset: `params/test-enemy-power.json`
```json
{
  "label": "test-enemy-power",
  "preset": "no-change",
  "difficulty": "medium",
  "randomizeMap": false,
  "randomizeCreatures": false,
  "randomizeCollectablesAndDrops": false,
  "seed": "1"
}
```

Add to randomize.js (temporary test code):
```javascript
// After line 370 (after commented isolation patches)
// TEST: Set enemyPower to extreme values
forEachValidCreature((creature, area) => {
  if (creature.name.includes("acid_slime")) {
    creature.enemyPower.set(100);  // 100x multiplier
    console.log("Set acid slime enemyPower to 100");
  }
});
```

**Expected result:** Acid slime deals ~100x normal damage

### Test 2: Verify baseDamage is Additive

```javascript
forEachValidCreature((creature, area) => {
  if (creature.name.includes("acid_slime")) {
    creature.baseDamage.set(500);  // Add 500 base damage
    console.log("Set acid slime baseDamage to 500");
  }
});
```

**Expected result:** Acid slime deals +500 damage per hit

### Test 3: Complete Isolation Patch

```javascript
forEachValidCreature((creature, area) => {
  // Original isolation patches
  creature.attack1.set(1);
  creature.attack2.set(1);
  creature.magic1.set(1);
  creature.weaponDefense1.set(1);
  creature.weaponDefense2.set(1);
  creature.weaponDefense3.set(1);
  creature.magDefense1.set(1);
  creature.magDefense2.set(1);
  creature.magDefense3.set(1);
  creature.magDefense4.set(1);
  creature.magDefense5.set(1);
  
  // NEW: Add enemyPower and baseDamage
  creature.enemyPower.set(1);
  creature.baseDamage.set(1);
  
  console.log("Complete isolation patch applied to " + creature.name);
});
```

**Expected result:** All enemies deal 1-2 damage per hit (absolute minimum)

## Documentation Structure

As you progress through decompilation, document findings in these files:

### 1. Function Catalog
Create: `decompilation/analysis-notes/FUNCTION_CATALOG.md`

```markdown
# Damage Calculation Functions

## Function: calculate_physical_damage
- **Address:** 0x8001abcd
- **Purpose:** Calculates physical weapon damage
- **Inputs:** 
  - $a0: Pointer to attacker creature
  - $a1: Pointer to defender (player)
- **Returns:** $v0: Final damage value
- **Decompiled C:**
  ...code...
```

### 2. Formula Documentation
Create: `decompilation/analysis-notes/DAMAGE_FORMULAS.md`

```markdown
# Shadow Tower Damage Formulas

## Physical Damage
Formula: `((baseDamage + attack1) * enemyPower) - weaponDefense`

Where:
- baseDamage: offset 0x11 (UInt16)
- attack1: offset 0x07 (UInt8)
- enemyPower: offset 0x0f (UInt16)
- weaponDefense: Player stat

## Magic Damage
Formula: `((baseDamage + magic1) * enemyPower) - magDefense[element]`
...
```

### 3. Test Results
Create: `decompilation/analysis-notes/TEST_RESULTS.md`

```markdown
# Field Testing Results

## Test 1: enemyPower Verification
- Date: 2025-12-27
- Creature: Acid Slime
- Original damage: 10 HP
- Modified enemyPower: 1 → 10
- Resulting damage: 100 HP
- **Conclusion:** enemyPower is a 10x multiplier ✓
```

## Quick Reference

### Key Files
```
decompilation/
├── ST.EXE                              # Main executable (491KB)
├── hp_damage.mips                      # Damage routines (65KB)
├── GHIDRA_IMPORT_INSTRUCTIONS.md       # Setup guide
├── MIPS_REFERENCE.md                   # MIPS instruction reference
├── analysis-notes/
│   ├── INITIAL_ANALYSIS_RESULTS.md     # Binary analysis (offsets found)
│   ├── ISOLATION_PATCHES_ANALYSIS.md   # What patches do
│   ├── BINARY_CHANGE_TRACKING.md       # Code-to-binary mapping
│   ├── damage-calculation-analysis.md  # Template for findings
│   ├── FUNCTION_CATALOG.md             # To be created
│   ├── DAMAGE_FORMULAS.md              # To be created
│   └── TEST_RESULTS.md                 # To be created
└── analysis-output/
    ├── hp_damage.mips.hexdump.txt      # Hexdump of damage routines
    ├── offset_patterns.txt             # Search results for offsets
    └── ST.EXE.strings.txt              # String references
```

### Key Offsets
```
0x07 - attack1 (UInt8)
0x08 - attack2 (UInt8)
0x09 - magic1 (UInt8)
0x0f - enemyPower (UInt16) ⭐ NEW
0x11 - baseDamage (UInt16) ⭐ NEW
0x4a - weaponDefense1 (UInt16)
0x4c - weaponDefense2 (UInt16)
0x4e - weaponDefense3 (UInt16)
0x50-0x58 - magDefense1-5 (UInt16)
```

### Commands
```bash
# Install Ghidra
wget https://github.com/NationalSecurityAgency/ghidra/releases/download/Ghidra_10.4_build/ghidra_10.4_PUBLIC_20230928.zip
unzip ghidra_10.4_PUBLIC_20230928.zip

# Run Ghidra
cd ghidra_10.4_PUBLIC
./ghidraRun

# Trace isolation patches
./trace_isolation_patches.sh

# Run binary analysis
./analyze_binaries.sh
```

## Success Criteria

You'll know you've succeeded when:

- [ ] Ghidra project created and files imported
- [ ] Damage calculation function(s) identified
- [ ] Formula decompiled to C pseudocode
- [ ] enemyPower role confirmed (multiplier/additive/other)
- [ ] baseDamage role confirmed (base value/modifier/other)
- [ ] In-game testing validates the formula
- [ ] Complete documentation of damage calculations
- [ ] Isolation patches can be extended to include new fields
- [ ] Randomization can safely modify enemyPower/baseDamage

## Questions to Answer

The decompilation should answer:

1. **What is the exact damage formula?**
2. **How are enemyPower and baseDamage used?**
3. **Are there different formulas for physical vs magic damage?**
4. **How do weaponDefense and magDefense reduce damage?**
5. **Are there critical hits or damage variance?**
6. **How do element types affect damage?**
7. **What's the minimum/maximum possible damage?**
8. **Are there other unknown fields affecting damage?**

## Timeline Estimate

- **Setup Ghidra:** 30 minutes
- **Import files and analyze:** 1 hour
- **Find damage functions:** 1-2 hours
- **Decompile and understand:** 2-3 hours
- **Test in-game:** 1-2 hours
- **Document findings:** 1 hour

**Total:** ~6-10 hours of focused work

## Support Resources

- **Ghidra Documentation:** https://ghidra-sre.org/
- **MIPS Instruction Set:** http://www.mrc.uidaho.edu/mrc/people/jff/digital/MIPSir.html
- **PSX Dev Wiki:** https://psx-spx.consoledev.net/
- **This Repository:** All analysis files in `decompilation/`

## Next Step

**👉 Install Ghidra and import ST.EXE following `GHIDRA_IMPORT_INSTRUCTIONS.md`**

Once Ghidra is running and files are imported, begin searching for functions that reference offsets 0x0f and 0x11.

---

**Last Updated:** 2025-12-27
**Status:** Ready for decompilation
**Prerequisites:** Ghidra installed, files imported
**Goal:** Understand complete damage calculation formula
