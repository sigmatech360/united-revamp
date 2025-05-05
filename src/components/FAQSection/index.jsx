import React from "react";

import Accordion from "react-bootstrap/Accordion";
import { faqsData } from "../../data";

const FAQSection = (props) => {
  return (
    <section className={`faqs-sec faqs-sec__${props.className}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-12">
            <div className="sec-head">
              {props.secHeadrag && (
                <p className="sec-head-tag">{props.secHeadrag}</p>
              )}
              <h2 data-aos="fade-up" data-aos-delay={100}>
                {props.title}
              </h2>
              <p data-aos="fade-up" data-aos-delay={300}>
                {props.description}
              </p>
            </div>
          </div>
          <div className="col-lg-6 mb-lg-0 mb-5">
            <div className="faqs-items">
              <Accordion defaultActiveKey="0">
                {faqsData.map((item, index) => (
                  <Accordion.Item
                    eventKey={index.toString()}
                    key={index}
                    data-aos="slide-right"
                    data-aos-delay={index * 200}
                  >
                    <Accordion.Header>{item.titla}</Accordion.Header>
                    <Accordion.Body>{item.description}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="faqs-form"
              data-aos="fade-left"
              data-aos-delay={100}
            >
              <div className="faqs-form-head">
                <h4>Want to Know More?</h4>
                <p>Send Us Your Queries Below</p>
              </div>
              <form action="#">
                <div className="faqs-form-items">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                  />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your phone number"
                  />
                  <select
                    defaultValue="Web Development"
                    className="form-select form-control"
                  >
                    {/* <option selected></option> */}
                    <option value="1">Web Development</option>
                    <option value="2">Graphic Designing</option>
                    <option value="3">Digital Marketing</option>
                  </select>
                  <textarea
                    className="form-control"
                    placeholder="Discuss your project"
                    rows={3}
                    style={{ resize: "none" }}
                  ></textarea>
                  <div className="faqs-form-btn__div">
                    <div className="faqs-form-btn__div-content">
                      <p>Interested? Call Us Now</p>
                      <a href="tel:+ 123 456 7890">+ 123 456 7890</a>
                    </div>
                    <button
                      type="submit"
                      className="theme-btn theme-btn__yellow"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
