'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function FaqAccordion({ faqs = [] }) {
    const [openIndex, setOpenIndex] = useState(null)

    return (
        <div className="space-y-3">
            {faqs.map((faq, i) => (
                <div key={i} className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(142,9,53,0.15)", background: "#FDFBEF" }}>
                    <button
                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        className="w-full flex items-center justify-between px-6 py-4 text-left cursor-pointer"
                        style={{ fontFamily: "var(--font-lato)" }}
                    >
                        <span className="font-semibold text-base" style={{ color: "#1a0a10" }}>{faq.q}</span>
                        <span className="text-xl ml-4 flex-shrink-0 transition-transform duration-300"
                            style={{ color: "#8E0935", transform: openIndex === i ? "rotate(45deg)" : "rotate(0)" }}>+</span>
                    </button>
                    <AnimatePresence>
                        {openIndex === i && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <p className="px-6 pb-4 text-sm leading-relaxed" style={{ color: "#6B7280", fontFamily: "var(--font-poppins)" }}>
                                    {faq.a}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    )
}
