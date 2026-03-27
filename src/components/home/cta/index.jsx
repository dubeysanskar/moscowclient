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
        <section className="relative py-16 sm:py-20 lg:py-32 overflow-hidden px-4 sm:px-0" style={{ background: "#8A0029" }}>
            {/* ═══ ElegantShape floating shapes ═══ */}
            <ElegantShape delay={0.3} width={550} height={130} rotate={12}
                gradient="from-white/[0.06]"
                className="left-[-10%] top-[15%] hidden sm:block" />
            <ElegantShape delay={0.5} width={450} height={110} rotate={-15}
                gradient="from-[#D32F2F]/[0.08]"
                className="right-[-5%] top-[70%] hidden sm:block" />
            <ElegantShape delay={0.4} width={280} height={70} rotate={-8}
                gradient="from-white/[0.04]"
                className="left-[5%] bottom-[5%] hidden lg:block" />
            <ElegantShape delay={0.6} width={180} height={50} rotate={20}
                gradient="from-[#D32F2F]/[0.06]"
                className="right-[15%] top-[10%] hidden lg:block" />
            <ElegantShape delay={0.7} width={130} height={35} rotate={-25}
                gradient="from-white/[0.05]"
                className="left-[20%] top-[5%] hidden lg:block" />

            {/* Mobile-visible SVG decorations */}
            <DotMatrix rows={3} cols={3} color="#FFFFFF" spacing={16} radius={2} opacity={0.08} className="absolute top-6 right-6" />
            <DotMatrix rows={4} cols={4} color="#FFFFFF" spacing={20} radius={2} opacity={0.05} className="absolute bottom-6 left-6 hidden sm:block" />
            <WavyLines width={1440} height={60} color="#FFFFFF" accentColor="#D32F2F" opacity={0.06} className="absolute bottom-[30%] left-0 w-full" />
            <CornerOrnament size={40} color="#D32F2F" position="top-left" className="absolute top-6 left-6 opacity-20" />
            <CornerOrnament size={40} color="#D32F2F" position="bottom-right" className="absolute bottom-6 right-6 opacity-20" />

            {/* Diamond SVGs — visible on all screens */}
            <svg className="absolute right-[8%] top-[12%]" width="40" height="40" viewBox="0 0 40 40" fill="none" style={{ opacity: 0.15 }}>
                <rect x="20" y="1" width="25" height="25" rx="3" transform="rotate(45 20 1)" stroke="#FFFFFF" strokeWidth="1.2" fill="none" />
            </svg>
            <svg className="absolute left-[6%] bottom-[15%]" width="30" height="30" viewBox="0 0 30 30" fill="none" style={{ opacity: 0.12 }}>
                <rect x="15" y="1" width="18" height="18" rx="2" transform="rotate(45 15 1)" stroke="#D32F2F" strokeWidth="1" fill="none" />
            </svg>

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
                    <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
                        <div className="w-8 sm:w-10 h-px" style={{ background: "rgba(255,255,255,0.3)" }} />
                        <div className="w-6 sm:w-8 h-[2px]" style={{ background: "#FFFFFF" }} />
                        <div className="w-8 sm:w-10 h-px" style={{ background: "rgba(255,255,255,0.3)" }} />
                    </div>

                    <span className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase font-bold mb-3 sm:mb-4 block"
                        style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-inter)" }}>
                        {t('ctaSubtitle')}
                    </span>

                    <h2 className="font-black tracking-tight mb-4 sm:mb-6"
                        style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(1.5rem, 5vw, 3.5rem)", color: "#FFFFFF" }}>
                        {t('ctaTitle')}
                    </h2>

                    <p className="text-sm sm:text-base max-w-xl mx-auto mb-2"
                        style={{ color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-poppins)" }}>
                        {t('ctaDesc')}
                    </p>

                    <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
                        <Link href="/contact" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden group"
                                style={{ background: "#FFFFFF", color: "#8A0029", fontFamily: "var(--font-inter)" }}>
                                <span className="relative z-10 flex items-center gap-2">
                                    {t('ctaBtn1')} <MdArrowOutward size={15} />
                                </span>
                            </button>
                        </Link>
                        <a href="https://wa.me/qr/TKSOMEYZZW2CN1" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold cursor-pointer transition-all duration-300 hover:bg-white/15"
                                style={{ background: "transparent", color: "#FFFFFF", border: "2px solid rgba(255,255,255,0.3)", fontFamily: "var(--font-inter)" }}>
                                {t('ctaBtn2')}
                            </button>
                        </a>
                    </div>
                </ScrollReveal>
            </Container>
        </section>
    )
}