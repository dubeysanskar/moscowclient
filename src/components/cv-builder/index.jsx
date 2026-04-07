'use client'

import { useState, useEffect } from "react"
import { useLanguage } from "@/context/language"
import BasicDetails from "./basic-detail"
import EducationDetails from "./education-detail"
import ProfessionalDetails from "./professional-detail"
import ResumeTemplate from "./resume-template"

export default function ResumeBuilder() {
    const { lang } = useLanguage()
    const [page, setPage] = useState(0)

    useEffect(() => {
        const handleResize = () => {}
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const initialState = {
        profile: {
            firstname: "", lastname: "", phone: "", email: "", address: "",
            applyingFor: [], photo: "",
            passportNumber: "", passportExpiry: "", nationality: "", placeOfIssue: "",
            links: [], // { label, url }
        },
        professional: { summary: "", skills: "", work: [] },
        education: [],
        certification: [],
        customSections: [], // { title, content }
    }

    const [resumeInfo, setResumeInfo] = useState(initialState)

    const formPages = lang === 'ru'
        ? ["Личные данные", "Профессиональный опыт", "Образование и доп. разделы"]
        : ["Profile Details", "Professional Experience", "Education & Extras"]

    const renderForm = () => {
        switch (page) {
            case 0: return <BasicDetails resumeInfo={resumeInfo} setResumeInfo={setResumeInfo} setPage={setPage} />
            case 1: return <ProfessionalDetails resumeInfo={resumeInfo} setResumeInfo={setResumeInfo} setPage={setPage} />
            case 2: return <EducationDetails resumeInfo={resumeInfo} setResumeInfo={setResumeInfo} setPage={setPage} />
            default: return null
        }
    }

    const progressWidth = page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%"

    return (
        <section className="pt-28 pb-20 min-h-screen" style={{ background: "#FDFBEF" }}>
            <div className="max-w-[1400px] mx-auto px-6 lg:px-8">

                {/* Header */}
                <div className={`${page === 3 ? "hidden" : "flex"} flex-col gap-5 items-center w-full mb-10`}>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-[2px]" style={{ background: "#8A0029" }} />
                        <span className="text-[10px] tracking-[0.2em] uppercase font-bold"
                            style={{ color: "#D32F2F", fontFamily: "var(--font-inter)" }}>
                            {lang === 'ru' ? 'Конструктор резюме' : 'CV Builder'}
                        </span>
                        <div className="w-8 h-[2px]" style={{ background: "#8A0029" }} />
                    </div>
                    <h1 className="text-3xl lg:text-4xl font-black text-center"
                        style={{ fontFamily: "var(--font-inter)", color: "#262626" }}>
                        {lang === 'ru'
                            ? <><span style={{ color: "#8A0029" }}>Создайте</span> своё резюме</>
                            : <>Build Your <span style={{ color: "#8A0029" }}>Resume</span></>
                        }
                    </h1>
                    <p className="text-sm text-center max-w-lg"
                        style={{ fontFamily: "var(--font-poppins)", color: "#6B7280" }}>
                        {lang === 'ru'
                            ? 'Заполните форму ниже — резюме обновляется в реальном времени. Скачайте PDF по завершении.'
                            : 'Fill out the form below — your resume updates in real time. Download as PDF when done.'}
                    </p>

                    {/* Progress bar */}
                    <div className="w-full max-w-2xl rounded-full h-2 overflow-hidden"
                        style={{ background: "rgba(138,0,41,0.08)" }}>
                        <div className="h-full rounded-full transition-all duration-500"
                            style={{ width: progressWidth, background: "#8A0029" }} />
                    </div>
                    <p className="text-xs font-semibold" style={{ color: "#8A0029", fontFamily: "var(--font-inter)" }}>
                        {lang === 'ru' ? `Шаг ${page + 1} из 3` : `Step ${page + 1} of 3`}
                    </p>
                </div>

                {/* Desktop: Form + Preview */}
                <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className={`${page === 3 ? "hidden" : "block"}`}>
                        <div className="p-8 rounded-xl"
                            style={{ background: "#262626", border: "1px solid rgba(255,255,255,0.06)" }}>
                            <h2 className="text-white text-center text-lg font-black mb-6"
                                style={{ fontFamily: "var(--font-inter)" }}>
                                {formPages[page]}
                            </h2>
                            {renderForm()}
                        </div>
                    </div>
                    <div className="w-full">
                        <ResumeTemplate resumeInfo={resumeInfo} page={page} />
                    </div>
                </div>

                {/* Mobile warning */}
                <div className="md:hidden text-center py-16">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4"
                        style={{ background: "rgba(138,0,41,0.08)" }}>
                        <span className="text-2xl">💻</span>
                    </div>
                    <h4 className="text-lg font-black mb-2" style={{ color: "#8A0029", fontFamily: "var(--font-inter)" }}>
                        {lang === 'ru' ? 'Используйте компьютер' : 'Use Desktop'}
                    </h4>
                    <p className="text-sm" style={{ color: "#6B7280", fontFamily: "var(--font-poppins)" }}>
                        {lang === 'ru'
                            ? 'Конструктор резюме оптимизирован для настольных устройств и ноутбуков.'
                            : 'Resume Builder is optimized for desktop and laptop devices.'}
                    </p>
                </div>
            </div>
        </section>
    )
}
