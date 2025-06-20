import React from "react";
import { ProjectsStyles } from "../styles/components/ProjectsStyles";
import { ProjectCard } from "./ProjectCard";
import AnimatedCard from "./AnimatedCard";

export const Projects = () => {
  return (
    <>
      <style jsx>{ProjectsStyles}</style>
      <div className="projectsContainer">
        <div className="projectsHeader">Projects</div>
        <div className="projectsCardContainer">
          {[1, 2, 3, 4, 5, 6].map((ele,index) => (
            <AnimatedCard key={index}>
              <ProjectCard />
            </AnimatedCard>
          ))}
        </div>
      </div>
    </>
  );
};
