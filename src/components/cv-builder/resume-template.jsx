'use client'

import { useRef, useCallback, useState } from "react"
import { useReactToPrint } from "react-to-print"
import { useLanguage } from "@/context/language"

/* Helper to format YYYY-MM to readable date */
function formatDate(val) {
    if (!val) return ''
    if (val.includes('-')) {
        const [y, m] = val.split('-')
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        return `${months[parseInt(m, 10) - 1]} ${y}`
    }
    return val
}

/* ═══════════════════════════════════════════════════════════════════
   TEMPLATE 1  —  Classic Professional (original style, enhanced)
   ═══════════════════════════════════════════════════════════════════ */
function TemplateClassic({ resumeInfo, lang, contentRef }) {
    const hasLinks = resumeInfo.profile.links?.length > 0
    const hasPassport = resumeInfo.profile.passportNumber || resumeInfo.profile.nationality

    return (
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-5" ref={contentRef}
            style={{ fontFamily: "var(--font-poppins)", color: "#262626", minHeight: "600px", overflowWrap: "break-word", wordBreak: "break-word" }}>

            {/* Header */}
            <div className="text-center space-y-2 pb-4" style={{ borderBottom: "2px solid #8A0029" }}>
                {/* Photo */}
                {resumeInfo.profile.photo && (
                    <div className="flex justify-center mb-3">
                        <div className="w-20 h-20 rounded-full overflow-hidden border-2" style={{ borderColor: "#8A0029" }}>
                            <img src={resumeInfo.profile.photo} alt="Profile" className="w-full h-full object-cover" />
                        </div>
                    </div>
                )}
                <h1 className="text-3xl font-black" style={{ fontFamily: "var(--font-inter)", color: "#262626" }}>
                    {resumeInfo.profile.firstname || (lang === 'ru' ? 'Имя' : 'First')}{' '}
                    {resumeInfo.profile.lastname || (lang === 'ru' ? 'Фамилия' : 'Last')}
                </h1>
                {/* Applying For */}
                {(resumeInfo.profile.applyingFor || []).length > 0 && (
                    <p className="text-sm font-semibold" style={{ color: "#8A0029", fontFamily: "var(--font-inter)" }}>
                        {lang === 'ru' ? 'Должность:' : 'Applying for:'} {(resumeInfo.profile.applyingFor || []).join(' · ')}
                    </p>
                )}
                <div className="flex justify-center items-center gap-3 flex-wrap text-sm" style={{ color: "#6B7280" }}>
                    {resumeInfo.profile.email && (
                        <a href={`mailto:${resumeInfo.profile.email}`} style={{ color: "#8A0029" }}>
                            {resumeInfo.profile.email}
                        </a>
                    )}
                    {hasLinks && resumeInfo.profile.links.map((link, i) => (
                        link.url && (
                            <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="pl-3"
                                style={{ color: "#8A0029", borderLeft: "1px solid #e5e5e5" }}>
                                {link.label || link.url}
                            </a>
                        )
                    ))}
                </div>
                <div className="text-sm" style={{ color: "#9CA3AF" }}>
                    {resumeInfo.profile.phone && <span>📞 {resumeInfo.profile.phone}</span>}
                    {resumeInfo.profile.address && <span className="ml-3">📍 {resumeInfo.profile.address}</span>}
                </div>
            </div>

            {/* Summary */}
            {resumeInfo.professional.summary && (
                <div>
                    <h3 className="text-sm font-black uppercase tracking-wider mb-2 pb-1"
                        style={{ fontFamily: "var(--font-inter)", color: "#8A0029", borderBottom: "1px solid rgba(138,0,41,0.15)" }}>
                        {lang === 'ru' ? 'О СЕБЕ' : 'SUMMARY'}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
                        {resumeInfo.professional.summary}
                    </p>
                </div>
            )}

            {/* Skills */}
            {resumeInfo.professional.skills && (
                <div>
                    <h3 className="text-sm font-black uppercase tracking-wider mb-2 pb-1"
                        style={{ fontFamily: "var(--font-inter)", color: "#8A0029", borderBottom: "1px solid rgba(138,0,41,0.15)" }}>
                        {lang === 'ru' ? 'НАВЫКИ' : 'SKILLS'}
                    </h3>
                    <ul className="list-disc pl-5 text-sm space-y-0.5" style={{ color: "#374151" }}>
                        {resumeInfo.professional.skills.split("\n").map((skill, i) => (
                            skill.trim() && <li key={i}>{skill.trim()}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Work Experience */}
            {resumeInfo.professional.work.length > 0 && (
                <div>
                    <h3 className="text-sm font-black uppercase tracking-wider mb-2 pb-1"
                        style={{ fontFamily: "var(--font-inter)", color: "#8A0029", borderBottom: "1px solid rgba(138,0,41,0.15)" }}>
                        {lang === 'ru' ? 'ОПЫТ РАБОТЫ' : 'WORK EXPERIENCE'}
                    </h3>
                    {resumeInfo.professional.work.map((work, i) => (
                        <div key={i} className="mb-3">
                            <div className="flex justify-between items-baseline flex-wrap">
                                <div>
                                    <h5 className="text-base font-bold" style={{ color: "#262626" }}>{work.jobTitle}</h5>
                                    <h6 className="text-sm" style={{ color: "#6B7280" }}>{work.company}</h6>
                                </div>
                                <span className="text-xs font-semibold" style={{ color: "#9CA3AF" }}>
                                    {formatDate(work.startDate)} — {work.endDate ? formatDate(work.endDate) : (lang === 'ru' ? 'настоящее время' : 'Present')}
                                </span>
                            </div>
                            {work.jobDetails && (
                                <ul className="list-disc pl-5 mt-1 text-sm space-y-0.5" style={{ color: "#374151" }}>
                                    {work.jobDetails.split("\n").map((detail, idx) =>
                                        detail.trim() ? <li key={idx}>{detail.trim()}</li> : null
                                    )}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            )}

            {/* Education */}
            {resumeInfo.education.length > 0 && (
                <div>
                    <h3 className="text-sm font-black uppercase tracking-wider mb-2 pb-1"
                        style={{ fontFamily: "var(--font-inter)", color: "#8A0029", borderBottom: "1px solid rgba(138,0,41,0.15)" }}>
                        {lang === 'ru' ? 'ОБРАЗОВАНИЕ' : 'EDUCATION'}
                    </h3>
                    {resumeInfo.education.map((edu, i) => (
                        <div key={i} className="flex justify-between items-baseline flex-wrap mb-2">
                            <div>
                                <h5 className="text-base font-bold" style={{ color: "#262626" }}>{edu.course}</h5>
                                <h6 className="text-sm" style={{ color: "#6B7280" }}>{edu.college}</h6>
                            </div>
                            <span className="text-xs font-semibold" style={{ color: "#9CA3AF" }}>
                                {formatDate(edu.startDate)} — {formatDate(edu.endDate)}
                            </span>
                        </div>
                    ))}
                </div>
            )}

            {/* Certifications */}
            {resumeInfo.certification.length > 0 && (
                <div>
                    <h3 className="text-sm font-black uppercase tracking-wider mb-2 pb-1"
                        style={{ fontFamily: "var(--font-inter)", color: "#8A0029", borderBottom: "1px solid rgba(138,0,41,0.15)" }}>
                        {lang === 'ru' ? 'СЕРТИФИКАТЫ' : 'CERTIFICATIONS'}
                    </h3>
                    {resumeInfo.certification.map((cert, i) => (
                        <div key={i} className="mb-2">
                            <div className="flex justify-between items-baseline flex-wrap">
                                <div>
                                    <h5 className="text-sm font-bold" style={{ color: "#262626" }}>
                                        {cert.link ? (
                                            <a href={cert.link} target="_blank" rel="noopener noreferrer" style={{ color: "#8A0029" }}>
                                                {cert.name}
                                            </a>
                                        ) : cert.name}
                                    </h5>
                                    {cert.issuer && <p className="text-sm" style={{ color: "#6B7280" }}>{cert.issuer}</p>}
                                </div>
                                {cert.date && (
                                    <span className="text-xs font-semibold" style={{ color: "#9CA3AF" }}>
                                        {formatDate(cert.date)}
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Custom Sections */}
            {resumeInfo.customSections?.length > 0 && resumeInfo.customSections.map((section, i) => (
                section.title && section.content && (
                    <div key={i}>
                        <h3 className="text-sm font-black uppercase tracking-wider mb-2 pb-1"
                            style={{ fontFamily: "var(--font-inter)", color: "#8A0029", borderBottom: "1px solid rgba(138,0,41,0.15)" }}>
                            {section.title}
                        </h3>
                        <ul className="list-disc pl-5 text-sm space-y-0.5" style={{ color: "#374151" }}>
                            {section.content.split("\n").map((line, idx) =>
                                line.trim() ? <li key={idx}>{line.trim()}</li> : null
                            )}
                        </ul>
                    </div>
                )
            ))}

            {/* Passport Details */}
            {hasPassport && (
                <div>
                    <h3 className="text-sm font-black uppercase tracking-wider mb-2 pb-1"
                        style={{ fontFamily: "var(--font-inter)", color: "#8A0029", borderBottom: "1px solid rgba(138,0,41,0.15)" }}>
                        {lang === 'ru' ? 'ПАСПОРТНЫЕ ДАННЫЕ' : 'PASSPORT DETAILS'}
                    </h3>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm" style={{ color: "#374151" }}>
                        {resumeInfo.profile.passportNumber && (
                            <>
                                <span className="font-semibold">{lang === 'ru' ? 'Номер паспорта:' : 'Passport No:'}</span>
                                <span>{resumeInfo.profile.passportNumber}</span>
                            </>
                        )}
                        {resumeInfo.profile.nationality && (
                            <>
                                <span className="font-semibold">{lang === 'ru' ? 'Гражданство:' : 'Nationality:'}</span>
                                <span>{resumeInfo.profile.nationality}</span>
                            </>
                        )}
                        {resumeInfo.profile.passportExpiry && (
                            <>
                                <span className="font-semibold">{lang === 'ru' ? 'Срок действия:' : 'Expiry:'}</span>
                                <span>{formatDate(resumeInfo.profile.passportExpiry)}</span>
                            </>
                        )}
                        {resumeInfo.profile.placeOfIssue && (
                            <>
                                <span className="font-semibold">{lang === 'ru' ? 'Место выдачи:' : 'Place of Issue:'}</span>
                                <span>{resumeInfo.profile.placeOfIssue}</span>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

/* ═══════════════════════════════════════════════════════════════════
   TEMPLATE 2  —  Modern Sidebar (two-column layout)
   ═══════════════════════════════════════════════════════════════════ */
function TemplateModern({ resumeInfo, lang, contentRef }) {
    const hasLinks = resumeInfo.profile.links?.length > 0
    const hasPassport = resumeInfo.profile.passportNumber || resumeInfo.profile.nationality

    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden" ref={contentRef}
            style={{ fontFamily: "var(--font-poppins)", color: "#262626", minHeight: "600px" }}>
            <div className="flex min-h-[600px]">
                {/* ── Left Sidebar ── */}
                <div className="w-[38%] p-6 space-y-5"
                    style={{ background: "#1A1A1A", color: "#FDFBEF" }}>
                    {/* Photo */}
                    {resumeInfo.profile.photo && (
                        <div className="flex justify-center mb-2">
                            <div className="w-24 h-24 rounded-full overflow-hidden border-3"
                                style={{ borderColor: "#8A0029", border: "3px solid #8A0029" }}>
                                <img src={resumeInfo.profile.photo} alt="Profile" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    )}
                    {/* Name */}
                    <div className="text-center">
                        <h1 className="text-xl font-black leading-tight" style={{ fontFamily: "var(--font-inter)" }}>
                            {resumeInfo.profile.firstname || (lang === 'ru' ? 'Имя' : 'First')}{' '}
                            {resumeInfo.profile.lastname || (lang === 'ru' ? 'Фамилия' : 'Last')}
                        </h1>
                        {(resumeInfo.profile.applyingFor || []).length > 0 && (
                            <div className="flex flex-wrap justify-center gap-1 mt-1">
                                {(resumeInfo.profile.applyingFor || []).map((pos, pi) => (
                                    <span key={pi} className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
                                        style={{ background: "rgba(138,0,41,0.4)", color: "#FDFBEF" }}>
                                        {pos}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Contact */}
                    <div className="space-y-2">
                        <h4 className="text-xs font-bold uppercase tracking-wider pb-1"
                            style={{ color: "#8A0029", borderBottom: "1px solid rgba(138,0,41,0.4)", fontFamily: "var(--font-inter)" }}>
                            {lang === 'ru' ? 'Контакты' : 'Contact'}
                        </h4>
                        {resumeInfo.profile.email && (
                            <p className="text-xs break-all" style={{ color: "rgba(253,251,239,0.7)" }}>
                                ✉ {resumeInfo.profile.email}
                            </p>
                        )}
                        {resumeInfo.profile.phone && (
                            <p className="text-xs" style={{ color: "rgba(253,251,239,0.7)" }}>
                                📞 {resumeInfo.profile.phone}
                            </p>
                        )}
                        {resumeInfo.profile.address && (
                            <p className="text-xs" style={{ color: "rgba(253,251,239,0.7)" }}>
                                📍 {resumeInfo.profile.address}
                            </p>
                        )}
                    </div>

                    {/* Skills */}
                    {resumeInfo.professional.skills && (
                        <div className="space-y-2">
                            <h4 className="text-xs font-bold uppercase tracking-wider pb-1"
                                style={{ color: "#8A0029", borderBottom: "1px solid rgba(138,0,41,0.4)", fontFamily: "var(--font-inter)" }}>
                                {lang === 'ru' ? 'Навыки' : 'Skills'}
                            </h4>
                            <div className="flex flex-wrap gap-1.5">
                                {resumeInfo.professional.skills.split("\n").map((skill, i) => (
                                    skill.trim() && (
                                        <span key={i} className="text-xs px-2 py-0.5 rounded-full"
                                            style={{ background: "rgba(138,0,41,0.3)", color: "#FDFBEF" }}>
                                            {skill.trim()}
                                        </span>
                                    )
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Links */}
                    {hasLinks && (
                        <div className="space-y-2">
                            <h4 className="text-xs font-bold uppercase tracking-wider pb-1"
                                style={{ color: "#8A0029", borderBottom: "1px solid rgba(138,0,41,0.4)", fontFamily: "var(--font-inter)" }}>
                                {lang === 'ru' ? 'Ссылки' : 'Links'}
                            </h4>
                            {resumeInfo.profile.links.map((link, i) => (
                                link.url && (
                                    <a key={i} href={link.url} target="_blank" rel="noopener noreferrer"
                                        className="block text-xs break-all" style={{ color: "rgba(253,251,239,0.7)" }}>
                                        🔗 {link.label || link.url}
                                    </a>
                                )
                            ))}
                        </div>
                    )}

                    {/* Passport */}
                    {hasPassport && (
                        <div className="space-y-2">
                            <h4 className="text-xs font-bold uppercase tracking-wider pb-1"
                                style={{ color: "#8A0029", borderBottom: "1px solid rgba(138,0,41,0.4)", fontFamily: "var(--font-inter)" }}>
                                {lang === 'ru' ? 'Паспорт' : 'Passport'}
                            </h4>
                            <div className="space-y-1 text-xs" style={{ color: "rgba(253,251,239,0.7)" }}>
                                {resumeInfo.profile.passportNumber && <p>🛂 {resumeInfo.profile.passportNumber}</p>}
                                {resumeInfo.profile.nationality && <p>🌍 {resumeInfo.profile.nationality}</p>}
                                {resumeInfo.profile.passportExpiry && <p>📅 {lang === 'ru' ? 'До:' : 'Exp:'} {formatDate(resumeInfo.profile.passportExpiry)}</p>}
                                {resumeInfo.profile.placeOfIssue && <p>📍 {resumeInfo.profile.placeOfIssue}</p>}
                            </div>
                        </div>
                    )}
                </div>

                {/* ── Right Content ── */}
                <div className="flex-1 p-6 space-y-5">
                    {/* Summary */}
                    {resumeInfo.professional.summary && (
                        <div>
                            <h3 className="text-sm font-black uppercase tracking-wider mb-2 pb-1"
                                style={{ fontFamily: "var(--font-inter)", color: "#8A0029", borderBottom: "1px solid rgba(138,0,41,0.15)" }}>
                                {lang === 'ru' ? 'О себе' : 'Profile Summary'}
                            </h3>
                            <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
                                {resumeInfo.professional.summary}
                            </p>
                        </div>
                    )}

                    {/* Work */}
                    {resumeInfo.professional.work.length > 0 && (
                        <div>
                            <h3 className="text-sm font-black uppercase tracking-wider mb-2 pb-1"
                                style={{ fontFamily: "var(--font-inter)", color: "#8A0029", borderBottom: "1px solid rgba(138,0,41,0.15)" }}>
                                {lang === 'ru' ? 'Опыт работы' : 'Experience'}
                            </h3>
                            {resumeInfo.professional.work.map((work, i) => (
                                <div key={i} className="mb-3 pl-3" style={{ borderLeft: "2px solid #8A0029" }}>
                                    <h5 className="text-sm font-bold" style={{ color: "#262626" }}>{work.jobTitle}</h5>
                                    <p className="text-xs" style={{ color: "#8A0029" }}>{work.company}</p>
                                    <span className="text-xs" style={{ color: "#9CA3AF" }}>
                                        {formatDate(work.startDate)} — {work.endDate ? formatDate(work.endDate) : (lang === 'ru' ? 'н.в.' : 'Present')}
                                    </span>
                                    {work.jobDetails && (
                                        <ul className="list-disc pl-4 mt-1 text-xs space-y-0.5" style={{ color: "#374151" }}>
                                            {work.jobDetails.split("\n").map((d, idx) =>
                                                d.trim() ? <li key={idx}>{d.trim()}</li> : null
                                            )}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Education */}
                    {resumeInfo.education.length > 0 && (
                        <div>
                            <h3 className="text-sm font-black uppercase tracking-wider mb-2 pb-1"
                                style={{ fontFamily: "var(--font-inter)", color: "#8A0029", borderBottom: "1px solid rgba(138,0,41,0.15)" }}>
                                {lang === 'ru' ? 'Образование' : 'Education'}
                            </h3>
                            {resumeInfo.education.map((edu, i) => (
                                <div key={i} className="mb-2 pl-3" style={{ borderLeft: "2px solid rgba(138,0,41,0.3)" }}>
                                    <h5 className="text-sm font-bold" style={{ color: "#262626" }}>{edu.course}</h5>
                                    <p className="text-xs" style={{ color: "#6B7280" }}>{edu.college}</p>
                                    <span className="text-xs" style={{ color: "#9CA3AF" }}>
                                        {formatDate(edu.startDate)} — {formatDate(edu.endDate)}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Certifications */}
                    {resumeInfo.certification.length > 0 && (
                        <div>
                            <h3 className="text-sm font-black uppercase tracking-wider mb-2 pb-1"
                                style={{ fontFamily: "var(--font-inter)", color: "#8A0029", borderBottom: "1px solid rgba(138,0,41,0.15)" }}>
                                {lang === 'ru' ? 'Сертификаты' : 'Certifications'}
                            </h3>
                            {resumeInfo.certification.map((cert, i) => (
                                <div key={i} className="mb-1.5">
                                    <span className="text-sm font-semibold" style={{ color: "#262626" }}>
                                        {cert.link ? (
                                            <a href={cert.link} target="_blank" rel="noopener noreferrer" style={{ color: "#8A0029" }}>{cert.name}</a>
                                        ) : cert.name}
                                    </span>
                                    {cert.issuer && <span className="text-xs ml-2" style={{ color: "#6B7280" }}>— {cert.issuer}</span>}
                                    {cert.date && <span className="text-xs ml-2" style={{ color: "#9CA3AF" }}>{formatDate(cert.date)}</span>}
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Custom Sections */}
                    {resumeInfo.customSections?.length > 0 && resumeInfo.customSections.map((section, i) => (
                        section.title && section.content && (
                            <div key={i}>
                                <h3 className="text-sm font-black uppercase tracking-wider mb-2 pb-1"
                                    style={{ fontFamily: "var(--font-inter)", color: "#8A0029", borderBottom: "1px solid rgba(138,0,41,0.15)" }}>
                                    {section.title}
                                </h3>
                                <ul className="list-disc pl-5 text-sm space-y-0.5" style={{ color: "#374151" }}>
                                    {section.content.split("\n").map((line, idx) =>
                                        line.trim() ? <li key={idx}>{line.trim()}</li> : null
                                    )}
                                </ul>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </div>
    )
}

/* ═══════════════════════════════════════════════════════════════════
   TEMPLATE 3  —  Minimal Elegant (clean, with accent bar)
   ═══════════════════════════════════════════════════════════════════ */
function TemplateMinimal({ resumeInfo, lang, contentRef }) {
    const hasLinks = resumeInfo.profile.links?.length > 0
    const hasPassport = resumeInfo.profile.passportNumber || resumeInfo.profile.nationality

    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden" ref={contentRef}
            style={{ fontFamily: "var(--font-poppins)", color: "#262626", minHeight: "600px" }}>
            {/* Top accent bar */}
            <div className="h-2 w-full" style={{ background: "linear-gradient(90deg, #8A0029 0%, #D32F2F 50%, #FF6F61 100%)" }} />

            <div className="p-8 space-y-5">
                {/* Header — horizontal layout */}
                <div className="flex items-center gap-5 pb-4" style={{ borderBottom: "1px solid #e5e7eb" }}>
                    {resumeInfo.profile.photo && (
                        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0"
                            style={{ border: "2px solid #8A0029" }}>
                            <img src={resumeInfo.profile.photo} alt="Profile" className="w-full h-full object-cover" />
                        </div>
                    )}
                    <div className="flex-1">
                        <h1 className="text-2xl font-black leading-tight" style={{ fontFamily: "var(--font-inter)", color: "#1A1A1A" }}>
                            {resumeInfo.profile.firstname || (lang === 'ru' ? 'Имя' : 'First')}{' '}
                            {resumeInfo.profile.lastname || (lang === 'ru' ? 'Фамилия' : 'Last')}
                        </h1>
                        {(resumeInfo.profile.applyingFor || []).length > 0 && (
                            <p className="text-sm font-bold mt-0.5" style={{ color: "#8A0029" }}>
                                {(resumeInfo.profile.applyingFor || []).join(' · ')}
                            </p>
                        )}
                        <div className="flex flex-wrap items-center gap-3 mt-1 text-xs" style={{ color: "#6B7280" }}>
                            {resumeInfo.profile.email && <span>✉ {resumeInfo.profile.email}</span>}
                            {resumeInfo.profile.phone && <span>📞 {resumeInfo.profile.phone}</span>}
                            {resumeInfo.profile.address && <span>📍 {resumeInfo.profile.address}</span>}
                        </div>
                    </div>
                </div>

                {/* Links */}
                {hasLinks && (
                    <div className="flex flex-wrap gap-3 text-xs">
                        {resumeInfo.profile.links.map((link, i) => (
                            link.url && (
                                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer"
                                    className="px-3 py-1 rounded-full"
                                    style={{ background: "rgba(138,0,41,0.08)", color: "#8A0029", fontWeight: 600 }}>
                                    {link.label || link.url}
                                </a>
                            )
                        ))}
                    </div>
                )}

                {/* Summary */}
                {resumeInfo.professional.summary && (
                    <div>
                        <h3 className="text-xs font-black uppercase tracking-widest mb-2 flex items-center gap-2"
                            style={{ fontFamily: "var(--font-inter)", color: "#8A0029" }}>
                            <span className="w-4 h-0.5 inline-block" style={{ background: "#8A0029" }} />
                            {lang === 'ru' ? 'О СЕБЕ' : 'ABOUT ME'}
                        </h3>
                        <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
                            {resumeInfo.professional.summary}
                        </p>
                    </div>
                )}

                {/* Skills as pills */}
                {resumeInfo.professional.skills && (
                    <div>
                        <h3 className="text-xs font-black uppercase tracking-widest mb-2 flex items-center gap-2"
                            style={{ fontFamily: "var(--font-inter)", color: "#8A0029" }}>
                            <span className="w-4 h-0.5 inline-block" style={{ background: "#8A0029" }} />
                            {lang === 'ru' ? 'НАВЫКИ' : 'SKILLS'}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {resumeInfo.professional.skills.split("\n").map((skill, i) => (
                                skill.trim() && (
                                    <span key={i} className="text-xs px-3 py-1 rounded-full font-semibold"
                                        style={{ background: "#262626", color: "#FDFBEF" }}>
                                        {skill.trim()}
                                    </span>
                                )
                            ))}
                        </div>
                    </div>
                )}

                {/* Work */}
                {resumeInfo.professional.work.length > 0 && (
                    <div>
                        <h3 className="text-xs font-black uppercase tracking-widest mb-3 flex items-center gap-2"
                            style={{ fontFamily: "var(--font-inter)", color: "#8A0029" }}>
                            <span className="w-4 h-0.5 inline-block" style={{ background: "#8A0029" }} />
                            {lang === 'ru' ? 'ОПЫТ РАБОТЫ' : 'WORK EXPERIENCE'}
                        </h3>
                        {resumeInfo.professional.work.map((work, i) => (
                            <div key={i} className="mb-4 relative pl-4" style={{ borderLeft: "2px solid #e5e7eb" }}>
                                <div className="absolute left-[-5px] top-[5px] w-2 h-2 rounded-full" style={{ background: "#8A0029" }} />
                                <div className="flex justify-between items-start flex-wrap">
                                    <div>
                                        <h5 className="text-sm font-bold" style={{ color: "#1A1A1A" }}>{work.jobTitle}</h5>
                                        <h6 className="text-xs font-semibold" style={{ color: "#8A0029" }}>{work.company}</h6>
                                    </div>
                                    <span className="text-xs px-2 py-0.5 rounded" style={{ background: "#f3f4f6", color: "#6B7280" }}>
                                        {formatDate(work.startDate)} — {work.endDate ? formatDate(work.endDate) : (lang === 'ru' ? 'н.в.' : 'Present')}
                                    </span>
                                </div>
                                {work.jobDetails && (
                                    <ul className="list-disc pl-4 mt-1.5 text-xs space-y-0.5" style={{ color: "#374151" }}>
                                        {work.jobDetails.split("\n").map((d, idx) =>
                                            d.trim() ? <li key={idx}>{d.trim()}</li> : null
                                        )}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                {/* Education */}
                {resumeInfo.education.length > 0 && (
                    <div>
                        <h3 className="text-xs font-black uppercase tracking-widest mb-3 flex items-center gap-2"
                            style={{ fontFamily: "var(--font-inter)", color: "#8A0029" }}>
                            <span className="w-4 h-0.5 inline-block" style={{ background: "#8A0029" }} />
                            {lang === 'ru' ? 'ОБРАЗОВАНИЕ' : 'EDUCATION'}
                        </h3>
                        {resumeInfo.education.map((edu, i) => (
                            <div key={i} className="mb-2 pl-4 relative" style={{ borderLeft: "2px solid #e5e7eb" }}>
                                <div className="absolute left-[-5px] top-[5px] w-2 h-2 rounded-full" style={{ background: "#D32F2F" }} />
                                <h5 className="text-sm font-bold" style={{ color: "#1A1A1A" }}>{edu.course}</h5>
                                <p className="text-xs" style={{ color: "#6B7280" }}>{edu.college}</p>
                                <span className="text-xs" style={{ color: "#9CA3AF" }}>
                                    {formatDate(edu.startDate)} — {formatDate(edu.endDate)}
                                </span>
                            </div>
                        ))}
                    </div>
                )}

                {/* Certifications */}
                {resumeInfo.certification.length > 0 && (
                    <div>
                        <h3 className="text-xs font-black uppercase tracking-widest mb-2 flex items-center gap-2"
                            style={{ fontFamily: "var(--font-inter)", color: "#8A0029" }}>
                            <span className="w-4 h-0.5 inline-block" style={{ background: "#8A0029" }} />
                            {lang === 'ru' ? 'СЕРТИФИКАТЫ' : 'CERTIFICATIONS'}
                        </h3>
                        <div className="space-y-1.5">
                            {resumeInfo.certification.map((cert, i) => (
                                <div key={i} className="flex items-baseline gap-2 text-sm">
                                    <span style={{ color: "#8A0029" }}>●</span>
                                    <span className="font-semibold" style={{ color: "#262626" }}>
                                        {cert.link ? (
                                            <a href={cert.link} target="_blank" rel="noopener noreferrer" style={{ color: "#8A0029" }}>{cert.name}</a>
                                        ) : cert.name}
                                    </span>
                                    {cert.issuer && <span className="text-xs" style={{ color: "#6B7280" }}>({cert.issuer})</span>}
                                    {cert.date && <span className="text-xs" style={{ color: "#9CA3AF" }}>{formatDate(cert.date)}</span>}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Custom Sections */}
                {resumeInfo.customSections?.length > 0 && resumeInfo.customSections.map((section, i) => (
                    section.title && section.content && (
                        <div key={i}>
                            <h3 className="text-xs font-black uppercase tracking-widest mb-2 flex items-center gap-2"
                                style={{ fontFamily: "var(--font-inter)", color: "#8A0029" }}>
                                <span className="w-4 h-0.5 inline-block" style={{ background: "#8A0029" }} />
                                {section.title}
                            </h3>
                            <ul className="list-disc pl-5 text-sm space-y-0.5" style={{ color: "#374151" }}>
                                {section.content.split("\n").map((line, idx) =>
                                    line.trim() ? <li key={idx}>{line.trim()}</li> : null
                                )}
                            </ul>
                        </div>
                    )
                ))}

                {/* Passport */}
                {hasPassport && (
                    <div className="p-3 rounded-lg" style={{ background: "#f9fafb", border: "1px solid #e5e7eb" }}>
                        <h3 className="text-xs font-black uppercase tracking-widest mb-2 flex items-center gap-2"
                            style={{ fontFamily: "var(--font-inter)", color: "#8A0029" }}>
                            <span className="w-4 h-0.5 inline-block" style={{ background: "#8A0029" }} />
                            {lang === 'ru' ? 'ПАСПОРТНЫЕ ДАННЫЕ' : 'PASSPORT'}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-xs" style={{ color: "#374151" }}>
                            {resumeInfo.profile.passportNumber && (
                                <span><strong>{lang === 'ru' ? 'Номер:' : 'No:'}</strong> {resumeInfo.profile.passportNumber}</span>
                            )}
                            {resumeInfo.profile.nationality && (
                                <span><strong>{lang === 'ru' ? 'Г-во:' : 'Nationality:'}</strong> {resumeInfo.profile.nationality}</span>
                            )}
                            {resumeInfo.profile.passportExpiry && (
                                <span><strong>{lang === 'ru' ? 'До:' : 'Exp:'}</strong> {formatDate(resumeInfo.profile.passportExpiry)}</span>
                            )}
                            {resumeInfo.profile.placeOfIssue && (
                                <span><strong>{lang === 'ru' ? 'Выдан:' : 'Issued:'}</strong> {resumeInfo.profile.placeOfIssue}</span>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

/* ═══════════════════════════════════════════════════════════════════
   MAIN COMPONENT — Tabbed Template Switcher + Download
   ═══════════════════════════════════════════════════════════════════ */
export default function ResumeTemplate({ resumeInfo, page }) {
    const { lang } = useLanguage()
    const [activeTab, setActiveTab] = useState(0)
    const contentRef = useRef(null)

    const reactToPrintFn = useReactToPrint({ contentRef })

    const handleDownload = useCallback(() => {
        if (contentRef.current) {
            reactToPrintFn()
        }
    }, [reactToPrintFn])

    const tabs = [
        { label: lang === 'ru' ? 'Классический' : 'Classic', icon: '📄' },
        { label: lang === 'ru' ? 'Современный' : 'Modern', icon: '🎨' },
        { label: lang === 'ru' ? 'Минимализм' : 'Minimal', icon: '✨' },
    ]

    /* Render only the active template — avoids display:none print issues */
    const renderTemplate = () => {
        switch (activeTab) {
            case 0: return <TemplateClassic resumeInfo={resumeInfo} lang={lang} contentRef={contentRef} />
            case 1: return <TemplateModern resumeInfo={resumeInfo} lang={lang} contentRef={contentRef} />
            case 2: return <TemplateMinimal resumeInfo={resumeInfo} lang={lang} contentRef={contentRef} />
            default: return <TemplateClassic resumeInfo={resumeInfo} lang={lang} contentRef={contentRef} />
        }
    }

    return (
        <div>
            {/* ── Tab Switcher ── */}
            <div className="flex items-center gap-1 p-1 rounded-xl mb-4"
                style={{ background: "#262626" }}>
                {tabs.map((tab, i) => (
                    <button
                        key={i}
                        onClick={() => setActiveTab(i)}
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-xs font-bold cursor-pointer transition-all duration-300"
                        style={{
                            fontFamily: "var(--font-inter)",
                            background: activeTab === i ? "#8A0029" : "transparent",
                            color: activeTab === i ? "#FDFBEF" : "rgba(253,251,239,0.5)",
                            transform: activeTab === i ? "scale(1.02)" : "scale(1)",
                        }}
                    >
                        <span>{tab.icon}</span>
                        <span>{tab.label}</span>
                    </button>
                ))}
            </div>

            {/* ── Active Template Preview ── */}
            <div className="relative">
                {renderTemplate()}
            </div>

            {/* ── Action Buttons ── */}
            <div className="flex flex-wrap gap-3 items-center justify-center py-6">
                <button
                    className="px-6 py-2.5 rounded-lg text-sm font-bold cursor-pointer transition-all duration-200 hover:opacity-90"
                    style={{ background: "rgba(138,0,41,0.1)", color: "#8A0029", fontFamily: "var(--font-inter)" }}
                    onClick={() => window.location.reload()}>
                    {lang === 'ru' ? '↻ Создать новое' : '↻ Create New'}
                </button>
                <button
                    className="px-6 py-2.5 rounded-lg text-sm font-bold cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    style={{ background: "#8A0029", color: "#FDFBEF", fontFamily: "var(--font-inter)" }}
                    onClick={handleDownload}>
                    {lang === 'ru'
                        ? `📥 Скачать «${tabs[activeTab].label}»`
                        : `📥 Download "${tabs[activeTab].label}"`}
                </button>
            </div>
        </div>
    )
}
