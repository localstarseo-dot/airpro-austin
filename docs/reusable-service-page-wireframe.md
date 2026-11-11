# AirPro Austin | Reusable Service Page Wireframe

Reference page: `air-duct-cleaning-austin-tx.html`. Use this layout for Dryer Vent Cleaning, Chimney Cleaning, HVAC Ultraviolet Light, HVAC Disinfection, and Gutter Services. Replace bracketed fields with details specific to the service. The numbers below are for build order.

**Primary CTA** · Book Online
**Secondary CTA** · Call (512) 677-1878
**Design** · Montserrat headings, Inter body copy, navy `#0B2D5B`, teal `#00B4B6`, light blue `#E6F6FF`, and white.

## 01 · Hero and service checklist

**Layout** · Full-width technician background with a navy overlay. Center the content, buttons, and four transparent trust badges. Place the light blue checklist strip directly below.

- **H1 styled as an eyebrow** · [Service] in Austin, TX
- **Large paragraph styled as the hero headline** · [Problem the homeowner recognizes?]
- **Description** · [One or two sentences explaining what the symptom could mean and what AirPro checks.]
- **Buttons** · Book Online → `#book` · Call (512) 677-1878
- **Trust badges** · Google Reviews, Yelp, Licensed & Insured, Thumbtack
- **Checklist** · Up to six short, service-specific checks or inclusions. Preserve the homepage strip treatment and update the wording for each service.

**Dryer vent example** · “Clothes Taking Longer to Dry?” Explain that lint buildup may restrict airflow and that AirPro checks the vent path and exhaust.

**Elementor** · Full-width Container with Background Image and Background Overlay, Heading set to H1, Text Editor for the large paragraph, Button and Image widgets. Use the existing checklist strip setup and a static Icon List if the installed widgets cannot reproduce the movement.

## 02 · Warning signs

**Layout** · White background. Center the intro and show three or four compact icon cards.

- **Eyebrow** · Warning Signs
- **H2** · Signs You May Need [Service]
- **Card format** · [Observable symptom as H3] + [one sentence explaining what it may indicate or when to ask for an inspection].

**Dryer vent examples** · Longer dry cycles, unusually hot dryer, lint around the outside vent, and a hotter or more humid laundry area. Describe these as possible signs with multiple causes.

**Elementor** · Heading and Text Editor above responsive child Containers with an Image, H3, and short Text Editor.

## 03 · What to expect

**Layout** · Light blue. Put the scope checklist beside a service photo, with three white process cards underneath.

- **Eyebrow** · What to Expect
- **H2** · What’s Included in Our [Service]?
- **Scope** · [What is inspected], [what is cleaned or installed], [how findings are shared], [what needs a separate quote].
- **Process H3s** · Inspect → [Clean / Install / Treat] → Review. Add one short explanation per step.

**Elementor** · Two-column Container with Heading, Icon List, and Image. Stack on mobile. Use three child Containers for the process cards.

## 04 · Pricing

**Layout** · White background with centered intro and responsive offer cards. Give the approved bundle a teal accent when applicable.

- **H2** · Straightforward Pricing You Can Book Today
- **Each card** · [Offer label, if confirmed], [service name as H3], [current price], [verified comparison price, if applicable], [scope and exclusions], [booking button], [eligibility or quote terms].
- **Booking** · Send the CTA to `#book` and preselect the matching service when supported.

**Current Air Duct reference** · $199 basic air duct cleaning, $99 basic dryer vent cleaning, and $298 bundle. For Dryer Vent Cleaning, lead with the $99 dryer vent offer if it is still current. Use a quote card for services without approved pricing.

**Elementor** · Containers, Headings, Text Editor, and Buttons. Wire preselection through the configured booking or form tool.

## 05 · Service overview and photos

**Layout** · One full-width navy section, in this order.

1. **Eyebrow** · [Service] Before and After, when comparison assets are available.
2. **H2** · [Service] Services in Austin, TX
3. **Overview** · Two short sentences on the service, what AirPro checks, and relevant Austin coverage.
4. **Comparison cards** · Up to three landscape pairs. Center the title in a white bar with navy text above each image. Dark navy **Before** label, light blue **After** label, and a draggable divider. Use matched pairs and identify illustrative assets.
5. **Supporting H3 and copy** · [Service-specific decision or upgrade]. The Air Duct page uses **Deep Duct Cleaning in Austin, TX**. A dryer vent page could cover **When a Dryer Vent Needs More Than Basic Cleaning**, using verified details about access or repair.
6. **Technician photo carousel** · Two photos on desktop, one on mobile. Advance one image every 3,000 ms. Enable swipe, loop, dots, and pause on interaction. The current preview uses dots and has no visible Pause button.

**Elementor** · Heading, Text Editor, and the native Image Carousel. For the split comparisons, use an installed comparison widget if available or two labeled Image widgets per pair. Use a regular photo gallery for services without matched before-and-after assets.

## 06 · Standalone Google reviews

**Layout** · Full-width white section, centered rating summary, light gray review cards.

- **Eyebrow** · What Austin Says
- **H2** · 5-Star Reviews, if supported by the current review source
- **Content** · Google branding, rating summary, and verified reviews relevant to the service where available.
- **Carousel** · Four visible on desktop, fewer on smaller screens. Advance every three seconds with swipe support.

**Elementor** · Use the existing review provider’s native carousel. Check the displayed rating and attribution before launch.

## 07 · Local to your home

**Layout** · Full-width light blue section, centered heading, white linked city cards.

- **Eyebrow** · Local to Your Home
- **H2** · [Service] in Austin & Nearby Communities
- **Description** · One sentence explaining coverage. Link to existing location pages that are relevant to that service. The Air Duct reference has 14 city cards.

**Elementor** · Heading, Text Editor, and responsive linked city cards. Use relevant location or service-area destinations.

## 08 · FAQs and Contact Us

**FAQs** · White section with the **Before You Book** eyebrow and H2 **Frequently Asked Questions About [Service]**. Use four short questions on timing, service scope, pricing or access, and booking.

**Contact** · Full-width navy block. Center the **Contact Us** eyebrow, H3 **Ready to Schedule Your [Service]?**, a short prompt, and the Call button above the white quote form. Keep the form centered at about 620 px maximum width. Booking buttons elsewhere on the page go to `#book`.

**Elementor** · Native Accordion plus the existing configured lead form. Map the local three-step flow to information, address, and service. Test the actual WordPress lead destination before launch.

## Globals and publishing checks

- Reuse the global offer bar, navigation, footer, and sticky Call/Book bar. The current Air Duct page also opens the $199 Fall Special popup after two seconds or through the offer banner. Apply its display condition only to pages approved for that offer.
- Give each page a service-specific title tag, meta description, and one H1. Use H2s for the main sections and H3s for supporting topics.
- Confirm service claims, offers, review attribution, media rights, location links, and booking destinations for each page. Check the desktop and mobile layouts, carousel, Call links, and form delivery.
- Keep the local and staging previews out of search. Verify the production page’s canonical URL and indexing settings after migration.

## Standing service-page direction from JC

Use the latest local Air Duct, Dryer Vent, and Chimney pages as the approved reference when implementing future service prompts. Apply their established formatting automatically and incorporate each new requested correction.

- Center the hero over a service-specific technician background with a navy overlay. Use one readable H1 eyebrow, a large paragraph headline, Book and Call buttons, and the same four transparent badge assets as the Air Duct page.
- Reuse the existing header, footer, checklist strip, fonts, section spacing, card shapes, and responsive layout.
- Use light blue for What to Expect and Local to Your Home, navy for the combined service-copy/photo section and Contact Us, and white for pricing, FAQs, and standalone Google reviews.
- Place the supporting service copy between the photo gallery and technician carousel. Use centered white photo title bars with navy text. For approved matched comparisons, retain the dark blue Before and light blue After labels.
- Use native swipe, dots, and three-second technician photo switching with no visible Pause button. Preserve reduced-motion and focus handling.
- Use the Air Duct Google review format with four cards on desktop and verified attribution. The current Dryer Vent and Chimney review carousels include their separate Pause/Play controls.
- For a quote-based service, reuse Chimney’s single centered pricing card with its navy service pill, moderately sized Request a Quote heading, REQUEST PRICING button, and short scope/terms.
- Keep service copy, pricing, form selections, location destinations, and imagery specific to the service. Build locally and publish upon JC’s push instruction.

Asset inventory checked: `Assets/AirPro_Austin_HVAC_UV_Light/` contains six readable comparison PNGs and five readable technician PNGs, all 1448 × 1086.
