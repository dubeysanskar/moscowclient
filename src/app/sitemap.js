const BASE = 'https://tahaairwaves.ru'

const SERVICES = [
    'cleaners',
    'all-types-of-drivers',
    'general-labour',
    'loading-unloading-workers',
    'factory-helpers',
    'barista',
    'packing-workers',
    'emigration-immigration-clearance',
    'document-attestation-services',
    'skilled-labourers-technicians',
    'employee-outsourcing-solutions',
]

const BLOGS = [
    'russia-top-destination-indian-workers',
    'overseas-employment-documentation-visa-guide',
    'trade-testing-quality-manpower',
    'indian-workers-demand-cis-countries',
    'india-overseas-recruitment-regulatory-framework',
    'best-practices-employers-hiring-indian-manpower',
    'cost-of-hiring-indian-workers-russia',
    'why-indian-labour-best-for-russia',
    'how-to-hire-foreign-workers-legally-russia',
]

const SEO_PAGES_EN = [
    'indian-manpower-russia',
    'recruitment-agency-russia',
    'construction-workers-russia',
    'fast-workforce-deployment-russia',
    'visa-work-permit-russia',
    'hire-indian-workers-moscow',
    'hire-indian-workers-saint-petersburg',
    'indian-workers-for-russia',
    'indian-manpower-agency-contact',
    'recruitment-offices-india',
    'best-recruitment-agencies-india',
    'best-staffing-agencies-india',
    'hire-indian-workers-mytishchi',
    'hire-indian-workers-lyubertsy',
    'hire-indian-workers-korolyov',
    'hire-indian-workers-krasnogorsk',
    'hire-indian-workers-zheleznodorozhny',
    'hire-indian-workers-odintsovo',
    'hire-indian-workers-zhukovsky',
    'hire-indian-workers-kolomna',
    'hire-indian-workers-mozhaysk',
]

const SEO_PAGES_RU = [
    'индийские-работники-в-россии',
    'нанять-рабочих-из-индии',
    'надежные-работники-из-индии',
    'массовый-подбор-персонала-из-индии',
    'рекрутинг-рабочих-из-индии-под-ключ',
    'рабочие-из-индии-для-строительства',
    'рабочие-из-индии-для-производства',
    'индийские-рабочие-для-склада',
    'персонал-из-индии-для-гостиниц',
    'рабочие-из-индии-для-сельского-хозяйства',
    'заказать-рабочих-из-индии',
    'подбор-рабочих-из-индии-цена',
    'агентство-по-подбору-персонала-индия',
    'рабочие-из-индии-с-документами',
    'официальный-наем-рабочих-из-индии',
    'нанять-персонал-из-индии',
    'услуги-подбора-персонала-индия',
    'агентство-по-подбору-рабочих-из-индии',
    'подбор-персонала-из-индии-цена',
    'контакты-рекрутингового-агентства-в-индии',
    'лучшее-рекрутинговое-агентство-в-индии',
    'массовый-рекрутинг-в-индии',
    'как-связаться-с-рекрутинговым-агентством-в-индии',
    'телефон-кадрового-агентства-индия',
    'заказать-подбор-персонала-в-индии',
    'агентство-по-подбору-рабочих-индия-контакты',
    'сколько-стоит-нанять-рабочих-из-индии',
    'процесс-оформления-работников-из-индии',
    'плюсы-индийских-работников',
    'рабочие-в-россию-из-за-границы',
    'faq-работники-из-индии',
]

export default function sitemap() {
    const now = new Date().toISOString()

    const staticPages = [
        { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
        { url: `${BASE}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${BASE}/services`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${BASE}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${BASE}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
        { url: `${BASE}/projects`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    ]

    const servicePages = SERVICES.map(slug => ({
        url: `${BASE}/services/${slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.8,
    }))

    const blogPages = BLOGS.map(slug => ({
        url: `${BASE}/blog/${slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.7,
    }))

    const seoEnPages = SEO_PAGES_EN.map(slug => ({
        url: `${BASE}/${slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.6,
    }))

    const seoRuPages = SEO_PAGES_RU.map(slug => ({
        url: `${BASE}/${encodeURIComponent(slug)}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.6,
    }))

    return [...staticPages, ...servicePages, ...blogPages, ...seoEnPages, ...seoRuPages]
}
