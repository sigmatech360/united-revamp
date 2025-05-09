import React, { useState } from "react";

import Accordion from "react-bootstrap/Accordion";
import { faqsData } from "../../data";
import toast from "react-hot-toast";

const FAQSection = (props) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    service_1: "",
    data_message: "",
  });
  const apiUrl = import.meta.env.VITE_BASE_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    const formDataMethod = new FormData();

    for (const key in formData) {
    
      formDataMethod.append(key, formData[key]);
    }

    try {
      const response = await fetch(`${apiUrl}/submit-query`, {
        method: "POST",
        // headers: {
        //   "Content-Type": "application/json",
        // },
        body: formDataMethod,
      });

      const result = await response.json();
      console.log(result);
      // alert("Form Submitted Successfully");
      toast.success("Form Submitted Successfully");
      setFormData({
        username: "",
        email: "",
        phone: "",
        service_1: "",
        data_message: "",
      });
    } catch (error) {
      // console.log(Error submitting form:, error);
      // alert("Submission failed. Please try again.");
      toast.error("Submission failed. Please try again.")
    }
  };

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
                {props.faqsQA.map((item, index) => (
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
                <h4>Got a Brilliant Idea? </h4>
                <p>Contact us for consultations.</p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="faqs-form-items">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    name="username"
                    value={formData.username}
                    onChange={(e) => handleChange(e)}
                  />
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => handleChange(e)}
                  />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your phone number"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => handleChange(e)}
                  />
                  <select
                    defaultValue="Web Development"
                    className="form-select form-control"
                    name="service_1"
                    value={formData.service_1}
                    onChange={(e) => handleChange(e)}
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
                    name="data_message"
                    value={formData.data_message}
                    onChange={(e) => handleChange(e)}
                  ></textarea>
                  <div className="faqs-form-btn__div">
                    <div className="faqs-form-btn__div-content">
                      <p>Interested? Call Us Now</p>
                      <a href="tel:+ 123 456 7890">+ 123 456 7890</a>
                    </div>
                    <button
                      // onSubmit={(e)=>handleSubmit(e)}
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
