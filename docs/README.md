# Deimos Rising — GitHub Pages

An English Bootstrap landing page for https://profdrluigi.github.io/DeimosRisingGame/.

## Publishing

In the GitHub repository, select **Settings → Pages → Build and deployment → Deploy from a branch**, then choose the desired branch and the **/docs** folder. These local files do not publish or push themselves.

All asset paths are relative and work under the project path /DeimosRisingGame/. No CNAME, build step, external fonts, trackers, or CDN dependencies are required. The .nojekyll file disables Jekyll processing.

## Local preview

From the project root, run: python3 -m http.server 8765 --bind 127.0.0.1 --directory docs

Open http://127.0.0.1:8765/ or open index.html directly. All content, accessibility labels, metadata and image captions are in English. Bootstrap provides image dialogs, mobile navigation and FAQ panels. Without JavaScript, navigation, direct image links and FAQ answers remain available.

## Project links

- Project: https://github.com/profdrluigi/DeimosRisingGame
- Releases: https://github.com/profdrluigi/DeimosRisingGame/releases
- Original game: Swoop Software / Ambrosia Software
- Modern port and reimplementation: ProfDrLuigi, 2026

Download buttons link to GitHub Releases; no nonexistent ZIP or version is invented. Releases must be published separately. No complete-original-parity claim is made. Original archives, emulators and private reverse-engineering data are not part of this website.

## Assets

Bootstrap 5.3.8 is vendored with its MIT license in assets/vendor/bootstrap/. The files come from the existing Mars Rising website and match the SHA-384 values in the official documentation: https://getbootstrap.com/docs/5.3/getting-started/introduction/

Three unchanged screenshots show the native reimplementation. The app icon and favicon come from the existing project assets. Original artwork and game content belong to their respective owners.
