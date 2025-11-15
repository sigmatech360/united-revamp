import React from "react";
import { Accordion } from "react-bootstrap";
import DynamicFaqs from "../dynamicfaqs";

const LocationFaqs = ({ minihead, mainhead, secPara, faqsData }) => {
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
            <DynamicFaqs faqs={faqsData}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationFaqs;
