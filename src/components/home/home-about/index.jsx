'use client'

import Container from "@/components/container"
import Link from "next/link"
import { MdArrowOutward } from "react-icons/md"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/language"

export default function HomeAbout() {
    const { t } = useLanguage()

    return (
        <section className="py-24 relative overflow-hidden" style={{ background: "#FFFFFF" }}>
            {/* Left brand accent bar */}
            <div className="absolute left-0 top-0 bottom-0 w-[3px]" style={{ background: "#8A0029" }} />

            {/* Top-right SVG dot grid */}
            <svg className="absolute top-8 right-8 hidden lg:block" width="90" height="90" viewBox="0 0 90 90" fill="none" aria-hidden="true">
                {Array.from({ length: 25 }, (_, i) => (
                    <circle key={i} cx={(i % 5) * 18 + 9} cy={Math.floor(i / 5) * 18 + 9} r="1.8" fill="rgba(138,0,41,0.1)" />
                ))}
            </svg>

            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* LEFT — Metric card */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="rounded overflow-hidden" style={{ background: "#262626", border: "1px solid rgba(255,255,255,0.05)" }}>
                            {/* Top label bar */}
                            <div className="px-8 py-3 flex items-center gap-3" style={{ background: "#8A0029" }}>
                                <div className="w-2 h-2 rounded-full bg-white opacity-60" />
                                <span className="text-[10px] tracking-[0.2em] uppercase font-bold"
                                    style={{ color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-inter)" }}>
                                    Taha Airwaves · Russia Division
                                </span>
                            </div>

                            {/* Stats cards */}
                            <div className="p-8 space-y-0">
                                <div className="py-6" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                                    <div className="text-5xl font-black mb-2" style={{ color: "#D32F2F", fontFamily: "var(--font-inter)" }}>500+</div>
                                    <div className="text-xs tracking-[0.18em] uppercase font-semibold" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-inter)" }}>
                                        {t('heroStat1Label')}
                                    </div>
                                </div>
                                <div className="py-6" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                                    <div className="text-5xl font-black mb-2" style={{ color: "#FFFFFF", fontFamily: "var(--font-inter)" }}>20+</div>
                                    <div className="text-xs tracking-[0.18em] uppercase font-semibold" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-inter)" }}>
                                        {t('heroStat3Label')}
                                    </div>
                                </div>
                                <div className="pt-6">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                        <span className="text-[11px] tracking-[0.15em] uppercase font-bold"
                                            style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-inter)" }}>
                                            Active License
                                        </span>
                                    </div>
                                    <p className="text-xs" style={{ color: "rgba(255,255,255,0.2)", fontFamily: "var(--font-inter)" }}>
                                        RA B-3260/DEL/COM/100/5/11259/2025
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT — Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="space-y-6"
                    >
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-[2px]" style={{ background: "#8A0029" }} />
                                <span className="text-[11px] tracking-[0.2em] uppercase font-bold"
                                    style={{ color: "#D32F2F", fontFamily: "var(--font-inter)" }}>
                                    {t('aboutTitle')}
                                </span>
                            </div>
                            <h2 className="font-black leading-tight tracking-tight"
                                style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#262626" }}>
                                {t('aboutPara1')}
                            </h2>
                        </div>
                        <p className="leading-relaxed text-base" style={{ fontFamily: "var(--font-poppins)", color: "#6B7280" }}>
                            {t('aboutPara2')}
                        </p>
                        {/* Key facts list */}
                        <div className="space-y-2.5">
                            {[
                                { ru: "Лицензия МИД Индии для найма в Россию", en: "MEA India licensed for Russia recruitment" },
                                { ru: "Офис в Москве с 2022 года", en: "Moscow office operational since 2022" },
                                { ru: "500+ работников успешно размещено", en: "500+ workers successfully deployed" },
                                { ru: "Полный цикл: поиск → виза → размещение", en: "Full cycle: sourcing → visa → deployment" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2" style={{ background: "#8A0029" }} />
                                    <span className="text-sm" style={{ fontFamily: "var(--font-poppins)", color: "#6B7280" }}>
                                        {item.ru}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-3 pt-2">
                            <Link href="/about">
                                <button className="flex items-center gap-2 px-6 py-3 rounded text-sm font-bold cursor-pointer transition-opacity duration-200 hover:opacity-90"
                                    style={{ background: "#8A0029", color: "#FFFFFF", fontFamily: "var(--font-inter)" }}>
                                    {t('learnMore')} <MdArrowOutward size={14} />
                                </button>
                            </Link>
                            <Link href="/contact">
                                <button className="flex items-center gap-2 px-6 py-3 rounded text-sm font-semibold cursor-pointer border transition-colors duration-200"
                                    style={{ background: "transparent", color: "#262626", border: "1px solid #262626", fontFamily: "var(--font-inter)" }}
                                    onMouseEnter={e => { e.currentTarget.style.background = "#262626"; e.currentTarget.style.color = "#FFFFFF" }}
                                    onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#262626" }}>
                                    {t('getInTouch')}
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    )
}
