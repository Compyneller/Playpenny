import React from "react";
import {
  Button,
  Container,
  Form,
  InputGroup,
  Nav,
  Navbar,
} from "react-bootstrap";

const NavBarComp = () => {
  return (
    <Navbar className="px-3 " expand="lg" style={{ background: "#B71C1C" }}>
      <Navbar.Brand className="text-light" href="#home">
        Playpenny
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link className="text-light" href="#home">
            Home
          </Nav.Link>
          {/* <Nav.Link className="text-light" href="#link">
            Promotion
          </Nav.Link>
          <Nav.Link className="text-light" href="#link">
            Downloads
          </Nav.Link>
          <Nav.Link className="text-light" href="#link">
            Leaderboard
          </Nav.Link> */}
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
  );
};

export default NavBarComp;
