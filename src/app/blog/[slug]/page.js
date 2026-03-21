import Link from "next/link"
import { BLOG_POSTS } from "@/data/blog-posts"

export function generateStaticParams() {
    return BLOG_POSTS.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }) {
    const { slug } = await params
    const post = BLOG_POSTS.find(p => p.slug === slug) || {}
    return {
        title: `${post.title || 'Blog'} — Taha Airwaves`,
        description: post.excerpt || 'Blog article from Taha Airwaves.',
    }
}

export default async function BlogDetailPage({ params }) {
    const { slug } = await params
    const post = BLOG_POSTS.find(p => p.slug === slug)

    if (!post) {
        return (
            <div style={{ padding: "120px 24px", textAlign: "center" }}>
                <h1 style={{ fontFamily: "var(--font-cormorant-garamond)", fontSize: "2.5rem", color: "#1a0a10" }}>Article Not Found</h1>
                <p style={{ color: "#6B7280", margin: "16px 0 24px", fontFamily: "var(--font-poppins)" }}>The article you&apos;re looking for doesn&apos;t exist.</p>
                <Link href="/blog" style={{ display: "inline-flex", padding: "12px 28px", borderRadius: "9999px", background: "#8E0935", color: "#FDFBEF", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600, fontFamily: "var(--font-lato)" }}>
                    Back to Blog
                </Link>
            </div>
        )
    }

    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-16" style={{ background: "#1a0a10" }}>
                <div className="max-w-[900px] mx-auto px-6">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-sm mb-8 hover:text-[#BC264B] transition-colors"
                        style={{ color: "rgba(253,251,239,0.5)", fontFamily: "var(--font-lato)" }}>
                        ← Back to Blog
                    </Link>
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-xs tracking-widest uppercase font-bold px-3 py-1 rounded-full"
                            style={{ background: "rgba(188,38,75,0.2)", color: "#BC264B", fontFamily: "var(--font-lato)" }}>
                            {post.category}
                        </span>
                        <span className="text-xs" style={{ color: "rgba(253,251,239,0.4)", fontFamily: "var(--font-poppins)" }}>
                            {post.date} · {post.readTime}
                        </span>
                    </div>
                    <h1 style={{
                        fontFamily: "var(--font-cormorant-garamond)",
                        fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                        fontWeight: 600,
                        color: "#FDFBEF",
                        lineHeight: 1.15,
                    }}>
                        {post.title}
                    </h1>
                </div>
            </section>

            {/* Content */}
            <section style={{ background: "#FDFBEF" }} className="py-16">
                <div className="max-w-[800px] mx-auto px-6">
                    <div className="prose prose-lg max-w-none">
                        {post.content.split('\n\n').map((para, i) => {
                            if (para.startsWith('**') && para.endsWith('**')) {
                                return <h2 key={i} style={{ fontFamily: "var(--font-lato)", fontSize: "1.5rem", fontWeight: 700, color: "#1a0a10", margin: "32px 0 12px" }}>{para.replace(/\*\*/g, '')}</h2>
                            }
                            if (para.startsWith('- ')) {
                                return (
                                    <ul key={i} style={{ margin: "12px 0", paddingLeft: "20px" }}>
                                        {para.split('\n').map((item, j) => (
                                            <li key={j} style={{ fontFamily: "var(--font-poppins)", fontSize: "1rem", color: "#374151", lineHeight: 1.8, marginBottom: "4px" }}>
                                                {item.replace('- ', '')}
                                            </li>
                                        ))}
                                    </ul>
                                )
                            }
                            // Handle inline bold
                            const parts = para.split(/(\*\*.*?\*\*)/g)
                            return (
                                <p key={i} style={{ fontFamily: "var(--font-poppins)", fontSize: "1rem", color: "#374151", lineHeight: 1.8, margin: "16px 0" }}>
                                    {parts.map((part, j) => {
                                        if (part.startsWith('**') && part.endsWith('**')) {
                                            return <strong key={j} style={{ color: "#1a0a10" }}>{part.replace(/\*\*/g, '')}</strong>
                                        }
                                        return part
                                    })}
                                </p>
                            )
                        })}
                    </div>

                    {/* CTA */}
                    <div className="mt-16 text-center p-8 rounded-2xl" style={{ background: "#8E0935" }}>
                        <h3 style={{ fontFamily: "var(--font-cormorant-garamond)", fontSize: "1.8rem", fontWeight: 600, color: "#FDFBEF", marginBottom: "12px" }}>
                            Need Manpower Solutions?
                        </h3>
                        <p style={{ fontFamily: "var(--font-poppins)", fontSize: "0.95rem", color: "rgba(253,251,239,0.7)", marginBottom: "20px" }}>
                            Contact Taha Airwaves for reliable, compliant workforce deployment.
                        </p>
                        <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold uppercase tracking-[0.1em]"
                            style={{ background: "#FDFBEF", color: "#8E0935", fontFamily: "var(--font-lato)" }}>
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
