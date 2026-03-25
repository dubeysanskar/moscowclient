'use client'

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useLanguage } from "@/context/language"
import SVGWave from "@/components/decorators/SVGWave"

const industriesData = [
    { labelKey: "indConstruction", descKey: "indConstructionDesc", image: "/images/demo4.jpeg" },
    { labelKey: "indHospitality", descKey: "indHospitalityDesc", image: "/images/hospitality.png" },
    { labelKey: "indLogistics", descKey: "indLogisticsDesc", image: "/images/demo5.jpeg" },
    { labelKey: "indHealthcare", descKey: "indHealthcareDesc", image: "/images/healthcare.png" },
    { labelKey: "indManufacturing", descKey: "indManufacturingDesc", image: "/images/demo7.jpeg" },
    { labelKey: "indFacility", descKey: "indFacilityDesc", image: "/images/facility-management.png" },
    { labelKey: "indOilGas", descKey: "indOilGasDesc", image: "/images/oil-gas.png" },
    { labelKey: "indIT", descKey: "indITDesc", image: "/images/it-telecom.png" },
]

export default function IndustriesWeServe() {
    const { t } = useLanguage()
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-60px" })

    return (
        <>
            <SVGWave position="top" color="#1A1A1A" bgColor="#FDFBEF" height={60} variant="gentle" />
            <section ref={ref} className="py-20 lg:py-28 relative overflow-hidden" style={{ background: "#1A1A1A" }}>
                {/* Grid bg */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }} aria-hidden="true">
                    <defs>
                        <pattern id="ig" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FDFBEF" strokeWidth="0.4" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#ig)" />
                </svg>

                <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-12 pb-8"
                        style={{ borderBottom: "1px solid rgba(253,251,239,0.06)" }}>
                        <div>
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-8 h-[2px]" style={{ background: "#8E0935" }} />
                                <span className="text-[11px] tracking-[0.2em] uppercase font-bold"
                                    style={{ color: "#BC264B", fontFamily: "var(--font-inter)" }}>Industries</span>
                            </div>
                            <h2 className="font-black leading-tight"
                                style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#FDFBEF" }}>
                                {t('industriesTitle')} <span style={{ color: "#8E0935" }}>{t('industriesTitleAccent')}</span>
                            </h2>
                        </div>
                        <p className="max-w-xs text-sm leading-relaxed"
                            style={{ fontFamily: "var(--font-poppins)", color: "rgba(253,251,239,0.3)" }}>
                            {t('industriesSubtitle')}
                        </p>
                    </div>

                    {/* 4-column image grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {industriesData.map((ind, i) => (
                            <motion.div
                                key={ind.labelKey}
                                initial={{ opacity: 0, scale: 0.97 }}
                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: i * 0.07, duration: 0.45 }}
                                className="group relative rounded overflow-hidden cursor-pointer"
                                style={{ minHeight: "clamp(160px, 22vw, 230px)" }}
                            >
                                <Image
                                    src={ind.image} alt={t(ind.labelKey)} fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    loading="lazy"
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                />
                                {/* Overlay — solid, no gradient */}
                                <div className="absolute inset-0 transition-colors duration-400"
                                    style={{ background: "rgba(26,26,26,0.6)" }}
                                    onMouseEnter={e => e.currentTarget.style.background = "rgba(142,9,53,0.75)"}
                                    onMouseLeave={e => e.currentTarget.style.background = "rgba(26,26,26,0.6)"}
                                />
                                {/* Labels */}
                                <div className="absolute inset-0 flex flex-col justify-end p-4 z-10">
                                    <div className="w-6 h-[2px] mb-2 transition-all duration-400 group-hover:w-12"
                                        style={{ background: "#BC264B" }} />
                                    <h3 className="text-sm lg:text-base font-black uppercase tracking-wide"
                                        style={{ fontFamily: "var(--font-inter)", color: "#FDFBEF" }}>
                                        {t(ind.labelKey)}
                                    </h3>
                                    <p className="text-xs mt-1 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-350"
                                        style={{ color: "rgba(253,251,239,0.7)", fontFamily: "var(--font-poppins)" }}>
                                        {t(ind.descKey)}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <SVGWave position="bottom" color="#FDFBEF" bgColor="#1A1A1A" height={60} variant="gentle" />
        </>
    )
}
