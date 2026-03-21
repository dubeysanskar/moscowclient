'use client'

import Container from "@/components/container";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import { BLOG_POSTS } from "@/data/blog-posts";

const reveal = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" }
    })
}

export default function BlogPage() {
    return (
        <section className="pt-36 pb-20" style={{ background: "#FDFBEF" }}>
            <Container>
                <div className="space-y-12">
                    {/* Header */}
                    <div className="space-y-4">
                        <div className="w-14 h-1 rounded-full" style={{ background: "#8E0935" }} />
                        <h1 style={{ fontFamily: "var(--font-cormorant-garamond)", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 600, color: "#1a0a10" }}>
                            Latest <span className="italic" style={{ color: "#BC264B" }}>Insights</span>
                        </h1>
                        <p className="max-w-lg" style={{ fontFamily: "var(--font-poppins)", fontSize: "clamp(0.9rem, 1.2vw, 1rem)", color: "#6B7280" }}>
                            Industry trends, deployment guides, compliance updates, and market insights from the global manpower recruitment space.
                        </p>
                    </div>

                    {/* Blog Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {BLOG_POSTS.map((post, i) => (
                            <motion.div
                                key={post.slug}
                                custom={i}
                                variants={reveal}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="group"
                            >
                                <Link href={`/blog/${post.slug}`}>
                                    <div className="bg-white rounded-2xl p-6 h-full flex flex-col gap-4 transition-all duration-300 hover:shadow-lg cursor-pointer"
                                        style={{ border: "1px solid rgba(142,9,53,0.1)" }}>
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs tracking-widest uppercase font-bold" style={{ color: "#BC264B", fontFamily: "var(--font-lato)" }}>
                                                {post.category}
                                            </span>
                                            <span className="text-xs text-gray-400" style={{ fontFamily: "var(--font-poppins)" }}>
                                                {post.readTime}
                                            </span>
                                        </div>
                                        <h3 className="text-lg md:text-xl font-medium leading-snug group-hover:text-[#BC264B] transition-colors"
                                            style={{ fontFamily: "var(--font-poppins)", color: "#1a0a10" }}>
                                            {post.title}
                                        </h3>
                                        <p className="text-sm leading-relaxed flex-1" style={{ fontFamily: "var(--font-poppins)", color: "#6B7280" }}>
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between pt-4" style={{ borderTop: "1px solid rgba(142,9,53,0.08)" }}>
                                            <span className="text-xs text-gray-400" style={{ fontFamily: "var(--font-poppins)" }}>{post.date}</span>
                                            <div className="flex items-center gap-2 text-sm font-medium" style={{ color: "#BC264B", fontFamily: "var(--font-poppins)" }}>
                                                Read More
                                                <MdArrowOutward size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}
