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
        default: "Найм работников из Индии в Россию | Агентство по подбору персонала | Taha Airwaves",
        template: "%s | Taha Airwaves"
    },

    description:
        "Аккредитованное агентство по подбору персонала, предоставляющее квалифицированных работников из Индии для России и мировых рынков. Быстрый найм, проверенные кандидаты и полная визовая поддержка.",

    keywords: [
        "найм работников из Индии в Россию",
        "поставка рабочей силы из Индии в Россию",
        "кадровое агентство Россия Индия",
        "индийские рабочие в России",
        "международное кадровое агентство Индия",
        "нанять работников из Индии",
        "решения по рабочей силе из Индии Россия",
        "аутсорсинг персонала из Индии",
        "агентство по поставке рабочей силы Индия Россия",
        "Taha Airwaves персонал",
        "подбор персонала Россия",
        "рекрутинг из Индии",
        "размещение работников Россия",
        "визовое оформление",
        "кадровое агентство Москва",
        "строительные рабочие Россия",
        "разнорабочие из Индии",
        "водители для России",
        "грузчики Москва",
        "уборщики для предприятий",
        "рабочая сила из Индии",
        "массовый подбор персонала",
        "быстрое размещение индийского персонала",
        "проверенные индийские работники",
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
        title: "Найм работников из Индии в Россию | Агентство по подбору персонала | Taha Airwaves",
        description:
            "Аккредитованное агентство по подбору персонала, предоставляющее квалифицированных работников из Индии для России и мировых рынков. Быстрый найм, проверенные кандидаты и полная визовая поддержка.",
        url: "https://tahaairwaves.ru",
        siteName: "Taha Airwaves",
        locale: "ru_RU",
        type: "website",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Taha Airwaves — Найм работников из Индии в Россию"
            }
        ]
    },

    twitter: {
        card: "summary_large_image",
        title: "Найм работников из Индии в Россию | Taha Airwaves",
        description:
            "Аккредитованное агентство по подбору персонала из Индии для России. Быстрый найм и полная визовая поддержка.",
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

    category: "Найм работников из Индии в Россию | Подбор персонала",

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
