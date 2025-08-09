# Tandwiel Packaging Utility

import shutil
import os
import sys
import stat
import json
import time
import math
from datetime import datetime

start = datetime.now().timestamp()

dev = False
delete = True

if "--dev" in sys.argv:
    print("Running packing utility in developer mode.")
    dev = True
else:
    print("Running packing utility in production mode.")
    
if "--dontdelete" in sys.argv:
    print("Do not delete mode enabled. Temporary files will not be deleted.")
    delete = False

def rmwriteableretry(func, path, exc_info):
    os.chmod(path, stat.S_IWRITE)
    func(path)

# Git has some issues trying to be deleted
if os.path.exists("packdev/.packdev/temp/"):
    shutil.rmtree("packdev/.packdev/temp/", onerror=rmwriteableretry)

def copyfolderoverwrite(src, dst, rmwriteable=False):
    if os.path.exists(dst):
        if rmwriteable:
            shutil.rmtree(dst, onerror=rmwriteableretry)
        else:
            shutil.rmtree(dst)
    shutil.copytree(src, dst, ignore=shutil.ignore_patterns(".packdev", "probe.code-snippets", "probe-settings.json", "oculus.properties", "indigo-renderer.properties"))

devdir = "packdev/.packdev/"
builddir = devdir + "temp/build/"

os.makedirs(builddir + "overrides", exist_ok=True)
os.makedirs(devdir + "builds", exist_ok=True)

# Copy prod files

shutil.copy("modrinth.index.json", builddir + "modrinth.index.json")
shutil.copy("LICENSE", builddir + "overrides/LICENSE")

copyfolderoverwrite("config", builddir + "overrides/config")
copyfolderoverwrite("kubejs", builddir + "overrides/kubejs")

# Copy dev files (if enabled)

if dev:
    shutil.copy("modrinth.index.json", builddir + "overrides/modrinth.index.json")
    shutil.copy("README.md", builddir + "overrides/README.md")
    
    shutil.copy(".gitignore", builddir + "overrides/.gitignore")
    # Git has some issues trying to be deleted
    copyfolderoverwrite(".git", builddir + "overrides/.git", rmwriteable=True)
    
    copyfolderoverwrite(".vscode", builddir + "overrides/.vscode")
    copyfolderoverwrite("packdev", builddir + "overrides/packdev")
    
    copyfolderoverwrite("gallery", builddir + "overrides/gallery")

filename = "builtzip_renameme"
zippath = devdir + "builds/" + filename

if os.path.exists(devdir + "temp/builtzip.zip"):
    os.remove(devdir + "temp/builtzip.zip")

print("Packing...")
shutil.make_archive(devdir + "temp/builtzip", "zip", builddir)

with open("modrinth.index.json", "r", encoding="utf-8") as f:
    data = json.load(f)

name = data.get("name")
versionId = data.get("versionId")

devadd = ""

if dev:
    devadd = "-dev"
    
dest = devdir + "builds/" + name + "-" + versionId + devadd

if os.path.exists(dest + ".mrpack"):
    # Add the current unix time to the file name to prevent name conflicts but still save correctly
    t = str(math.floor(time.time()))
    print("Destination file [" + dest + ".mrpack] already exists. Packaging file in " + dest + "-" + t + ".mrpack")
    dest = dest + "-" + t

dest = dest + ".mrpack"

os.rename(devdir + "temp/builtzip.zip", dest)
print("Packed modpack to: " + dest)

if delete:
    print("Deleting temporary files...")
    if os.path.exists("packdev/.packdev/temp/"):
        shutil.rmtree("packdev/.packdev/temp/", onerror=rmwriteableretry)
    else:
        print("Unable to delete temporary files: Temporary files do not exist. This is concerning.")

end = datetime.now().timestamp()

ms = int(1000*(end-start))

print("Packaged to " + dest + " in " + str(ms) + " ms")