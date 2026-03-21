# Taha Airwaves — Russia Website

**Government-licensed overseas manpower recruitment agency** deploying verified, skilled workforce from India to Russia, CIS, GCC, and global markets.

🌐 **Live**: [tahaairwaves.ru](https://tahaairwaves.ru)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.1.6 (App Router) |
| Styling | Tailwind CSS + Inline Styles |
| Animations | Framer Motion |
| Smooth Scroll | Lenis |
| Icons | React Icons |
| AI Chatbot | Google Gemini 2.0 Flash |
| Email | Nodemailer (SMTP) |

## Quick Start

```bash
# Install dependencies
npm install

# Create .env.local (see .env.local.example)
cp .env.local.example .env.local

# Start dev server
npm run dev

# Build for production
npm run build
```

## Environment Variables

Create `.env.local` in the project root:

```env
# Gemini AI Chatbot
GEMINI_API_KEY=your_gemini_api_key_here

# SMTP (Contact form email)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password_here
CONTACT_EMAIL=info@tahaairwaves.com

# Site
NEXT_PUBLIC_SITE_URL=https://tahaairwaves.ru
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.js             # Homepage
│   ├── layout.js           # Root layout (Header, Footer, Chatbot)
│   ├── globals.css          # Theme colors & font variables
│   ├── about/page.js       # About page
│   ├── services/page.js    # Services listing
│   ├── services/[slug]/page.js  # Service detail pages (11 slugs)
│   ├── blog/page.js        # Blog listing
│   ├── blog/[slug]/page.js # Blog detail pages (6 articles)
│   ├── contact/page.js     # Contact page
│   └── api/
│       ├── chat/route.js   # Gemini chatbot API
│       └── contact/route.js # SMTP contact form API
├── components/
│   ├── header/             # Navigation bar
│   ├── footer/             # Footer with offices & social links
│   ├── chatbot/            # Floating AI chatbot
│   ├── faq-accordion/      # FAQ accordion for service pages
│   ├── home/               # Homepage sections
│   │   ├── hero/           # Hero with background images
│   │   ├── home-about/     # About preview
│   │   ├── home-services/  # Services carousel
│   │   ├── home-service-bento/
│   │   ├── home-projects/  # Services showcase
│   │   ├── countries-we-serve/  # 11 country flags
│   │   ├── industries-we-serve/ # 9 industry cards
│   │   ├── partners/       # 20 partner logos marquee
│   │   ├── blog-preview/   # Latest blog articles
│   │   ├── cta/            # Call to action
│   │   ├── why-us/         # Why choose us
│   │   └── testimonial/
│   ├── about/              # About page components
│   ├── services/           # Services listing components
│   ├── blog/               # Blog listing component
│   └── contact/            # Contact page components
├── data/
│   └── blog-posts.js       # Blog articles data (shared module)
public/
├── LOGO.png                # Dark logo
├── LOGO-WHITE.png          # White logo
├── favicon.ico             # Favicon
├── images/
│   ├── partners/           # 20 partner logos
│   ├── hero-bg-new.png     # Hero background
│   ├── world-map.png       # Footer background
│   ├── hospitality.png     # Industry images
│   └── ...
└── service-and-blog/       # Service & blog images
```

## Color Scheme

| Color | Hex | Usage |
|---|---|---|
| Primary (Viva Magenta) | `#8E0935` | Buttons, CTAs, headings, accents |
| Secondary (Burgundy) | `#BC264B` | Hover states, secondary accents, links |
| Neutral (Cloud Dancer) | `#FDFBEF` | Backgrounds, light text |
| Dark | `#1a0a10` | Dark backgrounds, body text |

> ⚠️ **No gradients** — Client requirement. All backgrounds use flat solid colors.

## Fonts

| Font | Variable | Usage |
|---|---|---|
| Cormorant Garamond | `--font-cormorant-garamond` | Headings, hero text |
| Lato | `--font-lato` | Navigation, buttons, labels, office names |
| Oswald | `--font-oswald` | Stats numbers |
| Poppins | `--font-poppins` | Body text, paragraphs, descriptions |

## Service Slugs

All 11 services at `/services/[slug]`:

| Slug | Service |
|---|---|
| `cleaners` | Cleaners Manpower |
| `all-types-of-drivers` | All Types of Drivers |
| `general-labour` | Skilled General Labour |
| `loading-unloading-workers` | Loading & Unloading Workers |
| `factory-helpers` | Factory Helpers |
| `barista` | Barista Workers |
| `packing-workers` | Packing Workers |
| `emigration-immigration-clearance` | Emigration & Immigration |
| `document-attestation-services` | Document Attestation |
| `hajj-umrah-travel-services` | Hajj & Umrah Travel |
| `employee-outsourcing-solutions` | Employee Outsourcing |

## Deployment

```bash
npm run build
# Then deploy .next/ to Hostinger, Vercel, or any Node.js host
```

## License

© 2025 Taha Airwaves Private Limited. All Rights Reserved.

**RA License**: B-3260/DEL/COM/100/5/11259/2025
