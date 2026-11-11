# HVAC UV Light validation and QA

Local build reviewed 2026-11-12. No commit, push, live WordPress edit or production lead submission performed.

## Scope and changed files

- Replaced hvac-ultraviolet-light.html with the eight-section UV page.
- Added scoped styles/hvac-uv.css, reusing existing shared styles and scripts.
- Added three optimized WebPs under Assets/brand/photos/hvac-uv/.
- Added this validation report, SEO map, Elementor handoff and screenshots under docs/qa/hvac-ultraviolet-light/.
- Existing unrelated changes remain intact. SHA-256 comparison confirmed Air Duct, Dryer Vent and Chimney reference HTML files unchanged during this UV task. No shared scripts changed in this task.

## QA evidence

| Check | Result |
|---|---|
| Main structure | Static parse passed: eight outer main sections, one H1, seven H2s; Contact belongs to section eight. |
| Dependencies and anchors | Local image/style paths, relative destinations and fragment IDs resolved in source checks. No broken loaded images in desktop browser. |
| Responsive | In-app browser checked at 320, 390, 768 and 1440 px; document width matched viewport at each. |
| Form | Browser: empty NEXT remains step one; dummy details proceed through all three steps; Back preserves name; Cedar Park link prefills editable city and UV service; final demo response states no request sent or appointment scheduled. |
| FAQ | Browser: first question opens. Native details/summary supplies keyboard behavior; separate keyboard-only end-to-end run not performed. |
| Photos | Browser dot control moved track to scrollLeft 520 on desktop. Three-second timer, stop-at-end, hover/focus/tab visibility pauses and reduced-motion guard inspected in existing source. No visible photo Pause control per standing user design. |
| Reviews | Browser Pause changes to Play. Four-column desktop styling and three-second left-to-right timer reused from latest service pattern. |
| Motion limitations | Reduced-motion handling source-inspected, not OS-emulated in browser. Real-device touch swipe and screen-reader testing not performed. |
| Sticky/header | City booking anchor brought form below header; no horizontal overflow at tested widths. Phone hrefs inspected without placing calls. |
| Preview | noindex,nofollow; demo form; no production pixels, UV promotion popup or UV fixed-price offer. |

Screenshots: desktop.jpg and mobile.jpg show hero layouts; tablet.jpg and photos.jpg record additional layout states in docs/qa/hvac-ultraviolet-light/. Browser screenshots are local review evidence, not WordPress verification.

## Content evidence and approval status

| Source | Use and limits |
|---|---|
| https://airpro-austin.com/hvac-ultraviolet-light/ | Published offering and evaluation/quote direction; not proof of actual model, scope or performance. Unsupported percentage, allergy and energy claims were omitted. |
| https://www.epa.gov/mold/does-ultraviolet-uv-radiation-uv-lamps-kill-mold | General UV limitations; not an AirPro certification or product endorsement. |
| https://www.epa.gov/indoor-air-quality-iaq/guide-air-cleaners-home | General filtration context; not model-specific installation evidence. |
| https://handbook.ashrae.org/Handbooks/A23/IP/a23_ch62/a23_ch62_ip.aspx | Technical distinction between surface and moving-air applications; actual product still unknown. |
| User brief and approved service references | Design, proposed content, city candidates and quote flow. Proposed scope still requires business approval. |

All five supplied Technician_Photos images and supplied after images depict visible glowing lamps near people. The three selected assessment photos avoid that representation. Keep their labels as assessment/equipment/access, not verified installations or before-and-after outcomes. They are supplied concept assets, not evidence of completed jobs. Source originals are preserved; only optimized copies added.

## Publication dependencies

Confirm actual equipment manufacturer/model, surface or air-treatment purpose, compatibility, installed scope, electrical requirements, safety/emissions documents, replacement schedule/cost, equipment and labor pricing, any evaluation terms and warranty. Obtain genuine approved installation photos. Confirm UV-specific city availability, license/insurance evidence, Yelp/Thumbtack profiles and the provenance/wording of general Google review excerpts. The preview reuses the four requested Air Duct trust badges; this reuse is not independent credential verification.

Verify actual WordPress widgets, form/CRM UV service value, delivery, consent, spam prevention and appointment-request language. Production must have approved metadata/canonical, correct indexability and schema plugin output. The live website was not modified or tested for these behaviors.

## Photo revision requested by JC

Replaced the technician carousel with all five supplied HVAC UV Light Technician_Photos, optimized as WebPs. What to Expect now uses 02_uv_hvac_service.webp. The hero and three overview assessment cards are unchanged. This supersedes the earlier assessment-only image choice for those two components. Keep the same native Image/Image Carousel mapping and three-second timing. Supplied photos are visual assets, not evidence of a completed installation or product performance.
