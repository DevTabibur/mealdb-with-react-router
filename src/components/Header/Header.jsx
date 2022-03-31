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
import { Link } from "react-router-dom";

const Header = () => {
    
  return (
    <div>
      <Navbar className="header py-4" collapseOnSelect expand="lg">
        <Container>
          <Link className="link2" to="/"><h4>Meal Restaurant</h4></Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Link className="link" to="/">HOME</Link>
              <Link className="link" to="/restaurants">RESTAURANTS</Link>
              <Link className="link" to="/about">ABOUT</Link>
              <Link className="link" to="/contact">CONTACT</Link>
            </Nav>
            <Nav>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
