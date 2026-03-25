'use client'

import Container from "@/components/container"
import Image from "next/image"
import Link from "next/link"
import { MdArrowOutward } from "react-icons/md"
import { useLanguage } from "@/context/language"
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal"
import { DotGrid, CornerOrnament, FlowLine } from "@/components/decorators/SVGDecorations"

const SERVICES = [
    {
        id: "01", slug: "cleaners",
        titleEn: "Cleaners & Housekeeping", titleRu: "Уборщики и клининг",
        descEn: "Professionally trained staff for hotels, hospitals, commercial complexes, and residential facilities across Russia.",
        descRu: "Профессионально обученный персонал для отелей, больниц, коммерческих и жилых объектов России.",
        image: "/images/services/main-img/10.jpg",
        tags: ["Hotels", "Hospitals", "Commercial"],
    },
    {
        id: "02", slug: "all-types-of-drivers",
        titleEn: "All Types of Drivers", titleRu: "Водители всех категорий",
        descEn: "Licensed drivers for light and heavy vehicles, construction equipment, and specialized transport.",
        descRu: "Лицензированные водители для лёгкого и тяжёлого транспорта, строительной техники.",
        image: "/images/services/main-img/11.jpg",
        tags: ["Light", "Heavy", "Construction"],
    },
    {
        id: "03", slug: "general-labour",
        titleEn: "General Labour", titleRu: "Разнорабочие",
        descEn: "Reliable labourers for construction sites, warehouses, factories, and infrastructure projects in Russia.",
        descRu: "Надёжные рабочие для строительных площадок, складов и инфраструктурных проектов в России.",
        image: "/images/services/main-img/12.jpg",
        tags: ["Construction", "Warehouse"],
    },
    {
        id: "04", slug: "factory-helpers",
        titleEn: "Factory Helpers", titleRu: "Помощники на заводе",
        descEn: "Trained assistants for manufacturing, assembly lines, packaging, QC, and production support.",
        descRu: "Обученные ассистенты для производственных линий, упаковки и контроля качества.",
        image: "/images/services/main-img/13.png",
        tags: ["Manufacturing", "Assembly"],
    },
    {
        id: "05", slug: "emigration-immigration-clearance",
        titleEn: "Emigration Clearance", titleRu: "Оформление эмиграции",
        descEn: "Complete visa processing, documentation, emigration clearance and compliance management for Russia.",
        descRu: "Полное визовое оформление, документация и управление соответствием для России.",
        image: "/images/services/main-img/14.webp",
        tags: ["Visa", "Documentation"],
    },
    {
        id: "06", slug: "employee-outsourcing-solutions",
        titleEn: "Employee Outsourcing", titleRu: "Аутсорсинг персонала",
        descEn: "Complete HR outsourcing — temporary and permanent staffing with payroll and compliance end-to-end.",
        descRu: "Комплексное кадровое обеспечение — временный и постоянный штат, расчёт зарплат.",
        image: "/images/services/main-img/15.jpg",
        tags: ["HR", "Staffing", "Payroll"],
    },
]

export default function ServicesShowcase() {
    const { lang, t } = useLanguage()

    return (
        <section className="py-6 px-2 lg:px-6 relative">
            <div className="rounded-lg overflow-hidden relative" style={{ background: "#FDFBEF", border: "1px solid rgba(142,9,53,0.06)" }}>
                {/* Background SVG decorations */}
                <DotGrid rows={8} cols={8} color="#8E0935" opacity={0.03} spacing={30} className="absolute top-8 right-8 hidden lg:block" />
                <DotGrid rows={4} cols={4} color="#BC264B" opacity={0.03} spacing={25} className="absolute bottom-8 left-8 hidden lg:block" />

                <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-14 relative z-10">
                    {/* Header */}
                    <ScrollReveal variant="fadeUp">
                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 pb-10 mb-10"
                            style={{ borderBottom: "1px solid rgba(142,9,53,0.06)" }}>
                            <div>
                                <div className="flex items-center gap-3 mb-3">
                                    <FlowLine width={40} height={2} color="#8E0935" />
                                    <span className="text-[10px] tracking-[0.2em] uppercase font-bold"
                                        style={{ color: "#BC264B", fontFamily: "var(--font-inter)" }}>
                                        {lang === 'ru' ? 'Услуги' : 'All Services'}
                                    </span>
                                </div>
                                <h2 className="font-black leading-tight max-w-lg"
                                    style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", color: "#1A1A1A" }}>
                                    {lang === 'ru' ? 'Наши кадровые услуги для России' : 'Our Manpower Services for Russia'}
                                </h2>
                            </div>
                            <Link href="/services">
                                <button className="flex items-center gap-2 px-6 py-3 rounded text-sm font-bold cursor-pointer whitespace-nowrap transition-all duration-300 hover:shadow-[0_6px_20px_rgba(142,9,53,0.3)] hover:scale-105"
                                    style={{ background: "#8E0935", color: "#FDFBEF", fontFamily: "var(--font-inter)" }}>
                                    {lang === 'ru' ? 'Все услуги' : 'View All Services'} <MdArrowOutward size={14} />
                                </button>
                            </Link>
                        </div>
                    </ScrollReveal>

                    {/* Service grid */}
                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.08}>
                        {SERVICES.map((svc) => (
                            <StaggerItem key={svc.id} variant="fadeUp">
                                <Link href={`/services/${svc.slug}`}>
                                    <div className="group h-full flex flex-col rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 cursor-pointer"
                                        style={{ background: "white", border: "1px solid rgba(142,9,53,0.06)" }}>

                                        {/* Image */}
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src={svc.image}
                                                alt={lang === 'ru' ? svc.titleRu : svc.titleEn}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                loading="lazy"
                                            />
                                            {/* Hover overlay with icon */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,26,26,0.7)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                                                <div className="w-10 h-10 rounded-full flex items-center justify-center"
                                                    style={{ background: "#8E0935" }}>
                                                    <MdArrowOutward size={18} color="#FDFBEF" />
                                                </div>
                                            </div>
                                            {/* Number badge */}
                                            <div className="absolute top-3 left-3 w-9 h-9 rounded-lg flex items-center justify-center shadow-lg"
                                                style={{ background: "#8E0935" }}>
                                                <span className="text-[11px] font-black" style={{ color: "#FDFBEF", fontFamily: "var(--font-inter)" }}>
                                                    {svc.id}
                                                </span>
                                            </div>
                                            {/* Corner ornaments on image */}
                                            <CornerOrnament size={20} color="rgba(253,251,239,0.4)" position="top-right" className="absolute top-3 right-3" />
                                            <CornerOrnament size={20} color="rgba(253,251,239,0.4)" position="bottom-left" className="absolute bottom-3 left-3" />
                                        </div>

                                        {/* Content */}
                                        <div className="p-5 flex flex-col flex-1">
                                            <h3 className="text-base font-black mb-2 transition-colors duration-300 group-hover:text-[#8E0935]"
                                                style={{ fontFamily: "var(--font-inter)", color: "#1A1A1A" }}>
                                                {lang === 'ru' ? svc.titleRu : svc.titleEn}
                                            </h3>
                                            <p className="text-xs leading-relaxed flex-1 mb-4"
                                                style={{ color: "#6B7280", fontFamily: "var(--font-poppins)" }}>
                                                {lang === 'ru' ? svc.descRu : svc.descEn}
                                            </p>
                                            <div className="flex flex-wrap gap-1.5">
                                                {svc.tags.map((tag) => (
                                                    <span key={tag} className="text-[10px] font-semibold px-2 py-0.5 rounded-sm"
                                                        style={{ background: "rgba(142,9,53,0.06)", color: "#8E0935", fontFamily: "var(--font-inter)" }}>
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>

                    {/* Bottom CTA */}
                    <ScrollReveal variant="fadeUp" delay={0.3} className="flex justify-center mt-10">
                        <Link href="/contact">
                            <button className="flex items-center gap-2 px-8 py-3.5 rounded text-sm font-bold cursor-pointer border-2 transition-all duration-300 hover:bg-[#1A1A1A] hover:text-[#FDFBEF] hover:border-[#1A1A1A]"
                                style={{ color: "#1A1A1A", borderColor: "rgba(26,26,26,0.2)", fontFamily: "var(--font-inter)" }}>
                                {lang === 'ru' ? 'Нанять персонал' : 'Hire Manpower'} <MdArrowOutward size={14} />
                            </button>
                        </Link>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    )
}
