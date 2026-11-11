# Dryer Vent Cleaning content validation and QA

## Content and publication checks

| Item | Preview decision and evidence | Before publication |
|---|---|---|
| $99 basic and $298 bundle | Advertised by the AirPro homepage. The preview uses those amounts, standard-run and airflow-check language, and separate pricing for extra work. | Confirm current eligibility, scope, and approval to publish. |
| Scope, repairs, and duration | Austin service page describes cleaning, roof access, repair, and rerouting. The published Leander page describes a typical one-hour visit. The preview uses a qualified estimate. | Confirm the duration estimate for Austin, roof eligibility, equipment, and how repairs and rerouting are quoted. |
| Google, Yelp, Thumbtack, license and insurance | The local hero uses the four transparent badge assets from the Air Duct page at JC’s request. The review carousel describes selected individual reviews. The local preview uses the shared footer badge row to match the Air Duct layout. | Verify profile ownership, current ratings if shown, and license or insurance documentation before publishing the badges. |
| Reviews | Glen Winters is dryer vent-specific. Five additional excerpts are labeled general feedback. Wording, attribution, and individual stars come from the existing Dryer Vent page’s Google review snapshot. The preview uses a swipeable carousel with three-second autoplay and Pause/Play. | Verify the WordPress review provider and attribution. |
| Media | Five supplied dryer vent WebPs are used as service illustrations. The six comparison files match the air duct set, so the preview uses a regular gallery. | Confirm media approval and obtain genuine matched dryer vent pairs if comparison content is wanted. |
| Coverage | The homepage’s 14 cities match coverage published on the Austin dryer vent page. Austin is current. Round Rock, Cedar Park, Pflugerville, Georgetown, and Leander link to their published dryer vent pages. The other eight are coverage cards. | Recheck URLs and approved coverage at launch. |
| Form and popup | The preview blocks network submission and shows the demo result. The banner goes to the local form and the automatic $199 popup is excluded. | Verify delivery, consent and spam handling, booking event attribution, and the production popup display conditions. |

Sources: [Austin service page](https://airpro-austin.com/dryer-vent-cleaning-austin-tx/), [advertised offers](https://airpro-austin.com/), [Leander service page](https://airpro-austin.com/dryer-vent-cleaning-leander-tx/).

## QA results

- Source checks cover eight sections, one visible H1, seven section H2s, local anchors, offer values, five city links, photo assets, four FAQ answers, and preview indexing.
- JavaScript checks cover form validation and back/next data retention, service preselection, final demo status, three-second autoplay, manual pause/play, reduced motion, and the opt-in banner link. Regression checks exercise the existing Air Duct form and carousel defaults and the standard global banner link.
- Visual QA at 390, 768, and 1,440 px, narrower-screen overflow, sticky action overlap, and real touch swiping remain open. The in-app browser had local browser access disabled, so desktop and mobile screenshots are unavailable.

## Changed files

- `dryer-vent-cleaning-austin-tx.html` and `styles/dryer-vent.css`
- `scripts/global.js`, `scripts/lead-form.js`, and `scripts/duct-technician-carousel.js` with opt-in settings for the dryer vent page
- `docs/dryer-vent-cleaning-seo.md`, `docs/dryer-vent-cleaning-elementor.md`, and this QA and validation report
- References the five supplied WebPs in `Assets/AirPro_Austin_Dryer_Vent_Cleaning_5_Technician_Photos/`
