import { notFound } from 'next/navigation'
import SEOPageTemplate from '@/components/seo/SEOPageTemplate'
import { getLinksExcluding } from '@/data/seo-links'
import { SEO_PAGES_RU } from '@/data/seo-pages-ru'

export const dynamicParams = false

export function generateStaticParams() {
    return Object.keys(SEO_PAGES_RU).map(slug => ({ slug }))
}

export async function generateMetadata({ params }) {
    const { slug } = await params
    const page = SEO_PAGES_RU[slug]
    if (!page) return {}
    return {
        title: page.metaTitle,
        description: page.metaDesc,
        keywords: page.keywords,
        openGraph: {
            title: page.metaTitle,
            description: page.metaDesc,
            url: `https://tahaairwaves.ru/${encodeURIComponent(slug)}`,
        },
        alternates: {
            canonical: `https://tahaairwaves.ru/${encodeURIComponent(slug)}`,
        },
    }
}

export default async function SEOPage({ params }) {
    const { slug } = await params
    const page = SEO_PAGES_RU[slug]
    if (!page) notFound()
    return (
        <SEOPageTemplate
            heroTitle={page.h1}
            heroDescription={page.tagline}
            sections={page.sections}
            ctaTitle={page.ctaTitle || "Готовы нанять работников из Индии?"}
            ctaDescription={page.ctaDescription || "Свяжитесь с Taha Airwaves для бесплатной консультации. Телефон: +7 985 074-88-28 | Email: info@tahaairwaves.ru"}
            internalLinks={getLinksExcluding(`/${slug}`)}
        />
    )
}
