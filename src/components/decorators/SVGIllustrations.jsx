'use client'

/**
 * SVG Background Illustrations Library
 * 15+ decorative SVG components for section backgrounds
 * Brand: Taha Airwaves — #8A0029 (maroon), #D32F2F (red accent)
 * Usage: Position with absolute, low opacity (0.03–0.10)
 */

/* 1. Concentric Circles — nested rings with dashes */
export function ConcentricCircles({
    size = 300, color = "#8A0029", accentColor = "#D32F2F",
    opacity = 0.06, className = ""
}) {
    return (
        <svg width={size} height={size} viewBox="0 0 300 300" fill="none"
            className={className} style={{ opacity }} aria-hidden="true">
            <circle cx="150" cy="150" r="140" stroke={color} strokeWidth="0.7" />
            <circle cx="150" cy="150" r="115" stroke={accentColor} strokeWidth="0.5" strokeDasharray="8 5" />
            <circle cx="150" cy="150" r="88" stroke={color} strokeWidth="0.6" />
            <circle cx="150" cy="150" r="60" stroke={accentColor} strokeWidth="0.4" strokeDasharray="5 4" />
            <circle cx="150" cy="150" r="32" stroke={color} strokeWidth="0.5" />
            <line x1="150" y1="10" x2="150" y2="290" stroke={color} strokeWidth="0.2" />
            <line x1="10" y1="150" x2="290" y2="150" stroke={color} strokeWidth="0.2" />
        </svg>
    )
}

/* 2. NestedFrames — squares within squares with rotation */
export function NestedFrames({
    size = 280, color = "#8A0029", accentColor = "#D32F2F",
    opacity = 0.05, className = ""
}) {
    return (
        <svg width={size} height={size} viewBox="0 0 280 280" fill="none"
            className={className} style={{ opacity }} aria-hidden="true">
            <rect x="10" y="10" width="260" height="260" rx="6" stroke={color} strokeWidth="0.6" />
            <rect x="35" y="35" width="210" height="210" rx="4" stroke={accentColor} strokeWidth="0.4" strokeDasharray="6 4" />
            <rect x="60" y="60" width="160" height="160" rx="3" stroke={color} strokeWidth="0.5" />
            <rect x="90" y="90" width="100" height="100" rx="2" stroke={accentColor} strokeWidth="0.3" strokeDasharray="4 3" />
            {/* Rotated diamond in center */}
            <path d="M140 80 L200 140 L140 200 L80 140 Z" stroke={color} strokeWidth="0.3" />
        </svg>
    )
}

/* 3. DiagonalLines — angled parallel lines */
export function DiagonalLines({
    width = 200, height = 200, color = "#8A0029", accentColor = "#D32F2F",
    opacity = 0.05, className = ""
}) {
    return (
        <svg width={width} height={height} viewBox="0 0 200 200" fill="none"
            className={className} style={{ opacity }} aria-hidden="true">
            {Array.from({ length: 8 }, (_, i) => (
                <line key={i}
                    x1={i * 28} y1="0" x2={i * 28 - 100} y2="200"
                    stroke={i % 2 === 0 ? color : accentColor}
                    strokeWidth={i % 3 === 0 ? "0.6" : "0.3"}
                />
            ))}
        </svg>
    )
}

/* 4. FlowingCurves — organic flowing paths */
export function FlowingCurves({
    width = 250, height = 300, color = "#8A0029", accentColor = "#D32F2F",
    opacity = 0.05, className = ""
}) {
    return (
        <svg width={width} height={height} viewBox="0 0 250 300" fill="none"
            className={className} style={{ opacity }} aria-hidden="true">
            <path d="M20 0 Q80 50 40 100 Q0 150 60 200 Q120 250 60 300" stroke={color} strokeWidth="1.2" />
            <path d="M60 0 Q120 50 80 100 Q40 150 100 200 Q160 250 100 300" stroke={accentColor} strokeWidth="0.7" />
            <path d="M100 0 Q160 50 120 100 Q80 150 140 200 Q200 250 140 300" stroke={color} strokeWidth="0.5" />
            <path d="M150 0 Q210 50 170 100 Q130 150 190 200 Q250 250 180 300" stroke={accentColor} strokeWidth="0.3" strokeDasharray="6 4" />
        </svg>
    )
}

/* 5. ArrowDown — decorative downward arrows */
export function ArrowDown({
    size = 60, color = "#8A0029",
    opacity = 0.08, className = ""
}) {
    return (
        <svg width={size * 0.5} height={size} viewBox="0 0 30 60" fill="none"
            className={className} style={{ opacity }} aria-hidden="true">
            <path d="M15 0 L15 48 M5 38 L15 48 L25 38" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    )
}

/* 6. DotMatrix — larger grid of dots */
export function DotMatrix({
    rows = 8, cols = 6, spacing = 18, radius = 2,
    color = "#8A0029", opacity = 0.06, className = ""
}) {
    const w = (cols - 1) * spacing + radius * 4
    const h = (rows - 1) * spacing + radius * 4
    return (
        <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} fill="none"
            className={className} style={{ opacity }} aria-hidden="true">
            {Array.from({ length: rows * cols }, (_, i) => {
                const x = (i % cols) * spacing + radius * 2
                const y = Math.floor(i / cols) * spacing + radius * 2
                return <circle key={i} cx={x} cy={y} r={radius} fill={color} />
            })}
        </svg>
    )
}

/* 7. CircuitBoard — tech-style connections */
export function CircuitBoard({
    width = 300, height = 200, color = "#8A0029", accentColor = "#D32F2F",
    opacity = 0.05, className = ""
}) {
    return (
        <svg width={width} height={height} viewBox="0 0 300 200" fill="none"
            className={className} style={{ opacity }} aria-hidden="true">
            {/* Horizontal lines */}
            <path d="M0 40 H80 L100 60 H180 L200 40 H300" stroke={color} strokeWidth="0.5" />
            <path d="M0 100 H60 L80 120 H140 L160 100 H220 L240 120 H300" stroke={accentColor} strokeWidth="0.4" />
            <path d="M0 160 H120 L140 140 H200 L220 160 H300" stroke={color} strokeWidth="0.5" />
            {/* Nodes */}
            <circle cx="100" cy="60" r="4" stroke={color} strokeWidth="0.5" />
            <circle cx="200" cy="40" r="3" fill={accentColor} />
            <circle cx="80" cy="120" r="4" stroke={accentColor} strokeWidth="0.5" />
            <circle cx="160" cy="100" r="3" fill={color} />
            <circle cx="140" cy="140" r="4" stroke={color} strokeWidth="0.5" />
            {/* Vertical connectors */}
            <line x1="100" y1="60" x2="100" y2="100" stroke={color} strokeWidth="0.3" strokeDasharray="3 3" />
            <line x1="200" y1="40" x2="200" y2="160" stroke={accentColor} strokeWidth="0.3" strokeDasharray="3 3" />
        </svg>
    )
}

/* 8. GlobeOutline — world-like wireframe */
export function GlobeOutline({
    size = 300, color = "#8A0029", accentColor = "#D32F2F",
    opacity = 0.05, className = ""
}) {
    return (
        <svg width={size} height={size} viewBox="0 0 300 300" fill="none"
            className={className} style={{ opacity }} aria-hidden="true">
            <circle cx="150" cy="150" r="130" stroke={color} strokeWidth="0.6" />
            <ellipse cx="150" cy="150" rx="65" ry="130" stroke={accentColor} strokeWidth="0.4" />
            <ellipse cx="150" cy="150" rx="100" ry="130" stroke={color} strokeWidth="0.3" />
            {/* Latitude lines */}
            <ellipse cx="150" cy="100" rx="120" ry="12" stroke={accentColor} strokeWidth="0.3" strokeDasharray="4 3" />
            <line x1="20" y1="150" x2="280" y2="150" stroke={color} strokeWidth="0.3" />
            <ellipse cx="150" cy="200" rx="110" ry="10" stroke={accentColor} strokeWidth="0.3" strokeDasharray="4 3" />
        </svg>
    )
}

/* 9. HexGrid — honeycomb pattern */
export function HexGrid({
    width = 250, height = 200, color = "#8A0029",
    opacity = 0.05, className = ""
}) {
    const hexPath = (cx, cy, r) => {
        const pts = Array.from({ length: 6 }, (_, i) => {
            const angle = (Math.PI / 3) * i - Math.PI / 6
            return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`
        })
        return `M${pts.join(' L')} Z`
    }
    const r = 24
    const hexes = []
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 5; col++) {
            const cx = col * r * 1.75 + 30 + (row % 2 ? r * 0.875 : 0)
            const cy = row * r * 1.55 + 30
            hexes.push(<path key={`${row}-${col}`} d={hexPath(cx, cy, r)} stroke={color} strokeWidth="0.5" />)
        }
    }
    return (
        <svg width={width} height={height} viewBox="0 0 250 200" fill="none"
            className={className} style={{ opacity }} aria-hidden="true">
            {hexes}
        </svg>
    )
}

/* 10. StarBurst — radial lines from center */
export function StarBurst({
    size = 200, rays = 16, color = "#8A0029", accentColor = "#D32F2F",
    opacity = 0.05, className = ""
}) {
    const cx = size / 2, cy = size / 2, r = size * 0.44
    return (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none"
            className={className} style={{ opacity }} aria-hidden="true">
            {Array.from({ length: rays }, (_, i) => {
                const angle = (Math.PI * 2 * i) / rays
                const x2 = cx + r * Math.cos(angle)
                const y2 = cy + r * Math.sin(angle)
                return (
                    <line key={i} x1={cx} y1={cy} x2={x2} y2={y2}
                        stroke={i % 2 === 0 ? color : accentColor}
                        strokeWidth={i % 4 === 0 ? "0.6" : "0.3"} />
                )
            })}
            <circle cx={cx} cy={cy} r="6" stroke={color} strokeWidth="0.5" />
            <circle cx={cx} cy={cy} r="2" fill={accentColor} />
        </svg>
    )
}

/* 11. CompassRose — decorative compass */
export function CompassRose({
    size = 180, color = "#8A0029", accentColor = "#D32F2F",
    opacity = 0.06, className = ""
}) {
    const c = 90
    return (
        <svg width={size} height={size} viewBox="0 0 180 180" fill="none"
            className={className} style={{ opacity }} aria-hidden="true">
            <circle cx={c} cy={c} r="80" stroke={color} strokeWidth="0.5" />
            <circle cx={c} cy={c} r="55" stroke={accentColor} strokeWidth="0.3" strokeDasharray="4 3" />
            {/* Cardinal points */}
            <path d={`M${c} 10 L${c + 8} ${c} L${c} ${c - 20} L${c - 8} ${c} Z`} stroke={color} strokeWidth="0.4" />
            <path d={`M${c} 170 L${c + 8} ${c} L${c} ${c + 20} L${c - 8} ${c} Z`} stroke={color} strokeWidth="0.4" />
            <path d={`M10 ${c} L${c} ${c + 8} L${c - 20} ${c} L${c} ${c - 8} Z`} stroke={accentColor} strokeWidth="0.4" />
            <path d={`M170 ${c} L${c} ${c + 8} L${c + 20} ${c} L${c} ${c - 8} Z`} stroke={accentColor} strokeWidth="0.4" />
            <circle cx={c} cy={c} r="4" fill={color} />
        </svg>
    )
}

/* 12. ChevronPattern — zigzag lines */
export function ChevronPattern({
    width = 200, height = 160, color = "#8A0029", accentColor = "#D32F2F",
    opacity = 0.05, className = ""
}) {
    return (
        <svg width={width} height={height} viewBox="0 0 200 160" fill="none"
            className={className} style={{ opacity }} aria-hidden="true">
            {Array.from({ length: 6 }, (_, i) => (
                <path key={i}
                    d={`M0 ${20 + i * 25} L50 ${5 + i * 25} L100 ${20 + i * 25} L150 ${5 + i * 25} L200 ${20 + i * 25}`}
                    stroke={i % 2 === 0 ? color : accentColor}
                    strokeWidth={i % 3 === 0 ? "0.6" : "0.3"}
                />
            ))}
        </svg>
    )
}

/* 13. CrossPattern — plus signs grid */
export function CrossPattern({
    rows = 4, cols = 5, spacing = 40, crossSize = 12,
    color = "#8A0029", opacity = 0.06, className = ""
}) {
    const w = (cols - 1) * spacing + crossSize * 2 + 20
    const h = (rows - 1) * spacing + crossSize * 2 + 20
    return (
        <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} fill="none"
            className={className} style={{ opacity }} aria-hidden="true">
            {Array.from({ length: rows * cols }, (_, i) => {
                const cx = (i % cols) * spacing + crossSize + 10
                const cy = Math.floor(i / cols) * spacing + crossSize + 10
                return (
                    <g key={i}>
                        <line x1={cx - crossSize / 2} y1={cy} x2={cx + crossSize / 2} y2={cy} stroke={color} strokeWidth="0.5" />
                        <line x1={cx} y1={cy - crossSize / 2} x2={cx} y2={cy + crossSize / 2} stroke={color} strokeWidth="0.5" />
                    </g>
                )
            })}
        </svg>
    )
}

/* 14. Spiral — logarithmic spiral */
export function Spiral({
    size = 200, color = "#8A0029", accentColor = "#D32F2F",
    opacity = 0.05, className = ""
}) {
    const cx = size / 2, cy = size / 2
    const pts = Array.from({ length: 200 }, (_, i) => {
        const t = i * 0.08
        const r = 3 + t * 5
        const x = cx + r * Math.cos(t)
        const y = cy + r * Math.sin(t)
        return `${x},${y}`
    })
    return (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none"
            className={className} style={{ opacity }} aria-hidden="true">
            <polyline points={pts.join(' ')} stroke={color} strokeWidth="0.6" />
            <circle cx={cx} cy={cy} r="3" fill={accentColor} />
        </svg>
    )
}

/* 15. NetworkMesh — connected nodes */
export function NetworkMesh({
    width = 300, height = 250, color = "#8A0029", accentColor = "#D32F2F",
    opacity = 0.05, className = ""
}) {
    const nodes = [
        { x: 50, y: 40 }, { x: 150, y: 30 }, { x: 250, y: 50 },
        { x: 30, y: 120 }, { x: 120, y: 100 }, { x: 200, y: 130 }, { x: 270, y: 110 },
        { x: 60, y: 200 }, { x: 160, y: 180 }, { x: 240, y: 210 },
    ]
    const edges = [
        [0, 1], [1, 2], [0, 3], [0, 4], [1, 4], [1, 5], [2, 5], [2, 6],
        [3, 4], [3, 7], [4, 5], [4, 8], [5, 6], [5, 8], [5, 9],
        [7, 8], [8, 9], [6, 9],
    ]
    return (
        <svg width={width} height={height} viewBox="0 0 300 250" fill="none"
            className={className} style={{ opacity }} aria-hidden="true">
            {edges.map(([a, b], i) => (
                <line key={i}
                    x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y}
                    stroke={i % 3 === 0 ? accentColor : color}
                    strokeWidth="0.4"
                    strokeDasharray={i % 2 === 0 ? "none" : "3 3"}
                />
            ))}
            {nodes.map((n, i) => (
                <circle key={i} cx={n.x} cy={n.y} r={i % 3 === 0 ? "4" : "3"}
                    stroke={i % 2 === 0 ? color : accentColor} strokeWidth="0.5"
                    fill={i % 4 === 0 ? color : "none"} />
            ))}
        </svg>
    )
}

/* 16. WavyLines — horizontal wavy decorations (BONUS) */
export function WavyLines({
    width = 400, height = 80, color = "#8A0029", accentColor = "#D32F2F",
    opacity = 0.05, className = ""
}) {
    return (
        <svg width={width} height={height} viewBox="0 0 400 80" fill="none"
            className={className} style={{ opacity }} aria-hidden="true">
            <path d="M0 20 Q50 5 100 20 T200 20 T300 20 T400 20" stroke={color} strokeWidth="0.8" />
            <path d="M0 40 Q50 25 100 40 T200 40 T300 40 T400 40" stroke={accentColor} strokeWidth="0.5" />
            <path d="M0 60 Q50 45 100 60 T200 60 T300 60 T400 60" stroke={color} strokeWidth="0.4" />
        </svg>
    )
}

/* 17. ArrowUp — decorative upward arrow (BONUS) */
export function ArrowUp({
    size = 60, color = "#D32F2F",
    opacity = 0.07, className = ""
}) {
    return (
        <svg width={size * 0.5} height={size} viewBox="0 0 30 60" fill="none"
            className={className} style={{ opacity }} aria-hidden="true">
            <path d="M15 60 L15 12 M5 22 L15 12 L25 22" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    )
}
