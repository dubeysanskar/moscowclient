# CHANGELOG — Taha Airwaves Russia Website

> All changes tracked per session.

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
