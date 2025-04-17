import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

import logo from "../../../assets/images/logo.png";

const navLinks = [
  { label: "HOME", path: "/" },
  { label: "ABOUT", path: "/about" },
  { label: "SERVICES", path: "" },
  { label: "PRICING", path: "/pricing" },
  { label: "PORTFOLIO", path: "/portfolio" },
  { label: "BLOGS", path: "/blogs" },
  { label: "CONTACT US", path: "/contact-us" },
];

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <Navbar expand="lg" className="main-navbar" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="My Virtual PI" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">

          <Nav className="ms-auto">
            {navLinks.map((link, index) => (
              <Nav.Link as={Link} to={link.path} key={index}>
                {link.label}
              </Nav.Link>
            ))}
          </Nav>

          <Link to={""} className="theme-btn theme-btn__yellow">
            {" "}
            Get In Touch
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
