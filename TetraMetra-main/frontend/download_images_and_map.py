import os
import re
import requests
from pathlib import Path

# List of files to scan
files_to_scan = [
    r"app/automated-guided-vehicle-manufacturers/page.js",
    r"app/gallery/page.js",
    r"app/manufacturing-operational-excellence-consulting/page.js",
]

# Directory to save images
images_dir = Path("public/images")
images_dir.mkdir(parents=True, exist_ok=True)

# Output mapping file
mapping_file = "img.txt"

# Regex to find any URL containing 'www.tetrahedron.in/wp-content'
img_url_pattern = re.compile(r'(https?://[^"\'\s)]+www\.tetrahedron\.in/wp-content[^"\'\s)]+)')

# To avoid duplicate downloads
downloaded = {}

def extract_real_url(url):
    """
    If the URL is a proxy (e.g., shortpixel.ai), extract the real image URL after the last 'http' occurrence.
    Otherwise, return the URL as is.
    """
    # Find the last occurrence of 'http' that starts the real image URL
    idx = url.rfind('https://www.tetrahedron.in/wp-content')
    if idx != -1:
        return url[idx:]
    return url

with open(mapping_file, "w", encoding="utf-8") as mapf:
    for file_path in files_to_scan:
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()
            matches = img_url_pattern.findall(content)
            for url in matches:
                real_url = extract_real_url(url)
                filename = real_url.split("/")[-1].split("?")[0]
                local_path = images_dir / filename
                rel_path = f"/images/{filename}"
                # Download if not already present
                if not local_path.exists():
                    try:
                        resp = requests.get(real_url, timeout=15)
                        resp.raise_for_status()
                        with open(local_path, "wb") as imgf:
                            imgf.write(resp.content)
                        print(f"Downloaded: {real_url} -> {rel_path}")
                    except Exception as e:
                        print(f"Failed to download {real_url}: {e}")
                else:
                    print(f"Exists: {real_url} -> {rel_path}")
                # Write both mappings: original URL and real image URL
                mapf.write(f"{url} -> {rel_path}\n")
                if url != real_url:
                    mapf.write(f"{real_url} -> {rel_path}\n")
                downloaded[url] = rel_path
                downloaded[real_url] = rel_path

print(f"Done. Mapping written to {mapping_file}") 