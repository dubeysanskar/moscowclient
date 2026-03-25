'use client'

import Container from "@/components/container"
import Link from "next/link"
import { MdArrowOutward } from "react-icons/md"
import { FiShield, FiSearch, FiFileText, FiSend } from "react-icons/fi"
import { useLanguage } from "@/context/language"
import ScrollReveal from "@/components/animations/ScrollReveal"

export default function HomeServiceBento() {
    const { t } = useLanguage()

    const steps = [
        { icon: FiSearch, num: "01", titleKey: "bentoStep1", descKey: "bentoStep1Desc" },
        { icon: FiShield, num: "02", titleKey: "bentoStep2", descKey: "bentoStep2Desc" },
        { icon: FiFileText, num: "03", titleKey: "bentoStep3", descKey: "bentoStep3Desc" },
        { icon: FiSend, num: "04", titleKey: "bentoStep4", descKey: "bentoStep4Desc" },
    ]

    return (
        <section className="py-10" style={{ background: "#FDFBEF" }}>
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

                    {/* Large card — process steps */}
                    <ScrollReveal variant="fadeLeft" duration={0.7} className="lg:col-span-2">
                        <div className="relative rounded h-full" style={{ background: "#1A1A1A" }}>
                            {/* Red top accent */}
                            <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t" style={{ background: "#8E0935" }} />

                            <div className="p-10 lg:p-12">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-[2px]" style={{ background: "#8E0935" }} />
                                    <span className="text-[10px] tracking-[0.2em] uppercase font-bold"
                                        style={{ color: "#BC264B", fontFamily: "var(--font-inter)" }}>Process</span>
                                </div>
                                <h2 className="font-black mb-8"
                                    style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "#FDFBEF" }}>
                                    {t('bentoTitle')}
                                </h2>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {steps.map((step, i) => {
                                        const Icon = step.icon
                                        return (
                                            <div key={i} className="group p-5 rounded border transition-all duration-300 hover:border-[#8E0935] cursor-default"
                                                style={{ border: "1px solid rgba(253,251,239,0.06)", background: "rgba(253,251,239,0.03)" }}>
                                                <div className="flex items-center gap-3 mb-3">
                                                    <div className="w-8 h-8 rounded flex items-center justify-center"
                                                        style={{ background: i % 2 === 0 ? "#8E0935" : "#BC264B" }}>
                                                        <Icon size={14} color="#FDFBEF" />
                                                    </div>
                                                    <span className="text-[11px] font-bold"
                                                        style={{ color: "rgba(253,251,239,0.2)", fontFamily: "var(--font-inter)" }}>
                                                        {step.num}
                                                    </span>
                                                </div>
                                                <h4 className="font-black text-sm mb-1.5 group-hover:text-[#BC264B] transition-colors"
                                                    style={{ fontFamily: "var(--font-inter)", color: "#FDFBEF" }}>
                                                    {t(step.titleKey)}
                                                </h4>
                                                <p className="text-xs leading-relaxed"
                                                    style={{ color: "rgba(253,251,239,0.35)", fontFamily: "var(--font-poppins)" }}>
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
                            <div className="rounded p-8 flex flex-col gap-5"
                                style={{ background: "#FDFBEF", border: "1px solid rgba(142,9,53,0.08)" }}>
                                <div>
                                    <p className="text-sm font-medium leading-relaxed mb-4"
                                        style={{ fontFamily: "var(--font-poppins)", color: "#6B7280" }}>
                                        {t('bentoCTA1')}
                                    </p>
                                    <p className="text-base font-bold leading-snug"
                                        style={{ fontFamily: "var(--font-inter)", color: "#1A1A1A" }}>
                                        {t('bentoCTA2')}
                                    </p>
                                </div>
                                <Link href="/services">
                                    <button className="flex items-center gap-2 px-5 py-2.5 rounded text-xs font-bold cursor-pointer transition-all duration-300 hover:opacity-90 hover:scale-105"
                                        style={{ background: "#8E0935", color: "#FDFBEF", fontFamily: "var(--font-inter)" }}>
                                        {t('learnMore')} <MdArrowOutward size={13} />
                                    </button>
                                </Link>
                            </div>
                        </ScrollReveal>

                        {/* Stats card */}
                        <ScrollReveal variant="fadeRight" delay={0.2}>
                            <div className="rounded p-8 flex-1 flex flex-col justify-center gap-6"
                                style={{ background: "#8E0935" }}>
                                {/* Dot decoration */}
                                <svg className="opacity-15 mb-1" width="60" height="60" viewBox="0 0 60 60" fill="none" aria-hidden="true">
                                    {Array.from({ length: 9 }, (_, i) => (
                                        <circle key={i} cx={(i % 3) * 22 + 11} cy={Math.floor(i / 3) * 22 + 11} r="3" fill="#FDFBEF" />
                                    ))}
                                </svg>
                                <div>
                                    <p className="text-5xl font-black mb-1" style={{ color: "#FDFBEF", fontFamily: "var(--font-inter)" }}>500+</p>
                                    <p className="text-sm" style={{ color: "rgba(253,251,239,0.6)", fontFamily: "var(--font-poppins)" }}>{t('heroStat1Label')}</p>
                                </div>
                                <div className="h-px" style={{ background: "rgba(253,251,239,0.15)" }} />
                                <div>
                                    <p className="text-5xl font-black mb-1" style={{ color: "#FDFBEF", fontFamily: "var(--font-inter)" }}>20+</p>
                                    <p className="text-sm" style={{ color: "rgba(253,251,239,0.6)", fontFamily: "var(--font-poppins)" }}>{t('heroStat3Label')}</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </Container>
        </section>
    )
}
