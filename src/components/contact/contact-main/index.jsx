'use client'

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { MdArrowOutward } from "react-icons/md"
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

const OFFICES = [
    {
        city: "New Delhi (Head Office)",
        address: "71A, 3rd Floor, Taimoor Nagar, New Friends Colony, New Delhi 110025",
        phone: "+91 93152 26961",
        email: "info@tahaairwaves.com",
        mapUrl: "https://maps.google.com/?q=28.5671,77.2700",
    },
    {
        city: "Noida (Branch Office)",
        address: "Sector 62, Noida, Uttar Pradesh 201301",
        phone: "+91 93152 26961",
        email: "info@tahaairwaves.com",
        mapUrl: "https://maps.google.com/?q=28.6270,77.3737",
    },
    {
        city: "Jeddah, Saudi Arabia",
        address: "Al Balad District, Jeddah, Saudi Arabia",
        phone: "+966 XX XXX XXXX",
        email: "jeddah@tahaairwaves.com",
        mapUrl: "https://maps.google.com/?q=21.4858,39.1925",
    },
    {
        city: "Moscow, Russia",
        address: "Business District, Moscow, Russia",
        phone: "+7 XXX XXX XXXX",
        email: "moscow@tahaairwaves.com",
        mapUrl: "https://maps.google.com/?q=55.7558,37.6173",
    },
    {
        city: "Dubai, UAE",
        address: "Business Bay, Dubai, UAE",
        phone: "+971 XX XXX XXXX",
        email: "dubai@tahaairwaves.com",
        mapUrl: "https://maps.google.com/?q=25.1872,55.2744",
    },
]

const SERVICES_LIST = [
    "Cleaners", "Drivers (All Types)", "General Labour", "Factory Helpers",
    "Packing Workers", "Loading & Unloading", "Barista Workers",
    "Emigration & Immigration", "Document Attestation", "Hajj & Umrah Travel",
    "Employee Outsourcing", "Other",
]

const socials = [
    { icon: <FaFacebookF />, href: "https://facebook.com/tahaairwaves1", label: "Facebook", bg: "#1877F2" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/taha_airwaves", label: "Instagram", bg: "#E4405F" },
    { icon: <FaLinkedinIn />, href: "https://linkedin.com/company/tahaairwaves", label: "LinkedIn", bg: "#0A66C2" },
    { icon: <FaXTwitter />, href: "https://x.com/tahaairwaves", label: "X", bg: "#000" },
    { icon: <FaWhatsapp />, href: "https://wa.me/919315226961", label: "WhatsApp", bg: "#25D366" },
]

export default function ContactMain() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true })
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' })
    const [sending, setSending] = useState(false)
    const [sent, setSent] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSending(true)
        try {
            await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })
            setSent(true)
            setFormData({ name: '', email: '', phone: '', service: '', message: '' })
        } catch { }
        setSending(false)
    }

    return (
        <section ref={ref} className="pt-32 pb-20" style={{ background: "#FDFBEF" }}>
            <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="mb-14">
                    <div className="w-14 h-1 rounded-full mb-6" style={{ background: "#8E0935" }} />
                    <h1 style={{ fontFamily: "var(--font-cormorant-garamond)", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 600, color: "#1a0a10" }}>
                        Get in <span className="italic" style={{ color: "#8E0935" }}>Touch</span>
                    </h1>
                    <p className="mt-4 max-w-xl" style={{ fontFamily: "var(--font-poppins)", fontSize: "1rem", color: "#6B7280" }}>
                        Whether you&apos;re an employer seeking manpower or a job seeker looking for opportunities, we&apos;re here to help.
                    </p>
                </div>

                {/* Form + Contact Info */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-16">
                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-3 p-8 rounded-2xl"
                        style={{ background: "#fff", border: "1px solid rgba(142,9,53,0.1)" }}
                    >
                        <h2 className="mb-6" style={{ fontFamily: "var(--font-lato)", fontSize: "1.3rem", fontWeight: 700, color: "#1a0a10" }}>
                            Send Us a Message
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="text" placeholder="Your Name *" required value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                                    style={{ border: "1px solid rgba(142,9,53,0.15)", fontFamily: "var(--font-poppins)", color: "#1a0a10" }} />
                                <input type="email" placeholder="Your Email *" required value={formData.email}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                                    style={{ border: "1px solid rgba(142,9,53,0.15)", fontFamily: "var(--font-poppins)", color: "#1a0a10" }} />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="tel" placeholder="Phone Number" value={formData.phone}
                                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                                    style={{ border: "1px solid rgba(142,9,53,0.15)", fontFamily: "var(--font-poppins)", color: "#1a0a10" }} />
                                <select value={formData.service} onChange={e => setFormData({ ...formData, service: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                                    style={{ border: "1px solid rgba(142,9,53,0.15)", fontFamily: "var(--font-poppins)", color: formData.service ? "#1a0a10" : "#9CA3AF" }}>
                                    <option value="">Select Service</option>
                                    {SERVICES_LIST.map(s => <option key={s} value={s}>{s}</option>)}
                                </select>
                            </div>
                            <textarea placeholder="Your Message *" required rows={5} value={formData.message}
                                onChange={e => setFormData({ ...formData, message: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                                style={{ border: "1px solid rgba(142,9,53,0.15)", fontFamily: "var(--font-poppins)", color: "#1a0a10" }} />
                            <button type="submit" disabled={sending}
                                className="flex items-center gap-2 px-7 py-3.5 rounded-full text-sm tracking-[0.1em] uppercase font-semibold cursor-pointer transition-all duration-300 disabled:opacity-50"
                                style={{ background: "#8E0935", color: "#FDFBEF", fontFamily: "var(--font-lato)" }}>
                                {sent ? "Message Sent ✓" : sending ? "Sending..." : "Send Message"} <MdArrowOutward />
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-2 space-y-6"
                    >
                        <div className="p-6 rounded-2xl" style={{ background: "#1a0a10" }}>
                            <h3 className="mb-4" style={{ fontFamily: "var(--font-lato)", fontSize: "1.1rem", fontWeight: 700, color: "#FDFBEF" }}>
                                Direct Contact
                            </h3>
                            <div className="space-y-4">
                                <a href="tel:+919315226961" className="flex items-center gap-3 group">
                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(142,9,53,0.3)" }}>
                                        <FiPhone style={{ color: "#BC264B" }} />
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-widest" style={{ color: "rgba(253,251,239,0.3)", fontFamily: "var(--font-lato)" }}>Phone</p>
                                        <p className="text-sm font-medium" style={{ color: "rgba(253,251,239,0.7)", fontFamily: "var(--font-poppins)" }}>+91 93152 26961</p>
                                    </div>
                                </a>
                                <a href="mailto:info@tahaairwaves.com" className="flex items-center gap-3 group">
                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(142,9,53,0.3)" }}>
                                        <FiMail style={{ color: "#BC264B" }} />
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-widest" style={{ color: "rgba(253,251,239,0.3)", fontFamily: "var(--font-lato)" }}>Email</p>
                                        <p className="text-sm font-medium" style={{ color: "rgba(253,251,239,0.7)", fontFamily: "var(--font-poppins)" }}>info@tahaairwaves.com</p>
                                    </div>
                                </a>
                                <a href="https://wa.me/919315226961" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(37,211,102,0.2)" }}>
                                        <FaWhatsapp style={{ color: "#25D366" }} />
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-widest" style={{ color: "rgba(253,251,239,0.3)", fontFamily: "var(--font-lato)" }}>WhatsApp</p>
                                        <p className="text-sm font-medium" style={{ color: "rgba(253,251,239,0.7)", fontFamily: "var(--font-poppins)" }}>+91 93152 26961</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Social */}
                        <div className="p-6 rounded-2xl" style={{ background: "#fff", border: "1px solid rgba(142,9,53,0.1)" }}>
                            <h3 className="mb-4" style={{ fontFamily: "var(--font-lato)", fontSize: "1rem", fontWeight: 700, color: "#1a0a10" }}>Follow Us</h3>
                            <div className="flex gap-3">
                                {socials.map(s => (
                                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm transition-all duration-300 hover:scale-110"
                                        style={{ background: s.bg }} aria-label={s.label}>
                                        {s.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Offices */}
                <div className="mb-12">
                    <h2 className="mb-8" style={{ fontFamily: "var(--font-cormorant-garamond)", fontSize: "2rem", fontWeight: 600, color: "#1a0a10" }}>
                        Our <span style={{ color: "#8E0935" }}>Offices</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {OFFICES.map((office) => (
                            <a key={office.city} href={office.mapUrl} target="_blank" rel="noopener noreferrer"
                                className="group p-5 rounded-2xl transition-all duration-300 hover:shadow-lg"
                                style={{ background: "#fff", border: "1px solid rgba(142,9,53,0.1)" }}>
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                                        style={{ background: "rgba(142,9,53,0.08)" }}>
                                        <FiMapPin style={{ color: "#8E0935" }} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-sm mb-1 group-hover:text-[#8E0935] transition-colors"
                                            style={{ fontFamily: "var(--font-lato)", color: "#1a0a10" }}>
                                            {office.city}
                                        </h3>
                                        <p className="text-xs leading-relaxed" style={{ color: "#6B7280", fontFamily: "var(--font-poppins)" }}>
                                            {office.address}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Google Maps */}
                <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(142,9,53,0.1)" }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.5671231!2d77.2700!3d28.5671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM0JzAxLjYiTiA3N8KwMTYnMTIuMCJF!5e0!3m2!1sen!2sin!4v1"
                        width="100%"
                        height="350"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Taha Airwaves Office Location"
                    />
                </div>
            </div>
        </section>
    )
}
