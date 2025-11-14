import React from "react";

import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.webp";
import footerlogocontentimgs from "../../../assets/images/footer-logo-content-imgs.webp";
import footerClutch from "../../../assets/images/icons/footer/clutch-icon.webp";
import trustpilot from "../../../assets/images/icons/footer/trust-pilot.webp";
import dmca from "../../../assets/images/icons/footer/DMCA.webp";

import { RiFacebookLine, RiLinkedinLine } from "react-icons/ri";
import { FaBehance, FaInstagram } from "react-icons/fa";
import ObfuscatedEmail from "../../ObfuscatedEmail";
import PhoneLink from "../../PhoneLink";
import { SiCrunchbase, SiYelp } from "react-icons/si";

const companyLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Contact Us", path: "/contact-us" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Pricing", path: "/pricing" },
  // { name: "Resources", path: "" },
  // // { name: "Services", path: "/services" },
  // { name: "Testimonials", path: "" },
  // { name: "Business Tools", path: "" },
];

const servicesLinks = [
  { name: "Web Design", path: "/web-design" },
  { name: "CMS Development", path: "/cms-development" },
  { name: "Digital Marketing", path: "/digital-marketing" },
  { name: "Social Media Marketing", path: "/social-media-marketing" },
  { name: "SEO", path: "/search-engine-optimization" },
  { name: "Custom Development", path: "/custom-development" },
  { name: "Mobile App Development", path: "/mobile-app-development" },
  { name: "Logo Design", path: "/logo-design" },
];

const Footer = ({ footerTitle }) => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {footerTitle ? (
              <h2
                className="footer-main__title text-center"
                dangerouslySetInnerHTML={{ __html: footerTitle }}
              ></h2>
            ) : (
              <h2 className="footer-main__title text-center">
                Providing <span className="colorYellow">Smart Digital</span>{" "}
                <br /> Solutions Designed to Grow Your{" "}
                <span className="colorYellow">Business Online</span>
              </h2>
            )}
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="col-xl-5 col-lg-4 mb-lg-0 mb-5">
                <div className="main-footer__logo-content">
                  <div className="main-footer__logo">
                    <img src={logo} alt="United Revamp Developers" />
                  </div>
                  <p>
                    Your trusted partner in digital transformation. We create
                    custom{" "}
                    <span className="colorYellow">
                      Web Designs, Logo Design, SEO, Social Media Marketing, and
                      Digital marketing
                    </span>{" "}
                    services, providing powerful brand growth. Contact us today
                    to book a spot for free testing.
                  </p>
                  <div className="footer-social__links">
                    <a
                      href="https://www.facebook.com/profile.php?id=61561044334641"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Follow us on Facebook"
                      aria-label="Facebook"
                    >
                      <RiFacebookLine />
                    </a>
                    <a
                      href="https://www.instagram.com/unit.edwebdevelopers/"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Follow us on Instagram"
                      aria-label="Instagram"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/united-webdevelopers/"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Connect with us on LinkedIn"
                      aria-label="LinkedIn"
                    >
                      <RiLinkedinLine />
                    </a>
                    <a
                      href="https://www.crunchbase.com/organization/united-web-developers"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Cruncbase"
                      aria-label="Cruncbase"
                    >
                      cb
                    </a>
                    <a
                      href="https://www.behance.net/unitedwebdevelopers"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Behance"
                      aria-label="Behance"
                    >
                      <FaBehance />
                    </a>
                    <a
                      href="https://www.yelp.com/biz/united-web-developers-pembroke-pines"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Yelp"
                      aria-label="Yelp"
                    >
                      <SiYelp />
                    </a>
                  </div>
                  <div className="footer-logo__content-imgs">
                      <a
                        href="https://www.dmca.com/Protection/Status.aspx?id=32995e80-2eff-42b0-8144-80b5ab309ecd&refurl=https%3a%2f%2funitedwebdevelopers.com%2f&rlo=true"
                        title="DMCA.com Protection Status"
                        className="footer-logo__content-img p-0 bg-transparent dmca-badge"
                      >
                        {" "}
                        <img
                          src={dmca}
                          alt="DMCA.com Protection Status"
                        />
                      </a>
                    {/* <div className="footer-logo__content-img">
                      
                      <img
                        src={footerlogocontentimgs}
                        alt="United revamp developers logo"
                      />
                    </div> */}
                    <div className="footer-logo__content-img">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Trust Pilot"
                        aria-label="trustpilot"
                        href="https://www.trustpilot.com/review/unitedwebdevelopers.com"
                      >
                        <img src={trustpilot} alt="Trust Pilot" />
                      </a>
                    </div>
                    <div className="footer-logo__content-img">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Clutch"
                        aria-label="Clutch"
                        href="https://clutch.co/profile/united-web-developers"
                      >
                        <img src={footerClutch} alt="Clutch" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 mb-md-0 mb-4">
                <h6 className="main-footer__links-title">Company</h6>
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
                <h6 className="main-footer__links-title">Services</h6>
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
                <h6 className="main-footer__links-title">Contact Us</h6>
                <div className="main-footer__links">
                  {/* <a href="tel:+13214142155" className="main-footer-link">
                    +1 (321) 414-2155
                  </a> */}
                  <PhoneLink
                    phoneNumber="+13214142155"
                    className="main-footer-link"
                    label="+1 (321) 414-2155"
                  />
                  {/* <a
                    href="mailto:support@unitedwebdevelopers.com"
                    className="main-footer-link"
                  >
                    support<span className="at"></span>unitedwebdevelopers<span className="dot"></span>com
                  </a> */}
                  <ObfuscatedEmail className="main-footer-link" />
                  <p>2114 N, Flamingo Road, Pembroke Pines, FL, 33028</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <hr className="my-4" />
          </div>
          <div className="col-md-12">
            <div className="footer-copyright">
              <p>&copy; {new Date().getFullYear()} United Web Developers</p>
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
