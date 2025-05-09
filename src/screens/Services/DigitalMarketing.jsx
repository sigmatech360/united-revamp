import React from "react";

import DefaultLayout from "../../components/DefaultLayout";
import aboutbannerbg from "../../assets/images/services-digitalMarketing-banner-bg.png";

import servicesbannerimg from "../../assets/images/services-banner-img.png";
import servicesaboutimg from "../../assets/images/services-digitalMarketing-about-img.png";

import gfxlogo from "../../assets/images/gfx-logo.png";
import gfxwedev from "../../assets/images/gfx-we-dev.png";
import gfcvideoanimation from "../../assets/images/gfc-video-animation.png";
import gfxcontentwriting from "../../assets/images/gfx-content-writing.png";

import webdesignimg from "../../assets/images/services-digitalMarketingPage-img.png";
import photoshopicon from "../../assets/images/digital-marketing-icon.png";

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
  { title: "SEO", img: gfxlogo },
  { title: "Paid Ads", img: gfxwedev },
  { title: "Campaign Management", img: gfcvideoanimation },
  { title: "Content Management", img: gfxcontentwriting },
  { title: "Ad Analytics & Reporting", img: gfxlogo },
  { title: "Email Marketing", img: gfxwedev },
  { title: "Social Media Advertising", img: gfcvideoanimation },
  { title: "Keyword Optimization", img: gfxcontentwriting },
];

import {
  adobePhotoshopSecData,
  blogsData,
  digitalMarketingFaqs,
  digitalMarketingTestimoialData,
  oneStopWebBoxesData,
  webDesignGuidelinesData,
  webDesignSupportData,
} from "../../data";

const stepsData = [
  {
    stepNum: "01",
    stepName: "Breaf",
    stepDescription:
      "We begin by understanding your business, goals, audience, and competitors to craft a data-backed digital marketing roadmap",
  },
  {
    stepNum: "02",
    stepName: "Ideation",
    stepDescription:
      "Our team brainstorms creative content ideas and campaign strategies that align with your brand and drive online engagement",
  },
  {
    stepNum: "03",
    stepName: "Sketch",
    stepDescription:
      "We turn ideas into structured campaign plans, mapping out platform-specific content, ad creatives, and KPIs",
  },
  {
    stepNum: "04",
    stepName: "Execution",
    stepDescription:
      "We implement your digital strategy using tools like Meta Business Suite and Google Ads",
  },
  {
    stepNum: "05",
    stepName: "Deliver",
    stepDescription:
      "You receive performance reports, analytics insights, and optimization recommendations to ensure ongoing growth and ROI.",
  },
];

const DigitalMarketing = () => {
  return (
    <DefaultLayout>
      <ServicesBanner
        bgImage={aboutbannerbg}
        // leftColClass="col-lg-7"
        // rightColClass="col-lg-5"
        title="Drive Results With Expert Digital Marketing Services"
        description="Partner with the leading marketing agency that increases brand awareness, engagement, and conversions.
"
        // servicesbannerimg={servicesbannerimg}
      />

      <ServicesAboutSec
        image={servicesaboutimg}
        title="Why Digital Marketing Matters More Than Ever"
        description="Digital Marketing has become the foundation of brand success. With billions of people online, your business must be visible where it matters. As a trusted digital marketing company in the USA, we help you cut through the noise with powerful online marketing strategies tailored to your brand. We combine a variety of frameworks, including SEO, content, and paid ads, to create the best digital marketing strategy that will work for your business."
      />

      <GraphicDesignAgency
        className="servicesGDA"
        secTag="We Help You Get Found, Seen, And Chosen"
        secTitle="Professional Solutions That Drive Results"
        secHeadDescription="
We make social media work for you by offering solutions at every stage of your marketing funnel. Here’s what we bring to the table:
"
        // viewAllServices
        gfxServices={gfxServices}
        gfxLastDescription="Looking for serious growth to establish authority in your industry? Our team is here to help you hit your business goals with strategic, high-impact marketing campaigns. What makes us different? We dive deep into your business to understand what truly sets you apart, and then we build around that."
        // gfxLastImgs
        gfxLastImage={webdesignimg}
      />

      <ServicePowerfullTool
        secTitle="Digital Marketing Powered By Robust Tools And Strategies"
        secDescription="As a full-service digital marketing agency, we utilize real-time data and cutting-edge tools to create a strategy that can set your business apart in the highly competitive digital environment."
        toolIcon={photoshopicon}
        toolName="Digital marketing"
        toolNameDesc="For digital marketing services, Meta Business Suite and Google Ads are the most important tools to launch ads, track real-time data, and tweak ads for better performance."
        toolDesignerAvailable="2 Photoshop designers are available for hiring"
        usagePercent="98%"
        usage="Success Rate"
        rank="500+"
        highlightText="Projects Completed"
      />

      {/* <AdobePhotoshopSec
        secTitle="Our Large Range Of Website Portfolio"
        secTitleDescription="We love to create websites that have got the power to engage
                  your clients. Here are some of our web designs that showcase
                  our proficiency in the field."
        secSubTitle="Adobe Photoshop"
        secSubTitleDescription="Clients simply love our web designs, and some of these
                  exceptional design samples speak volume for our hard work."
        servicesData={adobePhotoshopSecData}
      /> */}

      <OurWorkProcessSec
        // className="our-work-process__bgWhite"
        secTitle="Professional Digital Marketing Strategies For Success"
        secDescription="Results come from a process grounded in clarity and creativity. Our digital marketing workflow ensures every campaign is designed to meet business goals through structure, analysis, and innovation"
        secStepsData={stepsData}
        // secLastText="Taking the brainstorming session to the next stage, our designers come up with various designing sketches converting thoughts into real images."
      />

      {/* <OneStopWebSec
        secTitle="Your One-Stop Website Design Agency"
        secDescription="At Logo Poppin, we make sure to deliver website services that suit right according to your brand image, making us a dedicated web design agency for you."
        image={oneStopWebImg}
        boxesData={oneStopWebBoxesData}
      /> */}

      {/* <WebDesignSupportSec
        secTitle="Your Partner To Find Complete Web Designing Support"
        secTitleDescription="From custom designs to dedicated support, we are an experienced website design company that takes care of all your project requirements, with ease."
        webDesignSupport={webDesignSupportData}
      /> */}

      <ClientTestimonialSec
        // className="bgDark"
        title="What Our Client Says, Says It All"
        description="Our clients are important to us. Their words reflect the trust, results, and satisfaction we deliver every day."
        testimonialData={digitalMarketingTestimoialData}
      />

      <FAQSection
        // className="bgLight"
        secHeadrag="FREQUENTLY ASKED QUESTIONS"
        title="Frequently Asked Questions"
        description="How We Turn Imagination Into Reality"
        faqsQA={digitalMarketingFaqs}
      />

      {/* <WebDesignGuidelines
        secTag="WEBSITE DESIGN GUIDELINES"
        secTitle="Our Recipe for Creating Impactful Website Designs"
        secDescription="We take pride in serving our customers with top-of-the-line
                  web designs. Here’s how we do it with perfection in our
                  projects."
        stepData={webDesignGuidelinesData}
      /> */}

      <BlogsSec
        blogSecTitle="Discover The Recent Trends And Insights In Our Blogs!"
        blogSubtext="Stay in touch with what the world’s doing, learn new skills and facts, and engage with our experts on our blogs"
        blogsData={blogsData}
      />
    </DefaultLayout>
  );
};

export default DigitalMarketing;
