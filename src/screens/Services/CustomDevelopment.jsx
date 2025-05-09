import React from "react";

import DefaultLayout from "../../components/DefaultLayout";
import aboutbannerbg from "../../assets/images/services-customDev-banner-bg.png";

import servicesbannerimg from "../../assets/images/services-banner-img.png";
import servicesaboutimg from "../../assets/images/services-customDev-about-img.png";

import gfxlogo from "../../assets/images/gfx-logo.png";
import gfxwedev from "../../assets/images/gfx-we-dev.png";
import gfcvideoanimation from "../../assets/images/gfc-video-animation.png";
import gfxcontentwriting from "../../assets/images/gfx-content-writing.png";

import webdesignimg from "../../assets/images/services-customDevPage-img.png";
import photoshopicon from "../../assets/images/custom-dev-icon.png";

import oneStopWebImg from "../../assets/images/services-customDev-oneStopImg.png";

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
  { title: "Business Websites", img: gfxlogo },
  { title: "Personal Websites", img: gfxwedev },
  { title: "E-Commerce Websites", img: gfcvideoanimation },
  { title: "Portfolios", img: gfxcontentwriting },
  { title: "Blogs Website", img: gfxlogo },
  { title: "Booking Websites", img: gfxwedev },
  { title: "Informational Websites", img: gfcvideoanimation },
  { title: "Magazines or News Websites", img: gfxcontentwriting },
];

import {
  blogsData,
  customDevelopmentTestimoialData,
  customWebFaqs,
  oneStopWebBoxesData,
  servicesCustomDevPortfolioData,
  servicesCustomDevSupportData,
  webDesignGuidelinesData,
  // webDesignSupportData,
} from "../../data";

const stepsData = [
  {
    stepNum: "01",
    stepName: "Client Consultation",
    stepDescription:
      "",
  },
  {
    stepNum: "02",
    stepName: "Planning",
    stepDescription:
      "",
  },
  {
    stepNum: "03",
    stepName: "Designing",
    stepDescription:
      "From concept to code, our custom web development process is built to deliver consistent results for your business, backed by strategy, and executed with precision.",
  },
  {
    stepNum: "04",
    stepName: "Back-end Optimization",
    stepDescription:
      "",
  },
  {
    stepNum: "05",
    stepName: "Launch & Optimization",
    stepDescription:
      "",
  },
]

const CustomDevelopment = () => {
  return (
    <DefaultLayout>
      <ServicesBanner
        bgImage={aboutbannerbg}
        // leftColClass="col-lg-7"
        // rightColClass="col-lg-5"
        title="Custom Web Development Services USA"
        description="In our custom web development services, there are no templates or shortcuts, only fresh ideas and personalization. From the front-end to the back-end, you get full control over your website and performance."
        cta1="Build My Website"
        cta2="Let’s Chat!"
        // servicesbannerimg={servicesbannerimg}
      />

      <ServicesAboutSec
        image={servicesaboutimg}
        title="Built From Scratch to Witness Organic Growth"
        description="Why settle for a template used by hundreds of websites? With our custom web development services, you can build a unique identity and create a name for yourself! We ensure you’re getting a digital solution that’s built around you. With smooth and customized frontend and backend web development, we make sure your site works exactly how you want it to."
      />

      <GraphicDesignAgency
        className="servicesGDA"
        secTag="WEBSITE DESIGN COMPANY"
        secTitle="Types Of Websites We Offer"
        secHeadDescription="Got a unique niche? Doesn’t matter! We create various kinds of websites with intricate details that connect you with your audience at a glance!"
        // viewAllServices
        gfxServices={gfxServices}
        gfxLastDescription="You’ve got a vision to grow your business online, and we’ve got the perfect team to build it. As one of the leading custom web development companies in the USA, we don’t give you template-based websites. United Web developers shape your digital experience according to what fits your goals, users, and brand. It’s time you bring your dreams into reality, that carves a path of success for you! "
        // gfxLastImgs
        gfxLastImage={webdesignimg}
      />

      <ServicePowerfullTool
        secTitle="Trusted By Businesses That Want Real Results"
        secDescription="We’ve built everything from sleek landing pages to enterprise-level systems with perfection. Clients choose us not just for design, but for results that grow businesses and ensure success!"
        toolIcon={photoshopicon}
        toolName="Custom Web Development"
        toolNameDesc="Our team is obsessed with results! Our strategy is fully focused on results, performance, speed, and user experience. That’s how we consistently keep our satisfaction rate near perfect."
        cta="Book A Consultation"
        toolDesignerAvailable="2 Photoshop designers are available for hiring"
        usagePercent="97%"
        usage="Client Satisfaction"
        rank="500+"
        highlightText="Websites Made"
      />

      <AdobePhotoshopSec
        secTitle="Get A Glimpse of Our Custom Websites"
        secTitleDescription="Trust isn’t built with words only. Visit our portfolio and see how we have helped businesses get a unique brand presence with custom websites that are made to meet unique requirements."
        secSubTitle="Custom Web Development"
        secSubTitleDescription="This portfolio showcases the best of our <span class='colorYellow'>Custom Web Development</span> services and shows how we add different features and details for personalization."
        servicesData={servicesCustomDevPortfolioData}
      />

      <OurWorkProcessSec
        className="our-work-process__bgWhite"
        secTitle="The Process Of Customization"
        secDescription="To witness real results, we pour in real efforts. Learn how our experts strategize to create the perfect website customized to your unique needs:"
        // secLastText="Taking the brainstorming session to the next stage, our designers come up with various designing sketches converting thoughts into real images."
        secStepsData={stepsData}
      />

      <OneStopWebSec
        secTitle="Be Imaginative, We’ll Be Creative. "
        secDescription="Do you want your web design to be a full experience of new designs, custom animations, or transitions? We have you covered!"
        image={oneStopWebImg}
        boxesData={oneStopWebBoxesData}
      />

      <WebDesignSupportSec
        secTitle="Why Clients Choose United Web Developers Every Time"
        secTitleDescription="Our <span class='colorYellow'>Custom web design and development services</span> aren’t only about the building process; we stay with you for constant support and satisfaction."
        webDesignSupport={servicesCustomDevSupportData}
      />

      <ClientTestimonialSec className="bgDark"
        title="Custom Web Development Keeps Our Clients Happy!"
        description="Our valuable clients are our biggest assets. Take a look at how we served them with websites built from scratch to highlight their unique digital presence."
        testimonialData={customDevelopmentTestimoialData}
      />

      <FAQSection
        className="bgLight"
        // secHeadrag=""
        title="Frequently Asked Questions"
        description="Got questions related to custom web development services? We are here to answer!"
        faqsQA={customWebFaqs}
      />

      <WebDesignGuidelines
        secTag="WEBSITE DESIGN GUIDELINES"
        secTitle="What’s Included In Our <span class='colorYellow'>Custom Web Development Services</span>?"
        secDescription="We build, improve, and maintain websites and web apps personalized for your business. Focused on speed, design, and long-term performance."
        stepData={webDesignGuidelinesData}
      />

      <BlogsSec 
        blogSecTitle="Discover The Recent Trends And Insights In Our Blogs!"
        blogSubtext="Stay in touch with what the world’s doing, learn new skills and facts, and engage with our experts on our blogs"
        blogsData={blogsData}
      />
    </DefaultLayout>
  );
};

export default CustomDevelopment;
