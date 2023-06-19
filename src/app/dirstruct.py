import os

def save_folder_structure(folder_path, output_file):
    with open(output_file, 'w') as file:
        for root, dirs, files in os.walk(folder_path):
            level = root.replace(folder_path, '').count(os.sep)
            indent = '    ' * (level)
            file.write(f"{indent}{os.path.basename(root)}/\n")
            sub_indent = '    ' * (level + 1)
            for file_name in files:
                file.write(f"{sub_indent}{file_name}\n")

if __name__ == '__main__':
    current_folder = os.getcwd()  # Get the current working directory
    save_folder_structure(current_folder, 'folder_structure.txt')
