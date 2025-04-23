import React from "react";
import { Link } from "react-router-dom";

import DefaultLayout from "../../components/DefaultLayout";

import mainbannerimgs from "../../assets/images/main-banner-imgs.png";
import aboutbannerbg from "../../assets/images/about-banner-bg.png";

import servicesbannerimg from "../../assets/images/services-banner-img.png";
import servicesaboutimg from "../../assets/images/services-about-img.png";

import gfxlogo from "../../assets/images/gfx-logo.png";
import gfxwedev from "../../assets/images/gfx-we-dev.png";
import gfcvideoanimation from "../../assets/images/gfc-video-animation.png";
import gfxcontentwriting from "../../assets/images/gfx-content-writing.png";

import webdesignimg from "../../assets/images/web-design-img.png";
import photoshopicon from "../../assets/images/photoshop-icon.png";

import oneStopWebImg from "../../assets/images/one-stop-website-img.png";

const gfxServices = [
  { title: "Logo Design", img: gfxlogo },
  { title: "Web Development", img: gfxwedev },
  { title: "Video Animation", img: gfcvideoanimation },
  { title: "Content Writing", img: gfxcontentwriting },
];

import {
  adobePhotoshopSecData,
  oneStopWebBoxesData,
  webDesignGuidelinesData,
  webDesignSupportData,
} from "../../data";

import OurWorkProcessSec from "../../components/OurWorkProcessSec";
import ClientTestimonialSec from "../../components/ClientTestimonialSec";
import FAQSection from "../../components/FAQSection";
import BlogsSec from "../../components/BlogsSec";

const Services = () => {
  return (
    <DefaultLayout>
      <section
        className="services-banner-sec"
        style={{ backgroundImage: `url(${aboutbannerbg})` }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <div className="services-banner__content">
                <h1>Website Design Services That Drives Brand Innovation</h1>
                <p>
                  We create immersive digital experiences for your brand
                  perfectly by using our result-driven web design services.
                </p>
                <div className="main-banner__content-btns">
                  <Link to={""} className="theme-btn theme-btn__yellow">
                    Let's Get Started
                  </Link>
                  <Link to={""} className="theme-btn">
                    Discuss Your Project
                  </Link>
                </div>
                <div className="main-banner__content-imgs">
                  <img
                    src={mainbannerimgs}
                    className="img-fluid"
                    alt="main-banner-imgs"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="services-banner__img">
                <img
                  src={servicesbannerimg}
                  className="img-fluid"
                  alt="Services Banner Image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-about__sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="services-about__img">
                <img
                  src={servicesaboutimg}
                  className="img-fluid"
                  alt="Services About Image"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="services-about__content">
                <h2>We Are A New Age Website Design Company</h2>
                <p>
                  Being a creative web design agency, we specialize in creating
                  websites that speak perfectly for your brand. Our goal is to
                  make sure that your businesses are getting the right online
                  presence with engaging website designs, built exquisitely to
                  rediscover your true potential in the internet marketplace.
                  Keeping our customers at the center of everything, we always
                  strive hard to produce masterful website designs, rightly by
                  blending our expertise with the artistic values of new-age web
                  technologies.
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
      </section>

      <section className="web-design__company">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12">
              <div className="sec-head">
                <p className="sec-head-tag">GRAPHIC DESIGN AGENCY</p>
                <h2>Providing Advanced Digital Services</h2>
                <p>
                  From logo designing to digital marketing, video animation to
                  web designing & more, we are your one-stop solution to find
                  all types of digital branding services.
                </p>
              </div>
            </div>

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

            <div className="col-lg-6">
              <p className="web-design__p">
                Our team of talented web designers has got the required
                expertise to develop custom websites on HTML. With years of
                experience in the field, we know how to develop websites that
                can represent your brand strongly. Get in touch with us today
                and get your desired custom website developed on HTML/CSS at the
                lowest market rates.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="web-design__img">
                <img
                  src={webdesignimg}
                  className="img-fluid"
                  alt="services about image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="powerfull-tool__sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12">
              <div className="sec-head">
                <h2>Powerful Tools For Web Design Services</h2>
                <p>
                  Being a creative website design company, we utilize
                  cutting-edge frontend technologies to build advanced websites
                  as per your custom specifications. Leveraging the latest
                  design tools we create responsive web pages.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="powerfull-tool__contant">
                <div className="powerfull-tool__contant-icon">
                  <img src={photoshopicon} alt="Photoshop Icon" />
                </div>
                <h3>Adobe Photoshop</h3>
                <p>
                  Adobe Photoshop is a powerful tool to create pictures with
                  exceptional designs. Our experts make sure to innovate your
                  project designs using Photoshop, as per the custom demands.
                </p>
                <div className="powerfull-tool__contant-btnText">
                  <Link to={""} className="theme-btn theme-btn__black">
                    Hire Designers
                  </Link>
                  <p>2 Photoshop designers are available for hiring</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="powerfull-tool__boxes">
                <div className="powerfull-tool__box">
                  <h1>90%</h1>
                  <p>Worldwide Usage</p>
                </div>
                <div className="powerfull-tool__box">
                  <h1>#1</h1>
                  <p>Choice for Graphic Design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="adobe-photoshop__sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12">
              <div className="sec-head">
                <h2>Our Large Range Of Website Portfolio</h2>
                <p>
                  We love to create websites that have got the power to engage
                  your clients. Here are some of our web designs that showcase
                  our proficiency in the field.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="adobe-photoshop__content-title">
                <h3>Adobe Photoshop</h3>
                <p>
                  Clients simply love our web designs, and some of these
                  exceptional design samples speak volume for our hard work.
                </p>
              </div>
            </div>

            {adobePhotoshopSecData.map((item, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div
                  className="portfolio-content-image"
                  style={{ backgroundImage: `url(${item.cardBG})` }}
                >
                  <img src={item.image} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OurWorkProcessSec className="our-work-process__bgWhite" />

      <section className="one-stop-web">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="one-stop-web__leftContent">
                <div className="sec-head">
                  <h2>Your One-Stop Website Design Agency</h2>
                  <p>
                    At Logo Poppin, we make sure to deliver website services
                    that suit right according to your brand image, making us a
                    dedicated web design agency for you.
                  </p>
                </div>
                <div className="one-stop-web__img">
                  <img
                    src={oneStopWebImg}
                    className="img-fluid"
                    alt="One Stop Website Image"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="one-stop-web__boxes">
                {oneStopWebBoxesData.map((item, index) => (
                  <div className="one-stop-web__box" key={index}>
                    <div className="one-stop-web__box-icon">
                      <img src={item.icon} alt={item.title} />
                    </div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="web-designing__support">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sec-head">
                <h2>Your Partner To Find Complete Web Designing Support</h2>
                <p>
                  From custom designs to dedicated support, we are an
                  experienced website design company that takes care of all your
                  project requirements, with ease.
                </p>
              </div>
            </div>

            {webDesignSupportData.map((item, index) => (
              <div className="col-md-3" key={index}>
                <div className="web-designing__support-box">
                  <div className="web-designing__support-box-img">
                    <img
                      src={item.image}
                      className="img-fluid"
                      alt={item.title}
                    />
                  </div>
                  <div className="web-designing__support-box-content">
                    <h4>{item.title}</h4>
                    <p>{item.shortDescription}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClientTestimonialSec className="bgDark" />

      <FAQSection
        className="bgLight"
        // secHeadrag=""
        title="Frequently Asked Questions"
        description="Common queries you want us to answer about our web design services.  "
      />

      <section className="web-design__guidelines">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sec-head">
                <p className="sec-head-tag">WEBSITE DESIGN GUIDELINES</p>
                <h2>Our Recipe for Creating Impactful Website Designs</h2>
                <p>
                  We take pride in serving our customers with top-of-the-line
                  web designs. Here’s how we do it with perfection in our
                  projects.
                </p>
              </div>
            </div>

            <div className="col-md-12">
              <div className="webDesignGuidelinesDataRow">
                <div className="row">
                  {webDesignGuidelinesData.map((item, index) => (
                    <div className="col-lg-4 mb-4" key={index}>
                      <div className="web-design__guidelines-box">
                        <div className="web-design__guidelines-box-icon">
                          <img src={item.icon} alt={item.name} />
                        </div>
                        <h4>{item.name}</h4>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BlogsSec />
    </DefaultLayout>
  );
};

export default Services;
