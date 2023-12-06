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
			console.log("Area " + area.name);
			if (!area.exits) {
				return;
			}
			Object.keys(area.exits).forEach(e => {
				var exit = area.exits[e];
				console.log(" cloneRegistryPerDestination[" + normalizeAreaName(exit.dest) + "/" + exit.wayBackId +"] set to " + area.name + "/"+exit.id);
				cloneRegistryPerDestination[normalizeAreaName(exit.dest) + "/" + exit.wayBackId] = clone(area.objects[parseInt(exit.id)]);
			});

			area.exits = {};
		});

    	function originalEntranceTo(dest, wayBackId) {
    		return cloneRegistryPerDestination[dest + "/" + wayBackId];
    	}

    	this.source.map.forEach(targetArea => {
			targetArea.exits.forEach(targetExit => {
				if (targetExit.id == "jump") {
					return;
				}
				var objectToCopyFrom = originalEntranceTo(targetExit.dest, targetExit.wayBackId);

				var recipientArea = data_model.areas.find(originalArea => targetArea.name.includes(originalArea.name));
				var recipientObject = recipientArea ? recipientArea.objects[parseInt(targetExit.id)] : null;
				if (!objectToCopyFrom) {
		    		console.log("  Not found object to copy from leading to " + targetExit.dest + "/" + targetExit.wayBackId+ ". wanted to set to " + targetArea.name + "/" + targetExit.id);
				} else if (recipientObject) {
		    		console.log("  Setting exit for " + targetArea.name + "/" + targetExit.id + " as one leading to " + targetExit.dest + "/" + targetExit.wayBackId);
					data_model.areas.find(area => area.name == targetArea.name).exits[targetExit.id] = targetExit;
					recipientObject.set(objectToCopyFrom);
				} else {
		    		console.log("  Not found recipient " + targetArea.name + "/" + targetExit.id + ", wanted to set as one leading to " + targetExit.dest + "/" + targetExit.wayBackId);
				}	
    		});
    	});
    	//shadow_tower_part1.objects[0].set(poisonAreaEntry);
    }
}

global.MapShuffle = MapShuffle;
