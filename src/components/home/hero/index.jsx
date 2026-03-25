'use client'

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { MdArrowOutward } from "react-icons/md"
import { useLanguage } from "@/context/language"
import { DotGrid, Crosshair, FlowLine, GeometricFrame, CornerOrnament, CircuitLines } from "@/components/decorators/SVGDecorations"

const HERO_IMAGES = [
    "/images/hero-russia-1.png",
    "/images/hero-russia-2.png",
    "/images/hero-russia-3.png",
]

/* ── CountUp ── */
function CountUp({ end, suffix = "", duration = 2000 }) {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const started = useRef(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !started.current) {
                    started.current = true
                    const startTime = Date.now()
                    const animate = () => {
                        const elapsed = Date.now() - startTime
                        const progress = Math.min(elapsed / duration, 1)
                        const eased = 1 - Math.pow(1 - progress, 3)
                        setCount(Math.floor(eased * end))
                        if (progress < 1) requestAnimationFrame(animate)
                    }
                    requestAnimationFrame(animate)
                }
            },
            { threshold: 0.3 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [end, duration])

    return <span ref={ref}>{count}{suffix}</span>
}

const STATS = [
    { value: 500, suffix: "+", label: "Skilled Workforce", labelRu: "Работников", svg: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
    { value: 120, suffix: "+", label: "Hiring Partners", labelRu: "Партнёров", svg: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
    { value: 95, suffix: "%", label: "Placement Rate", labelRu: "Трудоустройство", svg: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
    { value: 21, suffix: "+", label: "Countries Served", labelRu: "Стран", svg: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
]

export default function Hero() {
    const { lang, t } = useLanguage()
    const [currentImg, setCurrentImg] = useState(0)
    const [shutterDone, setShutterDone] = useState(false)
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" })

    useEffect(() => {
        const iv = setInterval(() => setCurrentImg(p => (p + 1) % HERO_IMAGES.length), 5000)
        return () => clearInterval(iv)
    }, [])

    useEffect(() => {
        const t = setTimeout(() => setShutterDone(true), 1700)
        return () => clearTimeout(t)
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        const msg = `Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`
        window.open(`https://wa.me/919810557787?text=${msg}`, "_blank")
    }

    return (
        <>
            {/* ══════════ HERO SECTION ══════════ */}
            <section className="relative min-h-[100dvh] flex items-center overflow-hidden" style={{ background: "#1A1A1A" }}>

                {/* ── Background Images with crossfade ── */}
                {HERO_IMAGES.map((img, i) => (
                    <div key={img} className="absolute inset-0 transition-opacity duration-[1500ms] ease-in-out"
                        style={{ opacity: currentImg === i ? 1 : 0, zIndex: 0 }}>
                        <Image src={img} alt="Taha Airwaves workforce in Russia" fill className="object-cover" priority={i === 0} sizes="100vw" />
                    </div>
                ))}

                {/* ── Dark overlay — left-heavy for text readability ── */}
                <div className="absolute inset-0 z-[1]" style={{
                    background: "linear-gradient(to right, rgba(26,26,26,0.92) 0%, rgba(26,26,26,0.85) 40%, rgba(26,26,26,0.7) 70%, rgba(26,26,26,0.55) 100%)"
                }} />

                {/* ── Shutter Animation ── */}
                {!shutterDone && (
                    <>
                        <motion.div
                            initial={{ x: 0 }}
                            animate={{ x: "-100%" }}
                            transition={{ duration: 1.2, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
                            className="fixed inset-y-0 left-0 w-1/2 z-[100]"
                            style={{ background: "#8E0935" }}
                        />
                        <motion.div
                            initial={{ x: 0 }}
                            animate={{ x: "100%" }}
                            transition={{ duration: 1.2, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
                            className="fixed inset-y-0 right-0 w-1/2 z-[100]"
                            style={{ background: "#1A1A1A" }}
                        />
                    </>
                )}

                {/* ══ SVG Decorations ══ */}
                <DotGrid rows={6} cols={4} color="#FDFBEF" opacity={0.06} spacing={24} className="absolute top-20 left-6 z-[2] hidden lg:block" />
                <Crosshair size={120} color="#FDFBEF" accentColor="#BC264B" opacity={0.08} className="absolute top-16 right-8 z-[2] hidden lg:block" />
                <GeometricFrame size={140} color="#FDFBEF" opacity={0.04} className="absolute bottom-32 left-12 z-[2] hidden lg:block" />
                <CircuitLines width={250} height={100} color="#BC264B" opacity={0.05} className="absolute top-1/3 right-[42%] z-[2] hidden xl:block" />
                {/* Corner ornaments */}
                <CornerOrnament size={50} color="#BC264B" position="top-left" className="absolute top-6 left-6 z-[2] hidden lg:block opacity-20" />
                <CornerOrnament size={50} color="#BC264B" position="bottom-right" className="absolute bottom-24 right-6 z-[2] hidden lg:block opacity-20" />

                {/* ── Main Content ── */}
                <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-center py-32 lg:py-0 lg:min-h-[100dvh]">

                        {/* ═══ Left — Text Content ═══ */}
                        <div className="lg:col-span-3 space-y-7">
                            {/* Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.8, duration: 0.6 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-sm"
                                style={{ background: "rgba(142,9,53,0.25)", border: "1px solid rgba(142,9,53,0.3)" }}
                            >
                                <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#BC264B" }} />
                                <span className="text-[11px] tracking-[0.2em] uppercase font-bold"
                                    style={{ color: "#FDFBEF", fontFamily: "var(--font-inter)" }}>
                                    {lang === 'ru' ? 'Набор персонала для России' : 'Recruitment for Russia'}
                                </span>
                            </motion.div>

                            {/* Main headline — large, bold, guaranteed visible */}
                            <motion.h1
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 2, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                                className="font-black leading-[0.92] tracking-tight"
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontSize: "clamp(3rem, 7vw, 5.5rem)",
                                    color: "#FDFBEF",
                                }}
                            >
                                {lang === 'ru' ? (
                                    <>{`КАДРОВЫЕ`}<br /><span style={{ color: "#BC264B" }}>{`РЕШЕНИЯ`}</span></>
                                ) : (
                                    <>{`WORKFORCE`}<br /><span style={{ color: "#BC264B" }}>{`SOLUTIONS`}</span></>
                                )}
                            </motion.h1>

                            {/* Tagline */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 2.3, duration: 0.6 }}
                                className="max-w-lg text-lg lg:text-xl leading-relaxed"
                                style={{ color: "rgba(253,251,239,0.75)", fontFamily: "var(--font-poppins)" }}
                            >
                                {lang === 'ru'
                                    ? 'Профессиональный подбор и предоставление персонала для российского рынка'
                                    : 'Professional manpower recruitment & staffing solutions for the Russian market'
                                }
                            </motion.p>

                            {/* Horizontal accent line + connector */}
                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 2.4, duration: 0.5 }}
                                className="origin-left"
                            >
                                <FlowLine width={120} height={2} color="#BC264B" className="opacity-40" />
                            </motion.div>

                            {/* CTAs */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 2.5, duration: 0.6 }}
                                className="flex flex-wrap gap-4 pt-1"
                            >
                                <Link href="/services">
                                    <button className="flex items-center gap-2 px-8 py-4 rounded text-sm font-bold cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(142,9,53,0.4)]"
                                        style={{ background: "#8E0935", color: "#FDFBEF", fontFamily: "var(--font-inter)" }}>
                                        {lang === 'ru' ? 'Наши услуги' : 'Our Services'} <MdArrowOutward size={16} />
                                    </button>
                                </Link>
                                <Link href="/contact">
                                    <button className="flex items-center gap-2 px-8 py-4 rounded text-sm font-bold cursor-pointer transition-all duration-300 hover:bg-[rgba(253,251,239,0.12)]"
                                        style={{ background: "transparent", color: "#FDFBEF", border: "2px solid rgba(253,251,239,0.3)", fontFamily: "var(--font-inter)" }}>
                                        {lang === 'ru' ? 'Связаться с нами' : 'Contact Us'}
                                    </button>
                                </Link>
                            </motion.div>
                        </div>

                        {/* ═══ Right — Contact Form ═══ */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 2.2, duration: 0.8 }}
                            className="lg:col-span-2"
                        >
                            <div className="rounded-lg p-7 relative"
                                style={{
                                    background: "rgba(253,251,239,0.07)",
                                    backdropFilter: "blur(16px)",
                                    WebkitBackdropFilter: "blur(16px)",
                                    border: "1px solid rgba(253,251,239,0.15)",
                                    boxShadow: "0 25px 60px -12px rgba(0,0,0,0.5)",
                                }}>

                                {/* Top accent bar */}
                                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-lg" style={{ background: "#8E0935" }} />

                                {/* Corner ornament */}
                                <CornerOrnament size={24} color="#BC264B" position="top-right" className="absolute top-4 right-4 opacity-30" />
                                <CornerOrnament size={24} color="#BC264B" position="bottom-left" className="absolute bottom-4 left-4 opacity-30" />

                                <h3 className="text-xl font-black mb-1.5 mt-1"
                                    style={{ color: "#FDFBEF", fontFamily: "var(--font-inter)" }}>
                                    {lang === 'ru' ? 'Быстрая заявка' : 'Quick Inquiry'}
                                </h3>
                                <p className="text-xs mb-5"
                                    style={{ color: "rgba(253,251,239,0.45)" }}>
                                    {lang === 'ru' ? 'Заполните форму — мы свяжемся с вами' : 'Fill the form — we\'ll get back to you'}
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-3">
                                    {[
                                        { key: "name", placeholder: lang === 'ru' ? "Ваше имя" : "Your Name", type: "text" },
                                        { key: "email", placeholder: lang === 'ru' ? "Эл. почта" : "Email", type: "email" },
                                        { key: "phone", placeholder: lang === 'ru' ? "Телефон" : "Phone", type: "tel" },
                                    ].map((field) => (
                                        <input
                                            key={field.key}
                                            type={field.type}
                                            placeholder={field.placeholder}
                                            value={formData[field.key]}
                                            onChange={e => setFormData(p => ({ ...p, [field.key]: e.target.value }))}
                                            required
                                            className="w-full px-4 py-3 rounded text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-[#8E0935] placeholder:text-[rgba(253,251,239,0.3)]"
                                            style={{
                                                background: "rgba(253,251,239,0.08)",
                                                border: "1px solid rgba(253,251,239,0.15)",
                                                color: "#FDFBEF",
                                                fontFamily: "var(--font-poppins)",
                                            }}
                                        />
                                    ))}
                                    <textarea
                                        placeholder={lang === 'ru' ? "Сообщение" : "Message"}
                                        value={formData.message}
                                        onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                                        rows={3}
                                        className="w-full px-4 py-3 rounded text-sm resize-none outline-none transition-all duration-200 focus:ring-2 focus:ring-[#8E0935] placeholder:text-[rgba(253,251,239,0.3)]"
                                        style={{
                                            background: "rgba(253,251,239,0.08)",
                                            border: "1px solid rgba(253,251,239,0.15)",
                                            color: "#FDFBEF",
                                            fontFamily: "var(--font-poppins)",
                                        }}
                                    />
                                    <button
                                        type="submit"
                                        className="w-full py-3.5 rounded font-bold text-sm cursor-pointer transition-all duration-300 hover:shadow-[0_8px_30px_rgba(142,9,53,0.35)] hover:scale-[1.02]"
                                        style={{ background: "#8E0935", color: "#FDFBEF", fontFamily: "var(--font-inter)" }}
                                    >
                                        {lang === 'ru' ? 'Отправить заявку →' : 'Submit Inquiry →'}
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* ── Image dots ── */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                    {HERO_IMAGES.map((_, i) => (
                        <button key={i} onClick={() => setCurrentImg(i)}
                            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${currentImg === i ? 'w-8 bg-[#BC264B]' : 'w-2.5 bg-[rgba(253,251,239,0.3)] hover:bg-[rgba(253,251,239,0.6)]'}`}
                        />
                    ))}
                </div>

                {/* ── Bottom wave separator ── */}
                <div className="absolute bottom-0 left-0 right-0 z-10">
                    <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-[50px]">
                        <path d="M0,20 C240,50 480,0 720,30 C960,55 1200,10 1440,25 L1440,60 L0,60 Z" fill="#FDFBEF" />
                    </svg>
                </div>
            </section>

            {/* ══════════ FLOATING STATS BAR ══════════ */}
            <div style={{ background: "#FDFBEF" }}>
                <div className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6" style={{ marginTop: "-40px", paddingBottom: "24px" }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.6, duration: 0.7, ease: "easeOut" }}
                        className="rounded-xl px-6 sm:px-8 md:px-10 py-6 md:py-7 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative overflow-hidden"
                        style={{ background: "white", boxShadow: "0 20px 60px -12px rgba(142,9,53,0.12)", border: "1px solid rgba(142,9,53,0.06)" }}
                    >
                        {/* Background circuit decoration */}
                        <CircuitLines width={400} height={80} color="#8E0935" opacity={0.03} className="absolute top-0 right-0 hidden lg:block" />

                        {STATS.map((stat, i) => (
                            <div key={i} className="flex items-center gap-3 lg:gap-4">
                                <div className="w-11 h-11 md:w-13 md:h-13 rounded-lg flex items-center justify-center flex-shrink-0"
                                    style={{ background: "rgba(142,9,53,0.08)" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="#8E0935" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d={stat.svg} />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-2xl sm:text-3xl md:text-4xl font-black"
                                        style={{ color: "#1A1A1A", fontFamily: "var(--font-inter)" }}>
                                        <CountUp end={stat.value} suffix={stat.suffix} />
                                    </div>
                                    <div className="text-[10px] sm:text-xs font-semibold"
                                        style={{ color: "#8E0935", fontFamily: "var(--font-inter)" }}>
                                        {lang === 'ru' ? stat.labelRu : stat.label}
                                    </div>
                                </div>
                                {i < STATS.length - 1 && (
                                    <div className="hidden lg:block w-px h-12 ml-auto" style={{ background: "rgba(142,9,53,0.08)" }} />
                                )}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </>
    )
}