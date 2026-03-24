'use client'

import { motion } from "framer-motion"
import { useRef } from "react"
import Container from "@/components/container"
import { useLanguage } from "@/context/language"
import { FiShield, FiGlobe, FiUsers, FiAward } from "react-icons/fi"

const GLOBAL_STATS = [
    { valueKey: "500+", labelKey: "aboutStatLabel1", accent: "#8A0029" },
    { valueKey: "20+", labelKey: "aboutStatLabel2", accent: "#D32F2F" },
    { valueKey: "50+", labelKey: "aboutStatLabel3", accent: "#8A0029" },
    { valueKey: "100%", labelKey: "aboutStatLabel4", accent: "#D32F2F" },
]

const VALUES = [
    { icon: FiGlobe, titleKey: "missionTitle", descKey: "missionDesc" },
    { icon: FiAward, titleKey: "visionTitle", descKey: "visionDesc" },
    { icon: FiShield, titleKey: "promiseTitle", descKey: "promiseDesc" },
]

const GLOBAL_PRESENCE = [
    { country: "India (HQ)", flag: "🇮🇳", details: ["New Delhi HQ", "Noida Office", "MEA Licensed", "Since 2005"] },
    { country: "Russia", flag: "🇷🇺", details: ["Moscow Office", "500+ Deployed", "Since 2022", "All Sectors"] },
    { country: "UAE / GCC", flag: "🇦🇪", details: ["Dubai Markets", "GCC Experience", "Compliant", "Trusted"] },
]

export default function AboutMain() {
    const { t, lang } = useLanguage()

    return (
        <section style={{ background: "#FFFFFF" }} className="pt-28 pb-20 relative overflow-hidden">
            {/* Left brand strip */}
            <div className="absolute left-0 top-0 bottom-0 w-[3px]" style={{ background: "#8A0029" }} />

            {/* SVG bg grid */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.025 }} aria-hidden="true">
                <defs>
                    <pattern id="ag" width="48" height="48" patternUnits="userSpaceOnUse">
                        <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#262626" strokeWidth="0.5" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#ag)" />
            </svg>

            <Container>
                <div className="relative z-10 space-y-20">
                    {/* Hero header */}
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-8 h-[2px]" style={{ background: "#8A0029" }} />
                                <span className="text-[11px] tracking-[0.2em] uppercase font-bold"
                                    style={{ color: "#D32F2F", fontFamily: "var(--font-inter)" }}>
                                    {t('aboutTitle')}
                                </span>
                            </div>
                            <h1 className="font-black leading-[1.05] tracking-tight mb-6"
                                style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(2.8rem, 6vw, 5rem)", color: "#262626" }}>
                                {lang === 'ru' ? (
                                    <>Распределение кадров<br /><span style={{ color: "#8A0029" }}>по всему миру</span></>
                                ) : (
                                    <>Global Workforce<br /><span style={{ color: "#8A0029" }}>Deployment Experts</span></>
                                )}
                            </h1>
                            <p className="text-base max-w-2xl leading-relaxed"
                                style={{ fontFamily: "var(--font-poppins)", color: "#6B7280" }}>
                                {lang === 'ru'
                                    ? "Taha Airwaves Private Limited — государственное лицензированное агентство по подбору персонала, базирующееся в Нью-Дели. С 2005 года мы помогаем работодателям по всему миру находить квалифицированных специалистов — особенно на российском рынке, где мы работаем с 2022 года."
                                    : "Taha Airwaves Private Limited is a government-licensed manpower recruitment consultancy based in New Delhi, India. Since 2005, we have been connecting India's professional workforce with global employers — with a special focus on Russia since 2022, and extensive experience across the GCC and beyond."}
                            </p>
                        </motion.div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {GLOBAL_STATS.map((s, i) => (
                            <motion.div key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-7 rounded text-center"
                                style={{ background: "#F7F7F7", border: "1px solid rgba(38,38,38,0.08)" }}>
                                <p className="text-5xl font-black mb-2 transition-colors duration-300"
                                    style={{ color: s.accent, fontFamily: "var(--font-inter)" }}>{s.valueKey}</p>
                                <p className="text-[11px] uppercase tracking-wide font-bold"
                                    style={{ color: "#9CA3AF", fontFamily: "var(--font-inter)" }}>{t(s.labelKey)}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Values */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-8 h-[2px]" style={{ background: "#8A0029" }} />
                            <span className="text-[10px] tracking-[0.2em] uppercase font-bold"
                                style={{ color: "#D32F2F", fontFamily: "var(--font-inter)" }}>
                                {lang === 'ru' ? 'Наши принципы' : 'Our Principles'}
                            </span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            {VALUES.map((v, i) => {
                                const Icon = v.icon
                                return (
                                    <motion.div key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="group relative p-8 rounded"
                                        style={{ background: "#FFFFFF", border: "1px solid rgba(38,38,38,0.08)" }}>
                                        <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity"
                                            style={{ background: "#8A0029" }} />
                                        <div className="w-11 h-11 rounded flex items-center justify-center mb-5"
                                            style={{ background: i % 2 === 0 ? "#8A0029" : "#D32F2F" }}>
                                            <Icon size={18} color="#FFFFFF" />
                                        </div>
                                        <h3 className="font-black text-sm uppercase tracking-wide mb-3 transition-colors group-hover:text-[#8A0029]"
                                            style={{ fontFamily: "var(--font-inter)", color: "#262626" }}>
                                            {t(v.titleKey)}
                                        </h3>
                                        <p className="text-sm leading-relaxed"
                                            style={{ fontFamily: "var(--font-poppins)", color: "#6B7280" }}>
                                            {t(v.descKey)}
                                        </p>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>

                    {/* Global presence */}
                    <div className="rounded overflow-hidden" style={{ background: "#262626" }}>
                        <div className="px-10 py-5" style={{ background: "#8A0029" }}>
                            <h2 className="font-black text-xl lg:text-2xl"
                                style={{ fontFamily: "var(--font-inter)", color: "#FFFFFF" }}>
                                {lang === 'ru' ? 'Глобальное присутствие' : 'Global Presence'}
                            </h2>
                        </div>
                        <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                            {GLOBAL_PRESENCE.map((p, i) => (
                                <div key={i} className="space-y-3">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-3xl">{p.flag}</span>
                                        <h4 className="font-black"
                                            style={{ fontFamily: "var(--font-inter)", color: "#FFFFFF" }}>{p.country}</h4>
                                    </div>
                                    {p.details.map((d) => (
                                        <div key={d} className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#D32F2F" }} />
                                            <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-inter)" }}>{d}</span>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>

                        {/* License info */}
                        <div className="px-10 py-8" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[
                                    { label: lang === 'ru' ? 'Название компании' : 'Company', value: 'Taha Airwaves Private Limited' },
                                    { label: lang === 'ru' ? 'Лицензия RA' : 'RA License', value: 'B-3260/DEL/COM/100/5/11259/2025' },
                                    { label: lang === 'ru' ? 'Главный офис' : 'Head Office', value: '71A, 3rd Floor, New Friends Colony, New Delhi 110025' },
                                ].map((item, i) => (
                                    <div key={i}>
                                        <p className="text-[10px] uppercase tracking-widest mb-1.5"
                                            style={{ color: "#D32F2F", fontFamily: "var(--font-inter)" }}>{item.label}</p>
                                        <p className="text-sm font-semibold"
                                            style={{ color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-inter)" }}>{item.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
