'use client'

import Container from "@/components/container"
import { motion } from "framer-motion"
import { FiClipboard, FiSearch, FiFileText, FiSend } from "react-icons/fi"
import { useLanguage } from "@/context/language"

export default function HowItWorks() {
    const { t } = useLanguage()

    const steps = [
        { num: '01', icon: FiClipboard, title: t('step1Title'), desc: t('step1Desc'), accent: "#8A0029" },
        { num: '02', icon: FiSearch, title: t('step2Title'), desc: t('step2Desc'), accent: "#D32F2F" },
        { num: '03', icon: FiFileText, title: t('step3Title'), desc: t('step3Desc'), accent: "#8A0029" },
        { num: '04', icon: FiSend, title: t('step4Title'), desc: t('step4Desc'), accent: "#D32F2F" },
    ]

    return (
        <section className="py-20 lg:py-28 relative overflow-hidden" style={{ background: "#FFFFFF" }}>
            {/* Crosshatch SVG bg */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.018 }} aria-hidden="true">
                <defs>
                    <pattern id="ch" width="28" height="28" patternUnits="userSpaceOnUse">
                        <line x1="0" y1="0" x2="28" y2="28" stroke="#8A0029" strokeWidth="1" />
                        <line x1="28" y1="0" x2="0" y2="28" stroke="#8A0029" strokeWidth="1" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#ch)" />
            </svg>

            <Container>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.55 }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-10 h-px" style={{ background: "rgba(138,0,41,0.25)" }} />
                        <div className="w-8 h-[2px]" style={{ background: "#8A0029" }} />
                        <div className="w-10 h-px" style={{ background: "rgba(138,0,41,0.25)" }} />
                    </div>
                    <h2 className="font-black tracking-tight mb-4"
                        style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#262626" }}>
                        {t('howTitle')} <span style={{ color: "#8A0029" }}>{t('howTitleAccent')}</span>
                    </h2>
                    <p className="max-w-lg mx-auto text-sm leading-relaxed"
                        style={{ fontFamily: "var(--font-poppins)", color: "#9CA3AF" }}>
                        {t('howSubtitle')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                    {/* Dashed connector — desktop */}
                    <div className="hidden lg:block absolute top-11 left-[14%] right-[14%] h-px pointer-events-none"
                        style={{ background: "repeating-linear-gradient(90deg, rgba(138,0,41,0.2) 0, rgba(138,0,41,0.2) 8px, transparent 8px, transparent 18px)" }} />

                    {steps.map((step, i) => {
                        const Icon = step.icon
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="group text-center relative z-10"
                            >
                                <div className="relative inline-block mb-6">
                                    <div className="w-20 h-20 mx-auto rounded flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                                        style={{ background: "#262626", border: `2px solid ${step.accent}` }}>
                                        <Icon color="#FFFFFF" size={22} />
                                    </div>
                                    <div className="absolute -top-2.5 -right-2.5 w-7 h-7 rounded flex items-center justify-center text-[11px] font-black text-white"
                                        style={{ background: step.accent, fontFamily: "var(--font-inter)" }}>
                                        {step.num}
                                    </div>
                                </div>
                                <h4 className="text-sm font-black mb-2 uppercase tracking-wide transition-colors duration-300 group-hover:text-[#8A0029]"
                                    style={{ fontFamily: "var(--font-inter)", color: "#262626" }}>
                                    {step.title}
                                </h4>
                                <p className="text-xs leading-relaxed px-2"
                                    style={{ color: "#9CA3AF", fontFamily: "var(--font-poppins)" }}>
                                    {step.desc}
                                </p>
                            </motion.div>
                        )
                    })}
                </div>
            </Container>
        </section>
    )
}
