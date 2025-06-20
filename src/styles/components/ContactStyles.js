import { css } from "styled-components";

export const ContactStyles = css`
  .ContactMainContainer {
    max-width: 936px;
    margin: 0 auto;
    padding: 60px 0px;
  }
  .contactHeader {
    color: #2d2e96;
    font-size: 48px;
    font-weight: 600;
    padding-bottom: 24px;
    text-align: center;
  }
  .textContainer {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .txtDiscuss {
    font-size: 18px;
    color: black;
    font-weight: 600;
    text-align: center;
  }
  .textBottom {
    font-size: 14px;
    color: black;
    font-weight: 400;
    text-align: center;
  }
  .contactBottomContainer {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    padding: 30px 0px;
    gap: 50px;
  }
  .leftContainer {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .contactDetailContainer {
    width: 50%;
    display: flex;
    gap: 20px;
    align-items: stretch;
  }
  .icon {
    width: 60px;
    height: 60px;
    padding: 16px;
    background: #2d2e96;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .detailContainer {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    padding: 2px 0px;
  }
  .detailHeader {
    color: #6b7280;
    font-size: 16px;
  }
  .detailDesc {
    color: black;
    font-weight: 500;
    cursor: pointer;
    word-break: break-all;
  }
  .detailDesc > a {
    all: unset;
  }
  .rightContainer {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }
  .inputContainer {
    all: unset;
    border: 1px solid #6b7280;
    padding: 12px 20px;
    width: 100%;
    border-radius: 8px;
    color: #6b7280;
    box-sizing: border-box;
  }
  .textView {
    height: 100px;
  }
  .inputsContainer {
    display: flex;
    gap: 20px;
    width: 100%;
  }
  .btnSubmitMsg {
    background: linear-gradient(90deg, #6366f1, #3b82f6);
    transition: transform 0.3s ease;
    padding: 12px 20px;
    color: white;
    border-radius: 10px;
    font-size: 14px;
    width: fit-content;
    cursor: pointer;
    background: linear-gradient(90deg, #6366f1, #3b82f6);
    transition: transform 0.3s ease;
    margin-left: auto;
  }

  @media screen and (max-width: 768px) {
    .contactBottomContainer {
      flex-direction: column;
      padding: 0px 24px;
    }
    .rightContainer{
      gap: 20px;
    }
  }
`;
