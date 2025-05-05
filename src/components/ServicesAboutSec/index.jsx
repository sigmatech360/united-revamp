import React from "react";
import { Link } from "react-router-dom";

const ServicesAboutSec = (props) => {
  return (
    <section className="services-about__sec">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div
              className="services-about__img"
              data-aos="zoom-in"
              data-aos-delay={200}
            >
              <img
                src={props.image}
                className="img-fluid"
                alt="Services About Image"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="services-about__content">
              <h2 data-aos="fade-left" data-aos-delay={200}>
                {props.title}
              </h2>
              <p data-aos="fade-left" data-aos-delay={400}>
                {props.description}
              </p>
              <div
                className="d-flex gap-2"
                data-aos="fade-left"
                data-aos-delay={600}
              >
                <Link className="theme-btn theme-btn__black">Get Started</Link>
                <button className="theme-btn theme-btn__yellow">
                  Call Us Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesAboutSec;
