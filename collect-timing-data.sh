#!/bin/bash

# Script to collect detailed timing data from randomizer runs
# Usage: ./collect-timing-data.sh [preset-name]
# If no preset specified, uses no-change.json

PRESET="${1:-no-change}"
ISO_PATH="./generated/st.bin"
PARAMS_FILE="./params/${PRESET}.json"
OUTPUT_FILE="./performance-data-${PRESET}-$(date +%Y%m%d-%H%M%S).txt"

echo "=== Shadow Tower Randomizer Timing Data Collection ===" | tee "$OUTPUT_FILE"
echo "" | tee -a "$OUTPUT_FILE"
echo "Preset: ${PRESET}" | tee -a "$OUTPUT_FILE"
echo "Date: $(date '+%Y-%m-%d %H:%M:%S')" | tee -a "$OUTPUT_FILE"
echo "Node Version: $(node --version)" | tee -a "$OUTPUT_FILE"
echo "System: $(uname -s) $(uname -m)" | tee -a "$OUTPUT_FILE"
echo "CPU Cores: $(nproc 2>/dev/null || sysctl -n hw.ncpu 2>/dev/null || echo 'unknown')" | tee -a "$OUTPUT_FILE"
echo "" | tee -a "$OUTPUT_FILE"

if [ ! -f "$ISO_PATH" ]; then
    echo "ERROR: ISO file not found at $ISO_PATH" | tee -a "$OUTPUT_FILE"
    exit 1
fi

if [ ! -f "$PARAMS_FILE" ]; then
    echo "ERROR: Params file not found at $PARAMS_FILE" | tee -a "$OUTPUT_FILE"
    exit 1
fi

echo "Running randomizer with $PARAMS_FILE..." | tee -a "$OUTPUT_FILE"
echo "================================================" | tee -a "$OUTPUT_FILE"
echo "" | tee -a "$OUTPUT_FILE"

# Run the randomizer and capture both stdout and stderr
npm run mod "$ISO_PATH" "$PARAMS_FILE" 2>&1 | tee -a "$OUTPUT_FILE"

echo "" | tee -a "$OUTPUT_FILE"
echo "================================================" | tee -a "$OUTPUT_FILE"
echo "Timing data saved to: $OUTPUT_FILE" | tee -a "$OUTPUT_FILE"
echo "" | tee -a "$OUTPUT_FILE"
echo "Next steps:" | tee -a "$OUTPUT_FILE"
echo "1. Review the timing breakdown above" | tee -a "$OUTPUT_FILE"
echo "2. Update PERFORMANCE_ANALYSIS.md with findings" | tee -a "$OUTPUT_FILE"
echo "3. Prioritize optimizations based on bottlenecks" | tee -a "$OUTPUT_FILE"
