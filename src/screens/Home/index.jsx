import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import MainBanner from "../../components/MainBanner";
import { Link } from "react-router-dom";

import homeAboutImg from "../../assets/images/home-about-img.png";

import gfxlogo from "../../assets/images/gfx-logo.png";
import gfxwedev from "../../assets/images/gfx-we-dev.png";
import gfcvideoanimation from "../../assets/images/gfc-video-animation.png";
import gfxcontentwriting from "../../assets/images/gfx-content-writing.png";

import portfolioimg1 from "../../assets/images/portfolio-img-1.png";
import portfolioimg2 from "../../assets/images/portfolio-img-2.png";
import portfolioimg3 from "../../assets/images/portfolio-img-3.png";
import portfolioimg4 from "../../assets/images/portfolio-img-4.png";
import portfolioimg5 from "../../assets/images/portfolio-img-5.png";
import portfolioimg6 from "../../assets/images/portfolio-img-6.png";

import gfxglobalimg1 from "../../assets/images/gfx-global-img1.png";
import gfxglobalimg2 from "../../assets/images/gfx-global-img2.png";

import testimonialimg from "../../assets/images/testimonial-img.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import TestimonialCard from "../../components/TestimonialCard/TestimonialCard";
import { blogsData } from "../../data";
import OurWorkProcessSec from "../../components/OurWorkProcessSec";
import FAQSection from "../../components/FAQSection";
import BlogsSec from "../../components/BlogsSec";
import GraphicDesignAgency from "../../components/GraphicDesignAgency";

const gfxServices = [
  { title: "Logo Design", img: gfxlogo },
  { title: "Web Development", img: gfxwedev },
  { title: "Video Animation", img: gfcvideoanimation },
  { title: "Content Writing", img: gfxcontentwriting },
];

const testimonials = [
  {
    description:
      "Introducing our team of talented and skilled professionals who are ready to increase your productivity and bring your business to the new level of efficiency and sustainability.",
    userImg: testimonialimg,
    username: "Amy Walker",
    userCity: "New York City, NY",
  },
  {
    description:
      "Introducing our team of talented and skilled professionals who are ready to increase your productivity and bring your business to the new level of efficiency and sustainability.",
    userImg: testimonialimg,
    username: "Amy Walker",
    userCity: "New York City, NY",
  },
  {
    description:
      "Introducing our team of talented and skilled professionals who are ready to increase your productivity and bring your business to the new level of efficiency and sustainability.",
    userImg: testimonialimg,
    username: "Amy Walker",
    userCity: "New York City, NY",
  },
];

const Home = () => {
  return (
    <DefaultLayout>
      <MainBanner />

      <section className="home-about-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-lg-0 mb-4">
              <div
                className="home-about-img"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <img
                  src={homeAboutImg}
                  className="img-fluid"
                  alt="About Image"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="home-about-content">
                <div className="sec-head">
                  <h2 data-aos="fade-left" data-aos-delay="100">
                    What Makes Us The Graphic Design Company for you?
                  </h2>
                  <p data-aos="fade-left" data-aos-delay="300">
                    We are a new age graphic design company that helps to
                    elevate your brand through advanced designing innovation.
                    Our services are result-driven and based on the insights
                    that help to attract the eyeballs of your customers, turning
                    them into a potential lead. At Logo Poppin, we deliver
                    perfection in digital branding combined with the proven
                    values of our artistic design. With an experienced team of
                    skilled professionals, our graphic design agency helps to
                    give your business identity a strong visual edge in the
                    market.
                  </p>
                  <div
                    className="d-flex gap-2"
                    data-aos="fade-left"
                    data-aos-delay="500"
                  >
                    <Link className="theme-btn theme-btn__black">
                      Get Started
                    </Link>
                    <button className="theme-btn theme-btn__yellow">
                      Call Us Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GraphicDesignAgency
        secTag="GRAPHIC DESIGN AGENCY"
        secTitle="Providing Advanced Digital Services"
        secHeadDescription="From logo designing to digital marketing, video animation to web designing & more, we are your one-stop solution to find all types of digital branding services."
        viewAllServices
        gfxServices={gfxServices}
        gfxLastDescription="We pride ourselves as the leading graphic design agency in the US that works with a customer-centric approach. We are not among those companies that offer logo designing by simply cutting through the stock images. Our skilled pool of designers offers best-in-class custom logo design services as per your given requirements. This means that YOU are at the center of our creativity while crafting impeccable brand logos. Working with us, you are firmly assured to get the best logo design that suits your brand identity, just as the way you want."
        gfxLastImgs
      />

      <section className="home-portfolio-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12">
              <div className="sec-head">
                <p className="sec-head-tag label-yellow-bg">PORTFOLIO</p>
                <h2 data-aos="fade-up" data-aos-delay={100}>
                  Providing Advanced Digital Services
                </h2>
                <p data-aos="fade-up" data-aos-delay={300}>
                  Take a look into our recent projects that speaks volume for
                  itself. We love to serve our customers with advanced designing
                  services meant to cover their all branding needs.
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="portfolio-imgs__container">
                <div
                  className="portfolio-img"
                  data-aos="flip-right"
                  data-aos-delay={100}
                >
                  <img src={portfolioimg1} alt="Portfolio Image 1" />
                </div>
                <div
                  className="portfolio-img"
                  data-aos="flip-down"
                  data-aos-delay={300}
                >
                  <img src={portfolioimg2} alt="Portfolio Image 2" />
                </div>
                <div
                  className="portfolio-img"
                  data-aos="flip-left"
                  data-aos-delay={500}
                >
                  <img src={portfolioimg3} alt="Portfolio Image 3" />
                </div>
              </div>
              <div className="portfolio-imgs__container">
                <div
                  className="portfolio-img"
                  data-aos="flip-left"
                  data-aos-delay={100}
                >
                  <img src={portfolioimg4} alt="Portfolio Image 3" />
                </div>
                <div
                  className="portfolio-img"
                  data-aos="flip-up"
                  data-aos-delay={200}
                >
                  <img src={portfolioimg5} alt="Portfolio Image 4" />
                </div>
                <div
                  className="portfolio-img"
                  data-aos="flip-left"
                  data-aos-delay={500}
                >
                  <img src={portfolioimg6} alt="Portfolio Image 5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OurWorkProcessSec
        secTitle="How We Turn Imagination Into Reality"
        secDescription="Here’s how we produce perfection in graphics design so that your brand can take maximum advantage of increasing customer engagement."
        secLastText="Taking the brainstorming session to the next stage, our designers come up with various designing sketches converting thoughts into real images."
      />
      <section className="home-testimonial-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sec-head">
                <p className="sec-head-tag label-yellow-bg">SUCCESS STORIES</p>
                <h2 data-aos="fade-up" data-aos-delay={100}>
                  Why Customers Love To Working With Us
                </h2>
                <p data-aos="fade-up" data-aos-delay={300}>
                  Introducing our team of talented and skilled professionals who
                  are ready to increase your productivity and bring your
                  business to the new level of efficiency and sustainability.
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
      </section>

      <section className="gfx-global-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="gfx-global__content">
                <p className="sec-head-tag label-yellow-bg">
                  GRAPHIC DESIGN AGENCY <br /> WITH GLOBAL ACHIEVEMENTS
                </p>
                <h2 data-aos="fade-right" data-aos-delay={100}>
                  Our quality digital branding services speak for our success.
                </h2>
                <p data-aos="fade-right" data-aos-delay={300}>
                  The reason for our success lies beneath the satisfaction of
                  our happy clients across the globe. Our graphic design studio
                  is rated highly by the masses all over the world, perfectly
                  speaking for the superlative dominance we’ve achieved in the
                  designing industry.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="gfx-global__img">
                <img
                  src={gfxglobalimg1}
                  className="gfx-global__img-1 img-fluid"
                  alt="graphic design agency"
                  data-aos="fade-left"
                  data-aos-delay={100}
                />
                <img
                  src={gfxglobalimg2}
                  className="gfx-global__img-2 img-fluid"
                  alt="graphic design agency"
                  data-aos="fade-left"
                  data-aos-delay={300}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        secHeadrag="FREQUENTLY ASKED QUESTIONS"
        title="How We Turn Imagination Into Reality"
        description="Common queries you want us to answer about our custom graphic
                design and other branding services."
      />

      <BlogsSec />
    </DefaultLayout>
  );
};

export default Home;
