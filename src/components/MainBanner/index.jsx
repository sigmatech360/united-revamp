import React from "react";
import { Link } from "react-router-dom";

import mainbannerimgs from "../../assets/images/main-banner-imgs.webp";
import mainbannerbg from "../../assets/images/main-banner-bg.webp";


const MainBanner = ({openModal}) => {
  return (
    <>
      <section className="main-banner">
        <img
            src={mainbannerbg}
            alt="United Web Developer Banner Background"
            className="services-banner-sec-bgImg"
            fetchPriority="high"
            width="1920"
            height="1080"
          />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-7 col-xl-8 col-lg-9">
              <div className="main-banner__content">
                <h1 data-aos="fade-up" data-aos-delay="100">
                  Empowering Growth with Custom Web Design & Development Solutions!
                </h1>
                <p data-aos="fade-up" data-aos-delay="300">
                  We are a modern digital agency that blends creativity with
                  code to build unforgettable brand experiences. Our digital
                  solutions effortlessly convert casual visitors into loyal
                  fans, driving tangible results.
                </p>
                <div
                  className="main-banner__content-btns"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <button
                    className="theme-btn theme-btn__yellow"
                    onClick={openModal}
                  >
                    Let's Get Started
                  </button>
                  <Link
                    to={"/contact-us"}
                    className="theme-btn theme-btn-hover"
                  >
                    Discuss Your Project
                  </Link>
                </div>
                <div
                  className="main-banner__content-imgs"
                  data-aos="fade-up"
                  data-aos-delay="700"
                >
                  <img
                    src={mainbannerimgs}
                    fetchPriority="high"
                    width="360"
                    height="61"
                    className="img-fluid"
                    alt="Custom Web Design & Development Solutions!"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default MainBanner;
