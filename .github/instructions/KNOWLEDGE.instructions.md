# Shadow Tower Randomizer - Comprehensive Knowledge Base

## Project Overview

This is a randomizer and modding tool for **Shadow Tower**, a FromSoftware PlayStation 1 game. The project enables players to randomize game content including:
- Map/area layouts and connections
- Enemy/creature placements, stats, and drops
- Item locations and equipment statistics
- Visual elements (textures and colors)

The tool operates on ISO image files (.bin format) and provides both:
1. **Command-line interface** for local usage
2. **Web-based interface** hosted on Google Cloud Platform for online randomization

---

## Architecture Overview

### Core Components

1. **ISO Manipulation Layer**
   - **unpack.js** - Extracts T-format files from PSX ISO
   - **pack.js** - Repackages modified T-format files back into ISO
   - **randomizer_common.js** - Low-level binary reading/writing for T-format files
   - **data_model.js** - Data structures representing game data (items, areas, creatures)

2. **Randomization Engine**
   - **randomize.js** - Main randomization orchestrator
   - **randomizer_map.js** - Applies randomized map configurations
   - **map_shuffler.js** - Shuffles area connections and validates walkability
   - **walklib.js** - Validates that randomized maps are completable

3. **Modification Layer**
   - **change.js** - Applies changesets (binary patches) to game files
   - **mod.js** - High-level orchestrator for the entire mod process

4. **Web Interface**
   - **server.js** - Express.js server with Google Cloud Storage integration
   - **site/** - Frontend web application (jQuery-based UI)
   - **Dockerfile** - Container configuration for cloud deployment

5. **Game Data**
   - **game_data.js** - Complete item/equipment database with stats
   - **constants.js** - Item IDs, creature IDs, and game constants
   - **map.json** - Original game map structure and connections
   - **creatures_data.csv** - Creature statistics and attributes

---

## File Structure and Responsibilities

### Root Directory Files

#### Orchestration Scripts
- **mod.js** - Entry point that chains: unpack → randomize → change → pack → mkpsxiso
  - Accepts ISO file path and params JSON
  - Can run single preset or all presets in params/ folder
  - Creates output folders in generated/
  
#### Core Processing
- **randomize.js** - Generates randomization changeset based on parameters
  - Reads params.json (difficulty, preset, randomization flags)
  - Produces changeset.json with all binary modifications
  - Generates spoiler files (readable.txt, maps.html, walk.txt)
  - Uses seeded random for reproducibility

- **change.js** - Applies changeset.json modifications to extracted files
  - Modifies binary data at specific offsets
  - Handles file swaps and copies
  - Updates checksums

- **unpack.js** - Extracts .T files from ISO into individual parts
  - Uses TFILEReader to parse T-format container files
  - Splits into numbered parts (e.g., "128 281000-2c0800.T")

- **pack.js** - Reassembles modified parts back into .T files
  - Recalculates offsets and checksums
  - Writes consolidated T-format files

#### Data Models
- **data_model.js** - Defines data structures for game elements
  - Item data (weapons, armor, consumables) with stats
  - Area/map structures with exits and objects
  - Creature spawn data
  - Provides methods to modify binary representations

- **randomizer_common.js** - T-file format reader/writer
  - TFILEReader class - parses T-format container
  - TFormat class - represents entire T-file
  - TFormatPart class - represents individual file within T-container
  - Bit manipulation utilities
  - Endian conversion functions
  - RGB/HSV color conversion for texture randomization

#### Map Management
- **map_shuffler.js** - Randomizes area connections
  - Swaps fog gates/exits between areas
  - Validates bidirectional consistency
  - Difficulty-based constraints
  - Produces shuffled map.json

- **walklib.js** - Pathfinding validator
  - Simulates player progression through randomized map
  - Ensures all required areas are reachable
  - Checks for soft-locks
  - Validates key item accessibility

- **randomizer_map.js** - Applies map changes to binary data
  - MapShuffle class applies shuffled map to data_model
  - Clones and reassigns exit objects
  - Updates area difficulty scores based on depth

#### Utilities
- **functions.js** - Global helper functions
  - Binary read/write (getUInt8/16/32, setUInt8/16/32)
  - Seeded random number generation
  - Area name normalization
  - Binary array manipulation

- **constants.js** - Game constant definitions
  - All item IDs (item_0_short_sword = 0x0, etc.)
  - Creature IDs
  - Element types (FIRE, FROST, HOLY, etc.)
  - Item types (WEAPON, ARMOR, HELMET, etc.)

- **game_data.js** - Complete item database
  - JSON structure with all 200+ items
  - Stats: str, spd, def, bal, sla, smh, pir, spr, etc.
  - Durability, weight, elemental attributes
  - Raw binary representations

#### Testing
- **test_item_uniques.sh** - Validates unique item drops
- **test_items_count.sh** - Verifies item counts
- **test_assertions.sh** - General game state assertions
- **test_failures.sh** - Tracks known failures

### Params Directory

Contains preset configuration files (JSON):

```json
{
  "label": "randomized-medium",
  "preset": "any%",
  "difficulty": "medium",
  "randomizeMap": true,
  "randomizeCreatures": true,
  "randomizeCollectablesAndDrops": true,
  "fieryKeyFlamingKeyDrop": "fiery-key-in-fire-world",
  "randomizeNonEssentialKeys": true,
  "seed": "1"
}
```

**Presets:**
- **any%** - Optimized for speedrun completion
- **100%** - All items collectable in one playthrough
- **bonanza** - Maximum items early game (unstable)
- **comedy** - Chaotic spawns and item placement
- **scary-game** - Maximum difficulty/randomness
- **no-change** - Minimal changes (directives only)
- **fix-king-hopper** - Only fixes King Hopper spawn bug
- **apply-directives** - Modernization fixes only

**Difficulty Levels:**
- extreme-easy (0.1x factor)
- easy (0.5x)
- medium (1x)
- hard (1.3x)
- very-hard (1.6x)
- even-harder (2x)

**Randomization Flags:**
- randomizeMap - Shuffles area connections
- randomizeCreatures - Randomizes enemy placement/stats
- randomizeCollectablesAndDrops - Randomizes item locations
- randomizeNonEssentialKeys - Shuffles optional keys
- colorRandomizationGeneral/BossRooms/Creatures - Visual randomization

**Key Item Options:**
- keep-on-cerberus - Default game progression
- fiery-key-in-fire-world - Fiery key drops in fire world
- fiery-key-anywhere-before-ashen-cavern - More accessible
- flaming-key-in-the-first-area - Skip most game progression

### Site Directory (Web Frontend)

- **index.html** - Main web UI
  - File upload interface
  - Preset selection (commented out, simplified to bonanza)
  - Download completed randomized ISO
  - Credits and documentation

- **index.js** - Frontend JavaScript
  - Handles file upload via presigned URLs
  - Polls server for processing status
  - jQuery UI components (buttons, tabs, radiosets)
  - Session management via localStorage

- **Iso9660.js** - ISO 9660 filesystem parser (Kaitai Struct generated)
  - Parses CD-ROM filesystem structure
  - Currently unused in active flow

- **jquery-ui.*** - jQuery UI library files
- **KaitaiStream.js** - Binary parsing library
- **uuid.min.js** - UUID generation for sessions
- **package.json** - jQuery UI metadata

### Generated Directory

Output folder structure for each preset:

```
generated/
├── randomized-medium/
│   ├── extracted/              # Unpacked ISO contents
│   │   ├── ST/                 # Game data folder
│   │   │   ├── COM/            # Common files
│   │   │   │   └── FDAT.T      # Main data container
│   │   │   ├── CHR0-4/         # Character/creature data
│   │   │   └── ...
│   │   ├── ST.EXE              # Game executable
│   │   └── ...
│   ├── spoilers/               # Randomization details
│   │   ├── changeset.json      # All binary modifications
│   │   ├── params.json         # Configuration used
│   │   ├── randomize.txt       # Detailed log
│   │   ├── readable.txt        # Human-readable changes
│   │   ├── map.json            # Shuffled map structure
│   │   ├── map-with-walk-detail.json  # Pathfinding validation
│   │   ├── walk.txt            # Walkability summary
│   │   ├── maps.html           # Visual map browser
│   │   └── maps/               # PNG images of each area
│   ├── st.xml                  # mkpsxiso descriptor
│   └── modified-randomized-medium-st.bin  # Final ISO
```

**Key Files:**
- **changeset.json** - Complete list of binary modifications (1.5MB)
  - File paths and hex offset/value pairs
  - File swap operations
  - Texture modifications

- **readable.txt** - Human-readable summary (400KB)
  - Item placement listings
  - Creature spawn locations
  - Stat modifications

- **maps.html** - Interactive map viewer
  - Embedded PNG images for each area
  - Shows item locations and exits
  - Generated if toNotGenerateImages flag is false

- **walk.txt** - Pathfinding validation result
  - Confirms all areas reachable
  - Lists progression path

---

## Data Flow

### Command-Line Workflow

1. **Input:** st.bin (Shadow Tower ISO) + params JSON
2. **Unpack:** dumpsxiso extracts ISO → extracted/
3. **Parse:** T-files split into parts (unpack.js)
4. **Randomize:** Generate changeset.json (randomize.js)
5. **Apply:** Modify binary data (change.js)
6. **Repack:** Reassemble T-files (pack.js)
7. **Build:** mkpsxiso creates modified ISO
8. **Output:** modified-{label}-st.bin + spoilers/

### Web Workflow

1. User uploads st.bin via presigned URL to Google Cloud Storage
2. Server downloads file to uploads/{sessionId}/
3. Server copies bonanza.json template, updates label to sessionId
4. Server runs: `npm run mod "{file}" "{params}"`
5. Generated output created in uploads/{sessionId}/{sessionId}/
6. Server deletes extracted/ folder (saves space)
7. Server zips output folder
8. Server uploads zip to Google Cloud Storage outputs/
9. Server generates presigned download URL
10. Client polls /status, receives download link when complete

---

## T-File Format

Shadow Tower uses a custom container format (.T files) for game data:

**Structure:**
```
[Header]
  - Number of files
  - Offset table
[File 1 Data]
[File 2 Data]
...
[File N Data]
```

**TFILEReader** parses this format:
- Reads header to get file count and offsets
- Extracts individual files as TFormatPart objects
- Each part has: offset, length, bin (byte array), checksum

**Checksum Verification:**
- 4-byte checksum stored at file start
- Calculated via algorithm in TFormatPart.calculateCheckSum()
- Validated during unpack, recalculated during pack

**Part Naming:**
- Format: "{index} {offset_hex}-{end_offset_hex}.T"
- Example: "128 281000-2c0800.T"

---

## Randomization System

### Preset Logic (randomize.js)

**Presets configure these parameters:**

1. **Progressiveness** - How difficulty scales across areas
   - FLAT - All areas same difficulty (game average)
   - MEDIUM - ~10% harder per area
   - INCREASED - 3x easier start, 3x harder end
   - CRAZY - Each area 10x easier to 10x harder randomly

2. **Item Distribution**
   - COLLECTABLE_UNIQUES_PROPORTION - % as ground pickups vs drops
   - CHANCE_OF_UNIQUE_DROP - % creatures drop unique items
   - CHANCE_OF_CONSUMABLE_DROP - % creatures drop consumables
   - PROPORTION_OF_COLLECTABLE_BEING_UNIQUES - % of ground items are uniques

3. **Creature Randomization**
   - Spawn location within area
   - Spawn rate/frequency
   - Stats (HP, attack, defense)
   - Drop tables

4. **Equipment Randomization**
   - Stat ranges (STR, SPD, DEF, etc.)
   - Elemental attributes
   - Special abilities
   - Durability and weight

### Map Shuffling

**map_shuffler.js** implements:

1. **Exit Swapping**
   - Selects random exits to swap
   - Validates bidirectional consistency (if A→B then B→A)
   - Respects difficulty constraints
   - Avoids self-loops

2. **Validation** (walklib.js)
   - Simulates player walking from start
   - Tracks visited areas
   - Ensures all required areas reachable
   - Checks key item accessibility
   - Validates boss accessibility

3. **Retry Logic**
   - If map invalid, retry with different seed
   - Maximum retry attempts
   - Falls back to safer shuffle on repeated failures

### Directives System

**Directives** are modernization fixes applied to all presets:

- **Remove HP/MP Recovery** - Forces resource management
  - Replaces auto-recovery with more potions/ashes
  
- **Remove Randomness** - Make spawns deterministic
  - 100% spawn rates
  - 100% drop rates
  - Predictable gameplay

- **All Equips** - Enable 100% completion
  - Adds duplicate uniques to drop tables
  - Ensures all items obtainable in single run

- **Fix King Hopper** - Fixes broken spawn
  - King Hopper has bugged spawn rate in vanilla
  - Directive ensures it spawns reliably

---

## Web Server Architecture

### Server.js Components

**Express Routes:**
- **GET /generate-presigned-url** - Create upload URL for client
- **POST /upload-complete** - Trigger processing after upload
- **GET /status** - Poll for processing completion
- **Static files** - Serve site/ folder

**Google Cloud Storage:**
- Bucket: shadow-tower-randomizer
- Folders:
  - uploads/{sessionId}/st.bin - User uploads
  - outputs/{sessionId}.zip - Final results

**Processing States:**
```
starting → downloading → preparing → processing → 
processed → uploaded → cleaning → completed
```

**Session Management:**
- uploadStatus object tracks each sessionId
- Client generates UUID, stores in localStorage
- Server associates all operations with sessionId

**Timeout Handling:**
- 5-minute request timeout
- 10-second polling interval
- 1-hour presigned URL expiration

### Dockerfile

**Base:** Ubuntu 24.04

**Dependencies:**
- Node.js 20.x
- mkpsxiso/dumpsxiso from .deb package
- Build tools (gcc, make, etc.)

**Build Process:**
1. Install system dependencies
2. Install mkpsxiso from .deb
3. Install Node.js
4. Copy package.json, run npm install
5. Copy all .js, .json, .html files
6. Copy site/ and params/ folders
7. Expose port 8080
8. Run server.js

**Production Settings:**
- Memory: 8GB
- CPU: 8 cores
- Omits dev dependencies
- Runs on Google Cloud Run

---

## Key Differences: Site vs Generated

### Purpose

**site/** - Web frontend for users
- Upload interface
- Configuration (simplified to bonanza preset)
- Download completed mod
- Documentation/credits
- Runs in browser

**generated/** - Output of randomization
- Modified game files
- Spoiler information
- Map visualizations
- Debugging logs
- Consumed by PSX emulator/console

### Content

**site/** contains:
- HTML/CSS/JS for web UI
- jQuery UI components
- ISO parser (currently unused)
- Static assets

**generated/** contains:
- extracted/ - Unpacked game files (deleted after processing on web)
- spoilers/ - Randomization details
  - changeset.json - All modifications
  - readable.txt - Human summary
  - maps.html - Visual map browser
  - PNG maps of each area
- st.xml - ISO rebuild descriptor
- Final .bin file

### Workflow Integration

**site/** serves users:
1. User visits site
2. Uploads ISO
3. Downloads result

**generated/** serves developers/players:
1. Developer runs mod.js locally
2. Examines spoilers/ for debugging
3. Tests modified ISO
4. Compares reference outputs for regression testing

---

## Binary Data Structures

### Item Structure (44 bytes)

From data_model.js and game_data.js:

```
Offset  Type    Field
0x00    u8      unknown1
0x01    u8      unknown2
0x02    u8      unknown3
0x03    u8      unknown4
0x04    u8      texture_index_1
0x05    u8      texture_index_2
0x06    u8      unknown5
0x07    u8      type (WEAPON=1, ARMOR=2, HELMET=3, etc.)
0x08    u8      unknown6
0x09    u8      unknown7
0x0A    u8      unknown8
0x0B    u8      unknown9
0x0C    u8      unknown10
0x0D    u8      hand_type (6=one-hand, 7=two-hand, etc.)
0x0E    u8      unknown11
0x0F    u8      unknown12
0x10    u8      str (strength)
0x11    u8      spd (speed)
0x12    u8      def (defense)
0x13    u8      bal (balance)
0x14    u8      sla (slash)
0x15    u8      smh (smash)
0x16    u8      pir (pierce)
0x17    u8      spr (spirit)
0x18    u8      foc (focus)
0x19    u8      ham (hammer)
0x1A    u8      pur (purity)
0x1B    u8      par (parry)
0x1C    u8      mel (melee_power)
0x1D    u8      sol (holy/solomon)
0x1E    u8      hp (hp_bonus)
0x1F    u8      attribute1_value
0x20    u8      attribute1_type
0x21    u8      attribute2_value
0x22    u8      attribute2_type
0x23    u8      elemental_type
0x24    u8      elemental_power
0x25    u8      max_dura (max durability)
0x26    u8      weight
0x27    u8      unknown13
0x28    u8      dura (current durability)
0x29    u8      unknown14
0x2A    u8      unknown15
0x2B    u8      unknown16
```

### Creature Structure

From creatures_data.csv and data_model.js:

```
Offset  Type    Field
0x00    u16     spawn_x
0x02    u16     spawn_y
0x04    u16     spawn_z
0x06    u8      rotation
0x07    u8      creature_id
0x08    u8      hp_multiplier
0x09    u8      level
0x0A    u8      spawn_rate
0x0B    u8      drop1_item_id
0x0C    u8      drop1_rate
0x0D    u8      drop2_item_id
0x0E    u8      drop2_rate
0x0F    u8      drop3_item_id
0x10    u8      drop3_rate
... (variable size based on creature type)
```

### Map Exit Structure

From map.json:

```json
{
  "id": "1",
  "type": "fog_gate",
  "dest": "earth_world_poisonous_cavern",
  "world": "earth_world",
  "wayBackId": "1",
  "direction": "exit_north"
}
```

**Types:**
- fog_gate - Standard door
- jump - Fall/drop (one-way)
- totem - Teleport via totem pole
- portal - Special warp

---

## Testing and Validation

### Test Scripts

**test_item_uniques.sh:**
- Parses readable.txt for item drops
- Ensures unique items only drop once
- Verifies no duplicate uniques
- Outputs test_item_uniques_test.csv

**test_items_count.sh:**
- Counts total items in randomization
- Compares to expected counts
- Outputs test_item_counts.csv

**test_assertions.sh:**
- Runs general game state checks
- Validates changeset integrity
- Outputs test_assertions.csv

**test_failures.sh:**
- Tracks known failure cases
- Regression testing
- Outputs test_failures.csv

### Reference Outputs

**Workflow:**
1. Place st.bin in generated/
2. Run mod.js to generate all presets
3. Compare output changesets to reference files in repo
4. Any difference indicates code behavior change
5. Acts as regression test suite

### Map Validation

**walklib.js ensures:**
- Start area (shadow_tower_part1a) is accessible
- All required areas reachable from start
- Key items accessible when needed
- No soft-locks (unreachable required items)
- Boss areas accessible
- Bidirectional doors are consistent

---

## Common Operations

### Running Locally

**Setup:**
```bash
npm install
# Download mkpsxiso from GitHub releases
# Add mkpsxiso/dumpsxiso to PATH
```

**Generate single preset:**
```bash
npm run mod "./generated/st.bin" "./params/randomized-medium.json"
```

**Generate all presets:**
```bash
npm run mod "./generated/st.bin"
# Iterates through all params/*.json
```

**Skip image generation (faster):**
```bash
npm run mod "./generated/st.bin" "./params/bonanza.json" -toNotGenerateImages
```

### Deploying Web Version

**Local Docker:**
```bash
docker build -t shadow-tower-randomizer .
docker run -it -p 8080:8080 shadow-tower-randomizer
```

**Google Cloud:**
```bash
# Authenticate
gcloud auth login
gcloud config set project shadow-tower-randomizer

# Build and push
docker tag shadow-tower-randomizer:latest gcr.io/shadow-tower-randomizer/shadow-tower-randomizer:latest
docker push gcr.io/shadow-tower-randomizer/shadow-tower-randomizer:latest

# Deploy
gcloud run deploy shadow-tower-randomizer \
  --image gcr.io/shadow-tower-randomizer/shadow-tower-randomizer:latest \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --memory 8Gi \
  --cpu 8
```

### Creating Custom Presets

**Example params JSON:**
```json
{
  "label": "my-custom-preset",
  "preset": "any%",
  "difficulty": "hard",
  "randomizeMap": true,
  "randomizeCreatures": true,
  "randomizeCollectablesAndDrops": true,
  "fieryKeyFlamingKeyDrop": "fiery-key-in-fire-world",
  "randomizeNonEssentialKeys": true,
  "removeDirectiveRemovalOfHPMPRecovery": false,
  "seed": "12345",
  "colorRandomizationGeneral": 1,
  "colorRandomizationBossRooms": 0,
  "colorRandomizationCreatures": 2,
  "colorValueFactor": 1.5
}
```

**Fields:**
- label - Output folder name
- preset - Base configuration template
- difficulty - Scaling factor
- randomizeMap - Enable map shuffling
- randomizeCreatures - Enable creature randomization
- randomizeCollectablesAndDrops - Enable item randomization
- fieryKeyFlamingKeyDrop - Key progression option
- randomizeNonEssentialKeys - Optional key shuffling
- removeDirectiveRemovalOfHPMPRecovery - Allow HP/MP regen
- seed - Random seed for reproducibility
- colorRandomization* - Visual randomization levels (0-2)
- colorValueFactor - Brightness multiplier

---

## Troubleshooting

### Common Issues

**"ERROR - checksum expected X got Y"**
- T-file checksum mismatch after modification
- Usually caused by incorrect offset calculations
- Check change.js modifications

**"ERROR - inconsistent wayBackId"**
- Map shuffle created invalid exit
- Exit points to non-existent return path
- Check map_shuffler.js logic

**Map validation fails in walklib.js**
- Randomized map has unreachable areas
- Increase retry attempts
- Adjust difficulty constraints

**Memory errors during image generation**
- Canvas module out of memory
- Use -toNotGenerateImages flag
- Reduce map count

**mkpsxiso not found**
- Add mkpsxiso bin/ to PATH
- On Linux: install .deb package
- On Windows: extract and add to PATH

### Debugging Techniques

**Enable verbose logging:**
```javascript
// In randomize.js
console.log = function() {
  fs.writeSync(logFileRandomize, util.format.apply(null, arguments) + '\n');
}
```

**Examine spoilers:**
- readable.txt - See what changed
- changeset.json - See exact binary mods
- walk.txt - See pathfinding result

**Compare changesets:**
```bash
diff generated/preset1/spoilers/changeset.json \
     generated/preset2/spoilers/changeset.json
```

**Test map manually:**
```javascript
const walklib = require('./walklib');
const map = require('./shuffle.json');
const result = walklib.walk(map);
console.log(result);
```

---

## Performance Considerations

### Processing Time

**Local (typical PC):**
- Unpack: ~10 seconds
- Randomize: ~20 seconds
- Apply changes: ~5 seconds
- Pack: ~10 seconds
- mkpsxiso: ~15 seconds
- Image generation: ~60 seconds
- **Total: ~2 minutes per preset**

**Cloud (8 CPU, 8GB RAM):**
- Faster parallel processing
- Network I/O overhead
- **Total: ~90 seconds per request**

### Optimization Tips

1. **Skip images** - Use -toNotGenerateImages
2. **Reduce retries** - Lower map shuffle attempts
3. **Simplify presets** - Fewer randomization options
4. **Cache seeds** - Reuse successful map seeds
5. **Parallel processing** - Run multiple presets concurrently (local only)

### Memory Usage

**Peaks during:**
- Image generation (Canvas library) - ~2GB
- ISO packing (mkpsxiso) - ~1GB
- Changeset generation - ~500MB
- **Recommended: 4GB+ RAM**

**Cloud deployment uses 8GB to handle spikes**

---

## Advanced Topics

### Adding New Items

1. Update constants.js with new item ID
2. Add entry to game_data.js with full stats
3. Update data_model.js if item structure differs
4. Add to randomization pools in randomize.js
5. Test with assertions

### Modifying Map Structure

1. Edit map.json exits
2. Run map_shuffler.js to validate
3. Test with walklib.js
4. Update map rendering if needed

### Custom Directives

Add to randomize.js:
```javascript
if (params.myCustomDirective) {
  // Modify data_model or add to changeset
  changeset.push({
    file: "path/to/file",
    bytes: { "0x1234": "0xff" }
  });
}
```

### Texture Randomization

Uses HSV color space manipulation:
```javascript
global.rgbToHsv(rgb) // Convert RGB to HSV
global.hsvToRgb(hsv) // Convert back
// Modify hue, saturation, value
// Apply to texture data
```

**Levels:**
- 0 - No randomization
- 1 - Subtle hue shift
- 2 - Extreme color changes

---

## Credits and References

**Developer:** Fredo Rischter (fredrischter@gmail.com)

**Community:**
- FromSoft Modding Committee Discord: https://discord.gg/jUzZwWWUXd
- Special thanks to StolenBattenberg for data structure documentation

**Tools Used:**
- mkpsxiso by Lameguy64 - ISO building
- no$psx by Martin Korth - PSX debugging
- Kaitai Struct - Binary format parsing

**References:**
- Lucifer65535 & David Bunch - Shadow Tower walkthroughs
- FromSoftware - Original game

**License:** MIT (see LICENSE file)

---

## Future Enhancements

**Planned Features:**
- Enemy walk speed randomization
- Attack cooldown randomization
- Spawn count increases beyond vanilla
- Custom item creation
- Music randomization
- More granular difficulty settings

**Known Limitations:**
- Texture randomization can cause glitches
- Bonanza preset unstable due to memory
- Some creatures have hardcoded behaviors
- Boss AI not randomizable
- NPC dialogue not randomizable

---

## Conclusion

This knowledge base covers the complete architecture of the Shadow Tower Randomizer. The key takeaway is the separation of concerns:

1. **Binary layer** (randomizer_common, data_model) - Handles PSX file formats
2. **Game logic layer** (randomize, map_shuffler) - Implements randomization rules
3. **Orchestration layer** (mod, change) - Coordinates the pipeline
4. **Interface layer** (server, site) - Provides user access

Understanding this separation makes it easy to modify specific aspects without breaking others. The extensive test suite and reference outputs ensure code changes are caught early.

For new contributors: start by examining a single preset's changeset.json and readable.txt to understand what the randomizer does, then trace back through randomize.js to see how it works.

**Repository:** https://github.com/fredrischter/shadow-tower-randomizer

---

## NPM Scripts and Technical Implementation

### Package.json Scripts

The project uses npm scripts for all operations. These scripts set `--max-old-space-size=8192` to allocate 8GB RAM for Node.js:

```json
{
  "start": "node --max-old-space-size=8192 index.js",
  "checksum": "node --max-old-space-size=8192 checksum.js",
  "unpack": "node --max-old-space-size=8192 unpack.js",
  "pack": "node --max-old-space-size=8192 pack.js",
  "randomize": "node --max-old-space-size=8192 randomize.js",
  "change": "node --max-old-space-size=8192 change.js",
  "mod": "node --max-old-space-size=8192 mod.js",
  "map_texture_extract": "node map_texture_extract.js"
}
```

**Why 8GB?** Image generation via Canvas library can consume ~2GB, changeset processing ~500MB, and ISO operations ~1GB. Total peaks at ~4GB, with 8GB providing safety margin.

### Dependencies

**Core:**
- **seedrandom** - Deterministic random number generation (ensures same seed = same output)
- **uuidv4** - Session ID generation for web service
- **eol** - End-of-line normalization across platforms

**Web Server:**
- **express** - HTTP server framework
- **@google-cloud/storage** - Google Cloud Storage integration
- **cors** - Cross-origin resource sharing
- **multer** - File upload handling
- **archiver** - ZIP compression for outputs

**Optional:**
- **@napi-rs/canvas** - Modern Rust-based Canvas for PNG map generation (works with Node.js v24+)

---

## Detailed Technical Flow

### 1. mod.js - Orchestration Script

**Purpose:** Chains all steps together for complete ISO modification.

**Command Line:**
```bash
npm run mod "./path/to/st.bin" "./params/preset.json" [-toNotGenerateImages]
```

**Execution Flow:**

```
┌──────────────────────────────────────────────────────────────┐
│ mod.js Entry Point                                           │
├──────────────────────────────────────────────────────────────┤
│ 1. Parse arguments:                                          │
│    - file: ISO path (st.bin)                                 │
│    - paramsFile: preset JSON                                 │
│    - toNotGenerateImages: flag (optional)                    │
│                                                               │
│ 2. If no paramsFile provided:                                │
│    - Enumerate all params/*.json                             │
│    - Run mod.js recursively for each                         │
│    - Sequential execution (one at a time)                    │
│                                                               │
│ 3. Create output directory structure:                        │
│    generated/{label}/                                        │
│    generated/{label}/extracted/                              │
│    generated/{label}/spoilers/                               │
│                                                               │
│ 4. Define T-files to process:                                │
│    - COM/FDAT.T (main game data)                             │
│    - CHR0-4/M*.T (creature models)                           │
│                                                               │
│ 5. Execute pipeline:                                         │
│    dumpsxiso → unpack → randomize → change → pack → mkpsxiso│
└──────────────────────────────────────────────────────────────┘
```

**Step-by-Step Execution:**

1. **dumpsxiso** (external tool)
   ```bash
   dumpsxiso "st.bin" -x "extracted/" -s "st.xml"
   ```
   - Extracts ISO to extracted/ folder
   - Creates st.xml descriptor for rebuilding
   - Preserves directory structure

2. **npm run unpack**
   ```bash
   npm run unpack "file1.T;file2.T;file3.T"
   ```
   - Calls unpack.js with semicolon-separated file list
   - Splits each .T file into numbered parts
   - Creates {fileName}_PARTS/ directories

3. **npm run randomize**
   ```bash
   npm run randomize "params.json" "extracted/" [-toNotGenerateImages]
   ```
   - Reads params and extracted files
   - Generates changeset.json
   - Creates spoiler files

4. **npm run change**
   ```bash
   npm run change "changeset.json"
   ```
   - Applies all binary modifications
   - Updates checksums

5. **npm run pack**
   ```bash
   npm run pack "file1.T;file2.T;file3.T"
   ```
   - Reassembles .T files from parts
   - Recalculates offsets and checksums

6. **mkpsxiso** (external tool)
   ```bash
   mkpsxiso "st.xml" -y -o "modified.bin"
   ```
   - Rebuilds ISO from extracted/
   - Uses st.xml as blueprint
   - Outputs final modified .bin

### 2. unpack.js - T-File Extraction

**Purpose:** Splits T-format container files into individual parts for editing.

**Algorithm:**

```javascript
function unpack(files) {
  files.split(";").forEach(fileName => {
    // Read entire T-file
    var tfile = new TFILEReader(fileName).readTFormat();
    
    // Write each contained file as separate part
    tfile.writeParts();
  });
}
```

**TFILEReader.readTFormat() Details:**

```
T-File Structure:
┌─────────────────────────────────────┐
│ Header Section                      │
├─────────────────────────────────────┤
│ Offset 0x00: File Count (uint32)   │
│ Offset 0x04: Offset Table           │
│   - Array of uint32 offsets         │
│   - Length = fileCount              │
├─────────────────────────────────────┤
│ Data Section                        │
├─────────────────────────────────────┤
│ File 0 bytes (from offset[0])       │
│ File 1 bytes (from offset[1])       │
│ ...                                 │
│ File N bytes (from offset[N])       │
└─────────────────────────────────────┘

Part Naming:
  "{index} {startOffset_hex}-{endOffset_hex}.T"
  Example: "128 281000-2c0800.T"
```

**Checksum Handling:**

Each part has a 4-byte checksum at the beginning. The algorithm:
```javascript
calculateCheckSum() {
  var result = 0;
  for (var i = 4; i < this.bin.length; i++) {
    result = (result + this.bin[i]) % 0x100000000;
  }
  return result;
}
```

**Output:**
- Creates {fileName}_PARTS/ directory
- Each part is a standalone file
- Maintains offset information in filename

### 3. randomize.js - Core Randomization Logic

**Purpose:** Generates changeset.json with all binary modifications based on params.

**Main Flow:**

```javascript
function randomize(paramsFile, stDir) {
  // 1. Load parameters
  const params = JSON.parse(fs.readFileSync(paramsFile));
  
  // 2. Set random seed
  if (params.seed) {
    seedRandom(params.seed);
  } else {
    useRandomSeed();
  }
  
  // 3. Load T-file data
  var tfile = new TFILEReader(FDAT_PATH).readTFormat();
  data_model.setup(tfile, stDir, params);
  
  // 4. Randomize map if enabled
  if (params.randomizeMap) {
    const shuffle = map_shuffler(params, stDir);
    var map = new MapShuffle(shuffle.map);
    map.applyMap(data_model);
  }
  
  // 5. Apply directives
  areas.forEach(area => {
    area.creatures.forEach(creature => {
      presetDirectivesforEachCreatureSpawn(creature, area);
    });
  });
  
  // 6. Randomize items/creatures/collectables
  if (params.randomizeCollectablesAndDrops) {
    distributeItemsAndDrops();
  }
  if (params.randomizeCreatures) {
    randomizeCreatureStats();
  }
  
  // 7. Apply difficulty scaling
  applyDifficultyModifications();
  
  // 8. Generate changeset
  var changeset = [];
  tfile.files.forEach(part => {
    changeset.push({
      file: part.fileName,
      bytes: part.getChangedBytes()
    });
  });
  
  // 9. Write outputs
  fs.writeFileSync(changeSetPath + '/changeset.json', JSON.stringify(changeset));
  fs.writeFileSync(changeSetPath + '/readable.txt', readableLog);
  
  // 10. Generate maps (if enabled)
  if (!toNotGenerateImages) {
    generateMapImages();
  }
}
```

**Key Algorithms:**

#### Progressiveness System

Controls how item/enemy difficulty scales across game areas:

```javascript
// Area depth calculation (from map walk)
areas.forEach(area => {
  area.depth = walkDistanceFromStart(area);
});

// Sort areas by depth
areas.sort((a, b) => a.depth - b.depth);

// Progressiveness modes:
if (params.progressiveness == PROGRESSIVENESS_FLAT) {
  // All items available from start
  UNIQUES_SEQUENCE_RANDOMIZATION_SPAN = 1.0;
  
} else if (params.progressiveness == PROGRESSIVENESS_MEDIUM) {
  // First 40% of items from early game
  UNIQUES_SEQUENCE_RANDOMIZATION_SPAN = 0.4;
  
} else if (params.progressiveness == PROGRESSIVENESS_INCREASED) {
  // First 60% of items from early game
  UNIQUES_SEQUENCE_RANDOMIZATION_SPAN = 0.6;
  
} else if (params.progressiveness == PROGRESSIVENESS_CRAZY) {
  // Completely random, no progression
  UNIQUES_SEQUENCE_RANDOMIZATION_SPAN = 1.0;
}
```

**Item Distribution:**

```javascript
// Split all unique items into collectables vs drops
allUniqueItems.forEach(item => {
  if (Math.random() < COLLECTABLE_UNIQUES_PROPORTION) {
    collectableUniques.push(item);
  } else {
    dropUniques.push(item);
  }
});

// Distribute collectables
function distributeCollectablesRandomly(collectable, area) {
  if (Math.random() < PROPORTION_OF_COLLECTABLE_BEING_UNIQUES) {
    // Place unique item
    var randomRange = Math.min(
      COLLECTABLE_UNIQUES_SEQUENCE_RANDOMIZATION_SPAN_SIZE,
      collectableUniques.length
    );
    var chosenIndex = Math.floor(Math.random() * randomRange);
    var chosenItem = collectableUniques[chosenIndex];
    collectableUniques = collectableUniques.filter(i => i !== chosenItem);
    collectable.type.set(chosenItem);
  } else {
    // Place consumable
    var chosen = consumablesForRandomization[
      Math.floor(Math.random() * consumablesForRandomization.length)
    ];
    collectable.type.set(chosen);
  }
}
```

This ensures:
- Early areas get items from first X% of list
- Progression feels natural
- Late game still has good items
- Consumables fill gaps

#### Creature Randomization

```javascript
function randomizeCreatureStats(creature, area) {
  // HP scaling based on area depth
  var depthFactor = 1 + (area.depth * 0.1);
  creature.hp.set(Math.min(255, 
    Math.ceil(creature.hp.get() * depthFactor * creatureAttributeFactor)
  ));
  
  // Attack randomization (50% to 150% of original)
  creature.attack1.set(Math.min(255,
    Math.ceil(creature.attack1.get() * Math.pow(Math.random() + 0.5, 3))
  ));
  
  // Defense randomization
  creature.weaponDefense1.set(Math.min(255,
    Math.ceil(creature.weaponDefense1.get() * creatureAttributeFactor)
  ));
}
```

#### Difficulty System

```javascript
// Difficulty factors
const difficultyMap = {
  'extreme-easy': 0.1,
  'easy': 0.5,
  'medium': 1.0,
  'hard': 1.3,
  'very-hard': 1.6,
  'even-harder': 2.0
};

var difficultyFactor = difficultyMap[params.difficulty];
var equipsAttributeFactor = 1 / difficultyFactor;  // Better equips on easy
var creatureAttributeFactor = difficultyFactor;    // Tougher enemies on hard

// Apply to items
items.forEach(item => {
  item.str.set(Math.min(255, Math.ceil(item.str.get() * equipsAttributeFactor)));
  item.spd.set(Math.min(255, Math.ceil(item.spd.get() * equipsAttributeFactor)));
  // ... all stats scaled
  item.weight.set(Math.min(255, Math.ceil(item.weight.get() / equipsAttributeFactor)));
});

// Apply to creatures
creatures.forEach(creature => {
  creature.hp.set(Math.min(255, Math.ceil(creature.hp.get() * creatureAttributeFactor)));
  creature.attack1.set(Math.min(255, Math.ceil(creature.attack1.get() * creatureAttributeFactor)));
  // ... all stats scaled
});
```

#### Directive System

Directives are forced modifications applied to all presets:

```javascript
// 1. Remove HP/MP Recovery (unless removeDirectiveRemovalOfHPMPRecovery = true)
function presetDirectivesforEachItem(item) {
  if (!params.removeDirectiveRemovalOfHPMPRecovery) {
    if (item.attribute1.getAttributeType() == ATTR_HP_RECOVERY) {
      item.attribute1.setAttributeType(ATTR_NONE);
      console.log("Removing ATTR_HP_RECOVERY from " + item.name);
    }
    // Same for attribute2 and MP_RECOVERY
  }
}

// 2. Remove Randomness (100% spawn/drop rates)
function presetDirectivesforEachCreatureSpawn(spawn, area) {
  if (!params.removeDirectiveRemovalOfRandomness) {
    if (spawn.chance.get() != 100 && spawn.chance.get() != 0) {
      spawn.chance.set(100);
    }
    if (!spawn.drop1.isNull() && spawn.drop1Chance.get() != 100) {
      spawn.drop1Chance.set(100);
    }
    // Same for drop2, drop3
  }
}

// 3. Fix King Hopper Bug
function presetKingHopperFixforEachCreatureSpawn(spawn, area) {
  if (spawn.name().includes("king_hopper")) {
    spawn.chance.set(100);
    spawn.mutexGroup.set(14);  // Fix spawn mutex
  }
}

// 4. Guarantee Poison Vaccines Before Poisonous Cavern
var poisonVaccinesBeforePoisonousCavern = 0;
var poisonVaccinesRequired = Math.ceil(Math.min(Math.max(4/difficultyFactor, 1), 5));

function replaceSecondaryDropIfBeforePoisonousCavernBeforeRequirementIsAchieved(spawn, area) {
  if (poisonVaccinesBeforePoisonousCavern >= poisonVaccinesRequired) return;
  if (areasBeforePoisonousCavern.indexOf(area) == -1) return;
  
  var originalItem = spawn.drop1.get();
  if ((secondaryConsumables.indexOf(originalItem) != -1 || 
       primaryConsumables.indexOf(originalItem) != -1) && 
      Math.random() < 0.5) {
    spawn.drop1.set(item_124_poison_vaccine);
    poisonVaccinesBeforePoisonousCavern++;
  }
}
```

#### Fiery Key / Flaming Key Logic

```javascript
// Determines where critical progression keys drop
if (params.fieryKeyFlamingKeyDrop == FIERY_KEY_IN_FIRE_WORLD) {
  // Drop in random fire world area
  const candidateAreas = areas.filter(area => area.name.includes('fire'));
  areaTargetForFieryKeyFlammingKey = candidateAreas[
    Math.floor(Math.random() * candidateAreas.length)
  ];
  
} else if (params.fieryKeyFlamingKeyDrop == FIERY_KEY_ANYWHERE_BEFORE_ASHEN_CAVERN) {
  // Drop anywhere before fire world boss
  var candidateAreas = [];
  for (var a in areas) {
    candidateAreas.unshift(areas[a]);
    if (areas[a].name == 'fire_world_ashen_cavern') break;
  }
  areaTargetForFieryKeyFlammingKey = candidateAreas[
    Math.floor(Math.random() * candidateAreas.length)
  ];
  
} else if (params.fieryKeyFlamingKeyDrop == FLAMING_KEY_IN_THE_FIRST_AREA) {
  // Flaming key in first area (skip most of game)
  areaTargetForFieryKeyFlammingKey = areas[0];
}

// Apply to target area
function setFieryKeyOrFlammingKey(spawn, area) {
  if (areaTargetForFieryKeyFlammingKey == area) {
    var originalItem = spawn.drop1.get();
    if (secondaryConsumables.indexOf(originalItem) != -1 || spawn.drop1.isNull()) {
      if (params.fieryKeyFlamingKeyDrop == FLAMING_KEY_IN_THE_FIRST_AREA) {
        spawn.drop1.set(item_131_flaming_key);
      } else {
        spawn.drop1.set(item_110_fiery_key);
      }
      spawn.drop1Chance.set(100);
      areaTargetForFieryKeyFlammingKey = null;
    }
  }
}
```

#### Equipment Stats Randomization

```javascript
function randomizeEquipsStats(item) {
  // Skip consumables and key items
  if (primaryConsumables.indexOf(item.itemIndex) != -1 ||
      secondaryConsumables.indexOf(item.itemIndex) != -1 ||
      irreplacebleKeyItems.indexOf(item.itemIndex) != -1) {
    return;
  }
  
  // Random multiplier: Math.pow(Math.random() + 0.5, 3)
  // Results in range: 0.125x to 3.375x with bias toward 1x
  // Distribution: mostly 0.5x to 2x, rare extremes
  
  item.str.set(Math.min(255, Math.ceil(
    item.str.get() * Math.pow(Math.random() + 0.5, 3)
  )));
  item.spd.set(Math.min(255, Math.ceil(
    item.spd.get() * Math.pow(Math.random() + 0.5, 3)
  )));
  // ... all stats randomized
  
  // Weight inversely scales (lighter is better)
  if (!item.weight.isNull()) {
    item.weight.set(Math.min(255, Math.ceil(
      item.weight.get() / Math.pow(Math.random() + 0.5, 3)
    )));
  }
  
  // Durability scales up
  if (!item.max_dura.isNull() && item.max_dura.get()) {
    item.max_dura.set(Math.min(255, Math.ceil(
      item.max_dura.get() * Math.pow(Math.random() + 0.5, 3)
    )));
    item.dura.set(Math.min(255, Math.ceil(
      item.dura.get() * Math.pow(Math.random() + 0.5, 3)
    )));
  }
  
  // Price based on item score
  if (item.price.get() > 0) {
    item.price.set(Math.max(1, Math.min(30, Math.ceil(
      item.score() * Math.pow(Math.random() + 0.5, 1)
    ))));
  }
}
```

#### Item Score Calculation

Items have a "score" used for pricing and difficulty assessment:

```javascript
// In data_model.js Item class
score() {
  return this.str.get() * 0.1 +
         this.spd.get() * 0.05 +
         this.def.get() * 0.2 +
         this.bal.get() * 0.05 +
         this.sla.get() * 0.1 +
         this.smh.get() * 0.1 +
         this.pir.get() * 0.1 +
         this.spr.get() * 0.15 +
         this.foc.get() * 0.1 +
         this.ham.get() * 0.05 +
         this.pur.get() * 0.1 +
         this.par.get() * 0.05 +
         this.mel.get() * 0.1 +
         this.sol.get() * 0.1 +
         this.hp.get() * 0.5;
}
```

### 4. change.js - Applying Modifications

**Purpose:** Reads changeset.json and applies all binary modifications.

**Algorithm:**

```javascript
function change(changeFile) {
  let changeset = JSON.parse(fs.readFileSync(changeFile));
  
  changeset.forEach(change => {
    if (change.fileSwap) {
      // Swap two files (for creature models)
      fs.renameSync(change.fileSwap.file1, change.fileSwap.file1 + ".tmp");
      fs.renameSync(change.fileSwap.file2, change.fileSwap.file1);
      fs.renameSync(change.fileSwap.file1 + ".tmp", change.fileSwap.file2);
      
    } else if (change.fileCopy) {
      // Copy file
      fs.copyFileSync(change.fileCopy.from, change.fileCopy.to);
      
    } else if (change.file) {
      // Modify bytes in file
      var part = new TFILEReader(change.file).readTFormatPart();
      
      for (var offset in change.bytes) {
        part.bin[parseInt(offset, 16)] = parseInt(change.bytes[offset], 16);
      }
      
      part.setCheckSum();
      part.verifyCheckSum();
      part.write();
    }
  });
}
```

**Changeset Format:**

```json
[
  {
    "file": "path/to/part_file.T",
    "bytes": {
      "0x1234": "0xFF",
      "0x1235": "0x02",
      "0x5600": "0xAB"
    }
  },
  {
    "fileSwap": {
      "file1": "path/to/creature1.T",
      "file2": "path/to/creature2.T"
    }
  },
  {
    "fileCopy": {
      "from": "path/to/source.T",
      "to": "path/to/destination.T"
    }
  }
]
```

### 5. pack.js - T-File Reassembly

**Purpose:** Rebuilds .T files from modified parts.

**Algorithm:**

```javascript
function pack(files) {
  files.split(";").forEach(fileName => {
    // Read T-file structure
    var tfile = new TFILEReader(fileName).readTFormat();
    
    // Reload all parts and recalculate offsets
    var offset = tfile.beginningOfBin;
    for (var i = 0; i < tfile.files.length; i++) {
      var length = tfile.files[i].reload(offset);
      offset += length;
    }
    
    // Inject parts back into main file
    tfile.injectParts();
    
    // Write consolidated T-file
    tfile.write();
  });
}
```

**Offset Recalculation:**

```javascript
// In TFormatPart.reload()
reload(newOffset) {
  // Read modified part file
  this.bin = fs.readFileSync(this.fileName);
  
  // Update offset in parent T-file
  this.offset_in_file = newOffset;
  
  // Return length for next offset calculation
  return this.bin.length;
}

// In TFormat.injectParts()
injectParts() {
  // Update offset table in header
  for (var i = 0; i < this.files.length; i++) {
    var offset = this.files[i].offset_in_file;
    setUInt32(this.headerBin, 4 + i * 4, offset);
  }
  
  // Concatenate all parts
  var totalBin = Buffer.concat([
    this.headerBin,
    ...this.files.map(f => f.bin)
  ]);
  
  this.bin = totalBin;
}
```

### 6. map_shuffler.js - Map Randomization

**Purpose:** Shuffles area connections while maintaining walkability.

**Algorithm:**

```javascript
function map_shuffler(params, stDir) {
  const originalMap = JSON.parse(fs.readFileSync("./map.json"));
  var areas = JSON.parse(JSON.stringify(originalMap));
  
  var consistentDoors = true;  // Bidirectional exits must match
  var maxRetries = 1000;
  var attempts = 0;
  
  while (attempts < maxRetries) {
    attempts++;
    
    // Create working copy
    var shuffledMap = JSON.parse(JSON.stringify(areas));
    
    // Perform random swaps
    var swapCount = Math.floor(shuffledMap.length * params.shuffleIntensity);
    for (var i = 0; i < swapCount; i++) {
      var area1 = randomElement(shuffledMap);
      var area2 = randomElement(shuffledMap);
      
      if (area1 == area2) continue;
      
      var exit1 = randomElement(area1.exits.filter(switchableWay));
      var exit2 = randomElement(area2.exits.filter(switchableWay));
      
      if (!exit1 || !exit2) continue;
      
      // Swap destinations
      if (goodToAssignWay(exit1, exit2, area1, shuffledMap) &&
          goodToAssignWay(exit2, exit1, area2, shuffledMap)) {
        assignWay(exit1, exit2, area1, shuffledMap);
        assignWay(exit2, exit1, area2, shuffledMap);
      }
    }
    
    // Validate walkability
    var walkResult = walklib.walk(shuffledMap, false);
    
    if (walkResult && walkResult.visitedAllRequiredAreas) {
      console.log("Valid map found after " + attempts + " attempts");
      return {
        map: shuffledMap,
        walk: walkResult.walk,
        explanation: walkResult.explanation
      };
    }
  }
  
  console.error("Failed to generate valid map after " + maxRetries + " attempts");
  return { map: originalMap, walk: [], explanation: "Using original map" };
}

function switchableWay(way) {
  // Can't swap jumps, totems, portals
  if (way.type == "jump") return false;
  if (way.type == "totem") return false;
  if (way.type == "portal") return false;
  return true;
}

function goodToAssignWay(to, from, area, map) {
  // Don't create self-loop
  if (normalizeAreaName(from.dest) == normalizeAreaName(area.name)) {
    return false;
  }
  
  // If bidirectional, ensure way back exists
  if (consistentDoors && from.wayBackId) {
    var wayBackArea = map.find(a => a.name == from.dest);
    if (!wayBackArea) return false;
    
    var wayBackWay = wayBackArea.exits.find(e => e.id == from.wayBackId);
    if (!wayBackWay || !wayBackWay.wayBackId) return false;
  }
  
  return true;
}

function assignWay(to, from, area, map) {
  // Update bidirectional connections
  if (consistentDoors && from.wayBackId) {
    var wayBackArea = map.find(a => a.name == from.dest);
    if (wayBackArea) {
      var wayBackWay = wayBackArea.exits.find(e => e.id == from.wayBackId);
      if (wayBackWay) {
        wayBackWay.dest = area.name;
        wayBackWay.world = area.world;
        wayBackWay.wayBackId = to.id;
      }
    }
  }
  
  // Update exit
  to.dest = from.dest;
  to.world = from.world;
  to.wayBackId = from.wayBackId;
}
```

### 7. walklib.js - Map Validation

**Purpose:** Simulates player walking through map to ensure completability.

**Algorithm:**

```javascript
function walk(areas, skipWayBackVerification) {
  var currentArea = "shadow_tower_part1a";  // Starting area
  var walkedAreasSet = new Set();
  var walkPath = [];
  var mapsWithKnownUndiscoveredWays = [];
  
  // Validate bidirectional consistency
  areas.forEach(area => {
    area.exits.forEach(exit => {
      if (exit.wayBackId) {
        var destArea = areas.find(a => a.name == exit.dest);
        if (!destArea) {
          console.error("ERROR - exit to non-existent area: " + exit.dest);
          return null;
        }
        
        var wayBack = destArea.exits.find(e => e.id == exit.wayBackId);
        if (!wayBack) {
          console.error("ERROR - wayBackId doesn't exist");
          return null;
        }
        
        if (!skipWayBackVerification && wayBack.dest != area.name) {
          console.error("ERROR - wayBack points to wrong area");
          return null;
        }
      }
    });
  });
  
  // Simulate walking
  while (true) {
    walkedAreasSet.add(currentArea);
    var area = areas.find(a => a.name == currentArea);
    
    // Get available exits (filter out entrances)
    var exits = area.exits.filter(e => 
      !e.direction || !e.direction.startsWith("entrance")
    );
    
    // Check if strong enough for area
    exits = exits.filter(e => strongEnoughForArea(e.dest, walkedAreasSet));
    
    // Find unexplored exit
    var unexploredExit = exits.find(e => !walkedAreasSet.has(e.dest));
    
    if (unexploredExit) {
      // Walk through this exit
      walkPath.push({
        from: currentArea,
        to: unexploredExit.dest,
        id: unexploredExit.id,
        wayBackId: unexploredExit.wayBackId
      });
      currentArea = unexploredExit.dest;
      
    } else {
      // Backtrack to area with unexplored exits
      var backtrackArea = mapsWithKnownUndiscoveredWays.find(m =>
        m.exits.some(e => !walkedAreasSet.has(e.dest))
      );
      
      if (!backtrackArea) {
        // No more areas to explore
        break;
      }
      
      // Find path back
      currentArea = backtrackArea.name;
    }
  }
  
  // Validate all required areas reached
  var requiredAreas = [
    "shadow_tower_part1a",
    "earth_world_poisonous_cavern",
    "fire_world_ashen_cavern",
    // ... all boss areas
  ];
  
  var visitedAllRequired = requiredAreas.every(area => 
    walkedAreasSet.has(area)
  );
  
  return {
    visitedAllRequiredAreas: visitedAllRequired,
    walk: walkPath,
    visitedAreas: Array.from(walkedAreasSet),
    explanation: visitedAllRequired ? "Valid" : "Missing required areas"
  };
}

function strongEnoughForArea(areaName, walkedAreasSet) {
  // Progression gating
  if (areaName.includes("earth_world_poisonous_cavern")) {
    return walkedAreasSet.size > 3;
  }
  if (areaName.includes("earth_world_stone_cavern")) {
    return walkedAreasSet.size > 5;
  }
  if (areaName.includes("water_world")) {
    return walkedAreasSet.size > 10;
  }
  if (areaName.includes("illusion_world_worship_domain")) {
    return walkedAreasSet.size > 15;
  }
  return true;
}
```

### 8. data_model.js - Game Data Structures

**Purpose:** Provides object-oriented interface to binary game data.

**Key Classes:**

#### Item Class

```javascript
class Item {
  constructor(tfile, offset) {
    this.bin = tfile.bin;
    this.offset = offset;
    
    // Create accessors for each field
    this.str = new UInt8(this.bin, this.offset + 0x10);
    this.spd = new UInt8(this.bin, this.offset + 0x11);
    this.def = new UInt8(this.bin, this.offset + 0x12);
    // ... 40+ more fields
  }
  
  score() {
    // Calculate weighted score for pricing/difficulty
    return this.str.get() * 0.1 +
           this.spd.get() * 0.05 +
           this.def.get() * 0.2 +
           // ... all stats weighted
           this.hp.get() * 0.5;
  }
}

class UInt8 {
  constructor(bin, offset) {
    this.bin = bin;
    this.offset = offset;
  }
  
  get() {
    return this.bin[this.offset];
  }
  
  set(value) {
    this.bin[this.offset] = value & 0xFF;
  }
  
  isNull() {
    return this.get() == 0xFF;
  }
  
  null() {
    this.set(0xFF);
  }
}
```

#### Creature Class

```javascript
class Creature {
  constructor(tfile, area, offset) {
    this.bin = tfile.bin;
    this.area = area;
    this.offset = offset;
    
    // Spawn data
    this.spawnX = new UInt16(this.bin, this.offset + 0x00);
    this.spawnY = new UInt16(this.bin, this.offset + 0x02);
    this.spawnZ = new UInt16(this.bin, this.offset + 0x04);
    this.rotation = new UInt8(this.bin, this.offset + 0x06);
    this.creatureId = new UInt8(this.bin, this.offset + 0x07);
    this.hpMultiplier = new UInt8(this.bin, this.offset + 0x08);
    this.level = new UInt8(this.bin, this.offset + 0x09);
    this.chance = new UInt8(this.bin, this.offset + 0x0A);
    
    // Drop data
    this.drop1 = new UInt8(this.bin, this.offset + 0x0B);
    this.drop1Chance = new UInt8(this.bin, this.offset + 0x0C);
    this.drop2 = new UInt8(this.bin, this.offset + 0x0D);
    this.drop2Chance = new UInt8(this.bin, this.offset + 0x0E);
    this.drop3 = new UInt8(this.bin, this.offset + 0x0F);
    this.drop3Chance = new UInt8(this.bin, this.offset + 0x10);
    
    // Model files (for swapping)
    this.modelFiles = [
      `${area.charPath}/model1.T`,
      `${area.charPath}/model2.T`,
      `${area.charPath}/model3.T`
    ];
  }
  
  name() {
    return creatureNames[this.creatureId.get()] || "unknown";
  }
  
  swap(otherCreature) {
    // Swap all binary data
    binSwap(this.bin, this.offset, otherCreature.bin, otherCreature.offset, 
            CREATURE_SIZE);
  }
  
  set(otherCreature) {
    // Copy all binary data
    binCopy(otherCreature.bin, otherCreature.offset, this.bin, this.offset,
            CREATURE_SIZE);
  }
}
```

#### Area Class

```javascript
class Area {
  constructor(name, tfile, stDir) {
    this.name = name;
    this.creatures = [];
    this.collectables = [];
    this.objects = [];
    this.exits = {};
    
    // Parse area data from T-file
    this.parseCreatures(tfile);
    this.parseCollectables(tfile);
    this.parseObjects(tfile);
    this.parseExits();
  }
  
  parseCreatures(tfile) {
    var offset = CREATURES_OFFSET;
    for (var i = 0; i < MAX_CREATURES; i++) {
      var creature = new Creature(tfile, this, offset);
      if (!creature.isBlank()) {
        this.creatures.push(creature);
      }
      offset += CREATURE_SIZE;
    }
  }
  
  hasFreeItemMemory() {
    // Check if area has space for more items
    return this.usedItemMemory() < MAX_ITEM_MEMORY;
  }
  
  usedItemMemory() {
    var count = 0;
    this.creatures.forEach(c => {
      if (!c.drop1.isNull()) count++;
      if (!c.drop2.isNull()) count++;
      if (!c.drop3.isNull()) count++;
    });
    this.collectables.forEach(c => {
      if (!c.isBlank()) count++;
    });
    return count;
  }
}
```

### Memory Management

Shadow Tower has limited memory for items per area. The randomizer tracks this:

```javascript
const MAX_ITEM_MEMORY = 64;  // Maximum items per area

// Before adding item
if (!area.hasFreeItemMemory()) {
  console.log("WARNING - No free memory, skipping item placement");
  return;
}

// Add item
spawn.drop1.set(item);
spawn.drop1Chance.set(100);
```

This prevents crashes from too many items in one area.

---

## Color Randomization System

**Purpose:** Randomizes textures using HSV color space manipulation.

**Levels:**
- **0** - No randomization
- **1** - Subtle hue shifts (±30°)
- **2** - Extreme randomization (full hue range)

**Algorithm:**

```javascript
function randomizeTexture(textureData, level, valueFactor) {
  for (var i = 0; i < textureData.length; i += 2) {
    // PS1 uses 16-bit color (5-5-5-1 format)
    var pixel = getUInt16(textureData, i);
    
    // Extract RGB (5 bits each)
    var r = extractBits(pixel, 0, 4);
    var g = extractBits(pixel, 5, 9);
    var b = extractBits(pixel, 10, 14);
    
    // Convert to HSV
    var hsv = rgbToHsv({ r, g, b });
    
    if (level == 1) {
      // Subtle shift
      hsv.h = (hsv.h + (Math.random() * 60 - 30)) % 360;
      hsv.s = Math.min(1, hsv.s * (0.8 + Math.random() * 0.4));
      hsv.v = Math.min(1, hsv.v * valueFactor);
      
    } else if (level == 2) {
      // Extreme randomization
      hsv.h = Math.random() * 360;
      hsv.s = Math.random();
      hsv.v = Math.random() * valueFactor;
    }
    
    // Convert back to RGB
    var rgb = hsvToRgb(hsv);
    
    // Pack into 16-bit pixel
    pixel = (r & 0x1F) | ((g & 0x1F) << 5) | ((b & 0x1F) << 10);
    setUInt16(textureData, i, pixel);
  }
}
```

**Application:**

```javascript
if (params.colorRandomizationGeneral) {
  randomizeTexture(generalTextures, params.colorRandomizationGeneral, 
                   params.colorValueFactor);
}
if (params.colorRandomizationBossRooms) {
  randomizeTexture(bossTextures, params.colorRandomizationBossRooms,
                   params.colorValueFactor);
}
if (params.colorRandomizationCreatures) {
  randomizeTexture(creatureTextures, params.colorRandomizationCreatures,
                   params.colorValueFactor);
}
```

---

## Preset-Specific Logic

### PRESET_BONANZA

```javascript
if (params.preset == PRESET_BONANZA) {
  // Move all "good items" to beginning of list
  allUniqueItems = allUniqueItems.filter(item => goodItems.indexOf(item) == -1);
  goodItems.forEach(item => allUniqueItems.unshift(item));
  
  // This ensures best items drop early
  // WARNING: Can cause memory issues (too many items early)
}
```

### PRESET_100_PRC

```javascript
if (params.preset == PRESET_100_PRC) {
  // Ensure sealed sword stone area has consumables
  if (area.name == 'death_world_undead_layer' &&
      (collectable.collectableIndex == 0x7 || collectable.collectableIndex == 0x8)) {
    var chosen = consumablesForRandomization[
      Math.floor(Math.random() * consumablesForRandomization.length)
    ];
    collectable.type.set(chosen);
  }
}
```

### PRESET_ONLY_BOSSES

```javascript
function keepOnlyBosses(creature, area) {
  if (nonRemovable.filter(name => creature.name.includes(name)).length) {
    return;  // Keep bosses and important NPCs
  }
  
  // Transform to acid slime (weakest enemy)
  setCreature(creature, human_world_solitary_region["01_acid_slime"], changeSet);
}
```

---

## Image Generation (maps.html)

**Purpose:** Creates visual map browser with PNG images of each area.

**Requires:** Canvas module (optional dependency)

**Process:**

```javascript
if (!toNotGenerateImages) {
  const { createCanvas } = require('canvas');
  
  areas.forEach(area => {
    const canvas = createCanvas(800, 600);
    const ctx = canvas.getContext('2d');
    
    // Draw area background
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, 800, 600);
    
    // Draw collectables
    area.collectables.forEach((collectable, index) => {
      if (!collectable.isBlank()) {
        ctx.fillStyle = '#0F0';
        ctx.fillRect(index * 20, 100, 15, 15);
        ctx.fillText(items[collectable.type.get()].name, index * 20, 120);
      }
    });
    
    // Draw exits
    area.exits.forEach((exit, index) => {
      ctx.fillStyle = '#00F';
      ctx.fillRect(index * 20, 200, 15, 15);
      ctx.fillText(exit.dest, index * 20, 220);
    });
    
    // Save PNG
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(`${spoilersPath}/maps/${area.name}.png`, buffer);
  });
  
  // Generate maps.html with embedded images
  var html = '<html><body>';
  areas.forEach(area => {
    html += `<h2>${area.name}</h2>`;
    html += `<img src="maps/${area.name}.png"/>`;
  });
  html += '</body></html>';
  fs.writeFileSync(`${spoilersPath}/maps.html`, html);
}
```

**Performance:** ~60 seconds for all areas (can be skipped with -toNotGenerateImages)

---

## Area Connections and Door System

### Overview of Area Connection Architecture

Shadow Tower's world is composed of discrete **areas** (map files) connected through various types of **exits**. Each exit is a game object within an area that can transport the player to another area. The randomizer can shuffle these connections while maintaining bidirectional consistency and walkability.

### Exit Types

There are four types of exits in Shadow Tower:

1. **door** - Standard fog gates/doorways (most common)
2. **totem** - Teleport totems that warp players
3. **portal** - Magical portals (mainly in Fire/Illusion worlds)
4. **jump** - Special fall-through connections (within same area)

**Randomization Rules:**
- Only "door" type exits are randomized
- "totem", "portal", and "jump" types remain fixed (too complex to swap safely)

### Door Data Structure

Each door exit in map.json contains:

```json
{
  "id": "0",                           // Exit object ID within source area
  "dest": "human_world_solitary_region", // Destination area name
  "world": "human_world",               // Destination world (for filtering)
  "wayBackId": "38",                    // ID of the return door in destination
  "type": "door",                       // Exit type
  "rotation": 0                         // Player rotation when entering (0-3)
}
```

### Bidirectional Consistency System

**Critical Concept:** Every door has a **wayback door** - the corresponding door on the other side.

Example pairing:
```
Area A, door 5  → Area B, door 12
Area B, door 12 → Area A, door 5
```

**wayBackId** creates this bidirectional link:
- Door 5 in Area A has `wayBackId: "12"` (points to door 12 in Area B)
- Door 12 in Area B has `wayBackId: "5"` (points back to door 5 in Area A)

### Map Shuffling Algorithm

**File:** map_shuffler.js

**Process:**

1. **Select Random Area:**
   ```javascript
   var randomArea = map[Math.floor(Math.random()*map.length)];
   ```

2. **Filter Switchable Doors:**
   ```javascript
   var switchableDoors = randomArea.exits.filter(way => {
     return way.type == "door";  // Only regular doors
   });
   ```

3. **Rotate Doors (if 2+ doors):**
   ```javascript
   // Save first door
   var firstWayCopy = JSON.parse(JSON.stringify(switchableDoors[0]));
   
   // Shift all doors forward
   for (var i=1; i<switchableDoors.length; i++) {
     assignWay(switchableDoors[i-1], switchableDoors[i], randomArea, map);
   }
   
   // Last door gets first door's original destination
   assignWay(switchableDoors[switchableDoors.length-1], firstWayCopy, randomArea, map);
   ```

   This creates a "rotation" effect:
   ```
   Before:  Door A→X, Door B→Y, Door C→Z
   After:   Door A→Y, Door B→Z, Door C→X
   ```

4. **Update Wayback Doors (Bidirectional Sync):**
   ```javascript
   function assignWay(to, from, area, map) {
     if (consistentDoors && from.wayBackId) {
       // Find the destination area
       var wayBackArea = map.find(area => area.name == from.dest);
       
       // Find the wayback door in that area
       var wayBackWay = wayBackArea.exits.find(exit => exit.id == from.wayBackId);
       
       // Update the wayback door to point back to us
       wayBackWay.dest = area.name;
       wayBackWay.world = area.world;
       wayBackWay.wayBackId = to.id;  // Point to our new ID
     }
     
     // Update our door
     to.dest = from.dest;
     to.world = from.world;
     to.wayBackId = from.wayBackId;
   }
   ```

   **Example:**
   ```
   Initial State:
     Tower door 0 → Solitary door 38
     Solitary door 38 → Tower door 0
     Tower door 4 → Cursed door 31
     Cursed door 31 → Tower door 4
   
   After Rotation in Tower:
     Tower door 0 → Cursed door 31    (was →Solitary)
     Cursed door 31 → Tower door 0    (auto-updated wayback)
     Tower door 4 → Solitary door 38  (was →Cursed)
     Solitary door 38 → Tower door 4  (auto-updated wayback)
   ```

### Consistency Verification

**File:** map_shuffler.js, walklib.js

After every shuffle, the system validates:

```javascript
function verifyConsistency(map) {
  map.forEach(area => {
    area.exits.forEach(exit => {
      if (exit.wayBackId) {
        // Check wayback door exists
        if (!areasMap[exit.dest][exit.wayBackId]) {
          console.error("ERROR - wayBackId doesn't exist");
          process.exit(1);
        }
        
        // Check wayback door points back to us
        var wayBackDoor = areasMap[exit.dest][exit.wayBackId];
        if (wayBackDoor.dest != area.name) {
          console.error("ERROR - wayBackId inconsistent");
          console.error(`${exit.dest}/${exit.wayBackId} points to ${wayBackDoor.dest}, expected ${area.name}`);
          process.exit(1);
        }
      }
    });
  });
}
```

**Validation Errors:**
- **"inconsistent wayBackId doesn't exist"** - wayBackId points to non-existent door
- **"inconsistent wayBackId doesn't match"** - wayback door doesn't point back

### Binary Implementation

**File:** data_model.js, randomizer_map.js

Doors are represented as game objects with specific binary structure:

```javascript
class MapObject {
  constructor(bin, area, offset_in_file) {
    this.bin = bin;  // Binary data buffer
    this.area = area;
    this.offset_in_file = offset_in_file;
    
    // Binary field accessors (UInt8, UInt16, Int16)
    this.id = new UInt8(this.bin, this.offset_in_file + 0x06);
    this.tileX = new UInt8(this.bin, this.offset_in_file + 0x00);
    this.tileY = new UInt8(this.bin, this.offset_in_file + 0x01);
    this.tileZ = new UInt8(this.bin, this.offset_in_file + 0x02);
    
    // Exit-specific fields
    this.destinationMapIndex = new UInt8(this.bin, this.offset_in_file + 0x15);
    this.destinationXShift = new Int16(this.bin, this.offset_in_file + 0x10);
    this.destinationYShift = new Int16(this.bin, this.offset_in_file + 0x12);
    this.destinationZShift = new Int16(this.bin, this.offset_in_file + 0x14);
    this.destinationRotation = new UInt8(this.bin, this.offset_in_file + 0x16);
    this.destinationYFineShift = new UInt8(this.bin, this.offset_in_file + 0x17);
    
    // Displacement (how far in front of door to spawn player)
    this.exitDisplacementX = new Int8(this.bin, this.offset_in_file + 0x0D);
    this.exitDisplacementY = new Int8(this.bin, this.offset_in_file + 0x0E);
    this.exitDisplacementZ = new Int8(this.bin, this.offset_in_file + 0x0F);
  }
  
  setExit(source, map) {
    // Copy destination map index
    this.destinationMapIndex.set(source.destinationMapIndex.get());
    
    // Copy spawn position
    this.destinationXShift.set(source.destinationXShift.get());
    this.destinationYShift.set(source.destinationYShift.get());
    this.destinationZShift.set(source.destinationZShift.get());
    
    // Calculate rotation relative to wayback door
    var origin = this.getExit();  // This door's map.json entry
    var dest = source.getWayBackExit(map);  // Destination's wayback door
    
    var rotationToSet = - origin.rotation 
                        + (dest.type=="totem" ? 0 : -2) 
                        + dest.rotation;
    rotationToSet = (rotationToSet + 40) % 4;
    
    this.destinationRotation.set(rotationToSet);
    
    // Copy displacement (if not totem)
    if (dest.type != "totem") {
      this.exitDisplacementX.set(source.exitDisplacementX.get());
      this.exitDisplacementY.set(source.exitDisplacementY.get());
      this.exitDisplacementZ.set(source.exitDisplacementZ.get());
    }
    
    this.destinationYFineShift.set(source.destinationYFineShift.get());
  }
}
```

### Application to Binary Files

**File:** randomizer_map.js

After map shuffling, binary data is updated:

```javascript
function applyShuffledMap(map, changeSet) {
  // Create registry of original door data (before shuffle)
  var cloneRegistryPerDestination = {};
  
  map.forEach(area => {
    area.exits.forEach(exit => {
      if (exit.type == "door") {
        var originalDoor = area.objects[parseInt(exit.id)];
        cloneRegistryPerDestination[exit.dest + "/" + exit.wayBackId] = 
          clone(originalDoor);
      }
    });
  });
  
  // Apply shuffled connections
  map.forEach(targetArea => {
    targetArea.exits.forEach(targetExit => {
      if (targetExit.type == "door") {
        // Find original door that led to this destination
        var objectToCopyFrom = originalEntranceTo(targetExit.dest, 
                                                  targetExit.wayBackId);
        
        // Get current door object
        var recipientObject = targetArea.objects[parseInt(targetExit.id)];
        
        // Copy binary data
        recipientObject.setExit(objectToCopyFrom, map);
      }
    });
  });
}
```

### Map ID System

**Critical:** Areas are referenced by numeric **map index** in binary data.

**File:** exits.txt (raw dump), data_model.js

```
Setup Area shadow_tower_part1a in FDAT file index 4 map index 0
Setup Area human_world_solitary_region in FDAT file index 44 map index 4
Setup Area earth_world_rotting_cavern in FDAT file index 114 map index 11
```

- **FDAT file index** - Position in ISO file listing
- **map index** - Game's internal area ID (what destinationMapIndex uses)

**Mapping:**
```javascript
const areaNameToMapIndex = {
  "shadow_tower_part1a": 0,
  "shadow_tower_part1b": 0,  // Same area, different section
  "shadow_tower_part1c": 0,
  "human_world_solitary_region": 4,
  "human_world_hidden_region": 5,
  "earth_world_rotting_cavern": 11,
  // ... etc
};
```

### Position and Rotation

**Player Spawn Position:**
- `destinationXShift` / `destinationYShift` / `destinationZShift` - Tile coordinates
- `destinationXFineShift` / `destinationYFineShift` / `destinationZFineShift` - Sub-tile offsets
- `exitDisplacementX/Y/Z` - How far in front of door to spawn (prevents player clipping)

**Rotation Values:**
- `0` = North
- `1` = East
- `2` = South
- `3` = West

**Calculation:**
```javascript
// Rotation is relative to both doors
var rotationToSet = - originDoor.rotation    // Cancel origin rotation
                    - 2                      // Turn around (opposite direction)
                    + destDoor.rotation;     // Apply destination rotation
rotationToSet = (rotationToSet + 40) % 4;    // Normalize to 0-3
```

This ensures player faces correct direction when exiting door.

### Walkability Validation

**File:** walklib.js

After shuffling, map must be walkable (all required areas reachable):

```javascript
function validateWalkability(map, startArea) {
  var visited = new Set([startArea]);
  var queue = [startArea];
  
  while (queue.length > 0) {
    var currentArea = queue.shift();
    var area = map.find(a => a.name == currentArea);
    
    area.exits.forEach(exit => {
      if (exit.type == "door" && !visited.has(exit.dest)) {
        visited.add(exit.dest);
        queue.push(exit.dest);
      }
    });
  }
  
  // Check all required areas visited
  var requiredAreas = [
    "shadow_tower_part1a",
    "human_world_solitary_region",
    "earth_world_poisonous_cavern",
    "fire_world_ashen_cavern",
    "water_world_impure_pool_area",
    "illusion_world_gloomy_domain",
    "death_world_dark_castle_layer"
  ];
  
  return requiredAreas.every(area => visited.has(area));
}
```

If validation fails, shuffle is retried with different random seed.

### Special Cases

**Jump Exits:**
```json
{
  "id": "jump",
  "dest": "shadow_tower_part1c",
  "type": "jump"
}
```
- No wayBackId (one-way connection)
- Connects areas within same physical space (falling through hole)
- Never randomized

**One-Way Totems:**
```json
{
  "id": "26",
  "dest": "human_world_forgotten_region",
  "world": "human_world",
  "wayBackId": "18",
  "type": "totem",
  "direction": "entrance"
}
```
- Has wayBackId but not necessarily bidirectional
- `direction` field indicates flow (entrance, exit, entrance-bi, exit-bi)
- Not randomized (teleport networks too complex)

### Difficulty Scaling

Map shuffling respects difficulty:

```javascript
var difficulty = 115;  // 0-200 scale

// Higher difficulty = more rounds of shuffling
var maxSwapRounds = Math.floor(difficulty / 10);

for (var i = 0; i < maxSwapRounds; i++) {
  rotateDoors(map);
  
  if (!validateWalkability(map, "shadow_tower_part1a")) {
    // Revert last change
    map = JSON.parse(JSON.stringify(lastValidMap));
    continue;
  }
  
  lastValidMap = JSON.parse(JSON.stringify(map));
}
```

**Effect:**
- **Easy (50)** - 5 swap rounds (minor changes)
- **Medium (115)** - 11 swap rounds (moderate maze)
- **Hard (200)** - 20 swap rounds (maximum chaos)

### Example Walkthrough

**Original Map:**
```
Tower Part 1A
  Door 0 → Solitary Region (door 38 back)

Solitary Region
  Door 38 → Tower Part 1A (door 0 back)
  Door 31 → Hidden Region (door 9 back)
  Door 34 → Hidden Region (door 13 back)
```

**After Shuffle Round:**
```javascript
rotateDoors(map.find(a => a.name == "human_world_solitary_region"));
```

**Result:**
```
Tower Part 1A
  Door 0 → Hidden Region (door 9 back)  // Changed

Solitary Region
  Door 38 → Hidden Region (door 13 back)  // Shifted
  Door 31 → Hidden Region (door 9 back)   // Shifted (to Tower now)
  Door 34 → Tower Part 1A (door 0 back)   // Shifted

Hidden Region
  Door 9 → Tower Part 1A (door 0 back)   // Auto-updated wayback
  Door 13 → Solitary Region (door 38 back) // Auto-updated wayback
```

Notice how all wayback doors automatically updated to maintain consistency!

---

## Conclusion - Technical Summary

The Shadow Tower Randomizer is a sophisticated binary modding tool that:

1. **Unpacks** PSX ISO using external tools (dumpsxiso)
2. **Parses** custom T-format container files into editable parts
3. **Randomizes** game data using seeded RNG for reproducibility
4. **Validates** map changes ensure completability
5. **Applies** thousands of binary modifications via changeset
6. **Repacks** modified data with recalculated offsets/checksums
7. **Rebuilds** ISO using external tools (mkpsxiso)

Key technical achievements:
- Zero-knowledge binary reverse engineering of proprietary format
- Sophisticated progression/difficulty scaling algorithms
- Memory-constrained item distribution
- Bidirectional map validation
- Deterministic randomization (same seed = same output)
- Web deployment with cloud storage integration

All code is JavaScript/Node.js, making it accessible and modifiable. The extensive logging and spoiler generation aids debugging and player experience.
