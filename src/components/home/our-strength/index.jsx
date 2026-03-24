'use client'

import Container from "@/components/container"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/language"

export default function OurStrength() {
    const { t } = useLanguage()

    const metrics = [
        { value: "500+", label: t('metric1Label'), desc: t('metric1Desc'), accent: "#8A0029" },
        { value: "2022", label: t('metric2Label'), desc: t('metric2Desc'), accent: "#D32F2F" },
        { value: "20+", label: t('metric3Label'), desc: t('metric3Desc'), accent: "#8A0029" },
        { value: "50+", label: t('metric4Label'), desc: t('metric4Desc'), accent: "#D32F2F" },
    ]

    return (
        <section className="py-20 lg:py-24 relative overflow-hidden" style={{ background: "#262626" }}>
            {/* Grid SVG pattern */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.05 }} aria-hidden="true">
                <defs>
                    <pattern id="sg" width="48" height="48" patternUnits="userSpaceOnUse">
                        <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.5" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#sg)" />
            </svg>

            {/* Cross accent */}
            <svg className="absolute right-16 bottom-12 hidden lg:block opacity-10" width="60" height="60" viewBox="0 0 60 60" fill="none" aria-hidden="true">
                <line x1="30" y1="0" x2="30" y2="60" stroke="#D32F2F" strokeWidth="1.5" />
                <line x1="0" y1="30" x2="60" y2="30" stroke="#D32F2F" strokeWidth="1.5" />
            </svg>

            <Container>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.55 }}
                    className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 pb-12"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
                >
                    <div>
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-[2px]" style={{ background: "#8A0029" }} />
                            <span className="text-[11px] tracking-[0.2em] uppercase font-bold"
                                style={{ color: "#D32F2F", fontFamily: "var(--font-inter)" }}>
                                Metrics
                            </span>
                        </div>
                        <h2 className="font-black leading-tight"
                            style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#FFFFFF" }}>
                            {t('strengthTitle')} <span style={{ color: "#8A0029" }}>{t('strengthTitleAccent')}</span>
                        </h2>
                    </div>
                    <p className="max-w-sm text-sm leading-relaxed"
                        style={{ fontFamily: "var(--font-poppins)", color: "rgba(255,255,255,0.35)" }}>
                        {t('strengthSubtitle')}
                    </p>
                </motion.div>

                {/* Metric grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
                    {metrics.map((m, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.09, duration: 0.5 }}
                            className="group relative p-8 transition-all duration-300"
                            style={{ borderRight: i < 3 ? "1px solid rgba(255,255,255,0.04)" : "none" }}
                        >
                            {/* Hover top accent */}
                            <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{ background: m.accent }} />

                            <div className="text-5xl font-black mb-3 transition-colors duration-300"
                                style={{ color: "#FFFFFF", fontFamily: "var(--font-inter)" }}>
                                {m.value}
                            </div>
                            <div className="text-[10px] tracking-[0.15em] uppercase font-bold mb-3"
                                style={{ color: m.accent, fontFamily: "var(--font-inter)" }}>
                                {m.label}
                            </div>
                            <p className="text-xs leading-relaxed"
                                style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-poppins)" }}>
                                {m.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
