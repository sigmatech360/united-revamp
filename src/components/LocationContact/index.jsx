import React, { useState } from "react";
import axios from "axios";
import { FaPhoneAlt } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { toast } from "react-toastify";

const LocationContact = (props) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    company: "",
    website: "",
    email: "",
    phone: "",
    service: "",
    about_cwc: "",
    business: "",
  });

  const apiUrl = import.meta.env.VITE_BASE_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(`${apiUrl}/let-connect`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = response.data;

      if (result.status) {
        toast.success(result.message);
        setFormData({
          first_name: "",
          last_name: "",
          company: "",
          website: "",
          email: "",
          phone: "",
          service: "",
          about_cwc: "",
          business: "",
        });
      } else {
        toast.error("Something went wrong, please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={`location-contact-sec ${props.secClass}`}>
      <div className="container">
        <div className="row">
          {/* Left Section */}
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
                  support@unitedwebdevelopers.com
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

          {/* Right Form Section */}
          <div className="col-lg-6">
            <div
              className="faqs-form faq-contact-form"
              data-aos="fade-left"
              data-aos-delay={100}
            >
              <form onSubmit={handleSubmit}>
                <div className="faqs-form-items">
                  <div className="row">
                    {/* First Name */}
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Last Name */}
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Company */}
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Company / Organization"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Website */}
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Email */}
                    <div className="col-lg-6">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Phone */}
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Services */}
                    <div className="col-lg-12">
                      <select
                        className="form-select form-control"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Services</option>
                        <option value="logo design">Logo Design</option>
                        <option value="website design">Web Design</option>
                        <option value="cms development">CMS Development</option>
                        <option value="digital marketing">Digital Marketing</option>
                        <option value="custom web development">Custom Web Development</option>
                        <option value="mobile app development">Mobile App Development</option>
                      </select>
                    </div>

                    {/* About CWC */}
                    <div className="col-lg-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="How Did You Hear About United Web Developers?"
                        name="about_cwc"
                        value={formData.about_cwc}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Business */}
                    <div className="col-lg-12">
                      <textarea
                        className="form-control"
                        placeholder="Tell Us About Your Business"
                        rows={3}
                        name="business"
                        value={formData.business}
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="faqs-form-btn__div">
                      <button
                        className="theme-btn theme-btn__yellow"
                        disabled={loading}
                        style={{
                          opacity: loading ? 0.6 : 1,
                        }}
                      >
                        {loading ? "Submitting..." : props.btntxt || "Get in Touch"}
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
