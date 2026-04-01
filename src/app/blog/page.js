import BlogMain from "@/components/blog/blog-main";
import Cta from "@/components/home/cta";

export const metadata = {
    title: "Блог — Новости рекрутинга и размещения персонала",
    description: "Статьи о подборе персонала для России, трудовой миграции из Индии, визовом оформлении, тестировании навыков и рынке труда в СНГ. Читайте экспертные материалы Taha Airwaves.",
    keywords: ["блог рекрутинг Россия", "трудовая миграция Индия Россия", "подбор персонала новости", "рынок труда СНГ", "визовое оформление Россия"],
    openGraph: {
        title: "Блог — Новости рекрутинга",
        description: "Экспертные статьи о трудовой миграции, подборе персонала и размещении работников в России.",
        url: "https://tahaairwaves.ru/blog",
    },
    alternates: {
        canonical: "https://tahaairwaves.ru/blog",
    },
}

export default function Blog() {
    return (
        <>
            <BlogMain />
            <Cta />
        </>
    )
}
