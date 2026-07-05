import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import CaseStudy from "@/components/sections/CaeStudy";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Skills />
      <Projects />
      <CaseStudy/>
      <Contact />
    </main>
  );
}