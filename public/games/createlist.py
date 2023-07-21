import os
import json

folder_path = './dos'  # Replace with the actual folder path
output_file = './doslist.json'  # Replace with the desired output file path

file_list = os.listdir(folder_path)
flash_list = [file for file in file_list if file.endswith('.jsdos')]

with open(output_file, 'w') as f:
    json.dump(flash_list, f, indent=2)

print('List of items saved to:', output_file)
