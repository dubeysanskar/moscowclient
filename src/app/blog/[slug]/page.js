import { BLOG_POSTS } from "@/data/blog-posts"
import BlogDetailContent from "@/components/blog/blog-detail"

export function generateStaticParams() {
    return BLOG_POSTS.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }) {
    const { slug } = await params
    const post = BLOG_POSTS.find(p => p.slug === slug) || {}
    return {
        title: `${post.title_ru || post.title || 'Блог'}`,
        description: post.excerpt_ru || post.excerpt || 'Статья блога Taha Airwaves.',
        openGraph: {
            title: `${post.title_ru || post.title || 'Блог'}`,
            description: post.excerpt_ru || post.excerpt || 'Статья блога Taha Airwaves.',
            url: `https://tahaairwaves.ru/blog/${slug}`,
        },
        alternates: {
            canonical: `https://tahaairwaves.ru/blog/${slug}`,
        },
    }
}

export default async function BlogDetailPage({ params }) {
    const { slug } = await params
    const post = BLOG_POSTS.find(p => p.slug === slug)

    if (!post) {
        return (
            <div style={{ padding: "120px 24px", textAlign: "center" }}>
                <h1 style={{ fontFamily: "var(--font-inter)", fontSize: "2.5rem", fontWeight: 900, color: "#1A1A1A" }}>Article Not Found</h1>
                <p style={{ color: "#6B7280", margin: "16px 0 24px", fontFamily: "var(--font-poppins)", fontSize: "1rem" }}>The article you&apos;re looking for doesn&apos;t exist.</p>
            </div>
        )
    }

    return <BlogDetailContent post={post} />
}
