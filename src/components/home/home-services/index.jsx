'use client'

import { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"
import "swiper/css"
import Container from "@/components/container"
import Link from "next/link"
import { MdArrowBack, MdArrowForward, MdArrowOutward } from "react-icons/md"
import { FiUsers, FiFileText, FiTruck, FiGlobe, FiLayers } from "react-icons/fi"
import { useLanguage } from "@/context/language"
import ScrollReveal from "@/components/animations/ScrollReveal"

export default function CardCarousel() {
    const { t } = useLanguage()
    const swiperRef = useRef(null)

    const SERVICES = [
        { icon: FiGlobe, num: "01", titleKey: "csvc1Title", descKey: "csvc1Desc" },
        { icon: FiUsers, num: "02", titleKey: "csvc2Title", descKey: "csvc2Desc" },
        { icon: FiFileText, num: "03", titleKey: "csvc3Title", descKey: "csvc3Desc" },
        { icon: FiTruck, num: "04", titleKey: "csvc4Title", descKey: "csvc4Desc" },
        { icon: FiLayers, num: "05", titleKey: "csvc5Title", descKey: "csvc5Desc" },
    ]

    return (
        <section className="py-20 relative" style={{ background: "#FDFBEF" }}>
            {/* Vertical accent stripe */}
            <div className="absolute left-0 top-0 bottom-0 w-[3px]" style={{ background: "#8E0935" }} />

            <Container>
                {/* Header */}
                <ScrollReveal variant="fadeUp">
                    <div className="flex items-center justify-between pb-6 mb-8"
                        style={{ borderBottom: "1px solid rgba(142,9,53,0.08)" }}>
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-[2px]" style={{ background: "#8E0935" }} />
                                <span className="text-[10px] tracking-[0.2em] uppercase font-bold"
                                    style={{ color: "#BC264B", fontFamily: "var(--font-inter)" }}>
                                    {t('servicesOffered')}
                                </span>
                            </div>
                            <h2 className="text-2xl lg:text-3xl font-black"
                                style={{ fontFamily: "var(--font-inter)", color: "#1A1A1A" }}>
                                {t('csvcSectionTitle')}
                            </h2>
                        </div>
                        <div className="flex gap-2">
                            <button onClick={() => swiperRef.current?.slidePrev()}
                                className="w-10 h-10 flex items-center justify-center rounded border cursor-pointer transition-all duration-200 hover:bg-[#8E0935] hover:text-white hover:border-[#8E0935]"
                                style={{ borderColor: "rgba(26,26,26,0.2)", color: "#1A1A1A" }}>
                                <MdArrowBack size={18} />
                            </button>
                            <button onClick={() => swiperRef.current?.slideNext()}
                                className="w-10 h-10 flex items-center justify-center rounded border cursor-pointer transition-all duration-200 hover:bg-[#8E0935] hover:text-white hover:border-[#8E0935]"
                                style={{ borderColor: "rgba(26,26,26,0.2)", color: "#1A1A1A" }}>
                                <MdArrowForward size={18} />
                            </button>
                        </div>
                    </div>
                </ScrollReveal>

                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={12}
                    slidesPerView={1}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    onSwiper={s => (swiperRef.current = s)}
                    breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
                    className="!pb-2"
                >
                    {SERVICES.map((svc, i) => {
                        const Icon = svc.icon
                        return (
                            <SwiperSlide key={i}>
                                <div className="group relative h-[340px] flex flex-col justify-between p-8 border cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                                    style={{ background: "#1A1A1A", border: "1px solid rgba(253,251,239,0.05)" }}>
                                    {/* Top accent on hover */}
                                    <div className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity"
                                        style={{ background: "#8E0935" }} />

                                    <div>
                                        <div className="flex items-start justify-between mb-6">
                                            <span className="text-[11px] tracking-[0.2em] font-bold"
                                                style={{ color: "rgba(253,251,239,0.2)", fontFamily: "var(--font-inter)" }}>
                                                {svc.num}
                                            </span>
                                            <div className="w-11 h-11 flex items-center justify-center rounded"
                                                style={{ background: "#8E0935" }}>
                                                <Icon size={18} color="#FDFBEF" />
                                            </div>
                                        </div>

                                        <h3 className="text-lg font-black mb-3 transition-colors duration-300 group-hover:text-[#BC264B]"
                                            style={{ fontFamily: "var(--font-inter)", color: "#FDFBEF" }}>
                                            {t(svc.titleKey)}
                                        </h3>
                                        <p className="text-sm leading-relaxed"
                                            style={{ color: "rgba(253,251,239,0.4)", fontFamily: "var(--font-poppins)" }}>
                                            {t(svc.descKey)}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-2 text-xs font-bold"
                                        style={{ color: "#BC264B", fontFamily: "var(--font-inter)" }}>
                                        <div className="h-px w-8" style={{ background: "#BC264B" }} />
                                        {t('learnMore')}
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>

                {/* Bottom row */}
                <ScrollReveal variant="fadeUp" delay={0.2}>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mt-10 pt-8"
                        style={{ borderTop: "1px solid rgba(142,9,53,0.08)" }}>
                        <p className="max-w-lg text-sm leading-relaxed"
                            style={{ color: "#6B7280", fontFamily: "var(--font-poppins)" }}>
                            {t('csvcBottomDesc')}
                        </p>
                        <Link href="/services">
                            <button className="flex items-center gap-2 px-6 py-3 rounded text-sm font-bold cursor-pointer transition-all duration-300 hover:opacity-90 hover:scale-105"
                                style={{ background: "#8E0935", color: "#FDFBEF", fontFamily: "var(--font-inter)" }}>
                                {t('viewAllServices')} <MdArrowOutward size={14} />
                            </button>
                        </Link>
                    </div>
                </ScrollReveal>
            </Container>
        </section>
    )
}
