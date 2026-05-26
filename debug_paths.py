# debug_paths.py
import os

print("Current directory:", os.getcwd())
print("\nChecking paths:")

ai_tools_path = 'projects/ai_tools'
print(f"\n1. Does '{ai_tools_path}' exist?", os.path.exists(ai_tools_path))

if os.path.exists(ai_tools_path):
    print(f"2. Contents of '{ai_tools_path}':")
    for item in os.listdir(ai_tools_path):
        print(f"   - {item}")
    
    print(f"\n3. Does index.html exist?", os.path.exists(f'{ai_tools_path}/index.html'))
    print(f"4. Does category.html exist?", os.path.exists(f'{ai_tools_path}/category.html'))
    print(f"5. Does js folder exist?", os.path.exists(f'{ai_tools_path}/js'))
    print(f"6. Does css folder exist?", os.path.exists(f'{ai_tools_path}/css'))
else:
    print(f"❌ Folder '{ai_tools_path}' not found!")