# Homepage local QA — 2026-11-11

## Completed

- Seven main sections, one H1, six primary H2s, and five FAQ items match the new wireframe requirements.
- Actual browser layout checked at widths 1440, 1024, 768, 390 and 360px. No horizontal document overflow at those widths.
- Desktop More Services dropdown opens; Escape closes it. Three supporting service destinations are present.
- Mobile menu opens/closes, More Services expands, and FAQ answers toggle. Mobile copy/CTAs precede the image.
- Sticky desktop header checked while scrolled: help bar moves away and nav remains at top (header top -36px, nav top 0px).
- Bottom Call / Book bar remains reachable; body bottom clearance preserves final footer content.
- All local HTML links, anchors, scripts, stylesheets and image references resolve to existing files. Call/email links use supplied details. About/Gallery/Testimonials/Contact/Privacy retain original live destinations.
- Existing booking destination https://airpro-austin.com/contact-us/ returned HTTP 200. No production form submitted.
- Images loaded in the actual preview; Montserrat font confirmed. New homepage console check returned no warnings/errors.
- Three original review excerpts retain the source names and wording. No review count or bundle-discount claim in the new homepage.
- Four optimized WebP images total approximately 281KB. Font files are local, with OFL licenses. Original media/icon kits are preserved.
- Primary buttons use white on navy; teal-backed Call bar uses navy text. Focus-visible controls and reduced-motion override are present.
- Shared header/footer smoke-tested on the existing Air Duct Cleaning preview at phone width: both rendered, no horizontal overflow, original page H1 intact.
- JavaScript syntax check and git diff --check passed.

## Review artifacts

- qa/homepage-desktop-hero.jpg
- qa/homepage-desktop.jpg
- qa/homepage-mobile-hero.jpg
- qa/homepage-mobile.jpg
- elementor-implementation.md: native Elementor Free construction plan
- seo-keyword-map.md: headings and preserved URL destinations
- content-validation.md: pricing, review and photo-provenance gates

## Still outside tested scope

- Native Elementor/WordPress implementation and final asset mapping.
- Production booking delivery, call connection, email, CRM, analytics, schema, and tracking.
- Independent validation of current pricing/offer terms, supplied photo provenance, and footer badge status.
- Full screen-reader audit, lab performance scores, and real traffic/conversion results.
- No Git commit/push or production changes were made for this revamp.

Source layout references and archived pre-revamp files remain available. Existing service/location pages are original-site references and have not been redesigned into the new proposal's section counts.

## Latest refinement checks

- Technician slideshow rotates five supplied images; active source changes observed in-browser. Current setting: 3,000ms interval / 850ms fade, no pause button or counter per instruction; reduced-motion and tab/offscreen handling retained.
- Full-hero background and gradient overlay replace the separate photo panel. Right-hand three-step form restored; all steps tested using dummy data. Final status explicitly confirms nothing was sent or booked.
- Four supplied transparent hero badges: Google, Yelp, Licensed & Insured, Thumbtack. Browser confirms transparent container backgrounds and zero borders. Footer uses grayscale exports of exactly these assets; transparency/channel checks passed.
- Review slider: six original source reviews, previous/next arrows and keyboard controls; scrolling verified at desktop and phone widths with zero document overflow. Touch uses native horizontal overflow/scroll snap.
- Extra final booking box and section-number prefixes removed; process-step numbers retained. Smooth non-crossing wave asset replaces the prior graphic.
- Final layout checked at desktop and 390px phone widths: no overflow; phone form width 342px. Seven sections / one H1 / six H2s retained.
- Current screenshots: qa/homepage-desktop-hero.jpg, qa/homepage-mobile-hero.jpg, qa/footer-monochrome.jpg. Full-page captures listed earlier show the preceding revision and are not final-refinement evidence.
