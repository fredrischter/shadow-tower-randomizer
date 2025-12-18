# Shadow Tower Creature Power Value Table

**Generated:** 2025-12-18T10:38:05.706Z

**Purpose:** Verify PR #14 magic/projectile attack damage scaling fix

This table shows power values for all creatures, including:
- **Type 0x20**: Physical attack EntityStateData
- **Type 0x30**: Spell/Magic attack EntityStateData (fixed in PR #14)

---

## Summary Statistics

- **Total Unique Creatures**: 205
- **Creatures with Physical Attacks (0x20)**: 125
- **Creatures with Magic Attacks (0x30)**: 148
- **Average Power Score**: 2692
- **Highest Power Score**: 33407
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
| 0a_demons_eye | 33407 | 820 | 0 | - | 111/1 | death world undead layer |
| 00_abraxus | 33317 | 65535 | 0 | - | 48/91/91; 48/91/91 | fire world molten cavern |
| 0d_fat_mole_e | 32819 | 65535 | 0 | - | - | death world undead layer |
| 02_fat_mole_d | 32807 | 65535 | 0 | - | - | illusion world worship do |
| 00_fat_mole_f | 32804 | 65535 | 0 | - | - | water world impure pool a |
| 08_fat_mole_b | 32789 | 65535 | 0 | - | - | fire world molten cavern |
| 0c_fat_mole_c | 32789 | 65535 | 0 | - | - | fire world molten cavern |
| 04_fat_mole_a | 32768 | 65535 | 2 | - | - | human world cursed region |
| 0d_hatchlin | 15838 | 1460 | 0 | - | 38 | death world dark castle l |
| 09_cerberus | 7870 | 2300 | 0 | - | 50/2; 30 | fire world burning cavern |
| 04_jinn_lord | 7719 | 1920 | 0 | - | 43/10; 43 | water world sunken river  |
| 01_unknown_b | 4974 | 7560 | 0 | 260/225/275; 310/240/275 | 62; 63 | death world undead layer |
| 01_auriel_c | 4953 | 7560 | 0 | 275/225/270; 275/225/270 | 80; 81 | monster world screeching  |
| 0c_hollow_mage | 4833 | 7800 | 0 | - | 30; 32 | death world gate of the d |
| 0a_ruby_demon | 4376 | 2260 | 0 | 94/74/60 | 110/28 | fire world phoenix cave |
| 09_steel_servant | 4324 | 1810 | 0 | 78/91/65; 90/105/89; 90/150/89 | 47/1 | fire world molten cavern |
| 04_king_edward | 4217 | 6500 | 0 | 25/23/25; 20/20/10; 45/20/40 | 123 | death world undead layer |
| 04_wildowess | 4102 | 6600 | 0 | 103/75/170 | 121 | illusion world worship do |
| 01_horned_skull | 4002 | 1550 | 0 | 60/69/127 | 44/12 | fire world burning cavern |
| 05_horned_skull | 4002 | 1550 | 0 | 60/69/127 | 44/12 | water world impure pool a |
| 00_bone_demon | 3975 | 1480 | 0 | 70/100/55 | 50/50/51 | death world lingering cur |
| 00_unused_a | 3877 | 6000 | 0 | - | - | death world gate of the d |
| 0c_ebony_knight | 3826 | 4270 | 0 | 153/126/115; 113/115/153; 150/95/64 | 52; 53 | fire world ashen cavern |
| 06_hell_warrior | 3792 | 5800 | 0 | 225/150/155 | - | monster world false eye a |
| 0e_necron | 3562 | 4800 | 0 | 170/145/230; 50/60/200; 175/125/135 | 82/154; 82/140; 81/183 | monster world screeching  |
| 06_fire_jinn | 3462 | 572 | 0 | 60/58/48 | 44/14 | earth world quaking caver |
| 02_fire_jinn | 3462 | 572 | 0 | 60/58/48 | 44/14 | fire world ashen cavern |
| 08_oxelus | 3355 | 5700 | 0 | 198/130/173; 73/60/93 | 79/12 | monster world screeching  |
| 05_doriwi | 3242 | 4800 | 0 | 150/160/225 | 30 | death world gate of the d |
| 01_doriwi | 3242 | 4800 | 0 | 150/160/225 | 30 | fire world molten cavern |
| 02_bone_wolf | 3044 | 4100 | 0 | 125/210/125 | 30 | death world lingering cur |
| 0a_bone_wolf | 3044 | 4100 | 0 | 125/210/125 | 30 | monster world screeching  |
| 04_tree_ogre | 2889 | 4900 | 0 | 125/156/140 | 61/6 | water world watery labyri |
| 0d_bugler | 2864 | 4200 | 0 | - | 120 | death world dark castle l |
| 08_armored_guardian | 2853 | 4200 | 0 | 190/230/140; 183/168/120 | - | death world dark castle l |
| 0d_death_serpent | 2813 | 4730 | 0 | 178/215/133 | 83/41; 30 | monster world false eye a |
| 08_wyvern | 2740 | 4500 | 0 | 90/75/110 | 115/147 | water world watery labyri |
| 08_fester | 2735 | 4650 | 0 | - | 73 | illusion world worship do |
| 05_magi_magus | 2689 | 3730 | 0 | - | 59/149; 59 | water world white rain ar |
| 00_panak | 2666 | 5100 | 0 | - | - | death world lingering cur |
| 06_armored_slayer | 2605 | 3800 | 0 | 215/165/125; 170/220/155 | - | earth world hostile rock  |
| 0a_armored_slayer | 2605 | 3800 | 0 | 215/165/125; 170/220/155 | - | earth world quaking caver |
| 01_stack_eyes | 2577 | 4150 | 0 | 155/190/153 | 66/6; 66/6; 66/6 | fire world ashen cavern |
| 09_freak | 2553 | 3600 | 0 | 105/140/185; 105/105/155; 120/115/130 | 36/116/190; 30 | monster world false eye a |
| 05_armored_warrior | 2540 | 3900 | 0 | 215/175/130; 175/207/110 | - | death world dark castle l |
| 09_armored_warrior | 2540 | 3900 | 0 | 215/175/130; 175/207/110 | - | earth world false pit cav |
| 04_dragon_turtle | 2444 | 4050 | 0 | 114/185/110 | 58/58 | water world white rain ar |
| 0a_wizcrypha | 2440 | 3200 | 0 | - | 67/12; 66/12; 38 | fire world ashen cavern |
| 05_old_face | 2412 | 4100 | 0 | - | 64 | fire world molten cavern |
| 02_karasu | 2298 | 3800 | 4 | 155/144/107 | - | human world forgotten reg |
| 08_claw_head | 2282 | 3600 | 0 | 120/60/80 | - | death world undead layer |
| 0a_cursed_demon | 2276 | 3780 | 0 | 195/100/163 | 38 | water world watery labyri |
| 0d_deha | 2270 | 3360 | 0 | 110/125/86; 105/135/76; 60/125/101 | 70/69 | fire world ashen cavern |
| 0c_old_face | 2241 | 3200 | 0 | 150/195/140 | 30; 34 | earth world hostile rock  |
| 08_war_demon_1 | 2188 | 3500 | 2 | 145/143/75; 148/153/55 | - | human world hidden region |
| 06_oblid | 2183 | 3500 | 0 | 122/165/136; 160/140/113 | - | earth world poisonous cav |
| 00_master_knight | 2115 | 3200 | 0 | 190/130/105; 100/80/195 | - | monster world screeching  |
| 01_gorthaur | 2060 | 3450 | 0 | 98/55/90 | 73 | illusion world worship do |
| 01_disguise | 1997 | 2700 | 0 | - | 76; 75/12 | illusion world dream doma |
| 0d_saurian_warrior_b | 1939 | 2800 | 0 | 128/175/88 | 30 | earth world quaking caver |
| 0c_saurian_warrior_a | 1925 | 2800 | 0 | 178/140/88 | - | earth world false pit cav |
| 0e_claw_head | 1913 | 3600 | 0 | - | 60/6; 61/6 | death world undead layer |
| 00_hell_hunter | 1913 | 3600 | 0 | - | 60/6; 61/6 | monster world screeching  |
| 04_king_hopper | 1892 | 3230 | 0 | - | 80/1 | fire world burning cavern |
| 08_apocrypha | 1867 | 2000 | 0 | - | 113/50; 113/50 | death world lingering cur |
| 00_dark_spirits | 1771 | 2040 | 0 | - | 77/4; 77/46; 76/46 | illusion world gloomy dom |
| 09_war_demon_2 | 1738 | 2800 | 0 | 145/63/55; 103/38/30 | - | water world impure pool a |
| 09_descrypha | 1732 | 1800 | 0 | - | 114/50; 114/50 | illusion world bewilderme |
| 09_pulsating_heart | 1671 | 2000 | 0 | 75/50/70 | 64/20/42 | death world undead layer |
| 04_dread_knight | 1653 | 2400 | 0 | 95/73/56; 55/78/123 | 42 | earth world hostile rock  |
| 04_dark_spirits | 1648 | 2040 | 0 | 60/70/185; 178/55/63 | - | illusion world bewilderme |
| 00_red_puppet | 1648 | 2040 | 0 | 60/70/185; 178/55/63 | - | monster world false eye a |
| 01_dark_spirits | 1641 | 2040 | 0 | 58/68/145; 188/53/68 | - | illusion world gloomy dom |
| 05_dark_spirits | 1641 | 2040 | 2 | 58/68/145; 188/53/68 | - | human world cursed region |
| 04_zygote | 1617 | 2000 | 0 | 78/149/70 | 51; 122 | death world dark castle l |
| 0d_blood_bone | 1583 | 2820 | 0 | 125/103/75 | 38 | earth world quaking caver |
| 08_hermit_crab | 1572 | 2420 | 1 | 125/160/135 | 79 | human world solitary regi |
| 04_great_frog | 1505 | 2740 | 0 | - | - | water world impure pool a |
| 0c_death_mage | 1498 | 1800 | 0 | 85/40/50 | 71 | illusion world bewilderme |
| 09_dementor | 1446 | 2270 | 0 | 125/80/66; 98/75/59 | - | death world lingering cur |
| 01_chirper | 1409 | 2520 | 0 | - | 30 | fire world ashen cavern |
| 04_demon_warrior | 1363 | 1880 | 0 | 124/73/135; 90/88/75 | 72 | water world impure pool a |
| 0e_dinogon | 1356 | 2020 | 0 | 83/184/130 | 78/29 | illusion world gloomy dom |
| 09_koazul | 1348 | 1540 | 2 | 130/55/115; 135/70/130 | 57/19 | human world hidden region |
| 08_ring_demon | 1266 | 2050 | 0 | - | 118/4 | illusion world gloomy dom |
| 04_kabasaur | 1244 | 1700 | 0 | 153/125/70; 115/150/58 | - | death world lingering cur |
| 00_kabasaur | 1244 | 1700 | 0 | 153/125/70; 115/150/58 | - | fire world phoenix cave |
| 0e_manna_python | 1238 | 1980 | 0 | 73/95/70 | 56/2 | fire world burning cavern |
| 05_hell_hunter | 1226 | 2100 | 0 | 70/60/53 | - | earth world false pit cav |
| 0d_slasher | 1223 | 1620 | 0 | 128/63/98 | 58/199/203 | death world dark castle l |
| 09_cross_breed | 1152 | 1800 | 0 | - | 75/28/45; 30 | illusion world gloomy dom |
| 0a_dark_bishop | 1132 | 1560 | 0 | 65/125/49 | 69 | earth world quaking caver |
| 05_water_knight | 1113 | 1580 | 0 | 68/93/50; 68/93/50 | - | fire world molten cavern |
| 00_winged_worm | 1080 | 1720 | 0 | - | 60; 30 | death world undead layer |
| 05_master_howler | 1074 | 1450 | 0 | 180/178/130 | - | monster world false eye a |
| 0d_arachness | 1017 | 1270 | 0 | 123/90/70 | 48; 44 | fire world phoenix cave |
| 08_berzerker | 987 | 1380 | 0 | 90/122/61 | 45 | earth world poisonous cav |
| 00_berzerker | 987 | 1380 | 0 | 90/122/61 | 45 | fire world burning cavern |
| 01_berzerker | 987 | 1380 | 0 | 90/122/61 | 45 | illusion world gloomy dom |
| 04_berzerker | 987 | 1380 | 0 | 90/122/61 | 45 | monster world screeching  |
| 06_black_imp | 961 | 1040 | 0 | - | 123; 38 | illusion world gloomy dom |
| 0c_worm_face | 961 | 1410 | 2 | 68/75/55 | 54/63 | human world hidden region |
| 02_dark_imp | 961 | 1040 | 5 | - | 123; 38 | earth world rotting caver |
| 0d_damned_angel | 958 | 1280 | 0 | - | 51 | fire world phoenix cave |
| 05_armored_jinn | 932 | 720 | 0 | 125/100/86 | 44/4 | water world watery labyri |
| 04_auriel_b | 813 | 1000 | 0 | - | - | earth world poisonous cav |
| 08_torg | 807 | 1200 | 0 | 49/100/21 | 36/87 | fire world molten cavern |
| 09_dark_fairy | 802 | 1032 | 0 | - | 68/61/80 | illusion world dream doma |
| 09_iron_crusher | 799 | 1100 | 0 | - | 47/0; 46/58/58 | death world gate of the d |
| 0d_dweller | 799 | 1100 | 1 | - | 47/0; 46/58/58 | human world solitary regi |
| 06_warpoor | 790 | 1120 | 0 | - | 74; 123 | illusion world gloomy dom |
| 0a_warpoor | 790 | 1120 | 0 | - | 74; 123 | illusion world worship do |
| 08_clay_servant | 778 | 980 | 0 | 51/138/48; 64/98/43 | - | earth world stone cavern |
| 00_black_onyx | 773 | 750 | 0 | 71/60/45 | 106/28 | earth world false pit cav |
| 01_earth_knight | 772 | 970 | 0 | 61/44/31; 33/21/62; 23/11/97 | - | illusion world worship do |
| 00_earth_knight | 772 | 970 | 0 | 61/44/31; 33/21/62; 23/11/97 | - | water world impure pool a |
| 05_earth_knight | 772 | 970 | 2 | 61/44/31; 33/21/62; 23/11/97 | - | human world hidden region |
| 0c_ray_plant | 752 | 1080 | 1 | - | 104/88; 123 | human world solitary regi |
| 04_night_howler | 749 | 950 | 0 | 160/123/118 | - | death world gate of the d |
| 00_night_howler | 749 | 950 | 0 | 160/123/118 | - | earth world quaking caver |
| 0e_mystic_tower | 746 | 1050 | 0 | - | 108/7; 46 | fire world ashen cavern |
| 06_mystic_tower | 746 | 1050 | 0 | - | 108/7; 46 | illusion world gloomy dom |
| 05_warden | 746 | 1110 | 0 | - | 83/13 | monster world false eye a |
| 02_mystic_tower | 746 | 1050 | 5 | - | 108/7; 46 | earth world rotting caver |
| 0a_dweller | 713 | 1160 | 0 | - | 55 | monster world screeching  |
| 06_dweller | 713 | 1160 | 2 | - | 55 | human world hidden region |
| 08_guardian_b | 708 | 870 | 0 | 46/35/74; 46/35/109 | 100/1 | earth world false pit cav |
| 06_gordoral | 708 | 850 | 0 | - | 119/0 | illusion world bewilderme |
| 02_gordoral | 708 | 850 | 0 | - | 119/0 | illusion world worship do |
| 01_gargaral | 652 | 750 | 0 | - | 70 | illusion world bewilderme |
| 05_gargaral | 652 | 750 | 2 | - | 70 | human world cursed region |
| 04_kiljoy | 650 | 720 | 0 | 90/30/56; 96/33/61; 101/43/82 | - | water world watery labyri |
| 0a_rotting_face | 635 | 420 | 0 | - | 38; 72 | illusion world bewilderme |
| 0e_rotting_face | 635 | 420 | 0 | - | 38; 72 | illusion world gloomy dom |
| 02_sand_leech_b | 602 | 700 | 0 | 41/20/77 | - | earth world quaking caver |
| 0c_gaze_hopper | 580 | 650 | 0 | 78/143/63 | 56/18 | death world lingering cur |
| 0c_maristella | 570 | 820 | 0 | - | 68; 34 | death world lingering cur |
| 01_myconid | 550 | 850 | 0 | 31/48/25 | 30/2 | monster world false eye a |
| 0a_barrel_snail | 520 | 560 | 0 | 47/30/78; 65/40/33 | 40 | earth world stone cavern |
| 09_sloth_bug | 520 | 560 | 0 | 47/30/78; 65/40/33 | 40 | illusion world bewilderme |
| 05_hobble_worm | 508 | 620 | 0 | 45/76/39 | 39/36; 39 | earth world stone cavern |
| 0a_horned_slime | 496 | 620 | 0 | 40/58/63 | 53/51 | earth world false pit cav |
| 02_horned_slime | 496 | 620 | 0 | 40/58/63 | 53/51 | water world impure pool a |
| 01_horned_slime | 496 | 620 | 0 | 40/58/63 | 53/51 | water world watery labyri |
| 05_horned_slime | 496 | 620 | 0 | 40/58/63 | 53/51 | water world watery labyri |
| 02_blood_brain | 460 | 590 | 0 | 25/63/43 | 54/17 | death world dark castle l |
| 05_blood_brain | 460 | 590 | 2 | 25/63/43 | 54/17 | human world cursed region |
| 04_cannon_snail | 453 | 640 | 0 | - | 41/1/2 | water world white rain ar |
| 08_casket | 449 | 261 | 1 | - | 122 | human world solitary regi |
| 02_elder | 430 | 608 | 5 | 29/23/63 | 30 | earth world rotting caver |
| 06_elder | 430 | 608 | 5 | 29/23/63 | 30 | earth world rotting caver |
| 0e_elder | 430 | 608 | 5 | 29/23/63 | 30 | earth world rotting caver |
| 02_dead_abraxus | 414 | 1 | 0 | - | - | fire world molten cavern |
| 0a_guardian_a | 412 | 480 | 2 | 15/17/46 | 100/1 | human world cursed region |
| 0d_trickster | 396 | 380 | 0 | 25/40/60 | 31; 121 | fire world ashen cavern |
| 09_cocoon_plant | 390 | 320 | 0 | 32/25/54 | 37/138/159 | earth world hostile rock  |
| 0c_dybbuk | 380 | 520 | 0 | - | 38 | earth world stone cavern |
| 00_duhrin | 378 | 600 | 0 | - | - | earth world poisonous cav |
| 06_fanged_worm | 370 | 434 | 2 | 12/32/12 | 26/75 | human world hidden region |
| 00_dybbuk | 369 | 520 | 0 | - | - | earth world stone cavern |
| 04_dybbuk | 369 | 520 | 0 | - | - | earth world stone cavern |
| 01_beak_plant | 366 | 480 | 0 | 25/33/45 | 34 | earth world poisonous cav |
| 08_star_serpent | 361 | 454 | 0 | 33/40/31 | 29 | earth world poisonous cav |
| 09_dwarf_warrior | 361 | 382 | 5 | 32/20/51; 32/20/66 | - | earth world rotting caver |
| 0c_barrel_snail | 358 | 560 | 5 | - | 29/1/2 | earth world rotting caver |
| 01_blue_flicker | 313 | 440 | 0 | - | 103/4 | water world impure pool a |
| 02_skeleton | 312 | 384 | 0 | 42/18/10 | - | fire world burning cavern |
| 0a_skeleton | 312 | 384 | 2 | 42/18/10 | - | human world cursed region |
| 00_watcher_plant | 299 | 354 | 0 | 21/33/20 | 101/7 | earth world poisonous cav |
| 02_watcher_plant | 299 | 354 | 2 | 21/33/20 | 101/7 | human world cursed region |
| 0e_watcher_plant | 299 | 354 | 5 | 21/33/20 | 101/7 | earth world rotting caver |
| 0d_tondrom | 290 | 280 | 5 | 18/61/21 | - | earth world rotting caver |
| 00_gorgoral | 288 | 100 | 0 | - | - | illusion world bewilderme |
| 08_trickster | 279 | 380 | 0 | - | 34/30 | earth world poisonous cav |
| 02_parasite | 277 | 220 | 2 | 39/43/45; 39/38/41 | - | human world hidden region |
| 01_acid_pod | 275 | 320 | 0 | - | 31/40 | death world dark castle l |
| 05_acid_pod | 275 | 320 | 0 | - | 31/40 | fire world burning cavern |
| 05_cocoon_plant | 275 | 320 | 0 | - | 31/40 | water world sunken river  |
| 0d_cocoon_plant | 275 | 320 | 0 | - | 31/40 | water world watery labyri |
| 0d_crying_root | 270 | 350 | 0 | - | 40 | earth world stone cavern |
| 00_acid_skull | 267 | 280 | 4 | 8/8/12 | 27 | human world forgotten reg |
| 04_minor_dwarf | 254 | 308 | 2 | 23/45/13 | - | human world hidden region |
| 01_blood_skull | 253 | 263 | 4 | 8/7/11 | 28 | human world forgotten reg |
| 05_blood_skull | 253 | 263 | 4 | 8/7/11 | 28 | human world forgotten reg |
| 09_imp | 243 | 308 | 2 | - | 28 | human world cursed region |
| 02_lizard_servant | 238 | 1 | 0 | - | - | monster world false eye a |
| 06_lizard_servant | 238 | 1 | 0 | - | - | monster world false eye a |
| 01_shadow_spider | 230 | 240 | 0 | 2/31/1 | 26 | illusion world bewilderme |
| 09_shadow_spider | 230 | 240 | 0 | 2/31/1 | 26 | illusion world worship do |
| 06_tongue_imp | 210 | 162 | 0 | - | 122 | illusion world gloomy dom |
| 02_tongue_imp | 210 | 162 | 5 | - | 122 | earth world rotting caver |
| 01_demon_bat | 187 | 135 | 0 | - | 24; 24 | earth world stone cavern |
| 09_demon_bat | 187 | 135 | 1 | - | 24; 24 | human world solitary regi |
| 01_blood_slime | 162 | 96 | 0 | 7/6/8 | 25 | death world gate of the d |
| 09_blood_slime | 162 | 96 | 0 | 7/6/8 | 25 | death world gate of the d |
| 05_blood_slime | 162 | 96 | 0 | 7/6/8 | 25 | illusion world bewilderme |
| 02_blood_slime | 162 | 96 | 1 | 7/6/8 | 25 | human world solitary regi |
| 0c_hanging_dead | 158 | 200 | 0 | - | 33 | earth world poisonous cav |
| 08_dark_spider | 145 | 121 | 0 | 5/5/10; 6/7/14 | - | death world gate of the d |
| 00_dark_spider | 145 | 121 | 0 | 5/5/10; 6/7/14 | - | earth world false pit cav |
| 04_acid_slime | 136 | 95 | 0 | 5/6/7 | 25 | death world gate of the d |
| 01_acid_slime | 136 | 95 | 0 | 5/6/7 | 25 | earth world false pit cav |
| 00_acid_slime | 136 | 95 | 5 | 5/6/7 | 25 | earth world rotting caver |
| 00_sand_leech_a | 103 | 50 | 0 | - | 35/8 | fire world burning cavern |
| 05_dwarfling | 88 | 1 | 0 | - | - | water world impure pool a |

---

## Creatures with Type 0x30 (Magic/Spell Attacks)

**These creatures were fixed in PR #14 to properly scale with difficulty settings.**

| Creature | Power | HP | Magic Attack Values |
|----------|-------|----|--------------------|\n| 0a_demons_eye | 33407 | 820 | 111/1 |
| 00_abraxus | 33317 | 65535 | 48/91/91; 48/91/91 |
| 0d_hatchlin | 15838 | 1460 | 38 |
| 09_cerberus | 7870 | 2300 | 50/2; 30 |
| 04_jinn_lord | 7719 | 1920 | 43/10; 43 |
| 01_unknown_b | 4974 | 7560 | 62; 63 |
| 01_auriel_c | 4953 | 7560 | 80; 81 |
| 0c_hollow_mage | 4833 | 7800 | 30; 32 |
| 0a_ruby_demon | 4376 | 2260 | 110/28 |
| 09_steel_servant | 4324 | 1810 | 47/1 |
| 04_king_edward | 4217 | 6500 | 123 |
| 04_wildowess | 4102 | 6600 | 121 |
| 01_horned_skull | 4002 | 1550 | 44/12 |
| 05_horned_skull | 4002 | 1550 | 44/12 |
| 00_bone_demon | 3975 | 1480 | 50/50/51 |
| 0c_ebony_knight | 3826 | 4270 | 52; 53 |
| 0e_necron | 3562 | 4800 | 82/154; 82/140; 81/183 |
| 06_fire_jinn | 3462 | 572 | 44/14 |
| 02_fire_jinn | 3462 | 572 | 44/14 |
| 08_oxelus | 3355 | 5700 | 79/12 |
| 05_doriwi | 3242 | 4800 | 30 |
| 01_doriwi | 3242 | 4800 | 30 |
| 02_bone_wolf | 3044 | 4100 | 30 |
| 0a_bone_wolf | 3044 | 4100 | 30 |
| 04_tree_ogre | 2889 | 4900 | 61/6 |
| 0d_bugler | 2864 | 4200 | 120 |
| 0d_death_serpent | 2813 | 4730 | 83/41; 30 |
| 08_wyvern | 2740 | 4500 | 115/147 |
| 08_fester | 2735 | 4650 | 73 |
| 05_magi_magus | 2689 | 3730 | 59/149; 59 |
| 01_stack_eyes | 2577 | 4150 | 66/6; 66/6; 66/6 |
| 09_freak | 2553 | 3600 | 36/116/190; 30 |
| 04_dragon_turtle | 2444 | 4050 | 58/58 |
| 0a_wizcrypha | 2440 | 3200 | 67/12; 66/12; 38 |
| 05_old_face | 2412 | 4100 | 64 |
| 0a_cursed_demon | 2276 | 3780 | 38 |
| 0d_deha | 2270 | 3360 | 70/69 |
| 0c_old_face | 2241 | 3200 | 30; 34 |
| 01_gorthaur | 2060 | 3450 | 73 |
| 01_disguise | 1997 | 2700 | 76; 75/12 |
| 0d_saurian_warrior_b | 1939 | 2800 | 30 |
| 0e_claw_head | 1913 | 3600 | 60/6; 61/6 |
| 00_hell_hunter | 1913 | 3600 | 60/6; 61/6 |
| 04_king_hopper | 1892 | 3230 | 80/1 |
| 08_apocrypha | 1867 | 2000 | 113/50; 113/50 |
| 00_dark_spirits | 1771 | 2040 | 77/4; 77/46; 76/46 |
| 09_descrypha | 1732 | 1800 | 114/50; 114/50 |
| 09_pulsating_heart | 1671 | 2000 | 64/20/42 |
| 04_dread_knight | 1653 | 2400 | 42 |
| 04_zygote | 1617 | 2000 | 51; 122 |
| 0d_blood_bone | 1583 | 2820 | 38 |
| 08_hermit_crab | 1572 | 2420 | 79 |
| 0c_death_mage | 1498 | 1800 | 71 |
| 01_chirper | 1409 | 2520 | 30 |
| 04_demon_warrior | 1363 | 1880 | 72 |
| 0e_dinogon | 1356 | 2020 | 78/29 |
| 09_koazul | 1348 | 1540 | 57/19 |
| 08_ring_demon | 1266 | 2050 | 118/4 |
| 0e_manna_python | 1238 | 1980 | 56/2 |
| 0d_slasher | 1223 | 1620 | 58/199/203 |
| 09_cross_breed | 1152 | 1800 | 75/28/45; 30 |
| 0a_dark_bishop | 1132 | 1560 | 69 |
| 00_winged_worm | 1080 | 1720 | 60; 30 |
| 0d_arachness | 1017 | 1270 | 48; 44 |
| 08_berzerker | 987 | 1380 | 45 |
| 00_berzerker | 987 | 1380 | 45 |
| 01_berzerker | 987 | 1380 | 45 |
| 04_berzerker | 987 | 1380 | 45 |
| 06_black_imp | 961 | 1040 | 123; 38 |
| 0c_worm_face | 961 | 1410 | 54/63 |
| 02_dark_imp | 961 | 1040 | 123; 38 |
| 0d_damned_angel | 958 | 1280 | 51 |
| 05_armored_jinn | 932 | 720 | 44/4 |
| 08_torg | 807 | 1200 | 36/87 |
| 09_dark_fairy | 802 | 1032 | 68/61/80 |
| 09_iron_crusher | 799 | 1100 | 47/0; 46/58/58 |
| 0d_dweller | 799 | 1100 | 47/0; 46/58/58 |
| 06_warpoor | 790 | 1120 | 74; 123 |
| 0a_warpoor | 790 | 1120 | 74; 123 |
| 00_black_onyx | 773 | 750 | 106/28 |
| 0c_ray_plant | 752 | 1080 | 104/88; 123 |
| 0e_mystic_tower | 746 | 1050 | 108/7; 46 |
| 06_mystic_tower | 746 | 1050 | 108/7; 46 |
| 05_warden | 746 | 1110 | 83/13 |
| 02_mystic_tower | 746 | 1050 | 108/7; 46 |
| 0a_dweller | 713 | 1160 | 55 |
| 06_dweller | 713 | 1160 | 55 |
| 08_guardian_b | 708 | 870 | 100/1 |
| 06_gordoral | 708 | 850 | 119/0 |
| 02_gordoral | 708 | 850 | 119/0 |
| 01_gargaral | 652 | 750 | 70 |
| 05_gargaral | 652 | 750 | 70 |
| 0a_rotting_face | 635 | 420 | 38; 72 |
| 0e_rotting_face | 635 | 420 | 38; 72 |
| 0c_gaze_hopper | 580 | 650 | 56/18 |
| 0c_maristella | 570 | 820 | 68; 34 |
| 01_myconid | 550 | 850 | 30/2 |
| 0a_barrel_snail | 520 | 560 | 40 |
| 09_sloth_bug | 520 | 560 | 40 |
| 05_hobble_worm | 508 | 620 | 39/36; 39 |
| 0a_horned_slime | 496 | 620 | 53/51 |
| 02_horned_slime | 496 | 620 | 53/51 |
| 01_horned_slime | 496 | 620 | 53/51 |
| 05_horned_slime | 496 | 620 | 53/51 |
| 02_blood_brain | 460 | 590 | 54/17 |
| 05_blood_brain | 460 | 590 | 54/17 |
| 04_cannon_snail | 453 | 640 | 41/1/2 |
| 08_casket | 449 | 261 | 122 |
| 02_elder | 430 | 608 | 30 |
| 06_elder | 430 | 608 | 30 |
| 0e_elder | 430 | 608 | 30 |
| 0a_guardian_a | 412 | 480 | 100/1 |
| 0d_trickster | 396 | 380 | 31; 121 |
| 09_cocoon_plant | 390 | 320 | 37/138/159 |
| 0c_dybbuk | 380 | 520 | 38 |
| 06_fanged_worm | 370 | 434 | 26/75 |
| 01_beak_plant | 366 | 480 | 34 |
| 08_star_serpent | 361 | 454 | 29 |
| 0c_barrel_snail | 358 | 560 | 29/1/2 |
| 01_blue_flicker | 313 | 440 | 103/4 |
| 00_watcher_plant | 299 | 354 | 101/7 |
| 02_watcher_plant | 299 | 354 | 101/7 |
| 0e_watcher_plant | 299 | 354 | 101/7 |
| 08_trickster | 279 | 380 | 34/30 |
| 01_acid_pod | 275 | 320 | 31/40 |
| 05_acid_pod | 275 | 320 | 31/40 |
| 05_cocoon_plant | 275 | 320 | 31/40 |
| 0d_cocoon_plant | 275 | 320 | 31/40 |
| 0d_crying_root | 270 | 350 | 40 |
| 00_acid_skull | 267 | 280 | 27 |
| 01_blood_skull | 253 | 263 | 28 |
| 05_blood_skull | 253 | 263 | 28 |
| 09_imp | 243 | 308 | 28 |
| 01_shadow_spider | 230 | 240 | 26 |
| 09_shadow_spider | 230 | 240 | 26 |
| 06_tongue_imp | 210 | 162 | 122 |
| 02_tongue_imp | 210 | 162 | 122 |
| 01_demon_bat | 187 | 135 | 24; 24 |
| 09_demon_bat | 187 | 135 | 24; 24 |
| 01_blood_slime | 162 | 96 | 25 |
| 09_blood_slime | 162 | 96 | 25 |
| 05_blood_slime | 162 | 96 | 25 |
| 02_blood_slime | 162 | 96 | 25 |
| 0c_hanging_dead | 158 | 200 | 33 |
| 04_acid_slime | 136 | 95 | 25 |
| 01_acid_slime | 136 | 95 | 25 |
| 00_acid_slime | 136 | 95 | 25 |
| 00_sand_leech_a | 103 | 50 | 35/8 |

---

## Full Attribute Table

| Creature | Power | HP | STR | SPD | DEF | BAL | SLA | SMH | PIR | SPR | FOC | HAM | PUR | PAR | MEL | SOL |
|----------|-------|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| 0a_demons_eye | 33407 | 820 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 2 | 2 | 1 |
| 00_abraxus | 33317 | 65535 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 5 | 2 | 1 | 0 | 5 | 0 | 4 |
| 0d_fat_mole_e | 32819 | 65535 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 02_fat_mole_d | 32807 | 65535 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 00_fat_mole_f | 32804 | 65535 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 08_fat_mole_b | 32789 | 65535 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0c_fat_mole_c | 32789 | 65535 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 04_fat_mole_a | 32768 | 65535 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0d_hatchlin | 15838 | 1460 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 10 | 0 | 0 | 0 |
| 09_cerberus | 7870 | 2300 | 0 | 5 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 5 | 0 | 0 | 0 | 0 |
| 04_jinn_lord | 7719 | 1920 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 1 | 2 | 1 | 0 | 3 | 0 | 0 |
| 01_unknown_b | 4974 | 7560 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 01_auriel_c | 4953 | 7560 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0c_hollow_mage | 4833 | 7800 | 0 | 4 | 0 | 2 | 0 | 0 | 1 | 16 | 10 | 0 | 5 | 2 | 0 | 10 |
| 0a_ruby_demon | 4376 | 2260 | 0 | 1 | 0 | 0 | 1 | 0 | 0 | 1 | 1 | 1 | 0 | 1 | 0 | 0 |
| 09_steel_servant | 4324 | 1810 | 0 | 0 | 0 | 0 | 0 | 5 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 04_king_edward | 4217 | 6500 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 04_wildowess | 4102 | 6600 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 6 | 4 | 0 | 5 | 0 | 0 | 3 |
| 01_horned_skull | 4002 | 1550 | 0 | 2 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 1 | 0 | 1 |
| 05_horned_skull | 4002 | 1550 | 0 | 2 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 1 | 0 | 1 |
| 00_bone_demon | 3975 | 1480 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 | 0 | 0 | 1 | 0 | 3 |
| 00_unused_a | 3877 | 6000 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 12 | 5 | 0 | 1 |
| 0c_ebony_knight | 3826 | 4270 | 0 | 7 | 0 | 0 | 0 | 0 | 4 | 11 | 3 | 9 | 0 | 1 | 0 | 0 |
| 06_hell_warrior | 3792 | 5800 | 0 | 4 | 0 | 1 | 5 | 0 | 0 | 0 | 0 | 2 | 0 | 3 | 0 | 2 |
| 0e_necron | 3562 | 4800 | 12 | 5 | 0 | 0 | 3 | 2 | 8 | 2 | 2 | 0 | 1 | 0 | 3 | 3 |
| 06_fire_jinn | 3462 | 572 | 0 | 0 | 0 | 0 | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 0 | 0 | 0 |
| 02_fire_jinn | 3462 | 572 | 0 | 0 | 0 | 0 | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 0 | 0 | 0 |
| 08_oxelus | 3355 | 5700 | 0 | 3 | 0 | 0 | 6 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 05_doriwi | 3242 | 4800 | 2 | 0 | 2 | 2 | 0 | 5 | 0 | 1 | 0 | 0 | 4 | 0 | 0 | 0 |
| 01_doriwi | 3242 | 4800 | 2 | 0 | 2 | 2 | 0 | 5 | 0 | 1 | 0 | 0 | 4 | 0 | 0 | 0 |
| 02_bone_wolf | 3044 | 4100 | 2 | 0 | 1 | 3 | 0 | 0 | 0 | 0 | 0 | 4 | 1 | 0 | 0 | 2 |
| 0a_bone_wolf | 3044 | 4100 | 2 | 0 | 1 | 3 | 0 | 0 | 0 | 0 | 0 | 4 | 1 | 0 | 0 | 2 |
| 04_tree_ogre | 2889 | 4900 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 1 | 2 | 0 | 3 | 2 |
| 0d_bugler | 2864 | 4200 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 10 | 0 | 0 | 0 | 0 | 0 | 0 |
| 08_armored_guardian | 2853 | 4200 | 7 | 0 | 1 | 0 | 2 | 2 | 0 | 0 | 0 | 0 | 1 | 2 | 0 | 0 |
| 0d_death_serpent | 2813 | 4730 | 0 | 0 | 0 | 6 | 0 | 4 | 0 | 0 | 0 | 0 | 3 | 5 | 0 | 0 |
| 08_wyvern | 2740 | 4500 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 7 | 5 | 4 | 0 | 0 | 0 | 1 |
| 08_fester | 2735 | 4650 | 2 | 3 | 0 | 0 | 0 | 0 | 6 | 0 | 0 | 0 | 2 | 5 | 0 | 0 |
| 05_magi_magus | 2689 | 3730 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 10 | 1 | 6 | 0 | 0 | 12 | 9 |
| 00_panak | 2666 | 5100 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 06_armored_slayer | 2605 | 3800 | 0 | 0 | 3 | 0 | 3 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 |
| 0a_armored_slayer | 2605 | 3800 | 0 | 0 | 3 | 0 | 3 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 |
| 01_stack_eyes | 2577 | 4150 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 7 | 1 | 0 | 0 | 0 |
| 09_freak | 2553 | 3600 | 0 | 0 | 0 | 2 | 0 | 0 | 6 | 0 | 0 | 4 | 0 | 0 | 0 | 1 |
| 05_armored_warrior | 2540 | 3900 | 3 | 0 | 1 | 0 | 0 | 2 | 1 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |
| 09_armored_warrior | 2540 | 3900 | 3 | 0 | 1 | 0 | 0 | 2 | 1 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |
| 04_dragon_turtle | 2444 | 4050 | 0 | 0 | 7 | 4 | 0 | 0 | 0 | 1 | 0 | 6 | 0 | 0 | 1 | 0 |
| 0a_wizcrypha | 2440 | 3200 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 5 | 3 | 0 | 3 | 3 | 3 | 1 |
| 05_old_face | 2412 | 4100 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 3 | 3 | 0 | 0 | 1 |
| 02_karasu | 2298 | 3800 | 0 | 2 | 0 | 1 | 0 | 0 | 1 | 0 | 0 | 2 | 1 | 0 | 1 | 5 |
| 08_claw_head | 2282 | 3600 | 0 | 0 | 3 | 0 | 3 | 5 | 4 | 4 | 2 | 3 | 0 | 0 | 0 | 0 |
| 0a_cursed_demon | 2276 | 3780 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 4 | 4 | 0 | 2 | 0 | 0 | 0 |
| 0d_deha | 2270 | 3360 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 5 | 0 |
| 0c_old_face | 2241 | 3200 | 2 | 0 | 3 | 2 | 0 | 0 | 3 | 0 | 1 | 0 | 0 | 0 | 0 | 1 |
| 08_war_demon_1 | 2188 | 3500 | 3 | 1 | 0 | 0 | 1 | 0 | 3 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |
| 06_oblid | 2183 | 3500 | 0 | 2 | 0 | 0 | 0 | 7 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 |
| 00_master_knight | 2115 | 3200 | 2 | 2 | 3 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 01_gorthaur | 2060 | 3450 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 10 | 7 | 1 | 0 | 0 | 0 |
| 01_disguise | 1997 | 2700 | 0 | 5 | 0 | 0 | 0 | 0 | 0 | 21 | 7 | 3 | 8 | 0 | 0 | 0 |
| 0d_saurian_warrior_b | 1939 | 2800 | 1 | 0 | 3 | 0 | 4 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| 0c_saurian_warrior_a | 1925 | 2800 | 0 | 1 | 3 | 2 | 3 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0e_claw_head | 1913 | 3600 | 0 | 6 | 0 | 0 | 0 | 1 | 4 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 00_hell_hunter | 1913 | 3600 | 0 | 6 | 0 | 0 | 0 | 1 | 4 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 04_king_hopper | 1892 | 3230 | 1 | 0 | 0 | 0 | 0 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 08_apocrypha | 1867 | 2000 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 1 | 2 | 0 | 0 | 0 |
| 00_dark_spirits | 1771 | 2040 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
| 09_war_demon_2 | 1738 | 2800 | 2 | 0 | 2 | 0 | 0 | 4 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |
| 09_descrypha | 1732 | 1800 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 1 | 0 | 0 | 2 | 0 |
| 09_pulsating_heart | 1671 | 2000 | 6 | 2 | 0 | 0 | 6 | 0 | 1 | 6 | 0 | 0 | 6 | 4 | 4 | 4 |
| 04_dread_knight | 1653 | 2400 | 10 | 0 | 0 | 3 | 8 | 6 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 7 |
| 04_dark_spirits | 1648 | 2040 | 0 | 2 | 0 | 0 | 0 | 0 | 3 | 0 | 0 | 0 | 0 | 0 | 1 | 2 |
| 00_red_puppet | 1648 | 2040 | 0 | 2 | 0 | 0 | 0 | 0 | 3 | 0 | 0 | 0 | 0 | 0 | 1 | 2 |
| 01_dark_spirits | 1641 | 2040 | 0 | 2 | 0 | 0 | 0 | 0 | 3 | 0 | 0 | 0 | 0 | 0 | 1 | 2 |
| 05_dark_spirits | 1641 | 2040 | 0 | 2 | 0 | 0 | 0 | 0 | 3 | 0 | 0 | 0 | 0 | 0 | 1 | 2 |
| 04_zygote | 1617 | 2000 | 0 | 0 | 1 | 0 | 2 | 0 | 0 | 3 | 1 | 0 | 0 | 0 | 0 | 0 |
| 0d_blood_bone | 1583 | 2820 | 0 | 3 | 0 | 0 | 3 | 0 | 0 | 1 | 3 | 0 | 2 | 3 | 0 | 3 |
| 08_hermit_crab | 1572 | 2420 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 0 | 5 | 0 | 0 | 3 |
| 04_great_frog | 1505 | 2740 | 5 | 0 | 2 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 4 | 0 | 4 | 0 |
| 0c_death_mage | 1498 | 1800 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 5 | 0 | 2 | 0 | 0 | 0 |
| 09_dementor | 1446 | 2270 | 4 | 0 | 1 | 0 | 0 | 0 | 3 | 1 | 0 | 0 | 0 | 1 | 0 | 1 |
| 01_chirper | 1409 | 2520 | 5 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 0 | 0 |
| 04_demon_warrior | 1363 | 1880 | 2 | 1 | 0 | 0 | 1 | 1 | 2 | 1 | 0 | 0 | 0 | 0 | 0 | 1 |
| 0e_dinogon | 1356 | 2020 | 0 | 3 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 1 | 0 | 4 | 0 | 0 |
| 09_koazul | 1348 | 1540 | 2 | 0 | 0 | 0 | 1 | 0 | 1 | 3 | 0 | 0 | 0 | 0 | 0 | 1 |
| 08_ring_demon | 1266 | 2050 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 2 | 3 | 0 | 0 | 0 |
| 04_kabasaur | 1244 | 1700 | 3 | 0 | 0 | 1 | 0 | 2 | 0 | 1 | 0 | 0 | 0 | 0 | 1 | 0 |
| 00_kabasaur | 1244 | 1700 | 3 | 0 | 0 | 1 | 0 | 2 | 0 | 1 | 0 | 0 | 0 | 0 | 1 | 0 |
| 0e_manna_python | 1238 | 1980 | 2 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 |
| 05_hell_hunter | 1226 | 2100 | 0 | 0 | 1 | 2 | 1 | 1 | 2 | 1 | 2 | 1 | 1 | 0 | 0 | 2 |
| 0d_slasher | 1223 | 1620 | 0 | 2 | 0 | 0 | 5 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 09_cross_breed | 1152 | 1800 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 1 | 1 | 0 | 0 | 2 |
| 0a_dark_bishop | 1132 | 1560 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 3 | 0 | 0 | 0 | 0 | 1 |
| 05_water_knight | 1113 | 1580 | 0 | 0 | 2 | 0 | 0 | 1 | 4 | 0 | 0 | 1 | 0 | 0 | 1 | 0 |
| 00_winged_worm | 1080 | 1720 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 3 | 0 | 0 | 0 |
| 05_master_howler | 1074 | 1450 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 1 | 5 | 8 |
| 0d_arachness | 1017 | 1270 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 3 | 4 | 0 | 0 | 1 | 0 | 0 |
| 08_berzerker | 987 | 1380 | 1 | 1 | 1 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |
| 00_berzerker | 987 | 1380 | 1 | 1 | 1 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |
| 01_berzerker | 987 | 1380 | 1 | 1 | 1 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |
| 04_berzerker | 987 | 1380 | 1 | 1 | 1 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |
| 06_black_imp | 961 | 1040 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 0 | 7 | 0 | 0 | 3 |
| 0c_worm_face | 961 | 1410 | 3 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 1 | 0 |
| 02_dark_imp | 961 | 1040 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 0 | 7 | 0 | 0 | 3 |
| 0d_damned_angel | 958 | 1280 | 3 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 4 | 0 | 0 | 0 | 2 | 0 |
| 05_armored_jinn | 932 | 720 | 0 | 0 | 0 | 0 | 1 | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 0 | 0 |
| 04_auriel_b | 813 | 1000 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 08_torg | 807 | 1200 | 2 | 0 | 1 | 2 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 09_dark_fairy | 802 | 1032 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 2 | 0 | 0 | 2 |
| 09_iron_crusher | 799 | 1100 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 0 | 0 | 0 | 0 | 1 | 2 | 0 |
| 0d_dweller | 799 | 1100 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 0 | 0 | 0 | 0 | 1 | 2 | 0 |
| 06_warpoor | 790 | 1120 | 1 | 0 | 0 | 3 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 1 | 2 | 0 |
| 0a_warpoor | 790 | 1120 | 1 | 0 | 0 | 3 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 1 | 2 | 0 |
| 08_clay_servant | 778 | 980 | 2 | 0 | 2 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 00_black_onyx | 773 | 750 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 1 | 1 | 0 | 1 | 0 | 0 | 2 |
| 01_earth_knight | 772 | 970 | 0 | 3 | 2 | 0 | 2 | 0 | 0 | 1 | 0 | 2 | 0 | 0 | 0 | 1 |
| 00_earth_knight | 772 | 970 | 0 | 3 | 2 | 0 | 2 | 0 | 0 | 1 | 0 | 2 | 0 | 0 | 0 | 1 |
| 05_earth_knight | 772 | 970 | 0 | 3 | 2 | 0 | 2 | 0 | 0 | 1 | 0 | 2 | 0 | 0 | 0 | 1 |
| 0c_ray_plant | 752 | 1080 | 0 | 0 | 0 | 0 | 5 | 0 | 0 | 0 | 5 | 0 | 0 | 0 | 0 | 0 |
| 04_night_howler | 749 | 950 | 2 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 00_night_howler | 749 | 950 | 2 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 0e_mystic_tower | 746 | 1050 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 | 0 |
| 06_mystic_tower | 746 | 1050 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 | 0 |
| 05_warden | 746 | 1110 | 0 | 0 | 5 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 0 |
| 02_mystic_tower | 746 | 1050 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 | 0 |
| 0a_dweller | 713 | 1160 | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 1 | 0 |
| 06_dweller | 713 | 1160 | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 1 | 0 |
| 08_guardian_b | 708 | 870 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 1 | 0 | 0 | 0 | 0 | 1 |
| 06_gordoral | 708 | 850 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 5 | 0 | 0 |
| 02_gordoral | 708 | 850 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 5 | 0 | 0 |
| 01_gargaral | 652 | 750 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 5 | 0 | 0 |
| 05_gargaral | 652 | 750 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 5 | 0 | 0 |
| 04_kiljoy | 650 | 720 | 0 | 2 | 0 | 0 | 4 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0a_rotting_face | 635 | 420 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 5 | 5 | 1 | 0 | 0 | 0 | 7 |
| 0e_rotting_face | 635 | 420 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 5 | 5 | 1 | 0 | 0 | 0 | 7 |
| 02_sand_leech_b | 602 | 700 | 1 | 0 | 0 | 0 | 1 | 1 | 1 | 0 | 0 | 0 | 1 | 0 | 0 | 0 |
| 0c_gaze_hopper | 580 | 650 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 1 | 2 | 0 | 0 | 0 | 0 | 2 |
| 0c_maristella | 570 | 820 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 2 | 0 | 0 | 0 |
| 01_myconid | 550 | 850 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0a_barrel_snail | 520 | 560 | 1 | 0 | 3 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 09_sloth_bug | 520 | 560 | 1 | 0 | 3 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 05_hobble_worm | 508 | 620 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 2 | 0 | 0 | 0 | 2 |
| 0a_horned_slime | 496 | 620 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 |
| 02_horned_slime | 496 | 620 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 |
| 01_horned_slime | 496 | 620 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 |
| 05_horned_slime | 496 | 620 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 |
| 02_blood_brain | 460 | 590 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 1 | 0 |
| 05_blood_brain | 460 | 590 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 1 | 0 |
| 04_cannon_snail | 453 | 640 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 2 | 0 |
| 08_casket | 449 | 261 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 1 | 2 | 0 | 0 | 1 |
| 02_elder | 430 | 608 | 0 | 0 | 0 | 1 | 0 | 1 | 1 | 0 | 0 | 0 | 0 | 2 | 1 | 0 |
| 06_elder | 430 | 608 | 0 | 0 | 0 | 1 | 0 | 1 | 1 | 0 | 0 | 0 | 0 | 2 | 1 | 0 |
| 0e_elder | 430 | 608 | 0 | 0 | 0 | 1 | 0 | 1 | 1 | 0 | 0 | 0 | 0 | 2 | 1 | 0 |
| 02_dead_abraxus | 414 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 5 | 2 | 1 | 0 | 5 | 0 | 4 |
| 0a_guardian_a | 412 | 480 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 1 | 0 | 0 | 0 | 0 | 1 |
| 0d_trickster | 396 | 380 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 4 | 2 |
| 09_cocoon_plant | 390 | 320 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 0 |
| 0c_dybbuk | 380 | 520 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 00_duhrin | 378 | 600 | 0 | 0 | 0 | 5 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 06_fanged_worm | 370 | 434 | 1 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 1 | 2 | 0 | 0 | 0 | 0 |
| 00_dybbuk | 369 | 520 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 04_dybbuk | 369 | 520 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 01_beak_plant | 366 | 480 | 0 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 |
| 08_star_serpent | 361 | 454 | 0 | 0 | 0 | 2 | 0 | 1 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 |
| 09_dwarf_warrior | 361 | 382 | 1 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 |
| 0c_barrel_snail | 358 | 560 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 01_blue_flicker | 313 | 440 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | 0 |
| 02_skeleton | 312 | 384 | 0 | 1 | 0 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 |
| 0a_skeleton | 312 | 384 | 0 | 1 | 0 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 |
| 00_watcher_plant | 299 | 354 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 |
| 02_watcher_plant | 299 | 354 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 |
| 0e_watcher_plant | 299 | 354 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 |
| 0d_tondrom | 290 | 280 | 0 | 0 | 1 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 00_gorgoral | 288 | 100 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 1 | 5 | 0 | 0 | 0 | 0 |
| 08_trickster | 279 | 380 | 0 | 0 | 1 | 1 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 |
| 02_parasite | 277 | 220 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 1 | 2 | 0 | 0 | 2 |
| 01_acid_pod | 275 | 320 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 05_acid_pod | 275 | 320 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 05_cocoon_plant | 275 | 320 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 0d_cocoon_plant | 275 | 320 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 0d_crying_root | 270 | 350 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 |
| 00_acid_skull | 267 | 280 | 0 | 0 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 04_minor_dwarf | 254 | 308 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 01_blood_skull | 253 | 263 | 0 | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 05_blood_skull | 253 | 263 | 0 | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 09_imp | 243 | 308 | 0 | 1 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 02_lizard_servant | 238 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 06_lizard_servant | 238 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 01_shadow_spider | 230 | 240 | 0 | 0 | 1 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 09_shadow_spider | 230 | 240 | 0 | 0 | 1 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 06_tongue_imp | 210 | 162 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 |
| 02_tongue_imp | 210 | 162 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 |
| 01_demon_bat | 187 | 135 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 0 | 1 | 1 | 0 | 1 | 0 | 0 |
| 09_demon_bat | 187 | 135 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 0 | 1 | 1 | 0 | 1 | 0 | 0 |
| 01_blood_slime | 162 | 96 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 09_blood_slime | 162 | 96 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 05_blood_slime | 162 | 96 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 02_blood_slime | 162 | 96 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 0c_hanging_dead | 158 | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 |
| 08_dark_spider | 145 | 121 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 00_dark_spider | 145 | 121 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 04_acid_slime | 136 | 95 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 01_acid_slime | 136 | 95 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 00_acid_slime | 136 | 95 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 00_sand_leech_a | 103 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0 |
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

