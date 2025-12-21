# Item Data Compendium

Extracted from FDAT.T part 481

**Total items:** 1536
**Entry size:** 44 bytes

## Field Structure

Each item entry is 44 bytes with the following fields:

| Offset | Field Name | Type | Description |
|--------|------------|------|-------------|
| 0x00 | unknown1 | u8 |  |
| 0x01 | unknown2 | u8 |  |
| 0x02 | unknown3 | u8 |  |
| 0x03 | unknown4 | u8 |  |
| 0x04 | texture_index_1 | u8 |  |
| 0x05 | texture_index_2 | u8 |  |
| 0x06 | unknown5 | u8 |  |
| 0x07 | type | u8 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| 0x08 | unknown6 | u8 |  |
| 0x09 | unknown7 | u8 |  |
| 0x0A | unknown8 | u8 |  |
| 0x0B | unknown9 | u8 |  |
| 0x0C | unknown10 | u8 |  |
| 0x0D | hand_type | u8 | 6=one-hand, 7=two-hand |
| 0x0E | unknown11 | u8 |  |
| 0x0F | unknown12 | u8 |  |
| 0x10 | str | u8 | Strength stat |
| 0x11 | spd | u8 | Speed stat |
| 0x12 | def | u8 | Defense stat |
| 0x13 | bal | u8 | Balance stat |
| 0x14 | sla | u8 | Slash stat |
| 0x15 | smh | u8 | Smash stat |
| 0x16 | pir | u8 | Pierce stat |
| 0x17 | spr | u8 | Spirit stat |
| 0x18 | foc | u8 | Focus stat |
| 0x19 | ham | u8 | Hammer stat |
| 0x1A | pur | u8 | Purity stat |
| 0x1B | par | u8 | Parry stat |
| 0x1C | mel | u8 | Melee power stat |
| 0x1D | sol | u8 | Solomon/Holy stat |
| 0x1E | hp | u8 | HP bonus |
| 0x1F | attribute1_value | u8 |  |
| 0x20 | attribute1_type | u8 |  |
| 0x21 | attribute2_value | u8 |  |
| 0x22 | attribute2_type | u8 |  |
| 0x23 | elemental_type | u8 |  |
| 0x24 | elemental_power | u8 |  |
| 0x25 | max_dura | u8 | Max durability |
| 0x26 | weight | u8 |  |
| 0x27 | unknown13 | u8 |  |
| 0x28 | dura | u8 | Current durability |
| 0x29 | unknown14 | u8 |  |
| 0x2A | unknown15 | u8 |  |
| 0x2B | unknown16 | u8 |  |

## Item Entries

### Item 0 (0x0): short_sword

**Offset:** 0x0

**Raw hex:**
```
000000: 20 1c 00 00 0e 00 ff 0c b8 01 00 05 e8 03 00 00
000010: 00 04 00 02 00 00 00 00 00 00 00 00 ed 00 ff 0c
000020: b8 01 dc 05 e8 03 00 00 00 04 00 02
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x20 | 32 |  |
| unknown2 | 0x1c | 28 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x0e | 14 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0xff | 255 |  |
| type | 0x0c | 12 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0xb8 | 184 |  |
| unknown7 | 0x01 | 1 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x05 | 5 |  |
| unknown10 | 0xe8 | 232 |  |
| hand_type | 0x03 | 3 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x04 | 4 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x02 | 2 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0xed | 237 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0xff | 255 | HP bonus |
| attribute1_value | 0x0c | 12 |  |
| attribute1_type | 0xb8 | 184 |  |
| attribute2_value | 0x01 | 1 |  |
| attribute2_type | 0xdc | 220 |  |
| elemental_type | 0x05 | 5 |  |
| elemental_power | 0xe8 | 232 |  |
| max_dura | 0x03 | 3 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x04 | 4 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x02 | 2 |  |

### Item 1 (0x1): short_sword

**Offset:** 0x2C

**Raw hex:**
```
00002c: 00 00 00 00 00 00 00 00 ed 00 ff 0c b8 01 dc 05
00003c: e8 03 00 00 00 04 00 02 00 00 00 00 00 00 00 00
00004c: ed 00 ff 0c b8 01 dc 05 e8 03 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0xed | 237 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xff | 255 |  |
| unknown9 | 0x0c | 12 |  |
| unknown10 | 0xb8 | 184 |  |
| hand_type | 0x01 | 1 | 6=one-hand, 7=two-hand |
| unknown11 | 0xdc | 220 |  |
| unknown12 | 0x05 | 5 |  |
| str | 0xe8 | 232 | Strength stat |
| spd | 0x03 | 3 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x04 | 4 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x02 | 2 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0xed | 237 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xff | 255 |  |
| elemental_type | 0x0c | 12 |  |
| elemental_power | 0xb8 | 184 |  |
| max_dura | 0x01 | 1 | Max durability |
| weight | 0xdc | 220 |  |
| unknown13 | 0x05 | 5 |  |
| dura | 0xe8 | 232 | Current durability |
| unknown14 | 0x03 | 3 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 2 (0x2): deadly_short_sword

**Offset:** 0x58

**Raw hex:**
```
000058: 00 04 00 02 00 00 00 00 00 00 00 00 00 00 ff 08
000068: 00 00 00 08 c4 09 00 00 00 00 00 00 00 00 00 00
000078: 00 00 00 00 ff 00 ff 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x04 | 4 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x02 | 2 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0xff | 255 |  |
| unknown12 | 0x08 | 8 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x08 | 8 | Balance stat |
| sla | 0xc4 | 196 | Slash stat |
| smh | 0x09 | 9 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0xff | 255 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0xff | 255 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 3 (0x3): long_sword

**Offset:** 0x84

**Raw hex:**
```
000084: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
000094: ff 00 ff 00 08 02 00 00 40 06 00 00 00 00 00 00
0000a4: 00 00 00 00 00 00 00 00 fe 00 ff 0c
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0xff | 255 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0xff | 255 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x08 | 8 | Slash stat |
| smh | 0x02 | 2 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x40 | 64 | Focus stat |
| ham | 0x06 | 6 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0xfe | 254 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xff | 255 |  |
| unknown16 | 0x0c | 12 |  |

### Item 4 (0x4): long_sword

**Offset:** 0xB0

**Raw hex:**
```
0000b0: 00 03 dc 05 00 08 00 00 01 00 01 00 00 00 00 00
0000c0: 00 00 00 00 00 00 ff 08 00 00 c4 09 80 0b 00 00
0000d0: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x03 | 3 |  |
| unknown3 | 0xdc | 220 |  |
| unknown4 | 0x05 | 5 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x08 | 8 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x01 | 1 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x01 | 1 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0xff | 255 | Pierce stat |
| spr | 0x08 | 8 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0xc4 | 196 | Purity stat |
| par | 0x09 | 9 | Parry stat |
| mel | 0x80 | 128 | Melee power stat |
| sol | 0x0b | 11 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 5 (0x5): long_sword

**Offset:** 0xDC

**Raw hex:**
```
0000dc: ff 00 ff 00 00 00 00 00 00 00 00 00 00 00 00 00
0000ec: 00 00 00 00 00 00 00 00 33 00 ff 0c 00 04 f8 07
0000fc: 00 02 00 00 01 00 01 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0xff | 255 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xff | 255 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x33 | 51 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0xff | 255 | Purity stat |
| par | 0x0c | 12 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x04 | 4 | Solomon/Holy stat |
| hp | 0xf8 | 248 | HP bonus |
| attribute1_value | 0x07 | 7 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x02 | 2 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x01 | 1 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x01 | 1 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 6 (0x6): keenest_long_sword

**Offset:** 0x108

**Raw hex:**
```
000108: 00 00 00 00 00 00 ff 08 00 00 c4 09 80 0b 00 00
000118: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 ff 08
000128: 00 00 c4 09 00 0c 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0xff | 255 |  |
| type | 0x08 | 8 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xc4 | 196 |  |
| unknown9 | 0x09 | 9 |  |
| unknown10 | 0x80 | 128 |  |
| hand_type | 0x0b | 11 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0xff | 255 | HP bonus |
| attribute1_value | 0x08 | 8 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xc4 | 196 |  |
| elemental_type | 0x09 | 9 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x0c | 12 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 7 (0x7): fiery_long_sword

**Offset:** 0x134

**Raw hex:**
```
000134: 00 00 04 00 00 00 00 00 ff 00 ff 00 00 04 00 00
000144: 00 02 00 00 00 00 00 00 00 00 00 00 00 00 00 00
000154: ff 00 ff 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x04 | 4 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0xff | 255 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xff | 255 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x04 | 4 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x02 | 2 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0xff | 255 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xff | 255 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 8 (0x8): silent_sword

**Offset:** 0x160

**Raw hex:**
```
000160: 00 00 00 00 00 00 00 00 00 00 00 00 ff 00 ff 00
000170: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
000180: 00 00 00 00 01 00 ff 08 00 00 78 05
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0xff | 255 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0xff | 255 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x01 | 1 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0xff | 255 |  |
| unknown13 | 0x08 | 8 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x78 | 120 |  |
| unknown16 | 0x05 | 5 |  |

### Item 9 (0x9): rapier

**Offset:** 0x18C

**Raw hex:**
```
00018c: 00 0c 00 00 00 00 00 00 00 00 02 00 00 00 00 00
00019c: 33 00 ff 0c 00 02 00 08 00 02 00 00 01 00 01 00
0001ac: 00 00 00 00 00 00 00 00 ff 00 ff 08
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x0c | 12 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x02 | 2 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x33 | 51 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0xff | 255 | Defense stat |
| bal | 0x0c | 12 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x02 | 2 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x08 | 8 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x02 | 2 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x01 | 1 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x01 | 1 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0xff | 255 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xff | 255 |  |
| unknown16 | 0x08 | 8 |  |

### Item 10 (0xA): rapier

**Offset:** 0x1B8

**Raw hex:**
```
0001b8: 80 01 d0 07 b0 04 00 00 00 00 00 00 00 00 00 00
0001c8: 00 00 00 00 ff 00 ff 00 00 00 00 00 00 00 00 00
0001d8: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x80 | 128 |  |
| unknown2 | 0x01 | 1 |  |
| unknown3 | 0xd0 | 208 |  |
| unknown4 | 0x07 | 7 |  |
| texture_index_1 | 0xb0 | 176 |  |
| texture_index_2 | 0x04 | 4 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0xff | 255 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0xff | 255 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 11 (0xB): lethal_rapier

**Offset:** 0x1E4

**Raw hex:**
```
0001e4: ff 00 ff 00 00 00 00 00 00 00 00 00 00 00 00 00
0001f4: 00 00 00 00 00 00 00 00 ff 00 ff 00 00 00 d0 07
000204: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0xff | 255 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xff | 255 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0xff | 255 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0xff | 255 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0xd0 | 208 | HP bonus |
| attribute1_value | 0x07 | 7 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 12 (0xC): shadow_blade

**Offset:** 0x210

**Raw hex:**
```
000210: 00 00 00 00 01 00 ff 08 00 00 c4 09 00 0c 00 00
000220: 00 00 00 00 00 00 02 00 00 00 00 00 ff 00 ff 00
000230: 00 02 d0 07 00 0c 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x01 | 1 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0xff | 255 |  |
| type | 0x08 | 8 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xc4 | 196 |  |
| unknown9 | 0x09 | 9 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x0c | 12 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x02 | 2 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0xff | 255 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0xff | 255 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x02 | 2 |  |
| attribute2_type | 0xd0 | 208 |  |
| elemental_type | 0x07 | 7 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x0c | 12 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 13 (0xD): shadow_wolf

**Offset:** 0x23C

**Raw hex:**
```
00023c: 00 00 00 00 00 00 00 00 33 00 ff 0c 00 02 00 08
00024c: 00 02 00 00 01 00 01 00 00 00 00 00 00 00 00 00
00025c: ff 00 ff 04 21 02 00 00 00 0c fe ff
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x33 | 51 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xff | 255 |  |
| unknown9 | 0x0c | 12 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x02 | 2 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x08 | 8 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x02 | 2 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x01 | 1 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x01 | 1 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0xff | 255 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xff | 255 |  |
| elemental_type | 0x04 | 4 |  |
| elemental_power | 0x21 | 33 |  |
| max_dura | 0x02 | 2 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x0c | 12 |  |
| unknown15 | 0xfe | 254 |  |
| unknown16 | 0xff | 255 |  |

### Item 14 (0xE): shadow_tiger

**Offset:** 0x268

**Raw hex:**
```
000268: 00 04 00 04 00 00 00 00 00 00 00 00 ff 00 ff 00
000278: a8 02 00 00 00 04 00 00 00 00 00 00 00 00 00 00
000288: 00 00 00 00 ff 00 ff 04 00 06 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x04 | 4 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x04 | 4 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0xff | 255 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0xff | 255 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0xa8 | 168 | Strength stat |
| spd | 0x02 | 2 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x04 | 4 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0xff | 255 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0xff | 255 |  |
| unknown13 | 0x04 | 4 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x06 | 6 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 15 (0xF): broad_sword

**Offset:** 0x294

**Raw hex:**
```
000294: 00 02 f4 ff 01 00 01 00 00 00 00 00 00 00 00 00
0002a4: 00 00 ff 0c 00 00 00 0c 00 00 fb ff 01 00 01 00
0002b4: 00 00 05 00 00 00 00 00 32 00 ff 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x02 | 2 |  |
| unknown3 | 0xf4 | 244 |  |
| unknown4 | 0xff | 255 |  |
| texture_index_1 | 0x01 | 1 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x01 | 1 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0xff | 255 | Defense stat |
| bal | 0x0c | 12 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x0c | 12 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0xfb | 251 | Purity stat |
| par | 0xff | 255 | Parry stat |
| mel | 0x01 | 1 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x01 | 1 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x05 | 5 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x32 | 50 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xff | 255 |  |
| unknown16 | 0x00 | 0 |  |

### Item 16 (0x10): broad_sword

**Offset:** 0x2C0

**Raw hex:**
```
0002c0: 00 01 00 00 00 01 00 00 00 00 00 00 00 00 00 00
0002d0: 00 00 00 00 00 00 ff 08 00 00 00 08 00 0c 03 00
0002e0: 00 00 00 00 00 00 02 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x01 | 1 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x01 | 1 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0xff | 255 | Pierce stat |
| spr | 0x08 | 8 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x08 | 8 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x0c | 12 | Solomon/Holy stat |
| hp | 0x03 | 3 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x02 | 2 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 17 (0x11): broad_sword

**Offset:** 0x2EC

**Raw hex:**
```
0002ec: ff 00 ff 04 00 02 00 00 00 10 00 00 00 04 00 04
0002fc: 00 00 00 00 00 00 00 00 32 00 ff 08 00 00 b0 04
00030c: e8 03 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0xff | 255 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xff | 255 |  |
| unknown4 | 0x04 | 4 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x02 | 2 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x10 | 16 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x04 | 4 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x04 | 4 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x32 | 50 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0xff | 255 | Purity stat |
| par | 0x08 | 8 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0xb0 | 176 | HP bonus |
| attribute1_value | 0x04 | 4 |  |
| attribute1_type | 0xe8 | 232 |  |
| attribute2_value | 0x03 | 3 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 18 (0x12): deadly_broad_sword

**Offset:** 0x318

**Raw hex:**
```
000318: 00 00 00 00 ff 00 ff 00 00 00 00 00 00 00 00 00
000328: 00 00 00 00 00 00 00 00 00 00 00 00 ff 00 ff 00
000338: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0xff | 255 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0xff | 255 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0xff | 255 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0xff | 255 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 19 (0x13): broad_sword

**Offset:** 0x344

**Raw hex:**
```
000344: 00 00 00 00 00 00 00 00 01 00 ff 08 00 00 00 08
000354: 00 0c 00 00 00 00 00 00 00 00 04 00 00 00 00 00
000364: 01 00 ff 00 00 00 00 08 00 00 05 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x01 | 1 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xff | 255 |  |
| unknown9 | 0x08 | 8 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x08 | 8 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x0c | 12 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x04 | 4 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x01 | 1 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xff | 255 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x08 | 8 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x05 | 5 |  |
| unknown16 | 0x00 | 0 |  |

### Item 20 (0x14): crushing_broad_sword

**Offset:** 0x370

**Raw hex:**
```
000370: 00 00 00 00 00 00 04 00 00 00 00 00 00 00 ff 00
000380: 00 00 00 0c 00 00 fc ff 00 00 00 00 00 00 04 00
000390: 00 00 00 00 32 00 ff 08 00 02 00 10
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x04 | 4 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0xff | 255 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x0c | 12 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0xfc | 252 | Pierce stat |
| spr | 0xff | 255 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x04 | 4 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x32 | 50 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0xff | 255 |  |
| unknown13 | 0x08 | 8 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x02 | 2 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x10 | 16 |  |

### Item 21 (0x15): keenest_broad_sword

**Offset:** 0x39C

**Raw hex:**
```
00039c: 00 03 0a 00 00 00 00 00 00 00 00 00 00 00 00 00
0003ac: 34 00 ff 0c 00 01 00 04 00 06 00 00 01 00 01 00
0003bc: 00 00 00 00 00 00 00 00 ff 00 ff 04
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x03 | 3 |  |
| unknown3 | 0x0a | 10 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x34 | 52 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0xff | 255 | Defense stat |
| bal | 0x0c | 12 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x01 | 1 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x04 | 4 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x06 | 6 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x01 | 1 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x01 | 1 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0xff | 255 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xff | 255 |  |
| unknown16 | 0x04 | 4 |  |

### Item 22 (0x16): guardian_broad_sword

**Offset:** 0x3C8

**Raw hex:**
```
0003c8: 00 04 00 00 00 0a 00 00 00 0a 00 04 00 00 00 00
0003d8: 00 00 00 00 03 00 ff 00 00 01 00 00 33 07 00 00
0003e8: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x04 | 4 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x0a | 10 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x0a | 10 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x04 | 4 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x03 | 3 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0xff | 255 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x01 | 1 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x33 | 51 | Melee power stat |
| sol | 0x07 | 7 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 23 (0x17): dragon_sword

**Offset:** 0x3F4

**Raw hex:**
```
0003f4: ff 00 ff 00 00 02 00 00 d7 0a 00 00 00 00 00 00
000404: 00 00 00 00 00 00 00 00 05 00 ff 00 00 00 00 00
000414: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0xff | 255 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xff | 255 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x02 | 2 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0xd7 | 215 |  |
| unknown7 | 0x0a | 10 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x05 | 5 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0xff | 255 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 24 (0x18): bastard_sword

**Offset:** 0x420

**Raw hex:**
```
000420: 00 00 00 00 ff 00 ff 00 00 00 00 00 00 00 f6 ff
000430: 00 00 00 00 00 00 00 00 00 00 00 00 ff 00 ff 00
000440: 00 00 00 00 00 00 f6 ff 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0xff | 255 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0xff | 255 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0xf6 | 246 |  |
| unknown12 | 0xff | 255 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0xff | 255 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0xff | 255 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0xf6 | 246 |  |
| unknown13 | 0xff | 255 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 25 (0x19): bastard_sword

**Offset:** 0x44C

**Raw hex:**
```
00044c: 00 00 00 00 00 00 00 00 ff 00 ff 00 00 00 00 00
00045c: 00 00 f6 ff 00 00 00 00 00 00 00 00 00 00 00 00
00046c: 00 00 ff 08 00 00 00 08 00 0c 0a 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0xff | 255 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xff | 255 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0xf6 | 246 | Defense stat |
| bal | 0xff | 255 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xff | 255 |  |
| elemental_type | 0x08 | 8 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x08 | 8 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x0c | 12 |  |
| unknown15 | 0x0a | 10 |  |
| unknown16 | 0x00 | 0 |  |

### Item 26 (0x1A): lethal_bastard_sword

**Offset:** 0x478

**Raw hex:**
```
000478: 00 00 00 00 00 00 02 00 00 00 00 00 32 00 ff 00
000488: 00 00 00 00 00 00 05 00 00 00 00 00 00 00 00 00
000498: 00 00 00 00 01 00 ff 08 00 00 c4 09
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x02 | 2 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x32 | 50 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0xff | 255 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x05 | 5 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x01 | 1 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0xff | 255 |  |
| unknown13 | 0x08 | 8 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xc4 | 196 |  |
| unknown16 | 0x09 | 9 |  |

### Item 27 (0x1B): swift_bastard_sword

**Offset:** 0x4A4

**Raw hex:**
```
0004a4: 00 0c 00 00 00 00 00 00 00 00 00 00 00 00 00 00
0004b4: 32 00 ff 00 00 00 00 00 00 00 00 00 00 00 00 00
0004c4: 00 00 00 00 00 00 00 00 ff 00 ff 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x0c | 12 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x32 | 50 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0xff | 255 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0xff | 255 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xff | 255 |  |
| unknown16 | 0x00 | 0 |  |

### Item 28 (0x1C): keenest_bastard_sword

**Offset:** 0x4D0

**Raw hex:**
```
0004d0: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
0004e0: 00 00 00 00 00 00 ff 08 00 00 00 08 00 10 00 00
0004f0: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0xff | 255 | Pierce stat |
| spr | 0x08 | 8 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x08 | 8 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x10 | 16 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 29 (0x1D): crushing_bastard_sword

**Offset:** 0x4FC

**Raw hex:**
```
0004fc: 00 00 ff 08 00 00 c4 09 00 08 00 00 00 00 00 00
00050c: 00 00 03 00 00 00 00 00 ff 00 ff 00 00 00 00 00
00051c: 00 00 f6 ff 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xff | 255 |  |
| unknown4 | 0x08 | 8 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0xc4 | 196 |  |
| type | 0x09 | 9 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x08 | 8 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x03 | 3 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0xff | 255 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0xff | 255 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xf6 | 246 |  |
| elemental_type | 0xff | 255 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 30 (0x1E): fiery_bastard_sword

**Offset:** 0x528

**Raw hex:**
```
000528: 00 00 00 00 ff 00 ff 00 00 00 00 00 00 00 00 00
000538: 00 00 00 00 00 00 00 00 00 00 00 00 ff 00 ff 04
000548: 81 01 00 00 b0 04 ff ff 01 00 01 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0xff | 255 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0xff | 255 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0xff | 255 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0xff | 255 | HP bonus |
| attribute1_value | 0x04 | 4 |  |
| attribute1_type | 0x81 | 129 |  |
| attribute2_value | 0x01 | 1 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0xb0 | 176 |  |
| max_dura | 0x04 | 4 | Max durability |
| weight | 0xff | 255 |  |
| unknown13 | 0xff | 255 |  |
| dura | 0x01 | 1 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x01 | 1 |  |
| unknown16 | 0x00 | 0 |  |

### Item 31 (0x1F): frosty_bastard_sword

**Offset:** 0x554

**Raw hex:**
```
000554: 00 00 00 00 00 00 00 00 00 00 ff 08 00 00 00 08
000564: 00 0d 0a 00 00 00 00 00 00 00 04 00 00 00 00 00
000574: 01 00 ff 08 00 00 00 0c ba 0e 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xff | 255 |  |
| unknown9 | 0x08 | 8 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x08 | 8 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x0d | 13 | Speed stat |
| def | 0x0a | 10 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x04 | 4 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x01 | 1 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xff | 255 |  |
| elemental_type | 0x08 | 8 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x0c | 12 |  |
| dura | 0xba | 186 | Current durability |
| unknown14 | 0x0e | 14 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 32 (0x20): shining_bastard_sword

**Offset:** 0x580

**Raw hex:**
```
000580: 00 00 00 00 00 00 02 00 00 00 00 00 00 00 ff 08
000590: 00 00 00 08 00 0c 00 00 00 00 00 00 00 00 01 00
0005a0: 00 00 00 00 ff 00 ff 04 b0 04 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x02 | 2 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0xff | 255 |  |
| unknown12 | 0x08 | 8 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x08 | 8 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x0c | 12 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x01 | 1 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0xff | 255 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0xff | 255 |  |
| unknown13 | 0x04 | 4 |  |
| dura | 0xb0 | 176 | Current durability |
| unknown14 | 0x04 | 4 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 33 (0x21): deadly_bastard_sword

**Offset:** 0x5AC

**Raw hex:**
```
0005ac: 00 03 00 00 00 06 00 0c 00 00 00 00 00 00 00 00
0005bc: 32 00 ff 00 00 00 00 00 00 00 00 00 00 00 00 00
0005cc: 00 00 00 00 00 00 00 00 00 00 ff 08
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x03 | 3 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x06 | 6 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x0c | 12 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x32 | 50 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0xff | 255 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xff | 255 |  |
| unknown16 | 0x08 | 8 |  |

### Item 34 (0x22): mighty_bastard_sword

**Offset:** 0x5D8

**Raw hex:**
```
0005d8: 00 00 c4 09 00 0c 0a 00 00 00 00 00 00 00 04 00
0005e8: 00 00 00 00 00 00 ff 08 00 00 00 08 00 0a 04 00
0005f8: 00 00 00 00 00 00 04 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xc4 | 196 |  |
| unknown4 | 0x09 | 9 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x0c | 12 |  |
| unknown5 | 0x0a | 10 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x04 | 4 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0xff | 255 | Pierce stat |
| spr | 0x08 | 8 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x08 | 8 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x0a | 10 | Solomon/Holy stat |
| hp | 0x04 | 4 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x04 | 4 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 35 (0x23): guardian_bastard_sword

**Offset:** 0x604

**Raw hex:**
```
000604: 00 00 ff 08 00 00 00 10 00 0c 03 00 00 00 00 00
000614: 00 00 00 00 00 00 00 00 ff 00 ff 00 26 02 00 00
000624: b0 04 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xff | 255 |  |
| unknown4 | 0x08 | 8 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x10 | 16 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x0c | 12 |  |
| unknown8 | 0x03 | 3 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0xff | 255 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0xff | 255 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x26 | 38 | Melee power stat |
| sol | 0x02 | 2 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0xb0 | 176 |  |
| attribute2_value | 0x04 | 4 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 36 (0x24): dark_sword

**Offset:** 0x630

**Raw hex:**
```
000630: 00 00 00 00 00 00 ff 08 00 00 c4 09 00 18 00 00
000640: 00 00 00 00 00 00 00 00 00 00 00 00 ff 00 ff 00
000650: 00 03 00 00 6c 04 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0xff | 255 |  |
| type | 0x08 | 8 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xc4 | 196 |  |
| unknown9 | 0x09 | 9 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x18 | 24 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0xff | 255 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0xff | 255 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x03 | 3 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x6c | 108 |  |
| max_dura | 0x04 | 4 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 37 (0x25): magical_bastard_sword

**Offset:** 0x65C

**Raw hex:**
```
00065c: 00 00 00 00 00 00 00 00 ff 00 ff 00 00 01 00 00
00066c: 00 0f 00 00 00 00 00 00 00 00 00 00 00 00 00 00
00067c: ff 00 ff 04 00 02 dc 05 00 10 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0xff | 255 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xff | 255 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x01 | 1 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x0f | 15 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0xff | 255 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xff | 255 |  |
| elemental_type | 0x04 | 4 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x02 | 2 | Max durability |
| weight | 0xdc | 220 |  |
| unknown13 | 0x05 | 5 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x10 | 16 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 38 (0x26): righteous_sword

**Offset:** 0x688

**Raw hex:**
```
000688: b0 04 b0 04 00 00 00 00 00 00 00 00 00 00 ff 08
000698: 00 00 00 0c 00 0c 00 00 00 00 00 00 00 00 02 00
0006a8: 00 00 00 00 ff 00 ff 04 28 05 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0xb0 | 176 |  |
| unknown2 | 0x04 | 4 |  |
| unknown3 | 0xb0 | 176 |  |
| unknown4 | 0x04 | 4 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0xff | 255 |  |
| unknown12 | 0x08 | 8 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x0c | 12 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x0c | 12 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x02 | 2 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0xff | 255 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0xff | 255 |  |
| unknown13 | 0x04 | 4 |  |
| dura | 0x28 | 40 | Current durability |
| unknown14 | 0x05 | 5 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 39 (0x27): great_sword

**Offset:** 0x6B4

**Raw hex:**
```
0006b4: 00 05 00 00 b8 0b dc 05 00 00 00 00 00 00 00 00
0006c4: ff 00 ff 00 78 03 00 00 48 08 00 00 46 05 b0 04
0006d4: 00 00 00 00 00 00 00 00 32 00 ff 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x05 | 5 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0xb8 | 184 |  |
| texture_index_2 | 0x0b | 11 |  |
| unknown5 | 0xdc | 220 |  |
| type | 0x05 | 5 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0xff | 255 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0xff | 255 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x78 | 120 | Slash stat |
| smh | 0x03 | 3 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x48 | 72 | Focus stat |
| ham | 0x08 | 8 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x46 | 70 | Melee power stat |
| sol | 0x05 | 5 | Solomon/Holy stat |
| hp | 0xb0 | 176 | HP bonus |
| attribute1_value | 0x04 | 4 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x32 | 50 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xff | 255 |  |
| unknown16 | 0x00 | 0 |  |

### Item 40 (0x28): great_sword

**Offset:** 0x6E0

**Raw hex:**
```
0006e0: 00 00 00 08 00 00 00 00 00 00 00 00 00 00 00 00
0006f0: 00 00 00 00 32 00 ff 00 00 00 00 0c 00 00 00 00
000700: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x08 | 8 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x32 | 50 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0xff | 255 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x0c | 12 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 41 (0x29): great_sword

**Offset:** 0x70C

**Raw hex:**
```
00070c: ff 00 ff 00 00 00 00 00 00 00 00 00 00 00 00 00
00071c: 00 00 00 00 00 00 00 00 00 00 ff 00 00 00 00 0c
00072c: 00 00 00 00 00 00 00 00 00 00 04 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0xff | 255 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xff | 255 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0xff | 255 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x0c | 12 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x04 | 4 |  |
| unknown16 | 0x00 | 0 |  |

### Item 42 (0x2A): swift_great_sword

**Offset:** 0x738

**Raw hex:**
```
000738: 00 00 00 00 32 00 ff 00 00 00 00 08 00 00 00 00
000748: 00 00 00 00 00 00 00 00 00 00 00 00 01 00 ff 00
000758: 00 00 00 08 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x32 | 50 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0xff | 255 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x08 | 8 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x01 | 1 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0xff | 255 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x08 | 8 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 43 (0x2B): fiery_great_sword

**Offset:** 0x764

**Raw hex:**
```
000764: 00 00 04 00 00 00 00 00 01 00 ff 00 00 00 00 08
000774: 00 00 00 00 00 00 00 00 00 00 04 00 00 00 00 00
000784: 00 00 ff 08 00 00 c4 09 00 0c 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x04 | 4 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x01 | 1 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xff | 255 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x08 | 8 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x04 | 4 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xff | 255 |  |
| elemental_type | 0x08 | 8 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0xc4 | 196 |  |
| unknown13 | 0x09 | 9 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x0c | 12 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 44 (0x2C): deadly_great_sword

**Offset:** 0x790

**Raw hex:**
```
000790: 00 00 00 00 00 00 02 00 00 00 00 00 00 00 ff 08
0007a0: 00 00 00 08 00 0c 05 00 00 00 00 00 00 00 04 00
0007b0: 00 00 00 00 00 00 ff 08 00 00 00 08
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x02 | 2 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0xff | 255 |  |
| unknown12 | 0x08 | 8 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x08 | 8 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x0c | 12 | Smash stat |
| pir | 0x05 | 5 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x04 | 4 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0xff | 255 |  |
| unknown13 | 0x08 | 8 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x08 | 8 |  |

### Item 45 (0x2D): keenest_great_sword

**Offset:** 0x7BC

**Raw hex:**
```
0007bc: 00 0c fd ff 00 00 00 00 00 00 04 00 00 00 00 00
0007cc: 00 00 ff 08 00 00 00 08 00 0c 00 00 00 00 00 00
0007dc: 00 00 04 00 00 00 00 00 32 00 ff 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x0c | 12 |  |
| unknown3 | 0xfd | 253 |  |
| unknown4 | 0xff | 255 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x04 | 4 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0xff | 255 | Defense stat |
| bal | 0x08 | 8 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x08 | 8 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x0c | 12 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x04 | 4 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x32 | 50 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xff | 255 |  |
| unknown16 | 0x00 | 0 |  |

### Item 46 (0x2E): crushing_great_sword

**Offset:** 0x7E8

**Raw hex:**
```
0007e8: 00 00 00 08 00 00 0a 00 00 00 00 00 00 00 00 00
0007f8: 00 00 00 00 34 00 ff 05 00 01 00 10 00 03 fd ff
000808: ec 04 00 02 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x08 | 8 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x0a | 10 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x34 | 52 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0xff | 255 | Pierce stat |
| spr | 0x05 | 5 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x01 | 1 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x10 | 16 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x03 | 3 | Solomon/Holy stat |
| hp | 0xfd | 253 | HP bonus |
| attribute1_value | 0xff | 255 |  |
| attribute1_type | 0xec | 236 |  |
| attribute2_value | 0x04 | 4 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x02 | 2 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 47 (0x2F): mighty_great_sword

**Offset:** 0x814

**Raw hex:**
```
000814: 00 00 ff 00 00 00 00 10 00 00 fd ff 00 00 00 00
000824: 00 00 04 00 00 00 00 00 32 00 ff 00 00 00 00 10
000834: 00 00 fd ff 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xff | 255 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x10 | 16 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xfd | 253 |  |
| unknown9 | 0xff | 255 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x04 | 4 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x32 | 50 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0xff | 255 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x10 | 16 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xfd | 253 |  |
| elemental_type | 0xff | 255 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 48 (0x30): guardian_great_sword

**Offset:** 0x840

**Raw hex:**
```
000840: 00 00 00 00 33 00 ff 0c 84 03 00 08 00 00 00 00
000850: 01 00 01 00 00 00 00 00 00 00 00 00 32 00 ff 0c
000860: 00 02 00 08 00 01 f6 ff 01 00 01 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x33 | 51 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0xff | 255 |  |
| type | 0x0c | 12 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x84 | 132 |  |
| unknown7 | 0x03 | 3 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x08 | 8 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x01 | 1 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x01 | 1 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x32 | 50 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0xff | 255 | HP bonus |
| attribute1_value | 0x0c | 12 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x02 | 2 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x08 | 8 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x01 | 1 | Max durability |
| weight | 0xf6 | 246 |  |
| unknown13 | 0xff | 255 |  |
| dura | 0x01 | 1 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x01 | 1 |  |
| unknown16 | 0x00 | 0 |  |

### Item 49 (0x31): blood_sword

**Offset:** 0x86C

**Raw hex:**
```
00086c: 00 00 00 00 00 00 00 00 32 00 ff 00 00 00 00 00
00087c: 00 00 05 00 00 00 00 00 00 00 00 00 00 00 00 00
00088c: 01 00 ff 08 00 00 c4 09 00 0c 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x32 | 50 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xff | 255 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x05 | 5 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x01 | 1 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xff | 255 |  |
| elemental_type | 0x08 | 8 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0xc4 | 196 |  |
| unknown13 | 0x09 | 9 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x0c | 12 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 50 (0x32): mace

**Offset:** 0x898

**Raw hex:**
```
000898: 00 00 00 00 00 00 02 00 00 00 00 00 00 00 ff 08
0008a8: 00 00 c4 09 00 0c 00 00 00 00 00 00 00 00 02 00
0008b8: 00 00 00 00 32 00 ff 08 58 02 d0 07
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x02 | 2 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0xff | 255 |  |
| unknown12 | 0x08 | 8 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0xc4 | 196 | Defense stat |
| bal | 0x09 | 9 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x0c | 12 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x02 | 2 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x32 | 50 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0xff | 255 |  |
| unknown13 | 0x08 | 8 |  |
| dura | 0x58 | 88 | Current durability |
| unknown14 | 0x02 | 2 |  |
| unknown15 | 0xd0 | 208 |  |
| unknown16 | 0x07 | 7 |  |

### Item 51 (0x33): crushing_mace

**Offset:** 0x8C4

**Raw hex:**
```
0008c4: 00 0c 00 00 00 00 00 00 00 00 00 00 00 00 00 00
0008d4: ff 00 ff 04 9b 03 00 00 00 04 00 00 00 08 00 06
0008e4: 00 00 00 00 00 00 00 00 ff 00 ff 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x0c | 12 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0xff | 255 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0xff | 255 | Defense stat |
| bal | 0x04 | 4 | Balance stat |
| sla | 0x9b | 155 | Slash stat |
| smh | 0x03 | 3 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x04 | 4 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x08 | 8 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x06 | 6 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0xff | 255 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xff | 255 |  |
| unknown16 | 0x00 | 0 |  |

### Item 52 (0x34): shining_mace

**Offset:** 0x8F0

**Raw hex:**
```
0008f0: 00 02 78 05 4c 04 00 00 00 00 00 00 00 00 00 00
000900: 00 00 00 00 32 00 ff 00 00 00 00 00 00 00 00 00
000910: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x02 | 2 |  |
| unknown3 | 0x78 | 120 |  |
| unknown4 | 0x05 | 5 |  |
| texture_index_1 | 0x4c | 76 |  |
| texture_index_2 | 0x04 | 4 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x32 | 50 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0xff | 255 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 53 (0x35): morning_star

**Offset:** 0x91C

**Raw hex:**
```
00091c: 32 00 ff 00 00 00 00 00 00 00 00 00 00 00 00 00
00092c: 00 00 00 00 00 00 00 00 00 00 ff 08 00 00 00 08
00093c: 00 00 00 00 00 00 00 00 00 00 02 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x32 | 50 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xff | 255 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0xff | 255 | Purity stat |
| par | 0x08 | 8 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x08 | 8 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x02 | 2 |  |
| unknown16 | 0x00 | 0 |  |

### Item 54 (0x36): swift_morning_star

**Offset:** 0x948

**Raw hex:**
```
000948: 00 00 00 00 ff 00 ff 00 00 00 78 05 00 00 00 00
000958: 00 00 00 00 00 00 00 00 00 00 00 00 fe 00 ff 01
000968: 00 04 00 08 00 04 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0xff | 255 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0xff | 255 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x78 | 120 |  |
| unknown9 | 0x05 | 5 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0xfe | 254 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0xff | 255 | HP bonus |
| attribute1_value | 0x01 | 1 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x04 | 4 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x08 | 8 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x04 | 4 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 55 (0x37): frosty_morning_star

**Offset:** 0x974

**Raw hex:**
```
000974: 00 00 00 00 00 00 00 00 32 00 ff 08 00 02 b0 04
000984: 00 08 00 00 00 00 00 00 00 00 00 00 00 00 00 00
000994: 00 00 ff 08 00 00 00 08 00 10 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x32 | 50 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xff | 255 |  |
| unknown9 | 0x08 | 8 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x02 | 2 | 6=one-hand, 7=two-hand |
| unknown11 | 0xb0 | 176 |  |
| unknown12 | 0x04 | 4 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x08 | 8 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xff | 255 |  |
| elemental_type | 0x08 | 8 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x08 | 8 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x10 | 16 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 56 (0x38): axe

**Offset:** 0x9A0

**Raw hex:**
```
0009a0: 00 00 00 00 00 00 02 00 00 00 00 00 33 00 ff 0c
0009b0: 00 02 00 08 00 02 00 00 01 00 01 00 00 00 00 00
0009c0: 00 00 00 00 32 00 ff 00 00 00 00 08
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x02 | 2 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x33 | 51 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0xff | 255 |  |
| unknown12 | 0x0c | 12 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x02 | 2 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x08 | 8 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x02 | 2 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x01 | 1 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x01 | 1 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x32 | 50 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0xff | 255 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x08 | 8 |  |

### Item 57 (0x39): axe

**Offset:** 0x9CC

**Raw hex:**
```
0009cc: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
0009dc: 32 00 ff 00 00 00 00 00 00 00 00 00 00 00 00 00
0009ec: 00 00 00 00 00 00 00 00 32 00 ff 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x32 | 50 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0xff | 255 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x32 | 50 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xff | 255 |  |
| unknown16 | 0x00 | 0 |  |

### Item 58 (0x3A): giant_axe

**Offset:** 0x9F8

**Raw hex:**
```
0009f8: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
000a08: 00 00 00 00 32 00 ff 00 00 00 00 00 00 00 00 00
000a18: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x32 | 50 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0xff | 255 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 59 (0x3B): giant_axe

**Offset:** 0xA24

**Raw hex:**
```
000a24: 32 00 ff 00 00 00 00 00 00 00 00 00 00 00 00 00
000a34: 00 00 00 00 00 00 00 00 32 00 ff 00 00 00 00 00
000a44: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x32 | 50 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xff | 255 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x32 | 50 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0xff | 255 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 60 (0x3C): crushing_axe

**Offset:** 0xA50

**Raw hex:**
```
000a50: 00 00 00 00 32 00 ff 00 00 00 00 00 00 00 00 00
000a60: 00 00 00 00 00 00 00 00 00 00 00 00 34 00 ff 08
000a70: 00 00 98 08 00 0c 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x32 | 50 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0xff | 255 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x34 | 52 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0xff | 255 | HP bonus |
| attribute1_value | 0x08 | 8 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x98 | 152 |  |
| elemental_type | 0x08 | 8 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x0c | 12 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 61 (0x3D): deadly_axe

**Offset:** 0xA7C

**Raw hex:**
```
000a7c: 00 00 00 00 00 00 00 00 32 00 ff 08 00 02 00 06
000a8c: 00 02 fb ff 00 00 00 00 00 00 00 00 00 00 00 00
000a9c: ff 00 ff 04 00 04 00 00 00 03 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x32 | 50 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xff | 255 |  |
| unknown9 | 0x08 | 8 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x02 | 2 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x06 | 6 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x02 | 2 | Speed stat |
| def | 0xfb | 251 | Defense stat |
| bal | 0xff | 255 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0xff | 255 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xff | 255 |  |
| elemental_type | 0x04 | 4 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x04 | 4 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x03 | 3 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 62 (0x3E): living_axe

**Offset:** 0xAA8

**Raw hex:**
```
000aa8: 00 06 00 0c 00 00 00 00 00 00 00 00 32 00 ff 00
000ab8: 00 02 00 00 00 02 00 00 00 00 00 00 00 00 00 00
000ac8: 00 00 00 00 00 00 ff 08 00 00 00 08
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x06 | 6 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x0c | 12 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x32 | 50 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0xff | 255 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x02 | 2 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x02 | 2 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0xff | 255 |  |
| unknown13 | 0x08 | 8 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x08 | 8 |  |

### Item 63 (0x3F): battle_axe

**Offset:** 0xAD4

**Raw hex:**
```
000ad4: 00 0a 04 00 00 00 00 00 00 00 04 00 00 00 00 00
000ae4: 32 00 ff 08 00 02 d0 07 40 06 02 00 00 00 00 00
000af4: 00 00 00 00 00 00 00 00 32 00 ff 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x0a | 10 |  |
| unknown3 | 0x04 | 4 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x04 | 4 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x32 | 50 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0xff | 255 | Defense stat |
| bal | 0x08 | 8 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x02 | 2 | Smash stat |
| pir | 0xd0 | 208 | Pierce stat |
| spr | 0x07 | 7 | Spirit stat |
| foc | 0x40 | 64 | Focus stat |
| ham | 0x06 | 6 | Hammer stat |
| pur | 0x02 | 2 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x32 | 50 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xff | 255 |  |
| unknown16 | 0x00 | 0 |  |

### Item 64 (0x40): deadly_battle_axe

**Offset:** 0xB00

**Raw hex:**
```
000b00: 00 00 00 08 00 00 02 00 00 00 00 00 00 00 00 00
000b10: 00 00 00 00 ff 00 ff 00 00 04 00 00 00 10 00 00
000b20: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x08 | 8 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x02 | 2 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0xff | 255 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0xff | 255 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x04 | 4 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x10 | 16 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 65 (0x41): keenest_battle_axe

**Offset:** 0xB2C

**Raw hex:**
```
000b2c: ff 00 ff 00 00 02 00 00 78 05 00 00 00 00 00 00
000b3c: 00 00 00 00 00 00 00 00 ff 00 ff 00 5e 01 00 00
000b4c: 00 02 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0xff | 255 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xff | 255 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x02 | 2 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x78 | 120 |  |
| unknown7 | 0x05 | 5 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0xff | 255 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0xff | 255 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x5e | 94 | Melee power stat |
| sol | 0x01 | 1 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x02 | 2 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 66 (0x42): bow

**Offset:** 0xB58

**Raw hex:**
```
000b58: 00 00 00 00 ff 00 ff 04 00 04 00 00 00 04 00 00
000b68: 00 08 00 05 00 00 00 00 00 00 00 00 01 00 ff 08
000b78: 00 00 c4 09 00 0c 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0xff | 255 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0xff | 255 |  |
| type | 0x04 | 4 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x04 | 4 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x04 | 4 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x08 | 8 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x05 | 5 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x01 | 1 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0xff | 255 | HP bonus |
| attribute1_value | 0x08 | 8 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xc4 | 196 |  |
| elemental_type | 0x09 | 9 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x0c | 12 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 67 (0x43): warrior_bow

**Offset:** 0xB84

**Raw hex:**
```
000b84: 00 00 00 00 00 00 00 00 32 00 ff 00 00 00 70 17
000b94: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
000ba4: 32 00 ff 00 00 08 00 04 00 01 fb ff
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x32 | 50 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xff | 255 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x70 | 112 |  |
| unknown12 | 0x17 | 23 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x32 | 50 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xff | 255 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x08 | 8 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x04 | 4 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x01 | 1 |  |
| unknown15 | 0xfb | 251 |  |
| unknown16 | 0xff | 255 |  |

### Item 68 (0x44): bow_gun

**Offset:** 0xBB0

**Raw hex:**
```
000bb0: 00 00 00 00 00 00 00 00 00 00 00 00 32 00 ff 08
000bc0: 00 00 dc 05 00 00 02 00 00 00 00 00 00 00 00 00
000bd0: 00 00 00 00 33 00 ff 0c 00 04 f8 07
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x32 | 50 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0xff | 255 |  |
| unknown12 | 0x08 | 8 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0xdc | 220 | Defense stat |
| bal | 0x05 | 5 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x02 | 2 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x33 | 51 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0xff | 255 |  |
| unknown13 | 0x0c | 12 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x04 | 4 |  |
| unknown15 | 0xf8 | 248 |  |
| unknown16 | 0x07 | 7 |  |

### Item 69 (0x45): fiery_bow_gun

**Offset:** 0xBDC

**Raw hex:**
```
000bdc: 00 02 fb ff 01 00 01 00 00 00 00 00 00 00 00 00
000bec: 00 00 ff 08 00 00 00 0c 60 10 00 00 00 00 00 00
000bfc: 00 00 02 00 00 00 00 00 ff 00 ff 04
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x02 | 2 |  |
| unknown3 | 0xfb | 251 |  |
| unknown4 | 0xff | 255 |  |
| texture_index_1 | 0x01 | 1 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x01 | 1 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0xff | 255 | Defense stat |
| bal | 0x08 | 8 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x0c | 12 | Spirit stat |
| foc | 0x60 | 96 | Focus stat |
| ham | 0x10 | 16 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x02 | 2 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0xff | 255 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xff | 255 |  |
| unknown16 | 0x04 | 4 |  |

### Item 70 (0x46): unknown

**Offset:** 0xC08

**Raw hex:**
```
000c08: 00 03 00 00 40 06 00 00 00 03 00 04 00 00 00 00
000c18: 00 00 00 00 ff 00 ff 00 b0 04 00 00 dc 05 00 00
000c28: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x03 | 3 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x40 | 64 |  |
| texture_index_2 | 0x06 | 6 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x03 | 3 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x04 | 4 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0xff | 255 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0xff | 255 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0xb0 | 176 | Focus stat |
| ham | 0x04 | 4 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0xdc | 220 | Melee power stat |
| sol | 0x05 | 5 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 71 (0x47): cap

**Offset:** 0xC34

**Raw hex:**
```
000c34: ff 00 ff 00 00 02 00 00 00 03 00 00 00 00 00 00
000c44: 00 00 00 00 00 00 00 00 32 00 ff 00 00 00 00 00
000c54: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0xff | 255 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xff | 255 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x02 | 2 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x03 | 3 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x32 | 50 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0xff | 255 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 72 (0x48): crown

**Offset:** 0xC60

**Raw hex:**
```
000c60: 00 00 00 00 40 16 ff 00 00 00 78 05 00 00 00 00
000c70: 7e ff a8 fd 00 00 00 00 00 00 00 00 40 18 ff 00
000c80: 00 00 b0 04 f4 01 00 00 3d ff 92 ff
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x40 | 64 |  |
| texture_index_2 | 0x16 | 22 |  |
| unknown5 | 0xff | 255 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x78 | 120 |  |
| unknown9 | 0x05 | 5 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x7e | 126 | Strength stat |
| spd | 0xff | 255 | Speed stat |
| def | 0xa8 | 168 | Defense stat |
| bal | 0xfd | 253 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x40 | 64 | Melee power stat |
| sol | 0x18 | 24 | Solomon/Holy stat |
| hp | 0xff | 255 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xb0 | 176 |  |
| elemental_type | 0x04 | 4 |  |
| elemental_power | 0xf4 | 244 |  |
| max_dura | 0x01 | 1 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x3d | 61 | Current durability |
| unknown14 | 0xff | 255 |  |
| unknown15 | 0x92 | 146 |  |
| unknown16 | 0xff | 255 |  |

### Item 73 (0x49): crown_of_resist

**Offset:** 0xC8C

**Raw hex:**
```
000c8c: 6a ff 00 00 00 00 00 00 40 18 ff 00 00 00 78 05
000c9c: 00 00 38 ff 9c ff a2 fe 6a ff 00 00 00 00 00 00
000cac: 40 18 ff 00 00 00 78 05 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x6a | 106 |  |
| unknown2 | 0xff | 255 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x40 | 64 |  |
| unknown7 | 0x18 | 24 |  |
| unknown8 | 0xff | 255 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x78 | 120 |  |
| unknown12 | 0x05 | 5 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x38 | 56 | Defense stat |
| bal | 0xff | 255 | Balance stat |
| sla | 0x9c | 156 | Slash stat |
| smh | 0xff | 255 | Smash stat |
| pir | 0xa2 | 162 | Pierce stat |
| spr | 0xfe | 254 | Spirit stat |
| foc | 0x6a | 106 | Focus stat |
| ham | 0xff | 255 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x40 | 64 |  |
| attribute2_value | 0x18 | 24 |  |
| attribute2_type | 0xff | 255 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x78 | 120 |  |
| unknown13 | 0x05 | 5 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 74 (0x4A): crown_of_composure

**Offset:** 0xCB8

**Raw hex:**
```
000cb8: 7e ff e0 fc 00 00 00 00 00 00 00 00 00 00 ff 08
000cc8: 00 00 00 08 00 0c 00 00 00 00 00 00 00 00 03 00
000cd8: 00 00 00 00 32 00 ff e5 00 06 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x7e | 126 |  |
| unknown2 | 0xff | 255 |  |
| unknown3 | 0xe0 | 224 |  |
| unknown4 | 0xfc | 252 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0xff | 255 |  |
| unknown12 | 0x08 | 8 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x08 | 8 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x0c | 12 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x03 | 3 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x32 | 50 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0xff | 255 |  |
| unknown13 | 0xe5 | 229 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x06 | 6 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 75 (0x4B): wizard_crown

**Offset:** 0xCE4

**Raw hex:**
```
000ce4: 00 0a 00 00 00 06 80 01 00 00 00 00 00 00 00 00
000cf4: ff 00 ff 00 00 00 78 05 00 00 00 00 00 00 00 00
000d04: 00 00 00 00 00 00 00 00 32 00 ff 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x0a | 10 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x06 | 6 |  |
| unknown5 | 0x80 | 128 |  |
| type | 0x01 | 1 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0xff | 255 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0xff | 255 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x78 | 120 | Pierce stat |
| spr | 0x05 | 5 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x32 | 50 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xff | 255 |  |
| unknown16 | 0x00 | 0 |  |

### Item 76 (0x4C): devil_crown

**Offset:** 0xD10

**Raw hex:**
```
000d10: 00 02 00 00 00 02 ce ff 00 00 00 00 00 00 00 00
000d20: 00 00 00 00 32 00 ff 04 00 06 00 06 00 0a 80 ff
000d30: 00 06 80 01 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x02 | 2 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x02 | 2 |  |
| unknown5 | 0xce | 206 |  |
| type | 0xff | 255 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x32 | 50 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0xff | 255 | Pierce stat |
| spr | 0x04 | 4 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x06 | 6 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x06 | 6 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x0a | 10 | Solomon/Holy stat |
| hp | 0x80 | 128 | HP bonus |
| attribute1_value | 0xff | 255 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x06 | 6 |  |
| attribute2_type | 0x80 | 128 |  |
| elemental_type | 0x01 | 1 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 77 (0x4D): helm

**Offset:** 0xD3C

**Raw hex:**
```
000d3c: 00 00 ff 08 00 00 00 08 00 0c 00 00 00 00 00 00
000d4c: 00 00 04 00 00 00 00 00 00 00 ff 08 00 00 00 00
000d5c: 00 0c 00 00 00 00 00 00 00 00 04 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xff | 255 |  |
| unknown4 | 0x08 | 8 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x08 | 8 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x0c | 12 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x04 | 4 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0xff | 255 | Purity stat |
| par | 0x08 | 8 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x0c | 12 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x04 | 4 |  |
| unknown16 | 0x00 | 0 |  |

### Item 78 (0x4E): helm

**Offset:** 0xD68

**Raw hex:**
```
000d68: 00 00 00 00 34 00 ff 0c 00 02 00 04 00 04 00 00
000d78: 01 00 01 00 00 00 00 00 00 00 00 00 32 00 ff 00
000d88: 00 00 b8 0b 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x34 | 52 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0xff | 255 |  |
| type | 0x0c | 12 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x02 | 2 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x04 | 4 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x04 | 4 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x01 | 1 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x01 | 1 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x32 | 50 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0xff | 255 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xb8 | 184 |  |
| elemental_type | 0x0b | 11 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 79 (0x4F): magical_helm

**Offset:** 0xD94

**Raw hex:**
```
000d94: 00 00 00 00 00 00 00 00 00 00 ff 08 00 00 c4 09
000da4: 00 0c 00 00 00 00 00 00 00 00 02 00 00 00 00 00
000db4: 01 00 ff 08 00 00 c4 09 00 0c 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xff | 255 |  |
| unknown9 | 0x08 | 8 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0xc4 | 196 |  |
| unknown12 | 0x09 | 9 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x0c | 12 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x02 | 2 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x01 | 1 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xff | 255 |  |
| elemental_type | 0x08 | 8 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0xc4 | 196 |  |
| unknown13 | 0x09 | 9 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x0c | 12 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 80 (0x50): full_helm

**Offset:** 0xDC0

**Raw hex:**
```
000dc0: 00 00 00 00 00 00 02 00 00 00 00 00 ff 00 ff 00
000dd0: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
000de0: 00 00 00 00 02 00 ff 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x02 | 2 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0xff | 255 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0xff | 255 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x02 | 2 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0xff | 255 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 81 (0x51): full_helm

**Offset:** 0xDEC

**Raw hex:**
```
000dec: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
000dfc: 34 00 ff 0c b0 04 00 0c 00 08 f6 ff 98 08 98 08
000e0c: 00 00 00 00 00 00 00 00 00 00 ff 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x34 | 52 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0xff | 255 | Defense stat |
| bal | 0x0c | 12 | Balance stat |
| sla | 0xb0 | 176 | Slash stat |
| smh | 0x04 | 4 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x0c | 12 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x08 | 8 | Hammer stat |
| pur | 0xf6 | 246 | Purity stat |
| par | 0xff | 255 | Parry stat |
| mel | 0x98 | 152 | Melee power stat |
| sol | 0x08 | 8 | Solomon/Holy stat |
| hp | 0x98 | 152 | HP bonus |
| attribute1_value | 0x08 | 8 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xff | 255 |  |
| unknown16 | 0x00 | 0 |  |

### Item 82 (0x52): full_helm_of_curing

**Offset:** 0xE18

**Raw hex:**
```
000e18: 00 00 00 0c 00 00 0b 00 00 00 00 00 00 00 04 00
000e28: 00 00 00 00 ff 00 ff 00 00 00 00 00 00 00 0a 00
000e38: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x0c | 12 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x0b | 11 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x04 | 4 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0xff | 255 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0xff | 255 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x0a | 10 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 83 (0x53): harden_full_helm

**Offset:** 0xE44

**Raw hex:**
```
000e44: 32 00 ff 00 00 00 88 13 00 00 00 00 00 00 00 00
000e54: 00 00 00 00 00 00 00 00 e1 00 ff 08 00 00 00 08
000e64: 00 08 fb ff 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x32 | 50 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xff | 255 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x88 | 136 |  |
| type | 0x13 | 19 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0xe1 | 225 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0xff | 255 | Purity stat |
| par | 0x08 | 8 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x08 | 8 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x08 | 8 |  |
| attribute2_type | 0xfb | 251 |  |
| elemental_type | 0xff | 255 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 84 (0x54): fiery_full_helm

**Offset:** 0xE70

**Raw hex:**
```
000e70: 00 00 00 00 32 00 ff 00 00 00 00 10 00 00 f6 ff
000e80: 00 00 00 00 00 00 00 00 00 00 00 00 32 00 ff 00
000e90: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x32 | 50 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0xff | 255 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x10 | 16 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0xf6 | 246 |  |
| unknown12 | 0xff | 255 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x32 | 50 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0xff | 255 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 85 (0x55): great_helm

**Offset:** 0xE9C

**Raw hex:**
```
000e9c: 00 00 00 00 00 00 00 00 e1 00 ff 08 00 00 00 08
000eac: 00 08 fb ff 00 00 00 00 00 00 00 00 00 00 00 00
000ebc: 00 00 ff 08 00 00 c4 09 00 10 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0xe1 | 225 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xff | 255 |  |
| unknown9 | 0x08 | 8 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x08 | 8 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x08 | 8 | Speed stat |
| def | 0xfb | 251 | Defense stat |
| bal | 0xff | 255 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xff | 255 |  |
| elemental_type | 0x08 | 8 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0xc4 | 196 |  |
| unknown13 | 0x09 | 9 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x10 | 16 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 86 (0x56): great_helm

**Offset:** 0xEC8

**Raw hex:**
```
000ec8: 00 00 00 00 00 00 00 00 00 00 00 00 e1 00 ff 08
000ed8: 00 00 00 08 00 08 fe ff 00 00 00 00 00 00 00 00
000ee8: 00 00 00 00 01 00 ff 08 00 00 c4 09
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0xe1 | 225 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0xff | 255 |  |
| unknown12 | 0x08 | 8 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x08 | 8 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x08 | 8 | Smash stat |
| pir | 0xfe | 254 | Pierce stat |
| spr | 0xff | 255 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x01 | 1 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0xff | 255 |  |
| unknown13 | 0x08 | 8 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xc4 | 196 |  |
| unknown16 | 0x09 | 9 |  |

### Item 87 (0x57): harden_great_helm

**Offset:** 0xEF4

**Raw hex:**
```
000ef4: 00 0c 00 00 00 00 00 00 00 00 02 00 00 00 00 00
000f04: 00 00 ff 08 00 00 c4 09 00 0c 00 00 00 00 00 00
000f14: 00 00 00 00 00 00 00 00 00 00 ff 08
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x0c | 12 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x02 | 2 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0xff | 255 | Defense stat |
| bal | 0x08 | 8 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0xc4 | 196 | Pierce stat |
| spr | 0x09 | 9 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x0c | 12 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xff | 255 |  |
| unknown16 | 0x08 | 8 |  |

### Item 88 (0x58): fortune_great_helm

**Offset:** 0xF20

**Raw hex:**
```
000f20: 00 00 c4 09 00 0c 00 00 00 00 00 00 00 00 02 00
000f30: 00 00 00 00 33 00 ff 0c 00 02 c4 09 00 04 00 00
000f40: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xc4 | 196 |  |
| unknown4 | 0x09 | 9 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x0c | 12 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x02 | 2 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x33 | 51 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0xff | 255 | Pierce stat |
| spr | 0x0c | 12 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x02 | 2 | Hammer stat |
| pur | 0xc4 | 196 | Purity stat |
| par | 0x09 | 9 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x04 | 4 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 89 (0x59): mystic_great_helm

**Offset:** 0xF4C

**Raw hex:**
```
000f4c: ff 00 ff 00 00 01 00 00 00 08 00 00 00 00 00 00
000f5c: 00 00 00 00 00 00 00 00 33 00 ff 0c 00 02 00 08
000f6c: 00 02 00 00 00 08 40 06 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0xff | 255 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xff | 255 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x01 | 1 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x08 | 8 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x33 | 51 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0xff | 255 | Purity stat |
| par | 0x0c | 12 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x02 | 2 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x08 | 8 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x02 | 2 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x08 | 8 | Max durability |
| weight | 0x40 | 64 |  |
| unknown13 | 0x06 | 6 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 90 (0x5A): holy_great_helm

**Offset:** 0xF78

**Raw hex:**
```
000f78: 00 00 00 00 e1 00 ff 08 00 00 00 08 00 00 fe ff
000f88: 00 00 00 00 00 00 00 00 00 00 00 00 e1 00 ff 08
000f98: 00 00 00 08 00 00 fe ff 01 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0xe1 | 225 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0xff | 255 |  |
| type | 0x08 | 8 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x08 | 8 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0xfe | 254 |  |
| unknown12 | 0xff | 255 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0xe1 | 225 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0xff | 255 | HP bonus |
| attribute1_value | 0x08 | 8 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x08 | 8 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0xfe | 254 |  |
| unknown13 | 0xff | 255 |  |
| dura | 0x01 | 1 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 91 (0x5B): quilted_armor

**Offset:** 0xFA4

**Raw hex:**
```
000fa4: 00 00 00 00 00 00 00 00 32 00 ff 04 00 00 00 00
000fb4: 00 00 00 00 b0 04 c4 09 00 00 00 00 00 00 00 00
000fc4: 33 00 ff 0c 4c 04 00 08 00 04 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x32 | 50 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xff | 255 |  |
| unknown9 | 0x04 | 4 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0xb0 | 176 | Slash stat |
| smh | 0x04 | 4 | Smash stat |
| pir | 0xc4 | 196 | Pierce stat |
| spr | 0x09 | 9 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x33 | 51 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xff | 255 |  |
| elemental_type | 0x0c | 12 |  |
| elemental_power | 0x4c | 76 |  |
| max_dura | 0x04 | 4 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x08 | 8 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x04 | 4 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 92 (0x5C): item_92

**Offset:** 0xFD0

**Raw hex:**
```
000fd0: 01 00 01 00 00 00 00 00 00 00 00 00 33 00 ff 0c
000fe0: 00 02 00 0c dc 05 00 00 01 00 01 00 00 00 00 00
000ff0: 00 00 00 00 33 00 ff 0c 00 02 00 0c
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x01 | 1 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x01 | 1 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x33 | 51 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0xff | 255 |  |
| unknown12 | 0x0c | 12 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x02 | 2 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x0c | 12 | Balance stat |
| sla | 0xdc | 220 | Slash stat |
| smh | 0x05 | 5 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x01 | 1 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x01 | 1 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x33 | 51 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0xff | 255 |  |
| unknown13 | 0x0c | 12 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x02 | 2 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x0c | 12 |  |

### Item 93 (0x5D): item_93

**Offset:** 0xFFC

**Raw hex:**
```
000ffc: 00 02 00 00 01 00 01 00 00 00 00 00 00 00 00 00
00100c: 07 00 ff 00 00 00 00 00 00 00 00 00 00 00 00 00
00101c: 00 00 00 00 00 00 00 00 33 00 ff 0c
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x02 | 2 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x01 | 1 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x01 | 1 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x07 | 7 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0xff | 255 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x33 | 51 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xff | 255 |  |
| unknown16 | 0x0c | 12 |  |

### Item 94 (0x5E): item_94

**Offset:** 0x1028

**Raw hex:**
```
001028: 4c 04 00 08 20 03 00 00 01 00 01 00 00 00 00 00
001038: 00 00 00 00 ff 00 ff 04 00 03 00 00 00 03 00 00
001048: 00 06 00 04 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x4c | 76 |  |
| unknown2 | 0x04 | 4 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x08 | 8 |  |
| texture_index_1 | 0x20 | 32 |  |
| texture_index_2 | 0x03 | 3 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x01 | 1 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x01 | 1 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0xff | 255 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0xff | 255 | Pierce stat |
| spr | 0x04 | 4 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x03 | 3 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x03 | 3 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x06 | 6 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x04 | 4 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 95 (0x5F): item_95

**Offset:** 0x1054

**Raw hex:**
```
001054: 33 00 ff 0c 00 04 c4 09 00 04 00 00 00 06 00 04
001064: 00 00 00 00 00 00 00 00 02 00 ff 00 00 00 00 00
001074: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x33 | 51 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xff | 255 |  |
| unknown4 | 0x0c | 12 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x04 | 4 |  |
| unknown5 | 0xc4 | 196 |  |
| type | 0x09 | 9 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x04 | 4 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x06 | 6 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x04 | 4 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x02 | 2 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0xff | 255 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 96 (0x60): item_96

**Offset:** 0x1080

**Raw hex:**
```
001080: 00 00 00 00 ff 00 ff 00 00 00 00 00 00 00 00 00
001090: 00 00 00 00 00 00 00 00 00 00 00 00 ff 00 ff 00
0010a0: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0xff | 255 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0xff | 255 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0xff | 255 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0xff | 255 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 97 (0x61): item_97

**Offset:** 0x10AC

**Raw hex:**
```
0010ac: 00 00 00 00 00 00 00 00 ff 00 ff 00 00 00 00 00
0010bc: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
0010cc: ff 00 ff 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0xff | 255 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xff | 255 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0xff | 255 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xff | 255 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 98 (0x62): item_98

**Offset:** 0x10D8

**Raw hex:**
```
0010d8: 00 00 00 00 00 00 00 00 00 00 00 00 e1 00 ff 08
0010e8: 00 00 00 08 00 00 fe ff 00 00 00 00 00 00 00 00
0010f8: 00 00 00 00 ff 00 ff 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0xe1 | 225 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0xff | 255 |  |
| unknown12 | 0x08 | 8 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x08 | 8 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0xfe | 254 | Pierce stat |
| spr | 0xff | 255 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0xff | 255 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0xff | 255 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 99 (0x63): item_99

**Offset:** 0x1104

**Raw hex:**
```
001104: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
001114: ff 00 ff 00 00 00 00 00 00 00 00 00 00 00 00 00
001124: 00 00 00 00 00 00 00 00 ff 00 ff 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0xff | 255 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0xff | 255 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0xff | 255 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xff | 255 |  |
| unknown16 | 0x00 | 0 |  |

### Item 100 (0x64): item_100

**Offset:** 0x1130

**Raw hex:**
```
001130: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
001140: 00 00 00 00 ff 00 ff 00 00 00 00 00 00 00 00 00
001150: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0xff | 255 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0xff | 255 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 101 (0x65): item_101

**Offset:** 0x115C

**Raw hex:**
```
00115c: ff 00 ff 00 00 00 00 00 00 00 00 00 00 00 00 00
00116c: 00 00 00 00 00 00 00 00 ff 00 ff 00 80 00 00 00
00117c: 00 01 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0xff | 255 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xff | 255 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0xff | 255 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0xff | 255 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x80 | 128 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x01 | 1 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 102 (0x66): item_102

**Offset:** 0x1188

**Raw hex:**
```
001188: 00 00 00 00 ff 00 ff 00 00 02 00 00 b0 09 f6 ff
001198: 00 00 00 00 00 00 00 00 00 00 00 00 32 00 ff 00
0011a8: 00 00 00 08 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0xff | 255 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0xff | 255 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x02 | 2 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0xb0 | 176 |  |
| hand_type | 0x09 | 9 | 6=one-hand, 7=two-hand |
| unknown11 | 0xf6 | 246 |  |
| unknown12 | 0xff | 255 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x32 | 50 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0xff | 255 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x08 | 8 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 103 (0x67): item_103

**Offset:** 0x11B4

**Raw hex:**
```
0011b4: 00 00 00 00 00 00 00 00 ff 00 ff 00 00 00 00 00
0011c4: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
0011d4: ff 00 ff 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0xff | 255 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xff | 255 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0xff | 255 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xff | 255 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 104 (0x68): item_104

**Offset:** 0x11E0

**Raw hex:**
```
0011e0: 00 00 00 00 00 00 00 00 00 00 00 00 ff 00 ff 00
0011f0: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
001200: 00 00 00 00 ff 00 ff 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0xff | 255 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0xff | 255 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0xff | 255 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0xff | 255 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 105 (0x69): item_105

**Offset:** 0x120C

**Raw hex:**
```
00120c: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
00121c: ff 00 ff 00 00 00 00 00 00 00 00 00 00 00 00 00
00122c: 00 00 00 00 00 00 00 00 ff 00 ff 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0xff | 255 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0xff | 255 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0xff | 255 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xff | 255 |  |
| unknown16 | 0x00 | 0 |  |

### Item 106 (0x6A): item_106

**Offset:** 0x1238

**Raw hex:**
```
001238: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
001248: 00 00 00 00 ff 00 ff 04 dc 05 00 00 dc 05 fe ff
001258: ac 0d d0 07 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0xff | 255 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0xff | 255 | Pierce stat |
| spr | 0x04 | 4 | Spirit stat |
| foc | 0xdc | 220 | Focus stat |
| ham | 0x05 | 5 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0xdc | 220 | Melee power stat |
| sol | 0x05 | 5 | Solomon/Holy stat |
| hp | 0xfe | 254 | HP bonus |
| attribute1_value | 0xff | 255 |  |
| attribute1_type | 0xac | 172 |  |
| attribute2_value | 0x0d | 13 |  |
| attribute2_type | 0xd0 | 208 |  |
| elemental_type | 0x07 | 7 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 107 (0x6B): item_107

**Offset:** 0x1264

**Raw hex:**
```
001264: ff 00 ff 00 00 00 00 00 00 00 00 00 00 00 00 00
001274: 00 00 00 00 00 00 00 00 32 00 ff 00 00 00 00 02
001284: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0xff | 255 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xff | 255 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x32 | 50 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0xff | 255 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x02 | 2 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 108 (0x6C): item_108

**Offset:** 0x1290

**Raw hex:**
```
001290: 00 00 00 00 00 00 ff 00 00 00 00 10 00 00 fd ff
0012a0: 00 00 00 00 00 00 00 00 00 00 00 00 ff 00 ff 00
0012b0: 00 00 00 00 00 00 fe ff 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0xff | 255 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x10 | 16 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0xfd | 253 |  |
| unknown12 | 0xff | 255 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0xff | 255 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0xff | 255 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0xfe | 254 |  |
| unknown13 | 0xff | 255 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 109 (0x6D): item_109

**Offset:** 0x12BC

**Raw hex:**
```
0012bc: 00 00 00 00 00 00 00 00 32 00 ff 04 dc 05 00 00
0012cc: 00 04 fb ff 00 08 00 06 00 00 00 00 00 00 00 00
0012dc: ff 00 ff 00 00 00 00 00 00 00 f6 ff
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x32 | 50 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xff | 255 |  |
| unknown9 | 0x04 | 4 |  |
| unknown10 | 0xdc | 220 |  |
| hand_type | 0x05 | 5 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x04 | 4 | Speed stat |
| def | 0xfb | 251 | Defense stat |
| bal | 0xff | 255 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x08 | 8 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x06 | 6 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0xff | 255 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xff | 255 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xf6 | 246 |  |
| unknown16 | 0xff | 255 |  |

### Item 110 (0x6E): item_110

**Offset:** 0x12E8

**Raw hex:**
```
0012e8: 00 00 00 00 00 00 00 00 00 00 00 00 32 00 ff 00
0012f8: 00 00 00 08 00 00 00 00 00 00 00 00 00 00 00 00
001308: 00 00 00 00 32 00 ff 00 00 00 00 08
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x32 | 50 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0xff | 255 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x08 | 8 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x32 | 50 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0xff | 255 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x08 | 8 |  |

### Item 111 (0x6F): item_111

**Offset:** 0x1314

**Raw hex:**
```
001314: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
001324: ff 00 ff 00 00 00 00 00 00 00 00 00 00 00 00 00
001334: 00 00 00 00 00 00 00 00 00 00 ff 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0xff | 255 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0xff | 255 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xff | 255 |  |
| unknown16 | 0x00 | 0 |  |

### Item 112 (0x70): item_112

**Offset:** 0x1340

**Raw hex:**
```
001340: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
001350: 00 00 00 00 ff 00 ff 00 00 02 00 00 08 07 00 00
001360: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0xff | 255 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0xff | 255 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x02 | 2 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x08 | 8 | Melee power stat |
| sol | 0x07 | 7 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 113 (0x71): item_113

**Offset:** 0x136C

**Raw hex:**
```
00136c: 33 00 ff 0c 00 02 00 08 00 02 00 00 01 00 01 00
00137c: 00 00 00 00 00 00 00 00 32 00 ff 00 00 00 dc 05
00138c: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x33 | 51 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xff | 255 |  |
| unknown4 | 0x0c | 12 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x02 | 2 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x08 | 8 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x02 | 2 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x01 | 1 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x01 | 1 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x32 | 50 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0xff | 255 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0xdc | 220 | HP bonus |
| attribute1_value | 0x05 | 5 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 114 (0x72): item_114

**Offset:** 0x1398

**Raw hex:**
```
001398: 00 00 00 00 32 00 ff 00 00 00 e8 03 00 00 00 00
0013a8: 00 00 00 00 00 00 00 00 00 00 00 00 32 00 ff 00
0013b8: 00 00 e8 03 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x32 | 50 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0xff | 255 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xe8 | 232 |  |
| unknown9 | 0x03 | 3 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x32 | 50 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0xff | 255 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xe8 | 232 |  |
| elemental_type | 0x03 | 3 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 115 (0x73): item_115

**Offset:** 0x13C4

**Raw hex:**
```
0013c4: 00 00 00 00 00 00 00 00 ff 00 ff 00 00 00 00 00
0013d4: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
0013e4: ff 00 ff 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0xff | 255 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xff | 255 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0xff | 255 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xff | 255 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 116 (0x74): item_116

**Offset:** 0x13F0

**Raw hex:**
```
0013f0: 00 00 00 00 00 00 00 00 00 00 00 00 ff 00 ff 00
001400: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
001410: 00 00 00 00 ff 00 ff 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0xff | 255 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0xff | 255 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0xff | 255 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0xff | 255 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 117 (0x75): item_117

**Offset:** 0x141C

**Raw hex:**
```
00141c: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
00142c: ff 00 ff 01 00 02 00 00 80 00 00 00 00 00 00 00
00143c: 00 00 00 00 00 00 00 00 32 00 ff 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0xff | 255 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0xff | 255 | Defense stat |
| bal | 0x01 | 1 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x02 | 2 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x80 | 128 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x32 | 50 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xff | 255 |  |
| unknown16 | 0x00 | 0 |  |

### Item 118 (0x76): item_118

**Offset:** 0x1448

**Raw hex:**
```
001448: 00 00 e8 03 00 00 00 00 00 00 00 00 00 00 00 00
001458: 00 00 00 00 32 00 ff 00 00 00 e8 03 00 00 00 00
001468: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xe8 | 232 |  |
| unknown4 | 0x03 | 3 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x32 | 50 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0xff | 255 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0xe8 | 232 | Purity stat |
| par | 0x03 | 3 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 119 (0x77): item_119

**Offset:** 0x1474

**Raw hex:**
```
001474: e1 00 ff 08 00 00 d0 07 00 00 fb ff 00 00 00 00
001484: 00 00 00 00 00 00 00 00 e1 00 ff 08 00 00 d0 07
001494: 00 00 fb ff 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0xe1 | 225 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xff | 255 |  |
| unknown4 | 0x08 | 8 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0xd0 | 208 |  |
| type | 0x07 | 7 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xfb | 251 |  |
| unknown9 | 0xff | 255 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0xe1 | 225 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0xff | 255 | Purity stat |
| par | 0x08 | 8 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0xd0 | 208 | HP bonus |
| attribute1_value | 0x07 | 7 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xfb | 251 |  |
| elemental_type | 0xff | 255 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 120 (0x78): item_120

**Offset:** 0x14A0

**Raw hex:**
```
0014a0: 00 00 00 00 e1 00 ff 08 00 00 d0 07 00 00 fb ff
0014b0: 00 00 00 00 00 00 00 00 00 00 00 00 e1 00 ff 08
0014c0: 00 00 d0 07 00 00 fb ff 47 47 c8 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0xe1 | 225 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0xff | 255 |  |
| type | 0x08 | 8 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xd0 | 208 |  |
| unknown9 | 0x07 | 7 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0xfb | 251 |  |
| unknown12 | 0xff | 255 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0xe1 | 225 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0xff | 255 | HP bonus |
| attribute1_value | 0x08 | 8 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xd0 | 208 |  |
| elemental_type | 0x07 | 7 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0xfb | 251 |  |
| unknown13 | 0xff | 255 |  |
| dura | 0x47 | 71 | Current durability |
| unknown14 | 0x47 | 71 |  |
| unknown15 | 0xc8 | 200 |  |
| unknown16 | 0x00 | 0 |  |

### Item 121 (0x79): item_121

**Offset:** 0x14CC

**Raw hex:**
```
0014cc: 90 01 3c 64 3c 40 ff 7d ff 00 ff 00 00 00 00 00
0014dc: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
0014ec: 57 00 ff 00 00 00 58 02 80 0c 8c 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x90 | 144 |  |
| unknown2 | 0x01 | 1 |  |
| unknown3 | 0x3c | 60 |  |
| unknown4 | 0x64 | 100 |  |
| texture_index_1 | 0x3c | 60 |  |
| texture_index_2 | 0x40 | 64 |  |
| unknown5 | 0xff | 255 |  |
| type | 0x7d | 125 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0xff | 255 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xff | 255 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x57 | 87 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xff | 255 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x58 | 88 |  |
| unknown13 | 0x02 | 2 |  |
| dura | 0x80 | 128 | Current durability |
| unknown14 | 0x0c | 12 |  |
| unknown15 | 0x8c | 140 |  |
| unknown16 | 0x00 | 0 |  |

### Item 122 (0x7A): item_122

**Offset:** 0x14F8

**Raw hex:**
```
0014f8: 02 00 00 20 00 00 00 00 00 00 00 00 54 00 ff 00
001508: 00 00 00 00 00 00 f0 00 01 00 00 1a 00 00 00 00
001518: 00 00 00 00 5a 00 ff 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x02 | 2 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x20 | 32 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x54 | 84 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0xff | 255 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0xf0 | 240 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x01 | 1 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x1a | 26 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x5a | 90 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0xff | 255 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 123 (0x7B): item_123

**Offset:** 0x1524

**Raw hex:**
```
001524: 00 00 f0 00 01 00 00 19 00 00 00 00 00 00 00 00
001534: 0d 00 ff 00 64 00 20 03 c8 00 38 ff 00 00 00 00
001544: 00 00 00 00 00 00 00 00 0e 00 ff 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xf0 | 240 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x01 | 1 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x19 | 25 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x0d | 13 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0xff | 255 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x64 | 100 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x20 | 32 | Pierce stat |
| spr | 0x03 | 3 | Spirit stat |
| foc | 0xc8 | 200 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x38 | 56 | Purity stat |
| par | 0xff | 255 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x0e | 14 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xff | 255 |  |
| unknown16 | 0x00 | 0 |  |

### Item 124 (0x7C): item_124

**Offset:** 0x1550

**Raw hex:**
```
001550: c8 00 e8 03 a4 06 b0 ff 00 00 00 00 00 00 00 00
001560: 00 00 00 00 ff 00 ff 04 00 00 4c 04 58 02 1e 00
001570: 00 00 b6 03 f4 01 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0xc8 | 200 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xe8 | 232 |  |
| unknown4 | 0x03 | 3 |  |
| texture_index_1 | 0xa4 | 164 |  |
| texture_index_2 | 0x06 | 6 |  |
| unknown5 | 0xb0 | 176 |  |
| type | 0xff | 255 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0xff | 255 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0xff | 255 | Pierce stat |
| spr | 0x04 | 4 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x4c | 76 | Purity stat |
| par | 0x04 | 4 | Parry stat |
| mel | 0x58 | 88 | Melee power stat |
| sol | 0x02 | 2 | Solomon/Holy stat |
| hp | 0x1e | 30 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xb6 | 182 |  |
| elemental_type | 0x03 | 3 |  |
| elemental_power | 0xf4 | 244 |  |
| max_dura | 0x01 | 1 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 125 (0x7D): item_125

**Offset:** 0x157C

**Raw hex:**
```
00157c: ff 00 ff 04 00 00 f4 01 58 02 1e 00 00 00 bc 02
00158c: 2c 01 00 00 00 00 00 00 ff 00 ff 00 58 02 84 03
00159c: 20 03 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0xff | 255 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xff | 255 |  |
| unknown4 | 0x04 | 4 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0xf4 | 244 |  |
| type | 0x01 | 1 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x58 | 88 |  |
| unknown7 | 0x02 | 2 |  |
| unknown8 | 0x1e | 30 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0xbc | 188 |  |
| unknown12 | 0x02 | 2 |  |
| str | 0x2c | 44 | Strength stat |
| spd | 0x01 | 1 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0xff | 255 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0xff | 255 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x58 | 88 | Melee power stat |
| sol | 0x02 | 2 | Solomon/Holy stat |
| hp | 0x84 | 132 | HP bonus |
| attribute1_value | 0x03 | 3 |  |
| attribute1_type | 0x20 | 32 |  |
| attribute2_value | 0x03 | 3 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 126 (0x7E): item_126

**Offset:** 0x15A8

**Raw hex:**
```
0015a8: 00 00 00 00 ff 00 ff 04 00 00 84 03 58 02 00 00
0015b8: 00 00 c2 01 96 00 00 00 00 00 00 00 ff 00 ff 04
0015c8: 00 00 84 03 20 03 00 00 00 00 c2 01
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0xff | 255 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0xff | 255 |  |
| type | 0x04 | 4 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x84 | 132 |  |
| unknown9 | 0x03 | 3 |  |
| unknown10 | 0x58 | 88 |  |
| hand_type | 0x02 | 2 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0xc2 | 194 | Defense stat |
| bal | 0x01 | 1 | Balance stat |
| sla | 0x96 | 150 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0xff | 255 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0xff | 255 | HP bonus |
| attribute1_value | 0x04 | 4 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x84 | 132 |  |
| elemental_type | 0x03 | 3 |  |
| elemental_power | 0x20 | 32 |  |
| max_dura | 0x03 | 3 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xc2 | 194 |  |
| unknown16 | 0x01 | 1 |  |

### Item 127 (0x7F): item_127

**Offset:** 0x15D4

**Raw hex:**
```
0015d4: 96 00 00 00 00 00 00 00 ff 00 ff 00 90 01 84 03
0015e4: 20 03 00 00 00 00 00 00 00 00 00 00 00 00 00 00
0015f4: ff 00 ff 04 00 00 84 03 2c 01 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x96 | 150 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0xff | 255 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xff | 255 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x90 | 144 |  |
| hand_type | 0x01 | 1 | 6=one-hand, 7=two-hand |
| unknown11 | 0x84 | 132 |  |
| unknown12 | 0x03 | 3 |  |
| str | 0x20 | 32 | Strength stat |
| spd | 0x03 | 3 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0xff | 255 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xff | 255 |  |
| elemental_type | 0x04 | 4 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x84 | 132 |  |
| unknown13 | 0x03 | 3 |  |
| dura | 0x2c | 44 | Current durability |
| unknown14 | 0x01 | 1 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 128 (0x80): item_128

**Offset:** 0x1600

**Raw hex:**
```
001600: 00 00 c2 01 46 00 00 00 00 00 00 00 ff 00 ff 00
001610: 64 00 84 03 96 00 00 00 00 00 00 00 00 00 00 00
001620: 00 00 00 00 ff 00 ff 00 58 02 f4 01
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xc2 | 194 |  |
| unknown4 | 0x01 | 1 |  |
| texture_index_1 | 0x46 | 70 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0xff | 255 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0xff | 255 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x64 | 100 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x84 | 132 | Defense stat |
| bal | 0x03 | 3 | Balance stat |
| sla | 0x96 | 150 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0xff | 255 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0xff | 255 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x58 | 88 | Current durability |
| unknown14 | 0x02 | 2 |  |
| unknown15 | 0xf4 | 244 |  |
| unknown16 | 0x01 | 1 |  |

### Item 129 (0x81): item_129

**Offset:** 0x162C

**Raw hex:**
```
00162c: 2c 01 4c ff 00 00 00 00 00 00 00 00 00 00 00 00
00163c: ff 00 ff 00 e8 03 f4 01 2c 01 88 ff 00 00 00 00
00164c: 00 00 00 00 00 00 00 00 ff 00 ff 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x2c | 44 |  |
| unknown2 | 0x01 | 1 |  |
| unknown3 | 0x4c | 76 |  |
| unknown4 | 0xff | 255 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0xff | 255 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0xff | 255 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0xe8 | 232 | Slash stat |
| smh | 0x03 | 3 | Smash stat |
| pir | 0xf4 | 244 | Pierce stat |
| spr | 0x01 | 1 | Spirit stat |
| foc | 0x2c | 44 | Focus stat |
| ham | 0x01 | 1 | Hammer stat |
| pur | 0x88 | 136 | Purity stat |
| par | 0xff | 255 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0xff | 255 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xff | 255 |  |
| unknown16 | 0x00 | 0 |  |

### Item 130 (0x82): item_130

**Offset:** 0x1658

**Raw hex:**
```
001658: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
001668: 00 00 00 00 ff 00 ff 00 00 00 00 00 00 00 00 00
001678: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0xff | 255 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0xff | 255 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 131 (0x83): item_131

**Offset:** 0x1684

**Raw hex:**
```
001684: ff 00 ff 00 00 00 00 00 00 00 00 00 00 00 00 00
001694: 00 00 00 00 00 00 00 00 32 00 ff 00 c8 00 00 00
0016a4: c8 00 1e 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0xff | 255 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xff | 255 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x32 | 50 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0xff | 255 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0xc8 | 200 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0xc8 | 200 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x1e | 30 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 132 (0x84): item_132

**Offset:** 0x16B0

**Raw hex:**
```
0016b0: 00 00 00 00 ff 00 ff 00 00 00 00 00 00 00 00 00
0016c0: 00 00 00 00 00 00 00 00 00 00 00 00 ff 00 ff 00
0016d0: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0xff | 255 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0xff | 255 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0xff | 255 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0xff | 255 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 133 (0x85): item_133

**Offset:** 0x16DC

**Raw hex:**
```
0016dc: 00 00 00 00 00 00 00 00 ff 00 ff 00 00 00 00 00
0016ec: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
0016fc: 09 00 ff 02 00 07 00 0b f4 01 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0xff | 255 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xff | 255 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x09 | 9 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xff | 255 |  |
| elemental_type | 0x02 | 2 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x07 | 7 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x0b | 11 |  |
| dura | 0xf4 | 244 | Current durability |
| unknown14 | 0x01 | 1 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 134 (0x86): item_134

**Offset:** 0x1708

**Raw hex:**
```
001708: 02 00 00 00 00 00 00 00 00 00 00 00 ff 00 ff 00
001718: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
001728: 00 00 00 00 09 00 ff 00 5e 01 8a 02
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x02 | 2 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0xff | 255 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0xff | 255 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x09 | 9 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0xff | 255 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x5e | 94 | Current durability |
| unknown14 | 0x01 | 1 |  |
| unknown15 | 0x8a | 138 |  |
| unknown16 | 0x02 | 2 |  |

### Item 135 (0x87): item_135

**Offset:** 0x1734

**Raw hex:**
```
001734: 14 05 00 00 00 00 00 00 00 00 00 00 00 00 00 00
001744: ff 00 ff 00 00 00 b0 04 f4 01 00 00 00 00 00 00
001754: 00 00 00 00 00 00 00 00 33 00 ff 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x14 | 20 |  |
| unknown2 | 0x05 | 5 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0xff | 255 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0xff | 255 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0xb0 | 176 | Pierce stat |
| spr | 0x04 | 4 | Spirit stat |
| foc | 0xf4 | 244 | Focus stat |
| ham | 0x01 | 1 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x33 | 51 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xff | 255 |  |
| unknown16 | 0x00 | 0 |  |

### Item 136 (0x88): item_136

**Offset:** 0x1760

**Raw hex:**
```
001760: 00 00 00 08 00 04 00 00 00 00 00 00 00 00 00 00
001770: 00 00 00 00 e2 00 ff 08 00 00 00 08 00 06 00 00
001780: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x08 | 8 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x04 | 4 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0xe2 | 226 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0xff | 255 | Pierce stat |
| spr | 0x08 | 8 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x08 | 8 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x06 | 6 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 137 (0x89): item_137

**Offset:** 0x178C

**Raw hex:**
```
00178c: ec 00 ff 00 00 00 00 00 00 00 00 00 00 00 00 00
00179c: 00 00 00 00 00 00 00 00 e0 00 ff 00 00 00 00 00
0017ac: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0xec | 236 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xff | 255 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0xe0 | 224 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0xff | 255 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 138 (0x8A): item_138

**Offset:** 0x17B8

**Raw hex:**
```
0017b8: 00 00 00 00 ef 00 ff 00 00 00 00 00 00 00 00 00
0017c8: 00 00 00 00 00 00 00 00 00 00 00 00 1f 00 ff 00
0017d8: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0xef | 239 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0xff | 255 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x1f | 31 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0xff | 255 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 139 (0x8B): item_139

**Offset:** 0x17E4

**Raw hex:**
```
0017e4: 00 00 00 00 00 00 00 00 ff 00 ff 00 00 00 00 00
0017f4: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
001804: ff 00 ff 00 00 00 00 00 00 00 38 ff
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0xff | 255 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xff | 255 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0xff | 255 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xff | 255 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x38 | 56 |  |
| unknown16 | 0xff | 255 |  |

### Item 140 (0x8C): item_140

**Offset:** 0x1810

**Raw hex:**
```
001810: 00 00 00 00 00 00 00 00 00 00 00 00 18 00 ff 04
001820: 00 00 78 05 00 05 00 00 00 00 c8 00 2c 01 00 00
001830: 00 00 00 00 1a 00 ff 00 00 00 78 05
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x18 | 24 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0xff | 255 |  |
| unknown12 | 0x04 | 4 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x78 | 120 | Defense stat |
| bal | 0x05 | 5 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x05 | 5 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0xc8 | 200 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x2c | 44 | Melee power stat |
| sol | 0x01 | 1 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x1a | 26 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0xff | 255 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x78 | 120 |  |
| unknown16 | 0x05 | 5 |  |

### Item 141 (0x8D): item_141

**Offset:** 0x183C

**Raw hex:**
```
00183c: 00 05 64 00 00 00 00 00 00 00 00 00 00 00 00 00
00184c: 53 00 ff 00 00 00 20 03 20 03 38 ff 00 00 00 20
00185c: 00 00 00 00 00 00 00 00 53 00 ff 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x05 | 5 |  |
| unknown3 | 0x64 | 100 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x53 | 83 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0xff | 255 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x20 | 32 | Pierce stat |
| spr | 0x03 | 3 | Spirit stat |
| foc | 0x20 | 32 | Focus stat |
| ham | 0x03 | 3 | Hammer stat |
| pur | 0x38 | 56 | Purity stat |
| par | 0xff | 255 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x20 | 32 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x53 | 83 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xff | 255 |  |
| unknown16 | 0x00 | 0 |  |

### Item 142 (0x8E): item_142

**Offset:** 0x1868

**Raw hex:**
```
001868: 00 00 20 03 20 03 38 ff 00 00 00 20 00 00 00 00
001878: 00 00 00 00 ff 00 ff 00 00 05 a0 05 a0 0f 38 ff
001888: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x20 | 32 |  |
| unknown4 | 0x03 | 3 |  |
| texture_index_1 | 0x20 | 32 |  |
| texture_index_2 | 0x03 | 3 |  |
| unknown5 | 0x38 | 56 |  |
| type | 0xff | 255 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x20 | 32 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0xff | 255 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0xff | 255 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x05 | 5 | Hammer stat |
| pur | 0xa0 | 160 | Purity stat |
| par | 0x05 | 5 | Parry stat |
| mel | 0xa0 | 160 | Melee power stat |
| sol | 0x0f | 15 | Solomon/Holy stat |
| hp | 0x38 | 56 | HP bonus |
| attribute1_value | 0xff | 255 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 143 (0x8F): item_143

**Offset:** 0x1894

**Raw hex:**
```
001894: ff 00 ff 50 90 01 00 00 98 08 00 00 00 00 00 00
0018a4: 00 00 00 00 00 00 00 00 ff 00 ff 04 00 00 00 00
0018b4: 64 00 00 00 00 00 1a 04 90 01 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0xff | 255 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xff | 255 |  |
| unknown4 | 0x50 | 80 |  |
| texture_index_1 | 0x90 | 144 |  |
| texture_index_2 | 0x01 | 1 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x98 | 152 |  |
| unknown7 | 0x08 | 8 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0xff | 255 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0xff | 255 | Purity stat |
| par | 0x04 | 4 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x64 | 100 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x1a | 26 |  |
| unknown13 | 0x04 | 4 |  |
| dura | 0x90 | 144 | Current durability |
| unknown14 | 0x01 | 1 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 144 (0x90): item_144

**Offset:** 0x18C0

**Raw hex:**
```
0018c0: 00 00 00 00 f0 00 ff 00 00 00 00 00 00 00 00 00
0018d0: 00 00 00 00 00 00 00 00 00 00 00 00 f0 00 ff 00
0018e0: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0xf0 | 240 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0xff | 255 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0xf0 | 240 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0xff | 255 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 145 (0x91): item_145

**Offset:** 0x18EC

**Raw hex:**
```
0018ec: 00 00 00 00 00 00 00 00 f0 00 ff 00 00 00 00 00
0018fc: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
00190c: f2 00 ff 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0xf0 | 240 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xff | 255 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0xf2 | 242 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xff | 255 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 146 (0x92): item_146

**Offset:** 0x1918

**Raw hex:**
```
001918: 00 00 00 00 00 00 00 00 00 00 00 00 f2 00 ff 00
001928: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
001938: 00 00 00 00 f2 00 ff 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0xf2 | 242 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0xff | 255 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0xf2 | 242 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0xff | 255 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 147 (0x93): item_147

**Offset:** 0x1944

**Raw hex:**
```
001944: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
001954: f2 00 ff 00 00 00 00 00 00 00 00 00 00 00 00 00
001964: 00 00 00 00 00 00 00 00 f2 00 ff 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0xf2 | 242 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0xff | 255 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0xf2 | 242 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xff | 255 |  |
| unknown16 | 0x00 | 0 |  |

### Item 148 (0x94): item_148

**Offset:** 0x1970

**Raw hex:**
```
001970: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
001980: 00 00 00 00 f2 00 ff 00 00 00 00 00 00 00 00 00
001990: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0xf2 | 242 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0xff | 255 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 149 (0x95): item_149

**Offset:** 0x199C

**Raw hex:**
```
00199c: f2 00 ff 00 00 00 00 00 00 00 00 00 00 00 00 00
0019ac: 00 00 00 00 00 00 00 00 f2 00 ff 00 00 00 00 00
0019bc: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0xf2 | 242 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xff | 255 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0xf2 | 242 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0xff | 255 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 150 (0x96): item_150

**Offset:** 0x19C8

**Raw hex:**
```
0019c8: 00 00 00 00 f2 00 ff 00 00 00 00 00 00 00 00 00
0019d8: 00 00 00 00 00 00 00 00 00 00 00 00 f2 00 ff 00
0019e8: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0xf2 | 242 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0xff | 255 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0xf2 | 242 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0xff | 255 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 151 (0x97): item_151

**Offset:** 0x19F4

**Raw hex:**
```
0019f4: 00 00 00 00 00 00 00 00 f2 00 ff 00 00 00 00 00
001a04: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
001a14: f2 00 ff 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0xf2 | 242 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xff | 255 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0xf2 | 242 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xff | 255 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 152 (0x98): item_152

**Offset:** 0x1A20

**Raw hex:**
```
001a20: 00 00 00 00 00 00 00 00 00 00 00 00 f2 00 ff 00
001a30: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
001a40: 00 00 00 00 e0 00 ff 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0xf2 | 242 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0xff | 255 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0xe0 | 224 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0xff | 255 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 153 (0x99): item_153

**Offset:** 0x1A4C

**Raw hex:**
```
001a4c: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
001a5c: e7 00 ff 00 00 00 00 00 00 00 00 00 00 00 00 00
001a6c: 00 00 00 00 00 00 00 00 e3 00 ff 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0xe7 | 231 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0xff | 255 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0xe3 | 227 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xff | 255 |  |
| unknown16 | 0x00 | 0 |  |

### Item 154 (0x9A): item_154

**Offset:** 0x1A78

**Raw hex:**
```
001a78: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
001a88: 00 00 00 00 1f 00 ff 00 00 00 00 00 00 00 00 00
001a98: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x1f | 31 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0xff | 255 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 155 (0x9B): item_155

**Offset:** 0x1AA4

**Raw hex:**
```
001aa4: e1 00 ff 00 00 00 00 00 00 00 00 00 00 00 00 00
001ab4: 00 00 00 00 00 00 00 00 e4 00 ff 00 00 00 00 00
001ac4: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0xe1 | 225 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xff | 255 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0xe4 | 228 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0xff | 255 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 156 (0x9C): item_156

**Offset:** 0x1AD0

**Raw hex:**
```
001ad0: 00 00 00 00 ff 00 ff 00 00 00 00 00 00 00 00 00
001ae0: 00 00 00 00 00 00 00 00 00 00 00 00 e6 00 ff 00
001af0: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0xff | 255 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0xff | 255 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0xe6 | 230 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0xff | 255 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 157 (0x9D): item_157

**Offset:** 0x1AFC

**Raw hex:**
```
001afc: 00 00 00 00 00 00 00 00 e9 00 ff 00 ee 02 00 00
001b0c: 00 20 00 00 00 00 00 00 00 00 00 00 00 00 00 00
001b1c: ea 00 ff 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0xe9 | 233 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xff | 255 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0xee | 238 |  |
| hand_type | 0x02 | 2 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x20 | 32 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0xea | 234 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xff | 255 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 158 (0x9E): item_158

**Offset:** 0x1B28

**Raw hex:**
```
001b28: 00 00 00 00 00 00 00 00 00 00 00 00 25 00 ff 00
001b38: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
001b48: 00 00 00 00 e9 00 ff 00 08 02 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x25 | 37 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0xff | 255 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0xe9 | 233 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0xff | 255 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x08 | 8 | Current durability |
| unknown14 | 0x02 | 2 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 159 (0x9F): item_159

**Offset:** 0x1B54

**Raw hex:**
```
001b54: 00 10 00 00 00 00 00 00 00 00 00 00 00 00 00 00
001b64: ff 00 ff 00 00 00 00 00 00 00 00 00 00 00 00 00
001b74: 00 00 00 00 00 00 00 00 ff 00 ff 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x10 | 16 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0xff | 255 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0xff | 255 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0xff | 255 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xff | 255 |  |
| unknown16 | 0x00 | 0 |  |

### Item 160 (0xA0): item_160

**Offset:** 0x1B80

**Raw hex:**
```
001b80: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
001b90: 00 00 00 00 ff 00 ff 00 00 00 00 00 00 00 00 00
001ba0: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0xff | 255 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0xff | 255 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 161 (0xA1): item_161

**Offset:** 0x1BAC

**Raw hex:**
```
001bac: ff 00 ff 00 00 00 00 00 00 00 00 00 00 00 00 00
001bbc: 00 00 00 00 00 00 00 00 ff 00 ff 00 00 00 00 00
001bcc: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0xff | 255 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xff | 255 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0xff | 255 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0xff | 255 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 162 (0xA2): item_162

**Offset:** 0x1BD8

**Raw hex:**
```
001bd8: 00 00 00 00 e2 00 ff 00 00 00 00 00 00 00 00 00
001be8: 00 00 00 00 00 00 00 00 00 00 00 00 15 00 ff 00
001bf8: 00 00 78 05 d0 07 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0xe2 | 226 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0xff | 255 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x15 | 21 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0xff | 255 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x78 | 120 |  |
| elemental_type | 0x05 | 5 |  |
| elemental_power | 0xd0 | 208 |  |
| max_dura | 0x07 | 7 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 163 (0xA3): item_163

**Offset:** 0x1C04

**Raw hex:**
```
001c04: 00 00 00 00 00 00 00 00 14 00 ff 00 00 00 78 05
001c14: e8 03 00 00 00 00 00 00 00 00 00 00 00 00 00 00
001c24: 00 07 00 00 ff 40 84 03 00 01 8c 0a
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x14 | 20 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xff | 255 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x78 | 120 |  |
| unknown12 | 0x05 | 5 |  |
| str | 0xe8 | 232 | Strength stat |
| spd | 0x03 | 3 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x07 | 7 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0xff | 255 |  |
| max_dura | 0x40 | 64 | Max durability |
| weight | 0x84 | 132 |  |
| unknown13 | 0x03 | 3 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x01 | 1 |  |
| unknown15 | 0x8c | 140 |  |
| unknown16 | 0x0a | 10 |  |

### Item 164 (0xA4): item_164

**Offset:** 0x1C30

**Raw hex:**
```
001c30: 00 09 00 00 40 01 e0 00 00 02 00 00 40 00 20 07
001c40: 00 00 00 00 ff 40 c0 03 00 01 8c 0a 00 09 00 00
001c50: 40 01 e0 00 00 02 00 00 40 00 20 07
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x09 | 9 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x40 | 64 |  |
| texture_index_2 | 0x01 | 1 |  |
| unknown5 | 0xe0 | 224 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x02 | 2 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x40 | 64 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x20 | 32 |  |
| unknown12 | 0x07 | 7 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0xff | 255 | Slash stat |
| smh | 0x40 | 64 | Smash stat |
| pir | 0xc0 | 192 | Pierce stat |
| spr | 0x03 | 3 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x01 | 1 | Hammer stat |
| pur | 0x8c | 140 | Purity stat |
| par | 0x0a | 10 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x09 | 9 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x40 | 64 |  |
| attribute2_value | 0x01 | 1 |  |
| attribute2_type | 0xe0 | 224 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x02 | 2 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x40 | 64 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x20 | 32 |  |
| unknown16 | 0x07 | 7 |  |

### Item 165 (0xA5): item_165

**Offset:** 0x1C5C

**Raw hex:**
```
001c5c: 00 00 00 00 ff 40 e2 04 00 01 e4 0c 80 0a 00 00
001c6c: 60 01 e0 00 00 02 00 00 00 00 80 07 00 00 00 00
001c7c: ff 40 ba 04 00 01 e4 0c 80 0a 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0xff | 255 |  |
| texture_index_2 | 0x40 | 64 |  |
| unknown5 | 0xe2 | 226 |  |
| type | 0x04 | 4 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x01 | 1 |  |
| unknown8 | 0xe4 | 228 |  |
| unknown9 | 0x0c | 12 |  |
| unknown10 | 0x80 | 128 |  |
| hand_type | 0x0a | 10 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x60 | 96 | Strength stat |
| spd | 0x01 | 1 | Speed stat |
| def | 0xe0 | 224 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x02 | 2 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x80 | 128 | Purity stat |
| par | 0x07 | 7 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0xff | 255 |  |
| attribute2_value | 0x40 | 64 |  |
| attribute2_type | 0xba | 186 |  |
| elemental_type | 0x04 | 4 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x01 | 1 | Max durability |
| weight | 0xe4 | 228 |  |
| unknown13 | 0x0c | 12 |  |
| dura | 0x80 | 128 | Current durability |
| unknown14 | 0x0a | 10 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 166 (0xA6): item_166

**Offset:** 0x1C88

**Raw hex:**
```
001c88: 60 01 e0 00 00 02 00 00 00 00 80 07 00 00 00 00
001c98: ff 40 14 05 c0 00 3a 07 00 06 00 00 60 01 e0 00
001ca8: 00 02 00 00 40 00 c0 07 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x60 | 96 |  |
| unknown2 | 0x01 | 1 |  |
| unknown3 | 0xe0 | 224 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x02 | 2 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x80 | 128 |  |
| unknown9 | 0x07 | 7 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0xff | 255 | Strength stat |
| spd | 0x40 | 64 | Speed stat |
| def | 0x14 | 20 | Defense stat |
| bal | 0x05 | 5 | Balance stat |
| sla | 0xc0 | 192 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x3a | 58 | Pierce stat |
| spr | 0x07 | 7 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x06 | 6 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x60 | 96 | Melee power stat |
| sol | 0x01 | 1 | Solomon/Holy stat |
| hp | 0xe0 | 224 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x02 | 2 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x40 | 64 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0xc0 | 192 |  |
| unknown13 | 0x07 | 7 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 167 (0xA7): item_167

**Offset:** 0x1CB4

**Raw hex:**
```
001cb4: ff 40 32 05 00 01 e4 0c 80 0a 00 00 60 01 e0 00
001cc4: 00 02 00 00 00 00 80 07 00 00 00 00 ff 40 14 05
001cd4: 00 01 e4 0c 80 0a 00 00 60 01 e0 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0xff | 255 |  |
| unknown2 | 0x40 | 64 |  |
| unknown3 | 0x32 | 50 |  |
| unknown4 | 0x05 | 5 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x01 | 1 |  |
| unknown5 | 0xe4 | 228 |  |
| type | 0x0c | 12 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x80 | 128 |  |
| unknown7 | 0x0a | 10 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x60 | 96 |  |
| hand_type | 0x01 | 1 | 6=one-hand, 7=two-hand |
| unknown11 | 0xe0 | 224 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x02 | 2 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x80 | 128 | Pierce stat |
| spr | 0x07 | 7 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0xff | 255 | Melee power stat |
| sol | 0x40 | 64 | Solomon/Holy stat |
| hp | 0x14 | 20 | HP bonus |
| attribute1_value | 0x05 | 5 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x01 | 1 |  |
| attribute2_type | 0xe4 | 228 |  |
| elemental_type | 0x0c | 12 |  |
| elemental_power | 0x80 | 128 |  |
| max_dura | 0x0a | 10 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x60 | 96 | Current durability |
| unknown14 | 0x01 | 1 |  |
| unknown15 | 0xe0 | 224 |  |
| unknown16 | 0x00 | 0 |  |

### Item 168 (0xA8): item_168

**Offset:** 0x1CE0

**Raw hex:**
```
001ce0: 00 02 00 00 00 00 80 07 00 00 00 00 ff 40 64 05
001cf0: 10 01 e4 0c 80 0a 00 00 60 01 e0 00 00 02 00 00
001d00: 00 00 80 07 00 00 00 00 ff 40 ce 04
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x02 | 2 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x80 | 128 |  |
| type | 0x07 | 7 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0xff | 255 |  |
| hand_type | 0x40 | 64 | 6=one-hand, 7=two-hand |
| unknown11 | 0x64 | 100 |  |
| unknown12 | 0x05 | 5 |  |
| str | 0x10 | 16 | Strength stat |
| spd | 0x01 | 1 | Speed stat |
| def | 0xe4 | 228 | Defense stat |
| bal | 0x0c | 12 | Balance stat |
| sla | 0x80 | 128 | Slash stat |
| smh | 0x0a | 10 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x60 | 96 | Focus stat |
| ham | 0x01 | 1 | Hammer stat |
| pur | 0xe0 | 224 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x02 | 2 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x80 | 128 |  |
| elemental_type | 0x07 | 7 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0xff | 255 | Current durability |
| unknown14 | 0x40 | 64 |  |
| unknown15 | 0xce | 206 |  |
| unknown16 | 0x04 | 4 |  |

### Item 169 (0xA9): item_169

**Offset:** 0x1D0C

**Raw hex:**
```
001d0c: e0 00 be 0a 80 09 00 00 40 01 e0 00 00 02 00 00
001d1c: 40 00 20 07 00 00 00 00 ff 40 b4 05 a0 00 1c 0c
001d2c: 00 0b 00 00 00 00 00 01 00 01 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0xe0 | 224 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xbe | 190 |  |
| unknown4 | 0x0a | 10 |  |
| texture_index_1 | 0x80 | 128 |  |
| texture_index_2 | 0x09 | 9 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x40 | 64 |  |
| unknown7 | 0x01 | 1 |  |
| unknown8 | 0xe0 | 224 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x02 | 2 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x40 | 64 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x20 | 32 | Defense stat |
| bal | 0x07 | 7 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0xff | 255 | Focus stat |
| ham | 0x40 | 64 | Hammer stat |
| pur | 0xb4 | 180 | Purity stat |
| par | 0x05 | 5 | Parry stat |
| mel | 0xa0 | 160 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x1c | 28 | HP bonus |
| attribute1_value | 0x0c | 12 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x0b | 11 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x01 | 1 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x01 | 1 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 170 (0xAA): item_170

**Offset:** 0x1D38

**Raw hex:**
```
001d38: 00 00 00 08 00 00 00 00 ff 40 46 05 b0 00 00 0c
001d48: 00 0b 00 00 60 01 e0 00 00 02 00 00 00 00 00 08
001d58: 00 00 00 00 ff 40 8c 05 b0 00 80 0c
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x08 | 8 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0xff | 255 |  |
| unknown7 | 0x40 | 64 |  |
| unknown8 | 0x46 | 70 |  |
| unknown9 | 0x05 | 5 |  |
| unknown10 | 0xb0 | 176 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x0c | 12 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x0b | 11 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x60 | 96 | Slash stat |
| smh | 0x01 | 1 | Smash stat |
| pir | 0xe0 | 224 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x02 | 2 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x08 | 8 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0xff | 255 |  |
| max_dura | 0x40 | 64 | Max durability |
| weight | 0x8c | 140 |  |
| unknown13 | 0x05 | 5 |  |
| dura | 0xb0 | 176 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x80 | 128 |  |
| unknown16 | 0x0c | 12 |  |

### Item 171 (0xAB): item_171

**Offset:** 0x1D64

**Raw hex:**
```
001d64: 40 0b 00 00 60 01 e0 00 00 02 00 00 00 00 00 08
001d74: 00 00 00 00 ff 40 dc 05 b0 00 80 0c 40 0b 00 00
001d84: 60 01 e0 00 00 02 00 00 00 00 00 08
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x40 | 64 |  |
| unknown2 | 0x0b | 11 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x60 | 96 |  |
| texture_index_2 | 0x01 | 1 |  |
| unknown5 | 0xe0 | 224 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x02 | 2 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x08 | 8 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0xff | 255 | Slash stat |
| smh | 0x40 | 64 | Smash stat |
| pir | 0xdc | 220 | Pierce stat |
| spr | 0x05 | 5 | Spirit stat |
| foc | 0xb0 | 176 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x80 | 128 | Purity stat |
| par | 0x0c | 12 | Parry stat |
| mel | 0x40 | 64 | Melee power stat |
| sol | 0x0b | 11 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x60 | 96 |  |
| attribute2_value | 0x01 | 1 |  |
| attribute2_type | 0xe0 | 224 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x02 | 2 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x08 | 8 |  |

### Item 172 (0xAC): item_172

**Offset:** 0x1D90

**Raw hex:**
```
001d90: 00 00 00 00 ff 40 fa 05 b0 00 80 0c 40 0b 00 00
001da0: 60 01 e0 00 00 02 00 00 00 00 00 08 00 00 00 00
001db0: ff 40 b4 05 c0 00 80 0c 40 0b 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0xff | 255 |  |
| texture_index_2 | 0x40 | 64 |  |
| unknown5 | 0xfa | 250 |  |
| type | 0x05 | 5 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0xb0 | 176 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x80 | 128 |  |
| unknown9 | 0x0c | 12 |  |
| unknown10 | 0x40 | 64 |  |
| hand_type | 0x0b | 11 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x60 | 96 | Strength stat |
| spd | 0x01 | 1 | Speed stat |
| def | 0xe0 | 224 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x02 | 2 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x08 | 8 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0xff | 255 |  |
| attribute2_value | 0x40 | 64 |  |
| attribute2_type | 0xb4 | 180 |  |
| elemental_type | 0x05 | 5 |  |
| elemental_power | 0xc0 | 192 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x80 | 128 |  |
| unknown13 | 0x0c | 12 |  |
| dura | 0x40 | 64 | Current durability |
| unknown14 | 0x0b | 11 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 173 (0xAD): item_173

**Offset:** 0x1DBC

**Raw hex:**
```
001dbc: 60 01 e0 00 00 02 00 00 00 00 00 08 00 00 00 00
001dcc: ff 40 78 05 c0 00 4e 0c 00 0b 00 00 60 01 e0 00
001ddc: 00 02 00 00 00 00 00 08 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x60 | 96 |  |
| unknown2 | 0x01 | 1 |  |
| unknown3 | 0xe0 | 224 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x02 | 2 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x08 | 8 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0xff | 255 | Strength stat |
| spd | 0x40 | 64 | Speed stat |
| def | 0x78 | 120 | Defense stat |
| bal | 0x05 | 5 | Balance stat |
| sla | 0xc0 | 192 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x4e | 78 | Pierce stat |
| spr | 0x0c | 12 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x0b | 11 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x60 | 96 | Melee power stat |
| sol | 0x01 | 1 | Solomon/Holy stat |
| hp | 0xe0 | 224 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x02 | 2 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x08 | 8 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 174 (0xAE): item_174

**Offset:** 0x1DE8

**Raw hex:**
```
001de8: ff 40 c8 05 c0 00 80 0c 40 0b 00 00 60 01 e0 00
001df8: 00 02 00 00 00 00 00 08 00 00 00 00 ff 40 9a 06
001e08: a0 00 10 0e 00 0d 00 00 00 00 e0 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0xff | 255 |  |
| unknown2 | 0x40 | 64 |  |
| unknown3 | 0xc8 | 200 |  |
| unknown4 | 0x05 | 5 |  |
| texture_index_1 | 0xc0 | 192 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x80 | 128 |  |
| type | 0x0c | 12 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x40 | 64 |  |
| unknown7 | 0x0b | 11 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x60 | 96 |  |
| hand_type | 0x01 | 1 | 6=one-hand, 7=two-hand |
| unknown11 | 0xe0 | 224 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x02 | 2 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x08 | 8 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0xff | 255 | Melee power stat |
| sol | 0x40 | 64 | Solomon/Holy stat |
| hp | 0x9a | 154 | HP bonus |
| attribute1_value | 0x06 | 6 |  |
| attribute1_type | 0xa0 | 160 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x10 | 16 |  |
| elemental_type | 0x0e | 14 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x0d | 13 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xe0 | 224 |  |
| unknown16 | 0x00 | 0 |  |

### Item 175 (0xAF): item_175

**Offset:** 0x1E14

**Raw hex:**
```
001e14: a0 01 00 00 00 00 00 08 00 00 00 00 ff 40 4a 06
001e24: a0 00 10 0e 00 0d 00 00 00 00 e0 00 a0 01 00 00
001e34: 00 00 00 08 00 00 00 00 ff 40 68 06
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0xa0 | 160 |  |
| unknown2 | 0x01 | 1 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x08 | 8 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0xff | 255 |  |
| hand_type | 0x40 | 64 | 6=one-hand, 7=two-hand |
| unknown11 | 0x4a | 74 |  |
| unknown12 | 0x06 | 6 |  |
| str | 0xa0 | 160 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x10 | 16 | Defense stat |
| bal | 0x0e | 14 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x0d | 13 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0xe0 | 224 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0xa0 | 160 | Melee power stat |
| sol | 0x01 | 1 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x08 | 8 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0xff | 255 | Current durability |
| unknown14 | 0x40 | 64 |  |
| unknown15 | 0x68 | 104 |  |
| unknown16 | 0x06 | 6 |  |

### Item 176 (0xB0): item_176

**Offset:** 0x1E40

**Raw hex:**
```
001e40: 30 01 f0 0a 00 09 00 00 40 01 40 01 e0 01 00 00
001e50: 00 00 a0 07 00 00 00 00 ff 40 1e 05 30 01 f0 0a
001e60: 00 09 00 00 40 01 40 01 e0 01 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x30 | 48 |  |
| unknown2 | 0x01 | 1 |  |
| unknown3 | 0xf0 | 240 |  |
| unknown4 | 0x0a | 10 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x09 | 9 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x40 | 64 |  |
| unknown7 | 0x01 | 1 |  |
| unknown8 | 0x40 | 64 |  |
| unknown9 | 0x01 | 1 |  |
| unknown10 | 0xe0 | 224 |  |
| hand_type | 0x01 | 1 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0xa0 | 160 | Defense stat |
| bal | 0x07 | 7 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0xff | 255 | Focus stat |
| ham | 0x40 | 64 | Hammer stat |
| pur | 0x1e | 30 | Purity stat |
| par | 0x05 | 5 | Parry stat |
| mel | 0x30 | 48 | Melee power stat |
| sol | 0x01 | 1 | Solomon/Holy stat |
| hp | 0xf0 | 240 | HP bonus |
| attribute1_value | 0x0a | 10 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x09 | 9 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x40 | 64 |  |
| max_dura | 0x01 | 1 | Max durability |
| weight | 0x40 | 64 |  |
| unknown13 | 0x01 | 1 |  |
| dura | 0xe0 | 224 | Current durability |
| unknown14 | 0x01 | 1 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 177 (0xB1): item_177

**Offset:** 0x1E6C

**Raw hex:**
```
001e6c: 00 00 a0 07 00 00 00 00 ff 40 28 05 30 01 f0 0a
001e7c: 00 09 00 00 40 01 40 01 e0 01 00 00 00 00 a0 07
001e8c: 00 00 00 00 ff 40 60 04 00 01 f0 0a
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xa0 | 160 |  |
| unknown4 | 0x07 | 7 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0xff | 255 |  |
| unknown7 | 0x40 | 64 |  |
| unknown8 | 0x28 | 40 |  |
| unknown9 | 0x05 | 5 |  |
| unknown10 | 0x30 | 48 |  |
| hand_type | 0x01 | 1 | 6=one-hand, 7=two-hand |
| unknown11 | 0xf0 | 240 |  |
| unknown12 | 0x0a | 10 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x09 | 9 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x40 | 64 | Slash stat |
| smh | 0x01 | 1 | Smash stat |
| pir | 0x40 | 64 | Pierce stat |
| spr | 0x01 | 1 | Spirit stat |
| foc | 0xe0 | 224 | Focus stat |
| ham | 0x01 | 1 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0xa0 | 160 | HP bonus |
| attribute1_value | 0x07 | 7 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0xff | 255 |  |
| max_dura | 0x40 | 64 | Max durability |
| weight | 0x60 | 96 |  |
| unknown13 | 0x04 | 4 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x01 | 1 |  |
| unknown15 | 0xf0 | 240 |  |
| unknown16 | 0x0a | 10 |  |

### Item 178 (0xB2): item_178

**Offset:** 0x1E98

**Raw hex:**
```
001e98: 00 09 00 00 40 01 40 01 e0 01 00 00 00 00 a0 07
001ea8: 00 00 00 00 ff 40 c0 03 00 01 f0 0a 00 09 00 00
001eb8: 40 01 40 01 e0 01 00 00 00 00 a0 07
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x09 | 9 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x40 | 64 |  |
| texture_index_2 | 0x01 | 1 |  |
| unknown5 | 0x40 | 64 |  |
| type | 0x01 | 1 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0xe0 | 224 |  |
| unknown7 | 0x01 | 1 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0xa0 | 160 |  |
| unknown12 | 0x07 | 7 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0xff | 255 | Slash stat |
| smh | 0x40 | 64 | Smash stat |
| pir | 0xc0 | 192 | Pierce stat |
| spr | 0x03 | 3 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x01 | 1 | Hammer stat |
| pur | 0xf0 | 240 | Purity stat |
| par | 0x0a | 10 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x09 | 9 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x40 | 64 |  |
| attribute2_value | 0x01 | 1 |  |
| attribute2_type | 0x40 | 64 |  |
| elemental_type | 0x01 | 1 |  |
| elemental_power | 0xe0 | 224 |  |
| max_dura | 0x01 | 1 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xa0 | 160 |  |
| unknown16 | 0x07 | 7 |  |

### Item 179 (0xB3): item_179

**Offset:** 0x1EC4

**Raw hex:**
```
001ec4: 00 00 00 00 ff 40 48 03 00 01 60 09 00 07 00 00
001ed4: 40 01 00 01 e0 01 00 00 40 01 00 08 00 00 00 00
001ee4: ff 40 48 03 00 01 60 09 00 07 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0xff | 255 |  |
| texture_index_2 | 0x40 | 64 |  |
| unknown5 | 0x48 | 72 |  |
| type | 0x03 | 3 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x01 | 1 |  |
| unknown8 | 0x60 | 96 |  |
| unknown9 | 0x09 | 9 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x07 | 7 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x40 | 64 | Strength stat |
| spd | 0x01 | 1 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x01 | 1 | Balance stat |
| sla | 0xe0 | 224 | Slash stat |
| smh | 0x01 | 1 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x40 | 64 | Focus stat |
| ham | 0x01 | 1 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x08 | 8 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0xff | 255 |  |
| attribute2_value | 0x40 | 64 |  |
| attribute2_type | 0x48 | 72 |  |
| elemental_type | 0x03 | 3 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x01 | 1 | Max durability |
| weight | 0x60 | 96 |  |
| unknown13 | 0x09 | 9 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x07 | 7 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 180 (0xB4): item_180

**Offset:** 0x1EF0

**Raw hex:**
```
001ef0: 40 01 00 01 e0 01 00 00 40 01 00 08 00 00 00 00
001f00: ff 40 98 03 e0 00 28 0a 00 09 00 00 40 01 40 01
001f10: e0 01 00 00 00 00 80 07 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x40 | 64 |  |
| unknown2 | 0x01 | 1 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x01 | 1 |  |
| texture_index_1 | 0xe0 | 224 |  |
| texture_index_2 | 0x01 | 1 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x40 | 64 |  |
| unknown7 | 0x01 | 1 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x08 | 8 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0xff | 255 | Strength stat |
| spd | 0x40 | 64 | Speed stat |
| def | 0x98 | 152 | Defense stat |
| bal | 0x03 | 3 | Balance stat |
| sla | 0xe0 | 224 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x28 | 40 | Pierce stat |
| spr | 0x0a | 10 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x09 | 9 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x40 | 64 | Melee power stat |
| sol | 0x01 | 1 | Solomon/Holy stat |
| hp | 0x40 | 64 | HP bonus |
| attribute1_value | 0x01 | 1 |  |
| attribute1_type | 0xe0 | 224 |  |
| attribute2_value | 0x01 | 1 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x80 | 128 |  |
| unknown13 | 0x07 | 7 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 181 (0xB5): item_181

**Offset:** 0x1F1C

**Raw hex:**
```
001f1c: ff 40 c0 03 e0 00 28 0a 00 09 00 00 40 01 40 01
001f2c: e0 01 00 00 00 00 80 07 00 00 00 00 ff 40 ba 04
001f3c: b0 00 c4 09 80 08 00 00 00 00 c0 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0xff | 255 |  |
| unknown2 | 0x40 | 64 |  |
| unknown3 | 0xc0 | 192 |  |
| unknown4 | 0x03 | 3 |  |
| texture_index_1 | 0xe0 | 224 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x28 | 40 |  |
| type | 0x0a | 10 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x09 | 9 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x40 | 64 |  |
| hand_type | 0x01 | 1 | 6=one-hand, 7=two-hand |
| unknown11 | 0x40 | 64 |  |
| unknown12 | 0x01 | 1 |  |
| str | 0xe0 | 224 | Strength stat |
| spd | 0x01 | 1 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x80 | 128 | Pierce stat |
| spr | 0x07 | 7 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0xff | 255 | Melee power stat |
| sol | 0x40 | 64 | Solomon/Holy stat |
| hp | 0xba | 186 | HP bonus |
| attribute1_value | 0x04 | 4 |  |
| attribute1_type | 0xb0 | 176 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xc4 | 196 |  |
| elemental_type | 0x09 | 9 |  |
| elemental_power | 0x80 | 128 |  |
| max_dura | 0x08 | 8 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xc0 | 192 |  |
| unknown16 | 0x00 | 0 |  |

### Item 182 (0xB6): item_182

**Offset:** 0x1F48

**Raw hex:**
```
001f48: 20 01 00 00 40 00 e0 07 00 00 00 00 ff 40 c2 06
001f58: b0 00 28 0a c0 08 00 00 00 00 c0 00 20 01 00 00
001f68: 40 00 e0 07 00 00 00 00 ff 40 e0 06
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x20 | 32 |  |
| unknown2 | 0x01 | 1 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x40 | 64 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0xe0 | 224 |  |
| type | 0x07 | 7 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0xff | 255 |  |
| hand_type | 0x40 | 64 | 6=one-hand, 7=two-hand |
| unknown11 | 0xc2 | 194 |  |
| unknown12 | 0x06 | 6 |  |
| str | 0xb0 | 176 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x28 | 40 | Defense stat |
| bal | 0x0a | 10 | Balance stat |
| sla | 0xc0 | 192 | Slash stat |
| smh | 0x08 | 8 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0xc0 | 192 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x20 | 32 | Melee power stat |
| sol | 0x01 | 1 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x40 | 64 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xe0 | 224 |  |
| elemental_type | 0x07 | 7 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0xff | 255 | Current durability |
| unknown14 | 0x40 | 64 |  |
| unknown15 | 0xe0 | 224 |  |
| unknown16 | 0x06 | 6 |  |

### Item 183 (0xB7): item_183

**Offset:** 0x1F74

**Raw hex:**
```
001f74: b0 00 28 0a c0 08 00 00 00 00 c0 00 20 01 00 00
001f84: 40 00 e0 07 00 00 00 00 ff 40 00 00 60 00 00 0b
001f94: 00 06 00 00 00 00 c0 03 00 03 3e 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0xb0 | 176 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x28 | 40 |  |
| unknown4 | 0x0a | 10 |  |
| texture_index_1 | 0xc0 | 192 |  |
| texture_index_2 | 0x08 | 8 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xc0 | 192 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x20 | 32 |  |
| hand_type | 0x01 | 1 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x40 | 64 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0xe0 | 224 | Defense stat |
| bal | 0x07 | 7 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0xff | 255 | Focus stat |
| ham | 0x40 | 64 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x60 | 96 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x0b | 11 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x06 | 6 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0xc0 | 192 |  |
| unknown13 | 0x03 | 3 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x03 | 3 |  |
| unknown15 | 0x3e | 62 |  |
| unknown16 | 0x00 | 0 |  |

### Item 184 (0xB8): item_184

**Offset:** 0x1FA0

**Raw hex:**
```
001fa0: 80 00 00 08 00 00 3d 00 ff 00 00 00 60 00 00 0b
001fb0: 00 06 00 00 00 00 c0 03 00 03 04 00 80 00 00 08
001fc0: 00 00 03 00 ff 00 00 00 60 00 60 0c
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x80 | 128 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x08 | 8 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x3d | 61 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0xff | 255 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x60 | 96 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x0b | 11 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x06 | 6 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0xc0 | 192 | Pierce stat |
| spr | 0x03 | 3 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x03 | 3 | Hammer stat |
| pur | 0x04 | 4 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x80 | 128 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x08 | 8 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x03 | 3 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0xff | 255 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x60 | 96 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x60 | 96 |  |
| unknown16 | 0x0c | 12 |  |

### Item 185 (0xB9): item_185

**Offset:** 0x1FCC

**Raw hex:**
```
001fcc: 00 01 00 00 e0 ff 60 03 40 02 8e 00 00 00 00 08
001fdc: 00 00 91 00 ff 00 00 00 60 00 60 0c 00 01 00 00
001fec: e0 ff 60 03 40 02 7a 00 00 00 00 08
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x01 | 1 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0xe0 | 224 |  |
| texture_index_2 | 0xff | 255 |  |
| unknown5 | 0x60 | 96 |  |
| type | 0x03 | 3 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x40 | 64 |  |
| unknown7 | 0x02 | 2 |  |
| unknown8 | 0x8e | 142 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x08 | 8 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x91 | 145 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0xff | 255 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x60 | 96 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x60 | 96 | Purity stat |
| par | 0x0c | 12 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x01 | 1 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0xe0 | 224 |  |
| attribute2_value | 0xff | 255 |  |
| attribute2_type | 0x60 | 96 |  |
| elemental_type | 0x03 | 3 |  |
| elemental_power | 0x40 | 64 |  |
| max_dura | 0x02 | 2 | Max durability |
| weight | 0x7a | 122 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x08 | 8 |  |

### Item 186 (0xBA): item_186

**Offset:** 0x1FF8

**Raw hex:**
```
001ff8: 00 00 7d 00 ff 40 ac 03 a0 00 00 0e 00 04 00 00
002008: c0 fe e0 00 a0 01 00 00 00 00 e0 07 00 00 00 00
002018: ff 40 ac 03 b0 01 00 0e 00 04 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x7d | 125 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0xff | 255 |  |
| texture_index_2 | 0x40 | 64 |  |
| unknown5 | 0xac | 172 |  |
| type | 0x03 | 3 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0xa0 | 160 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x0e | 14 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x04 | 4 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0xc0 | 192 | Strength stat |
| spd | 0xfe | 254 | Speed stat |
| def | 0xe0 | 224 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0xa0 | 160 | Slash stat |
| smh | 0x01 | 1 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0xe0 | 224 | Purity stat |
| par | 0x07 | 7 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0xff | 255 |  |
| attribute2_value | 0x40 | 64 |  |
| attribute2_type | 0xac | 172 |  |
| elemental_type | 0x03 | 3 |  |
| elemental_power | 0xb0 | 176 |  |
| max_dura | 0x01 | 1 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x0e | 14 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x04 | 4 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 187 (0xBB): item_187

**Offset:** 0x2024

**Raw hex:**
```
002024: e0 fe e0 00 a0 01 00 00 80 0f c0 07 00 00 00 00
002034: ff 40 ac 03 b0 01 00 0e 00 04 00 00 e0 fe e0 00
002044: a0 01 00 00 80 0f c0 07 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0xe0 | 224 |  |
| unknown2 | 0xfe | 254 |  |
| unknown3 | 0xe0 | 224 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0xa0 | 160 |  |
| texture_index_2 | 0x01 | 1 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x80 | 128 |  |
| unknown7 | 0x0f | 15 |  |
| unknown8 | 0xc0 | 192 |  |
| unknown9 | 0x07 | 7 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0xff | 255 | Strength stat |
| spd | 0x40 | 64 | Speed stat |
| def | 0xac | 172 | Defense stat |
| bal | 0x03 | 3 | Balance stat |
| sla | 0xb0 | 176 | Slash stat |
| smh | 0x01 | 1 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x0e | 14 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x04 | 4 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0xe0 | 224 | Melee power stat |
| sol | 0xfe | 254 | Solomon/Holy stat |
| hp | 0xe0 | 224 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0xa0 | 160 |  |
| attribute2_value | 0x01 | 1 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x80 | 128 |  |
| max_dura | 0x0f | 15 | Max durability |
| weight | 0xc0 | 192 |  |
| unknown13 | 0x07 | 7 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 188 (0xBC): item_188

**Offset:** 0x2050

**Raw hex:**
```
002050: ff 40 ac 03 b0 01 00 0e 00 04 00 00 e0 fe e0 00
002060: a0 01 00 00 80 0f c0 07 00 00 00 00 ff 40 ac 03
002070: 80 01 00 0e 00 04 00 00 00 ff 00 01
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0xff | 255 |  |
| unknown2 | 0x40 | 64 |  |
| unknown3 | 0xac | 172 |  |
| unknown4 | 0x03 | 3 |  |
| texture_index_1 | 0xb0 | 176 |  |
| texture_index_2 | 0x01 | 1 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x0e | 14 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x04 | 4 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0xe0 | 224 |  |
| hand_type | 0xfe | 254 | 6=one-hand, 7=two-hand |
| unknown11 | 0xe0 | 224 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0xa0 | 160 | Strength stat |
| spd | 0x01 | 1 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x80 | 128 | Slash stat |
| smh | 0x0f | 15 | Smash stat |
| pir | 0xc0 | 192 | Pierce stat |
| spr | 0x07 | 7 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0xff | 255 | Melee power stat |
| sol | 0x40 | 64 | Solomon/Holy stat |
| hp | 0xac | 172 | HP bonus |
| attribute1_value | 0x03 | 3 |  |
| attribute1_type | 0x80 | 128 |  |
| attribute2_value | 0x01 | 1 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x0e | 14 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x04 | 4 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0xff | 255 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x01 | 1 |  |

### Item 189 (0xBD): item_189

**Offset:** 0x207C

**Raw hex:**
```
00207c: 00 02 00 00 80 00 00 08 00 00 00 00 ff 40 ac 03
00208c: 80 01 00 0e 00 04 00 00 00 ff 00 01 00 02 00 00
00209c: 80 00 00 08 00 00 00 00 ff 40 ac 03
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x02 | 2 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x80 | 128 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x08 | 8 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0xff | 255 |  |
| hand_type | 0x40 | 64 | 6=one-hand, 7=two-hand |
| unknown11 | 0xac | 172 |  |
| unknown12 | 0x03 | 3 |  |
| str | 0x80 | 128 | Strength stat |
| spd | 0x01 | 1 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x0e | 14 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x04 | 4 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0xff | 255 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x01 | 1 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x02 | 2 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x80 | 128 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x08 | 8 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0xff | 255 | Current durability |
| unknown14 | 0x40 | 64 |  |
| unknown15 | 0xac | 172 |  |
| unknown16 | 0x03 | 3 |  |

### Item 190 (0xBE): item_190

**Offset:** 0x20A8

**Raw hex:**
```
0020a8: 80 01 00 0e 00 04 00 00 00 ff 00 01 00 02 00 00
0020b8: 80 00 00 08 00 00 00 00 ff 40 ac 03 80 01 00 0e
0020c8: 00 04 00 00 00 ff 00 01 00 02 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x80 | 128 |  |
| unknown2 | 0x01 | 1 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x0e | 14 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x04 | 4 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0xff | 255 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x01 | 1 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x02 | 2 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x80 | 128 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x08 | 8 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0xff | 255 | Focus stat |
| ham | 0x40 | 64 | Hammer stat |
| pur | 0xac | 172 | Purity stat |
| par | 0x03 | 3 | Parry stat |
| mel | 0x80 | 128 | Melee power stat |
| sol | 0x01 | 1 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x0e | 14 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x04 | 4 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0xff | 255 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x01 | 1 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x02 | 2 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 191 (0xBF): item_191

**Offset:** 0x20D4

**Raw hex:**
```
0020d4: 80 00 00 08 00 00 00 00 ff 40 ac 03 80 01 00 0e
0020e4: 00 04 00 00 00 ff 00 01 00 02 00 00 80 00 80 08
0020f4: 00 00 00 00 ff 40 ac 03 50 01 00 0e
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x80 | 128 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x08 | 8 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0xff | 255 |  |
| unknown7 | 0x40 | 64 |  |
| unknown8 | 0xac | 172 |  |
| unknown9 | 0x03 | 3 |  |
| unknown10 | 0x80 | 128 |  |
| hand_type | 0x01 | 1 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x0e | 14 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x04 | 4 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0xff | 255 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x01 | 1 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x02 | 2 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x80 | 128 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x80 | 128 | HP bonus |
| attribute1_value | 0x08 | 8 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0xff | 255 |  |
| max_dura | 0x40 | 64 | Max durability |
| weight | 0xac | 172 |  |
| unknown13 | 0x03 | 3 |  |
| dura | 0x50 | 80 | Current durability |
| unknown14 | 0x01 | 1 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x0e | 14 |  |

### Item 192 (0xC0): item_192

**Offset:** 0x2100

**Raw hex:**
```
002100: 00 04 00 00 00 ff 00 01 00 02 00 00 c0 0f 00 08
002110: 00 00 00 00 ff 40 ac 03 50 01 00 0e 00 04 00 00
002120: c0 fe 00 01 00 02 00 00 00 00 00 08
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x04 | 4 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0xff | 255 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x01 | 1 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x02 | 2 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0xc0 | 192 |  |
| hand_type | 0x0f | 15 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x08 | 8 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0xff | 255 | Slash stat |
| smh | 0x40 | 64 | Smash stat |
| pir | 0xac | 172 | Pierce stat |
| spr | 0x03 | 3 | Spirit stat |
| foc | 0x50 | 80 | Focus stat |
| ham | 0x01 | 1 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x0e | 14 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x04 | 4 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0xc0 | 192 |  |
| attribute2_value | 0xfe | 254 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x01 | 1 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x02 | 2 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x08 | 8 |  |

### Item 193 (0xC1): item_193

**Offset:** 0x212C

**Raw hex:**
```
00212c: 00 00 00 00 ff 40 ac 03 50 01 00 0e 00 04 00 00
00213c: 00 ff 00 01 00 02 00 00 a0 0f 00 08 00 00 00 00
00214c: ff 40 ac 03 80 01 00 0e 00 04 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0xff | 255 |  |
| texture_index_2 | 0x40 | 64 |  |
| unknown5 | 0xac | 172 |  |
| type | 0x03 | 3 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x50 | 80 |  |
| unknown7 | 0x01 | 1 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x0e | 14 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x04 | 4 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0xff | 255 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x01 | 1 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x02 | 2 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0xa0 | 160 | Focus stat |
| ham | 0x0f | 15 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x08 | 8 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0xff | 255 |  |
| attribute2_value | 0x40 | 64 |  |
| attribute2_type | 0xac | 172 |  |
| elemental_type | 0x03 | 3 |  |
| elemental_power | 0x80 | 128 |  |
| max_dura | 0x01 | 1 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x0e | 14 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x04 | 4 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 194 (0xC2): item_194

**Offset:** 0x2158

**Raw hex:**
```
002158: e0 fe e0 00 a0 01 00 00 80 0f 80 07 00 00 00 00
002168: ff 40 ac 03 68 01 00 0e 00 04 00 00 00 ff 00 01
002178: 00 02 00 00 80 00 80 08 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0xe0 | 224 |  |
| unknown2 | 0xfe | 254 |  |
| unknown3 | 0xe0 | 224 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0xa0 | 160 |  |
| texture_index_2 | 0x01 | 1 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x80 | 128 |  |
| unknown7 | 0x0f | 15 |  |
| unknown8 | 0x80 | 128 |  |
| unknown9 | 0x07 | 7 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0xff | 255 | Strength stat |
| spd | 0x40 | 64 | Speed stat |
| def | 0xac | 172 | Defense stat |
| bal | 0x03 | 3 | Balance stat |
| sla | 0x68 | 104 | Slash stat |
| smh | 0x01 | 1 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x0e | 14 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x04 | 4 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0xff | 255 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x01 | 1 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x02 | 2 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x80 | 128 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x80 | 128 |  |
| unknown13 | 0x08 | 8 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 195 (0xC3): item_195

**Offset:** 0x2184

**Raw hex:**
```
002184: ff 40 ac 03 68 01 00 0e 00 04 00 00 00 ff 00 01
002194: 00 02 00 00 80 00 00 08 00 00 00 00 ff 40 ac 03
0021a4: 68 01 00 0e 00 04 00 00 e0 fe e0 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0xff | 255 |  |
| unknown2 | 0x40 | 64 |  |
| unknown3 | 0xac | 172 |  |
| unknown4 | 0x03 | 3 |  |
| texture_index_1 | 0x68 | 104 |  |
| texture_index_2 | 0x01 | 1 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x0e | 14 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x04 | 4 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0xff | 255 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x01 | 1 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x02 | 2 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x80 | 128 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x08 | 8 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0xff | 255 | Melee power stat |
| sol | 0x40 | 64 | Solomon/Holy stat |
| hp | 0xac | 172 | HP bonus |
| attribute1_value | 0x03 | 3 |  |
| attribute1_type | 0x68 | 104 |  |
| attribute2_value | 0x01 | 1 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x0e | 14 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x04 | 4 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0xe0 | 224 | Current durability |
| unknown14 | 0xfe | 254 |  |
| unknown15 | 0xe0 | 224 |  |
| unknown16 | 0x00 | 0 |  |

### Item 196 (0xC4): item_196

**Offset:** 0x21B0

**Raw hex:**
```
0021b0: a0 01 00 00 80 0f c0 07 00 00 00 00 ff 40 ac 03
0021c0: 80 01 00 0e 00 04 00 00 00 ff 00 01 00 02 00 00
0021d0: 80 00 00 08 00 00 00 00 ff 40 ac 03
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0xa0 | 160 |  |
| unknown2 | 0x01 | 1 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x80 | 128 |  |
| texture_index_2 | 0x0f | 15 |  |
| unknown5 | 0xc0 | 192 |  |
| type | 0x07 | 7 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0xff | 255 |  |
| hand_type | 0x40 | 64 | 6=one-hand, 7=two-hand |
| unknown11 | 0xac | 172 |  |
| unknown12 | 0x03 | 3 |  |
| str | 0x80 | 128 | Strength stat |
| spd | 0x01 | 1 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x0e | 14 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x04 | 4 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0xff | 255 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x01 | 1 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x02 | 2 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x80 | 128 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x08 | 8 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0xff | 255 | Current durability |
| unknown14 | 0x40 | 64 |  |
| unknown15 | 0xac | 172 |  |
| unknown16 | 0x03 | 3 |  |

### Item 197 (0xC5): item_197

**Offset:** 0x21DC

**Raw hex:**
```
0021dc: 98 01 00 0e 00 04 00 00 00 ff 00 01 00 02 00 00
0021ec: c0 00 20 08 00 00 00 00 ff 40 ac 03 98 01 00 0e
0021fc: 00 04 00 00 00 ff 00 01 00 02 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x98 | 152 |  |
| unknown2 | 0x01 | 1 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x0e | 14 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x04 | 4 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0xff | 255 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x01 | 1 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x02 | 2 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0xc0 | 192 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x20 | 32 | Defense stat |
| bal | 0x08 | 8 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0xff | 255 | Focus stat |
| ham | 0x40 | 64 | Hammer stat |
| pur | 0xac | 172 | Purity stat |
| par | 0x03 | 3 | Parry stat |
| mel | 0x98 | 152 | Melee power stat |
| sol | 0x01 | 1 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x0e | 14 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x04 | 4 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0xff | 255 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x01 | 1 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x02 | 2 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 198 (0xC6): item_198

**Offset:** 0x2208

**Raw hex:**
```
002208: 80 00 20 08 00 00 00 00 ff 40 ac 03 b0 01 00 0e
002218: 00 04 00 00 00 ff 00 01 00 02 00 00 c0 00 20 08
002228: 00 00 00 00 ff 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x80 | 128 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x20 | 32 |  |
| unknown4 | 0x08 | 8 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0xff | 255 |  |
| unknown7 | 0x40 | 64 |  |
| unknown8 | 0xac | 172 |  |
| unknown9 | 0x03 | 3 |  |
| unknown10 | 0xb0 | 176 |  |
| hand_type | 0x01 | 1 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x0e | 14 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x04 | 4 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0x00 | 0 | Slash stat |
| smh | 0xff | 255 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x01 | 1 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x02 | 2 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0xc0 | 192 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x20 | 32 | HP bonus |
| attribute1_value | 0x08 | 8 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0xff | 255 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 199 (0xC7): item_199

**Offset:** 0x2234

**Raw hex:**
```
002234: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
002244: 00 00 00 00 ff 00 00 00 00 00 00 00 00 00 00 00
002254: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | 1=WEAPON, 2=ARMOR, 3=HELMET, etc. |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 | Strength stat |
| spd | 0x00 | 0 | Speed stat |
| def | 0x00 | 0 | Defense stat |
| bal | 0x00 | 0 | Balance stat |
| sla | 0xff | 255 | Slash stat |
| smh | 0x00 | 0 | Smash stat |
| pir | 0x00 | 0 | Pierce stat |
| spr | 0x00 | 0 | Spirit stat |
| foc | 0x00 | 0 | Focus stat |
| ham | 0x00 | 0 | Hammer stat |
| pur | 0x00 | 0 | Purity stat |
| par | 0x00 | 0 | Parry stat |
| mel | 0x00 | 0 | Melee power stat |
| sol | 0x00 | 0 | Solomon/Holy stat |
| hp | 0x00 | 0 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |


## Notes

- Entry size is consistently 44 bytes
- Items are stored sequentially in part 481
- Unknown fields need further investigation
- Attribute types and elemental types need mapping
