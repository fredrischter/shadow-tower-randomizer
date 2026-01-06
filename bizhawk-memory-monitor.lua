-- BizHawk Memory Monitor for Shadow Tower
-- Tracks item model loading in real-time to prevent texture corruption
-- 
-- IMPORTANT: This script is designed for BizHawk emulator (NOT DuckStation)
-- DuckStation does not support Lua scripting.
--
-- Installation:
-- 1. Download BizHawk: https://tasvideos.org/BizHawk
-- 2. Open BizHawk with PSX core
-- 3. Tools → Lua Console
-- 4. Load this script
--
-- Features:
-- - Real-time item memory tracking
-- - Visual alerts when approaching limits
-- - Area transition detection
-- - Memory usage logging

local script_name = "Shadow Tower Memory Monitor (BizHawk)"
local version = "1.1"

-- Configuration
local MEMORY_LIMIT = 16         -- Maximum unique item models per area
local WARNING_THRESHOLD = 12    -- Show warning at this count
local CRITICAL_THRESHOLD = 14   -- Show critical warning at this count

-- State tracking
local current_area_id = 0
local loaded_models = {}
local model_count = 0
local area_name = "Unknown"

-- UI Configuration
local ui_x = 10
local ui_y = 10
local ui_width = 300
local ui_height = 120
local ui_visible = true

-- Color constants
local COLOR_BG = 0x80000000       -- Semi-transparent black
local COLOR_TEXT = 0xFFFFFFFF     -- White
local COLOR_SAFE = 0xFF00FF00     -- Green
local COLOR_WARNING = 0xFFFFAA00  -- Orange
local COLOR_CRITICAL = 0xFFFF0000 -- Red

-- Memory addresses (to be discovered/adjusted)
-- These are EXAMPLE addresses and may need adjustment
local ADDR_AREA_ID = 0x801A0000       -- Current area identifier
local ADDR_MODEL_TABLE = 0x80100000   -- Item model pointer table start
local ADDR_MODEL_TABLE_END = 0x80150000

-- Area name lookup (partial - expand as needed)
local area_names = {
  [0] = "Shadow Tower Part 1A",
  [1] = "Human World - Solitary Region",
  [2] = "Earth World - Poisonous Cavern",
  [3] = "Fire World - Ashen Cavern",
  [4] = "Water World - Watery Labyrinth",
  -- Add more as discovered
}

-- Helper Functions

local function read_word(address)
  -- Safely read 4-byte word from memory (BizHawk API)
  local success, value = pcall(function()
    return memory.read_u32_le(address)  -- BizHawk's API
  end)
  if success then
    return value
  else
    return 0
  end
end

local function read_byte(address)
  -- Safely read 1 byte from memory (BizHawk API)
  local success, value = pcall(function()
    return memory.read_u8(address)  -- BizHawk's API
  end)
  if success then
    return value
  else
    return 0
  end
end

local function is_valid_model_pointer(ptr)
  -- Check if pointer looks like valid PSX RAM address
  return ptr >= 0x80000000 and ptr < 0x80200000 and ptr % 4 == 0
end

local function scan_loaded_models()
  -- Scan memory for loaded item model pointers
  local models = {}
  local count = 0
  
  for addr = ADDR_MODEL_TABLE, ADDR_MODEL_TABLE_END, 4 do
    local ptr = read_word(addr)
    if is_valid_model_pointer(ptr) then
      if not models[ptr] then
        models[ptr] = true
        count = count + 1
      end
    end
  end
  
  return models, count
end

local function get_area_name(area_id)
  return area_names[area_id] or string.format("Area %02X", area_id)
end

local function get_memory_color(count)
  if count >= CRITICAL_THRESHOLD then
    return COLOR_CRITICAL
  elseif count >= WARNING_THRESHOLD then
    return COLOR_WARNING
  else
    return COLOR_SAFE
  end
end

local function get_status_text(count)
  if count > MEMORY_LIMIT then
    return "OVERFLOW!"
  elseif count >= CRITICAL_THRESHOLD then
    return "CRITICAL"
  elseif count >= WARNING_THRESHOLD then
    return "WARNING"
  else
    return "OK"
  end
end

-- Main Functions

local function on_area_change(new_area_id)
  console.log(string.format("[Memory Monitor] Area changed: %s → %s", 
    get_area_name(current_area_id), 
    get_area_name(new_area_id)))
  
  if model_count > 0 then
    console.log(string.format("[Memory Monitor] Previous area used %d/%d models", 
      model_count, MEMORY_LIMIT))
    
    if model_count > MEMORY_LIMIT then
      console.error(string.format("[Memory Monitor] !!! OVERFLOW in %s: %d models !!!", 
        get_area_name(current_area_id), model_count))
    end
  end
  
  current_area_id = new_area_id
  area_name = get_area_name(new_area_id)
  loaded_models = {}
  model_count = 0
end

local function on_model_loaded(ptr)
  if not loaded_models[ptr] then
    loaded_models[ptr] = true
    model_count = model_count + 1
    
    console.log(string.format("[Memory Monitor] Model loaded: 0x%08X (count: %d/%d)", 
      ptr, model_count, MEMORY_LIMIT))
    
    if model_count == WARNING_THRESHOLD then
      console.warning(string.format("[Memory Monitor] ⚠ Approaching limit in %s: %d/%d", 
        area_name, model_count, MEMORY_LIMIT))
    elseif model_count == CRITICAL_THRESHOLD then
      console.warning(string.format("[Memory Monitor] ⚠⚠ CRITICAL in %s: %d/%d", 
        area_name, model_count, MEMORY_LIMIT))
    elseif model_count > MEMORY_LIMIT then
      console.error(string.format("[Memory Monitor] 🚨 OVERFLOW in %s: %d/%d", 
        area_name, model_count, MEMORY_LIMIT))
      
      -- Optional: pause emulation for inspection
      -- emu.pause()
    end
  end
end

local function update_memory_tracking()
  -- Check for area changes
  local area_id = read_byte(ADDR_AREA_ID)
  if area_id ~= current_area_id then
    on_area_change(area_id)
  end
  
  -- Scan for new models
  local models, count = scan_loaded_models()
  
  -- Check for newly loaded models
  for ptr, _ in pairs(models) do
    if not loaded_models[ptr] then
      on_model_loaded(ptr)
    end
  end
end

local function draw_ui()
  if not ui_visible then
    return
  end
  
  -- Background
  gui.drawrectangle(ui_x, ui_y, ui_width, ui_height, COLOR_BG, COLOR_BG)
  
  -- Title
  gui.drawtext(ui_x + 10, ui_y + 5, script_name .. " v" .. version, COLOR_TEXT, nil, 10)
  
  -- Area name
  gui.drawtext(ui_x + 10, ui_y + 25, "Area: " .. area_name, COLOR_TEXT, nil, 9)
  
  -- Memory usage
  local color = get_memory_color(model_count)
  local status = get_status_text(model_count)
  
  gui.drawtext(ui_x + 10, ui_y + 45, 
    string.format("Memory: %d/%d models", model_count, MEMORY_LIMIT), 
    COLOR_TEXT, nil, 9)
  
  -- Status bar
  local bar_x = ui_x + 10
  local bar_y = ui_y + 65
  local bar_width = ui_width - 20
  local bar_height = 20
  
  -- Background bar
  gui.drawrectangle(bar_x, bar_y, bar_width, bar_height, 0xFF404040, 0xFF202020)
  
  -- Fill bar
  local fill_width = math.min((model_count / MEMORY_LIMIT) * bar_width, bar_width)
  gui.drawrectangle(bar_x, bar_y, fill_width, bar_height, color, color)
  
  -- Status text
  gui.drawtext(ui_x + 10, ui_y + 95, "Status: " .. status, color, nil, 10)
  
  -- Instructions
  gui.drawtext(ui_x + 10, ui_y + ui_height - 15, 
    "Press F1 to toggle display", 0xFFAAAAAA, nil, 8)
end

local function on_key_press(key)
  if key == "F1" then
    ui_visible = not ui_visible
    console.log("[Memory Monitor] UI " .. (ui_visible and "shown" or "hidden"))
  end
end

-- Frame callback
local function on_frame()
  update_memory_tracking()
  draw_ui()
end

-- Initialization
console.log("[Memory Monitor] " .. script_name .. " v" .. version .. " started")
console.log("[Memory Monitor] WARNING: Memory addresses may need adjustment for your ROM version")
console.log("[Memory Monitor] Press F1 to toggle UI display")
console.log("[Memory Monitor] Check console for memory alerts")

-- Register callbacks
emu.registerframe(on_frame)

-- Note: Key press handling depends on DuckStation version
-- Some versions support input callbacks, others don't
-- Manual toggling via console may be needed:
-- Run: ui_visible = not ui_visible

console.log("[Memory Monitor] Script loaded successfully")
console.log("[Memory Monitor] Monitoring area: " .. get_area_name(current_area_id))
