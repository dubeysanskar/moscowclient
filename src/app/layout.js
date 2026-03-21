import { Cormorant_Garamond, Lato, Oswald, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import LenisProvider from "@/components/lenis-provider";
import Chatbot from "@/components/chatbot";

const cormorantGaramond = Cormorant_Garamond({
    variable: "--font-cormorant-garamond",
    subsets: ["latin"],
});

const lato = Lato({
	variable: "--font-lato",
	weight: ["100","300", "400", "700", "900"],
	subsets: ["latin"],
});

export const oswald = Oswald({
	variable: "--font-oswald",
	subsets: ["latin"],
	weight: ["200", "300", "400", "500", "600", "700"],
});

export const poppins = Poppins({
	variable: "--font-poppins",
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
    metadataBase: new URL("https://tahaairwaves.ru"),

    title: {
        default: "Taha Airwaves | Global Manpower Recruitment & Deployment to Russia & CIS",
        template: "%s | Taha Airwaves"
    },

    description:
        "Taha Airwaves is a government-licensed overseas manpower recruitment agency specializing in deploying skilled and semi-skilled workforce from India to Russia, CIS, GCC, and global markets. End-to-end recruitment, visa processing, and deployment services.",

    keywords: [
        "Taha Airwaves",
        "manpower recruitment Russia",
        "overseas recruitment agency India",
        "workforce deployment Russia",
        "skilled manpower supply",
        "Indian workers Russia",
        "GCC manpower recruitment",
        "visa processing services",
        "bulk manpower hiring",
        "overseas employment agency",
        "construction workers Russia",
        "hospitality manpower",
        "factory workers deployment",
        "employee outsourcing India",
        "recruitment agency New Delhi"
    ],

    authors: [{ name: "Taha Airwaves Private Limited" }],
    creator: "Taha Airwaves Private Limited",
    publisher: "Taha Airwaves Private Limited",

    openGraph: {
        title: "Taha Airwaves | Global Manpower Recruitment & Deployment",
        description:
            "Government-licensed manpower recruitment agency deploying verified, skilled Indian workforce to Russia, CIS, GCC, and beyond. Comprehensive recruitment, visa processing, and deployment services.",
        url: "https://tahaairwaves.ru",
        siteName: "Taha Airwaves",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Taha Airwaves — Global Manpower Recruitment & Deployment"
            }
        ]
    },

    twitter: {
        card: "summary_large_image",
        title: "Taha Airwaves | Global Manpower Recruitment & Deployment",
        description:
            "Government-licensed overseas recruitment agency deploying skilled Indian workforce to Russia, CIS, GCC, and global markets.",
        images: ["/og-image.jpg"]
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1
        }
    },

    category: "Manpower Recruitment & Deployment",

    icons: {
		icon: [
			{ url: '/favicon.ico' },
			{ url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
			{ url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
		],
		shortcut: '/favicon.ico',
		apple: '/apple-touch-icon.png',
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${cormorantGaramond.variable} ${lato.variable} ${oswald.variable} ${poppins.variable} antialiased`}
			>
				<Header />
				<LenisProvider>
					{children}
				</LenisProvider>
				<Footer />
				<Chatbot />
			</body>
		</html>
	);
}
