'use client'

import Link from "next/link"
import Image from "next/image"
import { FaWhatsapp, FaTelegramPlane, FaVk } from "react-icons/fa"
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi"
import { useLanguage } from "@/context/language"

const quickLinksData = [
    { key: "home", href: "/" },
    { key: "aboutUs", href: "/about" },
    { key: "services", href: "/services" },
    { key: "contactUs", href: "/contact" },
    { key: "blog", href: "/blog" },
]

const serviceLinksData = [
    { key: "svcCleaners", href: "/services/cleaners" },
    { key: "svcDrivers", href: "/services/all-types-of-drivers" },
    { key: "svcGeneral", href: "/services/general-labour" },
    { key: "svcFactory", href: "/services/factory-helpers" },
    { key: "svcTechnicians", href: "/services/skilled-labourers-technicians" },
    { key: "svcVisa", href: "/services/emigration-immigration-clearance" },
    { key: "svcOutsourcing", href: "/services/employee-outsourcing-solutions" },
]

const offices = [
    { label: "New Delhi, India", mapUrl: "https://maps.google.com/?q=28.5699,77.2721" },
    { label: "Noida, India", mapUrl: "https://maps.google.com/?q=28.5355,77.3910" },
    { label: "Moscow, Russia", mapUrl: "https://maps.google.com/?q=55.7558,37.6173" },
]

const socials = [
    { icon: <FaVk size={13} />, href: "https://vk.com/tahaairwaves", label: "VK" },
    { icon: <FaTelegramPlane size={13} />, href: "https://t.me/tahaairwaves", label: "Telegram" },
    { icon: <FaWhatsapp size={13} />, href: "https://wa.me/919315226961", label: "WhatsApp" },
]

export default function Footer() {
    const { t } = useLanguage()

    return (
        <footer className="relative overflow-hidden" style={{ background: "#262626" }}>
            {/* Top brand accent */}
            <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: "#8A0029" }} />

            {/* SVG dot decoration */}
            <svg className="absolute top-10 right-10 opacity-10 hidden lg:block" width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true">
                {Array.from({ length: 16 }, (_, i) => (
                    <circle key={i} cx={(i % 4) * 20 + 10} cy={Math.floor(i / 4) * 20 + 10} r="2" fill="white" />
                ))}
            </svg>

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8 pt-16 pb-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 pb-10"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>

                    {/* Brand col */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <Link href="/">
                            <Image src="/LOGO.png" alt="Taha Airwaves" width={160} height={50} className="h-10 w-auto mb-4" />
                        </Link>
                        <p className="text-xs leading-relaxed mb-4"
                            style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-poppins)" }}>
                            {t('footerDesc')}
                        </p>
                        <div className="flex gap-2">
                            {socials.map((s) => (
                                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                                    className="w-8 h-8 rounded flex items-center justify-center border transition-colors duration-200 hover:border-[#D32F2F] hover:text-white"
                                    style={{ color: "rgba(255,255,255,0.4)", borderColor: "rgba(255,255,255,0.08)" }}
                                    aria-label={s.label}>
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h4 className="text-[10px] tracking-[0.2em] uppercase font-bold mb-5"
                            style={{ color: "#D32F2F", fontFamily: "var(--font-inter)" }}>
                            {t('quickLinks')}
                        </h4>
                        <ul className="space-y-2">
                            {quickLinksData.map((l) => (
                                <li key={l.key}>
                                    <Link href={l.href}
                                        className="text-xs transition-colors duration-200 hover:text-white"
                                        style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-inter)" }}>
                                        {t(l.key)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-[10px] tracking-[0.2em] uppercase font-bold mb-5"
                            style={{ color: "#D32F2F", fontFamily: "var(--font-inter)" }}>
                            {t('ourServices')}
                        </h4>
                        <ul className="space-y-2">
                            {serviceLinksData.map((l) => (
                                <li key={l.key}>
                                    <Link href={l.href}
                                        className="text-xs transition-colors duration-200 hover:text-white"
                                        style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-inter)" }}>
                                        {t(l.key)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Offices */}
                    <div>
                        <h4 className="text-[10px] tracking-[0.2em] uppercase font-bold mb-5"
                            style={{ color: "#D32F2F", fontFamily: "var(--font-inter)" }}>
                            {t('ourOffices')}
                        </h4>
                        <ul className="space-y-2">
                            {offices.map((o) => (
                                <li key={o.label}>
                                    <a href={o.mapUrl} target="_blank" rel="noopener noreferrer"
                                        className="text-xs flex items-center gap-1.5 transition-colors duration-200 hover:text-white"
                                        style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-inter)" }}>
                                        <FiMapPin style={{ color: "#D32F2F", flexShrink: 0 }} size={10} />
                                        {o.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-[10px] tracking-[0.2em] uppercase font-bold mb-5"
                            style={{ color: "#D32F2F", fontFamily: "var(--font-inter)" }}>
                            {t('contact')}
                        </h4>
                        <div className="space-y-2.5">
                            <a href="tel:+919315226961"
                                className="flex items-center gap-2 text-xs hover:text-white transition-colors"
                                style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-inter)" }}>
                                <FiPhone style={{ color: "#D32F2F", flexShrink: 0 }} size={11} /> +91 93152 26961
                            </a>
                            <a href="mailto:info@tahaairwaves.com"
                                className="flex items-center gap-2 text-xs hover:text-white transition-colors"
                                style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-inter)" }}>
                                <FiMail style={{ color: "#D32F2F", flexShrink: 0 }} size={11} /> info@tahaairwaves.com
                            </a>
                            <a href="https://maps.google.com/?q=28.5699,77.2721" target="_blank" rel="noopener noreferrer"
                                className="flex items-start gap-2 text-xs hover:text-white transition-colors"
                                style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-inter)" }}>
                                <FiMapPin style={{ color: "#D32F2F", flexShrink: 0, marginTop: "2px" }} size={11} />
                                71A, 3rd Floor, New Friends Colony, New Delhi 110025
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom row */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-5 text-center">
                    <p className="text-[11px]" style={{ color: "rgba(255,255,255,0.2)", fontFamily: "var(--font-inter)" }}>
                        © {new Date().getFullYear()} Taha Airwaves Pvt Ltd. All Rights Reserved.
                    </p>
                    <span className="inline-block px-3 py-1 rounded-sm text-[10px] font-bold tracking-wide"
                        style={{ background: "rgba(138,0,41,0.2)", color: "rgba(255,255,255,0.4)" }}>
                        RA License: B-3260/DEL/COM/100/5/11259/2025
                    </span>
                </div>
            </div>
        </footer>
    )
}
