# alan-d-smith.github.io

Personal portfolio for Alan Smith, built as a dependency-free static site for GitHub Pages.

## Project structure

- `index.html` contains the site content and semantic page structure.
- `privacy.html` and `datenschutz.html` contain the operator’s legal contact details and describe hosting, contact handling and visitors’ privacy rights in English and German.
- `styles.css` contains the complete visual system and responsive layouts.
- `script.js` handles the mobile navigation, image configuration, and footer year.
- `portfolio.config.js` provides a single place to update project imagery.
- `assets/` contains locally hosted project and social images.
- `assets/fonts/` contains self-hosted fonts and their redistribution licences.

## Local preview

Run any static file server from the repository root, for example:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Updating project images

Project image sources, alternative text, scaling, and positioning can be edited in `portfolio.config.js`. Each image also has a default source and alternative text in `index.html`, so the portfolio remains usable if JavaScript is unavailable.

Use local image files. The pages’ Content Security Policy blocks external resources and network calls. External links remain usable, and the referrer policy prevents sending the portfolio URL when following them.

## Privacy maintenance

This UK personal portfolio uses no analytics, cookies, browser storage or remote embeds. Fonts are served locally. Keep both privacy translations consistent with the site and with how enquiries are actually handled; review them before adding services or changing the operator. The company mailbox’s correspondence retention is described in [Latch’s privacy notice](https://latchlabs.app/privacy). The domain’s public MX record points to Google’s mail servers.

Apply the published retention policy to portfolio messages: review and delete correspondence no later than 24 months after the last meaningful interaction, except records needed for a legal obligation or claim. Monitor the published email address for privacy requests. Keep the mailbox’s provider agreement and transfer safeguards current; publishing a notice does not configure or verify the email account.

## Quality checks

The site has no runtime dependencies. Before committing, validate and format the source with:

```bash
npx --yes prettier@3.5.3 --check index.html privacy.html datenschutz.html styles.css script.js portfolio.config.js README.md assets/fonts/README.md .htmlvalidate.json
npx --yes html-validate index.html privacy.html datenschutz.html
node --check script.js
node --check portfolio.config.js
git diff --check
```

## Deployment

The repository is designed to be served directly from the root of the `main` branch with GitHub Pages. No build command or generated output directory is required.

Static asset URLs in the HTML pages include a deployment revision query. Update the affected revisions whenever CSS or JavaScript changes so browsers cannot combine new markup with stale assets after a GitHub Pages deployment.

## Copyright

© Alan Smith. All rights reserved. Third-party trademarks and logos remain the property of their respective owners.

The fonts have separate SIL Open Font License terms in `assets/fonts/`. The copyright notice does not establish permission for third-party logos or screenshots; retain the relevant licences or permissions for those assets.
