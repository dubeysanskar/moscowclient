'use client'

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { MdArrowOutward } from "react-icons/md"
import { FaWhatsapp } from "react-icons/fa"
import { FiShield, FiUsers, FiGlobe } from "react-icons/fi"
import { useLanguage } from "@/context/language"

const heroImages = [
    "/images/hero-russia-1.png",
    "/images/hero-russia-2.png",
    "/images/hero-russia-3.png",
]

/* ── Static SVG decorations ── */
const DotMatrix = ({ className, color = "rgba(138,0,41,0.2)" }) => (
    <svg className={className} width="110" height="110" viewBox="0 0 110 110" fill="none" aria-hidden="true">
        {Array.from({ length: 25 }, (_, i) => (
            <circle key={i} cx={(i % 5) * 22 + 11} cy={Math.floor(i / 5) * 22 + 11} r="2" fill={color} />
        ))}
    </svg>
)

const CornerBracket = ({ className }) => (
    <svg className={className} width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M0 20V0H20" stroke="rgba(211,47,47,0.5)" strokeWidth="2" fill="none" />
    </svg>
)

export default function Hero() {
    const { t } = useLanguage()
    const [current, setCurrent] = useState(0)
    const [form, setForm] = useState({ name: '', email: '', phone: '' })
    const [sending, setSending] = useState(false)
    const [sent, setSent] = useState(false)

    const advance = useCallback(() => setCurrent(p => (p + 1) % heroImages.length), [])
    useEffect(() => {
        const id = setInterval(advance, 6000)
        return () => clearInterval(id)
    }, [advance])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSending(true)
        try {
            await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...form, message: t('formTitle') })
            })
            setSent(true)
            setForm({ name: '', email: '', phone: '' })
            setTimeout(() => setSent(false), 4000)
        } catch { }
        setSending(false)
    }

    const stats = [
        { icon: FiUsers, value: "500+", label: t('heroStat1Label') },
        { icon: FiShield, value: "20+", label: t('heroStat3Label') },
        { icon: FiGlobe, value: "2022", label: t('heroStat2Label') },
    ]

    return (
        <section className="relative w-full overflow-hidden" style={{ height: "100svh", minHeight: "680px", background: "#262626" }}>

            {/* ── Background Images — crossfade ── */}
            <AnimatePresence mode="sync">
                <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.4, ease: "easeInOut" }}
                    className="absolute inset-0"
                    style={{ zIndex: 0 }}
                >
                    <Image src={heroImages[current]} alt="Taha Airwaves Russia" fill className="object-cover" priority />
                </motion.div>
            </AnimatePresence>

            {/* ── Overlay — solid dark (no gradient, per brand) ── */}
            <div className="absolute inset-0" style={{ background: "rgba(38,38,38,0.72)", zIndex: 1 }} />

            {/* ── Left vertical accent strip ── */}
            <div className="absolute left-0 top-0 bottom-0 w-[3px]" style={{ background: "#8A0029", zIndex: 2 }} />

            {/* ── SVG Decorations ── */}
            <DotMatrix className="absolute top-20 left-12 hidden lg:block" style={{ zIndex: 2 }} />
            <DotMatrix className="absolute bottom-24 right-10 hidden lg:block opacity-50" style={{ zIndex: 2 }} color="rgba(255,255,255,0.1)" />
            <CornerBracket className="absolute top-6 right-8 hidden lg:block" style={{ zIndex: 2 }} />
            <CornerBracket className="absolute bottom-6 left-8 hidden lg:block rotate-180" style={{ zIndex: 2 }} />

            {/* ── Main Content ── */}
            <div className="relative flex items-center w-full h-full" style={{ zIndex: 3 }}>
                <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

                        {/* LEFT COLUMN — 7 cols */}
                        <div className="lg:col-span-7 flex flex-col gap-6">

                            {/* Status badge */}
                            <motion.div
                                initial={{ opacity: 0, y: -12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1, duration: 0.5 }}
                                className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded"
                                style={{ background: "rgba(138,0,41,0.2)", border: "1px solid rgba(138,0,41,0.35)" }}
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                <span className="text-[10px] tracking-[0.22em] uppercase font-bold"
                                    style={{ color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-inter)" }}>
                                    Government Licensed · RA B-3260
                                </span>
                            </motion.div>

                            {/* Main Headline — bold, no serif, no italic */}
                            <motion.div
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.65 }}
                            >
                                <h1 className="leading-[1] font-black tracking-tight"
                                    style={{
                                        fontFamily: "var(--font-inter)",
                                        fontSize: "clamp(3rem, 8vw, 6.5rem)",
                                        color: "#FFFFFF",
                                    }}>
                                    {t('heroTitle1')}
                                </h1>
                                <h1 className="leading-[1] font-black tracking-tight"
                                    style={{
                                        fontFamily: "var(--font-inter)",
                                        fontSize: "clamp(3rem, 8vw, 6.5rem)",
                                        color: "#8A0029",
                                    }}>
                                    {t('heroTitle2')}
                                </h1>
                            </motion.div>

                            {/* Divider with brand line */}
                            <motion.div
                                initial={{ opacity: 0, scaleX: 0 }}
                                animate={{ opacity: 1, scaleX: 1 }}
                                transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
                                style={{ transformOrigin: "left" }}
                                className="flex items-center gap-3"
                            >
                                <div className="h-[2px] w-16" style={{ background: "#D32F2F" }} />
                                <div className="h-[2px] w-6" style={{ background: "rgba(211,47,47,0.3)" }} />
                            </motion.div>

                            {/* Tagline */}
                            <motion.p
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.45, duration: 0.55 }}
                                className="max-w-[520px] text-base leading-[1.9]"
                                style={{ fontFamily: "var(--font-poppins)", color: "rgba(255,255,255,0.55)" }}
                            >
                                {t('heroTagline')}
                            </motion.p>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.55, duration: 0.5 }}
                                className="flex flex-wrap gap-3"
                            >
                                <Link href="/services">
                                    <button className="flex items-center gap-2 px-7 py-3.5 rounded text-sm font-bold cursor-pointer transition-opacity duration-200 hover:opacity-90"
                                        style={{ background: "#8A0029", color: "#FFFFFF", fontFamily: "var(--font-inter)" }}>
                                        {t('heroCtaServices')} <MdArrowOutward size={16} />
                                    </button>
                                </Link>
                                <Link href="/contact">
                                    <button className="flex items-center gap-2 px-7 py-3.5 rounded text-sm font-semibold cursor-pointer border transition-colors duration-200 hover:border-white/40"
                                        style={{ background: "rgba(255,255,255,0.05)", color: "#FFFFFF", border: "1px solid rgba(255,255,255,0.15)", fontFamily: "var(--font-inter)" }}>
                                        {t('heroCtaContact')}
                                    </button>
                                </Link>
                                <a href="https://wa.me/919315226961" target="_blank" rel="noopener noreferrer">
                                    <button className="flex items-center gap-2 px-5 py-3.5 rounded text-sm font-semibold cursor-pointer transition-opacity duration-200 hover:opacity-90"
                                        style={{ background: "#D32F2F", color: "#FFFFFF", fontFamily: "var(--font-inter)" }}>
                                        <FaWhatsapp size={14} /> WhatsApp
                                    </button>
                                </a>
                            </motion.div>

                            {/* Stat Row */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.75, duration: 0.6 }}
                                className="flex flex-wrap gap-6 pt-4"
                                style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
                            >
                                {stats.map((s, i) => {
                                    const Icon = s.icon
                                    return (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-9 h-9 rounded flex items-center justify-center flex-shrink-0"
                                                style={{ background: "rgba(138,0,41,0.2)", border: "1px solid rgba(138,0,41,0.25)" }}>
                                                <Icon size={15} color="#D32F2F" />
                                            </div>
                                            <div>
                                                <div className="text-xl font-black leading-none"
                                                    style={{ color: "#FFFFFF", fontFamily: "var(--font-inter)" }}>
                                                    {s.value}
                                                </div>
                                                <div className="text-[10px] tracking-[0.15em] uppercase font-semibold mt-0.5"
                                                    style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-inter)" }}>
                                                    {s.label}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </motion.div>
                        </div>

                        {/* RIGHT COLUMN — compact form (5 cols) */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.45, duration: 0.6 }}
                            className="lg:col-span-5 hidden lg:block"
                        >
                            <div className="rounded overflow-hidden"
                                style={{ background: "#FFFFFF", border: "3px solid #8A0029" }}>
                                {/* Form header */}
                                <div className="px-6 py-4" style={{ background: "#8A0029" }}>
                                    <p className="text-[10px] tracking-[0.2em] uppercase font-bold mb-0.5"
                                        style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-inter)" }}>
                                        {t('formTitle')}
                                    </p>
                                    <p className="text-base font-black"
                                        style={{ color: "#FFFFFF", fontFamily: "var(--font-inter)" }}>
                                        {t('heroCtaContact')} →
                                    </p>
                                </div>

                                {/* Form body */}
                                <form onSubmit={handleSubmit} className="p-6 space-y-3">
                                    <input
                                        type="text" placeholder={t('formName')} value={form.name}
                                        onChange={e => setForm({ ...form, name: e.target.value })} required
                                        className="w-full px-4 py-2.5 text-sm outline-none rounded border transition-colors"
                                        style={{
                                            background: "#F7F7F7", border: "1px solid #e5e5e5",
                                            fontFamily: "var(--font-poppins)", color: "#262626"
                                        }}
                                        onFocus={e => e.target.style.borderColor = "#8A0029"}
                                        onBlur={e => e.target.style.borderColor = "#e5e5e5"}
                                    />
                                    <div className="grid grid-cols-2 gap-3">
                                        <input
                                            type="email" placeholder={t('formEmail')} value={form.email}
                                            onChange={e => setForm({ ...form, email: e.target.value })} required
                                            className="w-full px-4 py-2.5 text-sm outline-none rounded border transition-colors"
                                            style={{
                                                background: "#F7F7F7", border: "1px solid #e5e5e5",
                                                fontFamily: "var(--font-poppins)", color: "#262626"
                                            }}
                                            onFocus={e => e.target.style.borderColor = "#8A0029"}
                                            onBlur={e => e.target.style.borderColor = "#e5e5e5"}
                                        />
                                        <input
                                            type="tel" placeholder={t('formPhone')} value={form.phone}
                                            onChange={e => setForm({ ...form, phone: e.target.value })}
                                            className="w-full px-4 py-2.5 text-sm outline-none rounded border transition-colors"
                                            style={{
                                                background: "#F7F7F7", border: "1px solid #e5e5e5",
                                                fontFamily: "var(--font-poppins)", color: "#262626"
                                            }}
                                            onFocus={e => e.target.style.borderColor = "#8A0029"}
                                            onBlur={e => e.target.style.borderColor = "#e5e5e5"}
                                        />
                                    </div>
                                    <button
                                        type="submit" disabled={sending}
                                        className="w-full py-3 rounded text-sm font-bold cursor-pointer transition-opacity duration-200 hover:opacity-90 disabled:opacity-50 flex items-center justify-center gap-2"
                                        style={{ background: "#8A0029", color: "#FFFFFF", fontFamily: "var(--font-inter)" }}>
                                        {sent ? '✓ Отправлено' : sending ? '...' : t('formSubmit')}
                                        {!sent && !sending && <MdArrowOutward size={14} />}
                                    </button>

                                    {/* Trust row */}
                                    <div className="flex items-center justify-between pt-1">
                                        {["🔒 Secure", "Licensed · RA B-3260", "Free"].map((item, i) => (
                                            <span key={i} className="text-[10px] font-medium"
                                                style={{ color: "#9CA3AF", fontFamily: "var(--font-inter)" }}>
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </form>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>

            {/* ── Image slide indicators — bottom center ── */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2" style={{ zIndex: 4 }}>
                {heroImages.map((_, i) => (
                    <button key={i} onClick={() => setCurrent(i)} className="cursor-pointer rounded transition-all duration-300"
                        style={{
                            width: i === current ? "32px" : "8px",
                            height: "3px",
                            background: i === current ? "#8A0029" : "rgba(255,255,255,0.25)"
                        }}
                    />
                ))}
            </div>

            {/* ── Scroll hint ── */}
            <div className="absolute bottom-6 right-8 hidden lg:flex flex-col items-center gap-2" style={{ zIndex: 4 }}>
                <div className="w-px h-10" style={{ background: "rgba(255,255,255,0.15)" }} />
                <span className="text-[10px] tracking-[0.2em] uppercase"
                    style={{ color: "rgba(255,255,255,0.25)", fontFamily: "var(--font-inter)", writingMode: "vertical-rl" }}>
                    scroll
                </span>
            </div>
        </section>
    )
}