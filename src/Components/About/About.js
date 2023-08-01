// add image to folder and import landing image to this file
import Container from "react-bootstrap/Container";
import "./About.css";
import Image from "react-bootstrap/Image";
import aboutPhoto from "./aboutPhoto.jpg";

export default function About() {
  return (
    <div id="about">
      {/* add about info */}
      <Container>
        <div className="about">
          <h1 className="aboutHeading"> About</h1>
          <div className="aboutContent">
            <p className="aboutText">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            <Image className="aboutPhoto" src={aboutPhoto} />
          </div>
        </div>
      </Container>
    </div>
  )
}