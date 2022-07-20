import { Card, Col, Container, Row } from "react-bootstrap";
import "./Winner.scss";
const WhatWinner = () => {
  return (
    <Container>
      <h3>WHAT THE WINNERS SAY?</h3>
      <Row className="g-0">
        <Col sm={6} lg={3}>
          <Card>
            <Card.Body className="d-flex flex-column align-items-center justify-content-center text-center">
              <img
                className="winnerImages"
                src="https://www.deccanrummy.com/images/winners/player-1.png"
                alt=""
              />
              <h5 className="winnerHeading">TECHNO1985</h5>
              <img
                src="https://www.deccanrummy.com/images/homepage/rating.png"
                alt=""
              />
              <p>Really enjoyed playing with all expert players out there.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} lg={3}>
          <Card>
            <Card.Body className="d-flex flex-column align-items-center justify-content-center text-center">
              <img
                className="winnerImages"
                src="https://www.deccanrummy.com/images/winners/player-1.png"
                alt=""
              />
              <h5 className="winnerHeading">TECHNO1985</h5>
              <img
                src="https://www.deccanrummy.com/images/homepage/rating.png"
                alt=""
              />
              <p>Really enjoyed playing with all expert players out there.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} lg={3}>
          <Card>
            <Card.Body className="d-flex flex-column align-items-center justify-content-center text-center">
              <img
                className="winnerImages"
                src="https://www.deccanrummy.com/images/winners/player-1.png"
                alt=""
              />
              <h5 className="winnerHeading">TECHNO1985</h5>
              <img
                src="https://www.deccanrummy.com/images/homepage/rating.png"
                alt=""
              />
              <p>Really enjoyed playing with all expert players out there.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} lg={3}>
          <Card>
            <Card.Body className="d-flex flex-column align-items-center justify-content-center text-center">
              <img
                className="winnerImages"
                src="https://www.deccanrummy.com/images/winners/player-1.png"
                alt=""
              />
              <h5 className="winnerHeading">TECHNO1985</h5>
              <img
                src="https://www.deccanrummy.com/images/homepage/rating.png"
                alt=""
              />
              <p>Really enjoyed playing with all expert players out there.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default WhatWinner;
