'use client'

import Container from "@/components/container";
import Link from "next/link";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

const SERVICES = [
    { slug: "cleaners", title: "Cleaners", desc: "Professional cleaning staff for hospitality, healthcare, construction, and corporate environments.", image: "/service-and-blog/Cleaners.jpeg" },
    { slug: "all-types-of-drivers", title: "All Types of Drivers", desc: "Light, heavy, bus, construction vehicle, and executive chauffeur manpower supply.", image: "/service-and-blog/drivers.jpeg" },
    { slug: "general-labour", title: "General Labour", desc: "Task-ready labour for construction, warehousing, factories, and industrial site operations.", image: "/service-and-blog/General-labours.jpeg" },
    { slug: "loading-unloading-workers", title: "Loading & Unloading Workers", desc: "Cargo handlers, dock workers, palletizers, and material movers for logistics and supply chain.", image: "/service-and-blog/Loading-unloading-workers.jpeg" },
    { slug: "factory-helpers", title: "Factory Helpers", desc: "Production line helpers, machine operation assistants, and plant maintenance support.", image: "/service-and-blog/Factory-helpers.jpeg" },
    { slug: "barista", title: "Barista Workers", desc: "Trained baristas for cafés, hotels, resorts, events, and corporate food courts.", image: "/service-and-blog/Barista-workers.jpeg" },
    { slug: "packing-workers", title: "Packing Workers", desc: "Packing, sorting, labeling, quality control, and container packing workforce.", image: "/service-and-blog/Packers-workers.jpeg" },
    { slug: "emigration-immigration-clearance", title: "Emigration & Immigration Clearance", desc: "POE registration, visa processing, contract validation, and regulatory compliance.", image: "/service-and-blog/Immigration-clearance.jpeg" },
    { slug: "document-attestation-services", title: "Document Attestation", desc: "State, MEA, and embassy attestation for educational, professional, and commercial documents.", image: "/service-and-blog/Document-attestation.jpeg" },
    { slug: "hajj-umrah-travel-services", title: "Hajj & Umrah Travel", desc: "Complete pilgrimage coordination — visa, accommodation, transport, and guided support.", image: "/service-and-blog/Hajj-umrah-travell-service.jpeg" },
    { slug: "employee-outsourcing-solutions", title: "Employee Outsourcing", desc: "Contract staffing, temporary workforce, permanent placement, and payroll management.", image: "/service-and-blog/employe-outsourcing-.jpeg" },
];

const reveal = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }
    })
}

export default function ServicesMain() {
    return (
        <section className="py-28" style={{ background: "#FDFBEF" }}>
            <Container>
                <div className="pt-20 space-y-12 relative z-10">
                    {/* Header */}
                    <div className="space-y-4 mb-8">
                        <div className="w-14 h-1 rounded-full" style={{ background: "#8E0935" }} />
                        <h1 style={{
                            fontFamily: "var(--font-cormorant-garamond)",
                            fontSize: "clamp(2.5rem, 5vw, 4rem)",
                            fontWeight: 600,
                            color: "#1a0a10",
                        }}>
                            Our Manpower <span className="italic" style={{ color: "#8E0935" }}>Services</span>
                        </h1>
                        <p className="max-w-xl" style={{
                            fontFamily: "var(--font-poppins)",
                            fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)",
                            color: "#6B7280",
                        }}>
                            Comprehensive workforce solutions tailored for global employers — from skilled recruitment and trade testing to visa processing and deployment.
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {SERVICES.map((svc, i) => (
                            <motion.div
                                key={svc.slug}
                                custom={i}
                                variants={reveal}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <Link href={`/services/${svc.slug}`}>
                                    <div className="group rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg cursor-pointer"
                                        style={{ background: "#fff", border: "1px solid rgba(142,9,53,0.1)" }}>
                                        {/* Image */}
                                        <div className="relative w-full overflow-hidden" style={{ height: "200px" }}>
                                            <Image
                                                src={svc.image}
                                                alt={svc.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 transition-all duration-500"
                                                style={{ background: "rgba(26,10,16,0.15)" }}
                                            />
                                        </div>
                                        {/* Content */}
                                        <div className="p-6 flex flex-col gap-3 flex-1">
                                            <div className="flex items-center justify-between">
                                                <h3 className="text-lg font-bold group-hover:text-[#8E0935] transition-colors" style={{ fontFamily: "var(--font-lato)", color: "#1a0a10" }}>
                                                    {svc.title}
                                                </h3>
                                                <MdArrowOutward className="text-[#BC264B] text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                                            </div>
                                            <p className="text-sm leading-relaxed flex-1" style={{ fontFamily: "var(--font-poppins)", color: "#6B7280" }}>
                                                {svc.desc}
                                            </p>
                                            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#BC264B]" style={{ fontFamily: "var(--font-lato)" }}>
                                                Learn More →
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
