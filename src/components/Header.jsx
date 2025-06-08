import React from "react";
import { headerStyles } from "../styles/components/HeaderStyles";

const Header = ({ onLinkClick }) => {
  const sections = ["Home", "About", "Projects", "Skills", "Contact"];

  return (
    <>
      <style jsx>{headerStyles}</style>
      <div className="headerContainer">
        <div className="commonContainer">
          <div className="name">Portfolio</div>
          <div className="rightHeader">
            {sections.map((section) => (
              <div className="section" onClick={() => onLinkClick(section)}>
                {section}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
