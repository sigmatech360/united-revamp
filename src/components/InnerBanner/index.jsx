import React from "react";

const InnerBanner = (props) => {
  return (
    <section
      className={`inner-banner ${props.className}`}
      style={{ backgroundImage: `url(${props.bgImage})` }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="inner-banner-content">
              <h1>{props.title}</h1>
              {props.description && <p>{props.description}</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnerBanner;
