import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";
import aboutbannerbg from "../../assets/images/about-banner-bg.png";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { pricingPlans } from "../../data";

const Pricing = () => {
  return (
    <div className="pricing-page">
      <DefaultLayout>
        <InnerBanner
          bgImage={aboutbannerbg}
          title="Unlock Your Brand's Potential With Custom Design Packages"
          description="Experience tailored graphic design solutions that elevate your brand, with custom packages and transparent pricing from Logo Poppin."
        />
        <section className="pricing-sec">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <Tabs
                  defaultActiveKey="logoDesign"
                  className="pricing-tabs"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  data-aos-offset="0"
                >
                  <Tab eventKey="logoDesign" title="Logo Design">
                    <div className="row">
                      {pricingPlans.map((plan, index) => (
                        <div className="col-xl-3 col-md-6 mb-xl-0 mb-4" key={index}>
                          <div className="pricing-card">
                            <div className="pricing-card__header">
                              <h5 className="pricing-card__header-price">
                                {plan.price}
                              </h5>
                              <h4 className="pricing-card__header-head">
                                {plan.title}
                              </h4>
                              <p className="pricing-card__header-per-project">
                                Per Project
                              </p>
                            </div>
                            <div className="pricing-card__body">
                              <ul>
                                {plan.features.map((feature, i) => (
                                  <li key={i}>{feature}</li>
                                ))}
                              </ul>
                            </div>
                            <button className="pricing-card__footer">
                              Choose Plan
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Tab>
                  <Tab eventKey="branding" title="Branding">
                    Branding
                  </Tab>
                  <Tab eventKey="videoAnimation" title="Video Animation">
                    Video Animation
                  </Tab>
                  <Tab eventKey="ebookDesign" title="Ebook Design">
                    Ebook Design
                  </Tab>
                  <Tab eventKey="uiUxDesign" title="Ui / Ux Design">
                    Ui / Ux Design
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </section>
      </DefaultLayout>
    </div>
  );
};

export default Pricing;
