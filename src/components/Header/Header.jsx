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
      <Navbar className="px-3 " expand="lg" style={{ background: "#004D40" }}>
        <Navbar.Brand className="text-light" href="#home">
          Playpenny
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-light" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="text-light" href="#link">
              Promotion
            </Nav.Link>
            <Nav.Link className="text-light" href="#link">
              Downloads
            </Nav.Link>
            <Nav.Link className="text-light" href="#link">
              Leaderboard
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Username"
                className="me-2"
                aria-label="Search"
              />
              <Form.Control
                type="search"
                placeholder="Password"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-light">Login</Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div
        className="d-flex align-items-center justify-content-end"
        style={{ minHeight: "50vh", width: "100%" }}
      >
        <Container>
          <div
            className="w-100 d-flex align-items-center justify-content-end"
            style={{ minHeight: "40vh" }}
          >
            <div className="w-25 " style={{ minHeight: "40vh" }}>
              <form
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
                <Button style={{ background: "#004D40" }} className="w-100">
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
