'use client'

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Container from "@/components/container";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
    }),
};

const STATS = [
    { value: "5000+", label: "Workers Deployed" },
    { value: "20+", label: "Years Experience" },
    { value: "11+", label: "Countries Served" },
    { value: "100%", label: "Compliance Rate" },
]

const VALUES = [
    {
        title: "Our Mission",
        desc: "To bridge the gap between India's vast talent pool and global employment opportunities by providing reliable, compliant, and efficient manpower recruitment services that empower workers and satisfy employers.",
        accent: "#BC264B",
    },
    {
        title: "Our Vision",
        desc: "To be the most trusted overseas manpower recruitment agency, recognized globally for quality, transparency, and end-to-end workforce deployment — from India to every corner of the world.",
        accent: "#8E0935",
    },
    {
        title: "Our Promise",
        desc: "Government-licensed, trade-tested, and fully documented workforce — delivered on time, every time. No shortcuts, No compromises. Every worker we deploy represents our reputation.",
        accent: "#BC264B",
    },
]

function AnimatedSection({ children, className = "" }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });
    return (
        <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} className={className}>
            {children}
        </motion.div>
    );
}

export default function AboutMain() {
    const visionRef = useRef(null);
    const visionInView = useInView(visionRef, { once: true, margin: "-80px" });

    return (
        <section style={{ background: "#FDFBEF" }} className="font-sans pt-36 pb-20 relative overflow-hidden">

            {/* Ambient orbs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div style={{ position:"absolute", width:"520px", height:"520px", top:"-80px", right:"-120px", borderRadius:"50%", background:"radial-gradient(circle, rgba(188,38,75,0.15) 0%, transparent 70%)", filter:"blur(100px)" }} />
                <div style={{ position:"absolute", width:"380px", height:"380px", top:"300px", left:"-100px", borderRadius:"50%", background:"radial-gradient(circle, rgba(142,9,53,0.12) 0%, transparent 70%)", filter:"blur(90px)" }} />
            </div>

            {/* HERO */}
            <AnimatedSection className="max-w-6xl mx-auto px-6 lg:px-12 mb-16 relative z-10">
                <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
                    <div className="max-w-2xl">
                        <motion.p variants={fadeUp} custom={0} className="text-xs tracking-[0.28em] uppercase font-medium mb-4" style={{ color: "#BC264B" }}>
                            About Taha Airwaves
                        </motion.p>
                        <motion.h2 variants={fadeUp} custom={1} className="text-4xl lg:text-6xl font-semibold leading-[1.1] tracking-tight" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#1a0a10" }}>
                            Empowering Global<br />
                            <span className="italic font-normal" style={{ color: "#BC264B" }}>Workforce Deployment.</span>
                        </motion.h2>
                    </div>
                    <div className="max-w-md self-end pb-2">
                        <motion.p variants={fadeUp} custom={2} style={{ color: "#555" }} className="leading-relaxed font-poppins">
                            Since 2005, Taha Airwaves Private Limited has been connecting India's skilled and semi-skilled workforce
                            with global employers across Russia, CIS, GCC, and beyond — with full government licensing and compliance.
                        </motion.p>
                    </div>
                </div>
            </AnimatedSection>

            {/* Divider */}
            <AnimatedSection className="max-w-6xl mx-auto px-6 lg:px-12 mb-16 relative z-10">
                <motion.div variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 1.1 } } }} className="origin-left h-px" style={{ background: "linear-gradient(to right, #BC264B44, #BC264B, transparent)" }} />
            </AnimatedSection>

            {/* STATS */}
            <div className="max-w-6xl mx-auto px-6 lg:px-12 mb-20 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {STATS.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="text-center bg-white/60 rounded-2xl p-8 border border-[#BC264B]/10"
                        >
                            <p className="text-4xl md:text-5xl font-lato font-bold" style={{ color: '#8E0935' }}>{stat.value}</p>
                            <p className="text-sm text-gray-500 font-poppins mt-2">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* VALUES */}
            <div className="max-w-6xl mx-auto px-6 lg:px-12 mb-20 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {VALUES.map((value, i) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className="bg-[#1a0a10] rounded-2xl p-8 border border-white/5"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-2 h-2 rounded-full" style={{ background: value.accent }} />
                                <span className="text-xs tracking-[0.2em] uppercase font-lato font-bold" style={{ color: value.accent }}>
                                    {value.title}
                                </span>
                            </div>
                            <p className="text-sm font-poppins text-white/60 leading-relaxed">
                                {value.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* COMPANY INFO */}
            <div ref={visionRef} className="relative z-10">
                <div style={{ background: "#FDFBEF" }} className="py-24 px-6 lg:px-12 relative overflow-hidden">

                    <div style={{ position:"absolute", width:"700px", height:"700px", borderRadius:"50%", border:"1px solid rgba(188,38,75,0.08)", top:"50%", right:"-200px", transform:"translateY(-50%)", pointerEvents:"none" }} />

                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left — license card */}
                        <div className="bg-[#1a0a10] rounded-3xl p-10 relative overflow-hidden">
                            <div className="absolute -top-10 -right-10 w-[200px] h-[200px] rounded-full bg-[radial-gradient(circle,rgba(188,38,75,0.2)_0%,transparent_70%)] blur-[60px]" />
                            <div className="relative z-10">
                                <p className="text-xs tracking-[0.2em] uppercase font-lato font-bold text-[#BC264B] mb-6">Government Licensed Agency</p>
                                <div className="space-y-4">
                                    <div className="border border-white/10 rounded-xl p-4">
                                        <p className="text-xs text-white/40 font-poppins mb-1">Agency Name</p>
                                        <p className="text-lg font-poppins font-medium text-cream">Taha Airwaves Private Limited</p>
                                    </div>
                                    <div className="border border-white/10 rounded-xl p-4">
                                        <p className="text-xs text-white/40 font-poppins mb-1">RA License Number</p>
                                        <p className="text-lg font-lato font-bold text-[#BC264B]">B-3260/DEL/COM/100/5/11259/2025</p>
                                    </div>
                                    <div className="border border-white/10 rounded-xl p-4">
                                        <p className="text-xs text-white/40 font-poppins mb-1">Registered Office</p>
                                        <p className="text-sm font-poppins text-white/70">71A, 3rd Floor, Taimoor Nagar, New Friends Colony, New Delhi 110025</p>
                                    </div>
                                    <div className="border border-white/10 rounded-xl p-4">
                                        <p className="text-xs text-white/40 font-poppins mb-1">Established</p>
                                        <p className="text-lg font-poppins font-medium text-cream">2005</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right — text */}
                        <div className="flex flex-col gap-6">
                            <motion.p custom={0} variants={fadeUp} initial="hidden" animate={visionInView ? "visible" : "hidden"} className="text-xs tracking-[0.28em] uppercase font-medium" style={{ color: "#BC264B" }}>
                                Our Story
                            </motion.p>
                            <motion.h3 custom={1} variants={fadeUp} initial="hidden" animate={visionInView ? "visible" : "hidden"} className="text-4xl lg:text-5xl font-semibold leading-[1.15] tracking-tight" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#1a0a10" }}>
                                Built on Trust,
                                <span className="italic font-normal" style={{ color: "#BC264B" }}> Driven by Expertise.</span>
                            </motion.h3>
                            <motion.div custom={2} variants={fadeUp} initial="hidden" animate={visionInView ? "visible" : "hidden"} className="space-y-4 text-sm leading-relaxed" style={{ color: "#555" }}>
                                <p>
                                    Founded in 2005, Taha Airwaves started with a simple vision — to create reliable pathways for
                                    Indian workers seeking opportunities abroad. Over two decades, we've grown into one of India's
                                    most trusted overseas recruitment agencies.
                                </p>
                                <p>
                                    Today we deploy over 5000 workers across 11+ countries including Russia, UAE, Saudi Arabia,
                                    Qatar, Kuwait, and beyond. Our government license, rigorous trade testing, and dedicated
                                    deployment teams ensure every worker and employer trusts the Taha Airwaves name.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
