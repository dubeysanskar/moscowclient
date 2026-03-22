'use client'

import Container from "@/components/container";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const data = {
    title: "• Why Choose Us",
    description: "Government-licensed, trade-tested workforce deployment with end-to-end recruitment, visa processing, and compliance — trusted by employers across Russia, CIS, and GCC.",
    part1: [
        {
            title: "Government Licensed",
            desc: "Fully licensed by the Ministry of External Affairs, India. RA License No. B-3260/DEL/COM/100/5/11259/2025 — ensuring 100% legal and compliant recruitment.",
            projects: "RA B-3260"
        },
        {
            title: "Trade-Tested Workforce",
            desc: "Every candidate undergoes rigorous trade testing, skill verification, and background checks before deployment — guaranteeing quality manpower to employers.",
            projects: "5000+ Deployed"
        },
        {
            title: "Global Reach",
            desc: "Successfully deploying workforce to 11+ countries including Russia, UAE, Saudi Arabia, Qatar, Kuwait, Oman, Bahrain, Jordan, Egypt, Mauritius, and Malaysia.",
            projects: "11+ Countries"
        }
    ],
    part2: {
        title: "Decades of Trust in Global Workforce Deployment",
        desc: "With 20+ years in the overseas manpower industry, Taha Airwaves has built a reputation for reliability, speed, and compliance. From sourcing the right candidates to ensuring smooth deployment, we handle every detail so employers can focus on their projects. Our exclusive partnerships with international employers, rigorous screening processes, and dedicated deployment teams set us apart.",
        stats: [
            {
                number: "5000+",
                label: "Workers Deployed"
            },
            {
                number: "11+",
                label: "Countries Served"
            }
        ]
    }
}

export default function WhyUs() {
    return (
        <section className="pt-28 pb-20">
            <Container>
                <div className="space-y-10">
                    <div className="flex flex-col md:flex-row justify-between gap-8 border-b border-gray-300 pb-6">
                        <h2 className="text-xl md:text-2xl font-oswald font-medium italic uppercase" style={{ color: "#1a0a10" }}>
                            {data.title}
                        </h2>
                        <p className="text-sm md:text-base text-neutral-500 font-poppins max-w-150">
                            {data.description}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:gap-20" style={{ borderTop: "1px solid #d1d5db" }}>
                        <div className="grid grid-cols-1">
                            {data.part1.map((item, index) => (
                                <div key={index} className="py-8" style={{ borderBottom: "1px solid #d1d5db" }}>
                                    <h3 className="text-lg md:text-2xl font-medium font-poppins" style={{ color: "#1a0a10" }}>
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-gray-700 font-poppins mt-2 max-w-120">
                                        {item.desc}
                                    </p>
                                    <p className="font-medium text-right mt-4 text-[#BC264B]">
                                        {item.projects}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="bg-gray-100 relative flex items-center justify-center p-12 md:p-20">
                            <div className="absolute top-0 left-0 size-14 md:size-24 bg-white [clip-path:polygon(0_0,0_100%,100%_0)]" />
                            
                            <div className="space-y-8">
                                <h3 className="text-xl md:text-4xl font-medium font-poppins">
                                    {data.part2.title}
                                </h3>
                                <p className="text-sm md:text-base text-gray-700 font-poppins">
                                    {data.part2.desc}
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    {data.part2.stats.map((stat, index) => (
                                        <div key={index} className="space-y-2">
                                            <p className="text-3xl md:text-5xl text-[#BC264B] font-lato font-bold">{stat.number}</p>
                                            <p className="text-xs md:text-sm text-gray-700 font-medium font-poppins">
                                                {stat.label}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                
                                <div>
                                    <Link href="/contact">
                                        <button className="px-4 py-2 font-poppins transition cursor-pointer flex items-center gap-3"
                                            style={{ border: "1px solid rgba(26,10,16,0.3)", color: "#1a0a10" }}
                                            onMouseEnter={e => { e.currentTarget.style.background = "#1a0a10"; e.currentTarget.style.color = "#FDFBEF" }}
                                            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#1a0a10" }}>
                                            Get in touch
                                            <MdArrowOutward size={18} />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
