import React from "react";
import { ProjectsStyles } from "../styles/components/ProjectsStyles";
import { ProjectCard } from "./ProjectCard";
import AnimatedCard from "./AnimatedCard";
import { globalStyles } from "../styles/globalStyles";

export const Projects = () => {
  return (
    <>
      <style jsx>{globalStyles}</style>
      <style jsx>{ProjectsStyles}</style>
      <div className="mainGlobalContainer">
        <div className="globalContainerHeader">Projects</div>
        <div className="projectsCardContainer">
          {[1, 2, 3, 4, 5, 6].map((ele, index) => (
            <AnimatedCard key={index}>
              <ProjectCard />
            </AnimatedCard>
          ))}
        </div>
      </div>
    </>
  );
};
