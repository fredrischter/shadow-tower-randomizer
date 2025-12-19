# Experimental ST.EXE Patches - HP Store Region Targeting

## Approach

Based on MIPS disassembly analysis, found 4 instructions that store to HP address 0x198f2a:

1. **0x02c77c:** `SH $s0, 0x8f2a($v0)` - **Actual HP value storage** (HIGH PRIORITY)
2. **0x05e96c:** `SH $zero, 0x8f2a($at)` - Entity initialization
3. **0x05fe78:** `SH $zero, 0x8f2a($at)` - State reset
4. **0x06154c:** `SH $zero, 0x8f2a($at)` - Full initialization

Previous experiments failed because they targeted arithmetic-heavy regions (damage calculation),
but HP stores are in separate regions. This approach targets code AROUND HP store instructions.

## Experiments

All 20 experiments modify ADDIU instructions in regions around HP stores to reduce values by 1/4.

### Experiments 1-5: HP Store #1 Region (0x02c77c) ⭐ HIGHEST PRIORITY

These target the region where actual damage values get stored to HP.

| Exp | Value Range | Patches | Description |
|-----|-------------|---------|-------------|
|  1 | 10-100 | 36 | Broad (10-100) |
|  2 | 20-60 | 14 | Mid (20-60) |
|  3 | 30-80 | 10 | Upper-Mid (30-80) |
|  4 | 40-100 | 15 | High (40-100) |
|  5 | 15-50 | 19 | Lower-Mid (15-50) |

### Experiments 6-10: HP Store #2 Region (0x05e96c)

Entity initialization code.

| Exp | Value Range | Patches | Description |
|-----|-------------|---------|-------------|
|  6 | 10-100 | 24 | Broad (10-100) |
|  7 | 20-60 | 15 | Mid (20-60) |
|  8 | 30-80 | 17 | Upper-Mid (30-80) |
|  9 | 40-100 | 13 | High (40-100) |
| 10 | 15-50 | 13 | Lower-Mid (15-50) |

### Experiments 11-15: HP Store #3 Region (0x05fe78)

State reset code.

| Exp | Value Range | Patches | Description |
|-----|-------------|---------|-------------|
| 11 | 10-100 | 21 | Broad (10-100) |
| 12 | 20-60 | 9 | Mid (20-60) |
| 13 | 30-80 | 5 | Upper-Mid (30-80) |
| 14 | 40-100 | 8 | High (40-100) |
| 15 | 15-50 | 12 | Lower-Mid (15-50) |

### Experiments 16-20: HP Store #4 Region (0x06154c)

Full entity initialization.

| Exp | Value Range | Patches | Description |
|-----|-------------|---------|-------------|
| 16 | 10-100 | 16 | Broad (10-100) |
| 17 | 20-60 | 9 | Mid (20-60) |
| 18 | 30-80 | 8 | Upper-Mid (30-80) |
| 19 | 40-100 | 3 | High (40-100) |
| 20 | 15-50 | 13 | Lower-Mid (15-50) |

## Testing Strategy

1. **Start with Experiments 1-5** (HP Store #1 - actual damage application)
2. If one works, test others in same region to narrow down value range
3. If none work, try Experiments 6-10 (initialization)
4. Experiments 11-20 are lower priority (reset/init code)

## Expected Results

If experiment works:
- ✅ Magic damage ~25% (1/4 of original)
- ✅ Physical damage may also be affected (modifies final HP store)
- ✅ Game loads and runs normally

## Why This Approach is Better

**Previous:** Targeted arithmetic regions (damage calculation) → wrong code path for magic  
**New:** Targets HP store regions (final damage application) → affects all damage types

See HP_STORE_ANALYSIS.md for complete technical details.
