# Shadow Tower Creature Power Value Table

**Generated:** 2025-12-20T13:38:15.424Z

**Purpose:** Verify PR #14 magic/projectile attack damage scaling fix

This table shows power values for all creatures, including:
- **Type 0x20**: Physical attack EntityStateData
- **Type 0x30**: Spell/Magic attack EntityStateData (fixed in PR #14)

---

## Summary Statistics

- **Total Unique Creatures**: 205
- **Creatures with Physical Attacks (0x20)**: 125
- **Creatures with Magic Attacks (0x30)**: 148
- **Average Power Score**: 2980
- **Highest Power Score**: 33891
- **Lowest Power Score**: 154

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
| 00_abraxus | 33891 | 65535 | 11 | - | 95/181/181; 95/181/181 | fire world molten cavern |
| 0a_demons_eye | 33713 | 820 | 12 | - | 222/1 | illusion world gloomy dom |
| 0d_fat_mole_e | 32897 | 65535 | 13 | - | - | death world undead layer |
| 02_fat_mole_d | 32870 | 65535 | 14 | - | - | illusion world worship do |
| 00_fat_mole_f | 32864 | 65535 | 10 | - | - | water world impure pool a |
| 08_fat_mole_b | 32819 | 65535 | 11 | - | - | fire world molten cavern |
| 0c_fat_mole_c | 32819 | 65535 | 11 | - | - | fire world molten cavern |
| 04_fat_mole_a | 32768 | 65535 | 2 | - | - | human world cursed region |
| 0d_hatchlin | 15946 | 1460 | 13 | - | 76 | death world gate of the d |
| 09_cerberus | 8038 | 2300 | 10 | - | 99/3; 59 | water world impure pool a |
| 04_jinn_lord | 7891 | 1920 | 9 | - | 86/20; 85 | fire world phoenix cave |
| 01_unknown_b | 6051 | 7560 | 13 | 520/450/550; 620/480/550 | 124; 125 | death world undead layer |
| 01_auriel_c | 5994 | 7560 | 11 | 550/450/540; 550/450/540 | 160; 161 | monster world screeching  |
| 0c_hollow_mage | 5362 | 7800 | 13 | - | 59; 64 | death world gate of the d |
| 04_king_edward | 5138 | 6500 | 13 | 50/45/50; 40/40/20; 90/40/80 | 246 | death world undead layer |
| 04_wildowess | 5080 | 6600 | 14 | 205/150/340 | 242 | illusion world worship do |
| 06_hell_warrior | 4836 | 5800 | 11 | 450/300/310 | - | fire world ashen cavern |
| 00_unused_a | 4762 | 6000 | 13 | - | - | death world gate of the d |
| 09_steel_servant | 4725 | 1810 | 16 | 155/182/130; 180/210/178; 180/300/178 | 94/2 | monster world false eye a |
| 0e_necron | 4639 | 4800 | 11 | 340/290/460; 100/120/400; 350/250/270 | 164/308; 163/279; 162/365 | monster world screeching  |
| 0a_ruby_demon | 4635 | 2260 | 13 | 188/148/120 | 219/55 | death world lingering cur |
| 0c_ebony_knight | 4506 | 4270 | 11 | 305/252/230; 225/230/305; 300/190/128 | 104; 105 | fire world ashen cavern |
| 01_doriwi | 4308 | 4800 | 2 | 300/320/450 | 59 | human world hidden region |
| 05_doriwi | 4308 | 4800 | 12 | 300/320/450 | 59 | death world dark castle l |
| 05_horned_skull | 4221 | 1550 | 5 | 120/137/253 | 88/24 | earth world rotting caver |
| 01_horned_skull | 4221 | 1550 | 7 | 120/137/253 | 88/24 | earth world false pit cav |
| 00_bone_demon | 4189 | 1480 | 13 | 140/200/110 | 99/100/101 | death world lingering cur |
| 0a_bone_wolf | 4051 | 4100 | 2 | 250/420/250 | 59 | human world hidden region |
| 02_bone_wolf | 4051 | 4100 | 19 | 250/420/250 | 59 | water world watery labyri |
| 08_oxelus | 3890 | 5700 | 11 | 395/260/345; 145/120/185 | 158/24 | fire world molten cavern |
| 0d_bugler | 3740 | 4200 | 11 | - | 240 | monster world screeching  |
| 08_armored_guardian | 3681 | 4200 | 12 | 380/460/280; 365/335/240 | - | death world dark castle l |
| 02_fire_jinn | 3624 | 572 | 6 | 120/115/95 | 88/27 | earth world quaking caver |
| 06_fire_jinn | 3624 | 572 | 12 | 120/115/95 | 88/27 | water world sunken river  |
| 05_magi_magus | 3582 | 3730 | 13 | - | 117/298; 118 | water world white rain ar |
| 06_armored_slayer | 3424 | 3800 | 10 | 430/330/250; 340/440/310 | - | water world impure pool a |
| 0a_armored_slayer | 3424 | 3800 | 16 | 430/330/250; 340/440/310 | - | monster world false eye a |
| 0a_wizcrypha | 3368 | 3200 | 11 | - | 133/24; 132/24; 76 | fire world ashen cavern |
| 04_tree_ogre | 3365 | 4900 | 12 | 250/311/280 | 122/12 | death world dark castle l |
| 09_freak | 3357 | 3600 | 16 | 210/280/370; 210/210/310; 240/230/260 | 71/232/380; 59 | monster world false eye a |
| 0d_death_serpent | 3292 | 4730 | 19 | 355/430/265 | 166/82; 59 | water world watery labyri |
| 08_wyvern | 3249 | 4500 | 11 | 180/150/220 | 230/293 | monster world screeching  |
| 05_armored_warrior | 3192 | 3900 | 10 | 430/350/260; 350/413/220 | - | water world impure pool a |
| 09_armored_warrior | 3192 | 3900 | 16 | 430/350/260; 350/413/220 | - | monster world false eye a |
| 01_stack_eyes | 3108 | 4150 | 2 | 310/380/305 | 131/11; 131/11; 131/11 | human world hidden region |
| 08_fester | 3090 | 4650 | 14 | - | 145 | illusion world worship do |
| 0c_old_face | 2958 | 3200 | 13 | 300/390/280 | 59; 68 | death world gate of the d |
| 0d_deha | 2873 | 3360 | 11 | 220/250/172; 210/270/152; 120/250/202 | 139/137 | monster world screeching  |
| 04_dragon_turtle | 2835 | 4050 | 13 | 228/370/220 | 116/115 | water world white rain ar |
| 08_apocrypha | 2831 | 2000 | 13 | - | 225/100; 225/100 | illusion world bewilderme |
| 08_claw_head | 2828 | 3600 | 5 | 240/120/160 | - | earth world rotting caver |
| 05_old_face | 2803 | 4100 | 11 | - | 128 | fire world ashen cavern |
| 00_panak | 2744 | 5100 | 13 | - | - | death world lingering cur |
| 02_karasu | 2741 | 3800 | 1 | 310/288/213 | - | human world solitary regi |
| 0a_cursed_demon | 2700 | 3780 | 6 | 390/200/325 | 76 | earth world quaking caver |
| 09_descrypha | 2697 | 1800 | 13 | - | 228/100; 228/100 | illusion world bewilderme |
| 00_master_knight | 2637 | 3200 | 5 | 380/260/210; 200/160/390 | - | earth world poisonous cav |
| 06_oblid | 2619 | 3500 | 2 | 243/330/271; 320/280/225 | - | human world cursed region |
| 08_war_demon_1 | 2607 | 3500 | 3 | 290/285/150; 295/305/110 | - | human world forgotten reg |
| 01_disguise | 2573 | 2700 | 15 | - | 151; 150/23 | illusion world dream doma |
| 01_gorthaur | 2379 | 3450 | 14 | 195/110/180 | 146 | illusion world worship do |
| 0d_saurian_warrior_b | 2271 | 2800 | 13 | 255/350/175 | 59 | death world gate of the d |
| 0c_saurian_warrior_a | 2253 | 2800 | 2 | 355/280/175 | - | human world cursed region |
| 04_king_hopper | 2198 | 3230 | 12 | - | 159/1 | water world sunken river  |
| 09_war_demon_2 | 2071 | 2800 | 1 | 290/125/110; 205/75/60 | - | human world solitary regi |
| 00_dark_spirits | 2049 | 2040 | 12 | - | 153/8; 154/91; 152/92 | illusion world gloomy dom |
| 04_dread_knight | 2039 | 2400 | 8 | 190/145/112; 110/155/245 | 84 | earth world hostile rock  |
| 00_red_puppet | 2011 | 2040 | 10 | 120/140/370; 355/110/125 | - | fire world burning cavern |
| 04_dark_spirits | 2011 | 2040 | 13 | 120/140/370; 355/110/125 | - | illusion world bewilderme |
| 01_dark_spirits | 1994 | 2040 | 6 | 115/135/290; 375/105/135 | - | earth world stone cavern |
| 05_dark_spirits | 1994 | 2040 | 14 | 115/135/290; 375/105/135 | - | illusion world worship do |
| 0c_death_mage | 1956 | 1800 | 9 | 170/80/100 | 142 | fire world phoenix cave |
| 00_hell_hunter | 1952 | 3600 | 11 | - | 120/11; 121/11 | fire world ashen cavern |
| 0e_claw_head | 1952 | 3600 | 13 | - | 120/11; 121/11 | death world undead layer |
| 04_zygote | 1941 | 2000 | 9 | 155/298/140 | 102; 244 | fire world phoenix cave |
| 08_hermit_crab | 1901 | 2420 | 5 | 250/320/270 | 157 | earth world poisonous cav |
| 04_demon_warrior | 1799 | 1880 | 5 | 248/145/270; 180/175/150 | 143 | earth world rotting caver |
| 09_pulsating_heart | 1767 | 2000 | 13 | 150/100/140 | 127/40/84 | death world undead layer |
| 09_koazul | 1750 | 1540 | 19 | 260/110/230; 270/140/260 | 113/38 | water world watery labyri |
| 09_dementor | 1722 | 2270 | 11 | 250/160/132; 195/150/118 | - | fire world ashen cavern |
| 0e_dinogon | 1701 | 2020 | 2 | 165/368/260 | 156/57 | human world hidden region |
| 0d_blood_bone | 1685 | 2820 | 5 | 250/205/150 | 76 | earth world rotting caver |
| 0d_slasher | 1638 | 1620 | 5 | 255/125/195 | 115/398/405 | earth world rotting caver |
| 04_kabasaur | 1625 | 1700 | 11 | 305/250/140; 230/300/115 | - | fire world molten cavern |
| 00_kabasaur | 1625 | 1700 | 11 | 305/250/140; 230/300/115 | - | fire world molten cavern |
| 04_great_frog | 1547 | 2740 | 19 | - | - | water world watery labyri |
| 01_chirper | 1526 | 2520 | 10 | - | 59 | fire world burning cavern |
| 08_ring_demon | 1476 | 2050 | 12 | - | 235/7 | illusion world gloomy dom |
| 0e_manna_python | 1471 | 1980 | 13 | 145/190/140 | 112/3 | illusion world bewilderme |
| 05_water_knight | 1421 | 1580 | 16 | 135/185/100; 135/185/100 | - | monster world false eye a |
| 05_master_howler | 1388 | 1450 | 16 | 360/355/260 | - | monster world false eye a |
| 05_hell_hunter | 1353 | 2100 | 1 | 140/120/105 | - | human world solitary regi |
| 0a_dark_bishop | 1344 | 1560 | 5 | 130/250/97 | 137 | earth world poisonous cav |
| 00_winged_worm | 1340 | 1720 | 12 | - | 119; 59 | death world dark castle l |
| 09_cross_breed | 1337 | 1800 | 13 | - | 149/56/89; 59 | death world lingering cur |
| 0d_arachness | 1303 | 1270 | 11 | 245/180/140 | 96; 87 | monster world screeching  |
| 04_berzerker | 1235 | 1380 | 5 | 180/243/121 | 89 | earth world poisonous cav |
| 01_berzerker | 1235 | 1380 | 9 | 180/243/121 | 89 | fire world phoenix cave |
| 00_berzerker | 1235 | 1380 | 10 | 180/243/121 | 89 | fire world burning cavern |
| 08_berzerker | 1235 | 1380 | 10 | 180/243/121 | 89 | fire world burning cavern |
| 0c_worm_face | 1199 | 1410 | 10 | 135/150/110 | 108/126 | fire world burning cavern |
| 04_auriel_b | 1182 | 1000 | 5 | - | - | earth world poisonous cav |
| 05_armored_jinn | 1159 | 720 | 19 | 250/200/172 | 87/7 | water world watery labyri |
| 0d_damned_angel | 1141 | 1280 | 11 | - | 101 | fire world ashen cavern |
| 06_black_imp | 1093 | 1040 | 10 | - | 245; 76 | water world impure pool a |
| 02_dark_imp | 1093 | 1040 | 11 | - | 245; 76 | monster world screeching  |
| 0a_rotting_face | 1073 | 420 | 1 | - | 76; 144 | human world solitary regi |
| 0e_rotting_face | 1073 | 420 | 14 | - | 76; 144 | illusion world worship do |
| 08_clay_servant | 1039 | 980 | 6 | 102/275/96; 128/196/86 | - | earth world stone cavern |
| 05_earth_knight | 1022 | 970 | 8 | 122/88/62; 65/42/124; 45/22/194 | - | earth world hostile rock  |
| 00_earth_knight | 1022 | 970 | 11 | 122/88/62; 65/42/124; 45/22/194 | - | monster world screeching  |
| 01_earth_knight | 1022 | 970 | 16 | 122/88/62; 65/42/124; 45/22/194 | - | monster world false eye a |
| 04_night_howler | 1019 | 950 | 11 | 320/245/236 | - | fire world molten cavern |
| 00_night_howler | 1019 | 950 | 13 | 320/245/236 | - | illusion world bewilderme |
| 08_torg | 1015 | 1200 | 19 | 98/200/42 | 71/173 | water world watery labyri |
| 00_black_onyx | 997 | 750 | 7 | 142/120/90 | 211/55 | earth world false pit cav |
| 06_warpoor | 990 | 1120 | 13 | - | 147; 246 | illusion world bewilderme |
| 0a_warpoor | 990 | 1120 | 13 | - | 147; 246 | death world undead layer |
| 09_iron_crusher | 975 | 1100 | 10 | - | 93/0; 92/115/116 | fire world burning cavern |
| 0d_dweller | 975 | 1100 | 13 | - | 93/0; 92/115/116 | water world white rain ar |
| 09_dark_fairy | 972 | 1032 | 15 | - | 135/122/159 | illusion world dream doma |
| 04_kiljoy | 922 | 720 | 8 | 180/59/112; 191/65/122; 201/85/164 | - | earth world hostile rock  |
| 0c_ray_plant | 921 | 1080 | 6 | - | 208/175; 245 | earth world quaking caver |
| 08_guardian_b | 916 | 870 | 7 | 92/70/148; 92/70/218 | 200/1 | earth world false pit cav |
| 02_mystic_tower | 890 | 1050 | 7 | - | 216/13; 91 | earth world false pit cav |
| 0e_mystic_tower | 890 | 1050 | 12 | - | 216/13; 91 | illusion world gloomy dom |
| 06_mystic_tower | 890 | 1050 | 13 | - | 216/13; 91 | death world gate of the d |
| 06_gordoral | 869 | 850 | 12 | - | 238/0 | illusion world gloomy dom |
| 02_gordoral | 869 | 850 | 12 | - | 238/0 | illusion world gloomy dom |
| 02_dead_abraxus | 852 | 1 | 11 | - | - | fire world molten cavern |
| 05_warden | 844 | 1110 | 6 | - | 165/26 | earth world quaking caver |
| 06_dweller | 823 | 1160 | 10 | - | 110 | water world impure pool a |
| 0a_dweller | 823 | 1160 | 13 | - | 110 | death world lingering cur |
| 0c_gaze_hopper | 806 | 650 | 12 | 155/286/125 | 111/35 | death world dark castle l |
| 01_gargaral | 799 | 750 | 12 | - | 140 | illusion world gloomy dom |
| 05_gargaral | 799 | 750 | 13 | - | 140 | illusion world bewilderme |
| 02_sand_leech_b | 763 | 700 | 6 | 82/40/153 | - | earth world quaking caver |
| 0a_barrel_snail | 720 | 560 | 6 | 93/60/155; 130/80/65 | 79 | earth world stone cavern |
| 09_sloth_bug | 720 | 560 | 10 | 93/60/155; 130/80/65 | 79 | water world impure pool a |
| 0c_maristella | 720 | 820 | 13 | - | 136; 68 | death world lingering cur |
| 05_hobble_worm | 697 | 620 | 6 | 90/152/78 | 77/72; 78 | earth world stone cavern |
| 01_myconid | 657 | 850 | 10 | 62/95/50 | 60/4 | water world impure pool a |
| 02_horned_slime | 647 | 620 | 5 | 80/115/125 | 106/102 | earth world rotting caver |
| 01_horned_slime | 647 | 620 | 5 | 80/115/125 | 106/102 | earth world rotting caver |
| 0a_horned_slime | 647 | 620 | 7 | 80/115/125 | 106/102 | earth world false pit cav |
| 05_horned_slime | 647 | 620 | 14 | 80/115/125 | 106/102 | illusion world worship do |
| 09_cocoon_plant | 595 | 320 | 16 | 64/50/108 | 74/275/318 | monster world false eye a |
| 08_casket | 594 | 261 | 13 | - | 243 | death world gate of the d |
| 02_blood_brain | 591 | 590 | 2 | 50/125/86 | 107/33 | human world hidden region |
| 05_blood_brain | 591 | 590 | 6 | 50/125/86 | 107/33 | earth world quaking caver |
| 0d_trickster | 560 | 380 | 11 | 50/80/120 | 62; 242 | fire world ashen cavern |
| 04_cannon_snail | 556 | 640 | 7 | - | 81/2/4 | earth world false pit cav |
| 0e_elder | 545 | 608 | 5 | 58/45/125 | 59 | earth world rotting caver |
| 06_elder | 545 | 608 | 5 | 58/45/125 | 59 | earth world rotting caver |
| 02_elder | 545 | 608 | 13 | 58/45/125 | 59 | death world undead layer |
| 0a_guardian_a | 540 | 480 | 2 | 30/33/91 | 200/1 | human world cursed region |
| 09_dwarf_warrior | 499 | 382 | 5 | 64/40/101; 64/40/131 | - | earth world poisonous cav |
| 06_fanged_worm | 488 | 434 | 2 | 24/63/23 | 51/150 | human world hidden region |
| 0c_dybbuk | 481 | 520 | 6 | - | 75 | earth world stone cavern |
| 01_beak_plant | 479 | 480 | 12 | 50/65/90 | 68 | illusion world gloomy dom |
| 08_star_serpent | 473 | 454 | 19 | 65/79/62 | 58 | water world watery labyri |
| 00_dybbuk | 459 | 520 | 6 | - | - | earth world stone cavern |
| 04_dybbuk | 459 | 520 | 6 | - | - | earth world stone cavern |
| 02_lizard_servant | 430 | 1 | 16 | - | - | monster world false eye a |
| 06_lizard_servant | 430 | 1 | 16 | - | - | monster world false eye a |
| 0e_watcher_plant | 414 | 354 | 5 | 42/65/40 | 202/14 | earth world rotting caver |
| 02_watcher_plant | 414 | 354 | 10 | 42/65/40 | 202/14 | fire world burning cavern |
| 00_watcher_plant | 414 | 354 | 12 | 42/65/40 | 202/14 | illusion world gloomy dom |
| 02_parasite | 410 | 220 | 1 | 78/86/89; 78/76/82 | - | human world solitary regi |
| 0c_barrel_snail | 406 | 560 | 5 | - | 57/2/4 | earth world rotting caver |
| 02_skeleton | 404 | 384 | 2 | 83/35/20 | - | human world hidden region |
| 0a_skeleton | 404 | 384 | 19 | 83/35/20 | - | water world watery labyri |
| 00_duhrin | 399 | 600 | 5 | - | - | earth world poisonous cav |
| 0d_tondrom | 392 | 280 | 2 | 36/121/42 | - | human world cursed region |
| 01_blue_flicker | 381 | 440 | 13 | - | 205/8 | death world gate of the d |
| 00_gorgoral | 378 | 100 | 13 | - | - | illusion world bewilderme |
| 05_acid_pod | 357 | 320 | 2 | - | 62/80 | human world cursed region |
| 05_cocoon_plant | 357 | 320 | 7 | - | 62/80 | earth world false pit cav |
| 0d_cocoon_plant | 357 | 320 | 7 | - | 62/80 | earth world false pit cav |
| 01_acid_pod | 357 | 320 | 13 | - | 62/80 | illusion world bewilderme |
| 08_trickster | 352 | 380 | 12 | - | 67/59 | death world dark castle l |
| 0d_crying_root | 342 | 350 | 6 | - | 80 | earth world stone cavern |
| 04_minor_dwarf | 338 | 308 | 1 | 45/90/26 | - | human world solitary regi |
| 00_acid_skull | 337 | 280 | 3 | 16/16/23 | 54 | human world forgotten reg |
| 01_blood_skull | 316 | 263 | 3 | 15/13/21 | 55 | human world forgotten reg |
| 05_blood_skull | 316 | 263 | 3 | 15/13/21 | 55 | human world forgotten reg |
| 06_tongue_imp | 312 | 162 | 5 | - | 243 | earth world poisonous cav |
| 02_tongue_imp | 312 | 162 | 6 | - | 243 | earth world quaking caver |
| 01_shadow_spider | 307 | 240 | 2 | 3/61/2 | 52 | human world cursed region |
| 09_shadow_spider | 307 | 240 | 2 | 3/61/2 | 52 | human world cursed region |
| 09_imp | 303 | 308 | 2 | - | 56 | human world hidden region |
| 01_demon_bat | 286 | 135 | 13 | - | 48; 48 | illusion world bewilderme |
| 09_demon_bat | 286 | 135 | 14 | - | 48; 48 | illusion world worship do |
| 00_dark_spider | 200 | 121 | 10 | 9/10/20; 11/13/28 | - | water world impure pool a |
| 08_dark_spider | 200 | 121 | 11 | 9/10/20; 11/13/28 | - | fire world molten cavern |
| 01_blood_slime | 200 | 96 | 12 | 13/12/16 | 50 | illusion world gloomy dom |
| 09_blood_slime | 200 | 96 | 12 | 13/12/16 | 50 | death world dark castle l |
| 02_blood_slime | 200 | 96 | 13 | 13/12/16 | 50 | death world undead layer |
| 05_blood_slime | 200 | 96 | 16 | 13/12/16 | 50 | monster world false eye a |
| 0c_hanging_dead | 192 | 200 | 5 | - | 65 | earth world poisonous cav |
| 05_dwarfling | 163 | 1 | 10 | - | - | fire world burning cavern |
| 04_acid_slime | 160 | 95 | 8 | 10/11/13 | 49 | earth world hostile rock  |
| 01_acid_slime | 160 | 95 | 12 | 10/11/13 | 49 | water world sunken river  |
| 00_acid_slime | 160 | 95 | 12 | 10/11/13 | 49 | death world dark castle l |
| 00_sand_leech_a | 154 | 50 | 13 | - | 69/16 | death world lingering cur |

---

## Creatures with Type 0x30 (Magic/Spell Attacks)

**These creatures were fixed in PR #14 to properly scale with difficulty settings.**

| Creature | Power | HP | Magic Attack Values |
|----------|-------|----|--------------------|\n| 00_abraxus | 33891 | 65535 | 95/181/181; 95/181/181 |
| 0a_demons_eye | 33713 | 820 | 222/1 |
| 0d_hatchlin | 15946 | 1460 | 76 |
| 09_cerberus | 8038 | 2300 | 99/3; 59 |
| 04_jinn_lord | 7891 | 1920 | 86/20; 85 |
| 01_unknown_b | 6051 | 7560 | 124; 125 |
| 01_auriel_c | 5994 | 7560 | 160; 161 |
| 0c_hollow_mage | 5362 | 7800 | 59; 64 |
| 04_king_edward | 5138 | 6500 | 246 |
| 04_wildowess | 5080 | 6600 | 242 |
| 09_steel_servant | 4725 | 1810 | 94/2 |
| 0e_necron | 4639 | 4800 | 164/308; 163/279; 162/365 |
| 0a_ruby_demon | 4635 | 2260 | 219/55 |
| 0c_ebony_knight | 4506 | 4270 | 104; 105 |
| 01_doriwi | 4308 | 4800 | 59 |
| 05_doriwi | 4308 | 4800 | 59 |
| 05_horned_skull | 4221 | 1550 | 88/24 |
| 01_horned_skull | 4221 | 1550 | 88/24 |
| 00_bone_demon | 4189 | 1480 | 99/100/101 |
| 0a_bone_wolf | 4051 | 4100 | 59 |
| 02_bone_wolf | 4051 | 4100 | 59 |
| 08_oxelus | 3890 | 5700 | 158/24 |
| 0d_bugler | 3740 | 4200 | 240 |
| 02_fire_jinn | 3624 | 572 | 88/27 |
| 06_fire_jinn | 3624 | 572 | 88/27 |
| 05_magi_magus | 3582 | 3730 | 117/298; 118 |
| 0a_wizcrypha | 3368 | 3200 | 133/24; 132/24; 76 |
| 04_tree_ogre | 3365 | 4900 | 122/12 |
| 09_freak | 3357 | 3600 | 71/232/380; 59 |
| 0d_death_serpent | 3292 | 4730 | 166/82; 59 |
| 08_wyvern | 3249 | 4500 | 230/293 |
| 01_stack_eyes | 3108 | 4150 | 131/11; 131/11; 131/11 |
| 08_fester | 3090 | 4650 | 145 |
| 0c_old_face | 2958 | 3200 | 59; 68 |
| 0d_deha | 2873 | 3360 | 139/137 |
| 04_dragon_turtle | 2835 | 4050 | 116/115 |
| 08_apocrypha | 2831 | 2000 | 225/100; 225/100 |
| 05_old_face | 2803 | 4100 | 128 |
| 0a_cursed_demon | 2700 | 3780 | 76 |
| 09_descrypha | 2697 | 1800 | 228/100; 228/100 |
| 01_disguise | 2573 | 2700 | 151; 150/23 |
| 01_gorthaur | 2379 | 3450 | 146 |
| 0d_saurian_warrior_b | 2271 | 2800 | 59 |
| 04_king_hopper | 2198 | 3230 | 159/1 |
| 00_dark_spirits | 2049 | 2040 | 153/8; 154/91; 152/92 |
| 04_dread_knight | 2039 | 2400 | 84 |
| 0c_death_mage | 1956 | 1800 | 142 |
| 00_hell_hunter | 1952 | 3600 | 120/11; 121/11 |
| 0e_claw_head | 1952 | 3600 | 120/11; 121/11 |
| 04_zygote | 1941 | 2000 | 102; 244 |
| 08_hermit_crab | 1901 | 2420 | 157 |
| 04_demon_warrior | 1799 | 1880 | 143 |
| 09_pulsating_heart | 1767 | 2000 | 127/40/84 |
| 09_koazul | 1750 | 1540 | 113/38 |
| 0e_dinogon | 1701 | 2020 | 156/57 |
| 0d_blood_bone | 1685 | 2820 | 76 |
| 0d_slasher | 1638 | 1620 | 115/398/405 |
| 01_chirper | 1526 | 2520 | 59 |
| 08_ring_demon | 1476 | 2050 | 235/7 |
| 0e_manna_python | 1471 | 1980 | 112/3 |
| 0a_dark_bishop | 1344 | 1560 | 137 |
| 00_winged_worm | 1340 | 1720 | 119; 59 |
| 09_cross_breed | 1337 | 1800 | 149/56/89; 59 |
| 0d_arachness | 1303 | 1270 | 96; 87 |
| 04_berzerker | 1235 | 1380 | 89 |
| 01_berzerker | 1235 | 1380 | 89 |
| 00_berzerker | 1235 | 1380 | 89 |
| 08_berzerker | 1235 | 1380 | 89 |
| 0c_worm_face | 1199 | 1410 | 108/126 |
| 05_armored_jinn | 1159 | 720 | 87/7 |
| 0d_damned_angel | 1141 | 1280 | 101 |
| 06_black_imp | 1093 | 1040 | 245; 76 |
| 02_dark_imp | 1093 | 1040 | 245; 76 |
| 0a_rotting_face | 1073 | 420 | 76; 144 |
| 0e_rotting_face | 1073 | 420 | 76; 144 |
| 08_torg | 1015 | 1200 | 71/173 |
| 00_black_onyx | 997 | 750 | 211/55 |
| 06_warpoor | 990 | 1120 | 147; 246 |
| 0a_warpoor | 990 | 1120 | 147; 246 |
| 09_iron_crusher | 975 | 1100 | 93/0; 92/115/116 |
| 0d_dweller | 975 | 1100 | 93/0; 92/115/116 |
| 09_dark_fairy | 972 | 1032 | 135/122/159 |
| 0c_ray_plant | 921 | 1080 | 208/175; 245 |
| 08_guardian_b | 916 | 870 | 200/1 |
| 02_mystic_tower | 890 | 1050 | 216/13; 91 |
| 0e_mystic_tower | 890 | 1050 | 216/13; 91 |
| 06_mystic_tower | 890 | 1050 | 216/13; 91 |
| 06_gordoral | 869 | 850 | 238/0 |
| 02_gordoral | 869 | 850 | 238/0 |
| 05_warden | 844 | 1110 | 165/26 |
| 06_dweller | 823 | 1160 | 110 |
| 0a_dweller | 823 | 1160 | 110 |
| 0c_gaze_hopper | 806 | 650 | 111/35 |
| 01_gargaral | 799 | 750 | 140 |
| 05_gargaral | 799 | 750 | 140 |
| 0a_barrel_snail | 720 | 560 | 79 |
| 09_sloth_bug | 720 | 560 | 79 |
| 0c_maristella | 720 | 820 | 136; 68 |
| 05_hobble_worm | 697 | 620 | 77/72; 78 |
| 01_myconid | 657 | 850 | 60/4 |
| 02_horned_slime | 647 | 620 | 106/102 |
| 01_horned_slime | 647 | 620 | 106/102 |
| 0a_horned_slime | 647 | 620 | 106/102 |
| 05_horned_slime | 647 | 620 | 106/102 |
| 09_cocoon_plant | 595 | 320 | 74/275/318 |
| 08_casket | 594 | 261 | 243 |
| 02_blood_brain | 591 | 590 | 107/33 |
| 05_blood_brain | 591 | 590 | 107/33 |
| 0d_trickster | 560 | 380 | 62; 242 |
| 04_cannon_snail | 556 | 640 | 81/2/4 |
| 0e_elder | 545 | 608 | 59 |
| 06_elder | 545 | 608 | 59 |
| 02_elder | 545 | 608 | 59 |
| 0a_guardian_a | 540 | 480 | 200/1 |
| 06_fanged_worm | 488 | 434 | 51/150 |
| 0c_dybbuk | 481 | 520 | 75 |
| 01_beak_plant | 479 | 480 | 68 |
| 08_star_serpent | 473 | 454 | 58 |
| 0e_watcher_plant | 414 | 354 | 202/14 |
| 02_watcher_plant | 414 | 354 | 202/14 |
| 00_watcher_plant | 414 | 354 | 202/14 |
| 0c_barrel_snail | 406 | 560 | 57/2/4 |
| 01_blue_flicker | 381 | 440 | 205/8 |
| 05_acid_pod | 357 | 320 | 62/80 |
| 05_cocoon_plant | 357 | 320 | 62/80 |
| 0d_cocoon_plant | 357 | 320 | 62/80 |
| 01_acid_pod | 357 | 320 | 62/80 |
| 08_trickster | 352 | 380 | 67/59 |
| 0d_crying_root | 342 | 350 | 80 |
| 00_acid_skull | 337 | 280 | 54 |
| 01_blood_skull | 316 | 263 | 55 |
| 05_blood_skull | 316 | 263 | 55 |
| 06_tongue_imp | 312 | 162 | 243 |
| 02_tongue_imp | 312 | 162 | 243 |
| 01_shadow_spider | 307 | 240 | 52 |
| 09_shadow_spider | 307 | 240 | 52 |
| 09_imp | 303 | 308 | 56 |
| 01_demon_bat | 286 | 135 | 48; 48 |
| 09_demon_bat | 286 | 135 | 48; 48 |
| 01_blood_slime | 200 | 96 | 50 |
| 09_blood_slime | 200 | 96 | 50 |
| 02_blood_slime | 200 | 96 | 50 |
| 05_blood_slime | 200 | 96 | 50 |
| 0c_hanging_dead | 192 | 200 | 65 |
| 04_acid_slime | 160 | 95 | 49 |
| 01_acid_slime | 160 | 95 | 49 |
| 00_acid_slime | 160 | 95 | 49 |
| 00_sand_leech_a | 154 | 50 | 69/16 |

---

## Full Attribute Table

| Creature | Power | HP | STR | SPD | DEF | BAL | SLA | SMH | PIR | SPR | FOC | HAM | PUR | PAR | MEL | SOL |
|----------|-------|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| 00_abraxus | 33891 | 65535 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 5 | 2 | 1 | 0 | 5 | 0 | 4 |
| 0a_demons_eye | 33713 | 820 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 2 | 2 | 1 |
| 0d_fat_mole_e | 32897 | 65535 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 02_fat_mole_d | 32870 | 65535 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 00_fat_mole_f | 32864 | 65535 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 08_fat_mole_b | 32819 | 65535 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0c_fat_mole_c | 32819 | 65535 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 04_fat_mole_a | 32768 | 65535 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0d_hatchlin | 15946 | 1460 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 10 | 0 | 0 | 0 |
| 09_cerberus | 8038 | 2300 | 0 | 5 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 5 | 0 | 0 | 0 | 0 |
| 04_jinn_lord | 7891 | 1920 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 1 | 2 | 1 | 0 | 3 | 0 | 0 |
| 01_unknown_b | 6051 | 7560 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 01_auriel_c | 5994 | 7560 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0c_hollow_mage | 5362 | 7800 | 0 | 4 | 0 | 2 | 0 | 0 | 1 | 16 | 10 | 0 | 5 | 2 | 0 | 10 |
| 04_king_edward | 5138 | 6500 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 04_wildowess | 5080 | 6600 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 6 | 4 | 0 | 5 | 0 | 0 | 3 |
| 06_hell_warrior | 4836 | 5800 | 0 | 4 | 0 | 1 | 5 | 0 | 0 | 0 | 0 | 2 | 0 | 3 | 0 | 2 |
| 00_unused_a | 4762 | 6000 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 12 | 5 | 0 | 1 |
| 09_steel_servant | 4725 | 1810 | 0 | 0 | 0 | 0 | 0 | 5 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 0e_necron | 4639 | 4800 | 12 | 5 | 0 | 0 | 3 | 2 | 8 | 2 | 2 | 0 | 1 | 0 | 3 | 3 |
| 0a_ruby_demon | 4635 | 2260 | 0 | 1 | 0 | 0 | 1 | 0 | 0 | 1 | 1 | 1 | 0 | 1 | 0 | 0 |
| 0c_ebony_knight | 4506 | 4270 | 0 | 7 | 0 | 0 | 0 | 0 | 4 | 11 | 3 | 9 | 0 | 1 | 0 | 0 |
| 01_doriwi | 4308 | 4800 | 2 | 0 | 2 | 2 | 0 | 5 | 0 | 1 | 0 | 0 | 4 | 0 | 0 | 0 |
| 05_doriwi | 4308 | 4800 | 2 | 0 | 2 | 2 | 0 | 5 | 0 | 1 | 0 | 0 | 4 | 0 | 0 | 0 |
| 05_horned_skull | 4221 | 1550 | 0 | 2 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 1 | 0 | 1 |
| 01_horned_skull | 4221 | 1550 | 0 | 2 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 1 | 0 | 1 |
| 00_bone_demon | 4189 | 1480 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 | 0 | 0 | 1 | 0 | 3 |
| 0a_bone_wolf | 4051 | 4100 | 2 | 0 | 1 | 3 | 0 | 0 | 0 | 0 | 0 | 4 | 1 | 0 | 0 | 2 |
| 02_bone_wolf | 4051 | 4100 | 2 | 0 | 1 | 3 | 0 | 0 | 0 | 0 | 0 | 4 | 1 | 0 | 0 | 2 |
| 08_oxelus | 3890 | 5700 | 0 | 3 | 0 | 0 | 6 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0d_bugler | 3740 | 4200 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 10 | 0 | 0 | 0 | 0 | 0 | 0 |
| 08_armored_guardian | 3681 | 4200 | 7 | 0 | 1 | 0 | 2 | 2 | 0 | 0 | 0 | 0 | 1 | 2 | 0 | 0 |
| 02_fire_jinn | 3624 | 572 | 0 | 0 | 0 | 0 | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 0 | 0 | 0 |
| 06_fire_jinn | 3624 | 572 | 0 | 0 | 0 | 0 | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 0 | 0 | 0 |
| 05_magi_magus | 3582 | 3730 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 10 | 1 | 6 | 0 | 0 | 12 | 9 |
| 06_armored_slayer | 3424 | 3800 | 0 | 0 | 3 | 0 | 3 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 |
| 0a_armored_slayer | 3424 | 3800 | 0 | 0 | 3 | 0 | 3 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 |
| 0a_wizcrypha | 3368 | 3200 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 5 | 3 | 0 | 3 | 3 | 3 | 1 |
| 04_tree_ogre | 3365 | 4900 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 1 | 2 | 0 | 3 | 2 |
| 09_freak | 3357 | 3600 | 0 | 0 | 0 | 2 | 0 | 0 | 6 | 0 | 0 | 4 | 0 | 0 | 0 | 1 |
| 0d_death_serpent | 3292 | 4730 | 0 | 0 | 0 | 6 | 0 | 4 | 0 | 0 | 0 | 0 | 3 | 5 | 0 | 0 |
| 08_wyvern | 3249 | 4500 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 7 | 5 | 4 | 0 | 0 | 0 | 1 |
| 05_armored_warrior | 3192 | 3900 | 3 | 0 | 1 | 0 | 0 | 2 | 1 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |
| 09_armored_warrior | 3192 | 3900 | 3 | 0 | 1 | 0 | 0 | 2 | 1 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |
| 01_stack_eyes | 3108 | 4150 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 7 | 1 | 0 | 0 | 0 |
| 08_fester | 3090 | 4650 | 2 | 3 | 0 | 0 | 0 | 0 | 6 | 0 | 0 | 0 | 2 | 5 | 0 | 0 |
| 0c_old_face | 2958 | 3200 | 2 | 0 | 3 | 2 | 0 | 0 | 3 | 0 | 1 | 0 | 0 | 0 | 0 | 1 |
| 0d_deha | 2873 | 3360 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 5 | 0 |
| 04_dragon_turtle | 2835 | 4050 | 0 | 0 | 7 | 4 | 0 | 0 | 0 | 1 | 0 | 6 | 0 | 0 | 1 | 0 |
| 08_apocrypha | 2831 | 2000 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 1 | 2 | 0 | 0 | 0 |
| 08_claw_head | 2828 | 3600 | 0 | 0 | 3 | 0 | 3 | 5 | 4 | 4 | 2 | 3 | 0 | 0 | 0 | 0 |
| 05_old_face | 2803 | 4100 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 3 | 3 | 0 | 0 | 1 |
| 00_panak | 2744 | 5100 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 02_karasu | 2741 | 3800 | 0 | 2 | 0 | 1 | 0 | 0 | 1 | 0 | 0 | 2 | 1 | 0 | 1 | 5 |
| 0a_cursed_demon | 2700 | 3780 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 4 | 4 | 0 | 2 | 0 | 0 | 0 |
| 09_descrypha | 2697 | 1800 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 1 | 0 | 0 | 2 | 0 |
| 00_master_knight | 2637 | 3200 | 2 | 2 | 3 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 06_oblid | 2619 | 3500 | 0 | 2 | 0 | 0 | 0 | 7 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 |
| 08_war_demon_1 | 2607 | 3500 | 3 | 1 | 0 | 0 | 1 | 0 | 3 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |
| 01_disguise | 2573 | 2700 | 0 | 5 | 0 | 0 | 0 | 0 | 0 | 21 | 7 | 3 | 8 | 0 | 0 | 0 |
| 01_gorthaur | 2379 | 3450 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 10 | 7 | 1 | 0 | 0 | 0 |
| 0d_saurian_warrior_b | 2271 | 2800 | 1 | 0 | 3 | 0 | 4 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| 0c_saurian_warrior_a | 2253 | 2800 | 0 | 1 | 3 | 2 | 3 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 04_king_hopper | 2198 | 3230 | 1 | 0 | 0 | 0 | 0 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 09_war_demon_2 | 2071 | 2800 | 2 | 0 | 2 | 0 | 0 | 4 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |
| 00_dark_spirits | 2049 | 2040 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
| 04_dread_knight | 2039 | 2400 | 10 | 0 | 0 | 3 | 8 | 6 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 7 |
| 00_red_puppet | 2011 | 2040 | 0 | 2 | 0 | 0 | 0 | 0 | 3 | 0 | 0 | 0 | 0 | 0 | 1 | 2 |
| 04_dark_spirits | 2011 | 2040 | 0 | 2 | 0 | 0 | 0 | 0 | 3 | 0 | 0 | 0 | 0 | 0 | 1 | 2 |
| 01_dark_spirits | 1994 | 2040 | 0 | 2 | 0 | 0 | 0 | 0 | 3 | 0 | 0 | 0 | 0 | 0 | 1 | 2 |
| 05_dark_spirits | 1994 | 2040 | 0 | 2 | 0 | 0 | 0 | 0 | 3 | 0 | 0 | 0 | 0 | 0 | 1 | 2 |
| 0c_death_mage | 1956 | 1800 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 5 | 0 | 2 | 0 | 0 | 0 |
| 00_hell_hunter | 1952 | 3600 | 0 | 6 | 0 | 0 | 0 | 1 | 4 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0e_claw_head | 1952 | 3600 | 0 | 6 | 0 | 0 | 0 | 1 | 4 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 04_zygote | 1941 | 2000 | 0 | 0 | 1 | 0 | 2 | 0 | 0 | 3 | 1 | 0 | 0 | 0 | 0 | 0 |
| 08_hermit_crab | 1901 | 2420 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 0 | 5 | 0 | 0 | 3 |
| 04_demon_warrior | 1799 | 1880 | 2 | 1 | 0 | 0 | 1 | 1 | 2 | 1 | 0 | 0 | 0 | 0 | 0 | 1 |
| 09_pulsating_heart | 1767 | 2000 | 6 | 2 | 0 | 0 | 6 | 0 | 1 | 6 | 0 | 0 | 6 | 4 | 4 | 4 |
| 09_koazul | 1750 | 1540 | 2 | 0 | 0 | 0 | 1 | 0 | 1 | 3 | 0 | 0 | 0 | 0 | 0 | 1 |
| 09_dementor | 1722 | 2270 | 4 | 0 | 1 | 0 | 0 | 0 | 3 | 1 | 0 | 0 | 0 | 1 | 0 | 1 |
| 0e_dinogon | 1701 | 2020 | 0 | 3 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 1 | 0 | 4 | 0 | 0 |
| 0d_blood_bone | 1685 | 2820 | 0 | 3 | 0 | 0 | 3 | 0 | 0 | 1 | 3 | 0 | 2 | 3 | 0 | 3 |
| 0d_slasher | 1638 | 1620 | 0 | 2 | 0 | 0 | 5 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 04_kabasaur | 1625 | 1700 | 3 | 0 | 0 | 1 | 0 | 2 | 0 | 1 | 0 | 0 | 0 | 0 | 1 | 0 |
| 00_kabasaur | 1625 | 1700 | 3 | 0 | 0 | 1 | 0 | 2 | 0 | 1 | 0 | 0 | 0 | 0 | 1 | 0 |
| 04_great_frog | 1547 | 2740 | 5 | 0 | 2 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 4 | 0 | 4 | 0 |
| 01_chirper | 1526 | 2520 | 5 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 0 | 0 |
| 08_ring_demon | 1476 | 2050 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 2 | 3 | 0 | 0 | 0 |
| 0e_manna_python | 1471 | 1980 | 2 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 |
| 05_water_knight | 1421 | 1580 | 0 | 0 | 2 | 0 | 0 | 1 | 4 | 0 | 0 | 1 | 0 | 0 | 1 | 0 |
| 05_master_howler | 1388 | 1450 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 1 | 5 | 8 |
| 05_hell_hunter | 1353 | 2100 | 0 | 0 | 1 | 2 | 1 | 1 | 2 | 1 | 2 | 1 | 1 | 0 | 0 | 2 |
| 0a_dark_bishop | 1344 | 1560 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 3 | 0 | 0 | 0 | 0 | 1 |
| 00_winged_worm | 1340 | 1720 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 3 | 0 | 0 | 0 |
| 09_cross_breed | 1337 | 1800 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 1 | 1 | 0 | 0 | 2 |
| 0d_arachness | 1303 | 1270 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 3 | 4 | 0 | 0 | 1 | 0 | 0 |
| 04_berzerker | 1235 | 1380 | 1 | 1 | 1 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |
| 01_berzerker | 1235 | 1380 | 1 | 1 | 1 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |
| 00_berzerker | 1235 | 1380 | 1 | 1 | 1 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |
| 08_berzerker | 1235 | 1380 | 1 | 1 | 1 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |
| 0c_worm_face | 1199 | 1410 | 3 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 1 | 0 |
| 04_auriel_b | 1182 | 1000 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 05_armored_jinn | 1159 | 720 | 0 | 0 | 0 | 0 | 1 | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 0 | 0 |
| 0d_damned_angel | 1141 | 1280 | 3 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 4 | 0 | 0 | 0 | 2 | 0 |
| 06_black_imp | 1093 | 1040 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 0 | 7 | 0 | 0 | 3 |
| 02_dark_imp | 1093 | 1040 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 0 | 7 | 0 | 0 | 3 |
| 0a_rotting_face | 1073 | 420 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 5 | 5 | 1 | 0 | 0 | 0 | 7 |
| 0e_rotting_face | 1073 | 420 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 5 | 5 | 1 | 0 | 0 | 0 | 7 |
| 08_clay_servant | 1039 | 980 | 2 | 0 | 2 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 05_earth_knight | 1022 | 970 | 0 | 3 | 2 | 0 | 2 | 0 | 0 | 1 | 0 | 2 | 0 | 0 | 0 | 1 |
| 00_earth_knight | 1022 | 970 | 0 | 3 | 2 | 0 | 2 | 0 | 0 | 1 | 0 | 2 | 0 | 0 | 0 | 1 |
| 01_earth_knight | 1022 | 970 | 0 | 3 | 2 | 0 | 2 | 0 | 0 | 1 | 0 | 2 | 0 | 0 | 0 | 1 |
| 04_night_howler | 1019 | 950 | 2 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 00_night_howler | 1019 | 950 | 2 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 08_torg | 1015 | 1200 | 2 | 0 | 1 | 2 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 00_black_onyx | 997 | 750 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 1 | 1 | 0 | 1 | 0 | 0 | 2 |
| 06_warpoor | 990 | 1120 | 1 | 0 | 0 | 3 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 1 | 2 | 0 |
| 0a_warpoor | 990 | 1120 | 1 | 0 | 0 | 3 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 1 | 2 | 0 |
| 09_iron_crusher | 975 | 1100 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 0 | 0 | 0 | 0 | 1 | 2 | 0 |
| 0d_dweller | 975 | 1100 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 0 | 0 | 0 | 0 | 1 | 2 | 0 |
| 09_dark_fairy | 972 | 1032 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 2 | 0 | 0 | 2 |
| 04_kiljoy | 922 | 720 | 0 | 2 | 0 | 0 | 4 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0c_ray_plant | 921 | 1080 | 0 | 0 | 0 | 0 | 5 | 0 | 0 | 0 | 5 | 0 | 0 | 0 | 0 | 0 |
| 08_guardian_b | 916 | 870 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 1 | 0 | 0 | 0 | 0 | 1 |
| 02_mystic_tower | 890 | 1050 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 | 0 |
| 0e_mystic_tower | 890 | 1050 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 | 0 |
| 06_mystic_tower | 890 | 1050 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 | 0 |
| 06_gordoral | 869 | 850 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 5 | 0 | 0 |
| 02_gordoral | 869 | 850 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 5 | 0 | 0 |
| 02_dead_abraxus | 852 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 5 | 2 | 1 | 0 | 5 | 0 | 4 |
| 05_warden | 844 | 1110 | 0 | 0 | 5 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 0 |
| 06_dweller | 823 | 1160 | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 1 | 0 |
| 0a_dweller | 823 | 1160 | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 1 | 0 |
| 0c_gaze_hopper | 806 | 650 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 1 | 2 | 0 | 0 | 0 | 0 | 2 |
| 01_gargaral | 799 | 750 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 5 | 0 | 0 |
| 05_gargaral | 799 | 750 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 5 | 0 | 0 |
| 02_sand_leech_b | 763 | 700 | 1 | 0 | 0 | 0 | 1 | 1 | 1 | 0 | 0 | 0 | 1 | 0 | 0 | 0 |
| 0a_barrel_snail | 720 | 560 | 1 | 0 | 3 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 09_sloth_bug | 720 | 560 | 1 | 0 | 3 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0c_maristella | 720 | 820 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 2 | 0 | 0 | 0 |
| 05_hobble_worm | 697 | 620 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 2 | 0 | 0 | 0 | 2 |
| 01_myconid | 657 | 850 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 0 | 0 | 0 | 0 | 0 |
| 02_horned_slime | 647 | 620 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 |
| 01_horned_slime | 647 | 620 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 |
| 0a_horned_slime | 647 | 620 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 |
| 05_horned_slime | 647 | 620 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 |
| 09_cocoon_plant | 595 | 320 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 0 |
| 08_casket | 594 | 261 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 1 | 2 | 0 | 0 | 1 |
| 02_blood_brain | 591 | 590 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 1 | 0 |
| 05_blood_brain | 591 | 590 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 1 | 0 |
| 0d_trickster | 560 | 380 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 4 | 2 |
| 04_cannon_snail | 556 | 640 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 2 | 0 |
| 0e_elder | 545 | 608 | 0 | 0 | 0 | 1 | 0 | 1 | 1 | 0 | 0 | 0 | 0 | 2 | 1 | 0 |
| 06_elder | 545 | 608 | 0 | 0 | 0 | 1 | 0 | 1 | 1 | 0 | 0 | 0 | 0 | 2 | 1 | 0 |
| 02_elder | 545 | 608 | 0 | 0 | 0 | 1 | 0 | 1 | 1 | 0 | 0 | 0 | 0 | 2 | 1 | 0 |
| 0a_guardian_a | 540 | 480 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 1 | 0 | 0 | 0 | 0 | 1 |
| 09_dwarf_warrior | 499 | 382 | 1 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 |
| 06_fanged_worm | 488 | 434 | 1 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 1 | 2 | 0 | 0 | 0 | 0 |
| 0c_dybbuk | 481 | 520 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 01_beak_plant | 479 | 480 | 0 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 |
| 08_star_serpent | 473 | 454 | 0 | 0 | 0 | 2 | 0 | 1 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 |
| 00_dybbuk | 459 | 520 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 04_dybbuk | 459 | 520 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 02_lizard_servant | 430 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 06_lizard_servant | 430 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0e_watcher_plant | 414 | 354 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 |
| 02_watcher_plant | 414 | 354 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 |
| 00_watcher_plant | 414 | 354 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 |
| 02_parasite | 410 | 220 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 1 | 2 | 0 | 0 | 2 |
| 0c_barrel_snail | 406 | 560 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 02_skeleton | 404 | 384 | 0 | 1 | 0 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 |
| 0a_skeleton | 404 | 384 | 0 | 1 | 0 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 |
| 00_duhrin | 399 | 600 | 0 | 0 | 0 | 5 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0d_tondrom | 392 | 280 | 0 | 0 | 1 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 01_blue_flicker | 381 | 440 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | 0 |
| 00_gorgoral | 378 | 100 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 1 | 5 | 0 | 0 | 0 | 0 |
| 05_acid_pod | 357 | 320 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 05_cocoon_plant | 357 | 320 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 0d_cocoon_plant | 357 | 320 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 01_acid_pod | 357 | 320 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 08_trickster | 352 | 380 | 0 | 0 | 1 | 1 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 |
| 0d_crying_root | 342 | 350 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 |
| 04_minor_dwarf | 338 | 308 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 00_acid_skull | 337 | 280 | 0 | 0 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 01_blood_skull | 316 | 263 | 0 | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 05_blood_skull | 316 | 263 | 0 | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 06_tongue_imp | 312 | 162 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 |
| 02_tongue_imp | 312 | 162 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 |
| 01_shadow_spider | 307 | 240 | 0 | 0 | 1 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 09_shadow_spider | 307 | 240 | 0 | 0 | 1 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 09_imp | 303 | 308 | 0 | 1 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 01_demon_bat | 286 | 135 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 0 | 1 | 1 | 0 | 1 | 0 | 0 |
| 09_demon_bat | 286 | 135 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 0 | 1 | 1 | 0 | 1 | 0 | 0 |
| 00_dark_spider | 200 | 121 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 08_dark_spider | 200 | 121 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 01_blood_slime | 200 | 96 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 09_blood_slime | 200 | 96 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 02_blood_slime | 200 | 96 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 05_blood_slime | 200 | 96 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 0c_hanging_dead | 192 | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 |
| 05_dwarfling | 163 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 04_acid_slime | 160 | 95 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 01_acid_slime | 160 | 95 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 00_acid_slime | 160 | 95 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 00_sand_leech_a | 154 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0 |

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

