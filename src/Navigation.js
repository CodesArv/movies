import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import img from "./asset/unnamed.png";

function Navigation() {
  return (
    <Navbar className="color-nav sticky-top" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="" className="logo">
            <span className="moviespan"> movies</span>
            <span>
              <img src={img} className="img-fluid logoimg" />
            </span>

            <span className="mern">mern</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <div class="topnav" id="myTopnav">
              <Link to="/Upcoming" className="nav1">
                upcoming
              </Link>

              <Link to="/Toprated" className="nav2">
                Toprated
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
