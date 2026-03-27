# DEVELOPMENT CHANGELOG — Taha Airwaves Russia Website

> Full record of every change made during the UI/UX overhaul.
> This file serves as a complete audit trail for future reference.
> Date: March 21–24, 2026

---

## SESSION OVERVIEW

**Objective**: Build a new website for Taha Airwaves' Russian deployment by combining:
- **UI/UX design** from the Willow Casa website (`the-willow-casa-main`)
- **Content, data & assets** from the original Taha Airwaves website (`tahafrontend`)

**Color requirements**: Exact flat colors only (NO gradients):
- Primary: `#8E0935` (Viva Magenta)
- Secondary: `#BC264B` (Secondary Burgundy)
- Neutral: `#FDFBEF` (Cloud Dancer)
- Dark: `#1a0a10`

**Repository**: https://github.com/dubeysanskar/tahaairwaves-russia

---

## PHASE 1: ASSET MIGRATION

### Logos & Favicons Copied
- `LOGO.png` → `/public/LOGO.png`
- `LOGO-WHITE.png` → `/public/LOGO-WHITE.png`
- `favicon.ico` → `/public/favicon.ico`
- `android-chrome-192x192.png` → `/public/android-chrome-192x192.png`
- `android-chrome-512x512.png` → `/public/android-chrome-512x512.png`
- `apple-touch-icon.png` → `/public/apple-touch-icon.png`
- `favicon-16x16.png` → `/public/favicon-16x16.png`
- `favicon-32x32.png` → `/public/favicon-32x32.png`
- `site.webmanifest` → `/public/site.webmanifest`

### Partner Logos (20 files)
All copied from `tahafrontend/public/images/partners/` → `/public/images/partners/`

### Service & Blog Images (17 files)
Copied from `tahafrontend/public/service and blog/` → `/public/service-and-blog/`

### General Images (15 files)
Copied from `tahafrontend/public/images/` → `/public/images/`

---

## PHASE 2: FOUNDATION CHANGES

### File: `src/app/globals.css`
Color variables updated from Willow Casa theme to Taha Airwaves theme with Tailwind v4 `@theme inline`.

### File: `.env.local`
Environment variables for Gemini AI chatbot and SMTP contact form.

### File: `src/app/layout.js`
Added Chatbot component, updated favicons.

---

## PHASE 3: INITIAL COMPONENT CHANGES

Complete rewrites of: header, footer, hero, industries-we-serve, countries-we-serve, partners, blog-preview, cta, about-main, services-main, blog-main, contact-main, faq-accordion, chatbot.

New files: `src/data/blog-posts.js`, `src/app/blog/[slug]/page.js`, `src/app/services/[slug]/page.js`, `src/app/api/chat/route.js`, `src/app/api/contact/route.js`.

---

## PHASE 4: BUG FIXES

- Blog detail pages not opening → shared data module
- Build failing with `BLOG_POSTS.map is not a function` → shared plain JS module
- Service images not loading → hyphens replacing spaces in folder name

---

## PHASE 5: RUSSIA-FOCUSED OVERHAUL (March 24, 2026)

### Brand Book Audit
- Read all 16 pages of the Taha Airwaves Brand Book
- Audited current website against brand guidelines
- Identified 50+ gradient usages, navy #03204B usage, and global-focused content

### Key Decisions
1. **Typography**: Keep current fonts (Cormorant Garamond, Lato, Oswald, Poppins) — custom TahaAirwaevs font not suitable for web
2. **Gradients**: Removed from solid UI elements; kept image overlays for readability
3. **Navy #03204B**: Removed from new code, replaced with brand colors
4. **Body background**: White (#FFFFFF) primary, Cloud Dancer (#FDFBEF) for alternating sections

### File: `src/components/header/index.jsx` — COMPLETE REWRITE
**Changes:**
- Background changed from dark `#1a0a10` → solid red `#8E0935` (mega menu)
- Social links: Removed Facebook, Instagram, LinkedIn, X/Twitter → Added VK, Telegram, WhatsApp
- Social icon colors: White (not yellow)
- WhatsApp button: Brand pink `#BC264B` (not green `#25D366`)
- Mobile menu: Red theme matching header

### File: `src/components/home/hero/index.jsx` — COMPLETE REWRITE
**Changes:**
- Background: Dark `#1a0a10` → White `#FFFFFF` with light overlay
- Headings: "DEPLOY GLOBAL" → "WORKFORCE RUSSIA", "SKILLED MANPOWER" → "RELIABLE RECRUITMENT", "TRUSTED PARTNERS" → "TRUSTED EXCELLENCE"
- Taglines: Russia-focused, no "skilled labour" wording
- Stats: "5000+ DEPLOYED, 11+ COUNTRIES, 20+ YEARS" → "500+ WORKERS IN RUSSIA, 2022 RUSSIA OPERATIONS, 20+ YEARS GLOBAL EXPERIENCE"
- New Russia hero background image generated

### File: `src/components/footer/index.jsx` — REWRITE
**Changes:**
- Social links: VK, Telegram, WhatsApp (white icons)
- Offices: Delhi, Noida, Moscow (removed Jeddah, Dubai — Russia focus)
- All office addresses are clickable → open Google Maps in new tab
- Description: Russia-focused text
- Added "Technicians" service link

### File: `src/components/home/cta/index.jsx` — MODIFIED
- Heading: "Ready to Deploy Your Global Workforce?" → "Ready to Build Your Workforce in Russia?"
- Subtitle: "Let's Build Your Workforce Together" → "Manpower Recruitment for Russia"

### File: `src/components/home/home-about/index.jsx` — MODIFIED
- Content: Russia-focused (since 2022, Moscow office, Russia operations team)
- Body text size: `text-sm md:text-base` → `text-base md:text-lg`

### File: `src/components/home/our-strength/index.jsx` — NEW
- New "Our Strength / Key Metrics" section
- 4 metric cards: 500+ Workers in Russia, 2022 Russia Operations, 20+ Years Experience, 50+ Partner Companies
- Animated entrance with Framer Motion
- FDFBEF background with white cards

### File: `src/components/home/testimonial/index.jsx` — REWRITE
- 3 testimonials with country flags (Russia flag × 2, UAE flag × 1)
- Professional quotes about workforce quality and recruitment
- Flags displayed inline with client names
- White background theme

### File: `src/components/home/why-us/index.jsx` — MODIFIED
- "Global Reach" → "Russia Expertise"
- Stats: "11+ Countries" → "500+ in Russia", "Since 2022"
- Description: Russia-focused content, Moscow office mention

### File: `src/components/home/countries-we-serve/index.jsx` — COMPLETE REWRITE
- Removed 11-country flag marquee
- New design: India → Russia deployment pipeline
- India flag card (Sourcing Hub) → Deployment stats (500+) → Russia flag card (Operations)
- Key Russian industries: Construction, Hospitality, Manufacturing, Logistics

### File: `src/components/home/blog-preview/index.jsx` — MODIFIED
- Background: Dark `#1a0a10` → Light `#FDFBEF`
- All text colors adjusted for light background
- Blog titles/content slightly updated for Russia focus

### File: `src/components/home/industries-we-serve/index.jsx` — MODIFIED
- Subtitle: "worldwide" → "in Russia"

### File: `src/app/page.js` — MODIFIED
- Added `OurStrength` section after `HomeAbout`
- Added `Testimonials` section between `Partners` and `BlogPreview`

### File: `PROJECT_SOP.md` — COMPLETE REWRITE
- Updated for Russia-only focus
- Social media: VK, Telegram, WhatsApp
- Professional wording guidelines (no "skilled labour")
- White/light theme rules
- Russia est. 2022, 500+ workers metrics
- Updated component architecture with new sections

### File: `public/images/russia-hero-bg.png` — NEW
- Generated Russia-focused hero background image (Moscow cityscape with professional workers)

---

## VERIFICATION

### Build Test
```
npx next build
→ Exit code: 0 ✅
→ All static params generated (27 pages total)
→ 11 service slugs, 6 blog slugs
→ No compilation errors
```

### Visual Browser Check
- ✅ Header: Solid red background, VK/Telegram/WhatsApp, brand-pink WhatsApp button
- ✅ Hero: White/light theme, Russia-focused content, 500+ stats
- ✅ Our Strength: New metrics section visible
- ✅ Countries: India→Russia pipeline instead of 11-country marquee
- ✅ Testimonials: Country flags displayed
- ✅ Blog: Light theme
- ✅ CTA: Russia-focused text
- ✅ Footer: White social icons, clickable map addresses

---

## COMPLETE FILE LIST OF SESSION 2 CHANGES

| File | Action | Description |
|---|---|---|
| `src/components/header/index.jsx` | Rewrite | Red mega menu, VK/Telegram/WhatsApp |
| `src/components/home/hero/index.jsx` | Rewrite | White theme, Russia content |
| `src/components/footer/index.jsx` | Rewrite | Clickable addresses, white social icons |
| `src/components/home/cta/index.jsx` | Modified | Russia CTA text |
| `src/components/home/home-about/index.jsx` | Modified | Russia-focused content |
| `src/components/home/our-strength/index.jsx` | New | Key metrics section |
| `src/components/home/testimonial/index.jsx` | Rewrite | Flags, Russia testimonials |
| `src/components/home/why-us/index.jsx` | Modified | Russia expertise |
| `src/components/home/countries-we-serve/index.jsx` | Rewrite | India→Russia pipeline |
| `src/components/home/blog-preview/index.jsx` | Modified | Light theme |
| `src/components/home/industries-we-serve/index.jsx` | Modified | Russia subtitle |
| `src/app/page.js` | Modified | Added OurStrength + Testimonials |
| `PROJECT_SOP.md` | Rewrite | Russia-focused SOP |
| `public/images/russia-hero-bg.png` | New | Russia hero background |

---

## PHASE 6: ROUND 2 OVERHAUL (March 24, 2026 — Session 3)

### Language Toggle System
- **NEW** `src/context/language.jsx` — Full RU/EN translations for all sections
- **NEW** `src/components/providers.jsx` — Client-side LanguageProvider wrapper
- Language toggle (`🇬🇧 EN / 🇷🇺 РУ`) in top bar, main nav, and mobile menu
- Russian is **default**, English by toggle
- Updated `layout.js`: LanguageProvider wrapper, `lang="ru"`, cyrillic font subset

### Header — REWRITE
- Background: red `#8E0935` → **black `#1a0a10`** (client request)
- Logo: Always **red `LOGO.png`** (not white/black)
- Language toggle button added (3 locations)
- All nav text from language context

### Hero — COMPLETE REDESIGN
- Background images ONLY animate (crossfade every 5s) — content is static
- 3 new Russia bg images generated (construction, factory, hospitality)
- **Contact form** added on right side (name, email, phone, message)
- Slide indicator dots, stats bar at bottom

### New Sections
- **NEW** `src/components/home/how-it-works/index.jsx` — 4-step process (ported from main site)
- **NEW** `src/components/home/what-we-do/index.jsx` — 4 service cards (ported from main site)
- Both language-aware with `useLanguage()` hook

### About Us Page — REWRITE
- Removed ALL dark `#1a0a10` boxes → white/Cloud Dancer cards
- Stats: 500+ Workers in Russia, 50+ Partners (was 5000+ Deployed, 11+ Countries)
- License card: light background instead of black
- Content: Russia-focused (Moscow operations since 2022)

### Contact Page — REWRITE
- Social links: Facebook/Instagram/LinkedIn/X → **VK/Telegram/WhatsApp**
- Offices: Removed Jeddah & Dubai → only Delhi, Noida, Moscow
- Direct Contact card: white instead of black `#1a0a10`

### Other Updates
- `home-about`, `our-strength`, `cta`, `footer` — all updated with `useLanguage()` hook
- Homepage `page.js` — added WhatWeDo + HowItWorks sections
- `PROJECT_SOP.md` — updated with all round 2 changes

### Verification
```
npx next build → Exit code: 0 ✅ (all pages generated)
```

### Complete File List — Session 3

| File | Action | Description |
|---|---|---|
| `src/context/language.jsx` | New | Full RU/EN language context |
| `src/components/providers.jsx` | New | LanguageProvider wrapper |
| `src/app/layout.js` | Modified | Providers, cyrillic, lang=ru |
| `src/components/header/index.jsx` | Rewrite | Black navbar, red logo, lang toggle |
| `src/components/home/hero/index.jsx` | Rewrite | Bg-only animation, contact form |
| `src/components/home/how-it-works/index.jsx` | New | 4-step process |
| `src/components/home/what-we-do/index.jsx` | New | 4 service cards |
| `src/components/home/home-about/index.jsx` | Modified | Language context |
| `src/components/home/our-strength/index.jsx` | Modified | Language context |
| `src/components/home/cta/index.jsx` | Modified | Language context |
| `src/components/footer/index.jsx` | Rewrite | Red logo, language context |
| `src/components/about/about-main/index.jsx` | Rewrite | White cards, Russia stats |
| `src/components/contact/contact-main/index.jsx` | Rewrite | VK/Telegram/WhatsApp, no Jeddah/Dubai |
| `src/app/page.js` | Modified | Added WhatWeDo + HowItWorks |
| `PROJECT_SOP.md` | Modified | Round 2 updates |
| `public/images/hero-russia-1.png` | New | Construction hero bg |
| `public/images/hero-russia-2.png` | New | Factory hero bg |
| `public/images/hero-russia-3.png` | New | Hospitality hero bg |

---

## SESSION 4 — Brand Overhaul (March 24, 2026)

**Purpose**: Complete design overhaul after client dissatisfaction with UI/UX (cursive fonts, gradients, old color palette). New official Taha Airwaves brand palette implemented.

### Brand palette replaced (entire codebase)

| Old (removed) | New (official) |
|---|---|
| `#8E0935` Viva Magenta | `#8A0029` Deep Maroon / Wine Red |
| `#BC264B` Burgundy | `#D32F2F` Bright Red Accent |
| `#1a0a10` Dark | `#262626` Dark Gray |
| `#FDFBEF` Cloud Dancer | `#F7F7F7` Soft Light Gray |
| Cormorant Garamond (serif/cursive) | **Inter** (sans-serif) — only typeface |
| All gradients | Removed entirely — flat solid colors only |

### Files modified in Session 4

| File | Change |
|---|---|
| `src/app/globals.css` | CSS variables replaced with official brand palette |
| `src/components/header/index.jsx` | Sticky `#262626` navbar, Inter font, active underline `#8A0029` |
| `src/components/home/hero/index.jsx` | Stacked giant type, solid overlay, white form card with `#8A0029` header, SVG dot grid, icon stat row |
| `src/components/home/home-about/index.jsx` | Brand palette, `#8A0029` stat card header, Russia-focused |
| `src/components/home/our-strength/index.jsx` | `#262626` bg, `#8A0029`/`#D32F2F` metric accents |
| `src/components/home/what-we-do/index.jsx` | `#F7F7F7` bg, white cards, brand-red accents |
| `src/components/home/how-it-works/index.jsx` | `#FFFFFF` bg, `#262626` icon boxes, numbered badges |
| `src/components/home/industries-we-serve/index.jsx` | `#262626` bg, solid overlays (no gradients), hover red indicator |
| `src/components/home/why-us/index.jsx` | `#F7F7F7` bg, border-left hover cards |
| `src/components/home/countries-we-serve/index.jsx` | `#8A0029` pipeline card, bilingual content |
| `src/components/home/blog-preview/index.jsx` | `#F7F7F7` bg, bilingual RU/EN titles |
| `src/components/home/cta/index.jsx` | `#262626` container, `#8A0029` top strip, SVG decorations |
| `src/components/footer/index.jsx` | `#262626` bg, `#8A0029` top strip + column headers |
| `src/context/language.jsx` | Added 100+ new RU/EN translation keys for all components |

---

## SESSION 5 — Home Remaining Sections + All Sub-Pages (March 24, 2026)

**Purpose**: Rewrite all remaining old-theme home sections and all 4 sub-pages with the official brand palette, Inter font, and full bilingual RU/EN language support.

### Home sections rewritten

| Component | Key changes |
|---|---|
| `home-services/index.jsx` (CardCarousel) | `#262626` dark slide cards, `#8A0029` icon boxes, `#D32F2F` labels, language-aware |
| `home-projects/index.jsx` (ServicesShowcase) | `#F7F7F7` wrapper, white cards, bilingual RU/EN tags, `#8A0029` ID labels |
| `home-service-bento/index.jsx` | Dark process card (steps), `#F7F7F7` CTA card, solid `#8A0029` stats card |
| `testimonial/index.jsx` | Fully bilingual (separate RU/EN text + roles per testimonial), 3 Russia-focused clients |
| `partners/index.jsx` | `#F7F7F7` bg, white bordered logo tiles, solid fade edges (no gradient), stats pill |

### Sub-pages rewritten

| Page | File | Changes |
|---|---|---|
| `/about` | `about-main/index.jsx` | Global scope (India HQ + Russia + UAE/GCC), Inter font, stats grid, values cards, dark global presence card with license info, language-aware |
| `/services` | `services-main/index.jsx` | Brand colors, image cards with `#8A0029` ID tags, solid overlays, all 11 services, language-aware titles |
| `/blog` | `blog-main/index.jsx` | `#FFFFFF` bg, white hover cards with `#8A0029` top strip, bilingual title/excerpt via `post.title_ru`/`post.excerpt_ru`, category pills |
| `/contact` | `contact-main/index.jsx` | Brand palette throughout (Inter, `#8A0029`, `#D32F2F`), language-aware headings/labels/form placeholders in RU/EN, all office map logic preserved |

### Translation keys added (Session 4+5 combined: ~160 keys)
New keys added to `src/context/language.jsx`: `csvc1Title–5`, `bentoTitle`, `bentoStep1–4`, `sspTitle`, `pSvc1–6Title/Desc`, `hireManpower`, `viewAllServices`, `aboutStatLabel1–4`, `missionTitle/Desc`, `visionTitle/Desc`, `promiseTitle/Desc`, `ourServices`, `loadingTitle/Desc`, `baristaTitle/Desc`, `packersTitle/Desc`, `docAttestTitle/Desc`, `techDesc`, `formName/Email/Phone/Submit`, `partnersTitle/TitleAccent/Subtitle`, `testimonialsTitle/TitleAccent/Subtitle` — all in both RU and EN.

### Build status
- Session 4 build: ✅ Exit code 0
- Session 5 build: ✅ Exit code 0

---

## SESSION 6 — SVG Decorations & Component Redesign (March 25, 2026)

### Overview
Comprehensive redesign round addressing client feedback: hero text/form visibility, service card images, countries section layout, and pervasive SVG illustrations/decorations across all sections.

### New Files
| File | Purpose |
|---|---|
| `src/components/decorators/SVGDecorations.jsx` | **10 reusable SVG decoration components**: DotGrid, Crosshair, FlowLine, CurvedConnector, GeometricFrame, DiamondPattern, CircuitLines, PulseRing, GlobeWireframe, CornerOrnament |

### Modified Components

#### Hero (`src/components/home/hero/index.jsx`)
- **Text**: Hardcoded bilingual (EN/RU) — no translation key dependency. Large "WORKFORCE / SOLUTIONS" headline
- **Form**: Glassmorphism contact form (7% bg, 16px blur, 15% border, accent bar, CornerOrnaments)
- **SVG decorations**: DotGrid, Crosshair, GeometricFrame, CircuitLines, FlowLine, CornerOrnaments
- **Stats bar**: Floating white card below hero with CountUp animations (500+/120+/95%/21+), CircuitLines background

#### Services (`src/components/home/home-projects/index.jsx`)
- **Images**: Updated to `/images/services/main-img/10-15.{jpg,png,webp}` (correct service-relevant images)
- **Text**: Hardcoded bilingual titles/descriptions — no raw translation key display
- **SVG**: DotGrid backgrounds, FlowLine header, CornerOrnaments on image corners, arrow overlay on hover

#### Countries (`src/components/home/countries-we-serve/index.jsx`)
- **Layout**: Clean 3-column (India / Pipeline / Russia) with 11-col grid
- **Central card**: Dark `#1A1A1A` background with GlobeWireframe + PulseRing behind CountUp (500+)
- **SVG**: Animated FlowLines, CurvedConnector, CornerOrnaments, DotGrid, Crosshair

#### Footer (`src/components/footer/index.jsx`)
- **Globe background**: 700px wireframe globe SVG (meridians, parallels, rotating ring, marker dots)
- **Additional**: DotPattern top-left, Crosshair top-right

#### All Other Sections (7 sections)
| Section | SVG Decorations Added |
|---|---|
| About | DotPattern, Crosshair, GeometricFrame, CircuitLines |
| Why Us | Crosshair, CircuitLines, CornerOrnaments |
| How It Works | DotGrid, GeometricFrame, CornerOrnaments |
| What We Do | DotGrid, Crosshair, CornerOrnament |
| CTA | GlobeWireframe, CornerOrnaments, DotGrid |
| Our Strength | DotGrid, Crosshair, CornerOrnaments |
| Testimonials | Crosshair, DotGrid, GeometricFrame, CornerOrnaments |

### Build status
- Session 6 build: ✅ Exit code 0 (27 pages generated)

---

## SESSION 7 — Splash Screen, Section Redesigns & Services/About Overhaul (March 25, 2026)

### New Files
| File | Purpose |
|---|---|
| `src/components/splash/index.jsx` | Multilingual "Hello" splash screen — EN first (300ms), 8 rapid greetings (80ms each), Russian last (350ms), total ~1.5s |

### Modified Components

#### Splash Screen (`src/components/splash/index.jsx`)
- 10 languages: Hello, Bonjour, Hola, مرحباً, नमस्ते, Olá, Hallo, こんにちは, 你好, Привет
- Dark background, subtle globe SVG, magenta progress bar, logo at bottom
- First/last greetings brighter + longer, middle ones rapid + dimmer

#### Providers (`src/components/providers.jsx`)
- Integrated SplashScreen on mount, children hidden until splash completes

#### What We Do (`src/components/home/what-we-do/index.jsx`)
- **Complete redesign**: Horizontal card layout with icon + content side-by-side
- FlowLine connectors, hover icon rotation, CornerOrnaments
- Hardcoded bilingual text, CircuitLines background decoration

#### How It Works (`src/components/home/how-it-works/index.jsx`)
- **Complete redesign**: Dark section with animated vertical timeline
- Alternating left/right cards, step nodes on timeline
- Animated connector line (grows on scroll), custom SVG icons
- DotGrid, GeometricFrame, CircuitLines decorations

#### Services Page (`src/components/services/services-main/index.jsx`)
- **Complete redesign**: Full-width hero banner with background image + dark gradient
- GlobeWireframe, CornerOrnaments, DotGrid decorations
- Premium card grid with hover zoom, number badges, arrow overlays
- All text hardcoded bilingual (no translation key dependencies)

#### About Page (`src/components/about/about-main/index.jsx`)
- **Hero banner**: Full-width with `about-story.png`, dark gradient, GlobeWireframe
- Stats cards with hover effects, values cards with accent bars + CornerOrnaments
- Global Presence dark card with GlobeWireframe background
- All text hardcoded bilingual, updated to brand colors (#8E0935, #BC264B, #FDFBEF)

### Build status
- Session 7 build: ✅ Exit code 0

---

## PHASE 8: SESSION 7f — SPLASH FIX, FONT SIZES, ABOUT EXPANSION (March 25, 2026)

### File: `src/components/providers.jsx` — SPLASH SCREEN FIX
**Root cause**: Previous implementation caused two issues:
1. An opacity wrapper div (`opacity: 0 → 1`) created a "curtain" fade-in effect
2. Hydration mismatch (`typeof window` check in useState) caused a flash of the splash on every render

**Final fix**:
- `showSplash` starts as `false` (matches server render → no hydration mismatch)
- `useEffect` runs once on mount: if no `sessionStorage('taha_sp')` key → show splash
- After splash completes, key is set → splash never shows again during session
- On client navigation, Providers stays mounted → `useEffect` never re-runs → no splash flash
- Removed: opacity wrapper div, `window.__TAHA_SPLASH_SHOWN` flag, all inline HTML splash attempts

### File: `src/app/layout.js` — CLEANED
- Removed inline HTML/CSS/script splash that was breaking the site
- Clean layout with only: Providers > Header > LenisProvider > children > Footer > Chatbot

### File: `src/components/home/what-we-do/index.jsx` — BENTO LAYOUT REDESIGN
- Top 2 cards: large, dark gradient backgrounds (magenta/burgundy), glassmorphism icon blocks
- Bottom 3 cards: white with gradient accent bars, hover -translate-y-2 + shadow-2xl
- Ghost numbering (04–05), corner ornaments, FlowLine connectors
- All text `text-base` for descriptions, `text-lg`/`text-xl` for headings

### File: `src/components/about/about-main/index.jsx` — FULL CONTENT EXPANSION
**New sections added:**
- **Our Story**: 3 full paragraphs (company overview, objective, RA License info)
- **Mission / Vision / Strategy**: Dark `#1A1A1A` section, 3 large cards with icons
- **Core Values**: Integrity, Excellence, Global Reach, People First (4 cards)
- **Industries We Cover**: 17 industry tags (IT, Banking, Construction, Healthcare, etc.)
- Global Presence + License info sections retained
- All text hardcoded bilingual (EN/RU)

### Grey Font Size Increases (global)
| File | Change |
|---|---|
| `our-strength/index.jsx` | subtitle `text-sm→text-base`, metric labels `text-xs→text-sm`, descriptions `text-xs→text-sm` |
| `home-projects/index.jsx` | descriptions `text-xs→text-sm`, tags `text-[10px]→text-xs`, section label `text-[10px]→text-sm` |
| `footer/index.jsx` | intro para `text-xs→text-sm`, all links `text-xs→text-sm`, contact details `text-xs→text-sm` |
| `about-main/index.jsx` | hero subtitle `text-sm→text-base`, story text `text-base`, all descriptions `text-base` |

### File: `src/components/contact/contact-main/index.jsx` — HASH NAVIGATION
- Added unique IDs: `office-delhi`, `office-noida`, `office-moscow`
- `useEffect` on mount detects URL hash → auto-selects matching office tab + scrolls

### File: `src/components/footer/index.jsx` — HASH LINKS + MAP BG
- Office links now use hash navigation: `/contact#office-delhi`, `/contact#office-noida`, `/contact#office-moscow`
- Integrated `world-map.png` as subtle footer background (8% opacity)

### Build status
- Session 7f: Verified via browser — all pages render, splash only on first load

---

## SESSION 9 — PREMIUM UI/UX REDESIGN & SVG ARCHITECTURE (March 27, 2026)

### File: `src/components/home/hero/index.jsx`
- Word-by-word animated text reveal (AnimatedWord component)
- Parallax scroll opacity/scale effects (useScroll + useTransform)
- Background image slideshow with crossfade (4 images, 7s cycle)
- Floating particle system (20 animated dots via Framer Motion)
- Contact form: glassmorphism panel (0.75 white bg, 16px blur, dark text/inputs)
- Geometric transition divider at bottom (SVG chevron)
- `overflow-hidden` on form container to fix accent bar overflow

### File: `src/components/home/home-about/index.jsx`
- Background: `#FDFBEF`
- Heading: "Structured Workforce Deployment Solutions" (brand SOP compliant)
- All ElegantShape animations REMOVED (were blurring text/image)
- SVG decorations in `z-[1]` container: ConcentricCircles (right), ArrowDown/Up, DotMatrix, CornerOrnaments
- Content at `z-10` (above decorations)
- Bottom divider: `mt-8` spacing + `h-6` spacer below
- Highlight cards: 4 features (MEA License, 500+, Compliance, 20+ Years)

### File: `src/components/home/our-strength/index.jsx`
- Background: `#FDFBEF`
- Uses `FloatingPaths` from background-paths.jsx directly as absolute overlays (z-[1])
- SVG decorations in z-[2]: DotMatrix, NestedFrames, GlobeOutline, StarBurst, arrows, WavyLines
- Content in z-10 with py-24 lg:py-32 padding
- AnimatedCounter: number counting animation on scroll-into-view

### File: `src/components/home/home-services/index.jsx`
- **RadialOrbitalTimeline** on left, service detail cards on right
- Background: `#FDFBEF` (matching other sections)
- Hardcoded RU/EN titles (no t() keys for heading — keys don't exist)
- New SVG patterns: diagonal hatching, diamond lattice, plus signs, triangles
- All SVGs in z-[1] behind z-10 content

### File: `src/components/home/how-it-works/index.jsx`
- Background: `#FDFBEF` (changed from `#F7F7F7`)
- SVGs repositioned: ConcentricCircles, StarBurst, DotMatrix on LEFT; ArrowDown, FlowingCurves, HexGrid on RIGHT
- All in z-[1] container, content in z-10

### File: `src/components/home/cta/index.jsx`
- 5 ElegantShape floating pills on `#8A0029` background
- Grid pattern overlay, DotMatrix, WavyLines, CornerOrnaments
- White CTA button + transparent outline button

### File: `src/components/home/home-service-bento/index.jsx`
- Added SVG illustrations: HexGrid, StarBurst, ArrowDown, CrossPattern, DotMatrix, WavyLines
- All in z-[1] container behind z-10 content

### New Files Created
- `src/components/ui/radial-orbital-timeline.jsx` — Orbital node timeline (brand maroon/red)
- `src/components/ui/badge.jsx` — shadcn Badge component (JSX)
- `src/components/ui/card.jsx` — shadcn Card component (JSX)
- `src/components/decorators/SVGIllustrations.jsx` — 17 reusable SVG bg components

### File: `src/components/ui/background-paths.jsx`
- Added `preserveAspectRatio="none"` to SVG → paths stretch to fill full container height
- Exported `FloatingPaths` separately for direct use outside BackgroundPaths wrapper

### SVG z-Index Architecture (all sections)
- z-[1]: Decorative SVGs (pointer-events-none)
- z-[2]: Secondary overlays (accent bars, BackgroundPaths)
- z-10: Content containers
