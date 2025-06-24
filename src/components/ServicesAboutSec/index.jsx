import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormModal from "../FormModal";

const ServicesAboutSec = (props) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
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
                alt={props.title}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="services-about__content">
              <h2
                data-aos="fade-left"
                data-aos-delay={200}
                dangerouslySetInnerHTML={{ __html: props.title }}
              ></h2>
              <p
                data-aos="fade-left"
                data-aos-delay={400}
                dangerouslySetInnerHTML={{ __html: props.description }}
              ></p>
              <div
                className="d-flex gap-2"
                data-aos="fade-left"
                data-aos-delay={600}
              >
                {props.cta1 && props.cta2 ? (
                  <>
                    <Link to={props.cta1Link || "/pricing"} className="theme-btn theme-btn__black">
                      {props.cta1}
                    </Link>
                    <a  href="tel:(619)3266066" className="theme-btn theme-btn__yellow">
                      {props.cta2}
                    </a>
                  </>
                ) : (
                  <>
                    <button onClick={() => setShowModal(true)} className="theme-btn theme-btn__black">
                      Get Started
                    </button>
                    <a href="tel:(619)3266066" className="theme-btn theme-btn__yellow">
                      Call Us Now
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <FormModal show={showModal} handleClose={() => setShowModal(false)} />
    </>
  );
};

export default ServicesAboutSec;
