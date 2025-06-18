import React from "react";
import { Link } from "react-router-dom";

import mainbannerimgs from "../../assets/images/main-banner-imgs.png";


const MainBanner = ({openModal}) => {
  return (
    <>
      <section className="main-banner">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-7 col-xl-8 col-lg-9">
              <div className="main-banner__content">
                <h1 data-aos="fade-up" data-aos-delay="100">
                  Empowering Growth With Custom Web Design & Development
                  Solutions!
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
                    className="img-fluid"
                    alt="main-banner-imgs"
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
