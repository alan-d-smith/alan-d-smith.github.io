# alan-d-smith.github.io

Personal portfolio for Alan Smith, built as a dependency-free static site for GitHub Pages.

## Project structure

- `index.html` contains the site content and semantic page structure.
- `styles.css` contains the complete visual system and responsive layouts.
- `script.js` handles the mobile navigation, image configuration, and footer year.
- `portfolio.config.js` provides a single place to update project imagery.
- `assets/` contains locally hosted project and social images.

## Local preview

Run any static file server from the repository root, for example:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Updating project images

Project image sources, alternative text, scaling, and positioning can be edited in `portfolio.config.js`. Each image also has a default source and alternative text in `index.html`, so the portfolio remains usable if JavaScript is unavailable.

## Quality checks

The site has no runtime dependencies. Before committing, validate and format the source with:

```bash
npx --yes prettier@3.5.3 --check index.html styles.css script.js portfolio.config.js README.md .htmlvalidate.json
npx --yes html-validate index.html
node --check script.js
node --check portfolio.config.js
git diff --check
```

## Deployment

The repository is designed to be served directly from the root of the `main` branch with GitHub Pages. No build command or generated output directory is required.

Static asset URLs in `index.html` include a deployment revision query. Update that revision whenever CSS or JavaScript changes so browsers cannot combine new markup with stale assets after a GitHub Pages deployment.

## Copyright

© Alan Smith. All rights reserved. Third-party trademarks and logos remain the property of their respective owners.
