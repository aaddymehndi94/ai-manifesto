# Visual review — public draft 0.5.0

Date: 05 October 2026. This is an internal design evaluation, not an award or
independent accessibility certification.

## Explored layouts

The reproducible script `scripts/design_qa.mjs` renders three alternatives from
the same content: Instrument (asymmetric editorial heading beside the causal
loop), Folio (centered long-form opening), and Ledger (boxed monospace panels).
Local screenshots remain under ignored `site/qa/`; alternative CSS is preserved
in `site/explorations.css`, outside production.

Instrument was selected because the first desktop screen presents both the
question and its causal structure. Folio offers a calm editorial opening but
moves the explanatory diagram below the first screen. Ledger has useful
instrument density but gives ordinary human readers a heavier machine-facing
opening. Agent mode already supplies that density without making it universal.

## Reference comparison

The actual rendered pages inspected were [Anthropic Research](https://www.anthropic.com/research),
[Quanta Magazine](https://www.quantamagazine.org/), and
[Distill's circuits introduction](https://distill.pub/2020/circuits/zoom-in/).
Screenshots were captured in the local browser; Distill's large document could
not be fetched through the text browser but was inspected visually.

The useful comparisons were editorial hierarchy, diagram-to-argument proximity,
publication metadata, and long-form reading width. No layout, image, logo, or
brand identity was copied. This project uses its own qualified-permission loop
and separates editorial type from machine labels.

## Revisions after first implementation

- Fixed five mobile reading layouts that expanded to table/code intrinsic width.
- Replaced an illustrative hand-drawn homepage curve with actual model output.
- Corrected unconditional behavior-change language to a conditional statement.
- Changed “valid evidence” to “authenticated records”; signatures cannot certify epistemic validity.
- Added real principle routes, canonical claim registry, accurate page metadata,
  and source-specific citation links.
- Added two paper figures, figure enlargement, share preview, and printable PDF.
- Kept the rejection count and lack of A-grade novelty visible on the homepage.

## Usability and performance boundaries

The static site uses no external font, tracker, animation framework, or WebGL.
Only a causal feedback edge animates; reduced-motion settings disable it. The
interactive model changes its curve when assumptions change. The actual
benchmark selector retrieves its generated fixture results rather than inventing
numbers in the browser.

Desktop and mobile browser checks cover routes, broken local links, page-level
overflow, mode switching, search, model inputs, menu dismissal, no-JavaScript
reading, and paper export. These are useful checks, not a comprehensive screen
reader, internationalization, WCAG, or real-device performance audit.

## Remaining design work

The human concept graph is deliberately curated; its API exposes a larger graph.
Dense review documents and the source archive reward desktop reading. Native
math typesetting, richer accessible society diagrams, and multilingual review
remain possible improvements, subject to the research earning more complexity.
