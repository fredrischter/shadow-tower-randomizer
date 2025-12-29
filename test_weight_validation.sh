#!/bin/bash

# Test script to validate equipment weight is proportional to stats
# Issue: Too heavy weapons - weight should be reasonable relative to item power

# Specify the folder containing readable.txt files
folderPath="./generated"

# Specify the output CSV file
outputFile="test_weight_validation.csv"

# Create CSV file with header
echo "Preset,Status,OverweightItems" > "$outputFile"

# Maximum allowed weight-to-score ratio
# For reference:
# - item_0_short_sword: weight=11, score≈150 (ratio≈0.073)
# - item_31_blood_sword: weight=44, score≈900 (ratio≈0.049)
# - item_76_god_plate: weight=80, score≈500 (ratio≈0.16)
# A reasonable maximum ratio is 0.25 (weight should not exceed 25% of total score)
MAX_WEIGHT_TO_SCORE_RATIO=0.25

# Loop through each readable.txt file
find "$folderPath" -type f -name "readable.txt" | while read -r file; do
    # Extract folder name
    folderName="$(dirname "$file")"
    
    # Initialize result variables
    result="OK"
    overweightItems=""
    
    # Parse readable.txt for item stats
    # Format: "item_name ... weight X ... score Y"
    # We need to extract both weight and score for each item
    
    # Use awk to parse the file and check weight-to-score ratios
    # This is a simplified check - looks for obvious problems
    # We'll look for lines with "weight" and extract the value
    
    # For now, check if any weight value exceeds 100 (unreasonably heavy)
    # and if medium difficulty, check if any basic weapons are > 50
    if grep -qE "weight [0-9]{3,}" "$file"; then
        # Found weights with 3+ digits (>99)
        overweightItems=$(grep -oE "item_[a-z0-9_]+ .* weight [0-9]{3,}" "$file" | head -5)
        if [ ! -z "$overweightItems" ]; then
            result="OVERWEIGHT"
        fi
    fi
    
    # Check for specific problem items mentioned in issue
    if grep -qE "item_(0|1|2|3|4|5)_[a-z_]+ .* weight (5[0-9]|[6-9][0-9]|[1-9][0-9]{2,})" "$file"; then
        # Basic swords with weight > 50
        result="OVERWEIGHT"
        overweightItems+=" BASIC_WEAPON_TOO_HEAVY"
    fi
    
    # Append result to CSV file
    echo "$folderName,$result,\"$overweightItems\"" >> "$outputFile"
done

echo "Weight validation results saved to $outputFile"
