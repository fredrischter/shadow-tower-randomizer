# Shadow Tower Creature Power Value Table

**Generated:** 2025-12-18T10:50:48.874Z

**Purpose:** Verify PR #14 magic/projectile attack damage scaling fix

This table shows power values for all creatures, including:
- **Type 0x20**: Physical attack EntityStateData
- **Type 0x30**: Spell/Magic attack EntityStateData (fixed in PR #14)

---

## Summary Statistics

- **Total Unique Creatures**: 205
- **Creatures with Physical Attacks (0x20)**: 125
- **Creatures with Magic Attacks (0x30)**: 148
- **Average Power Score**: 3034
- **Highest Power Score**: 33974
- **Lowest Power Score**: 162

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
| 00_abraxus | 33974 | 65535 | 0 | - | 124/236/236; 124/236/236 | fire world molten cavern |
| 0a_demons_eye | 33733 | 820 | 0 | - | 289/2 | death world undead layer |
| 0d_fat_mole_e | 32897 | 65535 | 0 | - | - | death world undead layer |
| 02_fat_mole_d | 32870 | 65535 | 0 | - | - | illusion world worship do |
| 00_fat_mole_f | 32864 | 65535 | 0 | - | - | water world impure pool a |
| 08_fat_mole_b | 32819 | 65535 | 0 | - | - | fire world molten cavern |
| 0c_fat_mole_c | 32819 | 65535 | 0 | - | - | fire world molten cavern |
| 04_fat_mole_a | 32768 | 65535 | 2 | - | - | human world cursed region |
| 0d_hatchlin | 15953 | 1460 | 0 | - | 99 | water world watery labyri |
| 09_cerberus | 8052 | 2300 | 0 | - | 129/4; 77 | fire world burning cavern |
| 04_jinn_lord | 7909 | 1920 | 0 | - | 112/26; 111 | fire world phoenix cave |
| 01_unknown_b | 6359 | 7560 | 0 | 676/585/715; 806/624/715 | 162; 163 | death world undead layer |
| 01_auriel_c | 6301 | 7560 | 0 | 715/585/702; 715/585/702 | 208; 210 | monster world screeching  |
| 0c_hollow_mage | 5373 | 7800 | 0 | - | 77; 84 | death world gate of the d |
| 04_king_edward | 5202 | 6500 | 0 | 65/59/65; 52/52/26; 117/52/104 | 320 | death world undead layer |
| 04_wildowess | 5164 | 6600 | 0 | 267/195/442 | 315 | illusion world worship do |
| 0e_necron | 5002 | 4800 | 0 | 442/377/598; 130/156/520; 455/325/351 | 214/401; 212/363; 211/475 | monster world screeching  |
| 06_hell_warrior | 4931 | 5800 | 0 | 585/390/403 | - | death world dark castle l |
| 09_steel_servant | 4887 | 1810 | 0 | 202/237/169; 234/273/232; 234/390/232 | 123/3 | fire world molten cavern |
| 00_unused_a | 4762 | 6000 | 0 | - | - | death world gate of the d |
| 0c_ebony_knight | 4720 | 4270 | 0 | 397/328/299; 293/299/397; 390/247/167 | 136; 137 | fire world ashen cavern |
| 0a_ruby_demon | 4701 | 2260 | 0 | 245/193/156 | 285/72 | fire world phoenix cave |
| 01_doriwi | 4410 | 4800 | 0 | 390/416/585 | 77 | death world gate of the d |
| 05_doriwi | 4410 | 4800 | 0 | 390/416/585 | 77 | death world gate of the d |
| 05_horned_skull | 4277 | 1550 | 0 | 156/179/329 | 115/32 | fire world burning cavern |
| 01_horned_skull | 4277 | 1550 | 0 | 156/179/329 | 115/32 | fire world molten cavern |
| 00_bone_demon | 4257 | 1480 | 0 | 182/260/143 | 129/130/132 | fire world ashen cavern |
| 0a_bone_wolf | 4140 | 4100 | 0 | 325/546/325 | 77 | death world lingering cur |
| 02_bone_wolf | 4140 | 4100 | 0 | 325/546/325 | 77 | death world undead layer |
| 08_oxelus | 4038 | 5700 | 0 | 514/338/449; 189/156/241 | 206/32 | monster world screeching  |
| 08_armored_guardian | 3867 | 4200 | 0 | 494/598/364; 475/436/312 | - | death world dark castle l |
| 0d_bugler | 3762 | 4200 | 0 | - | 312 | death world dark castle l |
| 06_fire_jinn | 3665 | 572 | 0 | 156/150/124 | 115/36 | fire world burning cavern |
| 02_fire_jinn | 3665 | 572 | 0 | 156/150/124 | 115/36 | fire world phoenix cave |
| 09_freak | 3633 | 3600 | 0 | 273/364/481; 273/273/403; 312/299/338 | 93/302/494; 77 | monster world false eye a |
| 05_magi_magus | 3631 | 3730 | 0 | - | 153/388; 154 | water world white rain ar |
| 0a_armored_slayer | 3613 | 3800 | 0 | 559/429/325; 442/572/403 | - | death world dark castle l |
| 06_armored_slayer | 3613 | 3800 | 0 | 559/429/325; 442/572/403 | - | death world gate of the d |
| 04_tree_ogre | 3454 | 4900 | 0 | 325/405/364 | 159/16 | death world lingering cur |
| 0d_death_serpent | 3415 | 4730 | 0 | 462/559/345 | 216/107; 77 | monster world false eye a |
| 0a_wizcrypha | 3404 | 3200 | 0 | - | 173/32; 172/32; 99 | death world lingering cur |
| 05_armored_warrior | 3374 | 3900 | 0 | 559/455/338; 455/537/286 | - | death world gate of the d |
| 09_armored_warrior | 3374 | 3900 | 0 | 559/455/338; 455/537/286 | - | death world gate of the d |
| 08_wyvern | 3346 | 4500 | 0 | 234/195/286 | 299/381 | death world dark castle l |
| 01_stack_eyes | 3237 | 4150 | 0 | 403/494/397 | 171/15; 171/15; 171/15 | death world dark castle l |
| 08_fester | 3103 | 4650 | 0 | - | 189 | illusion world worship do |
| 0d_deha | 3065 | 3360 | 0 | 286/325/224; 273/351/198; 156/325/263 | 181/179 | illusion world gloomy dom |
| 0c_old_face | 3057 | 3200 | 0 | 390/507/364 | 77; 89 | death world dark castle l |
| 04_dragon_turtle | 2930 | 4050 | 0 | 297/481/286 | 151/150 | water world white rain ar |
| 08_apocrypha | 2890 | 2000 | 0 | - | 293/130; 293/130 | death world lingering cur |
| 08_claw_head | 2875 | 3600 | 0 | 312/156/208 | - | death world undead layer |
| 05_old_face | 2815 | 4100 | 0 | - | 167 | death world lingering cur |
| 02_karasu | 2814 | 3800 | 0 | 403/375/277 | - | death world gate of the d |
| 0a_cursed_demon | 2789 | 3780 | 0 | 507/260/423 | 99 | monster world screeching  |
| 00_master_knight | 2781 | 3200 | 0 | 494/338/273; 260/208/507 | - | illusion world bewilderme |
| 06_oblid | 2769 | 3500 | 0 | 316/429/353; 416/364/293 | - | monster world false eye a |
| 09_descrypha | 2757 | 1800 | 0 | - | 297/130; 297/130 | death world lingering cur |
| 00_panak | 2744 | 5100 | 0 | - | - | death world lingering cur |
| 08_war_demon_1 | 2736 | 3500 | 0 | 377/371/195; 384/397/143 | - | illusion world worship do |
| 01_disguise | 2603 | 2700 | 0 | - | 197; 195/30 | illusion world dream doma |
| 01_gorthaur | 2436 | 3450 | 0 | 254/143/234 | 190 | illusion world worship do |
| 0d_saurian_warrior_b | 2347 | 2800 | 0 | 332/455/228 | 77 | monster world false eye a |
| 0c_saurian_warrior_a | 2327 | 2800 | 0 | 462/364/228 | - | monster world screeching  |
| 04_king_hopper | 2212 | 3230 | 0 | - | 207/2 | monster world screeching  |
| 09_war_demon_2 | 2149 | 2800 | 0 | 377/163/143; 267/98/78 | - | illusion world bewilderme |
| 04_dread_knight | 2134 | 2400 | 0 | 247/189/146; 143/202/319 | 110 | earth world hostile rock  |
| 04_dark_spirits | 2121 | 2040 | 0 | 156/182/481; 462/143/163 | - | illusion world bewilderme |
| 00_red_puppet | 2121 | 2040 | 0 | 156/182/481; 462/143/163 | - | illusion world bewilderme |
| 00_dark_spirits | 2108 | 2040 | 0 | - | 199/11; 201/119; 198/120 | illusion world gloomy dom |
| 05_dark_spirits | 2098 | 2040 | 0 | 150/176/377; 488/137/176 | - | illusion world bewilderme |
| 01_dark_spirits | 2098 | 2040 | 0 | 150/176/377; 488/137/176 | - | illusion world gloomy dom |
| 04_zygote | 2026 | 2000 | 0 | 202/388/182 | 133; 318 | fire world phoenix cave |
| 0c_death_mage | 2000 | 1800 | 0 | 221/104/130 | 185 | illusion world bewilderme |
| 08_hermit_crab | 1991 | 2420 | 0 | 325/416/351 | 205 | monster world screeching  |
| 00_hell_hunter | 1977 | 3600 | 0 | - | 156/15; 158/15 | death world dark castle l |
| 0e_claw_head | 1977 | 3600 | 0 | - | 156/15; 158/15 | death world undead layer |
| 04_demon_warrior | 1918 | 1880 | 0 | 323/189/351; 234/228/195 | 186 | illusion world gloomy dom |
| 09_koazul | 1878 | 1540 | 0 | 338/143/299; 351/182/338 | 147/50 | water world watery labyri |
| 09_pulsating_heart | 1825 | 2000 | 0 | 195/130/182 | 166/52/110 | death world undead layer |
| 09_dementor | 1813 | 2270 | 0 | 325/208/172; 254/195/154 | - | water world impure pool a |
| 0e_dinogon | 1792 | 2020 | 0 | 215/479/338 | 203/75 | monster world false eye a |
| 0d_slasher | 1773 | 1620 | 0 | 332/163/254 | 150/518/527 | water world watery labyri |
| 0d_blood_bone | 1747 | 2820 | 0 | 325/267/195 | 99 | death world gate of the d |
| 04_kabasaur | 1745 | 1700 | 0 | 397/325/182; 299/390/150 | - | water world sunken river  |
| 00_kabasaur | 1745 | 1700 | 0 | 397/325/182; 299/390/150 | - | water world watery labyri |
| 04_great_frog | 1547 | 2740 | 0 | - | - | water world impure pool a |
| 01_chirper | 1531 | 2520 | 0 | - | 77 | monster world screeching  |
| 0e_manna_python | 1524 | 1980 | 0 | 189/247/182 | 146/4 | water world watery labyri |
| 08_ring_demon | 1498 | 2050 | 0 | - | 306/10 | illusion world gloomy dom |
| 05_water_knight | 1498 | 1580 | 0 | 176/241/130; 176/241/130 | - | water world impure pool a |
| 05_master_howler | 1476 | 1450 | 0 | 468/462/338 | - | monster world false eye a |
| 0a_dark_bishop | 1399 | 1560 | 0 | 169/325/127 | 179 | illusion world gloomy dom |
| 05_hell_hunter | 1386 | 2100 | 0 | 182/156/137 | - | death world lingering cur |
| 0d_arachness | 1371 | 1270 | 0 | 319/234/182 | 125; 114 | fire world ashen cavern |
| 09_cross_breed | 1369 | 1800 | 0 | - | 194/73/116; 77 | illusion world worship do |
| 00_winged_worm | 1356 | 1720 | 0 | - | 155; 77 | water world watery labyri |
| 01_berzerker | 1292 | 1380 | 0 | 234/316/158 | 116 | fire world ashen cavern |
| 04_berzerker | 1292 | 1380 | 0 | 234/316/158 | 116 | fire world ashen cavern |
| 00_berzerker | 1292 | 1380 | 0 | 234/316/158 | 116 | fire world burning cavern |
| 08_berzerker | 1292 | 1380 | 0 | 234/316/158 | 116 | fire world molten cavern |
| 0c_worm_face | 1256 | 1410 | 0 | 176/195/143 | 141/164 | water world impure pool a |
| 05_armored_jinn | 1224 | 720 | 0 | 325/260/224 | 114/10 | fire world ashen cavern |
| 04_auriel_b | 1182 | 1000 | 0 | - | - | earth world poisonous cav |
| 0d_damned_angel | 1150 | 1280 | 0 | - | 132 | fire world molten cavern |
| 02_dark_imp | 1122 | 1040 | 0 | - | 319; 99 | illusion world gloomy dom |
| 06_black_imp | 1122 | 1040 | 0 | - | 319; 99 | illusion world gloomy dom |
| 08_clay_servant | 1120 | 980 | 0 | 133/358/125; 167/255/112 | - | earth world stone cavern |
| 0e_rotting_face | 1093 | 420 | 0 | - | 99; 188 | illusion world bewilderme |
| 0a_rotting_face | 1093 | 420 | 0 | - | 99; 188 | illusion world worship do |
| 05_earth_knight | 1092 | 970 | 0 | 159/115/81; 85/55/162; 59/29/253 | - | earth world false pit cav |
| 01_earth_knight | 1092 | 970 | 0 | 159/115/81; 85/55/162; 59/29/253 | - | earth world false pit cav |
| 00_earth_knight | 1092 | 970 | 4 | 159/115/81; 85/55/162; 59/29/253 | - | earth world rotting caver |
| 00_night_howler | 1091 | 950 | 0 | 416/319/307 | - | monster world false eye a |
| 04_night_howler | 1091 | 950 | 0 | 416/319/307 | - | monster world false eye a |
| 08_torg | 1068 | 1200 | 0 | 128/260/55 | 93/225 | earth world quaking caver |
| 00_black_onyx | 1053 | 750 | 4 | 185/156/117 | 275/72 | earth world rotting caver |
| 04_kiljoy | 1030 | 720 | 4 | 234/77/146; 249/85/159; 262/111/214 | - | earth world rotting caver |
| 0a_warpoor | 1026 | 1120 | 0 | - | 192; 320 | illusion world gloomy dom |
| 06_warpoor | 1026 | 1120 | 0 | - | 192; 320 | illusion world worship do |
| 09_iron_crusher | 1013 | 1100 | 0 | - | 121/0; 120/150/151 | fire world burning cavern |
| 0d_dweller | 1013 | 1100 | 0 | - | 121/0; 120/150/151 | fire world burning cavern |
| 09_dark_fairy | 1010 | 1032 | 0 | - | 176/159/207 | illusion world dream doma |
| 08_guardian_b | 997 | 870 | 0 | 120/91/193; 120/91/284 | 260/2 | earth world false pit cav |
| 0c_ray_plant | 978 | 1080 | 0 | - | 271/228; 319 | earth world false pit cav |
| 06_mystic_tower | 919 | 1050 | 0 | - | 281/17; 119 | fire world ashen cavern |
| 0e_mystic_tower | 919 | 1050 | 0 | - | 281/17; 119 | fire world burning cavern |
| 02_mystic_tower | 919 | 1050 | 0 | - | 281/17; 119 | fire world molten cavern |
| 02_gordoral | 891 | 850 | 0 | - | 310/0 | illusion world bewilderme |
| 06_gordoral | 891 | 850 | 0 | - | 310/0 | illusion world gloomy dom |
| 0c_gaze_hopper | 871 | 650 | 0 | 202/372/163 | 145/46 | water world sunken river  |
| 05_warden | 861 | 1110 | 0 | - | 215/34 | monster world false eye a |
| 02_dead_abraxus | 852 | 1 | 0 | - | - | fire world molten cavern |
| 06_dweller | 833 | 1160 | 0 | - | 143 | water world impure pool a |
| 0a_dweller | 833 | 1160 | 0 | - | 143 | water world impure pool a |
| 01_gargaral | 812 | 750 | 0 | - | 182 | illusion world bewilderme |
| 05_gargaral | 812 | 750 | 0 | - | 182 | illusion world bewilderme |
| 02_sand_leech_b | 788 | 700 | 4 | 107/52/199 | - | earth world rotting caver |
| 09_sloth_bug | 780 | 560 | 0 | 121/78/202; 169/104/85 | 103 | earth world hostile rock  |
| 0a_barrel_snail | 780 | 560 | 0 | 121/78/202; 169/104/85 | 103 | earth world stone cavern |
| 05_hobble_worm | 748 | 620 | 0 | 117/198/102 | 101/94; 102 | earth world stone cavern |
| 0c_maristella | 739 | 820 | 0 | - | 177; 89 | illusion world bewilderme |
| 0a_horned_slime | 695 | 620 | 0 | 104/150/163 | 138/133 | water world impure pool a |
| 05_horned_slime | 695 | 620 | 0 | 104/150/163 | 138/133 | water world sunken river  |
| 02_horned_slime | 695 | 620 | 0 | 104/150/163 | 138/133 | water world watery labyri |
| 01_horned_slime | 695 | 620 | 0 | 104/150/163 | 138/133 | water world white rain ar |
| 01_myconid | 682 | 850 | 4 | 81/124/65 | 78/6 | earth world rotting caver |
| 09_cocoon_plant | 676 | 320 | 0 | 84/65/141 | 97/358/414 | earth world poisonous cav |
| 05_blood_brain | 628 | 590 | 0 | 65/163/112 | 140/43 | water world impure pool a |
| 02_blood_brain | 628 | 590 | 0 | 65/163/112 | 140/43 | water world watery labyri |
| 08_casket | 616 | 261 | 2 | - | 316 | human world hidden region |
| 0d_trickster | 610 | 380 | 0 | 65/104/156 | 81; 315 | earth world poisonous cav |
| 0a_guardian_a | 572 | 480 | 2 | 39/43/119 | 260/2 | human world cursed region |
| 0e_elder | 571 | 608 | 0 | 76/59/163 | 77 | earth world quaking caver |
| 02_elder | 571 | 608 | 4 | 76/59/163 | 77 | earth world rotting caver |
| 06_elder | 571 | 608 | 4 | 76/59/163 | 77 | earth world rotting caver |
| 04_cannon_snail | 565 | 640 | 0 | - | 106/3/6 | earth world quaking caver |
| 09_dwarf_warrior | 539 | 382 | 4 | 84/52/132; 84/52/171 | - | earth world rotting caver |
| 06_fanged_worm | 516 | 434 | 2 | 32/82/30 | 67/195 | human world hidden region |
| 01_beak_plant | 504 | 480 | 0 | 65/85/117 | 89 | earth world quaking caver |
| 08_star_serpent | 497 | 454 | 0 | 85/103/81 | 76 | earth world hostile rock  |
| 0c_dybbuk | 488 | 520 | 0 | - | 98 | earth world stone cavern |
| 00_dybbuk | 459 | 520 | 0 | - | - | earth world stone cavern |
| 04_dybbuk | 459 | 520 | 0 | - | - | earth world stone cavern |
| 02_parasite | 455 | 220 | 2 | 102/112/116; 102/99/107 | - | human world hidden region |
| 00_watcher_plant | 447 | 354 | 0 | 55/85/52 | 263/19 | earth world hostile rock  |
| 02_watcher_plant | 447 | 354 | 0 | 55/85/52 | 263/19 | earth world poisonous cav |
| 0e_watcher_plant | 447 | 354 | 4 | 55/85/52 | 263/19 | earth world rotting caver |
| 02_lizard_servant | 430 | 1 | 0 | - | - | monster world false eye a |
| 06_lizard_servant | 430 | 1 | 0 | - | - | monster world false eye a |
| 02_skeleton | 417 | 384 | 1 | 108/46/26 | - | human world solitary regi |
| 0a_skeleton | 417 | 384 | 2 | 108/46/26 | - | human world cursed region |
| 0c_barrel_snail | 412 | 560 | 4 | - | 75/3/6 | earth world rotting caver |
| 0d_tondrom | 410 | 280 | 4 | 47/158/55 | - | earth world rotting caver |
| 01_blue_flicker | 401 | 440 | 0 | - | 267/11 | earth world quaking caver |
| 00_duhrin | 399 | 600 | 0 | - | - | earth world poisonous cav |
| 00_gorgoral | 378 | 100 | 0 | - | - | illusion world gloomy dom |
| 05_acid_pod | 370 | 320 | 0 | - | 81/104 | earth world false pit cav |
| 0d_cocoon_plant | 370 | 320 | 0 | - | 81/104 | earth world poisonous cav |
| 01_acid_pod | 370 | 320 | 0 | - | 81/104 | earth world poisonous cav |
| 05_cocoon_plant | 370 | 320 | 0 | - | 81/104 | earth world quaking caver |
| 08_trickster | 364 | 380 | 0 | - | 88/77 | earth world false pit cav |
| 04_minor_dwarf | 353 | 308 | 0 | 59/117/34 | - | earth world false pit cav |
| 0d_crying_root | 349 | 350 | 0 | - | 104 | earth world stone cavern |
| 00_acid_skull | 348 | 280 | 4 | 21/21/30 | 71 | human world forgotten reg |
| 02_tongue_imp | 334 | 162 | 1 | - | 316 | human world solitary regi |
| 06_tongue_imp | 334 | 162 | 4 | - | 316 | human world forgotten reg |
| 01_blood_skull | 326 | 263 | 4 | 20/17/28 | 72 | human world forgotten reg |
| 05_blood_skull | 326 | 263 | 4 | 20/17/28 | 72 | human world forgotten reg |
| 09_shadow_spider | 318 | 240 | 1 | 4/80/3 | 68 | human world solitary regi |
| 01_shadow_spider | 318 | 240 | 2 | 4/80/3 | 68 | human world cursed region |
| 09_imp | 308 | 308 | 0 | - | 73 | earth world quaking caver |
| 01_demon_bat | 295 | 135 | 0 | - | 63; 63 | earth world stone cavern |
| 09_demon_bat | 295 | 135 | 2 | - | 63; 63 | human world cursed region |
| 08_dark_spider | 209 | 121 | 1 | 12/13/26; 15/17/37 | - | human world solitary regi |
| 00_dark_spider | 209 | 121 | 2 | 12/13/26; 15/17/37 | - | human world hidden region |
| 01_blood_slime | 208 | 96 | 2 | 17/16/21 | 65 | human world hidden region |
| 05_blood_slime | 208 | 96 | 2 | 17/16/21 | 65 | human world hidden region |
| 02_blood_slime | 208 | 96 | 2 | 17/16/21 | 65 | human world hidden region |
| 09_blood_slime | 208 | 96 | 2 | 17/16/21 | 65 | human world cursed region |
| 0c_hanging_dead | 198 | 200 | 0 | - | 85 | earth world poisonous cav |
| 04_acid_slime | 168 | 95 | 1 | 13/15/17 | 64 | human world solitary regi |
| 01_acid_slime | 168 | 95 | 2 | 13/15/17 | 64 | human world hidden region |
| 00_acid_slime | 168 | 95 | 2 | 13/15/17 | 64 | human world cursed region |
| 05_dwarfling | 163 | 1 | 0 | - | - | earth world false pit cav |
| 00_sand_leech_a | 162 | 50 | 0 | - | 90/21 | earth world poisonous cav |

---

## Creatures with Type 0x30 (Magic/Spell Attacks)

**These creatures were fixed in PR #14 to properly scale with difficulty settings.**

| Creature | Power | HP | Magic Attack Values |
|----------|-------|----|--------------------|\n| 00_abraxus | 33974 | 65535 | 124/236/236; 124/236/236 |
| 0a_demons_eye | 33733 | 820 | 289/2 |
| 0d_hatchlin | 15953 | 1460 | 99 |
| 09_cerberus | 8052 | 2300 | 129/4; 77 |
| 04_jinn_lord | 7909 | 1920 | 112/26; 111 |
| 01_unknown_b | 6359 | 7560 | 162; 163 |
| 01_auriel_c | 6301 | 7560 | 208; 210 |
| 0c_hollow_mage | 5373 | 7800 | 77; 84 |
| 04_king_edward | 5202 | 6500 | 320 |
| 04_wildowess | 5164 | 6600 | 315 |
| 0e_necron | 5002 | 4800 | 214/401; 212/363; 211/475 |
| 09_steel_servant | 4887 | 1810 | 123/3 |
| 0c_ebony_knight | 4720 | 4270 | 136; 137 |
| 0a_ruby_demon | 4701 | 2260 | 285/72 |
| 01_doriwi | 4410 | 4800 | 77 |
| 05_doriwi | 4410 | 4800 | 77 |
| 05_horned_skull | 4277 | 1550 | 115/32 |
| 01_horned_skull | 4277 | 1550 | 115/32 |
| 00_bone_demon | 4257 | 1480 | 129/130/132 |
| 0a_bone_wolf | 4140 | 4100 | 77 |
| 02_bone_wolf | 4140 | 4100 | 77 |
| 08_oxelus | 4038 | 5700 | 206/32 |
| 0d_bugler | 3762 | 4200 | 312 |
| 06_fire_jinn | 3665 | 572 | 115/36 |
| 02_fire_jinn | 3665 | 572 | 115/36 |
| 09_freak | 3633 | 3600 | 93/302/494; 77 |
| 05_magi_magus | 3631 | 3730 | 153/388; 154 |
| 04_tree_ogre | 3454 | 4900 | 159/16 |
| 0d_death_serpent | 3415 | 4730 | 216/107; 77 |
| 0a_wizcrypha | 3404 | 3200 | 173/32; 172/32; 99 |
| 08_wyvern | 3346 | 4500 | 299/381 |
| 01_stack_eyes | 3237 | 4150 | 171/15; 171/15; 171/15 |
| 08_fester | 3103 | 4650 | 189 |
| 0d_deha | 3065 | 3360 | 181/179 |
| 0c_old_face | 3057 | 3200 | 77; 89 |
| 04_dragon_turtle | 2930 | 4050 | 151/150 |
| 08_apocrypha | 2890 | 2000 | 293/130; 293/130 |
| 05_old_face | 2815 | 4100 | 167 |
| 0a_cursed_demon | 2789 | 3780 | 99 |
| 09_descrypha | 2757 | 1800 | 297/130; 297/130 |
| 01_disguise | 2603 | 2700 | 197; 195/30 |
| 01_gorthaur | 2436 | 3450 | 190 |
| 0d_saurian_warrior_b | 2347 | 2800 | 77 |
| 04_king_hopper | 2212 | 3230 | 207/2 |
| 04_dread_knight | 2134 | 2400 | 110 |
| 00_dark_spirits | 2108 | 2040 | 199/11; 201/119; 198/120 |
| 04_zygote | 2026 | 2000 | 133; 318 |
| 0c_death_mage | 2000 | 1800 | 185 |
| 08_hermit_crab | 1991 | 2420 | 205 |
| 00_hell_hunter | 1977 | 3600 | 156/15; 158/15 |
| 0e_claw_head | 1977 | 3600 | 156/15; 158/15 |
| 04_demon_warrior | 1918 | 1880 | 186 |
| 09_koazul | 1878 | 1540 | 147/50 |
| 09_pulsating_heart | 1825 | 2000 | 166/52/110 |
| 0e_dinogon | 1792 | 2020 | 203/75 |
| 0d_slasher | 1773 | 1620 | 150/518/527 |
| 0d_blood_bone | 1747 | 2820 | 99 |
| 01_chirper | 1531 | 2520 | 77 |
| 0e_manna_python | 1524 | 1980 | 146/4 |
| 08_ring_demon | 1498 | 2050 | 306/10 |
| 0a_dark_bishop | 1399 | 1560 | 179 |
| 0d_arachness | 1371 | 1270 | 125; 114 |
| 09_cross_breed | 1369 | 1800 | 194/73/116; 77 |
| 00_winged_worm | 1356 | 1720 | 155; 77 |
| 01_berzerker | 1292 | 1380 | 116 |
| 04_berzerker | 1292 | 1380 | 116 |
| 00_berzerker | 1292 | 1380 | 116 |
| 08_berzerker | 1292 | 1380 | 116 |
| 0c_worm_face | 1256 | 1410 | 141/164 |
| 05_armored_jinn | 1224 | 720 | 114/10 |
| 0d_damned_angel | 1150 | 1280 | 132 |
| 02_dark_imp | 1122 | 1040 | 319; 99 |
| 06_black_imp | 1122 | 1040 | 319; 99 |
| 0e_rotting_face | 1093 | 420 | 99; 188 |
| 0a_rotting_face | 1093 | 420 | 99; 188 |
| 08_torg | 1068 | 1200 | 93/225 |
| 00_black_onyx | 1053 | 750 | 275/72 |
| 0a_warpoor | 1026 | 1120 | 192; 320 |
| 06_warpoor | 1026 | 1120 | 192; 320 |
| 09_iron_crusher | 1013 | 1100 | 121/0; 120/150/151 |
| 0d_dweller | 1013 | 1100 | 121/0; 120/150/151 |
| 09_dark_fairy | 1010 | 1032 | 176/159/207 |
| 08_guardian_b | 997 | 870 | 260/2 |
| 0c_ray_plant | 978 | 1080 | 271/228; 319 |
| 06_mystic_tower | 919 | 1050 | 281/17; 119 |
| 0e_mystic_tower | 919 | 1050 | 281/17; 119 |
| 02_mystic_tower | 919 | 1050 | 281/17; 119 |
| 02_gordoral | 891 | 850 | 310/0 |
| 06_gordoral | 891 | 850 | 310/0 |
| 0c_gaze_hopper | 871 | 650 | 145/46 |
| 05_warden | 861 | 1110 | 215/34 |
| 06_dweller | 833 | 1160 | 143 |
| 0a_dweller | 833 | 1160 | 143 |
| 01_gargaral | 812 | 750 | 182 |
| 05_gargaral | 812 | 750 | 182 |
| 09_sloth_bug | 780 | 560 | 103 |
| 0a_barrel_snail | 780 | 560 | 103 |
| 05_hobble_worm | 748 | 620 | 101/94; 102 |
| 0c_maristella | 739 | 820 | 177; 89 |
| 0a_horned_slime | 695 | 620 | 138/133 |
| 05_horned_slime | 695 | 620 | 138/133 |
| 02_horned_slime | 695 | 620 | 138/133 |
| 01_horned_slime | 695 | 620 | 138/133 |
| 01_myconid | 682 | 850 | 78/6 |
| 09_cocoon_plant | 676 | 320 | 97/358/414 |
| 05_blood_brain | 628 | 590 | 140/43 |
| 02_blood_brain | 628 | 590 | 140/43 |
| 08_casket | 616 | 261 | 316 |
| 0d_trickster | 610 | 380 | 81; 315 |
| 0a_guardian_a | 572 | 480 | 260/2 |
| 0e_elder | 571 | 608 | 77 |
| 02_elder | 571 | 608 | 77 |
| 06_elder | 571 | 608 | 77 |
| 04_cannon_snail | 565 | 640 | 106/3/6 |
| 06_fanged_worm | 516 | 434 | 67/195 |
| 01_beak_plant | 504 | 480 | 89 |
| 08_star_serpent | 497 | 454 | 76 |
| 0c_dybbuk | 488 | 520 | 98 |
| 00_watcher_plant | 447 | 354 | 263/19 |
| 02_watcher_plant | 447 | 354 | 263/19 |
| 0e_watcher_plant | 447 | 354 | 263/19 |
| 0c_barrel_snail | 412 | 560 | 75/3/6 |
| 01_blue_flicker | 401 | 440 | 267/11 |
| 05_acid_pod | 370 | 320 | 81/104 |
| 0d_cocoon_plant | 370 | 320 | 81/104 |
| 01_acid_pod | 370 | 320 | 81/104 |
| 05_cocoon_plant | 370 | 320 | 81/104 |
| 08_trickster | 364 | 380 | 88/77 |
| 0d_crying_root | 349 | 350 | 104 |
| 00_acid_skull | 348 | 280 | 71 |
| 02_tongue_imp | 334 | 162 | 316 |
| 06_tongue_imp | 334 | 162 | 316 |
| 01_blood_skull | 326 | 263 | 72 |
| 05_blood_skull | 326 | 263 | 72 |
| 09_shadow_spider | 318 | 240 | 68 |
| 01_shadow_spider | 318 | 240 | 68 |
| 09_imp | 308 | 308 | 73 |
| 01_demon_bat | 295 | 135 | 63; 63 |
| 09_demon_bat | 295 | 135 | 63; 63 |
| 01_blood_slime | 208 | 96 | 65 |
| 05_blood_slime | 208 | 96 | 65 |
| 02_blood_slime | 208 | 96 | 65 |
| 09_blood_slime | 208 | 96 | 65 |
| 0c_hanging_dead | 198 | 200 | 85 |
| 04_acid_slime | 168 | 95 | 64 |
| 01_acid_slime | 168 | 95 | 64 |
| 00_acid_slime | 168 | 95 | 64 |
| 00_sand_leech_a | 162 | 50 | 90/21 |

---

## Full Attribute Table

| Creature | Power | HP | STR | SPD | DEF | BAL | SLA | SMH | PIR | SPR | FOC | HAM | PUR | PAR | MEL | SOL |
|----------|-------|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| 00_abraxus | 33974 | 65535 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 5 | 2 | 1 | 0 | 5 | 0 | 4 |
| 0a_demons_eye | 33733 | 820 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 2 | 2 | 1 |
| 0d_fat_mole_e | 32897 | 65535 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 02_fat_mole_d | 32870 | 65535 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 00_fat_mole_f | 32864 | 65535 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 08_fat_mole_b | 32819 | 65535 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0c_fat_mole_c | 32819 | 65535 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 04_fat_mole_a | 32768 | 65535 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0d_hatchlin | 15953 | 1460 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 10 | 0 | 0 | 0 |
| 09_cerberus | 8052 | 2300 | 0 | 5 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 5 | 0 | 0 | 0 | 0 |
| 04_jinn_lord | 7909 | 1920 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 1 | 2 | 1 | 0 | 3 | 0 | 0 |
| 01_unknown_b | 6359 | 7560 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 01_auriel_c | 6301 | 7560 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0c_hollow_mage | 5373 | 7800 | 0 | 4 | 0 | 2 | 0 | 0 | 1 | 16 | 10 | 0 | 5 | 2 | 0 | 10 |
| 04_king_edward | 5202 | 6500 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 04_wildowess | 5164 | 6600 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 6 | 4 | 0 | 5 | 0 | 0 | 3 |
| 0e_necron | 5002 | 4800 | 12 | 5 | 0 | 0 | 3 | 2 | 8 | 2 | 2 | 0 | 1 | 0 | 3 | 3 |
| 06_hell_warrior | 4931 | 5800 | 0 | 4 | 0 | 1 | 5 | 0 | 0 | 0 | 0 | 2 | 0 | 3 | 0 | 2 |
| 09_steel_servant | 4887 | 1810 | 0 | 0 | 0 | 0 | 0 | 5 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 00_unused_a | 4762 | 6000 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 12 | 5 | 0 | 1 |
| 0c_ebony_knight | 4720 | 4270 | 0 | 7 | 0 | 0 | 0 | 0 | 4 | 11 | 3 | 9 | 0 | 1 | 0 | 0 |
| 0a_ruby_demon | 4701 | 2260 | 0 | 1 | 0 | 0 | 1 | 0 | 0 | 1 | 1 | 1 | 0 | 1 | 0 | 0 |
| 01_doriwi | 4410 | 4800 | 2 | 0 | 2 | 2 | 0 | 5 | 0 | 1 | 0 | 0 | 4 | 0 | 0 | 0 |
| 05_doriwi | 4410 | 4800 | 2 | 0 | 2 | 2 | 0 | 5 | 0 | 1 | 0 | 0 | 4 | 0 | 0 | 0 |
| 05_horned_skull | 4277 | 1550 | 0 | 2 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 1 | 0 | 1 |
| 01_horned_skull | 4277 | 1550 | 0 | 2 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 1 | 0 | 1 |
| 00_bone_demon | 4257 | 1480 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 | 0 | 0 | 1 | 0 | 3 |
| 0a_bone_wolf | 4140 | 4100 | 2 | 0 | 1 | 3 | 0 | 0 | 0 | 0 | 0 | 4 | 1 | 0 | 0 | 2 |
| 02_bone_wolf | 4140 | 4100 | 2 | 0 | 1 | 3 | 0 | 0 | 0 | 0 | 0 | 4 | 1 | 0 | 0 | 2 |
| 08_oxelus | 4038 | 5700 | 0 | 3 | 0 | 0 | 6 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 08_armored_guardian | 3867 | 4200 | 7 | 0 | 1 | 0 | 2 | 2 | 0 | 0 | 0 | 0 | 1 | 2 | 0 | 0 |
| 0d_bugler | 3762 | 4200 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 10 | 0 | 0 | 0 | 0 | 0 | 0 |
| 06_fire_jinn | 3665 | 572 | 0 | 0 | 0 | 0 | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 0 | 0 | 0 |
| 02_fire_jinn | 3665 | 572 | 0 | 0 | 0 | 0 | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 0 | 0 | 0 |
| 09_freak | 3633 | 3600 | 0 | 0 | 0 | 2 | 0 | 0 | 6 | 0 | 0 | 4 | 0 | 0 | 0 | 1 |
| 05_magi_magus | 3631 | 3730 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 10 | 1 | 6 | 0 | 0 | 12 | 9 |
| 0a_armored_slayer | 3613 | 3800 | 0 | 0 | 3 | 0 | 3 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 |
| 06_armored_slayer | 3613 | 3800 | 0 | 0 | 3 | 0 | 3 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 |
| 04_tree_ogre | 3454 | 4900 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 1 | 2 | 0 | 3 | 2 |
| 0d_death_serpent | 3415 | 4730 | 0 | 0 | 0 | 6 | 0 | 4 | 0 | 0 | 0 | 0 | 3 | 5 | 0 | 0 |
| 0a_wizcrypha | 3404 | 3200 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 5 | 3 | 0 | 3 | 3 | 3 | 1 |
| 05_armored_warrior | 3374 | 3900 | 3 | 0 | 1 | 0 | 0 | 2 | 1 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |
| 09_armored_warrior | 3374 | 3900 | 3 | 0 | 1 | 0 | 0 | 2 | 1 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |
| 08_wyvern | 3346 | 4500 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 7 | 5 | 4 | 0 | 0 | 0 | 1 |
| 01_stack_eyes | 3237 | 4150 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 7 | 1 | 0 | 0 | 0 |
| 08_fester | 3103 | 4650 | 2 | 3 | 0 | 0 | 0 | 0 | 6 | 0 | 0 | 0 | 2 | 5 | 0 | 0 |
| 0d_deha | 3065 | 3360 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 5 | 0 |
| 0c_old_face | 3057 | 3200 | 2 | 0 | 3 | 2 | 0 | 0 | 3 | 0 | 1 | 0 | 0 | 0 | 0 | 1 |
| 04_dragon_turtle | 2930 | 4050 | 0 | 0 | 7 | 4 | 0 | 0 | 0 | 1 | 0 | 6 | 0 | 0 | 1 | 0 |
| 08_apocrypha | 2890 | 2000 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 1 | 2 | 0 | 0 | 0 |
| 08_claw_head | 2875 | 3600 | 0 | 0 | 3 | 0 | 3 | 5 | 4 | 4 | 2 | 3 | 0 | 0 | 0 | 0 |
| 05_old_face | 2815 | 4100 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 3 | 3 | 0 | 0 | 1 |
| 02_karasu | 2814 | 3800 | 0 | 2 | 0 | 1 | 0 | 0 | 1 | 0 | 0 | 2 | 1 | 0 | 1 | 5 |
| 0a_cursed_demon | 2789 | 3780 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 4 | 4 | 0 | 2 | 0 | 0 | 0 |
| 00_master_knight | 2781 | 3200 | 2 | 2 | 3 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 06_oblid | 2769 | 3500 | 0 | 2 | 0 | 0 | 0 | 7 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 |
| 09_descrypha | 2757 | 1800 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 1 | 0 | 0 | 2 | 0 |
| 00_panak | 2744 | 5100 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 08_war_demon_1 | 2736 | 3500 | 3 | 1 | 0 | 0 | 1 | 0 | 3 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |
| 01_disguise | 2603 | 2700 | 0 | 5 | 0 | 0 | 0 | 0 | 0 | 21 | 7 | 3 | 8 | 0 | 0 | 0 |
| 01_gorthaur | 2436 | 3450 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 10 | 7 | 1 | 0 | 0 | 0 |
| 0d_saurian_warrior_b | 2347 | 2800 | 1 | 0 | 3 | 0 | 4 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| 0c_saurian_warrior_a | 2327 | 2800 | 0 | 1 | 3 | 2 | 3 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 04_king_hopper | 2212 | 3230 | 1 | 0 | 0 | 0 | 0 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 09_war_demon_2 | 2149 | 2800 | 2 | 0 | 2 | 0 | 0 | 4 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |
| 04_dread_knight | 2134 | 2400 | 10 | 0 | 0 | 3 | 8 | 6 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 7 |
| 04_dark_spirits | 2121 | 2040 | 0 | 2 | 0 | 0 | 0 | 0 | 3 | 0 | 0 | 0 | 0 | 0 | 1 | 2 |
| 00_red_puppet | 2121 | 2040 | 0 | 2 | 0 | 0 | 0 | 0 | 3 | 0 | 0 | 0 | 0 | 0 | 1 | 2 |
| 00_dark_spirits | 2108 | 2040 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
| 05_dark_spirits | 2098 | 2040 | 0 | 2 | 0 | 0 | 0 | 0 | 3 | 0 | 0 | 0 | 0 | 0 | 1 | 2 |
| 01_dark_spirits | 2098 | 2040 | 0 | 2 | 0 | 0 | 0 | 0 | 3 | 0 | 0 | 0 | 0 | 0 | 1 | 2 |
| 04_zygote | 2026 | 2000 | 0 | 0 | 1 | 0 | 2 | 0 | 0 | 3 | 1 | 0 | 0 | 0 | 0 | 0 |
| 0c_death_mage | 2000 | 1800 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 5 | 0 | 2 | 0 | 0 | 0 |
| 08_hermit_crab | 1991 | 2420 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 0 | 5 | 0 | 0 | 3 |
| 00_hell_hunter | 1977 | 3600 | 0 | 6 | 0 | 0 | 0 | 1 | 4 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0e_claw_head | 1977 | 3600 | 0 | 6 | 0 | 0 | 0 | 1 | 4 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 04_demon_warrior | 1918 | 1880 | 2 | 1 | 0 | 0 | 1 | 1 | 2 | 1 | 0 | 0 | 0 | 0 | 0 | 1 |
| 09_koazul | 1878 | 1540 | 2 | 0 | 0 | 0 | 1 | 0 | 1 | 3 | 0 | 0 | 0 | 0 | 0 | 1 |
| 09_pulsating_heart | 1825 | 2000 | 6 | 2 | 0 | 0 | 6 | 0 | 1 | 6 | 0 | 0 | 6 | 4 | 4 | 4 |
| 09_dementor | 1813 | 2270 | 4 | 0 | 1 | 0 | 0 | 0 | 3 | 1 | 0 | 0 | 0 | 1 | 0 | 1 |
| 0e_dinogon | 1792 | 2020 | 0 | 3 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 1 | 0 | 4 | 0 | 0 |
| 0d_slasher | 1773 | 1620 | 0 | 2 | 0 | 0 | 5 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0d_blood_bone | 1747 | 2820 | 0 | 3 | 0 | 0 | 3 | 0 | 0 | 1 | 3 | 0 | 2 | 3 | 0 | 3 |
| 04_kabasaur | 1745 | 1700 | 3 | 0 | 0 | 1 | 0 | 2 | 0 | 1 | 0 | 0 | 0 | 0 | 1 | 0 |
| 00_kabasaur | 1745 | 1700 | 3 | 0 | 0 | 1 | 0 | 2 | 0 | 1 | 0 | 0 | 0 | 0 | 1 | 0 |
| 04_great_frog | 1547 | 2740 | 5 | 0 | 2 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 4 | 0 | 4 | 0 |
| 01_chirper | 1531 | 2520 | 5 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 0 | 0 |
| 0e_manna_python | 1524 | 1980 | 2 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 |
| 08_ring_demon | 1498 | 2050 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 2 | 3 | 0 | 0 | 0 |
| 05_water_knight | 1498 | 1580 | 0 | 0 | 2 | 0 | 0 | 1 | 4 | 0 | 0 | 1 | 0 | 0 | 1 | 0 |
| 05_master_howler | 1476 | 1450 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 1 | 5 | 8 |
| 0a_dark_bishop | 1399 | 1560 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 3 | 0 | 0 | 0 | 0 | 1 |
| 05_hell_hunter | 1386 | 2100 | 0 | 0 | 1 | 2 | 1 | 1 | 2 | 1 | 2 | 1 | 1 | 0 | 0 | 2 |
| 0d_arachness | 1371 | 1270 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 3 | 4 | 0 | 0 | 1 | 0 | 0 |
| 09_cross_breed | 1369 | 1800 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 1 | 1 | 0 | 0 | 2 |
| 00_winged_worm | 1356 | 1720 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 3 | 0 | 0 | 0 |
| 01_berzerker | 1292 | 1380 | 1 | 1 | 1 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |
| 04_berzerker | 1292 | 1380 | 1 | 1 | 1 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |
| 00_berzerker | 1292 | 1380 | 1 | 1 | 1 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |
| 08_berzerker | 1292 | 1380 | 1 | 1 | 1 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |
| 0c_worm_face | 1256 | 1410 | 3 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 1 | 0 |
| 05_armored_jinn | 1224 | 720 | 0 | 0 | 0 | 0 | 1 | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 0 | 0 |
| 04_auriel_b | 1182 | 1000 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0d_damned_angel | 1150 | 1280 | 3 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 4 | 0 | 0 | 0 | 2 | 0 |
| 02_dark_imp | 1122 | 1040 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 0 | 7 | 0 | 0 | 3 |
| 06_black_imp | 1122 | 1040 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 0 | 7 | 0 | 0 | 3 |
| 08_clay_servant | 1120 | 980 | 2 | 0 | 2 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0e_rotting_face | 1093 | 420 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 5 | 5 | 1 | 0 | 0 | 0 | 7 |
| 0a_rotting_face | 1093 | 420 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 5 | 5 | 1 | 0 | 0 | 0 | 7 |
| 05_earth_knight | 1092 | 970 | 0 | 3 | 2 | 0 | 2 | 0 | 0 | 1 | 0 | 2 | 0 | 0 | 0 | 1 |
| 01_earth_knight | 1092 | 970 | 0 | 3 | 2 | 0 | 2 | 0 | 0 | 1 | 0 | 2 | 0 | 0 | 0 | 1 |
| 00_earth_knight | 1092 | 970 | 0 | 3 | 2 | 0 | 2 | 0 | 0 | 1 | 0 | 2 | 0 | 0 | 0 | 1 |
| 00_night_howler | 1091 | 950 | 2 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 04_night_howler | 1091 | 950 | 2 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 08_torg | 1068 | 1200 | 2 | 0 | 1 | 2 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 00_black_onyx | 1053 | 750 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 1 | 1 | 0 | 1 | 0 | 0 | 2 |
| 04_kiljoy | 1030 | 720 | 0 | 2 | 0 | 0 | 4 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0a_warpoor | 1026 | 1120 | 1 | 0 | 0 | 3 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 1 | 2 | 0 |
| 06_warpoor | 1026 | 1120 | 1 | 0 | 0 | 3 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 1 | 2 | 0 |
| 09_iron_crusher | 1013 | 1100 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 0 | 0 | 0 | 0 | 1 | 2 | 0 |
| 0d_dweller | 1013 | 1100 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 0 | 0 | 0 | 0 | 1 | 2 | 0 |
| 09_dark_fairy | 1010 | 1032 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 2 | 0 | 0 | 2 |
| 08_guardian_b | 997 | 870 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 1 | 0 | 0 | 0 | 0 | 1 |
| 0c_ray_plant | 978 | 1080 | 0 | 0 | 0 | 0 | 5 | 0 | 0 | 0 | 5 | 0 | 0 | 0 | 0 | 0 |
| 06_mystic_tower | 919 | 1050 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 | 0 |
| 0e_mystic_tower | 919 | 1050 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 | 0 |
| 02_mystic_tower | 919 | 1050 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 | 0 |
| 02_gordoral | 891 | 850 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 5 | 0 | 0 |
| 06_gordoral | 891 | 850 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 5 | 0 | 0 |
| 0c_gaze_hopper | 871 | 650 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 1 | 2 | 0 | 0 | 0 | 0 | 2 |
| 05_warden | 861 | 1110 | 0 | 0 | 5 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 0 |
| 02_dead_abraxus | 852 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 5 | 2 | 1 | 0 | 5 | 0 | 4 |
| 06_dweller | 833 | 1160 | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 1 | 0 |
| 0a_dweller | 833 | 1160 | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 1 | 0 |
| 01_gargaral | 812 | 750 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 5 | 0 | 0 |
| 05_gargaral | 812 | 750 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 5 | 0 | 0 |
| 02_sand_leech_b | 788 | 700 | 1 | 0 | 0 | 0 | 1 | 1 | 1 | 0 | 0 | 0 | 1 | 0 | 0 | 0 |
| 09_sloth_bug | 780 | 560 | 1 | 0 | 3 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0a_barrel_snail | 780 | 560 | 1 | 0 | 3 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 05_hobble_worm | 748 | 620 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 2 | 0 | 0 | 0 | 2 |
| 0c_maristella | 739 | 820 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 2 | 0 | 0 | 0 |
| 0a_horned_slime | 695 | 620 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 |
| 05_horned_slime | 695 | 620 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 |
| 02_horned_slime | 695 | 620 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 |
| 01_horned_slime | 695 | 620 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 |
| 01_myconid | 682 | 850 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 0 | 0 | 0 | 0 | 0 |
| 09_cocoon_plant | 676 | 320 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 0 |
| 05_blood_brain | 628 | 590 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 1 | 0 |
| 02_blood_brain | 628 | 590 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 1 | 0 |
| 08_casket | 616 | 261 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 1 | 2 | 0 | 0 | 1 |
| 0d_trickster | 610 | 380 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 4 | 2 |
| 0a_guardian_a | 572 | 480 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 1 | 0 | 0 | 0 | 0 | 1 |
| 0e_elder | 571 | 608 | 0 | 0 | 0 | 1 | 0 | 1 | 1 | 0 | 0 | 0 | 0 | 2 | 1 | 0 |
| 02_elder | 571 | 608 | 0 | 0 | 0 | 1 | 0 | 1 | 1 | 0 | 0 | 0 | 0 | 2 | 1 | 0 |
| 06_elder | 571 | 608 | 0 | 0 | 0 | 1 | 0 | 1 | 1 | 0 | 0 | 0 | 0 | 2 | 1 | 0 |
| 04_cannon_snail | 565 | 640 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 2 | 0 |
| 09_dwarf_warrior | 539 | 382 | 1 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 |
| 06_fanged_worm | 516 | 434 | 1 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 1 | 2 | 0 | 0 | 0 | 0 |
| 01_beak_plant | 504 | 480 | 0 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 |
| 08_star_serpent | 497 | 454 | 0 | 0 | 0 | 2 | 0 | 1 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 |
| 0c_dybbuk | 488 | 520 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 00_dybbuk | 459 | 520 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 04_dybbuk | 459 | 520 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 02_parasite | 455 | 220 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 1 | 2 | 0 | 0 | 2 |
| 00_watcher_plant | 447 | 354 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 |
| 02_watcher_plant | 447 | 354 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 |
| 0e_watcher_plant | 447 | 354 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 |
| 02_lizard_servant | 430 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 06_lizard_servant | 430 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 02_skeleton | 417 | 384 | 0 | 1 | 0 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 |
| 0a_skeleton | 417 | 384 | 0 | 1 | 0 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 |
| 0c_barrel_snail | 412 | 560 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 0d_tondrom | 410 | 280 | 0 | 0 | 1 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 01_blue_flicker | 401 | 440 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | 0 |
| 00_duhrin | 399 | 600 | 0 | 0 | 0 | 5 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 00_gorgoral | 378 | 100 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 1 | 5 | 0 | 0 | 0 | 0 |
| 05_acid_pod | 370 | 320 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 0d_cocoon_plant | 370 | 320 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 01_acid_pod | 370 | 320 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 05_cocoon_plant | 370 | 320 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 08_trickster | 364 | 380 | 0 | 0 | 1 | 1 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 |
| 04_minor_dwarf | 353 | 308 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0d_crying_root | 349 | 350 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 |
| 00_acid_skull | 348 | 280 | 0 | 0 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 02_tongue_imp | 334 | 162 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 |
| 06_tongue_imp | 334 | 162 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 |
| 01_blood_skull | 326 | 263 | 0 | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 05_blood_skull | 326 | 263 | 0 | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 09_shadow_spider | 318 | 240 | 0 | 0 | 1 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 01_shadow_spider | 318 | 240 | 0 | 0 | 1 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 09_imp | 308 | 308 | 0 | 1 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 01_demon_bat | 295 | 135 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 0 | 1 | 1 | 0 | 1 | 0 | 0 |
| 09_demon_bat | 295 | 135 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 0 | 1 | 1 | 0 | 1 | 0 | 0 |
| 08_dark_spider | 209 | 121 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 00_dark_spider | 209 | 121 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 01_blood_slime | 208 | 96 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 05_blood_slime | 208 | 96 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 02_blood_slime | 208 | 96 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 09_blood_slime | 208 | 96 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 0c_hanging_dead | 198 | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 |
| 04_acid_slime | 168 | 95 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 01_acid_slime | 168 | 95 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 00_acid_slime | 168 | 95 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 05_dwarfling | 163 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 00_sand_leech_a | 162 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0 |

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

