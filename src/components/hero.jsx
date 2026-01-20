import "../index.css"
import mefr from "../assets/mefr.jpg";

function Hero() {
  return (
    <div className="intro">
      <img src={mefr} alt="mefr" style={{
        width: "300px",
        left: "0",
        display: "flex",
        margin: "10px 10px",
        float: "left",
        }}></img>
        <br></br>
        <div>Web Develop. Web Design. Web Everything!
          <br></br>
          I'm an alumni from CSU Fullerton with a bachelor's degree in Computer Science.
          Looking to find career opportunities in web development, specializing in front-end UI/UX.
          </div>
      </div>
  )
}

export default Hero
