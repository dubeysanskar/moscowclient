'use client'

import { useRef } from "react"
import Container from "@/components/container"
import Link from "next/link"
import { MdArrowOutward } from "react-icons/md"
import { FiUsers, FiFileText, FiTruck, FiGlobe, FiLayers } from "react-icons/fi"
import { useLanguage } from "@/context/language"
import ScrollReveal from "@/components/animations/ScrollReveal"
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline"
import { CornerOrnament } from "@/components/decorators/SVGDecorations"

const SERVICES_DATA = [
    { id: 1, icon: FiGlobe,    num: "01", titleKey: "csvc1Title", descKey: "csvc1Desc", relatedIds: [2, 3], status: "completed", energy: 100 },
    { id: 2, icon: FiUsers,    num: "02", titleKey: "csvc2Title", descKey: "csvc2Desc", relatedIds: [1, 3], status: "completed", energy: 90 },
    { id: 3, icon: FiFileText, num: "03", titleKey: "csvc3Title", descKey: "csvc3Desc", relatedIds: [2, 4], status: "in-progress", energy: 75 },
    { id: 4, icon: FiTruck,    num: "04", titleKey: "csvc4Title", descKey: "csvc4Desc", relatedIds: [3, 5], status: "in-progress", energy: 55 },
    { id: 5, icon: FiLayers,   num: "05", titleKey: "csvc5Title", descKey: "csvc5Desc", relatedIds: [4, 1], status: "pending", energy: 30 },
]

export default function CardCarousel() {
    const { t, lang } = useLanguage()

    const timelineData = SERVICES_DATA.map(s => ({
        id: s.id,
        title: t(s.titleKey),
        date: s.num,
        content: t(s.descKey),
        category: "Service",
        icon: s.icon,
        relatedIds: s.relatedIds,
        status: s.status,
        energy: s.energy,
    }))

    return (
        <section className="py-20 lg:py-28 relative overflow-hidden" style={{ background: "#FDFBEF" }}>
            {/* Vertical accent stripe */}
            <div className="absolute left-0 top-0 bottom-0 w-[3px] z-[2]" style={{ background: "#8A0029" }} />

            {/* Background SVG texture — new pattern (diagonal lines grid) */}
            <div className="absolute inset-0 z-[1] pointer-events-none">
                {/* Diagonal hatching */}
                <svg className="absolute inset-0 w-full h-full" aria-hidden="true" style={{ opacity: 0.04 }}>
                    <defs>
                        <pattern id="svcDiag" width="30" height="30" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                            <line x1="0" y1="0" x2="0" y2="30" stroke="#8A0029" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#svcDiag)" />
                </svg>

                {/* Diamond lattice right side */}
                <svg className="absolute right-0 top-[10%] hidden lg:block" width="200" height="300" viewBox="0 0 200 300" fill="none" aria-hidden="true" style={{ opacity: 0.07 }}>
                    {Array.from({ length: 5 }, (_, row) =>
                        Array.from({ length: 3 }, (_, col) => (
                            <g key={`${row}-${col}`} transform={`translate(${col * 60 + 20}, ${row * 60 + 15})`}>
                                <path d="M0 20 L20 0 L40 20 L20 40 Z" stroke="#8A0029" strokeWidth="0.6" fill="none" />
                            </g>
                        ))
                    )}
                </svg>

                {/* Plus signs left side */}
                <svg className="absolute left-[2%] top-[20%] hidden xl:block" width="100" height="200" viewBox="0 0 100 200" fill="none" aria-hidden="true" style={{ opacity: 0.08 }}>
                    {Array.from({ length: 4 }, (_, i) => (
                        <g key={i} transform={`translate(${(i % 2) * 50 + 20}, ${Math.floor(i / 2) * 80 + 30})`}>
                            <line x1="0" y1="10" x2="20" y2="10" stroke="#8A0029" strokeWidth="1" />
                            <line x1="10" y1="0" x2="10" y2="20" stroke="#8A0029" strokeWidth="1" />
                        </g>
                    ))}
                </svg>

                {/* Scattered small triangles */}
                <svg className="absolute right-[8%] bottom-[15%] hidden xl:block" width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true" style={{ opacity: 0.08 }}>
                    <polygon points="10,0 20,17 0,17" stroke="#D32F2F" strokeWidth="0.6" fill="none" />
                    <polygon points="40,25 50,42 30,42" stroke="#8A0029" strokeWidth="0.6" fill="none" />
                    <polygon points="55,55 65,72 45,72" stroke="#D32F2F" strokeWidth="0.6" fill="none" />
                </svg>

                <CornerOrnament size={40} color="#8A0029" position="top-left" className="absolute top-8 left-12 opacity-12" />
                <CornerOrnament size={40} color="#D32F2F" position="bottom-right" className="absolute bottom-8 right-8 opacity-12" />
            </div>

            <Container className="relative z-10">
                {/* Header */}
                <ScrollReveal variant="fadeUp">
                    <div className="text-center mb-10 lg:mb-14">
                        <div className="flex items-center justify-center gap-3 mb-3">
                            <div className="w-10 h-px" style={{ background: "rgba(138,0,41,0.2)" }} />
                            <div className="w-8 h-[2px]" style={{ background: "#8A0029" }} />
                            <div className="w-10 h-px" style={{ background: "rgba(138,0,41,0.2)" }} />
                        </div>
                        <span className="text-[10px] tracking-[0.2em] uppercase font-bold block mb-2"
                            style={{ color: "#D32F2F", fontFamily: "var(--font-inter)" }}>
                            {lang === 'ru' ? 'Услуги' : 'Services'}
                        </span>
                        <h2 className="font-black tracking-tight"
                            style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#262626" }}>
                            {lang === 'ru' ? 'Что мы предлагаем для российского рынка' : 'What We Offer for the Russian Market'}
                        </h2>
                        <p className="text-sm max-w-lg mx-auto mt-2" style={{ color: "rgba(38,38,38,0.5)", fontFamily: "var(--font-poppins)" }}>
                            {lang === 'ru'
                                ? 'Комплексные кадровые решения, охватывающие каждый этап жизненного цикла подбора персонала'
                                : 'Comprehensive manpower services covering every phase of the recruitment lifecycle'
                            }
                        </p>
                    </div>
                </ScrollReveal>

                {/* Orbital on left, Service cards on right */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Left — Orbital Timeline */}
                    <ScrollReveal variant="fadeLeft" delay={0.1}>
                        <div className="relative">
                            <RadialOrbitalTimeline timelineData={timelineData} />
                        </div>
                    </ScrollReveal>

                    {/* Right — Service list cards */}
                    <ScrollReveal variant="fadeRight" delay={0.2}>
                        <div className="space-y-3">
                            {SERVICES_DATA.map((s, i) => {
                                const Icon = s.icon
                                return (
                                    <div key={s.id}
                                        className="group flex items-start gap-4 p-5 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-default"
                                        style={{ background: "rgba(138,0,41,0.02)", border: "1px solid rgba(138,0,41,0.06)" }}>
                                        <div className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                                            style={{ background: i % 2 === 0 ? "rgba(138,0,41,0.08)" : "rgba(211,47,47,0.08)" }}>
                                            <Icon size={18} color="#8A0029" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-[10px] font-bold" style={{ color: "rgba(138,0,41,0.3)", fontFamily: "var(--font-inter)" }}>{s.num}</span>
                                                <h4 className="text-sm font-bold group-hover:text-[#8A0029] transition-colors"
                                                    style={{ color: "#262626", fontFamily: "var(--font-inter)" }}>
                                                    {t(s.titleKey)}
                                                </h4>
                                            </div>
                                            <p className="text-xs leading-relaxed" style={{ color: "rgba(38,38,38,0.5)", fontFamily: "var(--font-poppins)" }}>
                                                {t(s.descKey)}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}

                            <Link href="/services">
                                <button className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl mt-4"
                                    style={{ background: "#8A0029", color: "#FFFFFF", fontFamily: "var(--font-inter)" }}>
                                    {t('viewAllServices')} <MdArrowOutward size={14} />
                                </button>
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </Container>
        </section>
    )
}
