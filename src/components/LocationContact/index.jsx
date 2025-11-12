import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { toast } from "react-toastify";
import PhoneLink from "../PhoneLink";

const LocationContact = (props) => {
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

      if (result.status) {
        toast.success(result.message);
        setFormData({
          username: "",
          email: "",
          phone: "",
          service_1: "",
          data_message: "",
        });
      } else {
        const messages = result.message;
        Object.keys(messages).forEach((field) => {
          messages[field].forEach((msg) => {
            toast.error(msg);
          });
        });
      }
    } catch (error) {
      // console.log(Error submitting form:, error);
      // alert("Submission failed. Please try again.");
      toast.error("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="location-contact-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="location-contact-txt">
              <h6>{props.minihead}</h6>
              <h2>{props.mainhead}</h2>
              <p>{props.secPara}</p>
              {props.secParatwo && <p>{props.secParatwo}</p>}
              <ul>
                <li>
                  <span>
                    <FaPhoneAlt />
                  </span>{" "}
                  +1 (321) 414-2155
                </li>
                <li>
                  <span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      color="#D7FF00"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M21 3C21.5523 3 22 3.44772 22 4V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V19H20V7.3L12 14.5L2 5.5V4C2 3.44772 2.44772 3 3 3H21ZM8 15V17H0V15H8ZM5 10V12H0V10H5ZM19.5659 5H4.43414L12 11.8093L19.5659 5Z"></path>
                    </svg>
                  </span>{" "}
                  support@unitedwebdeveloperscom
                </li>
                <li>
                  <span>
                    <LuMapPin />
                  </span>{" "}
                  2114 N Flamingo Road, Pembroke Pines, FL, 33028
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="faqs-form faq-contact-form"
              data-aos="fade-left"
              data-aos-delay={100}
            >
              <form onSubmit={handleSubmit}>
                <div className="faqs-form-items">
                  <div className="row">
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                        name="username"
                        value={formData.username}
                        onChange={(e) => handleChange(e)}
                        required
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                        name="username"
                        value={formData.username}
                        onChange={(e) => handleChange(e)}
                        required
                      />
                    </div>
                     <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Company Organization"
                        name="text"
                        value={formData.email}
                        onChange={(e) => handleChange(e)}
                        required
                      />
                    </div>
                     <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Website"
                        name="text"
                        value={formData.email}
                        onChange={(e) => handleChange(e)}
                        required
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => handleChange(e)}
                        required
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your phone number"
                        name="phone"
                        value={formData.phone}
                        onChange={(e) => handleChange(e)}
                        required
                      />
                    </div>
                    <div className="col-lg-12">
                      <label
                        htmlFor="serviceSelect"
                        className="visually-hidden"
                      >
                        Select Services
                      </label>
                      <select
                        id="serviceSelect"
                        defaultValue="Web Development"
                        className="form-select form-control"
                        name="service_1"
                        value={formData.service_1}
                        onChange={(e) => handleChange(e)}
                        required
                      >
                        <option value={""} disabled>
                          Select Services
                        </option>
                        <option value="web-design">Web Design</option>
                        <option value="cms-development">CMS Development</option>
                        <option value="digital-marketing">
                          Digital Marketing
                        </option>
                        <option value="social-media-marketing">
                          Social Media Marketing
                        </option>
                        <option value="seo">SEO</option>
                        <option value="custom-development">
                          Custom Development
                        </option>
                        <option value="mobile-app-development">
                          Mobile App Development
                        </option>
                        <option value="logo-design">Logo Design</option>
                      </select>
                      </div>
                      <div className="col-lg-12">
                        <input
                        type="text"
                        className="form-control"
                        placeholder="How Did You Hear About TWS?"
                        name="text"
                        required
                      />
                      </div>
                    <div className="col-lg-12">
                    <textarea
                      className="form-control"
                      placeholder="Tell Us About Your Buisness"
                      rows={3}
                      style={{ resize: "none" }}
                      name="data_message"
                      value={formData.data_message}
                      onChange={(e) => handleChange(e)}
                      required
                    ></textarea>
                    </div>
                    <div className="faqs-form-btn__div">
                      <button className="theme-btn theme-btn__yellow"
                        disabled={loading}
                        style={{
                          opacity: loading ? 0.3 : 1,
                        }}
                      >
                        {props.btntxt}
                      </button>
                    </div>
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

export default LocationContact;
