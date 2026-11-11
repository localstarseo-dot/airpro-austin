# AirPro Austin homepage: native Elementor build map

Status: local prototype only. No WordPress edits or GitHub push. This document supersedes earlier copy/paste or custom-CSS suggestions for the homepage.

Use the existing Elementor Free environment, installed menu/form/global-template tools, and native widgets. Do not paste the prototype HTML, CSS, JavaScript, sprite, or vendor snapshot styles into WordPress. No premium widget dependency is introduced. If the installed tool cannot reproduce a detail, simplify that detail within native controls.

## Global design settings

| Setting | Native Elementor value |
|---|---|
| Primary | Navy #0B2D5B |
| Secondary | Teal #00B4B6 |
| Accent | Green #7AC943 |
| Light section | #E6F6FF or a lighter tint from the prototype |
| Border | #E5E7EB / light blue-gray |
| Heading family | Montserrat, 700; H1 800 |
| Body / UI | Inter, 400–700 |
| Main content | Boxed 1232px usable width; outer container up to 1280px including side padding |
| Desktop spacing | Typically 86px vertical; 22px card gaps |
| Mobile spacing | 54px vertical; 24px side padding; 17px stacked card gaps |
| Cards | 12–16px radius, thin light border; subtle or no shadow |
| Buttons | Navy primary with white text; navy outline secondary; 48–52px high |
| Utilities | Approximately 19–24px icons |
| Services/process | Approximately 52–64px icons |

Set these through Site Settings and widget/container controls. Prototype classes are developer identifiers, not a requirement to add custom CSS in Elementor.

## Page structure: exactly seven main sections

| Section | Content / hierarchy | Native construction | Responsive behavior |
|---|---|---|---|
| 01 Hero + trust | One H1 styled as an eyebrow: Air Duct, Dryer Vent & Chimney Cleaning in Austin, TX; large paragraph headline: CLEANER AIR / HEALTHIER FAMILY; HEPA Approved supporting copy; booking/call buttons; four supplied trust badge images | Parent Container with two children, roughly 52% / 48%; Heading, Text Editor, Buttons, Image widgets, nested horizontal icon/text Containers | At phone width stack copy and CTAs before image. Use a Heading widget set to H1 for the eyebrow and a Text Editor paragraph at 35px mobile / 49px desktop for the large headline; technician visual 355px mobile / 485px desktop |
| 02 Cleaning services | H2 Cleaning Services for Common Problems at Home; three H3 problem cards; two supporting HVAC links | Three equal child Containers with Image, Text, Heading, Text Editor, linked text/Button. Separate compact row for two HVAC service Containers | Three cards desktop, one column mobile. Supporting cards stack below the main cards |
| 03 Pricing | H2 Air Duct & Dryer Vent Cleaning Prices in Austin; $199 / $99 / $298; scope bullets and offer terms | Three card Containers; Heading, Text, Icon List, Button. Teal border on combined-services card | Equal desktop widths; one card per row on mobile. No discount, crossed-out prices or savings badge |
| 04 Process + reassurance | H2 What Happens When You Book a Cleaning?; three numbered H3 steps; compact H3 trust statement | Three Containers with step number Heading and icon Image; heading/body; compact reassurance Container and CTA below | Three columns desktop; one column mobile; keep step order |
| 05 Imagery + reviews | H2 Our Cleaning Services & Customer Reviews; three service images; H3 What Our Customers Say; six source reviews in a horizontal carousel | Image and caption Containers, followed by the existing review provider’s carousel with attributed quotes and arrow controls | Three columns desktop, stacked on phone. Use original published wording and names; no live count |
| 06 Areas | H2 Cleaning Services in Austin & Nearby Communities; six verified city links | Two main Containers, then six linked city Containers in a 2-column grid (3 columns at intermediate widths) | Stack introduction before city grid; city links remain two columns on mobile |
| 07 FAQ + booking | H2 Common Questions About Our Cleaning Services; five H3 questions | Two main Containers, native Accordion with question title level H3 | Single column mobile. First FAQ initially open; global footer CTAs remain below the FAQs |

The reviewed content is in index.html. The semantic heading/internal-link inventory is in seo-keyword-map.md. Heading names above reflect the new approved homeowner-first guide, not the old site copy.

## Header and footer

Use the existing site's global-template and menu setup. Do not assume Elementor Free supplies Theme Builder, a Form widget, or a native menu widget; use what is already installed and configured.

- Header: white navigation; navy help bar; new full-color horizontal logo; Air Duct Cleaning, Dryer Vent Cleaning, More Services (Chimney, HVAC UV, HVAC Disinfection), Service Areas, About, Contact, Book Online.
- Mobile: existing menu widget collapse behavior, compact Book Online button, sticky Call / Book bar. Use existing native sticky/position controls. The prior globally requested bottom bar is retained on desktop too in the prototype.
- Footer: pre-footer help CTA; four columns for identity/contact, five core services, six featured cities, and company links. New white logo on navy. User-supplied Google/Yelp/Thumbtack assets retained, without a numeric Google review total.
- Use the existing global-template display conditions. Do not duplicate the header/footer inside each Elementor page.

## Brand artwork and image treatment

- Production-ready copies for this prototype: assets/brand/icons, assets/brand/photos, assets/brand/fonts, assets/brand/airflow-wave.svg.
- Preserve the original supplied kit in Assets/AirPro_Austin_Website_Icon_Kit 2.
- Prefer individual SVG Image widgets. If the site's SVG upload support is unavailable, use the kit's transparent PNGs. Do not add a sprite or code widget.
- Airflow wave: use a full-width Image widget, zero widget spacing, as the final child of the hero. It is a standalone image asset, not a coded divider in Elementor.
- Hero photo treatment: achievable with a teal outer Container and an inner Container using the photo as its background, native background-size Cover and position controls. Use vertical justification End for the white caption Container. No absolute-position script or custom CSS needed. Alternatively use a standard Image widget and place caption below it.
- Map local files to Media Library attachments when approved. Give meaningful alt text to informative photos and empty alt text to decorative icons beside labels.
- Supplied technician and service-image provenance is not verified as actual AirPro project documentation. Replace with confirmed project photos before presenting the section as real completed work.

## Links and integrations

Book Online currently links to the existing https://airpro-austin.com/contact-us/ destination (HTTP 200 checked). Calls use tel:+15126771878. No new booking form or local form endpoint is created. Preserve the existing production booking/form integration and test it separately after approval.

Local service/city links point to current .html previews; replace them with their preserved WordPress URLs using the map in seo-keyword-map.md. Company/gallery/testimonial links currently lead to the original live pages because those pages have not been redesigned locally.

## Latest approved refinements

- Hero technician images: five supplied views, 3,000ms per photo, 550ms fade. No pause/play button or counter, per JC's instruction. Local autoplay stops offscreen/when the tab is hidden and respects reduced-motion preference. Set up the existing Elementor Container Background > Slideshow controls with the five attachments, 3,000ms duration, Fade, Cover, and no Ken Burns. Do not paste the local JavaScript into WordPress.
- Hero trust row: the four newly supplied transparent Google Reviews, Yelp, Licensed & Insured, and Thumbtack images. Use individual Image widgets in a horizontal nested Container with no background, border, shadow, or card padding. Original transparency is preserved; working files are in assets/brand/badges. Approximate desktop widths: Google 122px, Yelp 94px, license 72px, Thumbtack 99px; reduce these proportionally on mobile.
- Removed the extra Ready to Schedule Your Cleaning? box after the FAQs. The global pre-footer help strip and fixed contact bar remain. The page still has seven main sections and six primary H2s.
- Removed numbered prefixes from section eyebrows. Numbered process steps remain.
- Airflow wave uses smooth, non-crossing layers with no white gaps. Use the updated SVG via an Image widget, not code.
- Customer reviews slide from left to right every 3,000ms. The homepage review link and visible arrow buttons are removed. Use the existing review provider’s native carousel with autoplay at 3,000ms and hide arrow controls. Local touch and keyboard scrolling remain available. The local script is for the prototype.

## Current hero / booking layout (supersedes earlier photo-panel description)

Five technician photos now fill the entire hero background, changing every 3,000ms with an 850ms fade. Use the native background slideshow settings on the outer hero Container; add a light gradient Background Overlay for readable copy. No separate framed photo or image caption remains. Inside, use a two-column Container: left heading/copy/CTAs/full-color transparent trust badges, right the existing configured three-step lead form. Approximate desktop proportions: 58% / 42%; stack text before form on mobile. Do not add a new premium form dependency or paste local code.

The restored local form has information, address, and service steps, with native field validation and an explicit no-send status. Book Online now anchors to #book rather than taking visitors away from the preview. Preserve the existing WordPress form integration and its delivery destination when approved. Footer trust assets now use the four newly supplied badges exported to grayscale, inverted for the navy background, with transparency preserved. Use these monochrome WebP files in Image widgets; no CSS filter is needed in Elementor.

## Fall Special popup

- Build the $199 Basic Whole-Home Air Duct Cleaning offer with a centered popup, visible close control, and a form with required Full name, Phone number, Email, and ZIP code fields.
- Set the display conditions for the homepage and the Austin Air Duct Cleaning page, and use a two-second page-load trigger. Set the offer banner’s Book Online link on those pages to open the same popup.
- In the current Elementor Free setup, use the installed popup and form tools if they support a timed trigger, a link trigger, and form embedding. Verify those capabilities in WordPress. With Elementor Pro, use a Popup template and a Form widget, with the banner link set to Open Popup.
- Set up the lead destination in the form tool and verify receipt with a test submission before launch. The local prototype exercises the form in the browser.

## Reference for the Air Duct Cleaning service page

Use homepage staging revision `e25ca3e` as the visual reference. Carry over Montserrat headings, Inter body copy, navy and teal with green accents, unnumbered eyebrows, centered section introductions where appropriate, compact trust badges, and the shared header, footer, and booking and call treatments. Use the homepage hierarchy of one service-and-location H1 styled as an eyebrow with a larger problem-first paragraph beneath it. Use native Elementor widget controls and the existing site integrations.

Apply the service wireframe first to `air-duct-cleaning-austin-tx.html`. Follow this order: hero and trust, warning signs, inclusions and process, pricing, the combined Austin service overview and photo gallery, standalone Google reviews, service areas, and FAQs with a final booking CTA. Use service-specific evidence and confirmed prices. Start locally and wait for a push request.

### Air Duct Cleaning widget map

| Section | Native Elementor construction |
|---|---|
| Hero and trust | Full-width Container with a static technician background image and navy Background Overlay. Center the H1 eyebrow, large Text Editor headline and description, and two Buttons. Place four transparent badge Images directly below the buttons. Add the six-item service checklist directly below the hero using the homepage’s native strip setup. |
| Warning signs | Centered Heading and Text Editor, followed by four child Containers with Image, Heading set to H3, and Text Editor. |
| Inclusions and process | Full-width light blue Container with a two-column layout for the navy Heading, Icon List and Image, followed by three numbered white child Containers with H3s. |
| Pricing | Three offer cards in responsive Containers for air duct cleaning, dryer vent cleaning, and the bundle. Link each Button to the configured form and preselect the matching service when the form tool supports it. |
| Austin service overview and photo gallery | Full-width navy Container with the before-and-after eyebrow, Austin service H2, and description. Place three labeled landscape comparisons first, followed by an H3 and two short Text Editor paragraphs about deep duct cleaning, then the native Image Carousel. Set two photos per view on desktop, one on mobile, one slide per swipe, dot navigation, 3,000 ms autoplay, looping, and pause on interaction. |
| Google reviews | Separate full-width white Container with navy heading text, light gray review cards, and a Google rating summary. Use the existing review provider’s native carousel with service-relevant excerpts, four cards on desktop, and left-to-right autoplay every three seconds. |
| Service areas | Reuse the homepage’s full-width light blue section with a centered heading and the linked city cards. Use Air Duct Cleaning copy and place the section after Google reviews. |
| FAQs and booking | Native Accordion for four questions, then a full-width primary navy Container with centered light copy and a white form. Place the H3, supporting text, and Call Button above the existing configured form at `#book` and cap the form width at 620px. The local form is a simulation. Verify the WordPress booking destination and lead delivery before publishing. |

For the Air Duct Cleaning comparisons, upload the three matched WebP pairs, use landscape framing with a dark navy Before label and a light blue After label, and retain the AI-generated illustration disclosure. Use a comparison widget from the installed Elementor addons if available. Two labeled Image widgets per pair are the native Elementor fallback. Keep the local comparison script in the prototype.
