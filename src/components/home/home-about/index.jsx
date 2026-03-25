'use client'

import Container from "@/components/container"
import Image from "next/image"
import Link from "next/link"
import { MdArrowOutward } from "react-icons/md"
import { useLanguage } from "@/context/language"
import ScrollReveal from "@/components/animations/ScrollReveal"
import { DotPattern } from "@/components/decorators/SVGWave"
import { Crosshair, GeometricFrame, CornerOrnament, CircuitLines } from "@/components/decorators/SVGDecorations"

export default function HomeAbout() {
    const { t } = useLanguage()

    return (
        <section className="py-20 lg:py-28 relative overflow-hidden" style={{ background: "#FDFBEF" }}>
            {/* SVG Decorations */}
            <DotPattern rows={5} cols={5} spacing={18} radius={1.5} color="rgba(142,9,53,0.08)"
                className="absolute top-10 right-10 hidden lg:block" />
            <Crosshair size={120} color="#8E0935" accentColor="#BC264B" opacity={0.05} className="absolute bottom-12 right-16 hidden lg:block" />
            <GeometricFrame size={100} color="#8E0935" opacity={0.04} className="absolute top-32 left-6 hidden lg:block" />
            <CircuitLines width={250} height={80} color="#8E0935" opacity={0.03} className="absolute bottom-10 left-10 hidden lg:block" />

            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left — Image */}
                    <ScrollReveal variant="fadeLeft" duration={0.8}>
                        <div className="relative rounded-lg overflow-hidden" style={{ minHeight: "400px" }}>
                            <Image
                                src="/images/demo4.jpeg"
                                alt="Taha Airwaves team"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                loading="lazy"
                            />
                            {/* Overlay accent corner */}
                            <div className="absolute bottom-0 left-0 w-24 h-24" style={{ background: "rgba(142,9,53,0.85)" }}>
                                <div className="w-full h-full flex items-center justify-center">
                                    <span className="text-2xl font-black" style={{ color: "#FDFBEF", fontFamily: "var(--font-inter)" }}>20+</span>
                                </div>
                            </div>
                            {/* Top accent strip */}
                            <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: "#8E0935" }} />
                        </div>
                    </ScrollReveal>

                    {/* Right — Text */}
                    <div className="space-y-6">
                        <ScrollReveal variant="fadeRight" delay={0.1}>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-[2px]" style={{ background: "#8E0935" }} />
                                <span className="text-[11px] tracking-[0.2em] uppercase font-bold"
                                    style={{ color: "#BC264B", fontFamily: "var(--font-inter)" }}>
                                    {t('aboutTitle')}
                                </span>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal variant="fadeRight" delay={0.2}>
                            <h2 className="font-black leading-tight"
                                style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "#1A1A1A" }}>
                                {t('aboutPara1')}
                            </h2>
                        </ScrollReveal>

                        <ScrollReveal variant="fadeRight" delay={0.3}>
                            <p className="text-sm leading-relaxed"
                                style={{ fontFamily: "var(--font-poppins)", color: "#6B7280" }}>
                                {t('aboutPara2')}
                            </p>
                        </ScrollReveal>

                        <ScrollReveal variant="fadeRight" delay={0.4}>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <Link href="/about">
                                    <button className="flex items-center gap-2 px-6 py-3 rounded text-sm font-bold cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                        style={{ background: "#8E0935", color: "#FDFBEF", fontFamily: "var(--font-inter)" }}>
                                        {t('learnMore')} <MdArrowOutward size={14} />
                                    </button>
                                </Link>
                                <Link href="/contact">
                                    <button className="flex items-center gap-2 px-6 py-3 rounded text-sm font-bold cursor-pointer transition-all duration-300 hover:bg-[#8E0935] hover:text-[#FDFBEF] hover:border-[#8E0935]"
                                        style={{ background: "transparent", color: "#1A1A1A", border: "1px solid rgba(26,26,26,0.2)", fontFamily: "var(--font-inter)" }}>
                                        {t('getInTouch')}
                                    </button>
                                </Link>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </Container>
        </section>
    )
}
