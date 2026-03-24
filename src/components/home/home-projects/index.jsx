'use client'

import Container from "@/components/container"
import Link from "next/link"
import { MdArrowOutward } from "react-icons/md"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/language"

const SERVICES = [
    {
        id: "01", slug: "cleaners",
        titleKey: "pSvc1Title", descKey: "pSvc1Desc",
        tags: ["Уборка / Housekeeping", "Коммерческий / Commercial", "Промышленный / Industrial"],
    },
    {
        id: "02", slug: "all-types-of-drivers",
        titleKey: "pSvc2Title", descKey: "pSvc2Desc",
        tags: ["Лёгкий транспорт / Light Vehicle", "Тяжёлый транспорт / Heavy Vehicle", "Специализированный / Specialized"],
    },
    {
        id: "03", slug: "general-labour",
        titleKey: "pSvc3Title", descKey: "pSvc3Desc",
        tags: ["Строительство / Construction", "Склад / Warehouse", "Инфраструктура / Infrastructure"],
    },
    {
        id: "04", slug: "factory-helpers",
        titleKey: "pSvc4Title", descKey: "pSvc4Desc",
        tags: ["Производство / Manufacturing", "Сборка / Assembly", "Контроль качества / QC"],
    },
    {
        id: "05", slug: "emigration-immigration-clearance",
        titleKey: "pSvc5Title", descKey: "pSvc5Desc",
        tags: ["Виза / Visa", "Документы / Docs", "Соответствие / Compliance"],
    },
    {
        id: "06", slug: "employee-outsourcing-solutions",
        titleKey: "pSvc6Title", descKey: "pSvc6Desc",
        tags: ["Аутсорсинг / Staffing", "Расчёт зарплат / Payroll", "HR", "Соответствие / Compliance"],
    },
]

export default function ServicesShowcase() {
    const { t } = useLanguage()

    return (
        <section className="py-6 px-2 lg:px-6">
            <div className="rounded" style={{ background: "#F7F7F7", border: "1px solid rgba(38,38,38,0.07)" }}>
                <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-14">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 pb-10 mb-10"
                        style={{ borderBottom: "1px solid rgba(38,38,38,0.08)" }}>
                        <div>
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-8 h-[2px]" style={{ background: "#8A0029" }} />
                                <span className="text-[10px] tracking-[0.2em] uppercase font-bold"
                                    style={{ color: "#D32F2F", fontFamily: "var(--font-inter)" }}>
                                    {t('ourServices')}
                                </span>
                            </div>
                            <h2 className="font-black leading-tight max-w-lg"
                                style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", color: "#262626" }}>
                                {t('sspTitle')}
                            </h2>
                        </div>
                        <Link href="/services">
                            <button className="flex items-center gap-2 px-6 py-3 rounded text-sm font-bold cursor-pointer whitespace-nowrap transition-opacity hover:opacity-90"
                                style={{ background: "#8A0029", color: "#FFFFFF", fontFamily: "var(--font-inter)" }}>
                                {t('viewAllServices')} <MdArrowOutward size={14} />
                            </button>
                        </Link>
                    </div>

                    {/* Service cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {SERVICES.map((svc, i) => (
                            <motion.div
                                key={svc.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08, duration: 0.45 }}
                            >
                                <Link href={`/services/${svc.slug}`}>
                                    <div className="group h-full flex flex-col p-7 rounded transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-pointer"
                                        style={{ background: "#FFFFFF", border: "1px solid rgba(38,38,38,0.07)" }}>
                                        {/* Top hover accent */}
                                        <div className="mb-5 flex items-center justify-between">
                                            <span className="text-[11px] tracking-[0.2em] font-bold"
                                                style={{ color: "#8A0029", fontFamily: "var(--font-inter)" }}>
                                                {svc.id}
                                            </span>
                                            <div className="w-2 h-2 rounded-full transition-all duration-300 group-hover:scale-125"
                                                style={{ background: "#D32F2F" }} />
                                        </div>

                                        <h3 className="text-base font-black mb-3 transition-colors duration-300 group-hover:text-[#8A0029]"
                                            style={{ fontFamily: "var(--font-inter)", color: "#262626" }}>
                                            {t(svc.titleKey)}
                                        </h3>
                                        <p className="text-xs leading-relaxed flex-1 mb-4"
                                            style={{ color: "#6B7280", fontFamily: "var(--font-poppins)" }}>
                                            {t(svc.descKey)}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-1.5">
                                            {svc.tags.map((tag) => (
                                                <span key={tag}
                                                    className="text-[10px] font-medium px-2 py-0.5 rounded-sm"
                                                    style={{ background: "rgba(138,0,41,0.07)", color: "#8A0029", fontFamily: "var(--font-inter)" }}>
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="flex justify-center mt-10">
                        <Link href="/contact">
                            <button className="flex items-center gap-2 px-8 py-3.5 rounded text-sm font-bold cursor-pointer border transition-all duration-200 hover:bg-[#262626] hover:text-white hover:border-[#262626]"
                                style={{ background: "transparent", color: "#262626", border: "1px solid rgba(38,38,38,0.25)", fontFamily: "var(--font-inter)" }}>
                                {t('hireManpower')} <MdArrowOutward size={14} />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
