import React from "react";

const AdobePhotoshopSec = (props) => {
  return (
    <section className="adobe-photoshop__sec">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-12">
            <div className="sec-head">
              <h2 data-aos="fade-up" data-aos-delay={100}>
                {props.secTitle}
              </h2>
              <p data-aos="fade-up" data-aos-delay={300}>
                {props.secTitleDescription}
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="adobe-photoshop__content-title">
              <h3 data-aos="fade-right" data-aos-delay={500}>
                {props.secSubTitle}
              </h3>
              <p
                data-aos="fade-right"
                data-aos-delay={700}
                dangerouslySetInnerHTML={{
                  __html: props.secSubTitleDescription,
                }}
              ></p>
            </div>
          </div>

          {props.servicesData.map((item, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div
                className="portfolio-content-image"
                style={{ backgroundImage: `url(${item.cardBG})` }}
                data-aos="zoom-in"
                data-aos-delay={index * 200}
              >
                <img src={item.image} alt={"Portfolio"} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdobePhotoshopSec;
