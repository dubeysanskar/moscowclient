import AboutMain from "@/components/about/about-main";
import Cta from "@/components/home/cta";

export const metadata = {
    title: "О компании Taha Airwaves — Подбор персонала в Россию из Индии",
    description: "Taha Airwaves — лицензированное кадровое агентство (с 2015 г.), специализирующееся на подборе и размещении квалифицированных работников из Индии в Россию. Офис в Москве, 500+ работников размещено.",
    keywords: ["о компании Taha Airwaves", "кадровое агентство Индия Россия", "подбор персонала Москва", "рекрутинг из Индии"],
    openGraph: {
        title: "О компании Taha Airwaves — Подбор персонала в Россию",
        description: "Лицензированное агентство по подбору квалифицированного персонала из Индии для работы в России. Офис в Москве.",
        url: "https://tahaairwaves.ru/about",
    },
}

export default function About(){
    return(
        <>
        <AboutMain />
        <Cta />
        </>
    )
}
