![Tandwiel Title](https://github.com/WhyNotDogie/tandwiel/blob/main/gallery/tandwiel_title_cropped.png?raw=true)
> Tandwiel is a CABIN-inspired minecraft modpack focused on challenging automation progression and space exploration.

**Tandwiel** is a modpack that will challenge you with difficult progression focused on automation with the power of *Create*, and exploring space using *Ad Astra*, with other refreshing and difficult mods to spice up progression such as *Hex Casting*, *Create: The Factory Must Grow (TFMG)*, *Create: Metallurgy*, and many more. Unlike the modpack that inspired it, Tandwiel does not stop at the moon. In fact, it allows you to explore **all** of the Ad Astra planets, allowing you to start exploring when you reach the **third** automation tier, with more tiers afterwards for better rockets!

## For developers
> If you are a player, please install the modpack on modrinth.

> NOTE: Dev tooling is still being worked on. If anything goes wrong, please submit an issue on github.

### Setting up the modpack
The best way is to run `python packdev/pack.py --dev`
after that you won't need your original cloned repo, the generated pack will have all of the dev files included (after importing with modrinth).

### How to install/update the modlist
Make sure python is installed, then run packdev/install.py:
```
$ python packdev/install.py
```
However this tool is still WIP and may not function correctly. Do not submit issues for this tool.

### How to package into a .mrpack
Make sure python is installed, then run packdev/pack.py
```
$ python packdev/pack.py
```
For dev mode add `--dev` and for do not delete mode (don't clear temporary files) use `--dontdelete`.

### Adding to the modlist
The reccomended way (may change) is to add the mod normally through the modrinth app, then export it, rename it to a .zip, and copy the mod in the modrinth.index.json into the modrinth.index.json in the repository.
