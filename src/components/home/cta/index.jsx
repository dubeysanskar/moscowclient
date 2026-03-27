'use client'

import Container from "@/components/container"
import Link from "next/link"
import { MdArrowOutward } from "react-icons/md"
import { useLanguage } from "@/context/language"
import ScrollReveal from "@/components/animations/ScrollReveal"
import { ElegantShape } from "@/components/ui/shape-landing-hero"
import { CornerOrnament } from "@/components/decorators/SVGDecorations"
import { DotMatrix, WavyLines } from "@/components/decorators/SVGIllustrations"

export default function CTA() {
    const { t } = useLanguage()

    return (
        <section className="relative py-24 lg:py-32 overflow-hidden" style={{ background: "#8A0029" }}>
            {/* ═══ ElegantShape floating shapes ═══ */}
            <ElegantShape delay={0.3} width={550} height={130} rotate={12}
                gradient="from-white/[0.06]"
                className="left-[-10%] top-[15%]" />
            <ElegantShape delay={0.5} width={450} height={110} rotate={-15}
                gradient="from-[#D32F2F]/[0.08]"
                className="right-[-5%] top-[70%]" />
            <ElegantShape delay={0.4} width={280} height={70} rotate={-8}
                gradient="from-white/[0.04]"
                className="left-[5%] bottom-[5%]" />
            <ElegantShape delay={0.6} width={180} height={50} rotate={20}
                gradient="from-[#D32F2F]/[0.06]"
                className="right-[15%] top-[10%]" />
            <ElegantShape delay={0.7} width={130} height={35} rotate={-25}
                gradient="from-white/[0.05]"
                className="left-[20%] top-[5%]" />

            {/* Additional SVG decorations */}
            <DotMatrix rows={4} cols={4} color="#FFFFFF" spacing={20} radius={2} opacity={0.05} className="absolute top-10 right-10 hidden lg:block" />
            <WavyLines width={1440} height={60} color="#FFFFFF" accentColor="#D32F2F" opacity={0.05} className="absolute bottom-[30%] left-0 w-full hidden lg:block" />
            <CornerOrnament size={60} color="#D32F2F" position="top-left" className="absolute top-8 left-8 opacity-15 hidden lg:block" />
            <CornerOrnament size={60} color="#D32F2F" position="bottom-right" className="absolute bottom-8 right-8 opacity-15 hidden lg:block" />

            {/* Grid pattern */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.03 }} aria-hidden="true">
                <defs>
                    <pattern id="ctaGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                        <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#FFFFFF" strokeWidth="0.3" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#ctaGrid)" />
            </svg>

            <Container>
                <ScrollReveal variant="fadeUp" className="text-center max-w-3xl mx-auto relative z-10">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="w-10 h-px" style={{ background: "rgba(255,255,255,0.3)" }} />
                        <div className="w-8 h-[2px]" style={{ background: "#FFFFFF" }} />
                        <div className="w-10 h-px" style={{ background: "rgba(255,255,255,0.3)" }} />
                    </div>

                    <span className="text-[11px] tracking-[0.25em] uppercase font-bold mb-4 block"
                        style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-inter)" }}>
                        {t('ctaSubtitle')}
                    </span>

                    <h2 className="font-black tracking-tight mb-6"
                        style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#FFFFFF" }}>
                        {t('ctaTitle')}
                    </h2>

                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        <Link href="/contact">
                            <button className="flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden group"
                                style={{ background: "#FFFFFF", color: "#8A0029", fontFamily: "var(--font-inter)" }}>
                                <span className="relative z-10 flex items-center gap-2">
                                    {t('heroCtaContact')} <MdArrowOutward size={15} />
                                </span>
                            </button>
                        </Link>
                        <Link href="/services">
                            <button className="flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold cursor-pointer transition-all duration-300 hover:bg-white/15"
                                style={{ background: "transparent", color: "#FFFFFF", border: "2px solid rgba(255,255,255,0.3)", fontFamily: "var(--font-inter)" }}>
                                {t('heroCtaServices')}
                            </button>
                        </Link>
                    </div>
                </ScrollReveal>
            </Container>
        </section>
    )
}