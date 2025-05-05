import React from "react";

const OurWorkProcessSec = (props) => {
  return (
    <section className={`our-work-process ${props.className}`}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="sec-head">
              <p className="sec-head-tag">OUR WORK PROCESS</p>
              <h2 data-aos="fade-up" data-aos-delay={100}>
                How We Turn Imagination Into Reality
              </h2>
              <p data-aos="fade-up" data-aos-delay={300}>
                Here’s how we produce perfection in graphics design so that your
                brand can take maximum advantage of increasing customer
                engagement.
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="our-work-process__container">
              <div
                className="our-work-process__item"
                data-aos="fade-left"
                data-aos-delay={100}
              >
                <h1>01</h1>
                <p>Brief</p>
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
              </div>
            </div>
            <p
              className="our-work-process-last-p"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              Taking the brainstorming session to the next stage, our designers
              come up with various designing sketches converting thoughts into
              real images.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWorkProcessSec;
