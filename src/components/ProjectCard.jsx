import React from "react";
import { ProjectCardStyles } from "../styles/components/ProjectCardStyles";
import { useState } from "react";
import { useEffect } from "react";

export const ProjectCard = ({ projectData }) => {
  const [expanded, setExpanded] = useState(false);
  const truncatedLength = 25;

  const words = projectData?.description?.split(" ");
  const isLongText = words.length > truncatedLength;
  const truncatedText = words.slice(0, truncatedLength).join(" ");

  useEffect(() => {
    console.log(words.length, "words");
  }, [words]);
  return (
    <>
      <style>{ProjectCardStyles}</style>
      {projectData && (
        <div className="cardContainer">
          <div className="imageContainer">image</div>
          <div className="bottomContainer">
            <div className="bottomCard">
              <div className="projectName">{projectData.name}</div>
              <div className={`projectDesc`}>
                <div>
                  {expanded || !isLongText ? projectData?.description : truncatedText + "... "}
                  {isLongText && (
                    <span
                      className="textReadMore"
                      onClick={() => setExpanded(!expanded)}
                    >
                      {expanded ? "Read less" : "Read more"}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="bottomCard">
              <div className="ProjectTags">
                {projectData.tech.map((ele) => (
                  <span className="projectTech">{ele}</span>
                ))}
              </div>
              <div className="projectFeatures">
                <span className="textKey">Key Features: </span>
                <span className="feature">Product filtering,</span>
                <span className="feature">secure checkout with Stripe,</span>
                <span className="feature">user authentication, </span>
                <span className="feature"> responsive design.</span>
              </div>
              <a
                href={projectData?.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="projectCta"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
