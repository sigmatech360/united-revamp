import React from "react";

import DefaultLayout from "../../components/DefaultLayout";
import aboutbannerbg from "../../assets/images/servicesWebDesign-banner-bg.webp";

import servicesbannerimg from "../../assets/images/services-webDesign-banner-img.webp";
import servicesaboutimg from "../../assets/images/services-webDesign-about-img.webp";

import gfxlogo from "../../assets/images/gfx-logo.webp";
import gfxwedev from "../../assets/images/gfx-we-dev.webp";
import gfcvideoanimation from "../../assets/images/gfc-video-animation.webp";
import gfxcontentwriting from "../../assets/images/gfx-content-writing.webp";

import webdesignimg from "../../assets/images/services-webDesignPage-img.webp";
import photoshopicon from "../../assets/images/web-design-icon.webp";

import oneStopWebImg from "../../assets/images/services-webDesign-oneStopImg.webp";

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

import modernlayoutthatenage from "../../assets/images/icons/web-design/modern-layout-that-enage.webp";
import brandcentric from "../../assets/images/icons/web-design/brand-centric.webp";
import typography from "../../assets/images/icons/web-design/typography.webp";
import responsivenss from "../../assets/images/icons/web-design/responsivenss.webp";

const gfxServices = [
  { title: "Modern Layouts That Engage", img: modernlayoutthatenage },
  { title: "Brand-Centric Color Palettes", img: brandcentric },
  { title: "Unique Typography ", img: typography },
  { title: "Responsiveness", img: responsivenss },
];

import {
  oneStopWebBoxesData,
  webDesignGuidelinesData,
  servicesWebDesignSupportData,
  servicesWebDesignPortfolioData,
  oneStopWebDesignBoxesData,
  webDesignTestimoialData,
  webDesignFaqs,
  blogsData,
} from "../../data";


import ReactHelmet from "../../components/ReactHelmet";

const stepsData = [
  {
    stepNum: "01",
    stepName: "Brief",
    stepDescription:
      "We begin by understanding your business goals, audience, and vision to form the foundation of your custom website design.",
  },
  {
    stepNum: "02",
    stepName: "Ideation",
    stepDescription:
      "Our team brainstorms and conceptualizes modern layouts and features tailored to your brand identity and functionality needs.",
  },
  {
    stepNum: "03",
    stepName: "Sketch",
    stepDescription:
      "Wireframes and mockups are created to visualize the site structure, ensuring your site layout aligns with UX design and user flow.",
  },
  {
    stepNum: "04",
    stepName: "Execution",
    stepDescription:
      "We bring your vision to life using cutting-edge tools and responsive frameworks for optimized performance on all devices.",
  },
  {
    stepNum: "05",
    stepName: "Deliver",
    stepDescription:
      "After thorough testing and feedback, we launch your website, which is visually stunning, SEO friendly, and built to convert.",
  },
]; 

const WebDesign = () => {
  return (
    <>
      <ReactHelmet
        title="Affordable Web Design Services | United Web Developers"
        description={`Discover Professional Web Design Services | United Web Developers. Enhance your online presence with custom web designs. Get started with us today!`}
        keywords="web development, custom website, react development, logo design, digital marketing, social media marketing, web design"
        baseUrl="https://unitedwebdevelopers.com/web-design"
      />
    <DefaultLayout>
      <ServicesBanner
        bgImage={aboutbannerbg}
        // leftColClass="col-lg-7"
        // rightColClass="col-lg-5"
        title="Web Designs That Are Engaging Enough To Convert"
        description="Custom website designs that are aesthetic enough to make visitors scroll, turning clicks into customers"
        cta1="Talk To Us"
        cta2="Show Us Your Project"
        servicesbannerimg={servicesbannerimg}
      />

      <ServicesAboutSec
        image={servicesaboutimg}
        title="Expert Web Design Services"
        description="Your website design says a lot about your brand. At United Web Developers, a leading web design agency, we understand the importance of making a good impression on your visitors with a custom website design created by experts in SEO services, website development and graphic design. Whether you’re looking for an affordable solution or custom design, our team will create engaging website designs that look good and resonate with your brand"
      />

      <GraphicDesignAgency
        className="servicesGDA"
        secTag="WEBSITE DESIGN COMPANY"
        secTitle="Website Design That Covers Every Creative Need"
        secHeadDescription="We help businesses unlock their potential through website designs that reflect their brand message. We go beyond pre-built templates to deliver truly custom solutions built for performance and personality. Here’s what sets our designs apart:"
        // viewAllServices
        gfxServices={gfxServices}
        gfxLastDescription="Your website is the digital face of your brand; it’s where first impressions are made and decisions begin. A thoughtfully designed website works hard behind the scenes to guide users, tell your story, and drive real business results. Through intuitive UI design and mobile responsiveness, every element should align with your goals and customer expectations"
        // gfxLastImgs
        gfxLastImage={webdesignimg}
      />

      <ServicePowerfullTool
        secTitle="Powerful Tools for Successful Web Design Services"
        secDescription="Our web designs are driven by trendy designs and technology that empowers creativity, ensuring functionality. Whether it’s a custom website design or a full-scale responsive web design, our toolkit allows us to build user-first experiences that look great and perform flawlessly across all platforms."
        toolIcon={photoshopicon}
        toolName="Website Design"
        toolNameDesc="From banner layouts and UI components to responsive website designs, our skilled team leverages Photoshop to meet complex website design needs with pixel-perfect accuracy."
        // toolDesignerAvailable="2 Photoshop designers are available for hiring"
        usagePercent="98%"
        usage="Success Rate"
        rank="500+"
        highlightText="Projects Completed"
      />

      <AdobePhotoshopSec
        secTitle="Our Large Portfolio Filled With Creativity"
        secTitleDescription="We love to create website designs that are aesthetic enough to make your visitors click more and scroll away."
        secSubTitle="Responsive Web Designs"
        secSubTitleDescription="Visitors love responsive and clean web design. Our website design services optimize your website to function perfectly across all devices: mobile, tablet, and desktop."
        servicesData={servicesWebDesignPortfolioData}
      />

      <OurWorkProcessSec
        className="our-work-process__bgWhite"
        secTitle="Web Design Workflow That Converts"
        secDescription="We follow a proven five-step process that helps in creativity, strategy, and flawless execution."
        secStepsData={stepsData}
        secLastText="Turning ideas into impact, we craft custom websites that look stunning, work seamlessly, and drive real results from day one."
      />

      <OneStopWebSec
        secTitle="Top-Notch Website Design Agency"
        secDescription="Our website design services in the USA use the latest search engine optimization (SEO) and user experience (UX) best practices to create mockups and website layouts tailored to any business and industry. We are not just website designers; we are a full-service web design company dedicated to your success."
        image={oneStopWebImg}
        boxesData={oneStopWebDesignBoxesData}
      />

      <WebDesignSupportSec
        secTitle="Your Full-Service Web Design Agency for Attractive Illustrations"
        secTitleDescription="From custom designs to dedicated support, we are an experienced website design company that takes care of all your project requirements, with ease."
        webDesignSupport={servicesWebDesignSupportData}
      />

      <ClientTestimonialSec
        className="bgDark"
        title="Trusted By The Brands Who Expect The Best"
        description="We consider our customers the cornerstone of our success. See why our clients consistently trust and recommend us for exceptional service."
        testimonialData={webDesignTestimoialData}
      />

      <FAQSection
        className="bgLight"
        // secHeadrag=""
        title="Frequently Asked Questions"
        description="Common queries you want to know the answer to:"
        faqsQA={webDesignFaqs}
      />

      <WebDesignGuidelines
        secTag="Web Design Essentials"
        secTitle="End-To-End Website Design Services For All Needs"
        secDescription="We design websites that don’t just look good, but are optimized for performance. Here’s how we combine creativity and strategy to create high-converting web experiences:"
        stepData={webDesignGuidelinesData}
      />

      <BlogsSec
        blogSecTitle="Discover The Recent Trends And Insights In Our Blogs!"
        blogSubtext="Stay in touch with what the world’s doing, learn new skills and facts, and engage with our experts on our blogs"
        // blogsData={blogsData}
        categorySlug="custom-website-development"
      />
    </DefaultLayout>
    </>
  );
};

export default WebDesign;
