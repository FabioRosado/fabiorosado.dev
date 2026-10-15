---
name: Fabio Rosado
description: An engineering portfolio with a strong serif identity, direct sans-serif copy, and conceptual architecture illustration.
colors:
  plum: "#251333"
  plumDeep: "#1e0e29"
  plumGlow: "rgb(89 26 82 / 19%)"
  codeSurface: "#1d1025"
  coral: "#fc4056"
  green: "#0efb69"
  paper: "#fff9f5"
  muted: "#c7b9d0"
  line: "rgb(232 203 242 / 20%)"
typography:
  display:
    fontFamily: "DM Serif Display, Georgia, serif"
    fontSize: "clamp(54px, 8.92vw, 137px)"
    fontWeight: 400
    lineHeight: 0.78
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(18px, 1.75vw, 27px)"
    fontWeight: 700
    lineHeight: 1.18
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(14px, 1.25vw, 19px)"
    fontWeight: 400
    lineHeight: 1.45
  label:
    fontFamily: "SFMono-Regular, Consolas, Liberation Mono, monospace"
    fontSize: "clamp(9px, 0.88vw, 14px)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.24em"
rounded:
  square: "0"
  sm: "4px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
components:
  project-card:
    background: "linear-gradient(116deg, rgb(48 22 59 / 70%), rgb(30 14 41 / 92%))"
    border: "1px solid {colors.line}"
    typography: "{typography.title}"
  project-tag:
    backgroundColor: "transparent"
    textColor: "{colors.green}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "4px 6px"
  contact-link:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
---

# Design System: Fabio Rosado

## Overview

The homepage presents Fabio as a Senior Software Engineer. A strong serif treatment gives his name a distinct identity; concise sans-serif copy explains his work; and one conceptual architecture illustration gives the hero depth and technical character. Plum, coral, and electric green retain their established roles across the page.

On desktop, the header, split hero, featured projects, recent writing, about copy, and social links form one measured composition. Project cards stay informational and link as a whole to their external destinations. On mobile, the same content becomes a single readable vertical flow.

**Key characteristics:**
- Strong DM Serif Display identity typography
- Deep plum with coral identity accents and electric-green annotations
- One cohesive architecture illustration with layered components, connected routes, and a coral focal point
- Factual project copy with concise focus and technology labels

## Colors

- **Deep Plum (`#251333`):** Main page canvas and the illustration's architectural planes.
- **Plum Depth (`#1e0e29`) and Glow (`rgb(89 26 82 / 19%)`):** Existing low-contrast background layers, shared by the homepage and content pages.
- **Code Surface (`#1d1025`):** The inset background for preformatted code blocks.
- **Signal Coral (`#fc4056`):** Fabio's surname and the illustration's central core.
- **Electric Green (`#0efb69`):** Section labels, illustrated signal routes, rules, project tags, focus indicators, and hover feedback.
- **Warm Paper (`#fff9f5`):** Main text and icons.
- **Mauve Gray (`#c7b9d0`):** Supporting copy and subdued annotations.
- **Lavender Rule (`rgb(232 203 242 / 20%)`):** Quiet dividers and card borders.

Keep green as a concise annotation and interaction color. Plum and coral carry the page's larger color fields.

## Typography

- **Identity:** DM Serif Display, with Georgia as the serif fallback. Use the oversized, tight-leading treatment for Fabio's two-line name.
- **Headings and copy:** Manrope. Use bold sans-serif for the role and project names, and regular weight for descriptions and navigation.
- **Labels:** SFMono-Regular, Consolas, or Liberation Mono. Use uppercase monospace for section labels and project tags. The hero illustration contains no text.

Keep the serif identity prominent. Project titles use Manrope rather than serif; project descriptions stay short, factual, and easy to scan.

## Layout

The desktop page uses a centered frame capped at 1536px with a 3:2 aspect ratio. The header aligns identity, archive navigation, and social links. The hero places the name, role, and summary opposite one unframed architecture illustration, fitted within the existing right-hand region without cropping. Featured project cards and recent writing share the next content band; about and connect sit below.

At 1050px and below, the frame becomes a full-width vertical page. Navigation wraps to a horizontally scrollable row, the illustration sits below the hero copy with a maximum width of 680px and height of 360px, project cards stack, writing becomes a list, and social links move to the footer. At 420px and below, horizontal padding and display type tighten further.

## Elevation & Depth

Use the existing subtle plum gradients for the page background and project panels, with fine borders and no CSS drop shadows. The hero artwork creates its own depth through layered axonometric planes, translucent boundaries, and soft internal shading; do not flatten it into interface cards. Project cards have square corners; social link tiles use a restrained 4px radius. Small hover transitions may change border or text color and nudge the arrow. Reduce transitions and disable smooth scrolling when reduced motion is requested.

## Components

### Header and Navigation

Keep the wordmark at the left, archive links centered, and LinkedIn and GitHub links at the right on desktop. The green divider separates social links from archive navigation. On mobile, keep the wordmark above a horizontally scrollable archive row and hide the header social links; the footer contact links remain available.

### Hero and Conceptual Architecture

The hero has no CTA buttons. Lead with the two-line serif name, then the sans-serif role and a concise engineering summary. Pair it with one transparent architecture illustration: layered plum planes and structural frames surround a coral core, with selected green routes terminating at visible component ports. A subordinate console-like plane carries a schematic without text or code. Keep the image unframed and contain its full silhouette as the layout stacks. It is a conceptual illustration, not a claim about a real production system; include no fabricated code, metrics, or operational claims.

### Featured Project Cards

Each full card is one external link with a factual project description, a concise set of project-focus or technology labels, and a directional arrow. Mark the destination domain with a small external-link icon. Keep card titles bold and sans-serif. Do not add abstract illustration or decorative card art.

### Project Labels

Use small uppercase monospace labels with transparent backgrounds, green text, fine green outlines, and tight padding. Labels communicate project focus or supported technologies; they are not controls.

### Writing and Contact Links

Present recent writing as direct text links with thin separators and arrows. Use outlined, lightly rounded tiles for LinkedIn and GitHub in the Connect section.

### Focus and Reduced Motion

All links have a visible 2px green `:focus-visible` outline with a 5px offset. Respect `prefers-reduced-motion` by disabling smooth scrolling and reducing transition and animation durations.

## Do's and Don'ts

### Do:
- Keep the confirmed plum, coral, and green palette in their established roles.
- Preserve the strong serif identity and use sans-serif project titles and explanatory copy.
- Keep the hero illustration cohesive, with layered plum components, meaningful green connections, and a coral focal point.
- Keep project descriptions factual and project labels concise.
- Make each project card a full external link.
- Retain clear keyboard focus states and honor reduced-motion preferences.

### Don't:
- Add hero CTA buttons.
- Add abstract artwork or imagery inside project cards.
- Use serif project titles.
- Use electric green as a large background field.
- Add CSS drop shadows to interface surfaces or round project cards.
