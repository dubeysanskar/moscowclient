import Cta from "@/components/home/cta";
import ProjectsCollection from "@/components/projects/projects-collection";
import ProjectsHero from "@/components/projects/projects-hero";

export const metadata = {
    title: "Проекты Taha Airwaves | Успешные кадровые решения для России",
    description: "Ознакомьтесь с успешными проектами Taha Airwaves по подбору и размещению персонала из Индии для российских и международных компаний.",
    keywords: ["проекты Taha Airwaves", "кадровые решения Россия", "успешное размещение персонала"],
    openGraph: {
        title: "Проекты Taha Airwaves | Успешные кадровые решения",
        description: "Ознакомьтесь с успешными проектами по подбору персонала из Индии для России.",
        url: "https://tahaairwaves.ru/projects",
    },
    alternates: {
        canonical: "https://tahaairwaves.ru/projects",
    },
}

export default function Projects(){

    return (

        <>
        <ProjectsHero />
        <ProjectsCollection />
        <Cta />
        </>

    )

}
