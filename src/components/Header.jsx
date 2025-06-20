import React from "react";
import { headerStyles } from "../styles/components/HeaderStyles";
import { useState } from "react";

const Header = ({ onLinkClick }) => {
  const sections = ["About", "Skills", "Projects", "Contact"];
  const [menuPopup, setMenuPopup] = useState(false);

  return (
    <>
      <style jsx>{headerStyles}</style>
      <div className="headerContainer">
        <div className="commonContainer">
          <div className="name" onClick={() => onLinkClick("Home")}>
            Portfolio
          </div>
          <div className="rightHeader">
            {sections.map((section) => (
              <div className="section" onClick={() => onLinkClick(section)}>
                {section}
              </div>
            ))}
          </div>
          <div className="btnDownload">Download CV</div>
          <div className="menuIcon" onClick={() => setMenuPopup(!menuPopup)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xml:space="preserve"
              id="menu"
              width="30"
              height="30"
              x="0"
              y="0"
              version="1.1"
              viewBox="0 0 96 96"
              fill="white"
            >
              <switch>
                <foreignObject
                  width="1"
                  height="1"
                  x="0"
                  y="0"
                  requiredExtensions="http://ns.adobe.com/AdobeIllustrator/10.0/"
                />
                <g>
                  <path d="M12 28h72a4 4 0 0 0 0-8H12a4 4 0 0 0 0 8zm72 16H12a4 4 0 0 0 0 8h72a4 4 0 0 0 0-8zm0 24H12a4 4 0 0 0 0 8h72a4 4 0 0 0 0-8z" />
                </g>
              </switch>
            </svg>
          </div>
        </div>

        {menuPopup && (
          <div className="popup">
            <span
              className="closeIcon"
              onClick={() => setMenuPopup(!menuPopup)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                id="close"
                fill="white"
              >
                <path d="M10.05 23.95a1 1 0 0 0 1.414 0L17 18.414l5.536 5.536a1 1 0 0 0 1.414-1.414L18.414 17l5.536-5.536a1 1 0 0 0-1.414-1.414L17 15.586l-5.536-5.536a1 1 0 0 0-1.414 1.414L15.586 17l-5.536 5.536a1 1 0 0 0 0 1.414z" />
              </svg>
            </span>
            <div
              className="rightMobileHeader"
              onClick={(e) => e.stopPropagation()}
            >
              {sections.map((section) => (
                <div
                  className="section"
                  onClick={() => {
                    onLinkClick(section);
                    // setTimeout(() => setMenuPopup(false), 400);
                    setMenuPopup(false);
                  }}
                >
                  {section}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
