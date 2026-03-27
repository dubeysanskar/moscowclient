'use client'

import { useState, useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

/**
 * RadialOrbitalTimeline — adapted for Taha Airwaves brand.
 * Uses maroon (#8A0029) + accent (#D32F2F) instead of black/purple.
 * Takes timelineData array with: id, title, date, content, category, icon, relatedIds, status, energy
 */
export default function RadialOrbitalTimeline({ timelineData }) {
    const [expandedItems, setExpandedItems] = useState({})
    const [rotationAngle, setRotationAngle] = useState(0)
    const [autoRotate, setAutoRotate] = useState(true)
    const [pulseEffect, setPulseEffect] = useState({})
    const [centerOffset] = useState({ x: 0, y: 0 })
    const [activeNodeId, setActiveNodeId] = useState(null)
    const containerRef = useRef(null)
    const orbitRef = useRef(null)
    const nodeRefs = useRef({})

    const handleContainerClick = (e) => {
        if (e.target === containerRef.current || e.target === orbitRef.current) {
            setExpandedItems({})
            setActiveNodeId(null)
            setPulseEffect({})
            setAutoRotate(true)
        }
    }

    const getRelatedItems = (itemId) => {
        const currentItem = timelineData.find((item) => item.id === itemId)
        return currentItem ? currentItem.relatedIds : []
    }

    const toggleItem = (id) => {
        setExpandedItems((prev) => {
            const newState = { ...prev }
            Object.keys(newState).forEach((key) => {
                if (parseInt(key) !== id) newState[parseInt(key)] = false
            })
            newState[id] = !prev[id]

            if (!prev[id]) {
                setActiveNodeId(id)
                setAutoRotate(false)
                const related = getRelatedItems(id)
                const newPulse = {}
                related.forEach((relId) => { newPulse[relId] = true })
                setPulseEffect(newPulse)
                centerViewOnNode(id)
            } else {
                setActiveNodeId(null)
                setAutoRotate(true)
                setPulseEffect({})
            }
            return newState
        })
    }

    useEffect(() => {
        let timer
        if (autoRotate) {
            timer = setInterval(() => {
                setRotationAngle((prev) => Number(((prev + 0.3) % 360).toFixed(3)))
            }, 50)
        }
        return () => { if (timer) clearInterval(timer) }
    }, [autoRotate])

    const centerViewOnNode = (nodeId) => {
        const nodeIndex = timelineData.findIndex((item) => item.id === nodeId)
        const targetAngle = (nodeIndex / timelineData.length) * 360
        setRotationAngle(270 - targetAngle)
    }

    const calculateNodePosition = (index, total) => {
        const angle = ((index / total) * 360 + rotationAngle) % 360
        const radius = 180
        const radian = (angle * Math.PI) / 180
        const x = radius * Math.cos(radian) + centerOffset.x
        const y = radius * Math.sin(radian) + centerOffset.y
        const zIndex = Math.round(100 + 50 * Math.cos(radian))
        const opacity = Math.max(0.4, Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2)))
        return { x, y, angle, zIndex, opacity }
    }

    const isRelatedToActive = (itemId) => {
        if (!activeNodeId) return false
        return getRelatedItems(activeNodeId).includes(itemId)
    }

    const getStatusStyles = (status) => {
        switch (status) {
            case "completed": return "text-white bg-[#8A0029] border-[#D32F2F]"
            case "in-progress": return "text-[#8A0029] bg-white border-[#8A0029]"
            case "pending": return "text-white bg-[#8A0029]/40 border-white/50"
            default: return "text-white bg-[#8A0029]/40 border-white/50"
        }
    }

    return (
        <div
            ref={containerRef}
            onClick={handleContainerClick}
            className="w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center relative"
            style={{ minHeight: "420px" }}
        >
            <div
                ref={orbitRef}
                className="absolute w-full h-full flex items-center justify-center"
                style={{ perspective: "1000px", transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)` }}
            >
                {/* Center nucleus */}
                <div className="absolute w-14 h-14 rounded-full flex items-center justify-center z-10"
                    style={{ background: "linear-gradient(135deg, #8A0029, #D32F2F)" }}>
                    <div className="absolute w-18 h-18 rounded-full border animate-ping opacity-50" style={{ width: 72, height: 72, borderColor: "rgba(138,0,41,0.3)" }} />
                    <div className="w-7 h-7 rounded-full" style={{ background: "rgba(255,255,255,0.85)", backdropFilter: "blur(4px)" }} />
                </div>

                {/* Orbit ring */}
                <div className="absolute rounded-full border" style={{ width: 360, height: 360, borderColor: "rgba(138,0,41,0.15)" }} />

                {/* Nodes */}
                {timelineData.map((item, index) => {
                    const position = calculateNodePosition(index, timelineData.length)
                    const isExpanded = expandedItems[item.id]
                    const isRelated = isRelatedToActive(item.id)
                    const isPulsing = pulseEffect[item.id]
                    const Icon = item.icon

                    return (
                        <div
                            key={item.id}
                            ref={(el) => { nodeRefs.current[item.id] = el }}
                            className="absolute transition-all duration-700 cursor-pointer"
                            style={{
                                transform: `translate(${position.x}px, ${position.y}px)`,
                                zIndex: isExpanded ? 200 : position.zIndex,
                                opacity: isExpanded ? 1 : position.opacity,
                            }}
                            onClick={(e) => { e.stopPropagation(); toggleItem(item.id) }}
                        >
                            {/* Glow */}
                            <div className={`absolute rounded-full -inset-1 ${isPulsing ? "animate-pulse" : ""}`}
                                style={{
                                    background: "radial-gradient(circle, rgba(138,0,41,0.25) 0%, transparent 70%)",
                                    width: `${item.energy * 0.4 + 36}px`, height: `${item.energy * 0.4 + 36}px`,
                                    left: `-${(item.energy * 0.4 + 36 - 36) / 2}px`, top: `-${(item.energy * 0.4 + 36 - 36) / 2}px`,
                                }} />

                            {/* Node circle */}
                            <div className={`w-9 h-9 rounded-full flex items-center justify-center border-2 transition-all duration-300
                                ${isExpanded ? "scale-150 border-[#8A0029] shadow-lg" : isRelated ? "border-[#D32F2F] animate-pulse" : "border-[rgba(138,0,41,0.3)]"}
                            `} style={{
                                background: isExpanded ? "#8A0029" : isRelated ? "rgba(211,47,47,0.3)" : "#FFFFFF",
                                color: isExpanded ? "#FFFFFF" : "#8A0029",
                                boxShadow: isExpanded ? "0 0 20px rgba(138,0,41,0.3)" : "none",
                            }}>
                                <Icon size={14} />
                            </div>

                            {/* Label */}
                            <div className={`absolute top-11 whitespace-nowrap text-[10px] font-bold tracking-wider transition-all duration-300 ${isExpanded ? "scale-110" : ""}`}
                                style={{ color: isExpanded ? "#8A0029" : "rgba(38,38,38,0.6)", fontFamily: "var(--font-inter)" }}>
                                {item.title}
                            </div>

                            {/* Expanded card */}
                            {isExpanded && (
                                <Card className="absolute top-16 left-1/2 -translate-x-1/2 w-56 shadow-xl overflow-visible rounded-xl"
                                    style={{ background: "rgba(255,255,255,0.97)", border: "1px solid rgba(138,0,41,0.12)", backdropFilter: "blur(12px)" }}>
                                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-px h-2" style={{ background: "rgba(138,0,41,0.3)" }} />
                                    <CardHeader className="pb-2 p-4">
                                        <div className="flex justify-between items-center">
                                            <Badge className={`px-2 text-[9px] ${getStatusStyles(item.status)}`}>
                                                {item.status === "completed" ? "COMPLETE" : item.status === "in-progress" ? "IN PROGRESS" : "PENDING"}
                                            </Badge>
                                            <span className="text-[9px] font-mono" style={{ color: "rgba(38,38,38,0.4)" }}>{item.date}</span>
                                        </div>
                                        <CardTitle className="text-xs mt-1.5" style={{ color: "#262626", fontFamily: "var(--font-inter)" }}>
                                            {item.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-[10px] px-4 pb-4 pt-0" style={{ color: "rgba(38,38,38,0.6)", fontFamily: "var(--font-poppins)" }}>
                                        <p>{item.content}</p>
                                        <div className="mt-3 pt-2 border-t" style={{ borderColor: "rgba(138,0,41,0.08)" }}>
                                            <div className="flex justify-between items-center text-[9px] mb-1">
                                                <span style={{ color: "#8A0029" }}>Progress</span>
                                                <span className="font-mono" style={{ color: "#262626" }}>{item.energy}%</span>
                                            </div>
                                            <div className="w-full h-1 rounded-full overflow-hidden" style={{ background: "rgba(138,0,41,0.08)" }}>
                                                <div className="h-full rounded-full" style={{ width: `${item.energy}%`, background: "linear-gradient(to right, #8A0029, #D32F2F)" }} />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
