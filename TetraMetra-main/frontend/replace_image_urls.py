import re
from pathlib import Path

# Files to update
files_to_update = [
    r"app/automated-guided-vehicle-manufacturers/page.js",
    r"app/gallery/page.js",
    r"app/manufacturing-operational-excellence-consulting/page.js",
]

# Read mapping from img.txt
mapping = {}
with open("img.txt", "r", encoding="utf-8") as f:
    for line in f:
        if '->' in line:
            old, new = line.strip().split('->')
            mapping[old.strip()] = new.strip()

# Sort keys by length descending to avoid partial replacements
sorted_keys = sorted(mapping.keys(), key=len, reverse=True)

for file_path in files_to_update:
    file = Path(file_path)
    with open(file, "r", encoding="utf-8") as f:
        content = f.read()
    original_content = content
    for old_url in sorted_keys:
        # Use re.escape to avoid regex issues
        content = re.sub(re.escape(old_url), mapping[old_url], content)
    if content != original_content:
        with open(file, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Updated: {file_path}")
    else:
        print(f"No changes needed: {file_path}") 