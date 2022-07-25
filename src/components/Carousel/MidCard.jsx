import React from "react";
import { Alert, Card, Row } from "react-bootstrap";

const MidCard = () => {
  return (
    <>
      <h3 className="text-center">BENEFITS OF PLAYING RUMMY WITH PLAYPENNY</h3>
      <Card style={{ background: "#B71C1C" }}>
        <Card.Body className="d-flex flex-column align-items-center justify-content-center">
          <Row className="g-3">
            <div className="col-6 col-lg-6">
              <Card
                style={{
                  background: "#EF9A9A",
                  border: "2px solid #FFCDD2",
                  height: "100%",
                }}
              >
                <Card.Body className="text-center d-flex align-items-center justify-content-center">
                  <b>Register for FREE</b>
                </Card.Body>
              </Card>
            </div>
            <div className="col-6 col-lg-6">
              <Card
                style={{
                  background: "#EF9A9A",
                  border: "2px solid #FFCDD2",
                  height: "100%",
                }}
              >
                <Card.Body className="text-center d-flex align-items-center justify-content-center">
                  <b>First time registration bonus</b>
                </Card.Body>
              </Card>
            </div>
            <div className="col-6 col-lg-6">
              <Card
                style={{
                  background: "#EF9A9A",
                  border: "2px solid #FFCDD2",
                  height: "100%",
                }}
              >
                <Card.Body className="text-center d-flex align-items-center justify-content-center">
                  <b>Free rummy matches</b>
                </Card.Body>
              </Card>
            </div>
            <div className="col-6 col-lg-6">
              <Card
                style={{
                  background: "#EF9A9A",
                  border: "2px solid #FFCDD2",
                  height: "100%",
                }}
              >
                <Card.Body className="text-center d-flex align-items-center justify-content-center">
                  <b>Refer & Earn bonus</b>
                </Card.Body>
              </Card>
            </div>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default MidCard;
