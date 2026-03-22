'use client'

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { MdArrowOutward } from "react-icons/md"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { FiPhone, FiMail } from "react-icons/fi"

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/contact" },
]

const socials = [
    { icon: <FaFacebookF />, href: "https://facebook.com/tahaairwaves1", label: "Facebook" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/taha_airwaves", label: "Instagram" },
    { icon: <FaLinkedinIn />, href: "https://linkedin.com/company/tahaairwaves", label: "LinkedIn" },
    { icon: <FaXTwitter />, href: "https://x.com/tahaairwaves", label: "X" },
    { icon: <FaWhatsapp />, href: "https://wa.me/919315226961", label: "WhatsApp" },
]

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)



    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : ""
        return () => { document.body.style.overflow = "" }
    }, [isOpen])

    return (
        <>
            {/* Top Info Bar */}
            <div className="hidden lg:block w-full" style={{ background: "#FDFBEF", borderBottom: "1px solid rgba(142,9,53,0.1)" }}>
                <div className="max-w-[1400px] mx-auto px-8 py-2 flex justify-between items-center">
                    <div className="flex items-center gap-6">
                        <a href="mailto:info@tahaairwaves.com" className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#8E0935] transition-colors" style={{ fontFamily: "var(--font-lato)" }}>
                            <FiMail className="text-[#BC264B]" />
                            info@tahaairwaves.com
                        </a>
                        <div className="h-4 w-px bg-gray-300" />
                        <a href="tel:+919315226961" className="flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-[#8E0935] transition-colors" style={{ fontFamily: "var(--font-lato)" }}>
                            <FiPhone className="text-[#BC264B]" />
                            +91 93152 26961
                        </a>
                    </div>
                    <div className="flex items-center gap-3">
                        {socials.map((s) => (
                            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                                className="w-7 h-7 rounded-full flex items-center justify-center text-xs text-[#8E0935] hover:bg-[#8E0935] hover:text-white transition-all duration-300"
                                style={{ border: "1px solid rgba(142,9,53,0.2)" }}
                                aria-label={s.label}>
                                {s.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <header
                className="relative w-full z-50"
                style={{
                    background: "rgba(26,10,16,1)",
                    borderBottom: "1px solid rgba(142,9,53,0.2)",
                }}
            >
                <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-[72px]">
                        {/* Logo */}
                        <Link href="/" className="flex-shrink-0">
                            <Image src="/LOGO-WHITE.png" alt="Taha Airwaves" width={150} height={45} className="h-9 lg:h-11 w-auto brightness-0 invert" />
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden lg:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link key={link.label} href={link.href}
                                    className="text-sm tracking-[0.14em] uppercase font-medium transition-colors duration-300"
                                    style={{ fontFamily: "var(--font-lato)", color: "rgba(253,251,239,0.7)" }}
                                    onMouseEnter={e => e.target.style.color = "#BC264B"}
                                    onMouseLeave={e => e.target.style.color = "rgba(253,251,239,0.7)"}>
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        {/* Desktop Right */}
                        <div className="hidden lg:flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                {socials.slice(0, 4).map((s) => (
                                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                                        className="w-8 h-8 rounded-full flex items-center justify-center text-xs transition-all duration-300"
                                        style={{ color: "rgba(253,251,239,0.5)", border: "1px solid rgba(253,251,239,0.15)" }}
                                        onMouseEnter={e => { e.currentTarget.style.background = "#8E0935"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "#8E0935" }}
                                        onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgba(253,251,239,0.5)"; e.currentTarget.style.borderColor = "rgba(253,251,239,0.15)" }}
                                        aria-label={s.label}>
                                        {s.icon}
                                    </a>
                                ))}
                            </div>

                            <a href="https://wa.me/919315226961?text=Hi%2C%20I'm%20interested%20in%20your%20manpower%20services." target="_blank" rel="noopener noreferrer">
                                <button className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs tracking-[0.14em] uppercase font-semibold transition-all duration-300 cursor-pointer"
                                    style={{ background: "#25D366", color: "#fff", fontFamily: "var(--font-lato)" }}
                                    onMouseEnter={e => { e.currentTarget.style.background = "#1DA851" }}
                                    onMouseLeave={e => { e.currentTarget.style.background = "#25D366" }}>
                                    <FaWhatsapp />
                                    WhatsApp Us
                                </button>
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden flex flex-col gap-1.5 p-2" aria-label="Menu">
                            <motion.span animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }} className="block w-6 h-0.5 bg-[#FDFBEF]" />
                            <motion.span animate={{ opacity: isOpen ? 0 : 1 }} className="block w-6 h-0.5 bg-[#FDFBEF]" />
                            <motion.span animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }} className="block w-6 h-0.5 bg-[#FDFBEF]" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-40 flex flex-col pt-20 px-8 pb-10"
                        style={{ background: "#1a0a10" }}
                    >
                        <nav className="flex flex-col gap-6 mt-8">
                            {navLinks.map((link, i) => (
                                <motion.div key={link.label} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
                                    <Link href={link.href} onClick={() => setIsOpen(false)}
                                        className="text-2xl font-light tracking-[0.08em] uppercase"
                                        style={{ fontFamily: "var(--font-cormorant-garamond)", color: "#FDFBEF" }}>
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        <div className="mt-auto space-y-6">
                            <div className="space-y-3">
                                <a href="mailto:info@tahaairwaves.com" className="flex items-center gap-3 text-sm" style={{ color: "rgba(253,251,239,0.6)", fontFamily: "var(--font-lato)" }}>
                                    <FiMail className="text-[#BC264B]" /> info@tahaairwaves.com
                                </a>
                                <a href="tel:+919315226961" className="flex items-center gap-3 text-sm font-bold" style={{ color: "rgba(253,251,239,0.6)", fontFamily: "var(--font-lato)" }}>
                                    <FiPhone className="text-[#BC264B]" /> +91 93152 26961
                                </a>
                            </div>

                            <div className="flex gap-3">
                                {socials.map((s) => (
                                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full flex items-center justify-center text-sm"
                                        style={{ color: "#FDFBEF", border: "1px solid rgba(253,251,239,0.2)" }}
                                        aria-label={s.label}>
                                        {s.icon}
                                    </a>
                                ))}
                            </div>

                            <a href="https://wa.me/919315226961?text=Hi%2C%20I'm%20interested%20in%20your%20manpower%20services." target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                                <button className="w-full py-3 rounded-full text-sm tracking-[0.14em] uppercase font-semibold flex items-center justify-center gap-2"
                                    style={{ background: "#25D366", color: "#fff", fontFamily: "var(--font-lato)" }}>
                                    <FaWhatsapp /> WhatsApp Us
                                </button>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
