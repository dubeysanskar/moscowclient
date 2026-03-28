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

import SocialHub from "@/components/social-hub";

export const metadata = {
    metadataBase: new URL("https://tahaairwaves.ru"),

    title: {
        default: "Taha Airwaves | Подбор и размещение персонала в Россию",
        template: "%s | Taha Airwaves"
    },

    description:
        "Taha Airwaves — лицензированное агентство по подбору квалифицированного и полуквалифицированного персонала из Индии для работы в России. Полный цикл рекрутинга, визовое оформление, размещение работников. Офис в Москве.",

    keywords: [
        "Taha Airwaves",
        "подбор персонала Россия",
        "рекрутинг из Индии",
        "размещение работников Россия",
        "индийские работники Россия",
        "визовое оформление",
        "аутсорсинг персонала",
        "кадровое агентство Москва",
        "строительные рабочие Россия",
        "разнорабочие из Индии",
        "водители для России",
        "грузчики Москва",
        "уборщики для предприятий",
        "бариста для кафе",
        "упаковщики склад",
        "сварщики электрики сантехники",
        "аттестация документов",
        "эмиграционное оформление",
        "рабочая сила из Индии",
        "массовый подбор персонала",
        "рекрутинговое агентство Нью-Дели",
        "найм иностранных работников Россия",
        "manpower recruitment Russia",
        "Indian workers Russia",
        "workforce deployment Russia",
        "overseas recruitment agency",
        "hire workers from India",
        "нанять работников из Индии",
        "кадровый аутсорсинг Россия",
        "подбор рабочих для строительства Москва",
        "помощники на производстве Россия",
        "рабочие для нефтегазовой отрасли",
        "персонал для гостиниц Россия",
        "логистический персонал Москва",
    ],

    authors: [{ name: "Taha Airwaves Private Limited" }],
    creator: "Taha Airwaves Private Limited",
    publisher: "Taha Airwaves Private Limited",

    alternates: {
        canonical: "https://tahaairwaves.ru",
        languages: {
            "ru-RU": "https://tahaairwaves.ru",
            "en-US": "https://tahaairwaves.ru",
        },
    },

    openGraph: {
        title: "Taha Airwaves | Подбор и размещение персонала в Россию",
        description:
            "Лицензированное кадровое агентство — подбор и размещение квалифицированного персонала из Индии в Россию. Офис в Москве, более 500 работников размещено.",
        url: "https://tahaairwaves.ru",
        siteName: "Taha Airwaves",
        locale: "ru_RU",
        type: "website",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Taha Airwaves — Подбор и размещение персонала в Россию"
            }
        ]
    },

    twitter: {
        card: "summary_large_image",
        title: "Taha Airwaves | Подбор и размещение персонала в Россию",
        description:
            "Лицензированное агентство по подбору и размещению индийского персонала в России.",
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

    verification: {
        yandex: "",
    },

    category: "Подбор и размещение персонала",

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
					<SocialHub />
				</Providers>
			</body>
		</html>
	);
}
