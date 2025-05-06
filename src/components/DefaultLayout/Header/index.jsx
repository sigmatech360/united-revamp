import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "../../../assets/images/logo.png";

// const navLinks = [
//   { label: "HOME", path: "/" },
//   { label: "ABOUT", path: "/about" },
//   { label: "SERVICES", path: "/services" },
//   { label: "PRICING", path: "/pricing" },
//   { label: "PORTFOLIO", path: "/portfolio" },
//   { label: "BLOGS", path: "/blogs" },
//   { label: "CONTACT US", path: "/contact-us" },
// ];

const Header = () => {
  return (
    <Navbar expand="lg" className="main-navbar" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="My Virtual PI" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            {/* {navLinks.map((link, index) => (
              <Nav.Link as={Link} to={link.path} key={index}>
                {link.label}
              </Nav.Link>
            ))} */}

            <Nav.Link as={Link} to="/">
              HOME
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              ABOUT
            </Nav.Link>

            <NavDropdown title="SERVICES" id="services-dropdown">
              {/* <NavDropdown.Item as={Link} to="/services">
                Services
              </NavDropdown.Item> */}
              <NavDropdown.Item as={Link} to="/services/web-design">
                Web Design
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/cms-development">
                CMS Development
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/digital-marketing">
                Digital Marketing
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/social-media-marketing">
                Social Media Marketing
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/services/search-engine-optimization"
              >
                SEO
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/custom-development">
                Custom Development
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/mobile-app-development">
                Mobile App Development
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/logo-design">
                LogoDesign
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/pricing">
              PRICING
            </Nav.Link>
            <Nav.Link as={Link} to="/portfolio">
              PORTFOLIO
            </Nav.Link>
            <Nav.Link as={Link} to="/blogs">
              BLOGS
            </Nav.Link>
            <Nav.Link as={Link} to="/contact-us">
              CONTACT US
            </Nav.Link>
          </Nav>

          <Link
            to={""}
            className="theme-btn theme-btn__yellow header-getTouch__btn"
          >
            {" "}
            Get In Touch
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
