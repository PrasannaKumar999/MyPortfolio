import { aboutmeStyles } from "../styles/components/aboutmeStyles";

const Aboutme = () => {
  return (
    <>
      <style jsx>{aboutmeStyles}</style>
      <div className="mainContainer">
        <div className="aboutmeContainer">
          <div className="textAboutme">About me</div>
          <div className="aboutmeBoxes">
            <div className="boxes">
              <div className="box">
                <div className="boxTitle">Who I Am</div>
                <div className="boxdesc">
                  I'm a passionate frontend developer crafting user-friendly,
                  visually stunning web experiences. With expertise in HTML,
                  CSS, JavaScript, and modern frameworks, I transform ideas into
                  responsive, accessible digital solutions, driven by creativity
                  and a commitment to excellence.
                </div>
              </div>
              <div className="box">
                <div className="boxTitle">My Journey</div>
                <div className="boxdesc">
                  From coding my first webpage to mastering React and Next.js,
                  my journey as a frontend developer has been fueled by
                  curiosity and continuous learning. I've tackled diverse
                  projects, honed my skills, and embraced challenges to deliver
                  seamless, engaging user interfaces that leave a lasting
                  impact.
                </div>
              </div>
            </div>
            <div className="box">
              <div className="boxTitle">My Vision</div>
              <div className="boxdesc">
                I envision a web where design meets functionality effortlessly.
                My goal is to create innovative, inclusive digital experiences
                that inspire and connect users. By pushing the boundaries of
                frontend development, I aim to shape a future where technology
                empowers and delights everyone, everywhere.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutme;
