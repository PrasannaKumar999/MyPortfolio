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
    gap: 20px;
    margin: 0 auto;
    max-width: 960px;
  }
`;
