import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import MainBanner from "../../components/MainBanner";
import { Link } from "react-router-dom";

import homeAboutImg from "../../assets/images/home-about-img.png";

import gfxlogo from "../../assets/images/gfx-logo.png";
import gfxwedev from "../../assets/images/gfx-we-dev.png";
import gfcvideoanimation from "../../assets/images/gfc-video-animation.png";
import gfxcontentwriting from "../../assets/images/gfx-content-writing.png";

import gfxlastimg1 from "../../assets/images/gfx-last-img-1.png";
import gfxlastimg2 from "../../assets/images/gfx-last-img-2.png";

import portfolioimg1 from "../../assets/images/portfolio-img-1.png";
import portfolioimg2 from "../../assets/images/portfolio-img-2.png";
import portfolioimg3 from "../../assets/images/portfolio-img-3.png";
import portfolioimg4 from "../../assets/images/portfolio-img-4.png";
import portfolioimg5 from "../../assets/images/portfolio-img-5.png";
import portfolioimg6 from "../../assets/images/portfolio-img-6.png";

import quoteicon from "../../assets/images/quote-icon.png";
import testimonialimg from "../../assets/images/testimonial-img.png";

const gfxServices = [
  { title: "Logo Design", img: gfxlogo },
  { title: "Web Development", img: gfxwedev },
  { title: "Video Animation", img: gfcvideoanimation },
  { title: "Content Writing", img: gfxcontentwriting },
];

const Home = () => {
  return (
    <DefaultLayout>
      <MainBanner />

      <section className="home-about-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="home-about-img">
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
                  <h2>What Makes Us The Graphic Design Company for you?</h2>
                  <p>
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
                  <div className="d-flex gap-2">
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

      <section className="graphic-design-agency">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12">
              <div className="sec-head">
                <div className="sec-head-content">
                  <p className="sec-head-tag">GRAPHIC DESIGN AGENCY</p>
                  <h2>Providing Advanced Digital Services</h2>
                  <p>
                    From logo designing to digital marketing, video animation to
                    web designing & more, we are your one-stop solution to find
                    all types of digital branding services.
                  </p>
                </div>
                <Link to={""} className="theme-btn theme-btn__yellow">
                  View All Services
                </Link>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                {gfxServices.map((service, index) => (
                  <div className="col-lg-3 mb-5" key={index}>
                    <div className="gfx-card">
                      <div className="gfx-card__content">
                        <img src={service.img} alt={service.title} />
                      </div>
                      <p className="gfx-card__title">{service.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <p className="gfx-last-content">
                We pride ourselves as the leading graphic design agency in the
                US that works with a customer-centric approach. We are not among
                those companies that offer logo designing by simply cutting
                through the stock images. Our skilled pool of designers offers
                best-in-class custom logo design services as per your given
                requirements. This means that YOU are at the center of our
                creativity while crafting impeccable brand logos. Working with
                us, you are firmly assured to get the best logo design that
                suits your brand identity, just as the way you want.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="gfx-last-imgs">
                <img
                  src={gfxlastimg1}
                  className="gfx-last-img-1"
                  alt="graphic design agency"
                />
                <img
                  src={gfxlastimg2}
                  className="gfx-last-img-2"
                  alt="graphic design agency"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-portfolio-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12">
              <div className="sec-head">
                <p className="sec-head-tag label-yellow-bg">PORTFOLIO</p>
                <h2>Providing Advanced Digital Services</h2>
                <p>
                  Take a look into our recent projects that speaks volume for
                  itself. We love to serve our customers with advanced designing
                  services meant to cover their all branding needs.
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="portfolio-imgs__container">
                <div className="portfolio-img">
                  <img src={portfolioimg1} alt="Portfolio Image 1" />
                </div>
                <div className="portfolio-img">
                  <img src={portfolioimg2} alt="Portfolio Image 2" />
                </div>
                <div className="portfolio-img">
                  <img src={portfolioimg3} alt="Portfolio Image 3" />
                </div>
              </div>
              <div className="portfolio-imgs__container">
                <div className="portfolio-img">
                  <img src={portfolioimg4} alt="Portfolio Image 3" />
                </div>
                <div className="portfolio-img">
                  <img src={portfolioimg5} alt="Portfolio Image 4" />
                </div>
                <div className="portfolio-img">
                  <img src={portfolioimg6} alt="Portfolio Image 5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our-work-process">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sec-head">
                <p className="sec-head-tag">OUR WORK PROCESS</p>
                <h2>How We Turn Imagination Into Reality</h2>
                <p>
                  Here’s how we produce perfection in graphics design so that
                  your brand can take maximum advantage of increasing customer
                  engagement.
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="our-work-process__container">
                <div className="our-work-process__item">
                  <h1>01</h1>
                  <p>Brief</p>
                </div>
                <div className="our-work-process__item">
                  <h1>02</h1>
                  <p>Ideation</p>
                </div>
                <div className="our-work-process__item">
                  <h1>03</h1>
                  <p>Sketch</p>
                </div>
                <div className="our-work-process__item">
                  <h1>04</h1>
                  <p>Execution</p>
                </div>
                <div className="our-work-process__item">
                  <h1>05</h1>
                  <p>Deliver</p>
                </div>
              </div>
              <p className="our-work-process-last-p">
                Taking the brainstorming session to the next stage, our
                designers come up with various designing sketches converting
                thoughts into real images.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="home-testimonial-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sec-head">
                <p className="sec-head-tag label-yellow-bg">SUCCESS STORIES</p>
                <h2>Why Customers Love To Working With Us</h2>
                <p>
                  Introducing our team of talented and skilled professionals who
                  are ready to increase your productivity and bring your
                  business to the new level of efficiency and sustainability.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="home-testimonial-card">
                <img
                  src={quoteicon}
                  className="testimonial-quote__img"
                  alt="Quote Image"
                />
                <p className="testimonial-quote__text">
                  Introducing our team of talented and skilled professionals who
                  are ready to increase your productivity and bring your
                  business to the new level of efficiency and sustainability.
                </p>
                <div className="testimonial-user__details">
                  <div className="testimonial-user__img">
                    <img
                      src={testimonialimg}
                      className="img-fluid"
                      alt="Testimonial User"
                    />
                  </div>
                  <div className="testimonial-user__content">
                    <h4>Amy Walker</h4>
                    <p>New York City, NY</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Home;
