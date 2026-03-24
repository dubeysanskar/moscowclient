import { Inter, Lato, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import LenisProvider from "@/components/lenis-provider";
import Chatbot from "@/components/chatbot";
import Providers from "@/components/providers";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin", "cyrillic"],
});

const lato = Lato({
	variable: "--font-lato",
	weight: ["100","300", "400", "700", "900"],
	subsets: ["latin", "latin-ext"],
});

export const poppins = Poppins({
	variable: "--font-poppins",
	subsets: ["latin", "latin-ext"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
    metadataBase: new URL("https://tahaairwaves.ru"),

    title: {
        default: "Taha Airwaves | Manpower Recruitment & Deployment to Russia",
        template: "%s | Taha Airwaves"
    },

    description:
        "Taha Airwaves is a government-licensed overseas manpower recruitment agency specializing in deploying skilled and semi-skilled workforce from India to Russia. End-to-end recruitment, visa processing, and deployment services.",

    keywords: [
        "Taha Airwaves",
        "manpower recruitment Russia",
        "overseas recruitment agency India",
        "workforce deployment Russia",
        "Indian workers Russia",
        "visa processing services",
        "bulk manpower hiring",
        "overseas employment agency",
        "construction workers Russia",
        "hospitality manpower",
        "factory workers deployment",
        "recruitment agency New Delhi"
    ],

    authors: [{ name: "Taha Airwaves Private Limited" }],
    creator: "Taha Airwaves Private Limited",
    publisher: "Taha Airwaves Private Limited",

    openGraph: {
        title: "Taha Airwaves | Manpower Recruitment & Deployment to Russia",
        description:
            "Government-licensed manpower recruitment agency deploying verified Indian workforce to Russia.",
        url: "https://tahaairwaves.ru",
        siteName: "Taha Airwaves",
        locale: "ru_RU",
        type: "website",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Taha Airwaves — Manpower Recruitment & Deployment to Russia"
            }
        ]
    },

    twitter: {
        card: "summary_large_image",
        title: "Taha Airwaves | Manpower Recruitment & Deployment to Russia",
        description:
            "Government-licensed overseas recruitment agency deploying Indian workforce to Russia.",
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
		<html lang="ru">
			<body
				className={`${inter.variable} ${lato.variable} ${poppins.variable} antialiased`}
			>
				<Providers>
					<Header />
					<LenisProvider>
						{children}
					</LenisProvider>
					<Footer />
					<Chatbot />
				</Providers>
			</body>
		</html>
	);
}
