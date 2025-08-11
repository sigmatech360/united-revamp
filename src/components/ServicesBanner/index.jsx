import React, { useState } from "react";
import { Link } from "react-router-dom";

import mainbannerimgs from "../../assets/images/main-banner-imgs.webp";
import FormModal from "../FormModal";
import { useInView } from "react-intersection-observer";

const ServicesBanner = (props) => {
  const [showModal, setShowModal] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // sirf pehli dafa load karein
    threshold: 0.1, // 10% image screen mein aaye to load
  });
  return (
    <>
      <section
        className={`services-banner-sec ${props.secClass}`}
        // style={{ backgroundImage: `url(${props.bgImage})` }}
        // ref={ref}
      >
        {props.bgImage && (
          <img
            src={props.bgImage}
            alt="Services Banner Img"
            className="services-banner-sec-bgImg"
            fetchPriority="high"
            width="1920"
            height="1080"
          />
        )}
        <div className="container">
          <div className="row align-items-center flex-lg-row flex-column-reverse">
            <div className={props.leftColClass || `col-lg-6`}>
              <div className="services-banner__content">
                <h1
                  // data-aos="fade-right"
                  // data-aos-delay={100}
                  dangerouslySetInnerHTML={{ __html: props.title }}
                ></h1>
                <p
                  // data-aos="fade-right"
                  // data-aos-delay={300}
                  dangerouslySetInnerHTML={{ __html: props.description }}
                ></p>
                <div
                  className="main-banner__content-btns"
                  // data-aos="fade-right"
                  // data-aos-delay={500}
                >
                  {props.cta1 && props.cta2 ? (
                    <>
                      <Link
                        to={props.cta1Link || "/contact-us"}
                        className="theme-btn theme-btn__yellow"
                      >
                        {props.cta1}
                      </Link>
                      <Link
                        to={props.cta2Link || "/portfolio"}
                        className="theme-btn theme-btn-hover"
                      >
                        {props.cta2}
                      </Link>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => setShowModal(true)}
                        className="theme-btn theme-btn__yellow"
                      >
                        Let's Get Started
                      </button>
                      <Link
                        to={"/contact-us"}
                        className="theme-btn theme-btn-hover"
                      >
                        Discuss Your Project
                      </Link>
                    </>
                  )}
                </div>
                <div
                  className="main-banner__content-imgs"
                  // data-aos="fade-right"
                  // data-aos-delay={700}
                >
                  <img
                    src={mainbannerimgs}
                    className="img-fluid"
                    alt={props.title}
                  />
                </div>
              </div>
            </div>
            <div className={props.rightColClass || `col-lg-6`}>
              {props.servicesbannerimg && (
                <div
                  className="services-banner__img"
                  // data-aos="fade-left"
                  // data-aos-delay={200}
                >
                  <img
                    src={props.servicesbannerimg}
                    className="img-fluid"
                    alt={props.title}
                    fetchPriority="high"
                    width={"336"}
                    height={"277"}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <FormModal show={showModal} handleClose={() => setShowModal(false)} />
    </>
  );
};

export default ServicesBanner;
