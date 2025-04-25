import React from "react";
import DefaultLayout from "../../components/DefaultLayout";

import InnerBanner from "../../components/InnerBanner";

import aboutbannerbg from "../../assets/images/about-banner-bg.png";

import servicebrandingdesign from "../../assets/images/service-branding-design.png";
import servicelogodesign from "../../assets/images/service-logo-design.png";
import serviceEbookcover from "../../assets/images/service-Ebook-cover.png";
import servicewebsitedesign from "../../assets/images/service-website-design.png";
import servicevideoanimation from "../../assets/images/service-video-animation.png";
import servicewebdevelopment from "../../assets/images/service-web-development.png";

import { portfolioData } from "../../data";

const Portfolio = () => {
  return (
    <DefaultLayout>
      <InnerBanner
        bgImage={aboutbannerbg}
        title="Our Portfolio Filled With Creativity"
        description="Our huge stack of portfolio exemplifies the excellence in our work. As a creative agency, we always aim to take our clients' businesses forward by offering state-of-the-art digital solutions."
      />

      <section className="services-sec">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-2 col-md-6 services-col-1  px-1">
              <div className="services-box-1">
                <div className="services-box-content">
                  <img
                    src={servicebrandingdesign}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="services-box-content-text">
                    <h4>Branding Design</h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 services-col-2  px-1">
              <div className="services-box-2">
                <div className="services-box-content services-box-content-2-1">
                  <img src={servicelogodesign} className="img-fluid" alt="" />
                  <div className="services-box-content-text">
                    <h4>Logo Design</h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
                <div className="services-box-content services-box-content-2-2">
                  <img src={serviceEbookcover} className="img-fluid" alt="" />
                  <div className="services-box-content-text">
                    <h4>Ebook Cover Design</h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-md-6 services-col-3 px-1">
              <div className="services-box-3">
                <div className="services-box-content">
                  <img
                    src={servicewebsitedesign}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="services-box-content-text">
                    <h4>Website Design</h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 services-col-4 px-1">
              <div className="services-box-4">
                <div className="services-box-content services-box-content-4-1">
                  <img
                    src={servicevideoanimation}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="services-box-content-text">
                    <h4>Video Animation</h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
                <div className="services-box-content services-box-content-4-2">
                  <img
                    src={servicewebdevelopment}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="services-box-content-text">
                    <h4>Web Development</h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="services-sec">
        <div className="services-box-1">
          <div className="services-box-content">
            <img src={servicebrandingdesign} className="img-fluid" alt="" />
            <div className="services-box-content-text">
              <h4>Branding Design</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
        <div className="services-box-2">
          <div className="services-box-content services-box-content-2-1">
            <img src={servicelogodesign} className="img-fluid" alt="" />
            <div className="services-box-content-text">
              <h4>Logo Design</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className="services-box-content services-box-content-2-2">
            <img src={serviceEbookcover} className="img-fluid" alt="" />
            <div className="services-box-content-text">
              <h4>Ebook Cover Design</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
        <div className="services-box-3">
          <div className="services-box-content">
            <img src={servicewebsitedesign} className="img-fluid" alt="" />
            <div className="services-box-content-text">
              <h4>Website Design</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
        <div className="services-box-4">
          <div className="services-box-content services-box-content-4-1">
            <img src={servicevideoanimation} className="img-fluid" alt="" />
            <div className="services-box-content-text">
              <h4>Video Animation</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className="services-box-content services-box-content-4-2">
            <img src={servicewebdevelopment} className="img-fluid" alt="" />
            <div className="services-box-content-text">
              <h4>Web Development</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>  
      </section> */}

      <section className="portfolio-content-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sec-head">
                <h2>Recent Work For Diverse Brands Ready to Make their Mark</h2>
                <p>
                  Take a quick look how our creative design solutions are
                  helping clients to take a competitive edge in the market.
                </p>
              </div>
            </div>
          </div>

          {portfolioData.map((item, index) => (
            <div className="row portfolio-content-row" key={index}>
              <div className="col-lg-4 col-md-6 mb-md-0 mb-4">
                <div className="portfolio-content-title">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
              {item.images.map((image, imageIndex) => (
                <div className="col-lg-4 col-md-6 mb-4" key={imageIndex}>
                  <div
                    className="portfolio-content-image"
                    style={{ backgroundImage: `url(${image.cardBG})` }}
                  >
                    <img src={image.image} alt="" />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Portfolio;
