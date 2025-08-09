# Tandwiel Dev Installation Utility
# IMPORTANT: CHECK FOR ILLEGAL PATHS (DO NOT ALLOW ESCAPING MINECRAFT'S PATH)

import json
from pathlib import Path
from urllib.parse import unquote
import urllib.request
import sys
import shutil
from datetime import datetime

start = datetime.now().timestamp()

clear = True

if "--no-clear" in sys.argv:
    print("No clear mode! Not clearing mods/, resourcepacks/, or shaderpacks/ directories before starting!")
    clear = False
else:
    print("Clearing mods/, resourcepacks, shaderpacks/")
    if Path("mods/").exists():
        shutil.rmtree("mods/")
    if Path("resourcepacks/").exists():
        shutil.rmtree("resourcepacks/")
    if Path("shaderpacks/").exists():
        shutil.rmtree("shaderpacks/")

with open("modrinth.index.json", "r", encoding="utf-8") as f:
    data = json.load(f)

def contained(path: str):
    base = Path("./").resolve()
    target = (base / path).resolve()
    return base in target.parents or base == target

def download_to(url: str, path: str | Path):
    path = Path(path)
    path.parent.mkdir(parents=True, exist_ok=True)
    urllib.request.urlretrieve(url, path)

for file in data.get("files"):
    path = file.get("path")
    downloads = file.get("downloads")
    print("Downloading " + Path(path).name + " in " + str(Path(path).parent) + "...")
    print("From " + unquote(downloads[0]))
    if not contained(path):
        raise PermissionError("Not allowed to access outside of modpack directory!\nMalformed modrinth.index.json: path \'" + path + "\' is outside of modpack folder!")
    download_to(downloads[0], path)

end = datetime.now().timestamp()

ms = int(1000*(end-start))

print("All files downloaded in " + str(ms) + " ms")