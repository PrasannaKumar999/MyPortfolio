import { css } from "styled-components";

export const ProjectCardStyles = css`
  .cardContainer {
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    position: relative;
    max-width: 305px;

    background: #f8fafc;
    border-radius: 16px;
    overflow: hidden;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    border: 1px solid #e2e8f0;

    background: #f8fafc;
    border-radius: 16px;
    overflow: hidden;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    border: 1px solid #e2e8f0;
    height: 100%;
  }
  .cardContainer:hover {
    transform: scale(1.05);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  .imageContainer {
    height: 150px;
    width: 100%;
    /* background-color: red; */
  }
  .bottomContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* gap: 30px; */
    padding: 24px;
    height: 100%;
  }
  .bottomCard {
    display: flex;
    gap: 10px;
    flex-direction: column;
  }
  .projectName {
    font-size: 20px;
    line-height: 16px;
    color: #1f2937;
    font-weight: 600;
  }
  .projectDesc {
    font-size: 16px;
    /* line-height: 14px; */
    color: #4b5563;
    font-weight: 400;
  }
  .textReadMore {
    color: #6b7280;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
  }
  .trunck {
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .ProjectTags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .projectTech {
    background: #e0e7ff;
    color: #4f46e5;
    padding: 4px 10px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 500;
  }
  .textKey {
    color: #6b7280;
    font-size: 12px;
    font-weight: bold;
  }
  .feature {
    color: #6b7280;
    font-size: 12px;
    /* font-weight: bold; */
  }
  .projectCta {
    all: unset;
    background: linear-gradient(90deg, #6366f1, #3b82f6);
    transition: transform 0.3s ease;
    padding: 8px 20px;
    color: white;
    border-radius: 20px;
    font-size: 14px;
    width: fit-content;
    cursor: pointer;
    background: linear-gradient(90deg, #6366f1, #3b82f6);
    transition: transform 0.3s ease;
  }

  .projectCta :hover {
    background-color: red;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  @media screen and (max-width: 768px) {
    .bottomContainer {
      gap: 10px;
    }
    .projectName {
      font-size: 14px;
      line-height: 16px;
      color: #1f2937;
      font-weight: 600;
    }
    .cardContainer {
      max-width: 100%;
      margin: 0px 20px;
    }
    .projectDesc {
      font-size: 12px;
    }
  }
`;
