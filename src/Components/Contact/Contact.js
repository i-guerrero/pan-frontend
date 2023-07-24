import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import "./Contact.css";
import logo from "../../pan-logo.png"
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs"

export default function Contact() {
  return (
    <div id="contact">
      {/* add photo */}
      
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image className="logo-contact" src={logo} alt="logo" />
          </Col>
          <Col xs={6} md={4}>
            <h3>Contact Us!</h3>
            <p>+1 123-123-1234 <br />
            info.contact@philadephiaapprenticenetork.com<br />
            17 Philadephia Ave, Philadephia, PA 01234</p>
            <Row>
              <Col>
                <BsFacebook />
              </Col>
              <Col>
                <BsTwitter />
              </Col>
              <Col>
                <BsInstagram />
              </Col>
              <Col>
                <BsLinkedin />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
