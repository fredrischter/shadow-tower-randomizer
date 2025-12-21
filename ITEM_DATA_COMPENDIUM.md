# Item Data Compendium

Generated from FDAT.T part 481 SIZED_MIX_PARTS

**Total items found:** 1288

**Entry size:** 44 bytes

## Item Data Structure (44 bytes)

| Offset | Field | Type | Description |
|--------|-------|------|-------------|
| 0x00 | unknown1 | u8 |  |
| 0x01 | unknown2 | u8 |  |
| 0x02 | unknown3 | u8 |  |
| 0x03 | unknown4 | u8 |  |
| 0x04 | texture_index_1 | u8 |  |
| 0x05 | texture_index_2 | u8 |  |
| 0x06 | unknown5 | u8 |  |
| 0x07 | type | u8 | WEAPON=1, ARMOR=2, HELMET=3, etc. |
| 0x08 | unknown6 | u8 |  |
| 0x09 | unknown7 | u8 |  |
| 0x0a | unknown8 | u8 |  |
| 0x0b | unknown9 | u8 |  |
| 0x0c | unknown10 | u8 |  |
| 0x0d | hand_type | u8 | 6=one-hand, 7=two-hand |
| 0x0e | unknown11 | u8 |  |
| 0x0f | unknown12 | u8 |  |
| 0x10 | str | u8 | Strength stat |
| 0x11 | spd | u8 | Speed stat |
| 0x12 | def | u8 | Defense stat |
| 0x13 | bal | u8 | Balance stat |
| 0x14 | sla | u8 | Slash resistance |
| 0x15 | smh | u8 | Smash resistance |
| 0x16 | pir | u8 | Pierce resistance |
| 0x17 | spr | u8 | Spirit stat |
| 0x18 | foc | u8 | Focus stat |
| 0x19 | ham | u8 | Hammer stat |
| 0x1a | pur | u8 | Purity stat |
| 0x1b | par | u8 | Parry stat |
| 0x1c | mel | u8 | Melee power |
| 0x1d | sol | u8 | Holy/Solomon stat |
| 0x1e | hp | u8 | HP bonus |
| 0x1f | attribute1_value | u8 |  |
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
| 0x2a | unknown15 | u8 |  |
| 0x2b | unknown16 | u8 |  |

---

## Item Data Entries

### Item 0 (Offset 0x0)

**Raw hex:**
```
000000: 0e 00 ff 0c b8 01 00 05 e8 03 00 00 00 04 00 02
000010: 00 00 00 00 00 00 00 00 ed 00 ff 0c b8 01 dc 05
000020: e8 03 00 00 00 04 00 02 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x0e | 14 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xff | 255 | NULL/UNUSED |
| unknown4 | 0x0c | 12 |  |
| texture_index_1 | 0xb8 | 184 |  |
| texture_index_2 | 0x01 | 1 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x05 | 5 | ACCESSORY |
| unknown6 | 0xe8 | 232 |  |
| unknown7 | 0x03 | 3 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x04 | 4 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x02 | 2 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0xed | 237 | Focus stat |
| ham | 0x00 | 0 |  |
| pur | 0xff | 255 | NULL/UNUSED |
| par | 0x0c | 12 | Parry stat |
| mel | 0xb8 | 184 | Melee power |
| sol | 0x01 | 1 | Holy/Solomon stat |
| hp | 0xdc | 220 | HP bonus |
| attribute1_value | 0x05 | 5 |  |
| attribute1_type | 0xe8 | 232 |  |
| attribute2_value | 0x03 | 3 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x04 | 4 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x02 | 2 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 1 (Offset 0x2c)

**Raw hex:**
```
00002c: 00 00 00 00 ed 00 ff 0c b8 01 dc 05 e8 03 00 00
00003c: 00 04 00 02 00 00 00 00 00 00 00 00 ed 00 ff 0c
00004c: b8 01 dc 05 e8 03 00 00 00 04 00 02
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0xed | 237 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0xff | 255 | NULL/UNUSED |
| type | 0x0c | 12 | Type 12 |
| unknown6 | 0xb8 | 184 |  |
| unknown7 | 0x01 | 1 |  |
| unknown8 | 0xdc | 220 |  |
| unknown9 | 0x05 | 5 |  |
| unknown10 | 0xe8 | 232 |  |
| hand_type | 0x03 | 3 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x04 | 4 | Speed stat |
| def | 0x00 | 0 |  |
| bal | 0x02 | 2 | Balance stat |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0xed | 237 | Melee power |
| sol | 0x00 | 0 |  |
| hp | 0xff | 255 | NULL/UNUSED |
| attribute1_value | 0x0c | 12 |  |
| attribute1_type | 0xb8 | 184 |  |
| attribute2_value | 0x01 | 1 |  |
| attribute2_type | 0xdc | 220 |  |
| elemental_type | 0x05 | 5 |  |
| elemental_power | 0xe8 | 232 |  |
| max_dura | 0x03 | 3 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x04 | 4 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x02 | 2 |  |

### Item 2 (Offset 0x58)

**Raw hex:**
```
000058: 00 00 00 00 00 00 00 00 00 00 ff 08 00 00 00 08
000068: c4 09 00 00 00 00 00 00 00 00 00 00 00 00 00 00
000078: ff 00 ff 00 00 00 00 00 00 00 00 00
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xff | 255 | NULL/UNUSED |
| unknown9 | 0x08 | 8 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x08 | 8 |  |
| str | 0xc4 | 196 | Strength stat |
| spd | 0x09 | 9 | Speed stat |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0xff | 255 | NULL/UNUSED |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xff | 255 | NULL/UNUSED |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 3 (Offset 0x84)

**Raw hex:**
```
000084: 00 00 00 00 00 00 00 00 00 00 00 00 ff 00 ff 00
000094: 08 02 00 00 40 06 00 00 00 00 00 00 00 00 00 00
0000a4: 00 00 00 00 fe 00 ff 0c 00 03 dc 05
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0xff | 255 | NULL/UNUSED |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0xff | 255 | NULL/UNUSED |
| unknown12 | 0x00 | 0 |  |
| str | 0x08 | 8 | Strength stat |
| spd | 0x02 | 2 | Speed stat |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x40 | 64 | Slash resistance |
| smh | 0x06 | 6 | Smash resistance |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0xfe | 254 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0xff | 255 | NULL/UNUSED |
| unknown13 | 0x0c | 12 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x03 | 3 |  |
| unknown15 | 0xdc | 220 |  |
| unknown16 | 0x05 | 5 |  |

### Item 4 (Offset 0xb0)

**Raw hex:**
```
0000b0: 00 08 00 00 01 00 01 00 00 00 00 00 00 00 00 00
0000c0: 00 00 ff 08 00 00 c4 09 80 0b 00 00 00 00 00 00
0000d0: 00 00 00 00 00 00 00 00 ff 00 ff 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x08 | 8 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x01 | 1 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x01 | 1 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0xff | 255 | NULL/UNUSED |
| bal | 0x08 | 8 | Balance stat |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0xc4 | 196 | Pierce resistance |
| spr | 0x09 | 9 | Spirit stat |
| foc | 0x80 | 128 | Focus stat |
| ham | 0x0b | 11 | Hammer stat |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0xff | 255 | NULL/UNUSED |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xff | 255 | NULL/UNUSED |
| unknown16 | 0x00 | 0 |  |

### Item 5 (Offset 0xdc)

**Raw hex:**
```
0000dc: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
0000ec: 00 00 00 00 33 00 ff 0c 00 04 f8 07 00 02 00 00
0000fc: 01 00 01 00 00 00 00 00 00 00 00 00
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x33 | 51 | Slash resistance |
| smh | 0x00 | 0 |  |
| pir | 0xff | 255 | NULL/UNUSED |
| spr | 0x0c | 12 | Spirit stat |
| foc | 0x00 | 0 |  |
| ham | 0x04 | 4 | Hammer stat |
| pur | 0xf8 | 248 | Purity stat |
| par | 0x07 | 7 | Parry stat |
| mel | 0x00 | 0 |  |
| sol | 0x02 | 2 | Holy/Solomon stat |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x01 | 1 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x01 | 1 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 6 (Offset 0x108)

**Raw hex:**
```
000108: 00 00 ff 08 00 00 c4 09 80 0b 00 00 00 00 00 00
000118: 00 00 00 00 00 00 00 00 00 00 ff 08 00 00 c4 09
000128: 00 0c 00 00 00 00 00 00 00 00 04 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xff | 255 | NULL/UNUSED |
| unknown4 | 0x08 | 8 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0xc4 | 196 |  |
| type | 0x09 | 9 | Type 9 |
| unknown6 | 0x80 | 128 |  |
| unknown7 | 0x0b | 11 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0xff | 255 | NULL/UNUSED |
| par | 0x08 | 8 | Parry stat |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0xc4 | 196 | HP bonus |
| attribute1_value | 0x09 | 9 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x0c | 12 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x04 | 4 |  |
| unknown16 | 0x00 | 0 |  |

### Item 7 (Offset 0x134)

**Raw hex:**
```
000134: 00 00 00 00 ff 00 ff 00 00 04 00 00 00 02 00 00
000144: 00 00 00 00 00 00 00 00 00 00 00 00 ff 00 ff 00
000154: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0xff | 255 | NULL/UNUSED |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0xff | 255 | NULL/UNUSED |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x04 | 4 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x02 | 2 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0xff | 255 | NULL/UNUSED |
| sol | 0x00 | 0 |  |
| hp | 0xff | 255 | NULL/UNUSED |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 8 (Offset 0x160)

**Raw hex:**
```
000160: 00 00 00 00 00 00 00 00 ff 00 ff 00 00 00 00 00
000170: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
000180: 01 00 ff 08 00 00 78 05 00 0c 00 00
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0xff | 255 | NULL/UNUSED |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xff | 255 | NULL/UNUSED |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x01 | 1 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xff | 255 | NULL/UNUSED |
| elemental_type | 0x08 | 8 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x78 | 120 |  |
| unknown13 | 0x05 | 5 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x0c | 12 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 9 (Offset 0x18c)

**Raw hex:**
```
00018c: 00 00 00 00 00 00 02 00 00 00 00 00 33 00 ff 0c
00019c: 00 02 00 08 00 02 00 00 01 00 01 00 00 00 00 00
0001ac: 00 00 00 00 ff 00 ff 08 80 01 d0 07
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x33 | 51 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0xff | 255 | NULL/UNUSED |
| unknown12 | 0x0c | 12 |  |
| str | 0x00 | 0 |  |
| spd | 0x02 | 2 | Speed stat |
| def | 0x00 | 0 |  |
| bal | 0x08 | 8 | Balance stat |
| sla | 0x00 | 0 |  |
| smh | 0x02 | 2 | Smash resistance |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x01 | 1 | Focus stat |
| ham | 0x00 | 0 |  |
| pur | 0x01 | 1 | Purity stat |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0xff | 255 | NULL/UNUSED |
| max_dura | 0x00 | 0 |  |
| weight | 0xff | 255 | NULL/UNUSED |
| unknown13 | 0x08 | 8 |  |
| dura | 0x80 | 128 | Current durability |
| unknown14 | 0x01 | 1 |  |
| unknown15 | 0xd0 | 208 |  |
| unknown16 | 0x07 | 7 |  |

### Item 10 (Offset 0x1b8)

**Raw hex:**
```
0001b8: b0 04 00 00 00 00 00 00 00 00 00 00 00 00 00 00
0001c8: ff 00 ff 00 00 00 00 00 00 00 00 00 00 00 00 00
0001d8: 00 00 00 00 00 00 00 00 ff 00 ff 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0xb0 | 176 |  |
| unknown2 | 0x04 | 4 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0xff | 255 | NULL/UNUSED |
| spd | 0x00 | 0 |  |
| def | 0xff | 255 | NULL/UNUSED |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0xff | 255 | NULL/UNUSED |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xff | 255 | NULL/UNUSED |
| unknown16 | 0x00 | 0 |  |

### Item 11 (Offset 0x1e4)

**Raw hex:**
```
0001e4: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
0001f4: 00 00 00 00 ff 00 ff 00 00 00 d0 07 00 00 00 00
000204: 00 00 00 00 00 00 00 00 00 00 00 00
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0xff | 255 | NULL/UNUSED |
| smh | 0x00 | 0 |  |
| pir | 0xff | 255 | NULL/UNUSED |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0xd0 | 208 | Purity stat |
| par | 0x07 | 7 | Parry stat |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 12 (Offset 0x210)

**Raw hex:**
```
000210: 01 00 ff 08 00 00 c4 09 00 0c 00 00 00 00 00 00
000220: 00 00 02 00 00 00 00 00 ff 00 ff 00 00 02 d0 07
000230: 00 0c 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x01 | 1 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xff | 255 | NULL/UNUSED |
| unknown4 | 0x08 | 8 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0xc4 | 196 |  |
| type | 0x09 | 9 | Type 9 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x0c | 12 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x02 | 2 | Defense stat |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0xff | 255 | NULL/UNUSED |
| ham | 0x00 | 0 |  |
| pur | 0xff | 255 | NULL/UNUSED |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x02 | 2 | Holy/Solomon stat |
| hp | 0xd0 | 208 | HP bonus |
| attribute1_value | 0x07 | 7 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x0c | 12 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 13 (Offset 0x23c)

**Raw hex:**
```
00023c: 00 00 00 00 33 00 ff 0c 00 02 00 08 00 02 00 00
00024c: 01 00 01 00 00 00 00 00 00 00 00 00 ff 00 ff 04
00025c: 21 02 00 00 00 0c fe ff 00 04 00 04
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
| unknown5 | 0xff | 255 | NULL/UNUSED |
| type | 0x0c | 12 | Type 12 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x02 | 2 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x08 | 8 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x02 | 2 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x01 | 1 | Strength stat |
| spd | 0x00 | 0 |  |
| def | 0x01 | 1 | Defense stat |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0xff | 255 | NULL/UNUSED |
| sol | 0x00 | 0 |  |
| hp | 0xff | 255 | NULL/UNUSED |
| attribute1_value | 0x04 | 4 |  |
| attribute1_type | 0x21 | 33 |  |
| attribute2_value | 0x02 | 2 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x0c | 12 | Max durability |
| weight | 0xfe | 254 |  |
| unknown13 | 0xff | 255 | NULL/UNUSED |
| dura | 0x00 | 0 |  |
| unknown14 | 0x04 | 4 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x04 | 4 |  |

### Item 14 (Offset 0x268)

**Raw hex:**
```
000268: 00 00 00 00 00 00 00 00 ff 00 ff 00 a8 02 00 00
000278: 00 04 00 00 00 00 00 00 00 00 00 00 00 00 00 00
000288: ff 00 ff 04 00 06 00 00 00 02 f4 ff
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0xff | 255 | NULL/UNUSED |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xff | 255 | NULL/UNUSED |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0xa8 | 168 |  |
| hand_type | 0x02 | 2 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x04 | 4 | Speed stat |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0xff | 255 | NULL/UNUSED |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xff | 255 | NULL/UNUSED |
| elemental_type | 0x04 | 4 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x06 | 6 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x02 | 2 |  |
| unknown15 | 0xf4 | 244 |  |
| unknown16 | 0xff | 255 | NULL/UNUSED |

### Item 15 (Offset 0x294)

**Raw hex:**
```
000294: 01 00 01 00 00 00 00 00 00 00 00 00 00 00 ff 0c
0002a4: 00 00 00 0c 00 00 fb ff 01 00 01 00 00 00 05 00
0002b4: 00 00 00 00 32 00 ff 00 00 01 00 00
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0xff | 255 | NULL/UNUSED |
| unknown12 | 0x0c | 12 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x0c | 12 | Balance stat |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0xfb | 251 | Pierce resistance |
| spr | 0xff | 255 | NULL/UNUSED |
| foc | 0x01 | 1 | Focus stat |
| ham | 0x00 | 0 |  |
| pur | 0x01 | 1 | Purity stat |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x05 | 5 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x32 | 50 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0xff | 255 | NULL/UNUSED |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x01 | 1 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 16 (Offset 0x2c0)

**Raw hex:**
```
0002c0: 00 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00
0002d0: 00 00 ff 08 00 00 00 08 00 0c 03 00 00 00 00 00
0002e0: 00 00 02 00 00 00 00 00 ff 00 ff 04
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x01 | 1 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0xff | 255 | NULL/UNUSED |
| bal | 0x08 | 8 | Balance stat |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x08 | 8 | Spirit stat |
| foc | 0x00 | 0 |  |
| ham | 0x0c | 12 | Hammer stat |
| pur | 0x03 | 3 | Purity stat |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x02 | 2 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0xff | 255 | NULL/UNUSED |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xff | 255 | NULL/UNUSED |
| unknown16 | 0x04 | 4 |  |

### Item 17 (Offset 0x2ec)

**Raw hex:**
```
0002ec: 00 02 00 00 00 10 00 00 00 04 00 04 00 00 00 00
0002fc: 00 00 00 00 32 00 ff 08 00 00 b0 04 e8 03 00 00
00030c: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x02 | 2 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x10 | 16 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x04 | 4 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x04 | 4 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x32 | 50 | Slash resistance |
| smh | 0x00 | 0 |  |
| pir | 0xff | 255 | NULL/UNUSED |
| spr | 0x08 | 8 | Spirit stat |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0xb0 | 176 | Purity stat |
| par | 0x04 | 4 | Parry stat |
| mel | 0xe8 | 232 | Melee power |
| sol | 0x03 | 3 | Holy/Solomon stat |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 19 (Offset 0x344)

**Raw hex:**
```
000344: 00 00 00 00 01 00 ff 08 00 00 00 08 00 0c 00 00
000354: 00 00 00 00 00 00 04 00 00 00 00 00 01 00 ff 00
000364: 00 00 00 08 00 00 05 00 00 00 00 00
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
| unknown5 | 0xff | 255 | NULL/UNUSED |
| type | 0x08 | 8 | Type 8 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x08 | 8 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x0c | 12 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x04 | 4 | Pierce resistance |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x01 | 1 | Melee power |
| sol | 0x00 | 0 |  |
| hp | 0xff | 255 | NULL/UNUSED |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x08 | 8 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x05 | 5 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 20 (Offset 0x370)

**Raw hex:**
```
000370: 00 00 04 00 00 00 00 00 00 00 ff 00 00 00 00 0c
000380: 00 00 fc ff 00 00 00 00 00 00 04 00 00 00 00 00
000390: 32 00 ff 08 00 02 00 10 00 03 0a 00
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xff | 255 | NULL/UNUSED |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x0c | 12 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0xfc | 252 | Defense stat |
| bal | 0xff | 255 | NULL/UNUSED |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x04 | 4 | Purity stat |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x32 | 50 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xff | 255 | NULL/UNUSED |
| elemental_type | 0x08 | 8 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x02 | 2 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x10 | 16 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x03 | 3 |  |
| unknown15 | 0x0a | 10 |  |
| unknown16 | 0x00 | 0 |  |

### Item 21 (Offset 0x39c)

**Raw hex:**
```
00039c: 00 00 00 00 00 00 00 00 00 00 00 00 34 00 ff 0c
0003ac: 00 01 00 04 00 06 00 00 01 00 01 00 00 00 00 00
0003bc: 00 00 00 00 ff 00 ff 04 00 04 00 00
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x34 | 52 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0xff | 255 | NULL/UNUSED |
| unknown12 | 0x0c | 12 |  |
| str | 0x00 | 0 |  |
| spd | 0x01 | 1 | Speed stat |
| def | 0x00 | 0 |  |
| bal | 0x04 | 4 | Balance stat |
| sla | 0x00 | 0 |  |
| smh | 0x06 | 6 | Smash resistance |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x01 | 1 | Focus stat |
| ham | 0x00 | 0 |  |
| pur | 0x01 | 1 | Purity stat |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0xff | 255 | NULL/UNUSED |
| max_dura | 0x00 | 0 |  |
| weight | 0xff | 255 | NULL/UNUSED |
| unknown13 | 0x04 | 4 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x04 | 4 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 22 (Offset 0x3c8)

**Raw hex:**
```
0003c8: 00 0a 00 00 00 0a 00 04 00 00 00 00 00 00 00 00
0003d8: 03 00 ff 00 00 01 00 00 33 07 00 00 00 00 00 00
0003e8: 00 00 00 00 00 00 00 00 ff 00 ff 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x0a | 10 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x0a | 10 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x04 | 4 | SHIELD |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x03 | 3 | Strength stat |
| spd | 0x00 | 0 |  |
| def | 0xff | 255 | NULL/UNUSED |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x01 | 1 | Smash resistance |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x33 | 51 | Focus stat |
| ham | 0x07 | 7 | Hammer stat |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0xff | 255 | NULL/UNUSED |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xff | 255 | NULL/UNUSED |
| unknown16 | 0x00 | 0 |  |

### Item 23 (Offset 0x3f4)

**Raw hex:**
```
0003f4: 00 02 00 00 d7 0a 00 00 00 00 00 00 00 00 00 00
000404: 00 00 00 00 05 00 ff 00 00 00 00 00 00 00 00 00
000414: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x02 | 2 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0xd7 | 215 |  |
| texture_index_2 | 0x0a | 10 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x05 | 5 | Slash resistance |
| smh | 0x00 | 0 |  |
| pir | 0xff | 255 | NULL/UNUSED |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 24 (Offset 0x420)

**Raw hex:**
```
000420: ff 00 ff 00 00 00 00 00 00 00 f6 ff 00 00 00 00
000430: 00 00 00 00 00 00 00 00 ff 00 ff 00 00 00 00 00
000440: 00 00 f6 ff 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0xff | 255 | NULL/UNUSED |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xff | 255 | NULL/UNUSED |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xf6 | 246 |  |
| unknown9 | 0xff | 255 | NULL/UNUSED |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0xff | 255 | NULL/UNUSED |
| ham | 0x00 | 0 |  |
| pur | 0xff | 255 | NULL/UNUSED |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xf6 | 246 |  |
| elemental_type | 0xff | 255 | NULL/UNUSED |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 25 (Offset 0x44c)

**Raw hex:**
```
00044c: 00 00 00 00 ff 00 ff 00 00 00 00 00 00 00 f6 ff
00045c: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 ff 08
00046c: 00 00 00 08 00 0c 0a 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0xff | 255 | NULL/UNUSED |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0xff | 255 | NULL/UNUSED |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0xf6 | 246 |  |
| unknown12 | 0xff | 255 | NULL/UNUSED |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0xff | 255 | NULL/UNUSED |
| attribute1_value | 0x08 | 8 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x08 | 8 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x0c | 12 | Max durability |
| weight | 0x0a | 10 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 26 (Offset 0x478)

**Raw hex:**
```
000478: 00 00 02 00 00 00 00 00 32 00 ff 00 00 00 00 00
000488: 00 00 05 00 00 00 00 00 00 00 00 00 00 00 00 00
000498: 01 00 ff 08 00 00 c4 09 00 0c 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x02 | 2 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x32 | 50 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xff | 255 | NULL/UNUSED |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x05 | 5 | Defense stat |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x01 | 1 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xff | 255 | NULL/UNUSED |
| elemental_type | 0x08 | 8 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0xc4 | 196 |  |
| unknown13 | 0x09 | 9 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x0c | 12 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 27 (Offset 0x4a4)

**Raw hex:**
```
0004a4: 00 00 00 00 00 00 00 00 00 00 00 00 32 00 ff 00
0004b4: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
0004c4: 00 00 00 00 ff 00 ff 00 00 00 00 00
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x32 | 50 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0xff | 255 | NULL/UNUSED |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0xff | 255 | NULL/UNUSED |
| max_dura | 0x00 | 0 |  |
| weight | 0xff | 255 | NULL/UNUSED |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 28 (Offset 0x4d0)

**Raw hex:**
```
0004d0: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
0004e0: 00 00 ff 08 00 00 00 08 00 10 00 00 00 00 00 00
0004f0: 00 00 00 00 00 00 00 00 00 00 ff 08
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0xff | 255 | NULL/UNUSED |
| bal | 0x08 | 8 | Balance stat |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x08 | 8 | Spirit stat |
| foc | 0x00 | 0 |  |
| ham | 0x10 | 16 | Hammer stat |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xff | 255 | NULL/UNUSED |
| unknown16 | 0x08 | 8 |  |

### Item 29 (Offset 0x4fc)

**Raw hex:**
```
0004fc: 00 00 c4 09 00 08 00 00 00 00 00 00 00 00 03 00
00050c: 00 00 00 00 ff 00 ff 00 00 00 00 00 00 00 f6 ff
00051c: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xc4 | 196 |  |
| unknown4 | 0x09 | 9 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x08 | 8 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x03 | 3 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0xff | 255 | NULL/UNUSED |
| smh | 0x00 | 0 |  |
| pir | 0xff | 255 | NULL/UNUSED |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0xf6 | 246 | HP bonus |
| attribute1_value | 0xff | 255 | NULL/UNUSED |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 30 (Offset 0x528)

**Raw hex:**
```
000528: ff 00 ff 00 00 00 00 00 00 00 00 00 00 00 00 00
000538: 00 00 00 00 00 00 00 00 ff 00 ff 04 81 01 00 00
000548: b0 04 ff ff 01 00 01 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0xff | 255 | NULL/UNUSED |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xff | 255 | NULL/UNUSED |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0xff | 255 | NULL/UNUSED |
| ham | 0x00 | 0 |  |
| pur | 0xff | 255 | NULL/UNUSED |
| par | 0x04 | 4 | Parry stat |
| mel | 0x81 | 129 | Melee power |
| sol | 0x01 | 1 | Holy/Solomon stat |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0xb0 | 176 |  |
| attribute2_value | 0x04 | 4 |  |
| attribute2_type | 0xff | 255 | NULL/UNUSED |
| elemental_type | 0xff | 255 | NULL/UNUSED |
| elemental_power | 0x01 | 1 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x01 | 1 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 31 (Offset 0x554)

**Raw hex:**
```
000554: 00 00 00 00 00 00 ff 08 00 00 00 08 00 0d 0a 00
000564: 00 00 00 00 00 00 04 00 00 00 00 00 01 00 ff 08
000574: 00 00 00 0c ba 0e 00 00 00 00 00 00
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
| unknown5 | 0xff | 255 | NULL/UNUSED |
| type | 0x08 | 8 | Type 8 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x08 | 8 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x0d | 13 | 6=one-hand, 7=two-hand |
| unknown11 | 0x0a | 10 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x04 | 4 | Pierce resistance |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x01 | 1 | Melee power |
| sol | 0x00 | 0 |  |
| hp | 0xff | 255 | NULL/UNUSED |
| attribute1_value | 0x08 | 8 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x0c | 12 |  |
| elemental_power | 0xba | 186 |  |
| max_dura | 0x0e | 14 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 32 (Offset 0x580)

**Raw hex:**
```
000580: 00 00 02 00 00 00 00 00 00 00 ff 08 00 00 00 08
000590: 00 0c 00 00 00 00 00 00 00 00 01 00 00 00 00 00
0005a0: ff 00 ff 04 b0 04 00 00 00 03 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x02 | 2 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xff | 255 | NULL/UNUSED |
| unknown9 | 0x08 | 8 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x08 | 8 |  |
| str | 0x00 | 0 |  |
| spd | 0x0c | 12 | Speed stat |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x01 | 1 | Purity stat |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0xff | 255 | NULL/UNUSED |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xff | 255 | NULL/UNUSED |
| elemental_type | 0x04 | 4 |  |
| elemental_power | 0xb0 | 176 |  |
| max_dura | 0x04 | 4 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x03 | 3 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 33 (Offset 0x5ac)

**Raw hex:**
```
0005ac: 00 06 00 0c 00 00 00 00 00 00 00 00 32 00 ff 00
0005bc: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
0005cc: 00 00 00 00 00 00 ff 08 00 00 c4 09
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x32 | 50 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0xff | 255 | NULL/UNUSED |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0xff | 255 | NULL/UNUSED |
| unknown13 | 0x08 | 8 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xc4 | 196 |  |
| unknown16 | 0x09 | 9 |  |

### Item 34 (Offset 0x5d8)

**Raw hex:**
```
0005d8: 00 0c 0a 00 00 00 00 00 00 00 04 00 00 00 00 00
0005e8: 00 00 ff 08 00 00 00 08 00 0a 04 00 00 00 00 00
0005f8: 00 00 04 00 00 00 00 00 00 00 ff 08
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x0c | 12 |  |
| unknown3 | 0x0a | 10 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x04 | 4 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0xff | 255 | NULL/UNUSED |
| bal | 0x08 | 8 | Balance stat |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x08 | 8 | Spirit stat |
| foc | 0x00 | 0 |  |
| ham | 0x0a | 10 | Hammer stat |
| pur | 0x04 | 4 | Purity stat |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x04 | 4 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xff | 255 | NULL/UNUSED |
| unknown16 | 0x08 | 8 |  |

### Item 35 (Offset 0x604)

**Raw hex:**
```
000604: 00 00 00 10 00 0c 03 00 00 00 00 00 00 00 00 00
000614: 00 00 00 00 ff 00 ff 00 26 02 00 00 b0 04 00 00
000624: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x10 | 16 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x0c | 12 |  |
| unknown5 | 0x03 | 3 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0xff | 255 | NULL/UNUSED |
| smh | 0x00 | 0 |  |
| pir | 0xff | 255 | NULL/UNUSED |
| spr | 0x00 | 0 |  |
| foc | 0x26 | 38 | Focus stat |
| ham | 0x02 | 2 | Hammer stat |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0xb0 | 176 | Melee power |
| sol | 0x04 | 4 | Holy/Solomon stat |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 36 (Offset 0x630)

**Raw hex:**
```
000630: 00 00 ff 08 00 00 c4 09 00 18 00 00 00 00 00 00
000640: 00 00 00 00 00 00 00 00 ff 00 ff 00 00 03 00 00
000650: 6c 04 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xff | 255 | NULL/UNUSED |
| unknown4 | 0x08 | 8 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0xc4 | 196 |  |
| type | 0x09 | 9 | Type 9 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x18 | 24 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0xff | 255 | NULL/UNUSED |
| ham | 0x00 | 0 |  |
| pur | 0xff | 255 | NULL/UNUSED |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x03 | 3 | Holy/Solomon stat |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x6c | 108 |  |
| attribute2_value | 0x04 | 4 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 37 (Offset 0x65c)

**Raw hex:**
```
00065c: 00 00 00 00 ff 00 ff 00 00 01 00 00 00 0f 00 00
00066c: 00 00 00 00 00 00 00 00 00 00 00 00 ff 00 ff 04
00067c: 00 02 dc 05 00 10 00 00 b0 04 b0 04
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0xff | 255 | NULL/UNUSED |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0xff | 255 | NULL/UNUSED |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x01 | 1 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x0f | 15 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0xff | 255 | NULL/UNUSED |
| sol | 0x00 | 0 |  |
| hp | 0xff | 255 | NULL/UNUSED |
| attribute1_value | 0x04 | 4 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x02 | 2 |  |
| attribute2_type | 0xdc | 220 |  |
| elemental_type | 0x05 | 5 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x10 | 16 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0xb0 | 176 | Current durability |
| unknown14 | 0x04 | 4 |  |
| unknown15 | 0xb0 | 176 |  |
| unknown16 | 0x04 | 4 |  |

### Item 38 (Offset 0x688)

**Raw hex:**
```
000688: 00 00 00 00 00 00 00 00 00 00 ff 08 00 00 00 0c
000698: 00 0c 00 00 00 00 00 00 00 00 02 00 00 00 00 00
0006a8: ff 00 ff 04 28 05 00 00 00 05 00 00
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xff | 255 | NULL/UNUSED |
| unknown9 | 0x08 | 8 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x0c | 12 |  |
| str | 0x00 | 0 |  |
| spd | 0x0c | 12 | Speed stat |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x02 | 2 | Purity stat |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0xff | 255 | NULL/UNUSED |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xff | 255 | NULL/UNUSED |
| elemental_type | 0x04 | 4 |  |
| elemental_power | 0x28 | 40 |  |
| max_dura | 0x05 | 5 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x05 | 5 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 39 (Offset 0x6b4)

**Raw hex:**
```
0006b4: b8 0b dc 05 00 00 00 00 00 00 00 00 ff 00 ff 00
0006c4: 78 03 00 00 48 08 00 00 46 05 b0 04 00 00 00 00
0006d4: 00 00 00 00 32 00 ff 00 00 00 00 08
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0xb8 | 184 |  |
| unknown2 | 0x0b | 11 |  |
| unknown3 | 0xdc | 220 |  |
| unknown4 | 0x05 | 5 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0xff | 255 | NULL/UNUSED |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0xff | 255 | NULL/UNUSED |
| unknown12 | 0x00 | 0 |  |
| str | 0x78 | 120 | Strength stat |
| spd | 0x03 | 3 | Speed stat |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x48 | 72 | Slash resistance |
| smh | 0x08 | 8 | Smash resistance |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x46 | 70 | Focus stat |
| ham | 0x05 | 5 | Hammer stat |
| pur | 0xb0 | 176 | Purity stat |
| par | 0x04 | 4 | Parry stat |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x32 | 50 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0xff | 255 | NULL/UNUSED |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x08 | 8 |  |

### Item 40 (Offset 0x6e0)

**Raw hex:**
```
0006e0: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
0006f0: 32 00 ff 00 00 00 00 0c 00 00 00 00 00 00 00 00
000700: 00 00 00 00 00 00 00 00 ff 00 ff 00
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x32 | 50 | Strength stat |
| spd | 0x00 | 0 |  |
| def | 0xff | 255 | NULL/UNUSED |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x0c | 12 | Spirit stat |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0xff | 255 | NULL/UNUSED |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xff | 255 | NULL/UNUSED |
| unknown16 | 0x00 | 0 |  |

### Item 41 (Offset 0x70c)

**Raw hex:**
```
00070c: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
00071c: 00 00 00 00 00 00 ff 00 00 00 00 0c 00 00 00 00
00072c: 00 00 00 00 00 00 04 00 00 00 00 00
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0xff | 255 | NULL/UNUSED |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x0c | 12 | Parry stat |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x04 | 4 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 42 (Offset 0x738)

**Raw hex:**
```
000738: 32 00 ff 00 00 00 00 08 00 00 00 00 00 00 00 00
000748: 00 00 00 00 00 00 00 00 01 00 ff 00 00 00 00 08
000758: 00 00 00 00 00 00 00 00 00 00 04 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x32 | 50 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xff | 255 | NULL/UNUSED |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x08 | 8 | Type 8 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x01 | 1 | Focus stat |
| ham | 0x00 | 0 |  |
| pur | 0xff | 255 | NULL/UNUSED |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x08 | 8 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x04 | 4 |  |
| unknown16 | 0x00 | 0 |  |

### Item 43 (Offset 0x764)

**Raw hex:**
```
000764: 00 00 00 00 01 00 ff 00 00 00 00 08 00 00 00 00
000774: 00 00 00 00 00 00 04 00 00 00 00 00 00 00 ff 08
000784: 00 00 c4 09 00 0c 00 00 00 00 00 00
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
| unknown5 | 0xff | 255 | NULL/UNUSED |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x08 | 8 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x04 | 4 | Pierce resistance |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0xff | 255 | NULL/UNUSED |
| attribute1_value | 0x08 | 8 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xc4 | 196 |  |
| elemental_type | 0x09 | 9 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x0c | 12 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 44 (Offset 0x790)

**Raw hex:**
```
000790: 00 00 02 00 00 00 00 00 00 00 ff 08 00 00 00 08
0007a0: 00 0c 05 00 00 00 00 00 00 00 04 00 00 00 00 00
0007b0: 00 00 ff 08 00 00 00 08 00 0c fd ff
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x02 | 2 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xff | 255 | NULL/UNUSED |
| unknown9 | 0x08 | 8 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x08 | 8 |  |
| str | 0x00 | 0 |  |
| spd | 0x0c | 12 | Speed stat |
| def | 0x05 | 5 | Defense stat |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x04 | 4 | Purity stat |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xff | 255 | NULL/UNUSED |
| elemental_type | 0x08 | 8 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x08 | 8 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x0c | 12 |  |
| unknown15 | 0xfd | 253 |  |
| unknown16 | 0xff | 255 | NULL/UNUSED |

### Item 45 (Offset 0x7bc)

**Raw hex:**
```
0007bc: 00 00 00 00 00 00 04 00 00 00 00 00 00 00 ff 08
0007cc: 00 00 00 08 00 0c 00 00 00 00 00 00 00 00 04 00
0007dc: 00 00 00 00 32 00 ff 00 00 00 00 08
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0xff | 255 | NULL/UNUSED |
| unknown12 | 0x08 | 8 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x08 | 8 | Balance stat |
| sla | 0x00 | 0 |  |
| smh | 0x0c | 12 | Smash resistance |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x04 | 4 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x32 | 50 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0xff | 255 | NULL/UNUSED |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x08 | 8 |  |

### Item 46 (Offset 0x7e8)

**Raw hex:**
```
0007e8: 00 00 0a 00 00 00 00 00 00 00 00 00 00 00 00 00
0007f8: 34 00 ff 05 00 01 00 10 00 03 fd ff ec 04 00 02
000808: 00 00 00 00 00 00 00 00 00 00 ff 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x0a | 10 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x34 | 52 | Strength stat |
| spd | 0x00 | 0 |  |
| def | 0xff | 255 | NULL/UNUSED |
| bal | 0x05 | 5 | Balance stat |
| sla | 0x00 | 0 |  |
| smh | 0x01 | 1 | Smash resistance |
| pir | 0x00 | 0 |  |
| spr | 0x10 | 16 | Spirit stat |
| foc | 0x00 | 0 |  |
| ham | 0x03 | 3 | Hammer stat |
| pur | 0xfd | 253 | Purity stat |
| par | 0xff | 255 | NULL/UNUSED |
| mel | 0xec | 236 | Melee power |
| sol | 0x04 | 4 | Holy/Solomon stat |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x02 | 2 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xff | 255 | NULL/UNUSED |
| unknown16 | 0x00 | 0 |  |

### Item 47 (Offset 0x814)

**Raw hex:**
```
000814: 00 00 00 10 00 00 fd ff 00 00 00 00 00 00 04 00
000824: 00 00 00 00 32 00 ff 00 00 00 00 10 00 00 fd ff
000834: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x10 | 16 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0xfd | 253 |  |
| type | 0xff | 255 | Type 255 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x04 | 4 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x32 | 50 | Slash resistance |
| smh | 0x00 | 0 |  |
| pir | 0xff | 255 | NULL/UNUSED |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x10 | 16 | Parry stat |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0xfd | 253 | HP bonus |
| attribute1_value | 0xff | 255 | NULL/UNUSED |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 48 (Offset 0x840)

**Raw hex:**
```
000840: 33 00 ff 0c 84 03 00 08 00 00 00 00 01 00 01 00
000850: 00 00 00 00 00 00 00 00 32 00 ff 0c 00 02 00 08
000860: 00 01 f6 ff 01 00 01 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x33 | 51 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xff | 255 | NULL/UNUSED |
| unknown4 | 0x0c | 12 |  |
| texture_index_1 | 0x84 | 132 |  |
| texture_index_2 | 0x03 | 3 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x08 | 8 | Type 8 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x01 | 1 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x01 | 1 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x32 | 50 | Focus stat |
| ham | 0x00 | 0 |  |
| pur | 0xff | 255 | NULL/UNUSED |
| par | 0x0c | 12 | Parry stat |
| mel | 0x00 | 0 |  |
| sol | 0x02 | 2 | Holy/Solomon stat |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x08 | 8 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x01 | 1 |  |
| attribute2_type | 0xf6 | 246 |  |
| elemental_type | 0xff | 255 | NULL/UNUSED |
| elemental_power | 0x01 | 1 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x01 | 1 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 49 (Offset 0x86c)

**Raw hex:**
```
00086c: 00 00 00 00 32 00 ff 00 00 00 00 00 00 00 05 00
00087c: 00 00 00 00 00 00 00 00 00 00 00 00 01 00 ff 08
00088c: 00 00 c4 09 00 0c 00 00 00 00 00 00
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
| unknown5 | 0xff | 255 | NULL/UNUSED |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x05 | 5 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x01 | 1 | Melee power |
| sol | 0x00 | 0 |  |
| hp | 0xff | 255 | NULL/UNUSED |
| attribute1_value | 0x08 | 8 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xc4 | 196 |  |
| elemental_type | 0x09 | 9 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x0c | 12 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 50 (Offset 0x898)

**Raw hex:**
```
000898: 00 00 02 00 00 00 00 00 00 00 ff 08 00 00 c4 09
0008a8: 00 0c 00 00 00 00 00 00 00 00 02 00 00 00 00 00
0008b8: 32 00 ff 08 58 02 d0 07 00 0c 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x02 | 2 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xff | 255 | NULL/UNUSED |
| unknown9 | 0x08 | 8 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0xc4 | 196 |  |
| unknown12 | 0x09 | 9 |  |
| str | 0x00 | 0 |  |
| spd | 0x0c | 12 | Speed stat |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x02 | 2 | Purity stat |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x32 | 50 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xff | 255 | NULL/UNUSED |
| elemental_type | 0x08 | 8 |  |
| elemental_power | 0x58 | 88 |  |
| max_dura | 0x02 | 2 | Max durability |
| weight | 0xd0 | 208 |  |
| unknown13 | 0x07 | 7 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x0c | 12 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 51 (Offset 0x8c4)

**Raw hex:**
```
0008c4: 00 00 00 00 00 00 00 00 00 00 00 00 ff 00 ff 04
0008d4: 9b 03 00 00 00 04 00 00 00 08 00 06 00 00 00 00
0008e4: 00 00 00 00 ff 00 ff 00 00 02 78 05
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0xff | 255 | NULL/UNUSED |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0xff | 255 | NULL/UNUSED |
| unknown12 | 0x04 | 4 |  |
| str | 0x9b | 155 | Strength stat |
| spd | 0x03 | 3 | Speed stat |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x04 | 4 | Smash resistance |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x08 | 8 | Hammer stat |
| pur | 0x00 | 0 |  |
| par | 0x06 | 6 | Parry stat |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0xff | 255 | NULL/UNUSED |
| max_dura | 0x00 | 0 |  |
| weight | 0xff | 255 | NULL/UNUSED |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x02 | 2 |  |
| unknown15 | 0x78 | 120 |  |
| unknown16 | 0x05 | 5 |  |

### Item 52 (Offset 0x8f0)

**Raw hex:**
```
0008f0: 4c 04 00 00 00 00 00 00 00 00 00 00 00 00 00 00
000900: 32 00 ff 00 00 00 00 00 00 00 00 00 00 00 00 00
000910: 00 00 00 00 00 00 00 00 32 00 ff 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x4c | 76 |  |
| unknown2 | 0x04 | 4 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x32 | 50 | Strength stat |
| spd | 0x00 | 0 |  |
| def | 0xff | 255 | NULL/UNUSED |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x32 | 50 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xff | 255 | NULL/UNUSED |
| unknown16 | 0x00 | 0 |  |

### Item 53 (Offset 0x91c)

**Raw hex:**
```
00091c: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
00092c: 00 00 00 00 00 00 ff 08 00 00 00 08 00 00 00 00
00093c: 00 00 00 00 00 00 02 00 00 00 00 00
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0xff | 255 | NULL/UNUSED |
| spr | 0x08 | 8 | Spirit stat |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x08 | 8 | Parry stat |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x02 | 2 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 54 (Offset 0x948)

**Raw hex:**
```
000948: ff 00 ff 00 00 00 78 05 00 00 00 00 00 00 00 00
000958: 00 00 00 00 00 00 00 00 fe 00 ff 01 00 04 00 08
000968: 00 04 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0xff | 255 | NULL/UNUSED |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xff | 255 | NULL/UNUSED |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x78 | 120 |  |
| type | 0x05 | 5 | ACCESSORY |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0xfe | 254 | Focus stat |
| ham | 0x00 | 0 |  |
| pur | 0xff | 255 | NULL/UNUSED |
| par | 0x01 | 1 | Parry stat |
| mel | 0x00 | 0 |  |
| sol | 0x04 | 4 | Holy/Solomon stat |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x08 | 8 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x04 | 4 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 55 (Offset 0x974)

**Raw hex:**
```
000974: 00 00 00 00 32 00 ff 08 00 02 b0 04 00 08 00 00
000984: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 ff 08
000994: 00 00 00 08 00 10 00 00 00 00 00 00
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
| unknown5 | 0xff | 255 | NULL/UNUSED |
| type | 0x08 | 8 | Type 8 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x02 | 2 |  |
| unknown8 | 0xb0 | 176 |  |
| unknown9 | 0x04 | 4 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x08 | 8 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0xff | 255 | NULL/UNUSED |
| attribute1_value | 0x08 | 8 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x08 | 8 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x10 | 16 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 56 (Offset 0x9a0)

**Raw hex:**
```
0009a0: 00 00 02 00 00 00 00 00 33 00 ff 0c 00 02 00 08
0009b0: 00 02 00 00 01 00 01 00 00 00 00 00 00 00 00 00
0009c0: 32 00 ff 00 00 00 00 08 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x02 | 2 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x33 | 51 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xff | 255 | NULL/UNUSED |
| unknown9 | 0x0c | 12 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x02 | 2 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x08 | 8 |  |
| str | 0x00 | 0 |  |
| spd | 0x02 | 2 | Speed stat |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x01 | 1 | Slash resistance |
| smh | 0x00 | 0 |  |
| pir | 0x01 | 1 | Pierce resistance |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x32 | 50 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xff | 255 | NULL/UNUSED |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x08 | 8 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 57 (Offset 0x9cc)

**Raw hex:**
```
0009cc: 00 00 00 00 00 00 00 00 00 00 00 00 32 00 ff 00
0009dc: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
0009ec: 00 00 00 00 32 00 ff 00 00 00 00 00
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x32 | 50 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0xff | 255 | NULL/UNUSED |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x32 | 50 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0xff | 255 | NULL/UNUSED |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 58 (Offset 0x9f8)

**Raw hex:**
```
0009f8: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
000a08: 32 00 ff 00 00 00 00 00 00 00 00 00 00 00 00 00
000a18: 00 00 00 00 00 00 00 00 32 00 ff 00
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x32 | 50 | Strength stat |
| spd | 0x00 | 0 |  |
| def | 0xff | 255 | NULL/UNUSED |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x32 | 50 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xff | 255 | NULL/UNUSED |
| unknown16 | 0x00 | 0 |  |

### Item 59 (Offset 0xa24)

**Raw hex:**
```
000a24: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
000a34: 00 00 00 00 32 00 ff 00 00 00 00 00 00 00 00 00
000a44: 00 00 00 00 00 00 00 00 00 00 00 00
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x32 | 50 | Slash resistance |
| smh | 0x00 | 0 |  |
| pir | 0xff | 255 | NULL/UNUSED |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 60 (Offset 0xa50)

**Raw hex:**
```
000a50: 32 00 ff 00 00 00 00 00 00 00 00 00 00 00 00 00
000a60: 00 00 00 00 00 00 00 00 34 00 ff 08 00 00 98 08
000a70: 00 0c 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x32 | 50 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xff | 255 | NULL/UNUSED |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x34 | 52 | Focus stat |
| ham | 0x00 | 0 |  |
| pur | 0xff | 255 | NULL/UNUSED |
| par | 0x08 | 8 | Parry stat |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x98 | 152 | HP bonus |
| attribute1_value | 0x08 | 8 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x0c | 12 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 61 (Offset 0xa7c)

**Raw hex:**
```
000a7c: 00 00 00 00 32 00 ff 08 00 02 00 06 00 02 fb ff
000a8c: 00 00 00 00 00 00 00 00 00 00 00 00 ff 00 ff 04
000a9c: 00 04 00 00 00 03 00 00 00 06 00 0c
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
| unknown5 | 0xff | 255 | NULL/UNUSED |
| type | 0x08 | 8 | Type 8 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x02 | 2 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x06 | 6 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x02 | 2 | 6=one-hand, 7=two-hand |
| unknown11 | 0xfb | 251 |  |
| unknown12 | 0xff | 255 | NULL/UNUSED |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0xff | 255 | NULL/UNUSED |
| sol | 0x00 | 0 |  |
| hp | 0xff | 255 | NULL/UNUSED |
| attribute1_value | 0x04 | 4 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x04 | 4 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x03 | 3 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x06 | 6 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x0c | 12 |  |

### Item 62 (Offset 0xaa8)

**Raw hex:**
```
000aa8: 00 00 00 00 00 00 00 00 32 00 ff 00 00 02 00 00
000ab8: 00 02 00 00 00 00 00 00 00 00 00 00 00 00 00 00
000ac8: 00 00 ff 08 00 00 00 08 00 0a 04 00
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x32 | 50 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xff | 255 | NULL/UNUSED |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x02 | 2 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x02 | 2 | Speed stat |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xff | 255 | NULL/UNUSED |
| elemental_type | 0x08 | 8 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x08 | 8 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x0a | 10 |  |
| unknown15 | 0x04 | 4 |  |
| unknown16 | 0x00 | 0 |  |

### Item 63 (Offset 0xad4)

**Raw hex:**
```
000ad4: 00 00 00 00 00 00 04 00 00 00 00 00 32 00 ff 08
000ae4: 00 02 d0 07 40 06 02 00 00 00 00 00 00 00 00 00
000af4: 00 00 00 00 32 00 ff 00 00 00 00 08
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x32 | 50 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0xff | 255 | NULL/UNUSED |
| unknown12 | 0x08 | 8 |  |
| str | 0x00 | 0 |  |
| spd | 0x02 | 2 | Speed stat |
| def | 0xd0 | 208 | Defense stat |
| bal | 0x07 | 7 | Balance stat |
| sla | 0x40 | 64 | Slash resistance |
| smh | 0x06 | 6 | Smash resistance |
| pir | 0x02 | 2 | Pierce resistance |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x32 | 50 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0xff | 255 | NULL/UNUSED |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x08 | 8 |  |

### Item 64 (Offset 0xb00)

**Raw hex:**
```
000b00: 00 00 02 00 00 00 00 00 00 00 00 00 00 00 00 00
000b10: ff 00 ff 00 00 04 00 00 00 10 00 00 00 00 00 00
000b20: 00 00 00 00 00 00 00 00 ff 00 ff 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x02 | 2 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0xff | 255 | NULL/UNUSED |
| spd | 0x00 | 0 |  |
| def | 0xff | 255 | NULL/UNUSED |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x04 | 4 | Smash resistance |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x10 | 16 | Hammer stat |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0xff | 255 | NULL/UNUSED |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xff | 255 | NULL/UNUSED |
| unknown16 | 0x00 | 0 |  |

### Item 65 (Offset 0xb2c)

**Raw hex:**
```
000b2c: 00 02 00 00 78 05 00 00 00 00 00 00 00 00 00 00
000b3c: 00 00 00 00 ff 00 ff 00 5e 01 00 00 00 02 00 00
000b4c: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x02 | 2 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x78 | 120 |  |
| texture_index_2 | 0x05 | 5 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0xff | 255 | NULL/UNUSED |
| smh | 0x00 | 0 |  |
| pir | 0xff | 255 | NULL/UNUSED |
| spr | 0x00 | 0 |  |
| foc | 0x5e | 94 | Focus stat |
| ham | 0x01 | 1 | Hammer stat |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x02 | 2 | Holy/Solomon stat |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 66 (Offset 0xb58)

**Raw hex:**
```
000b58: ff 00 ff 04 00 04 00 00 00 04 00 00 00 08 00 05
000b68: 00 00 00 00 00 00 00 00 01 00 ff 08 00 00 c4 09
000b78: 00 0c 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0xff | 255 | NULL/UNUSED |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xff | 255 | NULL/UNUSED |
| unknown4 | 0x04 | 4 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x04 | 4 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x04 | 4 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x08 | 8 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x05 | 5 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x01 | 1 | Focus stat |
| ham | 0x00 | 0 |  |
| pur | 0xff | 255 | NULL/UNUSED |
| par | 0x08 | 8 | Parry stat |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0xc4 | 196 | HP bonus |
| attribute1_value | 0x09 | 9 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x0c | 12 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 67 (Offset 0xb84)

**Raw hex:**
```
000b84: 00 00 00 00 32 00 ff 00 00 00 70 17 00 00 00 00
000b94: 00 00 00 00 00 00 00 00 00 00 00 00 32 00 ff 00
000ba4: 00 08 00 04 00 01 fb ff 00 00 00 00
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
| unknown5 | 0xff | 255 | NULL/UNUSED |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x70 | 112 |  |
| unknown9 | 0x17 | 23 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x32 | 50 | Melee power |
| sol | 0x00 | 0 |  |
| hp | 0xff | 255 | NULL/UNUSED |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x08 | 8 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x04 | 4 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x01 | 1 | Max durability |
| weight | 0xfb | 251 |  |
| unknown13 | 0xff | 255 | NULL/UNUSED |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 68 (Offset 0xbb0)

**Raw hex:**
```
000bb0: 00 00 00 00 00 00 00 00 32 00 ff 08 00 00 dc 05
000bc0: 00 00 02 00 00 00 00 00 00 00 00 00 00 00 00 00
000bd0: 33 00 ff 0c 00 04 f8 07 00 02 fb ff
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x32 | 50 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xff | 255 | NULL/UNUSED |
| unknown9 | 0x08 | 8 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0xdc | 220 |  |
| unknown12 | 0x05 | 5 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x02 | 2 | Defense stat |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x33 | 51 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xff | 255 | NULL/UNUSED |
| elemental_type | 0x0c | 12 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x04 | 4 | Max durability |
| weight | 0xf8 | 248 |  |
| unknown13 | 0x07 | 7 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x02 | 2 |  |
| unknown15 | 0xfb | 251 |  |
| unknown16 | 0xff | 255 | NULL/UNUSED |

### Item 69 (Offset 0xbdc)

**Raw hex:**
```
000bdc: 01 00 01 00 00 00 00 00 00 00 00 00 00 00 ff 08
000bec: 00 00 00 0c 60 10 00 00 00 00 00 00 00 00 02 00
000bfc: 00 00 00 00 ff 00 ff 04 00 03 00 00
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0xff | 255 | NULL/UNUSED |
| unknown12 | 0x08 | 8 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x0c | 12 | Balance stat |
| sla | 0x60 | 96 | Slash resistance |
| smh | 0x10 | 16 | Smash resistance |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x02 | 2 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0xff | 255 | NULL/UNUSED |
| max_dura | 0x00 | 0 |  |
| weight | 0xff | 255 | NULL/UNUSED |
| unknown13 | 0x04 | 4 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x03 | 3 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 70 (Offset 0xc08)

**Raw hex:**
```
000c08: 40 06 00 00 00 03 00 04 00 00 00 00 00 00 00 00
000c18: ff 00 ff 00 b0 04 00 00 dc 05 00 00 00 00 00 00
000c28: 00 00 00 00 00 00 00 00 ff 00 ff 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x40 | 64 |  |
| unknown2 | 0x06 | 6 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x03 | 3 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x04 | 4 | SHIELD |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0xff | 255 | NULL/UNUSED |
| spd | 0x00 | 0 |  |
| def | 0xff | 255 | NULL/UNUSED |
| bal | 0x00 | 0 |  |
| sla | 0xb0 | 176 | Slash resistance |
| smh | 0x04 | 4 | Smash resistance |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0xdc | 220 | Focus stat |
| ham | 0x05 | 5 | Hammer stat |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0xff | 255 | NULL/UNUSED |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xff | 255 | NULL/UNUSED |
| unknown16 | 0x00 | 0 |  |

### Item 71 (Offset 0xc34)

**Raw hex:**
```
000c34: 00 02 00 00 00 03 00 00 00 00 00 00 00 00 00 00
000c44: 00 00 00 00 32 00 ff 00 00 00 00 00 00 00 00 00
000c54: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x02 | 2 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x03 | 3 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x32 | 50 | Slash resistance |
| smh | 0x00 | 0 |  |
| pir | 0xff | 255 | NULL/UNUSED |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 72 (Offset 0xc60)

**Raw hex:**
```
000c60: 40 16 ff 00 00 00 78 05 00 00 00 00 7e ff a8 fd
000c70: 00 00 00 00 00 00 00 00 40 18 ff 00 00 00 b0 04
000c80: f4 01 00 00 3d ff 92 ff 6a ff 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x40 | 64 |  |
| unknown2 | 0x16 | 22 |  |
| unknown3 | 0xff | 255 | NULL/UNUSED |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x78 | 120 |  |
| type | 0x05 | 5 | ACCESSORY |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x7e | 126 |  |
| hand_type | 0xff | 255 | NULL/UNUSED |
| unknown11 | 0xa8 | 168 |  |
| unknown12 | 0xfd | 253 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x40 | 64 | Focus stat |
| ham | 0x18 | 24 | Hammer stat |
| pur | 0xff | 255 | NULL/UNUSED |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0xb0 | 176 | HP bonus |
| attribute1_value | 0x04 | 4 |  |
| attribute1_type | 0xf4 | 244 |  |
| attribute2_value | 0x01 | 1 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x3d | 61 |  |
| max_dura | 0xff | 255 | NULL/UNUSED |
| weight | 0x92 | 146 |  |
| unknown13 | 0xff | 255 | NULL/UNUSED |
| dura | 0x6a | 106 | Current durability |
| unknown14 | 0xff | 255 | NULL/UNUSED |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 73 (Offset 0xc8c)

**Raw hex:**
```
000c8c: 00 00 00 00 40 18 ff 00 00 00 78 05 00 00 38 ff
000c9c: 9c ff a2 fe 6a ff 00 00 00 00 00 00 40 18 ff 00
000cac: 00 00 78 05 00 00 00 00 7e ff e0 fc
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x40 | 64 |  |
| texture_index_2 | 0x18 | 24 |  |
| unknown5 | 0xff | 255 | NULL/UNUSED |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x78 | 120 |  |
| unknown9 | 0x05 | 5 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x38 | 56 |  |
| unknown12 | 0xff | 255 | NULL/UNUSED |
| str | 0x9c | 156 | Strength stat |
| spd | 0xff | 255 | NULL/UNUSED |
| def | 0xa2 | 162 | Defense stat |
| bal | 0xfe | 254 | Balance stat |
| sla | 0x6a | 106 | Slash resistance |
| smh | 0xff | 255 | NULL/UNUSED |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x40 | 64 | Melee power |
| sol | 0x18 | 24 | Holy/Solomon stat |
| hp | 0xff | 255 | NULL/UNUSED |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x78 | 120 |  |
| elemental_type | 0x05 | 5 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x7e | 126 | Current durability |
| unknown14 | 0xff | 255 | NULL/UNUSED |
| unknown15 | 0xe0 | 224 |  |
| unknown16 | 0xfc | 252 |  |

### Item 74 (Offset 0xcb8)

**Raw hex:**
```
000cb8: 00 00 00 00 00 00 00 00 00 00 ff 08 00 00 00 08
000cc8: 00 0c 00 00 00 00 00 00 00 00 03 00 00 00 00 00
000cd8: 32 00 ff e5 00 06 00 00 00 0a 00 00
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xff | 255 | NULL/UNUSED |
| unknown9 | 0x08 | 8 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x08 | 8 |  |
| str | 0x00 | 0 |  |
| spd | 0x0c | 12 | Speed stat |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x03 | 3 | Purity stat |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x32 | 50 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xff | 255 | NULL/UNUSED |
| elemental_type | 0xe5 | 229 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x06 | 6 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x0a | 10 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 75 (Offset 0xce4)

**Raw hex:**
```
000ce4: 00 06 80 01 00 00 00 00 00 00 00 00 ff 00 ff 00
000cf4: 00 00 78 05 00 00 00 00 00 00 00 00 00 00 00 00
000d04: 00 00 00 00 32 00 ff 00 00 02 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x06 | 6 |  |
| unknown3 | 0x80 | 128 |  |
| unknown4 | 0x01 | 1 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0xff | 255 | NULL/UNUSED |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0xff | 255 | NULL/UNUSED |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x78 | 120 | Defense stat |
| bal | 0x05 | 5 | Balance stat |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x32 | 50 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0xff | 255 | NULL/UNUSED |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x02 | 2 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 76 (Offset 0xd10)

**Raw hex:**
```
000d10: 00 02 ce ff 00 00 00 00 00 00 00 00 00 00 00 00
000d20: 32 00 ff 04 00 06 00 06 00 0a 80 ff 00 06 80 01
000d30: 00 00 00 00 00 00 00 00 00 00 ff 08
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x02 | 2 |  |
| unknown3 | 0xce | 206 |  |
| unknown4 | 0xff | 255 | NULL/UNUSED |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x32 | 50 | Strength stat |
| spd | 0x00 | 0 |  |
| def | 0xff | 255 | NULL/UNUSED |
| bal | 0x04 | 4 | Balance stat |
| sla | 0x00 | 0 |  |
| smh | 0x06 | 6 | Smash resistance |
| pir | 0x00 | 0 |  |
| spr | 0x06 | 6 | Spirit stat |
| foc | 0x00 | 0 |  |
| ham | 0x0a | 10 | Hammer stat |
| pur | 0x80 | 128 | Purity stat |
| par | 0xff | 255 | NULL/UNUSED |
| mel | 0x00 | 0 |  |
| sol | 0x06 | 6 | Holy/Solomon stat |
| hp | 0x80 | 128 | HP bonus |
| attribute1_value | 0x01 | 1 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xff | 255 | NULL/UNUSED |
| unknown16 | 0x08 | 8 |  |

### Item 77 (Offset 0xd3c)

**Raw hex:**
```
000d3c: 00 00 00 08 00 0c 00 00 00 00 00 00 00 00 04 00
000d4c: 00 00 00 00 00 00 ff 08 00 00 00 00 00 0c 00 00
000d5c: 00 00 00 00 00 00 04 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x08 | 8 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x0c | 12 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x04 | 4 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0xff | 255 | NULL/UNUSED |
| spr | 0x08 | 8 | Spirit stat |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x0c | 12 | Holy/Solomon stat |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x04 | 4 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 78 (Offset 0xd68)

**Raw hex:**
```
000d68: 34 00 ff 0c 00 02 00 04 00 04 00 00 01 00 01 00
000d78: 00 00 00 00 00 00 00 00 32 00 ff 00 00 00 b8 0b
000d88: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x34 | 52 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xff | 255 | NULL/UNUSED |
| unknown4 | 0x0c | 12 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x02 | 2 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x04 | 4 | SHIELD |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x04 | 4 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x01 | 1 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x01 | 1 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x32 | 50 | Focus stat |
| ham | 0x00 | 0 |  |
| pur | 0xff | 255 | NULL/UNUSED |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0xb8 | 184 | HP bonus |
| attribute1_value | 0x0b | 11 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 79 (Offset 0xd94)

**Raw hex:**
```
000d94: 00 00 00 00 00 00 ff 08 00 00 c4 09 00 0c 00 00
000da4: 00 00 00 00 00 00 02 00 00 00 00 00 01 00 ff 08
000db4: 00 00 c4 09 00 0c 00 00 00 00 00 00
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
| unknown5 | 0xff | 255 | NULL/UNUSED |
| type | 0x08 | 8 | Type 8 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xc4 | 196 |  |
| unknown9 | 0x09 | 9 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x0c | 12 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x02 | 2 | Pierce resistance |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x01 | 1 | Melee power |
| sol | 0x00 | 0 |  |
| hp | 0xff | 255 | NULL/UNUSED |
| attribute1_value | 0x08 | 8 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xc4 | 196 |  |
| elemental_type | 0x09 | 9 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x0c | 12 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 80 (Offset 0xdc0)

**Raw hex:**
```
000dc0: 00 00 02 00 00 00 00 00 ff 00 ff 00 00 00 00 00
000dd0: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
000de0: 02 00 ff 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x02 | 2 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0xff | 255 | NULL/UNUSED |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xff | 255 | NULL/UNUSED |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x02 | 2 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xff | 255 | NULL/UNUSED |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 81 (Offset 0xdec)

**Raw hex:**
```
000dec: 00 00 00 00 00 00 00 00 00 00 00 00 34 00 ff 0c
000dfc: b0 04 00 0c 00 08 f6 ff 98 08 98 08 00 00 00 00
000e0c: 00 00 00 00 00 00 ff 00 00 00 00 0c
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x34 | 52 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0xff | 255 | NULL/UNUSED |
| unknown12 | 0x0c | 12 |  |
| str | 0xb0 | 176 | Strength stat |
| spd | 0x04 | 4 | Speed stat |
| def | 0x00 | 0 |  |
| bal | 0x0c | 12 | Balance stat |
| sla | 0x00 | 0 |  |
| smh | 0x08 | 8 | Smash resistance |
| pir | 0xf6 | 246 | Pierce resistance |
| spr | 0xff | 255 | NULL/UNUSED |
| foc | 0x98 | 152 | Focus stat |
| ham | 0x08 | 8 | Hammer stat |
| pur | 0x98 | 152 | Purity stat |
| par | 0x08 | 8 | Parry stat |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0xff | 255 | NULL/UNUSED |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x0c | 12 |  |

### Item 82 (Offset 0xe18)

**Raw hex:**
```
000e18: 00 00 0b 00 00 00 00 00 00 00 04 00 00 00 00 00
000e28: ff 00 ff 00 00 00 00 00 00 00 0a 00 00 00 00 00
000e38: 00 00 00 00 00 00 00 00 32 00 ff 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x0b | 11 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x04 | 4 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0xff | 255 | NULL/UNUSED |
| spd | 0x00 | 0 |  |
| def | 0xff | 255 | NULL/UNUSED |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x0a | 10 | Purity stat |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x32 | 50 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xff | 255 | NULL/UNUSED |
| unknown16 | 0x00 | 0 |  |

### Item 83 (Offset 0xe44)

**Raw hex:**
```
000e44: 00 00 88 13 00 00 00 00 00 00 00 00 00 00 00 00
000e54: 00 00 00 00 e1 00 ff 08 00 00 00 08 00 08 fb ff
000e64: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x88 | 136 |  |
| unknown4 | 0x13 | 19 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0xe1 | 225 | Slash resistance |
| smh | 0x00 | 0 |  |
| pir | 0xff | 255 | NULL/UNUSED |
| spr | 0x08 | 8 | Spirit stat |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x08 | 8 | Parry stat |
| mel | 0x00 | 0 |  |
| sol | 0x08 | 8 | Holy/Solomon stat |
| hp | 0xfb | 251 | HP bonus |
| attribute1_value | 0xff | 255 | NULL/UNUSED |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 84 (Offset 0xe70)

**Raw hex:**
```
000e70: 32 00 ff 00 00 00 00 10 00 00 f6 ff 00 00 00 00
000e80: 00 00 00 00 00 00 00 00 32 00 ff 00 00 00 00 00
000e90: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x32 | 50 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xff | 255 | NULL/UNUSED |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x10 | 16 | Type 16 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xf6 | 246 |  |
| unknown9 | 0xff | 255 | NULL/UNUSED |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x32 | 50 | Focus stat |
| ham | 0x00 | 0 |  |
| pur | 0xff | 255 | NULL/UNUSED |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 85 (Offset 0xe9c)

**Raw hex:**
```
000e9c: 00 00 00 00 e1 00 ff 08 00 00 00 08 00 08 fb ff
000eac: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 ff 08
000ebc: 00 00 c4 09 00 10 00 00 00 00 00 00
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
| unknown5 | 0xff | 255 | NULL/UNUSED |
| type | 0x08 | 8 | Type 8 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x08 | 8 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x08 | 8 | 6=one-hand, 7=two-hand |
| unknown11 | 0xfb | 251 |  |
| unknown12 | 0xff | 255 | NULL/UNUSED |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0xff | 255 | NULL/UNUSED |
| attribute1_value | 0x08 | 8 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xc4 | 196 |  |
| elemental_type | 0x09 | 9 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x10 | 16 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 86 (Offset 0xec8)

**Raw hex:**
```
000ec8: 00 00 00 00 00 00 00 00 e1 00 ff 08 00 00 00 08
000ed8: 00 08 fe ff 00 00 00 00 00 00 00 00 00 00 00 00
000ee8: 01 00 ff 08 00 00 c4 09 00 0c 00 00
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0xe1 | 225 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xff | 255 | NULL/UNUSED |
| unknown9 | 0x08 | 8 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x08 | 8 |  |
| str | 0x00 | 0 |  |
| spd | 0x08 | 8 | Speed stat |
| def | 0xfe | 254 | Defense stat |
| bal | 0xff | 255 | NULL/UNUSED |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x01 | 1 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xff | 255 | NULL/UNUSED |
| elemental_type | 0x08 | 8 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0xc4 | 196 |  |
| unknown13 | 0x09 | 9 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x0c | 12 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 87 (Offset 0xef4)

**Raw hex:**
```
000ef4: 00 00 00 00 00 00 02 00 00 00 00 00 00 00 ff 08
000f04: 00 00 c4 09 00 0c 00 00 00 00 00 00 00 00 00 00
000f14: 00 00 00 00 00 00 ff 08 00 00 c4 09
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0xff | 255 | NULL/UNUSED |
| unknown12 | 0x08 | 8 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0xc4 | 196 | Defense stat |
| bal | 0x09 | 9 | Balance stat |
| sla | 0x00 | 0 |  |
| smh | 0x0c | 12 | Smash resistance |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0xff | 255 | NULL/UNUSED |
| unknown13 | 0x08 | 8 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xc4 | 196 |  |
| unknown16 | 0x09 | 9 |  |

### Item 88 (Offset 0xf20)

**Raw hex:**
```
000f20: 00 0c 00 00 00 00 00 00 00 00 02 00 00 00 00 00
000f30: 33 00 ff 0c 00 02 c4 09 00 04 00 00 00 00 00 00
000f40: 00 00 00 00 00 00 00 00 ff 00 ff 00
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x02 | 2 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x33 | 51 | Strength stat |
| spd | 0x00 | 0 |  |
| def | 0xff | 255 | NULL/UNUSED |
| bal | 0x0c | 12 | Balance stat |
| sla | 0x00 | 0 |  |
| smh | 0x02 | 2 | Smash resistance |
| pir | 0xc4 | 196 | Pierce resistance |
| spr | 0x09 | 9 | Spirit stat |
| foc | 0x00 | 0 |  |
| ham | 0x04 | 4 | Hammer stat |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0xff | 255 | NULL/UNUSED |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xff | 255 | NULL/UNUSED |
| unknown16 | 0x00 | 0 |  |

### Item 89 (Offset 0xf4c)

**Raw hex:**
```
000f4c: 00 01 00 00 00 08 00 00 00 00 00 00 00 00 00 00
000f5c: 00 00 00 00 33 00 ff 0c 00 02 00 08 00 02 00 00
000f6c: 00 08 40 06 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x01 | 1 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x08 | 8 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x33 | 51 | Slash resistance |
| smh | 0x00 | 0 |  |
| pir | 0xff | 255 | NULL/UNUSED |
| spr | 0x0c | 12 | Spirit stat |
| foc | 0x00 | 0 |  |
| ham | 0x02 | 2 | Hammer stat |
| pur | 0x00 | 0 |  |
| par | 0x08 | 8 | Parry stat |
| mel | 0x00 | 0 |  |
| sol | 0x02 | 2 | Holy/Solomon stat |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x08 | 8 |  |
| attribute2_type | 0x40 | 64 |  |
| elemental_type | 0x06 | 6 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 90 (Offset 0xf78)

**Raw hex:**
```
000f78: e1 00 ff 08 00 00 00 08 00 00 fe ff 00 00 00 00
000f88: 00 00 00 00 00 00 00 00 e1 00 ff 08 00 00 00 08
000f98: 00 00 fe ff 01 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0xe1 | 225 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xff | 255 | NULL/UNUSED |
| unknown4 | 0x08 | 8 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x08 | 8 | Type 8 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xfe | 254 |  |
| unknown9 | 0xff | 255 | NULL/UNUSED |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0xe1 | 225 | Focus stat |
| ham | 0x00 | 0 |  |
| pur | 0xff | 255 | NULL/UNUSED |
| par | 0x08 | 8 | Parry stat |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x08 | 8 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xfe | 254 |  |
| elemental_type | 0xff | 255 | NULL/UNUSED |
| elemental_power | 0x01 | 1 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 91 (Offset 0xfa4)

**Raw hex:**
```
000fa4: 00 00 00 00 32 00 ff 04 00 00 00 00 00 00 00 00
000fb4: b0 04 c4 09 00 00 00 00 00 00 00 00 33 00 ff 0c
000fc4: 4c 04 00 08 00 04 00 00 01 00 01 00
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
| unknown5 | 0xff | 255 | NULL/UNUSED |
| type | 0x04 | 4 | SHIELD |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0xb0 | 176 | Strength stat |
| spd | 0x04 | 4 | Speed stat |
| def | 0xc4 | 196 | Defense stat |
| bal | 0x09 | 9 | Balance stat |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x33 | 51 | Melee power |
| sol | 0x00 | 0 |  |
| hp | 0xff | 255 | NULL/UNUSED |
| attribute1_value | 0x0c | 12 |  |
| attribute1_type | 0x4c | 76 |  |
| attribute2_value | 0x04 | 4 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x08 | 8 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x04 | 4 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x01 | 1 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x01 | 1 |  |
| unknown16 | 0x00 | 0 |  |

### Item 92 (Offset 0xfd0)

**Raw hex:**
```
000fd0: 00 00 00 00 00 00 00 00 33 00 ff 0c 00 02 00 0c
000fe0: dc 05 00 00 01 00 01 00 00 00 00 00 00 00 00 00
000ff0: 33 00 ff 0c 00 02 00 0c 00 02 00 00
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x33 | 51 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xff | 255 | NULL/UNUSED |
| unknown9 | 0x0c | 12 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x02 | 2 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x0c | 12 |  |
| str | 0xdc | 220 | Strength stat |
| spd | 0x05 | 5 | Speed stat |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x01 | 1 | Slash resistance |
| smh | 0x00 | 0 |  |
| pir | 0x01 | 1 | Pierce resistance |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x33 | 51 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xff | 255 | NULL/UNUSED |
| elemental_type | 0x0c | 12 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x02 | 2 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x0c | 12 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x02 | 2 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 93 (Offset 0xffc)

**Raw hex:**
```
000ffc: 01 00 01 00 00 00 00 00 00 00 00 00 07 00 ff 00
00100c: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
00101c: 00 00 00 00 33 00 ff 0c 4c 04 00 08
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x07 | 7 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0xff | 255 | NULL/UNUSED |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x33 | 51 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0xff | 255 | NULL/UNUSED |
| unknown13 | 0x0c | 12 |  |
| dura | 0x4c | 76 | Current durability |
| unknown14 | 0x04 | 4 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x08 | 8 |  |

### Item 94 (Offset 0x1028)

**Raw hex:**
```
001028: 20 03 00 00 01 00 01 00 00 00 00 00 00 00 00 00
001038: ff 00 ff 04 00 03 00 00 00 03 00 00 00 06 00 04
001048: 00 00 00 00 00 00 00 00 33 00 ff 0c
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x20 | 32 |  |
| unknown2 | 0x03 | 3 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x01 | 1 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x01 | 1 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0xff | 255 | NULL/UNUSED |
| spd | 0x00 | 0 |  |
| def | 0xff | 255 | NULL/UNUSED |
| bal | 0x04 | 4 | Balance stat |
| sla | 0x00 | 0 |  |
| smh | 0x03 | 3 | Smash resistance |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x03 | 3 | Hammer stat |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x06 | 6 | Holy/Solomon stat |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x04 | 4 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x33 | 51 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xff | 255 | NULL/UNUSED |
| unknown16 | 0x0c | 12 |  |

### Item 95 (Offset 0x1054)

**Raw hex:**
```
001054: 00 04 c4 09 00 04 00 00 00 06 00 04 00 00 00 00
001064: 00 00 00 00 02 00 ff 00 00 00 00 00 00 00 00 00
001074: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x04 | 4 |  |
| unknown3 | 0xc4 | 196 |  |
| unknown4 | 0x09 | 9 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x04 | 4 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x06 | 6 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x04 | 4 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x02 | 2 | Slash resistance |
| smh | 0x00 | 0 |  |
| pir | 0xff | 255 | NULL/UNUSED |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 98 (Offset 0x10d8)

**Raw hex:**
```
0010d8: 00 00 00 00 00 00 00 00 e1 00 ff 08 00 00 00 08
0010e8: 00 00 fe ff 00 00 00 00 00 00 00 00 00 00 00 00
0010f8: ff 00 ff 00 00 00 00 00 00 00 00 00
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0xe1 | 225 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xff | 255 | NULL/UNUSED |
| unknown9 | 0x08 | 8 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x08 | 8 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0xfe | 254 | Defense stat |
| bal | 0xff | 255 | NULL/UNUSED |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0xff | 255 | NULL/UNUSED |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xff | 255 | NULL/UNUSED |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 101 (Offset 0x115c)

**Raw hex:**
```
00115c: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
00116c: 00 00 00 00 ff 00 ff 00 80 00 00 00 00 01 00 00
00117c: 00 00 00 00 00 00 00 00 00 00 00 00
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0xff | 255 | NULL/UNUSED |
| smh | 0x00 | 0 |  |
| pir | 0xff | 255 | NULL/UNUSED |
| spr | 0x00 | 0 |  |
| foc | 0x80 | 128 | Focus stat |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x01 | 1 | Holy/Solomon stat |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 102 (Offset 0x1188)

**Raw hex:**
```
001188: ff 00 ff 00 00 02 00 00 b0 09 f6 ff 00 00 00 00
001198: 00 00 00 00 00 00 00 00 32 00 ff 00 00 00 00 08
0011a8: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0xff | 255 | NULL/UNUSED |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xff | 255 | NULL/UNUSED |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x02 | 2 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0xb0 | 176 |  |
| unknown7 | 0x09 | 9 |  |
| unknown8 | 0xf6 | 246 |  |
| unknown9 | 0xff | 255 | NULL/UNUSED |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x32 | 50 | Focus stat |
| ham | 0x00 | 0 |  |
| pur | 0xff | 255 | NULL/UNUSED |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x08 | 8 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 106 (Offset 0x1238)

**Raw hex:**
```
001238: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
001248: ff 00 ff 04 dc 05 00 00 dc 05 fe ff ac 0d d0 07
001258: 00 00 00 00 00 00 00 00 ff 00 ff 00
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0xff | 255 | NULL/UNUSED |
| spd | 0x00 | 0 |  |
| def | 0xff | 255 | NULL/UNUSED |
| bal | 0x04 | 4 | Balance stat |
| sla | 0xdc | 220 | Slash resistance |
| smh | 0x05 | 5 | Smash resistance |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0xdc | 220 | Focus stat |
| ham | 0x05 | 5 | Hammer stat |
| pur | 0xfe | 254 | Purity stat |
| par | 0xff | 255 | NULL/UNUSED |
| mel | 0xac | 172 | Melee power |
| sol | 0x0d | 13 | Holy/Solomon stat |
| hp | 0xd0 | 208 | HP bonus |
| attribute1_value | 0x07 | 7 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0xff | 255 | NULL/UNUSED |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xff | 255 | NULL/UNUSED |
| unknown16 | 0x00 | 0 |  |

### Item 107 (Offset 0x1264)

**Raw hex:**
```
001264: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
001274: 00 00 00 00 32 00 ff 00 00 00 00 02 00 00 00 00
001284: 00 00 00 00 00 00 00 00 00 00 00 00
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x32 | 50 | Slash resistance |
| smh | 0x00 | 0 |  |
| pir | 0xff | 255 | NULL/UNUSED |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x02 | 2 | Parry stat |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 108 (Offset 0x1290)

**Raw hex:**
```
001290: 00 00 ff 00 00 00 00 10 00 00 fd ff 00 00 00 00
0012a0: 00 00 00 00 00 00 00 00 ff 00 ff 00 00 00 00 00
0012b0: 00 00 fe ff 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xff | 255 | NULL/UNUSED |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x10 | 16 | Type 16 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xfd | 253 |  |
| unknown9 | 0xff | 255 | NULL/UNUSED |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0xff | 255 | NULL/UNUSED |
| ham | 0x00 | 0 |  |
| pur | 0xff | 255 | NULL/UNUSED |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xfe | 254 |  |
| elemental_type | 0xff | 255 | NULL/UNUSED |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 109 (Offset 0x12bc)

**Raw hex:**
```
0012bc: 00 00 00 00 32 00 ff 04 dc 05 00 00 00 04 fb ff
0012cc: 00 08 00 06 00 00 00 00 00 00 00 00 ff 00 ff 00
0012dc: 00 00 00 00 00 00 f6 ff 00 00 00 00
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
| unknown5 | 0xff | 255 | NULL/UNUSED |
| type | 0x04 | 4 | SHIELD |
| unknown6 | 0xdc | 220 |  |
| unknown7 | 0x05 | 5 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x04 | 4 | 6=one-hand, 7=two-hand |
| unknown11 | 0xfb | 251 |  |
| unknown12 | 0xff | 255 | NULL/UNUSED |
| str | 0x00 | 0 |  |
| spd | 0x08 | 8 | Speed stat |
| def | 0x00 | 0 |  |
| bal | 0x06 | 6 | Balance stat |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0xff | 255 | NULL/UNUSED |
| sol | 0x00 | 0 |  |
| hp | 0xff | 255 | NULL/UNUSED |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0xf6 | 246 |  |
| unknown13 | 0xff | 255 | NULL/UNUSED |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 110 (Offset 0x12e8)

**Raw hex:**
```
0012e8: 00 00 00 00 00 00 00 00 32 00 ff 00 00 00 00 08
0012f8: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
001308: 32 00 ff 00 00 00 00 08 00 00 00 00
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x32 | 50 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xff | 255 | NULL/UNUSED |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x08 | 8 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x32 | 50 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xff | 255 | NULL/UNUSED |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x08 | 8 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 112 (Offset 0x1340)

**Raw hex:**
```
001340: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
001350: ff 00 ff 00 00 02 00 00 08 07 00 00 00 00 00 00
001360: 00 00 00 00 00 00 00 00 33 00 ff 0c
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0xff | 255 | NULL/UNUSED |
| spd | 0x00 | 0 |  |
| def | 0xff | 255 | NULL/UNUSED |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x02 | 2 | Smash resistance |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x08 | 8 | Focus stat |
| ham | 0x07 | 7 | Hammer stat |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x33 | 51 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xff | 255 | NULL/UNUSED |
| unknown16 | 0x0c | 12 |  |

### Item 113 (Offset 0x136c)

**Raw hex:**
```
00136c: 00 02 00 08 00 02 00 00 01 00 01 00 00 00 00 00
00137c: 00 00 00 00 32 00 ff 00 00 00 dc 05 00 00 00 00
00138c: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x02 | 2 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x08 | 8 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x02 | 2 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x01 | 1 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x01 | 1 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x32 | 50 | Slash resistance |
| smh | 0x00 | 0 |  |
| pir | 0xff | 255 | NULL/UNUSED |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0xdc | 220 | Purity stat |
| par | 0x05 | 5 | Parry stat |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 114 (Offset 0x1398)

**Raw hex:**
```
001398: 32 00 ff 00 00 00 e8 03 00 00 00 00 00 00 00 00
0013a8: 00 00 00 00 00 00 00 00 32 00 ff 00 00 00 e8 03
0013b8: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x32 | 50 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xff | 255 | NULL/UNUSED |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0xe8 | 232 |  |
| type | 0x03 | 3 | HELMET |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x32 | 50 | Focus stat |
| ham | 0x00 | 0 |  |
| pur | 0xff | 255 | NULL/UNUSED |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0xe8 | 232 | HP bonus |
| attribute1_value | 0x03 | 3 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 117 (Offset 0x141c)

**Raw hex:**
```
00141c: 00 00 00 00 00 00 00 00 00 00 00 00 ff 00 ff 01
00142c: 00 02 00 00 80 00 00 00 00 00 00 00 00 00 00 00
00143c: 00 00 00 00 32 00 ff 00 00 00 e8 03
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0xff | 255 | NULL/UNUSED |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0xff | 255 | NULL/UNUSED |
| unknown12 | 0x01 | 1 |  |
| str | 0x00 | 0 |  |
| spd | 0x02 | 2 | Speed stat |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x80 | 128 | Slash resistance |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x32 | 50 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0xff | 255 | NULL/UNUSED |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xe8 | 232 |  |
| unknown16 | 0x03 | 3 |  |

### Item 118 (Offset 0x1448)

**Raw hex:**
```
001448: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
001458: 32 00 ff 00 00 00 e8 03 00 00 00 00 00 00 00 00
001468: 00 00 00 00 00 00 00 00 e1 00 ff 08
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x32 | 50 | Strength stat |
| spd | 0x00 | 0 |  |
| def | 0xff | 255 | NULL/UNUSED |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0xe8 | 232 | Pierce resistance |
| spr | 0x03 | 3 | Spirit stat |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0xe1 | 225 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xff | 255 | NULL/UNUSED |
| unknown16 | 0x08 | 8 |  |

### Item 119 (Offset 0x1474)

**Raw hex:**
```
001474: 00 00 d0 07 00 00 fb ff 00 00 00 00 00 00 00 00
001484: 00 00 00 00 e1 00 ff 08 00 00 d0 07 00 00 fb ff
001494: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xd0 | 208 |  |
| unknown4 | 0x07 | 7 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0xfb | 251 |  |
| type | 0xff | 255 | Type 255 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0xe1 | 225 | Slash resistance |
| smh | 0x00 | 0 |  |
| pir | 0xff | 255 | NULL/UNUSED |
| spr | 0x08 | 8 | Spirit stat |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0xd0 | 208 | Purity stat |
| par | 0x07 | 7 | Parry stat |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0xfb | 251 | HP bonus |
| attribute1_value | 0xff | 255 | NULL/UNUSED |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 120 (Offset 0x14a0)

**Raw hex:**
```
0014a0: e1 00 ff 08 00 00 d0 07 00 00 fb ff 00 00 00 00
0014b0: 00 00 00 00 00 00 00 00 e1 00 ff 08 00 00 d0 07
0014c0: 00 00 fb ff 47 47 c8 00 90 01 3c 64
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0xe1 | 225 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xff | 255 | NULL/UNUSED |
| unknown4 | 0x08 | 8 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0xd0 | 208 |  |
| type | 0x07 | 7 | KEY |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xfb | 251 |  |
| unknown9 | 0xff | 255 | NULL/UNUSED |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0xe1 | 225 | Focus stat |
| ham | 0x00 | 0 |  |
| pur | 0xff | 255 | NULL/UNUSED |
| par | 0x08 | 8 | Parry stat |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0xd0 | 208 | HP bonus |
| attribute1_value | 0x07 | 7 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xfb | 251 |  |
| elemental_type | 0xff | 255 | NULL/UNUSED |
| elemental_power | 0x47 | 71 |  |
| max_dura | 0x47 | 71 | Max durability |
| weight | 0xc8 | 200 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x90 | 144 | Current durability |
| unknown14 | 0x01 | 1 |  |
| unknown15 | 0x3c | 60 |  |
| unknown16 | 0x64 | 100 |  |

### Item 121 (Offset 0x14cc)

**Raw hex:**
```
0014cc: 3c 40 ff 7d ff 00 ff 00 00 00 00 00 00 00 00 00
0014dc: 00 00 00 00 00 00 00 00 00 00 00 00 57 00 ff 00
0014ec: 00 00 58 02 80 0c 8c 00 02 00 00 20
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x3c | 60 |  |
| unknown2 | 0x40 | 64 |  |
| unknown3 | 0xff | 255 | NULL/UNUSED |
| unknown4 | 0x7d | 125 |  |
| texture_index_1 | 0xff | 255 | NULL/UNUSED |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0xff | 255 | NULL/UNUSED |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x57 | 87 | Melee power |
| sol | 0x00 | 0 |  |
| hp | 0xff | 255 | NULL/UNUSED |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x58 | 88 |  |
| elemental_type | 0x02 | 2 |  |
| elemental_power | 0x80 | 128 |  |
| max_dura | 0x0c | 12 | Max durability |
| weight | 0x8c | 140 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x02 | 2 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x20 | 32 |  |

### Item 122 (Offset 0x14f8)

**Raw hex:**
```
0014f8: 00 00 00 00 00 00 00 00 54 00 ff 00 00 00 00 00
001508: 00 00 f0 00 01 00 00 1a 00 00 00 00 00 00 00 00
001518: 5a 00 ff 00 00 00 00 00 00 00 f0 00
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x54 | 84 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xff | 255 | NULL/UNUSED |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0xf0 | 240 | Defense stat |
| bal | 0x00 | 0 |  |
| sla | 0x01 | 1 | Slash resistance |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x1a | 26 | Spirit stat |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x5a | 90 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xff | 255 | NULL/UNUSED |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xf0 | 240 |  |
| unknown16 | 0x00 | 0 |  |

### Item 123 (Offset 0x1524)

**Raw hex:**
```
001524: 01 00 00 19 00 00 00 00 00 00 00 00 0d 00 ff 00
001534: 64 00 20 03 c8 00 38 ff 00 00 00 00 00 00 00 00
001544: 00 00 00 00 0e 00 ff 00 c8 00 e8 03
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x01 | 1 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x19 | 25 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x0d | 13 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0xff | 255 | NULL/UNUSED |
| unknown12 | 0x00 | 0 |  |
| str | 0x64 | 100 | Strength stat |
| spd | 0x00 | 0 |  |
| def | 0x20 | 32 | Defense stat |
| bal | 0x03 | 3 | Balance stat |
| sla | 0xc8 | 200 | Slash resistance |
| smh | 0x00 | 0 |  |
| pir | 0x38 | 56 | Pierce resistance |
| spr | 0xff | 255 | NULL/UNUSED |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x0e | 14 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0xff | 255 | NULL/UNUSED |
| unknown13 | 0x00 | 0 |  |
| dura | 0xc8 | 200 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xe8 | 232 |  |
| unknown16 | 0x03 | 3 |  |

### Item 124 (Offset 0x1550)

**Raw hex:**
```
001550: a4 06 b0 ff 00 00 00 00 00 00 00 00 00 00 00 00
001560: ff 00 ff 04 00 00 4c 04 58 02 1e 00 00 00 b6 03
001570: f4 01 00 00 00 00 00 00 ff 00 ff 04
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0xa4 | 164 |  |
| unknown2 | 0x06 | 6 |  |
| unknown3 | 0xb0 | 176 |  |
| unknown4 | 0xff | 255 | NULL/UNUSED |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0xff | 255 | NULL/UNUSED |
| spd | 0x00 | 0 |  |
| def | 0xff | 255 | NULL/UNUSED |
| bal | 0x04 | 4 | Balance stat |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x4c | 76 | Pierce resistance |
| spr | 0x04 | 4 | Spirit stat |
| foc | 0x58 | 88 | Focus stat |
| ham | 0x02 | 2 | Hammer stat |
| pur | 0x1e | 30 | Purity stat |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0xb6 | 182 | HP bonus |
| attribute1_value | 0x03 | 3 |  |
| attribute1_type | 0xf4 | 244 |  |
| attribute2_value | 0x01 | 1 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0xff | 255 | NULL/UNUSED |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xff | 255 | NULL/UNUSED |
| unknown16 | 0x04 | 4 |  |

### Item 125 (Offset 0x157c)

**Raw hex:**
```
00157c: 00 00 f4 01 58 02 1e 00 00 00 bc 02 2c 01 00 00
00158c: 00 00 00 00 ff 00 ff 00 58 02 84 03 20 03 00 00
00159c: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xf4 | 244 |  |
| unknown4 | 0x01 | 1 |  |
| texture_index_1 | 0x58 | 88 |  |
| texture_index_2 | 0x02 | 2 |  |
| unknown5 | 0x1e | 30 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xbc | 188 |  |
| unknown9 | 0x02 | 2 |  |
| unknown10 | 0x2c | 44 |  |
| hand_type | 0x01 | 1 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0xff | 255 | NULL/UNUSED |
| smh | 0x00 | 0 |  |
| pir | 0xff | 255 | NULL/UNUSED |
| spr | 0x00 | 0 |  |
| foc | 0x58 | 88 | Focus stat |
| ham | 0x02 | 2 | Hammer stat |
| pur | 0x84 | 132 | Purity stat |
| par | 0x03 | 3 | Parry stat |
| mel | 0x20 | 32 | Melee power |
| sol | 0x03 | 3 | Holy/Solomon stat |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 126 (Offset 0x15a8)

**Raw hex:**
```
0015a8: ff 00 ff 04 00 00 84 03 58 02 00 00 00 00 c2 01
0015b8: 96 00 00 00 00 00 00 00 ff 00 ff 04 00 00 84 03
0015c8: 20 03 00 00 00 00 c2 01 96 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0xff | 255 | NULL/UNUSED |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xff | 255 | NULL/UNUSED |
| unknown4 | 0x04 | 4 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x84 | 132 |  |
| type | 0x03 | 3 | HELMET |
| unknown6 | 0x58 | 88 |  |
| unknown7 | 0x02 | 2 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0xc2 | 194 |  |
| unknown12 | 0x01 | 1 |  |
| str | 0x96 | 150 | Strength stat |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0xff | 255 | NULL/UNUSED |
| ham | 0x00 | 0 |  |
| pur | 0xff | 255 | NULL/UNUSED |
| par | 0x04 | 4 | Parry stat |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x84 | 132 | HP bonus |
| attribute1_value | 0x03 | 3 |  |
| attribute1_type | 0x20 | 32 |  |
| attribute2_value | 0x03 | 3 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0xc2 | 194 |  |
| unknown13 | 0x01 | 1 |  |
| dura | 0x96 | 150 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 127 (Offset 0x15d4)

**Raw hex:**
```
0015d4: 00 00 00 00 ff 00 ff 00 90 01 84 03 20 03 00 00
0015e4: 00 00 00 00 00 00 00 00 00 00 00 00 ff 00 ff 04
0015f4: 00 00 84 03 2c 01 00 00 00 00 c2 01
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0xff | 255 | NULL/UNUSED |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0xff | 255 | NULL/UNUSED |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x90 | 144 |  |
| unknown7 | 0x01 | 1 |  |
| unknown8 | 0x84 | 132 |  |
| unknown9 | 0x03 | 3 |  |
| unknown10 | 0x20 | 32 |  |
| hand_type | 0x03 | 3 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0xff | 255 | NULL/UNUSED |
| sol | 0x00 | 0 |  |
| hp | 0xff | 255 | NULL/UNUSED |
| attribute1_value | 0x04 | 4 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x84 | 132 |  |
| elemental_type | 0x03 | 3 |  |
| elemental_power | 0x2c | 44 |  |
| max_dura | 0x01 | 1 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xc2 | 194 |  |
| unknown16 | 0x01 | 1 |  |

### Item 128 (Offset 0x1600)

**Raw hex:**
```
001600: 46 00 00 00 00 00 00 00 ff 00 ff 00 64 00 84 03
001610: 96 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
001620: ff 00 ff 00 58 02 f4 01 2c 01 4c ff
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x46 | 70 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0xff | 255 | NULL/UNUSED |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xff | 255 | NULL/UNUSED |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x64 | 100 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x84 | 132 |  |
| unknown12 | 0x03 | 3 |  |
| str | 0x96 | 150 | Strength stat |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0xff | 255 | NULL/UNUSED |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xff | 255 | NULL/UNUSED |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x58 | 88 |  |
| max_dura | 0x02 | 2 | Max durability |
| weight | 0xf4 | 244 |  |
| unknown13 | 0x01 | 1 |  |
| dura | 0x2c | 44 | Current durability |
| unknown14 | 0x01 | 1 |  |
| unknown15 | 0x4c | 76 |  |
| unknown16 | 0xff | 255 | NULL/UNUSED |

### Item 129 (Offset 0x162c)

**Raw hex:**
```
00162c: 00 00 00 00 00 00 00 00 00 00 00 00 ff 00 ff 00
00163c: e8 03 f4 01 2c 01 88 ff 00 00 00 00 00 00 00 00
00164c: 00 00 00 00 ff 00 ff 00 00 00 00 00
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0xff | 255 | NULL/UNUSED |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0xff | 255 | NULL/UNUSED |
| unknown12 | 0x00 | 0 |  |
| str | 0xe8 | 232 | Strength stat |
| spd | 0x03 | 3 | Speed stat |
| def | 0xf4 | 244 | Defense stat |
| bal | 0x01 | 1 | Balance stat |
| sla | 0x2c | 44 | Slash resistance |
| smh | 0x01 | 1 | Smash resistance |
| pir | 0x88 | 136 | Pierce resistance |
| spr | 0xff | 255 | NULL/UNUSED |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0xff | 255 | NULL/UNUSED |
| max_dura | 0x00 | 0 |  |
| weight | 0xff | 255 | NULL/UNUSED |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 131 (Offset 0x1684)

**Raw hex:**
```
001684: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
001694: 00 00 00 00 32 00 ff 00 c8 00 00 00 c8 00 1e 00
0016a4: 00 00 00 00 00 00 00 00 00 00 00 00
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x32 | 50 | Slash resistance |
| smh | 0x00 | 0 |  |
| pir | 0xff | 255 | NULL/UNUSED |
| spr | 0x00 | 0 |  |
| foc | 0xc8 | 200 | Focus stat |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0xc8 | 200 | Melee power |
| sol | 0x00 | 0 |  |
| hp | 0x1e | 30 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 133 (Offset 0x16dc)

**Raw hex:**
```
0016dc: 00 00 00 00 ff 00 ff 00 00 00 00 00 00 00 00 00
0016ec: 00 00 00 00 00 00 00 00 00 00 00 00 09 00 ff 02
0016fc: 00 07 00 0b f4 01 00 00 02 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0xff | 255 | NULL/UNUSED |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0xff | 255 | NULL/UNUSED |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x09 | 9 | Melee power |
| sol | 0x00 | 0 |  |
| hp | 0xff | 255 | NULL/UNUSED |
| attribute1_value | 0x02 | 2 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x07 | 7 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x0b | 11 |  |
| elemental_power | 0xf4 | 244 |  |
| max_dura | 0x01 | 1 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x02 | 2 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 134 (Offset 0x1708)

**Raw hex:**
```
001708: 00 00 00 00 00 00 00 00 ff 00 ff 00 00 00 00 00
001718: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
001728: 09 00 ff 00 5e 01 8a 02 14 05 00 00
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0xff | 255 | NULL/UNUSED |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xff | 255 | NULL/UNUSED |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x09 | 9 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xff | 255 | NULL/UNUSED |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x5e | 94 |  |
| max_dura | 0x01 | 1 | Max durability |
| weight | 0x8a | 138 |  |
| unknown13 | 0x02 | 2 |  |
| dura | 0x14 | 20 | Current durability |
| unknown14 | 0x05 | 5 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 135 (Offset 0x1734)

**Raw hex:**
```
001734: 00 00 00 00 00 00 00 00 00 00 00 00 ff 00 ff 00
001744: 00 00 b0 04 f4 01 00 00 00 00 00 00 00 00 00 00
001754: 00 00 00 00 33 00 ff 00 00 00 00 08
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0xff | 255 | NULL/UNUSED |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0xff | 255 | NULL/UNUSED |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0xb0 | 176 | Defense stat |
| bal | 0x04 | 4 | Balance stat |
| sla | 0xf4 | 244 | Slash resistance |
| smh | 0x01 | 1 | Smash resistance |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x33 | 51 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0xff | 255 | NULL/UNUSED |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x08 | 8 |  |

### Item 136 (Offset 0x1760)

**Raw hex:**
```
001760: 00 04 00 00 00 00 00 00 00 00 00 00 00 00 00 00
001770: e2 00 ff 08 00 00 00 08 00 06 00 00 00 00 00 00
001780: 00 00 00 00 00 00 00 00 ec 00 ff 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x04 | 4 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0xe2 | 226 | Strength stat |
| spd | 0x00 | 0 |  |
| def | 0xff | 255 | NULL/UNUSED |
| bal | 0x08 | 8 | Balance stat |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x08 | 8 | Spirit stat |
| foc | 0x00 | 0 |  |
| ham | 0x06 | 6 | Hammer stat |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0xec | 236 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xff | 255 | NULL/UNUSED |
| unknown16 | 0x00 | 0 |  |

### Item 137 (Offset 0x178c)

**Raw hex:**
```
00178c: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
00179c: 00 00 00 00 e0 00 ff 00 00 00 00 00 00 00 00 00
0017ac: 00 00 00 00 00 00 00 00 00 00 00 00
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0xe0 | 224 | Slash resistance |
| smh | 0x00 | 0 |  |
| pir | 0xff | 255 | NULL/UNUSED |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 138 (Offset 0x17b8)

**Raw hex:**
```
0017b8: ef 00 ff 00 00 00 00 00 00 00 00 00 00 00 00 00
0017c8: 00 00 00 00 00 00 00 00 1f 00 ff 00 00 00 00 00
0017d8: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0xef | 239 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xff | 255 | NULL/UNUSED |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x1f | 31 | Focus stat |
| ham | 0x00 | 0 |  |
| pur | 0xff | 255 | NULL/UNUSED |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 139 (Offset 0x17e4)

**Raw hex:**
```
0017e4: 00 00 00 00 ff 00 ff 00 00 00 00 00 00 00 00 00
0017f4: 00 00 00 00 00 00 00 00 00 00 00 00 ff 00 ff 00
001804: 00 00 00 00 00 00 38 ff 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0xff | 255 | NULL/UNUSED |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0xff | 255 | NULL/UNUSED |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0xff | 255 | NULL/UNUSED |
| sol | 0x00 | 0 |  |
| hp | 0xff | 255 | NULL/UNUSED |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x38 | 56 |  |
| unknown13 | 0xff | 255 | NULL/UNUSED |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 140 (Offset 0x1810)

**Raw hex:**
```
001810: 00 00 00 00 00 00 00 00 18 00 ff 04 00 00 78 05
001820: 00 05 00 00 00 00 c8 00 2c 01 00 00 00 00 00 00
001830: 1a 00 ff 00 00 00 78 05 00 05 64 00
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x18 | 24 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xff | 255 | NULL/UNUSED |
| unknown9 | 0x04 | 4 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x78 | 120 |  |
| unknown12 | 0x05 | 5 |  |
| str | 0x00 | 0 |  |
| spd | 0x05 | 5 | Speed stat |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0xc8 | 200 | Pierce resistance |
| spr | 0x00 | 0 |  |
| foc | 0x2c | 44 | Focus stat |
| ham | 0x01 | 1 | Hammer stat |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x1a | 26 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xff | 255 | NULL/UNUSED |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x78 | 120 |  |
| unknown13 | 0x05 | 5 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x05 | 5 |  |
| unknown15 | 0x64 | 100 |  |
| unknown16 | 0x00 | 0 |  |

### Item 141 (Offset 0x183c)

**Raw hex:**
```
00183c: 00 00 00 00 00 00 00 00 00 00 00 00 53 00 ff 00
00184c: 00 00 20 03 20 03 38 ff 00 00 00 20 00 00 00 00
00185c: 00 00 00 00 53 00 ff 00 00 00 20 03
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x53 | 83 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0xff | 255 | NULL/UNUSED |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x20 | 32 | Defense stat |
| bal | 0x03 | 3 | Balance stat |
| sla | 0x20 | 32 | Slash resistance |
| smh | 0x03 | 3 | Smash resistance |
| pir | 0x38 | 56 | Pierce resistance |
| spr | 0xff | 255 | NULL/UNUSED |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x20 | 32 | Parry stat |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x53 | 83 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0xff | 255 | NULL/UNUSED |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x20 | 32 |  |
| unknown16 | 0x03 | 3 |  |

### Item 142 (Offset 0x1868)

**Raw hex:**
```
001868: 20 03 38 ff 00 00 00 20 00 00 00 00 00 00 00 00
001878: ff 00 ff 00 00 05 a0 05 a0 0f 38 ff 00 00 00 00
001888: 00 00 00 00 00 00 00 00 ff 00 ff 50
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x20 | 32 |  |
| unknown2 | 0x03 | 3 |  |
| unknown3 | 0x38 | 56 |  |
| unknown4 | 0xff | 255 | NULL/UNUSED |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x20 | 32 | Type 32 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0xff | 255 | NULL/UNUSED |
| spd | 0x00 | 0 |  |
| def | 0xff | 255 | NULL/UNUSED |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x05 | 5 | Smash resistance |
| pir | 0xa0 | 160 | Pierce resistance |
| spr | 0x05 | 5 | Spirit stat |
| foc | 0xa0 | 160 | Focus stat |
| ham | 0x0f | 15 | Hammer stat |
| pur | 0x38 | 56 | Purity stat |
| par | 0xff | 255 | NULL/UNUSED |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0xff | 255 | NULL/UNUSED |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xff | 255 | NULL/UNUSED |
| unknown16 | 0x50 | 80 |  |

### Item 143 (Offset 0x1894)

**Raw hex:**
```
001894: 90 01 00 00 98 08 00 00 00 00 00 00 00 00 00 00
0018a4: 00 00 00 00 ff 00 ff 04 00 00 00 00 64 00 00 00
0018b4: 00 00 1a 04 90 01 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x90 | 144 |  |
| unknown2 | 0x01 | 1 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x98 | 152 |  |
| texture_index_2 | 0x08 | 8 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0xff | 255 | NULL/UNUSED |
| smh | 0x00 | 0 |  |
| pir | 0xff | 255 | NULL/UNUSED |
| spr | 0x04 | 4 | Spirit stat |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x64 | 100 | Melee power |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x1a | 26 |  |
| elemental_type | 0x04 | 4 |  |
| elemental_power | 0x90 | 144 |  |
| max_dura | 0x01 | 1 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 144 (Offset 0x18c0)

**Raw hex:**
```
0018c0: f0 00 ff 00 00 00 00 00 00 00 00 00 00 00 00 00
0018d0: 00 00 00 00 00 00 00 00 f0 00 ff 00 00 00 00 00
0018e0: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0xf0 | 240 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xff | 255 | NULL/UNUSED |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0xf0 | 240 | Focus stat |
| ham | 0x00 | 0 |  |
| pur | 0xff | 255 | NULL/UNUSED |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 145 (Offset 0x18ec)

**Raw hex:**
```
0018ec: 00 00 00 00 f0 00 ff 00 00 00 00 00 00 00 00 00
0018fc: 00 00 00 00 00 00 00 00 00 00 00 00 f2 00 ff 00
00190c: 00 00 00 00 00 00 00 00 00 00 00 00
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
| unknown5 | 0xff | 255 | NULL/UNUSED |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0xf2 | 242 | Melee power |
| sol | 0x00 | 0 |  |
| hp | 0xff | 255 | NULL/UNUSED |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 146 (Offset 0x1918)

**Raw hex:**
```
001918: 00 00 00 00 00 00 00 00 f2 00 ff 00 00 00 00 00
001928: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
001938: f2 00 ff 00 00 00 00 00 00 00 00 00
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0xf2 | 242 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xff | 255 | NULL/UNUSED |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0xf2 | 242 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xff | 255 | NULL/UNUSED |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 147 (Offset 0x1944)

**Raw hex:**
```
001944: 00 00 00 00 00 00 00 00 00 00 00 00 f2 00 ff 00
001954: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
001964: 00 00 00 00 f2 00 ff 00 00 00 00 00
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0xf2 | 242 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0xff | 255 | NULL/UNUSED |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0xf2 | 242 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0xff | 255 | NULL/UNUSED |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 148 (Offset 0x1970)

**Raw hex:**
```
001970: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
001980: f2 00 ff 00 00 00 00 00 00 00 00 00 00 00 00 00
001990: 00 00 00 00 00 00 00 00 f2 00 ff 00
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0xf2 | 242 | Strength stat |
| spd | 0x00 | 0 |  |
| def | 0xff | 255 | NULL/UNUSED |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0xf2 | 242 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xff | 255 | NULL/UNUSED |
| unknown16 | 0x00 | 0 |  |

### Item 149 (Offset 0x199c)

**Raw hex:**
```
00199c: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
0019ac: 00 00 00 00 f2 00 ff 00 00 00 00 00 00 00 00 00
0019bc: 00 00 00 00 00 00 00 00 00 00 00 00
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0xf2 | 242 | Slash resistance |
| smh | 0x00 | 0 |  |
| pir | 0xff | 255 | NULL/UNUSED |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 150 (Offset 0x19c8)

**Raw hex:**
```
0019c8: f2 00 ff 00 00 00 00 00 00 00 00 00 00 00 00 00
0019d8: 00 00 00 00 00 00 00 00 f2 00 ff 00 00 00 00 00
0019e8: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0xf2 | 242 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xff | 255 | NULL/UNUSED |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0xf2 | 242 | Focus stat |
| ham | 0x00 | 0 |  |
| pur | 0xff | 255 | NULL/UNUSED |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 151 (Offset 0x19f4)

**Raw hex:**
```
0019f4: 00 00 00 00 f2 00 ff 00 00 00 00 00 00 00 00 00
001a04: 00 00 00 00 00 00 00 00 00 00 00 00 f2 00 ff 00
001a14: 00 00 00 00 00 00 00 00 00 00 00 00
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
| unknown5 | 0xff | 255 | NULL/UNUSED |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0xf2 | 242 | Melee power |
| sol | 0x00 | 0 |  |
| hp | 0xff | 255 | NULL/UNUSED |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 152 (Offset 0x1a20)

**Raw hex:**
```
001a20: 00 00 00 00 00 00 00 00 f2 00 ff 00 00 00 00 00
001a30: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
001a40: e0 00 ff 00 00 00 00 00 00 00 00 00
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0xf2 | 242 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xff | 255 | NULL/UNUSED |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0xe0 | 224 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xff | 255 | NULL/UNUSED |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 153 (Offset 0x1a4c)

**Raw hex:**
```
001a4c: 00 00 00 00 00 00 00 00 00 00 00 00 e7 00 ff 00
001a5c: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
001a6c: 00 00 00 00 e3 00 ff 00 00 00 00 00
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0xe7 | 231 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0xff | 255 | NULL/UNUSED |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0xe3 | 227 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0xff | 255 | NULL/UNUSED |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 154 (Offset 0x1a78)

**Raw hex:**
```
001a78: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
001a88: 1f 00 ff 00 00 00 00 00 00 00 00 00 00 00 00 00
001a98: 00 00 00 00 00 00 00 00 e1 00 ff 00
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x1f | 31 | Strength stat |
| spd | 0x00 | 0 |  |
| def | 0xff | 255 | NULL/UNUSED |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0xe1 | 225 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xff | 255 | NULL/UNUSED |
| unknown16 | 0x00 | 0 |  |

### Item 155 (Offset 0x1aa4)

**Raw hex:**
```
001aa4: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
001ab4: 00 00 00 00 e4 00 ff 00 00 00 00 00 00 00 00 00
001ac4: 00 00 00 00 00 00 00 00 00 00 00 00
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0xe4 | 228 | Slash resistance |
| smh | 0x00 | 0 |  |
| pir | 0xff | 255 | NULL/UNUSED |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 156 (Offset 0x1ad0)

**Raw hex:**
```
001ad0: ff 00 ff 00 00 00 00 00 00 00 00 00 00 00 00 00
001ae0: 00 00 00 00 00 00 00 00 e6 00 ff 00 00 00 00 00
001af0: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0xff | 255 | NULL/UNUSED |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xff | 255 | NULL/UNUSED |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0xe6 | 230 | Focus stat |
| ham | 0x00 | 0 |  |
| pur | 0xff | 255 | NULL/UNUSED |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 157 (Offset 0x1afc)

**Raw hex:**
```
001afc: 00 00 00 00 e9 00 ff 00 ee 02 00 00 00 20 00 00
001b0c: 00 00 00 00 00 00 00 00 00 00 00 00 ea 00 ff 00
001b1c: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0xe9 | 233 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0xff | 255 | NULL/UNUSED |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0xee | 238 |  |
| unknown7 | 0x02 | 2 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x20 | 32 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0xea | 234 | Melee power |
| sol | 0x00 | 0 |  |
| hp | 0xff | 255 | NULL/UNUSED |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 158 (Offset 0x1b28)

**Raw hex:**
```
001b28: 00 00 00 00 00 00 00 00 25 00 ff 00 00 00 00 00
001b38: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
001b48: e9 00 ff 00 08 02 00 00 00 10 00 00
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x25 | 37 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xff | 255 | NULL/UNUSED |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0xe9 | 233 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xff | 255 | NULL/UNUSED |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x08 | 8 |  |
| max_dura | 0x02 | 2 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x10 | 16 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 162 (Offset 0x1bd8)

**Raw hex:**
```
001bd8: e2 00 ff 00 00 00 00 00 00 00 00 00 00 00 00 00
001be8: 00 00 00 00 00 00 00 00 15 00 ff 00 00 00 78 05
001bf8: d0 07 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0xe2 | 226 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xff | 255 | NULL/UNUSED |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x15 | 21 | Focus stat |
| ham | 0x00 | 0 |  |
| pur | 0xff | 255 | NULL/UNUSED |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x78 | 120 | HP bonus |
| attribute1_value | 0x05 | 5 |  |
| attribute1_type | 0xd0 | 208 |  |
| attribute2_value | 0x07 | 7 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 163 (Offset 0x1c04)

**Raw hex:**
```
001c04: 00 00 00 00 14 00 ff 00 00 00 78 05 e8 03 00 00
001c14: 00 00 00 00 00 00 00 00 00 00 00 00 ff 40 84 03
001c24: 00 01 8c 0a 00 09 00 00 40 01 e0 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x14 | 20 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0xff | 255 | NULL/UNUSED |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x78 | 120 |  |
| unknown9 | 0x05 | 5 |  |
| unknown10 | 0xe8 | 232 |  |
| hand_type | 0x03 | 3 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0xff | 255 | NULL/UNUSED |
| sol | 0x40 | 64 | Holy/Solomon stat |
| hp | 0x84 | 132 | HP bonus |
| attribute1_value | 0x03 | 3 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x01 | 1 |  |
| attribute2_type | 0x8c | 140 |  |
| elemental_type | 0x0a | 10 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x09 | 9 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x40 | 64 | Current durability |
| unknown14 | 0x01 | 1 |  |
| unknown15 | 0xe0 | 224 |  |
| unknown16 | 0x00 | 0 |  |

### Item 164 (Offset 0x1c30)

**Raw hex:**
```
001c30: 00 02 00 00 40 00 20 07 00 00 00 00 ff 40 c0 03
001c40: 00 01 8c 0a 00 09 00 00 40 01 e0 00 00 02 00 00
001c50: 40 00 20 07 00 00 00 00 ff 40 e2 04
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x02 | 2 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x40 | 64 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x20 | 32 |  |
| type | 0x07 | 7 | KEY |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0xff | 255 | NULL/UNUSED |
| hand_type | 0x40 | 64 | 6=one-hand, 7=two-hand |
| unknown11 | 0xc0 | 192 |  |
| unknown12 | 0x03 | 3 |  |
| str | 0x00 | 0 |  |
| spd | 0x01 | 1 | Speed stat |
| def | 0x8c | 140 | Defense stat |
| bal | 0x0a | 10 | Balance stat |
| sla | 0x00 | 0 |  |
| smh | 0x09 | 9 | Smash resistance |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x40 | 64 | Focus stat |
| ham | 0x01 | 1 | Hammer stat |
| pur | 0xe0 | 224 | Purity stat |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x02 | 2 | Holy/Solomon stat |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x40 | 64 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x20 | 32 |  |
| elemental_type | 0x07 | 7 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0xff | 255 | NULL/UNUSED |
| unknown14 | 0x40 | 64 |  |
| unknown15 | 0xe2 | 226 |  |
| unknown16 | 0x04 | 4 |  |

### Item 165 (Offset 0x1c5c)

**Raw hex:**
```
001c5c: 00 01 e4 0c 80 0a 00 00 60 01 e0 00 00 02 00 00
001c6c: 00 00 80 07 00 00 00 00 ff 40 ba 04 00 01 e4 0c
001c7c: 80 0a 00 00 60 01 e0 00 00 02 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x01 | 1 |  |
| unknown3 | 0xe4 | 228 |  |
| unknown4 | 0x0c | 12 |  |
| texture_index_1 | 0x80 | 128 |  |
| texture_index_2 | 0x0a | 10 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x60 | 96 |  |
| unknown7 | 0x01 | 1 |  |
| unknown8 | 0xe0 | 224 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x02 | 2 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x80 | 128 | Defense stat |
| bal | 0x07 | 7 | Balance stat |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0xff | 255 | NULL/UNUSED |
| ham | 0x40 | 64 | Hammer stat |
| pur | 0xba | 186 | Purity stat |
| par | 0x04 | 4 | Parry stat |
| mel | 0x00 | 0 |  |
| sol | 0x01 | 1 | Holy/Solomon stat |
| hp | 0xe4 | 228 | HP bonus |
| attribute1_value | 0x0c | 12 |  |
| attribute1_type | 0x80 | 128 |  |
| attribute2_value | 0x0a | 10 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x60 | 96 |  |
| max_dura | 0x01 | 1 | Max durability |
| weight | 0xe0 | 224 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x02 | 2 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 166 (Offset 0x1c88)

**Raw hex:**
```
001c88: 00 00 80 07 00 00 00 00 ff 40 14 05 c0 00 3a 07
001c98: 00 06 00 00 60 01 e0 00 00 02 00 00 40 00 c0 07
001ca8: 00 00 00 00 ff 40 32 05 00 01 e4 0c
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x80 | 128 |  |
| unknown4 | 0x07 | 7 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0xff | 255 | NULL/UNUSED |
| unknown7 | 0x40 | 64 |  |
| unknown8 | 0x14 | 20 |  |
| unknown9 | 0x05 | 5 |  |
| unknown10 | 0xc0 | 192 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x3a | 58 |  |
| unknown12 | 0x07 | 7 |  |
| str | 0x00 | 0 |  |
| spd | 0x06 | 6 | Speed stat |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x60 | 96 | Slash resistance |
| smh | 0x01 | 1 | Smash resistance |
| pir | 0xe0 | 224 | Pierce resistance |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x02 | 2 | Hammer stat |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x40 | 64 | Melee power |
| sol | 0x00 | 0 |  |
| hp | 0xc0 | 192 | HP bonus |
| attribute1_value | 0x07 | 7 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0xff | 255 | NULL/UNUSED |
| max_dura | 0x40 | 64 | Max durability |
| weight | 0x32 | 50 |  |
| unknown13 | 0x05 | 5 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x01 | 1 |  |
| unknown15 | 0xe4 | 228 |  |
| unknown16 | 0x0c | 12 |  |

### Item 167 (Offset 0x1cb4)

**Raw hex:**
```
001cb4: 80 0a 00 00 60 01 e0 00 00 02 00 00 00 00 80 07
001cc4: 00 00 00 00 ff 40 14 05 00 01 e4 0c 80 0a 00 00
001cd4: 60 01 e0 00 00 02 00 00 00 00 80 07
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x80 | 128 |  |
| unknown2 | 0x0a | 10 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x60 | 96 |  |
| texture_index_2 | 0x01 | 1 |  |
| unknown5 | 0xe0 | 224 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x02 | 2 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x80 | 128 |  |
| unknown12 | 0x07 | 7 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0xff | 255 | NULL/UNUSED |
| smh | 0x40 | 64 | Smash resistance |
| pir | 0x14 | 20 | Pierce resistance |
| spr | 0x05 | 5 | Spirit stat |
| foc | 0x00 | 0 |  |
| ham | 0x01 | 1 | Hammer stat |
| pur | 0xe4 | 228 | Purity stat |
| par | 0x0c | 12 | Parry stat |
| mel | 0x80 | 128 | Melee power |
| sol | 0x0a | 10 | Holy/Solomon stat |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x60 | 96 |  |
| attribute2_value | 0x01 | 1 |  |
| attribute2_type | 0xe0 | 224 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x02 | 2 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x80 | 128 |  |
| unknown16 | 0x07 | 7 |  |

### Item 168 (Offset 0x1ce0)

**Raw hex:**
```
001ce0: 00 00 00 00 ff 40 64 05 10 01 e4 0c 80 0a 00 00
001cf0: 60 01 e0 00 00 02 00 00 00 00 80 07 00 00 00 00
001d00: ff 40 ce 04 e0 00 be 0a 80 09 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0xff | 255 | NULL/UNUSED |
| texture_index_2 | 0x40 | 64 |  |
| unknown5 | 0x64 | 100 |  |
| type | 0x05 | 5 | ACCESSORY |
| unknown6 | 0x10 | 16 |  |
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
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x02 | 2 | Smash resistance |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x80 | 128 | Purity stat |
| par | 0x07 | 7 | Parry stat |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0xff | 255 | NULL/UNUSED |
| attribute2_value | 0x40 | 64 |  |
| attribute2_type | 0xce | 206 |  |
| elemental_type | 0x04 | 4 |  |
| elemental_power | 0xe0 | 224 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0xbe | 190 |  |
| unknown13 | 0x0a | 10 |  |
| dura | 0x80 | 128 | Current durability |
| unknown14 | 0x09 | 9 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 169 (Offset 0x1d0c)

**Raw hex:**
```
001d0c: 40 01 e0 00 00 02 00 00 40 00 20 07 00 00 00 00
001d1c: ff 40 b4 05 a0 00 1c 0c 00 0b 00 00 00 00 00 01
001d2c: 00 01 00 00 00 00 00 08 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x40 | 64 |  |
| unknown2 | 0x01 | 1 |  |
| unknown3 | 0xe0 | 224 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x02 | 2 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x40 | 64 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x20 | 32 |  |
| unknown9 | 0x07 | 7 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0xff | 255 | NULL/UNUSED |
| spd | 0x40 | 64 | Speed stat |
| def | 0xb4 | 180 | Defense stat |
| bal | 0x05 | 5 | Balance stat |
| sla | 0xa0 | 160 | Slash resistance |
| smh | 0x00 | 0 |  |
| pir | 0x1c | 28 | Pierce resistance |
| spr | 0x0c | 12 | Spirit stat |
| foc | 0x00 | 0 |  |
| ham | 0x0b | 11 | Hammer stat |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x01 | 1 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x01 | 1 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x08 | 8 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 170 (Offset 0x1d38)

**Raw hex:**
```
001d38: ff 40 46 05 b0 00 00 0c 00 0b 00 00 60 01 e0 00
001d48: 00 02 00 00 00 00 00 08 00 00 00 00 ff 40 8c 05
001d58: b0 00 80 0c 40 0b 00 00 60 01 e0 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0xff | 255 | NULL/UNUSED |
| unknown2 | 0x40 | 64 |  |
| unknown3 | 0x46 | 70 |  |
| unknown4 | 0x05 | 5 |  |
| texture_index_1 | 0xb0 | 176 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x0c | 12 | Type 12 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x0b | 11 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x60 | 96 |  |
| hand_type | 0x01 | 1 | 6=one-hand, 7=two-hand |
| unknown11 | 0xe0 | 224 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x02 | 2 | Speed stat |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x08 | 8 | Spirit stat |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0xff | 255 | NULL/UNUSED |
| sol | 0x40 | 64 | Holy/Solomon stat |
| hp | 0x8c | 140 | HP bonus |
| attribute1_value | 0x05 | 5 |  |
| attribute1_type | 0xb0 | 176 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x80 | 128 |  |
| elemental_type | 0x0c | 12 |  |
| elemental_power | 0x40 | 64 |  |
| max_dura | 0x0b | 11 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x60 | 96 | Current durability |
| unknown14 | 0x01 | 1 |  |
| unknown15 | 0xe0 | 224 |  |
| unknown16 | 0x00 | 0 |  |

### Item 171 (Offset 0x1d64)

**Raw hex:**
```
001d64: 00 02 00 00 00 00 00 08 00 00 00 00 ff 40 dc 05
001d74: b0 00 80 0c 40 0b 00 00 60 01 e0 00 00 02 00 00
001d84: 00 00 00 08 00 00 00 00 ff 40 fa 05
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
| unknown5 | 0x00 | 0 |  |
| type | 0x08 | 8 | Type 8 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0xff | 255 | NULL/UNUSED |
| hand_type | 0x40 | 64 | 6=one-hand, 7=two-hand |
| unknown11 | 0xdc | 220 |  |
| unknown12 | 0x05 | 5 |  |
| str | 0xb0 | 176 | Strength stat |
| spd | 0x00 | 0 |  |
| def | 0x80 | 128 | Defense stat |
| bal | 0x0c | 12 | Balance stat |
| sla | 0x40 | 64 | Slash resistance |
| smh | 0x0b | 11 | Smash resistance |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x60 | 96 | Focus stat |
| ham | 0x01 | 1 | Hammer stat |
| pur | 0xe0 | 224 | Purity stat |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x02 | 2 | Holy/Solomon stat |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x08 | 8 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0xff | 255 | NULL/UNUSED |
| unknown14 | 0x40 | 64 |  |
| unknown15 | 0xfa | 250 |  |
| unknown16 | 0x05 | 5 |  |

### Item 172 (Offset 0x1d90)

**Raw hex:**
```
001d90: b0 00 80 0c 40 0b 00 00 60 01 e0 00 00 02 00 00
001da0: 00 00 00 08 00 00 00 00 ff 40 b4 05 c0 00 80 0c
001db0: 40 0b 00 00 60 01 e0 00 00 02 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0xb0 | 176 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x80 | 128 |  |
| unknown4 | 0x0c | 12 |  |
| texture_index_1 | 0x40 | 64 |  |
| texture_index_2 | 0x0b | 11 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x60 | 96 |  |
| unknown7 | 0x01 | 1 |  |
| unknown8 | 0xe0 | 224 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x02 | 2 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x08 | 8 | Balance stat |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0xff | 255 | NULL/UNUSED |
| ham | 0x40 | 64 | Hammer stat |
| pur | 0xb4 | 180 | Purity stat |
| par | 0x05 | 5 | Parry stat |
| mel | 0xc0 | 192 | Melee power |
| sol | 0x00 | 0 |  |
| hp | 0x80 | 128 | HP bonus |
| attribute1_value | 0x0c | 12 |  |
| attribute1_type | 0x40 | 64 |  |
| attribute2_value | 0x0b | 11 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x60 | 96 |  |
| max_dura | 0x01 | 1 | Max durability |
| weight | 0xe0 | 224 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x02 | 2 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 173 (Offset 0x1dbc)

**Raw hex:**
```
001dbc: 00 00 00 08 00 00 00 00 ff 40 78 05 c0 00 4e 0c
001dcc: 00 0b 00 00 60 01 e0 00 00 02 00 00 00 00 00 08
001ddc: 00 00 00 00 ff 40 c8 05 c0 00 80 0c
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0xff | 255 | NULL/UNUSED |
| unknown7 | 0x40 | 64 |  |
| unknown8 | 0x78 | 120 |  |
| unknown9 | 0x05 | 5 |  |
| unknown10 | 0xc0 | 192 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x4e | 78 |  |
| unknown12 | 0x0c | 12 |  |
| str | 0x00 | 0 |  |
| spd | 0x0b | 11 | Speed stat |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x60 | 96 | Slash resistance |
| smh | 0x01 | 1 | Smash resistance |
| pir | 0xe0 | 224 | Pierce resistance |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x02 | 2 | Hammer stat |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x08 | 8 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0xff | 255 | NULL/UNUSED |
| max_dura | 0x40 | 64 | Max durability |
| weight | 0xc8 | 200 |  |
| unknown13 | 0x05 | 5 |  |
| dura | 0xc0 | 192 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x80 | 128 |  |
| unknown16 | 0x0c | 12 |  |

### Item 174 (Offset 0x1de8)

**Raw hex:**
```
001de8: 40 0b 00 00 60 01 e0 00 00 02 00 00 00 00 00 08
001df8: 00 00 00 00 ff 40 9a 06 a0 00 10 0e 00 0d 00 00
001e08: 00 00 e0 00 a0 01 00 00 00 00 00 08
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x02 | 2 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x08 | 8 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0xff | 255 | NULL/UNUSED |
| smh | 0x40 | 64 | Smash resistance |
| pir | 0x9a | 154 | Pierce resistance |
| spr | 0x06 | 6 | Spirit stat |
| foc | 0xa0 | 160 | Focus stat |
| ham | 0x00 | 0 |  |
| pur | 0x10 | 16 | Purity stat |
| par | 0x0e | 14 | Parry stat |
| mel | 0x00 | 0 |  |
| sol | 0x0d | 13 | Holy/Solomon stat |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xe0 | 224 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0xa0 | 160 |  |
| max_dura | 0x01 | 1 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x08 | 8 |  |

### Item 175 (Offset 0x1e14)

**Raw hex:**
```
001e14: 00 00 00 00 ff 40 4a 06 a0 00 10 0e 00 0d 00 00
001e24: 00 00 e0 00 a0 01 00 00 00 00 00 08 00 00 00 00
001e34: ff 40 68 06 30 01 f0 0a 00 09 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0xff | 255 | NULL/UNUSED |
| texture_index_2 | 0x40 | 64 |  |
| unknown5 | 0x4a | 74 |  |
| type | 0x06 | 6 | CONSUMABLE |
| unknown6 | 0xa0 | 160 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x10 | 16 |  |
| unknown9 | 0x0e | 14 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x0d | 13 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0xe0 | 224 | Defense stat |
| bal | 0x00 | 0 |  |
| sla | 0xa0 | 160 | Slash resistance |
| smh | 0x01 | 1 | Smash resistance |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x08 | 8 | Parry stat |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0xff | 255 | NULL/UNUSED |
| attribute2_value | 0x40 | 64 |  |
| attribute2_type | 0x68 | 104 |  |
| elemental_type | 0x06 | 6 |  |
| elemental_power | 0x30 | 48 |  |
| max_dura | 0x01 | 1 | Max durability |
| weight | 0xf0 | 240 |  |
| unknown13 | 0x0a | 10 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x09 | 9 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 176 (Offset 0x1e40)

**Raw hex:**
```
001e40: 40 01 40 01 e0 01 00 00 00 00 a0 07 00 00 00 00
001e50: ff 40 1e 05 30 01 f0 0a 00 09 00 00 40 01 40 01
001e60: e0 01 00 00 00 00 a0 07 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x40 | 64 |  |
| unknown2 | 0x01 | 1 |  |
| unknown3 | 0x40 | 64 |  |
| unknown4 | 0x01 | 1 |  |
| texture_index_1 | 0xe0 | 224 |  |
| texture_index_2 | 0x01 | 1 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xa0 | 160 |  |
| unknown9 | 0x07 | 7 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0xff | 255 | NULL/UNUSED |
| spd | 0x40 | 64 | Speed stat |
| def | 0x1e | 30 | Defense stat |
| bal | 0x05 | 5 | Balance stat |
| sla | 0x30 | 48 | Slash resistance |
| smh | 0x01 | 1 | Smash resistance |
| pir | 0xf0 | 240 | Pierce resistance |
| spr | 0x0a | 10 | Spirit stat |
| foc | 0x00 | 0 |  |
| ham | 0x09 | 9 | Hammer stat |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x40 | 64 | Melee power |
| sol | 0x01 | 1 | Holy/Solomon stat |
| hp | 0x40 | 64 | HP bonus |
| attribute1_value | 0x01 | 1 |  |
| attribute1_type | 0xe0 | 224 |  |
| attribute2_value | 0x01 | 1 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0xa0 | 160 |  |
| unknown13 | 0x07 | 7 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 177 (Offset 0x1e6c)

**Raw hex:**
```
001e6c: ff 40 28 05 30 01 f0 0a 00 09 00 00 40 01 40 01
001e7c: e0 01 00 00 00 00 a0 07 00 00 00 00 ff 40 60 04
001e8c: 00 01 f0 0a 00 09 00 00 40 01 40 01
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0xff | 255 | NULL/UNUSED |
| unknown2 | 0x40 | 64 |  |
| unknown3 | 0x28 | 40 |  |
| unknown4 | 0x05 | 5 |  |
| texture_index_1 | 0x30 | 48 |  |
| texture_index_2 | 0x01 | 1 |  |
| unknown5 | 0xf0 | 240 |  |
| type | 0x0a | 10 | Type 10 |
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
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0xa0 | 160 | Pierce resistance |
| spr | 0x07 | 7 | Spirit stat |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0xff | 255 | NULL/UNUSED |
| sol | 0x40 | 64 | Holy/Solomon stat |
| hp | 0x60 | 96 | HP bonus |
| attribute1_value | 0x04 | 4 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x01 | 1 |  |
| attribute2_type | 0xf0 | 240 |  |
| elemental_type | 0x0a | 10 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x09 | 9 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x40 | 64 | Current durability |
| unknown14 | 0x01 | 1 |  |
| unknown15 | 0x40 | 64 |  |
| unknown16 | 0x01 | 1 |  |

### Item 178 (Offset 0x1e98)

**Raw hex:**
```
001e98: e0 01 00 00 00 00 a0 07 00 00 00 00 ff 40 c0 03
001ea8: 00 01 f0 0a 00 09 00 00 40 01 40 01 e0 01 00 00
001eb8: 00 00 a0 07 00 00 00 00 ff 40 48 03
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0xe0 | 224 |  |
| unknown2 | 0x01 | 1 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0xa0 | 160 |  |
| type | 0x07 | 7 | KEY |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0xff | 255 | NULL/UNUSED |
| hand_type | 0x40 | 64 | 6=one-hand, 7=two-hand |
| unknown11 | 0xc0 | 192 |  |
| unknown12 | 0x03 | 3 |  |
| str | 0x00 | 0 |  |
| spd | 0x01 | 1 | Speed stat |
| def | 0xf0 | 240 | Defense stat |
| bal | 0x0a | 10 | Balance stat |
| sla | 0x00 | 0 |  |
| smh | 0x09 | 9 | Smash resistance |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x40 | 64 | Focus stat |
| ham | 0x01 | 1 | Hammer stat |
| pur | 0x40 | 64 | Purity stat |
| par | 0x01 | 1 | Parry stat |
| mel | 0xe0 | 224 | Melee power |
| sol | 0x01 | 1 | Holy/Solomon stat |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xa0 | 160 |  |
| elemental_type | 0x07 | 7 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0xff | 255 | NULL/UNUSED |
| unknown14 | 0x40 | 64 |  |
| unknown15 | 0x48 | 72 |  |
| unknown16 | 0x03 | 3 |  |

### Item 179 (Offset 0x1ec4)

**Raw hex:**
```
001ec4: 00 01 60 09 00 07 00 00 40 01 00 01 e0 01 00 00
001ed4: 40 01 00 08 00 00 00 00 ff 40 48 03 00 01 60 09
001ee4: 00 07 00 00 40 01 00 01 e0 01 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x01 | 1 |  |
| unknown3 | 0x60 | 96 |  |
| unknown4 | 0x09 | 9 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x07 | 7 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x40 | 64 |  |
| unknown7 | 0x01 | 1 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x01 | 1 |  |
| unknown10 | 0xe0 | 224 |  |
| hand_type | 0x01 | 1 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x40 | 64 | Strength stat |
| spd | 0x01 | 1 | Speed stat |
| def | 0x00 | 0 |  |
| bal | 0x08 | 8 | Balance stat |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0xff | 255 | NULL/UNUSED |
| ham | 0x40 | 64 | Hammer stat |
| pur | 0x48 | 72 | Purity stat |
| par | 0x03 | 3 | Parry stat |
| mel | 0x00 | 0 |  |
| sol | 0x01 | 1 | Holy/Solomon stat |
| hp | 0x60 | 96 | HP bonus |
| attribute1_value | 0x09 | 9 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x07 | 7 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x40 | 64 |  |
| max_dura | 0x01 | 1 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x01 | 1 |  |
| dura | 0xe0 | 224 | Current durability |
| unknown14 | 0x01 | 1 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 180 (Offset 0x1ef0)

**Raw hex:**
```
001ef0: 40 01 00 08 00 00 00 00 ff 40 98 03 e0 00 28 0a
001f00: 00 09 00 00 40 01 40 01 e0 01 00 00 00 00 80 07
001f10: 00 00 00 00 ff 40 c0 03 e0 00 28 0a
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x40 | 64 |  |
| unknown2 | 0x01 | 1 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x08 | 8 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0xff | 255 | NULL/UNUSED |
| unknown7 | 0x40 | 64 |  |
| unknown8 | 0x98 | 152 |  |
| unknown9 | 0x03 | 3 |  |
| unknown10 | 0xe0 | 224 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x28 | 40 |  |
| unknown12 | 0x0a | 10 |  |
| str | 0x00 | 0 |  |
| spd | 0x09 | 9 | Speed stat |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x40 | 64 | Slash resistance |
| smh | 0x01 | 1 | Smash resistance |
| pir | 0x40 | 64 | Pierce resistance |
| spr | 0x01 | 1 | Spirit stat |
| foc | 0xe0 | 224 | Focus stat |
| ham | 0x01 | 1 | Hammer stat |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x80 | 128 | HP bonus |
| attribute1_value | 0x07 | 7 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0xff | 255 | NULL/UNUSED |
| max_dura | 0x40 | 64 | Max durability |
| weight | 0xc0 | 192 |  |
| unknown13 | 0x03 | 3 |  |
| dura | 0xe0 | 224 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x28 | 40 |  |
| unknown16 | 0x0a | 10 |  |

### Item 181 (Offset 0x1f1c)

**Raw hex:**
```
001f1c: 00 09 00 00 40 01 40 01 e0 01 00 00 00 00 80 07
001f2c: 00 00 00 00 ff 40 ba 04 b0 00 c4 09 80 08 00 00
001f3c: 00 00 c0 00 20 01 00 00 40 00 e0 07
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
| type | 0x01 | 1 | WEAPON |
| unknown6 | 0xe0 | 224 |  |
| unknown7 | 0x01 | 1 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x80 | 128 |  |
| unknown12 | 0x07 | 7 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0xff | 255 | NULL/UNUSED |
| smh | 0x40 | 64 | Smash resistance |
| pir | 0xba | 186 | Pierce resistance |
| spr | 0x04 | 4 | Spirit stat |
| foc | 0xb0 | 176 | Focus stat |
| ham | 0x00 | 0 |  |
| pur | 0xc4 | 196 | Purity stat |
| par | 0x09 | 9 | Parry stat |
| mel | 0x80 | 128 | Melee power |
| sol | 0x08 | 8 | Holy/Solomon stat |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xc0 | 192 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x20 | 32 |  |
| max_dura | 0x01 | 1 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x40 | 64 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0xe0 | 224 |  |
| unknown16 | 0x07 | 7 |  |

### Item 182 (Offset 0x1f48)

**Raw hex:**
```
001f48: 00 00 00 00 ff 40 c2 06 b0 00 28 0a c0 08 00 00
001f58: 00 00 c0 00 20 01 00 00 40 00 e0 07 00 00 00 00
001f68: ff 40 e0 06 b0 00 28 0a c0 08 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0xff | 255 | NULL/UNUSED |
| texture_index_2 | 0x40 | 64 |  |
| unknown5 | 0xc2 | 194 |  |
| type | 0x06 | 6 | CONSUMABLE |
| unknown6 | 0xb0 | 176 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x28 | 40 |  |
| unknown9 | 0x0a | 10 |  |
| unknown10 | 0xc0 | 192 |  |
| hand_type | 0x08 | 8 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0xc0 | 192 | Defense stat |
| bal | 0x00 | 0 |  |
| sla | 0x20 | 32 | Slash resistance |
| smh | 0x01 | 1 | Smash resistance |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x40 | 64 | Focus stat |
| ham | 0x00 | 0 |  |
| pur | 0xe0 | 224 | Purity stat |
| par | 0x07 | 7 | Parry stat |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0xff | 255 | NULL/UNUSED |
| attribute2_value | 0x40 | 64 |  |
| attribute2_type | 0xe0 | 224 |  |
| elemental_type | 0x06 | 6 |  |
| elemental_power | 0xb0 | 176 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x28 | 40 |  |
| unknown13 | 0x0a | 10 |  |
| dura | 0xc0 | 192 | Current durability |
| unknown14 | 0x08 | 8 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 183 (Offset 0x1f74)

**Raw hex:**
```
001f74: 00 00 c0 00 20 01 00 00 40 00 e0 07 00 00 00 00
001f84: ff 40 00 00 60 00 00 0b 00 06 00 00 00 00 c0 03
001f94: 00 03 3e 00 80 00 00 08 00 00 3d 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0xc0 | 192 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x20 | 32 |  |
| texture_index_2 | 0x01 | 1 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x40 | 64 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0xe0 | 224 |  |
| unknown9 | 0x07 | 7 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0xff | 255 | NULL/UNUSED |
| spd | 0x40 | 64 | Speed stat |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x60 | 96 | Slash resistance |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x0b | 11 | Spirit stat |
| foc | 0x00 | 0 |  |
| ham | 0x06 | 6 | Hammer stat |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0xc0 | 192 | HP bonus |
| attribute1_value | 0x03 | 3 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x03 | 3 |  |
| attribute2_type | 0x3e | 62 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x80 | 128 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x08 | 8 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x3d | 61 |  |
| unknown16 | 0x00 | 0 |  |

### Item 184 (Offset 0x1fa0)

**Raw hex:**
```
001fa0: ff 00 00 00 60 00 00 0b 00 06 00 00 00 00 c0 03
001fb0: 00 03 04 00 80 00 00 08 00 00 03 00 ff 00 00 00
001fc0: 60 00 60 0c 00 01 00 00 e0 ff 60 03
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0xff | 255 | NULL/UNUSED |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x60 | 96 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x0b | 11 | Type 11 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x06 | 6 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0xc0 | 192 |  |
| unknown12 | 0x03 | 3 |  |
| str | 0x00 | 0 |  |
| spd | 0x03 | 3 | Speed stat |
| def | 0x04 | 4 | Defense stat |
| bal | 0x00 | 0 |  |
| sla | 0x80 | 128 | Slash resistance |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x08 | 8 | Spirit stat |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x03 | 3 | Purity stat |
| par | 0x00 | 0 |  |
| mel | 0xff | 255 | NULL/UNUSED |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x60 | 96 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x60 | 96 |  |
| elemental_type | 0x0c | 12 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x01 | 1 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0xe0 | 224 | Current durability |
| unknown14 | 0xff | 255 | NULL/UNUSED |
| unknown15 | 0x60 | 96 |  |
| unknown16 | 0x03 | 3 |  |

### Item 185 (Offset 0x1fcc)

**Raw hex:**
```
001fcc: 40 02 8e 00 00 00 00 08 00 00 91 00 ff 00 00 00
001fdc: 60 00 60 0c 00 01 00 00 e0 ff 60 03 40 02 7a 00
001fec: 00 00 00 08 00 00 7d 00 ff 40 ac 03
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x40 | 64 |  |
| unknown2 | 0x02 | 2 |  |
| unknown3 | 0x8e | 142 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x08 | 8 | Type 8 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x91 | 145 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0xff | 255 | NULL/UNUSED |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x60 | 96 | Strength stat |
| spd | 0x00 | 0 |  |
| def | 0x60 | 96 | Defense stat |
| bal | 0x0c | 12 | Balance stat |
| sla | 0x00 | 0 |  |
| smh | 0x01 | 1 | Smash resistance |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0xe0 | 224 | Focus stat |
| ham | 0xff | 255 | NULL/UNUSED |
| pur | 0x60 | 96 | Purity stat |
| par | 0x03 | 3 | Parry stat |
| mel | 0x40 | 64 | Melee power |
| sol | 0x02 | 2 | Holy/Solomon stat |
| hp | 0x7a | 122 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x08 | 8 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x7d | 125 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0xff | 255 | NULL/UNUSED |
| unknown14 | 0x40 | 64 |  |
| unknown15 | 0xac | 172 |  |
| unknown16 | 0x03 | 3 |  |

### Item 186 (Offset 0x1ff8)

**Raw hex:**
```
001ff8: a0 00 00 0e 00 04 00 00 c0 fe e0 00 a0 01 00 00
002008: 00 00 e0 07 00 00 00 00 ff 40 ac 03 b0 01 00 0e
002018: 00 04 00 00 e0 fe e0 00 a0 01 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0xa0 | 160 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x0e | 14 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x04 | 4 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0xc0 | 192 |  |
| unknown7 | 0xfe | 254 |  |
| unknown8 | 0xe0 | 224 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0xa0 | 160 |  |
| hand_type | 0x01 | 1 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0xe0 | 224 | Defense stat |
| bal | 0x07 | 7 | Balance stat |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0xff | 255 | NULL/UNUSED |
| ham | 0x40 | 64 | Hammer stat |
| pur | 0xac | 172 | Purity stat |
| par | 0x03 | 3 | Parry stat |
| mel | 0xb0 | 176 | Melee power |
| sol | 0x01 | 1 | Holy/Solomon stat |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x0e | 14 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x04 | 4 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0xe0 | 224 |  |
| max_dura | 0xfe | 254 | Max durability |
| weight | 0xe0 | 224 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0xa0 | 160 | Current durability |
| unknown14 | 0x01 | 1 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 187 (Offset 0x2024)

**Raw hex:**
```
002024: 80 0f c0 07 00 00 00 00 ff 40 ac 03 b0 01 00 0e
002034: 00 04 00 00 e0 fe e0 00 a0 01 00 00 80 0f c0 07
002044: 00 00 00 00 ff 40 ac 03 b0 01 00 0e
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x80 | 128 |  |
| unknown2 | 0x0f | 15 |  |
| unknown3 | 0xc0 | 192 |  |
| unknown4 | 0x07 | 7 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0xff | 255 | NULL/UNUSED |
| unknown7 | 0x40 | 64 |  |
| unknown8 | 0xac | 172 |  |
| unknown9 | 0x03 | 3 |  |
| unknown10 | 0xb0 | 176 |  |
| hand_type | 0x01 | 1 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x0e | 14 |  |
| str | 0x00 | 0 |  |
| spd | 0x04 | 4 | Speed stat |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0xe0 | 224 | Slash resistance |
| smh | 0xfe | 254 | Smash resistance |
| pir | 0xe0 | 224 | Pierce resistance |
| spr | 0x00 | 0 |  |
| foc | 0xa0 | 160 | Focus stat |
| ham | 0x01 | 1 | Hammer stat |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x80 | 128 | Melee power |
| sol | 0x0f | 15 | Holy/Solomon stat |
| hp | 0xc0 | 192 | HP bonus |
| attribute1_value | 0x07 | 7 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0xff | 255 | NULL/UNUSED |
| max_dura | 0x40 | 64 | Max durability |
| weight | 0xac | 172 |  |
| unknown13 | 0x03 | 3 |  |
| dura | 0xb0 | 176 | Current durability |
| unknown14 | 0x01 | 1 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x0e | 14 |  |

### Item 188 (Offset 0x2050)

**Raw hex:**
```
002050: 00 04 00 00 e0 fe e0 00 a0 01 00 00 80 0f c0 07
002060: 00 00 00 00 ff 40 ac 03 80 01 00 0e 00 04 00 00
002070: 00 ff 00 01 00 02 00 00 80 00 00 08
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x04 | 4 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0xe0 | 224 |  |
| texture_index_2 | 0xfe | 254 |  |
| unknown5 | 0xe0 | 224 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0xa0 | 160 |  |
| unknown7 | 0x01 | 1 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x80 | 128 |  |
| hand_type | 0x0f | 15 | 6=one-hand, 7=two-hand |
| unknown11 | 0xc0 | 192 |  |
| unknown12 | 0x07 | 7 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0xff | 255 | NULL/UNUSED |
| smh | 0x40 | 64 | Smash resistance |
| pir | 0xac | 172 | Pierce resistance |
| spr | 0x03 | 3 | Spirit stat |
| foc | 0x80 | 128 | Focus stat |
| ham | 0x01 | 1 | Hammer stat |
| pur | 0x00 | 0 |  |
| par | 0x0e | 14 | Parry stat |
| mel | 0x00 | 0 |  |
| sol | 0x04 | 4 | Holy/Solomon stat |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0xff | 255 | NULL/UNUSED |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x01 | 1 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x02 | 2 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x80 | 128 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x08 | 8 |  |

### Item 189 (Offset 0x207c)

**Raw hex:**
```
00207c: 00 00 00 00 ff 40 ac 03 80 01 00 0e 00 04 00 00
00208c: 00 ff 00 01 00 02 00 00 80 00 00 08 00 00 00 00
00209c: ff 40 ac 03 80 01 00 0e 00 04 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0xff | 255 | NULL/UNUSED |
| texture_index_2 | 0x40 | 64 |  |
| unknown5 | 0xac | 172 |  |
| type | 0x03 | 3 | HELMET |
| unknown6 | 0x80 | 128 |  |
| unknown7 | 0x01 | 1 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x0e | 14 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x04 | 4 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0xff | 255 | NULL/UNUSED |
| def | 0x00 | 0 |  |
| bal | 0x01 | 1 | Balance stat |
| sla | 0x00 | 0 |  |
| smh | 0x02 | 2 | Smash resistance |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x80 | 128 | Focus stat |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x08 | 8 | Parry stat |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0xff | 255 | NULL/UNUSED |
| attribute2_value | 0x40 | 64 |  |
| attribute2_type | 0xac | 172 |  |
| elemental_type | 0x03 | 3 |  |
| elemental_power | 0x80 | 128 |  |
| max_dura | 0x01 | 1 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x0e | 14 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x04 | 4 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 190 (Offset 0x20a8)

**Raw hex:**
```
0020a8: 00 ff 00 01 00 02 00 00 80 00 00 08 00 00 00 00
0020b8: ff 40 ac 03 80 01 00 0e 00 04 00 00 00 ff 00 01
0020c8: 00 02 00 00 80 00 00 08 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0xff | 255 | NULL/UNUSED |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x01 | 1 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x02 | 2 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x80 | 128 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x08 | 8 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0xff | 255 | NULL/UNUSED |
| spd | 0x40 | 64 | Speed stat |
| def | 0xac | 172 | Defense stat |
| bal | 0x03 | 3 | Balance stat |
| sla | 0x80 | 128 | Slash resistance |
| smh | 0x01 | 1 | Smash resistance |
| pir | 0x00 | 0 |  |
| spr | 0x0e | 14 | Spirit stat |
| foc | 0x00 | 0 |  |
| ham | 0x04 | 4 | Hammer stat |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0xff | 255 | NULL/UNUSED |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x01 | 1 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x02 | 2 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x80 | 128 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x08 | 8 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 191 (Offset 0x20d4)

**Raw hex:**
```
0020d4: ff 40 ac 03 80 01 00 0e 00 04 00 00 00 ff 00 01
0020e4: 00 02 00 00 80 00 80 08 00 00 00 00 ff 40 ac 03
0020f4: 50 01 00 0e 00 04 00 00 00 ff 00 01
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0xff | 255 | NULL/UNUSED |
| unknown2 | 0x40 | 64 |  |
| unknown3 | 0xac | 172 |  |
| unknown4 | 0x03 | 3 |  |
| texture_index_1 | 0x80 | 128 |  |
| texture_index_2 | 0x01 | 1 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x0e | 14 | Type 14 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x04 | 4 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0xff | 255 | NULL/UNUSED |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x01 | 1 |  |
| str | 0x00 | 0 |  |
| spd | 0x02 | 2 | Speed stat |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x80 | 128 | Slash resistance |
| smh | 0x00 | 0 |  |
| pir | 0x80 | 128 | Pierce resistance |
| spr | 0x08 | 8 | Spirit stat |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0xff | 255 | NULL/UNUSED |
| sol | 0x40 | 64 | Holy/Solomon stat |
| hp | 0xac | 172 | HP bonus |
| attribute1_value | 0x03 | 3 |  |
| attribute1_type | 0x50 | 80 |  |
| attribute2_value | 0x01 | 1 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x0e | 14 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x04 | 4 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0xff | 255 | NULL/UNUSED |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x01 | 1 |  |

### Item 192 (Offset 0x2100)

**Raw hex:**
```
002100: 00 02 00 00 c0 0f 00 08 00 00 00 00 ff 40 ac 03
002110: 50 01 00 0e 00 04 00 00 c0 fe 00 01 00 02 00 00
002120: 00 00 00 08 00 00 00 00 ff 40 ac 03
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x02 | 2 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0xc0 | 192 |  |
| texture_index_2 | 0x0f | 15 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x08 | 8 | Type 8 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0xff | 255 | NULL/UNUSED |
| hand_type | 0x40 | 64 | 6=one-hand, 7=two-hand |
| unknown11 | 0xac | 172 |  |
| unknown12 | 0x03 | 3 |  |
| str | 0x50 | 80 | Strength stat |
| spd | 0x01 | 1 | Speed stat |
| def | 0x00 | 0 |  |
| bal | 0x0e | 14 | Balance stat |
| sla | 0x00 | 0 |  |
| smh | 0x04 | 4 | Smash resistance |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0xc0 | 192 | Focus stat |
| ham | 0xfe | 254 | Hammer stat |
| pur | 0x00 | 0 |  |
| par | 0x01 | 1 | Parry stat |
| mel | 0x00 | 0 |  |
| sol | 0x02 | 2 | Holy/Solomon stat |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x08 | 8 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0xff | 255 | NULL/UNUSED |
| unknown14 | 0x40 | 64 |  |
| unknown15 | 0xac | 172 |  |
| unknown16 | 0x03 | 3 |  |

### Item 193 (Offset 0x212c)

**Raw hex:**
```
00212c: 50 01 00 0e 00 04 00 00 00 ff 00 01 00 02 00 00
00213c: a0 0f 00 08 00 00 00 00 ff 40 ac 03 80 01 00 0e
00214c: 00 04 00 00 e0 fe e0 00 a0 01 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x50 | 80 |  |
| unknown2 | 0x01 | 1 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x0e | 14 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x04 | 4 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0xff | 255 | NULL/UNUSED |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x01 | 1 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x02 | 2 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0xa0 | 160 | Strength stat |
| spd | 0x0f | 15 | Speed stat |
| def | 0x00 | 0 |  |
| bal | 0x08 | 8 | Balance stat |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0xff | 255 | NULL/UNUSED |
| ham | 0x40 | 64 | Hammer stat |
| pur | 0xac | 172 | Purity stat |
| par | 0x03 | 3 | Parry stat |
| mel | 0x80 | 128 | Melee power |
| sol | 0x01 | 1 | Holy/Solomon stat |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x0e | 14 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x04 | 4 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0xe0 | 224 |  |
| max_dura | 0xfe | 254 | Max durability |
| weight | 0xe0 | 224 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0xa0 | 160 | Current durability |
| unknown14 | 0x01 | 1 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 194 (Offset 0x2158)

**Raw hex:**
```
002158: 80 0f 80 07 00 00 00 00 ff 40 ac 03 68 01 00 0e
002168: 00 04 00 00 00 ff 00 01 00 02 00 00 80 00 80 08
002178: 00 00 00 00 ff 40 ac 03 68 01 00 0e
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x80 | 128 |  |
| unknown2 | 0x0f | 15 |  |
| unknown3 | 0x80 | 128 |  |
| unknown4 | 0x07 | 7 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0xff | 255 | NULL/UNUSED |
| unknown7 | 0x40 | 64 |  |
| unknown8 | 0xac | 172 |  |
| unknown9 | 0x03 | 3 |  |
| unknown10 | 0x68 | 104 |  |
| hand_type | 0x01 | 1 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x0e | 14 |  |
| str | 0x00 | 0 |  |
| spd | 0x04 | 4 | Speed stat |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0xff | 255 | NULL/UNUSED |
| pir | 0x00 | 0 |  |
| spr | 0x01 | 1 | Spirit stat |
| foc | 0x00 | 0 |  |
| ham | 0x02 | 2 | Hammer stat |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x80 | 128 | Melee power |
| sol | 0x00 | 0 |  |
| hp | 0x80 | 128 | HP bonus |
| attribute1_value | 0x08 | 8 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0xff | 255 | NULL/UNUSED |
| max_dura | 0x40 | 64 | Max durability |
| weight | 0xac | 172 |  |
| unknown13 | 0x03 | 3 |  |
| dura | 0x68 | 104 | Current durability |
| unknown14 | 0x01 | 1 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x0e | 14 |  |

### Item 195 (Offset 0x2184)

**Raw hex:**
```
002184: 00 04 00 00 00 ff 00 01 00 02 00 00 80 00 00 08
002194: 00 00 00 00 ff 40 ac 03 68 01 00 0e 00 04 00 00
0021a4: e0 fe e0 00 a0 01 00 00 80 0f c0 07
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x04 | 4 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0xff | 255 | NULL/UNUSED |
| unknown5 | 0x00 | 0 |  |
| type | 0x01 | 1 | WEAPON |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x02 | 2 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x80 | 128 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x08 | 8 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0xff | 255 | NULL/UNUSED |
| smh | 0x40 | 64 | Smash resistance |
| pir | 0xac | 172 | Pierce resistance |
| spr | 0x03 | 3 | Spirit stat |
| foc | 0x68 | 104 | Focus stat |
| ham | 0x01 | 1 | Hammer stat |
| pur | 0x00 | 0 |  |
| par | 0x0e | 14 | Parry stat |
| mel | 0x00 | 0 |  |
| sol | 0x04 | 4 | Holy/Solomon stat |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0xe0 | 224 |  |
| attribute2_value | 0xfe | 254 |  |
| attribute2_type | 0xe0 | 224 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0xa0 | 160 |  |
| max_dura | 0x01 | 1 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x80 | 128 | Current durability |
| unknown14 | 0x0f | 15 |  |
| unknown15 | 0xc0 | 192 |  |
| unknown16 | 0x07 | 7 |  |

### Item 196 (Offset 0x21b0)

**Raw hex:**
```
0021b0: 00 00 00 00 ff 40 ac 03 80 01 00 0e 00 04 00 00
0021c0: 00 ff 00 01 00 02 00 00 80 00 00 08 00 00 00 00
0021d0: ff 40 ac 03 98 01 00 0e 00 04 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0xff | 255 | NULL/UNUSED |
| texture_index_2 | 0x40 | 64 |  |
| unknown5 | 0xac | 172 |  |
| type | 0x03 | 3 | HELMET |
| unknown6 | 0x80 | 128 |  |
| unknown7 | 0x01 | 1 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x0e | 14 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x04 | 4 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0xff | 255 | NULL/UNUSED |
| def | 0x00 | 0 |  |
| bal | 0x01 | 1 | Balance stat |
| sla | 0x00 | 0 |  |
| smh | 0x02 | 2 | Smash resistance |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x80 | 128 | Focus stat |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x08 | 8 | Parry stat |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0xff | 255 | NULL/UNUSED |
| attribute2_value | 0x40 | 64 |  |
| attribute2_type | 0xac | 172 |  |
| elemental_type | 0x03 | 3 |  |
| elemental_power | 0x98 | 152 |  |
| max_dura | 0x01 | 1 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x0e | 14 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x04 | 4 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 197 (Offset 0x21dc)

**Raw hex:**
```
0021dc: 00 ff 00 01 00 02 00 00 c0 00 20 08 00 00 00 00
0021ec: ff 40 ac 03 98 01 00 0e 00 04 00 00 00 ff 00 01
0021fc: 00 02 00 00 80 00 20 08 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0xff | 255 | NULL/UNUSED |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x01 | 1 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x02 | 2 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0xc0 | 192 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x20 | 32 |  |
| unknown9 | 0x08 | 8 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0xff | 255 | NULL/UNUSED |
| spd | 0x40 | 64 | Speed stat |
| def | 0xac | 172 | Defense stat |
| bal | 0x03 | 3 | Balance stat |
| sla | 0x98 | 152 | Slash resistance |
| smh | 0x01 | 1 | Smash resistance |
| pir | 0x00 | 0 |  |
| spr | 0x0e | 14 | Spirit stat |
| foc | 0x00 | 0 |  |
| ham | 0x04 | 4 | Hammer stat |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0xff | 255 | NULL/UNUSED |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x01 | 1 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x02 | 2 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x80 | 128 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x20 | 32 |  |
| unknown13 | 0x08 | 8 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 198 (Offset 0x2208)

**Raw hex:**
```
002208: ff 40 ac 03 b0 01 00 0e 00 04 00 00 00 ff 00 01
002218: 00 02 00 00 c0 00 20 08 00 00 00 00 ff 00 00 00
002228: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0xff | 255 | NULL/UNUSED |
| unknown2 | 0x40 | 64 |  |
| unknown3 | 0xac | 172 |  |
| unknown4 | 0x03 | 3 |  |
| texture_index_1 | 0xb0 | 176 |  |
| texture_index_2 | 0x01 | 1 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x0e | 14 | Type 14 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x04 | 4 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0xff | 255 | NULL/UNUSED |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x01 | 1 |  |
| str | 0x00 | 0 |  |
| spd | 0x02 | 2 | Speed stat |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0xc0 | 192 | Slash resistance |
| smh | 0x00 | 0 |  |
| pir | 0x20 | 32 | Pierce resistance |
| spr | 0x08 | 8 | Spirit stat |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0xff | 255 | NULL/UNUSED |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 202 (Offset 0x22b8)

**Raw hex:**
```
0022b8: 00 00 00 00 00 00 c0 03 00 03 00 00 80 00 00 08
0022c8: 00 00 00 00 ff 00 00 00 00 00 00 00 00 00 00 00
0022d8: 00 00 c0 03 00 03 00 00 80 00 00 08
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
| unknown5 | 0xc0 | 192 |  |
| type | 0x03 | 3 | HELMET |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x03 | 3 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x80 | 128 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x08 | 8 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0xff | 255 | NULL/UNUSED |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0xc0 | 192 |  |
| elemental_type | 0x03 | 3 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x03 | 3 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x80 | 128 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x08 | 8 |  |

### Item 203 (Offset 0x22e4)

**Raw hex:**
```
0022e4: 00 00 00 00 ff 00 00 00 00 00 00 00 00 00 00 00
0022f4: e0 ff 60 03 40 02 00 00 00 00 00 08 00 00 00 00
002304: ff 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0xff | 255 | NULL/UNUSED |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0xe0 | 224 | Strength stat |
| spd | 0xff | 255 | NULL/UNUSED |
| def | 0x60 | 96 | Defense stat |
| bal | 0x03 | 3 | Balance stat |
| sla | 0x40 | 64 | Slash resistance |
| smh | 0x02 | 2 | Smash resistance |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x08 | 8 | Parry stat |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0xff | 255 | NULL/UNUSED |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 204 (Offset 0x2310)

**Raw hex:**
```
002310: e0 ff 60 03 40 02 00 00 00 00 00 08 00 00 00 00
002320: 00 0a 0e 00 04 00 02 00 00 00 00 00 00 00 00 00
002330: 00 00 00 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0xe0 | 224 |  |
| unknown2 | 0xff | 255 | NULL/UNUSED |
| unknown3 | 0x60 | 96 |  |
| unknown4 | 0x03 | 3 |  |
| texture_index_1 | 0x40 | 64 |  |
| texture_index_2 | 0x02 | 2 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x08 | 8 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x0a | 10 | Speed stat |
| def | 0x0e | 14 | Defense stat |
| bal | 0x00 | 0 |  |
| sla | 0x04 | 4 | Slash resistance |
| smh | 0x00 | 0 |  |
| pir | 0x02 | 2 | Pierce resistance |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 205 (Offset 0x233c)

**Raw hex:**
```
00233c: 8c 00 00 00 00 12 0c 00 06 00 0b 00 00 00 00 00
00234c: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
00235c: 08 02 00 00 00 19 12 00 0c 00 0a 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x8c | 140 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x12 | 18 |  |
| unknown5 | 0x0c | 12 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x06 | 6 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x0b | 11 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x08 | 8 |  |
| attribute2_value | 0x02 | 2 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x19 | 25 | Max durability |
| weight | 0x12 | 18 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x0c | 12 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x0a | 10 |  |
| unknown16 | 0x00 | 0 |  |

### Item 206 (Offset 0x2368)

**Raw hex:**
```
002368: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
002378: 00 00 00 00 d0 07 00 00 00 08 09 00 06 00 0e 00
002388: 00 00 0f 00 17 00 15 00 1a 00 18 00
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0xd0 | 208 | Slash resistance |
| smh | 0x07 | 7 | Smash resistance |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x08 | 8 | Hammer stat |
| pur | 0x09 | 9 | Purity stat |
| par | 0x00 | 0 |  |
| mel | 0x06 | 6 | Melee power |
| sol | 0x00 | 0 |  |
| hp | 0x0e | 14 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x0f | 15 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x17 | 23 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x15 | 21 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x1a | 26 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x18 | 24 |  |
| unknown16 | 0x00 | 0 |  |

### Item 207 (Offset 0x2394)

**Raw hex:**
```
002394: 00 00 00 00 00 00 00 00 90 10 00 00 00 0f 17 00
0023a4: 11 00 0e 00 00 00 00 00 00 00 00 00 00 00 00 00
0023b4: 00 00 00 00 00 00 00 00 90 10 00 00
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x90 | 144 |  |
| unknown7 | 0x10 | 16 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x0f | 15 | 6=one-hand, 7=two-hand |
| unknown11 | 0x17 | 23 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x11 | 17 | Strength stat |
| spd | 0x00 | 0 |  |
| def | 0x0e | 14 | Defense stat |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x90 | 144 | Current durability |
| unknown14 | 0x10 | 16 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 208 (Offset 0x23c0)

**Raw hex:**
```
0023c0: 00 37 15 00 0c 00 0a 00 00 00 00 00 0c 00 00 00
0023d0: 00 00 00 00 00 00 00 00 00 00 00 00 80 25 00 00
0023e0: 00 29 16 00 13 00 09 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x37 | 55 |  |
| unknown3 | 0x15 | 21 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x0c | 12 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x0a | 10 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x0c | 12 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x80 | 128 | Melee power |
| sol | 0x25 | 37 | Holy/Solomon stat |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x29 | 41 |  |
| attribute2_type | 0x16 | 22 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x13 | 19 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x09 | 9 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 209 (Offset 0x23ec)

**Raw hex:**
```
0023ec: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
0023fc: 00 00 00 00 00 06 20 00 10 00 09 00 00 00 23 00
00240c: 00 00 00 00 00 00 00 00 00 00 00 00
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x06 | 6 | Smash resistance |
| pir | 0x20 | 32 | Pierce resistance |
| spr | 0x00 | 0 |  |
| foc | 0x10 | 16 | Focus stat |
| ham | 0x00 | 0 |  |
| pur | 0x09 | 9 | Purity stat |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x23 | 35 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 210 (Offset 0x2418)

**Raw hex:**
```
002418: 00 00 00 00 00 00 00 00 01 35 0d 00 06 00 04 00
002428: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
002438: 00 00 00 00 80 02 00 00 01 63 0f 00
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x01 | 1 |  |
| unknown7 | 0x35 | 53 |  |
| unknown8 | 0x0d | 13 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x06 | 6 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x04 | 4 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x80 | 128 |  |
| max_dura | 0x02 | 2 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x01 | 1 | Current durability |
| unknown14 | 0x63 | 99 |  |
| unknown15 | 0x0f | 15 |  |
| unknown16 | 0x00 | 0 |  |

### Item 211 (Offset 0x2444)

**Raw hex:**
```
002444: 08 00 08 00 00 00 00 00 00 00 00 00 00 00 00 00
002454: 00 00 00 00 00 00 00 00 b0 04 00 00 01 2a 11 00
002464: 0b 00 09 00 00 00 00 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x08 | 8 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x08 | 8 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0xb0 | 176 | Focus stat |
| ham | 0x04 | 4 | Hammer stat |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x01 | 1 | Melee power |
| sol | 0x2a | 42 | Holy/Solomon stat |
| hp | 0x11 | 17 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x0b | 11 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x09 | 9 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 212 (Offset 0x2470)

**Raw hex:**
```
002470: 00 00 00 00 00 00 00 00 00 00 00 00 b0 04 00 00
002480: 01 28 00 00 00 00 00 00 00 00 00 00 3b 00 00 00
002490: 00 00 00 00 00 00 00 00 00 00 00 00
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0xb0 | 176 |  |
| hand_type | 0x04 | 4 | 6=one-hand, 7=two-hand |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x01 | 1 | Strength stat |
| spd | 0x28 | 40 | Speed stat |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x3b | 59 | Melee power |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 213 (Offset 0x249c)

**Raw hex:**
```
00249c: 00 0a 00 00 01 25 10 00 0c 00 06 00 00 00 09 00
0024ac: 0b 00 05 00 07 00 08 00 00 00 00 00 00 00 00 00
0024bc: 90 1a 00 00 01 73 15 00 12 00 0d 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x0a | 10 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x01 | 1 |  |
| texture_index_2 | 0x25 | 37 |  |
| unknown5 | 0x10 | 16 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x0c | 12 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x06 | 6 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x09 | 9 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x0b | 11 | Strength stat |
| spd | 0x00 | 0 |  |
| def | 0x05 | 5 | Defense stat |
| bal | 0x00 | 0 |  |
| sla | 0x07 | 7 | Slash resistance |
| smh | 0x00 | 0 |  |
| pir | 0x08 | 8 | Pierce resistance |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x90 | 144 |  |
| attribute2_value | 0x1a | 26 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x01 | 1 |  |
| max_dura | 0x73 | 115 | Max durability |
| weight | 0x15 | 21 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x12 | 18 | Current durability |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x0d | 13 |  |
| unknown16 | 0x00 | 0 |  |

### Item 214 (Offset 0x24c8)

**Raw hex:**
```
0024c8: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
0024d8: 00 00 00 00 90 1a 00 00 01 3c 12 00 1f 00 07 00
0024e8: 00 00 00 00 00 00 00 00 00 00 00 00
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x90 | 144 | Slash resistance |
| smh | 0x1a | 26 | Smash resistance |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x01 | 1 | Focus stat |
| ham | 0x3c | 60 | Hammer stat |
| pur | 0x12 | 18 | Purity stat |
| par | 0x00 | 0 |  |
| mel | 0x1f | 31 | Melee power |
| sol | 0x00 | 0 |  |
| hp | 0x07 | 7 | HP bonus |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 215 (Offset 0x24f4)

**Raw hex:**
```
0024f4: 00 00 00 00 00 00 00 00 90 1a 00 00 01 26 10 00
002504: 13 00 19 00 00 00 0c 00 00 00 19 00 00 00 00 00
002514: 00 00 00 00 00 00 00 00 c0 35 00 00
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x90 | 144 |  |
| unknown7 | 0x1a | 26 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x01 | 1 |  |
| hand_type | 0x26 | 38 | 6=one-hand, 7=two-hand |
| unknown11 | 0x10 | 16 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x13 | 19 | Strength stat |
| spd | 0x00 | 0 |  |
| def | 0x19 | 25 | Defense stat |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x0c | 12 | Pierce resistance |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x19 | 25 | Purity stat |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0xc0 | 192 | Current durability |
| unknown14 | 0x35 | 53 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 216 (Offset 0x2520)

**Raw hex:**
```
002520: 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
002530: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
002540: 04 0c 08 00 08 00 04 00 00 00 00 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x01 | 1 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x00 | 0 |  |
| texture_index_2 | 0x00 | 0 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x00 | 0 |  |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x04 | 4 |  |
| attribute2_value | 0x0c | 12 |  |
| attribute2_type | 0x08 | 8 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x08 | 8 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x04 | 4 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 217 (Offset 0x254c)

**Raw hex:**
```
00254c: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
00255c: 50 00 00 00 04 12 0a 00 0a 00 08 00 00 00 00 00
00256c: 00 00 00 00 00 00 00 00 00 00 00 00
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
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x00 | 0 |  |
| unknown7 | 0x00 | 0 |  |
| unknown8 | 0x00 | 0 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x00 | 0 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x00 | 0 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x50 | 80 | Strength stat |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x04 | 4 | Slash resistance |
| smh | 0x12 | 18 | Smash resistance |
| pir | 0x0a | 10 | Pierce resistance |
| spr | 0x00 | 0 |  |
| foc | 0x0a | 10 | Focus stat |
| ham | 0x00 | 0 |  |
| pur | 0x08 | 8 | Purity stat |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x00 | 0 |  |
| max_dura | 0x00 | 0 |  |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x00 | 0 |  |
| unknown14 | 0x00 | 0 |  |
| unknown15 | 0x00 | 0 |  |
| unknown16 | 0x00 | 0 |  |

### Item 218 (Offset 0x2578)

**Raw hex:**
```
002578: 00 00 00 00 40 01 00 00 04 0f 08 00 09 00 0c 00
002588: 00 00 00 00 00 00 24 00 00 00 00 00 00 00 00 00
002598: 00 00 00 00 40 01 00 00 04 32 0d 00
```

**Parsed fields:**

| Field | Hex | Dec | Notes |
|-------|-----|-----|-------|
| unknown1 | 0x00 | 0 |  |
| unknown2 | 0x00 | 0 |  |
| unknown3 | 0x00 | 0 |  |
| unknown4 | 0x00 | 0 |  |
| texture_index_1 | 0x40 | 64 |  |
| texture_index_2 | 0x01 | 1 |  |
| unknown5 | 0x00 | 0 |  |
| type | 0x00 | 0 | Type 0 |
| unknown6 | 0x04 | 4 |  |
| unknown7 | 0x0f | 15 |  |
| unknown8 | 0x08 | 8 |  |
| unknown9 | 0x00 | 0 |  |
| unknown10 | 0x09 | 9 |  |
| hand_type | 0x00 | 0 |  |
| unknown11 | 0x0c | 12 |  |
| unknown12 | 0x00 | 0 |  |
| str | 0x00 | 0 |  |
| spd | 0x00 | 0 |  |
| def | 0x00 | 0 |  |
| bal | 0x00 | 0 |  |
| sla | 0x00 | 0 |  |
| smh | 0x00 | 0 |  |
| pir | 0x24 | 36 | Pierce resistance |
| spr | 0x00 | 0 |  |
| foc | 0x00 | 0 |  |
| ham | 0x00 | 0 |  |
| pur | 0x00 | 0 |  |
| par | 0x00 | 0 |  |
| mel | 0x00 | 0 |  |
| sol | 0x00 | 0 |  |
| hp | 0x00 | 0 |  |
| attribute1_value | 0x00 | 0 |  |
| attribute1_type | 0x00 | 0 |  |
| attribute2_value | 0x00 | 0 |  |
| attribute2_type | 0x00 | 0 |  |
| elemental_type | 0x00 | 0 |  |
| elemental_power | 0x40 | 64 |  |
| max_dura | 0x01 | 1 | Max durability |
| weight | 0x00 | 0 |  |
| unknown13 | 0x00 | 0 |  |
| dura | 0x04 | 4 | Current durability |
| unknown14 | 0x32 | 50 |  |
| unknown15 | 0x0d | 13 |  |
| unknown16 | 0x00 | 0 |  |

