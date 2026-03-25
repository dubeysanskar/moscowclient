'use client'

import { motion } from "framer-motion"

const VARIANTS = {
    fadeUp: {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    },
    fadeDown: {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
    },
    fadeLeft: {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    },
    fadeRight: {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
    },
    scaleIn: {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
    },
    shutter: {
        hidden: { opacity: 0, clipPath: "inset(0 0 100% 0)" },
        visible: { opacity: 1, clipPath: "inset(0 0 0% 0)" },
    },
}

export default function ScrollReveal({
    children,
    variant = "fadeUp",
    delay = 0,
    duration = 0.7,
    className = "",
    style = {},
    once = true,
    threshold = 0.15,
    as = "div",
}) {
    const MotionComponent = motion[as] || motion.div
    const selectedVariant = VARIANTS[variant] || VARIANTS.fadeUp

    return (
        <MotionComponent
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount: threshold }}
            variants={selectedVariant}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className={className}
            style={style}
        >
            {children}
        </MotionComponent>
    )
}

// Stagger container for child animations
export function StaggerContainer({
    children,
    className = "",
    style = {},
    staggerDelay = 0.1,
    once = true,
}) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount: 0.1 }}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: staggerDelay,
                    },
                },
            }}
            className={className}
            style={style}
        >
            {children}
        </motion.div>
    )
}

// Individual stagger child
export function StaggerItem({
    children,
    variant = "fadeUp",
    duration = 0.6,
    className = "",
    style = {},
}) {
    const selectedVariant = VARIANTS[variant] || VARIANTS.fadeUp

    return (
        <motion.div
            variants={selectedVariant}
            transition={{
                duration,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className={className}
            style={style}
        >
            {children}
        </motion.div>
    )
}
