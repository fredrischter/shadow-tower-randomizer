#!/bin/bash

# Test script to validate equipment weight is reasonable and proportional to attributes
# Requirements:
# - Medium difficulty should have values close to original game
# - Weight should be proportional to item power (score)
# - Easy/hard modes can vary more but still within reasonable bounds

# Specify the folder containing readable.txt files
folderPath="./generated"

# Log start of the script
echo "Script started at $(date)"

# Create CSV file with header
outputFile="test_equipment_weight.csv"
echo "Preset,Difficulty,Status,Issues,AvgWeight,MaxWeight,AvgWeightToScoreRatio,ProblematicItems" > "$outputFile"

# Function to extract difficulty from params.json
get_difficulty() {
    local preset_dir="$1"
    local params_file="$preset_dir/spoilers/params.json"
    if [ -f "$params_file" ]; then
        grep -oP '"difficulty"\s*:\s*"\K[^"]+' "$params_file" 2>/dev/null || echo "unknown"
    else
        echo "unknown"
    fi
}

# Loop through each readable.txt file
find "$folderPath" -type f -name "readable.txt" | while read -r file; do
    # Extract preset folder name
    folderName="$(dirname "$(dirname "$file")")"
    presetName="$(basename "$folderName")"
    
    # Get difficulty setting
    difficulty=$(get_difficulty "$folderName")
    
    echo "Processing preset: $presetName (difficulty: $difficulty)"
    
    # Initialize counters and tracking
    result="OK"
    heavy_item_count=0
    high_ratio_count=0
    total_weight=0
    max_weight=0
    count=0
    
    # Parse the readable.txt file for item stats
    # Format: "New values ... score X ... weight Y ..."
    # We only care about "New values" lines which show final randomized stats
    while IFS= read -r line; do
        # Look for "New values" lines with weight and score information
        if echo "$line" | grep -q "New values"; then
            # Extract weight value (pattern: "weight" followed by number)
            weight=$(echo "$line" | grep -oP 'weight\s+\K\d+' | tail -1)
            
            # Extract score (pattern: "score" followed by number)  
            score=$(echo "$line" | grep -oP 'score\s+\K\d+' | head -1)
            
            # Get the previous line to extract item name
            item_name=$(echo "$prev_line" | grep -oP 'item_[a-z0-9_]+' | head -1)
            
            if [ -n "$weight" ] && [ "$weight" != "255" ]; then
                count=$((count + 1))
                total_weight=$((total_weight + weight))
                
                if [ "$weight" -gt "$max_weight" ]; then
                    max_weight=$weight
                fi
                
                # Check for unreasonably heavy items
                # Medium difficulty: weight should be < 40 for most items
                # Hard difficulty: weight can be higher but < 60  
                # Easy difficulty: weight should be < 30
                weight_threshold=40
                if [ "$difficulty" = "easy" ] || [ "$difficulty" = "extreme-easy" ]; then
                    weight_threshold=30
                elif [ "$difficulty" = "hard" ] || [ "$difficulty" = "very-hard" ] || [ "$difficulty" = "even-harder" ]; then
                    weight_threshold=60
                fi
                
                if [ "$weight" -gt "$weight_threshold" ]; then
                    result="FAIL"
                    heavy_item_count=$((heavy_item_count + 1))
                fi
                
                # Calculate weight-to-score ratio if score is available
                if [ -n "$score" ] && [ "$score" -gt 0 ]; then
                    # Check if ratio is too high (weight > score * 4)
                    # ratio > 40 means weight/score > 4
                    ratio=$((weight * 10 / score))
                    if [ "$ratio" -gt 40 ]; then
                        if [ "$result" != "FAIL" ]; then
                            result="WARNING"
                        fi
                        high_ratio_count=$((high_ratio_count + 1))
                    fi
                fi
            fi
        fi
        prev_line="$line"
    done < "$file"
    
    # Calculate averages
    if [ "$count" -gt 0 ]; then
        avg_weight=$((total_weight / count))
    else
        avg_weight=0
    fi
    
    # Append result to CSV file
    echo "$presetName,$difficulty,$result,$heavy_item_count,$max_weight,$avg_weight,$high_ratio_count" >> "$outputFile"
done

# Log end of the script
echo "Script finished at $(date)"

echo "Equipment weight validation results saved to $outputFile"
