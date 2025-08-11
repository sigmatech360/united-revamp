import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormModal from "../FormModal";
import PhoneLink from "../PhoneLink";

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
                  width="636"
                  height={"388"}
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
                      <Link
                        to={props.cta1Link || "/pricing"}
                        className="theme-btn theme-btn__black"
                      >
                        {props.cta1}
                      </Link>
                      {/* <a  href="tel:+13214142155" className="theme-btn theme-btn__yellow">
                      {props.cta2}
                    </a> */}
                      <PhoneLink
                        phoneNumber="+13214142155"
                        className="theme-btn theme-btn__yellow"
                        label={props.cta2}
                      />
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => setShowModal(true)}
                        className="theme-btn theme-btn__black"
                      >
                        Get Started
                      </button>
                      {/* <a
                        href="tel:+13214142155"
                        className="theme-btn theme-btn__yellow"
                      >
                        Call Us Now
                      </a> */}
                      <PhoneLink
                        phoneNumber="+13214142155"
                        className="theme-btn theme-btn__yellow"
                        label={"Call Us Now"}
                      />
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
