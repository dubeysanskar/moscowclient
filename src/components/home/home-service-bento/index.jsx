'use client'

import Container from "@/components/container";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

const data = {
    learn_more_card: {
        desc1: "Comprehensive manpower solutions bridging India's talent with global demand",
        desc2: "From sourcing to deployment — we handle the complete recruitment lifecycle",
    }
}

const reveal = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
}

const WHAT_WE_DO = [
    { title: "Source & Screen", desc: "Verified candidates from India's largest talent pool" },
    { title: "Trade Test", desc: "Rigorous skill assessments and background verification" },
    { title: "Visa & Docs", desc: "End-to-end visa processing and compliance" },
    { title: "Deploy", desc: "Pre-departure orientation and travel coordination" },
]

export default function HomeServiceBento() {
    return (
        <section className="py-14">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                    {/* Large — What We Do */}
                    <motion.div
                        variants={reveal}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="col-span-1 md:col-span-2 md:row-span-2 bg-[#1a0a10] rounded-2xl p-8 md:p-12 flex flex-col justify-center"
                    >
                        <h2 className="text-3xl md:text-5xl font-cormorant-garamond font-semibold text-cream mb-8 uppercase">
                            What We <span className="italic text-[#BC264B]">Do</span>
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {WHAT_WE_DO.map((item, i) => (
                                <div key={i} className="border border-white/10 rounded-xl p-5 hover:border-[#BC264B]/30 transition-colors">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-[#BC264B] text-sm font-lato font-bold">0{i + 1}</span>
                                        <div className="h-px flex-1 bg-gradient-to-r from-[#BC264B]/30 to-transparent" />
                                    </div>
                                    <h3 className="text-lg font-poppins font-medium text-cream mb-1">{item.title}</h3>
                                    <p className="text-sm font-poppins text-white/50">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* CTA Card */}
                    <motion.div
                        variants={reveal}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="w-full h-max bg-cream/50 rounded-2xl p-4 md:p-6 flex flex-col gap-6"
                    >
                        <Link href="/services">
                            <button className="px-6 py-3 font-poppins rounded-full border-2 border-black/30 hover:bg-[#1a0a10] hover:text-white transition cursor-pointer flex items-center gap-3">
                                Learn More
                                <MdArrowOutward size={18} />
                            </button>
                        </Link>

                        <div className="space-y-2 md:space-y-4 px-1">
                            <p className="text-sm md:text-base font-poppins">
                                {data.learn_more_card.desc1}
                            </p>
                            <p className="text-lg md:text-2xl font-medium font-poppins">
                                {data.learn_more_card.desc2}
                            </p>
                        </div>
                    </motion.div>

                    {/* Stats Card */}
                    <motion.div
                        variants={reveal}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="rounded-2xl w-full h-full bg-gradient-to-br from-[#BC264B] to-[#8E0935] p-6 flex flex-col justify-center text-white"
                    >
                        <div className="space-y-4">
                            <div>
                                <p className="text-4xl font-lato font-bold">5000+</p>
                                <p className="text-sm text-white/70 font-poppins">Workers Successfully Deployed</p>
                            </div>
                            <div className="h-px bg-white/20" />
                            <div>
                                <p className="text-4xl font-lato font-bold">11+</p>
                                <p className="text-sm text-white/70 font-poppins">Countries Served Globally</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </Container>
        </section>
    )
}
