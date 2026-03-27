'use client'

import { motion } from "framer-motion"
import Container from "@/components/container"
import Image from "next/image"
import { useLanguage } from "@/context/language"
import { FiShield, FiGlobe, FiUsers, FiAward, FiTarget, FiHeart, FiStar, FiTrendingUp } from "react-icons/fi"
import { DotGrid, Crosshair, CornerOrnament, FlowLine, GlobeWireframe, CircuitLines, GeometricFrame } from "@/components/decorators/SVGDecorations"

const GLOBAL_STATS = [
    { value: "500+", labelEn: "Workers Deployed", labelRu: "Трудоустроено специалистов", accent: "#8E0935" },
    { value: "10+", labelEn: "Years Experience", labelRu: "Лет опыта", accent: "#BC264B" },
    { value: "50+", labelEn: "Global Partners", labelRu: "Глобальных партнёров", accent: "#8E0935" },
    { value: "100%", labelEn: "Compliance Rate", labelRu: "Соответствие требованиям", accent: "#BC264B" },
]

const MISSION_VISION = [
    {
        icon: FiTarget,
        titleEn: "Our Mission", titleRu: "Наша миссия",
        descEn: "As a dedicated HR service provider, we steer our efforts to inspire individuals and organisations for a common goal. Our mission is to provide professional talents and HR services that foster a productive working environment and create a positive impact. We work towards building better connections and a better life in society.",
        descRu: "Как преданный поставщик HR-услуг, мы направляем усилия на вдохновение людей и организаций для общей цели. Наша миссия — предоставить профессиональные таланты и HR-услуги, которые создают продуктивную рабочую среду.",
    },
    {
        icon: FiGlobe,
        titleEn: "Our Vision", titleRu: "Наше видение",
        descEn: "We envision to emerge as the world's leading provider of HR solutions by scaling our expertise and driving value to organizations. While committed to quality services, we ensure to deliver them with alacrity. We intend to shape our business through our core strengths of integrity and collaboration.",
        descRu: "Мы стремимся стать ведущим мировым поставщиком HR-решений, масштабируя наш опыт и создавая ценность для организаций. Мы формируем бизнес через честность и сотрудничество.",
    },
    {
        icon: FiTrendingUp,
        titleEn: "Our Strategy", titleRu: "Наша стратегия",
        descEn: "With the transition in the working environment, Taha Airwaves proposes to rise with this tide of changes by offering exceptional manpower. By integrating the demands of both flexible and skilled workforces, we provide tailored solutions based on industry know-how and cost leadership, nurturing long-term relationships.",
        descRu: "С переходом рабочей среды Taha Airwaves предлагает исключительную рабочую силу, интегрируя потребности гибких и квалифицированных кадров, предоставляя индивидуальные решения.",
    },
]

const CORE_VALUES = [
    { icon: FiShield, titleEn: "Integrity", titleRu: "Честность", descEn: "Transparent processes and ethical recruitment practices at every step.", descRu: "Прозрачные процессы и этичная практика подбора на каждом этапе." },
    { icon: FiStar, titleEn: "Excellence", titleRu: "Совершенство", descEn: "Trade-tested, verified candidates who consistently exceed expectations.", descRu: "Проверенные кандидаты, которые превосходят ожидания." },
    { icon: FiGlobe, titleEn: "Global Reach", titleRu: "Глобальный охват", descEn: "11+ countries served with culturally aware deployment strategies.", descRu: "11+ стран обслужены с учётом культурных особенностей." },
    { icon: FiHeart, titleEn: "People First", titleRu: "Люди прежде всего", descEn: "Treating every candidate and client with dignity and respect.", descRu: "Отношение к каждому кандидату и клиенту с достоинством и уважением." },
]

const INDUSTRIES = [
    { en: "IT & ITes", ru: "ИТ и ИТ-услуги" }, { en: "Non-IT", ru: "Не ИТ" }, { en: "Banking", ru: "Банки" }, { en: "Financial Services", ru: "Финансы" }, { en: "Automobiles", ru: "Автомобили" },
    { en: "Manufacturing", ru: "Производство" }, { en: "Telecommunications", ru: "Телекоммуникации" }, { en: "Construction", ru: "Строительство" }, { en: "Engineering", ru: "Инженерия" },
    { en: "Insurance", ru: "Страхование" }, { en: "Pharmaceuticals", ru: "Фармацевтика" }, { en: "Healthcare", ru: "Здравоохранение" }, { en: "Gems & Jewellery", ru: "Драгоценности" },
    { en: "Oil and Gas", ru: "Нефть и газ" }, { en: "Restaurant & Hotel", ru: "Рестораны и отели" }, { en: "Logistics", ru: "Логистика" }, { en: "Facility Management", ru: "Управление объектами" },
]

const GLOBAL_PRESENCE = [
    {
        country: "India (HQ)", flag: "🇮🇳",
        address: "71A, 3rd Floor, New Friends Colony, New Delhi 110025",
        phone: "+91 93152 26961", email: "info@tahaairwaves.com",
        details: ["New Delhi Head Office", "Noida Branch Office", "MEA Licensed (RA)"],
        details_ru: ["Главный офис в Нью-Дели", "Филиал в Ноиде", "Лицензия MEA (RA)"]
    },
    {
        country: "Russia", flag: "🇷🇺",
        address: "Moscow, Russian Federation",
        phone: "+7 985 074-88-28", email: "info@tahaairwaves.ru",
        details: ["Moscow Representative Office", "500+ Workers Deployed", "Construction, Manufacturing, Oil & Gas"],
        details_ru: ["Представительство в Москве", "500+ работников размещено", "Строительство, производство, нефть и газ"]
    },
    {
        country: "UAE / GCC", flag: "🇦🇪",
        address: "Dubai, United Arab Emirates",
        phone: "+91 93152 26961", email: "info@tahaairwaves.com",
        details: ["GCC Region Coverage", "UAE, Saudi, Oman, Kuwait, Qatar", "Hospitality & Construction", "Trusted Partner"],
        details_ru: ["Покрытие региона GCC", "ОАЭ, Саудовская Аравия, Оман, Кувейт, Катар", "Гостиницы и строительство", "Надёжный партнёр"]
    },
]

const COUNTRIES_SERVED = [
    { name: "Russia", name_ru: "Россия", flag: "🇷🇺" }, { name: "Kazakhstan", name_ru: "Казахстан", flag: "🇰🇿" },
    { name: "UAE", name_ru: "ОАЭ", flag: "🇦🇪" }, { name: "Saudi Arabia", name_ru: "Саудовская Аравия", flag: "🇸🇦" },
    { name: "Oman", name_ru: "Оман", flag: "🇴🇲" }, { name: "Kuwait", name_ru: "Кувейт", flag: "🇰🇼" },
    { name: "Qatar", name_ru: "Катар", flag: "🇶🇦" }, { name: "Bahrain", name_ru: "Бахрейн", flag: "🇧🇭" },
    { name: "Malaysia", name_ru: "Малайзия", flag: "🇲🇾" }, { name: "Singapore", name_ru: "Сингапур", flag: "🇸🇬" },
    { name: "Maldives", name_ru: "Мальдивы", flag: "🇲🇻" },
]

export default function AboutMain() {
    const { lang } = useLanguage()

    return (
        <>
            {/* Hero Banner Section */}
            <section className="relative h-[55vh] min-h-[420px] flex items-end overflow-hidden"
                style={{ background: "#1A1A1A" }}>
                <div className="absolute inset-0">
                    <Image src="/images/about-story.png" alt="About Taha Airwaves" fill
                        className="object-cover" priority />
                    <div className="absolute inset-0"
                        style={{ background: "linear-gradient(to bottom, rgba(26,26,26,0.4) 0%, rgba(26,26,26,0.8) 60%, #1A1A1A 100%)" }} />
                </div>

                <GlobeWireframe size={350} color="#FDFBEF" accentColor="#BC264B" opacity={0.03} className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 hidden lg:block" />
                <CornerOrnament size={60} color="#BC264B" position="top-left" className="absolute top-8 left-8 opacity-20 hidden lg:block" />
                <DotGrid rows={4} cols={4} color="#FDFBEF" opacity={0.04} spacing={20} className="absolute top-8 right-8 hidden lg:block" />

                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative z-10 pb-12"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <FlowLine width={40} height={2} color="#BC264B" />
                            <span className="text-sm tracking-[0.2em] uppercase font-bold"
                                style={{ color: "#BC264B", fontFamily: "var(--font-inter)" }}>
                                {lang === 'ru' ? 'О нас' : 'About Us'}
                            </span>
                        </div>
                        <h1 className="font-black tracking-tight mb-4"
                            style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#FDFBEF" }}>
                            {lang === 'ru'
                                ? <>{`Распределение кадров `}<br /><span style={{ color: "#BC264B" }}>{`по всему миру`}</span></>
                                : <>{`Global Workforce `}<br /><span style={{ color: "#BC264B" }}>{`Deployment Experts`}</span></>
                            }
                        </h1>
                        <p className="max-w-xl text-base leading-relaxed"
                            style={{ color: "rgba(253,251,239,0.55)", fontFamily: "var(--font-poppins)" }}>
                            {lang === 'ru'
                                ? 'Taha Airwaves Private Limited — государственное лицензированное агентство по подбору персонала, работающее с 2015 года. Операции в России с 2022 года.'
                                : 'Taha Airwaves Private Limited — a government-licensed manpower recruitment agency, operating since 2015. Serving the Russian market since 2022.'
                            }
                        </p>
                    </motion.div>
                </Container>
            </section>

            {/* Our Story */}
            <section className="py-20 relative overflow-hidden" style={{ background: "#FDFBEF" }}>
                <Crosshair size={100} color="#8E0935" accentColor="#BC264B" opacity={0.03} className="absolute top-16 right-12 hidden lg:block" />
                <CircuitLines width={280} height={80} color="#8E0935" opacity={0.02} className="absolute bottom-20 left-0 hidden lg:block" />

                <Container>
                    <div className="space-y-20">
                        {/* Story text */}
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="max-w-4xl"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <FlowLine width={32} height={2} color="#8E0935" />
                                <span className="text-sm tracking-[0.2em] uppercase font-bold"
                                    style={{ color: "#BC264B", fontFamily: "var(--font-inter)" }}>
                                    {lang === 'ru' ? 'Наша история' : 'Our Story'}
                                </span>
                            </div>
                            <h2 className="font-black tracking-tight mb-6"
                                style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "#1A1A1A" }}>
                                {lang === 'ru'
                                    ? <>{`Надёжный кадровый `}<span style={{ color: "#8E0935" }}>{`партнёр`}</span></>
                                    : <>{`A Trusted Manpower `}<span style={{ color: "#8E0935" }}>{`Partner`}</span></>
                                }
                            </h2>
                            <div className="space-y-5">
                                <p className="text-base leading-relaxed"
                                    style={{ color: "#4B5563", fontFamily: "var(--font-poppins)" }}>
                                    {lang === 'ru'
                                        ? 'Taha Airwaves Private Limited — признанная консалтинговая компания по аутсорсингу рабочей силы в Нью-Дели, цель которой — предоставить комплексные HR-решения для организаций и частных лиц. Управляя различными процессами подбора персонала и помогая вам связаться с подходящими талантами, мы доказали свою компетентность в множестве отраслей.'
                                        : 'A well-established manpower outsourcing consultancy in New Delhi, Taha Airwaves Private Limited aims to provide comprehensive HR solutions for organizations and individuals alike. By managing the various processes of recruitment and helping you to connect with the apt talents, we have proved our competence in multiple segments of the industry.'
                                    }
                                </p>
                                <p className="text-base leading-relaxed"
                                    style={{ color: "#4B5563", fontFamily: "var(--font-poppins)" }}>
                                    {lang === 'ru'
                                        ? 'Мы основали компанию с целью преодолеть разрыв между работодателями и сотрудниками. Как успешное агентство по трудоустройству и подбору персонала, мы обеспечиваем качественные услуги по поиску нужных людей на нужные места в нужное время в Индии и за рубежом.'
                                        : 'We incepted our company with the objective to bridge the demand gap between employers and employees. As an accomplished placement and recruitment agency, we rely on delivering quality services of procuring the right people for the right roles at the right time anywhere in India and abroad.'
                                    }
                                </p>
                                <p className="text-base leading-relaxed"
                                    style={{ color: "#4B5563", fontFamily: "var(--font-poppins)" }}>
                                    {lang === 'ru'
                                        ? 'Наша лицензия RA (B-3260/DEL/COM/100/5/11259/2025) является доказательством нашего соответствия индийским эмиграционным законам и нашей приверженности этичной практике подбора персонала. Мы предлагаем широкий спектр услуг — от отбора, собеседований и подбора до проведения всех видов обучения сотрудников.'
                                        : 'Our RA License (B-3260/DEL/COM/100/5/11259/2025) stands as proof of our compliance with Indian emigration laws and our commitment to ethical recruitment practices. We offer a wide range of services from selecting, interviewing, recruiting and imparting all types of training to the employees.'
                                    }
                                </p>
                            </div>
                        </motion.div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                            {GLOBAL_STATS.map((s, i) => (
                                <motion.div key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group p-7 rounded-lg text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                                    style={{ background: "white", border: "1px solid rgba(142,9,53,0.06)" }}>
                                    <p className="text-4xl lg:text-5xl font-black mb-2"
                                        style={{ color: s.accent, fontFamily: "var(--font-inter)" }}>{s.value}</p>
                                    <p className="text-sm uppercase tracking-wide font-bold"
                                        style={{ color: "#9CA3AF", fontFamily: "var(--font-inter)" }}>
                                        {lang === 'ru' ? s.labelRu : s.labelEn}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Mission, Vision, Strategy */}
            <section className="py-20 relative overflow-hidden" style={{ background: "#1A1A1A" }}>
                <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: "#8E0935" }} />
                <GlobeWireframe size={400} color="#FDFBEF" accentColor="#BC264B" opacity={0.03} className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 hidden lg:block" />

                <Container>
                    <div className="flex items-center gap-3 mb-4">
                        <FlowLine width={40} height={2} color="#BC264B" />
                        <span className="text-sm tracking-[0.2em] uppercase font-bold"
                            style={{ color: "#BC264B", fontFamily: "var(--font-inter)" }}>
                            {lang === 'ru' ? 'Что нами движет' : 'What Drives Us'}
                        </span>
                    </div>
                    <h2 className="font-black tracking-tight mb-12"
                        style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "#FDFBEF" }}>
                        {lang === 'ru'
                            ? <>{`Наша миссия, видение и `}<span style={{ color: "#BC264B" }}>{`стратегия`}</span></>
                            : <>{`Our mission, vision, and `}<span style={{ color: "#BC264B" }}>{`strategy`}</span></>
                        }
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {MISSION_VISION.map((item, i) => {
                            const Icon = item.icon
                            return (
                                <motion.div key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.12 }}
                                    className="group relative p-8 rounded-xl transition-all duration-300 hover:-translate-y-1"
                                    style={{ background: "rgba(253,251,239,0.04)", border: "1px solid rgba(253,251,239,0.08)" }}>
                                    <div className="absolute top-0 left-0 right-0 h-1 rounded-t-xl opacity-30 group-hover:opacity-100 transition-opacity"
                                        style={{ background: i % 2 === 0 ? "#8E0935" : "#BC264B" }} />
                                    <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                                        style={{ background: i % 2 === 0 ? "#8E0935" : "#BC264B" }}>
                                        <Icon size={24} color="#FDFBEF" />
                                    </div>
                                    <h3 className="font-black text-lg mb-4 transition-colors group-hover:text-[#BC264B]"
                                        style={{ fontFamily: "var(--font-inter)", color: "#FDFBEF" }}>
                                        {lang === 'ru' ? item.titleRu : item.titleEn}
                                    </h3>
                                    <p className="text-base leading-relaxed"
                                        style={{ fontFamily: "var(--font-poppins)", color: "rgba(253,251,239,0.45)" }}>
                                        {lang === 'ru' ? item.descRu : item.descEn}
                                    </p>
                                </motion.div>
                            )
                        })}
                    </div>
                </Container>
            </section>

            {/* Core Values */}
            <section className="py-20 relative overflow-hidden" style={{ background: "#FDFBEF" }}>
                <CornerOrnament size={40} color="#BC264B" position="top-left" className="absolute top-8 left-8 opacity-10 hidden lg:block" />
                <DotGrid rows={4} cols={4} color="#8E0935" opacity={0.03} spacing={22} className="absolute bottom-10 right-10 hidden lg:block" />

                <Container>
                    <div className="flex items-center gap-3 mb-4">
                        <FlowLine width={32} height={2} color="#8E0935" />
                        <span className="text-sm tracking-[0.2em] uppercase font-bold"
                            style={{ color: "#BC264B", fontFamily: "var(--font-inter)" }}>
                            {lang === 'ru' ? 'Основные ценности' : 'Core Values'}
                        </span>
                    </div>
                    <h2 className="font-black tracking-tight mb-4"
                        style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "#1A1A1A" }}>
                        {lang === 'ru'
                            ? <>{`Принципы, которые определяют каждое наше `}<span style={{ color: "#8E0935" }}>{`решение`}</span></>
                            : <>{`The principles that drive every `}<span style={{ color: "#8E0935" }}>{`placement`}</span></>
                        }
                    </h2>
                    <p className="text-base leading-relaxed max-w-2xl mb-12"
                        style={{ color: "#6B7280", fontFamily: "var(--font-poppins)" }}>
                        {lang === 'ru'
                            ? 'Наши основные ценности направляют каждое размещение, которое мы делаем'
                            : 'Our core values guide every decision and every placement we make'
                        }
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {CORE_VALUES.map((v, i) => {
                            const Icon = v.icon
                            return (
                                <motion.div key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group relative p-8 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                                    style={{ background: "white", border: "1px solid rgba(142,9,53,0.06)" }}>
                                    <div className="absolute top-0 left-0 right-0 h-1 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity"
                                        style={{ background: i % 2 === 0 ? "#8E0935" : "#BC264B" }} />
                                    <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                                        style={{ background: i % 2 === 0 ? "#8E0935" : "#BC264B" }}>
                                        <Icon size={22} color="#FDFBEF" />
                                    </div>
                                    <h3 className="font-black text-base uppercase tracking-wide mb-3 transition-colors group-hover:text-[#8E0935]"
                                        style={{ fontFamily: "var(--font-inter)", color: "#1A1A1A" }}>
                                        {lang === 'ru' ? v.titleRu : v.titleEn}
                                    </h3>
                                    <p className="text-base leading-relaxed"
                                        style={{ fontFamily: "var(--font-poppins)", color: "#6B7280" }}>
                                        {lang === 'ru' ? v.descRu : v.descEn}
                                    </p>
                                </motion.div>
                            )
                        })}
                    </div>
                </Container>
            </section>

            {/* Industries We Cover */}
            <section className="py-16 relative overflow-hidden" style={{ background: "white" }}>
                <Container>
                    <div className="flex items-center gap-3 mb-4">
                        <FlowLine width={32} height={2} color="#8E0935" />
                        <span className="text-sm tracking-[0.2em] uppercase font-bold"
                            style={{ color: "#BC264B", fontFamily: "var(--font-inter)" }}>
                            {lang === 'ru' ? 'Отрасли' : 'Industries'}
                        </span>
                    </div>
                    <h2 className="font-black tracking-tight mb-4"
                        style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "#1A1A1A" }}>
                        {lang === 'ru'
                            ? <>{`Отрасли, которые мы `}<span style={{ color: "#8E0935" }}>{`обслуживаем`}</span></>
                            : <>{`Industries We `}<span style={{ color: "#8E0935" }}>{`Cover`}</span></>
                        }
                    </h2>
                    <p className="text-base leading-relaxed max-w-2xl mb-10"
                        style={{ color: "#6B7280", fontFamily: "var(--font-poppins)" }}>
                        {lang === 'ru'
                            ? 'Наша экспертиза охватывает разнообразные секторы экономики'
                            : 'Our manpower consultancy expertise spans across diverse sectors'
                        }
                    </p>

                    <div className="flex flex-wrap gap-3">
                        {INDUSTRIES.map((ind, i) => (
                            <motion.span
                                key={ind.en}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.03 }}
                                className="px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md cursor-default"
                                style={{
                                    background: i % 3 === 0 ? "rgba(142,9,53,0.06)" : i % 3 === 1 ? "rgba(188,38,75,0.06)" : "#F9FAFB",
                                    color: i % 3 === 0 ? "#8E0935" : i % 3 === 1 ? "#BC264B" : "#374151",
                                    fontFamily: "var(--font-inter)",
                                    border: "1px solid rgba(142,9,53,0.04)",
                                }}
                            >
                                {lang === 'ru' ? ind.ru : ind.en}
                            </motion.span>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Global Presence */}
            <section className="py-0 relative overflow-hidden">
                <div className="rounded-lg overflow-hidden mx-4 lg:mx-8 mb-16" style={{ background: "#1A1A1A" }}>
                    <div className="px-10 py-5" style={{ background: "#8E0935" }}>
                        <h2 className="font-black text-xl lg:text-2xl"
                            style={{ fontFamily: "var(--font-inter)", color: "#FDFBEF" }}>
                            {lang === 'ru' ? 'Глобальное присутствие' : 'Global Presence'}
                        </h2>
                    </div>
                    <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                        <GlobeWireframe size={300} color="#FDFBEF" accentColor="#BC264B" opacity={0.03} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                        {GLOBAL_PRESENCE.map((p, i) => (
                            <div key={i} className="space-y-3 relative z-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-3xl">{p.flag}</span>
                                    <div>
                                        <h4 className="font-black text-base"
                                            style={{ fontFamily: "var(--font-inter)", color: "#FDFBEF" }}>{p.country}</h4>
                                    </div>
                                </div>
                                {(lang === 'ru' ? p.details_ru : p.details).map((d) => (
                                    <div key={d} className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#BC264B" }} />
                                        <span className="text-sm" style={{ color: "rgba(253,251,239,0.45)", fontFamily: "var(--font-inter)" }}>{d}</span>
                                    </div>
                                ))}
                                <div className="pt-2 space-y-1">
                                    <a href={`mailto:${p.email}`} className="block text-sm hover:text-[#BC264B] transition-colors"
                                        style={{ color: "rgba(253,251,239,0.55)", fontFamily: "var(--font-inter)" }}>✉ {p.email}</a>
                                    <a href={`tel:${p.phone.replace(/[\s()-]/g, '')}`} className="block text-sm hover:text-[#BC264B] transition-colors"
                                        style={{ color: "rgba(253,251,239,0.55)", fontFamily: "var(--font-inter)" }}>☎ {p.phone}</a>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Countries We Serve */}
                    <div className="px-10 py-8" style={{ borderTop: "1px solid rgba(253,251,239,0.06)" }}>
                        <p className="text-xs uppercase tracking-widest mb-4"
                            style={{ color: "#BC264B", fontFamily: "var(--font-inter)" }}>
                            {lang === 'ru' ? 'Страны, где мы работаем' : 'Countries We Serve'}
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {COUNTRIES_SERVED.map((c) => (
                                <span key={c.name} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-sm"
                                    style={{ background: "rgba(253,251,239,0.06)", color: "rgba(253,251,239,0.55)", fontFamily: "var(--font-inter)" }}>
                                    {c.flag} {lang === 'ru' ? c.name_ru : c.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* License + Global Website */}
                    <div className="px-10 py-8" style={{ borderTop: "1px solid rgba(253,251,239,0.06)" }}>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {[
                                { label: lang === 'ru' ? 'Название компании' : 'Company', value: 'Taha Airwaves Private Limited' },
                                { label: lang === 'ru' ? 'Лицензия RA' : 'RA License', value: 'B-3260/DEL/COM/100/5/11259/2025' },
                                { label: lang === 'ru' ? 'Главный офис' : 'Head Office', value: '71A, 3rd Floor, New Friends Colony, New Delhi 110025' },
                                { label: lang === 'ru' ? 'Глобальный сайт' : 'Global Website', value: 'tahaairwaves.com', isLink: true },
                            ].map((item, i) => (
                                <div key={i}>
                                    <p className="text-xs uppercase tracking-widest mb-1.5"
                                        style={{ color: "#BC264B", fontFamily: "var(--font-inter)" }}>{item.label}</p>
                                    {item.isLink ? (
                                        <a href="https://tahaairwaves.com" target="_blank" rel="noopener noreferrer"
                                            className="text-base font-semibold hover:text-[#BC264B] transition-colors"
                                            style={{ color: "rgba(253,251,239,0.7)", fontFamily: "var(--font-inter)" }}>
                                            {item.value} ↗
                                        </a>
                                    ) : (
                                        <p className="text-base font-semibold"
                                            style={{ color: "rgba(253,251,239,0.7)", fontFamily: "var(--font-inter)" }}>{item.value}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
