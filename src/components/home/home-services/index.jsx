"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

import { useRef } from "react"
import Container from "@/components/container"
import Link from "next/link"
import { MdArrowBack, MdArrowForward, MdArrowOutward } from "react-icons/md"

const SERVICES = [
    {
        number: "01",
        title: "Overseas Recruitment",
        desc: "End-to-end recruitment solutions for international employers seeking skilled and unskilled Indian workforce. From Russia and CIS to GCC markets, we source the right talent for every project."
    },
    {
        number: "02",
        title: "Bulk Manpower Hiring",
        desc: "High-volume workforce mobilization with rapid turnaround for large-scale construction, industrial, and infrastructure projects in Russia and across global markets."
    },
    {
        number: "03",
        title: "Visa & Documentation",
        desc: "Complete visa processing, document attestation, emigration clearance, and compliance management for seamless international workforce deployment."
    },
    {
        number: "04",
        title: "Deployment Support",
        desc: "Pre-departure orientation, travel coordination, and post-deployment follow-up services ensuring workers are job-ready and employers receive guaranteed workforce."
    },
    {
        number: "05",
        title: "Employee Outsourcing",
        desc: "Complete workforce outsourcing solutions — staffing, payroll management, and HR compliance handled end-to-end for businesses expanding into Russia and CIS markets."
    }
];

const data = {
    title: "• Services we offer",
    bottom_desc: "From skilled workers and trade-tested professionals to bulk manpower for mega-projects, we deliver verified workforce with full documentation, visa processing, and deployment support — covering Russia, CIS, GCC, and beyond.",
}

export default function CardCarousel() {

    const swiperRef = useRef(null)

    return (
        <section className="py-20">
            <Container>
                <div className="space-y-10">

                    {/* Header */}
                    <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-300">
                        <h2 className="text-xl md:text-2xl font-oswald font-medium italic uppercase">
                            {data.title}
                        </h2>

                        <div className="flex gap-3">
                            <button
                                onClick={() => swiperRef.current?.slidePrev()}
                                className="p-2 border border-black/20 hover:bg-black hover:text-white transition cursor-pointer"
                            >
                                <MdArrowBack size={20} />
                            </button>

                            <button
                                onClick={() => swiperRef.current?.slideNext()}
                                className="p-2 border border-black/20 hover:bg-black hover:text-white transition cursor-pointer"
                            >
                                <MdArrowForward size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Swiper */}
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={8}
                        slidesPerView={1}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false
                        }}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 }
                        }}
                        className="!pb-10"
                    >

                        {SERVICES.map((card, i) => (
                            <SwiperSlide key={i}>
                                <div className="min-h-[440px] bg-[#1a0a10] border border-white/8 flex flex-col gap-4 p-6 hover:bg-[#2a1018] transition-colors duration-300">
                                    <span className="text-lg tracking-widest text-white/40">
                                        {card.number}
                                    </span>

                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#BC264B]/20 to-[#8E0935]/10 flex items-center justify-center">
                                        <div className="w-3 h-3 rounded-full bg-[#BC264B]" />
                                    </div>

                                    <div className="space-y-2">
                                        <h3 className="font-cormorant-garamond text-2xl font-medium text-white mb-3 leading-tight">
                                            {card.title}
                                        </h3>
                                        <p className="text-sm font-poppins text-white/50 leading-relaxed">
                                            {card.desc}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}

                    </Swiper>

                    {/* Bottom */}
                    <div className="flex flex-col md:flex-row justify-center gap-8">
                        <p className="text-gray-600 font-poppins max-w-200">
                            {data.bottom_desc}
                        </p>

                        <Link href="/services">
                            <button className="px-6 py-3 font-poppins border border-black/30 hover:bg-[#1a0a10] hover:text-white transition cursor-pointer flex items-center gap-3">
                                View All Services
                                <MdArrowOutward size={18} />
                            </button>
                        </Link>
                    </div>

                </div>
            </Container>
        </section>
    )
}
