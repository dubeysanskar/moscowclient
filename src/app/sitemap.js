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
]

export default function sitemap() {
    const now = new Date().toISOString()

    const staticPages = [
        { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
        { url: `${BASE}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${BASE}/services`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${BASE}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${BASE}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
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

    return [...staticPages, ...servicePages, ...blogPages]
}
