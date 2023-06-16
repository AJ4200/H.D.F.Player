import os
import json

folder_path = './flash'  # Replace with the actual folder path
output_file = './flashlist.json'  # Replace with the desired output file path

file_list = os.listdir(folder_path)
flash_list = [file for file in file_list if file.endswith('.swf')]

with open(output_file, 'w') as f:
    json.dump(flash_list, f, indent=2)

print('List of items saved to:', output_file)
