'use client'

import Container from "@/components/container"
import { FaQuoteLeft } from "react-icons/fa"
import { useLanguage } from "@/context/language"
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal"
import { DotGrid, Crosshair, GeometricFrame, CornerOrnament } from "@/components/decorators/SVGDecorations"

const TESTIMONIALS = [
    {
        name: "Алексей Петров / Aleksei Petrov",
        role_ru: "HR-директор, Строительный концерн · Россия",
        role_en: "HR Director, Construction Corp · Russia",
        flag: "https://flagcdn.com/w40/ru.png",
        country: "Russia",
        text_ru: "Taha Airwaves предоставила именно то, что нам было нужно — квалифицированных работников, готовых к работе с первого дня. Их процесс рекрутинга профессионален и эффективен.",
        text_en: "Taha Airwaves delivered exactly what we needed — qualified workers ready to contribute from day one. Their recruitment process is professional and efficient.",
    },
    {
        name: "Дмитрий Волков / Dmitry Volkov",
        role_ru: "Операционный директор, Промышленная группа · Россия",
        role_en: "Operations Manager, Industrial Group · Russia",
        flag: "https://flagcdn.com/w40/ru.png",
        country: "Russia",
        text_ru: "Мы работаем с Taha Airwaves с 2022 года, и качество предоставляемой рабочей силы неизменно высокое. Их процесс документооборота безупречен.",
        text_en: "We have been working with Taha Airwaves since 2022 and the quality of workforce they provide is consistently excellent. Their documentation process is seamless.",
    },
    {
        name: "Евгений Морозов / Yevgeny Morozov",
        role_ru: "Директор проекта, Инфраструктурные решения · Москва",
        role_en: "Project Director, Infrastructure Solutions · Moscow",
        flag: "https://flagcdn.com/w40/ru.png",
        country: "Russia",
        text_ru: "Комплексная услуга от поиска до размещения — отличная. Они понимают требования соответствия и всегда выполняют в срок. Рекомендуем!",
        text_en: "Their end-to-end service from sourcing to deployment is outstanding. They understand compliance requirements and deliver on time, every time. Highly recommended!",
    },
]

export default function Testimonials() {
    const { t, lang } = useLanguage()

    return (
        <section className="py-20 lg:py-28 relative overflow-hidden" style={{ background: "#FDFBEF" }}>
            {/* SVG Decorations */}
            <Crosshair size={80} color="#8E0935" accentColor="#BC264B" opacity={0.05} className="absolute top-12 right-12 hidden lg:block" />
            <DotGrid rows={4} cols={4} color="#8E0935" opacity={0.04} spacing={18} className="absolute bottom-10 left-10 hidden lg:block" />
            <GeometricFrame size={100} color="#8E0935" opacity={0.03} className="absolute top-20 left-8 hidden lg:block" />
            <CornerOrnament size={40} color="#BC264B" position="top-left" className="absolute top-6 left-6 opacity-12 hidden lg:block" />
            <CornerOrnament size={40} color="#BC264B" position="bottom-right" className="absolute bottom-6 right-6 opacity-12 hidden lg:block" />

            <Container>
                <ScrollReveal variant="fadeUp" className="text-center mb-14">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-10 h-px" style={{ background: "rgba(142,9,53,0.2)" }} />
                        <div className="w-8 h-[2px]" style={{ background: "#8E0935" }} />
                        <div className="w-10 h-px" style={{ background: "rgba(142,9,53,0.2)" }} />
                    </div>
                    <h2 className="font-black tracking-tight mb-3"
                        style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#1A1A1A" }}>
                        {t('testimonialsTitle')} <span style={{ color: "#8E0935" }}>{t('testimonialsTitleAccent')}</span>
                    </h2>
                    <p className="text-sm" style={{ fontFamily: "var(--font-poppins)", color: "#9CA3AF" }}>
                        {t('testimonialsSubtitle')}
                    </p>
                </ScrollReveal>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5" staggerDelay={0.12}>
                    {TESTIMONIALS.map((item, i) => (
                        <StaggerItem key={i} variant="fadeUp">
                            <div className="group relative p-8 rounded transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                                style={{ background: "white", border: "1px solid rgba(142,9,53,0.07)" }}>
                                {/* Top accent hover */}
                                <div className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity rounded-t"
                                    style={{ background: "#8E0935" }} />

                                <FaQuoteLeft className="text-xl mb-5" style={{ color: "#8E0935" }} />

                                <p className="text-sm leading-relaxed mb-6"
                                    style={{ color: "#374151", fontFamily: "var(--font-poppins)" }}>
                                    &ldquo;{lang === 'ru' ? item.text_ru : item.text_en}&rdquo;
                                </p>

                                <div className="flex items-center gap-3 pt-5"
                                    style={{ borderTop: "1px solid rgba(142,9,53,0.07)" }}>
                                    <img src={item.flag} alt={item.country} className="w-7 h-auto rounded-sm shadow-sm" loading="lazy" />
                                    <div>
                                        <p className="font-black text-xs"
                                            style={{ color: "#1A1A1A", fontFamily: "var(--font-inter)" }}>
                                            {item.name}
                                        </p>
                                        <p className="text-[11px] mt-0.5"
                                            style={{ color: "#9CA3AF", fontFamily: "var(--font-poppins)" }}>
                                            {lang === 'ru' ? item.role_ru : item.role_en}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Container>
        </section>
    )
}
