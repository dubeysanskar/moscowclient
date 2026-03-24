'use client'

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { FaWhatsapp, FaTelegramPlane, FaVk } from "react-icons/fa"
import { FiPhone, FiMail } from "react-icons/fi"
import { useLanguage } from "@/context/language"
import { usePathname } from "next/navigation"

/* Brand tokens */
const C = {
    primary: "#8A0029",
    accent: "#D32F2F",
    dark: "#262626",
    white: "#FFFFFF",
}

const navLinks = [
    { key: "home", href: "/" },
    { key: "aboutUs", href: "/about" },
    { key: "services", href: "/services" },
    { key: "blog", href: "/blog" },
    { key: "contactUs", href: "/contact" },
]

const socials = [
    { icon: <FaVk size={13} />, href: "https://vk.com/tahaairwaves", label: "VK" },
    { icon: <FaTelegramPlane size={13} />, href: "https://t.me/tahaairwaves", label: "Telegram" },
    { icon: <FaWhatsapp size={13} />, href: "https://wa.me/919315226961", label: "WhatsApp" },
]

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const { lang, toggleLang, t } = useLanguage()
    const pathname = usePathname()

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : ""
        return () => { document.body.style.overflow = "" }
    }, [isOpen])

    // Close menu on navigate
    useEffect(() => { setIsOpen(false) }, [pathname])

    return (
        <>
            {/* ── Top info bar ── */}
            <div className="hidden lg:block w-full" style={{ background: C.dark, borderBottom: `1px solid rgba(255,255,255,0.06)` }}>
                <div className="max-w-[1400px] mx-auto px-8 py-2 flex justify-between items-center">
                    <div className="flex items-center gap-5">
                        <a href="mailto:info@tahaairwaves.com"
                            className="flex items-center gap-2 text-xs transition-colors hover:text-white"
                            style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-inter)" }}>
                            <FiMail style={{ color: C.accent }} size={11} />
                            info@tahaairwaves.com
                        </a>
                        <div className="h-3 w-px" style={{ background: "rgba(255,255,255,0.08)" }} />
                        <a href="tel:+919315226961"
                            className="flex items-center gap-2 text-xs font-semibold transition-colors hover:text-white"
                            style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-inter)" }}>
                            <FiPhone style={{ color: C.accent }} size={11} />
                            +91 93152 26961
                        </a>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                            {socials.map((s) => (
                                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                                    className="w-7 h-7 rounded flex items-center justify-center transition-colors duration-200 hover:text-white"
                                    style={{ color: "rgba(255,255,255,0.35)" }}
                                    aria-label={s.label}>
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                        <div className="h-3 w-px" style={{ background: "rgba(255,255,255,0.08)" }} />
                        {/* Language toggle */}
                        <button
                            onClick={toggleLang}
                            className="flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-bold tracking-wide transition-all duration-200 cursor-pointer border"
                            style={{ color: "rgba(255,255,255,0.65)", borderColor: "rgba(255,255,255,0.1)", fontFamily: "var(--font-inter)" }}>
                            {lang === 'ru' ? '🇬🇧 EN' : '🇷🇺 РУ'}
                        </button>
                    </div>
                </div>
            </div>

            {/* ── Main header — always dark, NOT sticky ── */}
            <header className="w-full z-50" style={{ background: C.dark }}>
                <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
                    <div className="flex items-center justify-between h-[60px] lg:h-[68px]">
                        {/* Logo */}
                        <Link href="/" className="flex-shrink-0">
                            <Image src="/LOGO.png" alt="Taha Airwaves" width={140} height={42} className="h-8 lg:h-9 w-auto" />
                        </Link>

                        {/* Desktop nav */}
                        <nav className="hidden lg:flex items-center gap-8">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href
                                return (
                                    <Link key={link.key} href={link.href}
                                        className="text-[12px] tracking-[0.1em] uppercase font-semibold transition-colors duration-200 relative py-1"
                                        style={{ fontFamily: "var(--font-inter)", color: isActive ? C.accent : "rgba(255,255,255,0.6)" }}>
                                        {t(link.key)}
                                        {isActive && (
                                            <span className="absolute bottom-0 left-0 right-0 h-0.5" style={{ background: C.accent }} />
                                        )}
                                    </Link>
                                )
                            })}
                        </nav>

                        {/* Desktop right controls */}
                        <div className="hidden lg:flex items-center gap-3">
                            <button
                                onClick={toggleLang}
                                className="px-3 py-1.5 rounded text-[11px] font-bold tracking-wide transition-all duration-200 cursor-pointer border"
                                style={{ color: "rgba(255,255,255,0.7)", borderColor: "rgba(255,255,255,0.12)", fontFamily: "var(--font-inter)" }}>
                                {lang === 'ru' ? '🇬🇧 EN' : '🇷🇺 РУ'}
                            </button>
                            <a href="https://wa.me/919315226961?text=Hi%2C%20I%27m%20interested%20in%20hiring%20workers%20for%20Russia."
                                target="_blank" rel="noopener noreferrer">
                                <button className="flex items-center gap-2 px-5 py-2 rounded text-[12px] tracking-wide font-semibold transition-all duration-200 cursor-pointer hover:opacity-90"
                                    style={{ background: C.primary, color: C.white, fontFamily: "var(--font-inter)" }}>
                                    <FaWhatsapp size={13} />
                                    {t('whatsappUs')}
                                </button>
                            </a>
                        </div>

                        {/* Mobile controls */}
                        <div className="lg:hidden flex items-center gap-3">
                            <button onClick={toggleLang}
                                className="px-2 py-1 rounded text-[11px] font-bold cursor-pointer border"
                                style={{ color: "rgba(255,255,255,0.7)", borderColor: "rgba(255,255,255,0.12)", fontFamily: "var(--font-inter)" }}>
                                {lang === 'ru' ? 'EN' : 'РУ'}
                            </button>
                            <button onClick={() => setIsOpen(!isOpen)} className="flex flex-col gap-1.5 p-2 cursor-pointer" aria-label="Menu">
                                <motion.span animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }} className="block w-5 h-0.5" style={{ background: C.white }} />
                                <motion.span animate={{ opacity: isOpen ? 0 : 1 }} className="block w-5 h-0.5" style={{ background: C.white }} />
                                <motion.span animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }} className="block w-5 h-0.5" style={{ background: C.white }} />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* ── Mobile full-screen menu ── */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-40 flex flex-col px-8 pt-24 pb-10"
                        style={{ background: C.dark }}>
                        {/* Red accent bar at top */}
                        <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: C.primary }} />

                        <nav className="flex flex-col gap-4 border-t pt-6" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                            {navLinks.map((link, i) => (
                                <motion.div key={link.key}
                                    initial={{ opacity: 0, x: 24 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.07 }}>
                                    <Link href={link.href} onClick={() => setIsOpen(false)}
                                        className="text-2xl font-black tracking-tight uppercase flex items-center justify-between group"
                                        style={{ fontFamily: "var(--font-inter)", color: C.white }}>
                                        {t(link.key)}
                                        <span className="text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity"
                                            style={{ color: C.accent }}>→</span>
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        <div className="mt-auto space-y-4 pt-6 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                            <div className="space-y-2">
                                <a href="mailto:info@tahaairwaves.com"
                                    className="flex items-center gap-3 text-sm"
                                    style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-inter)" }}>
                                    <FiMail style={{ color: C.accent }} /> info@tahaairwaves.com
                                </a>
                                <a href="tel:+919315226961"
                                    className="flex items-center gap-3 text-sm font-bold"
                                    style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-inter)" }}>
                                    <FiPhone style={{ color: C.accent }} /> +91 93152 26961
                                </a>
                            </div>
                            <div className="flex gap-3">
                                {socials.map((s) => (
                                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                                        className="w-10 h-10 rounded flex items-center justify-center text-sm border"
                                        style={{ color: C.white, borderColor: "rgba(255,255,255,0.12)" }}
                                        aria-label={s.label}>
                                        {s.icon}
                                    </a>
                                ))}
                            </div>
                            <a href="https://wa.me/919315226961" target="_blank" rel="noopener noreferrer"
                                onClick={() => setIsOpen(false)}>
                                <button className="w-full py-3.5 rounded text-sm tracking-wide font-bold flex items-center justify-center gap-2 cursor-pointer"
                                    style={{ background: C.primary, color: C.white, fontFamily: "var(--font-inter)" }}>
                                    <FaWhatsapp /> {t('whatsappUs')}
                                </button>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
