# PROJECT SOP — Taha Airwaves Russia Website

> **Standard Operating Procedure & Complete Context Document**
> This document provides full context for any developer or AI tool working on this project.
> Last updated: March 29, 2026 (Session 13 — 21 SEO Pages, Russian-Only Policy, Office Expansion, UI Fixes)

---

## 1. PROJECT OVERVIEW

This website is a **Russia-market focused** deployment of Taha Airwaves, serving as a dedicated landing page for the Russian market.

| Aspect | Detail |
|---|---|
| **Company** | Taha Airwaves Private Limited |
| **Global HQ** | New Delhi, India (est. 2015) |
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

| Platform | Icon | URL |
|---|---|---|
| WhatsApp | FaWhatsapp | https://wa.me/qr/TKSOMEYZZW2CN1 |
| Telegram | FaTelegramPlane | https://t.me/tahaairwaves |
| VK Video | FaVk | https://vkvideo.ru/@tahaairwaves |
| Rutube | FaYoutube | https://rutube.ru/channel/76971642/ |
| Max | Custom SVG | https://max.ru/u/f9LHodD0cOIMJiIqD-D832F8g35uW7T1VTQlUSH07133auTjMZ-FQlggpkA |

### 3.3 Key Metrics / Our Strength

- Workers recruited in Russia: **500+**
- Russia operations since: **2022**
- Partners: **120+**
- Placement rate: **95%**
- Countries served globally: **21+**

### 3.4 Company Info

- **Company**: Taha Airwaves Private Limited
- **RA License**: B-3260/DEL/COM/100/5/11259/2025
- **Established**: 2015 (global), 2022 (Russia operations)
- **Head Office**: 71A, 3rd Floor, Taimoor Nagar, New Friends Colony, New Delhi 110025
- **Moscow Office**: Skolkovo Innovation Center, Malevicha Street, 2k4, 143026
- **Phone (Russia)**: +7 985 074-88-28
- **Email (Russia)**: info@tahaairwaves.ru
- **Website (Russia)**: www.tahaairwaves.ru
- **Phone (India)**: +91 93152 26961
- **Email (India)**: info@tahaairwaves.com

### 3.5 Blog Content

- 9 blog posts in `src/data/blog-posts.js`
- All posts have: `title_ru`, `excerpt_ru`, `content_ru`, `category_ru`, `readTime_ru`
- Blog detail page uses client component `src/components/blog/blog-detail/index.jsx` for language switching
- New blog posts (Session 12): cost-of-hiring-indian-workers-russia, why-indian-labour-best-for-russia, how-to-hire-foreign-workers-legally-russia

### 3.6 SEO Landing Pages (Not In Navigation — Russian Only)

21 keyword-targeted landing pages at `/seo/*` for organic search ranking. Not linked in navigation. All content exclusively in Russian (only "Taha Airwaves" in English). Uses `SEOPageTemplate` component and `seo-links.js` for internal cross-linking.

**Categories:**
- **5 original pages**: indian-manpower-russia, recruitment-agency-russia, construction-workers-russia, fast-workforce-deployment-russia, visa-work-permit-russia
- **11 city pages**: Moscow, Saint Petersburg, Mytishchi, Lyubertsy, Korolyov, Krasnogorsk, Zheleznodorozhny, Odintsovo, Zhukovsky, Kolomna, Mozhaysk
- **5 general pages**: indian-workers-for-russia, indian-manpower-agency-contact, recruitment-offices-india, best-recruitment-agencies-india, best-staffing-agencies-india

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
├── Hero — 3 bg images (crossfade), static content, contact form, stats bar (100%, 📍 Moscow, 500+, 10+)
├── HomeAbout — Two-column intro (Russia-focused, language-aware)
├── OurStrength — Key metrics (500+ workers, est. 2022, 10+ yrs, 50+ partners)
├── WhatWeDo — "Why Russian Companies Choose Us?" (5 cards incl. Local Support in Moscow)
├── CardCarousel — Services carousel
├── HomeServiceBento — How We Work (6 steps incl. No Hidden Fees, Transparency)
├── ServicesShowcase — Projects showcase
├── IndustriesWeServe — Industry image cards
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
| `src/components/social-hub/index.jsx` | Floating left-side social links panel (WhatsApp, Telegram, Max, VK, RuTube) — translated RU/EN |
| `src/components/seo/SEOPageTemplate.jsx` | Reusable template for all 21 SEO landing pages |
| `src/data/seo-links.js` | Internal cross-linking config for SEO pages |
| `src/app/sitemap.js` | Auto-generated sitemap.xml (46 URLs) |
| `src/app/robots.js` | Yandex-optimized robots.txt |
| `public/llms.txt` | Russian AI model info file |
| `SEO.md` | Client-facing SEO optimization report |

---

## 5. API ROUTES

### 5.1 `/api/chat` (POST)
- Uses `@google/genai` SDK with `gemini-2.5-flash` model
- Russia-focused system prompt with full company context
- Responds in user's language (RU/EN)
- Fallback contact: +7 985 074-88-28, info@tahaairwaves.ru
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
13. **Chatbot scroll** — Chat panel uses `overscrollBehavior: contain` and `onWheel` stopPropagation to prevent background page scroll when scrolling inside the chatbot.
13. **About page** — Full content: Our Story (3 paragraphs), Mission/Vision/Strategy, Core Values (4 cards), Industries (17 tags with `{en, ru}`), Global Presence (with `details_ru`), Countries Served (with `name_ru`)
14. **Footer office links** — Hash navigation to contact page: `/contact#office-moscow`, `/contact#office-delhi`, `/contact#office-noida`, `/contact#office-saudi`, `/contact#office-dubai` — Moscow listed first
15. **Service detail pages** — All content Russia-focused. No GCC/Gulf country lists. Uses Russia Deployment card instead of Countries We Deploy To. All data bilingual (en/ru).
16. **Navbar & Contact page** — Show Russian contact info: `+7 985 074-88-28`, `info@tahaairwaves.ru`. Social icons use brand color `#8E0935` (not platform colors).
17. **SVG Illustration Library** — `src/components/decorators/SVGIllustrations.jsx` contains 17 reusable SVG background components (ConcentricCircles, DotMatrix, StarBurst, HexGrid, ArrowDown, ArrowUp, ChevronPattern, CrossPattern, FlowingCurves, WavyLines, NetworkMesh, CircuitBoard, NestedFrames, GlobeOutline, etc.). Use these for section backgrounds at 0.06–0.14 opacity.
18. **SVG z-Index Architecture** — All sections follow: z-[1] = decorative SVGs (pointer-events-none), z-[2] = secondary overlays (accent bars, BackgroundPaths), z-10 = content containers. SVGs must NEVER overlap or blur text.
19. **New UI Components** — `radial-orbital-timeline.jsx` (orbital node animation), `badge.jsx` (shadcn Badge), `card.jsx` (shadcn Card), `shape-landing-hero.jsx` (ElegantShape floating pills), `background-paths.jsx` (FloatingPaths animated SVG). `button.jsx` already exists.
20. **Section Backgrounds** — Most home sections use `#FDFBEF` (Cloud Dancer) as background. White `#FFFFFF` reserved for card surfaces and form fields. `#8A0029` for CTA section.
21. **Brand Vocabulary** — Approved: "Manpower infrastructure", "Workforce deployment", "Verified talent", "Regulatory compliance", "End-to-end solutions", "Operational accountability", "Deployment timelines", "Cross-border workforce", "Scalable operations". AVOID: "Dream jobs", "Life-changing", "We believe", "Best in the market", "World-class", "Revolutionary", "Disruptive". Example correct: "We manage workforce deployment through structured and compliant processes."

---

## 8. LIVE PAGES LINKS

> All live URLs on **https://tahaairwaves.ru** — Total: **46 pages**

### 8.1 Static Pages (5)

| Page | URL |
|------|-----|
| Home | https://tahaairwaves.ru/ |
| About | https://tahaairwaves.ru/about |
| Services | https://tahaairwaves.ru/services |
| Blog | https://tahaairwaves.ru/blog |
| Contact | https://tahaairwaves.ru/contact |

### 8.2 Service Pages (11)

| Service | URL |
|---------|-----|
| Cleaners | https://tahaairwaves.ru/services/cleaners |
| All Types of Drivers | https://tahaairwaves.ru/services/all-types-of-drivers |
| General Labour | https://tahaairwaves.ru/services/general-labour |
| Loading & Unloading Workers | https://tahaairwaves.ru/services/loading-unloading-workers |
| Factory Helpers | https://tahaairwaves.ru/services/factory-helpers |
| Barista | https://tahaairwaves.ru/services/barista |
| Packing Workers | https://tahaairwaves.ru/services/packing-workers |
| Visa & Immigration | https://tahaairwaves.ru/services/emigration-immigration-clearance |
| Document Attestation | https://tahaairwaves.ru/services/document-attestation-services |
| Skilled Technicians | https://tahaairwaves.ru/services/skilled-labourers-technicians |
| Employee Outsourcing | https://tahaairwaves.ru/services/employee-outsourcing-solutions |

### 8.3 Blog Posts (9)

| Blog Post | URL |
|-----------|-----|
| Russia: Top Destination for Indian Workers | https://tahaairwaves.ru/blog/russia-top-destination-indian-workers |
| Overseas Employment Documentation & Visa Guide | https://tahaairwaves.ru/blog/overseas-employment-documentation-visa-guide |
| Trade Testing & Quality Manpower | https://tahaairwaves.ru/blog/trade-testing-quality-manpower |
| Indian Workers Demand in CIS Countries | https://tahaairwaves.ru/blog/indian-workers-demand-cis-countries |
| India Overseas Recruitment Regulatory Framework | https://tahaairwaves.ru/blog/india-overseas-recruitment-regulatory-framework |
| Best Practices: Hiring Indian Manpower | https://tahaairwaves.ru/blog/best-practices-employers-hiring-indian-manpower |
| Cost of Hiring Indian Workers in Russia | https://tahaairwaves.ru/blog/cost-of-hiring-indian-workers-russia |
| Why Indian Labour is Best for Russia | https://tahaairwaves.ru/blog/why-indian-labour-best-for-russia |
| How to Hire Foreign Workers Legally in Russia | https://tahaairwaves.ru/blog/how-to-hire-foreign-workers-legally-russia |

### 8.4 SEO Landing Pages — Hidden (21)

> ⚠️ These pages are **NOT linked in navigation**. They exist solely for search engine ranking. All content is **Russian only**.

**Original SEO Pages:**

| Page | URL |
|------|-----|
| Indian Manpower Russia | https://tahaairwaves.ru/seo/indian-manpower-russia |
| Recruitment Agency Russia | https://tahaairwaves.ru/seo/recruitment-agency-russia |
| Construction Workers Russia | https://tahaairwaves.ru/seo/construction-workers-russia |
| Fast Workforce Deployment | https://tahaairwaves.ru/seo/fast-workforce-deployment-russia |
| Visa & Work Permit Russia | https://tahaairwaves.ru/seo/visa-work-permit-russia |

**City-Specific Pages:**

| City | URL |
|------|-----|
| Moscow | https://tahaairwaves.ru/seo/hire-indian-workers-moscow |
| Saint Petersburg | https://tahaairwaves.ru/seo/hire-indian-workers-saint-petersburg |
| Mytishchi | https://tahaairwaves.ru/seo/hire-indian-workers-mytishchi |
| Lyubertsy | https://tahaairwaves.ru/seo/hire-indian-workers-lyubertsy |
| Korolyov | https://tahaairwaves.ru/seo/hire-indian-workers-korolyov |
| Krasnogorsk | https://tahaairwaves.ru/seo/hire-indian-workers-krasnogorsk |
| Zheleznodorozhny | https://tahaairwaves.ru/seo/hire-indian-workers-zheleznodorozhny |
| Odintsovo | https://tahaairwaves.ru/seo/hire-indian-workers-odintsovo |
| Zhukovsky | https://tahaairwaves.ru/seo/hire-indian-workers-zhukovsky |
| Kolomna | https://tahaairwaves.ru/seo/hire-indian-workers-kolomna |
| Mozhaysk | https://tahaairwaves.ru/seo/hire-indian-workers-mozhaysk |

**General Agency Pages:**

| Page | URL |
|------|-----|
| Indian Workers for Russia | https://tahaairwaves.ru/seo/indian-workers-for-russia |
| Indian Manpower Agency Contact | https://tahaairwaves.ru/seo/indian-manpower-agency-contact |
| Recruitment Offices in India | https://tahaairwaves.ru/seo/recruitment-offices-india |
| Best Recruitment Agencies India | https://tahaairwaves.ru/seo/best-recruitment-agencies-india |
| Best Staffing Agencies India | https://tahaairwaves.ru/seo/best-staffing-agencies-india |

### 8.5 Auto-Generated Files

| File | URL |
|------|-----|
| Sitemap | https://tahaairwaves.ru/sitemap.xml |
| Robots.txt | https://tahaairwaves.ru/robots.txt |
| LLMs.txt | https://tahaairwaves.ru/llms.txt |

---

*This SOP provides complete context for any developer or AI tool working on this project.*
