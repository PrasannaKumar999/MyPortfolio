import { css } from "styled-components";
export const ProjectsStyles = css`

  .projectsContainer {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* padding: 50px 24px; */
  }
  .projectsHeader {
    color: #2d2e96;
    font-size: 48px;
    font-weight: 600;
    padding-bottom: 24px;
  }
  .projectsCardContainer{
    display: flex;
    flex-wrap: wrap;
    gap: 18px;
    margin: 0 auto;
    max-width: 960px;
  }
  /* @media screen and (max-width: 768px) {
    .projectsHeader {
      font-size: 28px;
      line-height: 25px;
    }
  } */
`;
