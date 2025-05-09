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
                  <h1>{item.stepNum}</h1>
                  <p>{item.stepName}</p>
                  <p
                    className="our-work-process-last-p"
                    data-aos="fade-up"
                    data-aos-delay={200}
                  >
                    {item.stepDescription}
                  </p>
                </div>
              ))}

              {/* <div
                className="our-work-process__item"
                data-aos="fade-left"
                data-aos-delay={100}
              >
                <h1>01</h1>
                <p></p>
              </div>
              <div
                className="our-work-process__item"
                data-aos="fade-left"
                data-aos-delay={300}
              >
                <h1>02</h1>
                <p>Ideation</p>
              </div>
              <div
                className="our-work-process__item"
                data-aos="fade-left"
                data-aos-delay={500}
              >
                <h1>03</h1>
                <p>Sketch</p>
              </div>
              <div
                className="our-work-process__item"
                data-aos="fade-left"
                data-aos-delay={700}
              >
                <h1>04</h1>
                <p>Execution</p>
              </div>
              <div
                className="our-work-process__item"
                data-aos="fade-left"
                data-aos-delay={900}
              >
                <h1>05</h1>
                <p>Deliver</p>
              </div> */}
            </div>
            {/* <div className="d-flex align-items">
            <p
              className="our-work-process-last-p"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              {props.secLastText}
            </p>
            <p
              className="our-work-process-last-p"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              {props.secLastText}
            </p>
            <p
              className="our-work-process-last-p"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              {props.secLastText}
            </p>
            <p
              className="our-work-process-last-p"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              {props.secLastText}
            </p>
            <p
              className="our-work-process-last-p"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              {props.secLastText}
            </p>

            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWorkProcessSec;
