import Container from "@/components/container";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const SERVICES = [
    { slug: "cleaners", title: "Cleaners", desc: "Professional cleaning staff for hospitality, healthcare, construction, and corporate environments.", icon: "🧹" },
    { slug: "all-types-of-drivers", title: "All Types of Drivers", desc: "Light, heavy, bus, construction vehicle, and executive chauffeur manpower supply.", icon: "🚛" },
    { slug: "general-labour", title: "General Labour", desc: "Task-ready labour for construction, warehousing, factories, and industrial site operations.", icon: "⚒️" },
    { slug: "loading-unloading-workers", title: "Loading & Unloading Workers", desc: "Cargo handlers, dock workers, palletizers, and material movers for logistics and supply chain.", icon: "📦" },
    { slug: "factory-helpers", title: "Factory Helpers", desc: "Production line helpers, machine operation assistants, and plant maintenance support.", icon: "🏭" },
    { slug: "barista", title: "Barista Workers", desc: "Trained baristas for cafés, hotels, resorts, events, and corporate food courts.", icon: "☕" },
    { slug: "packing-workers", title: "Packing Workers", desc: "Packing, sorting, labeling, quality control, and container packing workforce.", icon: "🏷️" },
    { slug: "emigration-immigration-clearance", title: "Emigration & Immigration Clearance", desc: "POE registration, visa processing, contract validation, and regulatory compliance.", icon: "🛂" },
    { slug: "document-attestation-services", title: "Document Attestation", desc: "State, MEA, and embassy attestation for educational, professional, and commercial documents.", icon: "📋" },
    { slug: "hajj-umrah-travel-services", title: "Hajj & Umrah Travel", desc: "Complete pilgrimage coordination — visa, accommodation, transport, and guided support.", icon: "🕌" },
    { slug: "employee-outsourcing-solutions", title: "Employee Outsourcing", desc: "Contract staffing, temporary workforce, permanent placement, and payroll management.", icon: "🤝" },
];

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
                        {SERVICES.map((svc) => (
                            <Link key={svc.slug} href={`/services/${svc.slug}`}>
                                <div className="group p-6 rounded-2xl h-full flex flex-col gap-4 transition-all duration-300 hover:shadow-lg cursor-pointer"
                                    style={{ background: "#fff", border: "1px solid rgba(142,9,53,0.1)" }}>
                                    <div className="flex items-center justify-between">
                                        <span className="text-3xl">{svc.icon}</span>
                                        <MdArrowOutward className="text-[#BC264B] text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                                    </div>
                                    <h3 className="text-lg font-bold group-hover:text-[#8E0935] transition-colors" style={{ fontFamily: "var(--font-lato)", color: "#1a0a10" }}>
                                        {svc.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed flex-1" style={{ fontFamily: "var(--font-poppins)", color: "#6B7280" }}>
                                        {svc.desc}
                                    </p>
                                    <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#BC264B]" style={{ fontFamily: "var(--font-lato)" }}>
                                        Learn More →
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
