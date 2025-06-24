import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

import "./style.css";

import modalMobileImg from "../../Assets/images/modal-mobile-img.webp";
import toast from "react-hot-toast";
// import { toast } from "react-toastify";

const FormModal = ({ show, handleClose }) => {
  const [loading, setLoading] = useState(false);
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
    setLoading(true);

    try {
      const response = await fetch(`${apiUrl}/submit-query`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log(result);
      // alert("Form Submitted Successfully");

      if (result.status) {
        toast.success(result.message);
        setFormData({
          username: "",
          email: "",
          phone: "",
          service_1: "",
          data_message: "",
        });
        handleClose();
      } else {
        const messages = result.message;
        Object.keys(messages).forEach((field) => {
          messages[field].forEach((msg) => {
            toast.error(msg);
          });
        });
      }
    } catch (error) {
      console.log(`Error submitting form:`, error);
      // alert("Submission failed. Please try again.");
      //   toast.error("Submission failed. Please try again.");
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      className="formModal-sec"
      centered
    >
      <Modal.Header closeButton className="border-0" />

      <Modal.Body>
        <div className="formModal-formContent-circle">
          <div className="formModal-formContent-circle-1">
            <div className="formModal-formContent-circle-2"></div>
          </div>
        </div>
        <div className="formModal-content">
          <div className="formModal-imgDiv">
            <div className="formModalImg">
              <img src={modalMobileImg} className="img-fluid" alt="Ready to chat about your project?" />
            </div>
          </div>
          <div className="formModal-formContent">
            <div className="formModal-formContent-head">
              <h3>Ready to chat about your project?</h3>
            </div>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="username">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control
                  type="text"
                  placeholder="Name"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="email">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="phone">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control
                  placeholder="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </Form.Group>

              {/* <Form.Group controlId="company_name">
                <Form.Control
                  type="text"
                  placeholder="Company Name"
                  name="company_name"
                  value={formData.company_name}
                  onChange={handleChange}
                />
              </Form.Group> */}

              <Form.Group controlId="service_1">
                <Form.Select
                  name="service_1"
                  value={formData.service_1}
                  onChange={handleChange}
                  className="form-control"
                >
                  <option value="" disabled>
                    Services
                  </option>
                  <option value="web-design">Web Design</option>
                  <option value="cms-development">CMS Development</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="social-media-marketing">
                    Social Media Marketing
                  </option>
                  <option value="seo">SEO</option>
                  <option value="custom-development">Custom Development</option>
                  <option value="mobile-app-development">
                    Mobile App Development
                  </option>
                  <option value="logo-design">Logo Design</option>
                </Form.Select>
              </Form.Group>

              <Form.Group controlId="data_message">
                <textarea
                  className="form-control form-control-lg"
                  rows="3"
                  placeholder="Write Your Message..."
                  name="data_message"
                  value={formData.data_message}
                  onChange={handleChange}
                ></textarea>
              </Form.Group>

              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="theme-btn theme-btn__yellow"
                  disabled={loading}
                  style={{
                    opacity: loading ? 0.3 : 1,
                  }}
                >
                  {/* Request a quote */}
                  {loading ? "Submitting..." : "Request a quote"}
                </button>
              </div>
            </Form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default FormModal;
