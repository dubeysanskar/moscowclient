'use client'

import Container from "@/components/container"
import Image from "next/image"
import Link from "next/link"
import { MdArrowOutward } from "react-icons/md"
import { FiGlobe, FiUsers, FiShield, FiBookOpen } from "react-icons/fi"
import { useLanguage } from "@/context/language"
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal"

const HIGHLIGHTS = [
    { icon: FiGlobe, en: "MEA Licensed & Authorized Agency", ru: "Лицензированное агентство MEA" },
    { icon: FiUsers, en: "Head Office in India, New Delhi", ru: "Головной офис в Индии, Нью-Дели" },
    { icon: FiShield, en: "Fully Compliant Documentation Process", ru: "Полностью соответствующий процесс документации" },
    { icon: FiBookOpen, en: "10+ Years Working with Gulf & GCC", ru: "10+ лет работы со странами Персидского залива и GCC" },
]

export default function HomeAbout() {
    const { t, lang } = useLanguage()

    return (
        <section className="relative overflow-hidden" style={{ background: "#FDFBEF" }}>

            {/* ═══ CONTENT — z-10, above all decorations ═══ */}
            <Container className="py-24 lg:py-32 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* ─── Left: Image + floating cards ─── */}
                    <ScrollReveal variant="fadeLeft" duration={0.8} className="lg:col-span-5">
                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ minHeight: "320px" }}>
                                <Image src="/images/demo4.jpeg" alt="Taha Airwaves professional team"
                                    fill className="object-cover" sizes="(max-width: 1024px) 100vw, 42vw" loading="lazy" />
                                <div className="absolute bottom-0 left-0 right-0 h-1/3" style={{
                                    background: "linear-gradient(to top, rgba(138,0,41,0.7), transparent)"
                                }} />
                                <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: "#8A0029" }} />
                            </div>

                            {/* Floating stats card */}
                            <div className="absolute -bottom-6 -right-4 lg:-right-8 p-5 rounded-2xl shadow-xl z-20"
                                style={{ background: "#FFFFFF", border: "1px solid rgba(138,0,41,0.08)" }}>
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ background: "#8A0029" }}>
                                        <span className="text-2xl font-black" style={{ color: "#FFFFFF", fontFamily: "var(--font-inter)" }}>10+</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold" style={{ color: "#262626", fontFamily: "var(--font-inter)" }}>
                                            {lang === 'ru' ? 'Лет опыта' : 'Years Experience'}
                                        </p>
                                        <p className="text-[11px]" style={{ color: "rgba(38,38,38,0.45)", fontFamily: "var(--font-poppins)" }}>
                                            {lang === 'ru' ? 'С 2015 года' : 'Since 2015'}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* MEA badge */}
                            <div className="absolute top-2 left-2 sm:-top-4 sm:-left-4 lg:-left-6 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl shadow-lg z-20" style={{ background: "#8A0029" }}>
                                <div className="flex items-center gap-2">
                                    <FiShield className="w-4 h-4" color="#FFFFFF" />
                                    <span className="text-[10px] uppercase tracking-wider font-bold"
                                        style={{ color: "rgba(255,255,255,0.9)", fontFamily: "var(--font-inter)" }}>
                                        {lang === 'ru' ? 'Лицензия MEA' : 'MEA Licensed'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* ─── Right: Text ─── */}
                    <div className="lg:col-span-7 space-y-6 lg:pl-4">
                        <ScrollReveal variant="fadeRight" delay={0.1}>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-[2px]" style={{ background: "#8A0029" }} />
                                <span className="text-[11px] tracking-[0.2em] uppercase font-bold"
                                    style={{ color: "#D32F2F", fontFamily: "var(--font-inter)" }}>
                                    {t('aboutTitle')}
                                </span>
                                <div className="w-10 h-[2px]" style={{ background: "#8A0029" }} />
                            </div>
                        </ScrollReveal>

                        <ScrollReveal variant="fadeRight" delay={0.15}>
                            <h2 className="font-black leading-tight"
                                style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#262626" }}>
                                {lang === 'ru'
                                    ? <>{`Ваш надёжный кадровый `}<span style={{ color: "#8A0029" }}>{`партнёр в России`}</span></>
                                    : <>{`Your Trusted `}<span style={{ color: "#8A0029" }}>{`Manpower Partner`}</span>{` in Russia`}</>
                                }
                            </h2>
                        </ScrollReveal>

                        <ScrollReveal variant="fadeRight" delay={0.2}>
                            <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-poppins)", color: "#6B7280" }}>
                                {t('aboutPara2')}
                            </p>
                        </ScrollReveal>

                        <ScrollReveal variant="fadeRight" delay={0.25}>
                            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6" staggerDelay={0.08}>
                                {HIGHLIGHTS.map((h, i) => {
                                    const Icon = h.icon
                                    return (
                                        <StaggerItem key={i} variant="fadeUp">
                                            <div className="group flex items-center gap-3 p-4 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-default"
                                                style={{ background: "rgba(255,255,255,0.8)", border: "1px solid rgba(138,0,41,0.08)" }}>
                                                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                                                    style={{ background: "rgba(138,0,41,0.08)" }}>
                                                    <Icon size={16} color="#8A0029" />
                                                </div>
                                                <span className="text-xs font-semibold leading-tight" style={{ color: "#262626", fontFamily: "var(--font-inter)" }}>
                                                    {lang === 'ru' ? h.ru : h.en}
                                                </span>
                                            </div>
                                        </StaggerItem>
                                    )
                                })}
                            </StaggerContainer>
                        </ScrollReveal>

                        {/* CTA Buttons */}
                        <ScrollReveal variant="fadeRight" delay={0.3}>
                            <div className="flex flex-wrap gap-4 pt-8">
                                <Link href="/about">
                                    <button className="flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                        style={{ background: "#8A0029", color: "#FFFFFF", fontFamily: "var(--font-inter)" }}>
                                        {t('learnMore')} <MdArrowOutward size={14} />
                                    </button>
                                </Link>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </Container>

            {/* ═══ Bottom divider — pushed down with margin ═══ */}
            <div className="mt-8 px-8">
                <div className="max-w-6xl mx-auto h-px" style={{ background: "rgba(138,0,41,0.08)" }} />
            </div>
            <div className="h-6" />
        </section>
    )
}
