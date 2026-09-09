# XO Lounge — DESIGN.md (single source of truth)

> Locked before any code. The agent reads this before styling anything.
> Thesis: **Midnight Habesha Editorial** — warm, late-night luxury. Espresso dark,
> bone paper, ember heat. Editorial serif + honest mono. Asymmetric, unhurried,
> tactile. Nothing SaaS, nothing purple, nothing centered-template.

## 1. Visual thesis

- Three adjectives embraced: **warm, low-lit, deliberate**
- Three adjectives rejected: **frosted, neon, templated**
- Reference shelf (vibes, not copies): dim Ethio-jazz bar on the Danforth at 1am,
  a printed Addis menu with deckled edges, a cocktail bar that still uses matches.
- One thing to remember: the ember field behind the hero — slow, warm, alive.

## 2. Tokens

```css
--espresso: #140E0B;   /* dominant ~60% — warm off-black, never #000 */
--coal:     #1E1410;   /* raised surface — +4% lightness shift, not a gray border */
--bone:     #F3E9D2;   /* light ~30% — warm paper, never #fff */
--bone-dim: #C9BBA0;   /* secondary text on dark */
--ember:    #E85D2A;   /* accent ~10% — burnt orange, single sharp accent */
--brass:    #C9A227;   /* secondary metallic — numerals, rules, focus */
--oxblood:  #6E1B1B;   /* deep support — badges, stamps, never large fills */
--line:     rgba(243,233,210,.14); /* hairline only */
```

- Hues in use: **3 active** (espresso/bone neutral ramp + ember accent; brass is a
  tint-role of the accent family for numerals/rules). Semantic colors kept separate.
- Banned hue band: **200–290°** (Tailwind blue/indigo/violet/purple). No exceptions.
- Backgrounds are never pure `#fff` / `#000`. Text is never pure white/black.

## 3. Type (reasoned pairing)

- Display: **Bodoni Moda** (Didone, high contrast — luxury editorial, menu-headline voice).
  Tight tracking on headlines (`-0.02em`), `text-wrap: balance`, optical sizing on.
- Body: **Manrope** (humanist sans — warm, readable at 16–18px, not Inter).
  `text-wrap: pretty`, measure 60–68ch, line-height 1.65.
- Labels / numerals: **IBM Plex Mono** (hours, prices, section indices — tabular figures on).
- Scale (editorial ratio 1.333): 12 / 14 / 16 / 18 / 24 / 32 / 48 / 72 / 112.
- Banned as headline: Inter, Roboto, Poppins, Space Grotesk, Geist, system-ui alone,
  and the "tasteful default" trio (Instrument Serif, Fraunces, Playfair) — overexposed.

## 4. Geometry + spacing

- Radius vocabulary: **2px sharp** everywhere. `999px` allowed ONLY for the live-status
  dot and the stamp badge. No `rounded-2xl/3xl`, no pills on buttons.
- Shadow vocabulary: none by default. One restrained lift for the sticky nav only.
  Borders do the work, not drop shadows.
- 8pt grid: 8 / 16 / 24 / 32 / 48 / 72 / 96 / 144. Section padding VARIES down the page
  (hero 128, story 104, experience 88, menu 72, nights 88, private 104) — never uniform `py-24`.
- Separation order: whitespace first → 4% bg shift → hairline border. Border is the
  last resort, never a flat gray box around everything. No colored left-strip decoration.

## 5. Layout intent (structure follows the goal)

Goal: get a table booked + sell private nights. So:
1. Hero left-aligned with live open-status and two CTAs above the fold — no centered badge+H1+2 buttons stack.
2. Story 70/30 asymmetric with drop cap + stats (proof, not features).
3. Experience as `<dl>` rows with hover image reveal — not three cards.
4. Menu as tabs with real prices (decision tool, not marketing grid).
5. Nights as a TABLE (Thu–Sun program — scannable, honest).
6. Private hire split with a working form (conversion point).
- No `max-w-7xl mx-auto` monotony: containers are 1240 / 960 / 720 by intent.
- Exactly ONE marquee on the page (the Amharic/English strip). No second marquee.

## 6. Motion (one signature, rest restraint)

- Signature: **ember particle drift** (Three.js Points, ~700 warm motes, slow rise,
  mouse parallax ±12px). DPR capped at 1.75, pauses when tab hidden, OFF under
  `prefers-reduced-motion` (static gradient fallback) and degradable to 2D canvas.
- Secondary: GSAP ScrollTrigger reveals with VARIED easings (expo, power3, sine) and
  varied distances — never uniform `opacity 0 + translateY(20px) + 0.1s stagger` everywhere.
- Micro: buttons ease 160ms (opacity/color/translate, never scale-1.05 + shadow pop).
- Every interactive state designed: hover, focus-visible (brass 2px offset ring),
  active (translateY 1px), disabled, loading, success, error. `::selection` ember.
- Rule: if you can't say what an animation communicates (hierarchy / story / feedback),
  delete it.

## 7. Copy voice

- Concrete, Toronto-specific, human. Name Queen St E, name injera, name buna.
- At least one number per section. At least one sentence that sounds said aloud.
- Banned phrases: Empower, Unlock, Transform, Seamlessly, Effortlessly, Elevate,
  "Built for the modern", "Welcome to our platform", "Get started today".
- CTAs are full sentences or direct imperatives: "Reserve a table", "Plan a private night".

## 8. Forbidden (build fails in review if found)

- ❌ Inter/Roboto/Poppins/Space Grotesk as display; ❌ any purple/blue gradient
- ❌ `rounded-2xl`, `rounded-3xl`, `shadow-lg/xl` on cards, glassmorphism panels
- ❌ Centered hero → 3-card grid → logo strip → pricing → FAQ conveyor
- ❌ `bg-gradient-to-r from-*-600 to-*-700` hero, glowing violet orbs, grid-pattern hero
- ❌ Lucide 48px icon floating above every heading; metric-card dashboard grid
- ❌ Identical fade-up on every section; linear 0.1s stagger everywhere
- ❌ Fake screenshots made of divs; stock "diverse team at laptop"

## 9. Quality gates (before "done")

- [ ] Squint test: one dominant mass, one secondary, clear negative space
- [ ] Brand-removal test: without the logo, still unmistakably XO (ember + Bodoni + mono numerals)
- [ ] Grayscale test: hierarchy holds without color
- [ ] 5-second test: ≤5 focal points in hero
- [ ] Delete-section test: every section earns its place
- [ ] Contrast measured (APCA-ish): body bone on espresso Lc ≥75, large ≥45
- [ ] Keyboard: all CTAs/tabs/form reachable, visible focus, tab order sane
- [ ] 375 / 768 / 1440px: no overflow, hero fits viewport, CTAs visible without scroll
