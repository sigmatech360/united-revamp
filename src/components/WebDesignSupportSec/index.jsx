import React from "react";

const WebDesignSupportSec = (props) => {
  return (
    <section className="web-designing__support">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="sec-head">
              <h2 data-aos="fade-up" data-aos-delay={200}>
                {props.secTitle}
              </h2>
              <p data-aos="fade-up" data-aos-delay={400}>
                {props.secTitleDescription}
              </p>
            </div>
          </div>

          {props.webDesignSupport.map((item, index) => (
            <div
              className="col-lg-3 col-md-6 col-sm-6 mb-lg-0 mb-4 pb-1"
              key={index}
            >
              <div className="web-designing__support-box" data-aos="fade-up" data-aos-delay={index * 200}>
                <div className="web-designing__support-box-img">
                  <img
                    src={item.image}
                    className="img-fluid"
                    alt={item.title}
                  />
                </div>
                <div className="web-designing__support-box-content">
                  <h4>{item.title}</h4>
                  <p>{item.shortDescription}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebDesignSupportSec;
