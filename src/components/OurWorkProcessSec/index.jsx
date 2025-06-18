import React from "react";

const OurWorkProcessSec = (props) => {
  return (
    <section className={`our-work-process ${props.className}`}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="sec-head">
              <p className="sec-head-tag">
                {props.secTag || "OUR WORK PROCESS"}
              </p>
              <h2 data-aos="fade-up" data-aos-delay={100}>
                {props.secTitle}
              </h2>
              <p data-aos="fade-up" data-aos-delay={300}>
                {props.secDescription}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="our-work-process__container">
              {props.secStepsData.map((item, index) => (
                <div
                  className="our-work-process__item"
                  data-aos="fade-left"
                  data-aos-delay={100}
                  key={index}
                >
                  <h2>{item.stepNum}</h2>
                  <p className="our-work-process__item-name">{item.stepName}</p>
                  {/* <p
                      className="our-work-process-last-p"
                      data-aos="fade-up"
                      data-aos-delay={200}
                    >
                      {item.stepDescription}
                    </p> */}
                </div>
              ))}
            </div>
            <p className="our-work-process-last-p">{props.secLastText}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWorkProcessSec;
