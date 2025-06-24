import React from "react";
import "./style.css"
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "../../../assets/images/logo.webp";
import { FaCaretDown, FaCaretRight } from "react-icons/fa";

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
          <img src={logo} alt="United revemp developers logo" />
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
              <NavDropdown.Item
                as={Link}
                to="/logo-design"
                onClick={(e) => e.stopPropagation()}
                target="_blank"
              >
                LogoDesign
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/web-design"
                onClick={(e) => e.stopPropagation()}
                target="_blank"
              >
                Web Design
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/cms-development"
                onClick={(e) => e.stopPropagation()}
                target="_blank"
              >
                CMS Development
              </NavDropdown.Item>









               <div className="nav-subdropdown-wrapper">

              <NavDropdown.Item
                as={Link}
                to="/digital-marketing"
                onClick={(e) => e.stopPropagation()}
                target="_blank"
              >
                Digital Marketing{" "}
                <span className="submenu-icon d-none d-lg-inline">
                        <FaCaretRight />
                      </span>
                      <span className="submenu-icon d-inline d-lg-none">
                        <FaCaretDown />
                      </span>
              </NavDropdown.Item>
              <div className="nav-subdropdown">
              <NavDropdown.Item
                as={Link}
                to="/social-media-marketing"
                onClick={(e) => e.stopPropagation()}
                target="_blank"
              >
                Social Media Marketing
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/search-engine-optimization"
                onClick={(e) => e.stopPropagation()}
                target="_blank"
              >
                SEO
              </NavDropdown.Item>
              </div>


               </div>















              <NavDropdown.Item
                as={Link}
                to="/custom-development"
                onClick={(e) => e.stopPropagation()}
                target="_blank"
              >
                Custom Development
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/mobile-app-development"
                onClick={(e) => e.stopPropagation()}
                target="_blank"
              >
                Mobile App Development
              </NavDropdown.Item>
              
            </NavDropdown>

            <Nav.Link as={Link} to="/pricing">
              PRICING
            </Nav.Link>
            <Nav.Link as={Link} to="/portfolio">
              PORTFOLIO
            </Nav.Link>
            <Nav.Link as={Link} to="/blog">
              BLOGS
            </Nav.Link>
            {/* <Nav.Link as={Link} to="/contact-us">
              CONTACT US
            </Nav.Link> */}
          </Nav>

          <Link
            to={"/contact-us"}
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
