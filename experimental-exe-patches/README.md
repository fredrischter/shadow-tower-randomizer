# 20 Experimental EXE Patches for Creature Speed Testing

This folder contains 20 different aggressive experimental patches to ST.EXE, each trying a different approach to modify creature speed.

## How to Test

Replace `iso-dump/ST.EXE` with one of these experimental files, then build the ISO:

```bash
# Example: Test experiment 03
cp experimental-exe-patches/ST-experiment-03.EXE iso-dump/ST.EXE
npm run mod "./path/to/st.bin" "./params/no-change.json"
```

Test the generated ISO in a PSX emulator and observe creature behavior.

---

## Experiments

### Experiment 01: Double all small constants (1-30)
**Changes:** 5571 patches  
**Approach:** Makes creatures SLOWER by doubling animation delays  
**Target:** MIPS immediate loads with values 1-30  
**Useful for:** Testing if delays control speed (opposite direction)

### Experiment 02: Halve all small constants (2-60)
**Changes:** 5126 patches  
**Approach:** Makes creatures FASTER by halving delays  
**Target:** All delay constants  
**Useful for:** Broad speed increase

### Experiment 03: Set all delay constants to 1 (fastest)
**Changes:** 3264 patches  
**Approach:** EXTREME speed - minimum possible delays  
**Target:** Common delay values (2,3,4,5,6,8,10,12,16,20,24,30,60)  
**Useful for:** Testing maximum speed impact

### Experiment 04: Zero all shift right amounts (no division)
**Changes:** 425 patches  
**Approach:** Removes division from speed calculations  
**Target:** SRL (shift right logical) instructions  
**Useful for:** Testing if shifts control movement speed

### Experiment 05: Triple all velocity constants
**Changes:** 2362 patches  
**Approach:** Makes creatures move 3x faster  
**Target:** Fixed-point velocity values (0x80, 0x100, 0x180, etc.)  
**Useful for:** Testing velocity-based movement

### Experiment 06: Halve bytes in first 64KB range
**Changes:** 3926 patches  
**Approach:** Targets code section aggressively  
**Target:** Every 4th byte in first 64KB  
**Useful for:** Testing if speed code is in early EXE

### Experiment 07: Set all shifts to minimum (1)
**Changes:** 2343 patches  
**Approach:** Minimal division for speed calculations  
**Target:** SRL and SRA shift instructions  
**Useful for:** Testing shift-based speed control

### Experiment 08: Halve constants in branch delay slots
**Changes:** 357 patches  
**Approach:** Targets timing-critical code paths  
**Target:** Constants loaded after branches  
**Useful for:** Testing branch-dependent speed logic

### Experiment 09: Replace multiply with add (faster math)
**Changes:** 997 patches  
**Approach:** Changes multiplication to addition (faster)  
**Target:** MULT/MULTU instructions  
**Useful for:** Testing if multiply operations affect speed  
**⚠️ WARNING:** May cause crashes or glitches

### Experiment 10: Round constants to powers of 2
**Changes:** 2977 patches  
**Approach:** Optimize for bit shift operations  
**Target:** Constants rounded to 1, 2, 4, 8, 16, 32  
**Useful for:** Testing optimized delay values

### Experiment 11: Halve common byte values (2→1, 3→1, 4→2)
**Changes:** 37404 patches  
**Approach:** VERY AGGRESSIVE - modifies many bytes  
**Target:** Raw byte values throughout EXE  
**Useful for:** Maximum coverage test  
**⚠️ WARNING:** High risk of crashes

### Experiment 12: Set all small constants (1-120) to 1
**Changes:** 7985 patches  
**Approach:** EXTREME - eliminates most delays  
**Target:** Wide range of constants  
**Useful for:** Testing maximum speed potential  
**⚠️ WARNING:** May be unstable

### Experiment 13: Invert shift direction (SRL→SLL)
**Changes:** 441 patches  
**Approach:** Changes division to multiplication  
**Target:** Shift right → Shift left  
**Useful for:** Testing inverse speed relationships  
**⚠️ WARNING:** May cause unexpected behavior

### Experiment 14: Halve LUI immediate values
**Changes:** 1014 patches  
**Approach:** Modifies upper memory addresses  
**Target:** Load Upper Immediate instructions  
**Useful for:** Testing address-based speed control

### Experiment 15: Zero specific delay constants
**Changes:** 2567 patches  
**Approach:** Removes specific frame delays  
**Target:** Values like 8, 10, 12, 16, 20, 24, 30, 32, 40, 48, 60  
**Useful for:** Testing specific delay thresholds

### Experiment 16: Set first 32KB constants to 1
**Changes:** 265 patches  
**Approach:** Aggressive targeting of early code  
**Target:** All constants in first 32KB  
**Useful for:** Testing if speed code is in specific range

### Experiment 17: Reduce comparison thresholds
**Changes:** 484 patches  
**Approach:** Makes conditionals trigger earlier  
**Target:** SLTI/SLTIU comparison instructions  
**Useful for:** Testing threshold-based speed logic

### Experiment 18: Divide delays by 10 (extreme speed)
**Changes:** 6412 patches  
**Approach:** 10x speed increase attempt  
**Target:** All delays 10-600  
**Useful for:** Testing extreme speed modification  
**⚠️ WARNING:** Likely unstable

### Experiment 19: Quarter delays in 0x10000-0x20000 range
**Changes:** 1018 patches  
**Approach:** Targets specific code region  
**Target:** Memory range 0x10000-0x20000  
**Useful for:** Testing regional speed code

### Experiment 20: Quarter only large delays (16-60)
**Changes:** 2668 patches  
**Approach:** Conservative - only modifies larger delays  
**Target:** Delays 16-60 only  
**Useful for:** Testing safe speed increase

---

## Testing Strategy

### Phase 1: Safe Experiments
Test these first (lower risk):
- Experiment 02: Halve delays
- Experiment 03: Set delays to 1
- Experiment 20: Quarter large delays
- Experiment 05: Triple velocities

### Phase 2: Moderate Risk
- Experiment 07: Minimize shifts
- Experiment 10: Powers of 2
- Experiment 15: Zero specific delays
- Experiment 18: Divide by 10

### Phase 3: High Risk (may crash)
- Experiment 09: Replace multiply
- Experiment 11: Aggressive byte changes
- Experiment 12: All to 1
- Experiment 13: Invert shifts

### Phase 4: Experimental
- Experiment 01: Double (slower - control test)
- Experiment 04: Zero shifts
- Experiment 06: First 64KB
- Experiment 08: Branch delays
- Experiment 14: LUI values
- Experiment 16: First 32KB
- Experiment 17: Comparisons
- Experiment 19: Specific range

## What to Look For

When testing in emulator:

**Speed Changes:**
- Do creatures move faster/slower?
- Do animations play faster/slower?
- Do attacks execute faster/slower?

**Side Effects:**
- Game crashes?
- Graphical glitches?
- Audio issues?
- Incorrect behavior?

**Report Findings:**
For each experiment that has an effect:
1. What changed? (movement, attacks, animations, etc.)
2. How much? (estimate speed difference)
3. Any problems? (crashes, glitches)

---

## Technical Details

### MIPS Assembly Patterns Modified

**Immediate Loads (addiu/li):**
```asm
addiu $t0, $zero, [value]  ; Load constant
```

**Shifts (SRL/SLL):**
```asm
srl $t1, $t0, [amount]     ; Shift right (divide)
sll $t1, $t0, [amount]     ; Shift left (multiply)
```

**Upper Immediate (LUI):**
```asm
lui $t0, [value]           ; Load upper 16 bits
```

**Comparisons (SLTI):**
```asm
slti $t0, $t1, [value]     ; Set if less than
```

### Changes Applied

Each experiment modifies different instruction patterns or byte ranges to test various hypotheses about where speed control code might be.

---

## Generated By

`generate_experiments.js` - Automated experimental patch generator

Each experiment is a complete modified ST.EXE file ready for testing.
