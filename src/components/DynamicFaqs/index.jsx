import React from "react";
import { Accordion } from "react-bootstrap";


const DynamicFaqs = ({ faqs = [] }) => {
  return (
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
  );
};

export default DynamicFaqs;
