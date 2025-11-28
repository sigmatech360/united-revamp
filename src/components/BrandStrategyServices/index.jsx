import React from "react";
import DynamicFaqs from "../dynamicfaqs";
import { Accordion } from "react-bootstrap";

const BrandStrategyServices = ({ ourServicesData }) => {
  return (
    <section className="domain-register-choose">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="register-choose-head">
              <h6 className="minihead">Our Services</h6>
              <h2 className="mainhead text-white">
                Brand Strategy Services USA by United Web Developers
              </h2>
              <p>
                We offer a full range of brand management services for
                businesses around the United States. This makes us true masters
                of what we do, no matter what industry our clients come from.
              </p>
              <button className="theme-btn theme-btn__yellow mt-5">
                Submit Your Business For Free Consultation
              </button>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="brand-services mt-4">
              {/* <Accordion defaultActiveKey="0" alwaysOpen>
                {ourServicesData.map((service, index) => (
                  <Accordion.Item eventKey={String(index)} key={index}>
                    <Accordion.Header as="h3">{service.header}</Accordion.Header>
                    <Accordion.Body>{service.content}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion> */}

              {ourServicesData.map((service, index) => (
                <div
                  className="brand-service-box"
                  key={index}
                  data-aos="fade-left"
                  data-aos-duration={500 * (index + 1)}
                  data-aos-delay={100}
                >
                  <h6 className="service-box-head">{service.header}</h6>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStrategyServices;
