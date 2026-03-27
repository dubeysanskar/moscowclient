'use client'

import { useRef } from "react"
import Container from "@/components/container"
import Link from "next/link"
import { MdArrowOutward } from "react-icons/md"
import { FiUsers, FiTruck, FiFileText, FiSend, FiBriefcase } from "react-icons/fi"
import { useLanguage } from "@/context/language"
import ScrollReveal from "@/components/animations/ScrollReveal"
import { DotGrid, CornerOrnament, FlowLine } from "@/components/decorators/SVGDecorations"
import { motion, useScroll, useTransform } from "framer-motion"

const SERVICES = [
    {
        icon: FiUsers,
        titleEn: "Overseas Recruitment", titleRu: "Международный подбор",
        descEn: "End-to-end recruitment solutions for Russian employers seeking skilled Indian workforce across construction, hospitality, and manufacturing.",
        descRu: "Комплексные решения по подбору персонала для российских работодателей в строительстве, гостиничном бизнесе и производстве.",
    },
    {
        icon: FiTruck,
        titleEn: "Bulk Manpower Hiring", titleRu: "Массовый набор персонала",
        descEn: "High-volume workforce mobilization with rapid turnaround for large-scale construction, industrial, and infrastructure projects across Russia.",
        descRu: "Мобилизация рабочей силы для крупных строительных и промышленных проектов по всей России.",
    },
    {
        icon: FiFileText,
        titleEn: "Visa & Documentation", titleRu: "Визовое оформление",
        descEn: "Complete visa processing, document attestation, emigration clearance, and compliance management — handled end-to-end with zero hassle.",
        descRu: "Полное визовое оформление, аттестация документов и управление соответствием — без лишних задержек.",
    },
    {
        icon: FiSend,
        titleEn: "Deployment Support", titleRu: "Поддержка развёртывания",
        descEn: "Pre-departure orientation, travel coordination, airport transfers, accommodation setup, and continuous post-deployment monitoring.",
        descRu: "Предотъездная ориентация, координация поездок, трансферы, размещение и постоянный мониторинг.",
    },
    {
        icon: FiBriefcase,
        titleEn: "Employee Outsourcing", titleRu: "Аутсорсинг персонала",
        descEn: "Complete workforce outsourcing — staffing, payroll management, HR compliance, and performance monitoring handled end-to-end.",
        descRu: "Полный аутсорсинг — подбор, расчёт заработной платы, кадровое обеспечение и мониторинг.",
    },
]

export default function WhatWeDo() {
    const { lang } = useLanguage()
    const sectionRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    })

    // Map vertical scroll (0→1) to horizontal translation
    // 5 cards, show 3 at a time on desktop → need to shift by 2 card widths
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66%"])

    return (
        <section
            ref={sectionRef}
            className="relative"
            style={{ background: "#FDFBEF", height: "300vh" }}
        >
            {/* Decorations */}
            <DotGrid rows={5} cols={4} color="#8E0935" opacity={0.05} spacing={24} className="absolute top-10 left-8 hidden lg:block" />
            <CornerOrnament size={50} color="#BC264B" position="top-right" className="absolute top-8 right-8 opacity-15 hidden lg:block" />

            {/* Sticky container */}
            <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
                <Container>
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-10">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <FlowLine width={40} height={2} color="#8E0935" />
                                <span className="text-sm tracking-[0.2em] uppercase font-bold"
                                    style={{ color: "#BC264B", fontFamily: "var(--font-inter)" }}>
                                    {lang === 'ru' ? 'Наши Услуги' : 'Services'}
                                </span>
                            </div>
                            <h2 className="font-black tracking-tight"
                                style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)", color: "#1A1A1A" }}>
                                {lang === 'ru'
                                    ? <>{`Что мы `}<span style={{ color: "#8E0935" }}>{`делаем`}</span></>
                                    : <>{`What We `}<span style={{ color: "#8E0935" }}>{`Do`}</span></>
                                }
                            </h2>
                            <p className="mt-3 text-base max-w-xl leading-relaxed"
                                style={{ color: "#6B7280", fontFamily: "var(--font-poppins)" }}>
                                {lang === 'ru'
                                    ? 'Комплексные кадровые услуги, охватывающие каждый этап жизненного цикла подбора персонала'
                                    : 'Comprehensive manpower services covering every phase of the recruitment lifecycle'
                                }
                            </p>
                        </div>
                        <Link href="/services">
                            <button className="flex items-center gap-2.5 px-7 py-3.5 rounded-lg text-sm font-bold cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(142,9,53,0.25)]"
                                style={{ background: "#8E0935", color: "#FDFBEF", fontFamily: "var(--font-inter)" }}>
                                {lang === 'ru' ? 'Все услуги' : 'All Services'} <MdArrowOutward size={14} />
                            </button>
                        </Link>
                    </div>

                    {/* Horizontal scroll cards */}
                    <div className="overflow-hidden">
                        <motion.div
                            className="flex gap-6"
                            style={{ x }}
                        >
                            {SERVICES.map((svc, i) => {
                                const Icon = svc.icon
                                return (
                                    <div
                                        key={i}
                                        className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex-shrink-0"
                                        style={{
                                            background: "#8E0935",
                                            width: "calc((100% - 48px) / 3)",
                                            minWidth: "320px",
                                            minHeight: "340px",
                                        }}
                                    >
                                        {/* Gradient overlay */}
                                        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #8E0935 0%, rgba(26,26,26,0.85) 100%)" }} />

                                        <div className="relative z-10 p-8 flex flex-col justify-between h-full">
                                            <div className="flex items-start justify-between">
                                                <div className="w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                                                    style={{ background: "rgba(253,251,239,0.15)", backdropFilter: "blur(10px)" }}>
                                                    <Icon size={24} color="#FDFBEF" />
                                                </div>
                                                <span className="text-5xl font-black"
                                                    style={{ color: "rgba(253,251,239,0.06)", fontFamily: "var(--font-inter)" }}>
                                                    {String(i + 1).padStart(2, '0')}
                                                </span>
                                            </div>

                                            <div className="mt-auto pt-8">
                                                <h3 className="text-xl font-black mb-3"
                                                    style={{ fontFamily: "var(--font-inter)", color: "#FDFBEF" }}>
                                                    {lang === 'ru' ? svc.titleRu : svc.titleEn}
                                                </h3>
                                                <p className="text-sm leading-relaxed"
                                                    style={{ fontFamily: "var(--font-poppins)", color: "rgba(253,251,239,0.6)" }}>
                                                    {lang === 'ru' ? svc.descRu : svc.descEn}
                                                </p>
                                            </div>
                                        </div>

                                        <CornerOrnament size={30} color="#FDFBEF" position="bottom-right" className="absolute bottom-5 right-5 opacity-10" />
                                    </div>
                                )
                            })}
                        </motion.div>
                    </div>
                </Container>
            </div>
        </section>
    )
}
