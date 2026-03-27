'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FaCheckCircle, FaWhatsapp, FaGlobeAsia } from 'react-icons/fa'
import { MdVerified } from 'react-icons/md'
import { useLanguage } from '@/context/language'
import FaqAccordion from '@/components/faq-accordion'
import { DotGrid, CornerOrnament, FlowLine, CircuitLines } from '@/components/decorators/SVGDecorations'

export default function ServiceDetailContent({ service }) {
    const { lang } = useLanguage()
    const ru = lang === 'ru'

    const title = ru ? service.title_ru : service.title
    const metaDesc = ru ? service.metaDesc_ru : service.metaDesc
    const intro = ru ? service.intro_ru : service.intro
    const detailedDesc = ru ? service.detailedDesc_ru : service.detailedDesc
    const types = ru ? service.types_ru : service.types
    const industries = ru ? service.industries_ru : service.industries
    const process = ru ? service.process_ru : service.process
    const benefits = ru ? service.benefits_ru : service.benefits
    const faqs = ru ? service.faqs_ru : service.faqs

    return (
        <>
            {/* Hero */}
            <section className="relative overflow-hidden" style={{ height: '50vh', minHeight: '350px' }}>
                <Image src={service.images?.[0] || '/images/demo4.jpeg'} alt={title} fill className="object-cover" style={{ objectPosition: 'center 35%' }} priority />
                <div className="absolute inset-0" style={{ background: 'rgba(26,10,16,0.78)' }} />
                <CornerOrnament size={50} color="#BC264B" position="top-left" className="absolute top-8 left-8 opacity-15 hidden lg:block" />
                <DotGrid rows={3} cols={3} color="#FDFBEF" opacity={0.04} spacing={20} className="absolute top-8 right-8 hidden lg:block" />
                <div className="relative z-10 h-full flex flex-col justify-end max-w-[1100px] mx-auto px-6 pb-12">
                    <div className="flex items-center gap-3 mb-3">
                        <FlowLine width={32} height={2} color="#BC264B" />
                        <span className="text-sm tracking-[0.2em] uppercase font-bold"
                            style={{ color: "#BC264B", fontFamily: "var(--font-inter)" }}>
                            {ru ? 'Услуги' : 'Services'}
                        </span>
                    </div>
                    <h1 style={{ fontFamily: 'var(--font-inter)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, color: '#FDFBEF', marginBottom: '12px' }}>{title}</h1>
                    <p style={{ fontFamily: 'var(--font-poppins)', fontSize: 'clamp(0.9rem, 1.2vw, 1.05rem)', color: 'rgba(253,251,239,0.65)', maxWidth: '600px' }}>{metaDesc}</p>
                </div>
            </section>

            {/* Content */}
            <section style={{ background: '#FDFBEF' }} className="py-16 relative overflow-hidden">
                <CircuitLines width={200} height={60} color="#8E0935" opacity={0.02} className="absolute top-20 right-0 hidden lg:block" />
                <CornerOrnament size={35} color="#BC264B" position="bottom-right" className="absolute bottom-12 right-8 opacity-10 hidden lg:block" />

                <div className="max-w-[1100px] mx-auto px-6 space-y-16 relative z-10">

                    <Link href="/services" className="inline-flex items-center gap-2 text-sm font-bold transition-colors hover:text-[#BC264B]" style={{ color: '#8E0935', fontFamily: 'var(--font-inter)' }}>
                        ← {ru ? 'Все услуги' : 'Back to All Services'}
                    </Link>

                    {/* Intro */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                        <div>
                            <h2 className="font-black mb-4" style={{ fontFamily: 'var(--font-inter)', fontSize: '1.8rem', color: '#1A1A1A' }}>
                                {ru ? 'Об этой ' : 'About This '}<span style={{ color: '#8E0935' }}>{ru ? 'услуге' : 'Service'}</span>
                            </h2>
                            <p className="text-base leading-relaxed mb-3" style={{ fontFamily: 'var(--font-poppins)', color: '#374151' }}>{intro}</p>
                            <p className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-poppins)', color: '#6B7280' }}>{detailedDesc}</p>
                        </div>
                        {service.images?.[1] && (
                            <div className="relative rounded-lg overflow-hidden" style={{ aspectRatio: '16/10' }}>
                                <Image src={service.images[1]} alt={title} fill className="object-cover" />
                            </div>
                        )}
                    </div>

                    {/* What We Provide */}
                    <div>
                        <h2 className="font-black mb-2" style={{ fontFamily: 'var(--font-inter)', fontSize: '1.8rem', color: '#1A1A1A' }}>
                            {ru ? 'Что мы ' : 'What We '}<span style={{ color: '#8E0935' }}>{ru ? 'предоставляем' : 'Provide'}</span>
                        </h2>
                        <p className="text-sm mb-6" style={{ fontFamily: 'var(--font-poppins)', color: '#6B7280' }}>
                            {ru ? 'Комплексные кадровые решения для российского рынка' : 'Comprehensive workforce solutions for the Russian market'}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {types.map((t, i) => {
                                const parts = t.split(' – ')
                                return (
                                    <div key={i} className="flex gap-3 p-4 rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md" style={{ background: '#fff', border: '1px solid rgba(142,9,53,0.1)' }}>
                                        <FaCheckCircle className="text-[#8E0935] flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-bold text-sm" style={{ fontFamily: 'var(--font-inter)', color: '#1A1A1A' }}>{parts[0]}</h3>
                                            {parts[1] && <p className="text-sm mt-1" style={{ fontFamily: 'var(--font-poppins)', color: '#6B7280' }}>{parts[1]}</p>}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* Industries */}
                    <div>
                        <h2 className="font-black mb-4" style={{ fontFamily: 'var(--font-inter)', fontSize: '1.8rem', color: '#1A1A1A' }}>
                            {ru ? 'Отрасли, которые мы ' : 'Industries We '}<span style={{ color: '#8E0935' }}>{ru ? 'обслуживаем' : 'Serve'}</span>
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {industries.map((ind) => (
                                <span key={ind} className="px-4 py-2 rounded-lg text-sm font-semibold" style={{ background: 'rgba(142,9,53,0.06)', color: '#8E0935', fontFamily: 'var(--font-inter)' }}>{ind}</span>
                            ))}
                        </div>
                    </div>

                    {/* Russia Deployment Focus */}
                    <div className="rounded-lg overflow-hidden" style={{ background: '#1A1A1A' }}>
                        <div className="px-8 py-4" style={{ background: '#8E0935' }}>
                            <h2 className="font-black text-lg" style={{ fontFamily: 'var(--font-inter)', color: '#FDFBEF' }}>
                                {ru ? 'Размещение в России' : 'Russia Deployment'}
                            </h2>
                        </div>
                        <div className="p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <span className="text-3xl">🇷🇺</span>
                                        <div>
                                            <h4 className="font-black text-base" style={{ fontFamily: 'var(--font-inter)', color: '#FDFBEF' }}>
                                                {ru ? 'Россия' : 'Russia'}
                                            </h4>
                                            <span className="text-xs" style={{ color: 'rgba(253,251,239,0.4)', fontFamily: 'var(--font-inter)' }}>
                                                {ru ? 'Основное направление' : 'Primary Market'}
                                            </span>
                                        </div>
                                    </div>
                                    {(ru
                                        ? ['Представительство в Москве', '500+ работников размещено', 'Строительство, производство, нефть и газ', 'Полное визовое сопровождение']
                                        : ['Moscow Representative Office', '500+ Workers Deployed', 'Construction, Manufacturing, Oil & Gas', 'Full Visa Support']
                                    ).map(d => (
                                        <div key={d} className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#BC264B' }} />
                                            <span className="text-sm" style={{ color: 'rgba(253,251,239,0.5)', fontFamily: 'var(--font-inter)' }}>{d}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="space-y-3">
                                    <h4 className="font-bold text-sm" style={{ fontFamily: 'var(--font-inter)', color: 'rgba(253,251,239,0.6)' }}>
                                        {ru ? 'Контакты для России' : 'Russia Contact'}
                                    </h4>
                                    <a href="mailto:info@tahaairwaves.ru" className="block text-sm hover:text-[#BC264B] transition-colors"
                                        style={{ color: 'rgba(253,251,239,0.55)', fontFamily: 'var(--font-inter)' }}>✉ info@tahaairwaves.ru</a>
                                    <a href="tel:+79850748828" className="block text-sm hover:text-[#BC264B] transition-colors"
                                        style={{ color: 'rgba(253,251,239,0.55)', fontFamily: 'var(--font-inter)' }}>☎ +7 985 074-88-28</a>
                                    <a href="https://tahaairwaves.ru" target="_blank" rel="noopener noreferrer" className="block text-sm hover:text-[#BC264B] transition-colors"
                                        style={{ color: 'rgba(253,251,239,0.55)', fontFamily: 'var(--font-inter)' }}>🌐 tahaairwaves.ru</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Key Highlights */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { number: '500+', label: ru ? 'Размещено работников' : 'Workers Deployed', icon: <FaGlobeAsia style={{ color: '#8E0935' }} /> },
                            { number: '95%', label: ru ? 'Трудоустройство' : 'Placement Rate', icon: <MdVerified style={{ color: '#8E0935' }} /> },
                            { number: '21+', label: ru ? 'Стран обслужено' : 'Countries Served', icon: <FaGlobeAsia style={{ color: '#BC264B' }} /> },
                            { number: '100%', label: ru ? 'Соответствие' : 'Compliance Rate', icon: <MdVerified style={{ color: '#BC264B' }} /> },
                        ].map((stat, i) => (
                            <div key={i} className="text-center p-6 rounded-lg" style={{ background: '#fff', border: '1px solid rgba(142,9,53,0.1)' }}>
                                <div className="text-3xl lg:text-4xl font-black mb-1" style={{ color: '#8E0935', fontFamily: 'var(--font-inter)' }}>{stat.number}</div>
                                <div className="text-sm font-medium" style={{ color: '#6B7280', fontFamily: 'var(--font-inter)' }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Deployment Promise */}
                    <div className="p-8 rounded-lg relative overflow-hidden" style={{ background: 'rgba(142,9,53,0.05)', border: '1px solid rgba(142,9,53,0.1)' }}>
                        <DotGrid rows={3} cols={3} color="#8E0935" opacity={0.04} spacing={20} className="absolute top-4 right-4" />
                        <h3 className="font-black text-lg mb-3" style={{ fontFamily: 'var(--font-inter)', color: '#1A1A1A' }}>
                            {ru ? 'Наша гарантия размещения' : 'Our Deployment Promise'}
                        </h3>
                        <p className="text-base leading-relaxed" style={{ fontFamily: 'var(--font-poppins)', color: '#374151' }}>
                            {ru
                                ? 'Каждый кандидат проходит наш строгий 5-этапный процесс проверки. Мы берём на себя всё — от подбора и оценки навыков до визового оформления, медицинского допуска и координации поездки. Наша государственная лицензия (RA License No. B-3260/DEL/COM/100/5/11259/2025) обеспечивает 100% соответствие индийскому эмиграционному законодательству и нормативам России.'
                                : 'Every candidate we deploy goes through our rigorous 5-stage verification process. We handle everything from sourcing and skill assessment to visa processing, medical clearance, and travel coordination. Our government licensing (RA License No. B-3260/DEL/COM/100/5/11259/2025) ensures 100% compliance with Indian emigration laws and Russian regulations.'}
                        </p>
                    </div>

                    {/* Process */}
                    <div>
                        <h2 className="font-black mb-6" style={{ fontFamily: 'var(--font-inter)', fontSize: '1.8rem', color: '#1A1A1A' }}>
                            {ru ? 'Наш ' : 'Our '}<span style={{ color: '#8E0935' }}>{ru ? 'процесс' : 'Process'}</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {process.map((step, i) => {
                                const parts = step.split(' – ')
                                return (
                                    <div key={i} className="p-5 rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md" style={{ background: '#fff', border: '1px solid rgba(142,9,53,0.1)' }}>
                                        <div className="text-2xl font-black mb-3" style={{ color: '#BC264B', fontFamily: 'var(--font-inter)' }}>{i + 1}</div>
                                        <h3 className="font-bold text-sm mb-1" style={{ fontFamily: 'var(--font-inter)', color: '#1A1A1A' }}>{parts[0]}</h3>
                                        {parts[1] && <p className="text-sm" style={{ fontFamily: 'var(--font-poppins)', color: '#6B7280' }}>{parts[1]}</p>}
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* Benefits */}
                    <div className="p-8 rounded-lg" style={{ background: '#1A1A1A' }}>
                        <h2 className="font-black text-xl mb-5" style={{ fontFamily: 'var(--font-inter)', color: '#FDFBEF' }}>
                            {ru ? 'Почему ' : 'Why Choose '}<span style={{ color: '#BC264B' }}>Taha Airwaves</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {benefits.map((b, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <FaCheckCircle style={{ color: '#BC264B', flexShrink: 0 }} />
                                    <span className="text-sm" style={{ fontFamily: 'var(--font-poppins)', color: 'rgba(253,251,239,0.7)' }}>{b}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* FAQs */}
                    <div>
                        <h2 className="font-black mb-5" style={{ fontFamily: 'var(--font-inter)', fontSize: '1.8rem', color: '#1A1A1A' }}>
                            {ru ? 'Часто задаваемые ' : 'Frequently Asked '}<span style={{ color: '#8E0935' }}>{ru ? 'вопросы' : 'Questions'}</span>
                        </h2>
                        <FaqAccordion faqs={faqs} />
                    </div>

                    {/* CTA */}
                    <div className="text-center p-10 rounded-lg relative overflow-hidden" style={{ background: '#8E0935' }}>
                        <DotGrid rows={3} cols={3} color="#FDFBEF" opacity={0.06} spacing={20} className="absolute top-4 right-4" />
                        <h3 className="font-black mb-3" style={{ fontFamily: 'var(--font-inter)', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: '#FDFBEF' }}>
                            {ru ? `Нужны ${service.title_ru || title}?` : `Need ${title}?`}
                        </h3>
                        <p className="text-base mb-6" style={{ fontFamily: 'var(--font-poppins)', color: 'rgba(253,251,239,0.7)' }}>
                            {ru ? 'Свяжитесь с нами сегодня для бесплатной консультации.' : 'Contact us today for a free consultation and custom workforce quote.'}
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3 rounded text-sm font-bold uppercase tracking-[0.1em]"
                                style={{ background: '#FDFBEF', color: '#8E0935', fontFamily: 'var(--font-inter)' }}>
                                {ru ? 'Получить предложение' : 'Get a Quote'}
                            </Link>
                            <a href="https://wa.me/qr/TKSOMEYZZW2CN1" target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-7 py-3 rounded text-sm font-bold uppercase tracking-[0.1em]"
                                style={{ background: 'transparent', color: '#FDFBEF', border: '1px solid rgba(253,251,239,0.4)', fontFamily: 'var(--font-inter)' }}>
                                <FaWhatsapp /> WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
