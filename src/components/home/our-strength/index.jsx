'use client'

import { useRef, useEffect, useState } from "react"
import Container from "@/components/container"
import { motion, useInView } from "framer-motion"
import { useLanguage } from "@/context/language"
import { CornerOrnament } from "@/components/decorators/SVGDecorations"
import { FloatingPaths } from "@/components/ui/background-paths"
import {
    DotMatrix, StarBurst, ArrowDown, ArrowUp,
    GlobeOutline, NestedFrames, WavyLines
} from "@/components/decorators/SVGIllustrations"

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
        { valueKey: "metric1Value", labelKey: "metric1Label", descKey: "metric1Desc", suffix: "+", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
        { valueKey: "metric2Value", labelKey: "metric2Label", descKey: "metric2Desc", suffix: "", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
        { valueKey: "metric3Value", labelKey: "metric3Label", descKey: "metric3Desc", suffix: "+", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
        { valueKey: "metric4Value", labelKey: "metric4Label", descKey: "metric4Desc", suffix: "+", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
    ]

    return (
        <section ref={ref} className="relative overflow-hidden" style={{ background: "#FDFBEF" }}>

            {/* ═══ BackgroundPaths — absolute, covering FULL section ═══ */}
            <div className="absolute inset-0 z-[1] pointer-events-none">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            {/* ═══ SVG decorations — z-[2], behind content but above paths ═══ */}
            <div className="absolute inset-0 z-[2] pointer-events-none">
                <DotMatrix rows={6} cols={3} spacing={16} radius={1.5} opacity={0.05} className="absolute top-16 left-6 hidden lg:block" />
                <NestedFrames size={280} opacity={0.04} className="absolute -right-12 top-[10%] hidden lg:block" />
                <GlobeOutline size={220} opacity={0.03} className="absolute right-[2%] bottom-[5%] hidden xl:block" />
                <StarBurst size={140} rays={14} opacity={0.035} className="absolute right-[5%] top-[50%] hidden xl:block" />
                <ArrowDown size={50} opacity={0.06} className="absolute left-[5%] top-[45%] hidden xl:block" />
                <ArrowUp size={50} opacity={0.06} className="absolute right-[7%] top-[18%] hidden xl:block" />
                <WavyLines width={1440} height={50} opacity={0.03} className="absolute top-[48%] left-0 w-full hidden lg:block" />
                <CornerOrnament size={50} color="#D32F2F" position="top-left" className="absolute top-8 left-8 opacity-10" />
                <CornerOrnament size={50} color="#8A0029" position="bottom-right" className="absolute bottom-8 right-8 opacity-10" />
            </div>

            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-[3px] z-[3]" style={{ background: "linear-gradient(to right, transparent, #8A0029, transparent)" }} />

            {/* ═══ CONTENT — z-10, above everything ═══ */}
            <Container className="py-24 lg:py-32 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-10 h-px" style={{ background: "rgba(138,0,41,0.2)" }} />
                        <div className="w-8 h-[2px]" style={{ background: "#8A0029" }} />
                        <div className="w-10 h-px" style={{ background: "rgba(138,0,41,0.2)" }} />
                    </div>
                    <h2 className="font-black tracking-tight mb-3"
                        style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#262626" }}>
                        {t('strengthTitle')} <span style={{ color: "#8A0029" }}>{t('strengthTitleAccent')}</span>
                    </h2>
                    <p className="text-base max-w-xl mx-auto" style={{ fontFamily: "var(--font-poppins)", color: "rgba(38,38,38,0.5)" }}>
                        {t('strengthSubtitle')}
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                    {metrics.map((m, i) => (
                        <motion.div key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.2 + i * 0.12, duration: 0.55 }}
                            className="group relative p-7 rounded-2xl text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                            style={{ background: "#FFFFFF", border: "1px solid rgba(138,0,41,0.06)", boxShadow: "0 4px 20px rgba(0,0,0,0.04)" }}>
                            <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                                style={{ background: i % 2 === 0 ? "#8A0029" : "#D32F2F" }} />
                            <div className="w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-md"
                                style={{ background: "rgba(138,0,41,0.06)" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#8A0029" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d={m.icon} />
                                </svg>
                            </div>
                            <p className="text-4xl lg:text-5xl font-black mb-2 transition-colors duration-300 group-hover:text-[#8A0029]"
                                style={{ color: "#262626", fontFamily: "var(--font-inter)" }}>
                                <AnimatedCounter value={t(m.valueKey).replace('+', '')} inView={inView} />{m.suffix}
                            </p>
                            <p className="text-sm font-bold uppercase tracking-wider mb-2" style={{ color: "#8A0029", fontFamily: "var(--font-inter)" }}>
                                {t(m.labelKey)}
                            </p>
                            <p className="text-sm leading-relaxed" style={{ color: "rgba(38,38,38,0.45)", fontFamily: "var(--font-poppins)" }}>
                                {t(m.descKey)}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
