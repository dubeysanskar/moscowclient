'use client'

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

const industries = [
    { label: "Construction", image: "/images/demo4.jpeg", desc: "Skilled workers, masons, and site supervisors" },
    { label: "Hospitality", image: "/images/hospitality.png", desc: "Hotel staff, cleaners, and hospitality professionals" },
    { label: "Logistics", image: "/images/demo5.jpeg", desc: "Warehouse staff, material handlers, and supply chain workers" },
    { label: "Healthcare", image: "/images/healthcare.png", desc: "Healthcare support staff and medical assistants" },
    { label: "Manufacturing", image: "/images/demo7.jpeg", desc: "Factory workers, machine operators, and QC inspectors" },
    { label: "Facility Management", image: "/images/facility-management.png", desc: "Maintenance staff, janitors, and facility operators" },
    { label: "Oil & Gas", image: "/images/oil-gas.png", desc: "Drilling crew, pipeline workers, and refinery operators" },
    { label: "IT & Telecom", image: "/images/it-telecom.png", desc: "IT support staff, network technicians, and telecom engineers" },
    { label: "Retail & FMCG", image: "/images/retail-fmcg.png", desc: "Store associates, merchandisers, and sales executives" },
]

const fadeUp = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: (i = 0) => ({
        opacity: 1, y: 0, scale: 1,
        transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
    }),
}

export default function IndustriesWeServe() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-80px" })

    return (
        <section ref={ref} className="relative py-20 lg:py-28 overflow-hidden" style={{ background: "#FDFBEF" }}>
            <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-14">
                    <div className="w-14 h-1 mx-auto rounded-full mb-6" style={{ background: "#8E0935" }} />
                    <h2 className="mb-3" style={{
                        fontFamily: "var(--font-cormorant-garamond)",
                        fontSize: "clamp(2rem, 4vw, 3.5rem)",
                        fontWeight: 600,
                        color: "#1a0a10",
                    }}>
                        Industries We <span className="italic" style={{ color: "#8E0935" }}>Serve</span>
                    </h2>
                    <p className="max-w-2xl mx-auto" style={{
                        fontFamily: "var(--font-poppins)",
                        fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)",
                        color: "#6B7280",
                    }}>
                        Specialized manpower solutions across high-demand sectors worldwide
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                    {industries.map((ind, i) => (
                        <motion.div
                            key={ind.label}
                            custom={i}
                            variants={fadeUp}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            className="group relative rounded-2xl overflow-hidden cursor-pointer"
                            style={{ minHeight: "clamp(180px, 30vw, 260px)" }}
                        >
                            <Image
                                src={ind.image}
                                alt={ind.label}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Default overlay */}
                            <div className="absolute inset-0 transition-all duration-500"
                                style={{ background: "rgba(26,10,16,0.55)" }}
                                onMouseEnter={e => e.currentTarget.style.background = "rgba(142,9,53,0.7)"}
                                onMouseLeave={e => e.currentTarget.style.background = "rgba(26,10,16,0.55)"}
                            />

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-end p-5 lg:p-6 text-white z-10">
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 transition-transform duration-300 group-hover:-translate-y-2"
                                    style={{ fontFamily: "var(--font-lato)" }}>
                                    {ind.label}
                                </h3>
                                <p className="text-sm text-white/80 sm:opacity-0 sm:translate-y-4
                                    sm:group-hover:opacity-100 sm:group-hover:translate-y-0 transition-all duration-500 delay-75"
                                    style={{ fontFamily: "var(--font-poppins)" }}>
                                    {ind.desc}
                                </p>
                            </div>

                            {/* Hover ring */}
                            <div className="absolute top-4 right-4 w-8 h-8 rounded-full border-2 border-white/0
                                group-hover:border-white/40 transition-all duration-500 flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-white/0 group-hover:bg-white/80 transition-all duration-500" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
