#!/bin/bash
# Task: Cache system - Example test script for batch testing presets
# Uses no-change preset as cache base since it's the fastest to extract

# Example script showing how to test all presets quickly using cache

set -e  # Exit on error

ISO_FILE="./generated/st.bin"
BASE_PRESET="params/no-change.json"
CACHE_DIR="generated/no-change/extracted"

echo "=============================================="
echo "Shadow Tower Randomizer - Batch Test Script"
echo "=============================================="
echo ""

# Check if ISO exists
if [ ! -f "$ISO_FILE" ]; then
    echo "ERROR: ISO file not found at $ISO_FILE"
    echo "Please place st.bin in the generated/ folder"
    exit 1
fi

# Step 1: Create cache if it doesn't exist
if [ ! -d "$CACHE_DIR" ]; then
    echo "Step 1: Creating cache (this will take ~75 seconds)..."
    npm run mod "$ISO_FILE" "$BASE_PRESET"
    echo "✓ Cache created at $CACHE_DIR"
else
    echo "Step 1: Using existing cache at $CACHE_DIR"
fi

echo ""
echo "Step 2: Testing all presets using cache..."
echo ""

# Counter for results
PASSED=0
FAILED=0
TOTAL=0

# Task: Cache system - Skip presets with numbers in name to speed up batch testing
# Test each preset in params/ folder (skip numbered variants)
for preset in params/*.json; do
    preset_name=$(basename "$preset" .json)
    
    # Skip presets with numbers in the name (variants like randomized-medium2, randomized-medium3, etc.)
    if [[ "$preset_name" =~ [0-9] ]]; then
        echo "Skipping numbered variant: $preset_name"
        continue
    fi
    
    TOTAL=$((TOTAL + 1))
    
    echo "----------------------------------------"
    echo "Testing preset: $preset_name"
    echo "----------------------------------------"
    
    # Run test - use node directly instead of npm run to avoid flag issues
    if node --max-old-space-size=8192 test_randomizer.js "$preset" --use-cache "$CACHE_DIR"; then
        PASSED=$((PASSED + 1))
        echo "✓ $preset_name passed"
    else
        FAILED=$((FAILED + 1))
        echo "✗ $preset_name failed"
    fi
    
    echo ""
done

# Print summary
echo "=============================================="
echo "Test Summary"
echo "=============================================="
echo "Total presets tested: $TOTAL"
echo "Passed: $PASSED"
echo "Failed: $FAILED"
echo ""

if [ $FAILED -eq 0 ]; then
    echo "✓ All tests passed!"
    exit 0
else
    echo "✗ Some tests failed"
    exit 1
fi
