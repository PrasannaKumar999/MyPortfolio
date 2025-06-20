import { css } from "styled-components";

export const SkillStyles = css`
  .skillsHeader {
    color: #2d2e96;
    font-size: 48px;
    font-weight: 600;
    padding-bottom: 24px;
  }
  .skillsMainContainer {
    margin: 0 auto;
    max-width: 960px;
  }
  .skillBoxContainer {
    display: flex;
    flex-wrap: wrap;
    gap: 18px;
  }
  .skillCard {
    width: 175px;
    background: #ffffff;
    border-radius: 1.5rem;
    padding: 2rem;
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.1),
      -6px -6px 12px rgba(255, 255, 255, 0.8);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }

  .skillCard:hover {
    /* transform: translateY(-10px); */
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15),
      0 0 20px rgba(59, 130, 246, 0.3);
  }
  @media screen and (max-width:768px) {
    .skillBoxContainer{
      padding: 0px 24px;
    }
    .skillCard{
      width: calc(50% - 10px);
    }
  }
`;
