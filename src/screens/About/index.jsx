import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";

import aboutbannerbg from "../../assets/images/aboutPage-banner-bg.webp";
import aboutimg1 from "../../assets/images/about-img-1.webp";

import businessinsiderlogo from "../../assets/images/business-insider-logo.webp";
import buzzfeedlogo from "../../assets/images/buzzfeed-logo.webp";
import entrepreneurlogo from "../../assets/images/entrepreneur-logo.webp";

import testimonialimg from "../../assets/images/testimonial-img.webp";
import testimonialimg1 from "../../assets/images/testimonial-img1.webp";
import testimonialimg2 from "../../assets/images/testimonial-img2.webp";
import testimonialimg3 from "../../assets/images/testimonial-img3.webp";
import testimonialimg4 from "../../assets/images/testimonial-img4.webp";
import testimonialimg5 from "../../assets/images/testimonial-img5.webp";
import testimonialimg6 from "../../assets/images/testimonial-img6.webp";

import { Link } from "react-router-dom";
import {
  achievementsData,
  clientIndustries,
  clientTestimonialData,
} from "../../data";

import TestimonialCard from "../../components/TestimonialCard/TestimonialCard";
import ClientTestimonialSec from "../../components/ClientTestimonialSec";
import ReactHelmet from "../../components/ReactHelmet";

const testimonials = [
  {
    description:
      "We’ve worked with other agencies before, but no one matched the level of creativity and professionalism that United Web Developers brought to the table. They nailed our web development and made the whole process easy.",
    userImg: testimonialimg,
    username: "Daniel Brooks",
    userCity: "San Diego, CA",
  },
  {
    description:
      "Our online store runs smoother than ever, thanks to United Web Developers. Their development team was incredibly responsive, and the result not only looks great but also is high-performing.",
    username: "Marcus Hill",
    userImg: testimonialimg1,
    userCity: "Toronto, ON",
  },
  {
    description:
      "From the very first call, it felt like United Web Developers understood our needs. They took our scattered ideas and turned them into a digital presence we’re proud of. We constantly get compliments on our new site.",
    username: "Priya Mehta",
    userImg: testimonialimg2,
    userCity: "Miami, FL",
  },
  {
    description:
      "Working with United Web Developers was like handing my digital dreams to pros who actually get it. Every update was better than the last. Pure gold.",
    username: "Laura Jensen",
    userImg: testimonialimg3,
    userCity: "Seattle, WA",
  },
  {
    description:
      "They built a digital experience that our customers rave about. Super collaborative, super efficient, super worth it.",
    username: "Ahmed Raza",
    userImg: testimonialimg4,
    userCity: "Dubai, UAE",
  },
  {
    description:
      "Fast timelines, killer design, and a dev team that’s spot on. Our bounce rate dropped, and our engagement skyrocketed. What more could you ask for?",
    username: "Kelsey Moore",
    userImg: testimonialimg5,
    userCity: "Atlanta, GA",
  },
];

const aboutTestimonials = [
  {
    quote:
      "We’ve worked with other agencies before, but no one matched the level of creativity and professionalism that United Web Developers brought to the table. They nailed our web development and made the whole process easy.",
    name: "Daniel Brooks",
  },
  {
    quote:
      "Our online store runs smoother than ever, thanks to United Web Developers. Their development team was incredibly responsive, and the result not only looks great but also is high-performing.",
    name: "Marcus Hill",
  },
  {
    quote:
      "From the very first call, it felt like United Web Developers understood our needs. They took our scattered ideas and turned them into a digital presence we’re proud of. We constantly get compliments on our new site.",
    name: "Priya Mehta",
  },
  {
    quote:
      "Working with United Web Developers was like handing my digital dreams to pros who actually get it. Every update was better than the last. Pure gold.",
    name: "Laura Jensen",
  },
  {
    quote:
      "They built a digital experience that our customers rave about. Super collaborative, super efficient, super worth it.",
    name: "Ahmed Raza",
  },
  {
    quote:
      "Fast timelines, killer design, and a dev team that’s spot on. Our bounce rate dropped, and our engagement skyrocketed. What more could you ask for?",
    name: "Kelsey Moore",
  },
];

const About = () => {
  return (
    <>
      <ReactHelmet
        title="Top Website Design & Development Company | Trusted Experts"
        description="Learn why United Web Developers is the Top Website Design & Development Company. Get innovative, scalable solutions tailored to grow you business today."
        keywords="web development, custom website, react development, logo design, digital marketing, social media marketing, web design"
        baseUrl="https://unitedwebdevelopers.com/about"
      />
      <DefaultLayout footerTitle='At <span class="colorYellow">United Web Developers</span>,</br> We Create a Digital Presence That Attracts, <br/> Leads, Clicks, and <span class="colorYellow">Cash.</span>'>
        <InnerBanner
          bgImage={aboutbannerbg}
          title={
            "USA’s Top <span class='colorYellow'>Website Design & Development</span> Company at Your Service"
          }
          width="300"
          height="385"
        />

        <section className="about-sec">
          <div className="container">
            <div className="row align-items-center flex-lg-row flex-column-reverse">
              <div className="col-lg-6">
                <div className="about-sec__content">
                  <h2 data-aos="fade-right" data-aos-delay={100}>
                    About United Web Developers
                  </h2>
                  <p
                    className="mb-2"
                    data-aos="fade-right"
                    data-aos-delay={300}
                  >
                    United Web Developers was founded with one mission: to help
                    all businesses achieve sustainable growth. We blend creative
                    designs, development, and strategic marketing to make a
                    brand presence that engages users and delivers measurable
                    results digitally.
                  </p>
                  <p data-aos="fade-right" data-aos-delay={300}>
                    Our team of designers, developers, and digital strategists
                    work in sync to bring your vision to life. From the first
                    sketch to the final line of code. No templates or shortcuts,
                    we make personalized solutions that work perfectly for you!
                  </p>
                  <Link
                    to="/contact-us"
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
                  <img
                    src={aboutimg1}
                    className="img-fluid"
                    alt="About United Web Developers"
                  />
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
                    Our priority is client satisfaction at every step. Discover
                    our diverse clientele and how we helped them grow their
                    businesses with our digital expertise.
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
                    Trusted by the Industry Rulers
                  </h2>
                  <p data-aos="fade-up" data-aos-delay={300}>
                    Don’t trust our words? Trust the beasts of digital media!
                    United Web Developers is trusted by hundreds of businesses
                    and the top industry names in the USA.
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
                    Our years of practice in the{" "}
                    <span className="colorYellow">
                      Web design and development
                    </span>{" "}
                    industry have not only given us success but also some awards
                    and achievements to showcase our skills.
                  </p>
                </div>
              </div>

              <div className="col-md-12">
                <div className="our-achievement-images">
                  {achievementsData.map((item, index) => (
                    <img
                      src={item.img}
                      alt="Our achievement"
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

        {/* <section className="home-testimonial-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sec-head">
                <p className="sec-head-tag label-yellow-bg">Testimonials</p>
                <h2 data-aos="fade-up" data-aos-delay={100}>
                  We Don’t Chase Reviews- We Earn Them
                </h2>
                <p data-aos="fade-up" data-aos-delay={300}>
                  Here’s what our clients have to say after working with us
                  (spoiler alert: they’re loving it)
                </p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="swiper-container">
                <Swiper
                  modules={[Pagination]}
                  spaceBetween={20}
                  slidesPerView={1}
                  loop={true}
                  speed={1000}
                  breakpoints={{
                    768: { slidesPerView: 2 },
                  }}
                  pagination={{ clickable: true }}
                >
                  {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                      <TestimonialCard
                        description={testimonial.description}
                        userImg={testimonial.userImg}
                        username={testimonial.username}
                        userCity={testimonial.userCity}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section> */}

        <ClientTestimonialSec
          title="We Don’t Chase Reviews- We Earn Them"
          description="Here’s what our clients have to say after working with us
                  (spoiler alert: they’re loving it)"
          testimonialData={aboutTestimonials}
        />
      </DefaultLayout>
    </>
  );
};

export default About;
