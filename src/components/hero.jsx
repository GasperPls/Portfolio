import "../index.css"
import mefr from "../assets/mefr.jpg";

function Hero() {
  return (
    <div className="intro">
      <img src={mefr} alt="mefr" style={{
        width: "100px",
        left: "0",
        display: "flex",
        margin: "10px 10px",
        }}></img>
      <div className="bio">Hi, I'm Rouni Assaf. I like to make websites for fun!</div>
      <div>Can you see this? Yes</div>

    </div>
  )
}

export default Hero
