'use client'

import { useRef, useState, useEffect } from "react"
import { FaWhatsapp } from "react-icons/fa"

const countries = [
    { name: "UAE", code: "ae", flag: "https://flagcdn.com/w160/ae.png" },
    { name: "Saudi Arabia", code: "sa", flag: "https://flagcdn.com/w160/sa.png" },
    { name: "Qatar", code: "qa", flag: "https://flagcdn.com/w160/qa.png" },
    { name: "Kuwait", code: "kw", flag: "https://flagcdn.com/w160/kw.png" },
    { name: "Oman", code: "om", flag: "https://flagcdn.com/w160/om.png" },
    { name: "Bahrain", code: "bh", flag: "https://flagcdn.com/w160/bh.png" },
    { name: "Jordan", code: "jo", flag: "https://flagcdn.com/w160/jo.png" },
    { name: "Egypt", code: "eg", flag: "https://flagcdn.com/w160/eg.png" },
    { name: "Russia", code: "ru", flag: "https://flagcdn.com/w160/ru.png" },
    { name: "Mauritius", code: "mu", flag: "https://flagcdn.com/w160/mu.png" },
    { name: "Malaysia", code: "my", flag: "https://flagcdn.com/w160/my.png" },
]

const row1 = countries.slice(0, 5)
const row2 = countries.slice(5)

const marqueeCSS = `
@keyframes marquee-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
@keyframes marquee-right { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
.mq-left { display: flex; animation: marquee-left 30s linear infinite; width: max-content; }
.mq-right { display: flex; animation: marquee-right 30s linear infinite; width: max-content; }
.mq-left:hover, .mq-right:hover { animation-play-state: paused; }
`

function FlagCard({ country, active, setActive }) {
    const handleClick = () => {
        const msg = encodeURIComponent(`Hi, I'm interested in manpower services for ${country.name}. Please share more details.`)
        window.open(`https://wa.me/919315226961?text=${msg}`, "_blank")
    }

    return (
        <div
            className="group relative flex flex-col items-center gap-3 cursor-pointer flex-shrink-0 transition-all duration-300 hover:-translate-y-1"
            style={{ width: "130px", margin: "0 14px" }}
            onMouseEnter={() => setActive(country.code)}
            onMouseLeave={() => setActive(null)}
            onClick={handleClick}
        >
            <div className="w-full aspect-[3/2] rounded-xl overflow-hidden flex items-center justify-center p-2 relative transition-all duration-300 group-hover:shadow-xl"
                style={{
                    background: "#fff",
                    border: active === country.code ? "3px solid #8E0935" : "2px solid #e5e7eb",
                }}>
                <img src={country.flag} alt={`${country.name} flag`}
                    className="transition-transform duration-300 group-hover:scale-105"
                    style={{ width: "100%", height: "auto", maxHeight: "100%", objectFit: "contain", borderRadius: "4px" }}
                    loading="lazy" />
                <div className="absolute inset-0 bg-[#25D366]/90 flex items-center justify-center rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FaWhatsapp className="text-white text-2xl" />
                </div>
            </div>
            <span className="text-base font-semibold text-center leading-tight transition-colors duration-300 group-hover:text-[#25D366]"
                style={{ color: active === country.code ? "#8E0935" : "#374151", fontFamily: "var(--font-lato)" }}>
                {country.name}
            </span>
        </div>
    )
}

export default function CountriesWeServe() {
    const [active, setActive] = useState(null)

    return (
        <section className="relative py-20 lg:py-28 overflow-hidden" style={{ background: "#FFFFFF" }}>
            <style>{marqueeCSS}</style>

            <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="w-14 h-1 mx-auto rounded-full mb-6" style={{ background: "#8E0935" }} />
                    <h2 style={{ fontFamily: "var(--font-cormorant-garamond)", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 600, color: "#1a0a10" }}>
                        Countries We <span className="italic" style={{ color: "#8E0935" }}>Serve</span>
                    </h2>
                    <p className="max-w-2xl mx-auto mt-4" style={{ fontFamily: "var(--font-poppins)", fontSize: "1rem", color: "#6B7280" }}>
                        Deploying verified workforce across the Gulf, Middle East, Southeast Asia & beyond
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
                    <div className="text-center p-6 rounded-xl" style={{ background: "#FDFBEF", border: "1px solid #e5e7eb" }}>
                        <div className="text-3xl lg:text-4xl font-bold" style={{ color: "#8E0935", fontFamily: "var(--font-oswald)" }}>11+</div>
                        <div className="text-base mt-2 font-medium" style={{ color: "#374151", fontFamily: "var(--font-lato)" }}>Countries</div>
                    </div>
                    <div className="text-center p-6 rounded-xl" style={{ background: "#FDFBEF", border: "1px solid #e5e7eb" }}>
                        <div className="text-3xl lg:text-4xl font-bold" style={{ color: "#BC264B", fontFamily: "var(--font-oswald)" }}>5000+</div>
                        <div className="text-base mt-2 font-medium" style={{ color: "#374151", fontFamily: "var(--font-lato)" }}>Deployed</div>
                    </div>
                    <div className="text-center p-6 rounded-xl" style={{ background: "#FDFBEF", border: "1px solid #e5e7eb" }}>
                        <div className="text-3xl lg:text-4xl font-bold" style={{ color: "#1a0a10", fontFamily: "var(--font-oswald)" }}>GCC</div>
                        <div className="text-base mt-2 font-medium" style={{ color: "#374151", fontFamily: "var(--font-lato)" }}>Primary Market</div>
                    </div>
                </div>

                {/* Marquee Row 1 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 items-center">
                    <div className="rounded-xl overflow-hidden" style={{ background: "#FDFBEF", padding: "16px 0", border: "1px solid #e5e7eb" }}>
                        <div className="mq-left">
                            {[...row1, ...row1, ...row1, ...row1].map((c, i) => (
                                <FlagCard key={`r1-${i}`} country={c} active={active} setActive={setActive} />
                            ))}
                        </div>
                    </div>
                    <div className="px-4 lg:px-8">
                        <h4 className="text-xl lg:text-2xl font-bold mb-3" style={{ color: "#1a0a10", fontFamily: "var(--font-lato)" }}>
                            GCC's <span style={{ color: "#BC264B" }}>Primary Market</span> for Skilled Manpower
                        </h4>
                        <p className="text-base leading-relaxed" style={{ color: "#6B7280", fontFamily: "var(--font-poppins)" }}>
                            Our workforce deployment covers the Gulf Cooperation Council, the Middle East, Southeast Asia, and Europe — connecting talent with opportunity.
                        </p>
                    </div>
                </div>

                {/* Marquee Row 2 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                    <div className="px-4 lg:px-8 order-2 lg:order-1">
                        <h4 className="text-xl lg:text-2xl font-bold mb-3" style={{ color: "#1a0a10", fontFamily: "var(--font-lato)" }}>
                            Continuously <span style={{ color: "#8E0935" }}>Expanding Our Reach</span>
                        </h4>
                        <p className="text-base leading-relaxed" style={{ color: "#6B7280", fontFamily: "var(--font-poppins)" }}>
                            We are growing our global deployment network across new regions and industries — from the GCC and Southeast Asia to Russia and Europe — ensuring the right talent is placed in the right market, every time.
                        </p>
                    </div>
                    <div className="rounded-xl overflow-hidden order-1 lg:order-2" style={{ background: "#FDFBEF", padding: "16px 0", border: "1px solid #e5e7eb" }}>
                        <div className="mq-right">
                            {[...row2, ...row2, ...row2, ...row2].map((c, i) => (
                                <FlagCard key={`r2-${i}`} country={c} active={active} setActive={setActive} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
