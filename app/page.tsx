import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Experience from "@/src/sections/experience";
import Hero from "@/src/sections/hero";
import GridBackground from "@/src/sections/hero/components/GridBackground";
import Project from "@/src/sections/portfolio";
import About from "@/src/sections/about";
import Skills from "@/src/sections/skills";
import Contact from "@/src/sections/contact";
import Feedback from "@/src/sections/feedback";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <GridBackground />
        <Header />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Project />
        <Feedback/>
        <Contact/>
      </div>
    </main>
  );
}
