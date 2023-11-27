#!/bin/bash

# Define the word list
word_list=("ERROR" "memory crime")

# Specify the folder containing input files
folderPath=""

# Log start of the script
echo "Script started at $(date)"

# Output the result to a CSV file
output_file="test_failures.csv"

echo -e "" > "$output_file"

# Loop through each word in the word list
for word in "${word_list[@]}"; do
    # Log start of processing for the current word
    echo "Verifying word: $word"

    find $folder_path -type f -name '*.txt' -exec grep -H "$word" {} +

    # Search for the word in any .txt file in the folder
    grep_result=$(find $folder_path -type f -name '*.txt' -exec grep -H "$word" {} +)

    if [ -n "$grep_result" ]; then
        # If not empty, assign the result to variable found_string
        echo "Result for $word: Found problems" >> "$output_file"
        echo "$grep_result" >> "$output_file"
    else
        echo -e "\nResult for $word: Didn't find failures." >> "$output_file"
    fi

    # Log end of processing for the current word
    echo "Finished verifying word: $word"
done

# Log end of the script
echo "Script finished at $(date)"

echo "Word verification status has been saved to $output_file."
