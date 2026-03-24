'use client'

import Container from "@/components/container"
import Link from "next/link"
import Image from "next/image"
import { MdArrowOutward } from "react-icons/md"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/language"

const SERVICES = [
    { slug: "cleaners", titleKey: "pSvc1Title", descKey: "pSvc1Desc", image: "/service-and-blog/Cleaners.jpeg" },
    { slug: "all-types-of-drivers", titleKey: "pSvc2Title", descKey: "pSvc2Desc", image: "/service-and-blog/drivers.jpeg" },
    { slug: "general-labour", titleKey: "pSvc3Title", descKey: "pSvc3Desc", image: "/service-and-blog/General-labours.jpeg" },
    { slug: "loading-unloading-workers", titleKey: "loadingTitle", descKey: "loadingDesc", image: "/service-and-blog/Loading-unloading-workers.jpeg" },
    { slug: "factory-helpers", titleKey: "pSvc4Title", descKey: "pSvc4Desc", image: "/service-and-blog/Factory-helpers.jpeg" },
    { slug: "barista", titleKey: "baristaTitle", descKey: "baristaDesc", image: "/service-and-blog/Barista-workers.jpeg" },
    { slug: "packing-workers", titleKey: "packersTitle", descKey: "packersDesc", image: "/service-and-blog/Packers-workers.jpeg" },
    { slug: "emigration-immigration-clearance", titleKey: "pSvc5Title", descKey: "pSvc5Desc", image: "/service-and-blog/Immigration-clearance.jpeg" },
    { slug: "document-attestation-services", titleKey: "docAttestTitle", descKey: "docAttestDesc", image: "/service-and-blog/Document-attestation.jpeg" },
    { slug: "skilled-labourers-technicians", titleKey: "svcTechnicians", descKey: "techDesc", image: "/service-and-blog/Factory-helpers.jpeg" },
    { slug: "employee-outsourcing-solutions", titleKey: "pSvc6Title", descKey: "pSvc6Desc", image: "/service-and-blog/employe-outsourcing-.jpeg" },
]

export default function ServicesMain() {
    const { t, lang } = useLanguage()

    return (
        <section className="pt-28 pb-20 relative overflow-hidden" style={{ background: "#FFFFFF" }}>
            {/* Left brand strip */}
            <div className="absolute left-0 top-0 bottom-0 w-[3px]" style={{ background: "#8A0029" }} />

            {/* SVG bg pattern */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.022 }} aria-hidden="true">
                <defs>
                    <pattern id="sp" width="48" height="48" patternUnits="userSpaceOnUse">
                        <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#262626" strokeWidth="0.5" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#sp)" />
            </svg>

            <Container>
                <div className="relative z-10">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-14"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-[2px]" style={{ background: "#8A0029" }} />
                            <span className="text-[11px] tracking-[0.2em] uppercase font-bold"
                                style={{ color: "#D32F2F", fontFamily: "var(--font-inter)" }}>
                                {t('ourServices')}
                            </span>
                        </div>
                        <h1 className="font-black leading-tight mb-4"
                            style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#262626" }}>
                            {t('pageServicesTitle')} <span style={{ color: "#8A0029" }}>— Russia</span>
                        </h1>
                        <p className="max-w-xl text-base leading-relaxed"
                            style={{ fontFamily: "var(--font-poppins)", color: "#6B7280" }}>
                            {t('pageServicesSubtitle')}
                        </p>
                    </motion.div>

                    {/* Services grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {SERVICES.map((svc, i) => (
                            <motion.div
                                key={svc.slug}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.07, duration: 0.45 }}
                            >
                                <Link href={`/services/${svc.slug}`}>
                                    <div className="group rounded overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg cursor-pointer"
                                        style={{ background: "#F7F7F7", border: "1px solid rgba(38,38,38,0.07)" }}>
                                        {/* Image */}
                                        <div className="relative w-full overflow-hidden" style={{ height: "200px" }}>
                                            <Image src={svc.image} alt={t(svc.titleKey)} fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105" />
                                            {/* Solid overlay hover */}
                                            <div className="absolute inset-0 transition-colors duration-300"
                                                style={{ background: "rgba(38,38,38,0.1)" }}
                                                onMouseEnter={e => e.currentTarget.style.background = "rgba(138,0,41,0.25)"}
                                                onMouseLeave={e => e.currentTarget.style.background = "rgba(38,38,38,0.1)"}
                                            />
                                            {/* ID tag */}
                                            <div className="absolute top-3 left-3 px-2 py-1 text-[10px] font-black"
                                                style={{ background: "#8A0029", color: "#FFFFFF", fontFamily: "var(--font-inter)" }}>
                                                {String(i + 1).padStart(2, '0')}
                                            </div>
                                        </div>
                                        {/* Content */}
                                        <div className="p-6 flex flex-col gap-3 flex-1" style={{ background: "#FFFFFF" }}>
                                            <div className="flex items-start justify-between">
                                                <h3 className="text-sm font-black uppercase tracking-wide transition-colors duration-300 group-hover:text-[#8A0029] flex-1 pr-2"
                                                    style={{ fontFamily: "var(--font-inter)", color: "#262626" }}>
                                                    {t(svc.titleKey)}
                                                </h3>
                                                <MdArrowOutward size={16} className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                                    style={{ color: "#8A0029" }} />
                                            </div>
                                            <p className="text-xs leading-relaxed flex-1"
                                                style={{ fontFamily: "var(--font-poppins)", color: "#6B7280" }}>
                                                {t(svc.descKey)}
                                            </p>
                                            <div className="flex items-center gap-2 text-[11px] font-bold"
                                                style={{ color: "#8A0029", fontFamily: "var(--font-inter)" }}>
                                                <div className="h-px w-6" style={{ background: "#8A0029" }} />
                                                {t('learnMore')}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}
