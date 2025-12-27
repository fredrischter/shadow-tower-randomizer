# Creature Template Locations in FDAT.T

## Overview

Creature templates contain the base stats that enemies use in combat. These are separate from creature spawn data (which only contains position, creature type, and drop tables).

## What are Creature Templates?

**Creature Templates** store the baseline attributes that define each creature type:
- **Combat Stats**: Strength, Speed, Defense, Balance
- **Damage Types**: Slash, Smash, Pierce, Spirit
- **Special Stats**: Focus, Harmony, Purity, Particle, Melting, Soul
- **HP Value**: Base hit points

These stats are what the player absorbs when defeating a creature (as shown in the absorption menu).

## Data Structure

### Template Format (from creatures_data.csv)

Each creature has 15 stat fields stored sequentially:

| Field | Description | Data Type |
|-------|-------------|-----------|
| Strength | Physical power | UInt8 |
| Speed | Attack speed | UInt8 |
| Defense | Damage reduction | UInt8 |
| Balance | Stability | UInt8 |
| Slash | Slash damage affinity | UInt8 |
| Smash | Smash damage affinity | UInt8 |
| Pierce | Pierce damage affinity | UInt8 |
| Spirit | Magical power | UInt8 |
| Focus | Concentration | UInt8 |
| Harmony | Balance stat | UInt8 |
| Purity | Holy affinity | UInt8 |
| Particle | Particle effect | UInt8 |
| Melting | Fire affinity | UInt8 |
| Soul | Soul power | UInt8 |
| HP | Base hit points | UInt16 |

**Total size per template**: 16 bytes (14 bytes for stats + 2 bytes for HP)

## Example: Acid Slime Stats

From `creatures_data.csv`:
```
Name: acid slime
Strength: 0
Speed: 0
Defense: 0
Balance: 1
Slash: 0
Smash: 0
Pierce: 0
Spirit: 0  ← Used to calculate magic attack power
Focus: 0
Harmony: 0
Purity: 0
Particle: 0
Melting: 0
Soul: 0
HP: 95
```

## Finding Creature Templates in FDAT.T

### Method 1: Using Creature ID

Creatures are identified by their ID in spawn data. The mapping is defined in `data_model.js`:

```javascript
const creatureNameByAbsoluteOffset = {
  0x255804: "dark_spider",
  0x2558c4: "acid_slime",  // ← Acid slime spawn location
  0x255984: "blood_slime",
  // ... etc
}
```

**Key insight**: These are SPAWN locations, not template locations.

### Method 2: Search for HP Values

Since HP is a 16-bit value at the end of each template, you can search for known HP values:

**Acid Slime**: HP = 95 (0x005F in hex, little-endian: 5F 00)
**Blood Slime**: HP = 96 (0x0060 in hex, little-endian: 60 00)

### Method 3: Template Section Location (Hypothesis)

Based on the structure of FDAT.T, creature templates are likely stored in a dedicated section, separate from spawn data.

**Probable locations**:
1. **Beginning of FDAT.T** - Templates as lookup table
2. **Separate template section** - Indexed by creature type ID
3. **Embedded in creature type definition** - Part of creature model data

## How to Find Slime Template

### Step 1: Dump FDAT.T in Hex

```bash
hexdump -C iso-dump/ST/COM/FDAT.T > fdat_hex.txt
```

### Step 2: Search for HP Signature

Search for the HP value pattern:
- **Acid Slime HP**: 95 decimal = 0x5F hex
  - Little-endian: `5F 00`
  - Search pattern: `5F 00` at offset +14 from stats

- **Blood Slime HP**: 96 decimal = 0x60 hex
  - Little-endian: `60 00`
  - Search pattern: `60 00` at offset +14 from stats

### Step 3: Verify with Stat Pattern

Acid slime has:
- Balance = 1 (offset +3)
- All other stats = 0
- HP = 95 (offset +14)

**Expected byte pattern**:
```
00 00 00 01 00 00 00 00 00 00 00 00 00 00 5F 00
^Str^Spd^Def^Bal^Sla^Smh^Pir^Spr^Foc^Har^Pur^Par^Mel^Sol^HP--^
```

### Step 4: Check Spirit Stat for Magic Power

The **Spirit** field (offset +7) is likely what feeds into `EntityStateData.enemy_power`:
- Acid slime: Spirit = 0 (weak magic)
- Tongue imp: Spirit = 1 (moderate magic)
- Elder: Spirit = ? (strong magic)

## Data Flow: Template → EntityStateData → Damage

```
FDAT.T Creature Template
  ↓
  Spirit stat (offset +7)
  ↓
EntityStateData.enemy_power (offset +0x1a)
  ↓
Damage Calculation Function (0x8003d430)
  ↓
damage = (base_damage * player_stat * enemy_power) / 10
  ↓
HP Subtraction
```

## EntityStateData Structure

When a creature attacks, the game creates an **EntityStateData** object:

```c
struct EntityStateData {
    uint8_t  type;           // +0x00 - Entity type (0x30 = magic attack)
    // ... other fields ...
    uint16_t enemy_power;    // +0x1a - Calculated from creature template Spirit stat
    uint16_t attack2;        // +0x1c
    uint16_t attack3;        // +0x1e
    // ... 48 bytes total for attack types
};
```

**Calculation** (hypothesis):
```c
enemy_power = creature_template.spirit * difficulty_modifier + base_power
```

## Finding Templates by Memory Debugging

Since you can debug memory at runtime, here's how to locate templates:

### Runtime Approach

1. **Identify creature ID** when slime attacks
2. **Watch EntityStateData creation** at enemy_power offset (+0x1a)
3. **Trace backwards** to find template read location
4. **Note file offset** where Spirit stat is read

### Memory Breakpoint Strategy

Set breakpoint on EntityStateData write:
```
Break on: Memory write to [EntityStateData + 0x1a]
Condition: Value != 0
Action: Log stack trace and source address
```

This will show exactly where the Spirit stat is being read from FDAT.T.

## Template Section Hypothesis

Based on typical FromSoftware data layout, templates are likely:

**Location**: FDAT.T header or dedicated template section
**Organization**: Array indexed by creature type ID
**Size**: ~100 creatures × 16 bytes = ~1,600 bytes

**Probable offset ranges to search**:
1. **0x0000 - 0x1000** (header/lookup tables)
2. **After spawn data** (each area's spawn section)
3. **Centralized section** (single template database)

## Next Steps for Investigation

1. **Search FDAT.T for acid slime pattern**: `00 00 00 01 00 00 00 00 00 00 00 00 00 00 5F 00`
2. **Verify adjacent templates**: Blood slime should be nearby with pattern `00 00 00 00 00 00 00 00 00 00 00 00 01 00 60 00`
3. **Map all HP values**: Search for all known HP values from creatures_data.csv
4. **Cross-reference with spawn locations**: Ensure templates are separate from spawns

## Summary

To answer your question: **Creature templates are in FDAT.T, but their exact location requires binary search.**

**For Acid Slime specifically**:
- **Stats to search for**: Balance=1, Spirit=0, HP=95
- **Byte pattern**: `00 00 00 01 00 00 00 00 00 00 00 00 00 00 5F 00`
- **Purpose**: Spirit stat (offset +7) feeds `enemy_power` in damage calculation

Once you find the template location and tell me the offset, I can document the complete template section structure for all creatures.
