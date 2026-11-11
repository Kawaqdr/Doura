# Doura — Wild Run

A browser-based 3D wilderness endless runner built with Three.js.

## Features

- Three-lane endless-runner gameplay with jump, slide, lane switching, lives, crystals, score and difficulty selection.
- Mountain, forest and river biomes with a cinematic color grade and atmospheric fog.
- Dynamic rain and snowfall particle systems, with changing light, fog and wet trail surfaces.
- Procedural deer and fox wildlife encounters.
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

The game currently loads Three.js from a public CDN. The first load therefore requires an internet connection. The Vido Player billboard communicates the app's privacy/offline positioning; it does not imply that this browser game itself is offline.
