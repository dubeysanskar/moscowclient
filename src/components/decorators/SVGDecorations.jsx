'use client'

/**
 * SVGDecorations — reusable SVG illustrations, ornaments, patterns, 
 * flow lines, and embellishments for the Taha Airwaves brand.
 */

/* ── DotGrid ── Small grid of dots, used as subtle background pattern */
export function DotGrid({ rows = 5, cols = 5, color = "#8E0935", opacity = 0.08, spacing = 20, size = 2, className = "" }) {
    const w = cols * spacing
    const h = rows * spacing
    return (
        <svg className={className} width={w} height={h} viewBox={`0 0 ${w} ${h}`} fill="none" aria-hidden="true">
            {Array.from({ length: rows * cols }, (_, i) => (
                <circle key={i} cx={(i % cols) * spacing + spacing / 2} cy={Math.floor(i / cols) * spacing + spacing / 2} r={size} fill={color} opacity={opacity} />
            ))}
        </svg>
    )
}

/* ── Crosshair ── Targeting reticle, used as a premium UI embellishment */
export function Crosshair({ size = 100, color = "#8E0935", accentColor = "#BC264B", opacity = 0.1, className = "" }) {
    const c = size / 2
    return (
        <svg className={className} width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" aria-hidden="true">
            <circle cx={c} cy={c} r={c * 0.85} stroke={color} strokeWidth="0.5" strokeDasharray="6 4" opacity={opacity} />
            <circle cx={c} cy={c} r={c * 0.55} stroke={accentColor} strokeWidth="0.5" opacity={opacity * 0.8} />
            <circle cx={c} cy={c} r={c * 0.2} stroke={color} strokeWidth="0.8" opacity={opacity * 1.2} />
            <line x1={c} y1={c * 0.1} x2={c} y2={c * 1.9} stroke={color} strokeWidth="0.3" opacity={opacity * 0.7} />
            <line x1={c * 0.1} y1={c} x2={c * 1.9} y2={c} stroke={color} strokeWidth="0.3" opacity={opacity * 0.7} />
        </svg>
    )
}

/* ── FlowLine ── Animated dashed connector line (horizontal or vertical) */
export function FlowLine({ width = 200, height = 2, color = "#8E0935", direction = "horizontal", className = "" }) {
    if (direction === "vertical") {
        return (
            <svg className={className} width={height} height={width} viewBox={`0 0 ${height} ${width}`} fill="none" aria-hidden="true">
                <line x1="1" y1="0" x2="1" y2={width} stroke={color} strokeWidth="1.5" strokeDasharray="6 4">
                    <animate attributeName="stroke-dashoffset" values="0;-20" dur="1.5s" repeatCount="indefinite" />
                </line>
            </svg>
        )
    }
    return (
        <svg className={className} width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" aria-hidden="true">
            <line x1="0" y1="1" x2={width} y2="1" stroke={color} strokeWidth="1.5" strokeDasharray="6 4">
                <animate attributeName="stroke-dashoffset" values="0;-20" dur="1.5s" repeatCount="indefinite" />
            </line>
        </svg>
    )
}

/* ── CurvedConnector ── Animated curved path between two points */
export function CurvedConnector({ width = 200, height = 100, color = "#8E0935", className = "" }) {
    return (
        <svg className={className} width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" aria-hidden="true">
            <path
                d={`M10 ${height / 2} C${width * 0.3} ${height * 0.1}, ${width * 0.7} ${height * 0.9}, ${width - 10} ${height / 2}`}
                stroke={color} strokeWidth="1.5" fill="none" strokeDasharray="6 4"
            >
                <animate attributeName="stroke-dashoffset" values="0;-20" dur="2s" repeatCount="indefinite" />
            </path>
            <circle cx="10" cy={height / 2} r="4" fill={color} opacity="0.6" />
            <circle cx={width - 10} cy={height / 2} r="4" fill={color} opacity="0.6" />
        </svg>
    )
}

/* ── GeometricFrame ── Nested rectangle frame, used as background ornament */
export function GeometricFrame({ size = 160, color = "#8E0935", opacity = 0.06, className = "" }) {
    return (
        <svg className={className} width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" aria-hidden="true">
            <rect x={size * 0.08} y={size * 0.08} width={size * 0.84} height={size * 0.84} rx="4" stroke={color} strokeWidth="0.5" strokeDasharray="8 6" opacity={opacity} />
            <rect x={size * 0.2} y={size * 0.2} width={size * 0.6} height={size * 0.6} rx="3" stroke={color} strokeWidth="0.5" opacity={opacity * 1.2} />
            <rect x={size * 0.35} y={size * 0.35} width={size * 0.3} height={size * 0.3} rx="2" stroke={color} strokeWidth="0.8" opacity={opacity * 1.5} />
        </svg>
    )
}

/* ── DiamondPattern ── Repeating diamond grid pattern */
export function DiamondPattern({ width = 200, height = 200, color = "#8E0935", opacity = 0.04, className = "" }) {
    return (
        <svg className={className} width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" aria-hidden="true">
            <defs>
                <pattern id="diamonds" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                    <path d="M15 0 L30 15 L15 30 L0 15 Z" stroke={color} strokeWidth="0.5" fill="none" opacity={opacity} />
                </pattern>
            </defs>
            <rect width={width} height={height} fill="url(#diamonds)" />
        </svg>
    )
}

/* ── CircuitLines ── Tech-inspired circuit connector lines */
export function CircuitLines({ width = 300, height = 200, color = "#8E0935", opacity = 0.06, className = "" }) {
    return (
        <svg className={className} width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" aria-hidden="true">
            {/* Main h-line */}
            <line x1="0" y1={height * 0.5} x2={width} y2={height * 0.5} stroke={color} strokeWidth="0.6" opacity={opacity} />
            {/* Branch 1 */}
            <path d={`M${width * 0.2} ${height * 0.5} L${width * 0.2} ${height * 0.2} L${width * 0.45} ${height * 0.2}`} stroke={color} strokeWidth="0.6" fill="none" opacity={opacity} />
            <circle cx={width * 0.45} cy={height * 0.2} r="3" fill={color} opacity={opacity * 2} />
            {/* Branch 2 */}
            <path d={`M${width * 0.55} ${height * 0.5} L${width * 0.55} ${height * 0.8} L${width * 0.8} ${height * 0.8}`} stroke={color} strokeWidth="0.6" fill="none" opacity={opacity} />
            <circle cx={width * 0.8} cy={height * 0.8} r="3" fill={color} opacity={opacity * 2} />
            {/* Branch 3 */}
            <path d={`M${width * 0.75} ${height * 0.5} L${width * 0.75} ${height * 0.3} L${width * 0.95} ${height * 0.3}`} stroke={color} strokeWidth="0.6" fill="none" opacity={opacity} />
            <circle cx={width * 0.95} cy={height * 0.3} r="3" fill={color} opacity={opacity * 2} />
            {/* Nodes on main line */}
            <circle cx={width * 0.2} cy={height * 0.5} r="3" fill={color} opacity={opacity * 2} />
            <circle cx={width * 0.55} cy={height * 0.5} r="3" fill={color} opacity={opacity * 2} />
            <circle cx={width * 0.75} cy={height * 0.5} r="3" fill={color} opacity={opacity * 2} />
        </svg>
    )
}

/* ── PulseRing ── Animated concentric pulsing rings */
export function PulseRing({ size = 60, color = "#8E0935", className = "" }) {
    const c = size / 2
    return (
        <svg className={className} width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" aria-hidden="true">
            <circle cx={c} cy={c} r={c * 0.2} fill={color} opacity="0.4" />
            <circle cx={c} cy={c} r={c * 0.4} stroke={color} strokeWidth="1" opacity="0.2">
                <animate attributeName="r" values={`${c * 0.4};${c * 0.8};${c * 0.4}`} dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.2;0.05;0.2" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx={c} cy={c} r={c * 0.7} stroke={color} strokeWidth="0.5" opacity="0.1">
                <animate attributeName="r" values={`${c * 0.7};${c * 0.95};${c * 0.7}`} dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.1;0.02;0.1" dur="3s" repeatCount="indefinite" />
            </circle>
        </svg>
    )
}

/* ── GlobeWireframe ── Wireframe globe for background decoration */
export function GlobeWireframe({ size = 400, color = "#8E0935", accentColor = "#BC264B", opacity = 0.06, className = "" }) {
    const c = size / 2
    const r = size * 0.42
    return (
        <svg className={className} width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" aria-hidden="true">
            {/* Outer rings */}
            <circle cx={c} cy={c} r={r * 1.1} stroke={color} strokeWidth="0.3" strokeDasharray="4 3" opacity={opacity * 0.5} />
            <circle cx={c} cy={c} r={r} stroke={accentColor} strokeWidth="0.8" opacity={opacity} />
            {/* Meridians */}
            <ellipse cx={c} cy={c} rx={r} ry={r} stroke={color} strokeWidth="0.4" opacity={opacity * 0.8} />
            <ellipse cx={c} cy={c} rx={r * 0.65} ry={r} stroke={color} strokeWidth="0.3" opacity={opacity * 0.6} />
            <ellipse cx={c} cy={c} rx={r * 0.3} ry={r} stroke={color} strokeWidth="0.2" opacity={opacity * 0.4} />
            {/* Parallels */}
            <ellipse cx={c} cy={c} rx={r} ry={r * 0.3} stroke={accentColor} strokeWidth="0.3" opacity={opacity * 0.5} />
            <ellipse cx={c} cy={c - r * 0.35} rx={r * 0.85} ry={r * 0.2} stroke={color} strokeWidth="0.2" opacity={opacity * 0.3} />
            <ellipse cx={c} cy={c + r * 0.35} rx={r * 0.85} ry={r * 0.2} stroke={color} strokeWidth="0.2" opacity={opacity * 0.3} />
            {/* Animated rotating ring */}
            <circle cx={c} cy={c} r={r * 0.88} stroke={accentColor} strokeWidth="0.6" strokeDasharray="4 6" opacity={opacity * 0.7}>
                <animateTransform attributeName="transform" type="rotate" values={`0 ${c} ${c};360 ${c} ${c}`} dur="45s" repeatCount="indefinite" />
            </circle>
        </svg>
    )
}

/* ── CornerOrnament ── L-shaped corner bracket decoration */
export function CornerOrnament({ size = 40, color = "#8E0935", position = "top-left", className = "" }) {
    const transforms = {
        "top-left": "",
        "top-right": `scale(-1,1) translate(-${size},0)`,
        "bottom-left": `scale(1,-1) translate(0,-${size})`,
        "bottom-right": `scale(-1,-1) translate(-${size},-${size})`,
    }
    return (
        <svg className={className} width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" aria-hidden="true">
            <g transform={transforms[position]}>
                <line x1="0" y1="0" x2={size * 0.4} y2="0" stroke={color} strokeWidth="2" />
                <line x1="0" y1="0" x2="0" y2={size * 0.4} stroke={color} strokeWidth="2" />
            </g>
        </svg>
    )
}
