import React from "react";
import { Accordion } from "react-bootstrap";

const LocationFaqs = ({ minihead, mainhead, secPara, faqs = [] }) => {
  return (
    <section className="location-faqs-sec">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {/* Section Heading */}
            <div className="location-faqs-txt text-center">
              {minihead && <h6>{minihead}</h6>}
              {mainhead && <h2>{mainhead}</h2>}
              {secPara && <p>{secPara}</p>}
            </div>

            {/* FAQs Accordion */}
            <div className="location-faqs mt-4">
              <Accordion defaultActiveKey="0" alwaysOpen>
                {faqs.map((faq, index) => (
                  <Accordion.Item eventKey={String(index)} key={index}>
                    <Accordion.Header as="h3">{faq.header}</Accordion.Header>
                    <Accordion.Body>{faq.content}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationFaqs;
