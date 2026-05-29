import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
    return (
        <>
            <Hero />
            <div className="max-w-screen-xl mx-auto pt-16 md:pt-24 px-6 md:px-12 lg:px-20 xl:px-28">
                <About />
                <Skills />
                <Projects />
                <Contact />
            </div>
        </>
    );
}
