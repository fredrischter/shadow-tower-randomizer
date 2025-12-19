# Shadow Tower - Runtime Debugging for Damage Calculation

## ⚠️ DEBUGGER NOT STOPPING? Read This First!

**Most common issue:** PSX memory is mirrored at different addresses.

If you found HP at `0x001A3C40`, your breakpoint needs to use:
- `0x801A3C40` (add 0x80000000) - **try this first**
- OR `0xA01A3C40` (add 0xA0000000)

**Quick Fix in no$psx:**
```
1. Found HP address: 0x00xxxxxx
2. Set breakpoint at: 0x80xxxxxx (same digits, add 0x80 prefix)
3. Breakpoint type: [W] Write (not Read)
4. Make sure "Break" is enabled in debugger window
```

**Still not working?** See [Troubleshooting Section](#troubleshooting-debugger-not-stopping) below for 7 common issues and fixes.

---

## Goal
Find the actual damage calculation code in Shadow Tower's MIPS executable at runtime, so you can understand how damage is calculated and create patches to modify it.

---

## Overview of Approaches

### Easy/Desktop Approaches:
1. **PSX Emulator with Memory Viewer** - Find damage values in RAM, watch them change
2. **PSX Emulator with Debugger (no$psx)** - Set breakpoints, trace code execution
3. **Cheat Engine** - Memory scanning and debugging

### Advanced Approaches:
4. **MIPS Disassembly (Ghidra)** - Static analysis of executable code
5. **Combined Approach** - Use runtime + disassembly together

---

## Approach 1: PSX Emulator with Memory Viewer (Easiest)

### Tools Needed:
- **DuckStation** or **ePSXe** (emulators with memory viewers)
- Shadow Tower ISO

### Steps:

#### 1. Find Player HP in Memory
```
1. Start game in emulator
2. Note your current HP (e.g., 500)
3. Open memory viewer/searcher
4. Search for value: 500 (16-bit or 32-bit)
5. Get hit by enemy, HP drops to 450
6. Search again for: 450
7. Repeat until you find the exact address (e.g., 0x801A3C40)
```

#### 2. Find Enemy HP in Memory
```
1. Find an enemy you can see
2. Attack it, note damage dealt
3. Search for enemy HP value
4. Keep attacking, narrow down address
5. Find exact address (e.g., 0x801B5000)
```

#### 3. Watch for Damage Calculation
```
1. Set memory breakpoint on player HP address (write)
2. Get hit by enemy
3. Debugger stops when HP changes
4. Look at the code that just executed
5. This is your damage application code
```

#### 4. Trace Backwards
```
The code that writes to HP is the END of damage calculation.
You need to trace backwards to find:
- Where damage value comes from
- What calculations were done
- Which enemy/player stats were loaded
```

### What You'll Find:
- Memory addresses for player/enemy HP
- Code addresses that modify HP
- Register values during calculation
- Call stack to trace back further

---

## Approach 2: no$psx Debugger (Most Powerful Desktop Option)

### Tools Needed:
- **no$psx** emulator (best MIPS debugger for PSX)
- Shadow Tower ISO
- Basic MIPS assembly knowledge

### Steps:

#### 1. Setup no$psx
```
1. Download no$psx (Windows): https://problemkaputt.de/psx.htm
2. Load Shadow Tower ISO
3. Enable debugger: Window > Show Debug Windows
```

#### 2. Find HP Address First (Like Approach 1)
```
no$psx has a built-in memory searcher:
1. Debug > Search Memory
2. Search for your HP value
3. Narrow down to exact address
```

#### 3. Set Memory Breakpoint
```
In debugger window:
1. Right-click in breakpoint list
2. Add Memory Breakpoint
3. Address: [player HP address]
4. Type: Write
5. Start game
```

#### 4. When Breakpoint Hits
```
The debugger pauses when enemy damages you.
You'll see:
- Current instruction address (PC register)
- MIPS assembly code
- Register values
- Call stack
```

#### 5. Example of What You'll See
```asm
801A5C20: lw    a0, 0x40(s0)      ; Load player HP
801A5C24: subu  a0, a0, v0        ; Subtract damage from HP
801A5C28: sw    a0, 0x40(s0)      ; Store new HP
801A5C2C: jr    ra                ; Return
```

#### 6. Trace Back to Find Damage Calculation
```
The 'v0' register contains the damage value.
Where did it come from?

Look backwards in code:
- Find where v0 was set
- Trace that back to its source
- Keep going until you find the calculation
```

#### 7. Find the Actual Formula
```
You'll eventually find code like:
lw    t0, 0x24(enemy_ptr)    ; Load enemy attack stat
lw    t1, 0x26(player_ptr)   ; Load player defense stat
subu  t2, t0, t1             ; damage = attack - defense
bnez  t2, skip_min           ; if damage > 0, skip
li    t2, 1                  ; else damage = 1 (minimum)
skip_min:
move  v0, t2                 ; return damage in v0
```

### What This Gives You:
- **Exact damage formula** in assembly code
- **Memory offsets** for attack/defense stats
- **Register usage** to understand data flow
- **Function calls** to understand code structure

---

## Approach 3: Cheat Engine (If You're Familiar With It)

### Tools Needed:
- **Cheat Engine** 
- **PSX Emulator** that Cheat Engine can attach to (ePSXe works well)

### Steps:

#### 1. Attach to Emulator Process
```
1. Start ePSXe with Shadow Tower
2. Open Cheat Engine
3. Attach to ePSXe.exe process
```

#### 2. Find Player HP
```
1. First scan: Exact value = [your current HP]
2. Get hit, HP changes
3. Next scan: Exact value = [new HP]
4. Repeat until 1 address found
```

#### 3. Find What Writes to HP
```
1. Right-click the HP address
2. "Find out what writes to this address"
3. Get hit by enemy
4. Cheat Engine shows the code that modified HP
```

#### 4. Analyze the Code
```
You'll see something like:
Address: 501A5C28
Instruction: mov [eax+40], ecx
Values: eax=801B2000, ecx=450

This tells you:
- Code location: 501A5C28 (in emulator's address space)
- What was written: 450 (new HP)
- Where it was written: [801B2000+40] (RAM location)
```

#### 5. Disassemble Around That Address
```
1. Right-click > "Show disassembler"
2. Look at surrounding code
3. Find where damage calculation happens
4. Trace back to find formula
```

---

## Approach 4: MIPS Disassembly with Ghidra (Advanced)

### Tools Needed:
- **Ghidra** (free, from NSA)
- Shadow Tower **ST.EXE** file (extract from ISO)
- **PSX loader for Ghidra** (available on GitHub)

### Steps:

#### 1. Extract ST.EXE from ISO
```bash
dumpsxiso st.bin -x extracted/
# ST.EXE is in extracted/ folder
```

#### 2. Setup Ghidra
```
1. Download Ghidra: https://ghidra-sre.org/
2. Install PSX loader plugin: https://github.com/lab313ru/ghidra_psx_ldr
3. Create new Ghidra project
4. Import ST.EXE
5. Select language: MIPS 32-bit little-endian
6. Analyze the file (auto-analysis)
```

#### 3. Find Damage Calculation Functions
```
Strategy 1 - Search for HP modifications:
1. If you know HP offset from runtime (e.g., 0x40), search for:
   - lw/sw instructions with offset 0x40
   - addiu/subu with that pattern

Strategy 2 - Look for floating-point math:
1. Damage calcs may use float multiplication
2. Search for: mul.s, div.s, add.s instructions

Strategy 3 - Find text strings:
1. Look for error messages or debug strings
2. "Damage", "Attack", "Defense" (if any)
3. Cross-reference to code
```

#### 4. Decompile and Analyze
```
1. Find a promising function
2. Right-click > Decompile
3. Ghidra shows C-like pseudocode
4. Analyze the logic
```

#### 5. Example Decompiled Code
```c
int calculate_damage(Entity *attacker, Entity *defender) {
    int attack = attacker->attack1;
    int defense = defender->defense;
    int str_bonus = attacker->str * 2;
    int damage = (attack + str_bonus) - defense;
    if (damage < 1) damage = 1;
    return damage;
}
```

### What This Gives You:
- **Complete understanding** of damage formula
- **All stat offsets** used in calculation
- **Full control** to create perfect patches

---

## Approach 5: Combined Runtime + Disassembly (BEST)

### Why This Is Best:
- **Runtime debugging** finds the exact function addresses
- **Disassembly** explains what those functions do
- Together = complete understanding

### Workflow:

#### 1. Use no$psx to Find Function Address
```
1. Set breakpoint on HP write
2. Get hit by enemy
3. Note PC address when breakpoint hits (e.g., 801A5C28)
4. Note call stack to find parent function (e.g., 801A5800)
```

#### 2. Open That Function in Ghidra
```
1. Convert runtime address to file address:
   Runtime: 801A5800
   File: 001A5800 (subtract 0x80000000)

2. In Ghidra, go to address 001A5800
3. Define as function if not auto-detected
4. Decompile
```

#### 3. Analyze in Ghidra
```
Now you can see:
- Full function logic
- All data accesses
- Called functions
- Return values
```

#### 4. Test Your Understanding
```
1. Based on Ghidra analysis, predict damage values
2. Test in-game to confirm
3. If wrong, debug more in runtime
4. Repeat until formula is confirmed
```

---

## What You Can Do With Desktop/Runtime Debugging

### 1. Find Exact Memory Locations
```
Player HP: 0x801A3C40
Enemy HP: 0x801B5000
Player Attack: 0x801A3C67
Player Defense: 0x801A3C69
```

### 2. Find Damage Calculation Code
```
Function at: 0x801A5800
Called from: 0x801B2340 (attack handler)
Returns to: 0x801B2348
```

### 3. Understand the Formula
```
From disassembly/debugging:
damage = (attacker.attack + attacker.str * 2) - defender.defense
if damage < 1: damage = 1
```

### 4. Create Patches

#### Method A: Memory Patches (Cheat Codes)
```
; Double all damage
Address: 801A5C20
Original: move v0, t2
New: sll v0, t2, 1  ; multiply by 2
```

#### Method B: ISO Patches (Permanent)
```
1. Convert runtime address to ISO offset
2. Use hex editor or this randomizer's changeset system
3. Modify the bytes
4. Rebuild ISO
```

---

## Recommended Workflow for You

### Phase 1: Easy Runtime Discovery (Start Here)
```
1. Use DuckStation or no$psx
2. Find player HP in memory
3. Set write breakpoint on HP
4. Get hit by enemy
5. Note the code address that modifies HP
```

### Phase 2: Understand the Code
```
6. Look at MIPS assembly at that address
7. Trace backwards to find damage calculation
8. Note all register values and memory loads
9. Document the formula
```

### Phase 3: Validate
```
10. Test predicted damage vs actual damage
11. If wrong, debug more
12. If right, you have the formula!
```

### Phase 4: Create Patches
```
13. Decide what you want to change
14. Use this randomizer to modify creature stats
    OR
15. Create assembly patches for the formula itself
```

---

## Specific Examples for Shadow Tower

### Example 1: Find Where Attack Stat Is Loaded
```
In no$psx debugger:
1. Find creature data structure address (from this randomizer's data_model.js)
2. Set read breakpoint on attack1 offset (0x07)
3. Let enemy attack you
4. Breakpoint hits - this is where attack is read
5. Now you know it's used in damage calculation
```

### Example 2: Modify Damage Formula
```
Original code at 801A5C10:
  subu v0, t0, t1    ; damage = attack - defense

To make defense less effective (half value):
  srl t1, t1, 1      ; defense = defense / 2
  subu v0, t0, t1    ; damage = attack - (defense/2)
```

---

## Tools Summary

| Tool | Difficulty | Best For | Cost |
|------|-----------|----------|------|
| DuckStation | Easy | Finding memory addresses | Free |
| ePSXe + Cheat Engine | Medium | Finding code that modifies memory | Free |
| no$psx | Medium | Full MIPS debugging | Free |
| Ghidra | Hard | Understanding full code logic | Free |
| Combined | Hard | Complete understanding | Free |

---

## Troubleshooting: Debugger Not Stopping

### Problem: Set breakpoint but debugger doesn't stop when HP changes

This is the most common issue. Here are solutions:

#### Issue 1: Wrong Memory Region (PSX Memory Mirroring)

PSX RAM is mirrored at multiple addresses:
- `0x00000000-0x001FFFFF` - Main RAM (2MB)
- `0x80000000-0x801FFFFF` - Cached mirror (use this)
- `0xA0000000-0xA01FFFFF` - Uncached mirror

**Solution:**
If you found HP at `0x001A3C40`, try these addresses instead:
- `0x801A3C40` (cached - most common)
- `0xA01A3C40` (uncached)

**In no$psx:**
```
1. When you find HP address, note the value
2. Try adding 0x80000000 to the address
3. Set breakpoint on the 0x80xxxxxx version
4. If that doesn't work, try 0xA0xxxxxx
```

#### Issue 2: Breakpoint Type Wrong

**no$psx breakpoint types:**
- **[R]** = Read (triggers when memory is read)
- **[W]** = Write (triggers when memory is written)
- **[C]** = Change (triggers when value changes)

For HP monitoring, you want **[W]** or **[C]**.

**Solution:**
```
1. Right-click breakpoint in list
2. Check it says [W] or [C], not [R]
3. If wrong, delete and recreate with correct type
```

#### Issue 3: Breakpoint Size Wrong

HP might be 8-bit, 16-bit, or 32-bit.

**Solution - Try all sizes:**
```
Common HP sizes:
- 16-bit (halfword): Most likely for HP values < 65535
- 32-bit (word): For games with very high HP
- 8-bit (byte): Unlikely but possible

In no$psx, set breakpoint width:
- Halfword (16-bit): Most emulators default to this
- Word (32-bit): If 16-bit doesn't work
```

#### Issue 4: no$psx Debugger Not Enabled

**Solution:**
```
1. Window > Show Debug Windows
2. Ensure "Break" checkbox is enabled in debugger window
3. Check "Break on Exceptions" is OFF (causes too many breaks)
4. Verify game is running, not paused
```

#### Issue 5: Game Uses DMA or Indirect Updates

Some games update HP through DMA transfers or unusual methods.

**Solution - Use execution breakpoint instead:**
```
Instead of memory breakpoint:
1. Find code that accesses HP first
2. Set execution breakpoint on that code
3. This always works

Steps:
1. Use Cheat Engine or memory viewer to find HP
2. In no$psx, use disassembler view
3. Search for instructions that access your HP address
4. Set breakpoint on that instruction (execution breakpoint)
```

#### Issue 6: Cached vs Uncached Access

Game might read from cached but write to uncached (or vice versa).

**Solution - Set breakpoints on both:**
```
Found HP at: 0x801A3C40

Set TWO breakpoints:
1. At 0x801A3C40 (cached)
2. At 0xA01A3C40 (uncached)

One of them will trigger.
```

#### Issue 7: Address Changes (Dynamic Allocation)

HP address might change when you restart or load save.

**Solution:**
```
1. Don't restart game between finding address and setting breakpoint
2. Use same play session
3. If you must restart:
   - Find HP address again
   - Update breakpoint address
   - Don't assume same address
```

### Step-by-Step Debugging If Breakpoint Doesn't Work

#### Alternative Method 1: Use Execution Breakpoint on Known Function

If you know approximate location of damage code:

```
1. Load game in no$psx
2. Go to debugger window
3. Set execution breakpoint at 0x80010000 (arbitrary start)
4. Run for a bit, see what code executes
5. Look for patterns (loops, function calls)
6. Narrow down to damage-related code
```

#### Alternative Method 2: Cheat Engine to Find Code

```
1. Use Cheat Engine on emulator process (ePSXe works well)
2. Find HP address
3. Right-click > "Find out what writes to this address"
4. Get hit by enemy
5. Cheat Engine shows the EXACT instruction that wrote to HP
6. Note the code address from Cheat Engine
7. Use that address in no$psx or Ghidra
```

#### Alternative Method 3: Logging Approach

If breakpoints aren't working at all:

```
In no$psx:
1. Window > TTY Debug Messages
2. Some games print debug info here
3. Look for damage-related messages
4. This gives clues about where damage code is

OR use memory view:
1. Window > Memory Editor
2. Go to your HP address
3. Watch it in real-time
4. When it changes, pause emulator manually (ESC)
5. Look at disassembly to see what just executed
```

### Quick Diagnostic Checklist

Run through this if breakpoint not stopping:

```
✓ Is game actually running (not paused)?
✓ Did I find the correct HP address (test by modifying it)?
✓ Did I use 0x80xxxxxx or 0xA0xxxxxx address format?
✓ Is breakpoint type [W] or [C], not [R]?
✓ Is "Break" enabled in debugger window?
✓ Did I try both cached (0x80xx) and uncached (0xA0xx) versions?
✓ Did HP actually change when I got hit?
✓ Am I getting hit hard enough to see HP drop?
```

### Example: Complete Working Setup in no$psx

```
1. Start no$psx, load Shadow Tower ISO
2. Window > Show Debug Windows
3. Start game, enter first area
4. Note HP: 500
5. Debug > Search Memory > Value: 500, Type: Halfword
6. Get hit by enemy, HP becomes 450
7. Search again: Value: 450
8. Found address: 0x001A3C40
9. Convert to cached: 0x801A3C40
10. In breakpoint list, right-click > Add Memory Breakpoint
11. Address: 801A3C40 (without 0x prefix)
12. Type: [W] Write
13. Size: Halfword
14. Enable: Checked
15. Click OK
16. Resume game (F5 or Run button)
17. Get hit by enemy
18. Debugger should pause showing assembly code
```

If above STILL doesn't work:

```
Try DuckStation instead:
1. Has better debugging tools
2. Built-in memory scanner
3. Easier breakpoint setup
4. Tools > Memory Scanner
5. Search for HP value
6. Set watch/breakpoint
7. More reliable than no$psx for beginners
```

---

## Next Steps

### What to do RIGHT NOW:
1. Download **no$psx** or **DuckStation**
2. Load Shadow Tower
3. Find your HP in memory (search, get hit, search again)
4. Set a write breakpoint on that address
5. Get hit by enemy
6. Look at the MIPS code that just executed
7. Share that code here - I can help analyze it

### What Info to Provide:
When you find the code, share:
- **PC address** (program counter when breakpoint hit)
- **Assembly code** (5-10 lines around that address)
- **Register values** (especially the one being written to HP)
- **Any function calls** you see

Then we can work together to:
- Understand the damage formula
- Find all relevant stat offsets
- Create patches to modify it

---

## Questions?

This is actual runtime debugging - no theory, just practical steps to find the damage calculation code in the running game.

Try the no$psx approach first - it's the most straightforward for PSX debugging.

Let me know what you find!
