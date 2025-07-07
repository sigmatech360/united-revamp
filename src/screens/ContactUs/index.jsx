import React, { useState } from "react";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";

import contactusbannerbg from "../../assets/images/contactus-banner-bg.webp";
import phoneicon from "../../assets/images/phone-icon.webp";
import emailicon from "../../assets/images/email-icon.webp";
import addressicon from "../../assets/images/address-icon.webp";
import toast from "react-hot-toast";
import ReactHelmet from "../../components/ReactHelmet";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  // const [formData, setFormData] = useState({
  //   username: "",
  //   email: "",
  //   phone: "",
  //   company_name: "",
  //   data_message: "",
  // });
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    budget: "",
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

    const fullName = `${formData.firstName} ${formData.lastName}`;

    const formDataMethod = new FormData();

    for (const key in formData) {
      if (key == "firstName" || key == "lastName") {
        // setFormData((prev)=>({...prev, [key]:''}))
        continue;
      } else {
        formDataMethod.append(key, formData[key]);
      }
    }
    formDataMethod.append("username", fullName);

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
    <>
      <ReactHelmet
        title="United Web Developers"
        description={`description`}
        keywords="web development, custom website, react development, logo design, digital marketing, social media marketing, web design"
        url="https://unitedwebdevelopers.com/contact-us"
      />
      <DefaultLayout>
        <InnerBanner
          className="contactUS-banner"
          bgImage={contactusbannerbg}
          title="Contact Us"
          description="Websites empowered with futuristic and creative design."
        />

        <section className="contactUS-sec">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="sec-head">
                  <h2 data-aos="fade-up" data-aos-delay={200}>
                    Contact With US
                  </h2>
                  <p data-aos="fade-up" data-aos-delay={400}>
                    Write us a few words about your project and we’ll prepare a
                    proposal for you within 24 hours.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 mb-lg-2 mb-md-5 mb-4">
                <div
                  className="contact-form"
                  data-aos="fade-right"
                  data-aos-delay={200}
                >
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First name"
                          name="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleChange(e)}
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last name"
                          name="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleChange(e)}
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter email"
                          name="email"
                          value={formData.email}
                          onChange={(e) => handleChange(e)}
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Phone number"
                          name="phone"
                          value={formData.phone}
                          onChange={(e) => handleChange(e)}
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <select
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
                          <option value="cms-development">
                            CMS Development
                          </option>
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
                      <div className="col-md-6 mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Budget in USD"
                          name="budget"
                          value={formData.budget}
                          onChange={(e) => handleChange(e)}
                          required
                        />
                      </div>
                      <div className="col-md-12 mb-5">
                        <textarea
                          className="form-control"
                          placeholder="Talk about your project"
                          rows={5}
                          style={{ resize: "none" }}
                          name="data_message"
                          value={formData.data_message}
                          onChange={(e) => handleChange(e)}
                          required
                        ></textarea>
                      </div>
                      <div className="col-md-12">
                        <button
                          type="submit"
                          className="theme-btn theme-btn__yellow"
                          disabled={loading}
                          style={{
                            opacity: loading ? 0.3 : 1,
                          }}
                        >
                          {/* Contact Our Team */}
                          {loading ? "Submitting..." : "Contact Our Team"}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-6 mb-2">
                <div
                  className="contact-form-information"
                  data-aos="fade-left"
                  data-aos-delay={200}
                >
                  <h3>Contact Information</h3>
                  {/* <p>
                  2114 N, Flamingo Road, <br /> Pembroke Pines, FL, 33028
                </p> */}
                  <div className="contactForm-details">
                    <div className="contactForm-icons-text">
                      <div className="contactForm-icon">
                        <img src={phoneicon} alt="phone icon" />
                      </div>
                      <a
                        href="tel:+18324769672"
                        className="contactForm-icons-textContent"
                      >
                        +1 (832) 476-9672
                      </a>
                    </div>
                    <div className="contactForm-icons-text">
                      <div className="contactForm-icon">
                        <img src={emailicon} alt="email icon" />
                      </div>
                      <a
                        href="mailto:support@unitedwebdevelopers.com"
                        className="contactForm-icons-textContent"
                      >
                        support<span className="at"></span>unitedwebdevelopers<span className="dot"></span>com
                      </a>
                    </div>
                    <div className="contactForm-icons-text">
                      <div className="contactForm-icon">
                        <img src={addressicon} alt="address icon" />
                      </div>
                      <p className="contactForm-icons-textContent">
                        2114 N, Flamingo Road, Pembroke Pines, FL, 33028
                      </p>
                    </div>
                  </div>

                  <hr />
                </div>
              </div>
            </div>
          </div>
        </section>
      </DefaultLayout>
    </>
  );
};

export default ContactUs;
