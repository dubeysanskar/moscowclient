# PROJECT SOP — Taha Airwaves Russia Website

> **Standard Operating Procedure & Complete Context Document**
> This document provides full context for any developer or AI tool working on this project.
> Last updated: March 2026

---

## 1. PROJECT OVERVIEW

This website is a **combination of two source projects**, merged into one:

| Source | What Was Taken |
|---|---|
| **tahafrontend** (tahaairwaves.com) | All content, data, assets, service information, partner logos, office data, country flags, blog content, social links, and the Taha Airwaves brand identity |
| **the-willow-casa-main** | UI/UX design patterns, layout structure, component architecture, animation patterns, font choices, and the Next.js App Router structure |

**Result**: A new website for the Russian deployment at **tahaairwaves.ru**, using the Willow Casa UI design but with Taha Airwaves content, colors, and data.

---

## 2. BRAND & DESIGN SYSTEM

### 2.1 Color Palette — CRITICAL

> ⚠️ **ABSOLUTE RULE: NO GRADIENTS.** The client explicitly prohibits any CSS gradient on backgrounds, buttons, or sections. All backgrounds MUST be flat solid colors.

| Name | Hex Code | CSS Variable | Where to Use |
|---|---|---|---|
| **Primary (Viva Magenta)** | `#8E0935` | `--color-primary` | Buttons, CTAs, primary accents, section dividers, active states |
| **Secondary (Burgundy)** | `#BC264B` | `--color-secondary` | Hover states, secondary accents, italic headings, category labels |
| **Neutral (Cloud Dancer)** | `#FDFBEF` | `--color-neutral` | Page backgrounds, light sections, card backgrounds |
| **Dark** | `#1a0a10` | `--color-dark` | Dark sections (hero, footer, CTA, blog preview), body text color |
| **White** | `#FFFFFF` | — | Card backgrounds, some section backgrounds |

**Usage pattern:**
- Dark sections (hero, footer, blog preview, CTA): `background: #1a0a10`, text: `#FDFBEF`
- Light sections (services, industries, about): `background: #FDFBEF`, text: `#1a0a10`
- Buttons: Primary = `bg: #8E0935, text: #FDFBEF`, hover = `bg: #BC264B`
- Links/accents: `color: #BC264B`, hover: `color: #8E0935`
- Borders: `rgba(142,9,53,0.1)` to `rgba(142,9,53,0.2)` (semi-transparent primary)

### 2.2 Typography

All fonts are loaded via `next/font/google` in `layout.js`.

| Font | CSS Variable | Weight(s) | Usage |
|---|---|---|---|
| **Cormorant Garamond** | `--font-cormorant-garamond` | 300,400,600 | Hero headings, section titles, page titles. Always large (clamp 2rem–4rem+). Often italic for accent words. |
| **Lato** | `--font-lato` | 100,300,400,700,900 | Navigation links, buttons, labels, category tags, footer headings, office names. Typically uppercase tracking-wide. |
| **Oswald** | `--font-oswald` | 200–700 | Stats numbers ONLY (e.g., "5000+", "11+"). Bold weight. |
| **Poppins** | `--font-poppins` | 100–900 | Body text, paragraphs, descriptions, excerpts, form inputs. Primary readable font. |

**Font size pattern:**
- Hero headings: `clamp(4rem, 10vw, 9rem)`
- Section headings: `clamp(2rem, 4vw, 3.5rem)`
- Sub-headings: `1.5rem – 2rem`
- Body text: `0.9rem – 1.05rem`
- Labels/tags: `0.75rem – 0.85rem` with `tracking-[0.12em–0.22em] uppercase`
- Stats: `2rem – 3rem` (Oswald)

### 2.3 Design Patterns

- **Section dividers**: `<div className="w-14 h-1 rounded-full" style={{ background: "#8E0935" }} />` at top of each section heading
- **Card style**: `rounded-2xl p-6` with `border: 1px solid rgba(142,9,53,0.1)` and `hover:shadow-lg`
- **Rounded buttons**: `rounded-full px-7 py-3.5 text-sm tracking-[0.1em] uppercase font-semibold`
- **Hover effects**: Scale on images (`group-hover:scale-105`), translate on arrows (`group-hover:translate-x-1`)
- **Animations**: Framer Motion `useInView` for scroll reveals, `fade-up` pattern
- **Navbar**: NOT sticky/fixed. Flows naturally with page content.

---

## 3. CONTENT DATA SOURCES

### 3.1 Services (11 total)

All service data is defined in `/src/app/services/[slug]/page.js`. Each service has:
- `title`, `metaDesc`, `images[]`, `intro`, `detailedDesc`
- `types[]` — Array of service sub-types (with descriptions after " – ")
- `industries[]` — Array of industry names
- `process[]` — Array of process steps (with descriptions after " – ")
- `benefits[]` — Array of benefit strings
- `faqs[]` — Array of `{ q, a }` objects

**Slugs:** cleaners, all-types-of-drivers, general-labour, loading-unloading-workers, factory-helpers, barista, packing-workers, emigration-immigration-clearance, document-attestation-services, hajj-umrah-travel-services, employee-outsourcing-solutions

**To add a new service:**
1. Add full data object to `servicesData` in `/src/app/services/[slug]/page.js`
2. Add to service listing grid in `/src/components/services/services-main/index.jsx`
3. Add to navbar service links if needed
4. Add images to `/public/service-and-blog/`

### 3.2 Blog Articles (6 total)

Blog data is in `/src/data/blog-posts.js` (shared module imported by both client and server components).

Each article has: `slug`, `title`, `excerpt`, `content` (markdown-like with \*\*bold\*\* and \n\n), `date`, `category`, `readTime`

**To add a new blog post:**
1. Add to `BLOG_POSTS` array in `/src/data/blog-posts.js`
2. It auto-appears in the blog listing and generates a static detail page

### 3.3 Countries We Serve (11 total)

Defined in `/src/components/home/countries-we-serve/index.jsx`.

Flags use: `https://flagcdn.com/w160/{code}.png` (ISO 3166-1 alpha-2)

Countries: UAE (ae), Saudi Arabia (sa), Qatar (qa), Kuwait (kw), Oman (om), Bahrain (bh), Jordan (jo), Egypt (eg), Russia (ru), Mauritius (mu), Malaysia (my)

**To add a country:** Add `{ name, code, flag }` to the `countries` array.

### 3.4 Partners (20 logos)

Logos are in `/public/images/partners/`. Defined in `/src/components/home/partners/index.jsx`.

**To add a partner:** Add logo file to `/public/images/partners/`, then add `{ src, alt }` to the `partners` array.

### 3.5 Industries (9 total)

Defined in `/src/components/home/industries-we-serve/index.jsx`.

Industries: Construction, Hospitality, Logistics, Healthcare, Manufacturing, Facility Management, Oil & Gas, IT & Telecom, Retail & FMCG

Each uses an image from `/public/images/`.

### 3.6 Office Locations (5 total)

Used in Footer (`/src/components/footer/index.jsx`) and Contact page (`/src/components/contact/contact-main/index.jsx`).

Offices: New Delhi (Head Office), Noida, Jeddah (Saudi Arabia), Moscow (Russia), Dubai (UAE)

### 3.7 Social Media Links (5 total)

Used in Header, Footer, Contact, and Mobile Menu:

| Platform | URL |
|---|---|
| Facebook | https://facebook.com/tahaairwaves1 |
| Instagram | https://www.instagram.com/taha_airwaves |
| LinkedIn | https://linkedin.com/company/tahaairwaves |
| X (Twitter) | https://x.com/tahaairwaves |
| WhatsApp | https://wa.me/919315226961 |

### 3.8 Company Info

- **Company**: Taha Airwaves Private Limited
- **RA License**: B-3260/DEL/COM/100/5/11259/2025
- **Established**: 2005
- **Head Office**: 71A, 3rd Floor, Taimoor Nagar, New Friends Colony, New Delhi 110025
- **Phone**: +91 93152 26961
- **Email**: info@tahaairwaves.com

---

## 4. COMPONENT ARCHITECTURE

### 4.1 Layout Structure

```
layout.js
├── Header (non-sticky, with top info bar on desktop)
├── LenisProvider (smooth scrolling wrapper)
│   └── {children} (page content)
├── Footer (5-column grid, world-map bg, marquee strip)
└── Chatbot (floating bottom-right)
```

### 4.2 Homepage Sections (in order)

```
page.js
├── Hero — 3 auto-sliding bg images, stats bar, CTA buttons
├── HomeAbout — Two-column text with Learn More / Get in touch links
├── CardCarousel — Services carousel (horizontal scroll)
├── HomeServiceBento — Service bento grid
├── ServicesShowcase — Services showcase cards
├── CountriesWeServe — 11 flags in dual marquees + stats
├── IndustriesWeServe — 9 industry image cards with hover
├── WhyUs — Why choose Taha Airwaves section
├── Partners — 20 logo marquee (grayscale → color)
├── BlogPreview — 3 latest articles (dark background)
└── Cta — Full-width CTA with contact + WhatsApp buttons
```

### 4.3 Key Component Files

| File | What It Does |
|---|---|
| `src/app/layout.js` | Root layout, font loading, metadata, SEO, favicons |
| `src/app/globals.css` | Theme color variables, font variables (Tailwind v4 `@theme`) |
| `src/components/header/index.jsx` | Navbar with top info bar, 5 social links, mobile menu |
| `src/components/footer/index.jsx` | 5-column footer, world-map bg, license badge, marquee |
| `src/components/chatbot/index.jsx` | Floating AI chatbot with Gemini API |
| `src/app/api/chat/route.js` | Gemini 2.0 Flash API endpoint |
| `src/app/api/contact/route.js` | SMTP contact form endpoint |
| `src/data/blog-posts.js` | Blog articles data (shared between client/server) |

---

## 5. API ROUTES

### 5.1 `/api/chat` (POST)
- **Purpose**: AI chatbot powered by Gemini 2.0 Flash
- **Input**: `{ messages: [{ role, content }] }`
- **Output**: `{ reply: "..." }`
- **Env**: `GEMINI_API_KEY`
- **Model**: `gemini-2.0-flash`
- **System prompt** includes all services, countries, contact info

### 5.2 `/api/contact` (POST)
- **Purpose**: Contact form email via SMTP
- **Input**: `{ name, email, phone, service, message }`
- **Output**: `{ success: true/false, message }`
- **Env**: `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `CONTACT_EMAIL`
- **Fallback**: Console logs form data if SMTP not configured

---

## 6. IMAGE ASSETS

### 6.1 Asset Locations

| Path | Contents |
|---|---|
| `/public/LOGO.png` | Dark logo (for light backgrounds) |
| `/public/LOGO-WHITE.png` | White logo (for dark backgrounds, used in header/footer) |
| `/public/favicon.ico` | Favicon |
| `/public/android-chrome-*.png` | PWA icons |
| `/public/images/partners/*.png` | 20 partner company logos |
| `/public/images/hero-bg-new.png` | Hero section background |
| `/public/images/world-map.png` | Footer background overlay |
| `/public/images/hospitality.png` | Industry: Hospitality |
| `/public/images/healthcare.png` | Industry: Healthcare |
| `/public/images/oil-gas.png` | Industry: Oil & Gas |
| `/public/images/it-telecom.png` | Industry: IT & Telecom |
| `/public/images/retail-fmcg.png` | Industry: Retail & FMCG |
| `/public/images/facility-management.png` | Industry: Facility Management |
| `/public/images/demo4.jpeg` | Hero slide 2, Construction industry |
| `/public/images/demo5.jpeg` | Hero slide 3, Logistics industry |
| `/public/images/demo7.jpeg` | Manufacturing industry |
| `/public/service-and-blog/*.jpeg` | 17 service/blog images |

### 6.2 Country Flags (External CDN)

Flags are loaded from `https://flagcdn.com/w160/{ISO_CODE}.png`. No local copies needed.

---

## 7. HOW-TO GUIDES

### 7.1 How to Change Colors

1. Open `/src/app/globals.css`
2. Update the `@theme inline` variables:
   ```css
   --color-primary: #NEW_COLOR;
   --color-secondary: #NEW_COLOR;
   --color-neutral: #NEW_COLOR;
   ```
3. **IMPORTANT**: Colors are also hardcoded in component `style={{}}` props as inline styles. Do a global search for the old hex codes and replace:
   - Search for `#8E0935` → replace with new primary
   - Search for `#BC264B` → replace with new secondary
   - Search for `#FDFBEF` → replace with new neutral
   - Search for `#1a0a10` → replace with new dark

### 7.2 How to Change Fonts

1. Update font imports in `/src/app/layout.js` (the `next/font/google` imports)
2. Update CSS variables in `/src/app/globals.css`
3. Search for `fontFamily: "var(--font-*)` across components and update

### 7.3 How to Increase/Decrease Font Sizes

Font sizes use `clamp()` across the site:
- **Headings**: Search for `fontSize: "clamp(` in components
- **Body**: Search for `fontSize: "0.9rem` or `fontSize: "1rem`
- **Labels**: Search for `text-xs` or `text-sm` Tailwind classes

### 7.4 How to Add a New Service

1. Add data to `servicesData` in `/src/app/services/[slug]/page.js`:
   ```js
   'your-slug': {
       title: '...',
       metaDesc: '...',
       images: ['/service-and-blog/YourImage.jpeg'],
       intro: '...',
       detailedDesc: '...',
       types: ['Type 1 – Description', 'Type 2 – Description'],
       industries: ['Industry 1', 'Industry 2'],
       process: ['Step 1 – Desc', 'Step 2 – Desc'],
       benefits: ['Benefit 1', 'Benefit 2'],
       faqs: [{ q: 'Question?', a: 'Answer.' }],
   }
   ```
2. Add to `SERVICES` array in `/src/components/services/services-main/index.jsx`
3. Add image to `/public/service-and-blog/`

### 7.5 How to Add a New Blog Post

1. Add to `BLOG_POSTS` in `/src/data/blog-posts.js`:
   ```js
   {
       slug: "your-slug",
       title: "Article Title",
       excerpt: "Short description...",
       content: `Full article text with **bold** and\\n\\nparagraph breaks...`,
       date: "Mar 20, 2026",
       category: "Category",
       readTime: "5 min read",
   }
   ```
2. It auto-appears in listings and generates a detail page at `/blog/your-slug`

### 7.6 How to Add a New Country

In `/src/components/home/countries-we-serve/index.jsx`, add to `countries` array:
```js
{ name: "Country Name", code: "xx", flag: "https://flagcdn.com/w160/xx.png" }
```

### 7.7 How to Add a New Partner Logo

1. Save logo image to `/public/images/partners/`
2. Add to `partners` array in `/src/components/home/partners/index.jsx`:
   ```js
   { src: "/images/partners/your-logo.png", alt: "Partner Name" }
   ```

### 7.8 How to Add a New Office

1. Add to `offices` array in `/src/components/footer/index.jsx`
2. Add to `OFFICES` array in `/src/components/contact/contact-main/index.jsx`:
   ```js
   {
       city: "City, Country",
       address: "Full address",
       phone: "+XX XXX XXX XXXX",
       email: "city@tahaairwaves.com",
       mapUrl: "https://maps.google.com/?q=LAT,LNG",
   }
   ```

### 7.9 How to Update Social Media Links

Social links are defined in **4 places**:
1. `/src/components/header/index.jsx` — `socials` array
2. `/src/components/footer/index.jsx` — `socials` array
3. `/src/components/contact/contact-main/index.jsx` — `socials` array
4. `/src/components/home/blog-preview/index.jsx` (no socials here currently)

Update all of them when changing a social link.

---

## 8. DEPLOYMEN T & ENVIRONMENT

### 8.1 Development
```bash
npm install
npm run dev  # → http://localhost:3000
```

### 8.2 Production Build
```bash
npm run build
npm start      # OR deploy to Hostinger/Vercel
```

### 8.3 GitHub Repository
- **Repo**: https://github.com/dubeysanskar/tahaairwaves-russia
- **Branch**: main

### 8.4 Hosting
- **Target**: Russian cloud (due to Indian cloud issues)
- **Domain**: tahaairwaves.ru

---

## 9. DEPENDENCIES

| Package | Purpose |
|---|---|
| next | Framework (v16.1.6) |
| react, react-dom | UI library |
| framer-motion | Animations |
| react-icons | Icon library (Fa, Fi, Md) |
| @studio-freight/lenis | Smooth scrolling |
| tailwindcss | Utility CSS |
| nodemailer | SMTP emails (contact form) |

---

## 10. KNOWN CONSTRAINTS

1. **No gradients** — Client explicitly requires flat solid colors
2. **Navbar is NOT sticky** — Scrolls with page content (client preference)
3. **Colors are hardcoded** — Both in CSS variables AND inline styles. Must search-replace both when changing.
4. **Blog data is in JS** — Not in a CMS. Edit `/src/data/blog-posts.js` directly.
5. **Service data is in the page file** — Not in a CMS. Edit `/src/app/services/[slug]/page.js` directly.
6. **Flags from CDN** — Country flags use flagcdn.com, requires internet access.
7. **Social links in multiple files** — Must update all 3 files when changing (header, footer, contact).

---

*This SOP document provides complete context for any developer or AI tool to understand, maintain, and extend this project.*
