import React from "react";

import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import footerlogocontentimgs from "../../../assets/images/footer-logo-content-imgs.png";

import { RiFacebookLine, RiLinkedinLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";

const companyLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Blog", path: "/blogs" },
  { name: "Contact Us", path: "/contact-us" },
  { name: "Resources", path: "" },
  // { name: "Services", path: "/services" },
  { name: "Testimonials", path: "" },
  { name: "Business Tools", path: "" },
];

const servicesLinks = [
  { name: "Branding", path: "" },
  { name: "Logo Design", path: "/services/logo-design" },
  { name: "Video Animation", path: "" },
  { name: "Web Design", path: "/services/web-design" },
  { name: "Ebook Design", path: "" },
  { name: "UI/UX Design", path: "" },
  { name: "SEO", path: "/services/search-engine-optimization" },
  { name: "Web Development", path: "/services/custom-development" },
];

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="footer-main__title text-center">
              Being A <span className="colorYellow">Creative Agency</span>{" "}
              <br /> We love to reinvent brands with our{" "}
              <span className="colorYellow">design services</span>
            </h2>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="col-xl-5 col-lg-4 mb-lg-0 mb-5">
                <div className="main-footer__logo-content">
                  <div className="main-footer__logo">
                    <img src={logo} alt="United Revamp Developers" />
                  </div>
                  <p>
                    United Web Developers: Your go-to for professional digital
                    solutions. Our expert team offers website development,
                    software solutions, and more. Experience excellence today!
                  </p>
                  <div className="footer-social__links">
                    <a href="javascript:;" className="">
                      <RiFacebookLine />
                    </a>
                    <a href="javascript:;" className="">
                      <FaInstagram />
                    </a>
                    <a href="javascript:;" className="">
                      <RiLinkedinLine />
                    </a>
                  </div>
                  <div className="footer-logo__content-imgs">
                    <img
                      src={footerlogocontentimgs}
                      alt="footer logo content imgs"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 mb-md-0 mb-4">
                <h2 className="main-footer__links-title">Company</h2>
                <div className="main-footer__links">
                  {companyLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.path}
                      className="main-footer-link"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="col-lg-2 col-md-4 mb-md-0 mb-4">
                <h2 className="main-footer__links-title">Services</h2>
                <div className="main-footer__links">
                  {servicesLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.path}
                      className="main-footer-link"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-4">
                <h2 className="main-footer__links-title">Contact Us</h2>
                <div className="main-footer__links">
                  <a href="tel:(619) 326-6066" className="main-footer-link">
                    (619) 326-6066
                  </a>
                  <a
                    href="mailto:support@unitedwebdevelopers.com"
                    className="main-footer-link"
                  >
                    support@unitedwebdevelopers.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <hr className="my-4" />
          </div>
          <div className="col-md-12">
            <div className="footer-copyright">
              <p>&copy; 2025 Your Company Name</p>
              <div className="footer-copyright_links">
                <Link to={"/contact-us"}>Contact</Link>
                <Link to={"/terms-and-conditions"}>Terms & Conditions</Link>
                <Link to={"/privacy-policy"}>Privacy Policy</Link>
                {/* <Link to={""}>Disclaimer</Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
