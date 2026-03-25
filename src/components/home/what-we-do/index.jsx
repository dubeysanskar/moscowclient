'use client'

import Container from "@/components/container"
import Link from "next/link"
import { MdArrowOutward } from "react-icons/md"
import { FiUsers, FiTruck, FiFileText, FiSend } from "react-icons/fi"
import { useLanguage } from "@/context/language"
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal"
import { DotGrid, Crosshair, CornerOrnament } from "@/components/decorators/SVGDecorations"

export default function WhatWeDo() {
    const { t } = useLanguage()

    const services = [
        { icon: FiUsers, titleKey: "svc1Title", descKey: "svc1Desc" },
        { icon: FiTruck, titleKey: "svc2Title", descKey: "svc2Desc" },
        { icon: FiFileText, titleKey: "svc3Title", descKey: "svc3Desc" },
        { icon: FiSend, titleKey: "svc4Title", descKey: "svc4Desc" },
    ]

    return (
        <section className="py-20 lg:py-28 relative overflow-hidden" style={{ background: "#FDFBEF" }}>
            {/* SVG Decorations */}
            <DotGrid rows={5} cols={3} color="#8E0935" opacity={0.03} spacing={24} className="absolute top-10 left-8 hidden lg:block" />
            <Crosshair size={80} color="#8E0935" accentColor="#BC264B" opacity={0.04} className="absolute bottom-16 right-12 hidden lg:block" />
            <CornerOrnament size={45} color="#BC264B" position="top-right" className="absolute top-8 right-8 opacity-12 hidden lg:block" />

            <Container>
                {/* Header */}
                <ScrollReveal variant="fadeUp" className="text-center mb-14">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-10 h-px" style={{ background: "rgba(142,9,53,0.2)" }} />
                        <div className="w-8 h-[2px]" style={{ background: "#8E0935" }} />
                        <div className="w-10 h-px" style={{ background: "rgba(142,9,53,0.2)" }} />
                    </div>
                    <h2 className="font-black tracking-tight mb-3"
                        style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#1A1A1A" }}>
                        {t('whatTitle')} <span style={{ color: "#8E0935" }}>{t('whatTitleAccent')}</span>
                    </h2>
                    <p className="max-w-xl mx-auto text-sm" style={{ fontFamily: "var(--font-poppins)", color: "#9CA3AF" }}>
                        {t('whatSubtitle')}
                    </p>
                </ScrollReveal>

                {/* Service cards */}
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5" staggerDelay={0.12}>
                    {services.map((svc, i) => {
                        const Icon = svc.icon
                        return (
                            <StaggerItem key={i} variant="fadeUp">
                                <div className="group relative p-7 rounded text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-default h-full"
                                    style={{ background: "#FDFBEF", border: "1px solid rgba(142,9,53,0.08)" }}>
                                    {/* Top accent on hover */}
                                    <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t opacity-0 group-hover:opacity-100 transition-opacity"
                                        style={{ background: "#8E0935" }} />

                                    <div className="w-14 h-14 mx-auto mb-5 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                                        style={{ background: i % 2 === 0 ? "#8E0935" : "#BC264B" }}>
                                        <Icon size={22} color="#FDFBEF" />
                                    </div>

                                    <h3 className="text-base font-black mb-2 transition-colors duration-300 group-hover:text-[#8E0935]"
                                        style={{ fontFamily: "var(--font-inter)", color: "#1A1A1A" }}>
                                        {t(svc.titleKey)}
                                    </h3>
                                    <p className="text-xs leading-relaxed"
                                        style={{ fontFamily: "var(--font-poppins)", color: "#6B7280" }}>
                                        {t(svc.descKey)}
                                    </p>
                                </div>
                            </StaggerItem>
                        )
                    })}
                </StaggerContainer>

                {/* Bottom CTA */}
                <ScrollReveal variant="fadeUp" delay={0.5} className="flex justify-center mt-10">
                    <Link href="/services">
                        <button className="flex items-center gap-2 px-7 py-3.5 rounded text-sm font-bold cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg"
                            style={{ background: "#8E0935", color: "#FDFBEF", fontFamily: "var(--font-inter)" }}>
                            {t('learnMore')} <MdArrowOutward size={14} />
                        </button>
                    </Link>
                </ScrollReveal>
            </Container>
        </section>
    )
}
