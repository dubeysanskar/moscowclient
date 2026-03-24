'use client'

import Container from "@/components/container"
import Link from "next/link"
import { MdArrowOutward } from "react-icons/md"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/language"

export default function WhyUs() {
    const { t } = useLanguage()

    const items = [
        { title: t('whyItem1Title'), desc: t('whyItem1Desc'), tag: "RA B-3260" },
        { title: t('whyItem2Title'), desc: t('whyItem2Desc'), tag: "500+ in Russia" },
        { title: t('whyItem3Title'), desc: t('whyItem3Desc'), tag: "Since 2022" },
    ]

    return (
        <section className="py-20 lg:py-28 relative overflow-hidden" style={{ background: "#F7F7F7" }}>
            {/* Dot decoration */}
            <svg className="absolute bottom-8 left-8 hidden lg:block" width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true">
                {Array.from({ length: 16 }, (_, i) => (
                    <circle key={i} cx={(i % 4) * 20 + 10} cy={Math.floor(i / 4) * 20 + 10} r="2" fill="rgba(138,0,41,0.12)" />
                ))}
            </svg>

            <Container>
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.55 }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-[2px]" style={{ background: "#8A0029" }} />
                        <span className="text-[11px] tracking-[0.2em] uppercase font-bold"
                            style={{ color: "#D32F2F", fontFamily: "var(--font-inter)" }}>Why Us</span>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-8">
                        <h2 className="font-black leading-tight lg:w-1/2"
                            style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#262626" }}>
                            {t('whyTitle')}
                        </h2>
                        <p className="lg:w-1/2 text-sm leading-relaxed pt-1"
                            style={{ fontFamily: "var(--font-poppins)", color: "#6B7280" }}>
                            {t('whyDesc')}
                        </p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left — reason cards */}
                    <div className="space-y-px">
                        {items.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="group relative p-7 transition-all duration-300 hover:bg-white"
                                style={{ borderLeft: "3px solid transparent", background: "transparent" }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.borderLeftColor = "#8A0029"
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.borderLeftColor = "transparent"
                                }}
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1">
                                        <h3 className="text-base font-black mb-2 transition-colors duration-300 group-hover:text-[#8A0029]"
                                            style={{ fontFamily: "var(--font-inter)", color: "#262626" }}>
                                            {item.title}
                                        </h3>
                                        <p className="text-sm leading-relaxed"
                                            style={{ fontFamily: "var(--font-poppins)", color: "#6B7280" }}>
                                            {item.desc}
                                        </p>
                                    </div>
                                    <span className="flex-shrink-0 text-[11px] font-bold px-2 py-1 rounded-sm whitespace-nowrap"
                                        style={{ background: "rgba(138,0,41,0.08)", color: "#8A0029", fontFamily: "var(--font-inter)" }}>
                                        {item.tag}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right — dark info card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative rounded overflow-hidden p-10 lg:p-12"
                        style={{ background: "#262626" }}
                    >
                        {/* Top accent strip */}
                        <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: "#8A0029" }} />

                        {/* Decorative SVG circles */}
                        <svg className="absolute top-4 right-4 opacity-10" width="100" height="100" viewBox="0 0 100 100" fill="none" aria-hidden="true">
                            <circle cx="100" cy="0" r="80" stroke="#D32F2F" strokeWidth="1" strokeDasharray="6 5" />
                            <circle cx="100" cy="0" r="50" stroke="#D32F2F" strokeWidth="1" />
                        </svg>

                        <div className="relative z-10 space-y-7">
                            <h3 className="text-xl lg:text-2xl font-black leading-snug"
                                style={{ fontFamily: "var(--font-inter)", color: "#FFFFFF" }}>
                                {t('whyPart2Title')}
                            </h3>
                            <p className="text-sm leading-relaxed"
                                style={{ fontFamily: "var(--font-poppins)", color: "rgba(255,255,255,0.4)" }}>
                                {t('whyPart2Desc')}
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { num: t('whyStat1Number'), label: t('whyStat1Label'), color: "#D32F2F" },
                                    { num: t('whyStat2Number'), label: t('whyStat2Label'), color: "#FFFFFF" },
                                ].map((s, i) => (
                                    <div key={i} className="p-4 rounded-sm" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                                        <div className="text-4xl font-black mb-1" style={{ color: s.color, fontFamily: "var(--font-inter)" }}>
                                            {s.num}
                                        </div>
                                        <div className="text-[11px] font-medium tracking-wide uppercase"
                                            style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-inter)" }}>
                                            {s.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Link href="/contact">
                                <button className="flex items-center gap-2 px-6 py-3 rounded text-sm font-bold cursor-pointer transition-opacity duration-200 hover:opacity-90"
                                    style={{ background: "#8A0029", color: "#FFFFFF", fontFamily: "var(--font-inter)" }}>
                                    {t('getInTouch')} <MdArrowOutward size={14} />
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    )
}
