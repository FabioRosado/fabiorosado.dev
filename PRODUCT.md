# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro static website.

## Users

Potential employers and collaborators evaluating Fabio's work, plus developers looking for technical articles and cheatsheets.

## Product Purpose

A personal portfolio for a Senior Software Engineer that helps visitors understand Fabio's software work, browse useful technical writing, explore selected projects, and find a current way to get in touch through LinkedIn and social profiles.

## Positioning

The site combines a personal engineering portfolio with a long-running archive of technical articles, cheatsheets, and historical project pages. The homepage will feature Following Imperfectly (https://followingimperfectly.com) and MetaDen Scripts (https://metadenscripts.com).

## Operating Context

Visitors may be assessing Fabio for a role or collaboration, or arriving from search to read a specific technical article or cheatsheet. The homepage should summarize current work; archives and historical pages remain directly accessible.

## Capabilities and Constraints

- The homepage is a single-page portfolio; `/articles/`, `/cheatsheets/`, and `/projects/` remain archive routes.
- Preserve all 42 technical article routes, five cheatsheet routes, 11 historical project routes, their content, metadata, images, internal links, heading anchors, and trailing-slash behavior.
- Remove the books section and reading tracker, contact form and backend, webmentions, old activity widgets, unnecessary search, and technology badge collections.
- Retire outdated About and Uses pages after moving useful facts into a concise homepage section.
- Use LinkedIn and social profiles as the contact path; do not add a form or backend.
- Keep the site static and the Astro implementation simpler than the existing Gatsby application.
- Preserve the brand colors `#251333`, `#fc4056`, and `#0efb69`.
- The current role wording is `Senior Software Engineer`; do not copy other factual claims from reference images without confirmation.
- Retired book URLs have no identified one-to-one replacements and are planned for HTTP 410 where the host supports it, with a 404 fallback if it does not.

## Brand Commitments

Use the name Fabio Rosado and preserve the three colors above. The three supplied screenshots are visual references the user likes, not approved copy. Fabio approved the `Identity-led hero` composition in `.impeccable/mocks/identity-hero.png`; use it as the visual bar for the comp-first build. Translate its geometric decoration into responsive page elements instead of shipping the mockup as a screenshot.

## Evidence on Hand

- Existing content in `src/pages`: 42 technical articles, five cheatsheets, and 11 project pages.
- The user supplied the external project destinations for Following Imperfectly and MetaDen Scripts.
- Google Search Console baseline for the prior three months: about 26 clicks, 10,100 impressions, 0.3% CTR, average position 24.8.
- The user confirmed the role wording `Senior Software Engineer` and chose LinkedIn/social profiles as the contact path.
- Current project-specific proof and any current public email address have not been confirmed; an email address is not needed for the chosen contact path.

## Product Principles

- Keep useful indexed content and its routes stable during migration.
- Put the two current featured projects ahead of the historical project archive.
- Keep the site static, readable, and small enough to replace Gatsby's unnecessary runtime features.
- Preserve factual copy and metadata; do not carry forward stale claims or invent new proof.
