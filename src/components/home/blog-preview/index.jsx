'use client'

import Container from "@/components/container"
import Link from "next/link"
import { MdArrowOutward } from "react-icons/md"
import { useLanguage } from "@/context/language"
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal"
import { DotPattern } from "@/components/decorators/SVGWave"

const posts = [
    {
        slug: "russia-top-destination-indian-workers",
        title_ru: "Почему Россия становится главным направлением для индийских работников",
        title_en: "Why Russia is Becoming a Top Destination for Indian Workers",
        excerpt_ru: "По мере расширения инфраструктуры России спрос на квалифицированных индийских специалистов продолжает расти.",
        excerpt_en: "As Russia expands its infrastructure and industrial sectors, demand for professional Indian manpower surges.",
        date: "15 Mar 2026",
        cat: "Market Insights",
    },
    {
        slug: "overseas-employment-documentation-visa-guide",
        title_ru: "Полное руководство: документы и виза для работы в России",
        title_en: "Complete Guide: Documentation & Visa for Russia Employment",
        excerpt_ru: "Пошаговое руководство по документированию, эмиграционному разрешению и визовому оформлению для России.",
        excerpt_en: "Step-by-step guide to documentation, emigration clearance, and visa processing for Russia deployment.",
        date: "10 Mar 2026",
        cat: "Guides",
    },
    {
        slug: "trade-testing-quality-manpower",
        title_ru: "Как проверка квалификации обеспечивает качество кадров для российских работодателей",
        title_en: "How Trade Testing Ensures Quality Manpower for Russian Employers",
        excerpt_ru: "Строгий процесс проверки гарантирует, что только квалифицированные специалисты попадают к российским работодателям.",
        excerpt_en: "Rigorous testing guarantees only qualified, job-ready workers reach Russian employers.",
        date: "5 Mar 2026",
        cat: "Industry",
    },
]

export default function BlogPreview() {
    const { t, lang } = useLanguage()

    return (
        <section className="py-20 lg:py-28 relative overflow-hidden" style={{ background: "#FDFBEF" }}>
            {/* Dot decoration */}
            <DotPattern rows={4} cols={4} spacing={18} radius={1.8} color="rgba(142,9,53,0.1)"
                className="absolute top-8 right-10 hidden lg:block" />

            <Container>
                {/* Header */}
                <ScrollReveal variant="fadeUp">
                    <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12 pb-8"
                        style={{ borderBottom: "1px solid rgba(142,9,53,0.08)" }}>
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-[2px]" style={{ background: "#8E0935" }} />
                                <span className="text-[11px] tracking-[0.2em] uppercase font-bold"
                                    style={{ color: "#BC264B", fontFamily: "var(--font-inter)" }}>Journal</span>
                            </div>
                            <h2 className="font-black tracking-tight"
                                style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#1A1A1A" }}>
                                {t('blogTitle')} <span style={{ color: "#8E0935" }}>{t('blogTitleAccent')}</span>
                            </h2>
                            <p className="mt-1.5 text-sm" style={{ fontFamily: "var(--font-poppins)", color: "#9CA3AF" }}>
                                {t('blogSubtitle')}
                            </p>
                        </div>
                        <Link href="/blog">
                            <button className="flex items-center gap-2 px-5 py-2.5 rounded text-xs tracking-wide font-bold cursor-pointer border transition-colors duration-200 hover:bg-[#8E0935] hover:text-[#FDFBEF] hover:border-[#8E0935] flex-shrink-0"
                                style={{ background: "transparent", color: "#1A1A1A", border: "1px solid rgba(26,26,26,0.2)", fontFamily: "var(--font-inter)" }}>
                                {t('viewAllArticles')} <MdArrowOutward size={13} />
                            </button>
                        </Link>
                    </div>
                </ScrollReveal>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5" staggerDelay={0.1}>
                    {posts.map((post) => (
                        <StaggerItem key={post.slug} variant="fadeUp">
                            <Link href={`/blog/${post.slug}`} className="group cursor-pointer block h-full">
                                <div className="rounded overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg"
                                    style={{ background: "white", border: "1px solid rgba(142,9,53,0.06)" }}>
                                    {/* Category bar */}
                                    <div className="px-6 py-3 flex items-center justify-between border-b"
                                        style={{ borderColor: "rgba(142,9,53,0.06)" }}>
                                        <span className="text-[10px] tracking-widest uppercase font-black"
                                            style={{ color: "#8E0935", fontFamily: "var(--font-inter)" }}>
                                            {post.cat}
                                        </span>
                                        <span className="text-[11px]" style={{ color: "#9CA3AF", fontFamily: "var(--font-inter)" }}>
                                            {post.date}
                                        </span>
                                    </div>
                                    {/* Top accent hover */}
                                    <div className="h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        style={{ background: "#8E0935" }} />
                                    <div className="p-6 flex flex-col flex-1 gap-3">
                                        <h3 className="text-base font-black leading-snug transition-colors duration-300 group-hover:text-[#8E0935]"
                                            style={{ fontFamily: "var(--font-inter)", color: "#1A1A1A" }}>
                                            {lang === 'ru' ? post.title_ru : post.title_en}
                                        </h3>
                                        <p className="text-sm leading-relaxed flex-1"
                                            style={{ fontFamily: "var(--font-poppins)", color: "#6B7280" }}>
                                            {lang === 'ru' ? post.excerpt_ru : post.excerpt_en}
                                        </p>
                                        <div className="flex items-center gap-2 text-xs font-bold mt-2 transition-all duration-300 group-hover:gap-3"
                                            style={{ color: "#8E0935", fontFamily: "var(--font-inter)" }}>
                                            {t('readMore')} <MdArrowOutward size={12} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Container>
        </section>
    )
}
