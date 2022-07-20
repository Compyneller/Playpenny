import { Container, Row } from "react-bootstrap";
import AccordionComp from "../AccordionComp";

const AccordioCards = () => {
  return (
    <Container>
      <Row className="g-3">
        <div className="col-12 col-lg-6">
          <AccordionComp />
        </div>
        <div className="col-12 col-lg-6">
          <AccordionComp />
        </div>
      </Row>
    </Container>
  );
};

export default AccordioCards;
