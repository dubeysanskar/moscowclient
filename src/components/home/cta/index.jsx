'use client'

import { useLanguage } from "@/context/language"
import Link from "next/link"
import { MdArrowOutward } from "react-icons/md"
import { FaWhatsapp } from "react-icons/fa"
import { motion } from "framer-motion"

export default function Cta() {
    const { t } = useLanguage()

    return (
        <section className="py-14 px-6 lg:px-8">
            <div className="relative rounded overflow-hidden max-w-[1400px] mx-auto" style={{ background: "#262626" }}>
                {/* Brand top strip */}
                <div className="absolute top-0 left-0 right-0 h-[4px]" style={{ background: "#8A0029" }} />

                {/* SVG Decorations */}
                <svg className="absolute top-6 left-6 opacity-10" width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true">
                    {Array.from({ length: 16 }, (_, i) => (
                        <circle key={i} cx={(i % 4) * 20 + 10} cy={Math.floor(i / 4) * 20 + 10} r="2.5" fill="white" />
                    ))}
                </svg>
                <svg className="absolute bottom-6 right-6 opacity-8" width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true">
                    <circle cx="80" cy="80" r="70" stroke="rgba(211,47,47,0.3)" strokeWidth="1" strokeDasharray="8 6" />
                    <circle cx="80" cy="80" r="45" stroke="rgba(138,0,41,0.2)" strokeWidth="1" />
                </svg>

                <div className="relative z-10 py-16 px-8 lg:px-16">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55 }}
                        className="max-w-3xl mx-auto text-center space-y-5"
                    >
                        <div className="flex items-center justify-center gap-3 mb-1">
                            <div className="w-10 h-px" style={{ background: "rgba(138,0,41,0.5)" }} />
                            <p className="text-[10px] tracking-[0.22em] uppercase font-bold"
                                style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-inter)" }}>
                                {t('ctaSubtitle')}
                            </p>
                            <div className="w-10 h-px" style={{ background: "rgba(138,0,41,0.5)" }} />
                        </div>

                        <h2 className="font-black tracking-tight"
                            style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#FFFFFF" }}>
                            {t('ctaTitle')}
                        </h2>

                        <div className="flex flex-wrap justify-center gap-3 pt-2">
                            <Link href="/contact">
                                <button className="px-8 py-3.5 rounded text-sm font-bold cursor-pointer transition-opacity duration-200 hover:opacity-90 flex items-center gap-2"
                                    style={{ background: "#8A0029", color: "#FFFFFF", fontFamily: "var(--font-inter)" }}>
                                    {t('getInTouch')} <MdArrowOutward size={15} />
                                </button>
                            </Link>
                            <a href="https://wa.me/919315226961" target="_blank" rel="noopener noreferrer">
                                <button className="px-8 py-3.5 rounded text-sm font-bold cursor-pointer border transition-colors duration-200 hover:border-white/30 flex items-center gap-2"
                                    style={{ background: "rgba(255,255,255,0.05)", color: "#FFFFFF", border: "1px solid rgba(255,255,255,0.12)", fontFamily: "var(--font-inter)" }}>
                                    <FaWhatsapp size={14} /> {t('whatsappUs')}
                                </button>
                            </a>
                        </div>

                        {/* Trust badges */}
                        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-3">
                            {["RA Licensed", "20+ Years Global Experience", "500+ in Russia", "Moscow Office"].map((b, i) => (
                                <div key={i} className="flex items-center gap-1.5">
                                    <div className="w-1 h-1 rounded-full" style={{ background: "#D32F2F" }} />
                                    <span className="text-[10px] font-medium" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-inter)" }}>{b}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}