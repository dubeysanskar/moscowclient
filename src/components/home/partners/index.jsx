'use client'

import { useEffect } from "react"
import Image from "next/image"

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
    const allPartners = [...partners, ...partners, ...partners]

    useEffect(() => {
        const styleEl = document.createElement("style")
        styleEl.textContent = `
            @keyframes taha-marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-33.333%); }
            }
            .taha-marquee-track {
                animation: taha-marquee 40s linear infinite !important;
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
            <div className="max-w-[1400px] mx-auto px-6 lg:px-8 mb-10">
                <div className="text-center">
                    <div className="w-14 h-1 mx-auto rounded-full mb-6" style={{ background: "#8E0935" }} />
                    <h2 style={{
                        fontFamily: "var(--font-cormorant-garamond)",
                        fontSize: "clamp(2rem, 4vw, 3.5rem)",
                        fontWeight: 600,
                        color: "#1a0a10",
                    }}>
                        Meet Our <span className="italic" style={{ color: "#8E0935" }}>Partners</span>
                    </h2>
                    <p className="max-w-2xl mx-auto mt-4" style={{
                        fontFamily: "var(--font-poppins)",
                        fontSize: "1rem",
                        color: "#6B7280",
                    }}>
                        Trusted by leading companies and organizations across the Gulf region
                    </p>
                </div>
            </div>

            {/* Marquee */}
            <div className="relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-24 z-10"
                    style={{ background: "linear-gradient(90deg, #FDFBEF 0%, transparent 100%)" }} />
                <div className="absolute right-0 top-0 bottom-0 w-24 z-10"
                    style={{ background: "linear-gradient(-90deg, #FDFBEF 0%, transparent 100%)" }} />

                <div className="taha-marquee-track flex items-center gap-12" style={{ width: "max-content" }}>
                    {allPartners.map((p, i) => (
                        <div key={i}
                            className="flex-shrink-0 w-36 h-20 lg:w-44 lg:h-24 flex items-center justify-center p-3 transition-all duration-300 hover:scale-110 grayscale hover:grayscale-0"
                            style={{ cursor: "pointer" }}>
                            <img
                                src={p.src}
                                alt={p.alt}
                                className="object-contain"
                                style={{ mixBlendMode: "multiply", maxHeight: "56px", width: "auto", maxWidth: "140px" }}
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
