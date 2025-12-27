# Accurate Creature Template Search Results

**Search Method:** Exact 16-byte pattern matching (14 stats + 2-byte HP)

**Source:** creatures_data.csv

**Target:** FDAT.T (complete file scan)

---

## Summary

- **Creature types searched:** 30
- **Creature types found:** 13
- **Total template occurrences:** 32

---

## Template Distribution by Part

| Part | Template Count | Description |
|------|----------------|-------------|
| **Part 44** | 10 | |
| **Part 54** | 8 | |
| **Other** | 14 | |
| **Total** | 32 | |

---

## Detailed Template Locations

### acid skull (2 occurrence(s))

**Stats:** Str=0, Spd=0, Def=1, Bal=1, Sla=0, Smh=0, Pir=0, Spr=0, Foc=0, Ham=0, Pur=0, Par=0, Mel=0, Sol=0, HP=280

**Pattern:** `00 00 01 01 00 00 00 00 00 00 00 00 00 00 18 01`

**Offsets:**
- `0x00386828` (other section)
- `0x00386b28` (other section)

### acid slime (4 occurrence(s))

**Stats:** Str=0, Spd=0, Def=0, Bal=1, Sla=0, Smh=0, Pir=0, Spr=0, Foc=0, Ham=0, Pur=0, Par=0, Mel=0, Sol=0, HP=95

**Pattern:** `00 00 00 01 00 00 00 00 00 00 00 00 00 00 5F 00`

**Offsets:**
- `0x002558e8` (Part 44 (map), +0x00e8 from part start)
- `0x002562a8` (Part 44 (map), +0x0aa8 from part start)
- `0x002f0028` (Part 54 (hybrid), +0x0028 from part start)
- `0x002f0328` (Part 54 (hybrid), +0x0328 from part start)

### blood skull (2 occurrence(s))

**Stats:** Str=0, Spd=1, Def=0, Bal=0, Sla=1, Smh=0, Pir=0, Spr=0, Foc=0, Ham=0, Pur=0, Par=0, Mel=0, Sol=0, HP=263

**Pattern:** `00 01 00 00 01 00 00 00 00 00 00 00 00 00 07 01`

**Offsets:**
- `0x003868e8` (other section)
- `0x00386be8` (other section)

### blood slime (4 occurrence(s))

**Stats:** Str=0, Spd=0, Def=0, Bal=0, Sla=0, Smh=0, Pir=0, Spr=0, Foc=0, Ham=0, Pur=0, Par=0, Mel=1, Sol=0, HP=96

**Pattern:** `00 00 00 00 00 00 00 00 00 00 00 00 01 00 60 00`

**Offsets:**
- `0x002559a8` (Part 44 (map), +0x01a8 from part start)
- `0x002f00e8` (Part 54 (hybrid), +0x00e8 from part start)
- `0x002f03e8` (Part 54 (hybrid), +0x03e8 from part start)
- `0x002f06e8` (Part 54 (hybrid), +0x06e8 from part start)

### casket (2 occurrence(s))

**Stats:** Str=0, Spd=0, Def=0, Bal=0, Sla=0, Smh=0, Pir=0, Spr=1, Foc=1, Ham=1, Pur=2, Par=0, Mel=0, Sol=1, HP=261

**Pattern:** `00 00 00 00 00 00 00 01 01 01 02 00 00 01 05 01`

**Offsets:**
- `0x002f0628` (Part 54 (hybrid), +0x0628 from part start)
- `0x00c73928` (other section)

### dark spider (5 occurrence(s))

**Stats:** Str=1, Spd=0, Def=0, Bal=0, Sla=0, Smh=0, Pir=1, Spr=0, Foc=0, Ham=0, Pur=0, Par=0, Mel=0, Sol=0, HP=121

**Pattern:** `01 00 00 00 00 00 01 00 00 00 00 00 00 00 79 00`

**Offsets:**
- `0x0009a828` (other section)
- `0x0009ae28` (other section)
- `0x00255828` (Part 44 (map), +0x0028 from part start)
- `0x00255e28` (Part 44 (map), +0x0628 from part start)
- `0x002561e8` (Part 44 (map), +0x09e8 from part start)

### demon bat (3 occurrence(s))

**Stats:** Str=0, Spd=0, Def=0, Bal=0, Sla=0, Smh=1, Pir=1, Spr=0, Foc=1, Ham=1, Pur=0, Par=1, Mel=0, Sol=0, HP=135

**Pattern:** `00 00 00 00 00 01 01 00 01 01 00 01 00 00 87 00`

**Offsets:**
- `0x00255ee8` (Part 44 (map), +0x06e8 from part start)
- `0x00256128` (Part 44 (map), +0x0928 from part start)
- `0x00db08e8` (other section)

### fanged worm (1 occurrence(s))

**Stats:** Str=1, Spd=0, Def=0, Bal=2, Sla=0, Smh=0, Pir=0, Spr=0, Foc=1, Ham=2, Pur=0, Par=0, Mel=0, Sol=0, HP=434

**Pattern:** `01 00 00 02 00 00 00 00 01 02 00 00 00 00 B2 01`

**Offsets:**
- `0x002f04a8` (Part 54 (hybrid), +0x04a8 from part start)

### fat mole (1 occurrence(s))

**Stats:** Str=0, Spd=0, Def=0, Bal=0, Sla=0, Smh=0, Pir=0, Spr=0, Foc=0, Ham=0, Pur=0, Par=0, Mel=0, Sol=0, HP=2000

**Pattern:** `00 00 00 00 00 00 00 00 00 00 00 00 00 00 D0 07`

**Offsets:**
- `0x0138db7a` (other section)

### guardian (1 occurrence(s))

**Stats:** Str=1, Spd=0, Def=0, Bal=0, Sla=0, Smh=0, Pir=1, Spr=1, Foc=1, Ham=0, Pur=0, Par=0, Mel=0, Sol=1, HP=480

**Pattern:** `01 00 00 00 00 00 01 01 01 00 00 00 00 01 E0 01`

**Offsets:**
- `0x0009afa8` (other section)

### parasite (1 occurrence(s))

**Stats:** Str=2, Spd=0, Def=0, Bal=0, Sla=0, Smh=0, Pir=0, Spr=2, Foc=0, Ham=1, Pur=2, Par=0, Mel=0, Sol=2, HP=220

**Pattern:** `02 00 00 00 00 00 00 02 00 01 02 00 00 02 DC 00`

**Offsets:**
- `0x002f01a8` (Part 54 (hybrid), +0x01a8 from part start)

### shadow spider (2 occurrence(s))

**Stats:** Str=0, Spd=0, Def=1, Bal=1, Sla=0, Smh=1, Pir=0, Spr=0, Foc=0, Ham=0, Pur=0, Par=0, Mel=0, Sol=0, HP=240

**Pattern:** `00 00 01 01 00 01 00 00 00 00 00 00 00 00 F0 00`

**Offsets:**
- `0x0009a8e8` (other section)
- `0x0009aee8` (other section)

### skeleton (4 occurrence(s))

**Stats:** Str=0, Spd=1, Def=0, Bal=1, Sla=1, Smh=0, Pir=0, Spr=0, Foc=0, Ham=0, Pur=0, Par=0, Mel=0, Sol=1, HP=384

**Pattern:** `00 01 00 01 01 00 00 00 00 00 00 00 00 01 80 01`

**Offsets:**
- `0x00255ca8` (Part 44 (map), +0x04a8 from part start)
- `0x00255fa8` (Part 44 (map), +0x07a8 from part start)
- `0x003869a8` (other section)
- `0x00386ca8` (other section)

---

## Notes

- This search uses exact 16-byte pattern matching for all stats + HP
- Only templates with exact stat matches from creatures_data.csv are found
- Each occurrence represents a potential creature template in the game data
