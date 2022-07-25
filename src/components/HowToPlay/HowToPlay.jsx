import { Col, Container, Row } from "react-bootstrap";
import MidCard from "../Carousel/MidCard";

const HowToPlay = () => {
  return (
    <div className="w-100" style={{ background: "#FFEBEE" }}>
      <Container>
        <Row>
          <Col sm={12} lg={4}>
            <MidCard />
          </Col>
          <Col sm={12} lg={4}>
            <MidCard />
          </Col>
          <Col sm={12} lg={4}>
            <MidCard />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HowToPlay;
