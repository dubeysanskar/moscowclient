'use client'

import Link from "next/link"
import { MdArrowOutward } from "react-icons/md"
import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"

/* Per-service accent colors — Taha Airwaves burgundy palette */
const ACCENTS = [
    "#BC264B",
    "#8E0935",
    "#D63864",
    "#A01540",
    "#C93060",
];

const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: (i = 0) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.75, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
    }),
};

export default function ServicesMainCard({ id, title, desc, images, features, index = 0 }) {
    const containerRef = useRef(null);
    const cardRef = useRef(null);
    const cardInView = useInView(cardRef, { once: true, margin: "-60px" });

    const isEven = id % 2 === 0;
    const accent = ACCENTS[index % ACCENTS.length];

    const TextContent = (
        <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate={cardInView ? "visible" : "hidden"}
            className="flex flex-col justify-center space-y-8 py-4"
        >
            {/* Index + thin rule */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <span style={{
                    fontSize: "11px",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: accent,
                    fontWeight: 500,
                    fontFamily: "'DM Sans', sans-serif",
                }}>
                    0{id}
                </span>
                <div style={{
                    flex: 1,
                    height: "1px",
                    background: `linear-gradient(to right, ${accent}66, transparent)`,
                }} />
                <div style={{
                    width: 5, height: 5,
                    background: accent,
                    transform: "rotate(45deg)",
                    opacity: 0.5,
                }} />
            </div>

            <div className="space-y-4">
                <h3 style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "clamp(1.6rem, 3vw, 2.75rem)",
                    fontWeight: 400,
                    color: "#1a0a10",
                    lineHeight: 1.2,
                    letterSpacing: "-0.01em",
                }}>
                    {title}
                </h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#666", lineHeight: 1.7, fontSize: "0.95rem" }}>
                    {desc}
                </p>

                {features?.length > 0 && (
                    <ul className="space-y-2 pt-2">
                        {features.map((item, i) => (
                            <motion.li
                                key={i}
                                custom={i + 1}
                                variants={fadeUp}
                                initial="hidden"
                                animate={cardInView ? "visible" : "hidden"}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontSize: "0.875rem",
                                    color: "#666",
                                }}
                            >
                                <span style={{
                                    width: 6, height: 6,
                                    borderRadius: "50%",
                                    background: accent,
                                    flexShrink: 0,
                                    opacity: 0.7,
                                }} />
                                {item}
                            </motion.li>
                        ))}
                    </ul>
                )}
            </div>

            {/* CTA button */}
            <div>
                <Link href="/contact">
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "10px",
                            padding: "10px 22px",
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "0.8rem",
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            fontWeight: 500,
                            color: "#1a0a10",
                            border: `1px solid ${accent}66`,
                            background: "transparent",
                            cursor: "pointer",
                            borderRadius: "2px",
                            transition: "all 0.35s ease",
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.background = "#1a0a10";
                            e.currentTarget.style.color = "#BC264B";
                            e.currentTarget.style.borderColor = "#1a0a10";
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.background = "transparent";
                            e.currentTarget.style.color = "#1a0a10";
                            e.currentTarget.style.borderColor = `${accent}66`;
                        }}
                    >
                        Get in touch
                        <MdArrowOutward />
                    </motion.button>
                </Link>
            </div>
        </motion.div>
    );

    const IconContent = (
        <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={cardInView ? "visible" : "hidden"}
            className="relative flex items-center justify-center"
        >
            {/* Decorative background card */}
            <div className="w-full aspect-[16/10] bg-gradient-to-br from-[#1a0a10] to-[#2a1018] rounded-2xl flex items-center justify-center relative overflow-hidden">
                {/* Ambient orb */}
                <div className="absolute -top-10 -right-10 w-[200px] h-[200px] rounded-full blur-[60px] pointer-events-none" style={{ background: `radial-gradient(circle, ${accent}33, transparent 70%)` }} />

                {/* Circle outlines */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] rounded-full border pointer-events-none" style={{ borderColor: `${accent}15` }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] rounded-full border pointer-events-none" style={{ borderColor: `${accent}10` }} />

                {/* Big number */}
                <span className="text-8xl md:text-9xl font-bold font-cormorant-garamond opacity-15" style={{ color: accent }}>
                    0{id}
                </span>

                {/* Label chip */}
                <div className="absolute bottom-4 right-4 px-4 py-1.5 rounded-full text-[10px] tracking-[0.18em] uppercase font-medium" style={{ background: "rgba(26,10,16,0.8)", backdropFilter: "blur(8px)", color: "rgba(255,240,242,0.7)" }}>
                    Taha Airwaves
                </div>
            </div>
        </motion.div>
    );

    return (
        <div
            ref={cardRef}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 py-14 relative"
        >
            <div style={{
                position: "absolute",
                bottom: 0, left: 0, right: 0,
                height: "1px",
                background: `linear-gradient(to right, transparent, ${accent}33, transparent)`,
                pointerEvents: "none",
            }} />

            {isEven ? (
                <>
                    {IconContent}
                    {TextContent}
                </>
            ) : (
                <>
                    {TextContent}
                    {IconContent}
                </>
            )}
        </div>
    );
}
