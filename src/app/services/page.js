import Cta from "@/components/home/cta";
import ServicesMain from "@/components/services/services-main";

export const metadata = {
    title: "Услуги по подбору персонала — Taha Airwaves Россия",
    description: "Полный спектр услуг по подбору персонала для России: уборщики, водители, разнорабочие, грузчики, бариста, упаковщики, техники, аттестация документов, аутсорсинг. Офис в Москве.",
    keywords: ["услуги подбор персонала Россия", "рабочие из Индии", "кадровые услуги Москва", "аутсорсинг персонала", "рекрутинг для России"],
    openGraph: {
        title: "Услуги по подбору персонала — Taha Airwaves Россия",
        description: "Подбор квалифицированных и полуквалифицированных работников из Индии для российских компаний.",
        url: "https://tahaairwaves.ru/services",
    },
}

export default function Services(){
    return (
        <>
            <ServicesMain />
            <Cta />
        </>
    )
}
