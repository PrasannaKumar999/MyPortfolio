import React from "react";
import { ProjectsStyles } from "../styles/components/ProjectsStyles";
import { ProjectCard } from "./ProjectCard";
import AnimatedCard from "./AnimatedCard";
import { globalStyles } from "../styles/globalStyles";
import { projectData } from "../services/projectDataServices";

export const Projects = () => {
  return (
    <>
      <style jsx>{globalStyles}</style>
      <style jsx>{ProjectsStyles}</style>
      <div className="mainGlobalContainer">
        <div className="globalContainerHeader">Projects</div>
        <div className="projectsCardContainer">
          {projectData.map((ele, index) => (
            <AnimatedCard key={index}>
              <ProjectCard projectData={ele} />
            </AnimatedCard>
          ))}
        </div>
      </div>
    </>
  );
};
