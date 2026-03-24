'use client'

import Container from "@/components/container"
import Link from "next/link"
import { MdArrowOutward } from "react-icons/md"
import { motion } from "framer-motion"
import { BLOG_POSTS } from "@/data/blog-posts"
import { useLanguage } from "@/context/language"

export default function BlogPage() {
    const { t, lang } = useLanguage()

    return (
        <section className="pt-28 pb-20 relative overflow-hidden" style={{ background: "#FFFFFF" }}>
            {/* Left brand strip */}
            <div className="absolute left-0 top-0 bottom-0 w-[3px]" style={{ background: "#8A0029" }} />

            {/* SVG dot grid */}
            <svg className="absolute top-0 right-0 pointer-events-none" style={{ opacity: 0.04 }} width="300" height="300" viewBox="0 0 300 300" aria-hidden="true">
                {Array.from({ length: 100 }, (_, i) => (
                    <circle key={i} cx={(i % 10) * 30 + 15} cy={Math.floor(i / 10) * 30 + 15} r="2" fill="#262626" />
                ))}
            </svg>

            <Container>
                <div className="relative z-10 space-y-12">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55 }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-[2px]" style={{ background: "#8A0029" }} />
                            <span className="text-[10px] tracking-[0.2em] uppercase font-bold"
                                style={{ color: "#D32F2F", fontFamily: "var(--font-inter)" }}>
                                {t('pageBlogTitle')}
                            </span>
                        </div>
                        <h1 className="font-black tracking-tight mb-4"
                            style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#262626" }}>
                            {lang === 'ru' ? (
                                <>Последние <span style={{ color: "#8A0029" }}>инсайты</span></>
                            ) : (
                                <>Latest <span style={{ color: "#8A0029" }}>Insights</span></>
                            )}
                        </h1>
                        <p className="max-w-lg text-sm leading-relaxed"
                            style={{ fontFamily: "var(--font-poppins)", color: "#6B7280" }}>
                            {lang === 'ru'
                                ? "Тенденции российского рынка труда, руководства по развёртыванию, обновления по соответствию требованиям и аналитика."
                                : "Russian labour market trends, deployment guides, compliance updates, and recruitment insights for international manpower."}
                        </p>
                    </motion.div>

                    {/* Blog grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {BLOG_POSTS.map((post, i) => (
                            <motion.div
                                key={post.slug}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.07, duration: 0.45 }}
                                className="group"
                            >
                                <Link href={`/blog/${post.slug}`}>
                                    <div className="h-full flex flex-col gap-4 p-7 rounded transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer relative overflow-hidden"
                                        style={{ background: "#FFFFFF", border: "1px solid rgba(38,38,38,0.07)" }}>
                                        {/* Top accent on hover */}
                                        <div className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity"
                                            style={{ background: "#8A0029" }} />

                                        {/* Category + read time */}
                                        <div className="flex items-center justify-between">
                                            <span className="text-[10px] tracking-[0.15em] uppercase font-black px-2 py-0.5 rounded"
                                                style={{ background: "rgba(138,0,41,0.08)", color: "#8A0029", fontFamily: "var(--font-inter)" }}>
                                                {post.category}
                                            </span>
                                            <span className="text-[10px]"
                                                style={{ color: "#9CA3AF", fontFamily: "var(--font-inter)" }}>
                                                {post.readTime}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-base font-black leading-snug transition-colors duration-300 group-hover:text-[#8A0029]"
                                            style={{ fontFamily: "var(--font-inter)", color: "#262626" }}>
                                            {lang === 'ru' && post.title_ru ? post.title_ru : post.title}
                                        </h3>

                                        {/* Excerpt */}
                                        <p className="text-xs leading-relaxed flex-1"
                                            style={{ fontFamily: "var(--font-poppins)", color: "#6B7280" }}>
                                            {lang === 'ru' && post.excerpt_ru ? post.excerpt_ru : post.excerpt}
                                        </p>

                                        {/* Footer */}
                                        <div className="flex items-center justify-between pt-4"
                                            style={{ borderTop: "1px solid rgba(38,38,38,0.07)" }}>
                                            <span className="text-[10px] font-medium"
                                                style={{ color: "#9CA3AF", fontFamily: "var(--font-inter)" }}>{post.date}</span>
                                            <div className="flex items-center gap-1.5 text-xs font-black transition-all duration-300 group-hover:gap-2.5"
                                                style={{ color: "#8A0029", fontFamily: "var(--font-inter)" }}>
                                                {lang === 'ru' ? 'Читать' : 'Read More'}
                                                <MdArrowOutward size={12} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}
