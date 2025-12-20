# Shadow Tower Creature Power Value Table

**Generated:** 2025-12-20T13:35:46.292Z

**Purpose:** Verify PR #14 magic/projectile attack damage scaling fix

This table shows power values for all creatures, including:
- **Type 0x20**: Physical attack EntityStateData
- **Type 0x30**: Spell/Magic attack EntityStateData (fixed in PR #14)

---

## Summary Statistics

- **Total Unique Creatures**: 205
- **Creatures with Physical Attacks (0x20)**: 125
- **Creatures with Magic Attacks (0x30)**: 148
- **Average Power Score**: 2782
- **Highest Power Score**: 33453
- **Lowest Power Score**: 88

### Important Notes

⚠️ **Progression-Based Scaling:** The power values shown reflect global difficulty scaling only.
They do NOT include position-based normalization (e.g., strong creatures weakened when placed in early areas).
This feature is planned but not yet implemented.

- **Area Score**: Indicates creature's position in randomized map progression (0 = start, higher = later)
- **Power Score**: Calculated from base attributes + attacks + defenses after difficulty scaling
- **Attack Values**: Shown are the actual scaled values (Type 0x20 = physical, Type 0x30 = magic)

---

## Compact Creature Table (Sorted by Power)

**Note:** Power values shown are after global difficulty scaling but do NOT include progression-based normalization.
Area Score indicates the creature's position in game progression (0 = start area, higher = later areas).

| Creature Name | Power | HP | Area Score | Physical (0x20) | Magic (0x30) | Area |
|---------------|-------|----|-----------|-----------------|--------------|-----------|
| 00_abraxus | 33453 | 65535 | 11 | - | 95/181/181; 95/181/181 | fire world molten cavern |
| 0a_demons_eye | 33440 | 820 | 12 | - | 222/1 | illusion world gloomy dom |
| 0d_fat_mole_e | 32819 | 65535 | 13 | - | - | death world undead layer |
| 02_fat_mole_d | 32807 | 65535 | 14 | - | - | illusion world worship do |
| 00_fat_mole_f | 32804 | 65535 | 10 | - | - | water world impure pool a |
| 08_fat_mole_b | 32789 | 65535 | 11 | - | - | fire world molten cavern |
| 0c_fat_mole_c | 32789 | 65535 | 11 | - | - | fire world molten cavern |
| 04_fat_mole_a | 32768 | 65535 | 2 | - | - | human world cursed region |
| 0d_hatchlin | 15850 | 1460 | 6 | - | 76 | earth world quaking caver |
| 09_cerberus | 7894 | 2300 | 13 | - | 99/3; 59 | water world white rain ar |
| 04_jinn_lord | 7747 | 1920 | 9 | - | 86/20; 85 | fire world phoenix cave |
| 01_unknown_b | 5487 | 7560 | 13 | 520/450/550; 620/480/550 | 124; 125 | death world undead layer |
| 01_auriel_c | 5463 | 7560 | 11 | 550/450/540; 550/450/540 | 160; 161 | monster world screeching  |
| 0c_hollow_mage | 4852 | 7800 | 13 | - | 59; 64 | death world gate of the d |
| 09_steel_servant | 4593 | 1810 | 16 | 155/182/130; 180/210/178; 180/300/178 | 94/2 | monster world false eye a |
| 0a_ruby_demon | 4485 | 2260 | 13 | 188/148/120 | 219/55 | death world lingering cur |
| 04_king_edward | 4322 | 6500 | 13 | 50/45/50; 40/40/20; 90/40/80 | 246 | death world undead layer |
| 04_wildowess | 4243 | 6600 | 14 | 205/150/340 | 242 | illusion world worship do |
| 0c_ebony_knight | 4182 | 4270 | 11 | 305/252/230; 225/230/305; 300/190/128 | 104; 105 | fire world ashen cavern |
| 0e_necron | 4165 | 4800 | 11 | 340/290/460; 100/120/400; 350/250/270 | 164/308; 163/279; 162/365 | monster world screeching  |
| 01_horned_skull | 4095 | 1550 | 2 | 120/137/253 | 88/24 | human world cursed region |
| 05_horned_skull | 4095 | 1550 | 10 | 120/137/253 | 88/24 | water world impure pool a |
| 00_bone_demon | 4087 | 1480 | 13 | 140/200/110 | 99/100/101 | death world lingering cur |
| 06_hell_warrior | 3951 | 5800 | 10 | 450/300/310 | - | fire world burning cavern |
| 00_unused_a | 3877 | 6000 | 13 | - | - | death world gate of the d |
| 08_oxelus | 3599 | 5700 | 11 | 395/260/345; 145/120/185 | 158/24 | fire world molten cavern |
| 02_fire_jinn | 3528 | 572 | 6 | 120/115/95 | 88/27 | earth world quaking caver |
| 06_fire_jinn | 3528 | 572 | 12 | 120/115/95 | 88/27 | water world sunken river  |
| 05_doriwi | 3411 | 4800 | 11 | 300/320/450 | 59 | monster world screeching  |
| 01_doriwi | 3411 | 4800 | 16 | 300/320/450 | 59 | monster world false eye a |
| 02_bone_wolf | 3190 | 4100 | 1 | 250/420/250 | 59 | human world solitary regi |
| 0a_bone_wolf | 3190 | 4100 | 11 | 250/420/250 | 59 | monster world screeching  |
| 08_armored_guardian | 3162 | 4200 | 12 | 380/460/280; 365/335/240 | - | death world dark castle l |
| 04_tree_ogre | 3035 | 4900 | 12 | 250/311/280 | 122/12 | death world dark castle l |
| 0d_death_serpent | 3016 | 4730 | 19 | 355/430/265 | 166/82; 59 | water world watery labyri |
| 09_freak | 3012 | 3600 | 16 | 210/280/370; 210/210/310; 240/230/260 | 71/232/380; 59 | monster world false eye a |
| 06_armored_slayer | 2920 | 3800 | 13 | 430/330/250; 340/440/310 | - | death world undead layer |
| 0a_armored_slayer | 2920 | 3800 | 13 | 430/330/250; 340/440/310 | - | death world gate of the d |
| 08_wyvern | 2901 | 4500 | 16 | 180/150/220 | 230/293 | monster world false eye a |
| 0d_bugler | 2900 | 4200 | 11 | - | 240 | monster world screeching  |
| 09_armored_warrior | 2844 | 3900 | 1 | 430/350/260; 350/413/220 | - | human world solitary regi |
| 05_armored_warrior | 2844 | 3900 | 7 | 430/350/260; 350/413/220 | - | earth world false pit cav |
| 01_stack_eyes | 2790 | 4150 | 11 | 310/380/305 | 131/11; 131/11; 131/11 | fire world molten cavern |
| 05_magi_magus | 2769 | 3730 | 13 | - | 117/298; 118 | water world white rain ar |
| 08_fester | 2757 | 4650 | 14 | - | 145 | illusion world worship do |
| 00_panak | 2666 | 5100 | 13 | - | - | death world lingering cur |
| 04_dragon_turtle | 2601 | 4050 | 13 | 228/370/220 | 116/115 | water world white rain ar |
| 0d_deha | 2588 | 3360 | 11 | 220/250/172; 210/270/152; 120/250/202 | 139/137 | monster world screeching  |
| 0a_wizcrypha | 2498 | 3200 | 11 | - | 133/24; 132/24; 76 | fire world ashen cavern |
| 06_oblid | 2433 | 3500 | 10 | 243/330/271; 320/280/225 | - | water world impure pool a |
| 05_old_face | 2431 | 4100 | 11 | - | 128 | fire world ashen cavern |
| 0a_cursed_demon | 2424 | 3780 | 12 | 390/200/325 | 76 | illusion world gloomy dom |
| 02_karasu | 2420 | 3800 | 16 | 310/288/213 | - | monster world false eye a |
| 0c_old_face | 2406 | 3200 | 10 | 300/390/280 | 59; 68 | water world impure pool a |
| 08_war_demon_1 | 2403 | 3500 | 12 | 290/285/150; 295/305/110 | - | illusion world gloomy dom |
| 08_claw_head | 2360 | 3600 | 13 | 240/120/160 | - | death world undead layer |
| 00_master_knight | 2355 | 3200 | 19 | 380/260/210; 200/160/390 | - | water world watery labyri |
| 01_gorthaur | 2154 | 3450 | 14 | 195/110/180 | 146 | illusion world worship do |
| 0d_saurian_warrior_b | 2064 | 2800 | 11 | 255/350/175 | 59 | fire world molten cavern |
| 0c_saurian_warrior_a | 2046 | 2800 | 1 | 355/280/175 | - | human world solitary regi |
| 01_disguise | 2045 | 2700 | 15 | - | 151; 150/23 | illusion world dream doma |
| 08_apocrypha | 1964 | 2000 | 13 | - | 225/100; 225/100 | illusion world bewilderme |
| 00_hell_hunter | 1952 | 3600 | 11 | - | 120/11; 121/11 | fire world ashen cavern |
| 0e_claw_head | 1952 | 3600 | 13 | - | 120/11; 121/11 | death world undead layer |
| 04_king_hopper | 1916 | 3230 | 12 | - | 159/1 | water world sunken river  |
| 00_dark_spirits | 1869 | 2040 | 12 | - | 153/8; 154/91; 152/92 | illusion world gloomy dom |
| 09_war_demon_2 | 1867 | 2800 | 2 | 290/125/110; 205/75/60 | - | human world hidden region |
| 04_dark_spirits | 1831 | 2040 | 2 | 120/140/370; 355/110/125 | - | human world cursed region |
| 00_red_puppet | 1831 | 2040 | 13 | 120/140/370; 355/110/125 | - | death world gate of the d |
| 09_descrypha | 1830 | 1800 | 14 | - | 228/100; 228/100 | illusion world worship do |
| 05_dark_spirits | 1814 | 2040 | 12 | 115/135/290; 375/105/135 | - | illusion world gloomy dom |
| 01_dark_spirits | 1814 | 2040 | 13 | 115/135/290; 375/105/135 | - | illusion world bewilderme |
| 04_dread_knight | 1808 | 2400 | 8 | 190/145/112; 110/155/245 | 84 | earth world hostile rock  |
| 09_pulsating_heart | 1767 | 2000 | 13 | 150/100/140 | 127/40/84 | death world undead layer |
| 04_zygote | 1758 | 2000 | 9 | 155/298/140 | 102; 244 | fire world phoenix cave |
| 08_hermit_crab | 1721 | 2420 | 5 | 250/320/270 | 157 | earth world poisonous cav |
| 0d_blood_bone | 1685 | 2820 | 10 | 250/205/150 | 76 | water world impure pool a |
| 09_dementor | 1596 | 2270 | 6 | 250/160/132; 195/150/118 | - | earth world quaking caver |
| 0c_death_mage | 1572 | 1800 | 9 | 170/80/100 | 142 | fire world phoenix cave |
| 09_koazul | 1561 | 1540 | 11 | 260/110/230; 270/140/260 | 113/38 | monster world screeching  |
| 04_demon_warrior | 1559 | 1880 | 16 | 248/145/270; 180/175/150 | 143 | monster world false eye a |
| 0e_dinogon | 1506 | 2020 | 19 | 165/368/260 | 156/57 | water world watery labyri |
| 04_great_frog | 1505 | 2740 | 13 | - | - | death world gate of the d |
| 0d_slasher | 1446 | 1620 | 10 | 255/125/195 | 115/398/405 | water world impure pool a |
| 04_kabasaur | 1445 | 1700 | 11 | 305/250/140; 230/300/115 | - | fire world molten cavern |
| 00_kabasaur | 1445 | 1700 | 11 | 305/250/140; 230/300/115 | - | fire world molten cavern |
| 01_chirper | 1418 | 2520 | 10 | - | 59 | fire world burning cavern |
| 0e_manna_python | 1327 | 1980 | 13 | 145/190/140 | 112/3 | illusion world bewilderme |
| 08_ring_demon | 1302 | 2050 | 12 | - | 235/7 | illusion world gloomy dom |
| 05_hell_hunter | 1281 | 2100 | 2 | 140/120/105 | - | human world cursed region |
| 05_water_knight | 1238 | 1580 | 12 | 135/185/100; 135/185/100 | - | water world sunken river  |
| 0a_dark_bishop | 1224 | 1560 | 12 | 130/250/97 | 137 | death world dark castle l |
| 05_master_howler | 1220 | 1450 | 16 | 360/355/260 | - | monster world false eye a |
| 09_cross_breed | 1205 | 1800 | 14 | - | 149/56/89; 59 | illusion world worship do |
| 0d_arachness | 1129 | 1270 | 11 | 245/180/140 | 96; 87 | monster world screeching  |
| 00_winged_worm | 1106 | 1720 | 13 | - | 119; 59 | illusion world bewilderme |
| 04_berzerker | 1082 | 1380 | 5 | 180/243/121 | 89 | earth world poisonous cav |
| 01_berzerker | 1082 | 1380 | 9 | 180/243/121 | 89 | fire world phoenix cave |
| 00_berzerker | 1082 | 1380 | 10 | 180/243/121 | 89 | fire world burning cavern |
| 08_berzerker | 1082 | 1380 | 10 | 180/243/121 | 89 | fire world burning cavern |
| 0c_worm_face | 1055 | 1410 | 5 | 135/150/110 | 108/126 | earth world rotting caver |
| 05_armored_jinn | 1039 | 720 | 19 | 250/200/172 | 87/7 | water world watery labyri |
| 06_black_imp | 1009 | 1040 | 5 | - | 245; 76 | earth world rotting caver |
| 02_dark_imp | 1009 | 1040 | 5 | - | 245; 76 | earth world poisonous cav |
| 0d_damned_angel | 973 | 1280 | 11 | - | 101 | fire world ashen cavern |
| 08_clay_servant | 910 | 980 | 6 | 102/275/96; 128/196/86 | - | earth world stone cavern |
| 08_torg | 895 | 1200 | 19 | 98/200/42 | 71/173 | water world watery labyri |
| 00_earth_knight | 887 | 970 | 2 | 122/88/62; 65/42/124; 45/22/194 | - | human world hidden region |
| 01_earth_knight | 887 | 970 | 7 | 122/88/62; 65/42/124; 45/22/194 | - | earth world false pit cav |
| 05_earth_knight | 887 | 970 | 11 | 122/88/62; 65/42/124; 45/22/194 | - | fire world ashen cavern |
| 00_night_howler | 869 | 950 | 5 | 320/245/236 | - | earth world rotting caver |
| 04_night_howler | 869 | 950 | 10 | 320/245/236 | - | fire world burning cavern |
| 00_black_onyx | 865 | 750 | 12 | 142/120/90 | 211/55 | death world dark castle l |
| 09_dark_fairy | 864 | 1032 | 15 | - | 135/122/159 | illusion world dream doma |
| 09_iron_crusher | 861 | 1100 | 14 | - | 93/0; 92/115/116 | illusion world worship do |
| 0d_dweller | 861 | 1100 | 19 | - | 93/0; 92/115/116 | water world watery labyri |
| 06_warpoor | 849 | 1120 | 12 | - | 147; 246 | illusion world gloomy dom |
| 0a_warpoor | 849 | 1120 | 13 | - | 147; 246 | illusion world bewilderme |
| 0c_ray_plant | 846 | 1080 | 13 | - | 208/175; 245 | death world lingering cur |
| 08_guardian_b | 841 | 870 | 7 | 92/70/148; 92/70/218 | 200/1 | earth world false pit cav |
| 04_kiljoy | 826 | 720 | 13 | 180/59/112; 191/65/122; 201/85/164 | - | death world gate of the d |
| 04_auriel_b | 813 | 1000 | 5 | - | - | earth world poisonous cav |
| 0e_mystic_tower | 794 | 1050 | 7 | - | 216/13; 91 | earth world false pit cav |
| 02_mystic_tower | 794 | 1050 | 10 | - | 216/13; 91 | fire world burning cavern |
| 06_mystic_tower | 794 | 1050 | 10 | - | 216/13; 91 | fire world burning cavern |
| 05_warden | 775 | 1110 | 12 | - | 165/26 | death world dark castle l |
| 02_gordoral | 743 | 850 | 13 | - | 238/0 | illusion world bewilderme |
| 06_gordoral | 743 | 850 | 13 | - | 238/0 | death world lingering cur |
| 0a_dweller | 730 | 1160 | 8 | - | 110 | earth world hostile rock  |
| 06_dweller | 730 | 1160 | 16 | - | 110 | monster world false eye a |
| 0c_gaze_hopper | 686 | 650 | 12 | 155/286/125 | 111/35 | death world dark castle l |
| 05_gargaral | 673 | 750 | 12 | - | 140 | illusion world gloomy dom |
| 01_gargaral | 673 | 750 | 13 | - | 140 | illusion world bewilderme |
| 0a_rotting_face | 668 | 420 | 13 | - | 76; 144 | death world undead layer |
| 0e_rotting_face | 668 | 420 | 14 | - | 76; 144 | illusion world worship do |
| 02_sand_leech_b | 643 | 700 | 6 | 82/40/153 | - | earth world quaking caver |
| 09_sloth_bug | 618 | 560 | 2 | 93/60/155; 130/80/65 | 79 | human world hidden region |
| 0a_barrel_snail | 618 | 560 | 6 | 93/60/155; 130/80/65 | 79 | earth world stone cavern |
| 0c_maristella | 600 | 820 | 13 | - | 136; 68 | death world lingering cur |
| 01_myconid | 591 | 850 | 1 | 62/95/50 | 60/4 | human world solitary regi |
| 05_hobble_worm | 589 | 620 | 6 | 90/152/78 | 77/72; 78 | earth world stone cavern |
| 02_horned_slime | 575 | 620 | 8 | 80/115/125 | 106/102 | earth world hostile rock  |
| 05_horned_slime | 575 | 620 | 10 | 80/115/125 | 106/102 | water world impure pool a |
| 01_horned_slime | 575 | 620 | 11 | 80/115/125 | 106/102 | fire world ashen cavern |
| 0a_horned_slime | 575 | 620 | 19 | 80/115/125 | 106/102 | water world watery labyri |
| 09_cocoon_plant | 523 | 320 | 6 | 64/50/108 | 74/275/318 | earth world quaking caver |
| 02_blood_brain | 519 | 590 | 6 | 50/125/86 | 107/33 | earth world quaking caver |
| 05_blood_brain | 519 | 590 | 7 | 50/125/86 | 107/33 | earth world false pit cav |
| 08_casket | 486 | 261 | 12 | - | 243 | death world dark castle l |
| 0d_trickster | 479 | 380 | 11 | 50/80/120 | 62; 242 | fire world ashen cavern |
| 06_elder | 473 | 608 | 5 | 58/45/125 | 59 | earth world rotting caver |
| 02_elder | 473 | 608 | 5 | 58/45/125 | 59 | earth world rotting caver |
| 0e_elder | 473 | 608 | 5 | 58/45/125 | 59 | earth world rotting caver |
| 04_cannon_snail | 466 | 640 | 5 | - | 81/2/4 | earth world rotting caver |
| 0a_guardian_a | 465 | 480 | 2 | 30/33/91 | 200/1 | human world cursed region |
| 09_dwarf_warrior | 427 | 382 | 2 | 64/40/101; 64/40/131 | - | human world hidden region |
| 06_fanged_worm | 416 | 434 | 2 | 24/63/23 | 51/150 | human world hidden region |
| 02_dead_abraxus | 414 | 1 | 11 | - | - | fire world molten cavern |
| 01_beak_plant | 407 | 480 | 12 | 50/65/90 | 68 | illusion world gloomy dom |
| 08_star_serpent | 401 | 454 | 2 | 65/79/62 | 58 | human world cursed region |
| 0c_dybbuk | 391 | 520 | 6 | - | 75 | earth world stone cavern |
| 00_duhrin | 378 | 600 | 5 | - | - | earth world poisonous cav |
| 00_dybbuk | 369 | 520 | 6 | - | - | earth world stone cavern |
| 04_dybbuk | 369 | 520 | 6 | - | - | earth world stone cavern |
| 0c_barrel_snail | 367 | 560 | 5 | - | 57/2/4 | earth world rotting caver |
| 02_watcher_plant | 354 | 354 | 2 | 42/65/40 | 202/14 | human world cursed region |
| 00_watcher_plant | 354 | 354 | 5 | 42/65/40 | 202/14 | earth world poisonous cav |
| 0e_watcher_plant | 354 | 354 | 5 | 42/65/40 | 202/14 | earth world poisonous cav |
| 02_parasite | 350 | 220 | 7 | 78/86/89; 78/76/82 | - | earth world false pit cav |
| 01_blue_flicker | 345 | 440 | 10 | - | 205/8 | fire world burning cavern |
| 02_skeleton | 332 | 384 | 2 | 83/35/20 | - | human world hidden region |
| 0a_skeleton | 332 | 384 | 6 | 83/35/20 | - | earth world quaking caver |
| 0d_tondrom | 320 | 280 | 8 | 36/121/42 | - | earth world hostile rock  |
| 08_trickster | 298 | 380 | 7 | - | 67/59 | earth world false pit cav |
| 0d_cocoon_plant | 297 | 320 | 5 | - | 62/80 | earth world poisonous cav |
| 01_acid_pod | 297 | 320 | 12 | - | 62/80 | death world dark castle l |
| 05_acid_pod | 297 | 320 | 13 | - | 62/80 | death world gate of the d |
| 05_cocoon_plant | 297 | 320 | 13 | - | 62/80 | death world gate of the d |
| 00_gorgoral | 288 | 100 | 13 | - | - | illusion world bewilderme |
| 00_acid_skull | 283 | 280 | 3 | 16/16/23 | 54 | human world forgotten reg |
| 0d_crying_root | 282 | 350 | 6 | - | 80 | earth world stone cavern |
| 04_minor_dwarf | 278 | 308 | 13 | 45/90/26 | - | illusion world bewilderme |
| 01_blood_skull | 268 | 263 | 3 | 15/13/21 | 55 | human world forgotten reg |
| 05_blood_skull | 268 | 263 | 3 | 15/13/21 | 55 | human world forgotten reg |
| 09_imp | 252 | 308 | 5 | - | 56 | earth world rotting caver |
| 01_shadow_spider | 247 | 240 | 2 | 3/61/2 | 52 | human world cursed region |
| 09_shadow_spider | 247 | 240 | 13 | 3/61/2 | 52 | illusion world bewilderme |
| 02_tongue_imp | 246 | 162 | 5 | - | 243 | earth world rotting caver |
| 06_tongue_imp | 246 | 162 | 12 | - | 243 | illusion world gloomy dom |
| 02_lizard_servant | 238 | 1 | 16 | - | - | monster world false eye a |
| 06_lizard_servant | 238 | 1 | 16 | - | - | monster world false eye a |
| 01_demon_bat | 202 | 135 | 1 | - | 48; 48 | human world solitary regi |
| 09_demon_bat | 202 | 135 | 6 | - | 48; 48 | earth world stone cavern |
| 02_blood_slime | 176 | 96 | 3 | 13/12/16 | 50 | human world forgotten reg |
| 09_blood_slime | 176 | 96 | 5 | 13/12/16 | 50 | earth world rotting caver |
| 05_blood_slime | 176 | 96 | 13 | 13/12/16 | 50 | illusion world bewilderme |
| 01_blood_slime | 176 | 96 | 19 | 13/12/16 | 50 | water world watery labyri |
| 0c_hanging_dead | 168 | 200 | 5 | - | 65 | earth world poisonous cav |
| 08_dark_spider | 158 | 121 | 2 | 9/10/20; 11/13/28 | - | human world hidden region |
| 00_dark_spider | 158 | 121 | 10 | 9/10/20; 11/13/28 | - | water world impure pool a |
| 00_acid_slime | 148 | 95 | 13 | 10/11/13 | 49 | death world lingering cur |
| 04_acid_slime | 148 | 95 | 13 | 10/11/13 | 49 | death world gate of the d |
| 01_acid_slime | 148 | 95 | 16 | 10/11/13 | 49 | monster world false eye a |
| 00_sand_leech_a | 115 | 50 | 2 | - | 69/16 | human world hidden region |
| 05_dwarfling | 88 | 1 | 1 | - | - | human world solitary regi |

---

## Creatures with Type 0x30 (Magic/Spell Attacks)

**These creatures were fixed in PR #14 to properly scale with difficulty settings.**

| Creature | Power | HP | Magic Attack Values |
|----------|-------|----|--------------------|\n| 00_abraxus | 33453 | 65535 | 95/181/181; 95/181/181 |
| 0a_demons_eye | 33440 | 820 | 222/1 |
| 0d_hatchlin | 15850 | 1460 | 76 |
| 09_cerberus | 7894 | 2300 | 99/3; 59 |
| 04_jinn_lord | 7747 | 1920 | 86/20; 85 |
| 01_unknown_b | 5487 | 7560 | 124; 125 |
| 01_auriel_c | 5463 | 7560 | 160; 161 |
| 0c_hollow_mage | 4852 | 7800 | 59; 64 |
| 09_steel_servant | 4593 | 1810 | 94/2 |
| 0a_ruby_demon | 4485 | 2260 | 219/55 |
| 04_king_edward | 4322 | 6500 | 246 |
| 04_wildowess | 4243 | 6600 | 242 |
| 0c_ebony_knight | 4182 | 4270 | 104; 105 |
| 0e_necron | 4165 | 4800 | 164/308; 163/279; 162/365 |
| 01_horned_skull | 4095 | 1550 | 88/24 |
| 05_horned_skull | 4095 | 1550 | 88/24 |
| 00_bone_demon | 4087 | 1480 | 99/100/101 |
| 08_oxelus | 3599 | 5700 | 158/24 |
| 02_fire_jinn | 3528 | 572 | 88/27 |
| 06_fire_jinn | 3528 | 572 | 88/27 |
| 05_doriwi | 3411 | 4800 | 59 |
| 01_doriwi | 3411 | 4800 | 59 |
| 02_bone_wolf | 3190 | 4100 | 59 |
| 0a_bone_wolf | 3190 | 4100 | 59 |
| 04_tree_ogre | 3035 | 4900 | 122/12 |
| 0d_death_serpent | 3016 | 4730 | 166/82; 59 |
| 09_freak | 3012 | 3600 | 71/232/380; 59 |
| 08_wyvern | 2901 | 4500 | 230/293 |
| 0d_bugler | 2900 | 4200 | 240 |
| 01_stack_eyes | 2790 | 4150 | 131/11; 131/11; 131/11 |
| 05_magi_magus | 2769 | 3730 | 117/298; 118 |
| 08_fester | 2757 | 4650 | 145 |
| 04_dragon_turtle | 2601 | 4050 | 116/115 |
| 0d_deha | 2588 | 3360 | 139/137 |
| 0a_wizcrypha | 2498 | 3200 | 133/24; 132/24; 76 |
| 05_old_face | 2431 | 4100 | 128 |
| 0a_cursed_demon | 2424 | 3780 | 76 |
| 0c_old_face | 2406 | 3200 | 59; 68 |
| 01_gorthaur | 2154 | 3450 | 146 |
| 0d_saurian_warrior_b | 2064 | 2800 | 59 |
| 01_disguise | 2045 | 2700 | 151; 150/23 |
| 08_apocrypha | 1964 | 2000 | 225/100; 225/100 |
| 00_hell_hunter | 1952 | 3600 | 120/11; 121/11 |
| 0e_claw_head | 1952 | 3600 | 120/11; 121/11 |
| 04_king_hopper | 1916 | 3230 | 159/1 |
| 00_dark_spirits | 1869 | 2040 | 153/8; 154/91; 152/92 |
| 09_descrypha | 1830 | 1800 | 228/100; 228/100 |
| 04_dread_knight | 1808 | 2400 | 84 |
| 09_pulsating_heart | 1767 | 2000 | 127/40/84 |
| 04_zygote | 1758 | 2000 | 102; 244 |
| 08_hermit_crab | 1721 | 2420 | 157 |
| 0d_blood_bone | 1685 | 2820 | 76 |
| 0c_death_mage | 1572 | 1800 | 142 |
| 09_koazul | 1561 | 1540 | 113/38 |
| 04_demon_warrior | 1559 | 1880 | 143 |
| 0e_dinogon | 1506 | 2020 | 156/57 |
| 0d_slasher | 1446 | 1620 | 115/398/405 |
| 01_chirper | 1418 | 2520 | 59 |
| 0e_manna_python | 1327 | 1980 | 112/3 |
| 08_ring_demon | 1302 | 2050 | 235/7 |
| 0a_dark_bishop | 1224 | 1560 | 137 |
| 09_cross_breed | 1205 | 1800 | 149/56/89; 59 |
| 0d_arachness | 1129 | 1270 | 96; 87 |
| 00_winged_worm | 1106 | 1720 | 119; 59 |
| 04_berzerker | 1082 | 1380 | 89 |
| 01_berzerker | 1082 | 1380 | 89 |
| 00_berzerker | 1082 | 1380 | 89 |
| 08_berzerker | 1082 | 1380 | 89 |
| 0c_worm_face | 1055 | 1410 | 108/126 |
| 05_armored_jinn | 1039 | 720 | 87/7 |
| 06_black_imp | 1009 | 1040 | 245; 76 |
| 02_dark_imp | 1009 | 1040 | 245; 76 |
| 0d_damned_angel | 973 | 1280 | 101 |
| 08_torg | 895 | 1200 | 71/173 |
| 00_black_onyx | 865 | 750 | 211/55 |
| 09_dark_fairy | 864 | 1032 | 135/122/159 |
| 09_iron_crusher | 861 | 1100 | 93/0; 92/115/116 |
| 0d_dweller | 861 | 1100 | 93/0; 92/115/116 |
| 06_warpoor | 849 | 1120 | 147; 246 |
| 0a_warpoor | 849 | 1120 | 147; 246 |
| 0c_ray_plant | 846 | 1080 | 208/175; 245 |
| 08_guardian_b | 841 | 870 | 200/1 |
| 0e_mystic_tower | 794 | 1050 | 216/13; 91 |
| 02_mystic_tower | 794 | 1050 | 216/13; 91 |
| 06_mystic_tower | 794 | 1050 | 216/13; 91 |
| 05_warden | 775 | 1110 | 165/26 |
| 02_gordoral | 743 | 850 | 238/0 |
| 06_gordoral | 743 | 850 | 238/0 |
| 0a_dweller | 730 | 1160 | 110 |
| 06_dweller | 730 | 1160 | 110 |
| 0c_gaze_hopper | 686 | 650 | 111/35 |
| 05_gargaral | 673 | 750 | 140 |
| 01_gargaral | 673 | 750 | 140 |
| 0a_rotting_face | 668 | 420 | 76; 144 |
| 0e_rotting_face | 668 | 420 | 76; 144 |
| 09_sloth_bug | 618 | 560 | 79 |
| 0a_barrel_snail | 618 | 560 | 79 |
| 0c_maristella | 600 | 820 | 136; 68 |
| 01_myconid | 591 | 850 | 60/4 |
| 05_hobble_worm | 589 | 620 | 77/72; 78 |
| 02_horned_slime | 575 | 620 | 106/102 |
| 05_horned_slime | 575 | 620 | 106/102 |
| 01_horned_slime | 575 | 620 | 106/102 |
| 0a_horned_slime | 575 | 620 | 106/102 |
| 09_cocoon_plant | 523 | 320 | 74/275/318 |
| 02_blood_brain | 519 | 590 | 107/33 |
| 05_blood_brain | 519 | 590 | 107/33 |
| 08_casket | 486 | 261 | 243 |
| 0d_trickster | 479 | 380 | 62; 242 |
| 06_elder | 473 | 608 | 59 |
| 02_elder | 473 | 608 | 59 |
| 0e_elder | 473 | 608 | 59 |
| 04_cannon_snail | 466 | 640 | 81/2/4 |
| 0a_guardian_a | 465 | 480 | 200/1 |
| 06_fanged_worm | 416 | 434 | 51/150 |
| 01_beak_plant | 407 | 480 | 68 |
| 08_star_serpent | 401 | 454 | 58 |
| 0c_dybbuk | 391 | 520 | 75 |
| 0c_barrel_snail | 367 | 560 | 57/2/4 |
| 02_watcher_plant | 354 | 354 | 202/14 |
| 00_watcher_plant | 354 | 354 | 202/14 |
| 0e_watcher_plant | 354 | 354 | 202/14 |
| 01_blue_flicker | 345 | 440 | 205/8 |
| 08_trickster | 298 | 380 | 67/59 |
| 0d_cocoon_plant | 297 | 320 | 62/80 |
| 01_acid_pod | 297 | 320 | 62/80 |
| 05_acid_pod | 297 | 320 | 62/80 |
| 05_cocoon_plant | 297 | 320 | 62/80 |
| 00_acid_skull | 283 | 280 | 54 |
| 0d_crying_root | 282 | 350 | 80 |
| 01_blood_skull | 268 | 263 | 55 |
| 05_blood_skull | 268 | 263 | 55 |
| 09_imp | 252 | 308 | 56 |
| 01_shadow_spider | 247 | 240 | 52 |
| 09_shadow_spider | 247 | 240 | 52 |
| 02_tongue_imp | 246 | 162 | 243 |
| 06_tongue_imp | 246 | 162 | 243 |
| 01_demon_bat | 202 | 135 | 48; 48 |
| 09_demon_bat | 202 | 135 | 48; 48 |
| 02_blood_slime | 176 | 96 | 50 |
| 09_blood_slime | 176 | 96 | 50 |
| 05_blood_slime | 176 | 96 | 50 |
| 01_blood_slime | 176 | 96 | 50 |
| 0c_hanging_dead | 168 | 200 | 65 |
| 00_acid_slime | 148 | 95 | 49 |
| 04_acid_slime | 148 | 95 | 49 |
| 01_acid_slime | 148 | 95 | 49 |
| 00_sand_leech_a | 115 | 50 | 69/16 |

---

## Full Attribute Table

| Creature | Power | HP | STR | SPD | DEF | BAL | SLA | SMH | PIR | SPR | FOC | HAM | PUR | PAR | MEL | SOL |
|----------|-------|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| 00_abraxus | 33453 | 65535 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 5 | 2 | 1 | 0 | 5 | 0 | 4 |
| 0a_demons_eye | 33440 | 820 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 2 | 2 | 1 |
| 0d_fat_mole_e | 32819 | 65535 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 02_fat_mole_d | 32807 | 65535 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 00_fat_mole_f | 32804 | 65535 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 08_fat_mole_b | 32789 | 65535 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0c_fat_mole_c | 32789 | 65535 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 04_fat_mole_a | 32768 | 65535 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0d_hatchlin | 15850 | 1460 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 10 | 0 | 0 | 0 |
| 09_cerberus | 7894 | 2300 | 0 | 5 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 5 | 0 | 0 | 0 | 0 |
| 04_jinn_lord | 7747 | 1920 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 1 | 2 | 1 | 0 | 3 | 0 | 0 |
| 01_unknown_b | 5487 | 7560 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 01_auriel_c | 5463 | 7560 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0c_hollow_mage | 4852 | 7800 | 0 | 4 | 0 | 2 | 0 | 0 | 1 | 16 | 10 | 0 | 5 | 2 | 0 | 10 |
| 09_steel_servant | 4593 | 1810 | 0 | 0 | 0 | 0 | 0 | 5 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 0a_ruby_demon | 4485 | 2260 | 0 | 1 | 0 | 0 | 1 | 0 | 0 | 1 | 1 | 1 | 0 | 1 | 0 | 0 |
| 04_king_edward | 4322 | 6500 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 04_wildowess | 4243 | 6600 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 6 | 4 | 0 | 5 | 0 | 0 | 3 |
| 0c_ebony_knight | 4182 | 4270 | 0 | 7 | 0 | 0 | 0 | 0 | 4 | 11 | 3 | 9 | 0 | 1 | 0 | 0 |
| 0e_necron | 4165 | 4800 | 12 | 5 | 0 | 0 | 3 | 2 | 8 | 2 | 2 | 0 | 1 | 0 | 3 | 3 |
| 01_horned_skull | 4095 | 1550 | 0 | 2 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 1 | 0 | 1 |
| 05_horned_skull | 4095 | 1550 | 0 | 2 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 1 | 0 | 1 |
| 00_bone_demon | 4087 | 1480 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 | 0 | 0 | 1 | 0 | 3 |
| 06_hell_warrior | 3951 | 5800 | 0 | 4 | 0 | 1 | 5 | 0 | 0 | 0 | 0 | 2 | 0 | 3 | 0 | 2 |
| 00_unused_a | 3877 | 6000 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 12 | 5 | 0 | 1 |
| 08_oxelus | 3599 | 5700 | 0 | 3 | 0 | 0 | 6 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 02_fire_jinn | 3528 | 572 | 0 | 0 | 0 | 0 | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 0 | 0 | 0 |
| 06_fire_jinn | 3528 | 572 | 0 | 0 | 0 | 0 | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 0 | 0 | 0 |
| 05_doriwi | 3411 | 4800 | 2 | 0 | 2 | 2 | 0 | 5 | 0 | 1 | 0 | 0 | 4 | 0 | 0 | 0 |
| 01_doriwi | 3411 | 4800 | 2 | 0 | 2 | 2 | 0 | 5 | 0 | 1 | 0 | 0 | 4 | 0 | 0 | 0 |
| 02_bone_wolf | 3190 | 4100 | 2 | 0 | 1 | 3 | 0 | 0 | 0 | 0 | 0 | 4 | 1 | 0 | 0 | 2 |
| 0a_bone_wolf | 3190 | 4100 | 2 | 0 | 1 | 3 | 0 | 0 | 0 | 0 | 0 | 4 | 1 | 0 | 0 | 2 |
| 08_armored_guardian | 3162 | 4200 | 7 | 0 | 1 | 0 | 2 | 2 | 0 | 0 | 0 | 0 | 1 | 2 | 0 | 0 |
| 04_tree_ogre | 3035 | 4900 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 1 | 2 | 0 | 3 | 2 |
| 0d_death_serpent | 3016 | 4730 | 0 | 0 | 0 | 6 | 0 | 4 | 0 | 0 | 0 | 0 | 3 | 5 | 0 | 0 |
| 09_freak | 3012 | 3600 | 0 | 0 | 0 | 2 | 0 | 0 | 6 | 0 | 0 | 4 | 0 | 0 | 0 | 1 |
| 06_armored_slayer | 2920 | 3800 | 0 | 0 | 3 | 0 | 3 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 |
| 0a_armored_slayer | 2920 | 3800 | 0 | 0 | 3 | 0 | 3 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 |
| 08_wyvern | 2901 | 4500 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 7 | 5 | 4 | 0 | 0 | 0 | 1 |
| 0d_bugler | 2900 | 4200 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 10 | 0 | 0 | 0 | 0 | 0 | 0 |
| 09_armored_warrior | 2844 | 3900 | 3 | 0 | 1 | 0 | 0 | 2 | 1 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |
| 05_armored_warrior | 2844 | 3900 | 3 | 0 | 1 | 0 | 0 | 2 | 1 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |
| 01_stack_eyes | 2790 | 4150 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 7 | 1 | 0 | 0 | 0 |
| 05_magi_magus | 2769 | 3730 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 10 | 1 | 6 | 0 | 0 | 12 | 9 |
| 08_fester | 2757 | 4650 | 2 | 3 | 0 | 0 | 0 | 0 | 6 | 0 | 0 | 0 | 2 | 5 | 0 | 0 |
| 00_panak | 2666 | 5100 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 04_dragon_turtle | 2601 | 4050 | 0 | 0 | 7 | 4 | 0 | 0 | 0 | 1 | 0 | 6 | 0 | 0 | 1 | 0 |
| 0d_deha | 2588 | 3360 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 5 | 0 |
| 0a_wizcrypha | 2498 | 3200 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 5 | 3 | 0 | 3 | 3 | 3 | 1 |
| 06_oblid | 2433 | 3500 | 0 | 2 | 0 | 0 | 0 | 7 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 |
| 05_old_face | 2431 | 4100 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 3 | 3 | 0 | 0 | 1 |
| 0a_cursed_demon | 2424 | 3780 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 4 | 4 | 0 | 2 | 0 | 0 | 0 |
| 02_karasu | 2420 | 3800 | 0 | 2 | 0 | 1 | 0 | 0 | 1 | 0 | 0 | 2 | 1 | 0 | 1 | 5 |
| 0c_old_face | 2406 | 3200 | 2 | 0 | 3 | 2 | 0 | 0 | 3 | 0 | 1 | 0 | 0 | 0 | 0 | 1 |
| 08_war_demon_1 | 2403 | 3500 | 3 | 1 | 0 | 0 | 1 | 0 | 3 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |
| 08_claw_head | 2360 | 3600 | 0 | 0 | 3 | 0 | 3 | 5 | 4 | 4 | 2 | 3 | 0 | 0 | 0 | 0 |
| 00_master_knight | 2355 | 3200 | 2 | 2 | 3 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 01_gorthaur | 2154 | 3450 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 10 | 7 | 1 | 0 | 0 | 0 |
| 0d_saurian_warrior_b | 2064 | 2800 | 1 | 0 | 3 | 0 | 4 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| 0c_saurian_warrior_a | 2046 | 2800 | 0 | 1 | 3 | 2 | 3 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 01_disguise | 2045 | 2700 | 0 | 5 | 0 | 0 | 0 | 0 | 0 | 21 | 7 | 3 | 8 | 0 | 0 | 0 |
| 08_apocrypha | 1964 | 2000 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 1 | 2 | 0 | 0 | 0 |
| 00_hell_hunter | 1952 | 3600 | 0 | 6 | 0 | 0 | 0 | 1 | 4 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0e_claw_head | 1952 | 3600 | 0 | 6 | 0 | 0 | 0 | 1 | 4 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 04_king_hopper | 1916 | 3230 | 1 | 0 | 0 | 0 | 0 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 00_dark_spirits | 1869 | 2040 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
| 09_war_demon_2 | 1867 | 2800 | 2 | 0 | 2 | 0 | 0 | 4 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |
| 04_dark_spirits | 1831 | 2040 | 0 | 2 | 0 | 0 | 0 | 0 | 3 | 0 | 0 | 0 | 0 | 0 | 1 | 2 |
| 00_red_puppet | 1831 | 2040 | 0 | 2 | 0 | 0 | 0 | 0 | 3 | 0 | 0 | 0 | 0 | 0 | 1 | 2 |
| 09_descrypha | 1830 | 1800 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 1 | 0 | 0 | 2 | 0 |
| 05_dark_spirits | 1814 | 2040 | 0 | 2 | 0 | 0 | 0 | 0 | 3 | 0 | 0 | 0 | 0 | 0 | 1 | 2 |
| 01_dark_spirits | 1814 | 2040 | 0 | 2 | 0 | 0 | 0 | 0 | 3 | 0 | 0 | 0 | 0 | 0 | 1 | 2 |
| 04_dread_knight | 1808 | 2400 | 10 | 0 | 0 | 3 | 8 | 6 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 7 |
| 09_pulsating_heart | 1767 | 2000 | 6 | 2 | 0 | 0 | 6 | 0 | 1 | 6 | 0 | 0 | 6 | 4 | 4 | 4 |
| 04_zygote | 1758 | 2000 | 0 | 0 | 1 | 0 | 2 | 0 | 0 | 3 | 1 | 0 | 0 | 0 | 0 | 0 |
| 08_hermit_crab | 1721 | 2420 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 0 | 5 | 0 | 0 | 3 |
| 0d_blood_bone | 1685 | 2820 | 0 | 3 | 0 | 0 | 3 | 0 | 0 | 1 | 3 | 0 | 2 | 3 | 0 | 3 |
| 09_dementor | 1596 | 2270 | 4 | 0 | 1 | 0 | 0 | 0 | 3 | 1 | 0 | 0 | 0 | 1 | 0 | 1 |
| 0c_death_mage | 1572 | 1800 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 5 | 0 | 2 | 0 | 0 | 0 |
| 09_koazul | 1561 | 1540 | 2 | 0 | 0 | 0 | 1 | 0 | 1 | 3 | 0 | 0 | 0 | 0 | 0 | 1 |
| 04_demon_warrior | 1559 | 1880 | 2 | 1 | 0 | 0 | 1 | 1 | 2 | 1 | 0 | 0 | 0 | 0 | 0 | 1 |
| 0e_dinogon | 1506 | 2020 | 0 | 3 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 1 | 0 | 4 | 0 | 0 |
| 04_great_frog | 1505 | 2740 | 5 | 0 | 2 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 4 | 0 | 4 | 0 |
| 0d_slasher | 1446 | 1620 | 0 | 2 | 0 | 0 | 5 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 04_kabasaur | 1445 | 1700 | 3 | 0 | 0 | 1 | 0 | 2 | 0 | 1 | 0 | 0 | 0 | 0 | 1 | 0 |
| 00_kabasaur | 1445 | 1700 | 3 | 0 | 0 | 1 | 0 | 2 | 0 | 1 | 0 | 0 | 0 | 0 | 1 | 0 |
| 01_chirper | 1418 | 2520 | 5 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 0 | 0 |
| 0e_manna_python | 1327 | 1980 | 2 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 |
| 08_ring_demon | 1302 | 2050 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 2 | 3 | 0 | 0 | 0 |
| 05_hell_hunter | 1281 | 2100 | 0 | 0 | 1 | 2 | 1 | 1 | 2 | 1 | 2 | 1 | 1 | 0 | 0 | 2 |
| 05_water_knight | 1238 | 1580 | 0 | 0 | 2 | 0 | 0 | 1 | 4 | 0 | 0 | 1 | 0 | 0 | 1 | 0 |
| 0a_dark_bishop | 1224 | 1560 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 3 | 0 | 0 | 0 | 0 | 1 |
| 05_master_howler | 1220 | 1450 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 1 | 5 | 8 |
| 09_cross_breed | 1205 | 1800 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 1 | 1 | 0 | 0 | 2 |
| 0d_arachness | 1129 | 1270 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 3 | 4 | 0 | 0 | 1 | 0 | 0 |
| 00_winged_worm | 1106 | 1720 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 3 | 0 | 0 | 0 |
| 04_berzerker | 1082 | 1380 | 1 | 1 | 1 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |
| 01_berzerker | 1082 | 1380 | 1 | 1 | 1 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |
| 00_berzerker | 1082 | 1380 | 1 | 1 | 1 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |
| 08_berzerker | 1082 | 1380 | 1 | 1 | 1 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |
| 0c_worm_face | 1055 | 1410 | 3 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 1 | 0 |
| 05_armored_jinn | 1039 | 720 | 0 | 0 | 0 | 0 | 1 | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 0 | 0 |
| 06_black_imp | 1009 | 1040 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 0 | 7 | 0 | 0 | 3 |
| 02_dark_imp | 1009 | 1040 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 0 | 7 | 0 | 0 | 3 |
| 0d_damned_angel | 973 | 1280 | 3 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 4 | 0 | 0 | 0 | 2 | 0 |
| 08_clay_servant | 910 | 980 | 2 | 0 | 2 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 08_torg | 895 | 1200 | 2 | 0 | 1 | 2 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 00_earth_knight | 887 | 970 | 0 | 3 | 2 | 0 | 2 | 0 | 0 | 1 | 0 | 2 | 0 | 0 | 0 | 1 |
| 01_earth_knight | 887 | 970 | 0 | 3 | 2 | 0 | 2 | 0 | 0 | 1 | 0 | 2 | 0 | 0 | 0 | 1 |
| 05_earth_knight | 887 | 970 | 0 | 3 | 2 | 0 | 2 | 0 | 0 | 1 | 0 | 2 | 0 | 0 | 0 | 1 |
| 00_night_howler | 869 | 950 | 2 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 04_night_howler | 869 | 950 | 2 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 00_black_onyx | 865 | 750 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 1 | 1 | 0 | 1 | 0 | 0 | 2 |
| 09_dark_fairy | 864 | 1032 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 2 | 0 | 0 | 2 |
| 09_iron_crusher | 861 | 1100 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 0 | 0 | 0 | 0 | 1 | 2 | 0 |
| 0d_dweller | 861 | 1100 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 0 | 0 | 0 | 0 | 1 | 2 | 0 |
| 06_warpoor | 849 | 1120 | 1 | 0 | 0 | 3 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 1 | 2 | 0 |
| 0a_warpoor | 849 | 1120 | 1 | 0 | 0 | 3 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 1 | 2 | 0 |
| 0c_ray_plant | 846 | 1080 | 0 | 0 | 0 | 0 | 5 | 0 | 0 | 0 | 5 | 0 | 0 | 0 | 0 | 0 |
| 08_guardian_b | 841 | 870 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 1 | 0 | 0 | 0 | 0 | 1 |
| 04_kiljoy | 826 | 720 | 0 | 2 | 0 | 0 | 4 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 04_auriel_b | 813 | 1000 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0e_mystic_tower | 794 | 1050 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 | 0 |
| 02_mystic_tower | 794 | 1050 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 | 0 |
| 06_mystic_tower | 794 | 1050 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 | 0 |
| 05_warden | 775 | 1110 | 0 | 0 | 5 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 0 |
| 02_gordoral | 743 | 850 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 5 | 0 | 0 |
| 06_gordoral | 743 | 850 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 5 | 0 | 0 |
| 0a_dweller | 730 | 1160 | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 1 | 0 |
| 06_dweller | 730 | 1160 | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 1 | 0 |
| 0c_gaze_hopper | 686 | 650 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 1 | 2 | 0 | 0 | 0 | 0 | 2 |
| 05_gargaral | 673 | 750 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 5 | 0 | 0 |
| 01_gargaral | 673 | 750 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 5 | 0 | 0 |
| 0a_rotting_face | 668 | 420 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 5 | 5 | 1 | 0 | 0 | 0 | 7 |
| 0e_rotting_face | 668 | 420 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 5 | 5 | 1 | 0 | 0 | 0 | 7 |
| 02_sand_leech_b | 643 | 700 | 1 | 0 | 0 | 0 | 1 | 1 | 1 | 0 | 0 | 0 | 1 | 0 | 0 | 0 |
| 09_sloth_bug | 618 | 560 | 1 | 0 | 3 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0a_barrel_snail | 618 | 560 | 1 | 0 | 3 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0c_maristella | 600 | 820 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 2 | 0 | 0 | 0 |
| 01_myconid | 591 | 850 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 0 | 0 | 0 | 0 | 0 |
| 05_hobble_worm | 589 | 620 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 2 | 0 | 0 | 0 | 2 |
| 02_horned_slime | 575 | 620 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 |
| 05_horned_slime | 575 | 620 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 |
| 01_horned_slime | 575 | 620 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 |
| 0a_horned_slime | 575 | 620 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 |
| 09_cocoon_plant | 523 | 320 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 0 |
| 02_blood_brain | 519 | 590 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 1 | 0 |
| 05_blood_brain | 519 | 590 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 1 | 0 |
| 08_casket | 486 | 261 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 1 | 2 | 0 | 0 | 1 |
| 0d_trickster | 479 | 380 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 4 | 2 |
| 06_elder | 473 | 608 | 0 | 0 | 0 | 1 | 0 | 1 | 1 | 0 | 0 | 0 | 0 | 2 | 1 | 0 |
| 02_elder | 473 | 608 | 0 | 0 | 0 | 1 | 0 | 1 | 1 | 0 | 0 | 0 | 0 | 2 | 1 | 0 |
| 0e_elder | 473 | 608 | 0 | 0 | 0 | 1 | 0 | 1 | 1 | 0 | 0 | 0 | 0 | 2 | 1 | 0 |
| 04_cannon_snail | 466 | 640 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 2 | 0 |
| 0a_guardian_a | 465 | 480 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 1 | 0 | 0 | 0 | 0 | 1 |
| 09_dwarf_warrior | 427 | 382 | 1 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 |
| 06_fanged_worm | 416 | 434 | 1 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 1 | 2 | 0 | 0 | 0 | 0 |
| 02_dead_abraxus | 414 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 5 | 2 | 1 | 0 | 5 | 0 | 4 |
| 01_beak_plant | 407 | 480 | 0 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 |
| 08_star_serpent | 401 | 454 | 0 | 0 | 0 | 2 | 0 | 1 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 |
| 0c_dybbuk | 391 | 520 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 00_duhrin | 378 | 600 | 0 | 0 | 0 | 5 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 00_dybbuk | 369 | 520 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 04_dybbuk | 369 | 520 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0c_barrel_snail | 367 | 560 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 02_watcher_plant | 354 | 354 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 |
| 00_watcher_plant | 354 | 354 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 |
| 0e_watcher_plant | 354 | 354 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 |
| 02_parasite | 350 | 220 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 1 | 2 | 0 | 0 | 2 |
| 01_blue_flicker | 345 | 440 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | 0 |
| 02_skeleton | 332 | 384 | 0 | 1 | 0 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 |
| 0a_skeleton | 332 | 384 | 0 | 1 | 0 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 |
| 0d_tondrom | 320 | 280 | 0 | 0 | 1 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 08_trickster | 298 | 380 | 0 | 0 | 1 | 1 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 |
| 0d_cocoon_plant | 297 | 320 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 01_acid_pod | 297 | 320 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 05_acid_pod | 297 | 320 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 05_cocoon_plant | 297 | 320 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 00_gorgoral | 288 | 100 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 1 | 5 | 0 | 0 | 0 | 0 |
| 00_acid_skull | 283 | 280 | 0 | 0 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0d_crying_root | 282 | 350 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 |
| 04_minor_dwarf | 278 | 308 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 01_blood_skull | 268 | 263 | 0 | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 05_blood_skull | 268 | 263 | 0 | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 09_imp | 252 | 308 | 0 | 1 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 01_shadow_spider | 247 | 240 | 0 | 0 | 1 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 09_shadow_spider | 247 | 240 | 0 | 0 | 1 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 02_tongue_imp | 246 | 162 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 |
| 06_tongue_imp | 246 | 162 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 |
| 02_lizard_servant | 238 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 06_lizard_servant | 238 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 01_demon_bat | 202 | 135 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 0 | 1 | 1 | 0 | 1 | 0 | 0 |
| 09_demon_bat | 202 | 135 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 0 | 1 | 1 | 0 | 1 | 0 | 0 |
| 02_blood_slime | 176 | 96 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 09_blood_slime | 176 | 96 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 05_blood_slime | 176 | 96 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 01_blood_slime | 176 | 96 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 0c_hanging_dead | 168 | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 |
| 08_dark_spider | 158 | 121 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 00_dark_spider | 158 | 121 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 00_acid_slime | 148 | 95 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 04_acid_slime | 148 | 95 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 01_acid_slime | 148 | 95 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 00_sand_leech_a | 115 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0 |
| 05_dwarfling | 88 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

---

## Power Score Formula

```
Power = STR×2 + SPD×1 + DEF×3 + BAL×1 +
        SLA×1.5 + SMH×1.5 + PIR×1.5 + SPR×1.5 +
        FOC×1 + HAM×1 + PUR×1.5 + PAR×1 +
        MEL×2 + SOL×1.5 +
        HP×0.5 +
        EntityStateData attacks×0.3 +
        Base attacks×3 +
        Defenses×0.1
```

