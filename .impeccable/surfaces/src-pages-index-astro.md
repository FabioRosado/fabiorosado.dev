---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets:
  - "src/styles/homepage.css"
  - "src/styles/homepage-layout.css"
  - "src/assets/hero-architecture.png"
---

Scope: Redesign only the right-hand hero illustration on the Astro homepage at `src/pages/index.astro`. Preserve the left-hand typography, navigation, and page structure; project styling is frozen for this request. Experience mode. The top-level visitor is a prospective employer or collaborator; the secondary visitor arrives to read technical writing.

Visitor job and content: Establish Fabio's role as Senior Software Engineer, feature Following Imperfectly and MetaDen Scripts, surface three real articles, and provide direct links to the existing articles, cheatsheets, and projects archives. Useful about content is “Software work, technical writing, and an archive.” Contact stays on LinkedIn and GitHub.

Constraints: Retain `/articles/`, `/cheatsheets/`, `/projects/`, preserved content URLs and metadata, and the confirmed colors `#251333`, `#fc4056`, `#0efb69`. Keep the Astro site static and small. The earlier approved comp remains a typography and composition reference; the latest user direction supersedes its hero artwork with one standalone technical illustration. Ship the transparent illustration asset, not a screenshot of the comp. Do not add fabricated code, metrics, or claims about a real production system.

## Direction contract

THESIS: Fabio's identity and engineering role lead; one compelling conceptual architecture illustration gives the hero technical character, and the work provides evidence.

OWN-WORLD: Deep plum anchors the page and layered architectural planes; coral carries the name and the illustration's central core; electric green marks selected signal routes, annotations, and rules. Keep the display serif for identity, Manrope for role and explanations, and monospace for existing concise labels. The hero combines an architectural schematic with a refined console-like plane: meaningful component connections, an asymmetric layered silhouette, and selective translucency establish depth and hierarchy. The schematic is illustrative and contains no words, code, numbers, or metrics.

STORY: Visitors recognize Fabio and his role first, see the two featured projects next, then choose a real article or one of the preserved archives. The final section gives a concise about line and direct social contact.

FIRST VIEWPORT: Preserve the compact top row, large two-line name, Senior Software Engineer role, and factual backend/developer-tools introduction on the left. Balance them with one unframed, transparent architecture illustration on the right, retaining the existing region at x48.240%, y12.300%, width45.570%, height39.640%. Contain the full silhouette without cropping. At 1050px and below, stack the image beneath the copy, capped at 680px wide and 360px high. Keep the existing navigation, featured projects, writing, about statement, and social links. Do not add hero CTA buttons.

FORM: A hybrid of editorial typography and a dimensional architecture study. An exploded axonometric assembly surrounds the coral core with plum planes, structural frames, and green routes connected at ports; a subordinate upright console-like plane carries a small schematic. The earlier selected composition remains a reference for palette and type quality; its hero artwork is superseded by the latest user direction. Direction seed: `30b69946`.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Hero implementation record

The source is `src/assets/hero-architecture.png`, a native transparent 1536×1024 illustration. Its prompt is embedded in the asset's provenance metadata and saved in `.impeccable/assets/hero-architecture.prompt.txt`. Astro Image emits responsive WebP widths of 480, 768, and 1280 at quality 82, with eager loading and high fetch priority. The descriptive alt text identifies it as conceptual software architecture. The wrapper has no enclosing panel or CSS shadow; dimensional shading belongs to the artwork itself.

Current viewport captures are `.impeccable/review/hero-illustration/desktop.jpg` (1440px), `tablet.jpg` (1024px), and `mobile.jpg` (390px). These capture the latest illustration; they do not establish a new comp-gate pass against the historical artwork.
