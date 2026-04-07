'use client'

import { useState, useRef } from "react"
import { useLanguage } from "@/context/language"

/* ── Service-based job positions (matches the services page categories) ── */
const jobPositions = [
    { valueEn: 'Cleaners & Housekeeping', valueRu: 'Уборка и хозяйственное обслуживание' },
    { valueEn: 'All Types of Drivers', valueRu: 'Все виды водителей' },
    { valueEn: 'General Labour', valueRu: 'Разнорабочие' },
    { valueEn: 'Loading & Unloading', valueRu: 'Погрузчики-разгрузчики' },
    { valueEn: 'Factory Helpers', valueRu: 'Помощники на производстве' },
    { valueEn: 'Barista & Cafe Staff', valueRu: 'Бариста и персонал кафе' },
    { valueEn: 'Packing Workers', valueRu: 'Упаковщики' },
    { valueEn: 'Skilled Technicians', valueRu: 'Квалифицированные техники' },
    { valueEn: 'Emigration & Immigration', valueRu: 'Эмиграционное оформление' },
    { valueEn: 'Document Attestation', valueRu: 'Аттестация документов' },
    { valueEn: 'Employee Outsourcing', valueRu: 'Аутсорсинг персонала' },
]

export default function BasicDetails({ resumeInfo, setResumeInfo, setPage }) {
    const { lang } = useLanguage()
    const [addressSection, setAddressSection] = useState(!!resumeInfo.profile.address)
    const [passportSection, setPassportSection] = useState(
        !!(resumeInfo.profile.passportNumber || resumeInfo.profile.passportExpiry || resumeInfo.profile.nationality)
    )
    const fileInputRef = useRef(null)
    const [dragActive, setDragActive] = useState(false)
    const [showOtherInput, setShowOtherInput] = useState(
        (resumeInfo.profile.applyingFor || []).some(v => !jobPositions.find(p => (lang === 'ru' ? p.valueRu : p.valueEn) === v))
    )
    const [otherText, setOtherText] = useState(() => {
        const known = jobPositions.map(p => lang === 'ru' ? p.valueRu : p.valueEn)
        return (resumeInfo.profile.applyingFor || []).filter(v => !known.includes(v)).join(', ')
    })

    const handleChange = (field, value) => {
        setResumeInfo(prev => ({ ...prev, profile: { ...prev.profile, [field]: value } }))
    }

    /* ── Multi-position toggle ── */
    const togglePosition = (posValue) => {
        const current = resumeInfo.profile.applyingFor || []
        const updated = current.includes(posValue)
            ? current.filter(v => v !== posValue)
            : [...current, posValue]
        handleChange('applyingFor', updated)
    }

    const handleOtherTextChange = (text) => {
        setOtherText(text)
        const known = jobPositions.map(p => lang === 'ru' ? p.valueRu : p.valueEn)
        const currentKnown = (resumeInfo.profile.applyingFor || []).filter(v => known.includes(v))
        const otherValues = text.split(',').map(s => s.trim()).filter(Boolean)
        handleChange('applyingFor', [...currentKnown, ...otherValues])
    }

    /* ── Photo upload ── */
    const handlePhotoUpload = (file) => {
        if (!file || !file.type.startsWith('image/')) return
        const reader = new FileReader()
        reader.onload = (e) => {
            handleChange('photo', e.target.result)
        }
        reader.readAsDataURL(file)
    }

    const handleDrop = (e) => {
        e.preventDefault()
        setDragActive(false)
        if (e.dataTransfer.files?.[0]) {
            handlePhotoUpload(e.dataTransfer.files[0])
        }
    }

    const handleDragOver = (e) => {
        e.preventDefault()
        setDragActive(true)
    }

    const removePhoto = () => {
        handleChange('photo', '')
    }

    /* ── Links management ── */
    const addLink = () => {
        setResumeInfo(prev => ({
            ...prev,
            profile: {
                ...prev.profile,
                links: [...prev.profile.links, { label: "", url: "" }],
            }
        }))
    }

    const updateLink = (idx, key, value) => {
        setResumeInfo(prev => {
            const links = [...prev.profile.links]
            links[idx] = { ...links[idx], [key]: value }
            return { ...prev, profile: { ...prev.profile, links } }
        })
    }

    const removeLink = (idx) => {
        setResumeInfo(prev => ({
            ...prev,
            profile: {
                ...prev.profile,
                links: prev.profile.links.filter((_, i) => i !== idx),
            }
        }))
    }

    const inputFields = [
        { label: lang === 'ru' ? "Имя:" : "First name:", placeholder: lang === 'ru' ? "Ваше имя" : "Your first name", field: "firstname" },
        { label: lang === 'ru' ? "Фамилия:" : "Last name:", placeholder: lang === 'ru' ? "Ваша фамилия" : "Your last name", field: "lastname" },
    ]

    const contactFields = [
        { label: lang === 'ru' ? "Телефон:" : "Phone Number:", type: "tel", placeholder: lang === 'ru' ? "Номер телефона" : "Phone number", field: "phone" },
        { label: lang === 'ru' ? "Эл. почта:" : "Email address:", type: "email", placeholder: lang === 'ru' ? "Ваша электронная почта" : "Your email address", field: "email" },
    ]

    const inputStyle = {
        border: "1px solid rgba(255,255,255,0.12)",
        background: "rgba(255,255,255,0.05)",
        fontFamily: "var(--font-poppins)",
        color: "#FDFBEF",
    }

    return (
        <div className="space-y-6">
            {/* ═══ Photo Upload Section ═══ */}
            <div className="flex flex-col items-center gap-3">
                <label className="text-xs font-semibold"
                    style={{ color: "rgba(253,251,239,0.7)", fontFamily: "var(--font-inter)" }}>
                    {lang === 'ru' ? 'Фото для резюме:' : 'Profile Photo:'}
                </label>
                {resumeInfo.profile.photo ? (
                    <div className="relative group">
                        <div className="w-24 h-24 rounded-full overflow-hidden border-2"
                            style={{ borderColor: "#8A0029" }}>
                            <img src={resumeInfo.profile.photo} alt="Profile"
                                className="w-full h-full object-cover" />
                        </div>
                        <button
                            onClick={removePhoto}
                            className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                            style={{ background: "#D32F2F", color: "#fff" }}>
                            ✕
                        </button>
                    </div>
                ) : (
                    <div
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                        onDragLeave={() => setDragActive(false)}
                        onClick={() => fileInputRef.current?.click()}
                        className="w-full p-5 rounded-xl cursor-pointer transition-all duration-300 flex flex-col items-center gap-2"
                        style={{
                            border: dragActive ? "2px dashed #8A0029" : "2px dashed rgba(255,255,255,0.15)",
                            background: dragActive ? "rgba(138,0,41,0.1)" : "rgba(255,255,255,0.03)",
                        }}
                    >
                        <div className="w-14 h-14 rounded-full flex items-center justify-center"
                            style={{ background: "rgba(138,0,41,0.15)" }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8A0029" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                                <polyline points="17 8 12 3 7 8" />
                                <line x1="12" y1="3" x2="12" y2="15" />
                            </svg>
                        </div>
                        <span className="text-xs font-semibold" style={{ color: "#8A0029", fontFamily: "var(--font-inter)" }}>
                            {lang === 'ru' ? 'Нажмите или перетащите фото' : 'Click or drag photo here'}
                        </span>
                        <span className="text-xs" style={{ color: "rgba(253,251,239,0.35)", fontFamily: "var(--font-poppins)" }}>
                            JPG, PNG — max 5 MB
                        </span>
                    </div>
                )}
                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handlePhotoUpload(e.target.files?.[0])}
                />
            </div>

            {/* ═══ Name Fields ═══ */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {inputFields.map(({ label, placeholder, field }) => (
                    <div key={field} className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold"
                            style={{ color: "rgba(253,251,239,0.7)", fontFamily: "var(--font-inter)" }}>{label}</label>
                        <input type="text"
                            className="px-4 py-2.5 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#8A0029]"
                            placeholder={placeholder}
                            value={resumeInfo.profile[field]}
                            onChange={(e) => handleChange(field, e.target.value)}
                            style={inputStyle} />
                    </div>
                ))}
            </div>

            {/* ═══ Applying For — Multi-Select Positions ═══ */}
            <div className="flex flex-col gap-3">
                <label className="text-xs font-semibold"
                    style={{ color: "rgba(253,251,239,0.7)", fontFamily: "var(--font-inter)" }}>
                    {lang === 'ru' ? 'Подаётся на должность (можно выбрать несколько):' : 'Applying For (select one or more):'}
                </label>
                <div className="flex flex-wrap gap-2">
                    {jobPositions.map((pos, i) => {
                        const val = lang === 'ru' ? pos.valueRu : pos.valueEn
                        const isSelected = (resumeInfo.profile.applyingFor || []).includes(val)
                        return (
                            <button
                                key={i}
                                type="button"
                                onClick={() => togglePosition(val)}
                                className="px-3.5 py-2 rounded-lg text-xs font-semibold cursor-pointer transition-all duration-200"
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    background: isSelected ? "#8A0029" : "rgba(255,255,255,0.05)",
                                    color: isSelected ? "#FDFBEF" : "rgba(253,251,239,0.6)",
                                    border: isSelected ? "1px solid #8A0029" : "1px solid rgba(255,255,255,0.12)",
                                    transform: isSelected ? "scale(1.03)" : "scale(1)",
                                    boxShadow: isSelected ? "0 0 12px rgba(138,0,41,0.3)" : "none",
                                }}
                            >
                                {isSelected && <span className="mr-1.5">✓</span>}
                                {val}
                            </button>
                        )
                    })}
                    {/* Other toggle button */}
                    <button
                        type="button"
                        onClick={() => {
                            setShowOtherInput(!showOtherInput)
                            if (showOtherInput) {
                                // Remove other values when closing
                                const known = jobPositions.map(p => lang === 'ru' ? p.valueRu : p.valueEn)
                                const currentKnown = (resumeInfo.profile.applyingFor || []).filter(v => known.includes(v))
                                handleChange('applyingFor', currentKnown)
                                setOtherText('')
                            }
                        }}
                        className="px-3.5 py-2 rounded-lg text-xs font-semibold cursor-pointer transition-all duration-200"
                        style={{
                            fontFamily: "var(--font-inter)",
                            background: showOtherInput ? "rgba(138,0,41,0.4)" : "rgba(255,255,255,0.05)",
                            color: showOtherInput ? "#FDFBEF" : "rgba(253,251,239,0.6)",
                            border: showOtherInput ? "1px dashed #8A0029" : "1px dashed rgba(255,255,255,0.2)",
                        }}
                    >
                        {showOtherInput ? '✓ ' : '+ '}
                        {lang === 'ru' ? 'Другое' : 'Other'}
                    </button>
                </div>

                {/* Other — custom text input */}
                {showOtherInput && (
                    <input
                        type="text"
                        className="px-4 py-2.5 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#8A0029]"
                        placeholder={lang === 'ru' ? "Укажите свою должность (через запятую для нескольких)" : "Type your position(s), comma-separated"}
                        value={otherText}
                        onChange={(e) => handleOtherTextChange(e.target.value)}
                        style={inputStyle}
                    />
                )}

                {/* Selected count */}
                {(resumeInfo.profile.applyingFor || []).length > 0 && (
                    <p className="text-xs" style={{ color: "#8A0029", fontFamily: "var(--font-poppins)" }}>
                        {lang === 'ru'
                            ? `Выбрано: ${(resumeInfo.profile.applyingFor || []).length} позиций`
                            : `${(resumeInfo.profile.applyingFor || []).length} position(s) selected`}
                    </p>
                )}
            </div>

            {/* ═══ Contact Fields ═══ */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {contactFields.map(({ label, type = "text", placeholder, field }) => (
                    <div key={field} className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold"
                            style={{ color: "rgba(253,251,239,0.7)", fontFamily: "var(--font-inter)" }}>{label}</label>
                        {field === "phone" ? (
                            <div className="flex">
                                <span className="inline-flex items-center px-3 rounded-l-lg text-sm font-bold"
                                    style={{ background: "rgba(138,0,41,0.3)", color: "#FDFBEF", fontFamily: "var(--font-inter)" }}>+</span>
                                <input type={type}
                                    className="flex-1 px-4 py-2.5 rounded-r-lg text-sm outline-none focus:ring-2 focus:ring-[#8A0029]"
                                    placeholder={placeholder}
                                    value={resumeInfo.profile[field]}
                                    onChange={(e) => handleChange(field, e.target.value)}
                                    style={inputStyle} />
                            </div>
                        ) : (
                            <input type={type}
                                className="px-4 py-2.5 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#8A0029]"
                                placeholder={placeholder}
                                value={resumeInfo.profile[field]}
                                onChange={(e) => handleChange(field, e.target.value)}
                                style={inputStyle} />
                        )}
                        {field === "email" && (
                            <p className="text-xs" style={{ color: "rgba(253,251,239,0.35)", fontFamily: "var(--font-poppins)" }}>
                                {lang === 'ru' ? 'Укажите почту для связи по вакансиям' : 'Enter email to get contacted for jobs'}
                            </p>
                        )}
                    </div>
                ))}

                {/* Address */}
                {addressSection && (
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold"
                            style={{ color: "rgba(253,251,239,0.7)", fontFamily: "var(--font-inter)" }}>
                            {lang === 'ru' ? 'Адрес:' : 'Address:'}
                        </label>
                        <input type="text"
                            className="px-4 py-2.5 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#8A0029]"
                            placeholder={lang === 'ru' ? "Город, Страна" : "City, Country"}
                            value={resumeInfo.profile.address}
                            onChange={(e) => handleChange("address", e.target.value)}
                            style={inputStyle} />
                    </div>
                )}
            </div>

            {/* Add Address button */}
            {!addressSection && (
                <button
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold cursor-pointer transition-all duration-200 hover:opacity-90"
                    style={{ background: "rgba(138,0,41,0.2)", color: "#FDFBEF", fontFamily: "var(--font-inter)" }}
                    onClick={() => setAddressSection(true)}>
                    {lang === 'ru' ? '+ Добавить адрес' : '+ Add Address'}
                </button>
            )}

            {/* ═══ Passport Section (optional expandable) ═══ */}
            {!passportSection ? (
                <button
                    className="flex items-center gap-3 w-full px-5 py-3.5 rounded-xl text-sm font-bold cursor-pointer transition-all duration-300 hover:scale-[1.01]"
                    style={{
                        background: "linear-gradient(135deg, rgba(138,0,41,0.15) 0%, rgba(138,0,41,0.08) 100%)",
                        color: "#FDFBEF",
                        fontFamily: "var(--font-inter)",
                        border: "1px dashed rgba(138,0,41,0.35)",
                    }}
                    onClick={() => setPassportSection(true)}>
                    <span className="w-8 h-8 rounded-lg flex items-center justify-center text-base"
                        style={{ background: "rgba(138,0,41,0.25)" }}>
                        🛂
                    </span>
                    <span className="flex flex-col items-start">
                        <span>{lang === 'ru' ? '+ Добавить паспортные данные' : '+ Add Passport Details'}</span>
                        <span className="text-xs font-normal" style={{ color: "rgba(253,251,239,0.4)" }}>
                            {lang === 'ru' ? 'Необязательно — номер паспорта, срок действия' : 'Optional — passport number, expiry, nationality'}
                        </span>
                    </span>
                </button>
            ) : (
                <div className="p-5 rounded-xl space-y-4"
                    style={{ background: "rgba(138,0,41,0.06)", border: "1px solid rgba(138,0,41,0.15)" }}>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <span className="text-base">🛂</span>
                            <span className="text-xs font-bold"
                                style={{ color: "rgba(253,251,239,0.7)", fontFamily: "var(--font-inter)" }}>
                                {lang === 'ru' ? 'Паспортные данные' : 'Passport Details'}
                            </span>
                        </div>
                        <button
                            onClick={() => {
                                setPassportSection(false)
                                handleChange("passportNumber", "")
                                handleChange("passportExpiry", "")
                                handleChange("nationality", "")
                                handleChange("placeOfIssue", "")
                            }}
                            className="text-xs px-2 py-1 rounded cursor-pointer hover:opacity-80"
                            style={{ background: "rgba(211,47,47,0.3)", color: "#FDFBEF" }}>
                            {lang === 'ru' ? 'Удалить' : 'Remove'}
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-semibold"
                                style={{ color: "rgba(253,251,239,0.7)", fontFamily: "var(--font-inter)" }}>
                                {lang === 'ru' ? 'Номер паспорта:' : 'Passport Number:'}
                            </label>
                            <input type="text"
                                className="px-4 py-2.5 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#8A0029]"
                                placeholder={lang === 'ru' ? "Номер паспорта" : "e.g. A12345678"}
                                value={resumeInfo.profile.passportNumber || ""}
                                onChange={(e) => handleChange("passportNumber", e.target.value)}
                                style={inputStyle} />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-semibold"
                                style={{ color: "rgba(253,251,239,0.7)", fontFamily: "var(--font-inter)" }}>
                                {lang === 'ru' ? 'Гражданство:' : 'Nationality:'}
                            </label>
                            <input type="text"
                                className="px-4 py-2.5 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#8A0029]"
                                placeholder={lang === 'ru' ? "Например: Индия" : "e.g. Indian"}
                                value={resumeInfo.profile.nationality || ""}
                                onChange={(e) => handleChange("nationality", e.target.value)}
                                style={inputStyle} />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-semibold"
                                style={{ color: "rgba(253,251,239,0.7)", fontFamily: "var(--font-inter)" }}>
                                {lang === 'ru' ? 'Срок действия:' : 'Passport Expiry:'}
                            </label>
                            <input type="month"
                                className="px-4 py-2.5 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#8A0029]"
                                value={resumeInfo.profile.passportExpiry || ""}
                                onChange={(e) => handleChange("passportExpiry", e.target.value)}
                                style={{ ...inputStyle, colorScheme: "dark" }} />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-semibold"
                                style={{ color: "rgba(253,251,239,0.7)", fontFamily: "var(--font-inter)" }}>
                                {lang === 'ru' ? 'Место выдачи:' : 'Place of Issue:'}
                            </label>
                            <input type="text"
                                className="px-4 py-2.5 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#8A0029]"
                                placeholder={lang === 'ru' ? "Город выдачи" : "e.g. New Delhi"}
                                value={resumeInfo.profile.placeOfIssue || ""}
                                onChange={(e) => handleChange("placeOfIssue", e.target.value)}
                                style={inputStyle} />
                        </div>
                    </div>
                </div>
            )}

            {/* ── Links Section ── */}
            <div className="space-y-3">
                <label className="text-xs font-semibold block"
                    style={{ color: "rgba(253,251,239,0.7)", fontFamily: "var(--font-inter)" }}>
                    {lang === 'ru' ? 'Ссылки (LinkedIn, GitHub, портфолио и т.д.):' : 'Links (LinkedIn, GitHub, Portfolio, etc.):'}
                </label>
                {resumeInfo.profile.links.map((link, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                        <input
                            type="text"
                            placeholder={lang === 'ru' ? "Название (напр. LinkedIn)" : "Label (e.g. LinkedIn)"}
                            value={link.label}
                            onChange={(e) => updateLink(idx, "label", e.target.value)}
                            className="w-1/3 px-3 py-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#8A0029]"
                            style={inputStyle}
                        />
                        <input
                            type="url"
                            placeholder="https://..."
                            value={link.url}
                            onChange={(e) => updateLink(idx, "url", e.target.value)}
                            className="flex-1 px-3 py-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#8A0029]"
                            style={inputStyle}
                        />
                        <button
                            onClick={() => removeLink(idx)}
                            className="w-8 h-8 flex items-center justify-center rounded-lg text-sm font-bold cursor-pointer hover:opacity-80"
                            style={{ background: "rgba(211,47,47,0.3)", color: "#FDFBEF" }}>
                            ✕
                        </button>
                    </div>
                ))}
                <button
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold cursor-pointer transition-all duration-200 hover:opacity-90"
                    style={{ background: "rgba(138,0,41,0.2)", color: "#FDFBEF", fontFamily: "var(--font-inter)" }}
                    onClick={addLink}>
                    {lang === 'ru' ? '+ Добавить ссылку' : '+ Add Link'}
                </button>
            </div>

            <div className="flex justify-center pt-4">
                <button
                    className="flex items-center gap-2 px-8 py-3 rounded-lg text-sm font-bold cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    style={{ background: "#8A0029", color: "#FDFBEF", fontFamily: "var(--font-inter)" }}
                    onClick={() => setPage((p) => p + 1)}>
                    {lang === 'ru' ? 'Сохранить и продолжить' : 'Save & Continue'}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>
        </div>
    )
}
