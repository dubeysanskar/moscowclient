'use client'

import { useState, useRef, useEffect } from 'react'
import Container from "@/components/container"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/language"
import StickyTabs from "@/components/ui/StickyTabs"
import { DotGrid, CornerOrnament, FlowLine, CircuitLines, GlobeWireframe } from "@/components/decorators/SVGDecorations"

const categories = [
    {
        id: 'manpower',
        titleEn: 'Manpower Supply',
        titleRu: 'Подбор персонала',
        services: [
            { slug: 'cleaners', titleEn: 'Cleaners & Housekeeping', titleRu: 'Уборка и хозяйственное обслуживание', descEn: 'Professionally trained staff for hotels, hospitals, commercial complexes, and residential facilities across Russia.', descRu: 'Профессионально обученный персонал для гостиниц, больниц и торговых комплексов России.', image: '/service-and-blog/Cleaners.jpeg' },
            { slug: 'all-types-of-drivers', titleEn: 'All Types of Drivers', titleRu: 'Все виды водителей', descEn: 'Licensed drivers for light and heavy vehicles, construction equipment, and transport.', descRu: 'Лицензированные водители для лёгких и тяжёлых транспортных средств.', image: '/service-and-blog/drivers.jpeg' },
            { slug: 'general-labour', titleEn: 'General Labour', titleRu: 'Разнорабочие', descEn: 'Verified general workers for construction, warehouses, and industrial operations.', descRu: 'Надёжные рабочие для строительства и складских операций.', image: '/service-and-blog/General-labours.jpeg' },
            { slug: 'loading-unloading-workers', titleEn: 'Loading & Unloading', titleRu: 'Погрузчики-разгрузчики', descEn: 'Trained material handling and logistics workers for ports and warehouses.', descRu: 'Опытные грузчики для логистических и складских операций.', image: '/service-and-blog/Loading-unloading-workers.jpeg' },
            { slug: 'factory-helpers', titleEn: 'Factory Helpers', titleRu: 'Помощники на производстве', descEn: 'Skilled factory workers for manufacturing, assembly, and production lines.', descRu: 'Обученные рабочие для сборочных линий и контроля качества.', image: '/service-and-blog/Factory-helpers.jpeg' },
            { slug: 'barista', titleEn: 'Barista & Cafe Staff', titleRu: 'Бариста и персонал кафе', descEn: 'Trained baristas and hospitality professionals for cafes and restaurants.', descRu: 'Квалифицированные бариста и выездной персонал.', image: '/service-and-blog/Barista-workers.jpeg' },
            { slug: 'packing-workers', titleEn: 'Packing Workers', titleRu: 'Упаковщики', descEn: 'Experienced packing staff for food processing, logistics, and FMCG.', descRu: 'Эффективные сотрудники для упаковки и логистики.', image: '/service-and-blog/Packers-workers.jpeg' },
            { slug: 'skilled-labourers-technicians', titleEn: 'Skilled Technicians', titleRu: 'Квалифицированные техники', descEn: 'Electricians, plumbers, welders, and technicians for construction and industry.', descRu: 'Электрики, сантехники, сварщики для строительства.', image: '/service-and-blog/Factory-helpers2.jpeg' },
        ],
    },
    {
        id: 'compliance',
        titleEn: 'Compliance & Documentation',
        titleRu: 'Документы и соответствие',
        services: [
            { slug: 'emigration-immigration-clearance', titleEn: 'Emigration & Immigration', titleRu: 'Эмиграционное оформление', descEn: 'Complete emigration check, immigration clearance, and compliance documentation.', descRu: 'Полное эмиграционное и иммиграционное оформление.', image: '/service-and-blog/Immigration-clearance.jpeg' },
            { slug: 'document-attestation-services', titleEn: 'Document Attestation', titleRu: 'Аттестация документов', descEn: 'Certificate attestation, apostille, and authentication services.', descRu: 'Полная аттестация и нотариальное заверение документов.', image: '/service-and-blog/Document-attestation.jpeg' },
        ],
    },
    {
        id: 'outsourcing',
        titleEn: 'Outsourcing Solutions',
        titleRu: 'Аутсорсинг',
        services: [
            { slug: 'employee-outsourcing-solutions', titleEn: 'Employee Outsourcing', titleRu: 'Аутсорсинг персонала', descEn: 'Flexible staffing and outsourcing for temporary, contract, and permanent roles.', descRu: 'Полный аутсорсинг — подбор, зарплата и кадры.', image: '/service-and-blog/employe-outsourcing-.jpeg' },
        ],
    },
]

/* ── Hover Image Modal (cursor-following, desktop only) ── */
const scaleAnimation = {
    initial: { scale: 0, x: '-50%', y: '-50%' },
    enter: { scale: 1, x: '-50%', y: '-50%', transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
    closed: { scale: 0, x: '-50%', y: '-50%', transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } },
}

const allServices = categories.flatMap((c) => c.services)

function HoverImageModal({ modal }) {
    const { active, index } = modal
    const container = useRef(null)

    useEffect(() => {
        const move = (e) => {
            if (!container.current) return
            container.current.style.left = `${e.clientX}px`
            container.current.style.top = `${e.clientY}px`
        }
        window.addEventListener('mousemove', move)
        return () => window.removeEventListener('mousemove', move)
    }, [])

    return (
        <motion.div
            ref={container}
            variants={scaleAnimation}
            initial="initial"
            animate={active ? 'enter' : 'closed'}
            style={{
                width: 320, height: 220, borderRadius: '16px',
                position: 'fixed', overflow: 'hidden', pointerEvents: 'none', zIndex: 50,
                boxShadow: '0 20px 60px rgba(0,0,0,0.25)', border: '3px solid rgba(142,9,53,0.3)',
            }}
        >
            <div style={{ top: index * -100 + '%', position: 'absolute', width: '100%', height: '100%', transition: 'top 0.4s cubic-bezier(0.76,0,0.24,1)' }}>
                {allServices.map((item, idx) => (
                    <div key={idx} style={{ width: '100%', height: '100%', position: 'relative' }}>
                        <Image src={item.image} alt={item.titleEn} fill className="object-cover" />
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

/* ── Service Row ── */
function ServiceRow({ service, globalIndex, setModal, lang }) {
    return (
        <Link
            href={`/services/${service.slug}`}
            onMouseEnter={() => setModal({ active: true, index: globalIndex })}
            onMouseLeave={() => setModal({ active: false, index: globalIndex })}
            className="service-row group"
            style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '28px 16px', borderBottom: '1px solid #e5e7eb',
                textDecoration: 'none', transition: 'all 0.3s ease', cursor: 'pointer', gap: '16px',
            }}
        >
            {/* Mobile thumbnail */}
            <div className="service-row-thumb" style={{
                position: 'relative', width: '90px', height: '70px',
                borderRadius: '12px', overflow: 'hidden', flexShrink: 0,
            }}>
                <Image src={service.image} alt={lang === 'ru' ? service.titleRu : service.titleEn} fill className="object-cover" />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
                <h3 style={{
                    fontFamily: 'var(--font-inter)', fontSize: '1.3rem', fontWeight: 700,
                    color: '#1A1A1A', margin: '0 0 6px', transition: 'color 0.3s',
                }}>
                    {lang === 'ru' ? service.titleRu : service.titleEn}
                </h3>
                <p style={{ fontSize: '0.93rem', color: '#6B7280', margin: 0, lineHeight: 1.65, fontFamily: 'var(--font-poppins)' }}>
                    {lang === 'ru' ? service.descRu : service.descEn}
                </p>
            </div>
            <span className="service-row-arrow" style={{
                fontFamily: 'var(--font-inter)', fontSize: '0.95rem', fontWeight: 700,
                color: '#8E0935', whiteSpace: 'nowrap', marginLeft: '24px', transition: 'transform 0.3s',
            }}>
                {lang === 'ru' ? 'Подробнее →' : 'Learn More →'}
            </span>
        </Link>
    )
}

/* ── Main Page ── */
export default function ServicesMain() {
    const { lang } = useLanguage()
    const [modal, setModal] = useState({ active: false, index: 0 })

    const getGlobalIndex = (categoryId, localIdx) => {
        let offset = 0
        for (const cat of categories) {
            if (cat.id === categoryId) return offset + localIdx
            offset += cat.services.length
        }
        return 0
    }

    return (
        <>
            {/* Hero banner */}
            <section className="relative h-[50vh] min-h-[380px] flex items-end overflow-hidden"
                style={{ background: "#1A1A1A" }}>
                <div className="absolute inset-0">
                    <Image src="/images/hero-russia-1.png" alt="Services" fill
                        className="object-cover" priority />
                    <div className="absolute inset-0"
                        style={{ background: "linear-gradient(to bottom, rgba(26,26,26,0.5) 0%, rgba(26,26,26,0.85) 70%, #1A1A1A 100%)" }} />
                </div>

                <CornerOrnament size={50} color="#BC264B" position="top-left" className="absolute top-8 left-8 opacity-20 hidden lg:block" />
                <DotGrid rows={4} cols={4} color="#FDFBEF" opacity={0.04} spacing={20} className="absolute top-8 right-8 hidden lg:block" />
                <GlobeWireframe size={280} color="#FDFBEF" accentColor="#BC264B" opacity={0.03} className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 hidden lg:block" />
                <CircuitLines width={200} height={60} color="#BC264B" opacity={0.04} className="absolute bottom-20 left-8 hidden lg:block" />

                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative z-10 pb-12"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <FlowLine width={40} height={2} color="#BC264B" />
                            <span className="text-sm tracking-[0.2em] uppercase font-bold"
                                style={{ color: "#BC264B", fontFamily: "var(--font-inter)" }}>
                                {lang === 'ru' ? 'Услуги' : 'Services'}
                            </span>
                        </div>
                        <h1 className="font-black tracking-tight mb-4"
                            style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#FDFBEF" }}>
                            {lang === 'ru'
                                ? <>{`Наши услуги для `}<span style={{ color: "#BC264B" }}>{`России`}</span></>
                                : <>{`Our Services for `}<span style={{ color: "#BC264B" }}>{`Russia`}</span></>
                            }
                        </h1>
                        <p className="max-w-xl text-base leading-relaxed"
                            style={{ color: "rgba(253,251,239,0.55)", fontFamily: "var(--font-poppins)" }}>
                            {lang === 'ru'
                                ? 'Полная документация, визовое оформление, подбор персонала и поддержка развёртывания для российского рынка.'
                                : 'End-to-end recruitment, documentation, visa processing, and deployment support for the Russian market.'}
                        </p>
                    </motion.div>
                </Container>
            </section>

            {/* StickyTabs service listing */}
            <StickyTabs mainNavHeight="4.5rem">
                {categories.map((cat) => (
                    <StickyTabs.Item key={cat.id} id={cat.id} title={lang === 'ru' ? cat.titleRu : cat.titleEn}>
                        {cat.services.map((svc, i) => (
                            <ServiceRow
                                key={svc.slug}
                                service={svc}
                                globalIndex={getGlobalIndex(cat.id, i)}
                                setModal={setModal}
                                lang={lang}
                            />
                        ))}
                    </StickyTabs.Item>
                ))}
            </StickyTabs>

            {/* Hover image modal — desktop only */}
            <HoverImageModal modal={modal} />

            {/* Styles */}
            <style jsx global>{`
                .service-row:hover {
                    background: rgba(142, 9, 53, 0.04) !important;
                    padding-left: 28px !important;
                }
                .service-row:hover h3 {
                    color: #8E0935 !important;
                }
                .service-row:hover .service-row-arrow {
                    transform: translateX(6px);
                }
                @media (min-width: 769px) {
                    .service-row-thumb {
                        display: none !important;
                    }
                }
                @media (max-width: 768px) {
                    .service-row {
                        flex-direction: row !important;
                        align-items: center !important;
                        gap: 14px !important;
                        padding: 20px 12px !important;
                    }
                    .service-row-thumb {
                        width: 80px !important;
                        height: 65px !important;
                    }
                    .service-row-arrow {
                        display: none !important;
                    }
                    .service-row h3 {
                        font-size: 1.1rem !important;
                    }
                    .service-row p {
                        font-size: 0.88rem !important;
                    }
                }
            `}</style>
        </>
    )
}
