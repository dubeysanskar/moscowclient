import { notFound } from 'next/navigation'
import SEOPageTemplate from '@/components/seo/SEOPageTemplate'
import { getLinksExcluding } from '@/data/seo-links'
import { SEO_PAGES_RU } from '@/data/seo-pages-ru'

export const dynamicParams = true

export function generateStaticParams() {
    // Return both encoded and decoded versions for maximum compatibility
    const params = []
    for (const key of Object.keys(SEO_PAGES_RU)) {
        params.push({ slug: key })
        const encoded = encodeURIComponent(key)
        if (encoded !== key) {
            params.push({ slug: encoded })
        }
    }
    return params
}

function resolveSlug(rawSlug) {
    // Try raw slug directly
    if (SEO_PAGES_RU[rawSlug]) return rawSlug

    // Try decoding once (URL-encoded Cyrillic → Cyrillic)
    try {
        const decoded = decodeURIComponent(rawSlug)
        if (SEO_PAGES_RU[decoded]) return decoded

        // Try double-decoding (in case of double-encoding)
        try {
            const doubleDecoded = decodeURIComponent(decoded)
            if (SEO_PAGES_RU[doubleDecoded]) return doubleDecoded
        } catch (_) { /* not double-encoded, that's fine */ }
    } catch (_) { /* not encoded, that's fine */ }

    return null
}

export async function generateMetadata({ params }) {
    const { slug } = await params
    const resolved = resolveSlug(slug)
    const page = resolved ? SEO_PAGES_RU[resolved] : null
    if (!page) return {}
    return {
        title: page.metaTitle,
        description: page.metaDesc,
        keywords: page.keywords,
        openGraph: {
            title: page.metaTitle,
            description: page.metaDesc,
            url: `https://tahaairwaves.ru/${encodeURIComponent(resolved)}`,
        },
        alternates: {
            canonical: `https://tahaairwaves.ru/${encodeURIComponent(resolved)}`,
        },
    }
}

export default async function SEOPage({ params }) {
    const { slug } = await params
    const resolved = resolveSlug(slug)
    const page = resolved ? SEO_PAGES_RU[resolved] : null
    if (!page) notFound()
    return (
        <SEOPageTemplate
            heroTitle={page.h1}
            heroDescription={page.tagline}
            sections={page.sections}
            ctaTitle={page.ctaTitle || "Готовы нанять работников из Индии?"}
            ctaDescription={page.ctaDescription || "Свяжитесь с Taha Airwaves для бесплатной консультации. Телефон: +7 985 074-88-28 | Email: info@tahaairwaves.ru"}
            internalLinks={getLinksExcluding(`/${resolved}`)}
        />
    )
}

