> Historical original-site wireframe. The current redesigned homepage follows the newer seven-section proposal. See [elementor-implementation.md](elementor-implementation.md).

# Homepage wireframe and Elementor map

Source reviewed: https://airpro-austin.com/ on 2026-11-11. Live DOM and rendered hero inspected. This is a structural wireframe, not a pixel-perfect clone or finalized content migration. Neutral image boxes and abbreviated content intentionally mark layout roles. Existing new-logo globals remain authoritative for staging.

| Order | Section | Elementor implementation |
|---|---|---|
| Global | Offer bar and navigation | Theme Builder header; Containers, Image, native menu, Buttons |
| 01 | Hero and appointment wizard | Two-column Container; Heading, Text, Icon List, Buttons; native Elementor Form steps |
| 02 | Four trust statements | Four child Containers with headings/supporting text |
| 03 | Three pricing packages | Three card Containers; Heading, Text, Button; individual scope/disclosure text |
| 04 | First three service cards | Three columns; Image, Heading, linked card |
| 05 | Two remaining service cards | Two columns; Image, Heading, linked card |
| 06 | Four cleaning differentiators | Heading plus four child Containers |
| 07 | Company positioning and four benefits | Heading/Text plus two-by-two benefit grid |
| 08 | Reviews and supporting Thumbtack badge | Heading/Text; existing verified review integration; Image/link |
| 09 | Company expertise copy | Heading and two substantial Text Editor blocks |
| 10 | Service overview and internal links | Heading, Text Editor, Icon Lists, contextual links |
| 11 | Contact section | Two-column Container; Form with name/email/phone/message; WhatsApp and call Buttons |
| 12 | Regional coverage introduction | Eyebrow, Heading, three text blocks |
| 13 | Fourteen city links | Three-column linked lists |
| 14 | Eight FAQs | Native Accordion; retain original answers during migration |
| 15 | Yelp proof badge | Linked Image |
| 16 | Closing conversion block | Heading, supporting Text, booking/call Buttons |
| 17 | Four-column footer | Global Theme Builder footer; logo, copy, lists, Icon List |
| 18 | Footer trust assets | Review widget, Yelp and Thumbtack badges; global footer ownership |
| 19 | Copyright and legal | Text and links; global footer ownership |
| Global | Fixed contact bar | Single global two-column Container; call and schedule Buttons; limited fixed-position CSS |

The live page also contains empty spacer containers. Their spacing is represented through section padding instead of duplicating empty Elementor nodes. The second service row and long-form content sections remain distinct to preserve the source sequence. No process section has been added from the concept board because it is not present in this source homepage.

## Content/integration gates

- Hero wizard: information (name, phone, date, time), address (street, city, ZIP, optional size), service (selection, email, optional notes). Wireframe shows the structure only; no active submission.
- Reviews: hardcoded text reports 171 reviews, while the embedded widget reports 207. Use one verified source during migration. No customer quotes reproduced in this wireframe.
- Pricing cards disclose optional on-site upgrades, while other content says no upsells/flat pricing. Reconcile these statements before final copy.
- HEPA, EPA-related, customer-count, free-inspection, and response-time claims require confirmation before launch. Their wireframe summaries are content slots, not independent validation.
- Service-area destinations on the source are inconsistent: several route to a generic area page; navigation and footer sometimes use different city URLs. Audit final routes before connecting local navigation.
- Do not copy plugin-generated DOM or review scripts into Elementor widgets. Retain the native review/form owners and test their integrations separately.
- Use approved navy/teal/green tokens, Montserrat/Inter, and simple SVG shape dividers during visual design. Current wireframe is deliberately structural; it does not claim final brand styling or a native Elementor import.
- No push, deployment, WordPress edits, form submission, or integration testing authorized by this task.

## Screenshot implementation update

The homepage now follows the twelve supplied screenshots with original content, locally stored hero/service imagery, actual pricing card structures, the dark four-benefit block, review cards, long-form copy, contact form, fourteen city links, eight expandable FAQs, Yelp proof, and closing CTA. The previous annotated wireframe remains at /wireframe.html. New sources: styles/home.css and scripts/home.js. Supplied five service photos are retained as PNGs in assets/home. Hero and platform badges were obtained from the original site.

The quote wizard supports three local steps and browser validation; both forms prevent submission and explicitly identify local preview status. No plugin spam/admin notice is rendered. Reviews are static snapshots from the original source, in a horizontally scrollable row; no live review synchronization is claimed. The original conflicting review totals are preserved for reference pending reconciliation. Structural migration remains native Elementor Containers, standard text/image/buttons, Form steps, and Accordion; do not import plugin DOM.

Footer trust strip added from supplied reference: Google stars/logo, screenshot review count (static 207), supplied Yelp and Thumbtack badges, then copyright/credit/privacy row. Elementor mapping: global Footer Container with three child Containers, Image widgets, Heading/Text widgets, then a full-width legal Container. Use the existing verified review integration for a live count. No custom code required in Elementor.
