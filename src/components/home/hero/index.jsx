'use client'

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { MdArrowOutward } from "react-icons/md"

const slides = [
    {
        heading: ["DEPLOY", "GLOBAL"],
        tagline: "Connecting India's skilled workforce\nwith global opportunities",
        image: "/images/hero-bg-new.png",
    },
    {
        heading: ["SKILLED", "MANPOWER"],
        tagline: "Trade-tested, verified, and deployment-ready\nworkers for Russia, CIS & GCC",
        image: "/images/demo4.jpeg",
    },
    {
        heading: ["TRUSTED", "PARTNERS"],
        tagline: "Government-licensed agency with 20+ years\nof overseas recruitment excellence",
        image: "/images/demo5.jpeg",
    },
]

const stats = [
    { value: "5000+", label: "DEPLOYED" },
    { value: "11+", label: "COUNTRIES" },
    { value: "20+", label: "YEARS EXPERIENCE" },
]

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const next = useCallback(() => {
        setCurrentSlide(prev => (prev + 1) % slides.length)
    }, [])

    useEffect(() => {
        const timer = setInterval(next, 5000)
        return () => clearInterval(timer)
    }, [next])

    const slide = slides[currentSlide]

    return (
        <section className="relative w-full overflow-hidden" style={{ height: "100vh", minHeight: "700px", background: "#1a0a10" }}>
            {/* Background Image */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 0.35, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2 }}
                    className="absolute inset-0"
                >
                    <Image src={slide.image} alt="" fill className="object-cover" priority />
                </motion.div>
            </AnimatePresence>

            {/* Overlay */}
            <div className="absolute inset-0" style={{ background: "rgba(26,10,16,0.78)" }} />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center max-w-[1400px] mx-auto px-6 lg:px-8">
                <AnimatePresence mode="wait">
                    <motion.div key={currentSlide} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }}>
                        {/* Heading */}
                        <div className="mb-8">
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                className="font-light leading-[0.9] tracking-[-0.02em]"
                                style={{
                                    fontFamily: "var(--font-cormorant-garamond)",
                                    fontSize: "clamp(4rem, 10vw, 9rem)",
                                    color: "#FDFBEF",
                                }}
                            >
                                {slide.heading[0]}
                            </motion.h1>
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.25 }}
                                className="font-light italic leading-[0.9] tracking-[-0.02em]"
                                style={{
                                    fontFamily: "var(--font-cormorant-garamond)",
                                    fontSize: "clamp(4rem, 10vw, 9rem)",
                                    color: "#BC264B",
                                }}
                            >
                                {slide.heading[1]}
                            </motion.h1>
                        </div>

                        {/* Tagline */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="whitespace-pre-line max-w-md mb-10"
                            style={{
                                fontFamily: "var(--font-poppins)",
                                fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
                                color: "rgba(253,251,239,0.6)",
                                lineHeight: 1.7,
                            }}
                        >
                            {slide.tagline}
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.55 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Link href="/services">
                                <button className="flex items-center gap-2 px-7 py-3.5 rounded-full text-sm tracking-[0.1em] uppercase font-semibold cursor-pointer transition-all duration-300"
                                    style={{ background: "#8E0935", color: "#FDFBEF", fontFamily: "var(--font-lato)" }}>
                                    Our Services <MdArrowOutward />
                                </button>
                            </Link>
                            <Link href="/contact">
                                <button className="flex items-center gap-2 px-7 py-3.5 rounded-full text-sm tracking-[0.1em] uppercase font-semibold cursor-pointer transition-all duration-300"
                                    style={{ background: "transparent", color: "#FDFBEF", border: "1px solid rgba(253,251,239,0.3)", fontFamily: "var(--font-lato)" }}>
                                    Get in Touch
                                </button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>

                {/* Stats Bar */}
                <div className="absolute bottom-0 left-0 right-0 px-6 lg:px-8" style={{ borderTop: "1px solid rgba(142,9,53,0.3)" }}>
                    <div className="max-w-[1400px] mx-auto flex flex-wrap items-center justify-between py-4 sm:py-5 gap-4">
                        <div className="flex flex-wrap items-center gap-5 sm:gap-8 lg:gap-14">
                            {stats.map((s, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <span className="text-2xl lg:text-3xl font-bold" style={{ color: "#BC264B", fontFamily: "var(--font-oswald)" }}>
                                        {s.value}
                                    </span>
                                    <span className="text-[10px] lg:text-xs tracking-[0.18em] uppercase" style={{ color: "rgba(253,251,239,0.4)", fontFamily: "var(--font-lato)" }}>
                                        {s.label}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Slide indicator */}
                        <div className="hidden lg:flex items-center gap-3">
                            <span className="text-xs" style={{ color: "rgba(253,251,239,0.3)", fontFamily: "var(--font-lato)" }}>TAHA AIRWAVES</span>
                            <div className="flex gap-1.5">
                                {slides.map((_, i) => (
                                    <button key={i} onClick={() => setCurrentSlide(i)}
                                        className="w-8 h-1 rounded-full transition-all duration-300 cursor-pointer"
                                        style={{ background: i === currentSlide ? "#BC264B" : "rgba(253,251,239,0.2)" }} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Service indicator */}
                <div className="absolute top-32 lg:top-36 right-6 lg:right-8 hidden lg:flex flex-col items-end gap-2">
                    <span className="text-[10px] tracking-[0.22em] uppercase" style={{ color: "#BC264B", fontFamily: "var(--font-lato)" }}>SERVICE</span>
                    <span className="text-5xl font-light" style={{ color: "rgba(253,251,239,0.15)", fontFamily: "var(--font-cormorant-garamond)" }}>
                        0{currentSlide + 1}
                    </span>
                    <div className="w-px h-16" style={{ background: "rgba(142,9,53,0.3)" }} />
                </div>
            </div>
        </section>
    )
}