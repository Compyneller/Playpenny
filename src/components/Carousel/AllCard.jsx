import { Col, Container, Row } from "react-bootstrap";
import CardCarousel from "./CardCarousel";
import MidCard from "./MidCard";
import Review from "./Review";

const AllCard = () => {
  return (
    <div className="w-100" style={{ background: "#FFEBEE" }}>
      <Container>
        <Row className="g-3">
          {/* <Col sm={12} lg={4}>
            <CardCarousel />
          </Col> */}
          <Col sm={12} lg={12}>
            <MidCard />
          </Col>
          {/* <Col sm={12} lg={4}>
            <Review />
          </Col> */}
        </Row>
      </Container>
    </div>
  );
};

export default AllCard;
