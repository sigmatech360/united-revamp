import React from "react";
import DefaultLayout from "../../components/DefaultLayout";

import InnerBanner from "../../components/InnerBanner";

import aboutbannerbg from "../../assets/images/about-banner-bg.webp";

import servicebrandingdesign from "../../assets/images/service-branding-design.webp";
import servicelogodesign from "../../assets/images/service-logo-design.webp";
import serviceEbookcover from "../../assets/images/service-Ebook-cover.webp";
import servicewebsitedesign from "../../assets/images/service-website-design.webp";
import servicevideoanimation from "../../assets/images/service-video-animation.webp";
import servicewebdevelopment from "../../assets/images/service-web-development.webp";

import { portfolioData } from "../../data";
import ReactHelmet from "../../components/ReactHelmet";

const Portfolio = () => {
  return (
    <>
      <ReactHelmet
        title="United Web Developers Portfolio | See Our Best Work"
        description={`Explore the United Web Developers portfolio to see custom websites, eCommerce, and brand designs we've built. Discover how we can bring your vision to life!`}
        keywords="web development, custom website, react development, logo design, digital marketing, social media marketing, web design"
        // url="https://unitedwebdevelopers.com/portfolio"
      />
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
              <div
                className="services-box-1"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="services-box-content">
                  <img
                    src={servicebrandingdesign}
                    className="img-fluid"
                    alt="Branding Design"
                  />
                  <div className="services-box-content-text">
                    <h2>Branding Design</h2>
                    <p>
                      Crafting strong brand visuals that tell your unique story.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 services-col-2  px-1">
              <div className="services-box-2">
                <div
                  className="services-box-content services-box-content-2-1"
                  data-aos="fade-up"
                  data-aos-delay={400}
                >
                  <img src={servicelogodesign} className="img-fluid" alt="Logo Design" />
                  <div className="services-box-content-text">
                    <h2>Logo Design</h2>
                    <p>
                      Creating memorable logos that define your brand identity.
                    </p>
                  </div>
                </div>
                <div
                  className="services-box-content services-box-content-2-2"
                  data-aos="fade-up"
                  data-aos-delay={600}
                >
                  <img src={serviceEbookcover} className="img-fluid" alt="Ebook Cover Design" />
                  <div className="services-box-content-text">
                    <h2>Ebook Cover Design</h2>
                    <p>
                      Designing compelling covers that attract and engage
                      readers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-md-6 services-col-3 px-1">
              <div
                className="services-box-3"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="services-box-content">
                  <img
                    src={servicewebsitedesign}
                    className="img-fluid"
                    alt="Website Design"
                  />
                  <div className="services-box-content-text">
                    <h2>Website Design</h2>
                    <p>
                      Building sleek, modern layouts for seamless user
                      experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 services-col-4 px-1">
              <div className="services-box-4">
                <div
                  className="services-box-content services-box-content-4-1"
                  data-aos="fade-up"
                  data-aos-delay={400}
                >
                  <img
                    src={servicevideoanimation}
                    className="img-fluid"
                    alt="Video Animation"
                  />
                  <div className="services-box-content-text">
                    <h2>Video Animation</h2>
                    <p>
                      Bringing ideas to life with engaging animated visuals.
                    </p>
                  </div>
                </div>
                <div
                  className="services-box-content services-box-content-4-2"
                  data-aos="fade-up"
                  data-aos-delay={600}
                >
                  <img
                    src={servicewebdevelopment}
                    className="img-fluid"
                    alt="Web Development"
                  />
                  <div className="services-box-content-text">
                    <h2>Web Development</h2>
                    <p>
                      Developing fast, responsive websites tailored to your
                      needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-content-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sec-head">
                <h2 data-aos="fade-up" data-aos-delay={200}>
                  Recent Work For Diverse Brands Ready to Make their Mark
                </h2>
                <p data-aos="fade-up" data-aos-delay={400}>
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
                  <h3 data-aos="fade-right" data-aos-delay={200}>
                    {item.title}
                  </h3>
                  <p data-aos="fade-right" data-aos-delay={400}>
                    {item.description}
                  </p>
                </div>
              </div>
              {item.images.map((image, imageIndex) => (
                <div className="col-lg-4 col-md-6 mb-4" key={imageIndex}>
                  <div
                    className="portfolio-content-image"
                    style={{ backgroundImage: `url(${image.cardBG})` }}
                    data-aos="zoom-in"
                    data-aos-delay={imageIndex * 300}
                  >
                    <img src={image.image} alt={item.title} />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </DefaultLayout>
    </>
  );
};

export default Portfolio;
