'use client'

import Container from "@/components/container"
import Link from "next/link"
import { MdArrowOutward } from "react-icons/md"
import { useLanguage } from "@/context/language"
import ScrollReveal from "@/components/animations/ScrollReveal"
import SVGWave from "@/components/decorators/SVGWave"
import { GlobeWireframe, CornerOrnament, DotGrid, PulseRing, CircuitLines } from "@/components/decorators/SVGDecorations"

export default function CTA() {
    const { t } = useLanguage()

    return (
        <>
            <SVGWave position="top" color="#1A1A1A" bgColor="#FDFBEF" height={60} variant="smooth" />
            <section className="relative py-24 lg:py-32 overflow-hidden" style={{ background: "#1A1A1A" }}>
                {/* SVG Decorations */}
                <GlobeWireframe size={500} color="#FDFBEF" accentColor="#BC264B" opacity={0.03} className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 hidden lg:block" />
                <CornerOrnament size={60} color="#BC264B" position="top-left" className="absolute top-8 left-8 opacity-15 hidden lg:block" />
                <CornerOrnament size={60} color="#BC264B" position="bottom-right" className="absolute bottom-8 right-8 opacity-15 hidden lg:block" />
                <DotGrid rows={4} cols={4} color="#FDFBEF" opacity={0.04} spacing={20} className="absolute top-10 right-10 hidden lg:block" />
                {/* Grid pattern */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.03 }} aria-hidden="true">
                    <defs>
                        <pattern id="ctaGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#FDFBEF" strokeWidth="0.3" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#ctaGrid)" />
                </svg>

                {/* Decorative circles */}
                <svg className="absolute -top-10 -right-10 opacity-10 hidden lg:block" width="200" height="200" viewBox="0 0 200 200" fill="none" aria-hidden="true">
                    <circle cx="100" cy="100" r="90" stroke="#8E0935" strokeWidth="1" strokeDasharray="8 6" />
                    <circle cx="100" cy="100" r="60" stroke="#BC264B" strokeWidth="0.5" />
                    <circle cx="100" cy="100" r="30" stroke="#8E0935" strokeWidth="0.5" strokeDasharray="4 3" />
                </svg>

                <Container>
                    <ScrollReveal variant="fadeUp" className="text-center max-w-3xl mx-auto">
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="w-10 h-px" style={{ background: "rgba(142,9,53,0.3)" }} />
                            <div className="w-8 h-[2px]" style={{ background: "#8E0935" }} />
                            <div className="w-10 h-px" style={{ background: "rgba(142,9,53,0.3)" }} />
                        </div>

                        <span className="text-[11px] tracking-[0.25em] uppercase font-bold mb-4 block"
                            style={{ color: "#BC264B", fontFamily: "var(--font-inter)" }}>
                            {t('ctaSubtitle')}
                        </span>

                        <h2 className="font-black tracking-tight mb-6"
                            style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#FDFBEF" }}>
                            {t('ctaTitle')}
                        </h2>

                        <div className="flex flex-wrap justify-center gap-4 mt-8">
                            <Link href="/contact">
                                <button className="flex items-center gap-2 px-8 py-4 rounded text-sm font-bold cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden group"
                                    style={{ background: "#8E0935", color: "#FDFBEF", fontFamily: "var(--font-inter)" }}>
                                    {/* Pulse ring on hover */}
                                    <span className="absolute inset-0 rounded opacity-0 group-hover:opacity-20 group-hover:animate-ping"
                                        style={{ background: "#BC264B" }} />
                                    <span className="relative z-10 flex items-center gap-2">
                                        {t('heroCtaContact')} <MdArrowOutward size={15} />
                                    </span>
                                </button>
                            </Link>
                            <Link href="/services">
                                <button className="flex items-center gap-2 px-8 py-4 rounded text-sm font-bold cursor-pointer transition-all duration-300 hover:bg-white/10"
                                    style={{ background: "transparent", color: "#FDFBEF", border: "1px solid rgba(253,251,239,0.2)", fontFamily: "var(--font-inter)" }}>
                                    {t('heroCtaServices')}
                                </button>
                            </Link>
                        </div>
                    </ScrollReveal>
                </Container>
            </section>
        </>
    )
}