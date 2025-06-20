import React from "react";
import { SkillStyles } from "../styles/components/SkillStyles";
import { Icons } from "../styles/components/Icons/icons";
import { skillCardData } from "../services/skillCardServices";
import { globalStyles } from "../styles/globalStyles";

export const Skills = () => {
  return (
    <>
      <style jsx>{globalStyles}</style>
      <style jsx>{SkillStyles}</style>
      <div className="mainGlobalContainer">
        <div className="globalContainerHeader">SKILLS</div>
        <div className="skillBoxContainer">
          {skillCardData.map((ele) => (
            <div className="skillCard">
              {ele.icon}
              <div>{ele.name}</div>
              {/* <div>{ele.progress}</div> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
