'use client'

import { useEffect } from "react"
import { useLanguage } from "@/context/language"
import ScrollReveal from "@/components/animations/ScrollReveal"

const partners = [
    { src: "/images/partners/1.png", alt: "CAFS" },
    { src: "/images/partners/1111.png", alt: "Partner" },
    { src: "/images/partners/1234.png", alt: "Partner" },
    { src: "/images/partners/245361195_1121051235093790_4685913069255081052_n.jpg", alt: "Partner" },
    { src: "/images/partners/CFB-Large-Small-1.png", alt: "CFB" },
    { src: "/images/partners/Clip-path-group-1.png", alt: "Partner" },
    { src: "/images/partners/DESERT_DEVELOPMENT_CONTRACTING_COMPANY-Logo-header.webp", alt: "Desert Development" },
    { src: "/images/partners/Logo-560x357.jpg", alt: "Partner" },
    { src: "/images/partners/RealLogo.png", alt: "Partner" },
    { src: "/images/partners/Saudi_Ministry_of_Health_Logo.svg.png", alt: "Saudi Ministry of Health" },
    { src: "/images/partners/alrajhi-bank.png", alt: "Al Rajhi Bank" },
    { src: "/images/partners/cLklTgs-_400x400.jpg", alt: "Partner" },
    { src: "/images/partners/header-logo.svg", alt: "Partner" },
    { src: "/images/partners/logo-03-e1672981302803.png.webp", alt: "Partner" },
    { src: "/images/partners/logo-almabani.png", alt: "Al Mabani" },
    { src: "/images/partners/logo-removebg-preview.png", alt: "Partner" },
    { src: "/images/partners/logo.png", alt: "Partner" },
    { src: "/images/partners/logo.webp", alt: "Partner" },
    { src: "/images/partners/logo_light.png", alt: "Partner" },
    { src: "/images/partners/small-2.png", alt: "Partner" },
]

export default function Partners() {
    const { t } = useLanguage()
    const allPartners = [...partners, ...partners, ...partners]

    useEffect(() => {
        const styleEl = document.createElement("style")
        styleEl.textContent = `
            @keyframes taha-marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-33.333%); }
            }
            .taha-marquee-track {
                animation: taha-marquee 45s linear infinite !important;
                will-change: transform;
            }
            .taha-marquee-track:hover {
                animation-play-state: paused !important;
            }
        `
        document.head.appendChild(styleEl)
        return () => document.head.removeChild(styleEl)
    }, [])

    return (
        <section className="relative py-16 lg:py-20 overflow-hidden" style={{ background: "#FDFBEF" }}>
            {/* Left brand accent strip */}
            <div className="absolute left-0 top-0 bottom-0 w-[3px]" style={{ background: "#8E0935" }} />

            {/* Header */}
            <ScrollReveal variant="fadeUp">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-8 mb-10">
                    <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 pb-8"
                        style={{ borderBottom: "1px solid rgba(142,9,53,0.08)" }}>
                        <div>
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-8 h-[2px]" style={{ background: "#8E0935" }} />
                                <span className="text-[10px] tracking-[0.2em] uppercase font-bold"
                                    style={{ color: "#BC264B", fontFamily: "var(--font-inter)" }}>
                                    Partners
                                </span>
                            </div>
                            <h2 className="font-black tracking-tight"
                                style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#1A1A1A" }}>
                                {t('partnersTitle')} <span style={{ color: "#8E0935" }}>{t('partnersTitleAccent')}</span>
                            </h2>
                            <p className="mt-2 text-sm" style={{ fontFamily: "var(--font-poppins)", color: "#9CA3AF" }}>
                                {t('partnersSubtitle')}
                            </p>
                        </div>
                        {/* Stats pill */}
                        <div className="flex items-center gap-5 px-6 py-4 rounded"
                            style={{ background: "white", border: "1px solid rgba(142,9,53,0.08)" }}>
                            <div className="text-center">
                                <p className="text-2xl font-black" style={{ color: "#8E0935", fontFamily: "var(--font-inter)" }}>20+</p>
                                <p className="text-[10px] font-medium" style={{ color: "#9CA3AF", fontFamily: "var(--font-inter)" }}>Companies</p>
                            </div>
                            <div className="w-px h-8" style={{ background: "rgba(142,9,53,0.1)" }} />
                            <div className="text-center">
                                <p className="text-2xl font-black" style={{ color: "#1A1A1A", fontFamily: "var(--font-inter)" }}>🌍</p>
                                <p className="text-[10px] font-medium" style={{ color: "#9CA3AF", fontFamily: "var(--font-inter)" }}>Global</p>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            {/* Marquee */}
            <div className="relative overflow-hidden">
                {/* Fade edges — Cloud Dancer colors */}
                <div className="absolute left-0 top-0 bottom-0 w-16 z-10" style={{ background: "#FDFBEF" }} />
                <div className="absolute right-0 top-0 bottom-0 w-16 z-10" style={{ background: "#FDFBEF" }} />

                <div className="taha-marquee-track flex items-center gap-10" style={{ width: "max-content" }}>
                    {allPartners.map((p, i) => (
                        <div key={i}
                            className="flex-shrink-0 w-32 h-16 lg:w-40 lg:h-20 flex items-center justify-center p-3 rounded transition-all duration-300 hover:scale-105 grayscale hover:grayscale-0"
                            style={{ background: "white", border: "1px solid rgba(142,9,53,0.06)", cursor: "pointer" }}>
                            <img src={p.src} alt={p.alt}
                                className="object-contain"
                                style={{ maxHeight: "48px", width: "auto", maxWidth: "120px" }}
                                loading="lazy" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
