# Shadow Tower Creature Power Value Table

**Generated:** 2025-12-20T13:39:57.931Z

**Purpose:** Verify PR #14 magic/projectile attack damage scaling fix

This table shows power values for all creatures, including:
- **Type 0x20**: Physical attack EntityStateData
- **Type 0x30**: Spell/Magic attack EntityStateData (fixed in PR #14)

---

## Summary Statistics

- **Total Unique Creatures**: 205
- **Creatures with Physical Attacks (0x20)**: 125
- **Creatures with Magic Attacks (0x30)**: 148
- **Average Power Score**: 2907
- **Highest Power Score**: 33726
- **Lowest Power Score**: 133

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
| 00_abraxus | 33726 | 65535 | 11 | - | 95/181/181; 95/181/181 | fire world molten cavern |
| 0a_demons_eye | 33608 | 820 | 12 | - | 222/1 | illusion world gloomy dom |
| 0d_fat_mole_e | 32867 | 65535 | 13 | - | - | death world undead layer |
| 02_fat_mole_d | 32846 | 65535 | 14 | - | - | illusion world worship do |
| 00_fat_mole_f | 32840 | 65535 | 10 | - | - | water world impure pool a |
| 08_fat_mole_b | 32807 | 65535 | 11 | - | - | fire world molten cavern |
| 0c_fat_mole_c | 32807 | 65535 | 11 | - | - | fire world molten cavern |
| 04_fat_mole_a | 32768 | 65535 | 2 | - | - | human world cursed region |
| 0d_hatchlin | 15910 | 1460 | 6 | - | 76 | earth world quaking caver |
| 09_cerberus | 7984 | 2300 | 13 | - | 99/3; 59 | water world white rain ar |
| 04_jinn_lord | 7837 | 1920 | 9 | - | 86/20; 85 | fire world phoenix cave |
| 01_unknown_b | 5838 | 7560 | 13 | 520/450/550; 620/480/550 | 124; 125 | death world undead layer |
| 01_auriel_c | 5793 | 7560 | 11 | 550/450/540; 550/450/540 | 160; 161 | monster world screeching  |
| 0c_hollow_mage | 5167 | 7800 | 13 | - | 59; 64 | death world gate of the d |
| 04_king_edward | 4829 | 6500 | 13 | 50/45/50; 40/40/20; 90/40/80 | 246 | death world undead layer |
| 04_wildowess | 4765 | 6600 | 14 | 205/150/340 | 242 | illusion world worship do |
| 09_steel_servant | 4674 | 1810 | 11 | 155/182/130; 180/210/178; 180/300/178 | 94/2 | monster world screeching  |
| 06_hell_warrior | 4596 | 5800 | 10 | 450/300/310 | - | fire world burning cavern |
| 0a_ruby_demon | 4575 | 2260 | 13 | 188/148/120 | 219/55 | death world lingering cur |
| 00_unused_a | 4522 | 6000 | 13 | - | - | death world gate of the d |
| 0e_necron | 4459 | 4800 | 11 | 340/290/460; 100/120/400; 350/250/270 | 164/308; 163/279; 162/365 | monster world screeching  |
| 0c_ebony_knight | 4383 | 4270 | 11 | 305/252/230; 225/230/305; 300/190/128 | 104; 105 | fire world ashen cavern |
| 01_horned_skull | 4173 | 1550 | 2 | 120/137/253 | 88/24 | human world cursed region |
| 05_horned_skull | 4173 | 1550 | 16 | 120/137/253 | 88/24 | monster world false eye a |
| 00_bone_demon | 4150 | 1480 | 13 | 140/200/110 | 99/100/101 | death world lingering cur |
| 05_doriwi | 3981 | 4800 | 11 | 300/320/450 | 59 | monster world screeching  |
| 01_doriwi | 3981 | 4800 | 16 | 300/320/450 | 59 | monster world false eye a |
| 02_bone_wolf | 3856 | 4100 | 1 | 250/420/250 | 59 | human world solitary regi |
| 0a_bone_wolf | 3856 | 4100 | 12 | 250/420/250 | 59 | water world sunken river  |
| 08_oxelus | 3779 | 5700 | 11 | 395/260/345; 145/120/185 | 158/24 | fire world molten cavern |
| 02_fire_jinn | 3588 | 572 | 13 | 120/115/95 | 88/27 | illusion world bewilderme |
| 06_fire_jinn | 3588 | 572 | 19 | 120/115/95 | 88/27 | water world watery labyri |
| 08_armored_guardian | 3486 | 4200 | 12 | 380/460/280; 365/335/240 | - | death world dark castle l |
| 0d_bugler | 3425 | 4200 | 16 | - | 240 | monster world false eye a |
| 05_magi_magus | 3276 | 3730 | 13 | - | 117/298; 118 | water world white rain ar |
| 04_tree_ogre | 3239 | 4900 | 12 | 250/311/280 | 122/12 | death world dark castle l |
| 06_armored_slayer | 3235 | 3800 | 13 | 430/330/250; 340/440/310 | - | death world undead layer |
| 0a_armored_slayer | 3235 | 3800 | 13 | 430/330/250; 340/440/310 | - | death world gate of the d |
| 09_freak | 3225 | 3600 | 16 | 210/280/370; 210/210/310; 240/230/260 | 71/232/380; 59 | monster world false eye a |
| 0d_death_serpent | 3187 | 4730 | 19 | 355/430/265 | 166/82; 59 | water world watery labyri |
| 0a_wizcrypha | 3158 | 3200 | 11 | - | 133/24; 132/24; 76 | fire world ashen cavern |
| 08_wyvern | 3117 | 4500 | 2 | 180/150/220 | 230/293 | human world hidden region |
| 09_armored_warrior | 3060 | 3900 | 1 | 430/350/260; 350/413/220 | - | human world solitary regi |
| 05_armored_warrior | 3060 | 3900 | 13 | 430/350/260; 350/413/220 | - | death world gate of the d |
| 01_stack_eyes | 2988 | 4150 | 8 | 310/380/305 | 131/11; 131/11; 131/11 | earth world hostile rock  |
| 08_fester | 2964 | 4650 | 14 | - | 145 | illusion world worship do |
| 0d_deha | 2765 | 3360 | 11 | 220/250/172; 210/270/152; 120/250/202 | 139/137 | monster world screeching  |
| 0c_old_face | 2751 | 3200 | 10 | 300/390/280 | 59; 68 | water world impure pool a |
| 04_dragon_turtle | 2745 | 4050 | 13 | 228/370/220 | 116/115 | water world white rain ar |
| 00_panak | 2714 | 5100 | 13 | - | - | death world lingering cur |
| 05_old_face | 2662 | 4100 | 11 | - | 128 | fire world ashen cavern |
| 08_claw_head | 2648 | 3600 | 13 | 240/120/160 | - | death world undead layer |
| 02_karasu | 2618 | 3800 | 19 | 310/288/213 | - | water world watery labyri |
| 0a_cursed_demon | 2595 | 3780 | 12 | 390/200/325 | 76 | illusion world gloomy dom |
| 08_apocrypha | 2564 | 2000 | 13 | - | 225/100; 225/100 | illusion world bewilderme |
| 06_oblid | 2547 | 3500 | 10 | 243/330/271; 320/280/225 | - | water world impure pool a |
| 00_master_knight | 2529 | 3200 | 10 | 380/260/210; 200/160/390 | - | water world impure pool a |
| 08_war_demon_1 | 2529 | 3500 | 12 | 290/285/150; 295/305/110 | - | illusion world gloomy dom |
| 09_descrypha | 2430 | 1800 | 14 | - | 228/100; 228/100 | illusion world worship do |
| 01_disguise | 2375 | 2700 | 15 | - | 151; 150/23 | illusion world dream doma |
| 01_gorthaur | 2292 | 3450 | 14 | 195/110/180 | 146 | illusion world worship do |
| 0d_saurian_warrior_b | 2193 | 2800 | 11 | 255/350/175 | 59 | fire world molten cavern |
| 0c_saurian_warrior_a | 2175 | 2800 | 7 | 355/280/175 | - | earth world false pit cav |
| 04_king_hopper | 2090 | 3230 | 12 | - | 159/1 | water world sunken river  |
| 09_war_demon_2 | 1993 | 2800 | 2 | 290/125/110; 205/75/60 | - | human world hidden region |
| 00_dark_spirits | 1980 | 2040 | 12 | - | 153/8; 154/91; 152/92 | illusion world gloomy dom |
| 00_hell_hunter | 1952 | 3600 | 11 | - | 120/11; 121/11 | fire world ashen cavern |
| 0e_claw_head | 1952 | 3600 | 13 | - | 120/11; 121/11 | death world undead layer |
| 04_dread_knight | 1949 | 2400 | 8 | 190/145/112; 110/155/245 | 84 | earth world hostile rock  |
| 04_dark_spirits | 1942 | 2040 | 2 | 120/140/370; 355/110/125 | - | human world cursed region |
| 00_red_puppet | 1942 | 2040 | 13 | 120/140/370; 355/110/125 | - | death world gate of the d |
| 05_dark_spirits | 1925 | 2040 | 12 | 115/135/290; 375/105/135 | - | illusion world gloomy dom |
| 01_dark_spirits | 1925 | 2040 | 13 | 115/135/290; 375/105/135 | - | illusion world bewilderme |
| 04_zygote | 1872 | 2000 | 9 | 155/298/140 | 102; 244 | fire world phoenix cave |
| 08_hermit_crab | 1832 | 2420 | 5 | 250/320/270 | 157 | earth world poisonous cav |
| 0c_death_mage | 1809 | 1800 | 9 | 170/80/100 | 142 | fire world phoenix cave |
| 09_pulsating_heart | 1767 | 2000 | 13 | 150/100/140 | 127/40/84 | death world undead layer |
| 04_demon_warrior | 1709 | 1880 | 16 | 248/145/270; 180/175/150 | 143 | monster world false eye a |
| 0d_blood_bone | 1685 | 2820 | 10 | 250/205/150 | 76 | water world impure pool a |
| 09_koazul | 1678 | 1540 | 11 | 260/110/230; 270/140/260 | 113/38 | monster world screeching  |
| 09_dementor | 1674 | 2270 | 6 | 250/160/132; 195/150/118 | - | earth world quaking caver |
| 0e_dinogon | 1626 | 2020 | 19 | 165/368/260 | 156/57 | water world watery labyri |
| 0d_slasher | 1566 | 1620 | 10 | 255/125/195 | 115/398/405 | water world impure pool a |
| 04_kabasaur | 1556 | 1700 | 11 | 305/250/140; 230/300/115 | - | fire world molten cavern |
| 00_kabasaur | 1556 | 1700 | 11 | 305/250/140; 230/300/115 | - | fire world molten cavern |
| 04_great_frog | 1529 | 2740 | 1 | - | - | human world solitary regi |
| 01_chirper | 1484 | 2520 | 10 | - | 59 | fire world burning cavern |
| 0e_manna_python | 1414 | 1980 | 6 | 145/190/140 | 112/3 | earth world quaking caver |
| 08_ring_demon | 1410 | 2050 | 12 | - | 235/7 | illusion world gloomy dom |
| 05_water_knight | 1352 | 1580 | 11 | 135/185/100; 135/185/100 | - | monster world screeching  |
| 05_master_howler | 1325 | 1450 | 16 | 360/355/260 | - | monster world false eye a |
| 05_hell_hunter | 1323 | 2100 | 2 | 140/120/105 | - | human world cursed region |
| 0a_dark_bishop | 1296 | 1560 | 12 | 130/250/97 | 137 | death world dark castle l |
| 09_cross_breed | 1286 | 1800 | 14 | - | 149/56/89; 59 | illusion world worship do |
| 00_winged_worm | 1250 | 1720 | 13 | - | 119; 59 | illusion world bewilderme |
| 0d_arachness | 1237 | 1270 | 11 | 245/180/140 | 96; 87 | monster world screeching  |
| 04_berzerker | 1175 | 1380 | 5 | 180/243/121 | 89 | earth world poisonous cav |
| 01_berzerker | 1175 | 1380 | 9 | 180/243/121 | 89 | fire world phoenix cave |
| 00_berzerker | 1175 | 1380 | 10 | 180/243/121 | 89 | fire world burning cavern |
| 08_berzerker | 1175 | 1380 | 10 | 180/243/121 | 89 | fire world burning cavern |
| 0c_worm_face | 1145 | 1410 | 11 | 135/150/110 | 108/126 | fire world molten cavern |
| 05_armored_jinn | 1111 | 720 | 19 | 250/200/172 | 87/7 | water world watery labyri |
| 0d_damned_angel | 1078 | 1280 | 11 | - | 101 | fire world ashen cavern |
| 06_black_imp | 1060 | 1040 | 5 | - | 245; 76 | earth world rotting caver |
| 02_dark_imp | 1060 | 1040 | 5 | - | 245; 76 | earth world poisonous cav |
| 04_auriel_b | 1041 | 1000 | 5 | - | - | earth world poisonous cav |
| 08_clay_servant | 988 | 980 | 6 | 102/275/96; 128/196/86 | - | earth world stone cavern |
| 01_earth_knight | 971 | 970 | 7 | 122/88/62; 65/42/124; 45/22/194 | - | earth world false pit cav |
| 05_earth_knight | 971 | 970 | 11 | 122/88/62; 65/42/124; 45/22/194 | - | fire world ashen cavern |
| 00_earth_knight | 971 | 970 | 13 | 122/88/62; 65/42/124; 45/22/194 | - | death world gate of the d |
| 08_torg | 970 | 1200 | 12 | 98/200/42 | 71/173 | water world sunken river  |
| 00_night_howler | 959 | 950 | 5 | 320/245/236 | - | earth world rotting caver |
| 04_night_howler | 959 | 950 | 10 | 320/245/236 | - | fire world burning cavern |
| 00_black_onyx | 946 | 750 | 12 | 142/120/90 | 211/55 | death world dark castle l |
| 06_warpoor | 936 | 1120 | 12 | - | 147; 246 | illusion world gloomy dom |
| 0a_warpoor | 936 | 1120 | 14 | - | 147; 246 | illusion world worship do |
| 09_iron_crusher | 930 | 1100 | 14 | - | 93/0; 92/115/116 | illusion world worship do |
| 09_dark_fairy | 930 | 1032 | 15 | - | 135/122/159 | illusion world dream doma |
| 0d_dweller | 930 | 1100 | 19 | - | 93/0; 92/115/116 | water world watery labyri |
| 0e_rotting_face | 920 | 420 | 13 | - | 76; 144 | illusion world bewilderme |
| 0a_rotting_face | 920 | 420 | 13 | - | 76; 144 | death world undead layer |
| 0c_ray_plant | 891 | 1080 | 13 | - | 208/175; 245 | death world lingering cur |
| 04_kiljoy | 886 | 720 | 2 | 180/59/112; 191/65/122; 201/85/164 | - | human world hidden region |
| 08_guardian_b | 886 | 870 | 7 | 92/70/148; 92/70/218 | 200/1 | earth world false pit cav |
| 0e_mystic_tower | 854 | 1050 | 7 | - | 216/13; 91 | earth world false pit cav |
| 02_mystic_tower | 854 | 1050 | 10 | - | 216/13; 91 | fire world burning cavern |
| 06_mystic_tower | 854 | 1050 | 10 | - | 216/13; 91 | fire world burning cavern |
| 02_gordoral | 821 | 850 | 13 | - | 238/0 | illusion world bewilderme |
| 06_gordoral | 821 | 850 | 13 | - | 238/0 | death world lingering cur |
| 05_warden | 817 | 1110 | 12 | - | 165/26 | death world dark castle l |
| 0a_dweller | 787 | 1160 | 6 | - | 110 | earth world quaking caver |
| 06_dweller | 787 | 1160 | 16 | - | 110 | monster world false eye a |
| 0c_gaze_hopper | 758 | 650 | 12 | 155/286/125 | 111/35 | death world dark castle l |
| 05_gargaral | 751 | 750 | 12 | - | 140 | illusion world gloomy dom |
| 01_gargaral | 751 | 750 | 13 | - | 140 | illusion world bewilderme |
| 02_sand_leech_b | 715 | 700 | 6 | 82/40/153 | - | earth world quaking caver |
| 02_dead_abraxus | 687 | 1 | 11 | - | - | fire world molten cavern |
| 0a_barrel_snail | 681 | 560 | 6 | 93/60/155; 130/80/65 | 79 | earth world stone cavern |
| 09_sloth_bug | 681 | 560 | 16 | 93/60/155; 130/80/65 | 79 | monster world false eye a |
| 0c_maristella | 675 | 820 | 13 | - | 136; 68 | death world lingering cur |
| 05_hobble_worm | 655 | 620 | 6 | 90/152/78 | 77/72; 78 | earth world stone cavern |
| 01_myconid | 630 | 850 | 1 | 62/95/50 | 60/4 | human world solitary regi |
| 02_horned_slime | 617 | 620 | 8 | 80/115/125 | 106/102 | earth world hostile rock  |
| 01_horned_slime | 617 | 620 | 11 | 80/115/125 | 106/102 | fire world ashen cavern |
| 05_horned_slime | 617 | 620 | 13 | 80/115/125 | 106/102 | death world gate of the d |
| 0a_horned_slime | 617 | 620 | 13 | 80/115/125 | 106/102 | death world gate of the d |
| 09_cocoon_plant | 565 | 320 | 6 | 64/50/108 | 74/275/318 | earth world quaking caver |
| 02_blood_brain | 561 | 590 | 6 | 50/125/86 | 107/33 | earth world quaking caver |
| 05_blood_brain | 561 | 590 | 7 | 50/125/86 | 107/33 | earth world false pit cav |
| 08_casket | 552 | 261 | 7 | - | 243 | earth world false pit cav |
| 0d_trickster | 527 | 380 | 11 | 50/80/120 | 62; 242 | fire world ashen cavern |
| 04_cannon_snail | 520 | 640 | 5 | - | 81/2/4 | earth world rotting caver |
| 06_elder | 515 | 608 | 5 | 58/45/125 | 59 | earth world rotting caver |
| 02_elder | 515 | 608 | 5 | 58/45/125 | 59 | earth world rotting caver |
| 0e_elder | 515 | 608 | 5 | 58/45/125 | 59 | earth world rotting caver |
| 0a_guardian_a | 510 | 480 | 2 | 30/33/91 | 200/1 | human world cursed region |
| 09_dwarf_warrior | 469 | 382 | 2 | 64/40/101; 64/40/131 | - | human world hidden region |
| 06_fanged_worm | 458 | 434 | 2 | 24/63/23 | 51/150 | human world hidden region |
| 01_beak_plant | 449 | 480 | 12 | 50/65/90 | 68 | illusion world gloomy dom |
| 0c_dybbuk | 445 | 520 | 6 | - | 75 | earth world stone cavern |
| 08_star_serpent | 443 | 454 | 2 | 65/79/62 | 58 | human world cursed region |
| 00_dybbuk | 423 | 520 | 6 | - | - | earth world stone cavern |
| 04_dybbuk | 423 | 520 | 6 | - | - | earth world stone cavern |
| 02_watcher_plant | 390 | 354 | 2 | 42/65/40 | 202/14 | human world cursed region |
| 00_duhrin | 390 | 600 | 5 | - | - | earth world poisonous cav |
| 00_watcher_plant | 390 | 354 | 5 | 42/65/40 | 202/14 | earth world poisonous cav |
| 0e_watcher_plant | 390 | 354 | 12 | 42/65/40 | 202/14 | illusion world gloomy dom |
| 0c_barrel_snail | 388 | 560 | 5 | - | 57/2/4 | earth world rotting caver |
| 02_parasite | 386 | 220 | 12 | 78/86/89; 78/76/82 | - | death world dark castle l |
| 0a_skeleton | 374 | 384 | 5 | 83/35/20 | - | earth world rotting caver |
| 02_skeleton | 374 | 384 | 12 | 83/35/20 | - | death world dark castle l |
| 01_blue_flicker | 366 | 440 | 10 | - | 205/8 | fire world burning cavern |
| 0d_tondrom | 362 | 280 | 8 | 36/121/42 | - | earth world hostile rock  |
| 02_lizard_servant | 355 | 1 | 16 | - | - | monster world false eye a |
| 06_lizard_servant | 355 | 1 | 16 | - | - | monster world false eye a |
| 00_gorgoral | 342 | 100 | 13 | - | - | illusion world bewilderme |
| 01_acid_pod | 333 | 320 | 2 | - | 62/80 | human world hidden region |
| 0d_cocoon_plant | 333 | 320 | 5 | - | 62/80 | earth world poisonous cav |
| 05_acid_pod | 333 | 320 | 10 | - | 62/80 | water world impure pool a |
| 05_cocoon_plant | 333 | 320 | 13 | - | 62/80 | death world gate of the d |
| 08_trickster | 331 | 380 | 7 | - | 67/59 | earth world false pit cav |
| 0d_crying_root | 318 | 350 | 6 | - | 80 | earth world stone cavern |
| 00_acid_skull | 316 | 280 | 3 | 16/16/23 | 54 | human world forgotten reg |
| 04_minor_dwarf | 314 | 308 | 13 | 45/90/26 | - | illusion world bewilderme |
| 01_blood_skull | 295 | 263 | 3 | 15/13/21 | 55 | human world forgotten reg |
| 05_blood_skull | 295 | 263 | 3 | 15/13/21 | 55 | human world forgotten reg |
| 02_tongue_imp | 285 | 162 | 5 | - | 243 | earth world rotting caver |
| 06_tongue_imp | 285 | 162 | 5 | - | 243 | earth world poisonous cav |
| 01_shadow_spider | 283 | 240 | 2 | 3/61/2 | 52 | human world cursed region |
| 09_shadow_spider | 283 | 240 | 13 | 3/61/2 | 52 | illusion world bewilderme |
| 09_imp | 282 | 308 | 5 | - | 56 | earth world rotting caver |
| 09_demon_bat | 253 | 135 | 1 | - | 48; 48 | human world solitary regi |
| 01_demon_bat | 253 | 135 | 6 | - | 48; 48 | earth world stone cavern |
| 02_blood_slime | 188 | 96 | 3 | 13/12/16 | 50 | human world forgotten reg |
| 09_blood_slime | 188 | 96 | 5 | 13/12/16 | 50 | earth world rotting caver |
| 05_blood_slime | 188 | 96 | 13 | 13/12/16 | 50 | illusion world bewilderme |
| 01_blood_slime | 188 | 96 | 19 | 13/12/16 | 50 | water world watery labyri |
| 08_dark_spider | 182 | 121 | 2 | 9/10/20; 11/13/28 | - | human world hidden region |
| 00_dark_spider | 182 | 121 | 10 | 9/10/20; 11/13/28 | - | water world impure pool a |
| 0c_hanging_dead | 180 | 200 | 5 | - | 65 | earth world poisonous cav |
| 00_acid_slime | 154 | 95 | 13 | 10/11/13 | 49 | death world lingering cur |
| 01_acid_slime | 154 | 95 | 16 | 10/11/13 | 49 | monster world false eye a |
| 04_acid_slime | 154 | 95 | 19 | 10/11/13 | 49 | water world watery labyri |
| 00_sand_leech_a | 136 | 50 | 2 | - | 69/16 | human world hidden region |
| 05_dwarfling | 133 | 1 | 1 | - | - | human world solitary regi |

---

## Creatures with Type 0x30 (Magic/Spell Attacks)

**These creatures were fixed in PR #14 to properly scale with difficulty settings.**

| Creature | Power | HP | Magic Attack Values |
|----------|-------|----|--------------------|\n| 00_abraxus | 33726 | 65535 | 95/181/181; 95/181/181 |
| 0a_demons_eye | 33608 | 820 | 222/1 |
| 0d_hatchlin | 15910 | 1460 | 76 |
| 09_cerberus | 7984 | 2300 | 99/3; 59 |
| 04_jinn_lord | 7837 | 1920 | 86/20; 85 |
| 01_unknown_b | 5838 | 7560 | 124; 125 |
| 01_auriel_c | 5793 | 7560 | 160; 161 |
| 0c_hollow_mage | 5167 | 7800 | 59; 64 |
| 04_king_edward | 4829 | 6500 | 246 |
| 04_wildowess | 4765 | 6600 | 242 |
| 09_steel_servant | 4674 | 1810 | 94/2 |
| 0a_ruby_demon | 4575 | 2260 | 219/55 |
| 0e_necron | 4459 | 4800 | 164/308; 163/279; 162/365 |
| 0c_ebony_knight | 4383 | 4270 | 104; 105 |
| 01_horned_skull | 4173 | 1550 | 88/24 |
| 05_horned_skull | 4173 | 1550 | 88/24 |
| 00_bone_demon | 4150 | 1480 | 99/100/101 |
| 05_doriwi | 3981 | 4800 | 59 |
| 01_doriwi | 3981 | 4800 | 59 |
| 02_bone_wolf | 3856 | 4100 | 59 |
| 0a_bone_wolf | 3856 | 4100 | 59 |
| 08_oxelus | 3779 | 5700 | 158/24 |
| 02_fire_jinn | 3588 | 572 | 88/27 |
| 06_fire_jinn | 3588 | 572 | 88/27 |
| 0d_bugler | 3425 | 4200 | 240 |
| 05_magi_magus | 3276 | 3730 | 117/298; 118 |
| 04_tree_ogre | 3239 | 4900 | 122/12 |
| 09_freak | 3225 | 3600 | 71/232/380; 59 |
| 0d_death_serpent | 3187 | 4730 | 166/82; 59 |
| 0a_wizcrypha | 3158 | 3200 | 133/24; 132/24; 76 |
| 08_wyvern | 3117 | 4500 | 230/293 |
| 01_stack_eyes | 2988 | 4150 | 131/11; 131/11; 131/11 |
| 08_fester | 2964 | 4650 | 145 |
| 0d_deha | 2765 | 3360 | 139/137 |
| 0c_old_face | 2751 | 3200 | 59; 68 |
| 04_dragon_turtle | 2745 | 4050 | 116/115 |
| 05_old_face | 2662 | 4100 | 128 |
| 0a_cursed_demon | 2595 | 3780 | 76 |
| 08_apocrypha | 2564 | 2000 | 225/100; 225/100 |
| 09_descrypha | 2430 | 1800 | 228/100; 228/100 |
| 01_disguise | 2375 | 2700 | 151; 150/23 |
| 01_gorthaur | 2292 | 3450 | 146 |
| 0d_saurian_warrior_b | 2193 | 2800 | 59 |
| 04_king_hopper | 2090 | 3230 | 159/1 |
| 00_dark_spirits | 1980 | 2040 | 153/8; 154/91; 152/92 |
| 00_hell_hunter | 1952 | 3600 | 120/11; 121/11 |
| 0e_claw_head | 1952 | 3600 | 120/11; 121/11 |
| 04_dread_knight | 1949 | 2400 | 84 |
| 04_zygote | 1872 | 2000 | 102; 244 |
| 08_hermit_crab | 1832 | 2420 | 157 |
| 0c_death_mage | 1809 | 1800 | 142 |
| 09_pulsating_heart | 1767 | 2000 | 127/40/84 |
| 04_demon_warrior | 1709 | 1880 | 143 |
| 0d_blood_bone | 1685 | 2820 | 76 |
| 09_koazul | 1678 | 1540 | 113/38 |
| 0e_dinogon | 1626 | 2020 | 156/57 |
| 0d_slasher | 1566 | 1620 | 115/398/405 |
| 01_chirper | 1484 | 2520 | 59 |
| 0e_manna_python | 1414 | 1980 | 112/3 |
| 08_ring_demon | 1410 | 2050 | 235/7 |
| 0a_dark_bishop | 1296 | 1560 | 137 |
| 09_cross_breed | 1286 | 1800 | 149/56/89; 59 |
| 00_winged_worm | 1250 | 1720 | 119; 59 |
| 0d_arachness | 1237 | 1270 | 96; 87 |
| 04_berzerker | 1175 | 1380 | 89 |
| 01_berzerker | 1175 | 1380 | 89 |
| 00_berzerker | 1175 | 1380 | 89 |
| 08_berzerker | 1175 | 1380 | 89 |
| 0c_worm_face | 1145 | 1410 | 108/126 |
| 05_armored_jinn | 1111 | 720 | 87/7 |
| 0d_damned_angel | 1078 | 1280 | 101 |
| 06_black_imp | 1060 | 1040 | 245; 76 |
| 02_dark_imp | 1060 | 1040 | 245; 76 |
| 08_torg | 970 | 1200 | 71/173 |
| 00_black_onyx | 946 | 750 | 211/55 |
| 06_warpoor | 936 | 1120 | 147; 246 |
| 0a_warpoor | 936 | 1120 | 147; 246 |
| 09_iron_crusher | 930 | 1100 | 93/0; 92/115/116 |
| 09_dark_fairy | 930 | 1032 | 135/122/159 |
| 0d_dweller | 930 | 1100 | 93/0; 92/115/116 |
| 0e_rotting_face | 920 | 420 | 76; 144 |
| 0a_rotting_face | 920 | 420 | 76; 144 |
| 0c_ray_plant | 891 | 1080 | 208/175; 245 |
| 08_guardian_b | 886 | 870 | 200/1 |
| 0e_mystic_tower | 854 | 1050 | 216/13; 91 |
| 02_mystic_tower | 854 | 1050 | 216/13; 91 |
| 06_mystic_tower | 854 | 1050 | 216/13; 91 |
| 02_gordoral | 821 | 850 | 238/0 |
| 06_gordoral | 821 | 850 | 238/0 |
| 05_warden | 817 | 1110 | 165/26 |
| 0a_dweller | 787 | 1160 | 110 |
| 06_dweller | 787 | 1160 | 110 |
| 0c_gaze_hopper | 758 | 650 | 111/35 |
| 05_gargaral | 751 | 750 | 140 |
| 01_gargaral | 751 | 750 | 140 |
| 0a_barrel_snail | 681 | 560 | 79 |
| 09_sloth_bug | 681 | 560 | 79 |
| 0c_maristella | 675 | 820 | 136; 68 |
| 05_hobble_worm | 655 | 620 | 77/72; 78 |
| 01_myconid | 630 | 850 | 60/4 |
| 02_horned_slime | 617 | 620 | 106/102 |
| 01_horned_slime | 617 | 620 | 106/102 |
| 05_horned_slime | 617 | 620 | 106/102 |
| 0a_horned_slime | 617 | 620 | 106/102 |
| 09_cocoon_plant | 565 | 320 | 74/275/318 |
| 02_blood_brain | 561 | 590 | 107/33 |
| 05_blood_brain | 561 | 590 | 107/33 |
| 08_casket | 552 | 261 | 243 |
| 0d_trickster | 527 | 380 | 62; 242 |
| 04_cannon_snail | 520 | 640 | 81/2/4 |
| 06_elder | 515 | 608 | 59 |
| 02_elder | 515 | 608 | 59 |
| 0e_elder | 515 | 608 | 59 |
| 0a_guardian_a | 510 | 480 | 200/1 |
| 06_fanged_worm | 458 | 434 | 51/150 |
| 01_beak_plant | 449 | 480 | 68 |
| 0c_dybbuk | 445 | 520 | 75 |
| 08_star_serpent | 443 | 454 | 58 |
| 02_watcher_plant | 390 | 354 | 202/14 |
| 00_watcher_plant | 390 | 354 | 202/14 |
| 0e_watcher_plant | 390 | 354 | 202/14 |
| 0c_barrel_snail | 388 | 560 | 57/2/4 |
| 01_blue_flicker | 366 | 440 | 205/8 |
| 01_acid_pod | 333 | 320 | 62/80 |
| 0d_cocoon_plant | 333 | 320 | 62/80 |
| 05_acid_pod | 333 | 320 | 62/80 |
| 05_cocoon_plant | 333 | 320 | 62/80 |
| 08_trickster | 331 | 380 | 67/59 |
| 0d_crying_root | 318 | 350 | 80 |
| 00_acid_skull | 316 | 280 | 54 |
| 01_blood_skull | 295 | 263 | 55 |
| 05_blood_skull | 295 | 263 | 55 |
| 02_tongue_imp | 285 | 162 | 243 |
| 06_tongue_imp | 285 | 162 | 243 |
| 01_shadow_spider | 283 | 240 | 52 |
| 09_shadow_spider | 283 | 240 | 52 |
| 09_imp | 282 | 308 | 56 |
| 09_demon_bat | 253 | 135 | 48; 48 |
| 01_demon_bat | 253 | 135 | 48; 48 |
| 02_blood_slime | 188 | 96 | 50 |
| 09_blood_slime | 188 | 96 | 50 |
| 05_blood_slime | 188 | 96 | 50 |
| 01_blood_slime | 188 | 96 | 50 |
| 0c_hanging_dead | 180 | 200 | 65 |
| 00_acid_slime | 154 | 95 | 49 |
| 01_acid_slime | 154 | 95 | 49 |
| 04_acid_slime | 154 | 95 | 49 |
| 00_sand_leech_a | 136 | 50 | 69/16 |

---

## Full Attribute Table

| Creature | Power | HP | STR | SPD | DEF | BAL | SLA | SMH | PIR | SPR | FOC | HAM | PUR | PAR | MEL | SOL |
|----------|-------|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| 00_abraxus | 33726 | 65535 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 5 | 2 | 1 | 0 | 5 | 0 | 4 |
| 0a_demons_eye | 33608 | 820 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 2 | 2 | 1 |
| 0d_fat_mole_e | 32867 | 65535 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 02_fat_mole_d | 32846 | 65535 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 00_fat_mole_f | 32840 | 65535 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 08_fat_mole_b | 32807 | 65535 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0c_fat_mole_c | 32807 | 65535 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 04_fat_mole_a | 32768 | 65535 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0d_hatchlin | 15910 | 1460 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 10 | 0 | 0 | 0 |
| 09_cerberus | 7984 | 2300 | 0 | 5 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 5 | 0 | 0 | 0 | 0 |
| 04_jinn_lord | 7837 | 1920 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 1 | 2 | 1 | 0 | 3 | 0 | 0 |
| 01_unknown_b | 5838 | 7560 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 01_auriel_c | 5793 | 7560 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0c_hollow_mage | 5167 | 7800 | 0 | 4 | 0 | 2 | 0 | 0 | 1 | 16 | 10 | 0 | 5 | 2 | 0 | 10 |
| 04_king_edward | 4829 | 6500 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 04_wildowess | 4765 | 6600 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 6 | 4 | 0 | 5 | 0 | 0 | 3 |
| 09_steel_servant | 4674 | 1810 | 0 | 0 | 0 | 0 | 0 | 5 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 06_hell_warrior | 4596 | 5800 | 0 | 4 | 0 | 1 | 5 | 0 | 0 | 0 | 0 | 2 | 0 | 3 | 0 | 2 |
| 0a_ruby_demon | 4575 | 2260 | 0 | 1 | 0 | 0 | 1 | 0 | 0 | 1 | 1 | 1 | 0 | 1 | 0 | 0 |
| 00_unused_a | 4522 | 6000 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 12 | 5 | 0 | 1 |
| 0e_necron | 4459 | 4800 | 12 | 5 | 0 | 0 | 3 | 2 | 8 | 2 | 2 | 0 | 1 | 0 | 3 | 3 |
| 0c_ebony_knight | 4383 | 4270 | 0 | 7 | 0 | 0 | 0 | 0 | 4 | 11 | 3 | 9 | 0 | 1 | 0 | 0 |
| 01_horned_skull | 4173 | 1550 | 0 | 2 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 1 | 0 | 1 |
| 05_horned_skull | 4173 | 1550 | 0 | 2 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 1 | 0 | 1 |
| 00_bone_demon | 4150 | 1480 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 | 0 | 0 | 1 | 0 | 3 |
| 05_doriwi | 3981 | 4800 | 2 | 0 | 2 | 2 | 0 | 5 | 0 | 1 | 0 | 0 | 4 | 0 | 0 | 0 |
| 01_doriwi | 3981 | 4800 | 2 | 0 | 2 | 2 | 0 | 5 | 0 | 1 | 0 | 0 | 4 | 0 | 0 | 0 |
| 02_bone_wolf | 3856 | 4100 | 2 | 0 | 1 | 3 | 0 | 0 | 0 | 0 | 0 | 4 | 1 | 0 | 0 | 2 |
| 0a_bone_wolf | 3856 | 4100 | 2 | 0 | 1 | 3 | 0 | 0 | 0 | 0 | 0 | 4 | 1 | 0 | 0 | 2 |
| 08_oxelus | 3779 | 5700 | 0 | 3 | 0 | 0 | 6 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 02_fire_jinn | 3588 | 572 | 0 | 0 | 0 | 0 | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 0 | 0 | 0 |
| 06_fire_jinn | 3588 | 572 | 0 | 0 | 0 | 0 | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 0 | 0 | 0 |
| 08_armored_guardian | 3486 | 4200 | 7 | 0 | 1 | 0 | 2 | 2 | 0 | 0 | 0 | 0 | 1 | 2 | 0 | 0 |
| 0d_bugler | 3425 | 4200 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 10 | 0 | 0 | 0 | 0 | 0 | 0 |
| 05_magi_magus | 3276 | 3730 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 10 | 1 | 6 | 0 | 0 | 12 | 9 |
| 04_tree_ogre | 3239 | 4900 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 1 | 2 | 0 | 3 | 2 |
| 06_armored_slayer | 3235 | 3800 | 0 | 0 | 3 | 0 | 3 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 |
| 0a_armored_slayer | 3235 | 3800 | 0 | 0 | 3 | 0 | 3 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 |
| 09_freak | 3225 | 3600 | 0 | 0 | 0 | 2 | 0 | 0 | 6 | 0 | 0 | 4 | 0 | 0 | 0 | 1 |
| 0d_death_serpent | 3187 | 4730 | 0 | 0 | 0 | 6 | 0 | 4 | 0 | 0 | 0 | 0 | 3 | 5 | 0 | 0 |
| 0a_wizcrypha | 3158 | 3200 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 5 | 3 | 0 | 3 | 3 | 3 | 1 |
| 08_wyvern | 3117 | 4500 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 7 | 5 | 4 | 0 | 0 | 0 | 1 |
| 09_armored_warrior | 3060 | 3900 | 3 | 0 | 1 | 0 | 0 | 2 | 1 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |
| 05_armored_warrior | 3060 | 3900 | 3 | 0 | 1 | 0 | 0 | 2 | 1 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |
| 01_stack_eyes | 2988 | 4150 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 7 | 1 | 0 | 0 | 0 |
| 08_fester | 2964 | 4650 | 2 | 3 | 0 | 0 | 0 | 0 | 6 | 0 | 0 | 0 | 2 | 5 | 0 | 0 |
| 0d_deha | 2765 | 3360 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 5 | 0 |
| 0c_old_face | 2751 | 3200 | 2 | 0 | 3 | 2 | 0 | 0 | 3 | 0 | 1 | 0 | 0 | 0 | 0 | 1 |
| 04_dragon_turtle | 2745 | 4050 | 0 | 0 | 7 | 4 | 0 | 0 | 0 | 1 | 0 | 6 | 0 | 0 | 1 | 0 |
| 00_panak | 2714 | 5100 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 05_old_face | 2662 | 4100 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 3 | 3 | 0 | 0 | 1 |
| 08_claw_head | 2648 | 3600 | 0 | 0 | 3 | 0 | 3 | 5 | 4 | 4 | 2 | 3 | 0 | 0 | 0 | 0 |
| 02_karasu | 2618 | 3800 | 0 | 2 | 0 | 1 | 0 | 0 | 1 | 0 | 0 | 2 | 1 | 0 | 1 | 5 |
| 0a_cursed_demon | 2595 | 3780 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 4 | 4 | 0 | 2 | 0 | 0 | 0 |
| 08_apocrypha | 2564 | 2000 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 1 | 2 | 0 | 0 | 0 |
| 06_oblid | 2547 | 3500 | 0 | 2 | 0 | 0 | 0 | 7 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 |
| 00_master_knight | 2529 | 3200 | 2 | 2 | 3 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 08_war_demon_1 | 2529 | 3500 | 3 | 1 | 0 | 0 | 1 | 0 | 3 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |
| 09_descrypha | 2430 | 1800 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 1 | 0 | 0 | 2 | 0 |
| 01_disguise | 2375 | 2700 | 0 | 5 | 0 | 0 | 0 | 0 | 0 | 21 | 7 | 3 | 8 | 0 | 0 | 0 |
| 01_gorthaur | 2292 | 3450 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 10 | 7 | 1 | 0 | 0 | 0 |
| 0d_saurian_warrior_b | 2193 | 2800 | 1 | 0 | 3 | 0 | 4 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| 0c_saurian_warrior_a | 2175 | 2800 | 0 | 1 | 3 | 2 | 3 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 04_king_hopper | 2090 | 3230 | 1 | 0 | 0 | 0 | 0 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 09_war_demon_2 | 1993 | 2800 | 2 | 0 | 2 | 0 | 0 | 4 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |
| 00_dark_spirits | 1980 | 2040 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
| 00_hell_hunter | 1952 | 3600 | 0 | 6 | 0 | 0 | 0 | 1 | 4 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0e_claw_head | 1952 | 3600 | 0 | 6 | 0 | 0 | 0 | 1 | 4 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 04_dread_knight | 1949 | 2400 | 10 | 0 | 0 | 3 | 8 | 6 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 7 |
| 04_dark_spirits | 1942 | 2040 | 0 | 2 | 0 | 0 | 0 | 0 | 3 | 0 | 0 | 0 | 0 | 0 | 1 | 2 |
| 00_red_puppet | 1942 | 2040 | 0 | 2 | 0 | 0 | 0 | 0 | 3 | 0 | 0 | 0 | 0 | 0 | 1 | 2 |
| 05_dark_spirits | 1925 | 2040 | 0 | 2 | 0 | 0 | 0 | 0 | 3 | 0 | 0 | 0 | 0 | 0 | 1 | 2 |
| 01_dark_spirits | 1925 | 2040 | 0 | 2 | 0 | 0 | 0 | 0 | 3 | 0 | 0 | 0 | 0 | 0 | 1 | 2 |
| 04_zygote | 1872 | 2000 | 0 | 0 | 1 | 0 | 2 | 0 | 0 | 3 | 1 | 0 | 0 | 0 | 0 | 0 |
| 08_hermit_crab | 1832 | 2420 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 0 | 5 | 0 | 0 | 3 |
| 0c_death_mage | 1809 | 1800 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 5 | 0 | 2 | 0 | 0 | 0 |
| 09_pulsating_heart | 1767 | 2000 | 6 | 2 | 0 | 0 | 6 | 0 | 1 | 6 | 0 | 0 | 6 | 4 | 4 | 4 |
| 04_demon_warrior | 1709 | 1880 | 2 | 1 | 0 | 0 | 1 | 1 | 2 | 1 | 0 | 0 | 0 | 0 | 0 | 1 |
| 0d_blood_bone | 1685 | 2820 | 0 | 3 | 0 | 0 | 3 | 0 | 0 | 1 | 3 | 0 | 2 | 3 | 0 | 3 |
| 09_koazul | 1678 | 1540 | 2 | 0 | 0 | 0 | 1 | 0 | 1 | 3 | 0 | 0 | 0 | 0 | 0 | 1 |
| 09_dementor | 1674 | 2270 | 4 | 0 | 1 | 0 | 0 | 0 | 3 | 1 | 0 | 0 | 0 | 1 | 0 | 1 |
| 0e_dinogon | 1626 | 2020 | 0 | 3 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 1 | 0 | 4 | 0 | 0 |
| 0d_slasher | 1566 | 1620 | 0 | 2 | 0 | 0 | 5 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 04_kabasaur | 1556 | 1700 | 3 | 0 | 0 | 1 | 0 | 2 | 0 | 1 | 0 | 0 | 0 | 0 | 1 | 0 |
| 00_kabasaur | 1556 | 1700 | 3 | 0 | 0 | 1 | 0 | 2 | 0 | 1 | 0 | 0 | 0 | 0 | 1 | 0 |
| 04_great_frog | 1529 | 2740 | 5 | 0 | 2 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 4 | 0 | 4 | 0 |
| 01_chirper | 1484 | 2520 | 5 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 0 | 0 |
| 0e_manna_python | 1414 | 1980 | 2 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 |
| 08_ring_demon | 1410 | 2050 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 2 | 3 | 0 | 0 | 0 |
| 05_water_knight | 1352 | 1580 | 0 | 0 | 2 | 0 | 0 | 1 | 4 | 0 | 0 | 1 | 0 | 0 | 1 | 0 |
| 05_master_howler | 1325 | 1450 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 1 | 5 | 8 |
| 05_hell_hunter | 1323 | 2100 | 0 | 0 | 1 | 2 | 1 | 1 | 2 | 1 | 2 | 1 | 1 | 0 | 0 | 2 |
| 0a_dark_bishop | 1296 | 1560 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 3 | 0 | 0 | 0 | 0 | 1 |
| 09_cross_breed | 1286 | 1800 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 1 | 1 | 0 | 0 | 2 |
| 00_winged_worm | 1250 | 1720 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 3 | 0 | 0 | 0 |
| 0d_arachness | 1237 | 1270 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 3 | 4 | 0 | 0 | 1 | 0 | 0 |
| 04_berzerker | 1175 | 1380 | 1 | 1 | 1 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |
| 01_berzerker | 1175 | 1380 | 1 | 1 | 1 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |
| 00_berzerker | 1175 | 1380 | 1 | 1 | 1 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |
| 08_berzerker | 1175 | 1380 | 1 | 1 | 1 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |
| 0c_worm_face | 1145 | 1410 | 3 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 1 | 0 |
| 05_armored_jinn | 1111 | 720 | 0 | 0 | 0 | 0 | 1 | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 0 | 0 |
| 0d_damned_angel | 1078 | 1280 | 3 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 4 | 0 | 0 | 0 | 2 | 0 |
| 06_black_imp | 1060 | 1040 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 0 | 7 | 0 | 0 | 3 |
| 02_dark_imp | 1060 | 1040 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 0 | 7 | 0 | 0 | 3 |
| 04_auriel_b | 1041 | 1000 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 08_clay_servant | 988 | 980 | 2 | 0 | 2 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 01_earth_knight | 971 | 970 | 0 | 3 | 2 | 0 | 2 | 0 | 0 | 1 | 0 | 2 | 0 | 0 | 0 | 1 |
| 05_earth_knight | 971 | 970 | 0 | 3 | 2 | 0 | 2 | 0 | 0 | 1 | 0 | 2 | 0 | 0 | 0 | 1 |
| 00_earth_knight | 971 | 970 | 0 | 3 | 2 | 0 | 2 | 0 | 0 | 1 | 0 | 2 | 0 | 0 | 0 | 1 |
| 08_torg | 970 | 1200 | 2 | 0 | 1 | 2 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 00_night_howler | 959 | 950 | 2 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 04_night_howler | 959 | 950 | 2 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 00_black_onyx | 946 | 750 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 1 | 1 | 0 | 1 | 0 | 0 | 2 |
| 06_warpoor | 936 | 1120 | 1 | 0 | 0 | 3 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 1 | 2 | 0 |
| 0a_warpoor | 936 | 1120 | 1 | 0 | 0 | 3 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 1 | 2 | 0 |
| 09_iron_crusher | 930 | 1100 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 0 | 0 | 0 | 0 | 1 | 2 | 0 |
| 09_dark_fairy | 930 | 1032 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 2 | 0 | 0 | 2 |
| 0d_dweller | 930 | 1100 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 0 | 0 | 0 | 0 | 1 | 2 | 0 |
| 0e_rotting_face | 920 | 420 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 5 | 5 | 1 | 0 | 0 | 0 | 7 |
| 0a_rotting_face | 920 | 420 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 5 | 5 | 1 | 0 | 0 | 0 | 7 |
| 0c_ray_plant | 891 | 1080 | 0 | 0 | 0 | 0 | 5 | 0 | 0 | 0 | 5 | 0 | 0 | 0 | 0 | 0 |
| 04_kiljoy | 886 | 720 | 0 | 2 | 0 | 0 | 4 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 08_guardian_b | 886 | 870 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 1 | 0 | 0 | 0 | 0 | 1 |
| 0e_mystic_tower | 854 | 1050 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 | 0 |
| 02_mystic_tower | 854 | 1050 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 | 0 |
| 06_mystic_tower | 854 | 1050 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 | 0 |
| 02_gordoral | 821 | 850 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 5 | 0 | 0 |
| 06_gordoral | 821 | 850 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 5 | 0 | 0 |
| 05_warden | 817 | 1110 | 0 | 0 | 5 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 0 |
| 0a_dweller | 787 | 1160 | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 1 | 0 |
| 06_dweller | 787 | 1160 | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 1 | 0 |
| 0c_gaze_hopper | 758 | 650 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 1 | 2 | 0 | 0 | 0 | 0 | 2 |
| 05_gargaral | 751 | 750 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 5 | 0 | 0 |
| 01_gargaral | 751 | 750 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 5 | 0 | 0 |
| 02_sand_leech_b | 715 | 700 | 1 | 0 | 0 | 0 | 1 | 1 | 1 | 0 | 0 | 0 | 1 | 0 | 0 | 0 |
| 02_dead_abraxus | 687 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 5 | 2 | 1 | 0 | 5 | 0 | 4 |
| 0a_barrel_snail | 681 | 560 | 1 | 0 | 3 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 09_sloth_bug | 681 | 560 | 1 | 0 | 3 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0c_maristella | 675 | 820 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 2 | 0 | 0 | 0 |
| 05_hobble_worm | 655 | 620 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 2 | 0 | 0 | 0 | 2 |
| 01_myconid | 630 | 850 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 0 | 0 | 0 | 0 | 0 |
| 02_horned_slime | 617 | 620 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 |
| 01_horned_slime | 617 | 620 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 |
| 05_horned_slime | 617 | 620 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 |
| 0a_horned_slime | 617 | 620 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 |
| 09_cocoon_plant | 565 | 320 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 0 |
| 02_blood_brain | 561 | 590 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 1 | 0 |
| 05_blood_brain | 561 | 590 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 1 | 0 |
| 08_casket | 552 | 261 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 1 | 2 | 0 | 0 | 1 |
| 0d_trickster | 527 | 380 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 4 | 2 |
| 04_cannon_snail | 520 | 640 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 2 | 0 |
| 06_elder | 515 | 608 | 0 | 0 | 0 | 1 | 0 | 1 | 1 | 0 | 0 | 0 | 0 | 2 | 1 | 0 |
| 02_elder | 515 | 608 | 0 | 0 | 0 | 1 | 0 | 1 | 1 | 0 | 0 | 0 | 0 | 2 | 1 | 0 |
| 0e_elder | 515 | 608 | 0 | 0 | 0 | 1 | 0 | 1 | 1 | 0 | 0 | 0 | 0 | 2 | 1 | 0 |
| 0a_guardian_a | 510 | 480 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 1 | 0 | 0 | 0 | 0 | 1 |
| 09_dwarf_warrior | 469 | 382 | 1 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 |
| 06_fanged_worm | 458 | 434 | 1 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 1 | 2 | 0 | 0 | 0 | 0 |
| 01_beak_plant | 449 | 480 | 0 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 |
| 0c_dybbuk | 445 | 520 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 08_star_serpent | 443 | 454 | 0 | 0 | 0 | 2 | 0 | 1 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 |
| 00_dybbuk | 423 | 520 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 04_dybbuk | 423 | 520 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 02_watcher_plant | 390 | 354 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 |
| 00_duhrin | 390 | 600 | 0 | 0 | 0 | 5 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 00_watcher_plant | 390 | 354 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 |
| 0e_watcher_plant | 390 | 354 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 |
| 0c_barrel_snail | 388 | 560 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 02_parasite | 386 | 220 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 1 | 2 | 0 | 0 | 2 |
| 0a_skeleton | 374 | 384 | 0 | 1 | 0 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 |
| 02_skeleton | 374 | 384 | 0 | 1 | 0 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 |
| 01_blue_flicker | 366 | 440 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0d_tondrom | 362 | 280 | 0 | 0 | 1 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 02_lizard_servant | 355 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 06_lizard_servant | 355 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 00_gorgoral | 342 | 100 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 1 | 5 | 0 | 0 | 0 | 0 |
| 01_acid_pod | 333 | 320 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 0d_cocoon_plant | 333 | 320 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 05_acid_pod | 333 | 320 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 05_cocoon_plant | 333 | 320 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 08_trickster | 331 | 380 | 0 | 0 | 1 | 1 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 |
| 0d_crying_root | 318 | 350 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 |
| 00_acid_skull | 316 | 280 | 0 | 0 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 04_minor_dwarf | 314 | 308 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 01_blood_skull | 295 | 263 | 0 | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 05_blood_skull | 295 | 263 | 0 | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 02_tongue_imp | 285 | 162 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 |
| 06_tongue_imp | 285 | 162 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 |
| 01_shadow_spider | 283 | 240 | 0 | 0 | 1 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 09_shadow_spider | 283 | 240 | 0 | 0 | 1 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 09_imp | 282 | 308 | 0 | 1 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 09_demon_bat | 253 | 135 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 0 | 1 | 1 | 0 | 1 | 0 | 0 |
| 01_demon_bat | 253 | 135 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 0 | 1 | 1 | 0 | 1 | 0 | 0 |
| 02_blood_slime | 188 | 96 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 09_blood_slime | 188 | 96 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 05_blood_slime | 188 | 96 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 01_blood_slime | 188 | 96 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 08_dark_spider | 182 | 121 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 00_dark_spider | 182 | 121 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0c_hanging_dead | 180 | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 |
| 00_acid_slime | 154 | 95 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 01_acid_slime | 154 | 95 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 04_acid_slime | 154 | 95 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 00_sand_leech_a | 136 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0 |
| 05_dwarfling | 133 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

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

