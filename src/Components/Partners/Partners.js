import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
// import { useState, useEffect } from "react";
// import axios from "axios";
import Image  from "react-bootstrap/Image";
import partners from "./partners.json";
import "./Partners.css";

export default function Partners() {
  // const [partners, setPartners] = useState(partnersList);
  // const API = process.env.REACT_APP_API_URL;

  // useEffect(() => {
  //   axios.get(`${API}/partners`)
  //   .then((response => {
  //     setPartners(response.data)
  //   }))
  //   .catch((error) => {
  //     console.log(error)
  //   });
  // }, [API]);


  // useEffect(() => {
  //   setPartners(partnersList)
  // }, [partnersList]);
 

  return (
    <div id="partners">
      <Container>
        <h1>Partners</h1>
        <Container >
          <Carousel className="partner-carousel">
            <Carousel.Item>
            <Container>
              <Row className="align-items-center">
                {partners.slice(0, 4).map(partner => {
                  return (
                    <Col>
                      <Image src={partner} />
                    </Col>
                  )
                })}
              </Row>
              <Row className="align-items-center">
                {partners.slice(4, 8).map(partner => {
                  return (
                    <Col>
                      <Image src={partner} />
                    </Col>
                  )
                })}
              </Row>
              <Row className="align-items-center">
                {partners.slice(8, 12).map(partner => {
                  return (
                    <Col>
                      <Image src={partner} />
                    </Col>
                  )
                })}
              </Row>
              <Row className="align-items-center">
                {partners.slice(12, 16).map(partner => {
                  return (
                    <Col>
                      <Image src={partner} />
                    </Col>
                  )
                })}
              </Row>
            </Container>
            </Carousel.Item>
          </Carousel>
        </Container>
      </Container>
    </div>
  );
}
