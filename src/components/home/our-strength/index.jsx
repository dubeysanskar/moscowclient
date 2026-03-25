'use client'

import { useRef, useEffect, useState } from "react"
import Container from "@/components/container"
import { motion, useInView } from "framer-motion"
import { useLanguage } from "@/context/language"
import SVGWave from "@/components/decorators/SVGWave"
import { DotGrid, Crosshair, CornerOrnament } from "@/components/decorators/SVGDecorations"

function AnimatedCounter({ value, inView }) {
    const [display, setDisplay] = useState("0")

    useEffect(() => {
        if (!inView) return
        const num = parseInt(value)
        if (isNaN(num)) { setDisplay(value); return }
        let current = 0
        const step = Math.max(1, Math.floor(num / 120))
        const timer = setInterval(() => {
            current += step
            if (current >= num) { setDisplay(String(num)); clearInterval(timer) }
            else setDisplay(String(current))
        }, 16)
        return () => clearInterval(timer)
    }, [inView, value])

    return <>{display}</>
}

export default function OurStrength() {
    const { t } = useLanguage()
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-80px" })

    const metrics = [
        { valueKey: "metric1Value", labelKey: "metric1Label", descKey: "metric1Desc", suffix: "+" },
        { valueKey: "metric2Value", labelKey: "metric2Label", descKey: "metric2Desc", suffix: "" },
        { valueKey: "metric3Value", labelKey: "metric3Label", descKey: "metric3Desc", suffix: "+" },
        { valueKey: "metric4Value", labelKey: "metric4Label", descKey: "metric4Desc", suffix: "+" },
    ]

    return (
        <>
            <SVGWave position="top" color="#1A1A1A" bgColor="#FDFBEF" height={60} variant="gentle" />
            <section ref={ref} className="py-20 lg:py-28 relative overflow-hidden" style={{ background: "#1A1A1A" }}>
                {/* Grid background pattern */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.03 }} aria-hidden="true">
                    <defs>
                        <pattern id="strengthGrid" width="50" height="50" patternUnits="userSpaceOnUse">
                            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#FDFBEF" strokeWidth="0.4" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#strengthGrid)" />
                </svg>

                {/* Decorative circle + new SVG decorations */}
                <svg className="absolute top-8 right-12 hidden lg:block opacity-10" width="100" height="100" viewBox="0 0 100 100" fill="none" aria-hidden="true">
                    <circle cx="50" cy="50" r="45" stroke="#BC264B" strokeWidth="1" strokeDasharray="6 4" />
                    <circle cx="50" cy="50" r="25" stroke="#8E0935" strokeWidth="0.5" />
                </svg>
                <DotGrid rows={4} cols={3} color="#FDFBEF" opacity={0.04} spacing={20} className="absolute bottom-10 left-10 hidden lg:block" />
                <Crosshair size={80} color="#FDFBEF" accentColor="#BC264B" opacity={0.04} className="absolute bottom-16 right-16 hidden lg:block" />
                <CornerOrnament size={40} color="#BC264B" position="top-left" className="absolute top-6 left-6 opacity-15 hidden lg:block" />
                <CornerOrnament size={40} color="#BC264B" position="bottom-right" className="absolute bottom-6 right-6 opacity-15 hidden lg:block" />

                <Container>
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-14"
                    >
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="w-10 h-px" style={{ background: "rgba(142,9,53,0.3)" }} />
                            <div className="w-8 h-[2px]" style={{ background: "#8E0935" }} />
                            <div className="w-10 h-px" style={{ background: "rgba(142,9,53,0.3)" }} />
                        </div>
                        <h2 className="font-black tracking-tight mb-3"
                            style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#FDFBEF" }}>
                            {t('strengthTitle')} <span style={{ color: "#BC264B" }}>{t('strengthTitleAccent')}</span>
                        </h2>
                        <p className="text-sm" style={{ fontFamily: "var(--font-poppins)", color: "rgba(253,251,239,0.4)" }}>
                            {t('strengthSubtitle')}
                        </p>
                    </motion.div>

                    {/* Metric cards */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {metrics.map((m, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.2 + i * 0.12, duration: 0.55 }}
                                className="group relative p-7 rounded text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                                style={{
                                    background: "rgba(253,251,239,0.03)",
                                    border: "1px solid rgba(253,251,239,0.06)",
                                }}
                            >
                                {/* Top accent on hover */}
                                <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t opacity-0 group-hover:opacity-100 transition-opacity"
                                    style={{ background: "#8E0935" }} />

                                <p className="text-4xl lg:text-5xl font-black mb-2 transition-colors duration-300 group-hover:text-[#BC264B]"
                                    style={{ color: "#FDFBEF", fontFamily: "var(--font-inter)" }}>
                                    <AnimatedCounter value={t(m.valueKey).replace('+', '')} inView={inView} />
                                    {m.suffix}
                                </p>
                                <p className="text-xs font-bold uppercase tracking-wider mb-2"
                                    style={{ color: "#BC264B", fontFamily: "var(--font-inter)" }}>
                                    {t(m.labelKey)}
                                </p>
                                <p className="text-xs leading-relaxed"
                                    style={{ color: "rgba(253,251,239,0.3)", fontFamily: "var(--font-poppins)" }}>
                                    {t(m.descKey)}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>
            <SVGWave position="bottom" color="#FDFBEF" bgColor="#1A1A1A" height={60} variant="gentle" />
        </>
    )
}
