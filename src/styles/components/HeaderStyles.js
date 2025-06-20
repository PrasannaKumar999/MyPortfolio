import { css } from "styled-components";
export const headerStyles = css`
  .headerContainer {
    background-color: rgb(3 3 3 / 45%);
    color: rgb(147 197 253 / 1);
    padding: 30px 24px;
    text-align: center;
    border: 1px solid rgb(255 255 255 / 0.2);
    backdrop-filter: blur(4px);
    position: fixed;
    width: 100%;
    left: 0px;
    right: 0px;
    top: 0px;
    z-index: 10;
  }
  .commonContainer {
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .name {
    font-size: 30px;
    font-weight: bold;
    color: #93c5fd;
    cursor: pointer;
  }
  .rightHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
    margin-right: 50px;
  }
  .activeSection {
    color: #93c5fd;
    font-size: 18px;
    font-weight: 600;
    color: #93c5fd;
    cursor: pointer;
    border-bottom: 4px solid transparent;
  }
  .section {
    font-size: 18px;
    font-weight: 600;
    color: #f3f4f6;
    cursor: pointer;
    border-bottom: 4px solid transparent;

    position: relative;
    text-decoration: none;
  }
  .section:hover {
    color: #93c5fd;
  }

  .section::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -3px;
    height: 4px;
    width: 0%;
    background: #93c5fd;
    transition: width 0.5s ease;
  }

  .section:hover::after {
    width: 100%;
    color: #93c5fd;
  }
  .menuIcon {
    display: none;
  }
  .btnDownload {
    border: 1px solid #2d2e96;
    border-radius: 12px;
    padding: 12px 16px;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    .rightHeader {
      display: none;
    }
    .menuIcon {
      display: block;
    }
    .popup {
      position: fixed;
      height: 100vh;
      width: 100vw;
      top: 0px;
      right: -1px;
      bottom: 0px;
      background: rgb(3 3 3 / 90%);
      width: 60%;
      /* border-bottom-left-radius: 60px;
      border-top-left-radius: 60px; */
    }
    .closeIcon {
      display: block;
      padding: 30px 24px;
      text-align: end;
    }
    .rightMobileHeader {
      display: flex;
      flex-direction: column;
      gap: 30px;
      align-items: center;
    }
    .btnDownload {
      display: none;
    }
  }
`;
