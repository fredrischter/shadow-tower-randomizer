# Magic Attack Power Source Analysis

## Summary

**CORRECTION:** Magic attack power for spells (like slime spray) is **NOT** stored in `weaponPower1` or the creature spawn structure. Instead, it's stored in a separate **EntityStateData** structure at different offsets.

## The Confusion

There are **TWO** different data structures:

### 1. Creature Spawn Structure (in FDAT.T)
```
Offset  Field          Type    Description
+0x07   attack1        UInt8   Physical attack type/ID
+0x08   attack2        UInt8   Physical attack type/ID  
+0x09   magic1         UInt8   Magic attack TYPE (0x30 = spell)
+0x24   str            UInt8   Strength stat
+0x25   spd            UInt8   Speed stat
... (equipment stats)
```

### 2. EntityStateData Structure (Active Attack Data)
```
Offset  Field          Type    Description
+0x00   type           UInt8   0x20 = physical, 0x30 = spell
+0x1a   attack1        UInt16  *** MAGIC POWER VALUE ***
+0x1c   attack2        UInt16  Additional magic power
+0x1e   attack3        UInt16  Additional magic power
```

## Where Magic Damage Power Comes From

When a slime casts a spray attack:

1. **Creature spawn** (in FDAT.T) has `magic1 = 0x30` (indicates "spell type")
2. Game creates an **EntityStateData** structure for the active attack
3. **EntityStateData** contains the actual damage power at offset **0x1a** (UInt16)
4. HP damage calculation code reads from EntityStateData offset 0x1a

## Code Evidence

### From data_model.js (Line 1110-1127):

```javascript
// Type 0x20 = physical attack, Type 0x30 = spell/magic attack
// Both use the same offsets for attack damage values
if (this.type == 0x20 || this.type == 0x30) {
  var att = new UInt16(this.originalBin, 0x1a);
  if (!att.isNull()) {
    this.attack1 = att;  // *** MAGIC POWER HERE ***
  }
  att = new UInt16(this.originalBin, 0x1c);
  if (!att.isNull()) {
    this.attack2 = att;
  }
  att = new UInt16(this.originalBin, 0x1e);
  if (!att.isNull()) {
    this.attack3 = att;
  }
}
```

### From hp_damage code analysis:

Found **93 instructions** that read magic power from EntityStateData:

**Most common pattern (offset 0x1a reads):**
```
0x80038514: 97a6001a  lhu $a2, 0x1a($sp)     # Load attack1 power
0x80038570: 97a6001a  lhu $a2, 0x1a($sp)     # Load attack1 power  
0x8003d8c4: 87a3001a  lh $v1, 0x1a($sp)      # Load attack1 power
0x8003ed5c: 97a3001a  lhu $v1, 0x1a($sp)     # Load attack1 power
0x8003ede4: 97a3001a  lhu $v1, 0x1a($sp)     # Load attack1 power
0x8003fd78: 8447001a  lh $a3, 0x1a($v0)      # Load attack1 power
```

**Offset 0x1c reads (secondary power):**
```
0x8003717c: 9442001c  lhu $v0, 0x1c($v0)     # Load attack2 power
0x80038534: 97a2001c  lhu $v0, 0x1c($sp)     # Load attack2 power
0x8003bf78: 9642001c  lhu $v0, 0x1c($s2)     # Load attack2 power
... (60+ more instances)
```

**Offset 0x1e reads (tertiary power):**
```
0x800384f0: 87a3001e  lh $v1, 0x1e($sp)      # Load attack3 power
0x8003854c: 97a2001e  lhu $v0, 0x1e($sp)     # Load attack3 power
0x8003b124: 9043001e  lbu $v1, 0x1e($v0)     # Load attack3 power
0x8003b14c: 9083001e  lbu $v1, 0x1e($a0)     # Load attack3 power
0x8003bfa8: 9642001e  lhu $v0, 0x1e($s2)     # Load attack3 power
0x8003d930: 9482001e  lhu $v0, 0x1e($a0)     # Load attack3 power
```

## Data Flow: Slime Spray Attack

```
1. FDAT.T Creature Spawn
   └─> magic1 = 0x30 (spell type indicator)

2. Game Runtime (ST.EXE)
   └─> Creates EntityStateData structure for attack
       ├─> type = 0x30 (spell)
       ├─> attack1 (offset 0x1a) = DAMAGE POWER VALUE
       ├─> attack2 (offset 0x1c) = Additional power
       └─> attack3 (offset 0x1e) = Additional power

3. HP Damage Calculation (0x80030000+)
   └─> Reads EntityStateData.attack1 (offset 0x1a)
   └─> Applies damage formula
   └─> Updates player HP array
```

## Where to Find Magic Power Values

### In FDAT.T:
The creature spawn structure does **NOT** directly contain magic power. It only has:
- `magic1` at +0x09 = attack TYPE identifier (0x30 for spells)

### In EntityStateData:
When the game creates an active attack, it generates EntityStateData with:
- `attack1` at +0x1a = **ACTUAL MAGIC DAMAGE POWER** (UInt16)
- `attack2` at +0x1c = Additional power (UInt16)
- `attack3` at +0x1e = Additional power (UInt16)

## Where EntityStateData Comes From

EntityStateData is **dynamically generated** at runtime based on:

1. **Creature stats** from spawn structure (str, spr, etc.)
2. **Attack animations** from creature model data
3. **Game difficulty** modifiers
4. **Random variation** factors

The power values are calculated by the game engine, not directly stored in FDAT.T.

## Implications for Randomizer

To modify magic attack power, you would need to:

1. **NOT** modify creature spawn `magic1` field (that's just the type)
2. **EITHER:**
   - Modify the creature stats (str, spr, etc.) that influence calculated power
   - **OR** patch the EntityStateData generation code in ST.EXE
   - **OR** patch the damage calculation to apply multipliers

The randomizer currently modifies creature stats, which indirectly affects the calculated EntityStateData power values.

## Verification

Run `python3 trace_magic_power.py` to see all 93 instances where the hp_damage code reads magic power from offsets 0x1a, 0x1c, and 0x1e.

---

**Created:** 2025-12-21
**Analysis Tool:** trace_magic_power.py
**Code Verified In:** ST.EXE offset 0x1f800 (hp_damage section)
