export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/_next/', '/projects/'],
            },
            {
                userAgent: 'Yandex',
                allow: '/',
                crawlDelay: 1,
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
            },
        ],
        sitemap: 'https://tahaairwaves.ru/sitemap.xml',
        host: 'https://tahaairwaves.ru',
    }
}
