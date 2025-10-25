import Hero from "@/app/components/Hero"
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Projects/>
    <About/>
    <Contact/>
    </>
  );
}
