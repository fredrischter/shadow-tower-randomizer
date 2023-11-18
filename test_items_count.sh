#!/bin/bash

# Set the folder path
folder_path="generated"

# Define the item list
item_list=("item_10a_cune" "item_11c_healing_potion" "item_136_soul_pod_5_sp" "item_138_soul_pod_29_sp" "item_137_soul_pod_53_sp")

# Log start of the script
echo "Script started at $(date)"

# Output the result to a CSV file
output_file="test_item_counts.csv"
echo "File,${item_list[*]}" > "$output_file"

# Loop through each HTML file recursively
find "$folder_path" -type f -name '*.html' | while IFS= read -r file; do
    # Log start of processing for the current file
    echo "Processing file: $file"

    # Initialize counts for each item in the file
    declare -A file_item_counts
    for item in "${item_list[@]}"; do
        file_item_counts["$item"]=$(grep -o -i "$item" "$file" | wc -l)
    done

    # Log end of processing for the current file
    echo "Finished processing file: $file"

    # Append item counts for the file to the CSV
    echo -n "$file," >> "$output_file"
    for item in "${item_list[@]}"; do
        echo -n "${file_item_counts["$item"]}," >> "$output_file"
    done
    # Move to the next line for the next file
    echo ""  >> "$output_file"
done

# Log end of the script
echo "Script finished at $(date)"

echo "Item counts per file have been saved to $output_file."
