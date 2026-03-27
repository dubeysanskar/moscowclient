# PROJECT SOP — Taha Airwaves Russia Website

> **Standard Operating Procedure & Complete Context Document**
> This document provides full context for any developer or AI tool working on this project.
> Last updated: March 27, 2026 (Session 9 — Services Tabs, StaggerTestimonials, Horizontal Scroll WhatWeDo, Process SVG Visibility)

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

All fonts loaded via `next/font/google` in `layout.js`. Inter includes `cyrillic` subset for Russian text.

| Font | CSS Variable | Weight(s) | Usage |
|---|---|---|---|
| **Inter** | `--font-inter` | 400,600,700,800,900 | **PRIMARY**: All headings, navigation, buttons, labels, stats, section titles |
| **Poppins** | `--font-poppins` | 100–900 | Body text, paragraphs, descriptions |

> ⚠️ **NEVER use Cormorant Garamond, Lato, or Oswald**. Inter is the ONLY heading/UI font. Poppins is the ONLY body font.

**Font size pattern (bigger for visibility):**
- Hero headings: `clamp(4rem, 10vw, 9rem)` (Inter, font-weight: 900)
- Section headings: `clamp(1.8rem, 3.5vw, 2.5rem)` (Inter, font-weight: 900)
- Sub-headings: `1.5rem – 1.8rem` (Inter, font-weight: 700)
- Body text: `1rem – 1.15rem` (Poppins)
- Labels/tags: `0.85rem – 0.95rem` (Inter)
- Stats: `2.5rem – 3.5rem` (Inter, font-weight: 900)

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

> Each service detail page (`src/app/services/[slug]/page.js`) passes bilingual data to a client component (`src/components/services/service-detail/index.jsx`) that renders based on the current language. All services have `title_ru`, `intro_ru`, `types_ru`, `industries_ru`, `process_ru`, `benefits_ru`, `faqs_ru`.

### 3.2 Social Media (Russia-relevant platforms)

| Platform | Icon Color | URL |
|---|---|---|
| VK | White (footer) / Brand #8E0935 (contact) | https://vk.com/tahaairwaves |
| Telegram | White (footer) / Brand #8E0935 (contact) | https://t.me/tahaairwaves |
| WhatsApp | White (footer) / Brand #8E0935 (contact) | https://wa.me/79850748828 |

### 3.3 Key Metrics / Our Strength

- Workers recruited in Russia: **500+**
- Russia operations since: **2022**
- Partners: **120+**
- Placement rate: **95%**
- Countries served globally: **21+**

### 3.4 Company Info

- **Company**: Taha Airwaves Private Limited
- **RA License**: B-3260/DEL/COM/100/5/11259/2025
- **Established**: 2005 (global), 2022 (Russia operations)
- **Head Office**: 71A, 3rd Floor, Taimoor Nagar, New Friends Colony, New Delhi 110025
- **Moscow Office**: Skolkovo Innovation Center, Malevicha Street, 2k4, 143026
- **Phone (Russia)**: +7 985 074-88-28
- **Email (Russia)**: info@tahaairwaves.ru
- **Website (Russia)**: www.tahaairwaves.ru
- **Phone (India)**: +91 93152 26961
- **Email (India)**: info@tahaairwaves.com

### 3.5 Blog Content

- 6 blog posts in `src/data/blog-posts.js`
- All posts have: `title_ru`, `excerpt_ru`, `content_ru`, `category_ru`, `readTime_ru`
- Blog detail page uses client component `src/components/blog/blog-detail/index.jsx` for language switching

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
12. **Splash screen** — Multilingual "Hello" greeting animation in `src/components/splash/index.jsx`. Controlled by `providers.jsx` via `sessionStorage('taha_sp')` — shows ONLY on first page load, NEVER on client-side navigation. `showSplash` state starts `false` → `useEffect` enables it once if no key. NEVER use inline HTML splash in layout.js (causes site breakage).
13. **About page** — Full content: Our Story (3 paragraphs), Mission/Vision/Strategy, Core Values (4 cards), Industries (17 tags with `{en, ru}`), Global Presence (with `details_ru`), Countries Served (with `name_ru`)
14. **Footer office links** — Hash navigation to contact page: `/contact#office-delhi`, `/contact#office-noida`, `/contact#office-moscow`
15. **Service detail pages** — All content Russia-focused. No GCC/Gulf country lists. Uses Russia Deployment card instead of Countries We Deploy To. All data bilingual (en/ru).
16. **Navbar & Contact page** — Show Russian contact info: `+7 985 074-88-28`, `info@tahaairwaves.ru`. Social icons use brand color `#8E0935` (not platform colors).
17. **SVG Illustration Library** — `src/components/decorators/SVGIllustrations.jsx` contains 17 reusable SVG background components (ConcentricCircles, DotMatrix, StarBurst, HexGrid, ArrowDown, ArrowUp, ChevronPattern, CrossPattern, FlowingCurves, WavyLines, NetworkMesh, CircuitBoard, NestedFrames, GlobeOutline, etc.). Use these for section backgrounds at 0.06–0.14 opacity.
18. **SVG z-Index Architecture** — All sections follow: z-[1] = decorative SVGs (pointer-events-none), z-[2] = secondary overlays (accent bars, BackgroundPaths), z-10 = content containers. SVGs must NEVER overlap or blur text.
19. **New UI Components** — `radial-orbital-timeline.jsx` (orbital node animation), `badge.jsx` (shadcn Badge), `card.jsx` (shadcn Card), `shape-landing-hero.jsx` (ElegantShape floating pills), `background-paths.jsx` (FloatingPaths animated SVG). `button.jsx` already exists.
20. **Section Backgrounds** — Most home sections use `#FDFBEF` (Cloud Dancer) as background. White `#FFFFFF` reserved for card surfaces and form fields. `#8A0029` for CTA section.
21. **Brand Vocabulary** — Approved: "Manpower infrastructure", "Workforce deployment", "Verified talent", "Regulatory compliance", "End-to-end solutions", "Operational accountability", "Deployment timelines", "Cross-border workforce", "Scalable operations". AVOID: "Dream jobs", "Life-changing", "We believe", "Best in the market", "World-class", "Revolutionary", "Disruptive". Example correct: "We manage workforce deployment through structured and compliant processes."

---

*This SOP provides complete context for any developer or AI tool working on this project.*
