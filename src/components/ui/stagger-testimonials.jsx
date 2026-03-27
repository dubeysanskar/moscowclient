'use client'

import React, { useState, useEffect } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

/**
 * StaggerTestimonials — Taha Airwaves brand-adapted staggered card carousel.
 * Maroon (#8A0029) center card, warm cream (#FDFBEF) background.
 */
function StaggerTestimonials({ testimonials = [] }) {
    const [cardSize, setCardSize] = useState(365)
    const [list, setList] = useState(testimonials)

    useEffect(() => { setList(testimonials) }, [testimonials])

    const handleMove = (steps) => {
        const newList = [...list]
        if (steps > 0) {
            for (let i = steps; i > 0; i--) {
                const item = newList.shift()
                if (!item) return
                newList.push({ ...item, _key: Math.random() })
            }
        } else {
            for (let i = steps; i < 0; i++) {
                const item = newList.pop()
                if (!item) return
                newList.unshift({ ...item, _key: Math.random() })
            }
        }
        setList(newList)
    }

    useEffect(() => {
        const update = () => {
            setCardSize(window.innerWidth >= 640 ? 365 : Math.min(280, window.innerWidth - 40))
        }
        update()
        window.addEventListener('resize', update)
        return () => window.removeEventListener('resize', update)
    }, [])

    if (!list.length) return null

    const SQRT_5000 = Math.sqrt(5000)

    return (
        <div className="relative w-full overflow-hidden" style={{ height: 520 }}>
            {list.map((item, index) => {
                const position = list.length % 2
                    ? index - (list.length + 1) / 2
                    : index - list.length / 2
                const isCenter = position === 0

                return (
                    <div
                        key={item._key || item.name}
                        onClick={() => handleMove(position)}
                        className="absolute left-1/2 top-1/2 cursor-pointer p-7 transition-all duration-500 ease-in-out"
                        style={{
                            width: cardSize,
                            height: cardSize,
                            clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
                            transform: `
                                translate(-50%, -50%)
                                translateX(${(cardSize / 1.5) * position}px)
                                translateY(${isCenter ? -55 : position % 2 ? 15 : -15}px)
                                rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
                            `,
                            background: isCenter ? '#8A0029' : '#FFFFFF',
                            border: isCenter ? '2px solid #8A0029' : '2px solid rgba(138,0,41,0.1)',
                            boxShadow: isCenter ? '0px 8px 0px 4px rgba(138,0,41,0.15)' : 'none',
                            zIndex: isCenter ? 10 : 0,
                        }}
                    >
                        {/* Corner cut line */}
                        <span className="absolute block origin-top-right rotate-45"
                            style={{
                                right: -2, top: 48,
                                width: SQRT_5000, height: 2,
                                background: isCenter ? 'rgba(255,255,255,0.2)' : 'rgba(138,0,41,0.1)',
                            }} />

                        {/* Flag */}
                        <img src={item.flag} alt="" className="mb-4 h-8 w-10 rounded-sm object-cover shadow-sm" loading="lazy" />

                        {/* Quote */}
                        <h3 className="text-xs sm:text-sm md:text-base font-medium leading-relaxed line-clamp-6 sm:line-clamp-none"
                            style={{
                                fontFamily: 'var(--font-poppins)',
                                color: isCenter ? '#FFFFFF' : '#262626',
                            }}>
                            &ldquo;{item.text}&rdquo;
                        </h3>

                        {/* Author */}
                        <p className="absolute bottom-7 left-7 right-7 text-xs italic"
                            style={{
                                fontFamily: 'var(--font-inter)',
                                color: isCenter ? 'rgba(255,255,255,0.7)' : 'rgba(38,38,38,0.5)',
                            }}>
                            — {item.name}, {item.role}
                        </p>
                    </div>
                )
            })}

            {/* Navigation */}
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                <button
                    onClick={() => handleMove(-1)}
                    className="flex h-12 w-12 items-center justify-center text-xl transition-colors cursor-pointer"
                    style={{
                        background: '#FFFFFF', border: '2px solid rgba(138,0,41,0.15)',
                        color: '#8A0029',
                    }}
                    aria-label="Previous testimonial"
                >
                    <FiChevronLeft />
                </button>
                <button
                    onClick={() => handleMove(1)}
                    className="flex h-12 w-12 items-center justify-center text-xl transition-colors cursor-pointer"
                    style={{
                        background: '#8A0029', border: '2px solid #8A0029',
                        color: '#FFFFFF',
                    }}
                    aria-label="Next testimonial"
                >
                    <FiChevronRight />
                </button>
            </div>
        </div>
    )
}

export { StaggerTestimonials }
