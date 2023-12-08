'use strict';

const randomizer_common = require('./randomizer_common');
const data_model = require('./data_model');

function clone(orig) {
	var result = Object.assign(Object.create(Object.getPrototypeOf(orig)), orig);
	result.bin = result.bin.slice(result.offset_in_file, result.offset_in_file + OBJECTS_SIZE);
	result.offset_in_file = 0;
	return result;
}

class MapShuffle {
    constructor(source) {
    	this.source = source;
    }

    applyMap(data_model) {
    	console.log("DEBUG ------------------ Randomization engine - Defining map");

    	var cloneRegistryPerDestination = {};

		data_model.areas.forEach(area => {
			console.error("Area " + area.name);
			Object.keys(area.exits).forEach(e => {
				var exit = area.exits[e];
				if (exit.id != "jump") {
					console.error(" cloneRegistryPerDestination[" + exit.dest + "/" + exit.wayBackId +"] set to " + area.name + "/"+exit.id);
					cloneRegistryPerDestination[exit.dest + "/" + exit.wayBackId] = clone(area.objects[parseInt(exit.id)]);
				}
			});

			area.exits = {};
		});

    	function originalEntranceTo(dest, wayBackId) {
    		return cloneRegistryPerDestination[dest + "/" + wayBackId];
    	}

    	this.source.map.forEach(targetArea => {
			targetArea.exits.forEach(targetExit => {
				var objectToCopyFrom = originalEntranceTo(targetExit.dest, targetExit.wayBackId);

				var recipientArea = data_model.areas.find(originalArea => targetArea.name.includes(originalArea.name));
				recipientArea.score = targetArea.depth;
				var recipientObject = recipientArea ? recipientArea.objects[parseInt(targetExit.id)] : null;
				if (!objectToCopyFrom && targetExit.id != "jump") {
		    		console.error("  Not found object to copy from leading to " + targetExit.dest + "/" + targetExit.wayBackId+ ". wanted to set to " + targetArea.name + "/" + targetExit.id);
				} else if (recipientObject) {
					var areaToSetExit = data_model.areas.find(area => normalizeAreaName(area.name) == normalizeAreaName(targetArea.name));
					if (!areaToSetExit) {
			    		console.error("  ERROR - Not found area for setting exit " + targetArea.name + " " + normalizeAreaName(targetArea.name));
			    		return;
					} else if (!areaToSetExit.exits) {
			    		console.error("  ERROR - Doesnt have exits " + targetArea.name + " " + normalizeAreaName(targetArea.name));
			    		return;
					} else {
			    		console.log("  Setting exit for " + targetArea.name + "/" + targetExit.id + " as one leading to " + targetExit.dest + "/" + targetExit.wayBackId);
						areaToSetExit.exits[targetExit.id] = targetExit;
						targetExit.origin = targetArea.name;
						if (targetExit.id == "jump") {
							recipientObject.set(objectToCopyFrom);
						}
					}
				} else {
		    		console.error("  Not found recipient " + targetArea.name + "/" + targetExit.id + ", wanted to set as one leading to " + targetExit.dest + "/" + targetExit.wayBackId);
				}	
    		});
    	});
    	//shadow_tower_part1.objects[0].set(poisonAreaEntry);
    }
}

global.MapShuffle = MapShuffle;
