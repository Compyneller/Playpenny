import React from "react";
import {
  Button,
  Container,
  Form,
  InputGroup,
  Nav,
  Navbar,
} from "react-bootstrap";

const Header = () => {
  return (
    <>
      <div
        className="d-flex align-items-center justify-content-end"
        style={{ minHeight: "50vh", width: "100%" }}
      >
        <Container>
          <div
            className="w-100 d-flex align-items-center justify-content-end"
            style={{ minHeight: "40vh" }}
          >
            <div
              className="w-25 d-flex align-items-center justify-content-center "
              style={{ minHeight: "40vh" }}
            >
              <form
                className="w-100"
                action="
                "
              >
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Password"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Email ID"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Referral (Optional)"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
                <Button
                  style={{ background: "#B71C1C", border: "none" }}
                  className="w-100"
                >
                  REGISTER FOR FREE
                </Button>
              </form>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
