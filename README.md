# AirPro Austin — local website prototype

Run in this folder:

```sh
python3 -m http.server 8080 --bind 127.0.0.1
```

Open http://localhost:8080/. The homepage is the new seven-section brand-aligned design. Use HTTP rather than opening the file directly because shared header/footer components load with fetch.

## Current files

- `index.html`: current redesigned homepage, with one H1 and six primary H2s.
- `styles/home.css`: homepage-only responsive layout.
- `styles/global.css`: brand tokens, local fonts, shared header/footer and contact bar.
- `scripts/global.js`: local shared-component loading and accessible menu interactions. FAQs use native HTML details/summary in the prototype.
- `components/header.html`, `components/footer.html`: single source for shared global elements.
- `Assets/brand/`: prepared icons, fonts, airflow-wave artwork and optimized WebP imagery. Original supplied kits remain in `Assets/`.
- Root service `.html` pages: six redesigned service pages using the approved eight-section pattern. Location pages retain their existing local layouts.
- `wireframe.html`: earlier annotated structure, retained for reference.
- `docs/archive/before-homepage-revamp-*`: previous homepage/global source for recovery, not current preview pages.

## Native Elementor implementation

The prototype is a visual/content reference. Rebuild the approved layout using the existing Elementor Free environment, Containers, standard widgets, Site Settings, and the configured menu/global-template/form tools. No custom HTML, CSS or JavaScript is to be pasted into WordPress. Individual icon/wave assets can be used through Image widgets.

See `docs/elementor-implementation.md`, `docs/seo-keyword-map.md`, `docs/content-validation.md` and `docs/qa-checklist.md` for the section map, preserved URLs, unresolved content facts, and actual validation coverage.

Book Online anchors to the restored #book hero form. Service/city links use local previews; company/gallery/review/legal links lead to existing live pages. A local-only three-step lead-form preview is provided; it prevents submission and is not a live booking system. No production submission or tracking test has been performed.

## Git and publication

Keep work local. Do not push or deploy until JC explicitly gives the go signal. Nothing about local completion implies a WordPress update.
