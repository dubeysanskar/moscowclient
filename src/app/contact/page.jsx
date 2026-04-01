import ContactMain from "@/components/contact/contact-main";

export const metadata = {
    title: "Контакты Taha Airwaves | Найм персонала из Индии для России и международных проектов",
    description: "Свяжитесь с Taha Airwaves для подбора персонала. Офис в Москве: Сколково, ул. Малевича 2к4. Головной офис: Нью-Дели. Телефон: +7 985 074-88-28. Email: info@tahaairwaves.ru",
    keywords: [
        "контакты Taha Airwaves",
        "офис Москва подбор персонала",
        "телефон кадрового агентства",
        "связаться рекрутинг Россия",
        "найм работников из Индии в Россию",
        "кадровое агентство Россия Индия",
    ],
    openGraph: {
        title: "Контакты Taha Airwaves | Найм персонала из Индии для России и международных проектов",
        description: "Свяжитесь с нами: +7 985 074-88-28, info@tahaairwaves.ru. Офис в Москве и Нью-Дели.",
        url: "https://tahaairwaves.ru/contact",
    },
    alternates: {
        canonical: "https://tahaairwaves.ru/contact",
    },
}

export default function Contact(){
    return (
        <>
            <ContactMain />
        </>
    )
}
