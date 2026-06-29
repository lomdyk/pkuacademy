## 2024-06-25 - Prerender Canvas Gradients
**Learning:** In the StarField component, we create a new radial gradient for every large star on every frame. Creating gradients and rendering them dynamically is CPU intensive. By pre-rendering the star glow to an offscreen canvas once, we can just use `drawImage`, which is about 10x faster (tested 226ms vs 20ms for 600 frames).
**Action:** Always pre-render complex canvas operations like gradients or drop shadows into offscreen canvases if they are drawn many times per frame without changing shape.

## 2026-06-29 - Preloading vs Lazy Loading
**Learning:** We previously abandoned lazy loading game components (like BackpackGame, CommunicationGame, RunnerGame) because it caused assets to load exactly when the user entered the game, causing visual pop-in. All assets are intentionally loaded when the site loads (via a Preloader) to ensure immediate, smooth gameplay.
**Action:** Do NOT lazy-load game components or defer asset loads. Prioritize upfront loading/preloading to avoid mid-experience asset pop-in.
