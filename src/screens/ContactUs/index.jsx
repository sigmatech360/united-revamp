import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";

import contactusbannerbg from "../../assets/images/contactus-banner-bg.png";

const ContactUs = () => {
  return (
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
                <h2>Contact With US</h2>
                <p>
                  Write us a few words about your project and we’ll prepare a
                  proposal for you within 24 hours.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-form">
                <div className="row">
                  <div className="col-lg-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First name"
                    />
                  </div>
                  <div className="col-lg-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last name"
                    />
                  </div>
                  <div className="col-lg-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="col-lg-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone number"
                    />
                  </div>
                  <div className="col-lg-6 mb-3">
                    <select class="form-select form-control">
                      <option selected>Select Services</option>
                      <option value="1">Web Development</option>
                      <option value="2">Graphic Designing</option>
                      <option value="3">Digital Marketing</option>
                    </select>
                  </div>
                  <div className="col-lg-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Budget in USD"
                    />
                  </div>
                  <div className="col-md-12 mb-3">
                    <textarea
                      class="form-control"
                      placeholder="Talk about your project"
                      rows={5}
                      style={{ resize: "none" }}
                    ></textarea>
                  </div>
                  <div className="col-md-12">
                    <button
                      type="submit"
                      className="theme-btn theme-btn__yellow"
                    >
                      Contact Our Team
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6"></div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default ContactUs;
