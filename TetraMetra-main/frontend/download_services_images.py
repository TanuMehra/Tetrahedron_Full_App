import re, os, urllib.parse, hashlib, requests

# Read the JS file
with open('lib/servicesData.js', 'r', encoding='utf-8') as f:
    data = f.read()

# Find all image URLs (http/https, common image extensions)
urls = set(re.findall(r'(https?://[^\s"\']+\.(?:png|jpe?g|webp|svg|gif))', data))

os.makedirs('public/images/servicesData', exist_ok=True)
mapping = {}

def safe_name(url):
    # Use the last part of the URL path, or a hash if not available
    n = os.path.basename(urllib.parse.urlparse(url).path)
    if not n:
        n = hashlib.md5(url.encode()).hexdigest() + '.img'
    return n

for url in urls:
    fn = safe_name(url)
    mapping[url] = fn
    p = os.path.join('public/images/servicesData', fn)
    try:
        r = requests.get(url, timeout=15)
        r.raise_for_status()
        with open(p, 'wb') as out:
            out.write(r.content)
        print(f"DOWNLOADED {url} -> {p}")
    except Exception as e:
        print(f"FAILED {url}: {e}")

# Save the mapping for replacement
with open('public/images/servicesData/_mapping.txt', 'w', encoding='utf-8') as f:
    for url, fn in mapping.items():
        f.write(f"{url} -> /images/servicesData/{fn}\n")
print("All done. See public/images/servicesData/_mapping.txt for replacements.")
