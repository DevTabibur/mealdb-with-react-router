import React, { useEffect, useState } from "react";
import "./header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";

const Header = () => {
    
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Meal Restaurant</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#home">HOME</Nav.Link>
              <Nav.Link href="#meals">MEALS</Nav.Link>
              <Nav.Link href="#about">ABOUT</Nav.Link>
              <Nav.Link href="#contact">CONTACT</Nav.Link>
            </Nav>
            <Nav>
              <Form className="d-flex">
                <FormControl
                // onChange={searchFood}
                  type="search"
                  placeholder="Search food"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Food</Button>
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
