# Tandwiel Packaging Utility

import shutil
import os
import sys
import stat
import json

dev = False

if "--dev" in sys.argv:
    print("Running packing utility in developer mode.")
    dev = True
else:
    print("Running packing utility in production mode.")

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
    shutil.copytree(src, dst, ignore=shutil.ignore_patterns(".packdev"))

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

filename = "builtzip_renameme"
zippath = devdir + "builds/" + filename

if os.path.exists(devdir + "temp/builtzip.zip"):
    os.remove(devdir + "temp/builtzip.zip")
shutil.make_archive(devdir + "temp/builtzip", "zip", builddir)

with open("modrinth.index.json", "r", encoding="utf-8") as f:
    data = json.load(f)

name = data.get("name")
versionId = data.get("versionId")

devadd = ""

if dev:
    devadd = "-dev"

os.rename(devdir + "temp/builtzip.zip", devdir + "builds/" + name + "-" + versionId + devadd)