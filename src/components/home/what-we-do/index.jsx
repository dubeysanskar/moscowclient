'use client'

import { useRef, useState, useEffect } from "react"
import Container from "@/components/container"
import Link from "next/link"
import { MdArrowOutward } from "react-icons/md"
import { FiUsers, FiTruck, FiFileText, FiSend, FiBriefcase, FiMapPin, FiCheckCircle } from "react-icons/fi"
import { useLanguage } from "@/context/language"
import { DotGrid, CornerOrnament, FlowLine } from "@/components/decorators/SVGDecorations"
import { motion, useScroll, useTransform } from "framer-motion"

const SERVICES = [
    {
        icon: FiCheckCircle,
        titleEn: "Government Approved Agency", titleRu: "Одобренное государством агентство",
        descEn: "Fully licensed and compliant recruitment agency ensuring safe and legal hiring from India.",
        descRu: "Лицензированное и полностью соответствующее требованиям рекрутинговое агентство, обеспечивающее безопасный и легальный найм из Индии.",
        bg: "#8A0029", gradient: "linear-gradient(135deg, #8A0029 0%, #5C001B 100%)", border: "rgba(211,47,47,0.3)",
    },
    {
        icon: FiSend,
        titleEn: "Fast Workforce Deployment", titleRu: "Быстрое размещение персонала",
        descEn: "Get your workforce deployed within 7–15 days with our streamlined recruitment system.",
        descRu: "Размещение персонала в течение 7–15 дней благодаря нашей оптимизированной системе подбора.",
        bg: "#262626", gradient: "linear-gradient(135deg, #262626 0%, #1A1A1A 100%)", border: "rgba(138,0,41,0.4)",
    },
    {
        icon: FiUsers,
        titleEn: "Verified & Skilled Candidates", titleRu: "Проверенные и квалифицированные кандидаты",
        descEn: "All workers are pre-screened, trained, and verified to match your exact job requirements.",
        descRu: "Все работники предварительно отобраны, обучены и проверены для соответствия вашим требованиям.",
        bg: "#8A0029", gradient: "linear-gradient(135deg, #8A0029 0%, #6B0020 100%)", border: "rgba(253,251,239,0.15)",
    },
    {
        icon: FiTruck,
        titleEn: "Strong Talent Network", titleRu: "Мощная кадровая сеть",
        descEn: "Access a large database of skilled and unskilled workers across multiple industries.",
        descRu: "Доступ к обширной базе квалифицированных и неквалифицированных работников в различных отраслях.",
        bg: "#262626", gradient: "linear-gradient(135deg, #262626 0%, #0D0D0D 100%)", border: "rgba(211,47,47,0.35)",
    },
    {
        icon: FiBriefcase,
        titleEn: "Cost-Effective Hiring", titleRu: "Экономичный найм",
        descEn: "Reduce hiring costs with competitive pricing and efficient manpower solutions.",
        descRu: "Снижение затрат на найм благодаря конкурентоспособным ценам и эффективным кадровым решениям.",
        bg: "#8A0029", gradient: "linear-gradient(135deg, #8A0029 0%, #5C001B 100%)", border: "rgba(253,251,239,0.15)",
    },
    {
        icon: FiMapPin,
        titleEn: "Local Support in Moscow", titleRu: "Местная поддержка в Москве",
        descEn: "On-ground support in Moscow for coordination, communication, and smooth workforce management.",
        descRu: "Поддержка на месте в Москве для координации, коммуникации и бесперебойного управления персоналом.",
        bg: "#262626", gradient: "linear-gradient(135deg, #262626 0%, #1A1A1A 100%)", border: "rgba(138,0,41,0.4)",
    },
    {
        icon: FiFileText,
        titleEn: "End-to-End Support", titleRu: "Полное сопровождение",
        descEn: "From sourcing to deployment, we manage the complete recruitment process for you.",
        descRu: "От подбора до размещения — мы управляем полным процессом рекрутинга для вас.",
        bg: "#8A0029", gradient: "linear-gradient(135deg, #8A0029 0%, #6B0020 100%)", border: "rgba(211,47,47,0.3)",
    },
]

/* ─── Card ─── */
function ServiceCard({ svc, i, lang, mobile }) {
    const Icon = svc.icon
    return (
        <div
            className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl flex-shrink-0"
            style={{
                background: svc.gradient,
                ...(mobile
                    ? { minHeight: "180px" }
                    : { width: "350px", minHeight: "300px" }),
                border: `2px solid ${svc.border}`,
                boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
            }}
        >
            <div className="relative z-10 p-5 sm:p-6 lg:p-7 flex flex-col justify-between h-full">
                <div className="flex items-start justify-between">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                        style={{
                            background: svc.bg === '#262626' ? 'rgba(138,0,41,0.3)' : 'rgba(253,251,239,0.15)',
                            backdropFilter: "blur(10px)",
                            border: `1px solid ${svc.bg === '#262626' ? 'rgba(138,0,41,0.4)' : 'rgba(253,251,239,0.1)'}`,
                        }}>
                        <Icon size={mobile ? 18 : 22} color="#FDFBEF" />
                    </div>
                    <span className="text-4xl lg:text-5xl font-black select-none"
                        style={{ color: "rgba(253,251,239,0.06)", fontFamily: "var(--font-inter)" }}>
                        {String(i + 1).padStart(2, '0')}
                    </span>
                </div>
                <div className="mt-auto pt-5">
                    <h3 className="text-base sm:text-lg lg:text-xl font-black mb-1.5 sm:mb-2"
                        style={{ fontFamily: "var(--font-inter)", color: "#FDFBEF" }}>
                        {lang === 'ru' ? svc.titleRu : svc.titleEn}
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed"
                        style={{ fontFamily: "var(--font-poppins)", color: "rgba(253,251,239,0.6)" }}>
                        {lang === 'ru' ? svc.descRu : svc.descEn}
                    </p>
                </div>
            </div>
            <CornerOrnament size={24} color="#FDFBEF" position="bottom-right" className="absolute bottom-4 right-4 opacity-10" />
        </div>
    )
}

/* ─── Header ─── */
function Header({ lang }) {
    return (
        <div style={{ marginBottom: "28px" }}>
            <div className="flex items-center gap-3" style={{ marginBottom: "12px" }}>
                <FlowLine width={32} height={2} color="#8E0935" />
                <span style={{ color: "#BC264B", fontFamily: "var(--font-inter)", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700 }}>
                    {lang === 'ru' ? 'Наши услуги' : 'Services'}
                </span>
            </div>
            <h2 style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(1.5rem, 3.5vw, 2.8rem)", color: "#1A1A1A", lineHeight: 1.15, fontWeight: 900, marginBottom: "12px" }}>
                {lang === 'ru'
                    ? <>{`Почему российские компании выбирают `}<span style={{ color: "#8E0935" }}>{`Taha Airwaves?`}</span></>
                    : <>{`Why Russian Companies Choose `}<span style={{ color: "#8E0935" }}>{`Taha Airwaves?`}</span></>
                }
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px 20px" }}>
                <p style={{ color: "#6B7280", fontFamily: "var(--font-poppins)", fontSize: "0.8125rem", lineHeight: 1.6, flex: "1 1 220px", margin: 0 }}>
                    {lang === 'ru'
                        ? 'Надёжная кадровая поддержка на каждом этапе процесса подбора персонала'
                        : 'Trusted manpower support across every stage of the recruitment process'
                    }
                </p>
                <Link href="/services">
                    <span style={{
                        display: "inline-flex", alignItems: "center", gap: "6px",
                        background: "#8E0935", color: "#FDFBEF", fontFamily: "var(--font-inter)",
                        fontSize: "0.75rem", fontWeight: 700, padding: "10px 20px",
                        borderRadius: "8px", whiteSpace: "nowrap",
                    }}>
                        {lang === 'ru' ? 'Запросить услугу' : 'Request Service'}
                        <MdArrowOutward size={12} />
                    </span>
                </Link>
            </div>
        </div>
    )
}

/* ═══ DESKTOP — Horizontal scroll (lg+) ═══ */
function DesktopScroll({ services, lang }) {
    const sectionRef = useRef(null)
    const trackRef = useRef(null)
    const viewRef = useRef(null)
    const [scrollDist, setScrollDist] = useState(0)

    useEffect(() => {
        const calc = () => {
            if (trackRef.current && viewRef.current) {
                setScrollDist(Math.max(0, trackRef.current.scrollWidth - viewRef.current.offsetWidth))
            }
        }
        calc()
        setTimeout(calc, 500)
        window.addEventListener('resize', calc)
        return () => window.removeEventListener('resize', calc)
    }, [])

    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] })
    const x = useTransform(scrollYProgress, [0.05, 0.7], [0, -scrollDist])

    return (
        <section ref={sectionRef} className="relative hidden lg:block" style={{ background: "#FDFBEF", height: "600vh" }}>
            <DotGrid rows={5} cols={4} color="#8E0935" opacity={0.05} spacing={24} className="absolute top-10 left-8" />
            <CornerOrnament size={50} color="#BC264B" position="top-right" className="absolute top-8 right-8 opacity-15" />

            <div className="sticky top-0 h-screen overflow-hidden" style={{ paddingTop: "90px", paddingBottom: "20px" }}>
                <div className="h-full flex flex-col">
                    <Container>
                        <Header lang={lang} />
                    </Container>

                    {/* Cards area — takes remaining space, vertically centers cards */}
                    <div className="flex-1 flex items-center">
                        <Container className="w-full">
                            <div ref={viewRef} className="overflow-hidden" style={{ padding: "10px 0" }}>
                                <motion.div ref={trackRef} className="flex gap-5" style={{ x, paddingRight: "50px" }}>
                                    {services.map((svc, i) => (
                                        <ServiceCard key={i} svc={svc} i={i} lang={lang} />
                                    ))}
                                </motion.div>
                            </div>
                        </Container>
                    </div>
                </div>
            </div>
        </section>
    )
}

/* ═══ MOBILE + TABLET — Grid (below lg) ═══ */
function MobileView({ services, lang }) {
    return (
        <section className="lg:hidden relative" style={{ background: "#FDFBEF", padding: "clamp(2.5rem, 5vw, 4rem) 0" }}>
            <Container>
                <Header lang={lang} />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {services.map((svc, i) => (
                        <ServiceCard key={i} svc={svc} i={i} lang={lang} mobile />
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default function WhatWeDo() {
    const { lang } = useLanguage()
    return (
        <>
            <DesktopScroll services={SERVICES} lang={lang} />
            <MobileView services={SERVICES} lang={lang} />
        </>
    )
}
