'use client'

import Container from "@/components/container"
import Link from "next/link"
import { MdArrowOutward } from "react-icons/md"
import { FiShield, FiSearch, FiFileText, FiSend } from "react-icons/fi"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/language"

export default function HomeServiceBento() {
    const { t } = useLanguage()

    const steps = [
        { icon: FiSearch, num: "01", titleKey: "bentoStep1", descKey: "bentoStep1Desc" },
        { icon: FiShield, num: "02", titleKey: "bentoStep2", descKey: "bentoStep2Desc" },
        { icon: FiFileText, num: "03", titleKey: "bentoStep3", descKey: "bentoStep3Desc" },
        { icon: FiSend, num: "04", titleKey: "bentoStep4", descKey: "bentoStep4Desc" },
    ]

    return (
        <section className="py-10" style={{ background: "#FFFFFF" }}>
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

                    {/* Large card — process steps */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55 }}
                        className="lg:col-span-2 relative rounded"
                        style={{ background: "#262626" }}
                    >
                        {/* Red top accent */}
                        <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t" style={{ background: "#8A0029" }} />

                        <div className="p-10 lg:p-12">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-[2px]" style={{ background: "#8A0029" }} />
                                <span className="text-[10px] tracking-[0.2em] uppercase font-bold"
                                    style={{ color: "#D32F2F", fontFamily: "var(--font-inter)" }}>Process</span>
                            </div>
                            <h2 className="font-black mb-8"
                                style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "#FFFFFF" }}>
                                {t('bentoTitle')}
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {steps.map((step, i) => {
                                    const Icon = step.icon
                                    return (
                                        <div key={i} className="group p-5 rounded border transition-all duration-300 hover:border-[#8A0029] cursor-default"
                                            style={{ border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.03)" }}>
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="w-8 h-8 rounded flex items-center justify-center"
                                                    style={{ background: i % 2 === 0 ? "#8A0029" : "#D32F2F" }}>
                                                    <Icon size={14} color="#FFFFFF" />
                                                </div>
                                                <span className="text-[11px] font-bold"
                                                    style={{ color: "rgba(255,255,255,0.2)", fontFamily: "var(--font-inter)" }}>
                                                    {step.num}
                                                </span>
                                            </div>
                                            <h4 className="font-black text-sm mb-1.5 group-hover:text-[#D32F2F] transition-colors"
                                                style={{ fontFamily: "var(--font-inter)", color: "#FFFFFF" }}>
                                                {t(step.titleKey)}
                                            </h4>
                                            <p className="text-xs leading-relaxed"
                                                style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-poppins)" }}>
                                                {t(step.descKey)}
                                            </p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right column — CTA + stats */}
                    <div className="flex flex-col gap-4">
                        {/* CTA card */}
                        <motion.div
                            initial={{ opacity: 0, x: 24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.55, delay: 0.1 }}
                            className="rounded p-8 flex flex-col gap-5"
                            style={{ background: "#F7F7F7", border: "1px solid rgba(38,38,38,0.08)" }}
                        >
                            <div>
                                <p className="text-sm font-medium leading-relaxed mb-4"
                                    style={{ fontFamily: "var(--font-poppins)", color: "#6B7280" }}>
                                    {t('bentoCTA1')}
                                </p>
                                <p className="text-base font-bold leading-snug"
                                    style={{ fontFamily: "var(--font-inter)", color: "#262626" }}>
                                    {t('bentoCTA2')}
                                </p>
                            </div>
                            <Link href="/services">
                                <button className="flex items-center gap-2 px-5 py-2.5 rounded text-xs font-bold cursor-pointer transition-opacity hover:opacity-90"
                                    style={{ background: "#8A0029", color: "#FFFFFF", fontFamily: "var(--font-inter)" }}>
                                    {t('learnMore')} <MdArrowOutward size={13} />
                                </button>
                            </Link>
                        </motion.div>

                        {/* Stats card */}
                        <motion.div
                            initial={{ opacity: 0, x: 24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.55, delay: 0.2 }}
                            className="rounded p-8 flex-1 flex flex-col justify-center gap-6"
                            style={{ background: "#8A0029" }}
                        >
                            {/* Dot decoration */}
                            <svg className="opacity-15 mb-1" width="60" height="60" viewBox="0 0 60 60" fill="none" aria-hidden="true">
                                {Array.from({ length: 9 }, (_, i) => (
                                    <circle key={i} cx={(i % 3) * 22 + 11} cy={Math.floor(i / 3) * 22 + 11} r="3" fill="white" />
                                ))}
                            </svg>
                            <div>
                                <p className="text-5xl font-black mb-1" style={{ color: "#FFFFFF", fontFamily: "var(--font-inter)" }}>500+</p>
                                <p className="text-sm text-white/60" style={{ fontFamily: "var(--font-poppins)" }}>{t('heroStat1Label')}</p>
                            </div>
                            <div className="h-px" style={{ background: "rgba(255,255,255,0.15)" }} />
                            <div>
                                <p className="text-5xl font-black mb-1" style={{ color: "#FFFFFF", fontFamily: "var(--font-inter)" }}>20+</p>
                                <p className="text-sm text-white/60" style={{ fontFamily: "var(--font-poppins)" }}>{t('heroStat3Label')}</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
