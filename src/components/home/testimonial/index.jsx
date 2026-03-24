'use client'

import Container from "@/components/container"
import { motion } from "framer-motion"
import { FaQuoteLeft } from "react-icons/fa"
import { useLanguage } from "@/context/language"

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
        <section className="py-20 lg:py-28 relative overflow-hidden" style={{ background: "#F7F7F7" }}>
            {/* Decorative crosshair */}
            <svg className="absolute top-12 right-12 hidden lg:block opacity-8" width="60" height="60" viewBox="0 0 60 60" fill="none" aria-hidden="true">
                <line x1="30" y1="0" x2="30" y2="60" stroke="rgba(138,0,41,0.15)" strokeWidth="1" />
                <line x1="0" y1="30" x2="60" y2="30" stroke="rgba(138,0,41,0.15)" strokeWidth="1" />
                <circle cx="30" cy="30" r="20" stroke="rgba(138,0,41,0.1)" strokeWidth="1" />
            </svg>

            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.55 }}
                    className="text-center mb-14"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-10 h-px" style={{ background: "rgba(138,0,41,0.2)" }} />
                        <div className="w-8 h-[2px]" style={{ background: "#8A0029" }} />
                        <div className="w-10 h-px" style={{ background: "rgba(138,0,41,0.2)" }} />
                    </div>
                    <h2 className="font-black tracking-tight mb-3"
                        style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#262626" }}>
                        {t('testimonialsTitle')} <span style={{ color: "#8A0029" }}>{t('testimonialsTitleAccent')}</span>
                    </h2>
                    <p className="text-sm" style={{ fontFamily: "var(--font-poppins)", color: "#9CA3AF" }}>
                        {t('testimonialsSubtitle')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {TESTIMONIALS.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.12, duration: 0.5 }}
                            className="group relative p-8 rounded transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                            style={{ background: "#FFFFFF", border: "1px solid rgba(38,38,38,0.07)" }}
                        >
                            {/* Top accent hover */}
                            <div className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity rounded-t"
                                style={{ background: "#8A0029" }} />

                            <FaQuoteLeft className="text-xl mb-5" style={{ color: "#8A0029" }} />

                            <p className="text-sm leading-relaxed mb-6"
                                style={{ color: "#374151", fontFamily: "var(--font-poppins)" }}>
                                &ldquo;{lang === 'ru' ? item.text_ru : item.text_en}&rdquo;
                            </p>

                            <div className="flex items-center gap-3 pt-5"
                                style={{ borderTop: "1px solid rgba(38,38,38,0.07)" }}>
                                <img src={item.flag} alt={item.country} className="w-7 h-auto rounded-sm shadow-sm" loading="lazy" />
                                <div>
                                    <p className="font-black text-xs"
                                        style={{ color: "#262626", fontFamily: "var(--font-inter)" }}>
                                        {item.name}
                                    </p>
                                    <p className="text-[11px] mt-0.5"
                                        style={{ color: "#9CA3AF", fontFamily: "var(--font-poppins)" }}>
                                        {lang === 'ru' ? item.role_ru : item.role_en}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
