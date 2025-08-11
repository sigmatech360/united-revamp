import React from "react";

const InnerBanner = (props) => {
  return (
    <section
      className={`inner-banner ${props.className}`}
      // style={{ backgroundImage: `url(${props.bgImage})` }}
      width={props.width}
      height={props.height}
    >
      {props.bgImage && (
          <img
            src={props.bgImage}
            alt="Inner Banner Img"
            className="services-banner-sec-bgImg"
            fetchPriority="high"
            width="1920"
            height="1080"
          />
        )}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-9">
            <div className="inner-banner-content">
              <h1
                data-aos="fade-up"
                data-aos-delay={100}
                dangerouslySetInnerHTML={{ __html: props.title }}
              ></h1>
              {props.description && (
                <p data-aos="fade-up" data-aos-delay={300}>
                  {props.description}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnerBanner;
