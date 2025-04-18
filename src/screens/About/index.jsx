import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";

import aboutbannerbg from "../../assets/images/about-banner-bg.png";
import aboutimg1 from "../../assets/images/about-img-1.png";

import businessinsiderlogo from "../../assets/images/business-insider-logo.png";
import buzzfeedlogo from "../../assets/images/buzzfeed-logo.png";
import entrepreneurlogo from "../../assets/images/entrepreneur-logo.png";

import ratingstartimg from "../../assets/images/rating-start-img.png";

import { Link } from "react-router-dom";
import {
  achievementsData,
  clientIndustries,
  clientTestimonialData,
} from "../../data";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const About = () => {
  return (
    <DefaultLayout>
      <InnerBanner
        bgImage={aboutbannerbg}
        title="Work With A Leading Full-Service Design Agency"
      />

      <section className="about-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-sec__content">
                <h2>About Our Company</h2>
                <p>
                  Logo Poppin is your one-stop destination to find digital
                  innovation. We are a cutting-edge agency where you can get
                  immaculate graphic designing services as per your custom
                  demands. We love to transform ideas into great designs,
                  helping people like you to represent their businesses using
                  the best creatives. From logo design to digital marketing,
                  branding to web development and more, we help you to take your
                  business forward by offering exceptional digital services.
                </p>
                <p className="fw-medium">
                  Want to innovate your brand with us? Let’s talk. Let’s work
                  together!
                </p>
                <Link to="" className="theme-btn theme-btn__black">
                  Let's Work Together
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-sec__img">
                <img src={aboutimg1} className="img-fluid" alt="About Us" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="different-industries-client">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sec-head">
                <h2>Clients Across Different Industries</h2>
                <p>
                  We’ve always loved to serve clients as per their desired
                  needs. Whether it’s creating engaging logos or interactive
                  websites, we excel in all fields with breathtaking efficiency.
                </p>
              </div>
            </div>
            {clientIndustries.map((item, index) => (
              <div className="col-lg-3 mb-4" key={index}>
                <div className="industries-client__content">
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
                <h2>Proudly Endorsed By The Best</h2>
                <p>
                  Our creative digital services are cherished by hundreds of
                  businesses, allowing us to get endorsed by the top industry
                  names.
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="proudly-endorsed__images">
                <img src={businessinsiderlogo} alt="Business insider logo" />
                <img src={buzzfeedlogo} alt="Buzzfeed logo" />
                <img src={entrepreneurlogo} alt="Entrepreneur logo" />
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
                <h2>Our Achievements</h2>
                <p>
                  With an array of happy clients all over the globe, we are
                  rated as a full-scale digital agency by number of top
                  platforms.
                </p>
              </div>
            </div>

            <div className="col-md-12">
              <div className="our-achievement-images">
                {achievementsData.map((item, index) => (
                  <img src={item.img} alt="" key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="client-testimonial">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="sec-head">
                <p className="sec-head-tag label-yellow-bg">
                  CLIENT TESTIMONIALS
                </p>
                <h2>Words Of Happiness From Our Valued Customers</h2>
                <p>
                  We value our customers as the core asset of our company.
                  Here’s what they have to say about the quality of our branding
                  services.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="client-testimonial__container">
                <Swiper
                  modules={[Autoplay]}
                  spaceBetween={20}
                  slidesPerView={1}
                  loop={true}
                  speed={1000} // smooth slide speed
                  autoplay={{
                    delay: 3000, // slide every 3 seconds
                    disableOnInteraction: false, // keep autoplaying
                  }}
                  breakpoints={{
                    768: { slidesPerView: 1.2 },
                  }}
                >
                  {clientTestimonialData.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                      <div className="client-testimonial__content">
                        <p className="client-testimonial__content-quote">
                          {testimonial.quote}
                        </p>
                        <div className="client-testimonial__content-footer">
                          <div className="client-testimonial__content-footer-meta">
                            <h3>{testimonial.name}</h3>
                            <p className="client-testimonial__content-footer-meta-desc">
                              {testimonial.designation}
                            </p>
                          </div>
                          <img src={ratingstartimg} alt="" />
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default About;
