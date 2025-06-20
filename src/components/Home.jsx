import React from "react";
import { HomeStyles } from "../styles/components/HomeStyles";
import { Typewriter } from "react-simple-typewriter";

const Home = ({ onLinkClick }) => {
  return (
    <>
      <style jsx>{HomeStyles}</style>
      <div className="headerBg"></div>
      <section id="home">
        <div class="backgroundParticles">
          <div class="particle"></div>
          <div class="particle"></div>
          <div class="particle"></div>
          <div class="particle"></div>
          <div class="particle"></div>
          <div class="particle"></div>
          <div class="particle"></div>
        </div>
        <div class="container">
          <div className="headerText">
            <Typewriter
              words={["Hi, I'm Prasanna kumar"]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={20}
              delaySpeed={1500}
            />
          </div>
          <div className="bannerText">
            A passionate Frontend Developer | React Enthusiast | Crafting
            Immersive Web Experiences | creating impactful solutions
          </div>
          <div onClick={() => onLinkClick("Projects")} className="btnExplore">Explore My Work</div>
        </div>
        <div className="arrowContainer" onClick={() => onLinkClick("About")}>
          <span className="arrowDown">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              fill="#ffffff"
              height="24px"
              width="24px"
              version="1.1"
              id="Layer_1"
              viewBox="0 0 330.002 330.002"
              xml:space="preserve"
            >
              <path
                id="XMLID_23_"
                d="M329.155,100.036c-2.108-6.011-7.784-10.035-14.154-10.035h-300c-6.371,0-12.046,4.024-14.154,10.035  c-2.109,6.011-0.19,12.699,4.784,16.678l150.004,120c2.739,2.191,6.055,3.287,9.37,3.287c3.316,0,6.631-1.096,9.371-3.287  l149.996-120C329.346,112.734,331.264,106.047,329.155,100.036z"
              />
            </svg>
          </span>
        </div>
      </section>
    </>
  );
};

export default Home;
