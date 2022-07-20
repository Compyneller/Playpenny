import React from "react";
import { Alert, Card } from "react-bootstrap";

const MidCard = () => {
  return (
    <>
      <h3 className="text-center">Benefits of DeccanRummy</h3>
      <Card
        style={{ height: "60vh", minHeight: "50vh", background: "#B2DFDB" }}
      >
        <Card.Body className="d-flex flex-column align-items-center justify-content-center">
          <Alert className="mb-3 w-100" variant="success">
            Register at Deccanrummy & Get bonus - ₹25
          </Alert>
          <Alert className="mb-3 w-100" variant="success">
            1st Deposit Welcome bonus - up to ₹5000
          </Alert>
          <Alert className="mb-3 w-100" variant="success">
            Free rummy tournaments every day for ₹56000
          </Alert>
          <Alert className="mb-3 w-100" variant="success">
            Refer a Friend and Earn - up to ₹10000 Bonus
          </Alert>
          <Alert className="w-100" variant="success">
            Download Deccan Rummy Mobile App for - FREE
          </Alert>
        </Card.Body>
      </Card>
    </>
  );
};

export default MidCard;
