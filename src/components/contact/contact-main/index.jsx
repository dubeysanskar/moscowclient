'use client'

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { MdArrowOutward } from "react-icons/md"
import { FiPhone, FiMail, FiMapPin, FiExternalLink } from "react-icons/fi"
import { FaWhatsapp, FaTelegramPlane, FaVk, FaYoutube } from "react-icons/fa"
import { useLanguage } from "@/context/language"

const OFFICES = [
    {
        id: "office-delhi",
        city: "India (Delhi) — Head Office",
        address: "71A, 3rd Floor, Block A, Taimoor Nagar, New Friends Colony, New Delhi 110065",
        phone: "+91 93152 26961",
        email: "info@tahaairwaves.com",
        website: "www.tahaairwaves.com",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.0!2d77.2708078!3d28.5721053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3d4eb682229%3A0xa52bff5d678144c5!2sTaha%20Airwaves!5e0!3m2!1sen!2sin!4v1",
        mapLink: "https://maps.app.goo.gl/GvS2Xn4ZrGqcfmbS8",
    },
    {
        id: "office-noida",
        city: "India (Noida)",
        address: "Bhutani Alphathum, Tower C, 2nd Floor, A06, Sector 90, Noida, Uttar Pradesh 201304",
        email: "marketing@tahaairwaves.com",
        website: "www.tahaairwaves.com",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.8811434315994!2d77.4107801!3d28.513235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce9fcbe0273a1%3A0xd8ed754838e2f8a4!2sBhutani%20Alphathum!5e0!3m2!1sen!2sin!4v1774001112471!5m2!1sen!2sin",
        mapLink: "https://maps.app.goo.gl/8hj6U2PwFGQviqBCA",
    },
    {
        id: "office-moscow",
        city: "Moscow, Russia",
        address: "Skolkovo Innovation Center, Malevicha Street, 2k4, 143026",
        phone: "+7 985 074-88-28",
        email: "info@tahaairwaves.ru",
        website: "www.tahaairwaves.ru",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2247.1426425262143!2d37.3377322!3d55.7212732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54fc19d3da9ab%3A0xa53e316700ab8ad7!2zVGFoYSBBaXJ3YXZlcyBSdXNzaWEgLSDQrdC60YHQv9C10YDRgtGLINC_0L4g0L_QvtC00LHQvtGA0YMg0LjQvdC00LjQudGB0LrQuNGFINGA0LDQsdC_0YLQvdC40LrQvtCyINCyINCg0L7RgdGB0LjQuA!5e0!3m2!1sen!2sin!4v1774001324192!5m2!1sen!2sin",
        mapLink: "https://maps.app.goo.gl/z8SxP7mCixzbLGqcA",
    },
]

const SERVICES_LIST = [
    "Cleaners", "Drivers (All Types)", "General Workers", "Factory Workers",
    "Packing Workers", "Loading & Unloading", "Technicians",
    "Visa & Documentation", "Employee Outsourcing", "Other",
]

const socials = [
    { icon: <FaWhatsapp />, href: "https://wa.me/qr/TKSOMEYZZW2CN1", label: "WhatsApp", bg: "#8E0935" },
    { icon: <FaTelegramPlane />, href: "https://t.me/tahaairwaves", label: "Telegram", bg: "#8E0935" },
    { icon: <FaVk />, href: "https://vkvideo.ru/@tahaairwaves", label: "VK Video", bg: "#8E0935" },
    { icon: <FaYoutube />, href: "https://rutube.ru/channel/76971642/", label: "Rutube", bg: "#8E0935" },
    { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-1-3H7l6-10-1 6h3l-4 7z"/></svg>, href: "https://max.ru/u/f9LHodD0cOIMJiIqD-D832F8g35uW7T1VTQlUSH07133auTjMZ-FQlggpkA", label: "Max", bg: "#8E0935" },
]

export default function ContactMain() {
    const { t, lang } = useLanguage()
    const ref = useRef(null)
    const inView = useInView(ref, { once: true })
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' })
    const [sending, setSending] = useState(false)
    const [sent, setSent] = useState(false)
    const [error, setError] = useState('')
    const [selectedOffice, setSelectedOffice] = useState(0)

    // Handle URL hash to auto-select office tab and scroll
    useEffect(() => {
        const hash = window.location.hash.replace('#', '')
        if (hash) {
            const officeIndex = OFFICES.findIndex(o => o.id === hash)
            if (officeIndex !== -1) {
                setSelectedOffice(officeIndex)
                // Wait for render then scroll to offices section
                setTimeout(() => {
                    const el = document.getElementById('offices-section')
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }, 300)
            }
        }
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSending(true)
        setError('')
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })
            if (!res.ok) throw new Error('Failed to send message')
            setSent(true)
            setFormData({ name: '', email: '', phone: '', service: '', message: '' })
        } catch (err) {
            setError('Failed to send message. Please try again or contact us directly.')
        }
        setSending(false)
    }

    return (
        <section ref={ref} className="pt-32 pb-20 relative overflow-hidden" style={{ background: "#FFFFFF" }}>
            {/* Left brand strip */}
            <div className="absolute left-0 top-0 bottom-0 w-[3px]" style={{ background: "#8A0029" }} />
            <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="mb-14">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-[2px]" style={{ background: "#8A0029" }} />
                        <span className="text-[10px] tracking-[0.2em] uppercase font-bold" style={{ color: "#D32F2F", fontFamily: "var(--font-inter)" }}>{t('contact')}</span>
                    </div>
                    <h1 style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, color: "#262626" }}>
                        {lang === 'ru' ? <><span style={{ color: "#8A0029" }}>Свяжитесь</span> с нами</> : <>Get in <span style={{ color: "#8A0029" }}>Touch</span></>}
                    </h1>
                    <p className="mt-4 max-w-xl" style={{ fontFamily: "var(--font-poppins)", fontSize: "1rem", color: "#6B7280" }}>
                        {lang === 'ru' ? 'Независимо от того, являетесь ли вы работодателем или соискателем — мы здесь, чтобы помочь вам с кадровыми решениями для России и за рубежом.' : "Whether you're an employer seeking manpower or looking for professional workforce solutions in Russia, we're here to help."}
                    </p>
                </div>

                {/* Form + Contact Info */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-16">
                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-3 p-8 rounded"
                        style={{ background: "#F7F7F7", border: "1px solid rgba(38,38,38,0.07)" }}
                    >
                        <h2 className="mb-6" style={{ fontFamily: "var(--font-inter)", fontSize: "1.3rem", fontWeight: 900, color: "#262626" }}>
                            {lang === 'ru' ? 'Отправить сообщение' : 'Send Us a Message'}
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="text" placeholder={t('formName') + ' *'} required value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 rounded text-sm outline-none"
                                    style={{ border: "1px solid #e5e5e5", background: "#FFFFFF", fontFamily: "var(--font-poppins)", color: "#262626" }} />
                                <input type="email" placeholder={t('formEmail') + ' *'} required value={formData.email}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 rounded text-sm outline-none"
                                    style={{ border: "1px solid #e5e5e5", background: "#FFFFFF", fontFamily: "var(--font-poppins)", color: "#262626" }} />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="tel" placeholder={t('formPhone')} value={formData.phone}
                                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full px-4 py-3 rounded text-sm outline-none"
                                    style={{ border: "1px solid #e5e5e5", background: "#FFFFFF", fontFamily: "var(--font-poppins)", color: "#262626" }} />
                                <select value={formData.service} onChange={e => setFormData({ ...formData, service: e.target.value })}
                                    className="w-full px-4 py-3 rounded text-sm outline-none"
                                    style={{ border: "1px solid #e5e5e5", background: "#FFFFFF", fontFamily: "var(--font-poppins)", color: formData.service ? "#262626" : "#9CA3AF" }}>
                                    <option value="">{lang === 'ru' ? 'Выберите услугу' : 'Select Service'}</option>
                                    {SERVICES_LIST.map(s => <option key={s} value={s}>{s}</option>)}
                                </select>
                            </div>
                            <textarea placeholder={(lang === 'ru' ? 'Ваше сообщение' : 'Your Message') + ' *'} required rows={5} value={formData.message}
                                onChange={e => setFormData({ ...formData, message: e.target.value })}
                                className="w-full px-4 py-3 rounded text-sm outline-none resize-none"
                                style={{ border: "1px solid #e5e5e5", background: "#FFFFFF", fontFamily: "var(--font-poppins)", color: "#262626" }} />
                            {error && (
                                <p className="text-sm" style={{ color: "#D32F2F", fontFamily: "var(--font-poppins)" }}>{error}</p>
                            )}
                            <button type="submit" disabled={sending}
                                className="flex items-center gap-2 px-7 py-3.5 rounded text-sm font-bold cursor-pointer transition-all duration-300 disabled:opacity-50 hover:opacity-90"
                                style={{ background: "#8A0029", color: "#FFFFFF", fontFamily: "var(--font-inter)" }}>
                                {sent ? (lang === 'ru' ? '✓ Отправлено' : '✓ Sent') : sending ? '...' : t('formSubmit')} <MdArrowOutward size={14} />
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-2 space-y-5"
                    >
                        <div className="p-6 rounded" style={{ background: "#F7F7F7", border: "1px solid rgba(38,38,38,0.07)" }}>
                            <h3 className="mb-4" style={{ fontFamily: "var(--font-inter)", fontSize: "1rem", fontWeight: 900, color: "#262626" }}>
                                {lang === 'ru' ? 'Прямой контакт' : 'Direct Contact'}
                            </h3>
                            <div className="space-y-4">
                                {[{ icon: FiPhone, label: lang === 'ru' ? 'Телефон' : 'Phone', val: '+7 985 074-88-28', href: 'tel:+79850748828' }, { icon: FiMail, label: 'Email', val: 'info@tahaairwaves.ru', href: 'mailto:info@tahaairwaves.ru' }, { icon: FaWhatsapp, label: 'WhatsApp', val: '+7 985 074-88-28', href: 'https://wa.me/qr/TKSOMEYZZW2CN1' }].map((c, i) => {
                                    const Icon = c.icon
                                    return (
                                        <a key={i} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="flex items-center gap-3 group">
                                            <div className="w-9 h-9 rounded flex items-center justify-center flex-shrink-0" style={{ background: "rgba(138,0,41,0.09)" }}>
                                                <Icon style={{ color: "#8A0029" }} size={14} />
                                            </div>
                                            <div>
                                                <p className="text-[10px] uppercase tracking-widest" style={{ color: "#9CA3AF", fontFamily: "var(--font-inter)" }}>{c.label}</p>
                                                <p className="text-sm font-semibold transition-colors group-hover:text-[#8A0029]" style={{ color: "#262626", fontFamily: "var(--font-inter)" }}>{c.val}</p>
                                            </div>
                                        </a>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Social — VK, Telegram, WhatsApp */}
                        <div className="p-6 rounded" style={{ background: "#F7F7F7", border: "1px solid rgba(38,38,38,0.07)" }}>
                            <h3 className="mb-4" style={{ fontFamily: "var(--font-inter)", fontSize: "1rem", fontWeight: 900, color: "#262626" }}>
                                {lang === 'ru' ? 'Наши соцсети' : 'Follow Us'}
                            </h3>
                            <div className="flex gap-2">
                                {socials.map(s => (
                                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                                        className="w-9 h-9 rounded flex items-center justify-center text-white transition-all duration-300 hover:opacity-90 hover:scale-105"
                                        style={{ background: s.bg }} aria-label={s.label}>
                                        {s.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Offices with Embedded Maps — Russia-focused */}
                <div id="offices-section" className="mb-12">
                    <h2 className="mb-8 font-black" style={{ fontFamily: "var(--font-inter)", fontSize: "2rem", color: "#262626" }}>
                        {lang === 'ru' ? 'Наши' : 'Our'} <span style={{ color: "#8A0029" }}>{lang === 'ru' ? 'офисы' : 'Offices'}</span>
                    </h2>

                    {/* Office Tabs */}
                    <div className="flex flex-wrap gap-3 mb-6">
                        {OFFICES.map((office, i) => (
                            <button
                                key={office.city}
                                onClick={() => setSelectedOffice(i)}
                                className="px-4 py-2.5 rounded text-sm font-bold transition-all duration-300 cursor-pointer"
                                style={{
                                    background: selectedOffice === i ? "#8A0029" : "#FFFFFF",
                                    color: selectedOffice === i ? "#FFFFFF" : "#262626",
                                    border: selectedOffice === i ? "1px solid #8A0029" : "1px solid rgba(38,38,38,0.12)",
                                    fontFamily: "var(--font-inter)",
                                }}
                            >
                                {office.city}
                            </button>
                        ))}
                    </div>

                    {/* Selected Office Detail + Map */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Office Info Card */}
                        <div className="p-6 rounded" style={{ background: "#F7F7F7", border: "1px solid rgba(38,38,38,0.07)" }}>
                            <div className="flex items-start gap-3 mb-4">
                                <div className="w-9 h-9 rounded flex items-center justify-center flex-shrink-0 mt-0.5"
                                    style={{ background: "rgba(138,0,41,0.09)" }}>
                                    <FiMapPin style={{ color: "#8A0029" }} size={14} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-black text-base mb-1"
                                        style={{ fontFamily: "var(--font-inter)", color: "#8A0029" }}>
                                        {OFFICES[selectedOffice].city}
                                    </h3>
                                    <p className="text-sm leading-relaxed" style={{ color: "#6B7280", fontFamily: "var(--font-poppins)" }}>
                                        {OFFICES[selectedOffice].address}
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-3 pt-4" style={{ borderTop: "1px solid rgba(38,38,38,0.07)" }}>
                                {OFFICES[selectedOffice].phone && (
                                    <a href={`tel:${OFFICES[selectedOffice].phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-sm hover:text-[#8A0029] transition-colors"
                                        style={{ color: "#374151", fontFamily: "var(--font-inter)" }}>
                                        <FiPhone className="flex-shrink-0" style={{ color: "#D32F2F" }} size={13} />
                                        {OFFICES[selectedOffice].phone}
                                    </a>
                                )}
                                <a href={`mailto:${OFFICES[selectedOffice].email}`} className="flex items-center gap-2 text-sm hover:text-[#8A0029] transition-colors"
                                    style={{ color: "#374151", fontFamily: "var(--font-inter)" }}>
                                    <FiMail className="flex-shrink-0" style={{ color: "#D32F2F" }} size={13} />
                                    {OFFICES[selectedOffice].email}
                                </a>
                                {OFFICES[selectedOffice].website && (
                                    <a href={`https://${OFFICES[selectedOffice].website}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-[#8A0029] transition-colors"
                                        style={{ color: "#374151", fontFamily: "var(--font-inter)" }}>
                                        <FiExternalLink className="flex-shrink-0" style={{ color: "#D32F2F" }} size={13} />
                                        {OFFICES[selectedOffice].website}
                                    </a>
                                )}
                                {OFFICES[selectedOffice].mapLink && (
                                    <a href={OFFICES[selectedOffice].mapLink} target="_blank" rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded text-xs font-bold uppercase tracking-[0.1em] transition-all duration-300 hover:opacity-80"
                                        style={{ background: "#8A0029", color: "#FFFFFF", fontFamily: "var(--font-inter)" }}>
                                        <FiExternalLink size={12} /> {lang === 'ru' ? 'Открыть в Google Maps' : 'View on Google Maps'}
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Embedded Map */}
                        <div className="lg:col-span-2 rounded overflow-hidden" style={{ border: "1px solid rgba(38,38,38,0.07)" }}>
                            <iframe
                                src={OFFICES[selectedOffice].mapEmbed}
                                width="100%"
                                height="350"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title={`${OFFICES[selectedOffice].city} Office Location`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
