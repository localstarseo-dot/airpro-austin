# Chimney Cleaning content validation and QA

| Item | Preview decision | Verify before publication |
|---|---|---|
| Scope | The [published chimney page](https://airpro-austin.com/chimney-cleaning-austin-tx/) describes cleaning, inspections, work-area protection, and sweeping. The preview limits its scope to accessible areas and agreed work. | Confirm fireplace types, firebox scope, methods, treatment of deposits, inspection scope, and separately quoted work. |
| Price and inspection | One quote card. The live page advertises an inspection promotion. | Confirm visit or travel fees, whether paid cleaning is required, scope, camera checks, written report, and any specialized inspection fee. |
| Credentials and profiles | The local hero and shared footer use the same four badge assets as the Air Duct page. | Verify profile ownership, credentials, and review rating/count if displayed. |
| Reviews | Six attributed five-star excerpts from the prior chimney page’s Google widget, labeled general feedback. The preview shows selected reviews with no aggregate count. | Verify attribution and approved provider. |
| Media | Five supplied WebPs are shown as service illustrations. The generated comparison pairs are reserved because genuine same-job images have yet to be supplied. The asset pack flags uniform and logo details. | Approve or replace imagery and verify genuine pairs before displaying a comparison. |
| Coverage | The live chimney page names Austin, Round Rock, Cedar Park, Lakeway, and Georgetown. Availability buttons use the form because dedicated chimney destinations were not verified. | Confirm coverage and any verified city hub links. |
| Industry guidance | Annual inspections and cleaning as needed are based on [CSIA guidance](https://www.csia.org/latest-news/preventing-chimney-fires). [CPSC guidance](https://www.cpsc.gov/Safety-Education/Safety-Education-Centers/Carbon-Monoxide-Information-Center/Home-Heating-Equipment) also recommends yearly professional inspection. | Keep industry guidance separate from AirPro’s credentials and service claims. |
| Lead form and promotions | The local form simulates the request. Chimney is selected by default, city buttons preselect the city, and unrelated popups are excluded. | Verify the WordPress receiving fields, delivery, conversion events, and popup display conditions. |

## QA and changed files

- Source and localhost checks cover the eight sections, headings, noindex, quote card, assets, booking anchors, phone, form defaults, coverage cards, and preserved Air Duct and Dryer Vent HTML.
- Script checks cover step validation, data retention, service and city preselection, demo completion, carousel autoplay, stop at the end, and reduced motion. The shared script tests include the existing no-control carousel behavior.
- Visual checks at 390, 768, and 1,440 px, narrower-screen overflow, sticky overlap, keyboard focus in the rendered page, and touch swiping remain open. Local browser use was disabled, so screenshots are unavailable.
- Changed the chimney HTML, added `styles/chimney-cleaning.css`, extended `scripts/lead-form.js` and `scripts/duct-technician-carousel.js` with opt-in behavior, and added three chimney handoff documents. The page references five existing supplied WebPs.
