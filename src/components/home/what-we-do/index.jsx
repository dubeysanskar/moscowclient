'use client'

import Container from "@/components/container"
import Link from "next/link"
import { motion } from "framer-motion"
import { FiArrowRight, FiGlobe, FiUsers, FiFileText, FiTruck } from "react-icons/fi"
import { useLanguage } from "@/context/language"

export default function WhatWeDo() {
    const { t } = useLanguage()

    const services = [
        { icon: FiGlobe, title: t('svc1Title'), desc: t('svc1Desc'), num: "01", accent: "#8A0029" },
        { icon: FiUsers, title: t('svc2Title'), desc: t('svc2Desc'), num: "02", accent: "#D32F2F" },
        { icon: FiFileText, title: t('svc3Title'), desc: t('svc3Desc'), num: "03", accent: "#8A0029" },
        { icon: FiTruck, title: t('svc4Title'), desc: t('svc4Desc'), num: "04", accent: "#D32F2F" },
    ]

    return (
        <section className="py-20 lg:py-28 relative overflow-hidden" style={{ background: "#F7F7F7" }}>
            {/* SVG dot grid */}
            <svg className="absolute top-10 right-10 hidden lg:block" width="90" height="90" viewBox="0 0 90 90" fill="none" aria-hidden="true">
                {Array.from({ length: 25 }, (_, i) => (
                    <circle key={i} cx={(i % 5) * 18 + 9} cy={Math.floor(i / 5) * 18 + 9} r="1.8" fill="rgba(138,0,41,0.1)" />
                ))}
            </svg>

            <Container>
                {/* Header */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 mb-14 pb-8"
                    style={{ borderBottom: "1px solid rgba(38,38,38,0.08)" }}>
                    <div className="lg:flex-1">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-[2px]" style={{ background: "#8A0029" }} />
                            <span className="text-[11px] tracking-[0.2em] uppercase font-bold"
                                style={{ color: "#D32F2F", fontFamily: "var(--font-inter)" }}>Services</span>
                        </div>
                        <h2 className="font-black tracking-tight leading-tight"
                            style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#262626" }}>
                            {t('whatTitle')} <span style={{ color: "#8A0029" }}>{t('whatTitleAccent')}</span>
                        </h2>
                    </div>
                    <p className="lg:max-w-sm text-sm leading-relaxed"
                        style={{ fontFamily: "var(--font-poppins)", color: "#6B7280" }}>
                        {t('whatSubtitle')}
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {services.map((svc, i) => {
                        const Icon = svc.icon
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="group relative rounded overflow-hidden cursor-pointer"
                                style={{ background: "#FFFFFF", border: "1px solid rgba(38,38,38,0.08)" }}
                            >
                                {/* Hover top border */}
                                <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{ background: svc.accent }} />

                                <div className="p-7">
                                    {/* Number */}
                                    <div className="text-4xl font-black mb-5 leading-none"
                                        style={{ color: "rgba(38,38,38,0.06)", fontFamily: "var(--font-inter)" }}>
                                        {svc.num}
                                    </div>

                                    {/* Icon */}
                                    <div className="w-11 h-11 rounded flex items-center justify-center mb-5"
                                        style={{ background: svc.accent }}>
                                        <Icon size={18} color="#FFFFFF" />
                                    </div>

                                    <h3 className="text-sm font-black mb-2.5 uppercase tracking-wide transition-colors duration-300 group-hover:text-[#8A0029]"
                                        style={{ fontFamily: "var(--font-inter)", color: "#262626" }}>
                                        {svc.title}
                                    </h3>
                                    <p className="text-xs leading-relaxed mb-5"
                                        style={{ color: "#9CA3AF", fontFamily: "var(--font-poppins)" }}>
                                        {svc.desc}
                                    </p>
                                    <Link href="/services"
                                        className="inline-flex items-center gap-1.5 text-xs font-bold transition-all duration-300 group-hover:gap-3"
                                        style={{ color: "#8A0029", fontFamily: "var(--font-inter)" }}>
                                        {t('learnMore')} <FiArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </Container>
        </section>
    )
}
