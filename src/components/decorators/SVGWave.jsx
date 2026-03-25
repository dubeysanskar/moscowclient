'use client'

export default function SVGWave({
    position = "top",       // "top" or "bottom"
    color = "#FDFBEF",      // fill color of the wave
    bgColor = "transparent", // background behind the wave
    height = 60,
    className = "",
    variant = "smooth",     // "smooth", "jagged", "gentle"
}) {
    const paths = {
        smooth: position === "top"
            ? "M0,32 C320,80 640,0 960,40 C1280,80 1440,20 1440,20 L1440,0 L0,0 Z"
            : "M0,20 C320,80 640,0 960,40 C1280,80 1440,20 1440,20 L1440,64 L0,64 Z",
        jagged: position === "top"
            ? "M0,40 L120,10 L240,50 L360,15 L480,45 L600,8 L720,42 L840,12 L960,38 L1080,5 L1200,35 L1320,10 L1440,30 L1440,0 L0,0 Z"
            : "M0,24 L120,54 L240,14 L360,49 L480,19 L600,56 L720,22 L840,52 L960,26 L1080,59 L1200,29 L1320,54 L1440,34 L1440,64 L0,64 Z",
        gentle: position === "top"
            ? "M0,48 Q360,0 720,32 T1440,16 L1440,0 L0,0 Z"
            : "M0,16 Q360,64 720,32 T1440,48 L1440,64 L0,64 Z",
    }

    return (
        <div
            className={`wave-separator ${className}`}
            style={{
                background: bgColor,
                transform: position === "top" ? "rotate(180deg)" : undefined,
            }}
            aria-hidden="true"
        >
            <svg
                viewBox="0 0 1440 64"
                preserveAspectRatio="none"
                style={{ height: `${height}px`, width: "100%" }}
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d={paths[variant] || paths.smooth} fill={color} />
            </svg>
        </div>
    )
}

// Decorative dot pattern
export function DotPattern({
    rows = 4,
    cols = 4,
    spacing = 20,
    radius = 2,
    color = "rgba(142,9,53,0.12)",
    className = "",
}) {
    const width = (cols - 1) * spacing + radius * 2
    const height = (rows - 1) * spacing + radius * 2

    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            fill="none"
            aria-hidden="true"
        >
            {Array.from({ length: rows * cols }, (_, i) => (
                <circle
                    key={i}
                    cx={(i % cols) * spacing + radius}
                    cy={Math.floor(i / cols) * spacing + radius}
                    r={radius}
                    fill={color}
                />
            ))}
        </svg>
    )
}

// Decorative crosshair
export function CrosshairDecor({
    size = 80,
    color = "rgba(142,9,53,0.1)",
    className = "",
}) {
    return (
        <svg
            className={className}
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            fill="none"
            aria-hidden="true"
        >
            <circle cx={size / 2} cy={size / 2} r={size * 0.45} stroke={color} strokeWidth="1" strokeDasharray="6 4" />
            <line x1={size / 2} y1={4} x2={size / 2} y2={size - 4} stroke={color} strokeWidth="1" />
            <line x1={4} y1={size / 2} x2={size - 4} y2={size / 2} stroke={color} strokeWidth="1" />
        </svg>
    )
}
