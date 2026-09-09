# XO Lounge Toronto — Midnight Habesha Editorial

Impressive, agency-tier marketing site for **XO Lounge** (Habesha kitchen + late-night
lounge, Queen St E, Toronto) — Afrobeat / R&B / Ethio-jazz, buna ceremony, shisha,
private nights. Built to a locked design system so it never reads as AI slop.

## Why it doesn't look generated

Method, not adjectives — from current anti-slop practice (Anthropic `frontend-design`,
`impeccable`, `taste-skill`, Vercel `web-design-guidelines`):

- **One thesis, locked in `DESIGN.md`**: Midnight Habesha Editorial (warm / low-lit / deliberate).
- **Palette replaced, not extended**: espresso `#140E0B` / bone `#F3E9D2` / ember `#E85D2A` /
  brass + oxblood. No blue/purple band (200–290°), no pure black/white.
- **Reasoned type trio**: Bodoni Moda (display) + Manrope (body) + IBM Plex Mono (numerals).
  No Inter / Roboto / Poppins / Space Grotesk headline.
- **No framework defaults**: hand-rolled CSS system, 2px radius vocabulary, hairline
  borders last-resort, borderless separation first. No `rounded-2xl shadow-lg` cards.
- **Structure follows the goal** (book a table): left-aligned hero → story w/ stats →
  `<dl>` experience rows → tabbed menu with real CAD prices → nights TABLE →
  reservation form → visit. No hero→3-cards→FAQ conveyor. One marquee only.
- **One signature motion**: Three.js ember drift (capped DPR, pauses off-tab, off under
  reduced-motion) + varied GSAP reveals. No uniform fade-up-everything.
- **Real copy**: Queen St E, injera math, $58 gebeta, Thu–Sun till 2AM. Banned-word list enforced.

## Stack (latest, free-tier friendly)

- Static `index.html` + `styles.css` + `main.js` — zero build, deploys anywhere.
- `three@0.170` via import map (ember field), GSAP 3 + ScrollTrigger, Lenis smooth scroll.
- Google Fonts: Bodoni Moda / Manrope / IBM Plex Mono. Unsplash CDN images (lazy, async decode).

## Run

```bash
# from this folder
python3 -m http.server 5173
# open http://localhost:5173
```

No `npm install`. No env vars. No backend — reservation form validates + confirms in-page
(wire to SMS/email provider when the client picks one).

## Check before ship (all in DESIGN.md §9)

- [ ] Squint / brand-removal / grayscale / 5-second / delete-section tests
- [ ] Keyboard + focus-visible pass, `prefers-reduced-motion` respected
- [ ] 375 / 768 / 1440px — hero fits viewport, CTAs visible, no overflow
- [ ] Prices/hours/address confirmed with the owner (placeholders flagged in code comments
      where the real POS numbers must replace samples)

## Deploy

Drag this folder to Netlify Drop, or `vercel deploy` / GitHub Pages — it's static.
`theme-color #140E0B`, OG tags + inline SVG favicon included.

## Research notes (what the web currently agrees on)

- Unguided models converge to the statistical middle: Inter, indigo/violet gradients,
  centered badge-hero, 3 identical cards, `fadeUp + 0.1s stagger` everywhere.
- Fix = decisions before code: lock palette/type/layout/motion in a root spec file,
  ban the defaults (lint or checklist), vary section shape + easing, write concrete copy.
- Highest-leverage add-ons: a generation skill (Anthropic `frontend-design` baseline,
  `impeccable` for craft) + a quality gate (Vercel `web-design-guidelines`) + a
  Playwright screenshot loop across breakpoints. This repo bakes the first two in as
  `DESIGN.md` rules + the §9 checklist; add the screenshot loop in CI when a remote exists.
