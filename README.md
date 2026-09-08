# XO Lounge Toronto — Digital Flagship & VIP Reservation Platform

A modern, high-converting digital experience built for **XO Lounge Toronto** (`364 Queen St E, Toronto, ON, M5A 1T1`) to replace their former broken website (`xolounge.ca`).

---

## 🌟 Overview & Highlights

- **Atmosphere First**: Directly mirrors the venue's distinctive physical interior—overhead geometric neon grid illumination, polished black-and-white marble bar, plush VIP banquettes, and DJ video wall.
- **Interactive 2D Venue Floorplan**: Clickable 2D floorplan showing DJ Stage VIP Booths, Main Floor Banquettes, and Marble Island Bar with minimum spend guidelines and guest allowances.
- **VIP Bottle Service Engine**: Multi-tier bottle service configurator (Silver, Gold, XO Platinum Sparkler Parade) with 1-tap WhatsApp and Phone escalation to `+1 (437) 473-0042`.
- **Weekend DJ Lineup & Programming**: Weekly calendar (XO Fridays, XO Saturdays, Sunday Social) with an instant free guestlist pass modal.
- **Craft Cocktails & Diaspora Tapas**: Artisanal mixology alongside Ethiopian diaspora culinary highlights (Crispy Sambusas with Awaze honey dip, Beef Suqaar Sliders, Truffle Fries).
- **Special Celebrations**: Dedicated spotlight for Birthday VIP perks (free illuminated LED Marquee letterboard & sparkler train) and Christmas/holiday party buyouts.
- **Location, Etiquette & Directions**: Direct Google Maps routing, TTC 501 Queen streetcar transit advice, strict 19+ physical ID rules, and "Nightlife Chic" dress code guidelines.
- **Bilingual Cultural Welcome**: English and Amharic ("እንኳን ደህና መጡ") toggle celebrating the community heritage.
- **Mobile-First Sticky Quick-Action Dock**: Thumb-optimized fixed dock for mobile phones with `[ Book Table ]`, `[ Call RSVP ]`, `[ Guestlist ]`, and `[ Directions ]`.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 15 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS v4, custom neon glow utilities
- **Icons**: Lucide React + custom accessible inline SVGs
- **Formatting & Linting**: Biome 2.5 (`biome.json`)
- **Package Manager / Runtime**: Bun / Node.js
- **SEO & Schema.org**: Complete `NightClub`, `BarOrPub`, and `Restaurant` JSON-LD structured data for Toronto local Google Search & Maps.

---

## 🚀 Getting Started

### Development
```bash
bun install
bun run dev
```

### Production Build
```bash
bun run build
bun run start
```

### Linting & Code Quality
```bash
bun x @biomejs/biome check --write .
bun x tsc --noEmit
```

---

## 📍 Venue Details
- **Address**: 364 Queen St E, Toronto, ON, Canada, M5A 1T1
- **Phone / RSVP**: +1 (437) 473-0042
- **Email**: info@xolounge.ca
- **Hours**: Mon–Sun 7:00 PM – 2:00 AM (Fri & Sat until 3:00 AM, Tuesdays Closed)
- **Age**: Strict 19+ Only (Government Photo ID Required)
