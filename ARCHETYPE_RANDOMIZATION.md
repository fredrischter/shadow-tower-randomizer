# Archetype-Based Map Randomization System

## Overview

The new map randomization system uses **archetype fields** defined on exits in map.json to determine which areas can be swapped. Only areas with matching archetype patterns can swap with each other.

## How It Works

### Exit Archetypes (defined in map.json)

Exit archetypes are set on individual door exits:
- `"archetype": "pipe-end"` - Marks exits of bidirectional pipe areas (2 exits)
- `"archetype": "funnel-input"` - Marks the input of a one-way funnel
- `"archetype": "funnel-output"` - Marks the output of a one-way funnel
- `"archetype": "dead-end"` - Marks the single exit of a dead-end area
- `"archetype": "3-way-pipe-joint-end"` - Marks exits of 3-way junction areas (3 exits, any direction)

### Area Classification

Areas are classified based on their exit archetype fields:

1. **Pipe** - Area has exits marked with `"pipe-end"` (2 exits)
2. **Funnel** - Area has one `"funnel-input"` and one `"funnel-output"` (2 exits, one-way)
3. **Dead-End** - Area has exit(s) marked with `"dead-end"` (1 exit)
4. **3-Way-Pipe-Joint** - Area has exits marked with `"3-way-pipe-joint-end"` (3 exits, any direction)

**Only areas with archetype fields set will be randomized.**

## Current Archetype Configuration

Based on map.json archetype fields:

### Pipe Areas (2)
- `human_world_cursed_region`
  - Exit 3 (pipe-end) → human_world_solitary_region
  - Exit 31 (pipe-end) → shadow_tower_part1b
- `illusion_world_bewilderment_domain`
  - Exit 20 (pipe-end) → illusion_world_worship_domain
  - Exit 18 (pipe-end) → illusion_world_gloomy_domain

### Funnel Areas (5)
- `fire_world_phoenix_cave`
  - Exit 0 (funnel-input) → shadow_tower_part2a
  - Exit 1 (funnel-output) → shadow_tower_part2b
- `water_world_watery_labyrinth_area`
  - Exit 4 (funnel-input) → water_world_sunken_river_area
  - Exit 9 (funnel-output) → water_world_white_rain_area
- `earth_world_stone_cavern`
  - Exit 4 (funnel-input) → earth_world_poisonous_cavern
  - Exit 7 (funnel-output) → earth_world_false_pit_cavern
- `water_world_sunken_river_area`
  - Exit 1 (funnel-input) → shadow_tower_part3a
  - Exit 5 (funnel-output) → water_world_watery_labyrinth_area
- `death_world_undead_layer`
  - Exit 15 (funnel-input) → death_world_dark_castle_layer
  - Exit 12 (funnel-output) → death_world_gate_of_the_dead

### Dead-End Areas (2)
- `earth_world_rotting_cavern`
  - Exit 13 (dead-end) → shadow_tower_part1c
- `earth_world_quaking_cavern`
  - Exit 3 (dead-end) → earth_world_poisonous_cavern

### 3-Way-Pipe-Joint Areas (2)
- `shadow_tower_part1c`
  - Exit 5 (3-way-pipe-joint-end) → human_world_forgotten_region
  - Exit 11 (3-way-pipe-joint-end) → earth_world_rotting_cavern
  - Exit 9 (3-way-pipe-joint-end) → earth_world_poisonous_cavern
- `shadow_tower_part2b`
  - Exit 9 (3-way-pipe-joint-end) → water_world_impure_pool_area
  - Exit 7 (3-way-pipe-joint-end) → fire_world_burning_cavern
  - Exit 4 (3-way-pipe-joint-end) → fire_world_phoenix_cave

**Total: 11 swappable areas (out of 36 total areas)**

## Swap Rules

### Pipe Swaps
- Can swap the 2 pipe areas with each other
- **Regular swap:** Entrance1 ↔ Entrance2, Exit1 ↔ Exit2
- **Inverted swap (50% chance):** Entrance1 ↔ Exit2, Exit1 ↔ Entrance2

### Funnel Swaps
- Can swap the 2 funnel areas with each other
- **Direction preserved:** Input always maps to input, output to output
- No inversion (one-way flow must be maintained)

### Dead-End Swaps
- Can swap the 2 dead-end areas with each other
- Single exit swaps destinations

### 3-Way-Pipe-Joint Swaps
- Can swap 3-way-pipe-joint areas with each other
- **Random permutation:** The 3 exits can be shuffled in any order (6 possible permutations)
- All directions remain bidirectional

## Implementation Details

### Key Functions

**`classifyAreaArchetype(area)`**
- Reads archetype fields from door exits
- Returns "pipe", "funnel", "dead-end", or null

**`buildArchetypeAllowLists(map)`**
- Groups areas by archetype
- Only includes areas with archetype fields set
- Returns: `{ "pipe": [...], "funnel": [...], "dead-end": [...] }`

**`swapAreasByArchetype(map, area1Name, area2Name, invertPipe)`**
- Swaps exits between two areas of same archetype
- Handles pipe inversion, funnel direction preservation
- Maintains bidirectional wayback consistency

**`performArchetypeRandomization(map, allowLists)`**
- Picks random archetype with 2+ areas
- Selects 2 random areas from that archetype
- Performs swap (pipes: 50% chance to invert)

### Randomization Process

```javascript
if (params.randomizeMap) {
    const allowLists = buildArchetypeAllowLists(generated);
    
    for (var i = 0; i < 5; i++) {
        performArchetypeRandomization(generated, allowLists);
    }
}
```

**Default:** 5 swap iterations per attempt

## Adding More Swappable Areas

To make more areas swappable, add archetype fields to their exits in map.json:

### Example: Making an area a pipe
```json
{
  "id": "5",
  "dest": "some_area",
  "type": "door",
  "rotation": 2,
  "archetype": "pipe-end",
  "label": "Entrance"
}
```

### Example: Making an area a funnel
```json
{
  "id": "0",
  "dest": "area_before",
  "type": "door",
  "rotation": 1,
  "archetype": "funnel-input",
  "label": "Input"
},
{
  "id": "1",
  "dest": "area_after",
  "type": "door",
  "rotation": 2,
  "archetype": "funnel-output",
  "label": "Output"
}
```

### Example: Making an area a dead-end
```json
{
  "id": "10",
  "dest": "some_area",
  "type": "door",
  "rotation": 3,
  "archetype": "dead-end",
  "label": "Only Exit"
}
```

### Example: Making an area a 3-way-pipe-joint
```json
{
  "id": "5",
  "dest": "area_north",
  "type": "door",
  "rotation": 0,
  "archetype": "3-way-pipe-joint-end",
  "label": "North Exit"
},
{
  "id": "11",
  "dest": "area_west",
  "type": "door",
  "rotation": 1,
  "archetype": "3-way-pipe-joint-end",
  "label": "West Exit"
},
{
  "id": "9",
  "dest": "area_south",
  "type": "door",
  "rotation": 2,
  "archetype": "3-way-pipe-joint-end",
  "label": "South Exit"
}
```

## Advantages

1. **Explicit control** - Only areas you mark get randomized
2. **Safe by design** - Archetype matching prevents broken connections
3. **Gradual rollout** - Can enable randomization area-by-area
4. **Funnel support** - Properly handles one-way progression
5. **Pipe flexibility** - Supports both regular and inverted swaps

## Task Reference

**Task #25:** Archetype-based map randomization system
- Removed circle spin algorithm
- Removed `nonSwitchable` fields
- Implemented archetype-based classification from map.json exit fields
- Added pipe/funnel/dead-end swap support with direction handling

