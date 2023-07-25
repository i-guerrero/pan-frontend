import Container from "react-bootstrap/Container";
import "./Timeline.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsFill1CircleFill, BsFill2CircleFill, BsFill3CircleFill, BsFill4CircleFill, BsFill5CircleFill } from "react-icons/bs";

export default function Timeline() {
  return (
    <div id="timeline">
      {/* add testimonials */}
      <Container>
        <h1>Timeline</h1>
        <Row>
          <Col className="timelineImage" md={{ span: 2, offset: 5, order: 1 }} xs={{ span: 2, offset: 1, order: 1 }}>
            <div>
              <Row className="lineRow"></Row>
              <Row>
                <Col>
                  <BsFill1CircleFill className="stepImage" />
                </Col>
              </Row>
              <Row className="lineRow">
                <Col className="rightBorder"></Col>
                <Col className="leftBorder"></Col>
              </Row>
            </div>
          </Col>
          <Col className="leftCol" md={{ span: 5, offset: 0, order: 2 }} xs={{ span: 8, offset: 1, order: 2 }}>
            <p className="leftText blurbText">
              <span className="dateText">January 1, 2020</span>
              <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </Col>
        </Row>
        <Row>
          <Col className="rightCol" md={{ span: 5, offset: 0, order: 1 }} xs={{ span: 8, offset: 1, order: 2 }}>
            <p className="rightText blurbText">
              <span className="dateText">July 15, 2020</span>
              <br />Amet tellus cras adipiscing enim eu turpis egestas pretium.</p>
          </Col>
          <Col className="timelineImage" md={{ span: 2, offset: 0, order: 2 }} xs={{ span: 2, offset: 1, order: 1 }}>
            <div>
              <Row className="lineRow">
                <Col className="rightBorder"></Col>
                <Col className="leftBorder"></Col>
              </Row>
              <Row>
                <Col>
                  <BsFill2CircleFill className="stepImage" />
                </Col>
              </Row>
              <Row className="lineRow">
                <Col className="rightBorder"></Col>
                <Col className="leftBorder"></Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="timelineImage" md={{ span: 2, offset: 5, order: 1 }} xs={{ span: 2, offset: 1, order: 1 }}>
            <div>
              <Row className="lineRow">
                <Col className="rightBorder"></Col>
                <Col className="leftBorder"></Col>
              </Row>
              <Row>
                <Col>
                  <BsFill3CircleFill className="stepImage" />
                </Col>
              </Row>
              <Row className="lineRow">
                <Col className="rightBorder"></Col>
                <Col className="leftBorder"></Col>
              </Row>
            </div>
          </Col>
          <Col className="leftCol" md={{ span: 5, offset: 0, order: 2 }} xs={{ span: 8, offset: 1, order: 2 }}>
            <p className="leftText blurbText">
              <span className="dateText">September 29, 2020</span>
              <br />Quisque sagittis purus sit amet volutpat consequat mauris nunc congue. </p>
          </Col>
        </Row>
        <Row>
          <Col className="rightCol" md={{ span: 5, offset: 0, order: 1 }} xs={{ span: 8, offset: 1, order: 2 }}>
            <p className="rightText blurbText">
              <span className="dateText">April 1, 2021</span>
              <br />Ullamcorper morbi tincidunt ornare massa. Feugiat vivamus at augue eget.</p>
          </Col>
          <Col className="timelineImage" md={{ span: 2, offset: 0, order: 2 }} xs={{ span: 2, offset: 1, order: 1 }}>
            <div>
              <Row className="lineRow">
                <Col className="rightBorder"></Col>
                <Col className="leftBorder"></Col>
              </Row>
              <Row>
                <Col>
                  <BsFill4CircleFill className="stepImage" />
                </Col>
              </Row>
              <Row className="lineRow">
                <Col className="rightBorder"></Col>
                <Col className="leftBorder"></Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="timelineImage" md={{ span: 2, offset: 5, order: 1 }} xs={{ span: 2, offset: 1, order: 1 }}>
            <div>
              <Row className="lineRow">
                <Col className="rightBorder"></Col>
                <Col className="leftBorder"></Col>
              </Row>
              <Row>
                <Col>
                  <BsFill5CircleFill className="stepImage" />
                </Col>
              </Row>
              <Row className="lineRow">
              </Row>
            </div>
          </Col>
          <Col className="leftCol" md={{ span: 5, offset: 0, order: 2 }} xs={{ span: 8, offset: 1, order: 2 }}>
            <p className="leftText blurbText">
              <span className="dateText">October 8, 2021</span>
              <br />Suspendisse in est ante in. Purus sit amet luctus venenatis lectus magna fringilla urna.</p>
          </Col>
        </Row>
      </Container>
    </div >
  );
}
