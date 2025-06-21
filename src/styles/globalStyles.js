import { css } from "styled-components";

export const globalStyles = css`
  .mainGlobalContainer {
    width: 960px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    padding-top: 60px;
  }
  .globalContainerHeader {
    color: #2d2e96;
    font-size: 48px;
    font-weight: 600;
    line-height: 36px;
    text-align: center;
  }

  @media screen and (max-width: 960px) {
    .mainGlobalContainer {
      width: 100%;
    }
  }
`;
