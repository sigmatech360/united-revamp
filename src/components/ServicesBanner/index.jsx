import React from "react";
import { Link } from "react-router-dom";

import mainbannerimgs from "../../assets/images/main-banner-imgs.png";

const ServicesBanner = (props) => {
  return (
    <section
      className="services-banner-sec"
      style={{ backgroundImage: `url(${props.bgImage})` }}
    >
      <div className="container">
        <div className="row align-items-center flex-lg-row flex-column-reverse">
          <div className={props.leftColClass || `col-lg-6`}>
            <div className="services-banner__content">
              <h1 data-aos="fade-right" data-aos-delay={100} dangerouslySetInnerHTML={{ __html: props.title }}>
                
              </h1>
              <p data-aos="fade-right" data-aos-delay={300} dangerouslySetInnerHTML={{ __html: props.description }}>
                
              </p>
              <div
                className="main-banner__content-btns"
                data-aos="fade-right"
                data-aos-delay={500}
              >
                {props.cta1 && props.cta2 ? (

                  <>
                  <Link to={""} className="theme-btn theme-btn__yellow">
                    {props.cta1}
                  </Link>
                  <Link to={""} className="theme-btn">
                    {props.cta2}
                  </Link>
                  </>
                ):(
                  <>
                  <Link to={""} className="theme-btn theme-btn__yellow">
                    Let's Get Started
                  </Link>
                  <Link to={""} className="theme-btn">
                    Discuss Your Project
                  </Link>
                  </>
                )}
              </div>
              <div
                className="main-banner__content-imgs"
                data-aos="fade-right"
                data-aos-delay={700}
              >
                <img
                  src={mainbannerimgs}
                  className="img-fluid"
                  alt="main-banner-imgs"
                />
              </div>
            </div>
          </div>
          <div className={props.rightColClass || `col-lg-6`}>
            {props.servicesbannerimg && (
              <div
                className="services-banner__img"
                data-aos="fade-left"
                data-aos-delay={200}
              >
                <img
                  src={props.servicesbannerimg}
                  className="img-fluid"
                  alt="Services Banner Image"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesBanner;
