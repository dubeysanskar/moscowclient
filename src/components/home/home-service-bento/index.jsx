'use client'

import Container from "@/components/container"
import Link from "next/link"
import { MdArrowOutward } from "react-icons/md"
import { FiShield, FiSearch, FiFileText, FiSend } from "react-icons/fi"
import { useLanguage } from "@/context/language"
import ScrollReveal from "@/components/animations/ScrollReveal"
import { CornerOrnament } from "@/components/decorators/SVGDecorations"
import {
    HexGrid, StarBurst, ArrowDown, CrossPattern, DotMatrix, WavyLines
} from "@/components/decorators/SVGIllustrations"

export default function HomeServiceBento() {
    const { t } = useLanguage()

    const steps = [
        { icon: FiSearch, num: "01", titleKey: "bentoStep1", descKey: "bentoStep1Desc" },
        { icon: FiShield, num: "02", titleKey: "bentoStep2", descKey: "bentoStep2Desc" },
        { icon: FiFileText, num: "03", titleKey: "bentoStep3", descKey: "bentoStep3Desc" },
        { icon: FiSend, num: "04", titleKey: "bentoStep4", descKey: "bentoStep4Desc" },
    ]

    return (
        <section className="py-10 relative overflow-hidden" style={{ background: "#F7F7F7" }}>
            {/* ═══ Visible SVG illustrations — behind content ═══ */}
            <div className="absolute inset-0 z-[1] pointer-events-none">
                <HexGrid width={200} height={160} opacity={0.08} className="absolute -right-8 top-[10%] hidden lg:block" />
                <StarBurst size={150} rays={12} opacity={0.07} className="absolute left-[3%] bottom-[10%] hidden xl:block" />
                <ArrowDown size={50} opacity={0.10} className="absolute left-[5%] top-[30%] hidden xl:block" />
                <CrossPattern rows={3} cols={4} spacing={40} crossSize={10} opacity={0.06} className="absolute right-[5%] bottom-[20%] hidden xl:block" />
                <DotMatrix rows={4} cols={3} spacing={16} radius={2} opacity={0.07} className="absolute left-[2%] top-[10%] hidden lg:block" />
                <WavyLines width={1440} height={40} opacity={0.04} className="absolute top-[50%] left-0 w-full hidden lg:block" />
                <CornerOrnament size={35} color="#8A0029" position="top-left" className="absolute top-6 left-6 opacity-12" />
                <CornerOrnament size={35} color="#D32F2F" position="bottom-right" className="absolute bottom-6 right-6 opacity-12" />
            </div>

            <Container className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

                    {/* Large card — process steps */}
                    <ScrollReveal variant="fadeLeft" duration={0.7} className="lg:col-span-2">
                        <div className="relative rounded-2xl h-full overflow-hidden" style={{ background: "#8A0029" }}>
                            {/* Top accent bar */}
                            <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl" style={{ background: "#D32F2F" }} />

                            {/* Background decoration inside card */}
                            <DotMatrix rows={4} cols={4} color="#FFFFFF" spacing={30} radius={3} opacity={0.06} className="absolute top-6 right-6" />

                            {/* Wavy line decoration */}
                            <svg className="absolute bottom-[20%] left-0 w-full" height="20" viewBox="0 0 800 20" fill="none" preserveAspectRatio="none" aria-hidden="true" style={{ opacity: 0.06 }}>
                                <path d="M0 10 Q100 2 200 10 T400 10 T600 10 T800 10" stroke="#FFFFFF" strokeWidth="1" fill="none" />
                            </svg>

                            <div className="p-10 lg:p-12 relative z-10">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-[2px]" style={{ background: "#D32F2F" }} />
                                    <span className="text-[10px] tracking-[0.2em] uppercase font-bold"
                                        style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-inter)" }}>Process</span>
                                </div>
                                <h2 className="font-black mb-8"
                                    style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "#FFFFFF" }}>
                                    {t('bentoTitle')}
                                </h2>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {steps.map((step, i) => {
                                        const Icon = step.icon
                                        return (
                                            <div key={i} className="group p-5 rounded-xl border transition-all duration-300 hover:border-[#D32F2F] hover:-translate-y-1 cursor-default"
                                                style={{ border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.06)", backdropFilter: "blur(4px)" }}>
                                                <div className="flex items-center gap-3 mb-3">
                                                    <div className="w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                                                        style={{ background: i % 2 === 0 ? "rgba(211,47,47,0.8)" : "rgba(255,255,255,0.15)" }}>
                                                        <Icon size={14} color="#FFFFFF" />
                                                    </div>
                                                    <span className="text-[11px] font-bold"
                                                        style={{ color: "rgba(255,255,255,0.25)", fontFamily: "var(--font-inter)" }}>
                                                        {step.num}
                                                    </span>
                                                </div>
                                                <h4 className="font-black text-sm mb-1.5 group-hover:text-[#D32F2F] transition-colors"
                                                    style={{ fontFamily: "var(--font-inter)", color: "#FFFFFF" }}>
                                                    {t(step.titleKey)}
                                                </h4>
                                                <p className="text-xs leading-relaxed"
                                                    style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-poppins)" }}>
                                                    {t(step.descKey)}
                                                </p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Right column — CTA + stats */}
                    <div className="flex flex-col gap-4">
                        {/* CTA card */}
                        <ScrollReveal variant="fadeRight" delay={0.1}>
                            <div className="rounded-2xl p-8 flex flex-col gap-5 relative overflow-hidden"
                                style={{ background: "#FFFFFF", border: "1px solid rgba(138,0,41,0.06)" }}>
                                <CornerOrnament size={20} color="#D32F2F" position="top-right" className="absolute top-4 right-4 opacity-10" />
                                <div>
                                    <p className="text-sm font-medium leading-relaxed mb-4"
                                        style={{ fontFamily: "var(--font-poppins)", color: "#6B7280" }}>
                                        {t('bentoCTA1')}
                                    </p>
                                    <p className="text-base font-bold leading-snug"
                                        style={{ fontFamily: "var(--font-inter)", color: "#262626" }}>
                                        {t('bentoCTA2')}
                                    </p>
                                </div>
                                <Link href="/services">
                                    <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold cursor-pointer transition-all duration-300 hover:opacity-90 hover:scale-105"
                                        style={{ background: "#8A0029", color: "#FFFFFF", fontFamily: "var(--font-inter)" }}>
                                        {t('learnMore')} <MdArrowOutward size={13} />
                                    </button>
                                </Link>
                            </div>
                        </ScrollReveal>

                        {/* Stats card */}
                        <ScrollReveal variant="fadeRight" delay={0.2}>
                            <div className="rounded-2xl p-8 flex-1 flex flex-col justify-center gap-6 relative overflow-hidden"
                                style={{ background: "#8A0029" }}>
                                {/* Dot decoration */}
                                <svg className="opacity-12 mb-1" width="60" height="60" viewBox="0 0 60 60" fill="none" aria-hidden="true">
                                    {Array.from({ length: 9 }, (_, i) => (
                                        <circle key={i} cx={(i % 3) * 22 + 11} cy={Math.floor(i / 3) * 22 + 11} r="3" fill="#FFFFFF" />
                                    ))}
                                </svg>

                                {/* Arrow decoration */}
                                <svg className="absolute top-4 right-4 opacity-10" width="16" height="32" viewBox="0 0 16 32" fill="none" aria-hidden="true">
                                    <path d="M8 0 L8 24 M2 18 L8 24 L14 18" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" />
                                </svg>

                                <div>
                                    <p className="text-5xl font-black mb-1" style={{ color: "#FFFFFF", fontFamily: "var(--font-inter)" }}>500+</p>
                                    <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-poppins)" }}>{t('heroStat1Label')}</p>
                                </div>
                                <div className="h-px" style={{ background: "rgba(255,255,255,0.15)" }} />
                                <div>
                                    <p className="text-5xl font-black mb-1" style={{ color: "#FFFFFF", fontFamily: "var(--font-inter)" }}>20+</p>
                                    <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-poppins)" }}>{t('heroStat3Label')}</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </Container>
        </section>
    )
}
