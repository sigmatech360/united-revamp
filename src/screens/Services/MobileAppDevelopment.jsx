import React from "react";

import DefaultLayout from "../../components/DefaultLayout";
import aboutbannerbg from "../../assets/images/services-mobileAppDev-banner-bg.webp";

import servicesbannerimg from "../../assets/images/services-mobileAppDev-banner-img.webp";
import servicesaboutimg from "../../assets/images/services-mobileAppDev-about-img.webp";

import gfxlogo from "../../assets/images/gfx-logo.webp";
import gfxwedev from "../../assets/images/gfx-we-dev.webp";
import gfcvideoanimation from "../../assets/images/gfc-video-animation.webp";
import gfxcontentwriting from "../../assets/images/gfx-content-writing.webp";

import webdesignimg from "../../assets/images/services-mobileAppDevPage-img.webp";
import photoshopicon from "../../assets/images/mobile-app-dev-icon.webp";

import oneStopWebImg from "../../assets/images/services-mobileAppDev-oneStopImg.webp";

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

import NativeApp from "../../assets/images/icons/mobile-app-development/Native-App.webp";
import Hybridapp from "../../assets/images/icons/mobile-app-development/Hybrid-app.webp";
import WebApp from "../../assets/images/icons/mobile-app-development/Web-App.webp";
import ProgressiveWebApp from "../../assets/images/icons/mobile-app-development/Progressive-Web-App.webp";

const gfxServices = [
  { title: "Native Apps", img: NativeApp },
  { title: "Hybrid Apps", img: Hybridapp },
  { title: "Web Apps", img: WebApp },
  { title: "Progressive Web Apps", img: ProgressiveWebApp },
];

import {
  adobePhotoshopSecData,
  blogsData,
  customDevelopmentTestimoialData,
  customWebFaqs,
  mobileAppFaqs,
  mobileAppGuidelinesData,
  mobileAppTestimoialData,
  oneStopAppBoxesData,
  oneStopWebBoxesData,
  servicesMobileAppDevSupportData,
  servicesMobileDevPortfolioData,
  webDesignGuidelinesData,
} from "../../data";
import ReactHelmet from "../../components/ReactHelmet";

const stepsData = [
  {
    stepNum: "01",
    stepName: "Strategy",
    stepDescription: "",
  },
  {
    stepNum: "02",
    stepName: "Designing & Developmen",
    stepDescription: "",
  },
  {
    stepNum: "03",
    stepName: "App Testing",
    stepDescription:
      "We guide you through every development phase, ensuring clarity, collaboration, and confidence. So you're always in control and never left wondering what's next",
  },
  {
    stepNum: "04",
    stepName: "App Launch",
    stepDescription: "",
  },
  {
    stepNum: "05",
    stepName: "Post-Launch Support",
    stepDescription: "",
  },
];

const MobileDevelopment = () => {
  return (
    <>
      <ReactHelmet
        title="Mobile App Development for Scalable Business Growth"
        description={`Transform your idea into reality with expert Mobile App Development. We build custom apps that perform. Launch faster-partner with United Web Developers now!`}
        keywords="web development, custom website, react development, logo design, digital marketing, social media marketing, web design"
        baseUrl="https://unitedwebdevelopers.com/mobile-app-development"
      />
      <DefaultLayout footerTitle="Let Your <span class='colorYellow'>Mobile Ap</span><br/> Speak For Your Brand’s Brilliance">
        <ServicesBanner
          secClass="mobileAppDevelopment-service"
          bgImage={aboutbannerbg}
          leftColClass="col-lg-5"
          rightColClass="col-lg-7"
          title="Powerful <span class='colorYellow'>Mobile App Development</span> For Sustainable Growth"
          description="Mobile applications that help your business grow fast, stay relevant, and reach users across all devices seamlessly."
          servicesbannerimg={servicesbannerimg}
        />

        <ServicesAboutSec
          image={servicesaboutimg}
          title="Digital Growth Today Relies On Mobile Applications"
          description="Your potential customers are most available on their mobile devices. Our Mobile App development company USA designs mobile apps that go beyond functionality; we make apps built for engagement, efficiency, and long-term business growth. Whether you need to connect with customers or enhance internal workflows, we create mobile solutions tailored to real-world impact and seamless user experiences."
        />

        <GraphicDesignAgency
          className="servicesGDA"
          secTag="Mobile App Development Company"
          secTitle="Our Mobile App Development Services Are A Package Of Success"
          secHeadDescription="Our mobile app developers create different kinds of mobile apps with top-tier performance, enhanced functionality features, and long-term results. We create the following types of Mobile Apps for you:"
          // viewAllServices
          gfxServices={gfxServices}
          gfxLastTitle="Solutions For Every Business, Every Problem With Custom Mobile App Development."
          gfxLastDescription="From custom internal tools to complex apps, our mobile app developers craft solutions that align perfectly with your brand’s vision, operational needs, and long-term business strategy. We work with startups, enterprises, and everything in between to develop mobile apps that truly make a difference. With United Web Developers, you get a team that listens, strategizes, and builds with long-term value in mind."
          // gfxLastImgs
          gfxLastImage={webdesignimg}
        />

        <ServicePowerfullTool
          secTitle="Mobile Applications That Bring Scalable Results"
          secDescription="Our team adds tracking tools and detailed analytics in our mobile app development services to monitor performance and user behavior from day one."
          toolIcon={photoshopicon}
          toolName="Mobile App Development"
          toolNameDesc="With over 500+ apps launched and a 97% satisfaction rating, we’re committed to development that brings results. Every app is optimized continuously to evolve with your users and business goals."
          // toolDesignerAvailable="2 Photoshop designers are available for hiring"
          usagePercent="97%"
          usage="Client Satisfaction"
          rank="500+"
          highlightText="Successful Mobile Apps"
          cta="Discuss Your Project"
        />

        <AdobePhotoshopSec
          secTitle="Check Out Our Portfolio Of Successful Mobile Applications"
          secTitleDescription="From healthcare to e-commerce and service-based platforms, we’ve developed mobile apps that empower users and simplify operations. Each project tells a story of collaboration and transformation."
          secSubTitle="Mobile App Development"
          secSubTitleDescription="Our apps are designed with user experience as the top priority. Check out our portfolio for Mobile Applications, where each app showcases our diversity in development. "
          servicesData={servicesMobileDevPortfolioData}
        />

        <OurWorkProcessSec
          className="our-work-process__bgWhite"
          secTitle="The Steps Our Mobile App Developers Follow"
          secDescription="We make mobile app development smooth, strategic, and structured from start to finish."
          secLastText="We guide you through every development phase, ensuring clarity, collaboration, and confidence. So you're always in control and never left wondering what's next"
          secStepsData={stepsData}
        />

        <OneStopWebSec
          secTitle="Multiple Requirements, One-Stop. We’ll Do It All."
          secDescription="Our mobile app development company in the USA is known to build features that enhance both the user experience and your operational effectiveness."
          image={oneStopWebImg}
          boxesData={oneStopAppBoxesData}
        />

        <WebDesignSupportSec
          secTitle="Custom Mobile App Development Like Never Before"
          secTitleDescription="We focus on consistent communication, full transparency, and flexible solutions to meet your evolving business needs and ensure a stress-free mobile app development experience."
          webDesignSupport={servicesMobileAppDevSupportData}
        />

        <ClientTestimonialSec
          className="bgDark"
          title="Our Happy Clients Share A Word Of Support"
          description="Mobile app development is a strategic process; we ensure that it’s done right. Here from the clients who are happily running Apps made by us! "
          testimonialData={mobileAppTestimoialData}
        />

        <FAQSection
          className="bgLight"
          // secHeadrag=""
          title="Frequently Asked Questions"
          description="Here are some of the common questions we get asked about mobile app development services."
          faqsQA={mobileAppFaqs}
        />

        <WebDesignGuidelines
          secTag="WEBSITE DESIGN GUIDELINES"
          secTitle="How Our Mobile App Development Company USA Stands Out From The Rest"
          secDescription="We blend creativity with technology to deliver mobile applications that are visually refined, fast, and built for real business impact."
          stepData={mobileAppGuidelinesData}
        />

        <BlogsSec
          blogSecTitle="Discover The Recent Trends And Insights In Our Blogs!"
          blogSubtext="Stay in touch with what the world’s doing, learn new skills and facts, and engage with our experts on our blogs"
          // blogsData={blogsData}
          categorySlug="mobile-app-development"
        />
      </DefaultLayout>
    </>
  );
};

export default MobileDevelopment;
