'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMessageCircle, FiX } from 'react-icons/fi'
import { useLanguage } from '@/context/language'

/* ── Predefined FAQ Data ── */
const FAQ_DATA = {
    ru: [
        {
            question: 'Какие услуги вы предлагаете?',
            answer: 'Мы предоставляем полный спектр кадровых услуг:\n\n• **Подбор квалифицированных рабочих** из Индии, Непала и Индонезии\n• **Аутсорсинг персонала** — водители, уборщики, заводские рабочие, техники\n• **Визовая поддержка** и оформление документов\n• **Обучение и адаптация** сотрудников\n• **Консалтинг по трудовому законодательству** РФ\n\nСвяжитесь с нами: info@tahaairwaves.ru'
        },
        {
            question: 'Как быстро происходит трудоустройство?',
            answer: 'Сроки зависят от объёма и специализации:\n\n• **Стандартный набор:** 30–45 дней\n• **Срочный набор:** 15–20 дней\n• **Массовый подбор (50+ человек):** 45–60 дней\n\nМы берём на себя весь процесс — от отбора и собеседований до оформления виз и перелёта.'
        },
        {
            question: 'В какие страны вы осуществляете набор?',
            answer: 'Мы работаем в **11+ странах**, включая:\n\n🇷🇺 **Россия** (основное направление)\n🇸🇦 Саудовская Аравия\n🇦🇪 ОАЭ\n🇶🇦 Катар\n🇰🇼 Кувейт\n🇴🇲 Оман\n🇧🇭 Бахрейн\n🇲🇾 Малайзия\n🇸🇬 Сингапур\n\nНаш офис в Москве: Инновационный центр Сколково, ул. Малевича, 2к4'
        },
        {
            question: 'Хочу нанять работников',
            answer: 'Отлично! Для начала работы нам потребуется:\n\n1. **Количество работников** и их специализация\n2. **Сроки** — когда нужен персонал\n3. **Условия работы** — город, проживание, зарплата\n\n📞 Позвоните: **+7 985 074-88-28**\n📧 Или напишите: **info@tahaairwaves.ru**\n💬 WhatsApp: [Написать](https://wa.me/qr/TKSOMEYZZW2CN1)\n💬 Telegram: [@tahaairwaves](https://t.me/tahaairwaves)'
        },
        {
            question: 'Какие документы нужны для работы в России?',
            answer: 'Для легального трудоустройства в РФ необходимы:\n\n• **Рабочая виза** — мы помогаем с оформлением\n• **Разрешение на работу** — оформляем через ФМС\n• **Медицинская справка** — организуем мед. осмотр\n• **Перевод документов** — заверенный нотариально\n\nНаша компания **TAHA AIRWAVES RUS LLC** (ОГРН: 1217700215149) полностью лицензирована для работы в России.'
        },
        {
            question: 'Где находятся ваши офисы?',
            answer: '📍 **Москва, Россия** (Главный офис в РФ)\nСколково, ул. Малевича, 2к4\n\n📍 **Нью-Дели, Индия** (Головной офис)\n71A, 3-й этаж, блок A, Таймур Нагар\n\n📍 **Нойда, Индия**\nBhutani Alphathum, Tower C, 2-й этаж\n\n📍 **Джидда, Саудовская Аравия**\n📍 **Дубай, ОАЭ**\n\nПосетите страницу [Контакты](/contact) для подробной информации.'
        },
        {
            question: 'Какие отрасли вы обслуживаете?',
            answer: 'Мы подбираем персонал для различных отраслей:\n\n🏗️ **Строительство** — рабочие, прорабы, сварщики\n🏭 **Производство** — операторы, техники\n🚗 **Автомобильная** — механики, водители\n🏥 **Здравоохранение** — медперсонал\n🍽️ **Гостиничный бизнес** — повара, обслуживающий персонал\n⛽ **Нефть и газ** — инженеры, технические специалисты\n📦 **Логистика** — грузчики, складские работники\n\nИ многие другие — свяжитесь с нами для уточнения!'
        },
    ],
    en: [
        {
            question: 'What services do you offer?',
            answer: 'We provide comprehensive manpower solutions:\n\n• **Skilled & semi-skilled workforce** from India, Nepal & Indonesia\n• **Staff outsourcing** — drivers, cleaners, factory workers, technicians\n• **Visa & documentation** support\n• **Training & onboarding** of employees\n• **Russian labor law consulting**\n\nContact us: info@tahaairwaves.ru'
        },
        {
            question: 'How fast is deployment?',
            answer: 'Timelines depend on scale and specialization:\n\n• **Standard recruitment:** 30–45 days\n• **Urgent recruitment:** 15–20 days\n• **Bulk hiring (50+ workers):** 45–60 days\n\nWe handle the entire process — from selection and interviews to visa processing and travel.'
        },
        {
            question: 'Which countries do you serve?',
            answer: 'We operate in **11+ countries**, including:\n\n🇷🇺 **Russia** (primary market)\n🇸🇦 Saudi Arabia\n🇦🇪 UAE\n🇶🇦 Qatar\n🇰🇼 Kuwait\n🇴🇲 Oman\n🇧🇭 Bahrain\n🇲🇾 Malaysia\n🇸🇬 Singapore\n\nOur Moscow office: Skolkovo Innovation Center, Malevicha St, 2k4'
        },
        {
            question: 'I want to hire workers',
            answer: 'Great! To get started, we need:\n\n1. **Number of workers** and their specialization\n2. **Timeline** — when you need them\n3. **Work conditions** — city, accommodation, salary\n\n📞 Call: **+7 985 074-88-28**\n📧 Email: **info@tahaairwaves.ru**\n💬 WhatsApp: [Message us](https://wa.me/qr/TKSOMEYZZW2CN1)\n💬 Telegram: [@tahaairwaves](https://t.me/tahaairwaves)'
        },
        {
            question: 'What documents are needed to work in Russia?',
            answer: 'For legal employment in Russia you need:\n\n• **Work visa** — we assist with processing\n• **Work permit** — we arrange through FMS\n• **Medical certificate** — we organize the checkup\n• **Document translation** — notarized\n\nOur company **TAHA AIRWAVES RUS LLC** (OGRN: 1217700215149) is fully licensed to operate in Russia.'
        },
        {
            question: 'Where are your offices?',
            answer: '📍 **Moscow, Russia** (Main RU office)\nSkolkovo, Malevicha St, 2k4\n\n📍 **New Delhi, India** (Head Office)\n71A, 3rd Floor, Block A, Taimoor Nagar\n\n📍 **Noida, India**\nBhutani Alphathum, Tower C, 2nd Floor\n\n📍 **Jeddah, Saudi Arabia**\n📍 **Dubai, UAE**\n\nVisit our [Contact page](/contact) for details.'
        },
        {
            question: 'What industries do you serve?',
            answer: 'We recruit for various industries:\n\n🏗️ **Construction** — workers, foremen, welders\n🏭 **Manufacturing** — operators, technicians\n🚗 **Automotive** — mechanics, drivers\n🏥 **Healthcare** — medical staff\n🍽️ **Hospitality** — chefs, service staff\n⛽ **Oil & Gas** — engineers, technical specialists\n📦 **Logistics** — loaders, warehouse workers\n\nAnd many more — contact us for specifics!'
        },
    ]
}

function renderMarkdown(text) {
    if (!text) return ''
    let html = text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" style="color:#8E0935;text-decoration:underline">$1</a>')
        .replace(/^- (.*)/gm, '<li>$1</li>')
        .replace(/^\• (.*)/gm, '<li>$1</li>')
        .replace(/\n\n/g, '<br/><br/>')
        .replace(/\n/g, '<br/>')
    html = html.replace(/(<li>.*?<\/li>(\s*<br\/>)?)+/gs, (match) => '<ul style="padding-left:1rem;margin:4px 0">' + match.replace(/<br\/>/g, '') + '</ul>')
    return html
}

export default function Chatbot() {
    const { t, lang } = useLanguage()
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState([])
    const [showQuestions, setShowQuestions] = useState(true)
    const endRef = useRef(null)

    const faqs = FAQ_DATA[lang] || FAQ_DATA.ru

    useEffect(() => {
        setMessages([{
            role: 'assistant',
            content: lang === 'ru'
                ? 'Здравствуйте! 👋 Я ассистент Taha Airwaves. Выберите вопрос ниже, и я отвечу на него.'
                : 'Hello! 👋 I\'m the Taha Airwaves assistant. Select a question below and I\'ll answer it.'
        }])
        setShowQuestions(true)
    }, [lang])

    useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [messages, showQuestions])

    const handleQuestionClick = (faq) => {
        const userMsg = { role: 'user', content: faq.question }
        const botMsg = { role: 'assistant', content: faq.answer }
        setMessages(prev => [...prev, userMsg, botMsg])
        setShowQuestions(false)
    }

    const handleAskMore = () => {
        setMessages(prev => [...prev, {
            role: 'assistant',
            content: lang === 'ru'
                ? 'Чем ещё могу помочь? Выберите вопрос:'
                : 'What else can I help with? Select a question:'
        }])
        setShowQuestions(true)
    }

    return (
        <>
            {/* Tooltip */}
            {!isOpen && (
                <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="fixed bottom-8 right-20 z-50 px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer shadow-md whitespace-nowrap"
                    style={{ background: '#1a0a10', color: '#FDFBEF', fontFamily: 'var(--font-inter)' }}
                    onClick={() => setIsOpen(true)}
                >
                    {lang === 'ru' ? '💬 Есть вопросы?' : '💬 Have questions?'}
                </motion.div>
            )}

            {/* Toggle Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center text-xl text-white shadow-lg cursor-pointer"
                style={{ background: '#8E0935' }}
                aria-label={isOpen ? 'Close chat' : 'Open chat'}
            >
                {isOpen ? <FiX /> : <FiMessageCircle />}
                {!isOpen && <span className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ background: '#BC264B' }} />}
            </motion.button>

            {/* Chat Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.25 }}
                        className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] rounded-2xl overflow-hidden shadow-2xl flex flex-col"
                        style={{ maxHeight: '520px', border: '1px solid rgba(142,9,53,0.15)', background: '#FDFBEF' }}
                        onWheel={e => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="p-4 flex items-center gap-3" style={{ background: '#8E0935' }}>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                            <div className="flex-1">
                                <div className="text-sm font-bold" style={{ color: '#FDFBEF', fontFamily: 'var(--font-inter)' }}>Taha Airwaves</div>
                                <div className="text-xs" style={{ color: 'rgba(253,251,239,0.6)', fontFamily: 'var(--font-inter)' }}>
                                    {lang === 'ru' ? 'Ассистент' : 'Assistant'}
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white cursor-pointer"><FiX /></button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ maxHeight: '340px', overscrollBehavior: 'contain', touchAction: 'pan-y' }}
                            onWheel={e => e.stopPropagation()}
                        >
                            {messages.map((m, i) => (
                                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className="max-w-[85%] px-4 py-2.5 rounded-2xl text-sm" style={{
                                        background: m.role === 'user' ? '#8E0935' : '#fff',
                                        color: m.role === 'user' ? '#FDFBEF' : '#374151',
                                        fontFamily: 'var(--font-poppins)',
                                        border: m.role === 'user' ? 'none' : '1px solid rgba(142,9,53,0.1)',
                                    }}>
                                        {m.role === 'assistant'
                                            ? <span dangerouslySetInnerHTML={{ __html: renderMarkdown(m.content) }} />
                                            : m.content}
                                    </div>
                                </div>
                            ))}

                            {/* Question Buttons */}
                            {showQuestions && (
                                <div className="flex flex-col gap-2 pt-1">
                                    {faqs.map((faq, i) => (
                                        <button key={i}
                                            onClick={() => handleQuestionClick(faq)}
                                            className="text-left px-3 py-2 rounded-xl text-xs font-medium cursor-pointer transition-all duration-200 hover:scale-[1.02]"
                                            style={{
                                                background: 'rgba(142,9,53,0.06)',
                                                color: '#8E0935',
                                                border: '1px solid rgba(142,9,53,0.1)',
                                                fontFamily: 'var(--font-inter)',
                                            }}
                                        >
                                            {faq.question}
                                        </button>
                                    ))}
                                </div>
                            )}

                            {/* Ask More button */}
                            {!showQuestions && (
                                <div className="flex justify-center pt-2">
                                    <button
                                        onClick={handleAskMore}
                                        className="px-4 py-2 rounded-full text-xs font-bold cursor-pointer transition-all duration-200 hover:scale-105"
                                        style={{
                                            background: '#8E0935',
                                            color: '#FDFBEF',
                                            fontFamily: 'var(--font-inter)',
                                        }}
                                    >
                                        {lang === 'ru' ? '❓ Задать ещё вопрос' : '❓ Ask another question'}
                                    </button>
                                </div>
                            )}

                            <div ref={endRef} />
                        </div>

                        {/* Bottom info bar (replaces text input) */}
                        <div className="p-3 flex items-center justify-center gap-2" style={{ borderTop: '1px solid rgba(142,9,53,0.08)', background: 'rgba(142,9,53,0.02)' }}>
                            <span className="text-[10px]" style={{ color: '#9CA3AF', fontFamily: 'var(--font-inter)' }}>
                                {lang === 'ru' ? 'Нужна помощь? Звоните:' : 'Need help? Call:'}
                            </span>
                            <a href="tel:+79850748828" className="text-[11px] font-bold" style={{ color: '#8E0935', fontFamily: 'var(--font-inter)' }}>
                                +7 985 074-88-28
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
