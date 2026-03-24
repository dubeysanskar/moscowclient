'use client'

import Container from "@/components/container"
import Link from "next/link"
import { MdArrowOutward } from "react-icons/md"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/language"

const posts = [
    {
        slug: "russia-top-destination-indian-workers",
        title_ru: "Почему Россия становится главным направлением для индийских работников",
        title_en: "Why Russia is Becoming a Top Destination for Indian Workers",
        excerpt_ru: "По мере расширения инфраструктуры России спрос на квалифицированных индийских специалистов продолжает расти.",
        excerpt_en: "As Russia expands its infrastructure and industrial sectors, demand for professional Indian manpower surges.",
        date: "15 Мар 2026",
        cat: "Market Insights",
    },
    {
        slug: "overseas-employment-documentation-visa-guide",
        title_ru: "Полное руководство: документы и виза для работы в России",
        title_en: "Complete Guide: Documentation & Visa for Russia Employment",
        excerpt_ru: "Пошаговое руководство по документированию, эмиграционному разрешению и визовому оформлению для России.",
        excerpt_en: "Step-by-step guide to documentation, emigration clearance, and visa processing for Russia deployment.",
        date: "10 Мар 2026",
        cat: "Guides",
    },
    {
        slug: "trade-testing-quality-manpower",
        title_ru: "Как проверка квалификации обеспечивает качество кадров для российских работодателей",
        title_en: "How Trade Testing Ensures Quality Manpower for Russian Employers",
        excerpt_ru: "Строгий процесс проверки гарантирует, что только квалифицированные специалисты попадают к российским работодателям.",
        excerpt_en: "Rigorous testing guarantees only qualified, job-ready workers reach Russian employers.",
        date: "5 Мар 2026",
        cat: "Industry",
    },
]

export default function BlogPreview() {
    const { t, lang } = useLanguage()

    return (
        <section className="py-20 lg:py-28 relative overflow-hidden" style={{ background: "#F7F7F7" }}>
            {/* Dot decoration */}
            <svg className="absolute top-8 right-10 hidden lg:block" width="70" height="70" viewBox="0 0 70 70" fill="none" aria-hidden="true">
                {Array.from({ length: 16 }, (_, i) => (
                    <circle key={i} cx={(i % 4) * 18 + 9} cy={Math.floor(i / 4) * 18 + 9} r="1.8" fill="rgba(138,0,41,0.1)" />
                ))}
            </svg>

            <Container>
                {/* Header */}
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12 pb-8"
                    style={{ borderBottom: "1px solid rgba(38,38,38,0.08)" }}>
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-[2px]" style={{ background: "#8A0029" }} />
                            <span className="text-[11px] tracking-[0.2em] uppercase font-bold"
                                style={{ color: "#D32F2F", fontFamily: "var(--font-inter)" }}>Journal</span>
                        </div>
                        <h2 className="font-black tracking-tight"
                            style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#262626" }}>
                            {t('blogTitle')} <span style={{ color: "#8A0029" }}>{t('blogTitleAccent')}</span>
                        </h2>
                        <p className="mt-1.5 text-sm" style={{ fontFamily: "var(--font-poppins)", color: "#9CA3AF" }}>
                            {t('blogSubtitle')}
                        </p>
                    </div>
                    <Link href="/blog">
                        <button className="flex items-center gap-2 px-5 py-2.5 rounded text-xs tracking-wide font-bold cursor-pointer border transition-colors duration-200 hover:bg-[#8A0029] hover:text-white hover:border-[#8A0029] flex-shrink-0"
                            style={{ background: "transparent", color: "#262626", border: "1px solid rgba(38,38,38,0.2)", fontFamily: "var(--font-inter)" }}>
                            {t('viewAllArticles')} <MdArrowOutward size={13} />
                        </button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {posts.map((post, i) => (
                        <motion.div
                            key={post.slug}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="group cursor-pointer"
                        >
                            <Link href={`/blog/${post.slug}`}>
                                <div className="rounded overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg"
                                    style={{ background: "#FFFFFF", border: "1px solid rgba(38,38,38,0.06)" }}>
                                    {/* Category bar */}
                                    <div className="px-6 py-3 flex items-center justify-between border-b"
                                        style={{ borderColor: "rgba(38,38,38,0.06)" }}>
                                        <span className="text-[10px] tracking-widest uppercase font-black"
                                            style={{ color: "#8A0029", fontFamily: "var(--font-inter)" }}>
                                            {post.cat}
                                        </span>
                                        <span className="text-[11px]" style={{ color: "#9CA3AF", fontFamily: "var(--font-inter)" }}>
                                            {post.date}
                                        </span>
                                    </div>
                                    {/* Red top accent hover */}
                                    <div className="h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        style={{ background: "#8A0029" }} />
                                    <div className="p-6 flex flex-col flex-1 gap-3">
                                        <h3 className="text-base font-black leading-snug transition-colors duration-300 group-hover:text-[#8A0029]"
                                            style={{ fontFamily: "var(--font-inter)", color: "#262626" }}>
                                            {lang === 'ru' ? post.title_ru : post.title_en}
                                        </h3>
                                        <p className="text-sm leading-relaxed flex-1"
                                            style={{ fontFamily: "var(--font-poppins)", color: "#6B7280" }}>
                                            {lang === 'ru' ? post.excerpt_ru : post.excerpt_en}
                                        </p>
                                        <div className="flex items-center gap-2 text-xs font-bold mt-2 transition-all duration-300 group-hover:gap-3"
                                            style={{ color: "#8A0029", fontFamily: "var(--font-inter)" }}>
                                            {t('readMore')} <MdArrowOutward size={12} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
