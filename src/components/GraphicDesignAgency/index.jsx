import React from "react";
import { Link } from "react-router-dom";

import gfxlastimg1 from "../../assets/images/gfx-last-img-1.webp";
import gfxlastimg2 from "../../assets/images/gfx-last-img-2.webp";

const GraphicDesignAgency = (props) => {
  return (
    <section className={`graphic-design-agency ${props.className}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-12">
            <div className="sec-head">
              <div className="sec-head-content">
                <p className="sec-head-tag">{props.secTag}</p>
                <h2 data-aos="fade-right" data-aos-delay="100">
                  {props.secTitle}
                </h2>
                <p data-aos="fade-right" data-aos-delay="300">
                  {props.secHeadDescription}
                </p>
              </div>
              {props.viewAllServices && (
                <Link
                  to={""}
                  className="theme-btn theme-btn__yellow"
                  data-aos="fade-left"
                  data-aos-delay="300"
                >
                  View All Services
                </Link>
              )}
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              {props.gfxServices.map((service, index) => (
                <div className="col-lg-3 col-md-6 mb-lg-5 mb-4" key={index}>
                  <div
                    className="gfx-card"
                    data-aos="flip-right"
                    data-aos-delay={index * 300}
                  >
                    <div className="gfx-card__content">
                      <div className="gfx-card__content-img">
                        <img src={service.img} alt={service.title} />
                      </div>
                    </div>
                    <p className="gfx-card__title">{service.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            {props.gfxLastTitle && (
              <h2
                className="gfxLastTitle-h3 fw-bold text-light mb-3"
                data-aos="fade-right"
                data-aos-delay={100}
              >
                {props.gfxLastTitle}
              </h2>
            )}
            {Array.isArray(props.gfxLastDescription) ? (
              props.gfxLastDescription.map((para, idx) => (
                <p
                  key={idx}
                  className="gfx-last-content mb-2"
                  data-aos="fade-right"
                  data-aos-delay={100 * (idx + 1)}
                >
                  {para}
                </p>
              ))
            ) : (
              <p
                className="gfx-last-content mb-2"
                data-aos="fade-right"
                data-aos-delay={100}
              >
                {props.gfxLastDescription}
              </p>
            )}
          </div>
          <div className="col-lg-6">
            {/* 2 Images */}
            {props.gfxLastImgs && (
              <div
                className="gfx-last-imgs"
                data-aos="fade-left"
                data-aos-delay={100}
              >
                <img
                  src={gfxlastimg1}
                  className="gfx-last-img-1"
                  alt={"Leading Design & Development Agency"}
                />
                <img
                  src={gfxlastimg2}
                  className="gfx-last-img-2"
                  alt={"Leading Design & Development Agency"}
                />
              </div>
            )}

            {/* Single Image */}
            {props.gfxLastImage && (
              <div
                className="web-design__img"
                data-aos="fade-left"
                data-aos-delay={100}
              >
                <img
                  src={props.gfxLastImage}
                  className="img-fluid"
                  alt={"Leading Design & Development Agency"}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GraphicDesignAgency;
