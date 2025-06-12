import { css } from "styled-components";
export const aboutmeStyles = css`
  .mainContainer {
    width: 100%;
    /* background: linear-gradient(180deg, #0f172a, #1e293b); */
  }
  .aboutmeContainer {
    width: 960px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 0px;
  }
  .textAboutme {
    color: #2d2e96;
    font-size: 48px;
    font-weight: 600;
  }
  .aboutmeBoxes {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
    margin-top: 32px;
  }
  .boxes {
    display: flex;
    gap: 30px;
    align-items: center;
    justify-content: center;
  }
  .box {
    background-color: #f6f6f6;
    padding: 24px 16px;
    border-radius: 24px;
    position: relative;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-decoration: none;
    color: inherit;
  }
  .boxTitle {
    font-size: 20px;
    line-height: 26px;
    font-weight: 600;
    color: #202020;
  }
  .boxdesc {
    font-size: 16px;
    line-height: 1.25;
    font-weight: 500;
    color: #939393;
  }

  @media screen and (max-width: 960px) {
    .aboutmeContainer {
      width: 100%;
    }
    .boxes {
      flex-direction: column;
    }
    .aboutmeBoxes {
      width: 100%;
      padding: 0px 24px;
      box-sizing: border-box;
    }
    .boxTitle{
      text-align: center;
      font-size: 14px;
      line-height: 12px;
    }
    .box{
      gap: 12px;
    }
    .boxdesc{
      font-size: 12px;
    }
  }
`;
