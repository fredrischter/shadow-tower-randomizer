# Map Data Compendium

Generated from FDAT.T part 44 SIZED_MIX_PARTS

**Part 44 structure:** Map data file (part 41 = logo, part 41+3 = data)

**Total tables:** 7

## Tables Overview

| Table | Offset Range | Size | Purpose |
|-------|--------------|------|----------|
| 0 | 0x4-0x2c04 | 11264 bytes | Table 0 |
| 1 | 0x2c04-0x3ec4 | 4800 bytes | Table 1 |
| 2 | 0x3ec4-0x5ae4 | 7200 bytes | Table 2 |
| 3 | 0x5ae4-0x7bb4 | 8400 bytes | Table 3 |
| 4 | 0x7bb4-0x7eb4 | 768 bytes | Table 4 |
| 5 | 0x7eb4-0x86b4 | 2048 bytes | Table 5 |
| 6 | 0x86b4-0x8934 | 640 bytes | Table 6 |

---

## Table 0

**Filename:** 0 4-2c04.sizedMixPart

**Offset range:** 0x4 - 0x2c04

**Size:** 11264 bytes (0x2c00)

**Statistics:**

- Non-zero bytes: 1177 (10.4%)
- 0xFF bytes: 1519 (13.5%)
- Zero bytes: 8568 (76.1%)
- Unique byte values: 128

**Potential entry sizes:**

| Size | Entry Count | Confidence |
|------|-------------|------------|
| 11 bytes | 1024 | High |
| 16 bytes | 704 | High |
| 22 bytes | 512 | High |
| 32 bytes | 352 | High |
| 44 bytes | 256 | High |

### First 256 bytes

```
000004: 00 30 ff 00 01 00 00 08 08 00 00 00 5a 00 19 00
000014: 02 00 6e 00 ff 00 b3 02 08 03 b3 02 37 00 00 00
000024: 00 00 00 00 01 00 00 00 00 00 01 00 00 00 00 00
000034: 00 00 79 00 00 00 00 00 12 00 14 00 12 00 00 00
000044: 00 00 00 00 00 00 00 00 00 00 32 00 26 00 3a 00
000054: 37 00 32 00 39 00 2f 00 48 00 51 00 12 00 00 00
000064: 00 00 00 00 14 00 00 00 30 00 00 00 48 00 00 00
000074: 60 00 00 00 90 00 00 00 c0 00 00 00 d0 00 00 00
000084: ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff
000094: ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff
0000a4: ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff
0000b4: ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff
0000c4: 00 30 ff 00 01 00 00 03 02 00 00 00 3c 00 0a 00
0000d4: 00 00 21 00 08 00 58 02 00 04 00 00 3f 00 00 00
0000e4: 00 00 00 00 00 00 00 01 00 00 00 00 00 00 00 00
0000f4: 00 00 5f 00 00 00 00 00 08 00 0a 00 08 00 00 00
```

### Last 128 bytes

```
002b84: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
002b94: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
002ba4: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
002bb4: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
002bc4: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
002bd4: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
002be4: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
002bf4: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
```

---

## Table 1

**Filename:** 1 2c04-3ec4.sizedMixPart

**Offset range:** 0x2c04 - 0x3ec4

**Size:** 4800 bytes (0x12c0)

**Statistics:**

- Non-zero bytes: 205 (4.3%)
- 0xFF bytes: 287 (6.0%)
- Zero bytes: 4308 (89.8%)
- Unique byte values: 51

**Potential entry sizes:**

| Size | Entry Count | Confidence |
|------|-------------|------------|
| 8 bytes | 600 | High |
| 10 bytes | 480 | High |
| 15 bytes | 320 | High |
| 16 bytes | 300 | High |
| 20 bytes | 240 | High |

### First 256 bytes

```
002c04: 64 01 16 00 47 00 1e 01 ff ff 14 50 64 00 00 00
002c14: 00 04 00 fc 00 00 00 fc 64 01 15 00 1e 01 ff ff
002c24: ff ff 14 64 00 00 00 00 00 04 00 fe 00 00 00 00
002c34: 19 02 11 00 1c 01 ff ff ff ff 19 64 00 00 00 00
002c44: 00 00 00 04 00 00 00 04 64 00 20 00 32 00 35 00
002c54: ff ff 23 28 64 00 00 00 00 00 00 04 00 00 00 04
002c64: 64 00 23 00 ff ff ff ff ff ff 23 00 00 00 00 00
002c74: 00 0e 00 fc 00 00 00 04 64 00 24 00 a1 00 ff ff
002c84: ff ff 23 64 00 00 00 00 00 0c 00 fc 00 00 00 fc
002c94: 32 00 25 00 1c 01 ff ff ff ff 23 64 00 00 00 00
002ca4: 00 0e 00 04 00 00 00 04 32 00 1a 00 01 00 ff ff
002cb4: ff ff 23 32 00 00 00 00 00 02 00 fc 00 00 00 04
002cc4: 32 01 12 00 1e 01 ff ff ff ff 14 64 00 00 00 00
002cd4: 00 00 00 fc 00 00 00 00 19 00 24 00 ff ff ff ff
002ce4: ff ff 23 00 00 00 00 00 00 00 00 04 00 00 00 04
002cf4: 19 00 22 00 27 01 ff ff ff ff 23 64 00 00 00 00
```

### Last 128 bytes

```
003e44: 00 00 00 00 00 00 00 00 ff 00 00 00 00 00 00 00
003e54: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
003e64: ff 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
003e74: 00 00 00 00 00 00 00 00 ff 00 00 00 00 00 00 00
003e84: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
003e94: ff 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
003ea4: 00 00 00 00 00 00 00 00 ff 00 00 00 00 00 00 00
003eb4: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
```

---

## Table 2

**Filename:** 2 3ec4-5ae4.sizedMixPart

**Offset range:** 0x3ec4 - 0x5ae4

**Size:** 7200 bytes (0x1c20)

**Statistics:**

- Non-zero bytes: 1629 (22.6%)
- 0xFF bytes: 598 (8.3%)
- Zero bytes: 4973 (69.1%)
- Unique byte values: 125

**Potential entry sizes:**

| Size | Entry Count | Confidence |
|------|-------------|------------|
| 8 bytes | 900 | High |
| 9 bytes | 800 | High |
| 10 bytes | 720 | High |
| 12 bytes | 600 | High |
| 15 bytes | 480 | High |

### First 256 bytes

```
003ec4: ff 00 ff 00 78 01 b0 04 e8 03 00 00 00 00 d4 fe
003ed4: 00 00 00 00 00 00 00 00 ff 10 ff 00 00 02 b0 04
003ee4: e8 03 00 00 64 00 00 00 00 00 00 00 00 00 00 00
003ef4: ff 10 ff 04 00 03 b0 04 e8 03 00 00 96 00 1e 00
003f04: 00 00 00 00 00 00 00 00 ff 10 ff 00 00 00 b0 04
003f14: e8 03 00 00 5a 00 06 ff 06 ff 00 00 00 00 00 00
003f24: ff 10 ff 00 00 00 b0 04 e8 03 00 00 5a 00 38 ff
003f34: 00 00 00 00 00 00 00 00 ff 10 ff 00 00 00 b0 04
003f44: e8 03 00 00 50 00 06 ff 6a ff 00 00 00 00 00 00
003f54: ff 10 ff 80 00 00 b0 04 e8 03 00 00 50 00 06 ff
003f64: 00 00 00 00 00 00 00 00 32 10 ff 00 00 00 b0 04
003f74: e8 03 00 00 50 00 06 ff 9c ff 00 00 00 00 00 00
003f84: 32 10 ff 00 00 00 b0 04 e8 03 00 00 50 00 06 ff
003f94: 00 00 00 00 00 00 00 00 ff 10 ff 00 00 00 b0 04
003fa4: e8 03 00 00 96 00 00 00 00 00 00 00 00 00 00 00
003fb4: ff 10 ff 00 00 00 78 05 b0 04 00 00 fa 00 2c 01
```

### Last 128 bytes

```
005a64: 00 00 00 00 00 00 00 00 ff 00 ff 00 00 00 00 00
005a74: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
005a84: ff 00 ff 00 00 00 00 00 00 00 00 00 00 00 00 00
005a94: 00 00 00 00 00 00 00 00 e2 00 ff 00 00 00 00 00
005aa4: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
005ab4: 15 00 ff 00 00 00 78 05 d0 07 00 00 00 00 00 00
005ac4: 00 00 00 00 00 00 00 00 14 00 ff 00 00 00 78 05
005ad4: e8 03 00 00 00 00 00 00 00 00 00 00 00 00 00 00
```

---

## Table 3

**Filename:** 3 5ae4-7bb4.sizedMixPart

**Offset range:** 0x5ae4 - 0x7bb4

**Size:** 8400 bytes (0x20d0)

**Statistics:**

- Non-zero bytes: 450 (5.4%)
- 0xFF bytes: 674 (8.0%)
- Zero bytes: 7276 (86.6%)
- Unique byte values: 85

**Potential entry sizes:**

| Size | Entry Count | Confidence |
|------|-------------|------------|
| 8 bytes | 1050 | High |
| 10 bytes | 840 | High |
| 14 bytes | 600 | High |
| 15 bytes | 560 | High |
| 16 bytes | 525 | High |

### First 256 bytes

```
005ae4: 3f 40 4c 00 20 00 00 04 00 00 00 00 00 f6 22 00
005af4: 4b fd ff ff ff ff ff ff 3f 40 4c 00 20 00 00 04
005b04: 00 00 00 f8 00 f6 22 00 00 fe 00 00 ff ff ff ff
005b14: 3f 40 4c 00 20 00 00 04 00 00 00 f8 00 0a 22 00
005b24: 00 fe 00 00 ff ff ff ff 41 40 4c 00 20 00 00 04
005b34: 00 00 00 f8 00 0a 24 00 50 fd ff ff ff ff ff ff
005b44: 41 40 4c 00 20 00 00 04 00 00 00 00 00 0a 24 00
005b54: 00 fe 00 00 ff ff ff ff 42 40 4c 00 20 00 00 04
005b64: 00 00 00 00 00 0a 25 00 00 fe 00 00 ff ff ff ff
005b74: 42 40 48 00 20 00 00 00 00 0a 00 00 00 00 2b 00
005b84: 46 fd ff ff ff ff ff ff 42 40 49 00 20 00 00 00
005b94: 00 0a 00 00 00 00 2a 00 00 fe 00 00 ff ff ff ff
005ba4: 42 40 48 00 20 00 00 00 00 f6 00 f8 00 00 2b 00
005bb4: 00 fe 00 00 ff ff ff ff 44 40 48 00 20 00 00 00
005bc4: 00 f6 00 f8 00 00 31 00 00 fe 00 00 ff ff ff ff
005bd4: 44 40 48 00 20 00 00 00 00 0a 00 f8 00 00 31 00
```

### Last 128 bytes

```
007b34: 00 00 00 00 00 00 00 00 00 00 00 00 ff ff 00 00
007b44: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
007b54: 00 00 00 00 ff ff 00 00 00 00 00 00 00 00 00 00
007b64: 00 00 00 00 00 00 00 00 00 00 00 00 ff ff 00 00
007b74: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
007b84: 00 00 00 00 ff ff 00 00 00 00 00 00 00 00 00 00
007b94: 00 00 00 00 00 00 00 00 00 00 00 00 ff ff 00 00
007ba4: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
```

---

## Table 4

**Filename:** 4 7bb4-7eb4.sizedMixPart

**Offset range:** 0x7bb4 - 0x7eb4

**Size:** 768 bytes (0x300)

**Statistics:**

- Non-zero bytes: 90 (11.7%)
- 0xFF bytes: 47 (6.1%)
- Zero bytes: 631 (82.2%)
- Unique byte values: 40

**Potential entry sizes:**

| Size | Entry Count | Confidence |
|------|-------------|------------|
| 16 bytes | 48 | High |
| 8 bytes | 96 | High |
| 12 bytes | 64 | High |
| 32 bytes | 24 | High |
| 24 bytes | 32 | High |

### First 256 bytes

```
007bb4: 1c 01 00 00 41 40 47 00 40 fa 00 00 00 07 00 00
007bc4: 00 04 00 00 00 10 0d 00 5b 00 00 00 3e 40 48 00
007bd4: 00 f9 00 fc 00 07 00 00 00 00 00 00 00 10 19 00
007be4: 1c 01 00 00 3d 40 4c 00 00 03 00 fc 80 05 00 00
007bf4: 00 06 00 00 00 10 21 00 36 01 00 00 44 40 4a 00
007c04: 00 f9 00 00 00 02 00 04 00 01 00 00 00 10 33 00
007c14: 0a 01 00 00 47 40 49 00 00 00 00 03 00 00 00 00
007c24: 00 00 00 00 00 10 46 00 1c 01 00 00 48 40 4b 00
007c34: 00 fa 00 00 00 ff 00 00 00 00 00 00 00 10 51 00
007c44: ff ff 00 00 00 00 00 00 00 00 00 00 00 00 00 00
007c54: 00 00 00 00 00 00 00 00 36 01 00 00 4a 40 4a 00
007c64: 00 fa 00 00 00 03 00 0c 00 02 00 00 00 10 4a 00
007c74: 0a 01 00 00 49 42 48 00 00 03 00 00 00 07 00 00
007c84: 00 04 00 00 00 10 5c 00 0c 01 00 00 4a 40 49 00
007c94: 00 fd 00 00 00 03 00 00 00 0e 00 00 00 10 49 00
007ca4: ff ff 00 00 00 00 00 00 00 00 00 00 00 00 00 00
```

### Last 128 bytes

```
007e34: 00 00 00 00 00 00 00 00 ff ff 00 00 00 00 00 00
007e44: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
007e54: ff ff 00 00 00 00 00 00 00 00 00 00 00 00 00 00
007e64: 00 00 00 00 00 00 00 00 ff ff 00 00 00 00 00 00
007e74: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
007e84: ff ff 00 00 00 00 00 00 00 00 00 00 00 00 00 00
007e94: 00 00 00 00 00 00 00 00 ff ff 00 00 00 00 00 00
007ea4: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
```

---

## Table 5

**Filename:** 5 7eb4-86b4.sizedMixPart

**Offset range:** 0x7eb4 - 0x86b4

**Size:** 2048 bytes (0x800)

**Statistics:**

- Non-zero bytes: 0 (0.0%)
- 0xFF bytes: 256 (12.5%)
- Zero bytes: 1792 (87.5%)
- Unique byte values: 2

**Potential entry sizes:**

| Size | Entry Count | Confidence |
|------|-------------|------------|
| 8 bytes | 256 | Medium |
| 16 bytes | 128 | Low |
| 32 bytes | 64 | Low |
| 64 bytes | 32 | Low |
| 128 bytes | 16 | Low |

### First 256 bytes

```
007eb4: ff ff 00 00 00 00 00 00 00 00 00 00 00 00 00 00
007ec4: ff ff 00 00 00 00 00 00 00 00 00 00 00 00 00 00
007ed4: ff ff 00 00 00 00 00 00 00 00 00 00 00 00 00 00
007ee4: ff ff 00 00 00 00 00 00 00 00 00 00 00 00 00 00
007ef4: ff ff 00 00 00 00 00 00 00 00 00 00 00 00 00 00
007f04: ff ff 00 00 00 00 00 00 00 00 00 00 00 00 00 00
007f14: ff ff 00 00 00 00 00 00 00 00 00 00 00 00 00 00
007f24: ff ff 00 00 00 00 00 00 00 00 00 00 00 00 00 00
007f34: ff ff 00 00 00 00 00 00 00 00 00 00 00 00 00 00
007f44: ff ff 00 00 00 00 00 00 00 00 00 00 00 00 00 00
007f54: ff ff 00 00 00 00 00 00 00 00 00 00 00 00 00 00
007f64: ff ff 00 00 00 00 00 00 00 00 00 00 00 00 00 00
007f74: ff ff 00 00 00 00 00 00 00 00 00 00 00 00 00 00
007f84: ff ff 00 00 00 00 00 00 00 00 00 00 00 00 00 00
007f94: ff ff 00 00 00 00 00 00 00 00 00 00 00 00 00 00
007fa4: ff ff 00 00 00 00 00 00 00 00 00 00 00 00 00 00
```

### Last 128 bytes

```
008634: ff ff 00 00 00 00 00 00 00 00 00 00 00 00 00 00
008644: ff ff 00 00 00 00 00 00 00 00 00 00 00 00 00 00
008654: ff ff 00 00 00 00 00 00 00 00 00 00 00 00 00 00
008664: ff ff 00 00 00 00 00 00 00 00 00 00 00 00 00 00
008674: ff ff 00 00 00 00 00 00 00 00 00 00 00 00 00 00
008684: ff ff 00 00 00 00 00 00 00 00 00 00 00 00 00 00
008694: ff ff 00 00 00 00 00 00 00 00 00 00 00 00 00 00
0086a4: ff ff 00 00 00 00 00 00 00 00 00 00 00 00 00 00
```

---

## Table 6

**Filename:** 6 86b4-8934.sizedMixPart

**Offset range:** 0x86b4 - 0x8934

**Size:** 640 bytes (0x280)

**Statistics:**

- Non-zero bytes: 357 (55.8%)
- 0xFF bytes: 0 (0.0%)
- Zero bytes: 283 (44.2%)
- Unique byte values: 64

**Potential entry sizes:**

| Size | Entry Count | Confidence |
|------|-------------|------------|
| 40 bytes | 16 | High |
| 64 bytes | 10 | High |
| 80 bytes | 8 | High |
| 128 bytes | 5 | High |
| 8 bytes | 80 | High |

### First 256 bytes

```
0086b4: 6e 00 1c 14 6e 10 1a 1a 5a 16 20 1a 40 16 1a 1e
0086c4: 42 2a 22 16 56 26 16 16 4a 38 2a 12 44 34 16 1c
0086d4: 2e 40 16 18 62 44 1c 10 52 4a 18 20 66 5e 20 1e
0086e4: 40 16 1a 26 2a 64 28 1a 56 54 26 1e 74 5e 1a 20
0086f4: 54 6c 26 20 80 7c 0e 16 70 92 12 0e 44 74 22 18
008704: 4a 8c 1a 14 36 8c 0e 10 58 00 18 16 42 00 12 0c
008714: 26 6c 2a 20 20 78 18 14 0c 66 14 18 20 6a 0e 18
008724: 00 66 0a 0a 52 6a 18 20 0c 54 14 16 00 3c 1a 16
008734: 18 46 16 12 24 20 1c 18 38 02 0a 0a 2e 02 0a 0a
008744: 24 02 0a 0a 0e 02 16 06 1a 0c 20 10 12 38 12 1e
008754: 00 1e 1a 22 00 1c 24 16 02 02 16 06 10 08 0a 0c
008764: 0c 2a 1e 12 24 12 10 20 1a 58 16 0c 78 20 06 14
008774: 6a 2e 14 06 5c 36 18 08 7e 54 08 16 80 90 10 10
008784: 44 9a 18 06 44 8c 06 14 00 78 0c 10 28 64 1c 08
008794: 2e 0c 28 0a 4a 00 1e 16 26 0c 1a 1e 40 28 18 14
0087a4: 38 4c 0c 18 44 54 22 16 70 92 10 0e 38 9a 0c 06
```

### Last 128 bytes

```
0088b4: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
0088c4: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
0088d4: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
0088e4: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
0088f4: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
008904: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
008914: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
008924: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
```

---

## Notes

### Common PSX Map Data Structures

- **Table 0:** Often creature spawn data
- **Table 1:** Item placement data
- **Table 2:** Exit/entrance data
- **Table 3:** Scenario objects (decorations, props)
- **Table 4:** Collision data or triggers
- **Table 5:** Unknown/additional data
- **Table 6:** Unknown/additional data

### Analysis Approach

1. **Identify entry size:** Look for repeating patterns and common divisors
2. **Cross-reference with map.json:** Match exits/entrances by ID
3. **Test modifications:** Change values and observe in-game effects
4. **Document structure:** Create data_model.js classes for each table

