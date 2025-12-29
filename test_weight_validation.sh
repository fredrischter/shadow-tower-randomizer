#!/bin/bash

# Test script to validate equipment weight is proportional to stats
# Issue: Too heavy weapons - weight should be reasonable relative to item power

# Specify the folder containing readable.txt files
folderPath="./generated"

# Specify the output CSV file
outputFile="test_weight_validation.csv"

# Create CSV file with header
echo "Preset,Difficulty,Status,MaxWeight,MaxWeightItem,OverweightCount,Details" > "$outputFile"

# Maximum allowed weight values by difficulty
# These are based on the max score in game (~2000 for best items)
# Medium: max_weight = score * 0.3 ≈ 600 (but capped at 255)
# Easy: max_weight = score * 0.15 ≈ 300 (lighter items)
# Hard: max_weight = score * 0.39 ≈ 780 (but capped at 255)

# Function to determine difficulty from folder name
get_difficulty() {
    local folder="$1"
    if [[ "$folder" == *"extreme-easy"* ]]; then
        echo "extreme-easy"
    elif [[ "$folder" == *"easy"* ]]; then
        echo "easy"
    elif [[ "$folder" == *"even-harder"* ]]; then
        echo "even-harder"
    elif [[ "$folder" == *"very-hard"* ]]; then
        echo "very-hard"
    elif [[ "$folder" == *"hard"* ]]; then
        echo "hard"
    elif [[ "$folder" == *"medium"* ]]; then
        echo "medium"
    else
        echo "unknown"
    fi
}

# Loop through each readable.txt file
find "$folderPath" -type f -name "readable.txt" | while read -r file; do
    # Extract folder name
    folderName="$(dirname "$file")"
    baseName="$(basename "$folderName")"
    
    # Determine difficulty
    difficulty=$(get_difficulty "$baseName")
    
    # Initialize result variables
    result="OK"
    maxWeight=0
    maxWeightItem=""
    overweightCount=0
    details=""
    
    # Parse the file for item weights
    # Look for lines with "weight" keyword and extract values
    # Format in readable.txt: "... weight: XX ..."
    
    while IFS= read -r line; do
        if [[ "$line" =~ weight.*[[:space:]]([0-9]+) ]]; then
            weight="${BASH_REMATCH[1]}"
            
            # Track maximum weight
            if [ "$weight" -gt "$maxWeight" ]; then
                maxWeight="$weight"
                # Try to extract item name from the line
                if [[ "$line" =~ (item_[a-z0-9_]+) ]]; then
                    maxWeightItem="${BASH_REMATCH[1]}"
                fi
            fi
            
            # Check for unreasonably heavy items based on difficulty
            case "$difficulty" in
                "extreme-easy"|"easy")
                    # Easy modes should have lighter items (max ~100 for endgame)
                    if [ "$weight" -gt 100 ]; then
                        ((overweightCount++))
                        if [ -z "$details" ]; then
                            details="weight>100"
                        fi
                    fi
                    ;;
                "medium")
                    # Medium should have reasonable weights (max ~150 for endgame)
                    if [ "$weight" -gt 150 ]; then
                        ((overweightCount++))
                        if [ -z "$details" ]; then
                            details="weight>150"
                        fi
                    fi
                    ;;
                "hard"|"very-hard"|"even-harder")
                    # Hard modes can be heavier but not excessive (max ~200)
                    if [ "$weight" -gt 200 ]; then
                        ((overweightCount++))
                        if [ -z "$details" ]; then
                            details="weight>200"
                        fi
                    fi
                    ;;
            esac
        fi
    done < "$file"
    
    # Determine overall result
    if [ "$overweightCount" -gt 0 ]; then
        result="FAIL"
    elif [ "$maxWeight" -eq 0 ]; then
        result="NO_DATA"
    fi
    
    # Append result to CSV file
    echo "$baseName,$difficulty,$result,$maxWeight,$maxWeightItem,$overweightCount,\"$details\"" >> "$outputFile"
done

echo "Weight validation results saved to $outputFile"

# Print summary
echo ""
echo "=== Test Summary ==="
if [ -f "$outputFile" ]; then
    totalTests=$(wc -l < "$outputFile")
    totalTests=$((totalTests - 1))  # Subtract header
    
    # Count failed tests safely
    if grep -q ",FAIL," "$outputFile" 2>/dev/null; then
        failedTests=$(grep -c ",FAIL," "$outputFile")
    else
        failedTests=0
    fi
    
    passedTests=$((totalTests - failedTests))
    
    echo "Total presets tested: $totalTests"
    echo "Passed: $passedTests"
    echo "Failed: $failedTests"
    
    if [ $failedTests -gt 0 ]; then
        echo ""
        echo "Failed presets:"
        grep ",FAIL," "$outputFile" | cut -d',' -f1
    fi
fi
