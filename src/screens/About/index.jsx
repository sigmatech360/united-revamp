import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";

import aboutbannerbg from "../../assets/images/aboutPage-banner-bg.png";
import aboutimg1 from "../../assets/images/about-img-1.png";

import businessinsiderlogo from "../../assets/images/business-insider-logo.png";
import buzzfeedlogo from "../../assets/images/buzzfeed-logo.png";
import entrepreneurlogo from "../../assets/images/entrepreneur-logo.png";

import { Link } from "react-router-dom";
import {
  achievementsData,
  clientIndustries,
  clientTestimonialData,
} from "../../data";

import ClientTestimonialSec from "../../components/ClientTestimonialSec";

const About = () => {
  return (
    <DefaultLayout footerTitle='At <span class="colorYellow">United Web Developers</span>,</br> We Create A Digital Presence That Attract <br/> Leads, Clicks, And <span class="colorYellow">Cash.</span>'>
      <InnerBanner
        bgImage={aboutbannerbg}
        title={"USA Top <span class='colorYellow'>Website Design & Development</span> Company At Your Service."}
      />

      <section className="about-sec">
        <div className="container">
          <div className="row align-items-center flex-lg-row flex-column-reverse">
            <div className="col-lg-6">
              <div className="about-sec__content">
                <h2 data-aos="fade-right" data-aos-delay={100}>
                About United Web Developers
                </h2>
                <p className="mb-2" data-aos="fade-right" data-aos-delay={300}>
                United Web Developers was founded with one mission: to help all businesses achieve sustainable growth. We blend creative designs, development, and strategic marketing to make a brand presence that engages users and delivers measurable results digitally.
                </p>
                <p data-aos="fade-right" data-aos-delay={300}>
                Our team of designers, developers, and digital strategists work in sync to bring your vision to life. From the first sketch to the final line of code. No templates or shortcuts, we make personalized solutions that work perfectly for you!
                </p>
                <Link
                  to=""
                  className="theme-btn theme-btn__black"
                  data-aos="fade-right"
                  data-aos-delay={500}
                >
                  Let's Work Together!
                </Link>
              </div>
            </div>
            <div className="col-lg-6 mbl-lg-0 mb-4">
              <div
                className="about-sec__img"
                data-aos="fade-left"
                data-aos-delay={300}
              >
                <img src={aboutimg1} className="img-fluid" alt="About Us" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="different-industries-client">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="sec-head">
                <h2 data-aos="fade-up" data-aos-delay={100}>
                Our Diverse Clientele
                </h2>
                <p data-aos="fade-up" data-aos-delay={300}>
                Our priority is client satisfaction at every step. Discover our diverse clientele and how we helped them grow their businesses with our digital expertise.
                </p>
              </div>
            </div>
            {clientIndustries.map((item, index) => (
              <div className="col-xl-3 col-lg-4 col-md-6 mb-4" key={index}>
                <div
                  className="industries-client__content"
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                >
                  <div className="industries-client__content__head">
                    <div className="industries-client__content__img">
                      <img src={item.image} alt="Box head icon" />
                    </div>
                    <h3>
                      <span className="colorYellow">{item.highlight}</span>{" "}
                      {item.title.replace(item.highlight, "").trim()}
                    </h3>
                  </div>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="proudly-endorsed-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sec-head">
                <h2 data-aos="fade-up" data-aos-delay={100}>
                Trusted By The Industry Rulers
                </h2>
                <p data-aos="fade-up" data-aos-delay={300}>
                Don’t trust our words? Trust the beasts of digital media! United Web Developers is trusted by hundreds of businesses and the top industry names in the USA. 
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="proudly-endorsed__images">
                <img
                  src={businessinsiderlogo}
                  alt="Business insider logo"
                  data-aos="flip-right"
                  data-aos-delay={100}
                />
                <img
                  src={buzzfeedlogo}
                  alt="Buzzfeed logo"
                  data-aos="flip-up"
                  data-aos-delay={300}
                />
                <img
                  src={entrepreneurlogo}
                  alt="Entrepreneur logo"
                  data-aos="flip-left"
                  data-aos-delay={500}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our-achievements">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sec-head">
                <h3 data-aos="fade-up" data-aos-delay={100}>
                  Our Achievements
                </h3>
                <p data-aos="fade-up" data-aos-delay={300}>
                Our years of practice in the <span className="colorYellow">Web design and development</span> industry have not only given us success but also some awards and achievements to showcase our skills. 
                </p>
              </div>
            </div>

            <div className="col-md-12">
              <div className="our-achievement-images">
                {achievementsData.map((item, index) => (
                  <img
                    src={item.img}
                    alt=""
                    key={index}
                    data-aos="flip-right"
                    data-aos-delay={index * 200}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClientTestimonialSec 
        title="Words From Our Satisfied Clients"
        description="Our team ensures that every prospect that comes across us either leaves with a sale or a booking call to get a quick consultation. Here’s what our clients say about us:"
        testimonialData={clientTestimonialData}
      />
    </DefaultLayout>
  );
};

export default About;
