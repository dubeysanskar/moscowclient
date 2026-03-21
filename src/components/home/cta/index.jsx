import Container from "@/components/container";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

export default function Cta(){
    return (
        <section className="py-16 px-6">
            <div className="relative pt-14 pb-12 space-y-10 rounded-xl md:rounded-2xl overflow-hidden" style={{ background: "#8E0935" }}>

                {/* Circle outline */}
                <div className="absolute top-1/2 right-[-100px] w-[500px] h-[500px] rounded-full border -translate-y-1/2 pointer-events-none" style={{ borderColor: "rgba(253,251,239,0.08)" }} />

                <div className="relative space-y-4 z-10 flex flex-col items-center justify-center px-4">
                    <p className="font-mono text-center text-sm" style={{ color: "rgba(253,251,239,0.6)" }}>Let&apos;s Build Your Workforce Together</p>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl text-center font-bold uppercase max-w-250"
                        style={{ fontFamily: "var(--font-cormorant-garamond)", color: "#FDFBEF" }}>
                        Ready to Deploy Your Global Workforce?
                    </h2>
                </div>
                <div className="relative z-10 flex flex-wrap justify-center gap-4 px-4">
                    <Link href="/contact">
                        <button className="px-7 py-3.5 rounded-full text-sm tracking-[0.1em] uppercase font-semibold transition cursor-pointer flex items-center gap-3"
                            style={{ background: "#FDFBEF", color: "#8E0935", fontFamily: "var(--font-lato)" }}>
                            Get in touch
                            <MdArrowOutward size={16} />
                        </button>
                    </Link>
                    <a href="https://wa.me/919315226961" target="_blank" rel="noopener noreferrer">
                        <button className="px-7 py-3.5 rounded-full text-sm tracking-[0.1em] uppercase font-semibold transition cursor-pointer flex items-center gap-3"
                            style={{ background: "transparent", color: "#FDFBEF", border: "1px solid rgba(253,251,239,0.3)", fontFamily: "var(--font-lato)" }}>
                            <FaWhatsapp /> WhatsApp Us
                        </button>
                    </a>
                </div>
            </div>
        </section>
    )
}