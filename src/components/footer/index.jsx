'use client'

import Link from "next/link"
import Image from "next/image"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi"

const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact Us", href: "/contact" },
    { label: "Blog", href: "/blog" },
]

const serviceLinks = [
    { label: "Cleaners", href: "/services/cleaners" },
    { label: "All Types of Drivers", href: "/services/all-types-of-drivers" },
    { label: "General Labour", href: "/services/general-labour" },
    { label: "Factory Helpers", href: "/services/factory-helpers" },
    { label: "Packing Workers", href: "/services/packing-workers" },
    { label: "Visa & Documentation", href: "/services/emigration-immigration-clearance" },
    { label: "Employee Outsourcing", href: "/services/employee-outsourcing-solutions" },
]

const offices = [
    { label: "India (Delhi)", city: "New Delhi" },
    { label: "India (Noida)", city: "Noida" },
    { label: "Jeddah, Saudi Arabia", city: "Jeddah" },
    { label: "Moscow, Russia", city: "Moscow" },
    { label: "Dubai, UAE", city: "Dubai" },
]

const socials = [
    { icon: <FaFacebookF />, href: "https://facebook.com/tahaairwaves1", label: "Facebook" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/taha_airwaves", label: "Instagram" },
    { icon: <FaLinkedinIn />, href: "https://linkedin.com/company/tahaairwaves", label: "LinkedIn" },
    { icon: <FaXTwitter />, href: "https://x.com/tahaairwaves", label: "X" },
    { icon: <FaWhatsapp />, href: "https://wa.me/919315226961", label: "WhatsApp" },
]

export default function Footer() {
    return (
        <>
            <footer className="relative overflow-hidden" style={{ background: "#1a0a10" }}>
                {/* World map bg */}
                <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
                    <Image src="/images/world-map.png" alt="" fill className="object-cover" />
                </div>

                <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8 pt-16 pb-8">
                    {/* Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-10 pb-10" style={{ borderBottom: "1px solid rgba(142,9,53,0.2)" }}>

                        {/* Brand */}
                        <div className="col-span-2 md:col-span-4 lg:col-span-1">
                            <Link href="/">
                                <Image src="/LOGO-WHITE.png" alt="Taha Airwaves" width={180} height={55} className="h-12 w-auto mb-4" />
                            </Link>
                            <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(253,251,239,0.5)", fontFamily: "var(--font-lato)" }}>
                                Government-licensed overseas manpower recruitment agency deploying verified workforce from India to Russia, CIS, GCC, and global markets.
                            </p>
                            <div className="flex gap-2">
                                {socials.map((s) => (
                                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                                        className="w-9 h-9 rounded-full flex items-center justify-center text-xs transition-all duration-300"
                                        style={{ color: "#FDFBEF", border: "1px solid rgba(253,251,239,0.15)" }}
                                        onMouseEnter={e => { e.currentTarget.style.background = "#8E0935"; e.currentTarget.style.borderColor = "#8E0935" }}
                                        onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(253,251,239,0.15)" }}
                                        aria-label={s.label}>
                                        {s.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-xs tracking-[0.22em] uppercase font-bold mb-4" style={{ color: "#BC264B", fontFamily: "var(--font-lato)" }}>Quick Links</h4>
                            <ul className="space-y-2">
                                {quickLinks.map((l) => (
                                    <li key={l.label}>
                                        <Link href={l.href} className="text-sm transition-colors duration-300 hover:text-[#BC264B]"
                                            style={{ color: "rgba(253,251,239,0.5)", fontFamily: "var(--font-lato)" }}>
                                            {l.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h4 className="text-xs tracking-[0.22em] uppercase font-bold mb-4" style={{ color: "#BC264B", fontFamily: "var(--font-lato)" }}>Our Services</h4>
                            <ul className="space-y-2">
                                {serviceLinks.map((l) => (
                                    <li key={l.label}>
                                        <Link href={l.href} className="text-sm transition-colors duration-300 hover:text-[#BC264B]"
                                            style={{ color: "rgba(253,251,239,0.5)", fontFamily: "var(--font-lato)" }}>
                                            {l.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Offices */}
                        <div>
                            <h4 className="text-xs tracking-[0.22em] uppercase font-bold mb-4" style={{ color: "#BC264B", fontFamily: "var(--font-lato)" }}>Our Offices</h4>
                            <ul className="space-y-2">
                                {offices.map((o) => (
                                    <li key={o.label}>
                                        <Link href="/contact" className="text-sm transition-colors duration-300 hover:text-[#BC264B] flex items-center gap-1.5"
                                            style={{ color: "rgba(253,251,239,0.5)", fontFamily: "var(--font-lato)" }}>
                                            <FiMapPin className="text-[#BC264B] text-xs flex-shrink-0" />
                                            {o.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="col-span-2 md:col-span-1">
                            <h4 className="text-xs tracking-[0.22em] uppercase font-bold mb-4" style={{ color: "#BC264B", fontFamily: "var(--font-lato)" }}>Contact</h4>
                            <div className="space-y-3">
                                <a href="tel:+919315226961" className="flex items-center gap-2 text-sm hover:text-[#BC264B] transition-colors"
                                    style={{ color: "rgba(253,251,239,0.5)", fontFamily: "var(--font-lato)" }}>
                                    <FiPhone className="text-[#BC264B] flex-shrink-0" />
                                    +91 93152 26961
                                </a>
                                <a href="mailto:info@tahaairwaves.com" className="flex items-center gap-2 text-sm hover:text-[#BC264B] transition-colors"
                                    style={{ color: "rgba(253,251,239,0.5)", fontFamily: "var(--font-lato)" }}>
                                    <FiMail className="text-[#BC264B] flex-shrink-0" />
                                    info@tahaairwaves.com
                                </a>
                                <div className="flex items-start gap-2 text-sm" style={{ color: "rgba(253,251,239,0.5)", fontFamily: "var(--font-lato)" }}>
                                    <FiMapPin className="text-[#BC264B] flex-shrink-0 mt-0.5" />
                                    71A, 3rd Floor, Taimoor Nagar, New Friends Colony, New Delhi 110025
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6">
                        <p className="text-xs" style={{ color: "rgba(253,251,239,0.35)", fontFamily: "var(--font-lato)" }}>
                            © {new Date().getFullYear()} Taha Airwaves Pvt Ltd. All Rights Reserved.
                        </p>
                        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.04em]"
                            style={{ background: "rgba(142,9,53,0.85)", color: "#fff", whiteSpace: "nowrap" }}>
                            RA License: B-3260/DEL/COM/100/5/11259/2025
                        </span>
                    </div>
                </div>
            </footer>

            {/* Marquee Strip */}
            <div className="overflow-hidden" style={{ background: "#8E0935" }}>
                <div className="flex animate-[marquee_20s_linear_infinite]" style={{ width: "max-content" }}>
                    {[...Array(10)].map((_, i) => (
                        <span key={i} className="flex items-center gap-4 px-6 py-2 text-sm tracking-[0.1em] uppercase whitespace-nowrap"
                            style={{ color: "rgba(253,251,239,0.9)", fontFamily: "var(--font-lato)" }}>
                            <span className="text-xs" style={{ color: "rgba(253,251,239,0.5)" }}>✦</span>
                            Taha Airwaves — Where Talent Meets Reliability
                        </span>
                    ))}
                </div>
                <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
            </div>
        </>
    )
}
