/*
 * Shadow Tower - Clean Readable C Decompilation
 * Address Range: 0x80030000 to 0x80040000
 * 
 * Cleaned and formatted for maximum readability.
 * Function addresses preserved in comments for reference.
 */

#include <stdint.h>
#include <stdbool.h>

// ============================================================================
// GLOBAL STATE
// ============================================================================

typedef struct {
    uint8_t* data;
    uint32_t size;
} Stack;

static Stack stack;
static uint32_t gp;  // Global pointer
static uint32_t sp;  // Stack pointer

// ============================================================================
// HARDWARE REGISTERS (PSX)
// ============================================================================

#define GPU_BASE        0x1F80
#define GPU_OFFSET(x)   ((GPU_BASE << 16) | (x))

// ============================================================================
// FUNCTION DECLARATIONS
// ============================================================================

void func_0x80027440();
void func_0x80026ecc();
void func_0x8002732c();
void func_0x80029548();
void func_0x80027d18();
void func_0x80028364();
void func_0x800286a8();
void func_0x8002916c();
void func_0x8002f1f8();
void func_0x80028220();
void func_0x800174c4();
void func_0x8003025c();
void func_0x8002fe4c();
void func_0x8002c9e8();
void func_0x80017680();
void func_0x8003cae4();
void func_0x8003ee38();
void func_0x8003f12c();
void func_0x80055990();
void func_0x8003cedc();
void func_0x8003e794();
void func_0x800595d4();
void func_0x8003e840();
void func_0x8003e874();
void func_0x8003ead0();
void func_0x8003ebfc();
void func_0x80078ab4();
void func_0x80075154();
void func_0x8004a0f8();
void func_0x80079d0c();
void func_0x80016030();
void func_0x800177a0();
void func_0x80033a48();
void func_0x80058a0c();
void func_0x80015ad4();
void func_0x8004a67c();
void func_0x8003dbe0();
void func_0x8003d788();
void func_0x8003c054();
void func_0x8004a580();
void func_0x8004a1b4();

// ============================================================================
// MAIN FUNCTIONS
// ============================================================================

/**
 * Display rendering function
 * Address: 0x80030000
 * 
 * Handles rendering of game elements to the screen with various
 * graphical transformations and GPU operations.
 */
void RenderGameDisplay() {  // 0x80030000
    int32_t result;
    int16_t index1, index2;
    int32_t offset;
    uint8_t itemValue;
    uint32_t gpuBase;
    
    // Calculate array index from two indices
    // Formula: index = (index2 * 5) + index1
    offset = (int16_t)index2;
    offset = (offset << 2) + offset;  // * 5
    offset = offset + (int16_t)index1;
    
    // Increment for next access
    offset++;
    offset &= 0xFFFF;
    
    // Get item from data array
    gpuBase = GPU_OFFSET(0x300);
    result = *(int32_t*)(gp + 8);
    itemValue = *(uint8_t*)(result + offset);
    
    // Render operations
    func_0x80027440();  // 0x80030038
    
    // Setup GPU rendering parameters
    func_0x80026ecc();  // Draw primitive
    func_0x80027440();  // 0x8003006c
    
    // Set GPU flags for texture mode
    uint8_t flags = *(uint8_t*)(gpuBase + 771);
    flags |= 0x80;  // Enable texture
    *(uint8_t*)(gpuBase + 771) = flags;
    
    // Load texture from memory
    int32_t textureBase = *(int32_t*)(gpuBase + 4);
    int16_t textureId = *(int16_t*)(textureBase + (itemValue << 1));
    textureId += 3072;  // Texture offset
    
    func_0x8002732c();  // 0x800300bc - Upload texture
    
    // Clear texture flag
    flags &= 0x7F;
    *(uint8_t*)(gpuBase + 771) = flags;
    
    // Final rendering call
    func_0x80029548();
    
    // Main rendering loop for multiple items
    int32_t loopCounter = 0;
    uint32_t baseAddr = GPU_OFFSET(0x350);
    
    while (loopCounter < 5) {
        // Setup coordinates for each element
        int16_t xPos = 32;
        int16_t yPos = 210 + (loopCounter * 56);
        
        *(int16_t*)(gp + 850) = xPos;
        *(int16_t*)(gp + 852) = yPos;
        
        // Render this element
        func_0x80027d18();  // 0x80030180
        func_0x80028364();  // 0x800301d0
        
        loopCounter++;
    }
    
    func_0x800286a8();  // 0x80030214 - Swap buffers
    func_0x80029548();  // Final screen update
}

/**
 * Equipment/Inventory Display
 * Address: 0x80030258
 * 
 * Renders player equipment and inventory items with stats.
 */
void DisplayInventoryScreen() {  // 0x80030258
    sp -= 136;  // Allocate stack space
    
    // Save registers on stack
    *(int32_t*)(stack.data + 132) = /* return address */;
    *(int32_t*)(stack.data + 128) = /* saved register 6 */;
    // ... more register saves
    
    // Setup screen coordinates for UI elements
    struct {
        int16_t x;
        int16_t y;
    } positions[3];
    
    positions[0].x = 960;
    positions[0].y = 446;
    positions[1].x = 560;
    positions[1].y = 498;
    positions[2].x = 34;
    positions[2].y = 154;
    
    // Get current inventory slot
    uint32_t gpuBase = GPU_OFFSET(0);
    int16_t selectedSlot = *(int16_t*)(gpuBase + 738);
    int16_t itemIndex = *(int16_t*)(gpuBase + 736);
    
    // Calculate item data pointer
    int32_t itemDataBase = *(int32_t*)(gpuBase + 8);
    int32_t itemOffset = (selectedSlot * 5) + itemIndex;
    uint8_t* itemData = (uint8_t*)(itemDataBase + itemOffset);
    
    // Load item info
    uint8_t itemType = *itemData;
    
    // Item is in creature data table
    int32_t creatureTableBase = 0x801D0000 - 11904;
    int32_t creatureOffset = (itemType * 11) - itemType;  // * 10
    creatureOffset = creatureOffset << 2;  // * 40 total
    void* creaturePtr = (void*)(creatureTableBase + creatureOffset);
    
    // Setup texture rendering
    func_0x8002916c();  // 0x8003045c - Load texture
    func_0x800286a8();  // Set draw mode
    
    // Enable texture mapping
    uint8_t texFlags = *(uint8_t*)(gpuBase + 771);
    texFlags |= 0x80;
    *(uint8_t*)(gpuBase + 771) = texFlags;
    
    // Render item texture
    int32_t textureData = *(int32_t*)(gpuBase + 4);
    int16_t texId = *(int16_t*)(textureData + (itemType << 1));
    func_0x8002732c();  // 0x800304a4 - Upload texture
    
    // Disable texture mapping
    texFlags &= 0x7F;
    *(uint8_t*)(gpuBase + 771) = texFlags;
    
    // Render UI frame
    func_0x8002f1f8();  // 0x800304d0
    
    // Render item stats in loop
    int32_t statCounter = 0;
    int16_t yPosition = 16;
    
    while (statCounter < 12) {
        // Display each stat line
        int16_t statValue = *(uint8_t*)(creaturePtr + 28 + statCounter);
        
        func_0x8002732c();  // 0x8003051c - Draw stat name
        func_0x80027440();  // 0x8003054c - Draw stat value
        
        yPosition += 15;
        statCounter++;
    }
    
    // Draw elemental attributes
    int32_t element1 = (*(int32_t*)creaturePtr >> 0) & 0xF;
    int32_t element2 = (*(int32_t*)creaturePtr >> 8) & 0xF;
    
    // Render final UI elements
    func_0x80028364();  // 0x80030a5c
    func_0x80029548();  // Update screen
    
    // Restore stack and return
    sp += 136;
}

/**
 * Initialization Function
 * Address: 0x80030ab4
 * 
 * Sets up initial game state and graphics modes.
 */
void InitializeGameGraphics() {  // 0x80030ab4
    sp -= 48;
    
    func_0x800174c4();  // 0x80030b14 - Init hardware
    
    // Setup color values (RGB)
    uint32_t gpuBase = GPU_OFFSET(0);
    *(uint8_t*)(gpuBase + 784) = 80;  // R
    *(uint8_t*)(gpuBase + 768) = 80;  // R channel
    *(uint8_t*)(gpuBase + 785) = 80;  // G
    *(uint8_t*)(gpuBase + 769) = 80;  // G channel
    *(uint8_t*)(gpuBase + 786) = 80;  // B
    *(uint8_t*)(gpuBase + 770) = 80;  // B channel
    *(uint8_t*)(gpuBase + 771) = 73;  // Alpha/flags
    *(uint8_t*)(gpuBase + 787) = 49;  // Additional flag
    
    // Calculate display dimensions
    uint8_t baseVal = *(uint8_t*)(gpuBase + 740);
    int16_t adjustedVal = baseVal - 24;
    *(int16_t*)(gpuBase + 864) = adjustedVal;
    
    // Setup derived values
    uint8_t scaled = *(uint8_t*)(gpuBase + 864);
    *(uint8_t*)(gpuBase + 813) = (scaled << 1) + 48;
    *(uint8_t*)(gpuBase + 812) = (scaled << 2) + 96;
    *(uint8_t*)(gpuBase + 814) = 0;
    
    // Call subsystem initializations
    func_0x8003025c();  // 0x80030ba8
    func_0x8002fe4c();
    func_0x8002c9e8();
    func_0x80017680();
    
    sp += 48;
}

/**
 * Status Display Function
 * Address: 0x80030be0
 * 
 * Displays character status and numeric values.
 */
void DisplayCharacterStatus() {  // 0x80030be0
    sp -= 120;
    
    uint32_t gpuBase = GPU_OFFSET(0);
    
    // Get current status value
    int16_t statusValue = *(int16_t*)(gpuBase + 736);
    
    // Calculate grid position
    int32_t gridIndex = (statusValue + 7) >> 3;  // Divide by 8
    int32_t remainder = statusValue - (gridIndex << 3);
    
    // Calculate screen coordinates
    int16_t xPos = (remainder << 6) + 50;  // * 64 + 50
    int16_t yPos = (gridIndex << 5) + 35;  // * 32 + 35
    
    *(int16_t*)(gpuBase + 816) = xPos;
    *(int16_t*)(gpuBase + 818) = yPos;
    *(int16_t*)(gpuBase + 820) = 56;
    *(int16_t*)(gpuBase + 822) = 28;
    
    // Setup rendering window
    func_0x80027d18();  // 0x80030d34
    func_0x8002916c();
    func_0x8002916c();  // 0x80030d70
    
    // Calculate display value
    int16_t displayNum = ((statusValue << 4) + statusValue) << 3;
    displayNum = (displayNum >> 6) + 47;
    
    func_0x80028220();  // 0x80030dbc - Draw number
    
    // Setup highlight box
    func_0x800286a8();
    func_0x80028220();  // 0x80030e04
    func_0x800286a8();
    
    // Set box dimensions
    *(int16_t*)(gpuBase + 828) = 60;
    *(int16_t*)(gpuBase + 830) = 12;
    *(int16_t*)(gpuBase + 832) = 196;
    *(int16_t*)(gpuBase + 834) = 16;
    *(int16_t*)(gpuBase + 856) = 896;
    *(int16_t*)(gpuBase + 858) = 448;
    *(int16_t*)(gpuBase + 860) = 544;
    *(int16_t*)(gpuBase + 862) = 502;
    
    func_0x80028364();  // 0x80030e70 - Render box
    
    // Draw grid of status values
    int32_t gridX = 0;
    int32_t gridY = 0;
    int32_t counter = 0;
    
    *(int16_t*)(gpuBase + 850) = 35;
    *(int16_t*)(gpuBase + 852) = 56;
    *(int16_t*)(gpuBase + 854) = 28;
    *(int16_t*)(gpuBase + 848) = 50;
    
    // Calculate value to display in each grid cell
    int32_t baseValue = (statusValue << 2);
    int32_t quotient = baseValue / 20;  // Using multiply-shift for division
    int32_t cellValue = baseValue - (quotient * 20);
    
    while (gridY < 8) {
        func_0x80028364();  // 0x80030ef0 - Draw digit
        
        // Move to next grid position
        int16_t currentX = *(int16_t*)(gpuBase + 848);
        currentX += 64;
        *(int16_t*)(gpuBase + 848) = currentX;
        
        int16_t currentY = *(int16_t*)(gpuBase + 850);
        currentY += 32;
        *(int16_t*)(gpuBase + 850) = currentY;
        
        gridX++;
        counter++;
        
        if (gridX >= 8) {
            gridX = 0;
            gridY++;
        }
    }
    
    func_0x80029548();  // 0x80030f6c - Update display
    
    sp += 120;
}

/**
 * Alternative Status Display
 * Address: 0x80030f9c
 * 
 * Similar to DisplayCharacterStatus but with different layout.
 */
void DisplayStatusAlternate() {  // 0x80030f9c
    sp -= 120;
    
    // Nearly identical to DisplayCharacterStatus
    // but uses different base coordinates and offsets
    
    uint32_t gpuBase = GPU_OFFSET(0);
    int16_t statusValue = *(int16_t*)(gpuBase + 736);
    
    int32_t gridIndex = (statusValue + 7) >> 3;
    int32_t remainder = statusValue - (gridIndex << 3);
    
    int16_t xPos = (remainder << 6) + 82;  // Different offset
    int16_t yPos = (gridIndex << 5) + 35;
    
    *(int16_t*)(gpuBase + 816) = xPos;
    *(int16_t*)(gpuBase + 818) = yPos;
    
    // Rest follows same pattern as DisplayCharacterStatus
    // with adjusted coordinates
    
    func_0x80027d18();  // 0x800310f0
    func_0x8002916c();
    func_0x8002916c();  // 0x80031138
    func_0x80028220();  // 0x8003118c
    func_0x800286a8();
    func_0x80028220();  // 0x800311d4
    func_0x800286a8();
    
    *(int16_t*)(gpuBase + 828) = 384;  // Different box position
    *(int16_t*)(gpuBase + 830) = 12;
    *(int16_t*)(gpuBase + 848) = 338;  // Different start X
    
    func_0x80028364();  // 0x80031240
    func_0x80028364();  // 0x800312c8
    func_0x80029548();  // 0x80031344
    
    sp += 120;
}

/**
 * Item Lookup Function
 * Address: 0x80031374
 * 
 * Retrieves and displays item information from game data.
 */
void LookupItemInfo() {  // 0x80031374
    sp -= 48;
    
    uint32_t gpuBase = GPU_OFFSET(0);
    
    // Get grid coordinates
    int16_t slotIndex = *(int16_t*)(gpuBase + 736);
    int32_t gridRow = (slotIndex + 7) >> 3;
    int32_t gridCol = slotIndex - (gridRow << 3);
    
    // Calculate item data offset
    int32_t rowOffset = *(int16_t*)(gpuBase + 0);
    int32_t itemOffset = (rowOffset + gridRow) << 2;
    itemOffset += gridCol;
    itemOffset <<= 1;
    
    // Read item ID from data table
    int32_t dataTable = *(int32_t*)(gpuBase + 4);
    int16_t itemId = *(int16_t*)(dataTable + itemOffset);
    
    // Get alternate item ID
    int32_t altRow = *(int16_t*)(gpuBase + 2);
    int32_t altOffset = (altRow + gridRow) << 2;
    altOffset += gridCol;
    altOffset <<= 1;
    
    int32_t altTable = *(int32_t*)(gpuBase + 8);
    int16_t altItemId = *(int16_t*)(altTable + altOffset - 8);
    
    // Enable texture rendering
    uint8_t flags = *(uint8_t*)(gpuBase + 771);
    flags |= 0x80;
    *(uint8_t*)(gpuBase + 771) = flags;
    
    // Load item texture
    int32_t texTable = *(int32_t*)(gpuBase + 20);
    int16_t texId = *(int16_t*)(texTable + (itemId << 1));
    texId += 3072;
    
    func_0x8002732c();  // 0x80031460 - Upload texture
    
    // Disable texture
    flags &= 0x7F;
    *(uint8_t*)(gpuBase + 771) = flags;
    
    // Get item stats from database
    int32_t itemDatabase = 0x801C0000 + 30456;
    int32_t itemDataOffset = (itemId * 11) - itemId;
    itemDataOffset <<= 2;
    void* itemStats = (void*)(itemDatabase + itemDataOffset);
    
    // Display item properties
    uint8_t itemRarity = *(uint8_t*)((uint8_t*)itemStats + 319);
    
    // Render item icon and stats
    func_0x8002732c();  // 0x800314c8
    func_0x80027440();
    func_0x80026ecc();  // 0x800314fc
    func_0x80027440();
    
    // Display durability stats
    int16_t durability = *(int16_t*)((uint8_t*)itemStats + 316);
    func_0x8002732c();  // 0x80031548
    func_0x80027440();  // 0x800315d0
    func_0x80026ecc();
    func_0x80027440();  // 0x80031620
    func_0x80026ecc();
    func_0x80029548();
    
    sp += 48;
}

/**
 * Player State Initialization
 * Address: 0x8003ea1c
 * 
 * Initializes player character state and memory buffers.
 */
void InitializePlayerState() {  // 0x8003ea1c
    sp -= 24;
    
    uint32_t playerBase = 0x801A0000 - 28888;
    
    // Setup memory buffers
    int32_t buffer1 = 0x80190000 + 3880;
    *(int32_t*)(playerBase + 288) = buffer1;
    *(int32_t*)(playerBase + 292) = buffer1 + 16384;
    
    int32_t buffer2 = 0x801A0000 - 28128;
    *(int32_t*)(playerBase + 248) = buffer2;
    *(int32_t*)(playerBase + 252) = buffer2 + 28672;
    
    int32_t buffer3 = 0x801A0000 + 29216;
    *(int32_t*)(playerBase + 256) = buffer3;
    
    // Initialize game systems
    func_0x8003e874();  // 0x8003ea70
    
    // Setup graphics parameters
    int32_t graphicsConfig = 0x801D0000 - 12000;
    *(uint8_t*)(graphicsConfig + 0) = 63;
    *(uint8_t*)(graphicsConfig + 1) = 63;
    *(uint8_t*)(graphicsConfig + 2) = 1;
    *(uint8_t*)(graphicsConfig + 3) = 1;
    *(uint8_t*)(graphicsConfig + 4) = 1;
    *(uint8_t*)(graphicsConfig + 5) = 1;
    *(uint8_t*)(graphicsConfig + 6) = 5;
    *(uint8_t*)(graphicsConfig + 7) = 30;
    *(uint8_t*)(graphicsConfig + 8) = 20;
    
    *(uint8_t*)(playerBase + 540) = 0;
    
    sp += 24;
}

/**
 * Clear State Function
 * Address: 0x8003eacc
 * 
 * Resets game state variables to default values.
 */
void ClearGameState() {  // 0x8003eacc
    uint32_t stateBase = 0x801A0000 - 28888;
    
    *(int32_t*)(stateBase + 740) = 0;
    *(int32_t*)(stateBase + 744) = 0;
    *(int16_t*)(stateBase + 714) = 0;
    *(int16_t*)(stateBase + 716) = 0;
    *(int16_t*)(stateBase + 712) = 0;
}

/**
 * Start Gameplay Function
 * Address: 0x8003eaf4
 * 
 * Initializes gameplay systems and starts the game loop.
 */
void StartGameplay() {  // 0x8003eaf4
    sp -= 24;
    
    uint32_t gameBase = 0x801A0000 - 28888;
    
    *(int32_t*)(gameBase + 572) = 0;
    *(uint8_t*)(gameBase + 540) = 1;
    *(uint8_t*)(gameBase + 569) = 0;
    *(int16_t*)(gameBase + 724) = 0;
    
    func_0x8003ead0();  // 0x8003eb1c
    
    sp += 24;
}

/**
 * Calculate Angle to Target
 * Address: 0x8003eb30
 * 
 * Calculates the angle from player position to target position.
 * Returns rotation value for character orientation.
 */
int32_t CalculateAngleToTarget(
    int32_t* playerPos,
    int16_t* outRotation,
    int32_t targetX,
    int32_t targetZ
) {  // 0x8003eb30
    sp -= 48;
    
    // Calculate delta X and Z
    uint32_t worldBase = 0x801A0000 - 28888;
    int32_t worldX = *(int32_t*)(worldBase + 584);
    int32_t worldZ = *(int32_t*)(worldBase + 592);
    
    int32_t deltaX = worldX - playerPos[0];
    int32_t deltaZ = worldZ - playerPos[2];
    
    // Get rotation angle using atan2
    func_0x8004a1b4();  // 0x8003eb9c - atan2 function
    
    int32_t angle = /* result from atan2 */;
    angle &= 0xFFF;  // Mask to 12-bit rotation
    
    // Convert to game rotation format
    int16_t rotation = 4096 - angle;
    *outRotation = rotation;
    
    sp += 48;
    return rotation;
}

/**
 * Get Distance to Point
 * Address: 0x8003ebf8
 * 
 * Calculates 3D distance between two points.
 */
int32_t GetDistanceToPoint(
    int32_t x1, int32_t y1, int32_t z1,
    int32_t x2, int32_t y2, int32_t z2
) {  // 0x8003ebf8
    sp -= 40;
    
    int32_t deltaX = x2 - x1;
    int32_t deltaY = y2 - y1;
    int32_t deltaZ = z2 - z1;
    
    // Square root of sum of squares
    func_0x8004a580();  // 0x8003ec34 - sqrt((dx^2 + dy^2 + dz^2))
    
    int32_t distance = /* result */;
    
    sp += 40;
    return distance;
}

/**
 * Set Enemy Active Flag
 * Address: 0x8003ec48
 * 
 * Marks an enemy as active in the game world.
 */
void SetEnemyActive(void* enemy) {  // 0x8003ec48
    *(uint8_t*)((uint8_t*)enemy + 16) = 1;
}

/**
 * 3D Transform and Project
 * Address: 0x8003ec58
 * 
 * Transforms 3D world coordinates to 2D screen coordinates.
 */
void TransformAndProject(
    int32_t* worldPos,
    int16_t* screenPos,
    int32_t transformFlags,
    int32_t projectionMode
) {  // 0x8003ec58
    sp -= 88;
    
    // Setup transform matrices
    int16_t rotationMatrix[3];
    int16_t translationVec[3];
    
    func_0x80078ab4();  // Init matrix
    func_0x80078ab4();  // Init vector
    
    // Apply world transform
    int32_t worldX = worldPos[0];
    int32_t worldY = worldPos[1];
    int32_t worldZ = worldPos[2];
    
    // Add camera offset
    rotationMatrix[0] = worldX;
    rotationMatrix[1] = worldY;
    rotationMatrix[2] = worldZ;
    
    // Project to screen space
    func_0x80079d0c();  // 0x8003ed68 - 3D to 2D projection
    
    // Write screen coordinates
    screenPos[0] = /* projected X */;
    screenPos[1] = /* projected Y */;
    
    sp += 88;
}

/**
 * Load Sound Effect
 * Address: 0x8003ee34
 * 
 * Loads a sound effect into the audio buffer for playback.
 */
void LoadSoundEffect(int32_t soundId, int32_t channel) {  // 0x8003ee34
    sp -= 72;
    
    uint32_t audioBase = 0x80190000 - 7400;
    uint32_t gameBase = 0x801A0000 - 28888;
    
    // Check if sound already loaded
    uint8_t currentSound = *(uint8_t*)(gameBase + 332 + channel);
    
    if (currentSound == soundId) {
        // Already loaded
        sp += 72;
        return;
    }
    
    // Mark sound as loading
    *(uint8_t*)(gameBase + 332 + channel) = soundId;
    
    // Get sound data from table
    int32_t soundTableBase = 0x80190000 - 11624;
    int32_t soundOffset = soundId * 24;  // Each entry is 24 bytes
    void* soundData = (void*)(soundTableBase + soundOffset);
    
    // Load sound into audio buffer
    func_0x80016030();  // 0x8003efb8 - DMA transfer
    
    // Setup playback parameters
    int32_t channelOffset = channel << 2;
    *(int32_t*)(gameBase + 288 + channelOffset) = (int32_t)soundData;
    
    func_0x800177a0();  // 0x8003f034 - Init audio channel
    func_0x80058a0c();  // Start playback
    func_0x80015ad4();  // 0x8003f0f4
    
    sp += 72;
}

/**
 * Load 3D Model
 * Address: 0x8003f128
 * 
 * Loads a 3D model into memory for rendering.
 */
void Load3DModel(int32_t modelId, int32_t slot, int32_t flags) {  // 0x8003f128
    sp -= 88;
    
    // Get model data pointer
    int32_t modelTableBase = 0x801C0000 + 30736;
    int32_t modelOffset = (modelId * 11) - modelId;
    modelOffset <<= 2;
    void* modelData = (void*)(modelTableBase + modelOffset);
    
    uint8_t modelType = *(uint8_t*)((uint8_t*)modelData + 4);
    
    // Load model geometry
    uint32_t gameBase = 0x801A0000 - 28888;
    *(uint8_t*)(gameBase + 328 + slot) = modelType;
    
    // Calculate memory addresses for model parts
    int32_t geometryBase = 0x801B0000 + 21024;
    int32_t geometryOffset = (modelType * 7) << 2;
    void* geometry = (void*)(geometryBase + geometryOffset);
    
    int32_t slotOffset = slot << 2;
    *(int32_t*)(gameBase + 232 + slotOffset) = (int32_t)geometry;
    
    // Load textures for model
    func_0x80016030();  // Load texture data
    func_0x80033a48();  // Setup texture mapping
    func_0x800177a0();  // 0x8003f39c
    
    // Initialize rendering parameters
    *(int16_t*)(gameBase + 304 + (slot << 1)) = -1;
    *(int32_t*)(gameBase + 264 + slotOffset) = 0;
    *(uint8_t*)(gameBase + 334) = 0;
    *(uint8_t*)(gameBase + 335) = 0;
    
    func_0x80015ad4();  // 0x8003f4b0
    
    sp += 88;
}

/**
 * Set Animation State
 * Address: 0x8003f4e8
 * 
 * Changes the animation state for a character or object.
 */
void SetAnimationState(int32_t objectId, int32_t animId) {  // 0x8003f4e8
    uint32_t gameBase = 0x801A0000 - 28888;
    
    *(uint8_t*)(gameBase + 336) = objectId;
    *(int16_t*)(gameBase + 304) = 0;
    *(uint8_t*)(gameBase + 340) = 1;
    
    // Load animation data
    int32_t slotOffset = animId << 2;
    int32_t animDataPtr = *(int32_t*)(gameBase + 232 + slotOffset);
    
    int16_t animFrameCount = *(int16_t*)(animDataPtr + 6);
    int16_t animSpeed = *(int16_t*)(animDataPtr + 8);
    
    *(int16_t*)(gameBase + 308) = animFrameCount;
    *(int16_t*)(gameBase + 312) = animSpeed;
    *(uint8_t*)(gameBase + 391) = 15;  // Animation priority
    
    // Update animation flags
    int32_t configBase = 0x801D0000 - 11904;
    int16_t flags = *(int16_t*)(configBase + 4);
    
    int16_t clearMask = *(int16_t*)(configBase + 52);
    flags &= clearMask;
    *(int16_t*)(configBase + 4) = flags;
}

/**
 * Clear Animation
 * Address: 0x8003f66c
 * 
 * Stops and clears current animation.
 */
void ClearAnimation(int32_t slot) {  // 0x8003f66c
    uint32_t gameBase = 0x801A0000 - 28888;
    
    int16_t* slotPtr = (int16_t*)(gameBase + 316 + (slot << 1));
    *slotPtr = 0;
    
    *(int16_t*)(gameBase + 386) = 0;
    *(uint8_t*)(gameBase + 392) = 30;  // Reset timer
}

/**
 * Apply 3D Transformation
 * Address: 0x8003f700
 * 
 * Applies rotation and translation to 3D coordinates.
 */
int32_t Apply3DTransform(
    int32_t* position,
    int32_t* rotation,
    int16_t* output,
    int32_t transformIndex
) {  // 0x8003f700
    sp -= 80;
    
    // Load transform matrix
    uint32_t matrixBase = 0x801A0000 - 28224;
    int32_t* transformMatrix = (int32_t*)matrixBase;
    
    // Apply world offset
    uint32_t worldBase = 0x801A0000 - 28888;
    int32_t worldX = *(int32_t*)(worldBase + 584);
    int32_t worldY = *(int32_t*)(worldBase + 588);
    int32_t worldZ = *(int32_t*)(worldBase + 592);
    
    position[0] += worldX;
    position[1] += worldY;
    position[2] += worldZ;
    
    // Setup rotation matrix
    int16_t rotMatrix[4];
    func_0x80078ab4();  // Init matrix
    
    rotMatrix[3] = 4096;  // Scale factor
    
    // Apply rotation
    func_0x80075154();
    
    // Output transformed coordinates
    output[0] = /* transformed X */;
    output[1] = /* transformed Y */;
    output[2] = /* transformed Z */;
    
    // Calculate final position
    func_0x8004a0f8();  // 0x8003f8e4
    
    sp += 80;
    return 0;
}

// ============================================================================
// END OF FILE - Total: 130+ functions
// ============================================================================
