import "./HomePage.scss";
import TypeAnimation from "react-type-animation";
import Button from "../../Components/Button/Button";
const backgroundImg = require("../../assets/Pratik_Sabata_v2.png");


const HomePage = () => {
  const performOperation = (e)=>{
      e.preventDefault();
    window.location.href = 'https://drive.google.com/file/d/16Xfx316SGz7Cs-wSx5eriBmAf2NKKijG/view?usp=sharing';
   }
  return (
    <div className="HomePage">
      <div className="top-bar">
        <div className="phone">
          <h3>+919880891493</h3>
        </div>
        <div className="email">
          <h3>pratik6009sabata@gmail.com</h3>
        </div>
      </div>
      <div className="container">
        <div className="intro-para">
          <div className="info-div">
            <h3>Hello, My name is</h3>
            <h1 style={{ fontSize: '4.5rem', fontWeight: "bolder" }}>Pratik Sabata</h1>
            <div>
              <TypeAnimation
                cursor={true}
                sequence={[
                  "FrontEnd Developer",
                  1000,
                  "Backend Developer",
                  1000,
                  "App Developer",
                  1000,
                  "Full Stack Developer",
                ]}
                wrapper="h2"
                repeat={Infinity}
                className="typing-text"
              />
            </div>
            <p>
              Highly motivated software engineer with a strong background in developing optimised strategies for a diverse client. 1 + years of
              industry experience includes working with large engineering teams to achieve concrete goals on a strict deadline.
            </p>
            <div></div>
            <Button text="Download CV" performOperation = {performOperation}/>
          </div>
        </div>
        <div
          className="my-img"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        ></div>
      </div>
    </div>
  );
};

export default HomePage;
