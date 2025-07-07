import React from "react";

import DefaultLayout from "../../components/DefaultLayout";
import aboutbannerbg from "../../assets/images/services-seo-banner-bg.webp";

import servicesbannerimg from "../../assets/images/services-banner-img.webp";
import servicesaboutimg from "../../assets/images/services-seo-about-img.webp";

import gfxlogo from "../../assets/images/gfx-logo.webp";
import gfxwedev from "../../assets/images/gfx-we-dev.webp";
import gfcvideoanimation from "../../assets/images/gfc-video-animation.webp";
import gfxcontentwriting from "../../assets/images/gfx-content-writing.webp";

import webdesignimg from "../../assets/images/services-seoPage-img.webp";
import photoshopicon from "../../assets/images/seo-icon.webp";

import oneStopWebImg from "../../assets/images/one-stop-website-img.webp";

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


import responsivenss from "../../assets/images/icons/search-engine-optimization/on-page-Seo.webp";
import offpageseo from "../../assets/images/icons/search-engine-optimization/off-page-seo.webp";
import localseo from "../../assets/images/icons/search-engine-optimization/local-seo.webp";
import StratgeyResearch from "../../assets/images/icons/search-engine-optimization/Stratgey-Research.webp";

const gfxServices = [
  { title: "On-Page SEO", img: responsivenss },
  { title: "Off-page SEO", img: offpageseo },
  { title: "Local SEO", img: localseo },
  { title: "Strategy & Research", img: StratgeyResearch },
];

import {
  adobePhotoshopSecData,
  blogsData,
  customDevelopmentTestimoialData,
  customWebFaqs,
  oneStopWebBoxesData,
  seoFaqs,
  seoServicesTestimoialData,
  webDesignGuidelinesData,
  webDesignSupportData,
} from "../../data";
import ReactHelmet from "../../components/ReactHelmet";

const stepsData = [
  {
    stepNum: "01",
    stepName: "Research & strategy",
    stepDescription: "",
  },
  {
    stepNum: "02",
    stepName: "Content Creation",
    stepDescription: "",
  },
  {
    stepNum: "03",
    stepName: "On-page optimization",
    stepDescription:
      "Search Engines won’t recognize you unless you put in real effort. Every part of our seo strategy is planned to increase visibility within your audience.",
  },
  {
    stepNum: "04",
    stepName: "Off-page optimization",
    stepDescription: "",
  },
  {
    stepNum: "05",
    stepName: "Tracking",
    stepDescription: "",
  },
];

const SEO = () => {
  return (
    <>
    <ReactHelmet
        title="Search Engine Optimization That Grows Your Business Fast"
        description={`Boost visibility and traffic with expert Search Engine Optimization. Get custom SEO strategies that deliver real results. Rank higher-start growing today!`}
        keywords="web development, custom website, react development, logo design, digital marketing, social media marketing, web design"
        // url="https://unitedwebdevelopers.com/search-engine-optimization"
      />
    <DefaultLayout footerTitle="Higher Visibility, Higher Traffic, & Higher Rankings. </br>We Make It <span class='colorYellow'>Easy For You.</span>">
      <ServicesBanner
        bgImage={aboutbannerbg}
        // leftColClass="col-lg-7"
        // rightColClass="col-lg-5"
        title="Search Engine Optimization That Ranks You High!"
        description="Get ready for increased visibility and targeted traffic. Our SEO services guarantee better rankings on search engines and more exposure for your business."
        // servicesbannerimg={servicesbannerimg}
      />

      <ServicesAboutSec
        image={servicesaboutimg}
        title="For Visibility Across The Web & Traffic From Your Audience. "
        description="Our Search Engine Optimization Agency focuses on understanding your audience’s behavior, preferences, and search intent. For each project, we conduct in-depth research and perform effective targeting, increasing your organic visibility and driving relevant traffic to your website, which ensures real engagement and long-term results. The seo services USA we provide include our strategists brainstorming what optimization techniques will work best for your niche. "
      />

      <GraphicDesignAgency
        className="servicesGDA"
        secTag="RANK YOUR WEBSITE"
        secTitle="Your Pages Optimized for Search Engine Perfection"
        secHeadDescription="Every page of your website gets optimized for better ranking, visibility, and performance. From keywords to technical SEO, we ensure your site is search engine-ready. Here’s what we include in our SEO:"
        // viewAllServices
        gfxServices={gfxServices}
        gfxLastDescription="Every strategy we craft is more than just optimization. It reflects your brand’s goals, audience behavior, and digital presence. Our approach combines in-depth research with smart SEO techniques to boost your visibility where it matters most. We don’t just chase rankings; we target the right audience with content and structure that search engines trust. The result? Long-term, organic growth that brings qualified traffic and measurable success."
        // types=
        // gfxLastImgs
        gfxLastImage={webdesignimg}
      />

      <ServicePowerfullTool
        secTitle="The Results Even Search Engines Can’t Deny!"
        secDescription="Our SEO strategies produce measurable results. With higher rankings, organic traffic, and improved conversions, your site will show up in front of the right audience, driving growth for your business."
        toolIcon={photoshopicon}
        toolName="Search Engine Optimization"
        toolNameDesc="Our Search Engine Optimization Marketing isn't only a promise; we bring results that you can count on! Our clients experience increased visibility, better traffic, and ultimately a higher ROI. We work with you to boost your digital presence effectively"
        // toolDesignerAvailable="2 Photoshop designers are available for hiring"
        usagePercent="95%%"
        usage="Retention rate"
        rank="200+"
        highlightText="Successful SEO campaigns"
        cta="Discuss Your Project"
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
        secTitle="Strategic SEO Services To Rank You High"
        secDescription="We take a structured approach to SEO, ensuring that every step is aligned with your growth goals, improving your site’s search engine performance."
        secLastText="Search Engines won’t recognize you unless you put in real effort. Every part of our seo strategy is planned to increase visibility within your audience."
        secStepsData={stepsData}
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
        title="Listen From The Clients Who Ranked With Us"
        description="We help businesses like yours reach higher rankings and improve their online presence. Hear from our clients on how our SEO services made a difference."
        testimonialData={seoServicesTestimoialData}
        // className="bgDark"
      />

      <FAQSection
        // className="bgLight"
        secHeadrag="FREQUENTLY ASKED QUESTIONS"
        title="We Are Here To Answer Your Queries"
        description="Following are some of the questions we often come across related to our seo services"
        faqsQA={seoFaqs}
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
        // blogsData={blogsData}
        categorySlug="search-engine-optimization"
      />
    </DefaultLayout>
    </>
  );
};

export default SEO;
