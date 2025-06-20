import { css } from "styled-components";

export const HomeStyles = css`
  #home {
    height: calc(100vh - 96px);
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #1e3a8a, #7c3aed, #db2777, #f59e0b);
    background-size: 400% 400%;
    animation: gradientFlow 20s ease infinite;
    color: #fff;
    text-align: center;
    padding: 20px;
    position: relative;
    overflow: hidden;
  }
  .headerBg {
    height: 96px;
    background-color: rgb(28 30 69);
  }

  #home .background-particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    pointer-events: none;
  }
  #home .particle {
    position: absolute;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    animation: particleFloat 10s linear infinite;
  }
  #home .particle:nth-child(odd) {
    background: rgba(255, 255, 255, 0.4);
    animation-duration: 8s;
  }
  #home .particle:nth-child(1) {
    width: 20px;
    height: 20px;
    top: 10%;
    left: 15%;
  }
  #home .particle:nth-child(2) {
    width: 15px;
    height: 15px;
    top: 30%;
    left: 80%;
    animation-delay: 1s;
  }
  #home .particle:nth-child(3) {
    width: 25px;
    height: 25px;
    top: 70%;
    left: 20%;
    animation-delay: 2s;
  }
  #home .particle:nth-child(4) {
    width: 10px;
    height: 10px;
    top: 50%;
    left: 60%;
    animation-delay: 3s;
  }
  #home .particle:nth-child(5) {
    width: 18px;
    height: 18px;
    top: 20%;
    left: 40%;
    animation-delay: 4s;
  }
  #home .particle:nth-child(6) {
    width: 22px;
    height: 22px;
    top: 80%;
    left: 70%;
    animation-delay: 5s;
  }
  #home .particle:nth-child(7) {
    width: 12px;
    height: 12px;
    top: 40%;
    left: 10%;
    animation-delay: 6s;
  }
  @keyframes particleFloat {
    0% {
      transform: translate(0, 0);
      opacity: 0.7;
    }
    50% {
      opacity: 0.3;
    }
    100% {
      transform: translate(100px, -100px);
      opacity: 0;
    }
  }
  .textButton {
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    border-radius: 32px;
    padding: 18px 24px;
    width: fit-content;
    box-shadow: 0 0 20px #14b8a6, 0 0 20px #14b8a6, 0 0 30px #14b8a6;
    /* animation: glowPulse 2s ease-in-out infinite; */
    opacity: 0;
    animation: fadeIn 1s ease-in 2s forwards, glowPulse 2s ease-in-out infinite;
    transition: transform 0.1s ease, box-shadow 0.1s ease;
    background-color: #fff;
    color: #007bff;
    padding: 12px 24px;
    border-radius: 25px;
    font-weight: bold;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s, box-shadow 0.3s;
    margin: 0 auto;
  }

  .textButton:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px #14b8a6, 0 0 40px #14b8a6, 0 0 60px #14b8a6;
  }

  @keyframes glowPulse {
    0% {
      box-shadow: 0 0 10px #14b8a6;
    }
    50% {
      box-shadow: 0 0 10px #14b8a6, 0 0 20px #14b8a6, 0 0 30px #14b8a6;
    }
    100% {
      box-shadow: 0 0 10px #14b8a6;
    }
  }
  .arrowContainer {
    position: absolute;
    bottom: 40px;
    margin: auto;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    z-index: 1;
  }

  .arrowDown {
    display: inline-block;
    font-size: 2rem;
    animation: bounce 1.5s infinite ease-in-out;
  }

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(10px);
    }
  }

  .waveSvg {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    color: #14b8a6;
    z-index: 0;
    overflow: hidden;
  }

  @keyframes waveMorph {
    0% {
      d: path("M0,100 C320,50 720,0 1440,50 V100 H0 Z");
    }
    50% {
      d: path("M0,100 C300,60 700,10 1440,60 V100 H0 Z");
    }
    100% {
      d: path("M0,100 C320,50 720,0 1440,50 V100 H0 Z");
    }
  }

  .animateWave {
    animation: waveMorph 6s ease-in-out infinite;
  }

  @keyframes gradientFlow {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  #home .container {
    max-width: 800px;
    padding: 20px;
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
  .headerText {
    font-size: 48px;
    line-height: 40px;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    /* border-right: 3px solid #fff;
    animation: typing 3s steps(40, end), blink-caret 0.75s step-end infinite; */
  }
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: #fff;
    }
  }
  .bannerText {
    font-size: 20px;
    opacity: 0;
    animation: fadeIn 1s ease-in 1.5s forwards;
  }
  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
  .btnExplore {
    background-color: #fff;
    color: #007bff;
    padding: 12px 24px;
    border-radius: 25px;
    font-weight: bold;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s, box-shadow 0.3s;
    cursor: pointer;
    animation: fadeIn 1s ease-in 2s forwards, glowPulse 2s ease-in-out infinite;
    opacity: 0;
    width: fit-content;
    margin: auto;
  }
  .btnExplore::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(0, 123, 255, 0.2);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }
  .btnExplore:hover::before {
    width: 300px;
    height: 300px;
  }
  .btnExplore:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 768px) {
    .headerText {
      font-size: 28px;
      line-height: 25px;
    }
    .bannerText {
      font-size: 12px;
      line-height: 18px;
    }
    .btnExplore {
      font-size: 14px;
      border-radius: 12px;
      padding: 12px 24px;
    }
  }
`;
