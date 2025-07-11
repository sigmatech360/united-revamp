import React from "react";

import DefaultLayout from "../../components/DefaultLayout";
import aboutbannerbg from "../../assets/images/services-logoDesign-banner-bg.webp";

import servicesbannerimg from "../../assets/images/services-logoDesign-banner-img.webp";
import servicesaboutimg from "../../assets/images/services-logoDesign-about-img.webp";

import gfxlogo from "../../assets/images/gfx-logo.webp";
import gfxwedev from "../../assets/images/gfx-we-dev.webp";
import gfcvideoanimation from "../../assets/images/gfc-video-animation.webp";
import gfxcontentwriting from "../../assets/images/gfx-content-writing.webp";



import webdesignimg from "../../assets/images/services-logoDesignPage-img.webp";
import photoshopicon from "../../assets/images/logo-design-icon.webp";

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


import AbstractLogo from "../../assets/images/icons/logo-design/Abstract-Logo.webp";
import WordmarkLogo from "../../assets/images/icons/logo-design/Wordmark-Logo.webp";
import PictorialLogo from "../../assets/images/icons/logo-design/Pictorial-Logo.webp";
import MascotLogo from "../../assets/images/icons/logo-design/Mascot-Logo.webp";
import BrandMarkLogo from "../../assets/images/icons/logo-design/Brand-Mark-Logo.webp";
import Emblems from "../../assets/images/icons/logo-design/Emblems.webp";
import monogramLogo from "../../assets/images/icons/logo-design/monogram-Logo.webp";
import Logo3d from "../../assets/images/icons/logo-design/3d-Logo.webp";

const gfxServices = [
  { title: "Abstract Logos", img: AbstractLogo },
  { title: "WordMark Logos", img: WordmarkLogo },
  { title: "Pictorial Mark Logos", img: PictorialLogo },
  { title: "Mascot Logoss", img: MascotLogo },
  { title: "Brand Mark Logo", img: BrandMarkLogo },
  { title: "Emblems", img: Emblems },
  { title: "Monogram Logos", img: monogramLogo },
  { title: "3D Logos", img: Logo3d },
];

import {
  adobePhotoshopSecData,
  blogsData,
  logoDesignGuidelinesData,
  logoFaqs,
  logosTestimoialData,
  oneStopWebBoxesData,
  servicesLogoDesignPortfolioData,
  webDesignGuidelinesData,
  webDesignSupportData,
} from "../../data";
import ReactHelmet from "../../components/ReactHelmet";

const stepsData = [
  {
    stepNum: "01",
    stepName: "Brainstorming",
    stepDescription: "",
  },
  {
    stepNum: "02",
    stepName: "Sketching",
    stepDescription: "",
  },
  {
    stepNum: "03",
    stepName: "Digital Visualization",
    stepDescription:
      "A great logo design isn’t the one that looks pretty, it should be specific to your audience, it should speak your message, and compel to discover more. ",
  },
  {
    stepNum: "04",
    stepName: "Feedback",
    stepDescription: "",
  },
  {
    stepNum: "05",
    stepName: "Finalization",
    stepDescription: "",
  },
]; 

const LogoDesign = () => {
  return (
    <>
      <ReactHelmet
        title="Creative Logo Design That Defines Your Brand Identity"
        description={`Stand out with professional Creative Logo Design that reflects your brand's essence. Get custom logos crafted to inspire trust and boost recognition today`}
        keywords="web development, custom website, react development, logo design, digital marketing, social media marketing, web design"
        // url="https://unitedwebdevelopers.com/logo-design"
      />
    <DefaultLayout footerTitle="Be Iconic. Start With a </br><span class='colorYellow'>Custom Logo Design</span> That Stands Out.">
      <ServicesBanner
        bgImage={aboutbannerbg}
        // leftColClass="col-lg-7"
        // rightColClass="col-lg-5"
        title="Creative Logo Design For YOUR Business"
        description="Make a bold first impression with our <span class='colorYellow'>Professional logo design</span> services. We ensure that your logo sparks interest, tells a story, and looks exceptional.  "
        servicesbannerimg={servicesbannerimg}
      />

      <ServicesAboutSec
        image={servicesaboutimg}
        title="Our Custom Logo Designs Speak Volumes"
        description="A great business logo design does more than look good; it communicates your brand’s story effectively to the viewers at a glance. At United Web Developers, we craft logos that are memorable, meaningful, and aligned with your brand voice. Our custom logo design process ensures every pixel reflects your identity."
      />

      <GraphicDesignAgency
        className="servicesGDA"
        secTag="LOGO DESIGN COMPANY"
        secTitle="Our Diversity in Logo Design Services"
        secHeadDescription="We offer versatile logo design services that bring your brand vision to life with a story to tell."
        // viewAllServices
        gfxServices={gfxServices}
        gfxLastDescription="Every logo we create is more than just a graphic. it's a representation of your brand’s values, voice, and visual identity. Our approach combines creative thinking with strategic branding to craft logos that are not only eye-catching but also meaningful. We design symbols that are instantly recognizable and built to leave a lasting impression on your audience."
        // gfxLastImgs
        gfxLastImage={webdesignimg}
      />

      <ServicePowerfullTool
        secTitle="A Great Logo Design Creates A Legacy Of Results"
        secDescription="Logos are the face of your business; if it's right, your brand stays unforgettable. Our professional logo design team understands the psychology behind design and branding."
        toolIcon={photoshopicon}
        toolName="Logo Design"
        toolNameDesc="Whether you need a fresh identity or a logo design for a website, our approach guarantees clarity, creativity, and commercial success with every design. The numbers speak for themselves. "
        toolDesignerAvailable="2 Photoshop designers are available for hiring"
        usagePercent="40%"
        usage="increase in Visibility"
        rank="500+"
        highlightText="Creative Logo Designs"
      />

      <AdobePhotoshopSec
        secTitle="View Our Best Logo Design Creations"
        secTitleDescription="From startups to established brands, our logo design company has delivered thousands of successful logo projects."
        secSubTitle="Logo Design"
        secSubTitleDescription="Our designs aren’t just creative. We ensure they’re strategically made to match your business. Explore our portfolio to see how we’ve helped businesses stand out with custom business logo design solutions."
        servicesData={servicesLogoDesignPortfolioData}
      />

      <OurWorkProcessSec
        className="our-work-process__bgWhite"
        secTitle="A Glimpse Into Our Professional Logo Design Process"
        secDescription="We follow a refined step-by-step process to ensure each logo is purposeful and polished, and matches your brand tone."
        secLastText="A great logo design isn’t the one that looks pretty, it should be specific to your audience, it should speak your message, and compel to discover more."
        // secLastText="Taking the brainstorming session to the next stage, our designers come up with various designing sketches converting thoughts into real images."
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
        className="bgDark"
        title="Reviews Of Our Custom & Business Logo Design Services"
        description="Hear from clients who trusted us to create their brand identity."
        testimonialData={logosTestimoialData}
      />

      <FAQSection
        className="bgLight"
        // secHeadrag=""
        title="Frequently Asked Questions"
        description="Got Questions? We are happy to answer!"
        faqsQA={logoFaqs}
      />

      <WebDesignGuidelines
        secTag="LOGO DESIGN SERVICES GUIDELINES"
        secTitle="How We Make Our Logos Exceptional"
        secDescription="We blend creativity, research, and feedback to craft exceptional logo design experiences that build iconic brand identities."
        stepData={logoDesignGuidelinesData}
      />

      <BlogsSec
        blogSecTitle="Discover The Recent Trends And Insights In Our Blogs!"
        blogSubtext="Stay in touch with what the world’s doing, learn new skills and facts, and engage with our experts on our blogs"
        // blogsData={blogsData}
        categorySlug="logo-designing"
      />
    </DefaultLayout>
    </>
  );
};

export default LogoDesign;
