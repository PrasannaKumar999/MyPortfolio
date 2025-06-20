import "./App.css";
import Aboutme from "./components/Aboutme";
import Home from "./components/Home";
import Header from "./components/Header";
import { useRef } from "react";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
function App() {
  const sectionRefs = {
    Home: useRef(null),
    About: useRef(null),
    services: useRef(null),
    Projects: useRef(null),
    Contact: useRef(null),
  };
  const scrollTo = (key, offset = 96) => {
    const top =
      sectionRefs[key].current.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: top - offset,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Header onLinkClick={scrollTo} />
      <section ref={sectionRefs.Home}>
        <Home onLinkClick={scrollTo} />
      </section>
      <section ref={sectionRefs.About}>
        <Aboutme />
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
