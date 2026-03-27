'use client'

import Container from "@/components/container"
import { useLanguage } from "@/context/language"
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal"
import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { DotGrid, Crosshair, CurvedConnector, CornerOrnament, GlobeWireframe, PulseRing, FlowLine } from "@/components/decorators/SVGDecorations"

/* ── CountUp ── */
function CountUp({ end, suffix = "", duration = 2000 }) {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const started = useRef(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !started.current) {
                    started.current = true
                    const startTime = Date.now()
                    const animate = () => {
                        const elapsed = Date.now() - startTime
                        const progress = Math.min(elapsed / duration, 1)
                        const eased = 1 - Math.pow(1 - progress, 3)
                        setCount(Math.floor(eased * end))
                        if (progress < 1) requestAnimationFrame(animate)
                    }
                    requestAnimationFrame(animate)
                }
            },
            { threshold: 0.3 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [end, duration])

    return <span ref={ref}>{count}{suffix}</span>
}

const INDIA_FEATURES = [
    { en: "Head Office: New Delhi", ru: "Головной офис: Нью-Дели" },
    { en: "Branch: Noida", ru: "Филиал: Нойда" },
    { en: "20+ Years Experience", ru: "20+ лет опыта" },
    { en: "MEA Licensed", ru: "Лицензия MEA" },
]

const RUSSIA_FEATURES = [
    { en: "Office: Moscow", ru: "Офис: Москва" },
    { en: "500+ Workers Deployed", ru: "500+ размещённых работников" },
    { en: "Labour Compliant", ru: "Полное соответствие" },
    { en: "Visa Management", ru: "Визовое управление" },
]

const SECTORS = [
    { en: "Construction", ru: "Строительство", color: "#8A0029" },
    { en: "Hospitality", ru: "Гостеприимство", color: "#D32F2F" },
    { en: "Manufacturing", ru: "Производство", color: "#8A0029" },
    { en: "Logistics", ru: "Логистика", color: "#D32F2F" },
]

export default function CountriesWeServe() {
    const { lang } = useLanguage()
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-80px" })

    return (
        <section ref={ref} className="py-20 lg:py-28 relative overflow-hidden" style={{ background: "#FFFFFF" }}>
            {/* ── Background SVG Decorations ── */}
            <GlobeWireframe size={700} color="#8A0029" accentColor="#D32F2F" opacity={0.035} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <DotGrid rows={5} cols={5} color="#8A0029" opacity={0.04} spacing={22} className="absolute top-12 left-8 hidden lg:block" />
            <Crosshair size={100} color="#8A0029" accentColor="#D32F2F" opacity={0.05} className="absolute bottom-20 right-12 hidden lg:block" />

            {/* Decorative wavy line */}
            <svg className="absolute top-[40%] left-0 w-full hidden lg:block" height="25" viewBox="0 0 1440 25" fill="none" preserveAspectRatio="none" aria-hidden="true" style={{ opacity: 0.04 }}>
                <path d="M0 12 Q180 2 360 12 T720 12 T1080 12 T1440 12" stroke="#8A0029" strokeWidth="1" fill="none" />
            </svg>

            {/* Decorative arrow */}
            <svg className="absolute bottom-[15%] right-[4%] hidden xl:block" width="20" height="40" viewBox="0 0 20 40" fill="none" aria-hidden="true" style={{ opacity: 0.06 }}>
                <path d="M10 0 L10 32 M3 25 L10 32 L17 25" stroke="#8A0029" strokeWidth="1.2" strokeLinecap="round" />
            </svg>

            <Container className="relative z-10">
                {/* Header */}
                <ScrollReveal variant="fadeUp">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <FlowLine width={40} height={2} color="#8A0029" />
                            <span className="text-[10px] tracking-[0.2em] uppercase font-bold"
                                style={{ color: "#D32F2F", fontFamily: "var(--font-inter)" }}>
                                {lang === 'ru' ? 'Индия — Россия' : 'India to Russia'}
                            </span>
                            <FlowLine width={40} height={2} color="#8A0029" />
                        </div>
                        <h2 className="font-black tracking-tight mb-4"
                            style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#262626" }}>
                            {lang === 'ru'
                                ? <>{`Индия —`} <span style={{ color: "#8A0029" }}>{`Россия`}</span></>
                                : <>{`India to`} <span style={{ color: "#8A0029" }}>{`Russia`}</span></>
                            }
                        </h2>
                        <p className="max-w-xl mx-auto text-sm leading-relaxed"
                            style={{ fontFamily: "var(--font-poppins)", color: "#6B7280" }}>
                            {lang === 'ru'
                                ? 'Мост между индийскими кадрами и потребностями российской промышленности'
                                : 'Bridging India\'s workforce with Russia\'s industry needs through professional recruitment'
                            }
                        </p>
                    </div>
                </ScrollReveal>

                {/* ════ Main Grid ════ */}
                <div className="grid grid-cols-1 lg:grid-cols-11 gap-5 items-stretch">

                    {/* ─── India Card ─── */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="lg:col-span-3"
                    >
                        <div className="h-full rounded-2xl p-7 relative"
                            style={{ background: "white", border: "1px solid rgba(138,0,41,0.06)", boxShadow: "0 8px 30px rgba(0,0,0,0.04)" }}>
                            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ background: "#8A0029" }} />
                            <CornerOrnament size={24} color="#8A0029" position="top-right" className="absolute top-4 right-4 opacity-30" />
                            <DotGrid rows={3} cols={3} color="#8A0029" opacity={0.06} spacing={14} className="absolute bottom-4 right-4" />

                            <div className="text-3xl mb-3">🇮🇳</div>
                            <h3 className="text-xl font-black mb-1" style={{ color: "#262626", fontFamily: "var(--font-inter)" }}>India</h3>
                            <p className="text-xs font-bold uppercase tracking-wider mb-5"
                                style={{ color: "#8A0029", fontFamily: "var(--font-inter)" }}>
                                {lang === 'ru' ? 'Центр подбора' : 'Sourcing & Recruitment Hub'}
                            </p>

                            <div className="space-y-3">
                                {INDIA_FEATURES.map((f, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0"
                                            style={{ background: "rgba(138,0,41,0.08)" }}>
                                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                <path d="M2 5 L4.5 7.5 L8 3" stroke="#8A0029" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                                            </svg>
                                        </div>
                                        <span className="text-xs font-medium" style={{ color: "#4B5563", fontFamily: "var(--font-poppins)" }}>
                                            {lang === 'ru' ? f.ru : f.en}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* ─── Center Pipeline ─── */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.7, delay: 0.25 }}
                        className="lg:col-span-5 flex flex-col gap-4"
                    >
                        {/* Animated connector bar */}
                        <div className="flex items-center justify-center gap-3">
                            <FlowLine width={80} height={2} color="#8A0029" />
                            <span className="text-[9px] tracking-[0.25em] uppercase font-black px-3 py-1.5 rounded-lg"
                                style={{ background: "rgba(138,0,41,0.08)", color: "#8A0029", fontFamily: "var(--font-inter)" }}>
                                {lang === 'ru' ? 'Канал развёртывания' : 'Deployment Pipeline'}
                            </span>
                            <FlowLine width={80} height={2} color="#8A0029" />
                        </div>

                        {/* Central stat card — dark with globe pattern */}
                        <div className="flex-1 rounded-2xl text-center relative overflow-hidden flex flex-col items-center justify-center py-12 px-8"
                            style={{ background: "#8A0029" }}>

                            {/* Background SVG globe illustration */}
                            <GlobeWireframe size={350} color="#FFFFFF" accentColor="#D32F2F" opacity={0.06} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                            <CornerOrnament size={30} color="#D32F2F" position="top-left" className="absolute top-5 left-5 opacity-30" />
                            <CornerOrnament size={30} color="#D32F2F" position="bottom-right" className="absolute bottom-5 right-5 opacity-30" />

                            {/* Pulsing ring behind number */}
                            <PulseRing size={80} color="#D32F2F" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%]" />

                            <div className="relative z-10">
                                <div className="text-6xl lg:text-7xl font-black mb-2"
                                    style={{ color: "#FFFFFF", fontFamily: "var(--font-inter)" }}>
                                    <CountUp end={500} suffix="+" />
                                </div>
                                <p className="text-[11px] tracking-[0.2em] uppercase font-bold mb-1"
                                    style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-inter)" }}>
                                    {lang === 'ru' ? 'Работников размещено в России' : 'Workers Deployed to Russia'}
                                </p>
                                <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>since 2022</p>
                            </div>
                        </div>

                        {/* Curved connector decoration */}
                        <CurvedConnector width={300} height={30} color="#8A0029" className="mx-auto opacity-40 hidden lg:block" />

                        {/* Sector badges */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {SECTORS.map((s, i) => (
                                <motion.div key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.5 + i * 0.1 }}
                                    className="p-3 rounded-lg flex items-center gap-2 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
                                    style={{ background: "white", border: "1px solid rgba(138,0,41,0.06)" }}>
                                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: s.color }} />
                                    <span className="text-xs font-bold" style={{ color: "#262626", fontFamily: "var(--font-inter)" }}>
                                        {lang === 'ru' ? s.ru : s.en}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* ─── Russia Card ─── */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="lg:col-span-3"
                    >
                        <div className="h-full rounded-2xl p-7 relative"
                            style={{ background: "white", border: "1px solid rgba(138,0,41,0.06)", boxShadow: "0 8px 30px rgba(0,0,0,0.04)" }}>
                            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ background: "#D32F2F" }} />
                            <CornerOrnament size={24} color="#D32F2F" position="top-right" className="absolute top-4 right-4 opacity-30" />
                            <Crosshair size={50} color="#D32F2F" opacity={0.06} className="absolute bottom-4 right-4" />

                            <div className="text-3xl mb-3">🇷🇺</div>
                            <h3 className="text-xl font-black mb-1" style={{ color: "#262626", fontFamily: "var(--font-inter)" }}>Russia</h3>
                            <p className="text-xs font-bold uppercase tracking-wider mb-5"
                                style={{ color: "#D32F2F", fontFamily: "var(--font-inter)" }}>
                                {lang === 'ru' ? 'Развёртывание и операции' : 'Deployment & Operations'}
                            </p>

                            <div className="space-y-3">
                                {RUSSIA_FEATURES.map((f, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0"
                                            style={{ background: "rgba(211,47,47,0.08)" }}>
                                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                <path d="M2 5 L4.5 7.5 L8 3" stroke="#D32F2F" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                                            </svg>
                                        </div>
                                        <span className="text-xs font-medium" style={{ color: "#4B5563", fontFamily: "var(--font-poppins)" }}>
                                            {lang === 'ru' ? f.ru : f.en}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    )
}
