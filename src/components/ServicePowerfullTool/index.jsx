import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormModal from "../FormModal";

const ServicePowerfullTool = (props) => {
  const [showModal, setShowModal] = useState(false);
  return (

    <>
    
    <section className="powerfull-tool__sec">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-12">
            <div className="sec-head">
              <h2 data-aos="fade-right" data-aos-delay={200}>
                {props.secTitle}
              </h2>
              <p data-aos="fade-right" data-aos-delay={400}>
                {props.secDescription}
              </p>
            </div>
          </div>

          <div className="col-lg-6 mb-lg-0 mb-4">
            <div className="powerfull-tool__contant">
              <div
                className="powerfull-tool__contant-icon"
                data-aos="fade-right"
                data-aos-delay={200}
              >
                <img src={props.toolIcon} alt={props.toolName} />
              </div>
              <h3 data-aos="fade-right" data-aos-delay={400}>
                {props.toolName}
              </h3>
              <p data-aos="fade-right" data-aos-delay={600}>
                {props.toolNameDesc}
              </p>
              <div className="powerfull-tool__contant-btnText">
                <button
                  // to={""}
                  onClick={() => setShowModal(true)}
                  className="theme-btn theme-btn__black"
                  data-aos="fade-right"
                  data-aos-delay={800}
                >
                  {props?.cta || 'Hire Designers'}
                </button>
                <p data-aos="zoom-in" data-aos-delay={800}>
                  {props.toolDesignerAvailable}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="powerfull-tool__boxes">
              <div className="powerfull-tool__box" data-aos="flip-right" data-aos-delay={500}>
                <p className="powerfull-tool__box-title">{props.usagePercent}</p>
                <p>{props.usage}</p>
              </div>
              <div className="powerfull-tool__box" data-aos="flip-left" data-aos-delay={500}>
                <p className="powerfull-tool__box-title">{props.rank}</p>
                <p>{props.highlightText}</p>
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

export default ServicePowerfullTool;
