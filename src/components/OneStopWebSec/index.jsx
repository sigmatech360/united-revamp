import React from "react";

const OneStopWebSec = (props) => {
  return (
    <section className="one-stop-web">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="one-stop-web__leftContent">
              <div className="sec-head">
                <h3 className="one-stop-web-leftTitle" data-aos="fade-right" data-aos-delay={200}>
                  {props.secTitle}
                </h3>
                <p data-aos="fade-right" data-aos-delay={400}>
                  {props.secDescription}
                </p>
              </div>
              <div className="one-stop-web__img">
                <img
                  src={props.image}
                  className="img-fluid"
                  alt={props.secTitle}
                  data-aos="fade-right"
                  data-aos-delay={600}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="one-stop-web__boxes">
              {props.boxesData.map((item, index) => (
                <div
                  className="one-stop-web__box"
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={index * 200}
                >
                  <div className="one-stop-web__box-icon">
                    <img src={item.icon} alt={item.title} />
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OneStopWebSec;
