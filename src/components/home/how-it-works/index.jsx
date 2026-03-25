'use client'

import Container from "@/components/container"
import { useLanguage } from "@/context/language"
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal"
import { DotGrid, FlowLine, CornerOrnament, GeometricFrame } from "@/components/decorators/SVGDecorations"

export default function HowItWorks() {
    const { t } = useLanguage()

    const steps = [
        { num: "01", titleKey: "step1Title", descKey: "step1Desc" },
        { num: "02", titleKey: "step2Title", descKey: "step2Desc" },
        { num: "03", titleKey: "step3Title", descKey: "step3Desc" },
        { num: "04", titleKey: "step4Title", descKey: "step4Desc" },
    ]

    return (
        <section className="py-20 lg:py-28 relative overflow-hidden" style={{ background: "#FDFBEF" }}>
            {/* SVG Decorations */}
            <div className="absolute left-0 top-0 bottom-0 w-[3px] hidden lg:block" style={{ background: "#8E0935" }} />
            <DotGrid rows={4} cols={4} color="#8E0935" opacity={0.04} spacing={20} className="absolute top-12 right-10 hidden lg:block" />
            <GeometricFrame size={90} color="#8E0935" opacity={0.04} className="absolute bottom-16 right-14 hidden lg:block" />
            <CornerOrnament size={40} color="#BC264B" position="top-right" className="absolute top-6 right-6 opacity-15 hidden lg:block" />
            <CornerOrnament size={40} color="#BC264B" position="bottom-left" className="absolute bottom-6 left-6 opacity-15 hidden lg:block" />

            <Container>
                {/* Header */}
                <ScrollReveal variant="fadeUp" className="mb-14">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-[2px]" style={{ background: "#8E0935" }} />
                        <span className="text-[11px] tracking-[0.2em] uppercase font-bold"
                            style={{ color: "#BC264B", fontFamily: "var(--font-inter)" }}>Process</span>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-6">
                        <h2 className="font-black leading-tight lg:w-1/2"
                            style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#1A1A1A" }}>
                            {t('howTitle')} <span style={{ color: "#8E0935" }}>{t('howTitleAccent')}</span>
                        </h2>
                        <p className="lg:w-1/2 text-sm leading-relaxed pt-1"
                            style={{ fontFamily: "var(--font-poppins)", color: "#6B7280" }}>
                            {t('howSubtitle')}
                        </p>
                    </div>
                </ScrollReveal>

                {/* Steps */}
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5" staggerDelay={0.15}>
                    {steps.map((step, i) => (
                        <StaggerItem key={i} variant="fadeUp">
                            <div className="group relative p-7 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-full"
                                style={{ background: "#FDFBEF", border: "1px solid rgba(142,9,53,0.08)" }}>
                                {/* Top accent */}
                                <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t opacity-0 group-hover:opacity-100 transition-opacity"
                                    style={{ background: "#8E0935" }} />

                                {/* Step number */}
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-10 h-10 rounded flex items-center justify-center"
                                        style={{ background: i % 2 === 0 ? "#8E0935" : "#BC264B" }}>
                                        <span className="text-xs font-black" style={{ color: "#FDFBEF", fontFamily: "var(--font-inter)" }}>
                                            {step.num}
                                        </span>
                                    </div>
                                    {i < steps.length - 1 && (
                                        <div className="hidden lg:block flex-1 h-px" style={{ background: "rgba(142,9,53,0.15)" }} />
                                    )}
                                </div>

                                <h3 className="text-base font-black mb-2 transition-colors duration-300 group-hover:text-[#8E0935]"
                                    style={{ fontFamily: "var(--font-inter)", color: "#1A1A1A" }}>
                                    {t(step.titleKey)}
                                </h3>
                                <p className="text-xs leading-relaxed"
                                    style={{ fontFamily: "var(--font-poppins)", color: "#6B7280" }}>
                                    {t(step.descKey)}
                                </p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Container>
        </section>
    )
}
