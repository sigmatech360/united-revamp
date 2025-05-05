import React from "react";

import DefaultLayout from "../../components/DefaultLayout";
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



import OurWorkProcessSec from "../../components/OurWorkProcessSec";
import ClientTestimonialSec from "../../components/ClientTestimonialSec";
import FAQSection from "../../components/FAQSection";
import BlogsSec from "../../components/BlogsSec";
import GraphicDesignAgency from "../../components/GraphicDesignAgency";
import ServicesBanner from "../../components/ServicesBanner";
import ServicesAboutSec from "../../components/ServicesAboutSec";
import ServicePowerfullTool from "../../components/ServicePowerfullTool";
import AdobePhotoshopSec from "../../components/AdobePhotoshopSec";
import WebDesignSupportSec from "../../components/WebDesignSupportSec";
import OneStopWebSec from "../../components/OneStopWebSec";
import WebDesignGuidelines from "../../components/WebDesignGuidelines";


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

const Services = () => {
  return (
    <DefaultLayout>
      <ServicesBanner
        bgImage={aboutbannerbg}
        leftColClass="col-lg-7"
        rightColClass="col-lg-5"
        title="Website Design Services That Drives Brand Innovation"
        description="We create immersive digital experiences for your brand perfectly by using our result-driven web design services."
        servicesbannerimg={servicesbannerimg}
      />

      <ServicesAboutSec
        image={servicesaboutimg}
        title="We Are A New Age Website Design Company"
        description="Being a creative web design agency, we specialize in creating
                  websites that speak perfectly for your brand. Our goal is to
                  make sure that your businesses are getting the right online
                  presence with engaging website designs, built exquisitely to
                  rediscover your true potential in the internet marketplace.
                  Keeping our customers at the center of everything, we always
                  strive hard to produce masterful website designs, rightly by
                  blending our expertise with the artistic values of new-age web
                  technologies."
      />

      <GraphicDesignAgency
        className="servicesGDA"
        secTag="GRAPHIC DESIGN AGENCY"
        secTitle="Providing Advanced Digital Services"
        secHeadDescription="From logo designing to digital marketing, video animation to web designing & more, we are your one-stop solution to findall types of digital branding services."
        // viewAllServices
        gfxServices={gfxServices}
        gfxLastDescription="Our team of talented web designers has got the required
                expertise to develop custom websites on HTML. With years of
                experience in the field, we know how to develop websites that
                can represent your brand strongly. Get in touch with us today
                and get your desired custom website developed on HTML/CSS at the
                lowest market rates."
        // gfxLastImgs
        gfxLastImage={webdesignimg}
      />

      <ServicePowerfullTool
        secTitle="Powerful Tools For Web Design Services"
        secDescription="Being a creative website design company, we utilize cutting-edge frontend technologies to build advanced websites as per your custom specifications. Leveraging the latest design tools we create responsive web pages."
        toolIcon={photoshopicon}
        toolName="Adobe Photoshop"
        toolNameDesc="Adobe Photoshop is a powerful tool to create pictures with exceptional designs. Our experts make sure to innovate your project designs using Photoshop, as per the custom demands."
        toolDesignerAvailable="2 Photoshop designers are available for hiring"
        usagePercent="90%"
        usage="Worldwide Usage"
        rank="#1"
        highlightText="Choice for Graphic Design"
      />

      <AdobePhotoshopSec
        secTitle="Our Large Range Of Website Portfolio"
        secTitleDescription="We love to create websites that have got the power to engage
                  your clients. Here are some of our web designs that showcase
                  our proficiency in the field."
        secSubTitle="Adobe Photoshop"
        secSubTitleDescription="Clients simply love our web designs, and some of these
                  exceptional design samples speak volume for our hard work."
        servicesData={adobePhotoshopSecData}
      />

      <OurWorkProcessSec className="our-work-process__bgWhite" />

      <OneStopWebSec
        secTitle="Your One-Stop Website Design Agency"
        secDescription="At Logo Poppin, we make sure to deliver website services that suit right according to your brand image, making us a dedicated web design agency for you."
        image={oneStopWebImg}
        boxesData={oneStopWebBoxesData}
      />

      <WebDesignSupportSec
        secTitle="Your Partner To Find Complete Web Designing Support"
        secTitleDescription="From custom designs to dedicated support, we are an experienced website design company that takes care of all your project requirements, with ease."
        webDesignSupport={webDesignSupportData}
      />

      <ClientTestimonialSec className="bgDark" />

      <FAQSection
        className="bgLight"
        // secHeadrag=""
        title="Frequently Asked Questions"
        description="Common queries you want us to answer about our web design services."
      />

      <WebDesignGuidelines
        secTag="WEBSITE DESIGN GUIDELINES"
        secTitle="Our Recipe for Creating Impactful Website Designs"
        secDescription="We take pride in serving our customers with top-of-the-line
                  web designs. Here’s how we do it with perfection in our
                  projects."
        stepData={webDesignGuidelinesData}
      />

      <BlogsSec />
    </DefaultLayout>
  );
};

export default Services;
