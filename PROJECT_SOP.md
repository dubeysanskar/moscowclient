# PROJECT SOP — Taha Airwaves Russia Website

> **Standard Operating Procedure & Complete Context Document**
> This document provides full context for any developer or AI tool working on this project.
> Last updated: March 24, 2026 (Session 5 — Full Brand Overhaul + Sub-pages)

---

## 1. PROJECT OVERVIEW

This website is a **Russia-market focused** deployment of Taha Airwaves, serving as a dedicated landing page for the Russian market.

| Aspect | Detail |
|---|---|
| **Company** | Taha Airwaves Private Limited |
| **Global HQ** | New Delhi, India (est. 2005) |
| **Russia Operations** | Established 2022, 500+ workers recruited |
| **Domain** | tahaairwaves.ru |
| **Focus** | Manpower recruitment & deployment exclusively for the Russian market |
| **RA License** | B-3260/DEL/COM/100/5/11259/2025 |

### 1.1 Key Principles

1. **Russia-first**: All content on Services and Blog pages focuses exclusively on the Russian market
2. **About Us + Contact = Global**: Company history, global offices (India HQ, Russia, UAE/GCC), and achievements
3. **Professional wording**: Use "workforce solutions", "recruitment", "deployment", "manpower services" — never "skilled labour"
4. **Brand-strict UI**: Inter font everywhere. Zero gradients. Solid brand palette only (see §2.1)
5. **No cursive/Cormorant fonts**: Inter (sans-serif) is the ONLY approved typeface. Never reintroduce cormorant-garamond or any italic serif
6. **Russian by default**: Website defaults to Russian language. Toggle available for English
7. **Red logo ALWAYS**: Use `LOGO.png` (red) everywhere — never white or black logo
8. **Language completeness**: Every new text element MUST have both RU and EN entries in `src/context/language.jsx`

---

## 2. BRAND & DESIGN SYSTEM

### 2.1 Official Color Palette — CRITICAL

> ⚠️ **ABSOLUTE RULE: NO GRADIENTS ANYWHERE.** Flat solid colors only. No gradient overlays, gradient text, or gradient borders — ever.

| Color Name | Hex Code | RGB | Where to Use |
|---|---|---|---|
| **Deep Maroon / Wine Red** | `#8A0029` | 138, 0, 41 | Logo, main headings, CTA buttons, brand accents, icon boxes, section bars |
| **Bright Red Accent** | `#D32F2F` | 211, 47, 47 | Hover state accents, numbered badges, secondary icons, highlights |
| **Dark Gray** | `#262626` | 38, 38, 38 | Dark sections, navbar, footer bg, body text, paragraphs |
| **Soft Light Gray** | `#F7F7F7` | 247, 247, 247 | Alternate section bg, card surfaces, form wrappers |
| **Pure White** | `#FFFFFF` | 255, 255, 255 | Primary page bg, form fields, clean sections |

**Usage pattern:**
- Page background: `#FFFFFF` (white)
- Alternate sections: `#F7F7F7` (Soft Light Gray)
- **Navbar**: `#262626` (Dark Gray)
- Footer: `#262626` with `#8A0029` top strip, white text
- Buttons: `bg: #8A0029, text: #FFFFFF`, hover = `opacity: 0.9`
- Icon boxes/badges: Alternate `#8A0029` / `#D32F2F`
- Section accent bars: `#8A0029` (3px left strip or top strip)
- Social icons: White in footer; brand-outlined in header

### 2.2 Typography

All fonts loaded via `next/font/google` in `layout.js`. Cormorant Garamond includes `cyrillic` subset for Russian text.

| Font | CSS Variable | Weight(s) | Usage |
|---|---|---|---|
| **Cormorant Garamond** | `--font-cormorant-garamond` | 300,400,600 | Hero headings, section titles, page titles |
| **Lato** | `--font-lato` | 100,300,400,700,900 | Navigation, buttons, labels, footer headings |
| **Oswald** | `--font-oswald` | 200–700 | Stats numbers ONLY |
| **Poppins** | `--font-poppins` | 100–900 | Body text, paragraphs, descriptions |

**Font size pattern (bigger for visibility):**
- Hero headings: `clamp(4rem, 10vw, 9rem)`
- Section headings: `clamp(2.5rem, 5vw, 4rem)`
- Sub-headings: `1.75rem – 2.25rem`
- Body text: `1rem – 1.15rem`
- Labels/tags: `0.85rem – 0.95rem`
- Stats: `2.5rem – 3.5rem` (Oswald)

### 2.3 Design Patterns

- **Section dividers**: `<div className="w-14 h-1 rounded-full" style={{ background: "#8E0935" }} />`
- **Card style**: `rounded-2xl p-6` with `border: 1px solid rgba(142,9,53,0.1)` and `hover:shadow-lg`
- **Rounded buttons**: `rounded-full px-7 py-3.5 text-sm tracking-[0.1em] uppercase font-semibold`
- **Hover effects**: Scale on images, translate on arrows
- **Animations**: Framer Motion `useInView` for scroll reveals
- **Navbar**: NOT sticky/fixed, BLACK background `#1a0a10`
- **Hero**: Background images only animate (crossfade). Content stays static. Contact form on right side.

---

## 3. CONTENT — RUSSIA FOCUSED

### 3.1 Services for Russia Market

All services must reference Russia specifically. No other country names in service descriptions.

**Slugs:** cleaners, all-types-of-drivers, general-labour, loading-unloading-workers, factory-helpers, barista, packing-workers, skilled-labourers-technicians, emigration-immigration-clearance, document-attestation-services, employee-outsourcing-solutions

### 3.2 Social Media (Russia-relevant platforms)

| Platform | Icon Color | URL |
|---|---|---|
| VK | White | https://vk.com/tahaairwaves |
| Telegram | White | https://t.me/tahaairwaves |
| WhatsApp | Light Pink (brand) | https://wa.me/919315226961 |

### 3.3 Key Metrics / Our Strength

- Workers recruited in Russia: **500+**
- Russia operations since: **2022**
- Global experience: **20+ years**
- Countries served globally: **11+**

### 3.4 Company Info

- **Company**: Taha Airwaves Private Limited
- **RA License**: B-3260/DEL/COM/100/5/11259/2025
- **Established**: 2005 (global), 2022 (Russia operations)
- **Head Office**: 71A, 3rd Floor, Taimoor Nagar, New Friends Colony, New Delhi 110025
- **Moscow Office**: Moscow, Russia
- **Phone**: +91 93152 26961
- **Email**: info@tahaairwaves.com

---

## 4. COMPONENT ARCHITECTURE

### 4.1 Language System

```
src/context/language.jsx — LanguageProvider + useLanguage() hook
src/components/providers.jsx — Wraps layout with LanguageProvider
```

- **Default**: Russian (`ru`)
- **Toggle**: `🇬🇧 EN / 🇷🇺 РУ` button in navbar (top bar, main nav, mobile menu)
- All translated strings in `language.jsx` under `translations.ru` and `translations.en`

### 4.2 Homepage Sections (in order)

```
page.js
├── Hero — 3 bg images (crossfade), static content, contact form, stats bar
├── HomeAbout — Two-column intro (Russia-focused, language-aware)
├── OurStrength — Key metrics (500+ workers, est. 2022, 20+ yrs, 50+ partners)
├── WhatWeDo — 4 service cards (Recruitment, Bulk Hiring, Visa, Deployment)
├── HowItWorks — 4-step process (Requirement → Sourcing → Docs → Deploy)
├── CardCarousel — Services carousel
├── HomeServiceBento — Service bento grid
├── ServicesShowcase — Projects showcase
├── CountriesWeServe — India→Russia deployment pipeline
├── IndustriesWeServe — Industry image cards
├── WhyUs — Why choose Taha Airwaves
├── Partners — 20 logo marquee
├── Testimonials — Client testimonials with country flags
├── BlogPreview — Latest articles (light theme)
└── Cta — Full-width CTA section (#8E0935 bg)
```

### 4.3 Key Component Files

| File | What It Does |
|---|---|
| `src/app/layout.js` | Root layout, font loading, metadata, Providers wrapper |
| `src/app/globals.css` | Theme variables (Tailwind v4 `@theme`) |
| `src/context/language.jsx` | Language context with RU/EN translations |
| `src/components/providers.jsx` | Client-side wrapper for LanguageProvider |
| `src/components/header/index.jsx` | Black navbar, red logo, language toggle, VK/Telegram/WhatsApp |
| `src/components/footer/index.jsx` | Red logo, clickable addresses, white social icons |
| `src/components/chatbot/index.jsx` | Floating AI chatbot |

---

## 5. API ROUTES

### 5.1 `/api/chat` (POST)
- Gemini 2.0 Flash chatbot
- System prompt: Russia-focused services and info

### 5.2 `/api/contact` (POST)
- SMTP contact form
- Env: `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `CONTACT_EMAIL`

---

## 6. DEPLOYMENT

- **Domain**: tahaairwaves.ru
- **Repository**: https://github.com/dubeysanskar/tahaairwaves-russia
- **Branch**: main

```bash
npm install
npm run dev  # → http://localhost:3000
npm run build && npm start  # Production
```

---

## 7. KNOWN CONSTRAINTS

1. **No gradients** — Flat solid colors only
2. **Russia-only content** — Except About Us (global)
3. **Professional language** — No "skilled labour", use "workforce solutions"
4. **Navbar NOT sticky** — Black `#1a0a10` background
5. **White/light theme** — No dark section backgrounds (except footer and navbar)
6. **Social icons** — White in footer, outlined in navbar
7. **Clickable addresses** — Must open in Google Maps
8. **Red logo always** — `LOGO.png` everywhere, never white or black
9. **Russian default** — Site loads in Russian, toggle switches to English
10. **Hero bg-only animation** — Only background images crossfade, content is static
11. **Hero contact form** — Right side of hero on desktop

---

*This SOP provides complete context for any developer or AI tool working on this project.*
