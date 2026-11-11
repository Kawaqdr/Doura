# Doura — Explorer Run 3D

Doura is a browser-playable 3D endless runner built with Three.js.

## Play

After GitHub Pages is enabled, open:

**https://kawaqdr.github.io/Doura/**

## Controls

| Action | Keyboard | Touch |
|---|---|---|
| Move left / right | ← / → or A / D | Left / right |
| Jump | ↑, W, or Space | Jump |
| Slide | ↓ or S | Slide |
| Pause / resume | P or Esc | Pause button |
| Toggle sound | M | Speaker button |

Collect crystals, avoid obstacles, and travel through the mountain, forest, and river biomes. Choose Easy, Normal, or Hard before starting.

## Deploy with GitHub Pages

The included GitHub Actions workflow publishes the repository root whenever a commit is pushed to `main`.

1. Open **Settings → Pages** in this repository.
2. Set the build and deployment source to **GitHub Actions**.
3. Merge the upgrade branch into `main` (or push the changes to `main`).
4. Check the **Actions** tab for the deployment. The game will be available at the Play URL above after the workflow succeeds.

The game uses Three.js from a public CDN, so the first load requires an internet connection.
