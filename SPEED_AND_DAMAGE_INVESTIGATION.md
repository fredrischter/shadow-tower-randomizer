# ST.EXE Speed Investigation - Detailed Findings

## Investigation Summary

Detailed analysis of ST.EXE to locate creature speed data.

## File Information
- **File**: iso-dump/ST.EXE  
- **Size**: 491,520 bytes (480 KB)
- **Format**: PS-X EXE (PlayStation executable)

## Speed Data Search Results

### Original Hypothesis
Offset 0x000853 was expected to contain speed multiplier array: [32, 64, 96, 128, 160, 192, 224, 255]

### Actual Findings
The exact byte sequence [32, 64, 96, 128, 160, 192, 224, 255] does **NOT** appear consecutively in ST.EXE.

### Hex Dump Analysis (Offset 0x850-0x870)
```
00000850: 00 00 00 00 00 00 20 00 00 00 40 00 00 00 60 00
00000860: 00 00 80 00 00 00 a0 00 00 00 c0 00 00 00 e0 00
```

This shows:
- Offset 0x856-0x857: `20 00` = 32 (little-endian 16-bit)
- Offset 0x85A-0x85B: `40 00` = 64  
- Offset 0x85E-0x85F: `60 00` = 96
- Offset 0x862-0x863: `80 00` = 128
- Offset 0x866-0x867: `a0 00` = 160
- Offset 0x86A-0x86B: `c0 00` = 192
- Offset 0x86E-0x86F: `e0 00` = 224

### Data Format
**Speed data is stored as 16-bit little-endian values with 4-byte spacing**

- Each speed value occupies 2 bytes
- Values are spaced 4 bytes apart  
- Format: `XX 00` where XX is the speed byte

### Revised Understanding

The speed table is at offset **0x856** (not 0x853), stored as:
- 16-bit little-endian integers
- 4-byte stride between values
- Total length: 7 values × 4 bytes = 28 bytes

## Projectile Damage Investigation

### Search Results
Refined search found **5,901** potential damage table candidates, filtered down to top 20 high-confidence matches.

### Top 5 Candidates:

1. **Offset 0x071361** (Confidence: 68.29)
   - Length: 50 bytes
   - Damage Range: 1-98
   - Average: 30.8
   - Values: [11, 1, 12, 5, 12, 9, 12, 13, 12, 17, 12, 21, 12, 25...]

2. **Offset 0x07154F** (Confidence: 68.22)
   - Length: 60 bytes  
   - Damage Range: 15-74
   - Average: 30.4
   - Values: [15, 17, 15, 19, 15, 21, 15, 23, 15, 25, 15, 27...]

3. **Offset 0x071480** (Confidence: 68.08)
   - Length: 59 bytes
   - Damage Range: 4-89
   - Average: 30.8
   - Values: [4, 14, 7, 14, 10, 14, 13, 14, 16, 14, 19, 14...]

4. **Offset 0x0726FB** (Confidence: 67.90)
   - Length: 59 bytes
   - Damage Range: 5-106
   - Average: 28.4
   - Values: [5, 14, 15, 106, 5, 17, 15, 100, 5, 19, 15, 94...]

5. **Offset 0x0713E5** (Confidence: 67.03)
   - Length: 56 bytes
   - Damage Range: 3-98
   - Average: 32.0
   - Values: [12, 3, 13, 6, 13, 10, 13, 14, 13, 17, 13, 21...]

### Pattern Analysis
All top candidates show:
- Length of 40-60 bytes (consistent with ~50 creature types)
- Damage values in reasonable range (5-100)
- Good variation (20-30 unique values)
- Some incremental progression
- Alternating or structured patterns

### Recommended Next Steps

1. **For Speed Data:**
   - Update patcher to use offset 0x856
   - Handle 16-bit little-endian format with 4-byte stride
   - Test with 2x multiplier first for safety

2. **For Projectile Damage:**
   - Test top 5 candidates by hex editing values
   - Load modified EXE in emulator
   - Verify which offset affects projectile damage in-game
   - Most promising: 0x071361, 0x07154F, 0x071480

## Testing Protocol

### Speed Testing:
1. Patch ST.EXE at offset 0x856 (16-bit values)
2. Multiply each value by 2.0
3. Replace ST.EXE in ISO
4. Test in emulator - creatures should move 2x faster

### Damage Testing:
1. Hex edit offset 0x071361
2. Double all damage values
3. Replace ST.EXE in ISO
4. Test in emulator - projectiles should do 2x damage

## Files Generated
- `projectile_damage_candidates.json` - Full list of candidates with scores
- `find_projectile_damage_refined.js` - Improved search tool
- `patch_stexe_speed.js` - Speed patcher (needs update for correct format)
- This document - Investigation findings

