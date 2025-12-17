'use strict';

const randomizer_common = require('./randomizer_common');
const data_model = require('./data_model');
const map_shuffler = require('./map_shuffler');
const randomizer_map = require('./randomizer_map');
const fs = require('fs');
const path = require('path');
const util = require('util');
const replaceAll = require('string.prototype.replaceall');

function randomize(paramsFile, stDir) {

    for (var i = 2; i < process.argv.length; i++) {
        if (process.argv[i] == "-toNotGenerateImages") {
            global.toNotGenerateImages = true;
        }
    }

    let params = JSON.parse(fs.readFileSync(paramsFile));
    let changeSetPath = path.dirname(paramsFile);
    
    // Safety check: Don't write output files to params/ folder
    if (changeSetPath.endsWith('params') || changeSetPath.endsWith('params' + path.sep)) {
        console.error("ERROR: Cannot run randomize.js directly with params file in params/ folder.");
        console.error("Please use mod.js instead: npm run mod \"path/to/st.bin\" \"" + paramsFile + "\"");
        console.error("Or copy the params file to a spoilers directory first.");
        process.exit(1);
    }
    
    let changeSetFile = changeSetPath + path.sep + "changeset.json"
    console.log(params);

    const logFileRandomize = fs.openSync(changeSetPath + path.sep + 'randomize.txt', 'w');
    //const logFileRandomize = fs.createWriteStream(changeSetPath + path.sep + 'randomize.txt', {flags: 'w+'});
    console.log = function() {
        //logFileRandomize.write(util.format.apply(null, arguments) + '\n');
        fs.writeSync(logFileRandomize, util.format.apply(null, arguments) + '\n');
    }
    
    // Task #24: Redirect console.error to capture circle spin algorithm logs
    console.error = function() {
        fs.writeSync(logFileRandomize, util.format.apply(null, arguments) + '\n');
    }

    if (!paramsFile || !paramsFile.endsWith(".json")) {
        console.log("ERROR - didn't provide .json file part as argument.");
        process.exit(1);
        return;
    }

    if (!stDir) {
        console.log("ERROR - didn't provide path to shadow tower extracted iso.");
        process.exit(1);
        return;
    }

    const PRESET_NO_CHANGE = "no-change";
    const PRESET_FIX_KING_HOPPER = "fix-king-hopper";
    const PRESET_APPLY_DIRECTIVES = "apply-directives";
    const PRESET_ANY_PRC = "any%";
    const PRESET_100_PRC = "100%";
    const PRESET_COMEDY = "comedy";
    const PRESET_BONANZA = "bonanza";
    const PRESET_SCARY_GAME = "scary-game";

    const DIFFICULTY_EASY = "easy";
    const DIFFICULTY_EXTREME_EASY = "extreme-easy";
    const DIFFICULTY_MEDIUM = "medium";
    const DIFFICULTY_HARD = "hard";
    const DIFFICULTY_VERY_HARD = "very-hard";
    const DIFFICULTY_EVEN_HARDER = "even-harder";

    var PROGRESSIVENESS_FLAT = "flat";
    var PROGRESSIVENESS_MEDIUM = "medium";
    var PROGRESSIVENESS_INCREASED = "increased";
    var PROGRESSIVENESS_CRAZY = "crazy";

    var KEEP_ON_CERBERUS = "keep-on-cerberus";
    var FIERY_KEY_IN_FIRE_WORLD = "fiery-key-in-fire-world";
    var FIERY_KEY_ANYWHERE_BEFORE_ASHEN_CAVERN = "fiery-key-anywhere-before-ashen-cavern";
    var FLAMING_KEY_IN_THE_FIRST_AREA = "flaming-key-in-the-first-area";

    var factorByDificultyParam = {
        "extreme-easy": 0.1,
        "easy": 0.5,
        "medium": 1,
        "hard": 1.3,
        "very-hard": 1.6,
        "even-harder": 2
    };

    params.difficulty = params.difficulty || "medium";
    if (!params.fieryKeyFlamingKeyDrop) {
        params.fieryKeyFlamingKeyDrop = KEEP_ON_CERBERUS;
    }

    var difficultyFactor = factorByDificultyParam[params.difficulty];
    var smoothDifficultyFactor = (2 + difficultyFactor)/3;
    var sharpDifficultyFactor = difficultyFactor * difficultyFactor * difficultyFactor;

    var COLLECTABLE_UNIQUES_PROPORTION=0.25; // 25% will be collectable, others will be drops
    var CHANCE_OF_UNIQUE_DROP=0.45; // 45% each creature has chance of dropping a unique
    var CHANCE_OF_CONSUMABLE_DROP=0.5; // 50% each creature has chance of dropping consumable
    var UNIQUES_SEQUENCE_RANDOMIZATION_SPAN=0.2; // at first drop, chance of getting any of 20% first uniques, so on
    var PROPORTION_OF_COLLECTABLE_BEING_UNIQUES=0.3; // 30% of collectables will be uniques, the rest will be consumables
    var PERCENTAGE_FOR_REPLACEMENT_SECONDARY_BY_PRIMARY=Math.min(50,Math.max(20/sharpDifficultyFactor,1));

    // Drops proportion affected by difficulty
    //CHANCE_OF_UNIQUE_DROP=CHANCE_OF_UNIQUE_DROP / smoothDifficultyFactor; - Not adding more items for easy modes. -> changing it, so difficulty doesn't affect quantity. Impossible to have many items around, that cause texture glitch and freezes.
    PROPORTION_OF_COLLECTABLE_BEING_UNIQUES=PROPORTION_OF_COLLECTABLE_BEING_UNIQUES;
    UNIQUES_SEQUENCE_RANDOMIZATION_SPAN=UNIQUES_SEQUENCE_RANDOMIZATION_SPAN;

    const mapFolder = changeSetPath;
    if (!fs.existsSync(mapFolder + path.sep + 'maps')) {
        fs.mkdirSync(mapFolder + path.sep + 'maps');
    }
    // Task 7: Copy libs folder for local neo4jd3/d3 libraries
    if (!fs.existsSync(mapFolder + path.sep + 'libs')) {
        fs.mkdirSync(mapFolder + path.sep + 'libs');
    }
    fs.copyFileSync('maps.html', changeSetPath + path.sep + 'maps.html');
    fs.copyFileSync('maps' + path.sep + 'libs' + path.sep + 'd3.min.js', changeSetPath + path.sep + 'libs' + path.sep + 'd3.min.js');
    fs.copyFileSync('maps' + path.sep + 'libs' + path.sep + 'neo4jd3.min.js', changeSetPath + path.sep + 'libs' + path.sep + 'neo4jd3.min.js');
    fs.copyFileSync('maps' + path.sep + 'libs' + path.sep + 'neo4jd3.min.css', changeSetPath + path.sep + 'libs' + path.sep + 'neo4jd3.min.css');
    fs.copyFileSync('maps' + path.sep + 'libs' + path.sep + 'mermaid.min.js', changeSetPath + path.sep + 'libs' + path.sep + 'mermaid.min.js'); // Task 7: Add mermaid

    let tFilePath = stDir + path.sep + "ST" + path.sep + "COM" + path.sep + "FDAT.T";
    var tfileOriginal = new TFILEReader(tFilePath).readTFormat();
    var tfile = new TFILEReader(tFilePath).readTFormat();

    if (params.seed) {
        seedRandom(params.seed);
        console.log("Randomization - Using given seed " + params.seed);
    } else {
        var seed = useRandomSeed();
        console.log("Randomization - Using generated seed " + seed);
    }

    data_model.setup(tfile, stDir, params);

    const logFile2 = fs.openSync(changeSetPath + path.sep + 'readable.txt', 'w');
    //const logFile2 = fs.createWriteStream(changeSetPath + path.sep + 'readable.txt', {flags: 'w+'});
    console.log = function() {
        //logFile2.write(util.format.apply(null, arguments) + '\n');
        fs.writeSync(logFile2, util.format.apply(null, arguments) + '\n')
    }
    console.log("Parameters - " + JSON.stringify(params));

    //const shuffle = JSON.parse(fs.readFileSync("./shuffle2.json"));
    const shuffle = map_shuffler(params, stDir);

    // Task #21: Custom Door Assignment for testing specific area connections
    // NOTE: This is for TESTING only - it directly assigns door destinations without full swap logic
    if (params.customDoorSwaps && params.customDoorSwaps.length > 0) {
        console.log("DEBUG ------------------ Applying custom door assignments");
        
        params.customDoorSwaps.forEach(swap => {
            console.log(`Custom assignment: ${swap.from} exit ${swap.exitId} -> ${swap.to} entrance ${swap.entranceId}`);
            
            // Find areas in shuffle.map (uses original names like shadow_tower_part1a)
            var fromAreaInMap = shuffle.map.find(a => a.name == swap.from);
            var toAreaInMap = shuffle.map.find(a => a.name == swap.to);
            
            if (!fromAreaInMap) {
                console.error(`ERROR - Custom assignment: source area not found in map: ${swap.from}`);
                return;
            }
            if (!toAreaInMap) {
                console.error(`ERROR - Custom assignment: destination area not found in map: ${swap.to}`);
                return;
            }
            
            // Find the exit in the source area
            var fromExit = fromAreaInMap.exits.find(e => e.id == swap.exitId);
            
            if (!fromExit) {
                console.error(`ERROR - Custom assignment: exit ${swap.exitId} not found in area ${swap.from}`);
                return;
            }
            
            // Task #21: Find an exit in ANY area that goes TO the destination area
            // We'll copy that exit's destination coordinates to make our exit also go there
            var exitThatGoesToDest = null;
            var sourceAreaForExit = null;
            for (var area of shuffle.map) {
                for (var exit of area.exits) {
                    if (exit.dest == swap.to && exit.wayBackId == swap.entranceId) {
                        exitThatGoesToDest = exit;
                        sourceAreaForExit = area;
                        break;
                    }
                }
                if (exitThatGoesToDest) break;
            }
            
            if (!exitThatGoesToDest) {
                console.error(`ERROR - Could not find any exit that goes to ${swap.to} with wayBackId ${swap.entranceId}`);
                return;
            }
            
            // Update the map: make fromExit point to destination
            fromExit.dest = swap.to;
            fromExit.world = toAreaInMap.world;
            fromExit.wayBackId = swap.entranceId;
            
            // Apply the binary changes by copying from the exit that goes to destination
            var fromArea = data_model.areas.find(a => normalizeAreaName(a.name) == normalizeAreaName(swap.from));
            var sourceArea = data_model.areas.find(a => normalizeAreaName(a.name) == normalizeAreaName(sourceAreaForExit.name));
            
            if (fromArea && sourceArea) {
                var fromExitObj = fromArea.objects[parseInt(swap.exitId)];
                var sourceExitObj = sourceArea.objects[parseInt(exitThatGoesToDest.id)];
                
                if (fromExitObj && sourceExitObj) {
                    fromExitObj.setExit(sourceExitObj, shuffle.map);
                }
            }
            
            console.log(`  Assigned: ${swap.from}/${swap.exitId} now leads to ${swap.to}/${swap.entranceId}`);
        });
        
        console.log("DEBUG ------------------ Custom door assignments complete");
        
        // Task #21: Re-write map.json to include the custom assignments
    }

    fs.writeFileSync(changeSetPath + path.sep + 'map-with-walk-detail.json', JSON.stringify(shuffle, null, 2));
    delete shuffle.explanation;

    fs.writeFileSync(changeSetPath + path.sep + 'map.json', JSON.stringify(shuffle, null, 2));

    var map = new MapShuffle(shuffle.map);
    map.applyMap(data_model);

    //Innofensive shift to demonstrate how it works
    //shadow_tower_part1.objects[0].destinationYFineShift.set(-5);
    //shadow_tower_part1.objects[0].destinationXFineShift.set(-5);
    //shadow_tower_part1.objects[0].destinationZFineShift.set(-5);

    var walkDescription = "Shadow Tower walk";
    var currentArea = "shadow_tower_part1a";
    shuffle.walk.forEach(walk => {
        var exitId = normalizeAreaName(currentArea) + "/" + walk.id;
        var wayBackId = normalizeAreaName(walk.dest) + "/" + walk.wayBackId;
        walkDescription += "\n"
            + (exitsNames[exitId] || exitId) + " -> "
            + readableName[walk.dest].replace("\n", " ")
            + (walk.id == "jump" ? "" : " (" + (exitsNames[wayBackId] || wayBackId) + ")");
        currentArea = walk.dest;
    });
    fs.writeFileSync(changeSetPath + path.sep + 'walk.txt', walkDescription);

    console.log("DEBUG - Items randomization - Collectables/drops proportion " + 100*COLLECTABLE_UNIQUES_PROPORTION + "% collectables / " + 100*(1-COLLECTABLE_UNIQUES_PROPORTION) + "% drops.");
    console.log("");
    console.log("DEBUG - Items randomization - " + 100*CHANCE_OF_UNIQUE_DROP + "% of spawns will drop a unique.");
    console.log("");
    console.log("DEBUG - Items randomization - " + 100*CHANCE_OF_CONSUMABLE_DROP + "% of other spawns will drop a consumable.");
    console.log("");
    console.log("DEBUG - Items randomization - " + 100*UNIQUES_SEQUENCE_RANDOMIZATION_SPAN + "% from first of total items available from start.");
    console.log("");
    console.log("DEBUG - Items randomization - " + 100*PROPORTION_OF_COLLECTABLE_BEING_UNIQUES + "% of collectable will be uniques, " + 100*(1-PROPORTION_OF_COLLECTABLE_BEING_UNIQUES) + "% will be consumables.");
    console.log("");
    console.log("DEBUG - Items randomization - " + PERCENTAGE_FOR_REPLACEMENT_SECONDARY_BY_PRIMARY + "% of secondary consumables will be replaced by primary.");
    console.log("");

    var areasBeforePoisonousCavern = [];
    for (var a in areas) {
        if (areas[a].name == 'earth_world_poisonous_cavern') {
            break;
        }
        areasBeforePoisonousCavern.unshift(areas[a]);
    }

    var areaTargetForFieryKeyFlammingKey=null;

    if (params.fieryKeyFlamingKeyDrop == FIERY_KEY_IN_FIRE_WORLD) {
        const candidateAreas = areas.filter(area => area.name.includes('fire'));
        areaTargetForFieryKeyFlammingKey = candidateAreas[Math.floor((Math.random()*candidateAreas.length))];
    } else if (params.fieryKeyFlamingKeyDrop == FIERY_KEY_ANYWHERE_BEFORE_ASHEN_CAVERN) {
        var candidateAreas = [];
        for (var a in areas) {
            candidateAreas.unshift(areas[a]);
            if (areas[a].name == 'fire_world_ashen_cavern') {
                break;
            }
        }
        areaTargetForFieryKeyFlammingKey = candidateAreas[Math.floor((Math.random()*candidateAreas.length))];
    } else if (params.fieryKeyFlamingKeyDrop == FLAMING_KEY_IN_THE_FIRST_AREA) {
        areaTargetForFieryKeyFlammingKey = areas[0];
    }

    function setCreature(creature1, creature2, changeSet) {
        if (creature1 == creature2) {
            return;
        }

        console.log("Setting creature " + creature1.name + " ("+creature1.area.name + ") to " + creature2.name + " (" + creature2.area.name + ")");

        // model
        for (var i in creature2.modelFiles) {
            if (i==2) {
                console.log("  fileCopy " + creature2.modelFiles[i] + "->" + creature1.modelFiles[i]);
            }
            changeSet.push({
                "fileCopy": {
                    "from": creature2.modelFiles[i],
                    "to": creature1.modelFiles[i]
                }
            });
        }

        creature1.set(creature2);
        creature1.entityStates = creature2.entityStates;
    }


    function swapCreatures(creature1, creature2, changeSet) {
        if (creature1 == creature2) {
            return;
        }

        console.log("Swapping creatures " + creature1.name + " ("+creature1.area.name + ") and " + creature2.name + " (" + creature2.area.name + ")");

        // model
        for (var i in creature1.modelFiles) {
            if (i==2) {
                console.log("  fileSwap " + creature1.modelFiles[i] + "-" + creature2.modelFiles[i]);
            }
            changeSet.push({
                "fileSwap": {
                    "file1": creature1.modelFiles[i],
                    "file2": creature2.modelFiles[i]
                }
            });
        }

        // entity bin
        creature1.swap(creature2);

        // entity states list of objects - this swap requires area to rewrite that entity states section redefining the offsets
        var tmp = creature1.entityStates;
        creature1.entityStates = creature2.entityStates;
        creature2.entityStates = tmp;
/*
        creature1.attack1.set(1);
        creature1.attack2.set(1);
        creature1.magic1.set(1);
        creature1.weaponDefense1.set(1);
        creature1.weaponDefense2.set(1);
        creature1.weaponDefense3.set(1);
        creature1.magDefense1.set(1);
        creature1.magDefense2.set(1);
        creature1.magDefense3.set(1);
        creature1.magDefense4.set(1);
        creature1.magDefense5.set(1);
        creature1.attacks.forEach(attack => attack.set(1));

        creature2.attack1.set(1);
        creature2.attack2.set(1);
        creature2.magic1.set(1);
        creature2.weaponDefense1.set(1);
        creature2.weaponDefense2.set(1);
        creature2.weaponDefense3.set(1);
        creature2.magDefense1.set(1);
        creature2.magDefense2.set(1);
        creature2.magDefense3.set(1);
        creature2.magDefense4.set(1);
        creature2.magDefense5.set(1);
        creature2.attacks.forEach(attack => attack.set(1));
*/
/*
        // entity bin
        creature1.swap(creature2);

        //creature1.attack1.swap(creature2.attack1);
        //creature1.attack2.swap(creature2.attack2);
        //creature1.magic1.swap(creature2.magic1);
        //creature1.something1.swap(creature2.something1);
        //creature1.something2.swap(creature2.something2);
        //creature1.something3.swap(creature2.something3);
        //creature1.something4.swap(creature2.something4);
*/
/*
        for (var i in creature1.area.creatures) {
            var candidateForSimilar2 = creature1.area.creatures[i];
            if (candidateForSimilar2 != creature1 &&
                candidateForSimilar2.name.substring(3) == creature1.name.substring(3)) {
                console.log("Setting similar creature to same as swapped: " + candidateForSimilar2.name + " getting assigned to be like " + creature1.name);
                candidateForSimilar2.set(creature1);

                for (var i in creature2.modelFiles) {
                    if (i==2) {
                        console.log("  fileCopy " + creature2.modelFiles[i] + "->" + candidateForSimilar2.modelFiles[i]);
                    }
                    changeSet.push({
                        "fileCopy": {
                            "from": creature2.modelFiles[i],
                            "to": candidateForSimilar2.modelFiles[i]
                        }
                    });
                }
            }
        }

        for (var i in creature2.area.creatures) {
            var candidateForSimilar1 = creature2.area.creatures[i];
            if (candidateForSimilar1 != creature2 &&
                candidateForSimilar1.name.substring(3) == creature2.name.substring(3)) {
                console.log("Setting similar creature to same as swapped: " + candidateForSimilar1.name + " getting assigned to be like " + creature2.name);
                candidateForSimilar1.set(creature2);

                for (var i in creature1.modelFiles) {
                    if (i==2) {
                        console.log("  fileCopy " + creature1.modelFiles[i] + "->" + candidateForSimilar1.modelFiles[i]);
                    }
                    changeSet.push({
                        "fileCopy": {
                            "from": creature1.modelFiles[i],
                            "to": candidateForSimilar1.modelFiles[i]
                        }
                    });
                }
            }
        }*/
    }

    let changeSet = [];

    // Directives

    function presetKingHopperFixforEachCreatureSpawn(spawn, area, index) {
        if (spawn.name().includes("king_hopper")) {
            console.log("Setting spawn change to 100% and fixing mutex group, creature " + spawn.name());
            spawn.chance.set(100);
            spawn.mutexGroup.set(14);
        }
    }

    function presetDirectivesforEachCreatureSpawn(spawn, area, index) {
        if (!params.removeDirectiveRemovalOfRandomness) {

            if (nonRemovable.filter(name => spawn.name().includes(name)).length) {
                return;
            }
            if (spawn.chance.get() != 100 && spawn.chance.get() != 0) {
                console.log("Setting spawn chance to 100%, creature " + spawn.name() + " where it was " + spawn.chance.get());
                spawn.chance.set(100);
            }
            if (!spawn.drop1.isNull() && spawn.drop1Chance.get() != 100) {
                console.log("Setting drop chance to 100%, creature " + spawn.name() + " drop " + items[spawn.drop1.get()].name + " where it was " + spawn.drop1Chance.get());
                spawn.drop1Chance.set(100);
            }
            if (!spawn.drop2.isNull() && spawn.drop2Chance.get() != 100) {
                console.log("Setting drop chance to 100%, creature " + spawn.name() + " drop " + items[spawn.drop2.get()].name + " where it was " + spawn.drop2Chance.get());
                spawn.drop2Chance.set(100);
            }
            if (!spawn.drop3.isNull() && spawn.drop3Chance.get() != 100) {
                console.log("Setting drop chance to 100%, creature " + spawn.name() + " drop " + items[spawn.drop3.get()].name + " where it was " + spawn.drop3Chance.get());
                spawn.drop3Chance.set(100);
            }
        }
    }
    
    function presetDirectivesforEachItem(item) {
        if (!params.removeDirectiveRemovalOfHPMPRecovery) {
            if (item.attribute1.getAttributeType() == ATTR_HP_RECOVERY) {
                item.attribute1.setAttributeType(ATTR_NONE);
                console.log("Removing ATTR_HP_RECOVERY from equip " + item.name);
            }
            if (item.attribute2.getAttributeType() == ATTR_HP_RECOVERY) {
                item.attribute2.setAttributeType(ATTR_NONE);
                console.log("Removing ATTR_HP_RECOVERY from equip " + item.name);
            }
            if (item.attribute1.getAttributeType() == ATTR_MP_RECOVERY) {
                item.attribute1.setAttributeType(ATTR_NONE);
                console.log("Removing ATTR_MP_RECOVERY from equip " + item.name);
            }
            if (item.attribute2.getAttributeType() == ATTR_MP_RECOVERY) {
                item.attribute2.setAttributeType(ATTR_NONE);
                console.log("Removing ATTR_MP_RECOVERY from equip " + item.name);
            }
        }
    }

    // Difficulty

    var equipsAttributeFactor = 1 / difficultyFactor;
    var creatureAttributeFactor = difficultyFactor;

    function applyDifficultyForEachValidCreature(creature, area, index) {
        // This is actually attributes increase to be earned once creature is killed.
        // May be used to tweak progression.
        //creature.str.set(Math.min(255, Math.ceil(creature.str.get() * creatureAttributeFactor)));
        //creature.spd.set(Math.min(255, Math.ceil(creature.spd.get() * creatureAttributeFactor)));
        //creature.def.set(Math.min(255, Math.ceil(creature.def.get() * creatureAttributeFactor)));
        //creature.bal.set(Math.min(255, Math.ceil(creature.bal.get() * creatureAttributeFactor)));
        //creature.sla.set(Math.min(255, Math.ceil(creature.sla.get() * creatureAttributeFactor)));
        //creature.smh.set(Math.min(255, Math.ceil(creature.smh.get() * creatureAttributeFactor)));
        //creature.pir.set(Math.min(255, Math.ceil(creature.pir.get() * creatureAttributeFactor)));
        //creature.spr.set(Math.min(255, Math.ceil(creature.spr.get() * creatureAttributeFactor)));
        //creature.foc.set(Math.min(255, Math.ceil(creature.foc.get() * creatureAttributeFactor)));
        //creature.ham.set(Math.min(255, Math.ceil(creature.ham.get() * creatureAttributeFactor)));
        //creature.pur.set(Math.min(255, Math.ceil(creature.pur.get() * creatureAttributeFactor)));
        //creature.par.set(Math.min(255, Math.ceil(creature.par.get() * creatureAttributeFactor)));
        //creature.mel.set(Math.min(255, Math.ceil(creature.mel.get() * creatureAttributeFactor)));
        //creature.sol.set(Math.min(255, Math.ceil(creature.sol.get() * creatureAttributeFactor)));

        console.log("DEBUG - Creature " + creature.name);
        
        // Fix for magic/projectile attack damage scaling
        // Scale attack values in entityState data (type 0x20 = physical attack, type 0x30 = spell/magic attack)
        if (creature.entityStates && creature.entityStates.length > 0) {
            creature.entityStates.forEach((entityState) => {
                if (entityState.type == 0x20 || entityState.type == 0x30) {
                    var attackType = entityState.type == 0x20 ? "physical" : "spell/magic";
                    // EntityStateData with type 0x20/0x30 contains attack1, attack2, attack3 (UInt16 at offsets 0x1a, 0x1c, 0x1e)
                    if (entityState.attack1) {
                        var oldValue = entityState.attack1.get();
                        var newValue = Math.min(65535, Math.ceil(oldValue * creatureAttributeFactor));
                        entityState.attack1.set(newValue);
                        console.log("  Scaled " + attackType + " attack1: " + oldValue + " -> " + newValue + " (factor: " + creatureAttributeFactor + ")");
                    }
                    if (entityState.attack2) {
                        var oldValue = entityState.attack2.get();
                        var newValue = Math.min(65535, Math.ceil(oldValue * creatureAttributeFactor));
                        entityState.attack2.set(newValue);
                        console.log("  Scaled " + attackType + " attack2: " + oldValue + " -> " + newValue + " (factor: " + creatureAttributeFactor + ")");
                    }
                    if (entityState.attack3) {
                        var oldValue = entityState.attack3.get();
                        var newValue = Math.min(65535, Math.ceil(oldValue * creatureAttributeFactor));
                        entityState.attack3.set(newValue);
                        console.log("  Scaled " + attackType + " attack3: " + oldValue + " -> " + newValue + " (factor: " + creatureAttributeFactor + ")");
                    }
                }
            });
        }
    }

    function applyDifficultyForEachItem(item) {
        if (irreplacebleKeyItems.indexOf(item.itemIndex) != -1 ||
            primaryConsumables.indexOf(item.itemIndex) != -1 ||
            secondaryConsumables.indexOf(item.itemIndex) != -1) {
            return;
        }
        item.str.set(Math.min(255, Math.ceil(item.str.get() * equipsAttributeFactor)));
        item.spd.set(Math.min(255, Math.ceil(item.spd.get() * equipsAttributeFactor)));
        item.def.set(Math.min(255, Math.ceil(item.def.get() * equipsAttributeFactor)));
        item.bal.set(Math.min(255, Math.ceil(item.bal.get() * equipsAttributeFactor)));
        item.sla.set(Math.min(255, Math.ceil(item.sla.get() * equipsAttributeFactor)));
        item.smh.set(Math.min(255, Math.ceil(item.smh.get() * equipsAttributeFactor)));
        item.pir.set(Math.min(255, Math.ceil(item.pir.get() * equipsAttributeFactor)));
        item.spr.set(Math.min(255, Math.ceil(item.spr.get() * equipsAttributeFactor)));
        item.foc.set(Math.min(255, Math.ceil(item.foc.get() * equipsAttributeFactor)));
        item.ham.set(Math.min(255, Math.ceil(item.ham.get() * equipsAttributeFactor)));
        item.pur.set(Math.min(255, Math.ceil(item.pur.get() * equipsAttributeFactor)));
        item.par.set(Math.min(255, Math.ceil(item.par.get() * equipsAttributeFactor)));
        item.mel.set(Math.min(255, Math.ceil(item.mel.get() * equipsAttributeFactor)));
        item.sol.set(Math.min(255, Math.ceil(item.sol.get() * equipsAttributeFactor)));
        item.hp.set(Math.min(255, Math.ceil(item.hp.get() * equipsAttributeFactor)));
        if (!item.weight.isNull()) {
            item.weight.set(Math.min(255, Math.ceil(item.weight.get() / equipsAttributeFactor)));
        }
        if (!item.max_dura.isNull() && item.max_dura.get()) {
            item.max_dura.set(Math.max(5, Math.min(255, Math.ceil(item.max_dura.get() * equipsAttributeFactor))));
            item.dura.set(Math.min(item.max_dura.get(), Math.ceil(item.dura.get() * equipsAttributeFactor)));
        }

        console.log("Applying factor " + equipsAttributeFactor + " to item " + item.name + ". Attributes " + "str " + item.str.get() + " spd " + item.spd.get() + " def " + item.def.get() + " bal " + item.bal.get() + " sla " + item.sla.get() + " smh " + item.smh.get() + " pir " + item.pir.get() + " spr " + item.spr.get() + " foc " + item.foc.get() + " ham " + item.ham.get() + " pur " + item.pur.get() + " par " + item.par.get() + " mel " + item.mel.get() + " sol " + item.sol.get() + " hp " + item.hp.get() + " weight " + item.weight.get() + " max_dura " + item.max_dura.get() +
            " dura " + item.dura.get());
    }

    function gotLuckToReplaceSecondaryByPrimaryConsumable() {
        return Math.random()*100 < PERCENTAGE_FOR_REPLACEMENT_SECONDARY_BY_PRIMARY;
    }

    var dropRemovalLoop=0;
    function applyDifficultyForEachSpawn(spawn, area, index) {

        var originalItem = spawn.drop1.get();
        if (secondaryConsumables.indexOf(originalItem)!=-1) {
            if (gotLuckToReplaceSecondaryByPrimaryConsumable()) {

                if (!area.hasFreeItemMemory()) {
                    console.log("DEBUG - Moderating difficulty - No free memory " + area.usedItemMemory() + ", halting drop replacement of secondary consumable (" + itemData[originalItem].name + ") by primary consumable at " + area.name + "/" + spawn.name());
                    return;
                }

                spawn.drop1.set(primaryConsumables[Math.floor((Math.random()*primaryConsumables.length))]);
                console.log("DEBUG - Moderating difficulty - by replacing drop secondary consumable (" + itemData[originalItem].name + ") by a primary consumable (" + itemData[spawn.drop1.get()].name + ") of " + area.name + "/" + spawn.name());
            }
        }

/*
        if (spawn.drop1.isNull()) {
            return;
        }
        var thisItem = itemData[spawn.drop1.get()];

        if (irreplacebleKeyItems.indexOf(thisItem.itemIndex)!=-1) {
            return;
        }

        dropRemovalLoop++;
        if (dropRemovalLoop > difficultyFactor) {
            dropRemovalLoop = 0;
            return;
        }

        console.log("Applying difficulty by removing drop " + thisItem.name + " of spawn " + spawn.name());
        */

    }

    function removeEachSpawn(spawn, area, index) {
        spawn.chance.set(0);
        spawn.drop1.null();
        spawn.drop1Chance.set(0);
        spawn.drop2.null();
        spawn.drop2Chance.set(0);
        spawn.drop3.null();
        spawn.drop3Chance.set(0);
    }

    var collectableRemovalLoop=0;
    function applyDifficultyForEachCollectable(collectable, area) {
        if (collectable.isBlank()) {
            return;
        }

        var originalItem = collectable.type.get();
        if (secondaryConsumables.indexOf(originalItem)!=-1) {
            if (gotLuckToReplaceSecondaryByPrimaryConsumable()) {

                if (!area.hasFreeItemMemory()) {
                    console.log("DEBUG - Moderating difficulty - No free memory " + area.usedItemMemory() + ", halting collectable replacement of secondary consumable (" + itemData[originalItem].name + ") by primary consumable at " + area.name);
                    return;
                }

                collectable.type.set(primaryConsumables[Math.floor((Math.random()*primaryConsumables.length))]);
                console.log("DEBUG - Moderating difficulty - by replacing secondary consumable (" + itemData[originalItem].name + ") by a primary consumable (" + itemData[collectable.type.get()].name + ") of area " + area.name);
            }
        }

        /*
        // removing equips, not doing it anymore since it was too hard
        collectableRemovalLoop++;
        if (collectableRemovalLoop > difficultyFactor) {
            collectableRemovalLoop = 0;
            return;
        }

        console.log("Applying difficulty by removing collectable " + itemData[collectable.type.get()].name + " of area " + area.name);
        */  
    }

    function removeEachCollectable(collectable, area) {
        collectable.blank();
    }

    // Guarantee poison vaccine before poisonous cavern

    var poisonVaccinesBeforePoisonousCavern = 0;
    var poisonVaccinesRequired = Math.ceil(Math.min(Math.max(4/difficultyFactor, 1), 5));
    function commentAchievedRequirementOfPoisonVaccine() {
        if (poisonVaccinesBeforePoisonousCavern >= poisonVaccinesRequired) {
            console.log("Guarantee poison vaccine - Achieved poison vaccine requirement " + poisonVaccinesBeforePoisonousCavern + "/" + poisonVaccinesRequired);
        }
    }

    function countDrop1PoisonVaccineIfAreaIsBeforePoisonousCavern(spawn, area, index) {
        if (poisonVaccinesBeforePoisonousCavern >= poisonVaccinesRequired || areasBeforePoisonousCavern.indexOf(area)==-1) {
            return;
        }
        var originalItem = spawn.drop1.get();
        if (originalItem == item_124_poison_vaccine) {
            poisonVaccinesBeforePoisonousCavern++;
            console.log("Guarantee poison vaccine - count " + poisonVaccinesBeforePoisonousCavern + "/" + poisonVaccinesRequired + ", as found one at " + area.name + "/" + spawn.name());
            commentAchievedRequirementOfPoisonVaccine();
        }
    }

    function countCollectablePoisonVaccineIfAreaIsBeforePoisonousCavern(collectable, area) {
        if (poisonVaccinesBeforePoisonousCavern >= poisonVaccinesRequired || areasBeforePoisonousCavern.indexOf(area)==-1) {
            return;
        }
        if (collectable.type.get() == item_124_poison_vaccine) {
            poisonVaccinesBeforePoisonousCavern++;
            console.log("Guarantee poison vaccine - count " + poisonVaccinesBeforePoisonousCavern + "/" + poisonVaccinesRequired + ", as found one at " + area.name + " collectable.");
            commentAchievedRequirementOfPoisonVaccine();
        }
    }

    function replaceSecondaryDropIfBeforePoisonousCavernBeforeRequirementIsAchieved(spawn, area, index) {
        if (poisonVaccinesBeforePoisonousCavern >= poisonVaccinesRequired || areasBeforePoisonousCavern.indexOf(area)==-1) {
            return;
        }
        var originalItem = spawn.drop1.get();
        if ((secondaryConsumables.indexOf(originalItem)!=-1 || primaryConsumables.indexOf(originalItem)!=-1)
            && Math.random() < 0.5) {

            if (!area.hasFreeItemMemory()) {
                console.log("Guarantee poison vaccine - No free memory " + area.usedItemMemory() + ", halting replacing drop consumable (" + itemData[originalItem].name + ") at " + area.name + "/" + spawn.name());
                return;
            }

            spawn.drop1.set(item_124_poison_vaccine);
            console.log("Guarantee poison vaccine - count " + poisonVaccinesBeforePoisonousCavern + "/" + poisonVaccinesRequired + ". Replacing drop consumable (" + itemData[originalItem].name + ") by " + itemData[spawn.drop1.get()].name + " at " + area.name + "/" + spawn.name());
            poisonVaccinesBeforePoisonousCavern++;
            commentAchievedRequirementOfPoisonVaccine();
        }
    }

    // Setting fiery key or flamming key
    function setFieryKeyOrFlammingKey(spawn, area, index) {
        if (params.fieryKeyFlamingKeyDrop == FIERY_KEY_IN_FIRE_WORLD ||
            params.fieryKeyFlamingKeyDrop == FIERY_KEY_ANYWHERE_BEFORE_ASHEN_CAVERN ||
            params.fieryKeyFlamingKeyDrop == FLAMING_KEY_IN_THE_FIRST_AREA) {
            if (spawn.drop1.get() == item_110_fiery_key) {
                console.log("Fiery Key / Flaming Key - removing item_110_fiery_key drop from " + area.name + "/" + spawn.name());
                spawn.drop1.null();
                spawn.drop1Chance.set(0);
            }
        }

        if (spawn.name() == '0d_damned_angel') {
            console.log("Fiery Key / Flaming Key - Skipping Damned Angel");
            return;
        }
        if (spawn.name() == '0c_ebony_knight') {
            console.log("Fiery Key / Flaming Key - Skipping Ebony Knight");
            return;
        }


        if (areaTargetForFieryKeyFlammingKey == area) {
            var originalItem = spawn.drop1.get();
            if (secondaryConsumables.indexOf(originalItem)!=-1 || spawn.drop1.isNull()) {
                if (params.fieryKeyFlamingKeyDrop == FIERY_KEY_IN_FIRE_WORLD ||
                    params.fieryKeyFlamingKeyDrop == FIERY_KEY_ANYWHERE_BEFORE_ASHEN_CAVERN) {
                    spawn.drop1.set(item_110_fiery_key);
                    spawn.drop1Chance.set(100);
                    console.log("Fiery Key / Flaming Key - Replacing drop consumable (" + (itemData[originalItem] ? itemData[originalItem].name : "blank") + ") by " + itemData[spawn.drop1.get()].name + " at " + area.name + "/" + spawn.name());
                } else if (params.fieryKeyFlamingKeyDrop == FLAMING_KEY_IN_THE_FIRST_AREA) {
                    spawn.drop1.set(item_131_flaming_key);
                    spawn.drop1Chance.set(100);
                    console.log("Fiery Key / Flaming Key - Replacing drop consumable (" + (itemData[originalItem] ? itemData[originalItem].name : "blank") + ") by " + itemData[spawn.drop1.get()].name + " at " + area.name + "/" + spawn.name());
                }
                areaTargetForFieryKeyFlammingKey = null;
            }
        }
    }


    // Collectables and Drops randomization

    var allUniqueItems = [
        item_47_cap, item_32_mace, item_35_morning_star, item_a1_buckler, item_1_short_sword, item_2_deadly_short_sword, item_4_long_sword, item_3_long_sword, item_a3_small_shield, item_5c_quilted_armor, item_5d_leather_armor, item_5b_quilted_armor, item_10a_cune, item_10a_cune, item_99_leg_guard, item_10a_cune, item_f_broad_sword, item_9_rapier, item_5_long_sword, item_10a_cune, item_60_scale_mail, item_5e_leather_armor, item_61_scale_mail, item_7e_metal_glove, item_10a_cune, item_a6_large_shield, item_92_steel_boots_of_resist, item_82_caustic_hand_guard, item_81_fiery_gauntlet, item_49_crown_of_resist, item_48_crown, item_10a_cune, item_8e_leather_boots, item_4a_crown_of_composure, item_a4_small_shield, item_90_steel_boots, item_b_lethal_rapier, item_23_guardian_bastard_sword, item_ac_great_shield, item_10a_cune, item_10a_cune, item_10a_cune, item_a2_buckler, item_8d_leather_boots, item_8f_hard_boots, item_79_leather_glove, item_7c_wooden_glove, item_5f_magical_leather_armor, item_36_swift_morning_star,
        item_34_shining_mace, item_4d_helm, item_7a_leather_glove, item_10a_cune, item_39_axe, item_91_steel_boots, item_7b_leather_glove, item_10a_cune, item_10a_cune, item_a7_large_shield, item_63_plate_mail, item_62_scale_mail_of_curing, item_11_broad_sword, item_10a_cune, item_33_crushing_mace, item_10a_cune, item_10a_cune, item_ec_bracelet_of_recovery, item_10a_cune, item_42_bow, item_ce_soul_ring, item_14_crushing_broad_sword, item_fb_magical_amulet, item_a5_shield_of_resist, item_10a_cune, item_c4_summoner_ring_of_fire, item_7_fiery_long_sword, item_3a_giant_axe, item_af_dark_great_shield, item_18_bastard_sword, item_e9_bracelet_of_movement, item_9b_harden_leg_guard, item_10a_cune, item_10a_cune, item_10a_cune, item_10a_cune, item_83_gauntlet,
        item_10_broad_sword, item_95_caustic_steel_boots, item_10a_cune, item_7d_wooden_glove, item_a9_large_shield_of_balance, item_10a_cune, item_10a_cune, item_10a_cune, item_a8_harden_large_shield, item_10a_cune, item_10a_cune, item_51_full_helm, item_64_plate_mail, item_4b_wizard_crown, item_fe_deadly_amulet, item_ea_bracelet_of_composure, item_10a_cune, item_b1_tower_shield, item_b3_tower_shield_of_honor, item_10a_cune, item_10a_cune, item_4f_magical_helm, item_8_silent_sword, item_2c_deadly_great_sword, item_27_great_sword, item_9a_leg_guard, item_67_plate_mail_of_curing, item_6_keenest_long_sword, item_93_steel_boots_of_curing, item_94_steel_boots_of_resist, item_c5_summoner_ring_of_fire, item_19_bastard_sword, item_50_full_helm, item_73_full_plate, item_68_plate_mail, item_3c_crushing_axe, item_b2_tower_shield, item_fc_amulet_of_movement, item_6a_fiery_plate_mail, item_ed_mind_bracelet, item_ff_amulet_of_composure, item_3d_deadly_axe, item_84_gauntlet, item_db_caustic_ring,
        item_cf_soul_ring, item_ae_shining_great_shield, item_9c_fiery_leg_guard, item_98_steel_boots_of_resist, item_a_rapier, item_c_shadow_blade, item_101_amulet_of_resist, item_16_guardian_broad_sword, item_aa_fiery_large_shield, item_fd_amulet_of_guardian, item_54_fiery_full_helm, item_10a_cune, item_10a_cune, item_10a_cune, item_10a_cune, item_10a_cune, item_10a_cune, item_10a_cune, item_10a_cune, item_96_swift_steel_boots, item_10a_cune, item_10a_cune, item_44_bow_gun, item_d8_ring_of_poison, item_6f_plate_mail_of_protect, item_b4_harden_tower_shield, item_1e_fiery_bastard_sword, item_c7_priest_ring_of_fire, item_10a_cune, item_10a_cune, item_10a_cune, item_80_metal_glove, item_37_frosty_morning_star, item_6c_caustic_plate_mail, item_9d_frosty_leg_guard, item_cb_balance_ring_of_frost, item_1f_frosty_bastard_sword, item_10a_cune, item_10a_cune, item_6b_frosty_plate_mail, item_9f_caustic_leg_guard, item_da_sorcerer_ring_of_poison, item_ca_summoner_ring_of_frost, item_10a_cune, item_cd_sorcerer_ring_of_frost, item_d7_ring_of_poison, item_b6_caustic_tower_shield, item_d9_ring_of_protect, item_c9_summoner_ring_of_frost, item_e8_bracelet_of_balance, item_e7_bracelet_of_resist, item_d3_dark_ring,
        item_ef_deadly_bracelet, item_10a_cune, item_3b_giant_axe, item_100_amulet_of_curing, item_bc_gothic_shield_of_resist, item_d_shadow_wolf, item_24_dark_sword, item_ee_mighty_ring, item_55_great_helm, item_de_caustic_sorcerer_ring, item_38_axe, item_43_warrior_bow, item_53_harden_full_helm, item_52_full_helm_of_curing, item_69_magical_plate_mail, item_10a_cune, item_4e_helm, item_10a_cune, item_10a_cune, item_dc_caustic_ring, item_10a_cune, item_10a_cune, item_dd_caustic_priest_ring, item_3f_battle_axe, item_74_plate_mail_of_honor, item_10a_cune, item_10a_cune, item_ab_great_shield, item_10a_cune, item_10a_cune, item_10a_cune, item_10a_cune, item_10a_cune, item_10a_cune, item_10a_cune, item_10a_cune, item_10a_cune, item_10a_cune, item_10a_cune, item_10a_cune, item_40_deadly_battle_axe, item_28_great_sword, item_2f_mighty_great_sword, item_3e_living_axe, item_d4_dark_ring, item_e1_ring_of_dark_souls, item_87_swift_gauntlet, item_89_arm_guard, item_b7_tower_shield_of_balance, item_df_ring_of_desire, item_c1_gothic_shield_of_rage, item_b9_gothic_shield, item_4c_devil_crown,
        item_29_great_sword, item_ba_harden_gothic_shield, item_e_shadow_tiger, item_f8_holy_bracelet, item_f9_king_bracelet, item_eb_bracelet_of_curing, item_10a_cune, item_10a_cune, item_41_keenest_battle_axe, item_1d_crushing_bastard_sword, item_c2_shinning_gothic_shield, item_ad_great_shield_of_balance, item_bd_gothic_shield_of_honor, item_9e_leg_guard_of_protect, item_8a_arm_guard_of_composure, item_70_eternal_plate_mail, item_77_plate_mail_of_rage, item_e4_ring_of_dead_spirit, item_10a_cune, item_10a_cune, item_10a_cune, item_c6_ring_of_fire_resist, item_d5_dark_priest_ring, item_d0_holy_ring_of_resist, item_d1_holy_ring_of_priest, item_e6_ring_of_drain, item_10a_cune, item_10a_cune, item_bb_gothic_shield, item_b5_tower_shield_of_protect, item_10a_cune, item_103_sorcerer_amulet, item_86_gauntlet_of_resist, item_f4_bracelet_of_composure, item_f5_deadly_bracelet, item_56_great_helm, item_30_guardian_great_sword, item_106_amulet_of_recovery, item_10a_cune, item_107_star_amulet, item_10a_cune, item_10a_cune, item_17_dragon_sword, item_f1_sorcerer_bracelet, item_f2_priest_bracelet, item_15_keenest_broad_sword, item_6d_shining_plate_mail, item_6e_dark_plate_mail, item_26_righteous_sword, item_10a_cune,
        item_10a_cune, item_10a_cune, item_10a_cune, item_10a_cune, item_10a_cune, item_10a_cune, item_10a_cune, item_10a_cune, item_10a_cune, item_10a_cune, item_10a_cune, item_21_deadly_bastard_sword, item_66_plate_mail_of_resist, item_1a_lethal_bastard_sword, item_20_shining_bastard_sword, item_1b_swift_bastard_sword, item_22_mighty_bastard_sword, item_65_harden_plate_mail, item_cc_priest_ring_of_frost, item_102_mind_amulet, item_105_amulet_of_balance, item_104_priest_amulet, item_e0_ring_of_ice, item_f7_priest_bracelet, item_88_deadly_gauntlet, item_f0_guardian_bracelet, item_57_harden_great_helm, item_45_fiery_bow_gun, item_108_amulet_of_winter, item_59_mystic_great_helm, item_10a_cune, item_10a_cune, item_b8_tower_shield_of_resist, item_8b_deadly_arm_guard, item_75_harden_full_plate, item_97_steel_boots_of_balance, item_10a_cune, item_7f_metal_glove, item_2d_keenest_great_sword, item_2e_crushing_great_sword, item_f6_harden_bracelet, item_10a_cune, item_10a_cune, item_10a_cune, item_72_holy_plate_mail, item_b0_deadly_great_shield, item_c3_holy_gothic_shield, item_fa_moon_bracelet,
        item_13_broad_sword, item_31_blood_sword, item_2a_swift_great_sword, item_109_endless_amulet, item_be_gothic_shield_of_balance, item_e3_ring_of_seal, item_c8_sorcerer_ring_of_fire, item_78_knight_plate_mail, item_76_god_plate, item_5a_holy_great_helm, item_8c_master_arm_guard, item_e5_ring_of_rage, item_bf_master_gothic_shield, item_c0_gothic_shield_of_power, item_e2_black_ring, item_d6_dark_sorcerer_ring, item_a0_holy_leg_guard, item_71_devil_plate_mail, item_d2_holy_ring, item_10a_cune, item_10a_cune, item_10a_cune, item_10a_cune, item_25_magical_bastard_sword, item_2b_fiery_great_sword
    ];

    var storeItems = [
        item_12_deadly_broad_sword, item_1c_keenest_bastard_sword, item_58_fortune_great_helm, item_85_harden_gauntlet, item_f3_bracelet_of_movement
    ];

    // Taken from the game drops and collectable consumables list
    var consumablesForRandomization = [
        item_10c_torch, item_10c_torch, item_10c_torch, item_10c_torch, item_10c_torch, item_10c_torch, item_10c_torch, item_10c_torch, item_10c_torch, item_10c_torch, item_10d_lamp, item_10d_lamp, item_10d_lamp, item_10d_lamp, item_10d_lamp, item_10d_lamp, item_10d_lamp, item_10d_lamp, item_10d_lamp, item_10e_sacred_feather, item_10e_sacred_feather, item_10e_sacred_feather, item_10e_sacred_feather, item_10e_sacred_feather, item_10e_sacred_feather, item_10e_sacred_feather, item_10e_sacred_feather, item_10e_sacred_feather, item_10e_sacred_feather, item_10e_sacred_feather, item_10e_sacred_feather, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, 
        item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11d_magic_potion, item_11d_magic_potion, item_11d_magic_potion, item_11d_magic_potion, item_11d_magic_potion, item_11d_magic_potion, item_11d_magic_potion, item_11d_magic_potion, item_11d_magic_potion, item_11d_magic_potion, item_11d_magic_potion, item_11d_magic_potion, item_11d_magic_potion, item_11d_magic_potion, item_11d_magic_potion, item_11d_magic_potion, item_11d_magic_potion, item_11d_magic_potion, item_11e_anti_venom, item_11e_anti_venom, item_11e_anti_venom, item_11e_anti_venom, item_11e_anti_venom, item_11e_anti_venom, item_11e_anti_venom, item_11e_anti_venom, item_11e_anti_venom, item_11e_anti_venom, item_11e_anti_venom, item_11e_anti_venom, item_11e_anti_venom, item_11e_anti_venom, item_11e_anti_venom, item_11e_anti_venom, item_11e_anti_venom, item_11e_anti_venom, item_11e_anti_venom, item_11e_anti_venom, item_11e_anti_venom, item_11e_anti_venom, item_11e_anti_venom, item_11e_anti_venom, item_11f_anti_paralytic, item_11f_anti_paralytic, item_11f_anti_paralytic, item_11f_anti_paralytic, item_11f_anti_paralytic, item_11f_anti_paralytic, item_11f_anti_paralytic, item_11f_anti_paralytic,
        item_11f_anti_paralytic, item_11f_anti_paralytic, item_11f_anti_paralytic, item_11f_anti_paralytic, item_11f_anti_paralytic, item_11f_anti_paralytic, item_11f_anti_paralytic, item_11f_anti_paralytic, item_120_divine_symbol, item_120_divine_symbol, item_120_divine_symbol, item_120_divine_symbol, item_120_divine_symbol, item_120_divine_symbol, item_120_divine_symbol, item_120_divine_symbol, item_120_divine_symbol, item_120_divine_symbol, item_120_divine_symbol, item_120_divine_symbol, item_120_divine_symbol, item_120_divine_symbol, item_120_divine_symbol, item_120_divine_symbol, item_120_divine_symbol, item_120_divine_symbol, item_122_evil_eye, item_122_evil_eye, item_122_evil_eye, item_122_evil_eye, item_122_evil_eye, item_122_evil_eye, item_122_evil_eye, item_122_evil_eye, item_123_fire_world_stone, item_123_fire_world_stone, item_123_fire_world_stone, item_123_fire_world_stone, item_123_fire_world_stone, item_123_fire_world_stone, item_123_fire_world_stone, item_123_fire_world_stone, item_123_fire_world_stone, item_123_fire_world_stone, item_123_fire_world_stone, item_123_fire_world_stone, item_124_poison_vaccine, item_124_poison_vaccine, item_124_poison_vaccine, item_124_poison_vaccine, item_124_poison_vaccine, item_124_poison_vaccine, item_124_poison_vaccine, item_124_poison_vaccine, item_124_poison_vaccine, item_124_poison_vaccine, item_124_poison_vaccine, item_124_poison_vaccine, item_125_dust_of_rage, item_125_dust_of_rage, item_125_dust_of_rage, item_125_dust_of_rage, item_125_dust_of_rage, item_125_dust_of_rage, item_125_dust_of_rage, item_125_dust_of_rage, item_125_dust_of_rage, item_125_dust_of_rage, item_126_bottle_of_light, item_126_bottle_of_light, item_126_bottle_of_light, item_126_bottle_of_light, item_126_bottle_of_light, item_126_bottle_of_light, item_126_bottle_of_light,
        item_126_bottle_of_light, item_126_bottle_of_light, item_126_bottle_of_light, item_126_bottle_of_light, item_126_bottle_of_light, item_126_bottle_of_light, item_126_bottle_of_light, item_126_bottle_of_light, item_126_bottle_of_light, item_126_bottle_of_light, item_127_acid_vaccine, item_127_acid_vaccine, item_127_acid_vaccine, item_127_acid_vaccine, item_127_acid_vaccine, item_127_acid_vaccine, item_127_acid_vaccine, item_127_acid_vaccine, item_127_acid_vaccine, item_127_acid_vaccine, item_127_acid_vaccine, item_127_acid_vaccine, item_127_acid_vaccine, item_127_acid_vaccine, item_127_acid_vaccine, item_127_acid_vaccine, item_128_spirit_book, item_128_spirit_book, item_128_spirit_book, item_128_spirit_book, item_128_spirit_book, item_128_spirit_book, item_128_spirit_book, item_128_spirit_book, item_128_spirit_book, item_128_spirit_book, item_12e_dorados_ashes, item_12e_dorados_ashes, item_12e_dorados_ashes, item_12e_dorados_ashes, item_12e_dorados_ashes, item_12e_dorados_ashes, item_12e_dorados_ashes, item_12e_dorados_ashes, item_12e_dorados_ashes, item_12e_dorados_ashes, item_12e_dorados_ashes, item_12e_dorados_ashes, item_12e_dorados_ashes, item_12e_dorados_ashes, item_12e_dorados_ashes, item_12e_dorados_ashes, item_12e_dorados_ashes, item_12e_dorados_ashes, item_12e_dorados_ashes, item_12e_dorados_ashes, item_12e_dorados_ashes, item_12e_dorados_ashes, item_12e_dorados_ashes, item_12e_dorados_ashes, item_12e_dorados_ashes, item_12e_dorados_ashes, item_136_soul_pod_5_sp, item_136_soul_pod_5_sp, item_136_soul_pod_5_sp, item_136_soul_pod_5_sp, item_136_soul_pod_5_sp, item_136_soul_pod_5_sp, item_136_soul_pod_5_sp, item_136_soul_pod_5_sp, item_136_soul_pod_5_sp, item_136_soul_pod_5_sp, item_136_soul_pod_5_sp, item_136_soul_pod_5_sp, item_136_soul_pod_5_sp, item_136_soul_pod_5_sp, 
        item_136_soul_pod_5_sp, item_136_soul_pod_5_sp, item_137_soul_pod_53_sp, item_137_soul_pod_53_sp, item_138_soul_pod_29_sp, item_138_soul_pod_29_sp, item_138_soul_pod_29_sp, item_138_soul_pod_29_sp, item_138_soul_pod_29_sp, item_139_soul_pod_14_sp, item_139_soul_pod_14_sp, item_139_soul_pod_14_sp, item_139_soul_pod_14_sp, item_139_soul_pod_14_sp, item_139_soul_pod_14_sp, item_139_soul_pod_14_sp, item_139_soul_pod_14_sp, item_139_soul_pod_14_sp
    ];

    var irreplacebleKeyItems = [
        item_110_fiery_key, item_111_kings_key, item_112_key_of_knowledge, item_114_floodgate_key, item_115_mermaid_key, item_116_key_of_delusion, item_118_iron_key, item_12f_spirit_key, item_130_blue_crystal, item_131_flaming_key, item_129_sealed_sword_stone
    ];

    var nonEssentialKeyItems = [
        item_117_brass_key,
        item_12f_spirit_key, item_118_iron_key, item_130_blue_crystal,
        item_12c_pitcher_of_nadya_hp, item_12d_pitcher_of_nadya_mp, 
        item_12b_pitcher_of_nadya, //item_114_floodgate_key, item_115_mermaid_key,
        item_12a_young_dragon_gem, item_113_beast_key//,
        //item_112_key_of_knowledge, item_111_kings_key
    ];

    if (params.randomizeNonEssentialKeys) {
        var distributionJump = Math.ceil(allUniqueItems.length / nonEssentialKeyItems);
        for (var i in nonEssentialKeyItems) {
            var positionToInsert = i * distributionJump;
            allUniqueItems.splice(positionToInsert, 0, nonEssentialKeyItems[i]);
        }
    } else {
        irreplacebleKeyItems = irreplacebleKeyItems.concat(nonEssentialKeyItems);
    }

    var primaryConsumables = [
        item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion, item_11c_healing_potion,
        item_11e_anti_venom, item_124_poison_vaccine, item_11d_magic_potion,
        difficultyFactor == 1 ? item_138_soul_pod_29_sp : (difficultyFactor > 1 ? item_136_soul_pod_5_sp : item_137_soul_pod_53_sp )
    ];

    var secondaryConsumables = [
        item_10c_torch, item_10d_lamp, item_10e_sacred_feather, item_11f_anti_paralytic, item_120_divine_symbol, 
        item_122_evil_eye, item_123_fire_world_stone, item_125_dust_of_rage, item_126_bottle_of_light, 
        item_127_acid_vaccine, item_128_spirit_book, item_12e_dorados_ashes
    ];

    var goodItems = [
        item_109_endless_amulet, item_58_fortune_great_helm, item_45_fiery_bow_gun, item_e4_ring_of_dead_spirit, item_f9_king_bracelet, item_fa_moon_bracelet, item_c_shadow_blade, item_17_dragon_sword, item_b3_tower_shield_of_honor,
        item_c9_summoner_ring_of_frost, item_ca_summoner_ring_of_frost, item_cb_balance_ring_of_frost, item_cc_priest_ring_of_frost, item_cd_sorcerer_ring_of_frost, item_ce_soul_ring,
        item_76_god_plate, item_78_knight_plate_mail, item_31_blood_sword,
        item_77_plate_mail_of_rage, item_25_magical_bastard_sword, item_3e_living_axe,
        item_137_soul_pod_53_sp, item_12c_pitcher_of_nadya_hp, item_12d_pitcher_of_nadya_mp, item_110_fiery_key, item_137_soul_pod_53_sp, item_113_beast_key, item_114_floodgate_key, item_115_mermaid_key, item_116_key_of_delusion, item_137_soul_pod_53_sp, item_117_brass_key, item_118_iron_key, item_129_sealed_sword_stone, item_12a_young_dragon_gem, item_137_soul_pod_53_sp, item_12e_dorados_ashes, item_12f_spirit_key, item_130_blue_crystal, item_131_flaming_key,
        item_bf_master_gothic_shield, item_c1_gothic_shield_of_rage, item_c2_shinning_gothic_shield, item_c3_holy_gothic_shield,
        item_44_bow_gun, item_43_warrior_bow, item_42_bow, item_d_shadow_wolf, item_e_shadow_tiger, item_c0_gothic_shield_of_power, item_1a_lethal_bastard_sword, item_1b_swift_bastard_sword, item_1c_keenest_bastard_sword, item_1d_crushing_bastard_sword, item_1e_fiery_bastard_sword, item_20_shining_bastard_sword, item_23_guardian_bastard_sword, item_24_dark_sword, item_26_righteous_sword, item_2a_swift_great_sword, item_2c_deadly_great_sword, item_2d_keenest_great_sword, item_2e_crushing_great_sword, item_2f_mighty_great_sword, item_30_guardian_great_sword,
        item_4b_wizard_crown, item_4c_devil_crown, item_52_full_helm_of_curing, item_57_harden_great_helm, item_59_mystic_great_helm, item_5a_holy_great_helm,
        item_cf_soul_ring, item_d0_holy_ring_of_resist, item_d1_holy_ring_of_priest, item_d2_holy_ring, item_d3_dark_ring, item_d4_dark_ring, item_d5_dark_priest_ring,
        item_d6_dark_sorcerer_ring, item_da_sorcerer_ring_of_poison, item_db_caustic_ring, item_dc_caustic_ring, item_dd_caustic_priest_ring,
        item_de_caustic_sorcerer_ring, item_df_ring_of_desire, item_e0_ring_of_ice, item_e1_ring_of_dark_souls, item_e2_black_ring, item_e3_ring_of_seal, item_e5_ring_of_rage, item_e6_ring_of_drain,
        item_6d_shining_plate_mail, item_6e_dark_plate_mail, item_6f_plate_mail_of_protect, item_70_eternal_plate_mail, item_71_devil_plate_mail, item_72_holy_plate_mail, item_73_full_plate, item_87_swift_gauntlet, item_88_deadly_gauntlet, item_8b_deadly_arm_guard, item_8c_master_arm_guard, item_96_swift_steel_boots, item_9e_leg_guard_of_protect, item_a0_holy_leg_guard, item_ae_shining_great_shield, item_af_dark_great_shield, item_b0_deadly_great_shield, item_b4_harden_tower_shield, item_b5_tower_shield_of_protect, item_b6_caustic_tower_shield, item_b9_gothic_shield, item_ba_harden_gothic_shield, item_bb_gothic_shield, item_bc_gothic_shield_of_resist, item_bd_gothic_shield_of_honor, item_be_gothic_shield_of_balance, item_eb_bracelet_of_curing, item_ec_bracelet_of_recovery, item_ed_mind_bracelet, item_ee_mighty_ring, item_ef_deadly_bracelet, item_f0_guardian_bracelet, item_f1_sorcerer_bracelet, item_f2_priest_bracelet, item_f8_holy_bracelet, item_fb_magical_amulet
    ];

    var collectableUniques = [];
    var dropUniques = [];

    if (params.preset == PRESET_BONANZA) {
        allUniqueItems = allUniqueItems.filter(item => goodItems.indexOf(item) == -1);
        goodItems.forEach(item => allUniqueItems.unshift(item));
    }

    // Removing from list of unique items the ones that are in the store
    allUniqueItems = allUniqueItems.filter(item => storeItems.indexOf(item) == -1);

    if (params.progressiveness == PROGRESSIVENESS_FLAT) {
        UNIQUES_SEQUENCE_RANDOMIZATION_SPAN = 1;
    } else if (params.progressiveness == PROGRESSIVENESS_INCREASED) {
        UNIQUES_SEQUENCE_RANDOMIZATION_SPAN = 0.6;
    } else if (params.progressiveness == PROGRESSIVENESS_CRAZY) {
        UNIQUES_SEQUENCE_RANDOMIZATION_SPAN = 1;
    }

    if (params.randomizeCollectablesAndDrops) {
        allUniqueItems.forEach((unique) => {
            if (Math.random() < COLLECTABLE_UNIQUES_PROPORTION) {
                collectableUniques.push(unique);
            } else {
                dropUniques.push(unique);
            }
        });
        console.log("DEBUG - Items randomization - Collectable uniques " + collectableUniques.map(i => items[i].name));
        console.log("");
        console.log("DEBUG - Items randomization - Drop uniques " + dropUniques.map(i => items[i].name));
        console.log("");
    }
    var COLLECTABLE_UNIQUES_SEQUENCE_RANDOMIZATION_SPAN_SIZE=collectableUniques.length * UNIQUES_SEQUENCE_RANDOMIZATION_SPAN;

    function randomizeEquipsStats(item) {
        if (primaryConsumables.indexOf(item.itemIndex) != -1 ||
            secondaryConsumables.indexOf(item.itemIndex) != -1 ||
            irreplacebleKeyItems.indexOf(item.itemIndex) != -1 ||
            item_10a_cune == item.itemIndex
            ) {
            return;
        }

        console.log(("Randomizing item " + item.name + ". Old values ").padEnd(70) + 
                "score " + (""+item.score()).padStart(3) + " str " + (""+item.str.get()).padStart(3) + " spd " + (""+item.spd.get()).padStart(3) + " def " + (""+item.def.get()).padStart(3) + " bal " + (""+item.bal.get()).padStart(3) + " sla " + (""+item.sla.get()).padStart(3) + " smh " + (""+item.smh.get()).padStart(3) + " pir " + (""+item.pir.get()).padStart(3) + " spr " + (""+item.spr.get()).padStart(3) + " foc " + (""+item.foc.get()).padStart(3) + " ham " + (""+item.ham.get()).padStart(3) + " pur " + (""+item.pur.get()).padStart(3) + " par " + (""+item.par.get()).padStart(3) + " mel " + (""+item.mel.get()).padStart(3) + " sol " + (""+item.sol.get()).padStart(3) + " hp " + (""+item.hp.get() ).padStart(3)+ " weight " + (""+item.weight.get()).padStart(3) + " max_dura " + (""+item.max_dura.get()).padStart(3) + " dura " + (""+item.dura.get()).padStart(3) + " price " + (""+item.price.get()).padStart(3));

        item.str.set(Math.min(255, Math.ceil(item.str.get() * Math.pow(Math.random() + 0.5, 3))));
        item.spd.set(Math.min(255, Math.ceil(item.spd.get() * Math.pow(Math.random() + 0.5, 3))));
        item.def.set(Math.min(255, Math.ceil(item.def.get() * Math.pow(Math.random() + 0.5, 3))));
        item.bal.set(Math.min(255, Math.ceil(item.bal.get() * Math.pow(Math.random() + 0.5, 3))));
        item.sla.set(Math.min(255, Math.ceil(item.sla.get() * Math.pow(Math.random() + 0.5, 3))));
        item.smh.set(Math.min(255, Math.ceil(item.smh.get() * Math.pow(Math.random() + 0.5, 3))));
        item.pir.set(Math.min(255, Math.ceil(item.pir.get() * Math.pow(Math.random() + 0.5, 3))));
        item.spr.set(Math.min(255, Math.ceil(item.spr.get() * Math.pow(Math.random() + 0.5, 3))));
        item.foc.set(Math.min(255, Math.ceil(item.foc.get() * Math.pow(Math.random() + 0.5, 3))));
        item.ham.set(Math.min(255, Math.ceil(item.ham.get() * Math.pow(Math.random() + 0.5, 3))));
        item.pur.set(Math.min(255, Math.ceil(item.pur.get() * Math.pow(Math.random() + 0.5, 3))));
        item.par.set(Math.min(255, Math.ceil(item.par.get() * Math.pow(Math.random() + 0.5, 3))));
        item.mel.set(Math.min(255, Math.ceil(item.mel.get() * Math.pow(Math.random() + 0.5, 3))));
        item.sol.set(Math.min(255, Math.ceil(item.sol.get() * Math.pow(Math.random() + 0.5, 3))));
        item.hp.set(Math.min(255, Math.ceil(item.hp.get() * Math.pow(Math.random() + 0.5, 3))));
        if (!item.weight.isNull()) {
            item.weight.set(Math.min(255, Math.ceil(item.weight.get() / Math.pow(Math.random() + 0.5, 3))));
        }
        if (!item.max_dura.isNull() && item.max_dura.get()) {
            item.max_dura.set(Math.min(255, Math.ceil(item.max_dura.get() * Math.pow(Math.random() + 0.5, 3))));
            item.dura.set(Math.min(item.max_dura.get(), Math.ceil(item.dura.get() * Math.pow(Math.random() + 0.5, 3))));
        }
        if (primaryConsumables.indexOf(item.itemIndex) == -1 && secondaryConsumables.indexOf(item.itemIndex) == -1) {
            if (item.price.get() > 0) {
                item.price.set(Math.max(1, Math.min(30, Math.ceil(item.score() * Math.pow(Math.random() + 0.5, 1)))));
            }
        }

        console.log("New values ".padEnd(70) + 
                "score " + (""+item.score()).padStart(3) + " str " + (""+item.str.get()).padStart(3) + " spd " + (""+item.spd.get()).padStart(3) + " def " + (""+item.def.get()).padStart(3) + " bal " + (""+item.bal.get()).padStart(3) + " sla " + (""+item.sla.get()).padStart(3) + " smh " + (""+item.smh.get()).padStart(3) + " pir " + (""+item.pir.get()).padStart(3) + " spr " + (""+item.spr.get()).padStart(3) + " foc " + (""+item.foc.get()).padStart(3) + " ham " + (""+item.ham.get()).padStart(3) + " pur " + (""+item.pur.get()).padStart(3) + " par " + (""+item.par.get()).padStart(3) + " mel " + (""+item.mel.get()).padStart(3) + " sol " + (""+item.sol.get()).padStart(3) + " hp " + (""+item.hp.get() ).padStart(3)+ " weight " + (""+item.weight.get()).padStart(3) + " max_dura " + (""+item.max_dura.get()).padStart(3) + " dura " + (""+item.dura.get()).padStart(3) + " price " + (""+item.price.get()).padStart(3));
    }

    function distributeCollectablesRandomly(collectable, area) {
        if (area.name == 'illusion_world_bewilderment_domain' &&
            (collectable.collectableIndex == 0xd ||
                collectable.collectableIndex == 0xe ||
                collectable.collectableIndex == 0xf ||
                collectable.collectableIndex == 0x10)) {
            return;
        }

        var previous = collectable.type.get();

        if (isIrreplaceable(previous)) {
            return;
        }

        collectable.blank();

        if (params.preset == PRESET_100_PRC &&
            area.name == 'death_world_undead_layer' &&
            (collectable.collectableIndex == 0x7 || collectable.collectableIndex == 0x8)) {
            var chosen = consumablesForRandomization[Math.floor((Math.random()*consumablesForRandomization.length))];
            collectable.type.set(chosen);
            console.log("DEBUG - Collectable randomization - Sealed sword stone place - Placing collectable consumable " + items[collectable.type.get()].name + " at " + area.name + " where it was a " + items[previous].name);
        } else if (Math.random()<PROPORTION_OF_COLLECTABLE_BEING_UNIQUES && collectableUniques.length > 1) {
            var randomRange = Math.min(COLLECTABLE_UNIQUES_SEQUENCE_RANDOMIZATION_SPAN_SIZE, collectableUniques.length);
            var chosenIndex = Math.floor(Math.random()*randomRange);
            var chosenItem = collectableUniques[chosenIndex];
            var tookCune = false;
            collectableUniques = collectableUniques.filter(item => {
                var toKeep = item !== chosenItem;
                if (!toKeep && chosenItem == item_10a_cune) {
                    if (tookCune) {
                        return true;
                    }
                    tookCune = true;
                }
                return toKeep;
            });
            collectable.type.set(chosenItem);
            
            console.log("DEBUG - Collectable randomization - Placing collectable unique " + items[collectable.type.get()].name + " at " + area.name + " where it was a " + items[previous].name + ". There are more " + collectableUniques.length + " to distribute.");
        } else {
            var chosen = consumablesForRandomization[Math.floor((Math.random()*consumablesForRandomization.length))];
            collectable.type.set(chosen);
            console.log("DEBUG - Collectable randomization - Placing collectable consumable " + items[collectable.type.get()].name + " at " + area.name + " where it was a " + items[previous].name);
        }
    }

    function distributeCollectablesDumpInLateWorlds(collectable, area) {
        if (collectableUniques.length > 0) {
            if (secondaryConsumables.indexOf(collectable.type.get())!=-1) {

                if (!area.hasFreeItemMemory()) {
                    console.log("WARNING - Collectable randomization - No free memory " + area.usedItemMemory() + ", halting adding collectable to late worlds: " + area.name + " but there are more to add " + collectableUniques.length);
                    return;
                }

                collectable.type.set(collectableUniques.shift());
                console.log("DEBUG - Collectable randomization - Adding collectable to late worlds: " + items[collectable.type.get()].name + " at " + area.name);
            }
        }
    }

    var DROP_UNIQUES_SEQUENCE_RANDOMIZATION_SPAN_SIZE=dropUniques.length * UNIQUES_SEQUENCE_RANDOMIZATION_SPAN;

    function clearDrops(spawn, area, index) {
        if (!isIrreplaceable(spawn.drop1.get())) {
            spawn.drop1.null();
            spawn.drop1Chance.set(0);
        }
        spawn.drop2.null();
        spawn.drop2Chance.set(0);
        spawn.drop3.null();
        spawn.drop3Chance.set(0);
    }

    function isIrreplaceable(id) {
        if (id == -1) {
            return false;
        }
        var result = irreplacebleKeyItems.indexOf(id)!=-1;
        if (result) {
            console.log("DEBUG - To leave this one alone since it is irreplaceble " + items[id].name);
        }
        return result;
    }

    function distributeDropsRandomly(spawn, area, index) {
        var dropsNames = "blank";

        if (!spawn.drop1.isNull()) {
            dropsNames = items[spawn.drop1.get()].name + " ";
            if (isIrreplaceable(spawn.drop1.get())) {
                return;
            }
        }
        if (!spawn.drop2.isNull()) {
            dropsNames += items[spawn.drop2.get()].name + " ";
        }
        if (!spawn.drop3.isNull()) {
            dropsNames += items[spawn.drop3.get()].name + " ";
        }

        if (Math.random()<CHANCE_OF_UNIQUE_DROP && dropUniques.length > 1) {
            var randomRange = Math.min(DROP_UNIQUES_SEQUENCE_RANDOMIZATION_SPAN_SIZE, dropUniques.length);
            var chosenIndex = Math.floor(Math.random()*randomRange);
            var chosenItem = dropUniques[chosenIndex];

            if (!area.hasFreeItemMemory()) {
                console.log("DEBUG - Drop randomization - No free memory " + area.usedItemMemory() + ", halting unique drop distribution for " + area.name + "/" + spawn.name());
                return;
            }

            var tookCune = false;
            dropUniques = dropUniques.filter(item => {
                var toKeep = item !== chosenItem;
                if (!toKeep && chosenItem == item_10a_cune) {
                    if (tookCune) {
                        return true;
                    }
                    tookCune = true;
                }
                return toKeep;
            });

            spawn.drop1.set(chosenItem);
            spawn.drop1Chance.set(100);

            var newDropName = items[spawn.drop1.get()].name;
            console.log("DEBUG - Drop randomization - Updating drop to unique " + newDropName + " at " + area.name + "/" + spawn.name() + " where it was " + dropsNames + ". There are more " + dropUniques.length + " to distribute.");
        } else if (Math.random()<CHANCE_OF_CONSUMABLE_DROP) {

            if (!area.hasFreeItemMemory()) {
                console.log("DEBUG - Drop randomization - No free memory " + area.usedItemMemory() + ", halting consumable drop distribution for " + area.name + "/" + spawn.name());
                return;
            }

            var chosen = consumablesForRandomization[Math.floor((Math.random()*consumablesForRandomization.length))];
            spawn.drop1.set(chosen);
            spawn.drop1Chance.set(100);
            var newDropName = items[spawn.drop1.get()].name;
            console.log("DEBUG - Drop randomization - Updating drop to consumable " + newDropName + " at " + area.name + "/" + spawn.name() + " where it was " + dropsNames);
        } else {
            if (!spawn.drop1.isNull()) {
                console.log("DEBUG - Drop randomization - Updating drop to blank at " + area.name + "/" + spawn.name() + " where it was " + dropsNames);
                spawn.drop1.null();
                spawn.drop1Chance.set(0);
            }
        }
    }

    var remainingCunesToAddAsDrops = null;
    function guarantee99CunesPlacingTheRemainingAsDrops(spawn, area, index) {
        if (remainingCunesToAddAsDrops == null) { // time to define the remaining cunes
            remainingCunesToAddAsDrops = dropUniques.filter(item => item == item_10a_cune);
            dropUniques = dropUniques.filter(item => item != item_10a_cune);

            collectableUniques.filter(item => item == item_10a_cune).forEach(item => remainingCunesToAddAsDrops.push(item));
            collectableUniques = collectableUniques.filter(item => item != item_10a_cune);

            console.log("DEBUG - Drop randomization - Remaining cunes to distribute: " + remainingCunesToAddAsDrops.length);
        }

        if (remainingCunesToAddAsDrops.length && !spawn.drop1.isNull() && secondaryConsumables.indexOf(spawn.drop1.get())!=-1) {
            if (!area.hasFreeItemMemory()) {
                console.log("DEBUG - Drop randomization - No free memory " + area.usedItemMemory() + ", Not putting remaining cune put at " + area.name + "/" + spawn.name());
                return;
            }

            console.log("DEBUG - Drop randomization - Remaining cune put at " + area.name + "/" + spawn.name() + " where it was " + items[spawn.drop1.get()].name);
            spawn.drop1.set(remainingCunesToAddAsDrops.shift());
            spawn.drop1Chance.set(100);
        }
    }

    function distributeDropsDumpInLateWorlds(spawn, area, index) {
        var arrayToRemoveFrom = dropUniques.length > 0 ? dropUniques : collectableUniques;

        if (arrayToRemoveFrom.length > 0) {

            if (!area.hasFreeItemMemory()) {
                console.log("WARNING - Drop randomization adding remaining to late worlds - No free memory " + area.usedItemMemory() + ", avoiding to add drop replacement for " + area.name + "/" + spawn.name() + " want to add more " + arrayToRemoveFrom.length);
                return;
            }

            var dropsNames = "blank";
            /*if (!spawn.drop1.isNull()) {
                dropsNames = items[spawn.drop1.get()].name + " ";
                if (secondaryConsumables.indexOf(spawn.drop1.get())==-1) {
                    console.log("DEBUG - Drop randomization adding remaining to late worlds - To leave this one alone since it is not secondary consumable " + items[spawn.drop1.get()].name + " at " + area.name + "/" + spawn.name());
                    return;
                }
            }*/

            if (spawn.drop1.isNull() || 
                    (items[spawn.drop1.get()].type.get()==ITEM &&
                    items[spawn.drop1.get()].name!="item_10a_cune")) {
                spawn.drop1.set(arrayToRemoveFrom.shift());
                spawn.drop1Chance.set(100);
                console.log("DEBUG - Drop randomization adding remaining to late worlds - Adding drop: " + items[spawn.drop1.get()].name + " at " + area.name + "/" + spawn.name() + " where it was " + dropsNames);
            }
        }
    }

    function distributeRemainingUniqueDropsAndConsumablesAsSecondDrop(spawn, area, index) {
        var arrayToRemoveFrom = dropUniques.length > 0 ? dropUniques : collectableUniques;

        if (arrayToRemoveFrom.length > 0) {
            if (spawn.drop2.isNull() && Math.random()<CHANCE_OF_UNIQUE_DROP &&
                !spawn.drop1.isNull() && (items[spawn.drop1.get()].type.get() == WEAPON ||
                                          items[spawn.drop1.get()].type.get() == TWO_HANDED ||
                                          items[spawn.drop1.get()].type.get() == HELMET ||
                                          items[spawn.drop1.get()].type.get() == ARMOR ||
                                          items[spawn.drop1.get()].type.get() == FULL_ARMOR ||
                                          items[spawn.drop1.get()].type.get() == GAUNTLET ||
                                          items[spawn.drop1.get()].type.get() == BOOTS ||
                                          items[spawn.drop1.get()].type.get() == SHIELD ||
                                          items[spawn.drop1.get()].type.get() == RING ||
                                          items[spawn.drop1.get()].type.get() == BRACELET ||
                                          items[spawn.drop1.get()].type.get() == AMULET)
                ) {

                //if (!area.hasFreeItemMemory()) {
                //    console.log("WARNING - Drop randomization - No free memory " + area.usedItemMemory() + ", halting adding second drop replacement for " + area.name + "/" + spawn.name() + " but there are more to add " + arrayToRemoveFrom.length);
                //    return;
                //}

                spawn.drop2.set(arrayToRemoveFrom.shift());
                spawn.drop2Chance.set(100);
                console.log("DEBUG - Drop randomization adding remaining as second drop - Adding drop: " + items[spawn.drop2.get()].name + " at " + area.name + "/" + spawn.name());
            }
        }
    }

    function distributeRemainingUniqueDropsAndConsumablesAsThirdDrop(spawn, area, index) {
        var arrayToRemoveFrom = dropUniques.length > 0 ? dropUniques : collectableUniques;

        if (arrayToRemoveFrom.length > 0) {
            if (spawn.drop3.isNull() && !spawn.drop2.isNull() && Math.random()<CHANCE_OF_UNIQUE_DROP) {

                //if (!area.hasFreeItemMemory()) {
                //    console.log("WARNING - Drop randomization - No free memory " + area.usedItemMemory() + ", halting adding third drop replacement for " + area.name + "/" + spawn.name() + " but there are more to add " + arrayToRemoveFrom.length);
                //    return;
                //}

                spawn.drop3.set(arrayToRemoveFrom.shift());
                spawn.drop3Chance.set(100);
                console.log("DEBUG - Drop randomization adding remaining as third drop - Adding drop: " + items[spawn.drop3.get()].name + " at " + area.name + "/" + spawn.name());
            }
        }
    }

    // Creatures that should not be removed in "keepOnlyBosses" preset
    // Note: Stone Cavern creatures (hobble_worm, barrel_snail, crying_root, clay_servant)
    // are now protected in data_model.js nonRandomizableCreatureNames instead
    var nonRemovable = [
        "unknown", "unused", "door", "blank",
        "dybbuk", "lizard_servant", "mole", "auriel", "akryal", "abraxus", "panak", "king_edward", "pulsating_heart", "duhrin",
        "fester", "wildowess", "gorthaur",
        "guardian", "dread_knight", "ebony_knight", "magi_magus", "necron", "disguise", "hollow_mage", "balron", "demon_king"
    ];

    function keepOnlyBosses(creature, area, index) {
        if (nonRemovable.filter(name => creature.name.includes(name)).length) {
            console.log("DEBUG - Spawn transforming to slime, to keep only bosses. Not transforming " + area.name + "/" + creature.name);
            return;
        }
        console.log("DEBUG - Spawn transforming to slime, to keep only bosses. Transforming " + area.name + "/" + creature.name);

        setCreature(creature, human_world_solitary_region["01_acid_slime"], changeSet);
    }

    function removeSceneryObjects(object, area) {
        if (area.name.includes("tower") || area.name.includes("void") || 
            (area.exits && area.exits[""+object.index]) || 
            (area.totems && area.totems[""+object.index]) || 
            (object.getType() != "scenery" &&
                !object.getType().includes("gate") &&
                object.id.get() != 0xa9) // Also remove flamming key chest
            ) {
            console.log("Remove scenery - Skipping, to preserve necessary scenery - " + area.name + " object " + object.index);
            return;
        }
        console.log("Remove scenery - removing - " + area.name + " object " + object.index + " - " + object.getType());
        object.blank();
    }

    function messWithSceneryObjects(object, area) { // To do also exclusion of totems
/*
        if (area.name.includes("tower") || area.name.includes("void") || area.exits && area.exits[""+object.index]) {
            console.log("Mess with scenery - to not mess with exits - " + area.name + " object " + object.index);
            return;
        }
        if (Math.random()<0.3) {
            console.log("Mess with scenery - removing - " + area.name + " object " + object.index);
            object.blank();
        } else if (Math.random()<0.1) {
            console.log("Mess with scenery - moving X+1 - " + area.name + " object " + object.index);
            object.tileX.set(object.tileX.get()+1);
        } else if (Math.random()<0.1) {
            console.log("Mess with scenery - moving Y+1 - " + area.name + " object " + object.index);
            object.tileY.set(object.tileY.get()+1);
        } else if (Math.random()<0.1) {
            console.log("Mess with scenery - moving Z+1 - " + area.name + " object " + object.index);
            object.tileZ.set(object.tileZ.get()+1);
        } else if (Math.random()<0.1) {
            console.log("Mess with scenery - moving X-1 - " + area.name + " object " + object.index);
            object.tileX.set(object.tileX.get()-1);
        } else if (Math.random()<0.1) {
            console.log("Mess with scenery - moving Y-1 - " + area.name + " object " + object.index);
            object.tileY.set(object.tileY.get()-1);
        } else if (Math.random()<0.1) {
            console.log("Mess with scenery - moving Z-1 - " + area.name + " object " + object.index);
            object.tileZ.set(object.tileZ.get()-1);
        }*/
    }

    // Task #23: Remove tiles based on percentage parameter
    // This function randomly removes tiles (wall geometry) from areas
    // based on the removeTilesPercent parameter.
    // 
    // IMPORTANT FIX: Fixed tile.blank() bug in data_model.js
    // - Previously set this.x.set(0xff) which sets POSITION x to 0xFF
    // - Now correctly sets this.tileX.set(0xff) which marks tile as blank
    // - isBlank check looks at tileX (byte 0x08), not position x (byte 0x00)
    //
    // STRATEGY: Path-based wall removal
    // 1. Identify walkable paths (floor tiles at ground level)
    // 2. Find tiles adjacent to paths (walls along corridors)
    // 3. Only remove wall tiles near paths (not isolated tiles)
    // 4. Never remove the path tiles themselves
    //
    // This creates a "crumbling walls" effect without breaking floor continuity.
    //
    // TILE CLASSIFICATION (based on tile dump analysis):
    // - Floor tiles: posY <= 256 (ground level walkable surfaces)
    // - Wall/Decoration tiles: posY > 256 (elevated structures)
    // - See TILE_CLASSIFICATION_ANALYSIS.md for detailed analysis
    //
    // Parameters:
    //   - removeTilesPercent: 0-100, percentage of wall tiles to remove
    //
    // Example usage in params.json:
    //   "removeTilesPercent": 30  // Remove 30% of corridor walls
    function removeTiles(tile, area, index) {
        // Skip tiles in critical areas (tower and void)
        if (area.name.includes("tower") || area.name.includes("void")) {
            return;
        }
        
        // PATH-BASED WALL REMOVAL STRATEGY
        // 
        // Step 1: Identify floor tiles (walkable paths)
        // Floor characteristics:
        // - posY <= 256 (at or near ground level)
        // - Forms connected grid of tiles
        
        if (!tile.isBlank) {
            const posY = tile.y.get();
            const tileX = tile.tileX.get();
            const tileZ = tile.tileZ.get();
            
            // PROTECT FLOOR TILES (the walkable path)
            // Floor tiles are typically at posY <= 256
            if (posY <= 256) {
                return; // Never remove floor - this is the walkable path
            }
            
            // Step 2: Find tiles adjacent to paths (walls along corridors)
            // We need to check if there are floor tiles nearby (within 2 grid units)
            
            let hasNearbyFloorTile = false;
            let distanceToNearestFloor = 999;
            
            // Check all tiles in the area for nearby floor tiles
            for (let i = 0; i < area.tiles.length; i++) {
                const otherTile = area.tiles[i];
                if (otherTile.isBlank) continue;
                
                const otherPosY = otherTile.y.get();
                const otherTileX = otherTile.tileX.get();
                const otherTileZ = otherTile.tileZ.get();
                
                // Is this a floor tile?
                if (otherPosY <= 256) {
                    // Calculate grid distance
                    const dx = Math.abs(tileX - otherTileX);
                    const dz = Math.abs(tileZ - otherTileZ);
                    const distance = Math.max(dx, dz); // Chebyshev distance
                    
                    if (distance < distanceToNearestFloor) {
                        distanceToNearestFloor = distance;
                    }
                    
                    // Is this tile adjacent to the path? (within 2 tiles)
                    if (distance <= 2) {
                        hasNearbyFloorTile = true;
                    }
                }
            }
            
            // Step 3: Only remove wall tiles near paths
            // - Must be adjacent to path (hasNearbyFloorTile)
            // - Must not be too far from any floor (prevents removing isolated decorations)
            // - Distance 1-2: Walls along corridor - SAFE TO REMOVE
            // - Distance 3+: Too far from path - DON'T REMOVE (isolated structures)
            
            if (!hasNearbyFloorTile) {
                return; // Not near a path - don't remove
            }
            
            if (distanceToNearestFloor > 2) {
                return; // Too far from paths - don't remove
            }
            
            // This is a wall tile adjacent to a walkable path - eligible for removal
        }
        
        // Remove tile based on percentage chance
        var removalChance = params.removeTilesPercent / 100;
        if (Math.random() < removalChance) {
            console.log("Remove tiles - removing - " + area.name + " tile " + index + " (tileY=" + tile.tileY.get() + ", posY=" + tile.y.get() + ", distance=" + "adjacent to path" + ")");
            tile.blank();
        }
    }

    function forEachValidCreature(func) {
        console.log("\n\nDEBUG ------------------ Randomization engine - forEachValidCreature - " + func.name + "\n\n");
        for (var a in areas) {
            var area = areas[a];
            for (var index = 0; index < CREATURE_COUNT; index++) {
                var creature = area.creatures[index];
                if (!creature.isBlank) {
                    func(creature, area, index);
                }
            }
        }
    }

    function forEachObject(func) {
        console.log("\n\nDEBUG ------------------ Randomization engine - forEachObject - " + func.name + "\n\n");
        for (var a in areas) {
            var area = areas[a];
            area.objects.forEach(object => {
                func(object, area);
            });
        }
    }

    function forEachItem(func) {
        console.log("\n\nDEBUG ------------------ Randomization engine - forEachItem - " + func.name + "\n\n");
        for (var i in items) {
            func(items[i]);
        }
    }

    function forEachCollectable(func) {
        console.log("\n\nDEBUG ------------------ Randomization engine - forEachCollectable - " + func.name + "\n\n");
        allChangeableCollectablesInDefaultGame.forEach((collectable) => {
            func(collectable.collectable, collectable.area);
        });
    };

    function forEachCreatureSpawn(func) {
        console.log("\n\nDEBUG ------------------ Randomization engine - forEachCreatureSpawn - " + func.name + "\n\n");
        allSpawnsInDefaultGame.forEach((spawn) => {
            func(spawn.spawn, spawn.area, spawn.index);
        });
    };

    function forEachCollectableFromEndtoStart(func) {
        console.log("\n\nDEBUG ------------------ Randomization engine - forEachCollectableFromEndtoStart - " + func.name + "\n\n");
        allChangeableCollectablesInDefaultGame.slice().reverse().forEach((collectable) => {
            func(collectable.collectable, collectable.area);
        });
    };

    function forEachCreatureSpawnFromEndtoStart(func) {
        console.log("\n\nDEBUG ------------------ Randomization engine - forEachCreatureSpawnFromEndtoStart - " + func.name + "\n\n");
        allSpawnsInDefaultGame.slice().reverse().forEach((spawn) => {
            func(spawn.spawn, spawn.area, spawn.index);
        });
    };

    // Task #23: Add forEachTile function for tile randomization/removal
    function forEachTile(func) {
        console.log("\n\nDEBUG ------------------ Randomization engine - forEachTile - " + func.name + "\n\n");
        for (var a in areas) {
            var area = areas[a];
            for (var index = 0; index < TILE_COUNT; index++) {
                var tile = area.tiles[index];
                if (!tile.isBlank) {
                    func(tile, area, index);
                }
            }
        }
    }

    function groupObjectsByKey(objects, params) {
      return objects.reduce((groupedObject, obj) => {
        const keyValue = obj.randomizationGroup(params);
        groupedObject[keyValue] = (groupedObject[keyValue] || []).concat(obj);
        return groupedObject;
      }, {});
    }

    var allRandomizableCreatures = [];
    function addCreaturesToRandomizableList(creature, area, index) {
        if (creature.randomizable) {
            allRandomizableCreatures.push(creature);
        }
    }
    forEachValidCreature(addCreaturesToRandomizableList);
    console.log(" allRandomizableCreatures " + allRandomizableCreatures.map(creature => creature.name));

    var creatureRandomizableGroups = groupObjectsByKey(allRandomizableCreatures, params);
    console.log(" creatureRandomizableGroups " + JSON.stringify(Object.keys(creatureRandomizableGroups)));
    console.log(" creatureRandomizableGroups " + JSON.stringify(Object.keys(creatureRandomizableGroups).reduce((result, key) => {
          result[key] = creatureRandomizableGroups[key].map(creature => creature.name);
          return result;
        }, {})));

    // Running the thing
    function operate() {

        // ------- PRESET No Change

        if (params.preset == PRESET_NO_CHANGE) {
        }

        // ------- PRESET King hopper

        if (params.preset == PRESET_FIX_KING_HOPPER) {
            forEachCreatureSpawn(presetKingHopperFixforEachCreatureSpawn);
        }

        // ------- Any%

        if (params.preset == PRESET_ANY_PRC ||
            params.preset == PRESET_COMEDY ||
            params.preset == PRESET_SCARY_GAME ||
            params.preset == PRESET_BONANZA) {
            forEachCreatureSpawn(presetKingHopperFixforEachCreatureSpawn);
            forEachCreatureSpawn(presetDirectivesforEachCreatureSpawn);
            forEachItem(presetDirectivesforEachItem);
            forEachItem(randomizeEquipsStats);

            if (params.randomizeCollectablesAndDrops) {
                forEachCreatureSpawn(clearDrops);
                forEachCollectable(distributeCollectablesRandomly);

                // Switch fiery key or flamming key
                forEachCreatureSpawn(setFieryKeyOrFlammingKey);

                forEachCreatureSpawn(distributeDropsRandomly);
                forEachCreatureSpawnFromEndtoStart(guarantee99CunesPlacingTheRemainingAsDrops);

                // Guarantee poison vaccine
                forEachCreatureSpawn(countDrop1PoisonVaccineIfAreaIsBeforePoisonousCavern);
                forEachCollectable(countCollectablePoisonVaccineIfAreaIsBeforePoisonousCavern);
                forEachCreatureSpawnFromEndtoStart(replaceSecondaryDropIfBeforePoisonousCavernBeforeRequirementIsAchieved);

                forEachCreatureSpawn(distributeRemainingUniqueDropsAndConsumablesAsSecondDrop);
                forEachCreatureSpawn(distributeRemainingUniqueDropsAndConsumablesAsThirdDrop);
            }
        }

        // ------- 100%

        if (params.preset == PRESET_100_PRC) {
            forEachCreatureSpawn(presetKingHopperFixforEachCreatureSpawn);
            forEachCreatureSpawn(presetDirectivesforEachCreatureSpawn);
            forEachItem(presetDirectivesforEachItem);
            forEachItem(randomizeEquipsStats);

            if (params.randomizeCollectablesAndDrops) {
                forEachCreatureSpawn(clearDrops);
                forEachCollectable(distributeCollectablesRandomly);
                forEachCollectableFromEndtoStart(distributeCollectablesDumpInLateWorlds);

                // Switch fiery key or flamming key
                forEachCreatureSpawn(setFieryKeyOrFlammingKey);

                forEachCreatureSpawn(distributeDropsRandomly);
                forEachCreatureSpawnFromEndtoStart(guarantee99CunesPlacingTheRemainingAsDrops);

                // Guarantee poison vaccine
                forEachCreatureSpawn(countDrop1PoisonVaccineIfAreaIsBeforePoisonousCavern);
                forEachCollectable(countCollectablePoisonVaccineIfAreaIsBeforePoisonousCavern);
                forEachCreatureSpawnFromEndtoStart(replaceSecondaryDropIfBeforePoisonousCavernBeforeRequirementIsAchieved);

                forEachCreatureSpawnFromEndtoStart(distributeDropsDumpInLateWorlds);
            }
        }

        // ------- Empty game

        if (params.keepOnlyBosses) {
            forEachValidCreature(keepOnlyBosses);

            items[item_0_short_sword].attribute1.set(attribute(0xf,ATTR_HP_RECOVERY));
            //items[item_0_short_sword].attribute2.set(attribute(0xf,ATTR_STATUS_RECOVERY));
            items[item_0_short_sword].attribute2.set(attribute(ATTR_LIGHTING_ILLUMINATING,ATTR_LIGHTING));
            items[item_0_short_sword].str.set(0xff);
            items[item_0_short_sword].spd.set(0xff);
            items[item_0_short_sword].def.set(0xff);
            items[item_0_short_sword].bal.set(0xff);
            items[item_0_short_sword].sla.set(0xff);
            items[item_0_short_sword].smh.set(0xff);
            items[item_0_short_sword].pir.set(0xff);
            items[item_0_short_sword].spr.set(0xff);
            items[item_0_short_sword].foc.set(0xff);
            items[item_0_short_sword].ham.set(0xff);
            items[item_0_short_sword].pur.set(0xff);
            items[item_0_short_sword].par.set(0xff);
            items[item_0_short_sword].mel.set(0xff);
            items[item_0_short_sword].sol.set(0xff);
            items[item_0_short_sword].weight.set(0xff);
            items[item_0_short_sword].max_dura.set(0xff);
            items[item_0_short_sword].dura.set(0xff);

            //forEachCreatureSpawn(removeEachSpawn);
            //forEachCollectable(removeEachCollectable);
        }

        // Randomize creatures
        else if (params.randomizeCreatures) {
            // set all creatures to slime

            //swapCreatures(human_world_solitary_region["01_acid_slime"], earth_world_rotting_cavern["00_watcher_plant"], changeSet);
            
            for (var i =0; i<300; i++) {
                var creature1 = randomElement(allRandomizableCreatures);
                var creature2 = randomElement(creatureRandomizableGroups[creature1.randomizationGroup(params)]);
                swapCreatures(creature1, creature2, changeSet);
            }
        }

        // ------- Adjust creature and equip levels for proper progression

        // ------- ApplyDifficulty

        console.log("Difficulty " + params.difficulty + ", factor " + factorByDificultyParam[params.difficulty]);

        if (params.difficulty && params.difficulty != DIFFICULTY_MEDIUM) {
            forEachValidCreature(applyDifficultyForEachValidCreature);
            forEachItem(applyDifficultyForEachItem);
            forEachCreatureSpawn(applyDifficultyForEachSpawn);
            forEachCollectable(applyDifficultyForEachCollectable);
        }

        if (params.messWithScenery) {
            forEachObject(messWithSceneryObjects);
        }

        if (params.removeScenery) {
            forEachObject(removeSceneryObjects);
        }

        // Task #23: Remove tiles based on percentage parameter
        if (params.removeTilesPercent && params.removeTilesPercent > 0) {
            forEachTile(removeTiles);
        }

        // ------- PRESET Directives

        if (params.preset == PRESET_APPLY_DIRECTIVES) {
            forEachCreatureSpawn(presetKingHopperFixforEachCreatureSpawn);
            forEachCreatureSpawn(presetDirectivesforEachCreatureSpawn);
            forEachItem(presetDirectivesforEachItem);
        }
    }

    var allChangeableCollectablesInDefaultGame = [];
    var allSpawnsInDefaultGame = [];

    for (var a in areas) {
        var area = areas[a];
        if (!area.spawns) {
            continue;
        }
        for (var index = 0; index < SPAWN_ENTRIES_COUNT; index++) {
            var spawn = area.spawns[index];
            if (!spawn.chance.isNull() &&
                !spawn.name().endsWith("door") &&
                !spawn.name().includes("blank") &&
                !spawn.name().includes("unknown") &&
                area.name!="void") {
                allSpawnsInDefaultGame.push({
                    spawn: spawn,
                    area: area,
                    index: index
                });
            }
        }

        for (var index = 0; index < COLLECTABLE_COUNT; index++) {
            var collectable = area.collectables[index];
            if (!collectable.isBlank() && irreplacebleKeyItems.indexOf(itemData[collectable.type.get()].type.get())==-1) {
                // Collecting only valid collectables
                allChangeableCollectablesInDefaultGame.push({
                    area: area,
                    collectable: collectable
                });
            }
        }
    }

    console.log("DEBUG - The game has " + allSpawnsInDefaultGame.length + " spawns.");

    console.log("DEBUG - The game has " + allChangeableCollectablesInDefaultGame.length + " collectables."); // + allChangeableCollectablesInDefaultGame.map(c => itemData[c.collectable.type.get()].name + " at " + c.area.name));

    // Test parameter: Place apocrypha (late-game projectile enemy) in first area for testing attack scaling
    if (params.testApocryphaInSolitaryRegion) {
        console.log("\n\n========== TEST: Placing Apocrypha in Solitary Region ==========\n");
        
        // Find the areas
        var solitaryRegion = areas.find(a => a.name === "human_world_solitary_region");
        var lingeringCurse = areas.find(a => a.name === "death_world_lingering_curse_layer");
        
        if (solitaryRegion && lingeringCurse) {
            // Find the creatures
            // In solitary region: dark_spider is creature 0
            // In lingering curse: apocrypha is creature 8 (based on magic.txt line 469-471)
            var darkSpider = solitaryRegion.creatures[0];
            var apocrypha = lingeringCurse.creatures[8];
            
            if (darkSpider && apocrypha) {
                console.log("TEST: Replacing " + darkSpider.name + " with " + apocrypha.name);
                setCreature(darkSpider, apocrypha, changeSet);
                console.log("TEST: Apocrypha placed successfully. Attack scaling should apply based on difficulty=" + params.difficulty);
            } else {
                console.log("ERROR: Could not find dark_spider or apocrypha creatures");
            }
        } else {
            console.log("ERROR: Could not find solitary region or lingering curse areas");
        }
        
        console.log("========== END TEST ==========\n\n");
    }

    operate();

    // As can be found in spoilers map.js this is exit in poisonous cavern that leads to stone cavern, I'm setting it directly to the first door to make easier way there. 
    // shadow_tower_part1.objects[0].setExit(earth_world_poisonous_cavern.objects[13], shuffle.map);


    function setStub(area, address) {
        let changes = {};
        changes[(address+0).toString(16)] = "98";
        changes[(address+1).toString(16)] = "d4";
        changes[(address+2).toString(16)] = "1e";
        changes[(address+3).toString(16)] = "80";
        changeSet.push({
            "file": area.mips_file.fileName,
            "bytes": changes
        });
    }
/*
    function findPosition(subject, query, startFrom) {
        var foundPositions = [];
        for (var i = startFrom; i< subject.length-query.length; i++) {
            var found = true;
            for (var q = 0; q< query.length; q++) {
                if (subject[i+q] != query[q]) {
                    found = false;
                    break;
                }
            }
            if (found) {
                foundPositions.push(i);
            }
        }
        return foundPositions;
    }

    var endOfCommonCode = [0x20, 0x00, 0xbd, 0x27, 0x08, 0x00, 0xe0, 0x03, 0x00, 0x00, 0x00, 0x00];
    var noCode = [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00];
    var startCustomCodeSearch=0x1eb0+1;

    /*for (var address = 0x08; address<=0x70; address+=0x04) {
        setStub(earth_world_stone_cavern, address);
        setStub(shadow_tower_part1, address);
        setStub(human_world_solitary_region, address);
    }*/

    /*for (var address = 0x1d0; address<=0x248; address+=0x04) {
        setStub(earth_world_stone_cavern, address);
        setStub(shadow_tower_part1, address);
        setStub(human_world_solitary_region, address);
    }*/
/*
    function findCustomCode(label, area) {
        var codeStart = (findPosition(area.mips_file.bin, endOfCommonCode, startCustomCodeSearch).pop() + endOfCommonCode.length).toString(16);
        var codeEnd = (findPosition(area.mips_file.bin, noCode, startCustomCodeSearch)[0]).toString(16);
        console.log("start " + label + " " + codeStart + "-" + codeEnd);
        
    }
*/
    /*for (var address = 0x1f48; address<=0x2044;address+=0x04) {
        setStub(earth_world_stone_cavern, address);
        setStub(shadow_tower_part1, address);
        setStub(human_world_solitary_region, address);
    }*/
/*    findCustomCode("earth_world_stone_cavern", earth_world_stone_cavern);
    findCustomCode("shadow_tower_part1", shadow_tower_part1);
    findCustomCode("human_world_solitary_region", human_world_solitary_region);
*/

    human_world_forgotten_region.objects[4].id.set(0x77); // tortured guy
    human_world_forgotten_region.objects[3].id.set(0x76); // hanging guy

    human_world_hidden_region.objects[0].id.set(0xff);
    human_world_hidden_region.objects[1].id.set(0xff);
    human_world_hidden_region.objects[3].id.set(0xff);
    human_world_hidden_region.objects[4].id.set(0xff); // removing torture bed
    human_world_hidden_region.objects[5].id.set(0xff); // removing torture bed
    human_world_hidden_region.objects[29].id.set(0x21); // hanging guy
    human_world_hidden_region.objects[0].id.set(0x82); // forge

    //, to try 0x84 0x85 0x86 0x87

//    human_world_solitary_region.objects.forEach(obj => {
//        if (obj.getType() == "scenery") {
//            obj.id.set(0x18);
//        }
//    });
//

        //var firstObject = 0xe8;
        //var howManyGo = 0x8;
        //var distributeAtEvery = 1;
        //
        //for (var a in areas) {
        //    var area = areas[a];
        //    var i = 0;
        //    for (var o in area.objects) {
        //        if (area.objects[o].getType() == "scenery"/* ||
        //            area.objects[o].getType() == "unknown"*/) {
        //            if (o%distributeAtEvery>0) {
        //                area.objects[o].id.set(0xff);
        //                continue;
        //            }
        //            area.objects[o].id.set(firstObject + (i++)%howManyGo);
        //        }
        //    }
        //}
        //
        //for (var i=0; i<howManyGo; i++) {
        //    var obj = human_world_solitary_region.objects[21+i];
        //    obj.id.set(firstObject + i);
        //    //21..28 pillars, pillar model 0x19
        //    //39 candle, model 0xba
        //    //    //if (obj.getType() == "scenery") {
        //    //    obj.id.set(i);
        //    //}
        //};

//    human_world_solitary_region.objects[27].model.set(3);
//    for (var i=0;i<human_world_forgotten_region.objects.length;i++) {
//      if (i==2) continue;
//      human_world_forgotten_region.objects[i].set(human_world_forgotten_region.objects[8]);
//    }

    //shadow_tower_part1.objects[0].destinationRotation.set(2);

    if (collectableUniques.length) {
        console.log("ERROR - Couldn't distribute collectable uniques " + collectableUniques.map(i => items[i].name));
    }
    if (dropUniques.length) {
        console.log("ERROR - Couldn't distribute drop uniques " + dropUniques.map(i => items[i].name));
    }

    // Function to generate creature power value table (PR #14)
    function generateCreaturePowerTable(outputPath) {
        console.log("Generating creature power value table...");
        
        // Collect all creatures from all areas
        const allCreatures = [];
        for (const area of areas) {
            if (area.creatures) {
                for (const creature of area.creatures) {
                    if (!creature.isBlank && !creature.isDoor) {
                        allCreatures.push({
                            creature: creature,
                            areaName: area.name,
                            areaScore: area.score || 0
                        });
                    }
                }
            }
        }
        
        console.log(`Found ${allCreatures.length} creatures to analyze`);
        
        // Calculate power scores and extract data
        const creatureData = allCreatures.map(({ creature, areaName, areaScore }) => {
            const data = {
                name: creature.name || 'unknown',
                area: areaName,
                areaScore: areaScore,
                // Base attributes
                str: creature.str ? creature.str.get() : 0,
                spd: creature.spd ? creature.spd.get() : 0,
                def: creature.def ? creature.def.get() : 0,
                bal: creature.bal ? creature.bal.get() : 0,
                sla: creature.sla ? creature.sla.get() : 0,
                smh: creature.smh ? creature.smh.get() : 0,
                pir: creature.pir ? creature.pir.get() : 0,
                spr: creature.spr ? creature.spr.get() : 0,
                foc: creature.foc ? creature.foc.get() : 0,
                ham: creature.ham ? creature.ham.get() : 0,
                pur: creature.pur ? creature.pur.get() : 0,
                par: creature.par ? creature.par.get() : 0,
                mel: creature.mel ? creature.mel.get() : 0,
                sol: creature.sol ? creature.sol.get() : 0,
                hp: creature.hp ? creature.hp.get() : 0,
                
                // Basic attack attributes
                attack1: creature.attack1 ? creature.attack1.get() : 0,
                attack2: creature.attack2 ? creature.attack2.get() : 0,
                magic1: creature.magic1 ? creature.magic1.get() : 0,
                
                // EntityStateData attacks
                physicalAttacks: [],
                magicAttacks: [],
                
                // Defense values
                weaponDef1: creature.weaponDefense1 ? creature.weaponDefense1.get() : 0,
                weaponDef2: creature.weaponDefense2 ? creature.weaponDefense2.get() : 0,
                weaponDef3: creature.weaponDefense3 ? creature.weaponDefense3.get() : 0,
                magDef1: creature.magDefense1 ? creature.magDefense1.get() : 0,
                magDef2: creature.magDefense2 ? creature.magDefense2.get() : 0,
                magDef3: creature.magDefense3 ? creature.magDefense3.get() : 0,
                magDef4: creature.magDefense4 ? creature.magDefense4.get() : 0,
                magDef5: creature.magDefense5 ? creature.magDefense5.get() : 0,
            };
            
            // Extract EntityStateData attacks
            if (creature.entityStates && creature.entityStates.length > 0) {
                creature.entityStates.forEach(entityState => {
                    if (entityState.type === 0x20) {
                        // Physical attack
                        const attacks = [];
                        if (entityState.attack1 && !entityState.attack1.isNull()) {
                            attacks.push(entityState.attack1.get());
                        }
                        if (entityState.attack2 && !entityState.attack2.isNull()) {
                            attacks.push(entityState.attack2.get());
                        }
                        if (entityState.attack3 && !entityState.attack3.isNull()) {
                            attacks.push(entityState.attack3.get());
                        }
                        if (attacks.length > 0) {
                            data.physicalAttacks.push(attacks.join('/'));
                        }
                    } else if (entityState.type === 0x30) {
                        // Magic/spell attack
                        const attacks = [];
                        if (entityState.attack1 && !entityState.attack1.isNull()) {
                            attacks.push(entityState.attack1.get());
                        }
                        if (entityState.attack2 && !entityState.attack2.isNull()) {
                            attacks.push(entityState.attack2.get());
                        }
                        if (entityState.attack3 && !entityState.attack3.isNull()) {
                            attacks.push(entityState.attack3.get());
                        }
                        if (attacks.length > 0) {
                            data.magicAttacks.push(attacks.join('/'));
                        }
                    }
                });
            }
            
            // Calculate power score
            let score = 0;
            score += data.str * 2;
            score += data.spd * 1;
            score += data.def * 3;
            score += data.bal * 1;
            score += data.sla * 1.5;
            score += data.smh * 1.5;
            score += data.pir * 1.5;
            score += data.spr * 1.5;
            score += data.foc * 1;
            score += data.ham * 1;
            score += data.pur * 1.5;
            score += data.par * 1;
            score += data.mel * 2;
            score += data.sol * 1.5;
            score += data.hp * 0.5;
            score += data.attack1 * 3;
            score += data.attack2 * 3;
            score += data.magic1 * 3;
            
            // Add EntityStateData attack values
            data.physicalAttacks.forEach(attackStr => {
                const values = attackStr.split('/').map(v => parseInt(v));
                values.forEach(v => score += v * 0.3);
            });
            data.magicAttacks.forEach(attackStr => {
                const values = attackStr.split('/').map(v => parseInt(v));
                values.forEach(v => score += v * 0.3);
            });
            
            // Add defense values
            score += (data.weaponDef1 + data.weaponDef2 + data.weaponDef3) * 0.1;
            score += (data.magDef1 + data.magDef2 + data.magDef3 + data.magDef4 + data.magDef5) * 0.1;
            
            data.powerScore = Math.round(score);
            
            return data;
        });
        
        // Remove duplicates and sort by power score
        const uniqueCreatures = new Map();
        creatureData.forEach(data => {
            if (!uniqueCreatures.has(data.name) || uniqueCreatures.get(data.name).powerScore < data.powerScore) {
                uniqueCreatures.set(data.name, data);
            }
        });
        const sortedData = Array.from(uniqueCreatures.values()).sort((a, b) => b.powerScore - a.powerScore);
        
        // Generate Markdown table
        let md = '# Shadow Tower Creature Power Value Table\n\n';
        md += `**Generated:** ${new Date().toISOString()}\n\n`;
        md += '**Purpose:** Verify PR #14 magic/projectile attack damage scaling fix\n\n';
        md += 'This table shows power values for all creatures, including:\n';
        md += '- **Type 0x20**: Physical attack EntityStateData\n';
        md += '- **Type 0x30**: Spell/Magic attack EntityStateData (fixed in PR #14)\n\n';
        md += '---\n\n';
        
        // Summary statistics
        const totalCreatures = sortedData.length;
        const withPhysicalAttacks = sortedData.filter(d => d.physicalAttacks.length > 0).length;
        const withMagicAttacks = sortedData.filter(d => d.magicAttacks.length > 0).length;
        const avgPower = Math.round(sortedData.reduce((sum, d) => sum + d.powerScore, 0) / totalCreatures);
        const maxPower = Math.max(...sortedData.map(d => d.powerScore));
        const minPower = Math.min(...sortedData.map(d => d.powerScore));
        
        md += '## Summary Statistics\n\n';
        md += `- **Total Unique Creatures**: ${totalCreatures}\n`;
        md += `- **Creatures with Physical Attacks (0x20)**: ${withPhysicalAttacks}\n`;
        md += `- **Creatures with Magic Attacks (0x30)**: ${withMagicAttacks}\n`;
        md += `- **Average Power Score**: ${avgPower}\n`;
        md += `- **Highest Power Score**: ${maxPower}\n`;
        md += `- **Lowest Power Score**: ${minPower}\n\n`;
        md += '### Important Notes\n\n';
        md += '⚠️ **Progression-Based Scaling:** The power values shown reflect global difficulty scaling only.\n';
        md += 'They do NOT include position-based normalization (e.g., strong creatures weakened when placed in early areas).\n';
        md += 'This feature is planned but not yet implemented.\n\n';
        md += '- **Area Score**: Indicates creature\'s position in randomized map progression (0 = start, higher = later)\n';
        md += '- **Power Score**: Calculated from base attributes + attacks + defenses after difficulty scaling\n';
        md += '- **Attack Values**: Shown are the actual scaled values (Type 0x20 = physical, Type 0x30 = magic)\n\n';
        
        md += '---\n\n';
        md += '## Compact Creature Table (Sorted by Power)\n\n';
        md += '**Note:** Power values shown are after global difficulty scaling but do NOT include progression-based normalization.\n';
        md += 'Area Score indicates the creature\'s position in game progression (0 = start area, higher = later areas).\n\n';
        md += '| Creature Name | Power | HP | Area Score | Physical (0x20) | Magic (0x30) | Area |\n';
        md += '|---------------|-------|----|-----------|-----------------|--------------|-----------|\n';
        
        sortedData.forEach(data => {
            const physAttacks = data.physicalAttacks.length > 0 ? data.physicalAttacks.join('; ') : '-';
            const magAttacks = data.magicAttacks.length > 0 ? data.magicAttacks.join('; ') : '-';
            const areaShort = data.area.replace(/_/g, ' ').substring(0, 25);
            
            md += `| ${data.name} | ${data.powerScore} | ${data.hp} | ${data.areaScore} | ${physAttacks} | ${magAttacks} | ${areaShort} |\n`;
        });
        
        md += '\n---\n\n';
        md += '## Creatures with Type 0x30 (Magic/Spell Attacks)\n\n';
        md += '**These creatures were fixed in PR #14 to properly scale with difficulty settings.**\n\n';
        md += '| Creature | Power | HP | Magic Attack Values |\n';
        md += '|----------|-------|----|--------------------|\\n';
        
        sortedData.filter(d => d.magicAttacks.length > 0).forEach(data => {
            md += `| ${data.name} | ${data.powerScore} | ${data.hp} | ${data.magicAttacks.join('; ')} |\n`;
        });
        
        md += '\n---\n\n';
        md += '## Full Attribute Table\n\n';
        md += '| Creature | Power | HP | STR | SPD | DEF | BAL | SLA | SMH | PIR | SPR | FOC | HAM | PUR | PAR | MEL | SOL |\n';
        md += '|----------|-------|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|\n';
        
        sortedData.forEach(data => {
            md += `| ${data.name} | ${data.powerScore} | ${data.hp} | `;
            md += `${data.str} | ${data.spd} | ${data.def} | ${data.bal} | `;
            md += `${data.sla} | ${data.smh} | ${data.pir} | ${data.spr} | `;
            md += `${data.foc} | ${data.ham} | ${data.pur} | ${data.par} | `;
            md += `${data.mel} | ${data.sol} |\n`;
        });
        
        md += '\n---\n\n';
        md += '## Power Score Formula\n\n';
        md += '```\n';
        md += 'Power = STR×2 + SPD×1 + DEF×3 + BAL×1 +\n';
        md += '        SLA×1.5 + SMH×1.5 + PIR×1.5 + SPR×1.5 +\n';
        md += '        FOC×1 + HAM×1 + PUR×1.5 + PAR×1 +\n';
        md += '        MEL×2 + SOL×1.5 +\n';
        md += '        HP×0.5 +\n';
        md += '        EntityStateData attacks×0.3 +\n';
        md += '        Base attacks×3 +\n';
        md += '        Defenses×0.1\n';
        md += '```\n\n';
        
        // Write to file
        const tablePath = outputPath + path.sep + 'creature_power_table.md';
        fs.writeFileSync(tablePath, md);
        console.log(`Creature power table written to: ${tablePath}`);
        
        // Also generate CSV for spreadsheet analysis
        const csvHeaders = [
            'Creature Name', 'Power Score', 'HP', 'Area Score', 'Area',
            'STR', 'SPD', 'DEF', 'BAL', 'SLA', 'SMH', 'PIR', 'SPR',
            'FOC', 'HAM', 'PUR', 'PAR', 'MEL', 'SOL',
            'Attack1', 'Attack2', 'Magic1',
            'Physical Attacks (0x20)', 'Magic Attacks (0x30)'
        ].join(',');
        
        const csvRows = sortedData.map(data => {
            return [
                data.name, data.powerScore, data.hp, data.areaScore, '"' + data.area + '"',
                data.str, data.spd, data.def, data.bal, data.sla, data.smh, data.pir, data.spr,
                data.foc, data.ham, data.pur, data.par, data.mel, data.sol,
                data.attack1, data.attack2, data.magic1,
                '"' + data.physicalAttacks.join('; ') + '"',
                '"' + data.magicAttacks.join('; ') + '"'
            ].join(',');
        });
        
        const csv = [csvHeaders, ...csvRows].join('\n');
        const csvPath = outputPath + path.sep + 'creature_power_table.csv';
        fs.writeFileSync(csvPath, csv);
        console.log(`CSV table written to: ${csvPath}`);
    }

    console.log = function() {
        //logFileRandomize.write(util.format.apply(null, arguments) + '\n');
        fs.writeSync(logFileRandomize, util.format.apply(null, arguments) + '\n');
    }

    var htmlFile = mapFolder + path.sep + "maps.html";
    var mapsHTML = ""+fs.readFileSync(htmlFile);
    if (!global.toNotGenerateImages) {
        var { createCanvas } = require("@napi-rs/canvas");
    }

    // Generate Mermaid chart with proper sanitization
    var mermaidChart = "graph TD\n";
    var mermaidNodeId = (name) => name.replace(/[^a-zA-Z0-9]/g, '_');
    
    shuffle.map.forEach(area => {
        if (area.exits) {
            Object.values(area.exits).forEach((exit) => {
                if (exit) {
                    var currentArea = areas.find(a => normalizeAreaName(a.name) == normalizeAreaName(area.name));
                    var exitArea = areas.find(a => normalizeAreaName(a.name) == normalizeAreaName(exit.dest));
                    var exitName = normalizeAreaName(area.name)+"/"+exit.id;
                    var exitObj = currentArea.objects[exit.id];
                    var exitObjText = exit.type == "jump" ? "" : "r" + exitObj.destinationRotation.get() + " y" + exitObj.destinationYFineShift.get();

                    var sourceId = mermaidNodeId(area.name);
                    var destId = mermaidNodeId(exit.dest);
                    var sourceLabel = (readableName[area.name] || area.name) + (area.score?" [" + area.score+"]":"");
                    var destLabel = (readableName[exit.dest] || exit.dest);
                    var exitLabel = (exitsNames[exitName] || exitName) + " " + exitObjText;
                    
                    // Sanitize labels - remove newlines, quotes and brackets that break mermaid
                    sourceLabel = (sourceLabel || '').replace(/[\n\r]/g, ' ').replace(/"/g, "'");
                    destLabel = (destLabel || '').replace(/[\n\r]/g, ' ').replace(/"/g, "'");
                    exitLabel = (exitLabel || '').replace(/[\n\r]/g, ' ').replace(/"/g, "'");

                    var chartText = sourceId + '["' + sourceLabel + '"] -->|"' + exitLabel + '"| ' + destId + '["' + destLabel + '"]\n';

                    console.log("Exit for chart " + chartText + " " + (exit.type == "jump" ? "" : exitObj.toReadableString()));
                    mermaidChart += "  " + chartText;
                }
            });
        }
    });
    mapsHTML = mapsHTML.replace("<!--mermaid-->", mermaidChart);

    // Generate neo4jd3 graph data for better visualization (Task 7)
    var neo4jData = { nodes: [], relationships: [] };
    var nodeMap = new Map();
    var nodeIdCounter = 0;
    
    // Build nodes and relationships for neo4jd3
    shuffle.map.forEach(area => {
        // Create node for current area if it doesn't exist
        if (!nodeMap.has(area.name)) {
            var currentArea = areas.find(a => normalizeAreaName(a.name) == normalizeAreaName(area.name));
            var world = area.name.split('_')[0]; // Extract world prefix
            var worldLabel = world.charAt(0).toUpperCase() + world.slice(1); // Capitalize
            nodeMap.set(area.name, nodeIdCounter.toString());
            neo4jData.nodes.push({
                id: nodeIdCounter.toString(),
                labels: [worldLabel], // Task 7: Use world as label for color assignment
                properties: {
                    name: (readableName[area.name] || area.name).replace(/\n/g, ' '),
                    areaId: area.name,
                    score: area.score || 0,
                    world: world
                },
                caption: (readableName[area.name] || area.name).replace(/\n/g, ' ') // Task 7: Add caption for node label
            });
            nodeIdCounter++;
        }
        
        // Create relationships for exits
        if (area.exits) {
            Object.values(area.exits).forEach((exit) => {
                if (exit) {
                    // Create destination node if it doesn't exist
                    if (!nodeMap.has(exit.dest)) {
                        var exitArea = areas.find(a => normalizeAreaName(a.name) == normalizeAreaName(exit.dest));
                        var destWorld = exit.dest.split('_')[0];
                        var destWorldLabel = destWorld.charAt(0).toUpperCase() + destWorld.slice(1);
                        nodeMap.set(exit.dest, nodeIdCounter.toString());
                        neo4jData.nodes.push({
                            id: nodeIdCounter.toString(),
                            labels: [destWorldLabel], // Task 7: Use world as label for color assignment
                            properties: {
                                name: (readableName[exit.dest] || exit.dest).replace(/[\n\r]/g, ' '),
                                areaId: exit.dest,
                                score: exitArea && exitArea.score ? exitArea.score : 0,
                                world: destWorld
                            },
                            caption: (readableName[exit.dest] || exit.dest).replace(/[\n\r]/g, ' ') // Task 7: Add caption for node label
                        });
                        nodeIdCounter++;
                    }
                    
                    // Create relationship
                    var currentArea = areas.find(a => normalizeAreaName(a.name) == normalizeAreaName(area.name));
                    var exitName = normalizeAreaName(area.name)+"/"+exit.id;
                    var exitObj = currentArea.objects[exit.id];
                    var exitObjText = exit.type == "jump" ? "" : "r" + exitObj.destinationRotation.get() + " y" + exitObj.destinationYFineShift.get();
                    
                    neo4jData.relationships.push({
                        id: neo4jData.relationships.length.toString(),
                        type: exit.type === "jump" ? "JUMP" : "EXIT",
                        startNode: nodeMap.get(area.name),
                        endNode: nodeMap.get(exit.dest),
                        properties: {
                            exitId: exit.id,
                            exitName: exitsNames[exitName] || exitName,
                            details: exitObjText
                        }
                    });
                }
            });
        }
    });
    
    // Save neo4j data as JSON for the visualization page
    // Task 7: Wrap in Neo4j query response format for neo4jd3 v0.0.5
    var neo4jDataWrapped = {
        results: [
            {
                data: [
                    {
                        graph: neo4jData
                    }
                ]
            }
        ]
    };
    var neo4jDataJson = JSON.stringify(neo4jDataWrapped, null, 2);
    mapsHTML = mapsHTML.replace("<!--neo4j-data-->", "var neo4jGraphData = " + neo4jDataJson + ";");
    fs.appendFileSync(logFileRandomize, "DEBUG: About to enter area loop. Total areas: " + Object.keys(areas).length + "\n");

    for (var a in areas) {
        try {
            var area = areas[a];
            area.writeMapImage(createCanvas, mapFolder);
            var summary = "";
            for (var i in area.mapSummary) { summary += area.mapSummary[i] + "<br>"; }
            summary = replaceAll(summary," ","&nbsp;");
            summary = replaceAll(summary, "span&nbsp;style", "span style");
            mapsHTML = mapsHTML.replace("<!--" + area.name + "-->", summary);

            area.reinjectEntityDataFromCreaturesToFile();
        } catch (err) {
            fs.appendFileSync(logFileRandomize, "ERROR in area loop for " + area.name + ": " + err + "\n" + err.stack + "\n");
        }
    }
    try {
        fs.writeFileSync(htmlFile, mapsHTML); // Task 7: Changed to sync to ensure data is written before script exits
        fs.appendFileSync(logFileRandomize, "Successfully wrote maps.html - size: " + mapsHTML.length + " bytes\n");
    } catch (err) {
        fs.appendFileSync(logFileRandomize, "ERROR writing maps.html: " + err + "\n");
    }

    for (var i in tfileOriginal.files) {
        var originalPart = tfileOriginal.files[i];
        var changedPart = tfile.files[i];
        let changes = {};
        let filePath = originalPart.fileName;
        var anyChange = false;
        for (var k = 0; k < originalPart.bin.length; k++) {
            var originalValue = originalPart.originalBin[k];
            if (changedPart.bin[k] != originalValue) {
                //console.log("Change " + k.toString(16) + " " + originalValue.toString(16) + " to " + changedPart.bin[k].toString(16));
                changes[k.toString(16)] = changedPart.bin[k].toString(16);
                anyChange = true;
            }
        }
        if (anyChange) {
            changeSet.push({
                "file": filePath,
                "bytes": changes
            });
        }
    }

    // Generate creature power value table (for PR #14 verification)
    console.log(" generating creature power value table");
    generateCreaturePowerTable(changeSetPath);

    // Write item location tracker
    console.log(" writing item tracker notes");
    console.log(" writing " + changeSetFile);
    fs.writeFileSync(changeSetFile, JSON.stringify(changeSet));
}

if (process.argv[1] && process.argv[1].indexOf("randomize.js") > -1) {
    randomize(process.argv[2], process.argv[3]);
} else {
    module.exports = randomize;
}