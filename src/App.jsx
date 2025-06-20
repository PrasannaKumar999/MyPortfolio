import "./App.css";
import Aboutme from "./components/Aboutme";
import Home from "./components/Home";
import Header from "./components/Header";
import { useRef } from "react";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Skills } from "./components/Skills";
import { useEffect } from "react";
import { useState } from "react";
function App() {
  const sectionRefs = {
    Home: useRef(null),
    About: useRef(null),
    services: useRef(null),
    Projects: useRef(null),
    Contact: useRef(null),
    Skills: useRef(null),
  };
  const scrollTo = (key, offset = 96) => {
    const top =
      sectionRefs[key].current.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: top - offset,
      behavior: "smooth",
    });
  };

  const [activeSection, setActiveSection] = useState("Home");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute("data-id");
            if (sectionId) setActiveSection(sectionId);
          }
        });
      },
      { threshold: 0.6 }
    );

    Object.entries(sectionRefs).forEach(([key, ref]) => {
      if (ref.current) {
        ref.current.setAttribute("data-id", key);
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, [sectionRefs]);

  return (
    <>
      <Header onLinkClick={scrollTo} activeSection={activeSection} />
      <section ref={sectionRefs.Home}>
        <Home onLinkClick={scrollTo} />
      </section>
      <section ref={sectionRefs.About}>
        <Aboutme />
      </section>
      /
      <section ref={sectionRefs.Skills}>
        <Skills />
      </section>
      <section ref={sectionRefs.Projects}>
        <Projects />
      </section>
      <section ref={sectionRefs.Contact}>
        <Contact />
      </section>
    </>
  );
}

export default App;
