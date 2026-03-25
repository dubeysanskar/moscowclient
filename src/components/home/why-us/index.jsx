'use client'

import Container from "@/components/container"
import Link from "next/link"
import { MdArrowOutward } from "react-icons/md"
import { useLanguage } from "@/context/language"
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal"
import { DotPattern } from "@/components/decorators/SVGWave"
import { Crosshair, CornerOrnament, CircuitLines, FlowLine } from "@/components/decorators/SVGDecorations"

export default function WhyUs() {
    const { t } = useLanguage()

    const items = [
        { title: t('whyItem1Title'), desc: t('whyItem1Desc'), tag: "RA B-3260" },
        { title: t('whyItem2Title'), desc: t('whyItem2Desc'), tag: "500+ in Russia" },
        { title: t('whyItem3Title'), desc: t('whyItem3Desc'), tag: "Since 2022" },
    ]

    return (
        <section className="py-20 lg:py-28 relative overflow-hidden" style={{ background: "#FDFBEF" }}>
            {/* SVG Decorations */}
            <Crosshair size={100} color="#8E0935" accentColor="#BC264B" opacity={0.04} className="absolute top-16 right-12 hidden lg:block" />
            <CircuitLines width={300} height={100} color="#8E0935" opacity={0.03} className="absolute bottom-20 left-8 hidden lg:block" />
            <CornerOrnament size={50} color="#BC264B" position="top-left" className="absolute top-8 left-8 opacity-10 hidden lg:block" />
            <CornerOrnament size={50} color="#BC264B" position="bottom-right" className="absolute bottom-8 right-8 opacity-10 hidden lg:block" />
            {/* Dot decoration */}
            <DotPattern rows={4} cols={4} spacing={20} radius={2} color="rgba(142,9,53,0.12)"
                className="absolute bottom-8 left-8 hidden lg:block" />

            <Container>
                {/* Section header */}
                <ScrollReveal variant="fadeUp" className="mb-12">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-[2px]" style={{ background: "#8E0935" }} />
                        <span className="text-[11px] tracking-[0.2em] uppercase font-bold"
                            style={{ color: "#BC264B", fontFamily: "var(--font-inter)" }}>Why Us</span>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-8">
                        <h2 className="font-black leading-tight lg:w-1/2"
                            style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#1A1A1A" }}>
                            {t('whyTitle')}
                        </h2>
                        <p className="lg:w-1/2 text-sm leading-relaxed pt-1"
                            style={{ fontFamily: "var(--font-poppins)", color: "#6B7280" }}>
                            {t('whyDesc')}
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left — reason cards */}
                    <StaggerContainer className="space-y-px" staggerDelay={0.1}>
                        {items.map((item, i) => (
                            <StaggerItem key={i} variant="fadeLeft">
                                <div className="group relative p-7 transition-all duration-300 hover:bg-white rounded"
                                    style={{ borderLeft: "3px solid transparent" }}
                                    onMouseEnter={e => { e.currentTarget.style.borderLeftColor = "#8E0935" }}
                                    onMouseLeave={e => { e.currentTarget.style.borderLeftColor = "transparent" }}
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex-1">
                                            <h3 className="text-base font-black mb-2 transition-colors duration-300 group-hover:text-[#8E0935]"
                                                style={{ fontFamily: "var(--font-inter)", color: "#1A1A1A" }}>
                                                {item.title}
                                            </h3>
                                            <p className="text-sm leading-relaxed"
                                                style={{ fontFamily: "var(--font-poppins)", color: "#6B7280" }}>
                                                {item.desc}
                                            </p>
                                        </div>
                                        <span className="flex-shrink-0 text-[11px] font-bold px-2 py-1 rounded-sm whitespace-nowrap"
                                            style={{ background: "rgba(142,9,53,0.08)", color: "#8E0935", fontFamily: "var(--font-inter)" }}>
                                            {item.tag}
                                        </span>
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>

                    {/* Right — dark info card */}
                    <ScrollReveal variant="fadeRight" delay={0.2}>
                        <div className="relative rounded overflow-hidden p-10 lg:p-12"
                            style={{ background: "#1A1A1A" }}>
                            {/* Top accent strip */}
                            <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: "#8E0935" }} />

                            {/* Decorative SVG circles */}
                            <svg className="absolute top-4 right-4 opacity-10" width="100" height="100" viewBox="0 0 100 100" fill="none" aria-hidden="true">
                                <circle cx="100" cy="0" r="80" stroke="#BC264B" strokeWidth="1" strokeDasharray="6 5" />
                                <circle cx="100" cy="0" r="50" stroke="#BC264B" strokeWidth="1" />
                            </svg>

                            <div className="relative z-10 space-y-7">
                                <h3 className="text-xl lg:text-2xl font-black leading-snug"
                                    style={{ fontFamily: "var(--font-inter)", color: "#FDFBEF" }}>
                                    {t('whyPart2Title')}
                                </h3>
                                <p className="text-sm leading-relaxed"
                                    style={{ fontFamily: "var(--font-poppins)", color: "rgba(253,251,239,0.4)" }}>
                                    {t('whyPart2Desc')}
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { num: t('whyStat1Number'), label: t('whyStat1Label'), color: "#BC264B" },
                                        { num: t('whyStat2Number'), label: t('whyStat2Label'), color: "#FDFBEF" },
                                    ].map((s, i) => (
                                        <div key={i} className="p-4 rounded-sm" style={{ background: "rgba(253,251,239,0.04)", border: "1px solid rgba(253,251,239,0.06)" }}>
                                            <div className="text-4xl font-black mb-1" style={{ color: s.color, fontFamily: "var(--font-inter)" }}>
                                                {s.num}
                                            </div>
                                            <div className="text-[11px] font-medium tracking-wide uppercase"
                                                style={{ color: "rgba(253,251,239,0.3)", fontFamily: "var(--font-inter)" }}>
                                                {s.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <Link href="/contact">
                                    <button className="flex items-center gap-2 px-6 py-3 rounded text-sm font-bold cursor-pointer transition-all duration-300 hover:opacity-90 hover:scale-105"
                                        style={{ background: "#8E0935", color: "#FDFBEF", fontFamily: "var(--font-inter)" }}>
                                        {t('getInTouch')} <MdArrowOutward size={14} />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </Container>
        </section>
    )
}
