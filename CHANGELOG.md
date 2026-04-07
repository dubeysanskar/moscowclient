# CHANGELOG — Taha Airwaves Russia Website

> All changes tracked per session.

---

## Session 14 — CV Builder Enhancements & Why Choose Us Fix (April 7, 2026)

### CV Builder — New Features
- **File**: `src/components/cv-builder/basic-detail.jsx`
  - **"Applying For" Multi-Select**: Replaced single dropdown with pill-style checkbox grid (11 service-based options + "Other" custom input).
  - **Photo Upload**: Drag-and-drop with circular preview and hover-to-remove.
  - **Passport Details**: Expandable optional section (Number, Nationality, Expiry, Place of Issue).
- **File**: `src/components/cv-builder/index.jsx` — `applyingFor` changed from string to array.
- **File**: `src/components/cv-builder/resume-template.jsx`
  - 3 tabbed templates (Classic, Modern, Minimal) displaying photo, multiple positions, passport data.
  - Print/download fix: single shared `contentRef`, only active template renders.

### Why Choose Us Section — Responsiveness Fix
- **File**: `src/components/home/what-we-do/index.jsx`
  - Desktop (lg+): Horizontal scroll animation, 600vh section, 7th card fully visible.
  - Mobile/Tablet: Responsive grid (1-col / 2-col).
  - Request Service button: fully inline-styled for all screens.

| File | Action | Description |
|---|---|---|
| `src/components/cv-builder/basic-detail.jsx` | Modified | Multi-select, photo, passport |
| `src/components/cv-builder/index.jsx` | Modified | applyingFor → array |
| `src/components/cv-builder/resume-template.jsx` | Modified | 3 templates, print fix |
| `src/components/home/what-we-do/index.jsx` | Modified | Responsive layout fix |

---

## Session 13 — Russian SEO Pages & Canonical URL Fixes (April 1, 2026)

### 31 New Russian-Language SEO Landing Pages
- **Data file**: `src/data/seo-pages-ru.js` (NEW — 494 lines)
  - Contains all 31 pages with: metaTitle, metaDesc, keywords, h1, tagline, sections[], ctaDescription
  - Section types: `text`, `list`, `steps`, `cards`, `contact`
- **Dynamic route**: `src/app/[slug]/page.js` (NEW)
  - Server component using `generateStaticParams()` + `generateMetadata()`
  - Renders via existing `SEOPageTemplate` component
  - `dynamicParams = false` — returns 404 for unknown slugs
  - Canonical URLs set per-page: `https://tahaairwaves.ru/{encoded-slug}`
- **Pages created** (Cyrillic URLs):
  1. `/индийские-работники-в-россии`
  2. `/нанять-рабочих-из-индии`
  3. `/надежные-работники-из-индии`
  4. `/массовый-подбор-персонала-из-индии`
  5. `/рекрутинг-рабочих-из-индии-под-ключ`
  6. `/рабочие-из-индии-для-строительства`
  7. `/рабочие-из-индии-для-производства`
  8. `/индийские-рабочие-для-склада`
  9. `/персонал-из-индии-для-гостиниц`
  10. `/рабочие-из-индии-для-сельского-хозяйства`
  11. `/заказать-рабочих-из-индии`
  12. `/подбор-рабочих-из-индии-цена`
  13. `/агентство-по-подбору-персонала-индия`
  14. `/рабочие-из-индии-с-документами`
  15. `/официальный-наем-рабочих-из-индии`
  16. `/нанять-персонал-из-индии`
  17. `/услуги-подбора-персонала-индия`
  18. `/агентство-по-подбору-рабочих-из-индии`
  19. `/подбор-персонала-из-индии-цена`
  20. `/контакты-рекрутингового-агентства-в-индии`
  21. `/лучшее-рекрутинговое-агентство-в-индии`
  22. `/массовый-рекрутинг-в-индии`
  23. `/как-связаться-с-рекрутинговым-агентством-в-индии`
  24. `/телефон-кадрового-агентства-индия`
  25. `/заказать-подбор-персонала-в-индии`
  26. `/агентство-по-подбору-рабочих-индия-контакты`
  27. `/сколько-стоит-нанять-рабочих-из-индии`
  28. `/процесс-оформления-работников-из-индии`
  29. `/плюсы-индийских-работников`
  30. `/рабочие-в-россию-из-за-границы`
  31. `/faq-работники-из-индии`

### Canonical URL Fixes (All Pages)
- **Root layout** (`src/app/layout.js`): Already had `canonical: "https://tahaairwaves.ru"` — correct for homepage
- **Static pages** (about, blog, contact, services): Already had correct per-page canonicals
- **Projects page** (`src/app/projects/page.js`): Added metadata with `canonical: "https://tahaairwaves.ru/projects"`
- **21 English SEO pages**: Added `alternates.canonical` to all layout.js files via script:
  - indian-manpower-russia, recruitment-agency-russia, construction-workers-russia,
    fast-workforce-deployment-russia, visa-work-permit-russia, hire-indian-workers-moscow,
    hire-indian-workers-saint-petersburg, indian-workers-for-russia, indian-manpower-agency-contact,
    recruitment-offices-india, best-recruitment-agencies-india, best-staffing-agencies-india,
    hire-indian-workers-mytishchi, hire-indian-workers-lyubertsy, hire-indian-workers-korolyov,
    hire-indian-workers-krasnogorsk, hire-indian-workers-zheleznodorozhny, hire-indian-workers-odintsovo,
    hire-indian-workers-zhukovsky, hire-indian-workers-kolomna, hire-indian-workers-mozhaysk
- **Dynamic routes** (services/[slug], blog/[slug]): Already had correct per-slug canonicals
- **New Russian pages** ([slug] dynamic route): Canonicals set via `generateMetadata()` with URL-encoded slugs

### SEO Links Cross-Linking Update
- **File**: `src/data/seo-links.js`
  - Added all 31 Russian page links to `SEO_INTERNAL_LINKS` array
  - Total internal links: 21 English + 31 Russian = 52 cross-links
  - `getLinksExcluding()` helper for per-page link filtering

### Sitemap Update
- **File**: `src/app/sitemap.js`
  - Added `SEO_PAGES_RU` array with all 31 Cyrillic slugs
  - Russian URLs are `encodeURIComponent()`-encoded in sitemap output
  - Added `/projects` to static pages
  - Total sitemap URLs: ~6 static + 11 services + 9 blogs + 21 English SEO + 31 Russian SEO = **78 URLs**

### Files Changed Summary

| File | Action | Description |
|---|---|---|
| `src/data/seo-pages-ru.js` | **NEW** | 31 Russian SEO page data (metadata + content sections) |
| `src/app/[slug]/page.js` | **NEW** | Dynamic route for Russian SEO pages |
| `src/data/seo-links.js` | Modified | Added 31 Russian internal links |
| `src/app/sitemap.js` | Modified | Added 31 Russian slugs + /projects |
| `src/app/projects/page.js` | Modified | Added metadata + canonical |
| `src/app/*/layout.js` (×21) | Modified | Added `alternates.canonical` to all English SEO pages |

---

## Session 12 — SEO Expansion & Content Update (March 29, 2026)

### 3 New Blog Posts
- **File**: `src/data/blog-posts.js`
- Added: "Cost of Hiring Indian Workers in Russia" (cost-of-hiring-indian-workers-russia)
- Added: "Why Indian Labour is Best for Russia" (why-indian-labour-best-for-russia)
- Added: "How to Hire Indian/Foreign Workers Legally in Russia" (how-to-hire-foreign-workers-legally-russia)
- All with full RU/EN content, categories, read times. Total blog posts: 9.

### 5 SEO Landing Pages (Not In Navigation)
- **Directory**: `src/app/seo/*/`
- `/seo/indian-manpower-russia` — Targeting "найм работников из Индии в Россию"
- `/seo/recruitment-agency-russia` — Targeting "кадровое агентство Россия Индия"
- `/seo/construction-workers-russia` — Targeting "строительные рабочие Россия"
- `/seo/fast-workforce-deployment-russia` — Targeting "быстрое размещение персонала"
- `/seo/visa-work-permit-russia` — Targeting "визовое оформление рабочей визы"
- Each page has: layout.js (SEO metadata), page.js (bilingual client component)
- All pages: Taha Airwaves brand palette, Inter font, CTA to /contact

### Sitemap Update
- **File**: `src/app/sitemap.js`
- Updated from 22 → 30 URLs
- Added 3 new blog slugs + 5 SEO page slugs
- SEO pages priority: 0.6

### Documentation Updates
- Updated `SEO.md` — Complete rewrite with all 30 URLs, keyword lists, page metadata
- Updated `PROJECT_SOP.md` — New §3.6 SEO Landing Pages section, blog count 6→9, sitemap 22→30
- Updated `DEVELOPMENT_CHANGELOG.md` — Session 12 audit trail

---

## Session 10 — Homepage Content Overhaul (March 27, 2026)

### Hero Section — Complete Text Rewrite
- **File**: `src/components/home/hero/index.jsx`
- Headline: "WORKFORCE SOLUTIONS" → "Hire Reliable Indian Workforce for Russia – Fast, Legal & Verified"
- Subtitle: Updated to Government Approved Agency messaging with India, Nepal & Indonesia
- Primary CTA: "Our Services" → "Get Workforce Now"
- Secondary CTA: "Contact Us" → "Talk to Expert (WhatsApp)" — links to WhatsApp
- Stat labels: Skilled Workforce → Government Approved, Hiring Partners → Local Office in Moscow, Placement Rate → 5000+ Workers Deployed, Countries Served → 10+ Global Experience

### About Section — Heading & Content Update
- **File**: `src/components/home/home-about/index.jsx`
- Heading: "Structured Workforce Deployment Solutions" → "Your Trusted Manpower Partner in Russia"
- Paragraph: Updated to emphasize local presence in Moscow and compliance with Russian labor laws
- Button: "Learn More" → "Request Candidates"

### Our Strength — Heading Update
- **File**: `src/components/home/our-strength/index.jsx`
- Heading: "Our Strength" → "Strategic Workforce Solutions"
- Subtitle: Updated to "Streamlined recruitment with reliable deployment of skilled manpower within 7–15 days"

### Services (What We Do) — Card Overhaul
- **File**: `src/components/home/what-we-do/index.jsx`
- Section heading: "What We Do" → "Our Recruitment Services"
- 5 service cards with new titles and subtitles:
  1. Cleaners & Indoor Labour (Hotels, Hospitals, Commercial Complexes)
  2. Textile & Garment Workforce (Textile Mills, Garment Factories)
  3. Tailors, Sewing Machine Operators and Master Tailors (Fashion & Garment Industry)
  4. Construction Workforce (Construction Workers & General Labour)
  5. Skilled Workforce & Technical Experts (Technicians & Skilled Trade Workers)

### Hiring Process — 5-Step Update
- **File**: `src/components/home/how-it-works/index.jsx`
- Heading: "How We Work" → "Our Hiring Process"
- Expanded from 4 steps to 5: Requirement Discussion, Candidate Shortlisting, Interviews & Selection, Documentation & Visa, Deployment to Russia
- Grid updated to 5-column layout on desktop

### Why Choose Us — 5 Points
- **File**: `src/components/home/why-us/index.jsx`
- Heading: "Why Choose Us" → "Why Russian Companies Choose Us"
- Expanded from 3 items to 5: Local Support in Moscow, Fast Hiring (7–15 Days), Verified & Skilled Candidates, Complete Documentation Support, Transparent Pricing

### CTA Section — Updated
- **File**: `src/components/home/cta/index.jsx`
- Subtitle: "Manpower Recruitment for Russia" → "STRONG CTA SECTION"
- Heading: "Ready to Build Your Workforce in Russia?" → "Start Hiring Workforce Today"
- Added description text about pre-screened candidates
- Buttons: "Get in Touch" → "Get Proposal", "Our Services" → "WhatsApp Now" (links to WhatsApp)

### Industries — Heading Case Change
- Heading changed to uppercase: "INDUSTRIES WE SERVE"

### Translation Updates
- **File**: `src/context/language.jsx`
- ~50 translation keys updated in both RU and EN
- New keys added: step5Title/Desc, whyItem4Title/Desc, whyItem5Title/Desc, ctaDesc, ctaBtn1, ctaBtn2

---

## Session 9 — Services Tabs, Testimonials Carousel, Horizontal Scroll, SVG Visibility (March 27, 2026)

### Home — AnimatedTabs Services Section
- **File**: `src/components/home/home-projects/index.jsx`
- Integrated `AnimatedTabs` component with 9 service tabs (Cleaners, Drivers, General Labour, Factory Workers, Technicians, Visa & Clearance, Outsourcing, Packers, Attestation)
- Square image layout with bilingual descriptions and tags
- All descriptions rewritten to sound natural (removed "professionally trained" etc.)

### Home — StaggerTestimonials Carousel
- **File**: `src/components/home/testimonial/index.jsx`, `src/components/ui/stagger-testimonials.jsx`
- Replaced 3-card grid with staggered polygon card carousel
- Added 3 new testimonials (Ольга Сидорова, Андрей Козлов, Марина Белова)
- Maroon center card, prev/next navigation, corner-cut polygon design

### Home — WhatWeDo Horizontal Scroll
- **File**: `src/components/home/what-we-do/index.jsx`
- Sticky section (350vh) with horizontal scroll driven by vertical scrolling
- All 5 cards uniform with alternating maroon (#8A0029) / dark (#262626) backgrounds
- Visible 2px borders with box-shadow glow, 3 cards visible at a time on desktop
- Framer Motion `useScroll`/`useTransform` maps vertical scroll to `-40%` horizontal translation

### Home — AnimatedTabs Mobile UX
- **File**: `src/components/ui/animated-tabs.jsx`
- Horizontal scroll with snap, auto-centers active tab, `text-xs` on mobile, hidden scrollbar

### Home — Process Section SVG Visibility
- **File**: `src/components/home/home-service-bento/index.jsx`
- Increased SVG opacity from 0.04-0.08 → 0.25-0.30 range
- Switched Container z-index from Tailwind class to inline style
- Added 3 diamond-shape SVGs at 0.18-0.25 opacity

### Home — WhatWeDo Horizontal Scroll (Desktop) + Vertical Stack (Mobile)
- **File**: `src/components/home/what-we-do/index.jsx`
- Split into `DesktopScroll` (sticky 450vh, hidden < lg) and `MobileStack` (vertical cards, hidden ≥ lg)
- All 5 cards uniform: alternating maroon (#8A0029) / dark (#262626) with visible 2px borders + box-shadow
- Desktop: Framer Motion `useScroll`/`useTransform` maps vertical scroll to -43% horizontal translation
- Mobile: compact vertical cards (minHeight 220px)

### Home — CTA Section Mobile Fix
- **File**: `src/components/home/cta/index.jsx`
- Made SVGs visible on all screens (removed `hidden lg:block`)
- Buttons now full-width on mobile (`w-full sm:w-auto`)
- Added diamond SVGs visible on all screen sizes

### Home — India-Russia Flags
- **File**: `src/components/home/countries-we-serve/index.jsx`
- Replaced emoji flags (🇮🇳/🇷🇺) with flagcdn images (w80) for crisp laptop rendering

### Footer — Gap Fix
- **File**: `src/components/footer/index.jsx`
- Changed `SVGWave` bgColor from `#FDFBEF` (cream) to `#8A0029` (maroon) — eliminates white stripe between CTA and footer
- Removed 3px red accent line at top of footer

---

## Session 8 — Full Localization Overhaul, Contact Update, Blog & Service Pages (March 25, 2026)

### Home Page — ServicesShowcase Russian Tags
- **File**: `src/components/home/home-projects/index.jsx`
- Added `tags_ru` arrays to all 6 services in the showcase:
  - Cleaners: `["Отели", "Больницы", "Коммерция"]`
  - Drivers: `["Лёгкий", "Тяжёлый", "Строительство"]`
  - General Labour: `["Строительство", "Склады"]`
  - Factory Helpers: `["Конвейер", "Станки"]`
  - Packing Workers: `["Логистика", "Склады"]`
  - Employee Outsourcing: `["Кадры", "Соблюдение норм"]`
- Updated rendering to switch between `tags` and `tags_ru` based on language context

### About Page — Full Industry, Presence & Countries Translation
- **File**: `src/components/about/about-main/index.jsx`
- **INDUSTRIES**: Converted from plain string array to `{ en, ru }` object array with 17 entries
  - e.g. `{ en: "Manufacturing", ru: "Производство" }`
- **GLOBAL_PRESENCE**: Added `details_ru` arrays for all 3 offices:
  - Delhi: `["Главный офис в Нью-Дели", "Центральное подбор и координация", ...]`
  - Russia: `["Представительство в Москве", "500+ работников размещено", ...]`
  - GCC: `["Партнёрства в ОАЭ и Саудовской Аравии", ...]`
- **COUNTRIES_SERVED**: Added `name_ru` to all 11 countries
  - e.g. `{ name: "Russia", name_ru: "Россия", flag: "🇷🇺" }`
- Updated rendering logic for all 3 sections to use `lang === 'ru'` switching

### Contact Page — Russian Contact Info & Social Colors
- **File**: `src/components/contact/contact-main/index.jsx`
- **Direct Contact**: Updated phone to `+7 985 074-88-28`, email to `info@tahaairwaves.ru`, WhatsApp to `+7 985 074-88-28`
- **Social Links**: Changed all icon background colors from platform-specific (VK blue `#4680C2`, Telegram blue `#0088CC`, WhatsApp green `#25D366`) → unified brand color `#8E0935`
- Updated WhatsApp link to `wa.me/79850748828`

### Header / Navbar — Russian Contact Info
- **File**: `src/components/header/index.jsx`
- **Desktop top bar**: email → `info@tahaairwaves.ru`, phone → `+7 985 074-88-28`
- **Mobile hamburger menu**: Same email and phone updates
- Both `mailto:` and `tel:` href values updated

### Blog Posts — Full Russian Article Body Translations
- **File**: `src/data/blog-posts.js`
- Added `content_ru` to all 6 blog articles with complete Russian article body text:
  1. "Why Russia is Becoming a Top Destination for Indian Skilled Workers"
  2. "Complete Guide to Overseas Employment: Documentation & Visa Process"
  3. "How Trade Testing Ensures Quality Manpower for Global Employers"
  4. "The Growing Demand for Indian Workers in CIS Countries"
  5. "Understanding India's Overseas Recruitment Regulatory Framework"
  6. "Best Practices for Employers Hiring Indian Manpower"

### Service Detail Pages — Russia Focus & Full Translation
- **File**: `src/app/services/[slug]/page.js` (complete rewrite)
- **File**: `src/components/services/service-detail/index.jsx` (new client component)
- **Architectural change**: Server component now passes data to new client `ServiceDetailContent` component for language switching
- **Content rewrite**: All 11 services rewritten to focus exclusively on Russia:
  - Removed ALL GCC/Gulf country references from intros, descriptions, FAQs
  - Removed "Countries We Deploy To" section (showed 11 countries including Saudi, UAE, etc.)
  - Replaced with **Russia Deployment** card showing Moscow office, Russian contacts
  - Updated stats: `20+ Years` → `500+ Workers`, added `95% Placement`, `21+ Countries`, `100% Compliance`
  - Updated WhatsApp CTA link to Russian number
- **Bilingual fields added to all 11 services**: `title_ru`, `metaDesc_ru`, `intro_ru`, `detailedDesc_ru`, `types_ru`, `industries_ru`, `process_ru`, `benefits_ru`, `faqs_ru`
- **Services updated**: cleaners, all-types-of-drivers, general-labour, loading-unloading-workers, factory-helpers, barista, packing-workers, emigration-immigration-clearance, document-attestation-services, skilled-labourers-technicians, employee-outsourcing-solutions
- **Removed**: `hajj-umrah-travel-services` (not Russia-relevant)
- **Design updates**: Inter font, SVG decorations (`DotGrid`, `CornerOrnament`, `FlowLine`, `CircuitLines`), rounded-lg cards, hover animations

### Files Changed Summary

| File | Action | Description |
|---|---|---|
| `src/components/home/home-projects/index.jsx` | Modified | Added `tags_ru`, bilingual tag rendering |
| `src/components/about/about-main/index.jsx` | Modified | Bilingual industries, presence, countries |
| `src/components/contact/contact-main/index.jsx` | Modified | Russian phone/email, social colors |
| `src/components/header/index.jsx` | Modified | Russian phone/email in navbar |
| `src/data/blog-posts.js` | Modified | Added `content_ru` to all 6 articles |
| `src/app/services/[slug]/page.js` | Rewritten | Russia-focused data, bilingual support |
| `src/components/services/service-detail/index.jsx` | **NEW** | Client-side bilingual service detail |

---

## Session 9 — Premium UI/UX Redesign, Animation System & SVG Library (March 27, 2026)

### Hero Section — Cinematic Overhaul
- **File**: `src/components/home/hero/index.jsx`
- Redesigned with word-by-word text reveal, parallax scrolling, floating particles
- Glassmorphism contact form (0.75 white opacity, 16px blur, dark text inputs)
- Half-screen maroon overlay with gradient transition

### About Section — Brand-Compliant Redesign
- **File**: `src/components/home/home-about/index.jsx`
- Background: `#FDFBEF` (Cloud Dancer)
- Heading changed to "Structured Workforce Deployment Solutions" (brand SOP compliant)
- SVG decorations (ConcentricCircles, arrows, dot patterns) in z-[1] behind z-10 content
- Floating stats card (20+ years), MEA badge, highlight cards
- Bottom divider with proper spacing (mt-8 + h-6 spacer)

### Our Strength — BackgroundPaths Full Coverage
- **File**: `src/components/home/our-strength/index.jsx`
- Uses `FloatingPaths` directly as absolute overlays (full section coverage)
- Background: `#FDFBEF`; animated maroon SVG paths fill the entire section height
- White cards with icon boxes, animated counters, maroon hover accents

### Services "What We Do" — RadialOrbitalTimeline Integration
- **File**: `src/components/home/home-services/index.jsx`
- Added `RadialOrbitalTimeline` (orbital animation on left, detail cards on right)
- New SVG patterns: diagonal hatching, diamond lattice, plus signs, triangles
- Background: `#FDFBEF`; hardcoded RU/EN titles
- **NEW**: `src/components/ui/radial-orbital-timeline.jsx` — brand-adapted orbital timeline

### How It Works — SVG Repositioning & BG Color
- **File**: `src/components/home/how-it-works/index.jsx`
- Background: `#FDFBEF` (from `#F7F7F7`)
- SVGs repositioned: circles/starburst on LEFT, arrows/curves/hexgrid on RIGHT
- All decorations in z-[1] container behind z-10 content

### CTA Section — ElegantShape Floating Shapes
- **File**: `src/components/home/cta/index.jsx`
- 5 ElegantShape floating pills (white/red translucent) on maroon background
- Grid pattern overlay, dot grids, wavy lines, corner ornaments

### New Components Created
| File | Type | Description |
|---|---|---|
| `src/components/ui/radial-orbital-timeline.jsx` | **NEW** | Orbital timeline (maroon theme) |
| `src/components/ui/badge.jsx` | **NEW** | shadcn Badge (JSX) |
| `src/components/ui/card.jsx` | **NEW** | shadcn Card (JSX) |
| `src/components/ui/shape-landing-hero.jsx` | Existing | ElegantShape floating pills |
| `src/components/ui/background-paths.jsx` | Modified | Added `preserveAspectRatio="none"` |
| `src/components/decorators/SVGIllustrations.jsx` | Existing | 17 brand-aligned SVG illustrations |

### SVG Architecture — z-Index System
All sections now follow this z-index pattern:
- `z-[1]`: SVG decorations (pointer-events-none, absolute inset-0)
- `z-[2]`: Secondary overlays (accent bars, BackgroundPaths)
- `z-10`: Content container (Container with relative z-10)
- This prevents SVGs from blurring text or overlapping interactive elements

---

## Previous Sessions

> Sessions 1–8 covered: Initial setup, brand redesign, color palette enforcement, font migration to Inter, hero section, splash screen, blog/services UI, About page expansion, footer/chatbot localization, full RU/EN translation. See git history for details.
