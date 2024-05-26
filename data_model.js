  'use strict';

  const constants = require('./constants');
  const fs = require('fs');
  const path = require('path');
  const originalMap = JSON.parse(fs.readFileSync("./map.json"));

  //global.toNotGenerateImages=true;

  // area files
  var logo_files = [
    { index: 1, name: "shadow_tower_part1" },
    { index: 41, name: "human_world_solitary_region" },
    { index: 51, name: "human_world_hidden_region" },
    { index: 61, name: "human_world_forgotten_region" },
    { index: 11, name: "human_world_cursed_region" },
    { index: 111, name: "earth_world_rotting_cavern" },
    { index: 271, name: "earth_world_poisonous_cavern" },
    { index: 121, name: "earth_world_quaking_cavern" },
    { index: 151, name: "earth_world_false_pit_cavern" },
    { index: 281, name: "earth_world_stone_cavern" },
    { index: 331, name: "earth_world_hostile_rock_cavern" },
    { index: 101, name: "water_world_impure_pool_area" },
    { index: 211, name: "water_world_sunken_river_area" },
    { index: 321, name: "water_world_watery_labyrinth_area" },
    { index: 371, name: "water_world_white_rain_area" },
    { index: 31, name: "fire_world_phoenix_cave" },
    { index: 201, name: "fire_world_burning_cavern" },
    { index: 241, name: "fire_world_molten_cavern" },
    { index: 181, name: "fire_world_ashen_cavern" },
    { index: 21, name: "monster_world_false_eye_area" },
    { index: 171, name: "monster_world_screeching_area" },
    { index: 81, name: "illusion_world_bewilderment_domain" },
    { index: 91, name: "illusion_world_gloomy_domain" },
    { index: 381, name: "illusion_world_dream_domain" },
    { index: 131, name: "illusion_world_worship_domain" },
    { index: 251, name: "death_world_dark_castle_layer" },
    { index: 141, name: "death_world_lingering_curse_layer" },
    { index: 261, name: "death_world_undead_layer" },
    { index: 231, name: "death_world_gate_of_the_dead" },
//    { index: 301, name: "void" },
    { index: 401, name: "shadow_tower_part2" },
    { index: 411, name: "shadow_tower_part3" }
  ];

  //if (index>=0x47) {
  //  index--;
  //}
  //texture position 0x0-0x45 = 4+index*3 // weapons
  //texture position 0x47-0x5a = 220+(index-0x47)*3// helmets
  //texture position 0x5b-0x =

  var itemDataString =
 `baa0  13972a0    item_0_short_sword               ff  2  0  8  0  0  0  2  0  0 40  0  0  6  0  0  c 4e  0  0 30  9  7  0  0  0  0  0  0  0  0  0  0  0  0  0  b  0  6  c  a  0  0  0
  bacc  13972cc    item_1_short_sword               ff  2  0  a  0  1  0  2  0  0 40  0  0  6  0  0  d 50  0  0 2d  8  a  0  0  0  0  0  0  0  0  0  0  0  0  0  c  0  6  b  5  0  0  0
  baf8  13972f8    item_2_deadly_short_sword        ff  2  0 29  1  2  0  2  0  0 40  0  0  6  0  0  6 5f  0  0 42  8 16  f  0  0  0  0 12  0  0  0 13 55  c 1b  e  0  6  a  4  0  0  0
  bb24  1397324    item_3_long_sword                ff  2  0 1b  2  4  0  2  0  0 20  0  0  7  0  0 15 35  0  0 3d  d  e  0  0  0  0  0  0  0  0  0  0  0  0  0 11  0  6 10  4  0  0  0
  bb50  1397350    item_4_long_sword                ff  2  0 1d  2  4  0  2  0  0 20  0  0  7  0  0 11 39  0  0 39 11  f  0  0  0  0  0  0  0  0  0  0  0  0  0 11  0  6  f  c  0  0  0
  bb7c  139737c    item_5_long_sword                ff  2  0 26  2  4  0  2  0  0 20  0  0  7  0  0 16 3b  0  0 3f 13 11  0  0  0  0  0  0  0  0  0  0  0  0  0 10  0  6  e  d  0  0  0
  bba8  13973a8    item_6_keenest_long_sword        ff  2  0 34  2  3  0  2  0  0 20  0  0  7  0  0  8 3f  0  0 5e 14 10  0  0  0  0  0  0  0  0  0  0  0  0  0  f  0  6  f  5  0  0  0
  bbd4  13973d4    item_7_fiery_long_sword          ff  2  0 3b  2  3  0  2  0  0 20  0  0  7  0  0  b 30  0  0 31 22 12  0  0  0  0 10  0  0  0  0  0  0  9 48  f  0  6  f  2  0  0  0
  bc00  1397400    item_8_silent_sword              ff  2  0 47  3  5 fe  2  0  0 20  0  0  7  0  0 23 18  0  0 6c 48 29  0  0  0  0  0 16  0  0  0 56 18  b 45 15  0  6  a  a  0  0  0
  bc2c  139742c    item_9_rapier                    ff  2  0 1f  4  6  0  2  0  0 40  0 c0  6  0  0  7 79  0  0  d  6 41  0  0  0  0  0  0  0  0  0  0  0  0  0  9  0  6  8  6  0  0  0
  bc58  1397458    item_a_rapier                    ff  2  0 25  4  6  0  2  0  0 40  0 c0  6  0  0  3 67  0  0 13  a 49  0  0  0  0  0  0  0  0  0  0  0  0  0  9  0  6  6  6  0  0  0
  bc84  1397484    item_b_lethal_rapier             ff  2  0 3b  4  7  0  2  0  0 40  0 c0  6  0  0  0 9e  0  0  7  0 a6  0  0  0  0  0  0  0  0  0  0  0  0  0  7  0  6  b  8  0  0  0
  bcb0  13974b0    item_c_shadow_blade              ff  2  0 47  8 26  0  2  0  0 40  0  0  8  0  0 11 65  0  0 93 5b 2e  0  0  0  0  0  0  0  0  0 13 24  0  0 1b  0  6 19 10  0  0  0
  bcdc  13974dc    item_d_shadow_wolf               ff  2  0 53  9 8d  0  2  0  0 40  0 80  8  0  0  0 c8  0  0 f2  e 3d  0  0  0  0  0  0  0  0  0 53 a6  0  0 12  0  9 15  c  0  0  0
  bd08  1397508    item_e_shadow_tiger              ff  2  0 66  9 27  0  2  0  0 40  0 80  8  0  0  0 7a  0  0 af 43 7a  0  0  0  0  0  0  0  0  0 21 23  4  2 15  0  9 11 11  0  0  0
  bd34  1397534    item_f_broad_sword               ff  2  0 26  5  8  0  2  0  0 20  0  0  7  0  0 2a 29  0  0 4c 22 19  0  0  0  0  0  0  0  0  0  0  0  0  0 13  0  6 11  e  0  0  0
  bd60  1397560    item_10_broad_sword              ff  2  0 27  5  8  0  2  0  0 20  0  0  7  0  0 28 28  0  0 4f 24 1a  0  0  0  0  0  0  0  0  0  0  0  0  0 13  0  6 12 10  0  0  0
  bd8c  139758c    item_11_broad_sword              ff  2  0 2a  5  8  0  2  0  0 20  0  0  7  0  0 2a 2a  0  0 53 1f 16  0  0  0  0  0  0  0  0  0  0  0  0  0 13  0  6 11  8  0  0  0
  bdb8  13975b8    item_12_deadly_broad_sword       ff  2  7 31  5  8  0  2  0  0 20  0  0  7  0  0 1b 2e  0  0 4a 21 1b  0  0  0  0  0  0  0  0  0 13  0  0  0 12  0  6  f  5  0  0  0
  bde4  13975e4    item_13_broad_sword              ff  2  0 29  5  8  0  2  0  0 20  0  0  7  0  0 32 24  0  0 4f 28 1f  0  0  0  0  0  0  0  0  0  0  0  0  0 12  0  6 11  a  0  0  0
  be10  1397610    item_14_crushing_broad_sword     ff  2  0 32  6  9  0  2  0  0 20  0  0  7  0  0 2e 25  0  0 4c 4d 18  0  0  0  0  0  0  0  0  0  0  0  0  0 1a  0  6 14  8  0  0  0
  be3c  139763c    item_15_keenest_broad_sword      ff  2  0 34  6  9  0  2  0  0 20  0  0  7  0  0 27 30  0  0 7e 23 18  0  0  0  0  0  0  0  0  0  0  0  0  0 1a  0  6 15  b  0  0  0
  be68  1397668    item_16_guardian_broad_sword     ff  2  0 3d  6  9  0  2  0  0 20  0  0  7  0  0 3a 1b 20  5 56 2a 16  0  0  8  5  0  0  0  0  0  0  0  0  0 1b  0  6 17  6  0  0  0
  be94  1397694    item_17_dragon_sword             ff  2  0 4f  7  a  0  2  0  0 20  0  0  7  0  0 2c  d  0  0 8f 1a 25 30  0  c  0  0  0 12  0  0 57  0  e 5d 16  0  6 1c  4  0  0  0
  bec0  13976c0    item_18_bastard_sword            ff  2  0 3b  b  c  0  2  0  0 20  0 80  7  0  0 20 18  0  0 67 2c 29  0  0  0  0  0  0  0  0  0  0  0  0  0 19  0  6 16  0  0  0  0
  beec  13976ec    item_19_bastard_sword            ff  2  0 3a  b  c  0  2  0  0 20  0 80  7  0  0 1e 1a  0  0 6b 31 27  0  0  0  0  0  0  0  0  0  0  0  0  0 19  0  6 15 12  0  0  0
  bf18  1397718    item_1a_lethal_bastard_sword     ff  2  0 46 10 25  0  2  0  0 20  0 80  7  0  0 1d 21  0  0 65 2d 57  0  0  0  0  0  0  0  0  0  0  0  0  0 16  0  6 13  d  0  0  0
  bf44  1397744    item_1b_swift_bastard_sword      ff  2  0 44 10 25  0  2  0  0 20  0 80  7  0  0 1b 76  0  0 6a 27 2a  0  0  0  0  0  0  0  0  0  0  0  0  0 17  0  6 13  4  0  0  0
  bf70  1397770    item_1c_keenest_bastard_sword    ff  2  c 49 10 25  0  2  0  0 20  0 80  7  0  0 18 23  0  0 9e 29 24  0  0  0  0  0  0  0  0  0  0  0  0  0 16  0  6  f  7  0  0  0
  bf9c  139779c    item_1d_crushing_bastard_sword   ff  2  0 47 10 25  0  2  0  0 20  0 80  7  0  0 21 13  0  0 65 61 1d  0  0  0  0  0  0  0  0  0  0  0  0  0 16  0  6 12  e  0  0  0
  bfc8  13977c8    item_1e_fiery_bastard_sword      ff  2  0 4f  a  b  0  2  0  0 20  0 80  7  0  0 19 13  0  0 5e 42 19  0  0  0  0 13  0  0  0  0  0  0  9 7c 1d  0  6 16  1  0  0  0
  bff4  13977f4    item_1f_frosty_bastard_sword     ff  2  0 43  a  b  0  2  0  0 20  0 80  7  0  0 16 19 1f  0 60 21 39  0  0  0  0  8  0  0  0  0  0  0  a 4e 1d  0  6 1a  9  0  0  0
  c020  1397820    item_20_shining_bastard_sword    ff  2  0 46  a  b  0  2  0  0 20  0 80  7  0  0 24 1c  0  0 75 35 2d  0  0  0  0  0  0  6  0  0  0  0  d 62 1c  0  6 16  f  0  0  0
  c04c  139784c    item_21_deadly_bastard_sword     ff  2  0 48  a  b  0  2  0  0 20  0 80  7  0  0  e 33  0  0 62 28 22  0  0  0  0  0  0  0  0  0 23  0  0  0 1c  0  6 17  6  0  0  0
  c078  1397878    item_22_mighty_bastard_sword     ff  2  0 4d  d  e  0  2  0  0 20  0 80  7  0  0 1c 1a  0  0 88 3f 37  0  0  0  0 10 15 12  0  0  0  0  0  0 18  0  6 15  e  0  0  0
  c0a4  13978a4    item_23_guardian_bastard_sword   ff  2  0 52  d  e  0  2  0  0 20  0 80  7  0  0 32  e 18  8 6b 31 25  0  0  b  8  0  0  0  0  0  0  0  0  0 18  0  6 18  0  0  0  0
  c0d0  13978d0    item_24_dark_sword               ff  2  0 58  e  f  0  2  0  0 20  0 80  7  0  0  3 48  0  0 a4 39 3f  0  0  0  0  0  0  0  0  0 24 18  e 72 1f  0  6 12  6  0  0  0
  c0fc  13978fc    item_25_magical_bastard_sword    ff  2  0 5b  f 24  0  2  0  0 20  0 80  7  0  0 38 1f  0  0 99 60 21 1f  0  0  0  0  0  0  0  0 a2 14  0  0 2b  0  6 19 19  0  0  0
  c128  1397928    item_26_righteous_sword          ff  2  0 65  c  d  0  2  0  0 20  0 80  7  0  0  a 5d  0  0 7e 40 5b  0  0  0  0  0  0  0  0  0 81 23  d 89 14  0  6  b  8  0  0  0
  c154  1397954    item_27_great_sword              ff  2  0 3a 12 11  0  2  0  0 40  0  0  8  0  0  0 3a  0  0 b0 57 5e  0  0  0  0  0  0  0  0  0  0  0  0  0 26  0  9 19  a  0  0  0
  c180  1397980    item_28_great_sword              ff  2  0 39 12 11  0  2  0  0 40  0  0  8  0  0  0 39  0  0 ab 58 4d  0  0  0  0  0  0  0  0  0  0  0  0  0 27  0  9 1a 12  0  0  0
  c1ac  13979ac    item_29_great_sword              ff  2  0 3d 12 11  0  2  0  0 40  0  0  8  0  0  0 41  0  0 b4 59 4b  0  0  0  0  0  0  0  0  0  0  0  0  0 26  0  9 18  5  0  0  0
  c1d8  13979d8    item_2a_swift_great_sword        ff  2  0 45 12 11  0  2  0  0 40  0  0  8  0  0  0 ad  0  0 aa 5b 4b  0  0  0  0  0  0  0  0  0  0  0  0  0 26  0  9 17  b  0  0  0
  c204  1397a04    item_2b_fiery_great_sword        ff  2  0 46 11 10  0  2  0  0 40  0  0  8  0  0  0 31  0  0 97 44 47  0  0  0  0 14  0  0  0  0  0  0  9 d3 1f  0  9 15  6  0  0  0
  c230  1397a30    item_2c_deadly_great_sword       ff  2  0 44 11 10  0  2  0  0 40  0  0  8  0  0  0 4b  0  0 a9 4d 49  0  0  0  0  0  0  0  0  0 33  0  0  0 1e  0  9 14  6  0  0  0
  c25c  1397a5c    item_2d_keenest_great_sword      ff  2  0 47 12 13  0  2  0  0 40  0  0  8  0  0  0 42  0  0 ef 39 42  0  0  0  0  0  0  0  0  0  0  0  0  0 22  0  9 14  d  0  0  0
  c288  1397a88    item_2e_crushing_great_sword     ff  2  0 48 12 13  0  2  0  0 40  0  0  8  0  0  0 30  0  0 94 c1 3a  0  0  0  0  0  0  0  0  0  0  0  0  0 22  0  9 13 10  0  0  0
  c2b4  1397ab4    item_2f_mighty_great_sword       ff  2  0 51 12 13  0  2  0  0 40  0  0  8  0  0  c 26  0  0 c6 75 60  0  0  0  0 12  c  b  0  0  0  0  0  0 23  0  9 1c  8  0  0  0
  c2e0  1397ae0    item_30_guardian_great_sword     ff  2  0 4e 12 13  0  2  0  0 40  0  0  8  0  0 25 18 31 29 b4 56 4a  0  0 2e 35  0  0  0  0  0  0  0  0  0 23  0  9 1b  f  0  0  0
  c30c  1397b0c    item_31_blood_sword              ff  2  0 5a 11 12  0  2  0  0 40  0  0  8  0  0 15 4e  0  0 f2 72 6c  0  0  0  0  0  0  0  0  0 86 67  0  0 2c  0  9 21  1  0  0  0
  c338  1397b38    item_32_mace                     ff  2  0  9 13 14  0  3 60  0 80  0  0  5  0  0 26 24  0  0  3 33  8  0  0  0  0  0  0  0  0  0  0  0  0  0 12  0  6  8  5  0  0  0
  c364  1397b64    item_33_crushing_mace            ff  2  0 1c 14 15  0  3 60  0 80  0  0  5  0  0 29 1d  0  0  1 57  b  0  0  0  0  0  0  0  0  0  0  0  0  0 1b  0  6  b  8  0  0  0
  c390  1397b90    item_34_shining_mace             ff  2  0 27 15 16  0  3 60  0 80  0  0  5  0  0 31 30  0  0  4 3d  a  0  0  0  0  0  0  0  0  0  0  0  d 4a 18  0  6  f  3  0  0  0
  c3bc  1397bbc    item_35_morning_star             ff  2  0 11 16 17  0  3 60  0 80  0 80  5  0  0 2e 33  0  0  5 27 1f  0  0  0  0  0  0  0  0  0  0  0  0  0 14  0  6  9  9  0  0  0
  c3e8  1397be8    item_36_swift_morning_star       ff  2  0 26 16 17  0  3 60  0 80  0 80  5  0  0 3b 8f  0  0  7 2b 23  0  0  0  0  0  0  0  0  0  0  0  0  0 14  0  6  9  2  0  0  0
  c414  1397c14    item_37_frosty_morning_star      ff  2  0 33 17 18  0  3 60  0 80  0 80  5  0  0 23 23  0  0  8 3d 30  0  0  0  0  e  0  0  0  0  0  0  a 70 26  0  6 21  b  0  0  0
  c440  1397c40    item_38_axe                      ff  2  0 1b 18 19  0  1  0  0 c0  0  0  5  0  0 2b 1d  0  0 1d 3f  0  0  0  0  0  0  0  0  0  0  0  0  0  0 15  0  6  5  3  0  0  0
  c46c  1397c6c    item_39_axe                      ff  2  0 1d 19 1a  0  1  0  0 c0  0  0  5  0  0 2a 1f  0  0 22 3c  0  0  0  0  0  0  0  0  0  0  0  0  0  0 1e  0  6 12  d  0  0  0
  c498  1397c98    item_3a_giant_axe                ff  2  0 28 1a 1b  0  1  0  0 60  0  0  7  0  0 24 19  0  0 2a 54  5  0  0  0  0  0  0  0  0  0  0  0  0  0 1c  0  6  f  b  0  0  0
  c4c4  1397cc4    item_3b_giant_axe                ff  2  0 26 1a 1b  0  1  0  0 60  0  0  7  0  0 26 16  0  0 26 5b  9  0  0  0  0  0  0  0  0  0  0  0  0  0 1c  0  6 10  5  0  0  0
  c4f0  1397cf0    item_3c_crushing_axe             ff  2  0 3b 1b 1c  0  1  0  0 60  0  0  7  0  0 22  e  0  0 23 82  a  0  0  0  0  0  0  0  0  0  0  0  0  0 23  0  6 19 12  0  0  0
  c51c  1397d1c    item_3d_deadly_axe               ff  2  0 47 1b 1c  0  1  0  0 60  0  0  7  0  0 15 19  0  0 22 59  c  0  0  0  0  0  0  0  0  0 73  0  0  0 23  0  6 17  4  0  0  0
  c548  1397d48    item_3e_living_axe               ff  2  0 52 1c 1d  0  1  0  0 60  0  0  7  0  0  0 30 76  0 58 f4  f  0  0  0  0  0 13  0  0  0 55  0  c 39 2b  0  9 1d  6  0  0  0
  c574  1397d74    item_3f_battle_axe               ff  2  0 3a 1d 1e  0  1  0  0  0  1  0  a  0  0  0 3b 33  0 47 9c 17  0  0  0  0  0  0  0  0  0  0  0  0  0 32  0  9 23 14  0  0  0
  c5a0  1397da0    item_40_deadly_battle_axe        ff  2  0 45 1d 1e  0  1  0  0  0  1  0  a  0  0  0 44 12  0 53 92 15  0  0  0  0  0  0  0  0  0 53  0  0  0 31  0  9 1c  4  0  0  0
  c5cc  1397dcc    item_41_keenest_battle_axe       ff  2  0 4f 1e 1f  0  1  0  0  0  1  0  a  0  0  0 3c 25  0 8b a4 19  0  0  0  0  0  0  0  0  0  0  0  0  0 2c  0  9 1a 10  0  0  0
  c5f8  1397df8    item_42_bow                      ff  2  0 29 1f 20  0  1  0  0 40  0 80  7  0  0  0 62  0  0  0 27 80  0  0  0  0  0  0  0  0  0  0  0  0  0  b  0  9 1c  f  0  0  0
  c624  1397e24    item_43_warrior_bow              ff  2  0 48 20 21  0  1  0  0 40  0 80  7  0  0  0 8d  0  0  0 34 9a  0  0  0  0  0 14  0  0  0 23  0  b 4d  d  0  9 16 14  0  0  0
  c650  1397e50    item_44_bow_gun                  ff  2  0 3f 21 22  0  3 40  0 40  0  0  5  0  0  0 7c  0  0 2a 10 75  0  0  0  0  0  0  0  0  0 14  0  0  0 15  0  9 2e 10  0  0  0
  c67c  1397e7c    item_45_fiery_bow_gun            ff  2  0 51 22 23  0  3 40  0 40  0  0  5  0  0  0 bb  0  0 55 1f d0  0  0  0  0 11  0  0  0  0  0  0  9 26 1c  0  9 23 1f  0  0  0
  c6a8  1397ea8    item_46_unknown                  ff  8  0  0 ff ff  0  0  0  0  0  0  0  4  0  0 37 37 37 37 37 37 37 37 37 37 37 37 37 37  0  0  0  0  0  0  0  0 ff  0  0  0  0  0
  c6d4  1397ed4    item_47_cap                      ff  2  0  8 37 28  0  0  0  0 c0  0  0  4  0  0  6  0  e  0  0  0  0 22 13  0  0  0  0 1c  0  0  0  0  0  0 15  0  0 20 10  0  0  0
  c700  1397f00    item_48_crown                    ff  2  0 1c 38 29  0  0  0  0 80  0  0  4  0  0  0  0  4  0  0  0  0 56 84  8 17  8  c 42  0  0 55  0  0  0  a  0  0  b  9  0  0  0
  c72c  1397f2c    item_49_crown_of_resist          ff  2  0 27 38 2a  0  0  0  0 80  0  0  4  0  0  0  0  6  0  0  0  0 70 80 1a 30  4  6 4e  0  0 14  0  9 48  b  0  0 10  f  0  0  0
  c758  1397f58    item_4a_crown_of_composure       ff  2  0 47 38 2b  0  0  0  0 80  0  0  4  0  0  0  0  b  0  0  0  0 86 a8  b 1f 10 14 5f  0  0 c5  0  a 55  e  0  0 15  0  0  0  0
  c784  1397f84    item_4b_wizard_crown             ff  2  0 4f 38 2c  0  0  0  0 80  0  0  4  0  0  0  0  8  0  0  0  0 92 8d 10 19 17 12 72  0  0 81 14  c 79  a  0  0  8  8  0  0  0
  c7b0  1397fb0    item_4c_devil_crown              ff  2  0 32 38 8c  0  0  0  0 80  0  0  4  0  0 2b  0 15  0  0  0  b 61 74 16  0 15 15 6c  0  0 24 d7  e cd  6  0  0 12  d  0  0  0
  c7dc  1397fdc    item_4d_helm                     ff  2  0 11 37 2d  0  0  0  0 c0  0  0  4  0  0  8  0 13  0  0  0  0 29 31  0  0  0  0 2c  0  0  0  0  0  0 1c  0  0 22 12  0  0  0
  c808  1398008    item_4e_helm                     ff  2  0 12 37 2e  0  0  0  0 c0  0  0  4  0  0  8  0 11  0  0  0  0 25 33  0  0  0  0 24  0  0  0  0  0  0 19  0  0 26 1c  0  0  0
  c834  1398034    item_4f_magical_helm             ff  2  0 1d 37 2e  0  0  0  0 c0  0  0  4  0  0  0  0  d  0  0  0  0 7e 30  0  0  0  0 23  0  0  0  0  0  0 18  0  0 21 18  0  0  0
  c860  1398060    item_50_full_helm                ff  2  0 31 39 2f  0  0  0  0  0  1  0  4  0  0  d  0 18  0  0  0  0 37 51  0  0  0  0 2f  0  0  0  0  0  0 23  0  0 2a 13  0  0  0
  c88c  139808c    item_51_full_helm                ff  2  0 33 39 2f  0  0  0  0  0  1  0  4  0  0  f  0 1b  0  0  0  0 3e 4c  0  0  0  0 34  0  0  0  0  0  0 22  0  0 2d 28  0  0  0
  c8b8  13980b8    item_52_full_helm_of_curing      ff  2  0 3e 39 30  0  0  0  0  0  1  0  4  0  0  b  0 15  0  0  0  0 40 53  0 22  0  0 31  0  0 35  0  0  0 1f  0  0 2d 21  0  0  0
  c8e4  13980e4    item_53_harden_full_helm         ff  2  0 3d 39 30  0  0  0  0  0  1  0  4  0  0 10  0 2c  0  0  0  0 31 51  0  0  0  0 36  0  0  0  0  0  0 1f  0  0 34  d  0  0  0
  c910  1398110    item_54_fiery_full_helm          ff  2  0 3b 39 30  0  0  0  0  0  1  0  4  0  0  4  0 13  0  0  0  0 3c 5d  0  0 13  0 3d  0  0  0  0  9 8d 1e  0  0 2b  7  0  0  0
  c93c  139813c    item_55_great_helm               ff  2  0 45 3a 32  0  0  0  0  0  1  0  4  0  0 15  0 24  0  0  0  0 5d 72  0  0  0  0 46  0  0  0  0  0  0 26  0  0 32  f  0  0  0
  c968  1398168    item_56_great_helm               ff  2  0 48 3a 32  0  0  0  0  0  1  0  4  0  0 13  0 25  0  0  0  0 5f 67  0  0  0  0 48  0  0  0  0  0  0 26  0  0 2e 10  0  0  0
  c994  1398194    item_57_harden_great_helm        ff  2  0 53 3a 31  0  0  0  0  0  1  0  4  0  0 1f  0 36  0  0  0  0 52 63  0  0  0  0 45  0  0  0  0  0  0 27  0  0 3d 28  0  0  0
  c9c0  13981c0    item_58_fortune_great_helm       ff  2 10 4f 3a 34  0  0  0  0  0  1  0  4  0  0 4e  0 33  0  0  0  0 4e bf 16 31 12  e 65  0  0 52 14  5  f 2a  0  0 37  d  0  0  0
  c9ec  13981ec    item_59_mystic_great_helm        ff  2  0 5b 3a 35  0  0  0  0  0  1  0  4  0  0 34  0 3c  0  0  0 13 41 5d  0  0  0  0 61  0  0 23 24  6  f 30  0  0 42  6  0  0  0
  ca18  1398218    item_5a_holy_great_helm          ff  2  0 62 3a 33  0  0  0  0  0  1  0  4  0  0 22  0 2c  0  0  0  0 c2 94  b 15  8  3 20  0  0 f1 13  d b1 18  0  0 20 20  0  0  0
  ca44  1398244    item_5b_quilted_armor            ff  2  0  9 3b 36  0  1  0  0  0  0  0  6  0  0 10  0  a 12  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0 16  0  1  6  5  0  0  0
  ca70  1398270    item_5c_quilted_armor            ff  2  0  b 3b 37  0  1  0  0  0  0  0  6  0  0  e  0  d 15  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0 13  0  1  8  2  0  0  0
  ca9c  139829c    item_5d_leather_armor            ff  2  0 15 3c 38  0  1  0  0 80  0 80  6  0  0 19  0  f 28  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0 1c  0  1  d  a  0  0  0
  cac8  13982c8    item_5e_leather_armor            ff  2  0 13 3c 38  0  1  0  0 80  0 80  6  0  0 1a  0 10 30  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0 1d  0  1  b  6  0  0  0
  caf4  13982f4    item_5f_magical_leather_armor    ff  2  0 1c 3c 39  0  1  0  0 80  0 80  6  0  0 20  0 15 31  0  0  0 13  0  0  0  0  0  0  0  0  0  0  0  0 28  0  1  e  d  0  0  0
  cb20  1398320    item_60_scale_mail               ff  2  0 2b 3d 3a  0  1  0  0 80  0  0  6  0  0 28  0 29 4f  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0 99  0  1 15 14  0  0  0
  cb4c  139834c    item_61_scale_mail               ff  2  0 29 3d 3a  0  1  0  0 80  0  0  6  0  0 2b  0 26 52  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0 9b  0  1 1a  8  0  0  0
  cb78  1398378    item_62_scale_mail_of_curing     ff  2  0 27 3d 3b  0  1  0  0 80  0  0  6  0  0 34  0 28 4f  0  0  0  0  0  0  a  0  0  0  0  0 55  0  0  0 8e  0  1 17 10  0  0  0
  cba4  13983a4    item_63_plate_mail               ff  2  0 30 3e 3c  0  1  0  0 c0  0  0  7  0  0 48  0 36 63  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0 ba  0  1 1c  c  0  0  0
  cbd0  13983d0    item_64_plate_mail               ff  2  0 33 3e 3c  0  1  0  0 c0  0  0  7  0  0 4a  0 37 65  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0 bb  0  1 1e 1d  0  0  0
  cbfc  13983fc    item_65_harden_plate_mail        ff  2  0 3b 3e 3c  0  1  0  0 c0  0  0  7  0  0 6a  0 60 69  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0 b8  0  1 2c 16  0  0  0
  cc28  1398428    item_66_plate_mail_of_resist     ff  2  0 3d 3e 3c  0  1  0  0 c0  0  0  7  0  0 69  0 35 64  0  0  0  0  0 23  0  0  0  0  0  0  0  0  0  0 b8  0  1 1f  9  0  0  0
  cc54  1398454    item_67_plate_mail_of_curing     ff  2  0 3f 3e 3c  0  1  0  0 c0  0  0  7  0  0 68  0 37 64  0  0  0  0 19  0 14  0  0  0  0  0  0  0  0  0 ba  0  1 1d 12  0  0  0
  cc80  1398480    item_68_plate_mail               ff  2  0 46 3e 3d  0  1  0  0 c0  0  0  7  0  0 5b  0 44 83  0 15  0  0  0  0  0  0  0  0  0  0 81  0  0  0 c6  0  1 20 1e  0  0  0
  ccac  13984ac    item_69_magical_plate_mail       ff  2  0 48 3e 3d  0  1  0  0 c0  0  0  7  0  0 59  0 47 84  0  0  0 1a  0  a  8  0  0  0  0  0  0  0  0  0 c7  0  1 22  6  0  0  0
  ccd8  13984d8    item_6a_fiery_plate_mail         ff  2  0 47 3e 3d  0  1  0  0 c0  0  0  7  0  0 5a  0 48 80  0 1e  0  0  0  0  0 13  0  0  0  0  0  0  9 a8 c6  0  1 1e  6  0  0  0
  cd04  1398504    item_6b_frosty_plate_mail        ff  2  0 50 3e 3d  0  1  0  0 c0  0  0  7  0  0 5a  0 46 80  0  f  0  0  0  0  0 15  0  0  0  0 67  0  a b9 c8  0  1 1e  5  0  0  0
  cd30  1398530    item_6c_caustic_plate_mail       ff  2  0 45 3e 40  0  1  0  0 c0  0  0  7  0  0 81  0 51 71  0  0  0  0  0  0  0  0 11  0  0  0  0  0  c f2 ad  0  1 2a 1c  0  0  0
  cd5c  139855c    item_6d_shining_plate_mail       ff  2  0 45 3e 40  0  1  0  0 c0  0  0  7  0  0 8d  0 50 73  0  0  0 13  0  0  0  0  0 10  0  0  0  0  d cd ac  0  1 24 1e  0  0  0
  cd88  1398588    item_6e_dark_plate_mail          ff  2  0 51 3e 40  0  1  0  0 c0  0  0  7  0  0 85  0 50 74  0  0  0 1e  0  0  0  0  0  8  0  0  0  0  e d4 ad  0  1 30  5  0  0  0
  cdb4  13985b4    item_6f_plate_mail_of_protect    ff  2  0 52 3e 40  0  1  0  0 c0  0  0  7  0  0 87  0 51 74  0  0  0  0  0  0  0  0 14  0  0  0 85  0  b fd aa  0  1 1e 10  0  0  0
  cde0  13985e0    item_70_eternal_plate_mail       ff  2  0 5c 3e 41  0  1  0  0 c0  0  0  7  0  0 7a  0 45 91  0  0  0 19  0  0  0  f 11  e  0  0 92 a5  d 9a e7  0  1 1a 11  0  0  0
  ce0c  139860c    item_71_devil_plate_mail         ff  2  0 5d 3e 3f  0  1  0  0 c0  0  0  7  0  0 7c  0 64 79  0  0  0  0  0 10 26  0  0  0  0  0 14 f6  e c4 15  1  1 19  d  0  0  0
  ce38  1398638    item_72_holy_plate_mail          ff  2  0 67 3e 3e  0  1  0  0 c0  0  0  7  0  0 98  0 4b 64  0  0  0  0 13 32  0  0  0  0  0  0 13 24  d c8 94  0  1 32 30  0  0  0
  ce64  1398664    item_73_full_plate               ff  2  0 3a 3f 43  0  0  0  0 80  1  0  7  0  0 af 3a a1 c6  c  a  f  0  0  0  0  0  0  0  0  0  0  0  0  0 4c  1  a 2a 11  0  0  0
  ce90  1398690    item_74_plate_mail_of_honor      ff  2  0 44 3f 42  0  0  0  0 80  1  0  7  0  0 d8 48 b1 d4  e  8  8  0  0  0  0  0  0  0  0  0  0  0  0  0 69  1  a 2e 1e  0  0  0
  cebc  13986bc    item_75_harden_full_plate        ff  2  0 47 3f 42  0  0  0  0 80  1  0  7  0  0 bf 51 cb e7 1a  d 12  0  0  0  0  0  0  0  0  0  0  0  0  0 66  1  a 3a  f  0  0  0
  cee8  13986e8    item_76_god_plate                ff  2  0 67 3f 44  0  0  0  0 80  1  0  7  0  0 cb 76 ac e5 34 1c 1f 29  0  0  0  c 38  d  0  0 a2 f7  d c8 8a  1  a 41 41  0  0  0
  cf14  1398714    item_77_plate_mail_of_rage       ff  2  0 64 3f 45  0  0  0  0 80  1  0  7  0  0 da 5f bb cc 52 4d 50 19  0 35 29  0  0 79  0  0 33 14  5  a 32  1  a 34  b  0  0  0
  cf40  1398740    item_78_knight_plate_mail        ff  2  0 62 3f 46  0  0  0  0 80  1  0  7  0  0 f2 48 c8 f1 2b 3e 48  c  0  0  0 74  0  0  0  0 a1 13  4  2 58  1  a 31  4  0  0  0
  cf6c  139876c    item_79_leather_glove            ff  2  0  7 40 47  0  3 40  0 40  0 c0  3  0  0  0 29  6  0  7  5  d  0  0  0  0 22  0  0  0  0  0  0  0  0  5  0  2  a  8  0  0  0
  cf98  1398798    item_7a_leather_glove            ff  2  0  7 40 47  0  3 40  0 40  0 c0  3  0  0  0 26  7  0  6  6  e  0  0  0  0 21  0  0  0  0  0  0  0  0  4  0  2  c  4  0  0  0
  cfc4  13987c4    item_7b_leather_glove            ff  2  0 12 40 47  0  3 40  0 40  0 c0  3  0  0  0 2c  6  0  9  6  d  0  0  0  0 25  0  0  0  0  0  0  0  0  4  0  2  c  5  0  0  0
  cff0  13987f0    item_7c_wooden_glove             ff  2  0 13 40 48  0  3 40  0 40  0 c0  3  0  0  6 1e  9  0  c  5  f  0  2  0  0 26  0  0  0  0  0  0  0  0  c  0  2  8  2  0  0  0
  d01c  139881c    item_7d_wooden_glove             ff  2  0 1f 40 48  0  3 40  0 40  0 c0  3  0  0  f 1d  a  0  d  8 10  0  3  0  0 29  0  0  0  0  0  0  0  0  b  0  2  7  7  0  0  0
  d048  1398848    item_7e_metal_glove              ff  2  0 1d 40 49  0  3 40  0 40  0 c0  3  0  0  0 18  e  0  b  9 12  0  0  0  0 35  0  0  0  0  0  0  0  0 16  0  2  e  c  0  0  0
  d074  1398874    item_7f_metal_glove              ff  2  0 1e 40 49  0  3 40  0 40  0 c0  3  0  0  0 17  e  0  a  a 13  0  0  0  0 37  0  0  0  0  0  0  0  0 16  0  2  f  c  0  0  0
  d0a0  13988a0    item_80_metal_glove              ff  2  0 25 40 49  0  3 40  0 40  0 c0  3  0  0  8 1a 10  0  c  b 12  0  0  0  0 3d  0  0  0  0  0  0  0  0 15  0  2  c  a  0  0  0
  d0cc  13988cc    item_81_fiery_gauntlet           ff  2  0 29 41 4a  0  3 40  0 40  0  0  5  0  0  0  b 13  0  8 1a  7  0  0  0  0 53  0  0  0  0  0  0  9 4c 21  0  2 1a 12  0  0  0
  d0f8  13988f8    item_82_caustic_hand_guard       ff  2  0 30 41 4a  0  3 40  0 40  0  0  5  0  0  0 23 12  0  9 1e  8  0  0  0  0 5b  0  0  0  0  0  0  c 73 22  0  2 1c  9  0  0  0
  d124  1398924    item_83_gauntlet                 ff  2  0 32 41 4c  0  3 40  0 40  0  0  5  0  0  0 27 19  0 22  d  a  0  0  0  0 4c  0  0  0  0  0  0  0  0 2e  0  2 24 18  0  0  0
  d150  1398950    item_84_gauntlet                 ff  2  0 31 41 4c  0  3 40  0 40  0  0  5  0  0  0 29 19  0 23  f  b  0  0  0  0 4a  0  0  0  0  0  0  0  0 2e  0  2 24 1f  0  0  0
  d17c  139897c    item_85_harden_gauntlet          ff  2  9 3d 41 4c  0  3 40  0 40  0  0  5  0  0 1a 24 29  0 21 10  7  0  0  0  0 50  0  0  0  0  0  0  0  0 2f  0  2 29 28  0  0  0
  d1a8  13989a8    item_86_gauntlet_of_resist       ff  2  0 44 41 4b  0  3 40  0 40  0  0  5  0  0  0 2b 1b  0 1e  f  c  0  0 12  0 70  0  c  0  0  0  0  9 86 2a  0  2 21  e  0  0  0
  d1d4  13989d4    item_87_swift_gauntlet           ff  2  0 51 41 4b  0  3 40  0 40  0  0  5  0  0  0 4c 19  0 20  d  e  0  0  0  0 60  0 2b  0  0 61  0  0  0 29  0  2 20  8  0  0  0
  d200  1398a00    item_88_deadly_gauntlet          ff  2  0 46 41 4b  0  3 40  0 40  0  0  5  0  0  0 35 1d  0 22  d  f  0  0  0  0 51  0  8  0  0 13  0  0  0 29  0  2 23 1c  0  0  0
  d22c  1398a2c    item_89_arm_guard                ff  2  0 4f 42 4d  0  3  0  0 40  0  0  5  0  0  0 45 2d  0 1d 31 11  0  0  0  0 5d  0  0  0  0  0  0  0  0 3e  0  2 28 10  0  0  0
  d258  1398a58    item_8a_arm_guard_of_composure   ff  2  0 58 42 4d  0  3  0  0 40  0  0  5  0  0  0 41 2b  0 1d 33 10  0 30  0  0 6d  0  0  0  0  0  0  9 36 3d  0  2 24  c  0  0  0
  d284  1398a84    item_8b_deadly_arm_guard         ff  2  0 5b 42 4d  0  3  0  0 40  0  0  5  0  0  0 4f 26  0 1c 2f  d  0  0  0  0 61  0  0  0  0 23  0  9 26 3d  0  2 2a  0  0  0  0
  d2b0  1398ab0    item_8c_master_arm_guard         ff  2  0 62 42 4e  0  3  0  0 40  0  0  5  0  0 26 3d 32  0 29 2b 28  0  0  0 27 75 2d  0  0  0 56 57  9 f0 4f  0  2 36 32  0  0  0
  d2dc  1398adc    item_8d_leather_boots            ff  2  0  8 43 50  0  3 c0 ff e0  0  0  5  0  0  8  0  9  c  0  0  0  0  0  0  0  0 17  0  0  0  0  0  0  0 15  0  3  c  b  0  0  0
  d308  1398b08    item_8e_leather_boots            ff  2  0 13 43 50  0  3 c0 ff e0  0  0  5  0  0  a  0  a  b  0  0  0  0  0  0  0  0 1c  0  0  0  0  0  0  0 14  0  3  e  8  0  0  0
  d334  1398b34    item_8f_hard_boots               ff  2  0 1b 43 50  0  3 c0 ff e0  0  0  5  0  0  e  0 10  d  0  0  0  0  0  0  0  0 24  0  0  0  0  0  0  0 17  0  3 12  6  0  0  0
  d360  1398b60    item_90_steel_boots              ff  2  0 27 44 52  0  3 c0 ff  0  1 80  6  0  0 14  0 14 13  0  0  0  0  0  0  0  0 2c  0  0  0  0  0  0  0 54  0  3 16 14  0  0  0
  d38c  1398b8c    item_91_steel_boots              ff  2  0 25 44 52  0  3 c0 ff  0  1 80  6  0  0 16  0 16 15  0  0  0  0  0  0  0  0 28  0  0  0  0  0  0  0 54  0  3 14  6  0  0  0
  d3b8  1398bb8    item_92_steel_boots_of_resist    ff  2  0 30 44 52  0  3 c0 ff  0  1 80  6  0  0 27  0 32 25  0  0  0  0  0  0  0  0 35  0  0  0  0  0  0  0 56  0  3 19  0  0  0  0
  d3e4  1398be4    item_93_steel_boots_of_curing    ff  2  0 33 44 53  0  3 c0 ff  0  1 80  6  0  0 21  0 1b 30  0  0  0  8  0  0 25  0 3a  0  0  0  0  0  0  0 42  0  3 24 1a  0  0  0
  d410  1398c10    item_94_steel_boots_of_resist    ff  2  0 3b 44 53  0  3 c0 ff  0  1 80  6  0  0 1c  0 19 2c  0  0  0  0  0 20  0  0 4a  f  0  0  0  0  0  0 41  0  3 26  f  0  0  0
  d43c  1398c3c    item_95_caustic_steel_boots      ff  2  0 3c 44 53  0  3 c0 ff  0  1 80  6  0  0 22  0 1d 2f  0  0  0  c  0  0  0  0 6c  0  0  0  0  0  c ac 42  0  3 28  2  0  0  0
  d468  1398c68    item_96_swift_steel_boots        ff  2  0 51 44 54  0  3 c0 ff  0  1 80  6  0  0 1f 20 2a 44  0  0 21  0  0  0  0  0 4d  0  0  0  0  0  0  0 34  0  3 1e 1c  0  0  0
  d494  1398c94    item_97_steel_boots_of_balance   ff  2  0 59 44 54  0  3 c0 ff  0  1 80  6  0  0 27  0 30 65  0 30  0  0  0  0  0  0 54  0  0  0 a1  0  0  0 32  0  3 21 1e  0  0  0
  d4c0  1398cc0    item_98_steel_boots_of_resist    ff  2  0 4d 44 54  0  3 c0 ff  0  1 80  6  0  0 1e  0 2d 40  0  0  0  0  0 33  0  c 4f 15  0  0  0  0  0  0 32  0  3 22  8  0  0  0
  d4ec  1398cec    item_99_leg_guard                ff  2  0 21 45 55  0  3  0  0 a0  0  0  4  0  0  0 10  f 24  0  0  0  0  0  0  0  0  b  0  0  0  0  0  0  0 39  0  3 2c  f  0  0  0
  d518  1398d18    item_9a_leg_guard                ff  2  0 20 45 55  0  3  0  0 a0  0  0  4  0  0  0 10 10 23  0  0  0  0  0  0  0  0  c  0  0  0  0  0  0  0 3a  0  3 2a 1e  0  0  0
  d544  1398d44    item_9b_harden_leg_guard         ff  2  0 29 45 55  0  3  0  0 a0  0  0  4  0  0  0 11 2b 26  0  0  0  0  0  0  0  0  e  0  0  0  0  0  0  0 39  0  3 30 2d  0  0  0
  d570  1398d70    item_9c_fiery_leg_guard          ff  2  0 44 45 56  0  3  0  0 a0  0  0  4  0  0  0 26 1d 47  0  8  0  0  0  0  0 14 13  0  0  0  0  0  9 a9 2b  0  3 1e  3  0  0  0
  d59c  1398d9c    item_9d_frosty_leg_guard         ff  2  0 48 45 56  0  3  0  0 a0  0  0  4  0  0  0 2f 24 50  0  0  c  0  0  0  0 12 29  0  0  0  0  0  a af 2a  0  3 26  8  0  0  0
  d5c8  1398dc8    item_9e_leg_guard_of_protect     ff  2  0 4f 45 57  0  3  0  0 a0  0  0  4  0  0  0 2a 20 4b  0  0  0  0  0  0  0  0 61  0  0  0 a6  0  b b5 24  0  3 21  2  0  0  0
  d5f4  1398df4    item_9f_caustic_leg_guard        ff  2  0 51 45 57  0  3  0  0 a0  0  0  4  0  0  0 2c 25 4d  0  0  0  0  0  0  0  0 65  0  0  0 a7  0  c ba 24  0  3 22  b  0  0  0
  d620  1398e20    item_a0_holy_leg_guard           ff  2  0 63 44 51  0  3  0  0 a0  0  0  4  0  0 32 30 28 55 29  0  0  0  0  0  0  f 5f 13  0  0 14 a5  d c8 1e  0  3 1c 1c  0  0  0
  d64c  1398e4c    item_a1_buckler                  ff  2  0  9 24 59  0  1 20  0 40  0  0  5  0  0  e  0 18 1c  0  0  0  0 10 17 19  0  0  0  0  0  0  0  0  0 10  0  7  9  5  0  0  0
  d678  1398e78    item_a2_buckler                  ff  2  0  c 24 59  0  1 20  0 40  0  0  5  0  0  c  0 1a 1b  0  0  0  0  e 19 19  0  0  0  0  0  0  0  0  0 10  0  7  7  5  0  0  0
  d6a4  1398ea4    item_a3_small_shield             ff  2  0 15 25 5a  0  1 20  0 40  0  0  5  0  0 11  0 20 24  0  0  0  0 15 24 2c  0  0  0  0  0  0  0  0  0 20  0  7 26 13  0  0  0
  d6d0  1398ed0    item_a4_small_shield             ff  2  0 16 25 5a  0  1 20  0 40  0  0  5  0  0 12  0 21 24  0  0  0  0 16 22 2b  0  0  0  0  0  0  0  0  0 1f  0  7 28 1c  0  0  0
  d6fc  1398efc    item_a5_shield_of_resist         ff  2  0 1c 26 5b  0  1 20  0 40  0  0  5  0  0 18  0 1e 21  0  0  0 12 18 48 2f  0  0  0  0  0  0  0  9 4d 18  0  7 18 17  0  0  0
  d728  1398f28    item_a6_large_shield             ff  2  0 1d 27 5c  0  1  0  0 c0 ff 40  6  0  0 1f  0 2d 2a  0  0  0  0 22 2e 3b  0  0  0  0  0  0  0  0  0 24  0  7 1c 15  0  0  0
  d754  1398f54    item_a7_large_shield             ff  2  0 1c 27 5c  0  1  0  0 c0 ff 40  6  0  0 1b  0 2b 2d  0  0  0  0 23 2d 3a  0  0  0  0  0  0  0  0  0 24  0  7 1a  8  0  0  0
  d780  1398f80    item_a8_harden_large_shield      ff  2  0 25 28 5d  0  1  0  0 c0 ff 40  6  0  0 21  0 4e 33  0  0  0  0 1e 2a 37  0  0  0  0  0  0  0  0  0 58  0  7 24 1e  0  0  0
  d7ac  1398fac    item_a9_large_shield_of_balance  ff  2  0 27 28 5d  0  1  0  0 c0 ff 40  6  0  0 21  0 2f 51  0  0  0  0 24 2b 3d  3  5  4  0  0 11  0  c 5c 58  0  7 1f  5  0  0  0
  d7d8  1398fd8    item_aa_fiery_large_shield       ff  2  0 33 28 5d  0  1  0  0 c0 ff 40  6  0  0 19  0 27 28  0  0  0  c 27 30 41 20  0  0  0  0  0  0  9 98 57  0  7 21 14  0  0  0
  d804  1399004    item_ab_great_shield             ff  2  0 32 28 5d  0  1  0  0 c0 ff 40  6  0  0 1b  0 2a 28  0  0  0  e 25 33 40 1c  0  0  0  0  0  0  a aa 5a  0  7 23  4  0  0  0
  d830  1399030    item_ac_great_shield             ff  2  0 30 29 5e  0  1  0  0 e0 ff 40  6  0  0 16  0 3f 35  0  0  0  0 3c 56 56  0  0  0  0  0  0  0  0  0 45  0  7 26  a  0  0  0
  d85c  139905c    item_ad_great_shield_of_balance  ff  2  0 31 29 5e  0  1  0  0 e0 ff 40  6  0  0 18  0 43 56  0  0  0  0 3f 53 59  a  e  8  0  0 21  0  b 7d 46  0  7 23 23  0  0  0
  d888  1399088    item_ae_shining_great_shield     ff  2  0 3d 2a 5f  0  1  0  0 e0 ff 40  6  0  0 19  0 41 38  0  0  0 17 43 58 5c  0  0 21  0  0  0  0  d b9 55  0  7 28 13  0  0  0
  d8b4  13990b4    item_af_dark_great_shield        ff  2  0 3a 2a 5f  0  1  0  0 e0 ff 40  6  0  0 19  0 46 37  0  0  0 19 46 5c 57  0  0 25  0  0  0  0  e a7 55  0  7 1c 1c  0  0  0
  d8e0  13990e0    item_b0_deadly_great_shield      ff  2  0 65 2b 91  0  1  0  0 e0 ff 40  6  0  0 36  0 7a 54 10 15 12  0 4e 6f 63 1a 16 14  0  0 13 24  0  0 bb  0  7  5  1  0  0  0
  d90c  139910c    item_b1_tower_shield             ff  2  0 3b 2c 60  0  1  0  0 80  0  0  9  0  0 29  0 65 47  0  0  0  0 24 3b 38  0  0  0  0  0  0  0  0  0 6c  0  7 2c 20  0  0  0
  d938  1399138    item_b2_tower_shield             ff  2  0 3d 2c 60  0  1  0  0 80  0  0  9  0  0 28  0 62 49  0  0  0  0 25 3c 36  0  0  0  0  0  0  0  0  0 6b  0  7 2e 1e  0  0  0
  d964  1399164    item_b3_tower_shield_of_honor    ff  2  0 44 2c 60  0  1  0  0 80  0  0  9  0  0 41  0 6a 4c  0  0  0  0 28 38 33  0  0  0  0  0 a1  0  0  0 6b  0  7 2f  0  0  0  0
  d990  1399190    item_b4_harden_tower_shield      ff  2  0 47 2d 61  0  1  0  0 80  0  0  9  0  0 2c  0 8f 4e  0  0  0  0 22 39 32  0  0  0  0  0  0  0  0  0 88  0  7 33  9  0  0  0
  d9bc  13991bc    item_b5_tower_shield_of_protect  ff  2  0 43 2d 61  0  1  0  0 80  0  0  9  0  0 2a  0 68 4c  0  0  0  0 29 3e 3b  0 28  0  0  0  0  0  b dc 87  0  7 2e 25  0  0  0
  d9e8  13991e8    item_b6_caustic_tower_shield     ff  2  0 43 2d 61  0  1  0  0 80  0  0  9  0  0 2a  0 66 4b  0  0  0  0 29 3e 3c  0 24  0  0  0  0  0  c d3 87  0  7 2e  d  0  0  0
  da14  1399214    item_b7_tower_shield_of_balance  ff  2  0 51 2e 62  0  1  0  0 80  0  0  9  0  0 2e  0 6c 62  0  0  0  0 2b 41 3f  d 1c 10  0  0 71  0  b 86 5c  0  7 32 17  0  0  0
  da40  1399240    item_b8_tower_shield_of_resist   ff  2  0 4f 2e 62  0  1  0  0 80  0  0  9  0  0 27  0 5d 44  0  0  0 14 2e 6e 41  0  0  0  0  0  0  0  e c8 5c  0  7 30 28  0  0  0
  da6c  139926c    item_b9_gothic_shield            ff  2  0 39 2f 63  0  1  0  0 80  0  0  6  0  0 23  0 55 3a  0  0  0  0 2c 6c 47  0  0  0  0  0  0  0  0  0 66  0  7 35 13  0  0  0
  da98  1399298    item_ba_harden_gothic_shield     ff  2  0 48 2f 63  0  1  0  0 80  0  0  6  0  0 25  0 81 3f  0  0  0  0 28 67 43  0  0  0  0  0  0  0  0  0 65  0  7 3c 2c  0  0  0
  dac4  13992c4    item_bb_gothic_shield            ff  2  0 3f 30 64  0  1  0  0 c0 ff  0  7  0  0 22  0 53 3c  0  0  0  0 2a 64 46  0  0  0  0  0  0  0  0  0 74  0  7 37  6  0  0  0
  daf0  13992f0    item_bc_gothic_shield_of_resist  ff  2  0 52 30 64  0  1  0  0 c0 ff  0  7  0  0 1d  0 50 37  0  0  0 20 33 8e 53  0  0  0  0  0  0  0  a fa 76  0  7 3a  9  0  0  0
  db1c  139931c    item_bd_gothic_shield_of_honor   ff  2  0 50 31 65  0  1  0  0 e0 ff  0  7  0  0 38  0 56 3d  0  0  0  0 27 67 45  0  0  0  0  0 c1  0  0  0 52  0  7 35  c  0  0  0
  db48  1399348    item_be_gothic_shield_of_balance ff  2  0 4d 31 65  0  1  0  0 e0 ff  0  7  0  0 29  0 58 5f  0  0  0  0 29 6f 49 20 15  f  0  0 41  0  c af 53  0  7 32 1c  0  0  0
  db74  1399374    item_bf_master_gothic_shield     ff  2  0 67 32 66  0  1  0  0 60  0 80  5  0  0 20  0 97 66  0  0  0  0 24 2e 3d  0  0  0  0  0 e6 a7  0  0 76  0  7 55  3  0  0  0
  dba0  13993a0    item_c0_gothic_shield_of_power   ff  2  0 63 33 92  0  1  0  0 40  0  0  7  0  0 3d  0 5e 4c  0  0  0  0 39 73 54  0  0  0  0  0 f1 f2  0  0 93  0  7 40 3c  0  0  0
  dbcc  13993cc    item_c1_gothic_shield_of_rage    ff  2  0 50 34 93  0  0  0  0 80  0  0  4  0  0 27  0 1c 1c  0  0  0 14 30 47 35  0  0  0  0  0 43  0  0  0 30  0  7 17  7  0  0  0
  dbf8  13993f8    item_c2_shinning_gothic_shield   ff  2  0 59 35 94  0  1  0  0 60  0  0  4  0  0 33  0 66 48  0  0  0  e 3f 7f 55  0  0 28  0  0 24  0  d c7  8  0  7  f  a  0  0  0
  dc24  1399424    item_c3_holy_gothic_shield       ff  2  0 61 36 95  0  0  0  0 e0  0  0  4  0  0 12  0 21 25  0  0  0 1c 51 96 65 30 2e 33  0  0 14  0  e e6 15  0  7 12 10  0  0  0
  dc50  1399450    item_c4_summoner_ring_of_fire    ff  2  0 26 46 67  0  0  0  0 60  0  0  3  0  0  0  0  0  0  0  0  0  b  8  0  0 4a  0  0  0  0  0  0  9 63  0  0  4 12 12  0  0  0
  dc7c  139947c    item_c5_summoner_ring_of_fire    ff  2  0 33 46 67  0  0  0  0 60  0  0  3  0  0  0  0  0  0  0 20  0  e  a  0  0 33  0  0  0  0  0  0  9 83  0  0  4  a  a  0  0  0
  dca8  13994a8    item_c6_ring_of_fire_resist      ff  2  0 3b 46 6d  0  0  0  0 60  0  0  3  0  0  0  0  0  0  0  0  0 14  d 22  0 5c  0  0  0  0  0  0  9 7c  0  0  4 17 14  0  0  0
  dcd4  13994d4    item_c7_priest_ring_of_fire      ff  2  0 47 46 6d  0  0  0  0 60  0  0  3  0  0  0  0  0  0  0  0  0 18 12 14 17 44  0  0  0  0 85  0  9 b1  0  0  4  f  d  0  0  0
  dd00  1399500    item_c8_sorcerer_ring_of_fire    ff  2  0 50 46 6d  0  0  0  0 60  0  0  3  0  0  0  0  0  0  0  0  0 1a 15  0  0 75 22  c  0  0 22 13  9 d4  0  0  4  c  4  0  0  0
  dd2c  139952c    item_c9_summoner_ring_of_frost   ff  2  0 26 46 68  0  0  0  0 60  0  0  3  0  0  0 1a  0  0  0  0  0  a  9  0  0 29  0  0  0  0  0  0  a 5c  0  0  4  c  b  0  0  0
  dd58  1399558    item_ca_summoner_ring_of_frost   ff  2  0 28 46 68  0  0  0  0 60  0  0  3  0  0  0  0  0  0  0  0  0  c  d  0  0 24  0  0  0  0  0  0  a 74  0  0  4 10  7  0  0  0
  dd84  1399584    item_cb_balance_ring_of_frost    ff  2  0 33 46 6e  0  0  0  0 60  0  0  3  0  0  8  0  0 14  0  0 10  f 13  0  0 39  0  0  0  0 55 77  a 85  0  0  4  a  a  0  0  0
  ddb0  13995b0    item_cc_priest_ring_of_frost     ff  2  0 3a 46 6e  0  0  0  0 60  0  0  3  0  0  0  0  0  0  0  0  0 13 10 13  e 52  0  0  0  0 32  0  a 99  0  0  4  f  a  0  0  0
  dddc  13995dc    item_cd_sorcerer_ring_of_frost   ff  2  0 4e 46 6e  0  0  0  0 60  0  0  3  0  0  0  0  0  0  0  0  0 1e 14  0  0 70  a 12  0  0  0  0  a e7  0  0  4  b  a  0  0  0
  de08  1399608    item_ce_soul_ring                ff  2  0 25 46 69  0  0  0  0 60  0  0  3  0  0  0  0  0  0  0  0  0  d  7  0  0  0  0 45  0  0 31  0  d 7a  0  0  4  7  2  0  0  0
  de34  1399634    item_cf_soul_ring                ff  2  0 33 46 69  0  0  0  0 60  0  0  3  0  0  0  0  0  0  0  0  0 10 10  0  0  0  0 5c  0  0 51  0  d 68  0  0  4  e  2  0  0  0
  de60  1399660    item_d0_holy_ring_of_resist      ff  2  0 3f 46 6f  0  0  0  0 60  0  0  3  0  0  0  0  0  0  0  0  0 15  d 1c  0  0  0 4e  0  0 a1  0  d 9f  0  0  4  a  9  0  0  0
  de8c  139968c    item_d1_holy_ring_of_priest      ff  2  0 43 46 6f  0  0  0  0 60  0  0  3  0  0  0  0  0  0  0  0  0 1a 13 1d 10  0  0 73  0  0 51 c5  d a5  0  0  4  6  6  0  0  0
  deb8  13996b8    item_d2_holy_ring                ff  2  0 4f 46 6f  0  0  0  0 60  0  0  3  0  0  0  0  0  0  0  0  0 1f 14  0  0 2a 11 6d  0  0 71 14  d c1  0  0  4 2b 14  0  0  0
  dee4  13996e4    item_d3_dark_ring                ff  2  0 27 46 6a  0  0  0  0 60  0  0  3  0  0  0  0  0  0  0  0  0  8  e  0  0  0  0 49  0  0 57  0  e 5e  0  0  4  b  8  0  0  0
  df10  1399710    item_d4_dark_ring                ff  2  0 3d 46 6a  0  0  0  0 60  0  0  3  0  0  a  a  0  0  0  0  0 12 12  0  0  0  0 6f  0  0 77  0  e a1  0  0  4 10  f  0  0  0
  df3c  139973c    item_d5_dark_priest_ring         ff  2  0 49 46 70  0  0  0  0 60  0  0  3  0  0  0  0  0  0  f  0  0 17 15 12 1f  0  0 60  0  0 82 45  e 7a  0  0  4 16 13  0  0  0
  df68  1399768    item_d6_dark_sorcerer_ring       ff  2  0 52 46 70  0  0  0  0 60  0  0  3  0  0  0  0  0  0  0  0  0 1a 1b  0  0 4d 47 5b  0  0 24 b7  e 51  0  0  4 1c  4  0  0  0
  df94  1399794    item_d7_ring_of_poison           ff  2  0 27 46 6b  0  0  0  0 60  0  0  3  0  0  0  0  0  0  0  0  0  4  8  0  0  0 3d  0  0  0 36  0  b 46  0  0  4  6  3  0  0  0
  dfc0  13997c0    item_d8_ring_of_poison           ff  2  0 32 46 6b  0  0  0  0 60  0  0  3  0  0  0  0  0  0  0  0  0  7  b  0  0  0 54  0  0  0  0  0  b 83  0  0  4 11  0  0  0  0
  dfec  13997ec    item_d9_ring_of_protect          ff  2  0 3a 46 71  0  0  0  0 60  0  0  3  0  0  7  0  0  0  0  0  0  d  e 1d 1d  0 34  0  0  0 a5  0  b c1  0  0  4  c  b  0  0  0
  e018  1399818    item_da_sorcerer_ring_of_poison  ff  2  0 43 46 71  0  0  0  0 60  0  0  3  0  0  0  0  0  0  0  0  0 12 13  0  0 40 74 1d  0  0 b6  0  b d7  0  0  4  f  8  0  0  0
  e044  1399844    item_db_caustic_ring             ff  2  0 29 46 6c  0  0  0  0 60  0  0  3  0  0  0  0  0  0  0  0  0  5  6  0  0  0 4e  0  0  0  0  0  c 4a  0  0  4 15 12  0  0  0
  e070  1399870    item_dc_caustic_ring             ff  2  0 25 46 6c  0  0  0  0 60  0  0  3  0  0  0  0  0  0  0  0  0  5  b  0  0  0 5a  0  0  0  0  0  c 66  0  0  4  3  2  0  0  0
  e09c  139989c    item_dd_caustic_priest_ring      ff  2  0 3a 46 72  0  0  0  0 60  0  0  3  0  0  0  0  0  0  0  0  0  e  e 27 1a  0 40  0  0  0 13 a5  c 42  0  0  4  8  8  0  0  0
  e0c8  13998c8    item_de_caustic_sorcerer_ring    ff  2  0 47 46 72 fb  0  0  0 60  0  0  3  0  0  0  0  0  0  0  0  0 10 11  0  0 2e 69  e  0  0  0  0  c bd  0  0  4 16  f  0  0  0
  e0f4  13998f4    item_df_ring_of_desire           ff  2  0 4f 46 73  0  0  0  0 60  0  0  3  0  0  0  0  0  0  0  0  0  0  0  0  0 33 53 31  0  0  0  0  b fb  0  0  4 10  d  0  0  0
  e120  1399920    item_e0_ring_of_ice              ff  2  0 52 46 73  0  0  0  0 60  0  0  3  0  0  0  0  0  0  0  0  0  0  0  0  0 55 2f 31  0  0  0  0  a f8  0  0  4 19  4  0  0  0
  e14c  139994c    item_e1_ring_of_dark_souls       ff  2  0 4d 46 74  0  0  0  0 60  0  0  3  0  0  0  0  0  0  0  0  0  0  0  0  0 31 33 50  0  0  0  0  e fe  0  0  4  d  8  0  0  0
  e178  1399978    item_e2_black_ring               ff  2  0 58 46 74  0  0  0  0 60  0  0  3  0  0  f 21  0  0  0  0  0  0  0  0  0  0  0  0  0  0 53 24  0  0  0  0  4 1f 1e  0  0  0
  e1a4  13999a4    item_e3_ring_of_seal             ff  2  0 59 46 75  0  0  0  0 60  0  0  3  0  0  c 1e  0  0 1e 1c 1b 1f 1f 1d 1d 78 7a 6c  0  0 18  0  0  0  0  0  4 18 11  0  0  0
  e1d0  13999d0    item_e4_ring_of_dead_spirit      ff  2  0 65 46 75  0  0  0  0 60  0  0  3  0  0  0  0  0  0  0  0  0 18 12  0  0 6a 66 65  0  0 f1 f2  e c8  0  0  4 2a 26  0  0  0
  e1fc  13999fc    item_e5_ring_of_rage             ff  2  0 63 46 76  0  0  0  0 60  0  0  3  0  0  0  0  0  0 1f 1d 22  9  d  0  c  0  0 14  0  0 33  0  0  0  0  0  4  3  1  0  0  0
  e228  1399a28    item_e6_ring_of_drain            ff  2  0 62 46 77  0  0  0  0 60  0  0  3  0  0  0  0  0  0  0  0  0 20 14 14  0  0  0 64  0  0 14 a6  7  a  0  0  4  3  3  0  0  0
  e254  1399a54    item_e7_bracelet_of_resist       ff  2  0  0 47 79  0  0  0  0 a0  0  0  4  0  0  0 18  0  0  c  b  5  0  0 35 19  0  0  0  0  0  0  0  0  0  7  0  8  0  0  0  0  0
  e280  1399a80    item_e8_bracelet_of_balance      ff  2  0  0 47 79  0  0  0  0 a0  0  0  4  0  0  0 15  0 21  9  6  a  0  0 15 12  0  0  0  0  0  0  0  0  0  8  0  8  0  0  0  0  0
  e2ac  1399aac    item_e9_bracelet_of_movement     ff  2  0  0 47 79  0  0  0  0 a0  0  0  4  0  0  0 30  0  0 17  9  8  0  0 11  f  0  0  0  0  0  0  0  0  0  6  0  8  0  0  0  0  0
  e2d8  1399ad8    item_ea_bracelet_of_composure    ff  2  0  0 47 7a  0  0  0  0 a0  0  0  4  0  0  0 17  0  0 11 13  7  0 27 16 18  0  0  0  0  0  0  0  0  0  7  0  8  0  0  0  0  0
  e304  1399b04    item_eb_bracelet_of_curing       ff  2  0  0 47 7a  0  0  0  0 a0  0  0  4  0  0  0 16  0  0 10  6  3  0  0 14 38  0  0  0  0  0  0  0  0  0  9  0  8  0  0  0  0  0
  e330  1399b30    item_ec_bracelet_of_recovery     ff  2  0  0 47 7a  0  0  0  0 a0  0  0  4  0  0  0 13  0  0  7  d  3  0  0 10 17  0  0  0  0  0 a5  0  0  0  7  0  8  0  0  0  0  0
  e35c  1399b5c    item_ed_mind_bracelet            ff  2  0  0 47 7b  0  0  0  0 a0  0  0  4  0  0  0 15  0  0 12  5  2 1b  0 17 1c  0  0  0  0  0  0  0  0  0  4  0  8  0  0  0  0  0
  e388  1399b88    item_ee_mighty_ring              ff  2  0  0 47 7b  0  0  0  0 a0  0  0  4  0  0  0  e  0  0 1f 1c 11  0  0 12 10  b  c  8  0  0  0  0  0  0  4  0  8  0  0  0  0  0
  e3b4  1399bb4    item_ef_deadly_bracelet          ff  2  0  0 47 7b  0  0  0  0 a0  0  0  4  0  0  0 1b  0  0  c  7  d  0  0  e  9  0  0  0  0  0 13  0  0  0  3  0  8  0  0  0  0  0
  e3e0  1399be0    item_f0_guardian_bracelet        ff  2  0  0 47 7c  0  0  0  0 a0  0  0  4  0  0  f  f  b  8 12  d  7  0  0 27 23  0  0  0  0  0  0  0  0  0  a  0  8  0  0  0  0  0
  e40c  1399c0c    item_f1_sorcerer_bracelet        ff  2  0  0 47 7c  0  0  0  0 a0  0  0  4  0  0  0  8  0  0  c  a  6  b  0 17 19 1e 1d 21  0  0  0  0  0  0  b  0  8  0  0  0  0  0
  e438  1399c38    item_f2_priest_bracelet          ff  2  0  0 47 7c  0  0  0  0 a0  0  0  4  0  0  0  c  0  0 10  f  3  d  f 2f 2c  0  0  0  0  0  0  0  0  0  b  0  8  0  0  0  0  0
  e464  1399c64    item_f3_bracelet_of_movement     ff  2  a  0 47 7d  0  0  0  0 a0  0  0  4  0  0  0 39  0  0 1d  e  b  0  0  f 12  0  0  0  0  0  0  0  0  0 12  0  8  0  0  0  0  0
  e490  1399c90    item_f4_bracelet_of_composure    ff  2  0  0 47 7d  0  0  0  0 a0  0  0  4  0  0  0 15  0  0 14 17  9  0 3f 15 17  0  0  0  0  0  0  0  0  0 11  0  8  0  0  0  0  0
  e4bc  1399cbc    item_f5_deadly_bracelet          ff  2  0  0 47 7e  0  0  0  0 a0  0  0  4  0  0  0 21  0  0 17  f 16  0  0 13 15  0  0  0  0  0 23  0  0  0  c  0  8  0  0  0  0  0
  e4e8  1399ce8    item_f6_harden_bracelet          ff  2  0  0 47 7e  0  0  0  0 a0  0  0  4  0  0  0  8 26 13 10 20  6  0  0 18 11  0  0  0  0  0  0  0  0  0  c  0  8  0  0  0  0  0
  e514  1399d14    item_f7_priest_bracelet          ff  2  0  0 47 7f  0  0  0  0 a0  0  0  4  0  0 19 1c  d 15 24 19  c  0  0 29 1f  0  0  0  0  0 71 14  d 55  e  0  8  0  0  0  0  0
  e540  1399d40    item_f8_holy_bracelet            ff  2  0  0 47 7f  0  0  0  0 a0  0  0  4  0  0  0 2b  0  c 18  c 28 17 25 22 25  0  0  0  0  0 24 e7  e a2  d  0  8  0  0  0  0  0
  e56c  1399d6c    item_f9_king_bracelet            ff  2  0  0 47 80  0  0  0  0 a0  0  0  4  0  0  0 2c  0  0 15 3b  f  0  0 10  e  0  0  0  0  0 23 c6  0  0 19  0  8  0  0  0  0  0
  e598  1399d98    item_fa_moon_bracelet            ff  2  0  0 47 80  0  0  0  0 a0  0  0  4  0  0  d 21  0  0 3d 17  c  0 17 1f 21  0  0 11  0  0 81 82  b e7 18  0  8  0  0  0  0  0
  e5c4  1399dc4    item_fb_magical_amulet           ff  2  0  0 48 83  0  1  0  0 60  0  0  4  0  0 20  0  0  0  0  0  0 21 24 1f 2a  0  0  0  0  0  0  0  b 23  0  0  5  0  0  0  0  0
  e5f0  1399df0    item_fc_amulet_of_movement       ff  2  0  0 48 83  0  1  0  0 60  0  0  4  0  0  0 1d  0  0  0  0 20 1d 1b 1e 23  0  0  0  0  0  0  0  c 2a  0  0  5  0  0  0  0  0
  e61c  1399e1c    item_fd_amulet_of_guardian       ff  2  0  0 48 84  0  1  0  0 60  0  0  4  0  0  0  0  c 1e  0  0  0 1a 19 58 51  0  0  0  0  0  0  0  9 49  0  0  5  0  0  0  0  0
  e648  1399e48    item_fe_deadly_amulet            ff  2  0  0 48 84  0  1  0  0 60  0  0  4  0  0  0  0  0  0  0  0  0 19 16 18 1b  0  0  0  0  0 23  0  0  0  0  0  5  0  0  0  0  0
  e674  1399e74    item_ff_amulet_of_composure      ff  2  0  0 48 85  0  1  0  0 60  0  0  4  0  0  0  0  0  0  0  0  0 29 53 39 3d  8  c  9  0  0  0  0  0  0  0  0  5  0  0  0  0  0
  e6a0  1399ea0    item_100_amulet_of_curing        ff  2  0  0 48 85  0  1  0  0 60  0  0  4  0  0  0  0  0  0  0  0  0 34 35 35 7e  c  a  f  0  0 41  0  0  0  0  0  5  0  0  0  0  0
  e6cc  1399ecc    item_101_amulet_of_resist        ff  2  0  0 48 86  0  1  0  0 60  0  0  4  0  0  0  0  0  0  0  0  0 36 2e 69 54  0  0  0  0  0  0  0  c 96  0  0  5  0  0  0  0  0
  e6f8  1399ef8    item_102_mind_amulet             ff  2  0  0 48 86  0  1  0  0 60  0  0  4  0  0  0  0  0  0  0  0  0 51 37 29 48  0  0  0  0  0  0  0  b ac  0  0  5  0  0  0  0  0
  e724  1399f24    item_103_sorcerer_amulet         ff  2  0  0 48 86  0  1  0  0 60  0  0  4  0  0  0  0  0  0  0  0  0 44 3d 22 2f 26 29 2f  0  0 c7  0  e 8f  0  0  5  0  0  0  0  0
  e750  1399f50    item_104_priest_amulet           ff  2  0  0 48 86  0  1  0  0 60  0  0  4  0  0  0  0  0  0  0  0  0 41 3d 48 67  0  0  0  0  0 81 82  d b8  0  0  5  0  0  0  0  0
  e77c  1399f7c    item_105_amulet_of_balance       ff  2  0  0 48 87  0  1  0  0 60  0  0  4  0  0  0  0  6 5f  0 30  0 23 20 24 38  0  0  0  0  0  0  0  c f7  0  0  5  0  0  0  0  0
  e7a8  1399fa8    item_106_amulet_of_recovery      ff  2  0  0 48 87  0  1  0  0 60  0  0  4  0  0  0  0  0  0  0  0  0 3d 2d 33 79  0  0  0  0  0 f5  0  0  0  0  0  5  0  0  0  0  0
  e7d4  1399fd4    item_107_star_amulet             ff  2  0  0 48 88  0  1  0  0 60  0  0  4  0  0  0 14  0  0 2f 27 2b  0  0  0  0  0  0  0  0  0 13 24  9 da  0  0  5  0  0  0  0  0
  e800  139a000    item_108_amulet_of_winter        ff  2  0  0 48 88  0  1  0  0 60  0  0  4  0  0  0  0  0  0  0  0  0 46 55 65 84  0  0  0  0  0 56 57  a fc  0  0  5  0  0  0  0  0
  e82c  139a02c    item_109_endless_amulet          ff  2  0  0 48 89  0  1  0  0 60  0  0  4  0  0 17 15 13 1c 1a 18 1d 19 1c 16 1a 12 19 15  0  0 61 62  4  1  0  0  5  0  0  0  0  0
  e858  139a058    item_10a_cune                    ff  2  0  0 4b a0  0  1  0  0 40  0  0  4  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0 14  0  0  0  0  0
  e884  139a084    item_10b_blank_item_1            ff  8  0  0 ff ff  0  0  0  0  0  0  0  4  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0 ff  0  0  0  0  0
  e8b0  139a0b0    item_10c_torch                   ff  2  1  0 4d a8  0  1  0  0 80  0 80  5  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0 14  0  0  0  0  0
  e8dc  139a0dc    item_10d_lamp                    ff  2  0  0 4e a9  0  1  0  0 80  0 80  5  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0 14  0  0  0  0  0
  e908  139a108    item_10e_sacred_feather          ff  2  1  0 4f a1  0  1  0  0 80  0  0  4  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0 14  0  0  0  0  0
  e934  139a134    item_10f_blank_item_2            ff  8  0  0 ff ff  0  0  0  0  0  0  0  4  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0 ff  0  0  0  0  0
  e960  139a160    item_110_fiery_key               ff  2  0  0 51 b0  0  3  0  0 70  0  0  4  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0 1e  0  0  0  0  0
  e98c  139a18c    item_111_kings_key               ff  2  0  0 52 b1  0  3  0  0 60  0  0  3  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0 1e  0  0  0  0  0
  e9b8  139a1b8    item_112_key_of_knowledge        ff  2  0  0 53 b2  0  3  0  0 70  0 80  3  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0 1e  0  0  0  0  0
  e9e4  139a1e4    item_113_beast_key               ff  2  a  0 54 b3  0  3  0  0 60  0  0  3  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0 14  0  0  0  0  0
  ea10  139a210    item_114_floodgate_key           ff  2  0  0 55 b4  0  0  0  0 c0  0  0  3  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0 1e  0  0  0  0  0
  ea3c  139a23c    item_115_mermaid_key             ff  2  0  0 56 b5  0  0  0  0 c0  0  0  4  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0 1e  0  0  0  0  0
  ea68  139a268    item_116_key_of_delusion         ff  2  0  0 57 a2  0  3  0  0 60  0  0  3  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0 1e  0  0  0  0  0
  ea94  139a294    item_117_brass_key               ff  2  0  0 58 a3  0  3  0  0 60  0  0  3  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0 1e  0  0  0  0  0
  eac0  139a2c0    item_118_iron_key                ff  2  0  0 59 a4  0  3  0  0 60  0  0  3  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0 1e  0  0  0  0  0
  eaec  139a2ec    item_119_blank_item_3            ff  8  0  0 ff ff  0  0  0  0  0  0  0  4  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0 ff  0  0  0  0  0
  eb18  139a318    item_11a_blank_item_4            ff  8  0  0 ff ff  0  0  0  0  0  0  0  4  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0 ff  0  0  0  0  0
  eb44  139a344    item_11b_blank_item_5            ff  8  0  0 ff ff  0  0  0  0  0  0  0  4  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0 ff  0  0  0  0  0
  eb70  139a370    item_11c_healing_potion          ff  2  1  0 5d a7  0  0  0  0 e0  0  0  3  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0 14  0  0  0  0  0
  eb9c  139a39c    item_11d_magic_potion            ff  2  1  0 5e ad  0  0  0  0 e0  0  0  3  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0 14  0  0  0  0  0
  ebc8  139a3c8    item_11e_anti_venom              ff  2  1  0 5f ab  0  0  0  0  0  1  0  4  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0 40  0  0  0  0  0  0  0 14  0  0  0  0  0
  ebf4  139a3f4    item_11f_anti_paralytic          ff  2  0  0 60 ac  0  0  0  0  0  1  0  4  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0 40  0  0  0  0  0  0  0 14  0  0  0  0  0
  ec20  139a420    item_120_divine_symbol           ff  2  0  0 61 aa  0  3  0  0 60  0  0  3  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0 14  0  0  0  0  0
  ec4c  139a44c    item_121_blank_item_5            ff  8  0  0 ff ff  0  0  0  0  0  0  0  4  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0 ff  0  0  0  0  0
  ec78  139a478    item_122_evil_eye                ff  2  0  0 63 c2  0  1  0  0 80  0  0  4  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0 14  0  0  0  0  0
  eca4  139a4a4    item_123_fire_world_stone        ff  2  0  0 64 bc  0  0  0  0  0  1  0  4  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0 40  0  0  0  0  0  0  0 14  0  0  0  0  0
  ecd0  139a4d0    item_124_poison_vaccine          ff  2  0  0 65 bd  0  0  0  0  0  1  0  4  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0 14  0  0  0  0  0
  ecfc  139a4fc    item_125_dust_of_rage            ff  2  0  0 66 be  0  0  0  0  0  1  0  4  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0 14  0  0  0  0  0
  ed28  139a528    item_126_bottle_of_light         ff  2  0  0 67 c3  0  0  0  0  0  1  0  4  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0 14  0  0  0  0  0
  ed54  139a554    item_127_acid_vaccine            ff  2  0  0 68 c4  0  0  0  0  0  1  0  4  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0 14  0  0  0  0  0
  ed80  139a580    item_128_spirit_book             ff  2  0  0 69 af  0  1  0  0 60  0  0  4  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0 14  0  0  0  0  0
  edac  139a5ac    item_129_sealed_sword_stone      ff  2  0  0 6a b6 fe  1  0  0 60  0  0  4  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0 14  0  0  0  0  0
  edd8  139a5d8    item_12a_young_dragon_gem        ff  2  0  0 6b b7  0  1  0  0 60  0  0  4  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0 1e  0  0  0  0  0
  ee04  139a604    item_12b_pitcher_of_nadya        ff  2  0  0 6c b8  0  0  0  0  0  1  0  4  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0 14  0  0  0  0  0
  ee30  139a630    item_12c_pitcher_of_nadya_hp     ff  2  0  0 6d b9  0  0  0  0  0  1  0  4  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0 14  0  0  0  0  0
  ee5c  139a65c    item_12d_pitcher_of_nadya_mp     ff  2  0  0 6e ba  0  0  0  0  0  1  0  4  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0 14  0  0  0  0  0
  ee88  139a688    item_12e_dorados_ashes           ff  2  3  0 6f bb  0  0  0  0 80  0  0  4  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0 14  0  0  0  0  0
  eeb4  139a6b4    item_12f_spirit_key              ff  2  0  0 70 c5  0  1  0  0 40  0  0  2  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0 14  0  0  0  0  0
  eee0  139a6e0    item_130_blue_crystal            ff  2  0  0 71 c6  0  0  0  0 a0  0  0  4  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0 14  0  0  0  0  0
  ef0c  139a70c    item_131_flaming_key             ff  2  0  0 72 c7  0  1  0  0 50  0 80  2  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0 1e  0  0  0  0  0
  ef38  139a738    item_132_blank_item_6            ff  8  0  0 ff ff  0  0  0  0  0  0  0  4  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0 ff  0  0  0  0  0
  ef64  139a764    item_133_blank_item_7            ff  8  0  0 ff ff  0  0  0  0  0  0  0  4  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0 ff  0  0  0  0  0
  ef90  139a790    item_134_blank_item_8            ff  8  0  0 ff ff  0  0  0  0  0  0  0  4  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0 ff  0  0  0  0  0
  efbc  139a7bc    item_135_blank_item_9            ff  8  0  0 ff ff  0  0  0  0  0  0  0  4  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0 ff  0  0  0  0  0
  efe8  139a7e8    item_136_soul_pod_5_sp           ff  2  0  0 78 ae  0  0  0  0 e0  0  0  4  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0 14  0  0  0  0  0
  f014  139a814    item_137_soul_pod_53_sp          ff  2  0  0 78 ae  0  0  0  0 e0  0  0  4  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0 14  0  0  0  0  0
  f040  139a840    item_138_soul_pod_29_sp          ff  2  5  0 78 ae  0  0  0  0 e0  0  0  4  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0 14  0  0  0  0  0
  f06c  139a86c    item_139_soul_pod_14_sp          ff  2  3  0 78 ae  0  0  0  0 e0  0  0  4  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0 14  0  0  0  0  0`;

  global.ITEM_DATA_PART_FILE_INDEX = 481;
  global.ITEM_DATA_START_IN_FILE = 0xba90;
  global.ITEM_DATA_PART_FILE_OFFSET_START = 0x138b800;
  global.ITEM_DATA_START_OFFSET = 0x1397290;
  global.ITEM_DATA_ENTRY_SIZE = 0x2C; // 44

  function setAttributeValue(value) {
    this.set(value * 0x10 + this.getAttributeType());
  }
  function setAttributeType(value) {
    this.set(this.getAttributeValue() * 0x10 + value);
  }
  function getAttributeValue() {
    return Math.floor(this.get()/0x10);
  }
  function getAttributeType() {
    return this.get()%0x10;
  }
  function getReadableAttributeValue() {
    switch(this.getAttributeType()) {
      case ATTR_LIGHTING: return ATTR_LIGHTING_BY_ID[this.getAttributeValue()];
      case ATTR_CRITICAL: return ATTR_CRITICAL_BY_ID[this.getAttributeValue()];
      default: return "0x"+this.getAttributeValue().toString(16);
    }
  }
  function getReadableAttributeType() {
    return ATTR_BY_ID[this.getAttributeType()];
  }

  class ItemData  {
    constructor(itemIndex, lineSplit, line) {
      this.itemIndex = itemIndex;
      this.name = lineSplit[2];
      this.line = line;
      this.absoluteIndex = ITEM_DATA_START_OFFSET
      + itemIndex * ITEM_DATA_ENTRY_SIZE;
      this.offset_in_file = this.absoluteIndex - ITEM_DATA_PART_FILE_OFFSET_START;
    }

    setup(FDAT) {
      this.map_file = FDAT.files[ITEM_DATA_PART_FILE_INDEX];

      this.originalBin = this.map_file.bin.slice(this.offset_in_file, this.offset_in_file + ITEM_DATA_ENTRY_SIZE);

      // Identifying 
      //0x03 
      //0x06 status?
      //0x07-0x0d
      //
      //0x20-0x23

      //0 ff
      //1 2=valid 8=unused
      //2 price in shop
      this.price = new UInt8(this.map_file.bin, this.offset_in_file + 0x02);
      //3 unknown
      //4 5 image and model
      this.model = new UInt8(this.map_file.bin, this.offset_in_file + 0x04);
      this.image = new UInt8(this.map_file.bin, this.offset_in_file + 0x05);
      //6 what? status?

      //7-0d not serious data

      //0e,0f zeros

      this.str = new UInt8(this.map_file.bin, this.offset_in_file + 0x10);
      this.spd = new UInt8(this.map_file.bin, this.offset_in_file + 0x11);
      this.def = new UInt8(this.map_file.bin, this.offset_in_file + 0x12);
      this.bal = new UInt8(this.map_file.bin, this.offset_in_file + 0x13);
      this.sla = new UInt8(this.map_file.bin, this.offset_in_file + 0x14);
      this.smh = new UInt8(this.map_file.bin, this.offset_in_file + 0x15);
      this.pir = new UInt8(this.map_file.bin, this.offset_in_file + 0x16);
      this.spr = new UInt8(this.map_file.bin, this.offset_in_file + 0x17);
      this.foc = new UInt8(this.map_file.bin, this.offset_in_file + 0x18);
      this.ham = new UInt8(this.map_file.bin, this.offset_in_file + 0x19);
      this.pur = new UInt8(this.map_file.bin, this.offset_in_file + 0x1a);
      this.par = new UInt8(this.map_file.bin, this.offset_in_file + 0x1b);
      this.mel = new UInt8(this.map_file.bin, this.offset_in_file + 0x1c);
      this.sol = new UInt8(this.map_file.bin, this.offset_in_file + 0x1d);
      this.hp  = new UInt16(this.map_file.bin, this.offset_in_file + 0x1e);


      this.attribute1 = new UInt8(this.map_file.bin, this.offset_in_file + 0x20);
      this.attribute1.setAttributeValue = setAttributeValue;
      this.attribute1.setAttributeType = setAttributeType;
      this.attribute1.getAttributeValue = getAttributeValue;
      this.attribute1.getAttributeType = getAttributeType;
      this.attribute1.getReadableAttributeValue = getReadableAttributeValue;
      this.attribute1.getReadableAttributeType = getReadableAttributeType;
      this.attribute2 = new UInt8(this.map_file.bin, this.offset_in_file + 0x21);
      this.attribute2.setAttributeValue = setAttributeValue;
      this.attribute2.setAttributeType = setAttributeType;
      this.attribute2.getAttributeValue = getAttributeValue;
      this.attribute2.getAttributeType = getAttributeType;
      this.attribute2.getReadableAttributeValue = getReadableAttributeValue;
      this.attribute2.getReadableAttributeType = getReadableAttributeType;
      this.elementalType  = new UInt8(this.map_file.bin, this.offset_in_file + 0x22);
      this.elementalPower = new UInt8(this.map_file.bin, this.offset_in_file + 0x23);

      this.weight  = new UInt16(this.map_file.bin, this.offset_in_file + 0x24);

      this.type     = new UInt8(this.map_file.bin, this.offset_in_file + 0x26);

      // I decided that those are also type key for randomization purposes (0x1e = 30), but in real game data they are regular items(0x14 = 20)
      if (this.itemIndex==item_113_beast_key ||
        this.itemIndex==item_12b_pitcher_of_nadya ||
        this.itemIndex==item_12c_pitcher_of_nadya_hp ||
        this.itemIndex==item_12d_pitcher_of_nadya_mp ||
        this.itemIndex==item_12f_spirit_key ||
        this.itemIndex==item_130_blue_crystal) {
        this.type.set(KEY);
      }

      this.max_dura = new UInt8(this.map_file.bin, this.offset_in_file + 0x27);
      this.dura     = new UInt8(this.map_file.bin, this.offset_in_file + 0x28);
      //29 2a 2b - zeros

      console.log(this.toReadableString());
    }

    score() {
      return Math.ceil(((Number.isInteger(this.str.get())?this.str.get()*6:0)+
      (Number.isInteger(this.spd.get())?this.spd.get():0)+
      (Number.isInteger(this.def.get())?this.def.get():0)+
      (Number.isInteger(this.bal.get())?this.bal.get():0)+
      (Number.isInteger(this.sla.get())?this.sla.get()*2:0)+
      (Number.isInteger(this.smh.get())?this.smh.get()*2:0)+
      (Number.isInteger(this.pir.get())?this.pir.get()*2:0)+
      (Number.isInteger(this.spr.get())?this.spr.get():0)+
      (Number.isInteger(this.foc.get())?this.foc.get():0)+
      (Number.isInteger(this.ham.get())?this.ham.get():0)+
      (Number.isInteger(this.pur.get())?this.pur.get():0)+
      (Number.isInteger(this.par.get())?this.par.get()*2:0)+
      (Number.isInteger(this.mel.get())?this.mel.get()*2:0)+
      (Number.isInteger(this.sol.get())?this.sol.get()*2:0)+
      (Number.isInteger(this.max_dura.get())?this.max_dura.get()*3:0))/100);
    }

    toReadableString() {
      return this.offset_in_file.toString(16).padEnd(6)
      + this.absoluteIndex.toString(16).padEnd(10)
      + " " + this.name.padEnd(32)
      + binToStr(this.map_file.bin.slice(this.offset_in_file, this.offset_in_file + ITEM_DATA_ENTRY_SIZE));
    }

    toString() {
      return "{\"id\":\"" + (this.itemIndex.toString(16) + "\"").padEnd(3) + ", \"name\":\"" + (this.name + "\"").padEnd(32)
      + ", \"str\":" + (this.str.get() + "").padStart(5)
      + ", \"spd\":" + (this.spd.get() + "").padStart(5)
      + ", \"def\":" + (this.def.get() + "").padStart(5)
      + ", \"bal\":" + (this.bal.get() + "").padStart(5)
      + ", \"sla\":" + (this.sla.get() + "").padStart(5)
      + ", \"smh\":" + (this.smh.get() + "").padStart(5)
      + ", \"pir\":" + (this.pir.get() + "").padStart(5)
      + ", \"spr\":" + (this.spr.get() + "").padStart(5)
      + ", \"foc\":" + (this.foc.get() + "").padStart(5)
      + ", \"ham\":" + (this.ham.get() + "").padStart(5)
      + ", \"pur\":" + (this.pur.get() + "").padStart(5)
      + ", \"par\":" + (this.par.get() + "").padStart(5)
      + ", \"mel\":" + (this.mel.get() + "").padStart(5)
      + ", \"sol\":" + (this.sol.get() + "").padStart(5)
      + ", \"hp\":" + (this.hp.get() + "").padStart(5)
      + ", \"type\":" + ((itemTypeNames[this.type.get()] || this.type.get()) + "").padStart(10)
      + ", \"max_dura\":" + (this.max_dura.get() + "").padStart(5)
      + ", \"dura\":" + (this.dura.get() + "").padStart(5)
      + ", \"weight\":" + (""+ this.weight.get() /*(Math.ceil(this.weight.get()*2.2)/10) 1/10 kg to pounds */).padStart(4)

      + (this.attribute1.get() ? ", \"attribute1\": attribute(" + this.attribute1.getReadableAttributeValue() + "," + this.attribute1.getReadableAttributeType() + ")": "").padEnd(68)
      + (this.attribute2.get() ? ", \"attribute2\": attribute(" + this.attribute2.getReadableAttributeValue() + "," + this.attribute2.getReadableAttributeType() + ")": "").padEnd(68)
      + (this.elementalType.get() ? 
       (", \"elementalType\":" + (ELEMENTS_BY_ID[this.elementalType.get()]?ELEMENTS_BY_ID[this.elementalType.get()]:this.elementalType.get())
        + ", \"elementalPower\":" + this.elementalPower.get()) : "").padEnd(70)
      + ", \"bin\":\"" + binToStr(this.originalBin) + "\""
      + "}";
    }
  }

  global.itemData = {};
  global.items = [];

  var itemLinesSplit = itemDataString.split("\n");
  for (var i = 0 ; i < itemLinesSplit.length ; i++) {
    var line = itemLinesSplit[i];
    if (line.trim().length==0) {
      continue;
    }
    var lineSplit = line.split(" ").filter(n => n);
    itemData[i] = new ItemData(i, lineSplit, line);
    global.items.push(itemData[i]);
  }

  global.areas = [];
  global.areasByOriginalIndex = [];

  global.CREATURE_SIZE = 0xc0;
  global.CREATURE_COUNT = 16;
  global.ENTITY_STATE_DATA_START = 4 + CREATURE_SIZE * CREATURE_COUNT; // 0xC04

  //0x255800 /*TFILE part file start*/
  global.SPAWN_ABSOLUTE_OFFSET = 0x2C04 /* 2nd sixed mix part */ + 4 /*sized mix part size first uint32*/;
  global.SPAWN_ENTRY_SIZE = 0x18;
  global.SPAWN_ENTRIES_COUNT = 198;

  class Area  {
    constructor(logo_index, name, areaIndexCounter) {
      this.logo_index = logo_index;
  // 0 - empty
  // 1 - RTIM_texture_map_name
      this.tiles_index = logo_index+1; // 42
  // 2 - Maybe_RTIM_texture_for_tile_set > actually the 7th file
  // 3 - MIPS_machine_code_map_script
      this.map_index = logo_index+3; // 44
  // 4 - Maybe_Customized_TMD_file_collisions
  // 5 - Maybe_Customized_TMD_file_tiles
  // 6 - VH_file_ADPCM_audio_PS1
  // 7 - VB_file_ADPCM_audio_PS1
  // 8 - map_database_entity_class_etc
  // 9 - the_tilemap
  // ? - another_customized_TMD_object_models
      this.texture_index = logo_index+6; // 47
  this.name = name;
  this.areaIndexCounter = areaIndexCounter;

    this.index = (this.logo_index - 1)/10;
    global[name] = this;
    areasByOriginalIndex[this.index] = this;
  }

  isBossArea() {
    return this.logo_index == 331
      || this.logo_index == 371
      || this.logo_index == 181
      || this.logo_index == 171
      || this.logo_index == 381
      || this.logo_index == 231;
  }

  setup(FDAT, params) {
    this.tiles_file = FDAT.files[this.tiles_index];
    this.map_file = FDAT.files[this.map_index];
    this.texture_file = FDAT.files[this.texture_index];

    //this.texture_file.processRandomizeAndWriteRTIM(
    //  this.isBossArea() ? params.colorRandomizationBossRooms : params.colorRandomizationGeneral,
    //  params.colorValueFactor,
    //  0.3);

    if (!this.name || !this.map_file || !this.map_file.bin || !this.map_file.bin.length) {
      return;
    }
    console.log("\nSetup Area " + this.name + " in FDAT file index " + this.map_index + " map index " + this.index);
    console.log("\n params " + JSON.stringify(params));

  /*
  0-entity and entity data
  1-spawns (to remove fixed 0x2C04, to take address from address of sized mix [1])
  2-300 entries 0x18 bytes each 
  3-objects
  4-collectables
  5-0x80 entries, size 0x10, all empty
  6-4 bytes entries
  */

  var TILE_START_OFFSET = 0x00;
  this.tiles = [];
  console.log("\nTiles");
  console.log("idx                                                                     x       y       z     rot      tile xyz  ----");

  this.mapTiles = [];

  for (var i = 0; i<TILE_COUNT; i++) {
    var offset_in_file = TILE_START_OFFSET + TILE_SIZE * i;
    var absoluteIndex = this.tiles_file.startOffset + offset_in_file;
    this.tiles.push(new Tile(this.tiles_file.bin, this, offset_in_file, absoluteIndex, i, this.mapTiles));
  }

      //1-spawns - need to setup before creatures, because creature creation will verify if there is some spawn pointinig to it, in this case the creature will be considered forcibly blank because it is unused.
      this.setupSpawns(this, this.map_file);

      //0-entity and entity data
      this.creatures = [];
      console.log("\nCreatures");
      console.log("name      offset_in_file    offset  ---------------------------------------------------------- some creature data ---------------------------------------------------------------- str spd def bal sla smh pir spr foc ham pur par mel sol  ----hp ---idx0 ---idx1 ---idx2 ---idx3 ---idx4 ---idx5 ---idx6 ---idx7 ---idx8 ---idx9 --idx10 --idx11 --idx12 --idx13 --idx14 --idx15 --idx16 --idx17 --idx18 --idx19 --idx20 --idx21  --stateOffset0  --stateOffset1  --stateOffset2  --stateOffset3  --stateOffset4  --stateOffset5  --stateOffset6  --stateOffset7  --stateOffset8  --stateOffset9  -stateOffset10  -stateOffset11  -stateOffset12  -stateOffset13  -stateOffset14  -stateOffset15  -stateOffset16  -stateOffset17  -stateOffset18  -stateOffset19  -stateOffset20  -stateOffset21  -stateOffset22  -stateOffset23");
      nextExpectedEntityDataAddress = ENTITY_STATE_DATA_START;
      for (var i = 0; i<CREATURE_COUNT; i++) {
        var offset_in_file = 4 + CREATURE_SIZE * i;
        var absoluteIndex = this.map_file.startOffset + offset_in_file;
        this.creatures.push(new Creature(this.map_file.bin, this, offset_in_file, absoluteIndex, i));
      }

      console.log("\nSpawns");
      console.log("idx chance name                                                      drop1                                     drop2                                     drop3                                      chance typ  tile drop1 drop2 drop3 mx %1 %2 %2 ---------    x     y     z --");
      this.spawns.forEach(spawn => {
        console.log(spawn.toReadableString());
      });

      //2-300 entries 0x18 bytes each     
      

      //3-objects
      var OBJECTS_START_OFFSET = this.map_file.sizedMixStarts[3] - 0x10;//0x5ae4;
      this.objects = [];
        console.log("\nObjects ");
      console.log("idx  in_file offset type     ");
      for (var i = 0; i<OBJECTS_COUNT; i++) {
        var offset_in_file = 16 + OBJECTS_START_OFFSET + OBJECTS_SIZE * i;
        var absoluteIndex = this.map_file.startOffset + offset_in_file;
        this.objects.push(new ScenarioObject(this.map_file.bin, this, offset_in_file, absoluteIndex, i, this.mapTiles));
      }

      //4-collectables
      // to do to fix this workaround 0x10
      var COLLECTABLE_START_OFFSET = this.map_file.sizedMixStarts[4] - 0x10;//0x7bb4;
      this.collectables = [];
      console.log("\nCollectables");
      console.log("idx  name                          offset_in_file    offset                                                                   type     ------ tile         -----  pos  x       y       z     rot -------------------  tileId");
      for (var i = 0; i<COLLECTABLE_COUNT; i++) {
        var offset_in_file = 16 + COLLECTABLE_START_OFFSET + COLLECTABLE_SIZE * i;
        var absoluteIndex = this.map_file.startOffset + offset_in_file;
        this.collectables.push(new Collectable(this.map_file.bin, this, offset_in_file, absoluteIndex, i));
      }

    }

    draw(mapDraw, mapSummary) {
      mapSummary.push('<span style="background:#f0f0f0">Item Memory used '+this.usedItemMemory()+'</span>\n');
      var creaturesScore = this.creaturesScore();
      mapSummary.push('<span style="background:#f0f0f0">Creatures score '+creaturesScore+'</span>\n');

      for (var i in this.spawns) {
        this.spawns[i].draw(mapDraw, mapSummary);
      }

      for (var i in this.objects) {
        this.objects[i].draw(mapDraw, mapSummary);
      }

      for (var i in this.collectables) {
        this.collectables[i].draw(mapDraw, mapSummary);
      }
    }

    hasFreeItemMemory() {
      return this.usedItemMemory()<16;
    }

    hasMemoryCrime() {
      return this.usedItemMemory()>16;
    }

    usedItemMemory() {
      let models = new Set();
      for (var i in this.spawns) {
        if (this.spawns[i].chance.isNull()) {
          continue;
        }
        if (!this.spawns[i].drop1.isNull()) {
          models.add(itemData[this.spawns[i].drop1.get()].model.get());
          //console.log("Item Memory count +1 by drop1 - " + this.spawns[i].name());
        }
        if (!this.spawns[i].drop2.isNull()) {
          models.add(itemData[this.spawns[i].drop2.get()].model.get());
          //console.log("Item Memory count +1 by drop2 - " + this.spawns[i].name());
        }
        if (!this.spawns[i].drop3.isNull()) {
          models.add(itemData[this.spawns[i].drop3.get()].model.get());
          //console.log("Item Memory count +1 by drop3 - " + this.spawns[i].name());
        }
      }
      for (var i in this.collectables) {
        if (!this.collectables[i].type.isNull()) {
          models.add(itemData[this.collectables[i].type.get()].model.get());
          //console.log("Item Memory count +1 by collectables - " + itemData[this.collectables[i].type.get()].name);
        }
      }

      return models.size;
    }

    creaturesScore() {
      var scoreSum = 0;
      var count = 0;

      for (var i in this.spawns) {
        var spawn = this.spawns[i];

        var score = spawn.creature().score();
        if (score) {
          scoreSum += score;
          count++;
        }
      }

      var averageScore = count ? Math.round(scoreSum/count) : 0;

      return Math.round(averageScore);
    }

    writeMapImage(createCanvas, folder) {

      var filesFolder = folder + path.sep + 'maps';

      var mapDraw = [];
      this.mapSummary = [];

      this.draw(mapDraw, this.mapSummary);

      const REMOVE_TILE = "REMOVE";

      var zHandling = {
        "shadow_tower_part1": {0:REMOVE_TILE, 1:REMOVE_TILE, 2:0, 4:1, 
          5:REMOVE_TILE, 6: REMOVE_TILE, 7: 3, 8: 4, 
          9: REMOVE_TILE, 10: 6, 11: REMOVE_TILE, 12: REMOVE_TILE, 13: REMOVE_TILE, 14: REMOVE_TILE, 15: REMOVE_TILE, 16: REMOVE_TILE, 17: REMOVE_TILE, 18: REMOVE_TILE, 19: REMOVE_TILE},
          "human_world_cursed_region": {},
          "monster_world_false_eye_area": {1:0},
          "fire_world_phoenix_cave": {0:REMOVE_TILE, 1:REMOVE_TILE, 2:0},
          "human_world_solitary_region": {0:REMOVE_TILE, 1:0, 2:REMOVE_TILE, 3:1},
          "human_world_hidden_region": {},
          "human_world_forgotten_region": {},
          "illusion_world_bewilderment_domain": {0:REMOVE_TILE, 1:0},
          "illusion_world_gloomy_domain": {},
          "water_world_impure_pool_area": {0:REMOVE_TILE, 1:0, 2: REMOVE_TILE, 3: REMOVE_TILE, 4: 1},
          "earth_world_rotting_cavern": {0:REMOVE_TILE, 1:REMOVE_TILE, 2:REMOVE_TILE, 3:REMOVE_TILE, 4:REMOVE_TILE, 5:REMOVE_TILE, 
            6:0},
            "earth_world_quaking_cavern": {},
            "illusion_world_worship_domain": {0:REMOVE_TILE, 1:REMOVE_TILE, 2:0},
            "death_world_lingering_curse_layer": {},
            "earth_world_false_pit_cavern": {},
            "monster_world_screeching_area": {},
            "fire_world_ashen_cavern": {},
            "fire_world_burning_cavern": {},
            "water_world_sunken_river_area": {},
            "death_world_gate_of_the_dead": {},
            "fire_world_molten_cavern": {},
            "death_world_dark_castle_layer": {},
            "death_world_undead_layer": {},
            "earth_world_poisonous_cavern": {},
            "earth_world_stone_cavern": {},
            //"void": {},
            "water_world_watery_labyrinth_area": {},
            "earth_world_hostile_rock_cavern": {},
            "water_world_white_rain_area": {},
            "illusion_world_dream_domain": {},
            "shadow_tower_part2": {},
            "shadow_tower_part3": {}
          }

      // Find lower values
      var lowerX = this.mapTiles.reduce((a, b) => { return {x:Math.min(a.x, b.x)}; }, {x:10000}).x;
      var lowerY = this.mapTiles.reduce((a, b) => { return {y:Math.min(a.y, b.y)}; }, {y:10000}).y;
      var lowerZ = this.mapTiles.reduce((a, b) => { return {z:Math.min(a.z, b.z)}; }, {z:10000}).z;
      var upperX = this.mapTiles.reduce((a, b) => { return {x:Math.max(a.x, b.x)}; }, {x:0}).x;
      var upperY = this.mapTiles.reduce((a, b) => { return {y:Math.max(a.y, b.y)}; }, {y:0}).y;
      var upperZ = this.mapTiles.reduce((a, b) => { return {z:Math.max(a.z, b.z)}; }, {z:0}).z;

      var processTile = tile => {
        tile.originalX = tile.x;
        tile.originalY = tile.y;
        tile.originalZ = tile.z;
        tile.x -= lowerX;
        tile.y -= lowerY;
        tile.z -= lowerZ;
      };

      // Normalize all tiles for the lowest to be on zero
      this.mapTiles.forEach(processTile);
      mapDraw.forEach(processTile);

      var removeBadZTiles = tile => {
        var toInclude = zHandling[this.name][tile.z]!=REMOVE_TILE;
        if (toInclude && zHandling[this.name][tile.z]!=undefined) {
          tile.z = zHandling[this.name][tile.z];
          tile.x += Math.round((tile.z) * (1+upperX-lowerX));
        }
        return toInclude;
      };

      this.mapTiles = this.mapTiles.filter(removeBadZTiles);
      mapDraw = mapDraw.filter(removeBadZTiles);

      var extendedUpperX = this.mapTiles.reduce((a, b) => { return {x:Math.max(a.x, b.x)}; }, {x:0}).x;
      var extendedUpperY = this.mapTiles.reduce((a, b) => { return {y:Math.max(a.y, b.y)}; }, {y:0}).y;

      this.canvasWidth = (extendedUpperX + 6) * DRAW_TILE_SIZE;
      this.canvasHeight = (extendedUpperY + 6) * DRAW_TILE_SIZE;

      if (!global.toNotGenerateImages) {
        const canvas = createCanvas(this.canvasWidth, this.canvasHeight);
        const drawContext = canvas.getContext("2d");

        drawContext.font = "10pt 'Sans'";
        drawContext.textAlign = "left";
        var tileTexts = {};
        for (var i in this.mapTiles) {
          drawContext.fillStyle = this.mapTiles[i].color;
          drawContext.fillRect(
            DRAW_TILE_SIZE * (this.mapTiles[i].x + TILE_SHIFT_X), 
            this.canvasHeight - DRAW_TILE_SIZE * (this.mapTiles[i].y + TILE_SHIFT_Y),
            DRAW_TILE_SIZE-2,
            DRAW_TILE_SIZE-2);
          drawContext.fillText("x="+this.mapTiles[i].originalX.toString(16) + " y="+this.mapTiles[i].originalY.toString(16) + " z="+this.mapTiles[i].originalZ.toString(16), 
            (this.mapTiles[i].x + TILE_SHIFT_X) * DRAW_TILE_SIZE + 2, 
            this.canvasHeight -2 - (this.mapTiles[i].y + TILE_SHIFT_Y) * DRAW_TILE_SIZE);
        }
        for (var i in mapDraw) {
          drawContext.fillStyle = mapDraw[i].color;
          var key = ""+mapDraw[i].x + "-" + mapDraw[i].y;
          tileTexts[key] = tileTexts[key] != undefined ? tileTexts[key] + 1 : 0;
          drawContext.fillText(mapDraw[i].text, 
            (mapDraw[i].x + TILE_SHIFT_X) * DRAW_TILE_SIZE + 2, 
            this.canvasHeight - (mapDraw[i].y + TILE_SHIFT_Y) * DRAW_TILE_SIZE + 11 + (tileTexts[key]) * 11);//((tileTexts[key]+mapDraw[i].x)%5) * 9);
        }
        const buffer = canvas.toBuffer("image/png");
        fs.writeFile(filesFolder + path.sep + this.name + ".png", buffer, function() {});
      }
    }

    toString() {
      var str = "{\"name\":\"" + this.name + "\", \"creatures\":[\n";
      this.creatures.forEach(obj => { if (obj.name.endsWith("door")) return; str += "  " + obj + ",\n"; });
      str+="], \"spawns\":{\n";
      this.spawns.forEach(obj => { if (obj.isBlank) return; str += "  " + obj + ",\n"; });
      str+="}, \"collectables\":{\n";
      this.collectables.forEach(obj => { if (obj.isBlank) return; str += "  "+obj.collectableIndex+":" + obj + ",\n"; });
      str+="}}";
      return str;
    }

    reinjectEntityDataFromCreaturesToFile() {
      var nextEntityDataAddress = 0;
      for (var i in this.creatures) {
        nextEntityDataAddress = this.creatures[i].reinjectEntityDataToFile(nextEntityDataAddress);
      }
    }

    setupSpawns(area, tfile) {
      this.spawns = [];

      for (var i=0;i<SPAWN_ENTRIES_COUNT;i++) {
        var offset = i * SPAWN_ENTRY_SIZE;
        var offset_in_file = SPAWN_ABSOLUTE_OFFSET + offset;
        var entryPos = 0x2C04 /* 2nd sixed mix part */ + 4 /*sized mix part size first uint32*/ + offset;

        this.spawns.push(new Spawn(area, tfile, entryPos, offset_in_file, i));
      }
    }

  }

  function uInt32Array(bin, startOffset, arrayLength) {
    var arr=[];
    for (var i = 0 ; i < arrayLength; i++) {
      arr.push(new UInt32(bin, startOffset + i * 4));
    }
    return arr;
  }

  class UInt8 {
    constructor(bin, index) {
      this.bin = bin;
      this.index = index;
    }

    get() {
      return getUInt8(this.bin, this.index);
    }

    set(value) {
      return setUInt8(this.bin, this.index, value);
    }

    swap(target) {
      var value = this.get();
      this.set(target.get());
      target.set(value);
    }

    null() {
      this.set(0xff);
    }

    isNull() {
      return this.get() == 0xff;
    }

    toString() {
      return this.get().toString(16);
    }
  }

  class Int8 {
    constructor(bin, index) {
      this.bin = bin;
      this.index = index;
    }

    get() {
      return getInt8(this.bin, this.index);
    }

    set(value) {
      return setInt8(this.bin, this.index, value);
    }

    swap(target) {
      var value = this.get();
      this.set(target.get());
      target.set(value);
    }

    toString() {
      return this.get().toString(16);
    }
  }

  class UInt16 {
    constructor(bin, index) {
      this.bin = bin;
      this.index = index;
    }

    get() {
      return getUInt16(this.bin, this.index);
    }

    set(value) {
      return setUInt16(this.bin, this.index, value);
    }

    swap(target) {
      var value = this.get();
      this.set(target.get());
      target.set(value);
    }

    null() {
      this.set(0xffff);
    }

    isNull() {
      return this.get() == 0xffff;
    }

    toString() {
      return this.get().toString(16);
    }
  }

  class UInt32 {
    constructor(bin, index) {
      this.bin = bin;
      this.index = index;
    }

    get() {
      return getUInt32(this.bin, this.index);
    }

    set(value) {
      return setUInt32(this.bin, this.index, value);
    }

    null() {
      this.set(0xffffffff);
    }

    isNull() {
      return this.get() == 0xffffffff;
    }

    toString() {
      return this.get().toString(16);
    }
  }

  const DRAW_TILE_SIZE = 150;
  const TILE_SHIFT_X = 3;
  const TILE_SHIFT_Y = 3;

  const creatureNameByAbsoluteOffset={0x9a804:"dark_spider",0x9a8c4:"shadow_spider",0x9a984:"tongue_imp",0x9ab04:"fat_mole_a",0x9ac84:"tongue_imp",0x9ae04:"dark_spider",0x9aec4:"shadow_spider",0x9af84:"guardian_a",0x130004:"night_howler",0x1300c4:"chirper",0x130184:"lizard_servant",0x130484:"lizard_servant",0x130304:"night_howler",0x1303c4:"master_howler",0x130604:"hermit_crab",0x1306c4:"freak",0x130904:"saurian_warrior_a",0x1309c4:"saurian_warrior_b",0x130a84:"dinogon",0x1c2984:"fire_jinn",0x1c2b04:"jinn_lord",0x1c2bc4:"armored_jinn",0x1c2c84:"fire_jinn",0x255804:"dark_spider",0x2558c4:"acid_slime",0x255984:"blood_slime",0x255c84:"skeleton",0x255e04:"dark_spider",0x255ec4:"demon_bat",0x255f84:"skeleton",0x256104:"demon_bat",0x2561c4:"dark_spider",0x256284:"acid_slime",0x2f0004:"acid_slime",0x2f00c4:"blood_slime",0x2f0184:"parasite",0x2f0304:"acid_slime",0x2f03c4:"blood_slime",0x2f0484:"fanged_worm",0x2f0604:"casket",0x2f06c4:"blood_slime",0x386804:"acid_skull",0x3868c4:"blood_skull",0x386984:"skeleton",0x386b04:"acid_skull",0x386bc4:"blood_skull",0x386c84:"skeleton",0x415804:"gorgoral",0x4158c4:"gargaral",0x415984:"gordoral",0x415b04:"demon_warrior",0x415bc4:"gargaral",0x415c84:"gordoral",0x415e04:"war_demon_1",0x415ec4:"war_demon_2",0x415f84:"rotting_face",0x416104:"death_mage",0x416284:"rotting_face",0x4a3004:"red_puppet",0x4a30c4:"dark_spirits",0x4a3184:"dark_imp",0x4a3304:"dark_spirits",0x4a33c4:"dark_spirits",0x4a3484:"black_imp",0x4a3604:"ring_demon",0x4a36c4:"dark_fairy",0x4a3784:"dark_bishop",0x4a3904:"maristella",0x4a39c4:"deha",0x52f804:"fat_mole_f",0x52fb04:"akryal",0x52f8c4:"horned_slime",0x52f984:"blood_brain",0x52fbc4:"horned_slime",0x52fc84:"dweller",0x52fec4:"dementor",0x52ff84:"dweller",0x530104:"worm_face",0x5301c4:"hatchlin",0x5c4004:"watcher_plant",0x5c40c4:"myconid",0x5c4184:"elder",0x5c4304:"minor_dwarf",0x5c43c4:"dwarfling",0x5c4484:"elder",0x5c4784:"auriel_a", 0x5c4604:"star_serpent",0x5c46c4:"imp",0x5c4904:"barrel_snail",0x5c49c4:"tondrom",0x5c4a84:"elder",0x65a004:"sand_leech_a",0x65a0c4:"blue_flicker",0x65a184:"sand_leech_b",0x65a304:"kiljoy",0x65a3c4:"acid_pod",0x65a604:"torg",0x65a6c4:"cocoon_plant",0x65a784:"cocoon_plant",0x6eb804:"master_knight",0x6eb8c4:"gorthaur",0x6eb984:"fat_mole_d",0x6ebb04:"wildowess",0x6ebc84:"warpoor",0x6ebe04:"fester",0x6ebec4:"cross_breed",0x6ebf84:"warpoor",0x762004:"unknown_e",0x7620c4:"stack_eyes",0x7623c4:"unknown_g",0x762604:"apocrypha",0x7626c4:"descrypha",0x762784:"wizcrypha",0x762904:"old_face",0x7629c4:"bugler",0x7f3004:"earth_knight",0x7f30c4:"acid_pod",0x7f3304:"cannon_snail",0x7f33c4:"cocoon_plant",0x7f3604:"guardian_b",0x7f36c4:"sloth_bug",0x7f3904:"ray_plant",0x7f39c4:"cocoon_plant",0x8938c4:"auriel_c",0x893b04:"king_hopper",0x893bc4:"warden",0x893c84:"oblid",0x893e04:"oxelus",0x893f84:"cursed_demon",0x8941c4:"death_serpent",0x894284:"necron",0x926804:"bone_demon",0x9268c4:"berzerker",0x926b04:"zygote",0x926bc4:"horned_skull",0x926ec4:"cerberus",0x926f84:"ruby_demon",0x927104:"ebony_knight",0x9271c4:"damned_angel",0x9ad804:"berzerker",0x9ad8c4:"dweller",0x9ad984:"mystic_tower",0x9adb04:"berzerker",0x9adbc4:"dweller",0x9adc84:"mystic_tower",0x9ade04:"berzerker",0x9adec4:"iron_crusher",0x9adf84:"mystic_tower",0x9ae1c4:"dweller",0x9ae284:"mystic_tower",0xa3e804:"kabasaur",0xa3eb04:"kabasaur",0xa3ebc4:"water_knight",0xad4004:"unused_a",0xad40c4:"doriwi",0xad4184:"bone_wolf",0xad4304:"unused_b",0xad43c4:"doriwi",0xad4484:"hell_warrior",0xad4604:"wyvern",0xad4784:"bone_wolf",0xad4904:"hollow_mage",0xad49c4:"blood_bone",0xb3f804:"abraxus",0xb3f8c4:"horned_skull",0xb3f984:"dead_abraxus",0xb3fb04:"berzerker",0xb3fc84:"mystic_tower",0xb3fe04:"fat_mole_b",0xb3fec4:"steel_servant",0xb40104:"fat_mole_c",0xb401c4:"arachness",0xbd6004:"hell_hunter",0xbd6184:"karasu",0xbd6304:"tree_ogre",0xbd63c4:"armored_warrior",0xbd6484:"armored_slayer",0xbd6604:"armored_guardian",0xbd66c4:"armored_warrior",0xbd6784:"armored_slayer",0xc730c4:"unknown_b",0xc73304:"king_edward",0xc733c4:"hell_hunter",0xc73604:"claw_head",0xc736c4:"pulsating_heart",0xc73784:"demons_eye",0xc73904:"unknown_d",0xc739c4:"fat_mole_e",0xc73a84:"claw_head",0xd13004:"duhrin",0xd130c4:"beak_plant",0xd13184:"watcher_plant",0xd13304:"auriel_b",0xd13604:"trickster",0xd136c4:"dwarf_warrior",0xd13904:"hanging_dead",0xd139c4:"trickster",0xd13a84:"watcher_plant",0xdb0804:"dybbuk",0xdb08c4:"demon_bat",0xdb0b04:"dybbuk",0xdb0bc4:"hobble_worm",0xdb0e04:"clay_servant",0xdb0f84:"barrel_snail",0xdb1104:"dybbuk",0xdb11c4:"crying_root",0xe4c004:"balron_a",0xe4c0c4:"unknown_i",0xe4c184:"unknown_j",0xe4c304:"unknown_k",0xe4c244:"balron_b",0xe4c604:"demon_king",0xedc804:"kabasaur",0xedc984:"horned_slime",0xedcb04:"great_frog",0xedcbc4:"blood_brain",0xedcec4:"koazul",0xedcf84:"horned_slime",0xedd104:"gaze_hopper",0xedd1c4:"slasher",0xedd284:"manna_python",0xf73004:"black_onyx",0xf730c4:"earth_knight",0xf73304:"dread_knight",0xf733c4:"earth_knight",0xf73484:"dread_knight_unused",0x100c804:"winged_worm",0x100cb04:"dragon_turtle",0x100cbc4:"magi_magus",0x108f804:"dark_spirits",0x108f8c4:"disguise"};

  var nonRandomizableCreatureNames = [
    "unused", "door", "blank",
    "unknown_i", "unknown_j", "unknown_k",
    "dybbuk", "lizard_servant", "mole", "auriel", "akryal", "abraxus", "panak", "king_edward", "pulsating_heart", "duhrin",
    "dark_imp", "black_imp",
    "gorgoral",
    "fester", "wildowess", "gorthaur",
    "shadow_spider", "demon_bat", "dark_fairy", "bone_demon", "demons_eye", "apocrypha", "rotting_face",
    "fanged_worm", "dark_imp", "master_howler", "black_imp", "claw_head", "hanging_dead", "dragon_turtle",
    "guardian", "guardian_b", "04_dread_knight", "ebony_knight", "magi_magus", "necron", "disguise", "hollow_mage", "balron", "demon_king"
  ];

  var flyingRandomizableCreatures = [
    "shadow_spider", "demon_bat", "dark_fairy", "bone_demon",
    "demons_eye", "apocrypha", "descrypha", "wizcrypha", "rotting_face",
    "maristella", "ring_demon",  "dark_spirits", "warpoor", "cross_breed",
    "gargaral", "gordoral",
  ];

  var geteKeeperRandomizableCreatures = [
    "sand_leech_b", "elder", "claw_head"
  ];

  const CREATURE_DATA_LENGTH = 93;
  const ENTITY_STATE_OFFSETS_ARRAY_START_OFFSET = 96;
  const ENTITY_STATE_OFFSETS_ARRAY_LENGTH = 24;
  const ENTITY_STATE_SIZE_BY_TYPE = {0x0: 0x14, 0x2: 0x10, 0x10: 0x18, 0x11: 0x1c, 0x12: 0x18, 0x13: 0x1c, 0x15: 0x1c, 0x16: 0x18, 0x20: 0x30, 0x30: 0x30, 0x40: 0x10, 0x50: 0x10, 0x14: 0x20, 0x70: 0x10, 0x71: 0x10, 0x72: 0x10, 0x80: 0x10};

  class EntityStateData {
    constructor(bin, creature, offset_in_file, absoluteIndex, creatureIndex, index) {
      this.bin = bin;
      this.creature = creature;
      this.offset_in_file = offset_in_file;
      this.absoluteIndex = absoluteIndex;
      this.creatureIndex = creatureIndex;
      this.index = index;
      this.type = this.bin[this.offset_in_file];

      /*
  Entity data types
  0 tilt
  02 event
  10-16 move
  20 attack
  30 spell
  40 default
  50 default
  70-72 scene
  80 giving
  */

    if (!ENTITY_STATE_SIZE_BY_TYPE[this.type]) {
      console.log("ERROR EntityStateData type size unknown " + this.type.toString(16) + " " + ENTITY_STATE_SIZE_BY_TYPE[this.type]);
    }
    this.length = ENTITY_STATE_SIZE_BY_TYPE[this.type];
    this.originalBin = this.bin.slice(this.offset_in_file, this.offset_in_file + this.length);

      if (this.type == 0x20) {
        var att = new UInt16(this.originalBin, 0x1a);
        if (!att.isNull()) {
          this.attack1 = att;
        }
        att = new UInt16(this.originalBin, 0x1c);
        if (!att.isNull()) {
          this.attack2 = att;
        }
        att = new UInt16(this.originalBin, 0x1e);
        if (!att.isNull()) {
          this.attack3 = att;
        }
      }
  }

  toReadableString() {
    return "EntityStateData(pos " + this.offset_in_file.toString(16) + " size " + this.length.toString(16) + ") " + binToStr(this.bin.slice(this.offset_in_file, this.offset_in_file + this.length));
  }

  toString() {
    return "{\"offset_in_file\":\""+this.offset_in_file.toString(16).padStart(4) + "\"" 
    + ",\"absoluteIndex\":\""+this.absoluteIndex.toString(16).padStart(8) + "\""  
    + ",\"message\":\""+ binToStr(this.originalBin) + "\""
    + "}";
  }

  set(source) {
    binCopy(source.bin, source.offset_in_file, this.bin, this.offset_in_file, ENTITY_STATE_SIZE_BY_TYPE[this.type]);
  }

  swap(source) {
    binSwap(source.bin, source.offset_in_file, this.bin, this.offset_in_file, ENTITY_STATE_SIZE_BY_TYPE[this.type]);
  }
  }

  global.COLLECTABLE_SIZE = 0x18;
  global.COLLECTABLE_COUNT = 0x20;

  class Collectable {
    constructor(bin, area, offset_in_file, absoluteIndex, collectableIndex) {
      this.bin = bin;
      this.area = area;
      this.offset_in_file = offset_in_file;
      this.absoluteIndex = absoluteIndex;
      this.collectableIndex = collectableIndex;

      this.type = new UInt16(this.bin, this.offset_in_file + 0x00);

      this.tileX = new UInt8(this.bin, this.offset_in_file + 0x04);
      this.tileY = new UInt8(this.bin, this.offset_in_file + 0x05);
      this.tileZ = new UInt8(this.bin, this.offset_in_file + 0x06);
      this.x = new UInt16(this.bin, this.offset_in_file + 0x09);
      this.y = new UInt16(this.bin, this.offset_in_file + 0x0b);
      this.z = new UInt16(this.bin, this.offset_in_file + 0x0d);
      this.rotation_z = new UInt16(this.bin, this.offset_in_file + 0x0f);
      this.tileId = new UInt8(this.bin, this.offset_in_file + 0x16);

      //if (!this.isBlank()) {
        console.log(this.toReadableString());
      //}
    }

    name() {
      return !this.isBlank() ? (!itemData[this.type.get()] ? "invalid-id-"+this.type.get() : itemData[this.type.get()].name) : "blank";
    }

    draw(mapDraw, mapSummary) {
      if (!this.isBlank()) {
        var text = "" + this.collectableIndex.toString(16) + " " + this.name();
        mapDraw.push({
          color: "#108010", 
          x: this.tileX.get(),
          y: this.tileZ.get(),
          z: this.tileY.get(),
          text: text
        });
        mapSummary.push('<span style="background:#30f030">'+text+'</span>\n');
      }
    }

    toReadableString() {
      var text = "" + this.collectableIndex.toString(16).padEnd(5)
      + this.name().padEnd(40)
      + this.offset_in_file.toString(16).padStart(4)
      + this.absoluteIndex.toString(16).padStart(10)
      + "  tileId("+this.tileId.get().toString(16).padStart(4)+") "
      + "  tile("+this.tileX.get().toString(16).padStart(4)+","+this.tileY.get().toString(16).padStart(4)+","+this.tileZ.get().toString(16).padStart(4)+") "
      + "  pos("+this.x.get().toString(16).padStart(4)+","+this.y.get().toString(16).padStart(4)+","+this.z.get().toString(16).padStart(4)+","+this.rotation_z.get().toString(16).padStart(4)+") "
      + binToStr(this.bin.slice(this.offset_in_file, this.offset_in_file + COLLECTABLE_SIZE), 4);
      return text;
    }

    toString() {
      return "{\"name\":\""+(this.name() + "\"").padEnd(40)
      + ", \"type\":" + (this.type.get() + "").padStart(5)
      + ", \"tileX\":" + (this.tileX.get() + "").padStart(5)
      + ", \"tileY\":" + (this.tileY.get() + "").padStart(5)
      + ", \"tileZ\":" + (this.tileZ.get() + "").padStart(5)
      + ", \"tileId\":" + (this.tileId.get() + "").padStart(5)
      + ", \"x\":" + (this.x.get() + "").padStart(5)
      + ", \"y\":" + (this.y.get() + "").padStart(5)
      + ", \"z\":" + (this.z.get() + "").padStart(5)
      + ", \"rotation_z\":" + (this.rotation_z.get() + "").padStart(5)
      + "}";
    }

    setTile(index) {
      this.tileId.set(index);
      var tile = this.area.tiles[index];
      this.tileX.set(tile.tileX.get());
      this.tileY.set(tile.tileY.get());
      this.tileZ.set(tile.tileZ.get());
    }

    getTile() {
      return this.tileId.get();
    }

    set(source) {
      binCopy(source.bin, source.offset_in_file, this.bin, this.offset_in_file, COLLECTABLE_SIZE);
    }

    swap(source) {
      binSwap(source.bin, source.offset_in_file, this.bin, this.offset_in_file, COLLECTABLE_SIZE);
    }

    isBlank() {
      return this.type.get() == 0xffff;
    }

    blank() {
      //binSet(this.bin, this.offset_in_file, COLLECTABLE_SIZE, 0x00);
      this.type.set(0xffff);
    }
  }

  global.OBJECTS_SIZE = 0x18;
  global.OBJECTS_COUNT = 0x15E;

  class ScenarioObject {
    constructor(bin, area, offset_in_file, absoluteIndex, index, mapTiles) {
      this.bin = bin;
      this.area = area;
      this.offset_in_file = offset_in_file;
      this.absoluteIndex = absoluteIndex;
      this.index = index;

      this.tileX = new UInt8(this.bin, this.offset_in_file + 0x00);
      this.tileY = new UInt8(this.bin, this.offset_in_file + 0x01);
      this.tileZ = new UInt8(this.bin, this.offset_in_file + 0x02);

      this.id = new UInt16(this.bin, this.offset_in_file + 0x04);
      this.model = new UInt16(this.bin, this.offset_in_file + 0x0a);
      this.kindOfText = new UInt8(this.bin, this.offset_in_file + 0x10);

      this.zeroes1 = new UInt8(this.bin, this.offset_in_file + 0x11);
      this.gateIndex = new UInt8(this.bin, this.offset_in_file + 0x12);
      this.gateIdentifier = new UInt8(this.bin, this.offset_in_file + 0x13);
      this.zeroes4 = new UInt8(this.bin, this.offset_in_file + 0x14);
      this.zeroes5 = new UInt8(this.bin, this.offset_in_file + 0x15);
      this.zeroes6 = new UInt8(this.bin, this.offset_in_file + 0x16);
      this.zeroes7 = new UInt8(this.bin, this.offset_in_file + 0x17);

      // For exits
      this.destinationXShift = new Int8(this.bin, this.offset_in_file + 0x10);
      this.destinationYShift = new Int8(this.bin, this.offset_in_file + 0x11);
      this.destinationZShift = new Int8(this.bin, this.offset_in_file + 0x12);
      this.destinationUnknown1 = new Int8(this.bin, this.offset_in_file + 0x13);
      this.destinationUnknown2 = new Int8(this.bin, this.offset_in_file + 0x14);
      this.destinationMapIndex = new UInt8(this.bin, this.offset_in_file + 0x15);
      this.destinationRotation = new Int8(this.bin, this.offset_in_file + 0x16);
      if (this.destinationRotation.get() == -1) {
        this.destinationRotation.set(0);
      }
      this.destinationYFineShift = new Int8(this.bin, this.offset_in_file + 0x17);

      // For handles
      this.eventHandlerIdentifier1 = new Int8(this.bin, this.offset_in_file + 0x16);
      this.eventHandlerIdentifier2 = new Int8(this.bin, this.offset_in_file + 0x17);

//shadow_tower_part1.objects[0].bin[shadow_tower_part1.objects[0].offset_in_file+16] = 0; // destination tile x shift
//shadow_tower_part1.objects[0].bin[shadow_tower_part1.objects[0].offset_in_file+17] = 0; // destination tile y shift
//shadow_tower_part1.objects[0].bin[shadow_tower_part1.objects[0].offset_in_file+18] = 1;//1; destination tile z shift
//shadow_tower_part1.objects[0].bin[shadow_tower_part1.objects[0].offset_in_file+21] = 0; // destination map index
//shadow_tower_part1.objects[0].bin[shadow_tower_part1.objects[0].offset_in_file+22] = 0; // angle 1=90
//shadow_tower_part1.objects[0].bin[shadow_tower_part1.objects[0].offset_in_file+23] = 0xfd; // destination y fine position

      this.isBlank = this.id.isNull();

      var type = this.getType();
      var tileColor = "#808080";
      if (this.getExit()) {
        tileColor = "#008000";
      }
      if (type == "totem") {
        tileColor = "#00a000";
      } else if (type.includes("gate")) {
        tileColor = "#a0a0a0";
      } else if (type == "handler") {
        tileColor = "#a0a040";
      } else if (type == "scenery") {
        tileColor = "#0000a0";
      } else if (type == "unknown") {
        tileColor = "#800000";
      }
      if (!this.isBlank) {
        if (mapTiles) {
          mapTiles.push({
            color: tileColor,
            x: this.tileX.get(),
            y: this.tileZ.get(),
            z: this.tileY.get()
          });
        }

        console.log(this.toReadableString());
      }
    }

    isEventHandler() {
      return 
        (this.eventHandlerIdentifier1.get() == 1 && this.eventHandlerIdentifier2.get() == 0xff) ||
        (this.eventHandlerIdentifier1.get() == 0 && this.eventHandlerIdentifier2.get() == 0xff) ||
        (this.eventHandlerIdentifier1.get() == 1 && this.eventHandlerIdentifier2.get() == 0xfb) ||
        (this.eventHandlerIdentifier1.get() == 0 && this.eventHandlerIdentifier2.get() == 0x1) ||
        (this.eventHandlerIdentifier1.get() == 0 && this.eventHandlerIdentifier2.get() == 0x2) ||
        (this.eventHandlerIdentifier1.get() == 0 && this.eventHandlerIdentifier2.get() == 0x3);
    }

    getType() {
      if (!this.area || !this.area.exits || !this.area.totems) {
        return "blank";
      }
      if (this.getExit()) {
        return "exit-"+this.area.exits[''+this.index].type;
      };
      if (this.area.totems[''+this.index]) {
        return "totem";
      };
      if (this.gateIdentifier.get() == 0x7f) {
        return "gate-"+this.gateIndex.get();
      }
      if (this.isEventHandler()) {
        return "handler";
      }
      if (this.gateIdentifier.get() == 0x1 && this.gateIndex.isNull()) {
        return "gate-reset";
      }
      if (this.zeroes1.get() == 0 && this.gateIndex.get() == 0 && this.gateIdentifier.get() == 0 && this.zeroes4.get() == 0 && 
          this.zeroes5.get() == 0 && this.zeroes6.get() == 0 && this.zeroes7.get() == 0) {
        return "scenery";
      };

      var desc = objectsDescriptions[this.id.get()];
      if (desc) {
        if (desc.includes("door") || desc.includes("lever") || desc.includes("jail") || desc.includes("sword eater statue")) {
          return "handler";
        } else {
          return "scenery";
        }
      }

      return "unknown";
    }

    getExit() {
      //console.log("Rotation getExit " + this.index + " at " + JSON.stringify(this.area.exits));
      return this.area.exits[''+this.index];
    }

    getWayBackExit(map) {
      var exit = this.getExit();
      //console.log("Rotation getWayBackExit, exit " + JSON.stringify(exit));
      var wayBackExit = map.find(targetArea => targetArea.name == exit.dest).exits.find(e => e.id == exit.wayBackId);
      //console.log("Rotation getWayBackExit, wayBackExit " + JSON.stringify(wayBackExit));
      return wayBackExit;
    }

    getExitInfo() {
      if (!this.getExit()) {
        return "";
      }
      var exitCode = normalizeAreaName(this.area.name)+"/"+this.getExit().id;
      var exitName = (exitsNames[exitCode] || exitCode)

      return exitName.padEnd(13) + " -> " + this.getExit().dest.padEnd(34) + " pos(" + (""+this.destinationXShift.get()).padStart(3) + ("," + this.destinationYShift.get()).padStart(4) + ("," + this.destinationXShift.get()).padStart(4) + ")," +
        "unknown(" + (""+this.destinationUnknown1.get()).padStart(3) + ("," + this.destinationUnknown2.get()).padStart(4) + ")," +
        "destMapIndex("+(""+this.destinationMapIndex.get()).padStart(3)+")," +
        "rot("+(""+this.destinationRotation.get()).padStart(3)+")," +
        "fineY("+(""+this.destinationYFineShift.get()).padStart(3)+")";
    }

    draw(mapDraw, mapSummary) {
      if (!this.isBlank) {
        var textColor = "#000000";

        mapDraw.push({
          color: textColor,
          x: this.tileX.get(), 
          y: this.tileZ.get(), 
          z: this.tileY.get(), 
          text: "" + this.index + " " + (objectsDescriptions[this.id.get()] || ("-"+this.getType()))
        });

        if (this.getExit()) {
          var summary = '<span style="background:#808080">'+"" + (this.index + " ").padStart(3) + this.getType().padEnd(10) + " " + this.getExitInfo() + '</span>\n';
          mapSummary.push(summary);
        }

        if (this.getType() == "unknown") {
          var summary = '<span style="background:#800000">'+"" + (this.index + " ").padStart(3) + this.getType().padEnd(10) + " id=" + this.id.get() + " " + this.toReadableString() + '</span>\n';
          mapSummary.push(summary);
        }
      }
    }

    toReadableString() {
      var text = "" + this.index.toString().padEnd(5)
      + this.offset_in_file.toString(16).padStart(4)
      + this.absoluteIndex.toString(16).padStart(10)
      + " " + this.getType().padEnd(12)
      + (objectsDescriptions[this.id.get()] || "").padEnd(29)
      + "  tile("
      + this.tileX.get().toString(16).padStart(4)+","
      + this.tileY.get().toString(16).padStart(4)+","
      + this.tileZ.get().toString(16).padStart(4)
      + ") "
      + this.getExitInfo() + " "
      + binToStr(this.bin.slice(this.offset_in_file, this.offset_in_file + OBJECTS_SIZE), 4);
      return text;
    }

    toString() {
      return "{"/*"{\"name\":\""+(this.name + "\"").padEnd(40)
        + ", \"x\":" + (this.x.get() + "").padStart(5)
        + ", \"y\":" + (this.y.get() + "").padStart(5)
        + ", \"z\":" + (this.z.get() + "").padStart(5)
        + ", \"rotation_z\":" + (this.rotation_z.get() + "").padStart(5)*/
        + "}";
    }

    set(source) {
      binCopy(source.bin, source.offset_in_file+14, this.bin, this.offset_in_file+14, OBJECTS_SIZE-14);
    }

    setExit(source, map) {
      this.destinationMapIndex.set(source.destinationMapIndex.get());
      this.destinationXShift.set(source.destinationXShift.get());
      this.destinationYShift.set(source.destinationYShift.get());
      this.destinationZShift.set(source.destinationZShift.get());
      this.destinationUnknown1.set(source.destinationUnknown1.get());
      this.destinationUnknown2.set(source.destinationUnknown2.get());

      var origin = this.getExit();
      //console.log("Rotation setting, origin " + JSON.stringify(origin));
      var dest = source.getWayBackExit(map);
      //console.log("Rotation setting, wayBack " + JSON.stringify(dest));
      var rotationToSet = - origin.rotation + (dest.type=="totem" ? 0 : -2) + dest.rotation;
      rotationToSet = (rotationToSet + 40) % 4;

      //console.log("Rotation to set " + rotationToSet);
      this.destinationRotation.set(rotationToSet);

      this.destinationYFineShift.set(source.destinationYFineShift.get());

      //binCopy(source.bin, source.offset_in_file+16, this.bin, this.offset_in_file+16, OBJECTS_SIZE-16);
    }

    swap(source) {
      binSwap(source.bin, source.offset_in_file+14, this.bin, this.offset_in_file+14, OBJECTS_SIZE-14);
    }

    blank() {
      binSet(this.bin, this.offset_in_file, OBJECTS_SIZE, 0x00);
      this.id.set(0xffff);
    }
  }

    global.TILE_SIZE = 0x0c;
    global.TILE_COUNT = 0x200;

    class Tile {
      constructor(bin, area, offset_in_file, absoluteIndex, tileIndex, mapTiles) {
        this.bin = bin;
        this.area = area;
        this.offset_in_file = offset_in_file;
        this.absoluteIndex = absoluteIndex;
        this.tileIndex = tileIndex;

        this.isBlank = this.bin[this.offset_in_file + 0x08]==0xff;

        this.x = new UInt16(this.bin, this.offset_in_file + 0x00);
        this.y = new UInt16(this.bin, this.offset_in_file + 0x02);
        this.z = new UInt16(this.bin, this.offset_in_file + 0x04);
        this.rotation_z = new UInt16(this.bin, this.offset_in_file + 0x06);
        this.tileX = new UInt8(this.bin, this.offset_in_file + 0x08);
        this.tileY = new UInt8(this.bin, this.offset_in_file + 0x09);
        this.tileZ = new UInt8(this.bin, this.offset_in_file + 0x0a);


        if (!this.isBlank) {

          if (mapTiles) {
            mapTiles.push({
              color: "#160abc",
              x: this.tileX.get(),
              y: this.tileZ.get(),
              z: this.tileY.get()
            });
          }

        //console.log(this.toReadableString());
      }
    }

    toReadableString() {
      var text = "" + this.tileIndex.toString(16).padEnd(5)
       //+ this.name.padEnd(40)
       + this.offset_in_file.toString(16).padStart(4)
       + this.absoluteIndex.toString(16).padStart(10)
       + "  tile("+this.tileX.get().toString(16).padStart(4)+","+this.tileY.get().toString(16).padStart(4)+","+this.tileZ.get().toString(16).padStart(4)+") "
       + "  pos("+this.x.get().toString(16).padStart(4)+","+this.y.get().toString(16).padStart(4)+","+this.z.get().toString(16).padStart(4)+","+this.rotation_z.get().toString(16).padStart(4)+") "
       + binToStr(this.bin.slice(this.offset_in_file, this.offset_in_file + TILE_SIZE), 4);
       return text;
     }

     toString() {
      return "{"/*"{\"name\":\""+(this.name + "\"").padEnd(40)
        + ", \"x\":" + (this.x.get() + "").padStart(5)
        + ", \"y\":" + (this.y.get() + "").padStart(5)
        + ", \"z\":" + (this.z.get() + "").padStart(5)
        + ", \"rotation_z\":" + (this.rotation_z.get() + "").padStart(5)*/
        + "}";
      }

      set(source) {
        binCopy(source.bin, source.offset_in_file, this.bin, this.offset_in_file, TILE_SIZE);
      }

      swap(source) {
        binSwap(source.bin, source.offset_in_file, this.bin, this.offset_in_file, TILE_SIZE);
      }

      blank() {
        binSet(this.bin, this.offset_in_file, TILE_SIZE, 0x00);
        this.x.set(0xff);
      }
    }

    global.validCreatures = [];
    global.randomizableCreatures = [];
    global.randomizableFlyingCreatures = [];
    global.randomizableGateKeeperCreatures = [];

    var nextExpectedEntityDataAddress;

    class Creature {
      constructor(bin, area, offset_in_file, absoluteIndex, creatureIndex) {
        this.bin = bin;
        this.area = area;
        this.offset_in_file = offset_in_file;
        this.absoluteIndex = absoluteIndex;
        this.creatureIndex = creatureIndex;

        this.isBlank = binToStr(this.bin.slice(offset_in_file + 36,offset_in_file + 36+16), 4) == "   0   0   0   0   0   0   0   0   0   0   0   0   0   0  64   0";

        if (!this.isBlank && !area.spawns.find(spawn => spawn.type.get() == this.creatureIndex)) {
          //console.log("Unused creature, set as blank.");
          this.isBlank = true;
        }

        this.isDoor = false;
        if (
          this.bin[this.offset_in_file + 0x00]==0x00 &&
          this.bin[this.offset_in_file + 0x01]==0x20 &&
          this.bin[this.offset_in_file + 0x02]==0xff &&
          this.bin[this.offset_in_file + 0x03]==0x00 &&
          this.bin[this.offset_in_file + 0x04]==0x01 &&
          this.bin[this.offset_in_file + 0x05]==0x00 &&
          this.bin[this.offset_in_file + 0x06]==0x00 &&
          this.bin[this.offset_in_file + 0x07]==0x00 &&
          this.bin[this.offset_in_file + 0x08]==0x00 &&
          this.bin[this.offset_in_file + 0x09]==0x00 &&
          this.bin[this.offset_in_file + 0x0a]==0x00 &&
          this.bin[this.offset_in_file + 0x0b]==0x00 &&
          this.bin[this.offset_in_file + 0x0c]==0x00 &&
          this.bin[this.offset_in_file + 0x0d]==0x00 &&
          this.bin[this.offset_in_file + 0x0e]==0x00
        ) {
          this.name =
          (this.creatureIndex.toString(16)).padStart(2, "0") + "_" + 
          "door";
          this.isDoor = true;
          this.isBlank = false;
        } else {
          this.name = 
          (this.creatureIndex.toString(16)).padStart(2, "0") + "_" + 
          (this.isBlank ?"blank":(creatureNameByAbsoluteOffset[this.absoluteIndex] || "to_define"));

          if (this.isBlank) {
            global.blankCreature = this;
          }

          if (!this.isBlank) {
            validCreatures.push(this);
            this.randomizable = true;
            this.flyingRandomizable = false;
            nonRandomizableCreatureNames.forEach((name) => {
              if (this.name.includes(name)) {
                this.randomizable = false;
              };
            });
            if (this.randomizable) {
              randomizableCreatures.push(this);
            }
            flyingRandomizableCreatures.forEach((name) => {
              if (this.name.includes(name)) {
                this.randomizable = true;
                this.flyingRandomizable = true;
              };
            });
            if (this.flyingRandomizable) {
              randomizableFlyingCreatures.push(this);
            }

            this.gateKeeperRandomizable = false;
            geteKeeperRandomizableCreatures.forEach((name) => {
              if (this.name.includes(name)) {
                this.randomizable = true;
                this.gateKeeperRandomizable = true;
              };
            });
            if (this.gateKeeperRandomizable) {
              randomizableGateKeeperCreatures.push(this);
            }
          }
        }

      //this.maxPresence = new UInt8( bin, this.offset_in_file + 0x10);
      this.attack1 = new UInt8( bin, this.offset_in_file + 0x07);
      this.attack2 = new UInt8( bin, this.offset_in_file + 0x08);
      this.magic1 = new UInt8( bin, this.offset_in_file + 0x09);

      this.height = new UInt16( bin, this.offset_in_file + 0x0b);
      this.weight = new UInt16( bin, this.offset_in_file + 0x0d);
      this.something3 = new UInt16( bin, this.offset_in_file + 0x0f);
      this.something4 = new UInt16( bin, this.offset_in_file + 0x11);

      this.centerPositionHeight = new UInt16( bin, this.offset_in_file + 0x19);
      this.shadowSize = new UInt8( bin, this.offset_in_file + 0x1b);

      this.str = new UInt8( bin, this.offset_in_file + 0x24);
      this.spd = new UInt8( bin, this.offset_in_file + 0x25);
      this.def = new UInt8( bin, this.offset_in_file + 0x26);
      this.bal = new UInt8( bin, this.offset_in_file + 0x27);
      this.sla = new UInt8( bin, this.offset_in_file + 0x28);
      this.smh = new UInt8( bin, this.offset_in_file + 0x29);
      this.pir = new UInt8( bin, this.offset_in_file + 0x2a);
      this.spr = new UInt8( bin, this.offset_in_file + 0x2b);
      this.foc = new UInt8( bin, this.offset_in_file + 0x2c);
      this.ham = new UInt8( bin, this.offset_in_file + 0x2d);
      this.pur = new UInt8( bin, this.offset_in_file + 0x2e);
      this.par = new UInt8( bin, this.offset_in_file + 0x2f);
      this.mel = new UInt8( bin, this.offset_in_file + 0x30);
      this.sol = new UInt8( bin, this.offset_in_file + 0x31);
      this.hp  = new UInt16(bin, this.offset_in_file + 0x32);

      this.weaponDefense1 = new UInt16(bin, this.offset_in_file + 0x4a);
      this.weaponDefense2 = new UInt16(bin, this.offset_in_file + 0x4c);
      this.weaponDefense3 = new UInt16(bin, this.offset_in_file + 0x4e);
      this.magDefense1 = new UInt16(bin, this.offset_in_file + 0x50);
      this.magDefense2 = new UInt16(bin, this.offset_in_file + 0x52);
      this.magDefense3 = new UInt16(bin, this.offset_in_file + 0x54);
      this.magDefense4 = new UInt16(bin, this.offset_in_file + 0x56);
      this.magDefense5 = new UInt16(bin, this.offset_in_file + 0x58);

      area[this.name] = this;

      this.entityStateOffsets = uInt32Array(this.bin, this.offset_in_file + ENTITY_STATE_OFFSETS_ARRAY_START_OFFSET, ENTITY_STATE_OFFSETS_ARRAY_LENGTH);
      this.entityStates = [];
      this.attacks = [];
      
      for (var i = 0 ; i < this.entityStateOffsets.length ; i++) {
        var entityStateOffset = this.entityStateOffsets[i];
        if (entityStateOffset.isNull()) {
          continue;
        }

        var address = ENTITY_STATE_DATA_START + entityStateOffset.get();
        var entityStateData = new EntityStateData(this.bin, this, address, 
          this.area.map_file.startOffset + address, 
          this.creatureIndex, i);

        if (nextExpectedEntityDataAddress != address) {
          console.log("ERROR - expected address " + nextExpectedEntityDataAddress.toString(16) + " doesnt match " + address.toString(16) + " " + entityStateData.toReadableString());
          nextExpectedEntityDataAddress = address;
        }
        this.entityStates.push(entityStateData);
        if (entityStateData.attack1) {
          this.attacks.push(entityStateData.attack1);
        }
        if (entityStateData.attack2) {
          this.attacks.push(entityStateData.attack2);
        }
        if (entityStateData.attack3) {
          this.attacks.push(entityStateData.attack3);
        }

        nextExpectedEntityDataAddress += entityStateData.length;
      }
      console.log(this.toReadableString());
    }

    reinjectEntityDataToFile(nextEntityDataAddress) {

      //console.log("reinjectEntityDataToFile " + this.name + " " + this.area.name);
      for (var i in this.entityStates) {
        var entityStateOffset = this.entityStateOffsets[i];
        // Used to verify if run with no changes, the offsets would match totaly or not
        // Found that actually some will not match, those are weird entries of entityState in last positions all zeroed
        //if (entityStateOffset.get() != nextEntityDataAddress) {
        //  console.log("ERROR mismatch placing entityStateOffset " + this.entityStates[i].toReadableString() + " " + entityStateOffset.get().toString(16) + " " + nextEntityDataAddress.toString(16) + " " + this.name + " " + this.area.name);
        //} else {
        //  console.log("OK             placing entityStateOffset " + this.entityStates[i].toReadableString() + " " + this.name + " " + this.area.name);
        //}
        
        entityStateOffset.set(nextEntityDataAddress);
        nextEntityDataAddress += this.entityStates[i].length;

        var address = ENTITY_STATE_DATA_START + entityStateOffset.get();
        this.entityStates[i].offset_in_file = address;

        binCopy(this.entityStates[i].originalBin, 0, this.bin, this.entityStates[i].offset_in_file, this.entityStates[i].length);
      }

      return nextEntityDataAddress;
    }

    toReadableString() {
      var text = this.name.padEnd(20)
      + this.offset_in_file.toString(16).padStart(4)
      + this.absoluteIndex.toString(16).padStart(10)
      + binToStr(this.bin.slice(this.offset_in_file, this.offset_in_file + CREATURE_SIZE), 4);

      for (var i = 0 ; i < this.entityStates.length ; i++) {
        text += " " + this.entityStates[i].toReadableString();
      }

      return text;
    }

    toString() {
      return "{\"name\":\""+(this.name + "\"").padEnd(22)
      + ", \"str\":" + (this.str.get() + "").padStart(5)
      + ", \"spd\":" + (this.spd.get() + "").padStart(5)
      + ", \"def\":" + (this.def.get() + "").padStart(5)
      + ", \"bal\":" + (this.bal.get() + "").padStart(5)
      + ", \"sla\":" + (this.sla.get() + "").padStart(5)
      + ", \"smh\":" + (this.smh.get() + "").padStart(5)
      + ", \"pir\":" + (this.pir.get() + "").padStart(5)
      + ", \"spr\":" + (this.spr.get() + "").padStart(5)
      + ", \"foc\":" + (this.foc.get() + "").padStart(5)
      + ", \"ham\":" + (this.ham.get() + "").padStart(5)
      + ", \"pur\":" + (this.pur.get() + "").padStart(5)
      + ", \"par\":" + (this.par.get() + "").padStart(5)
      + ", \"mel\":" + (this.mel.get() + "").padStart(5)
      + ", \"sol\":" + (this.sol.get() + "").padStart(5)
      + ", \"hp\":" + (this.hp.get() + "").padStart(5)

      + ", \"attack1\":" + (this.attack1.get() + "").padStart(5)
      + ", \"attack2\":" + (this.attack2.get() + "").padStart(5)
      + ", \"magic1\":" + (this.magic1.get() + "").padStart(5)
      + ", \"height\":" + (this.height.get() + "").padStart(5)
      + ", \"weight\":" + (this.weight.get() + "").padStart(5)
      + ", \"something3\":" + (this.something3.get() + "").padStart(5)
      + ", \"something4\":" + (this.something4.get() + "").padStart(5)
      + ", \"weaponDefense1\":" + (this.weaponDefense1.get() + "").padStart(5)
      + ", \"weaponDefense2\":" + (this.weaponDefense2.get() + "").padStart(5)
      + ", \"weaponDefense3\":" + (this.weaponDefense3.get() + "").padStart(5)
      + ", \"magDefense1\":" + (this.magDefense1.get() + "").padStart(5)
      + ", \"magDefense2\":" + (this.magDefense2.get() + "").padStart(5)
      + ", \"magDefense3\":" + (this.magDefense3.get() + "").padStart(5)
      + ", \"magDefense4\":" + (this.magDefense4.get() + "").padStart(5)
      + ", \"magDefense5\":" + (this.magDefense5.get() + "").padStart(5)
      + ", \"attacks\": [" + (this.attacks.map(attack => attack.get())) + "]"
      //      + ",\"offset_in_file\":\"" + this.offset_in_file.toString(16).padStart(4) + "\"" 
      //      + ",\"absoluteIndex\":\"" + this.absoluteIndex.toString(16).padStart(8) + "\"" 
      + ",\"isDoor\":" + this.isDoor
      + ",\"randomizationGroup\": \"" + this.randomizationGroup() + "\"}";
    }

  score() {
    var attackSum = 0;
    var count = 0;
    if (this.weaponDefense1) {
      if (this.weaponDefense1.get()) {
        attackSum += this.weaponDefense1.get();
        count++;
      }
      if (this.weaponDefense2.get()) {
        attackSum += this.weaponDefense2.get();
        count++;
      }
      if (this.weaponDefense3.get()) {
        attackSum += this.weaponDefense3.get();
        count++;
      }
      if (this.magDefense1.get()) {
        attackSum += this.magDefense1.get();
        count++;
      }
      if (this.magDefense2.get()) {
        attackSum += this.magDefense2.get();
        count++;
      }
      if (this.magDefense3.get()) {
        attackSum += this.magDefense3.get();
        count++;
      }
      if (this.magDefense4.get()) {
        attackSum += this.magDefense4.get();
        count++;
      }
      if (this.magDefense5.get()) {
        attackSum += this.magDefense5.get();
        count++;
      }
      if (this.attack1.get()) {
        attackSum += this.attack1.get();
        count++;
      }
      if (this.attack2.get()) {
        attackSum += this.attack2.get();
        count++;
      }
      if (this.magic1.get()) {
        attackSum += this.magic1.get();
        count++;
      }
      attackSum = attackSum / count;
    }

    return Math.round(this.hp.get()/4 + attackSum * 2);
  }

  set(source) {
    binCopy(source.bin, source.offset_in_file, this.bin, this.offset_in_file, CREATURE_SIZE);
    this.name = source.name;

    /*this.str.set(source.str);
    this.spd.set(source.spd);
    this.def.set(source.def);
    this.bal.set(source.bal);
    this.sla.set(source.sla);
    this.smh.set(source.smh);
    this.pir.set(source.pir);
    this.spr.set(source.spr);
    this.foc.set(source.foc);
    this.ham.set(source.ham);
    this.pur.set(source.pur);
    this.par.set(source.par);
    this.mel.set(source.mel);
    this.sol.set(source.sol);
    this.hp.set(source.hp);*/

    this.entityStates = source.entityStates;
    
    /*for (var i in this.modelFiles) {
        this.modelFiles[i] = source.modelFiles[i];
    }*/

  }

  randomizationGroup() {
    if (!this.randomizable) {
      return null;
    }

    var group = this.area.name.split("_world")[0] + "_world";

    if (this.flyingRandomizable) {
      group += "-flying";
    }

    if (this.gateKeeperRandomizable) {
      group += "-gateKeeper";
    }

    group += "-textureCost"+this.textureCost;

    return group;
  }

  swap(source) {
    binSwap(source.bin, source.offset_in_file, this.bin, this.offset_in_file, CREATURE_SIZE);
    var tmp = this.name;
    this.name = source.name;
    source.name = tmp;
/*
    binSwap(source.bin, source.offset_in_file, this.bin, this.offset_in_file, CREATURE_SIZE);
    var tmp = this.name;
    this.name = source.name;
    source.name = tmp;

    /*this.str.swap(source.str);
    this.spd.swap(source.spd);
    this.def.swap(source.def);
    this.bal.swap(source.bal);
    this.sla.swap(source.sla);
    this.smh.swap(source.smh);
    this.pir.swap(source.pir);
    this.spr.swap(source.spr);
    this.foc.swap(source.foc);
    this.ham.swap(source.ham);
    this.pur.swap(source.pur);
    this.par.swap(source.par);
    this.mel.swap(source.mel);
    this.sol.swap(source.sol);
    this.hp.swap(source.hp);*/
/*
    // entity states list of objects - this swap requires area to rewrite that entity states section redefining the offsets
    var tmp = this.entityStates;
    this.entityStates = source.entityStates;
    source.entityStates = tmp;
*/
    /*for (var i in this.modelFiles) {
        tmp = source.modelFiles[i];
        source.modelFiles[i] = this.modelFiles[i];
        this.modelFiles[i] = tmp;
    }*/

  }

  blank() {
    binSet(this.bin, this.offset_in_file, CREATURE_SIZE, 0x00);
  }
  }

  var areaIndexCounter = 0;
  for (var i in logo_files) {
    areas.push(new Area(logo_files[i].index, logo_files[i].name, areaIndexCounter++));
  }

  originalMap.forEach(area => {
    var areaName = normalizeAreaName(area.name);
    //console.error("Setting exits for " + areaName);

    if (!global[normalizeAreaName(areaName)]) {
      console.error("Skipping since didnt find global var " + areaName);
      return;
    }
    if (!global[areaName].exits) {
      global[areaName].exits = {};
      global[areaName].totems = {};
    }
//  });
//
//  originalMap.forEach(area => {
//    var areaName = normalizeAreaName(area.name);
//    if (!global[areaName]) {
//      return;
//    }
    area.exits.forEach(exit => {
      exit.origin = area.name;
      //console.error("Setting exit " + areaName + " - " + exit.id + " = " + JSON.stringify(exit));
      global[areaName].exits[exit.id] = exit;
    });
    area.totems.forEach(totem => {
      global[areaName].totems[totem.id] = totem;
    });

    //console.log("Exit objects for area " + global[areaName].name + " - " + JSON.stringify(global[areaName].exits));
  });

  class Spawn {
    constructor(area, tfile, offset, offset_in_file, index) {
      this.area = area;
      this.tfile = tfile;
      this.offset = offset;
      this.offset_in_file = offset_in_file;
      this.index = index;

      this.chance = new UInt8(this.tfile.bin, this.offset_in_file + 0x00);
      this.type = new UInt8(this.tfile.bin, this.offset_in_file + 0x01);
      this.tileId = new UInt16(this.tfile.bin, this.offset_in_file + 0x02);

      this.x = new UInt16(this.tfile.bin, this.offset_in_file + 0x11);
      this.y = new UInt16(this.tfile.bin, this.offset_in_file + 0x13);
      this.z = new UInt16(this.tfile.bin, this.offset_in_file + 0x15);

    if (this.chance.isNull()) {
      var otherBytesZero = true;
      for (var i=11; i<SPAWN_ENTRY_SIZE; i++) {
        if (this.tfile.bin[this.offset_in_file + i] != 0x00) {
          otherBytesZero = false;
        }
      }
      this.isBlank=this.chance.isNull() && otherBytesZero;
        //if (this.isBlank) {
        //  return;
        //}
      }

      var message = "";
      message = binToStr(this.tfile.bin.slice(this.offset_in_file, this.offset_in_file + SPAWN_ENTRY_SIZE));

      this.mutexGroup = new UInt8(this.tfile.bin, this.offset_in_file + 0x0a);
      this.drop1 = new UInt16(this.tfile.bin, this.offset_in_file + 0x04);
      this.drop1Chance = new UInt8(this.tfile.bin, this.offset_in_file + 0x0b);
      this.drop2 = new UInt16(this.tfile.bin, this.offset_in_file + 0x06);
      this.drop2Chance = new UInt8(this.tfile.bin, this.offset_in_file + 0x0c);
      this.drop3 = new UInt16(this.tfile.bin, this.offset_in_file + 0x08);
      this.drop3Chance = new UInt8(this.tfile.bin, this.offset_in_file + 0x0d);

      var thisSpawn = this;
      const previousSetDrop1 = this.drop1.set.bind(this.drop1);
      this.drop1.set = function(val) {
        previousSetDrop1(val);
        thisSpawn.verifyForMemoryCrime();
      }

      const previousSetDrop2 = this.drop2.set.bind(this.drop2);
      this.drop2.set = function(val) {
        previousSetDrop2(val);
        thisSpawn.verifyForMemoryCrime();
      }

      const previousSetDrop3 = this.drop3.set.bind(this.drop3);
      this.drop3.set = function(val) {
        previousSetDrop3(val);
        thisSpawn.verifyForMemoryCrime();
      }
    }

    verifyForMemoryCrime() {
      if (this.area.hasMemoryCrime()) {
        console.log("ERROR - memory crime - used " + this.area.usedItemMemory());
      }
    }

    name() {
      if (!this.chance.isNull()) {
        return this.creature().name;
      } else {
        return "other_stuff";
      }
    }

    creature() {
      return this.area.creatures[this.type.get()];
    }

    drop1Item() {
      return itemData[this.drop1.get()] || {"name":"unknown "+this.drop1.get().toString(16)};
    }

    drop2Item() {
      return itemData[this.drop2.get()] || {"name":"unknown "+this.drop2.get().toString(16)};
    }

    drop3Item() {
      return itemData[this.drop3.get()] || {"name":"unknown "+this.drop3.get().toString(16)};
    }

    draw(mapDraw, mapSummary) {
      if (!mapDraw || this.chance.isNull() || this.name().includes("door")) {
        return;
      }

      var shortText = "" + this.index.toString(16).padEnd(2) + " " + this.name();

      var text = shortText.padEnd(25)
         + (" " + this.chance.get()).padStart(4) + "% 0x" + this.mutexGroup.get()
         + " score " + this.creature().score();

      var summary = '<span style="background:#ff8080">'+text+'</span>\n';

      mapDraw.push({
        color: "#ff0000", 
        x: this.area.tiles[this.tileId.get()].tileX.get(), 
        y: this.area.tiles[this.tileId.get()].tileZ.get(), 
        z: this.area.tiles[this.tileId.get()].tileY.get(), 
        text: shortText});

      if (!this.drop1.isNull()) {
        var text = (""+this.drop1Chance.get()).padStart(4)+"% "+this.drop1Item().name;
        mapDraw.push({
          color: "#ffff00", 
          x: this.area.tiles[this.tileId.get()].tileX.get(), 
          y: this.area.tiles[this.tileId.get()].tileZ.get(), 
          z: this.area.tiles[this.tileId.get()].tileY.get(), 
          text: text
        });
        summary += '<span style="background:#ffff00">'+text+'</span>\n';
      }

      if (!this.drop2.isNull()) {
        var text = (""+this.drop2Chance.get()).padStart(4)+"% "+this.drop2Item().name;
        mapDraw.push({
          color: "#ffff00", 
          x: this.area.tiles[this.tileId.get()].tileX.get(), 
          y: this.area.tiles[this.tileId.get()].tileZ.get(), 
          z: this.area.tiles[this.tileId.get()].tileY.get(), 
          text: text
        });
        summary += '<span style="background:#ffff00">'+text+'</span>\n';
      }

      if (!this.drop3.isNull()) {
        var text = (""+this.drop3Chance.get()).padStart(4)+"% "+this.drop3Item().name;
        mapDraw.push({
          color: "#ffff00", 
          x: this.area.tiles[this.tileId.get()].tileX.get(), 
          y: this.area.tiles[this.tileId.get()].tileZ.get(), 
          z: this.area.tiles[this.tileId.get()].tileY.get(), 
          text: text
        });
        summary += '<span style="background:#ffff00">'+text+'</span>\n';
      }

      mapSummary.push(summary);
    }

    toReadableString() {
      return "" + this.index.toString(16).padEnd(5) + ("" + this.chance.get()).padStart(4) + "% " + this.name().padEnd(20)
      + " "
      + "  tileId("+this.tileId.get().toString(16).padStart(4)+") "
      + "  pos("+this.x.get().toString(16).padStart(4)+","+this.y.get().toString(16).padStart(4)+","+this.z.get().toString(16).padStart(4)+") "
      + (!this.drop1.isNull() ? "[drop "+(""+this.drop1Chance.get()).padStart(3)+"% " + this.drop1Item().name.padEnd(30) + "]": "".padEnd(42))
      + (!this.drop2.isNull() ? "[drop "+(""+this.drop2Chance.get()).padStart(3)+"% " + this.drop2Item().name.padEnd(30) + "]": "".padEnd(42))
      + (!this.drop3.isNull() ? "[drop "+(""+this.drop3Chance.get()).padStart(3)+"% " + this.drop3Item().name.padEnd(30) + "]": "".padEnd(42))
      + " bin "+binToStr(this.tfile.bin.slice(this.offset_in_file, this.offset_in_file+SPAWN_ENTRY_SIZE));
    }

    toString() {
      return "\"spawn_" + (this.index.toString(16) + "\"").padEnd(3) + ":{"
      + "\"chance\":" + (""+this.chance.get()).padEnd(3) 
      + ",\"name\":\"" + (this.name() + "\"").padEnd(21)
      + ",\"tileId\":\"" + (this.tileId.get() + "\"").padEnd(16)
      + ",\"x\":" + (this.x.get() + "").padEnd(10)
      + ",\"y\":" + (this.y.get() + "").padEnd(10)
      + ",\"z\":" + (this.z.get() + "").padEnd(10)
      + (!this.mutexGroup.isNull() ? ",\"group\":" + this.mutexGroup.get(): "")
      + ",\"drop\":["
      + (!this.chance.isNull() && !this.drop1.isNull() ? ("{\"chance\":" + (this.drop1Chance.get() +",").padEnd(4) + "\"name\":\"" + (this.drop1Item().name+"\"").padEnd(30) + ",\"itemId\":\"" + this.drop1 + "\"}").padEnd(48) : "")
      + (!this.chance.isNull() && !this.drop2.isNull() ? (",{\"chance\":" + (this.drop2Chance.get() +",").padEnd(4) + "\"name\":\"" + (this.drop2Item().name+"\"").padEnd(30) + ",\"itemId\":\"" + this.drop2 + "\"}").padEnd(48) : "")
      + (!this.chance.isNull() && !this.drop3.isNull() ? (",{\"chance\":" + (this.drop3Chance.get() +",").padEnd(4) + "\"name\":\"" + (this.drop3Item().name+"\"").padEnd(30) + ",\"itemId\":\"" + this.drop3 + "\"}").padEnd(48) : "")
      + "]}";
    }

    set(source) {
      binCopy(source.tfile.bin, source.offset_in_file, this.tfile.bin, this.offset_in_file, SPAWN_ENTRY_SIZE);
    }

    swap(source) {
      binSwap(source.tfile.bin, source.offset_in_file, this.tfile.bin, this.offset_in_file, SPAWN_ENTRY_SIZE);
    }

    blank() {
      for (var i = 0; i < SPAWN_ENTRY_SIZE; i++) {
        this.tfile.bin[this.offset_in_file + i] = 0x00;
      }
      this.chance.set(0xff);
    }
  }

  function fullJSON() {
    var str = "{\"items\":[\n";
    items.forEach(obj => str += " " + obj + ",\n");
    str+="], \"areas\":[";
    areas.forEach(obj => { if (!obj.name || obj.name.endsWith("door")) return; str += " " + obj + ",\n"; });
    str+="]}";
    return str;
  }

  function loadCreatureTextureFiles(stDir, params) {
    // model files
    let modelFileNames = [
      stDir + path.sep + "ST" + path.sep + "CHR0" + path.sep + "M00.T", stDir + path.sep + "ST" + path.sep + "CHR0" + path.sep + "M01.T", stDir + path.sep + "ST" + path.sep + "CHR0" + path.sep + "M02.T", stDir + path.sep + "ST" + path.sep + "CHR0" + path.sep + "M03.T", stDir + path.sep + "ST" + path.sep + "CHR0" + path.sep + "M04.T", stDir + path.sep + "ST" + path.sep + "CHR0" + path.sep + "M05.T", stDir + path.sep + "ST" + path.sep + "CHR0" + path.sep + "M06.T",stDir + path.sep + "ST" + path.sep + "CHR0" + path.sep + "M07.T", stDir + path.sep + "ST" + path.sep + "CHR0" + path.sep + "M08.T", stDir + path.sep + "ST" + path.sep + "CHR0" + path.sep + "M09.T",
      stDir + path.sep + "ST" + path.sep + "CHR1" + path.sep + "M10.T", stDir + path.sep + "ST" + path.sep + "CHR1" + path.sep + "M11.T", stDir + path.sep + "ST" + path.sep + "CHR1" + path.sep + "M12.T", stDir + path.sep + "ST" + path.sep + "CHR1" + path.sep + "M13.T", stDir + path.sep + "ST" + path.sep + "CHR1" + path.sep + "M14.T", stDir + path.sep + "ST" + path.sep + "CHR1" + path.sep + "M15.T",stDir + path.sep + "ST" + path.sep + "CHR1" + path.sep + "M16.T", stDir + path.sep + "ST" + path.sep + "CHR1" + path.sep + "M17.T", stDir + path.sep + "ST" + path.sep + "CHR1" + path.sep + "M18.T",stDir + path.sep + "ST" + path.sep + "CHR1" + path.sep + "M19.T",
      stDir + path.sep + "ST" + path.sep + "CHR2" + path.sep + "M20.T", stDir + path.sep + "ST" + path.sep + "CHR2" + path.sep + "M21.T",stDir + path.sep + "ST" + path.sep + "CHR2" + path.sep + "M22.T",stDir + path.sep + "ST" + path.sep + "CHR2" + path.sep + "M23.T", stDir + path.sep + "ST" + path.sep + "CHR2" + path.sep + "M24.T", stDir + path.sep + "ST" + path.sep + "CHR2" + path.sep + "M25.T", stDir + path.sep + "ST" + path.sep + "CHR2" + path.sep + "M26.T", stDir + path.sep + "ST" + path.sep + "CHR2" + path.sep + "M27.T", stDir + path.sep + "ST" + path.sep + "CHR2" + path.sep + "M28.T",stDir + path.sep + "ST" + path.sep + "CHR2" + path.sep + "M29.T",
      stDir + path.sep + "ST" + path.sep + "CHR3" + path.sep + "M30.T",stDir + path.sep + "ST" + path.sep + "CHR3" + path.sep + "M31.T",stDir + path.sep + "ST" + path.sep + "CHR3" + path.sep + "M32.T", stDir + path.sep + "ST" + path.sep + "CHR3" + path.sep + "M33.T",stDir + path.sep + "ST" + path.sep + "CHR3" + path.sep + "M34.T", stDir + path.sep + "ST" + path.sep + "CHR3" + path.sep + "M35.T", stDir + path.sep + "ST" + path.sep + "CHR3" + path.sep + "M36.T",stDir + path.sep + "ST" + path.sep + "CHR3" + path.sep + "M37.T", stDir + path.sep + "ST" + path.sep + "CHR3" + path.sep + "M38.T",stDir + path.sep + "ST" + path.sep + "CHR3" + path.sep + "M39.T",
      stDir + path.sep + "ST" + path.sep + "CHR4" + path.sep + "M40.T", stDir + path.sep + "ST" + path.sep + "CHR4" + path.sep + "M41.T"
    ];
    for (var i in modelFileNames) {
      let modelFile = new TFILEReader(modelFileNames[i]).readTFormat();
          if (!areasByOriginalIndex[i]) {
              continue;
          }
      areasByOriginalIndex[i].modelFile = modelFile;
      for (var c in areasByOriginalIndex[i].creatures) {
        if (c>14) {
          continue;
        }
        let creature = areasByOriginalIndex[i].creatures[c];
        creature.modelFiles = [
          modelFile.files[c*5+1].fileName,
          modelFile.files[c*5+2].fileName,
          modelFile.files[c*5+3].fileName,
          modelFile.files[c*5+4].fileName,
          modelFile.files[c*5+5].fileName,
        ]

              console.log("Loading texture for creature " + areasByOriginalIndex[i].name + "/" + creature.name + " file " + modelFile.files[c*5+2].fileName);

              creature.texture = new TIMTextureFile(modelFile.files[c*5+2].bin);
              //creature.texture.randomize(params.colorRandomizationCreatures, params.colorValueFactor);
              creature.textureCost = Math.ceil(creature.texture.bin.length / 30720);

        modelFile.files[c*5+2].setCheckSum();
        fs.writeFileSync(modelFile.files[c*5+2].fileName, Buffer.from(modelFile.files[c*5+2].bin));
        if (modelFile.files[c*5+2].bin && modelFile.files[c*5+2].bin.length) {
          fs.writeFileSync(modelFile.files[c*5+2].fileName + ".tim", Buffer.from(modelFile.files[c*5+2].bin));
        }
      }
    }
  }

  function setup(FDAT, stDir, params) {

    console.log("\n** Item info dump");
    for (var i in items) {
      items[i].setup(FDAT);
    }

    console.log("\n** Map info dump");
    for (var i in areas) {
      areas[i].setup(FDAT, params);
    }

    loadCreatureTextureFiles(stDir, params);

    fs.writeFileSync("game_data.js", "global.GAME_DATA=" + fullJSON() + ";");

  }

  module.exports = {
    logo_files: logo_files,
    areas: areas,
    setup: setup
  };
