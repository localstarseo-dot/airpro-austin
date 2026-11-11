# Original service-page local references

Six original service pages are duplicated locally with their original Elementor section markup, scoped supporting styles, local images/fonts, and the shared new-logo header/footer/contact bar. These are static browser references only. They are not Elementor JSON imports or custom code to paste into WordPress.

| Page | Local file | Source Elementor page ID |
|---|---|---|
| Air Duct Cleaning | air-duct-cleaning-austin-tx.html | 1063 |
| Dryer Vent Cleaning | dryer-vent-cleaning-austin-tx.html | 1103 |
| Chimney Cleaning | chimney-cleaning-austin-tx.html | 1268 |
| HVAC UV Light | hvac-ultraviolet-light.html | 1250 |
| HVAC Disinfection | hvac-disinfection.html | 1234 |
| Gutter Services | gutter-cleaning-austin.html | 2064 |

Use the existing WordPress Elementor pages and native widgets as the implementation environment. Preserve the original section order, headings, images, form ownership, internal links, and global templates. Apply approved design revisions with Elementor controls and Site Settings. No custom HTML, CSS, or JavaScript is planned for Elementor migration.

## Local preview boundaries

- Service navigation, footer service links, and homepage service cards route locally to these six pages.
- Original page assets and CSS dependencies are stored in assets/service-source. Asset/source manifest: service-assets.json. Section heading inventory: service-pages.json.
- No original WordPress frontend scripts, tracking, payment, review loader, or form network handler executes locally. Forms intercept submission and show an explicit no-send notice. Reviews are static source snapshots. Accordion interactions are local approximations.
- Preserve original content discrepancies for review: Dryer Vent hero says Guard Installation; review totals and pricing claims are inconsistent across the source. These copies do not independently verify claims.
- Other destination pages (such as location pages) are outside this six-service scope and may still link to the original site. No location pages were duplicated.
- Verified all six routes render, each has a form and its original section containers, with no document overflow at the inspected 722px viewport. Assets downloaded successfully; static relative references checked locally. Native WordPress rendering, dynamic widgets, delivery, and tracking remain untested.
- Do not push or deploy until JC explicitly gives the go signal.
