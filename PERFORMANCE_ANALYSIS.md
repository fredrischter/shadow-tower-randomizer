# Performance Analysis and Investigation

## Quick Summary

**Problem:** The randomize step takes 91.74 seconds (51.9% of total processing time), but we don't know which operations within it are slow.

**Solution:** Added detailed timing instrumentation to track 12 substeps within the randomize process.

**How to Use:**
```bash
# Run data collection script (saves output to file)
./collect-timing-data.sh [preset-name]        # Linux/Mac
collect-timing-data.bat [preset-name]          # Windows

# Or just run the randomizer normally - timing appears in console
npm run mod "./generated/st.bin" "./params/no-change.json"
```

**What You Get:**
- Detailed breakdown of where time is spent in randomize step
- Percentage of time for each substep
- Millisecond precision timing

**Next Steps:**
1. Collect real timing data from your system
2. Identify actual bottlenecks (not just hypotheses)
3. Implement optimizations targeting the slowest substeps
4. Measure improvement

---

## Overview

This document analyzes the performance bottlenecks in the Shadow Tower Randomizer based on detailed timing instrumentation added to the codebase.

## Current Performance Profile

Based on the optimization work, the total processing time is approximately **176.82 seconds** with the following breakdown:

```
Total processing time: 176816ms (176.82s)

Step breakdown:
  dumpsxiso: 6109ms (6.11s) - 3.5%
  unpack: 24842ms (24.84s) - 14.0%
  randomize: 91736ms (91.74s) - 51.9%  ← BOTTLENECK
  change: 8982ms (8.98s) - 5.1%
  pack: 38911ms (38.91s) - 22.0%
  mkpsxiso: 6231ms (6.23s) - 3.5%
```

### Key Finding: Randomize Step is the Bottleneck

The **randomize step takes 91.74 seconds (51.9% of total time)**, making it the primary target for further optimization.

## Detailed Randomize Substep Analysis

With the new instrumentation in `randomize.js`, we can now see exactly where time is being spent within the randomize step:

### Expected Substep Breakdown

The randomize step performs these operations:

1. **Read T-files** - Loading binary game data files
2. **Seed setup** - Initializing random number generator
3. **Data model setup** - Parsing game structures from binary
4. **Map shuffling** - Randomizing area connections with walkability validation
5. **Custom door assignments** - Testing-specific door swaps (if enabled)
6. **Write map JSON files** - Saving map configuration
7. **Apply map to data model** - Updating binary data with map changes
8. **Item/creature randomization (operate)** - Main randomization logic
   - Item distribution
   - Creature randomization
   - Drop table modifications
   - Difficulty scaling
9. **Map HTML/Mermaid/Neo4j generation** - Creating visualization data structures
10. **Area loop (images + entity data)** - Generating PNG map images and reinjecting entity data
11. **Changeset generation** - Comparing original vs modified binary data
12. **Write changeset file** - Saving binary modifications to JSON

## How to Collect Detailed Timing Data

Run the randomizer with any preset to see the detailed timing breakdown:

```bash
# Run with a preset
npm run mod "./generated/st.bin" "./params/no-change.json"

# Look for these logs in the console output:
# [PERF] Read T-files: XXXXms (X.XXs)
# [PERF] Data model setup: XXXXms (X.XXs)
# ... etc ...

# At the end, you'll see:
# ========== RANDOMIZE SUBSTEP TIMING SUMMARY ==========
# Total randomize time: XXXXXms (XX.XXs)
#
# Substep breakdown:
#   Read T-files: XXXms (X.XXs) - X.X%
#   Data model setup: XXXms (X.XXs) - X.X%
#   ...
# ======================================================
```

The detailed timing is written to **stderr** (using `console.error`) so it appears in the console without interfering with the regular logs in `randomize.txt` and `readable.txt`.

### Example Output

When you run the randomizer, you'll see timing logs like this in the console:

```
Running npm run randomize "..." "..."
[PERF] Read T-files: 2345ms (2.35s)
[PERF] Seed setup: 12ms (0.01s)
[PERF] Data model setup: 15678ms (15.68s)
[PERF] Map shuffling: 4521ms (4.52s)
[PERF] Custom door assignments: 0ms (0.00s)
[PERF] Write map JSON files: 234ms (0.23s)
[PERF] Apply map to data model: 1567ms (1.57s)
[PERF] Item/creature randomization (operate): 28456ms (28.46s)
[PERF] Map HTML/Mermaid/Neo4j generation: 3421ms (3.42s)
[PERF] Area loop (images + entity data): 32109ms (32.11s)
[PERF] Changeset generation: 2987ms (2.99s)
[PERF] Write changeset file: 456ms (0.46s)

========== RANDOMIZE SUBSTEP TIMING SUMMARY ==========
Total randomize time: 91786ms (91.79s)

Substep breakdown:
  Read T-files: 2345ms (2.35s) - 2.6%
  Seed setup: 12ms (0.01s) - 0.0%
  Data model setup: 15678ms (15.68s) - 17.1%
  Map shuffling: 4521ms (4.52s) - 4.9%
  Custom door assignments: 0ms (0.00s) - 0.0%
  Write map JSON files: 234ms (0.23s) - 0.3%
  Apply map to data model: 1567ms (1.57s) - 1.7%
  Item/creature randomization (operate): 28456ms (28.46s) - 31.0%
  Map HTML/Mermaid/Neo4j generation: 3421ms (3.42s) - 3.7%
  Area loop (images + entity data): 32109ms (32.11s) - 35.0%
  Changeset generation: 2987ms (2.99s) - 3.3%
  Write changeset file: 456ms (0.46s) - 0.5%
======================================================
```

This example shows that the biggest bottlenecks would be:
1. **Area loop (35.0%)** - Generating PNG images and reinjecting entity data
2. **Item/creature randomization (31.0%)** - Main randomization logic
3. **Data model setup (17.1%)** - Parsing game data from binary files

## Likely Performance Bottlenecks (Hypotheses)

Based on the code structure, these operations are likely to be the most time-consuming:

### 1. Data Model Setup (High Priority)
- **Operation:** Parsing all game data structures from binary T-files
- **Expected Impact:** 15-30% of randomize time
- **Why it's slow:** 
  - Reads large binary files
  - Creates thousands of JavaScript objects
  - Parses complex nested structures
- **Optimization opportunities:**
  - Use lazy loading for areas not being modified
  - Cache parsed data structures
  - Use binary buffers instead of creating wrapper objects

### 2. Area Loop - Map Images (High Priority)
- **Operation:** Generating PNG images for each area's map
- **Expected Impact:** 20-40% of randomize time (when images enabled)
- **Why it's slow:**
  - Canvas library operations are CPU-intensive
  - Generates ~50+ PNG images
  - Each image requires rendering and encoding
- **Optimization opportunities:**
  - Already optimizable via `-toNotGenerateImages` flag
  - Consider generating thumbnails instead of full images
  - Use worker threads for parallel image generation
  - Generate images on-demand instead of upfront

### 3. Changeset Generation (Medium Priority)
- **Operation:** Comparing original vs modified binary data byte-by-byte
- **Expected Impact:** 10-20% of randomize time
- **Why it's slow:**
  - Compares millions of bytes
  - Creates large JSON structures
  - Nested loops over all T-file parts
- **Optimization opportunities:**
  - Track changes during modification instead of comparing at the end
  - Use binary diff algorithms
  - Only compare regions that were modified

### 4. Item/Creature Randomization - operate() (Medium Priority)
- **Operation:** Main randomization logic for items, creatures, and drops
- **Expected Impact:** 10-20% of randomize time
- **Why it's slow:**
  - Multiple passes over all areas/creatures/items
  - Complex randomization logic with many conditionals
  - Logging operations for each item/creature
- **Optimization opportunities:**
  - Reduce logging verbosity
  - Combine multiple passes into single pass
  - Optimize random number generation

### 5. Map Shuffling (Low-Medium Priority)
- **Operation:** Randomizing area connections with walkability validation
- **Expected Impact:** 5-15% of randomize time
- **Why it's slow:**
  - May require multiple retries to find valid map
  - Walkability validation is recursive
  - Creates deep copies of map structures
- **Optimization opportunities:**
  - Better heuristics to avoid invalid maps
  - Incremental validation instead of full validation
  - Reduce retry attempts

## Optimization Recommendations

### Phase 1: Measurement (Current Task)
1. ✅ Add detailed timing instrumentation to randomize.js
2. 🔄 Collect timing data from real runs
3. 🔄 Identify which substeps take the most time
4. 🔄 Document findings in this file

### Phase 2: Quick Wins
Based on measured data, implement these optimizations:

1. **If "Area loop - Map Images" is the bottleneck:**
   - Document the `-toNotGenerateImages` flag more prominently
   - Consider making it the default for automated runs
   - Generate images asynchronously after ISO is built

2. **If "Data Model Setup" is the bottleneck:**
   - Implement lazy loading for areas
   - Only parse areas that will be modified
   - Cache parsed structures between runs

3. **If "Changeset Generation" is the bottleneck:**
   - Track changes during modification instead of comparing
   - Use Set/Map for changed offsets instead of comparing all bytes
   - Only serialize changed files to changeset

### Phase 3: Major Optimizations
1. **Worker Threads for Image Generation:**
   - Generate map images in parallel using worker threads
   - Expected speedup: 50-70% reduction in image generation time

2. **Incremental Binary Modification:**
   - Track changes in real-time instead of comparing at the end
   - Avoid creating deep copies of binary data
   - Expected speedup: 30-50% reduction in changeset generation time

3. **Selective Parsing:**
   - Only parse T-file parts that will be modified
   - Lazy load areas on-demand
   - Expected speedup: 20-40% reduction in data model setup time

4. **Reduced Logging:**
   - Make verbose logging optional
   - Only log important changes, not every modification
   - Expected speedup: 5-10% reduction in overall randomize time

### Phase 4: Advanced Optimizations
1. **Native Binary Operations:**
   - Use native addons for binary manipulation
   - WASM for CPU-intensive operations
   - Expected speedup: 20-30% reduction in randomize time

2. **Caching System:**
   - Cache parsed data model between runs
   - Invalidate cache only when base game changes
   - Expected speedup: 40-60% reduction on subsequent runs

3. **Streaming Processing:**
   - Process T-files in streaming mode instead of loading entirely
   - Reduce memory footprint
   - Expected speedup: 10-20% improvement

## Next Steps

1. **Collect Real Timing Data:**
   - Run randomizer with different presets
   - Record the detailed substep timing for each
   - Identify which substeps consistently take the most time

2. **Update This Document:**
   - Replace hypotheses with actual measured data
   - Prioritize optimizations based on real bottlenecks
   - Create specific optimization tasks

3. **Implement Optimizations:**
   - Start with quick wins (low effort, high impact)
   - Measure impact of each optimization
   - Iterate based on results

## Measurement Template

When collecting timing data, use this template:

```
=== Timing Run: [Preset Name] ===
Date: YYYY-MM-DD
Node Version: vX.X.X
System: [OS, CPU cores, RAM]

Overall Timing:
  Total: XXXXXms (XXX.XXs)
  - dumpsxiso: XXXXms (XX.XXs) - X.X%
  - unpack: XXXXms (XX.XXs) - X.X%
  - randomize: XXXXms (XX.XXs) - X.X%
  - change: XXXXms (XX.XXs) - X.X%
  - pack: XXXXms (XX.XXs) - X.X%
  - mkpsxiso: XXXXms (XX.XXs) - X.X%

Randomize Substeps:
  - Read T-files: XXXXms (XX.XXs) - X.X%
  - Data model setup: XXXXms (XX.XXs) - X.X%
  - Map shuffling: XXXXms (XX.XXs) - X.X%
  - Apply map: XXXXms (XX.XXs) - X.X%
  - operate(): XXXXms (XX.XXs) - X.X%
  - Map HTML generation: XXXXms (XX.XXs) - X.X%
  - Area loop: XXXXms (XX.XXs) - X.X%
  - Changeset generation: XXXXms (XX.XXs) - X.X%
  - Write files: XXXXms (XX.XXs) - X.X%

Findings:
- [Biggest bottleneck]
- [Second bottleneck]
- [Observations]

Recommendations:
- [Optimization 1]
- [Optimization 2]
```

## Example Analysis (Template)

Once data is collected, fill in this section:

### Preset: no-change
- **Bottleneck:** [e.g., "Area loop takes 35s (38% of randomize time)"]
- **Cause:** [e.g., "Generating PNG images for 52 areas"]
- **Recommendation:** [e.g., "Skip image generation by default, use -toNotGenerateImages"]

### Preset: randomized-medium
- **Bottleneck:** [e.g., "operate() takes 28s (30% of randomize time)"]
- **Cause:** [e.g., "Multiple passes over all creatures/items with verbose logging"]
- **Recommendation:** [e.g., "Reduce logging verbosity, combine passes"]

## Conclusion

The detailed timing instrumentation added to `randomize.js` provides visibility into the performance bottlenecks within the slowest step of the randomizer. By measuring real timing data and implementing targeted optimizations, we can significantly reduce the 91.74 second randomize time.

The next step is to **collect real timing data** from actual runs and use it to prioritize optimization work.
