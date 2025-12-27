# Damage Calculation Analysis

## Objective
Identify enemy_power and base_damage fields in creature data structure.

## Known Creature Structure Offsets

### Documented Fields
- 0x07: attack1 (UInt8)
- 0x08: attack2 (UInt8)
- 0x09: magic1 (UInt8)
- 0x32: hp (UInt16)
- 0x4a: weaponDefense1 (UInt16)
- 0x4c: weaponDefense2 (UInt16)
- 0x4e: weaponDefense3 (UInt16)

### Unknown Fields (Candidates for enemy_power/base_damage)
- 0x0f: something3 (UInt16) - **INVESTIGATE**
- 0x11: something4 (UInt16) - **INVESTIGATE**

## Functions to Analyze

### Damage Calculation Functions
(To be filled in during analysis)

### Functions Referencing Creature Stats
(To be filled in during analysis)

## Findings

### Date: [YYYY-MM-DD]
**Analyst:** [Your Name]

**Function:** [Function Name/Address]

**Observations:**
- 

**Conclusions:**
- 

## Field Confirmations

| Offset | Size | Name | Purpose | Confirmed? |
|--------|------|------|---------|------------|
| 0x0f | UInt16 | ? | ? | No |
| 0x11 | UInt16 | ? | ? | No |

