# Doura — Wild Run

A browser-based 3D wilderness endless runner built with Three.js.

## Features

- Three-lane endless-runner gameplay with jump, slide, lane switching, lives, crystals, score and difficulty selection.
- Mountain, forest and river biomes with physically based materials, procedural terrain/gravel textures, improved lighting, higher-resolution shadows and atmospheric depth.
- Dynamic rain and snowfall particle systems, with changing light, fog and wet trail surfaces.
- Rigged GLB runner character with skeletal Run/Idle animation (with procedural fallback if the asset host is unavailable).
- Animated rigged deer and fox wildlife with skeletal walk/idle cycles.
- CC0 1.0 wildlife and character assets loaded from Gobkit's public GLB library; see [asset library and licence](https://gobkit.com/freebies).
- 3D roadside trail signs, wildlife warnings, scenic notices and Vido Player promotional billboards.
- Synthesized ambient wind, rain ambience and gameplay sound effects.
- Responsive keyboard, touch and swipe controls; automatic pause when the page is hidden.
- Best score saved locally in the browser.

## Controls

| Action | Keyboard | Touch |
|---|---|---|
| Move left / right | ← / → or A / D | Left / right buttons or swipe |
| Jump | ↑, W, or Space | Jump button or swipe up |
| Slide | ↓ or S | Slide button or swipe down |
| Pause / resume | P or Esc | Pause button |
| Sound | M | Speaker button |

## Play

Once the GitHub Pages deployment succeeds:

https://kawaqdr.github.io/Doura/

## GitHub Pages deployment

The GitHub Actions workflow at `.github/workflows/pages.yml` publishes the repository root on every push to `main`.

1. In **Settings → Pages**, choose **GitHub Actions** as the deployment source.
2. Merge the upgrade pull request into `main`.
3. Open the **Actions** tab and wait for **Deploy Doura to GitHub Pages** to complete successfully.
4. Visit the Play URL above.

The game loads Three.js, GLTFLoader/SkeletonUtils and CC0 GLB assets from public CDNs/asset hosting. The first load requires an internet connection. Models are cached by the browser after loading; if the asset host is unavailable, the runner and wildlife retain procedural fallback models. The Vido Player billboard communicates the app's privacy/offline positioning; it does not imply that this browser game itself is offline.
