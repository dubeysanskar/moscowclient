'use client'

import { useState, useEffect, useRef, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { MdArrowOutward } from "react-icons/md"
import { useLanguage } from "@/context/language"
import { DotGrid, Crosshair, CornerOrnament, CircuitLines, GeometricFrame } from "@/components/decorators/SVGDecorations"

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

/* ── Floating Particle ── */
function FloatingParticle({ delay, size, x, y, duration, shape = "circle" }) {
    return (
        <motion.div
            className="absolute pointer-events-none"
            style={{ left: `${x}%`, top: `${y}%` }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
                opacity: [0, 0.15, 0.08, 0.15, 0],
                scale: [0, 1, 0.8, 1, 0],
                y: [0, -30, -15, -40, -60],
                x: [0, 10, -5, 15, 5],
            }}
            transition={{
                duration: duration,
                delay: delay,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        >
            {shape === "circle" ? (
                <div className="rounded-full" style={{
                    width: size, height: size,
                    border: "1px solid rgba(138,0,41,0.25)",
                    background: "rgba(138,0,41,0.06)",
                }} />
            ) : shape === "square" ? (
                <div style={{
                    width: size, height: size,
                    border: "1px solid rgba(211,47,47,0.2)",
                    background: "rgba(211,47,47,0.04)",
                    transform: "rotate(45deg)",
                }} />
            ) : (
                <div style={{
                    width: 0, height: 0,
                    borderLeft: `${size / 2}px solid transparent`,
                    borderRight: `${size / 2}px solid transparent`,
                    borderBottom: `${size}px solid rgba(138,0,41,0.08)`,
                }} />
            )}
        </motion.div>
    )
}

/* ── Animated Word ── */
function AnimatedWord({ word, delay, color }) {
    return (
        <motion.span
            initial={{ opacity: 0, y: 60, rotateX: -40 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
                delay,
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="inline-block"
            style={{ color, perspective: "500px" }}
        >
            {word}
        </motion.span>
    )
}

const STATS = [
    { value: 500, suffix: "+", label: "Skilled Workforce", labelRu: "Работников", svg: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
    { value: 120, suffix: "+", label: "Hiring Partners", labelRu: "Партнёров", svg: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
    { value: 95, suffix: "%", label: "Placement Rate", labelRu: "Трудоустройство", svg: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
    { value: 21, suffix: "+", label: "Countries Served", labelRu: "Стран", svg: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
]

/* ── Particles config ── */
const PARTICLES = [
    { delay: 0, size: 20, x: 8, y: 20, duration: 8, shape: "circle" },
    { delay: 1.5, size: 14, x: 15, y: 55, duration: 10, shape: "square" },
    { delay: 3, size: 18, x: 75, y: 30, duration: 9, shape: "circle" },
    { delay: 0.5, size: 12, x: 85, y: 65, duration: 11, shape: "triangle" },
    { delay: 2, size: 16, x: 45, y: 15, duration: 8.5, shape: "square" },
    { delay: 4, size: 22, x: 60, y: 70, duration: 10, shape: "circle" },
    { delay: 1, size: 10, x: 25, y: 75, duration: 7.5, shape: "circle" },
    { delay: 3.5, size: 15, x: 90, y: 40, duration: 9.5, shape: "square" },
]

export default function Hero() {
    const { lang } = useLanguage()
    const [currentImg, setCurrentImg] = useState(0)
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" })
    const heroRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    })
    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
    const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3])

    useEffect(() => {
        const iv = setInterval(() => setCurrentImg(p => (p + 1) % HERO_IMAGES.length), 5000)
        return () => clearInterval(iv)
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        const msg = `Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`
        window.open(`https://wa.me/919810557787?text=${msg}`, "_blank")
    }

    const headlineEn = ["WORKFORCE", "SOLUTIONS"]
    const headlineRu = ["КАДРОВЫЕ", "РЕШЕНИЯ"]
    const words = lang === 'ru' ? headlineRu : headlineEn

    return (
        <>
            {/* ══════════ HERO SECTION ══════════ */}
            <section ref={heroRef} className="relative min-h-[100dvh] flex items-center overflow-hidden" style={{ background: "#262626" }}>

                {/* ── Background Images with crossfade + parallax ── */}
                <motion.div className="absolute inset-0" style={{ y: bgY }}>
                    {HERO_IMAGES.map((img, i) => (
                        <div key={img} className="absolute inset-0 transition-opacity duration-[1500ms] ease-in-out"
                            style={{ opacity: currentImg === i ? 1 : 0, zIndex: 0 }}>
                            <Image src={img} alt="Taha Airwaves workforce in Russia" fill className="object-cover" priority={i === 0} sizes="100vw" />
                        </div>
                    ))}
                </motion.div>

                {/* ── Half-screen maroon overlay: visible background throughout ── */}
                <div className="absolute inset-0 z-[1]" style={{
                    background: "linear-gradient(to right, rgba(138,0,41,0.72) 0%, rgba(138,0,41,0.58) 30%, rgba(96,0,26,0.38) 50%, rgba(38,38,38,0.22) 70%, rgba(38,38,38,0.15) 100%)"
                }} />
                {/* Bottom edge gradient for clean transition */}
                <div className="absolute bottom-0 left-0 right-0 h-32 z-[1]" style={{
                    background: "linear-gradient(to top, rgba(38,38,38,0.45) 0%, transparent 100%)"
                }} />

                {/* ── Subtle pattern overlay ── */}
                <div className="absolute inset-0 z-[2] pointer-events-none" style={{ opacity: 0.04 }}>
                    <svg width="100%" height="100%">
                        <defs>
                            <pattern id="heroGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#FFFFFF" strokeWidth="0.3" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#heroGrid)" />
                    </svg>
                </div>

                {/* ── Floating Particles ── */}
                <div className="absolute inset-0 z-[3] pointer-events-none overflow-hidden hidden lg:block">
                    {PARTICLES.map((p, i) => (
                        <FloatingParticle key={i} {...p} />
                    ))}
                </div>

                {/* ══ SVG Decorations ══ */}
                <DotGrid rows={6} cols={4} color="#FFFFFF" opacity={0.06} spacing={24} className="absolute top-20 left-6 z-[3] hidden lg:block" />
                <Crosshair size={120} color="#FFFFFF" accentColor="#D32F2F" opacity={0.08} className="absolute top-16 right-8 z-[3] hidden lg:block" />
                <GeometricFrame size={140} color="#FFFFFF" opacity={0.04} className="absolute bottom-40 left-12 z-[3] hidden lg:block" />
                <CircuitLines width={250} height={100} color="#D32F2F" opacity={0.05} className="absolute top-1/3 right-[42%] z-[3] hidden xl:block" />
                <CornerOrnament size={50} color="#D32F2F" position="top-left" className="absolute top-6 left-6 z-[3] hidden lg:block opacity-20" />
                <CornerOrnament size={50} color="#D32F2F" position="bottom-right" className="absolute bottom-28 right-6 z-[3] hidden lg:block opacity-20" />

                {/* ── Decorative wavy line (subtle, single instance) ── */}
                <svg className="absolute bottom-[180px] left-0 w-full z-[3] hidden lg:block" height="40" viewBox="0 0 1440 40" fill="none" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M0 20 Q180 5 360 20 T720 20 T1080 20 T1440 20" stroke="rgba(255,255,255,0.06)" strokeWidth="1" fill="none" />
                </svg>

                {/* ── Decorative arrows ── */}
                <svg className="absolute top-[40%] left-[3%] z-[3] hidden xl:block" width="30" height="60" viewBox="0 0 30 60" fill="none" aria-hidden="true" style={{ opacity: 0.12 }}>
                    <path d="M15 0 L15 50 M5 40 L15 50 L25 40" stroke="#D32F2F" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <svg className="absolute bottom-[35%] right-[3%] z-[3] hidden xl:block" width="30" height="60" viewBox="0 0 30 60" fill="none" aria-hidden="true" style={{ opacity: 0.1 }}>
                    <path d="M15 60 L15 10 M5 20 L15 10 L25 20" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
                </svg>

                {/* ── Decorative circles ── */}
                <svg className="absolute top-[15%] right-[15%] z-[3] hidden lg:block" width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true" style={{ opacity: 0.06 }}>
                    <circle cx="40" cy="40" r="38" stroke="#FFFFFF" strokeWidth="0.5" />
                    <circle cx="40" cy="40" r="28" stroke="#D32F2F" strokeWidth="0.5" strokeDasharray="4 3" />
                    <circle cx="40" cy="40" r="16" stroke="#FFFFFF" strokeWidth="0.5" />
                </svg>

                {/* ── Main Content ── */}
                <motion.div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8 w-full" style={{ opacity: contentOpacity }}>
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-center py-32 lg:py-0 lg:min-h-[100dvh]">

                        {/* ═══ Left — Text Content ═══ */}
                        <div className="lg:col-span-3 space-y-7">
                            {/* Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1, duration: 0.6 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                                style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }}
                            >
                                <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#D32F2F" }} />
                                <span className="text-[11px] tracking-[0.2em] uppercase font-bold"
                                    style={{ color: "rgba(255,255,255,0.9)", fontFamily: "var(--font-inter)" }}>
                                    {lang === 'ru' ? 'Набор персонала для России' : 'Recruitment for Russia'}
                                </span>
                            </motion.div>

                            {/* Main headline — animated word reveal */}
                            <div
                                className="font-black leading-[0.92] tracking-tight"
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontSize: "clamp(3rem, 7vw, 5.5rem)",
                                }}
                            >
                                <div className="overflow-hidden">
                                    <AnimatedWord word={words[0]} delay={0.2} color="#FFFFFF" />
                                </div>
                                <div className="overflow-hidden">
                                    <AnimatedWord word={words[1]} delay={0.4} color="#D32F2F" />
                                </div>
                            </div>

                            {/* Tagline */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                                className="max-w-lg text-lg lg:text-xl leading-relaxed"
                                style={{ color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-poppins)" }}
                            >
                                {lang === 'ru'
                                    ? 'Профессиональный подбор и предоставление персонала для российского рынка'
                                    : 'Professional manpower recruitment & staffing solutions for the Russian market'
                                }
                            </motion.p>

                            {/* Animated accent line */}
                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
                                className="origin-left flex items-center gap-3"
                            >
                                <div className="h-[2px] w-16" style={{ background: "#D32F2F" }} />
                                <div className="h-[2px] w-8" style={{ background: "rgba(211,47,47,0.4)" }} />
                                <div className="w-2 h-2 rounded-full" style={{ background: "#D32F2F", opacity: 0.6 }} />
                            </motion.div>

                            {/* CTAs */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8, duration: 0.6 }}
                                className="flex flex-wrap gap-4 pt-1"
                            >
                                <Link href="/services">
                                    <button className="group flex items-center gap-2 px-8 py-4 rounded-lg text-sm font-bold cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(138,0,41,0.4)] relative overflow-hidden"
                                        style={{ background: "#8A0029", color: "#FFFFFF", fontFamily: "var(--font-inter)" }}>
                                        <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300" style={{ background: "#D32F2F" }} />
                                        <span className="relative z-10 flex items-center gap-2">
                                            {lang === 'ru' ? 'Наши услуги' : 'Our Services'} <MdArrowOutward size={16} />
                                        </span>
                                    </button>
                                </Link>
                                <Link href="/contact">
                                    <button className="flex items-center gap-2 px-8 py-4 rounded-lg text-sm font-bold cursor-pointer transition-all duration-300 hover:bg-white/10"
                                        style={{ background: "transparent", color: "#FFFFFF", border: "2px solid rgba(255,255,255,0.25)", fontFamily: "var(--font-inter)" }}>
                                        {lang === 'ru' ? 'Связаться с нами' : 'Contact Us'}
                                    </button>
                                </Link>
                            </motion.div>
                        </div>

                        {/* ═══ Right — Contact Form ═══ */}
                        <motion.div
                            initial={{ opacity: 0, x: 40, scale: 0.95 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="lg:col-span-2"
                        >
                            <div className="rounded-2xl p-7 relative overflow-hidden"
                                style={{
                                    background: "rgba(255,255,255,0.75)",
                                    backdropFilter: "blur(16px)",
                                    WebkitBackdropFilter: "blur(16px)",
                                    border: "1px solid rgba(255,255,255,0.6)",
                                    boxShadow: "0 25px 60px -12px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.15)",
                                }}>

                                {/* Top accent bar */}
                                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ background: "linear-gradient(to right, #8A0029, #D32F2F)" }} />

                                {/* Corner ornaments */}
                                <CornerOrnament size={24} color="#D32F2F" position="top-right" className="absolute top-4 right-4 opacity-25" />
                                <CornerOrnament size={24} color="#D32F2F" position="bottom-left" className="absolute bottom-4 left-4 opacity-25" />

                                {/* Decorative dots inside form */}
                                <svg className="absolute top-6 left-6 opacity-10" width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                                    {Array.from({ length: 4 }, (_, i) => (
                                        <circle key={i} cx={(i % 2) * 16 + 4} cy={Math.floor(i / 2) * 16 + 4} r="2" fill="#FFFFFF" />
                                    ))}
                                </svg>

                                <h3 className="text-xl font-black mb-1.5 mt-1"
                                    style={{ color: "#262626", fontFamily: "var(--font-inter)" }}>
                                    {lang === 'ru' ? 'Быстрая заявка' : 'Quick Inquiry'}
                                </h3>
                                <p className="text-xs mb-5"
                                    style={{ color: "rgba(38,38,38,0.5)" }}>
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
                                            className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-[#8A0029] placeholder:text-[rgba(38,38,38,0.35)]"
                                            style={{
                                                background: "rgba(0,0,0,0.04)",
                                                border: "1px solid rgba(38,38,38,0.12)",
                                                color: "#262626",
                                                fontFamily: "var(--font-poppins)",
                                            }}
                                        />
                                    ))}
                                    <textarea
                                        placeholder={lang === 'ru' ? "Сообщение" : "Message"}
                                        value={formData.message}
                                        onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                                        rows={3}
                                        className="w-full px-4 py-3 rounded-lg text-sm resize-none outline-none transition-all duration-200 focus:ring-2 focus:ring-[#8A0029] placeholder:text-[rgba(38,38,38,0.35)]"
                                        style={{
                                            background: "rgba(0,0,0,0.04)",
                                            border: "1px solid rgba(38,38,38,0.12)",
                                            color: "#262626",
                                            fontFamily: "var(--font-poppins)",
                                        }}
                                    />
                                    <button
                                        type="submit"
                                        className="w-full py-3.5 rounded-lg font-bold text-sm cursor-pointer transition-all duration-300 hover:shadow-[0_8px_30px_rgba(138,0,41,0.35)] hover:scale-[1.02] relative overflow-hidden group"
                                        style={{ background: "#8A0029", color: "#FFFFFF", fontFamily: "var(--font-inter)" }}
                                    >
                                        <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-30 transition-opacity" style={{ background: "#D32F2F" }} />
                                        <span className="relative z-10">{lang === 'ru' ? 'Отправить заявку →' : 'Submit Inquiry →'}</span>
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* ── Image dots ── */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                    {HERO_IMAGES.map((_, i) => (
                        <button key={i} onClick={() => setCurrentImg(i)}
                            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${currentImg === i ? 'w-8' : 'w-2.5 hover:bg-white/60'}`}
                            style={{ background: currentImg === i ? '#D32F2F' : 'rgba(255,255,255,0.3)' }}
                        />
                    ))}
                </div>

                {/* ── Angled geometric divider (replaces wavy) ── */}
                <div className="absolute bottom-0 left-0 right-0 z-10">
                    <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className="w-full h-[60px]">
                        <path d="M0,80 L0,40 Q360,0 720,30 Q1080,60 1440,20 L1440,80 Z" fill="#F7F7F7" />
                    </svg>
                </div>
            </section>

            {/* ══════════ FLOATING STATS BAR ══════════ */}
            <div style={{ background: "#F7F7F7" }}>
                <div className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6" style={{ marginTop: "-30px", paddingBottom: "24px" }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.7, ease: "easeOut" }}
                        className="rounded-2xl px-6 sm:px-8 md:px-10 py-7 md:py-8 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative overflow-hidden"
                        style={{ background: "white", boxShadow: "0 20px 60px -12px rgba(138,0,41,0.1), 0 4px 20px rgba(0,0,0,0.06)", border: "1px solid rgba(138,0,41,0.06)" }}
                    >
                        {/* Background decoration */}
                        <CircuitLines width={400} height={80} color="#8A0029" opacity={0.03} className="absolute top-0 right-0 hidden lg:block" />

                        {/* Decorative dots */}
                        <svg className="absolute bottom-2 left-4 opacity-5 hidden lg:block" width="60" height="60" viewBox="0 0 60 60" fill="none" aria-hidden="true">
                            {Array.from({ length: 9 }, (_, i) => (
                                <circle key={i} cx={(i % 3) * 22 + 8} cy={Math.floor(i / 3) * 22 + 8} r="2" fill="#8A0029" />
                            ))}
                        </svg>

                        {STATS.map((stat, i) => (
                            <motion.div
                                key={i}
                                className="flex items-center gap-3 lg:gap-4 group"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md"
                                    style={{ background: "rgba(138,0,41,0.08)" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="#8A0029" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d={stat.svg} />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-2xl sm:text-3xl md:text-4xl font-black"
                                        style={{ color: "#262626", fontFamily: "var(--font-inter)" }}>
                                        <CountUp end={stat.value} suffix={stat.suffix} />
                                    </div>
                                    <div className="text-[10px] sm:text-xs font-semibold tracking-wide uppercase"
                                        style={{ color: "#8A0029", fontFamily: "var(--font-inter)" }}>
                                        {lang === 'ru' ? stat.labelRu : stat.label}
                                    </div>
                                </div>
                                {i < STATS.length - 1 && (
                                    <div className="hidden lg:block w-px h-12 ml-auto" style={{ background: "rgba(138,0,41,0.08)" }} />
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </>
    )
}