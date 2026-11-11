# Doura — Wild Run

A browser-based 3D wilderness endless runner built with Three.js.

## Features

- Three-lane endless-runner gameplay with jump, slide, lane switching, lives, crystals, score and difficulty selection.
- Mountain, forest and river biomes with denser instanced forest canopies, wind-reactive foliage, grass, rocks, subtly undulating terrain, physically based materials, improved lighting, shadows and atmospheric depth.
- Dynamic rain and snowfall particle systems, with changing light, fog and wet trail surfaces.
- Rigged natural-proportioned GLB runner with named locomotion clips and smooth idle/run transitions (with a lightweight fallback if the asset host is unavailable).
- Animated rigged deer and fox wildlife with skeletal walk/idle cycles.
- CC0 1.0 wildlife assets loaded from [Gobkit](https://gobkit.com/freebies); the runner uses the [Innerscene Sam locomotion collection](https://www.innerscene.com/tools/library/3d-parts/locomotion-collection-sam-3d-person-animated-dc23800f).
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

The game loads Three.js, GLTFLoader/SkeletonUtils and CC0 GLB assets from public CDNs/asset hosting. The runner's natural-character GLB is approximately 20.9 MB, so its first load can take time on a slow connection. The browser may cache assets after loading. If the main runner host is unavailable, a lighter Gobkit character is used; if animal assets fail, procedural wildlife remains. The Vido Player billboard communicates the app's privacy/offline positioning; it does not imply that this browser game itself is offline.
