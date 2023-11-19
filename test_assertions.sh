#!/bin/bash

# Define the item list
itemsList=("Guarantee poison vaccine - Achieved poison vaccine requirement" "Fiery Key / Flaming Key - Skipping Damned Angel" "Fiery Key / Flaming Key - Skipping Ebony Knight")

# Specify the folder containing input files
folderPath="./generated"

# Log start of the script
echo "Script started at $(date)"

# Create CSV file with header
outputFile="test_assertions.csv"
echo "Preset,Status,MissingItems" > "$outputFile"

# Loop through each input file
find "$folderPath" -type f -name "*readable.txt" | while read -r file; do
    # Extract immediate folder name without the full path
    folderName="$(dirname "$file")"

    # Initialize result and missingItems variables
    result="OK"  # Assume all items are present
    missingItems=""

    # Loop through each string in itemsList
    for item in "${itemsList[@]}"; do
        # Check if the string is missing in the file
        if ! grep -q "$item" "$file"; then
            result="MISSING"  # Set to MISSING if any item is missing
            missingItems+="$item, "  # Append missing item to the list
        fi
    done

    # Remove trailing comma and space from missingItems
    missingItems="${missingItems%, }"

    # Append result, missingItems, and folderName to CSV file
    echo "$folderName,$result,$missingItems" >> "$outputFile"
done

# Log end of the script
echo "Script finished at $(date)"

echo "Assertions have been saved to $output_file."