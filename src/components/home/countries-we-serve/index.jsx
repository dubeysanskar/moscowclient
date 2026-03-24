'use client'

import Container from "@/components/container"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/language"

export default function CountriesWeServe() {
    const { t } = useLanguage()

    return (
        <section className="py-20 lg:py-28 relative overflow-hidden" style={{ background: "#FFFFFF" }}>
            {/* SVG crosshair decoration */}
            <svg className="absolute right-12 top-12 hidden lg:block opacity-8" width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true">
                <circle cx="40" cy="40" r="36" stroke="rgba(138,0,41,0.1)" strokeWidth="1" strokeDasharray="6 4" />
                <line x1="40" y1="4" x2="40" y2="76" stroke="rgba(138,0,41,0.1)" strokeWidth="1" />
                <line x1="4" y1="40" x2="76" y2="40" stroke="rgba(138,0,41,0.1)" strokeWidth="1" />
            </svg>

            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.55 }}
                >
                    {/* Header */}
                    <div className="text-center mb-14">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="w-10 h-px" style={{ background: "rgba(138,0,41,0.2)" }} />
                            <div className="w-8 h-[2px]" style={{ background: "#8A0029" }} />
                            <div className="w-10 h-px" style={{ background: "rgba(138,0,41,0.2)" }} />
                        </div>
                        <h2 className="font-black tracking-tight mb-4"
                            style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#262626" }}>
                            {t('countriesTitle')} <span style={{ color: "#8A0029" }}>{t('countriesTitleAccent')}</span>
                        </h2>
                        <p className="max-w-xl mx-auto text-sm leading-relaxed"
                            style={{ fontFamily: "var(--font-poppins)", color: "#9CA3AF" }}>
                            {t('countriesSubtitle')}
                        </p>
                    </div>

                    {/* Pipeline layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 items-stretch">
                        {/* India card */}
                        <div className="lg:col-span-2">
                            <div className="h-full rounded overflow-hidden border p-8 text-center"
                                style={{ background: "#F7F7F7", borderColor: "rgba(38,38,38,0.08)" }}>
                                <img src="https://flagcdn.com/w160/in.png" alt="India" className="w-16 h-auto mx-auto rounded mb-4 shadow-sm" loading="lazy" />
                                <h3 className="text-xl font-black mb-2" style={{ color: "#262626", fontFamily: "var(--font-inter)" }}>🇮🇳 India</h3>
                                <p className="text-sm mb-3" style={{ color: "#6B7280", fontFamily: "var(--font-poppins)" }}>{t('sourcingHub')}</p>
                                <div className="inline-block text-[10px] font-bold px-3 py-1 rounded-sm"
                                    style={{ background: "rgba(138,0,41,0.08)", color: "#8A0029", fontFamily: "var(--font-inter)" }}>
                                    {t('headOffice')}
                                </div>
                                {/* Russia-focused facts */}
                                <div className="mt-5 space-y-1.5 text-left">
                                    {["New Delhi HQ", "Noida Office", "20+ years experience", "MEA Licensed"].map(f => (
                                        <div key={f} className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#8A0029" }} />
                                            <span className="text-xs" style={{ color: "#6B7280", fontFamily: "var(--font-poppins)" }}>{f}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Middle — pipeline stat */}
                        <div className="lg:col-span-3 flex flex-col gap-4">
                            {/* Top arrow + label */}
                            <div className="flex items-center gap-2 justify-center">
                                <div className="flex-1 h-[2px]" style={{ background: "#8A0029" }} />
                                <span className="text-[10px] tracking-[0.2em] uppercase font-bold"
                                    style={{ color: "#8A0029", fontFamily: "var(--font-inter)" }}>
                                    {t('deploymentPipeline')}
                                </span>
                                <div className="flex-1 h-[2px]" style={{ background: "#8A0029" }} />
                            </div>

                            {/* Central stat */}
                            <div className="flex-1 rounded overflow-hidden text-center py-10 px-8"
                                style={{ background: "#8A0029" }}>
                                {/* Russia outline SVG */}
                                <svg className="mx-auto mb-4 opacity-20" width="60" height="44" viewBox="0 0 60 44" fill="none" aria-hidden="true">
                                    <path d="M4 22 L10 8 L20 6 L28 2 L36 8 L48 6 L56 12 L52 22 L48 32 L36 38 L28 42 L20 38 L10 36 Z"
                                        stroke="white" strokeWidth="1.5" fill="none" />
                                </svg>
                                <div className="text-5xl lg:text-6xl font-black mb-2" style={{ color: "#FFFFFF", fontFamily: "var(--font-inter)" }}>
                                    500+
                                </div>
                                <p className="text-[11px] tracking-[0.18em] uppercase font-bold mb-1"
                                    style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-inter)" }}>
                                    {t('workersDeployed')}
                                </p>
                                <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-poppins)" }}>since 2022</p>
                            </div>

                            {/* Sectors served */}
                            <div className="grid grid-cols-2 gap-2">
                                {["Construction", "Hospitality", "Manufacturing", "Logistics"].map((s, i) => (
                                    <div key={i} className="p-3 rounded-sm flex items-center gap-2"
                                        style={{ background: "#F7F7F7", border: "1px solid rgba(38,38,38,0.08)" }}>
                                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: i % 2 === 0 ? "#8A0029" : "#D32F2F" }} />
                                        <span className="text-xs font-semibold" style={{ color: "#262626", fontFamily: "var(--font-inter)" }}>{s}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Russia card */}
                        <div className="lg:col-span-2">
                            <div className="h-full rounded overflow-hidden border p-8 text-center"
                                style={{ background: "#F7F7F7", borderColor: "rgba(38,38,38,0.08)" }}>
                                <img src="https://flagcdn.com/w160/ru.png" alt="Russia" className="w-16 h-auto mx-auto rounded mb-4 shadow-sm" loading="lazy" />
                                <h3 className="text-xl font-black mb-2" style={{ color: "#262626", fontFamily: "var(--font-inter)" }}>🇷🇺 Russia</h3>
                                <p className="text-sm mb-3" style={{ color: "#6B7280", fontFamily: "var(--font-poppins)" }}>{t('deploymentOps')}</p>
                                <div className="inline-block text-[10px] font-bold px-3 py-1 rounded-sm"
                                    style={{ background: "rgba(138,0,41,0.08)", color: "#8A0029", fontFamily: "var(--font-inter)" }}>
                                    {t('operationsOffice')}
                                </div>
                                <div className="mt-5 space-y-1.5 text-left">
                                    {["Moscow Office", "500+ Deployed", "Labour Compliant", "Visa Managed"].map(f => (
                                        <div key={f} className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#D32F2F" }} />
                                            <span className="text-xs" style={{ color: "#6B7280", fontFamily: "var(--font-poppins)" }}>{f}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </section>
    )
}
