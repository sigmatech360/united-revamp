import React, { useState } from "react";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";
import aboutbannerbg from "../../assets/images/about-banner-bg.png";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import {
  eCommerceWebPricingPlans,
  logoDesignPricingPlans,
  seoPricingPlans,
  smmPricingPlans,
  webApplicationPricingPlans,
  informativeWebsitesPricingPlans,
  comboPricingPlans,
  illustrationPricingPlans,
} from "../../data";
import PricingCard from "../../components/PricingCard";
import FormModal from "../../components/FormModal";

const Pricing = () => {
  const [showModal, setShowModal] = useState(false);
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
                  <Tab eventKey="logoDesign" title="LOGO DESIGN">
                    <div className="row justify-content-center">
                      {logoDesignPricingPlans.map((plan, index) => (
                        <div
                          className="col-xxl-3 col-lg-4 col-md-6 mb-xl-0 mb-4"
                          key={index}
                        >
                          <PricingCard
                            price={plan.price}
                            discountPrice={plan.discountPrice}
                            title={plan.title}
                            features={plan.features}
                            index={index}
                            onClick={() => setShowModal(true)}
                          />
                        </div>
                      ))}
                    </div>
                  </Tab>
                  <Tab eventKey="illustration" title="ILLUSTRATION">
                    <div className="row justify-content-center">
                      {illustrationPricingPlans.map((plan, index) => (
                        <div
                          className="col-xxl-3 col-lg-4 col-md-6 mb-xxl-0 mb-4"
                          key={index}
                        >
                          <PricingCard
                            price={plan.price}
                            discountPrice={plan.discountPrice}
                            title={plan.title}
                            features={plan.features}
                            index={index}
                            onClick={() => setShowModal(true)}
                          />
                        </div>
                      ))}
                    </div>
                  </Tab>
                  <Tab eventKey="informative-websites" title="INFORMATIVE WEBSITES">
                    <div className="row justify-content-center">
                      {informativeWebsitesPricingPlans.map((plan, index) => (
                        <div
                          className="col-xxl-3 col-lg-4 col-md-6 mb-xl-0 mb-4"
                          key={index}
                        >
                          <PricingCard
                            price={plan.price}
                            discountPrice={plan.discountPrice}
                            title={plan.title}
                            features={plan.features}
                            index={index}
                            onClick={() => setShowModal(true)}
                          />
                        </div>
                      ))}
                    </div>
                  </Tab>
                  <Tab eventKey="eCommerceWeb" title="E-COMMERCE WEBSITE">
                    <div className="row justify-content-center">
                      {eCommerceWebPricingPlans.map((plan, index) => (
                        <div
                          className="col-xxl-3 col-lg-4 col-md-6 mb-xl-0 mb-4"
                          key={index}
                        >
                          <PricingCard
                            price={plan.price}
                            discountPrice={plan.discountPrice}
                            title={plan.title}
                            features={plan.features}
                            index={index}
                            onClick={() => setShowModal(true)}
                          />
                        </div>
                      ))}
                    </div>
                  </Tab>
                  <Tab eventKey="webApplication" title="WEB APPLICATION">
                    <div className="row justify-content-center">
                      {webApplicationPricingPlans.map((plan, index) => (
                        <div
                          className="col-xxl-3 col-lg-4 col-md-6 mb-xl-0 mb-4"
                          key={index}
                        >
                          <PricingCard
                            price={plan.price}
                            discountPrice={plan.discountPrice}
                            title={plan.title}
                            features={plan.features}
                            index={index}
                            onClick={() => setShowModal(true)}
                          />
                        </div>
                      ))}
                    </div>
                  </Tab>
                  <Tab eventKey="seoPlans" title="SEO">
                    <div className="row justify-content-center">
                      {seoPricingPlans.map((plan, index) => (
                        <div
                          className="col-xxl-3 col-lg-4 col-md-6 mb-xl-0 mb-4"
                          key={index}
                        >
                          <PricingCard
                            price={plan.price}
                            discountPrice={plan.discountPrice}
                            title={plan.title}
                            features={plan.features}
                            index={index}
                            onClick={() => setShowModal(true)}
                          />
                        </div>
                      ))}
                    </div>
                  </Tab>
                  <Tab eventKey="smmPlans" title="SOCIAL MEDIA">
                    <div className="row justify-content-center">
                      {smmPricingPlans.map((plan, index) => (
                        <div
                          className="col-xxl-3 col-lg-4 col-md-6 mb-xl-0 mb-4"
                          key={index}
                        >
                          <PricingCard
                            price={plan.price}
                            discountPrice={plan.discountPrice}
                            title={plan.title}
                            features={plan.features}
                            index={index}
                            onClick={() => setShowModal(true)}
                          />
                        </div>
                      ))}
                    </div>
                  </Tab>
                  <Tab eventKey="combo-packages" title="COMBO PACKAGES">
                    <div className="row justify-content-center">
                      {comboPricingPlans.map((plan, index) => (
                        <div
                          className="col-xxl-3 col-lg-4 col-md-6 mb-xl-0 mb-4"
                          key={index}
                        >
                          <PricingCard
                            price={plan.price}
                            discountPrice={plan.discountPrice}
                            title={plan.title}
                            features={plan.features}
                            index={index}
                            onClick={() => setShowModal(true)}
                          />
                        </div>
                      ))}
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </section>

        <FormModal show={showModal} handleClose={() => setShowModal(false)} />
      </DefaultLayout>
    </div>
  );
};

export default Pricing;
