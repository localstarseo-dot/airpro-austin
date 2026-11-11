# HVAC Disinfection validation and QA

Local prototype built 2026-11-12. No commit, push, live WordPress edit, real call or production lead submission performed.

## Changes

Replaced hvac-disinfection.html; added styles/hvac-disinfection.css; optimized five supplied service photos plus six newly supplied component-cleaning photos into Assets/brand/photos/hvac-disinfection/. Added SEO map, native Elementor guide, this report and screenshots in docs/qa/hvac-disinfection/. Reference Air Duct, Dryer, Chimney and UV page hashes unchanged during this task. Shared scripts/styles were not edited; unrelated existing work preserved.

Initial build used five technician photos in the carousel. JC then requested the six Before/After component images there and removal of the HVAC coil access card. Current carousel order: evaporator coil before/after, blower compartment before/after, condensate pan before/after. Two remaining title-bar cards are centered. Hero and What to Expect retain supplied disinfection technician imagery.

## QA

- Source checks passed: exactly eight main sections, one main H1 and seven H2s; contact inside section eight; resolved local assets, relative links and fragment destinations; six new carousel images; two remaining cards; default service hvac-disinfection.
- Browser inspected 1440, 768, 390 and 320 px; document width matched viewport. No broken loaded images in initial build.
- Dummy form tested: empty Next blocked, all three steps completed, Back retained Preview Test, Cedar Park link populated city and HVAC Disinfection, demo submission returned “Demo only. No request was sent and no appointment was scheduled.”
- FAQ summary opened with Enter. Review Pause changed to Play. Photo dot moved desktop track to scrollLeft 520. Existing timers are 3 seconds; reduced-motion/focus/hover/tab-visibility behavior source-inspected, not OS-emulated. Real-device touch and screen-reader testing not performed.
- Final new photo/card revision receives a separate browser check; see final task output. Screenshots remain local review evidence, not WordPress verification.
- Preview uses noindex,nofollow, no production pixels, no disinfection fixed price/free-treatment promise, and no unrelated automatic offer popup.

## Sources and limits

Published offering: https://airpro-austin.com/hvac-disinfection/ supports that the service is advertised, not every proposed method, product or scope. Unsupported health, allergen, 99.9%, energy-saving and hospital-grade claims were omitted.

Technical references reviewed:
- https://www.epa.gov/indoor-air-quality-iaq/should-you-have-air-ducts-your-home-cleaned (cleaning, materials and treatment limitations)
- https://www.epa.gov/coronavirus-and-disinfectants/whats-difference-between-products-disinfect-sanitize-and-clean (distinct terms)
- https://www.epa.gov/pesticide-registration/selected-epa-registered-disinfectants (label-specific intended use)
- https://www.epa.gov/coronavirus-and-disinfectants/can-i-use-fogging-fumigation-or-electrostatic-spraying-or-drones-help (method must be supported by label)
- https://www.epa.gov/mold/mold-cleanup-your-home (address moisture/source)

General technical sources do not certify AirPro, its method or the supplied concept imagery. The source asset README explicitly identifies the technician pictures as concepts; no customer/job/location narrative has been invented. The new component pairs show visible physical cleaning differences, not microbial reduction. Do not treat photos as treatment verification.

## Required before production

Confirm actual product/manufacturer, applicable EPA registration and current label, intended HVAC components/materials, claim supported for the actual use, method, preparation/contact time, occupant/pet/ventilation/re-entry instructions, equipment compatibility and service scope. Registration alone does not establish every material/application. SDS does not replace label directions. Resolve sanitization versus disinfection mismatch with JC if the verified use supports only sanitization; preserve current route until a decision is approved.

Confirm price, evaluation-offer terms, credentials/profiles, genuine job-photo approval, review wording/provenance, six-city service availability and production form/CRM mapping. Set approved metadata/canonical through existing SEO plugin, remove preview noindex at launch, verify schema ownership and actual form delivery. These publication dependencies do not block local review and are not claimed completed.
