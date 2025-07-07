import React from "react";

const WebDesignGuidelines = (props) => {
  return (
    <section className="web-design__guidelines">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="sec-head">
              <p className="sec-head-tag">{props.secTag}</p>
              <h3 className="web-design__guidelines-title" data-aos="fade-up" data-aos-delay={200} dangerouslySetInnerHTML={{ __html: props.secTitle }}>
                
              </h3>
              <p data-aos="fade-up" data-aos-delay={400}>
                {props.secDescription}
              </p>
            </div>
          </div>

          <div className="col-md-12">
            <div className="webDesignGuidelinesDataRow">
              <div className="row">
                {props.stepData.map((item, index) => (
                  <div className="col-lg-4 col-md-6 mb-4" key={index}>
                    <div className="web-design__guidelines-box" data-aos="zoom-in" data-aos-delay={index * 300}>
                      <div className="web-design__guidelines-box-icon">
                        <img src={item.icon} alt={item.name} />
                      </div>
                      <h4>{item.name}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDesignGuidelines;
