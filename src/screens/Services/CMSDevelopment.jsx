import React from "react";

import DefaultLayout from "../../components/DefaultLayout";
import aboutbannerbg from "../../assets/images/services-cmsDev-banner-bg.png";

import servicesbannerimg from "../../assets/images/services-banner-img.png";
import servicesaboutimg from "../../assets/images/services-cmsDev-about-img.png";

// Services Icons
import gfxlogo from "../../assets/images/gfx-logo.png";
import gfxwedev from "../../assets/images/gfx-we-dev.png";
import gfcvideoanimation from "../../assets/images/gfc-video-animation.png";
import gfxcontentwriting from "../../assets/images/gfx-content-writing.png";

import Draganddropedito from "../../assets/images/icons/cms-development/Drag-and-drop-edito.png";
import responsivetemplates from "../../assets/images/icons/cms-development/responsive-templates.png";
import SeoTools from "../../assets/images/icons/cms-development/Seo-Tools.png";
import AppAndPlugin from "../../assets/images/icons/cms-development/App-And-Plugin.png";

import webdesignimg from "../../assets/images/services-cmsDevPage-img.png";
import photoshopicon from "../../assets/images/cms-icon.png";

import oneStopWebImg from "../../assets/images/services-cmsDev-oneStopImg.png";

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

// const gfxServices = [
//   { title: "Drag-and-Drop Edito", img: gfxlogo },
//   { title: "Responsive Templates", img: gfxwedev },
//   { title: "Built-in SEO Tools", img: gfcvideoanimation },
//   { title: "App & Plugin Integration", img: gfxcontentwriting },
// ];
const gfxServices = [
  { title: "Drag-and-Drop Edito", img: Draganddropedito },
  { title: "Responsive Templates", img: responsivetemplates },
  { title: "Built-in SEO Tools", img: SeoTools },
  { title: "App & Plugin Integration", img: AppAndPlugin },
];

import {
  oneStopWebBoxesData,
  servicesCMSDevPortfolioData,
  webDesignGuidelinesData,
  servicesCMSDevSupportData,
  oneStopCMSBoxesData,
  cmsTestimoialData,
  cmsGuidelinesData,
  cmsFaqs,
  blogsData,
} from "../../data";

const stepsData = [
  {
    stepNum: "01",
    stepName: "Breaf",
    stepDescription:
      "We gather your goals, website needs, and plugin integrations to define the right CMS development approach for your brand",
  },
  {
    stepNum: "02",
    stepName: "Ideation",
    stepDescription:
      "Our developers plan user journeys, define modules, and select the most effective CMS platform (e.g., WordPress, Shopify, Magento).",
  },
  {
    stepNum: "03",
    stepName: "Design & Structure",
    stepDescription:
      "We start by creating responsive layouts, wireframes, and CMS-specific content hierarchies for a smooth backend experience",
  },
  {
    stepNum: "04",
    stepName: "Execution",
    stepDescription:
      "Our developers build, customize, and integrate features, like payment gateways, using plugins.",
  },
  {
    stepNum: "05",
    stepName: "Launch & Handover",
    stepDescription:
      "We test, optimize, and deliver your website with full admin access, training (if needed), and ongoing support options.",
  },
];

const CMSDevelopment = () => {
  return (
    <DefaultLayout>
      <ServicesBanner
        bgImage={aboutbannerbg}
        // leftColClass="col-lg-7"
        // rightColClass="col-lg-5"
        title="The Best CMS Website Development Company"
        description="Build intuitive websites that are fast, responsive, and optimized for higher ranking."
        cta1="Talk To Us"
        cta2="Show Us Your Project"
        // servicesbannerimg={servicesbannerimg}
      />

      <ServicesAboutSec
        image={servicesaboutimg}
        title="Custom Website Development For Growth And Performance"
        description="A flexible and scalable website development service empowers businesses to manage digital content with efficiency, effectiveness, and speed. We develop and deploy full-cycle CMS website development services, including Shopify development, Magento Development, Wix Development, WooCommerce Development, Big Commerce Development, and WordPress Development."
        cta1="Click to Know More"
        cta1Link="/pricing"
        cta2="Call Us Now"
      />

      <GraphicDesignAgency
        className="servicesGDA"
        secTag="WEB DEVELOPMENT AGENCY"
        secTitle="Key CMS Features We Deliver"
        secHeadDescription="Our CMS website solutions are packed with powerful features delivering seamless management, performance, and compliance across every screen."
        // viewAllServices
        gfxServices={gfxServices}
        gfxLastDescription="We develop custom, high-performance websites, designed for simplicity, speed, and scalability. Our drag-and-drop web solutions empower users to build, manage, and update content easily. Optimized for SEO and cross-device functionality, these platforms ensure an effortless user experience across every digital touchpoint."
        // gfxLastImgs
        gfxLastImage={webdesignimg}
      />

      <ServicePowerfullTool
        secTitle="Modern Tech For Powerful CMS "
        secDescription="We employ modern technologies to build efficient websites that allow greater content control and improved digital strategy. Our websites are fast, easy to navigate, user-friendly, and, most importantly, mobile-optimized."
        toolIcon={photoshopicon}
        toolName="CMS Development"
        toolNameDesc="We work with a wide range of CMS platforms, including WordPress, Wix, Shopify, Magento, WooCommerce, BigCommerce, and more, to deliver website development solutions that meet the diverse needs of every industry we serve."
        // toolDesignerAvailable="2 Photoshop designers are available for hiring"
        usagePercent="98%"
        usage="Success rate"
        rank="500+"
        highlightText="Projects Completed"
        cta="Discuss Your Project"
      />

      <AdobePhotoshopSec
        secTitle="Our Experience In CMS Builders Is Unmatched"
        secTitleDescription="We love to create websites that are optimized for today's digital world: Fast, Responsive, and Optimized"
        secSubTitle="CMS Development At Its Finest"
        secSubTitleDescription="Choose United Web Developers for website development that gives your business an edge over your competitors. Our experienced team delivers scalable, secure CMS websites that are optimized for performance."
        servicesData={servicesCMSDevPortfolioData}
      />

      <OurWorkProcessSec
        className="our-work-process__bgWhite"
        secTitle="Best CMS Development for Responsive Websites"
        secDescription="Here’s how we bring powerful CMS websites to life, from pre-built templates to website development, we cater to all the needs of our clients."
        secStepsData={stepsData}
        secLastText="Smart strategy, seamless structure, and powerful plugins, our CMS development delivers websites that scale with your brand."
        // secLastText="Taking the brainstorming session to the next stage, our designers come up with various designing sketches converting thoughts into real images."
      />

      <OneStopWebSec
        secTitle="Your One-Stop CMS Development Agency"
        secDescription="At United Web Developers, we specialize in building powerful, scalable websites using today’s leading CMS platforms. Our websites are built to perform and rank higher in search engines, providing your business with the best visibility in the results page."
        image={oneStopWebImg}
        boxesData={oneStopCMSBoxesData}
      />

      <WebDesignSupportSec
        secTitle="Your Partner for Complete Website Development Support"
        secTitleDescription="United Web Developers has been a trusted partner for website development services in the USA, delivering websites that are:"
        webDesignSupport={servicesCMSDevSupportData}
      />

      <ClientTestimonialSec
        className="bgDark"
        title="Real Feedback, With Results"
        description="Our clients’ satisfaction is the ultimate measure of success for us. We take immense pride in delivering exceptional website development services in multiple platforms. Here's what our valued customers have to say about working with one of the top-rated website development companies US"
        testimonialData={cmsTestimoialData}
      />

      <FAQSection
        className="bgLight"
        // secHeadrag=""
        title="Got Any Questions?"
        description="We’ve Got All Your Answers"
        faqsQA={cmsFaqs}
      />

      <WebDesignGuidelines
        secTag="Website Development Essentials"
        secTitle="Our Formula for Building Scalable, High-Performing Websites"
        secDescription="We follow a modern and results-driven approach to create websites that are as aesthetic as they are responsive. Here's how we make sure your digital presence is powerful, functional, and built for long-term success:"
        stepData={cmsGuidelinesData}
      />

      <BlogsSec
        blogSecTitle="Discover The Recent Trends And Insights In Our Blogs!"
        blogSubtext="Stay in touch with what the world’s doing, learn new skills and facts, and engage with our experts on our blogs"
        // blogsData={blogsData}
        categorySlug="wordpress-development"
      />
    </DefaultLayout>
  );
};

export default CMSDevelopment;
