const shuffle = require('./map_shuffler.js');

console.log("Testing map shuffler with segment extraction-insertion...");
const result = shuffle({ randomizeMap: true });

if (result && result.isComplete) {
    console.log("\n✓ SUCCESS: Map is complete and walkable");
    console.log("  - Path difficulty:", result.pathDifficulty);
    console.log("  - Walk steps:", result.walk ? result.walk.length : 0);
} else {
    console.log("\n✗ FAILURE: Map is not complete");
    if (result) {
        console.log("  - isComplete:", result.isComplete);
    }
}
