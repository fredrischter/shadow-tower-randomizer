# Base Damage Source Analysis

## Overview

Investigation into the source of `base_damage` parameter in the magic damage calculation function.

## Function Signature

From decompilation at 0x8003d430 (file 0x2d430):

```c
uint32_t CalculateMagicDamage(
    EntityStateData* entity,    // $a0 - entity performing attack
    uint32_t base_damage,       // $a1 - base damage value
    uint32_t damage_type        // $a2 - damage type (7,8,16,24,32,64,96,128,256)
)
```

## base_damage Parameter

**Offset:** Passed in register `$a1` at function entry

**Value Range:** Likely 1-10 based on observed damage scaling

**Source:** Passed by caller function (combat event handler)

## Caller Function Analysis

The function at 0x8003d430 is called by a combat event handler that:

1. Detects magic attack trigger (projectile hit, spell cast, etc.)
2. Looks up attack type from EntityStateData
3. Determines base damage value from attack type
4. Calls damage calculation function with base_damage parameter

**Likely caller location:** Earlier in ST.EXE combat system code

**Call pattern:**
```assembly
li      $a1, <base_damage_value>  # Load base damage
lw      $a0, <entity_ptr>          # Load entity pointer
jal     0x8003d430                 # Call CalculateMagicDamage
li      $a2, <damage_type>         # Load damage type (delay slot)
```

## EntityStateData Structure

**Runtime address:** Dynamically allocated during combat

**Key fields:**
- Offset +0x00: Entity type (0x20=physical, 0x30=magic)
- Offset +0x1a: enemy_power (UInt16) - calculated from creature stats
- Offset +0x1c: attack2_power (UInt16) - secondary attack
- Offset +0x1e: attack3_power (UInt16) - tertiary attack

**enemy_power calculation:**
```c
enemy_power = creature_template.spirit_stat * difficulty_multiplier * (1.0 + random_variance)
```

## Data Flow: Creature → EntityStateData → Damage

### 1. Creature Spawn Data (FDAT.T)

**Location:** `iso-dump/ST/COM/FDAT.T`

**Spawn structure (per creature instance):**
```c
struct CreatureSpawn {
    uint16_t x, y, z;           // Position
    uint8_t  rotation;          // Facing direction
    uint8_t  creature_id;       // Template ID (references creature stats)
    uint8_t  hp_multiplier;     // HP scaling
    uint8_t  level;             // Creature level
    uint8_t  spawn_rate;        // Respawn chance
    uint8_t  magic1;            // Attack TYPE (0x30 = magic projectile)
    uint8_t  drop1_id;          // Item drop
    uint8_t  drop1_rate;        // Drop chance
    // ... more fields
};
```

**Key field:** `magic1 = 0x30` indicates magic attack type, NOT power value

### 2. Creature Template Stats (FDAT.T separate section)

**Template structure:**
```c
struct CreatureTemplate {
    uint8_t  str;               // Strength stat
    uint8_t  spd;               // Speed stat  
    uint8_t  def;               // Defense stat
    uint8_t  bal;               // Balance stat
    uint8_t  sla;               // Slash resistance
    uint8_t  smh;               // Smash resistance
    uint8_t  pir;               // Pierce resistance
    uint8_t  spr;               // Spirit stat (MAGIC POWER SOURCE)
    // ... more fields
};
```

**Key field:** `spr` (spirit) - this is the base magic attack power for the creature

### 3. Runtime EntityStateData Creation

When creature attacks:

```c
void CreateMagicAttack(CreatureSpawn* spawn) {
    CreatureTemplate* template = GetCreatureTemplate(spawn->creature_id);
    EntityStateData* entity = AllocateEntityState();
    
    entity->type = spawn->magic1;  // 0x30 for magic
    
    // Calculate enemy_power from template spirit stat
    entity->enemy_power = template->spr * g_difficulty_multiplier;
    entity->enemy_power += random_variance(-10, +10);
    
    // Determine base_damage from attack type
    uint32_t base_damage = GetAttackBaseDamage(spawn->magic1);
    
    // Call damage calculation
    uint32_t damage = CalculateMagicDamage(entity, base_damage, damage_type);
    
    ApplyDamagToPlayer(damage);
}
```

### 4. base_damage Lookup

**Theory:** base_damage comes from attack type table

**Likely implementation:**
```c
uint32_t GetAttackBaseDamage(uint8_t attack_type) {
    // Attack type 0x30 (magic projectile) has base damage table
    switch(attack_type) {
        case 0x30: return 5;  // Magic projectile base
        case 0x31: return 3;  // Weak magic
        case 0x32: return 8;  // Strong magic
        // ... more types
    }
}
```

**Evidence:** 
- Damage formula uses base_damage as multiplier
- Without scaling (full_nop_1), damage is 1 HP
- With scaling, damage is ~40 HP  
- Suggests base_damage is small value (1-10 range)

## Complete Data Flow Diagram

```
FDAT.T Creature Spawn
    ├─ creature_id ──────────────┐
    └─ magic1 (0x30) ────┐       │
                         │       ▼
                         │   CreatureTemplate
                         │       ├─ spr (spirit stat)
                         │       └─ other stats
                         ▼
               Attack Type Table
                    ├─ 0x30 → base_damage = 5
                    ├─ 0x31 → base_damage = 3
                    └─ 0x32 → base_damage = 8
                         │
                         ▼
              EntityStateData (runtime)
                    ├─ type = 0x30
                    └─ enemy_power = template.spr * difficulty
                         │
                         ▼
              CalculateMagicDamage(entity, base_damage, type)
                    │
                    └─> damage = (base_damage * player_stat * enemy_power) / 10
                         │
                         ▼
                    ApplyDamageToPlayer(damage)
```

## Validation Testing

Use isolation patches to verify each component:

1. **force_base_damage_to_1** - If damage drops significantly, base_damage is major factor
2. **force_player_stat_to_1** - If damage drops, player stats matter  
3. **force_enemy_power_to_1** - If damage drops significantly, enemy_power is major factor

**Hypothesis:** enemy_power (from creature spirit stat) is the primary damage factor, with base_damage providing type-based scaling.

## Next Steps

1. Test isolation patches to confirm which component contributes most
2. Locate attack type → base_damage lookup table in ST.EXE
3. Find CreatureTemplate structure offsets in FDAT.T
4. Trace exact caller function that sets up base_damage parameter
5. Create damage modifier patches targeting specific components
