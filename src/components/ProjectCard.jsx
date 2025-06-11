import React from "react";
import { ProjectCardStyles } from "../styles/components/ProjectCardStyles";

export const ProjectCard = () => {
  return (
    <>
      <style>{ProjectCardStyles}</style>
      <div className="cardContainer">
        <div className="imageContainer">image</div>
        <div className="bottomContainer">
          <div className="projectName">E-Commerce Hub</div>
          <div className="projectDesc">
            A responsive e-commerce platform with a sleek UI, enabling seamless
            shopping experiences across devices.
          </div>
          <div className="ProjectTags">
            <span className="projectTech">Lorem</span>
            <span className="projectTech">Lorem</span>
            <span className="projectTech">Lorem</span>
          </div>
          <div className="projectFeatures">
            <span className="textKey">Key Features: </span>
            <span className="feature">Product filtering,</span>
            <span className="feature">secure checkout with Stripe,</span>
            <span className="feature">user authentication, </span>
            <span className="feature"> responsive design.</span>
          </div>
          <div className="projectCta">View Project</div>
        </div>
      </div>
    </>
  );
};
