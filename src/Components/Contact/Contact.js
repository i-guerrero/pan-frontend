import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import logo from "../../pan-logo.png";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Contact.css";

export default function Contact() {
  return (
    <div id="contact">    
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
                <Link to="https://www.facebook.com/philadephia" target="_blank" rel="noreferrer noopener"><BsFacebook /></Link>
              </Col>
              <Col>
                <Link to="https://twitter.com/PhiladelphiaGov" target="_blank" rel="noreferrer noopener"><BsTwitter /></Link>
              </Col>
              <Col>
                <Link to="https://www.instagram.com/cityofphiladelphia/" target="_blank" rel="noreferrer noopener"><BsInstagram /></Link>
              </Col>
              <Col>
                <Link to="https://www.linkedin.com/in/haniyyah-b-sharpe-brown-64005110/" target="_blank" rel="noreferrer noopener"><BsLinkedin /></Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
