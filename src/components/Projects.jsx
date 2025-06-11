import React from "react";
import { ProjectsStyles } from "../styles/components/ProjectsStyles";
import { aboutmeStyles } from "../styles/components/AboutmeStyles";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <>
      <style jsx>{ProjectsStyles}</style>
      <div className="projectsContainer">
        <div className="projectsHeader">Projects</div>
        <div className="projectsCardContainer">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </>
  );
};
