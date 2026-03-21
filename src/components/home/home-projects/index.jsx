import Container from "@/components/container";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const data = {
    title: "• Taha Airwaves Services",
    desc: "Comprehensive Manpower Solutions — Skilled and Semi-Skilled Workforce for Global Deployment.",
}

const services = [
    {
        id: 1,
        title: "All Types of Cleaners",
        desc: "Professionally trained housekeeping and cleaning staff for hotels, hospitals, commercial complexes, and residential facilities.",
        tags: ["Housekeeping", "Commercial", "Industrial", "Residential"],
    },
    {
        id: 2,
        title: "All Types of Drivers",
        desc: "Licensed drivers for light and heavy vehicles — taxis, delivery trucks, construction equipment, and specialized transport vehicles.",
        tags: ["Light Vehicle", "Heavy Vehicle", "Commercial", "Specialized"],
    },
    {
        id: 3,
        title: "General Labour",
        desc: "Reliable and physically fit general labourers for construction sites, warehouses, factories, and infrastructure projects across Russia and CIS.",
        tags: ["Construction", "Warehouse", "Infrastructure", "Industrial"],
    },
    {
        id: 4,
        title: "Factory Helpers",
        desc: "Trained factory assistants for manufacturing, assembly lines, packaging, quality control, and production support operations.",
        tags: ["Manufacturing", "Assembly", "Packaging", "QC"],
    },
    {
        id: 5,
        title: "Loading & Unloading",
        desc: "Experienced cargo handlers and logistics workers for ports, warehouses, freight terminals, and distribution centres.",
        tags: ["Cargo", "Logistics", "Ports", "Distribution"],
    },
    {
        id: 6,
        title: "Employee Outsourcing",
        desc: "Complete HR outsourcing — temporary and permanent staffing solutions with payroll management and compliance handled end-to-end.",
        tags: ["Staffing", "HR", "Payroll", "Compliance"],
    },
];

export default function ServicesShowcase() {
    return (
        <section className="px-2 md:px-4">
            <div className="px-2 md:px-4 py-20 bg-cream/50 rounded-3xl">
                <div className="mx-auto lg:max-w-340 h-full">
                    <div className="space-y-8">
                        <div className="space-y-8 border-b border-gray-300 pb-8">
                            <h2 className="text-xl md:text-2xl font-oswald font-medium italic uppercase">
                                {data.title}
                            </h2>
                            <div className="flex flex-col md:flex-row justify-between gap-8">
                                <p className="text-xl md:text-4xl text-neutral-800 font-medium font-poppins max-w-150 leading-normal">
                                    {data.desc}
                                </p>
                                <div className="flex items-end">
                                    <Link href="/services">
                                        <button className="px-4 py-2 md:px-6 md:py-3 font-poppins border border-black/30 hover:bg-white bg-[#1a0a10] hover:text-black text-white transition cursor-pointer flex items-center gap-3">
                                            All Services
                                            <MdArrowOutward size={18} />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                            {services.map((service) => (
                                <div key={service.id} className="bg-white rounded-2xl p-6 md:p-8 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300 group">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-gray-400 tracking-widest font-mono">0{service.id}</span>
                                        <div className="w-2 h-2 rounded-full bg-[#BC264B] opacity-50 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-semibold font-lato text-gray-900 leading-tight">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm font-poppins text-gray-500 leading-relaxed flex-1">
                                        {service.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {service.tags.map((tag) => (
                                            <span key={tag} className="px-3 py-1 rounded-full border border-gray-200 text-xs text-gray-500 font-mono font-medium">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex items-end justify-center">
                            <Link href="/contact">
                                <button className="px-4 py-2 md:px-6 md:py-3 font-poppins border border-black/30 hover:bg-white bg-[#1a0a10] hover:text-black text-white transition cursor-pointer flex items-center gap-3">
                                    Hire Manpower
                                    <MdArrowOutward size={18} />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
