import React from "react";

import DefaultLayout from "../../components/DefaultLayout";
import aboutbannerbg from "../../assets/images/services-smm-banner-bg.png";

import servicesbannerimg from "../../assets/images/services-banner-img.png";
import servicesaboutimg from "../../assets/images/services-smm-about-img.png";

import gfxlogo from "../../assets/images/gfx-logo.png";
import gfxwedev from "../../assets/images/gfx-we-dev.png";
import gfcvideoanimation from "../../assets/images/gfc-video-animation.png";
import gfxcontentwriting from "../../assets/images/gfx-content-writing.png";

import webdesignimg from "../../assets/images/services-smmPage-img.png";
import photoshopicon from "../../assets/images/smm-icon.png";

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
  { title: "Campaign Management", img: gfxlogo },
  { title: "Performance Analytics", img: gfxwedev },
  { title: "Community Engagement", img: gfcvideoanimation },
  { title: "Content Management", img: gfxcontentwriting },
];

import {
  adobePhotoshopSecData,
  blogsData,
  oneStopWebBoxesData,
  socialMediaFaqs,
  socialMediaTestimoialData,
  webDesignGuidelinesData,
  webDesignSupportData,
} from "../../data";

const stepsData = [
  {
    stepNum: "01",
    stepName: "Breaf",
    stepDescription:
      "We start by understanding your business goals, target audience, and brand tone. This helps us shape a social media marketing strategy that’s specific to your business.",
  },
  {
    stepNum: "02",
    stepName: "Ideation",
    stepDescription:
      "Our team brainstorms creative campaign ideas, content themes, and messaging that resonates with your brand.",
  },
  {
    stepNum: "03",
    stepName: "Sketch",
    stepDescription:
      "We build a content calendar, design post templates, write copy, and outline ad funnels. Everything is prepped to keep your brand consistent and relevant.",
  },
  {
    stepNum: "04",
    stepName: "Execution",
    stepDescription:
      "We run your social media campaigns and monitor, backed by data and creativity.",
  },
  {
    stepNum: "05",
    stepName: "Optimization & Delivery",
    stepDescription:
      "We monitor performance, fine-tune campaigns, and send detailed reports so you always know what’s working and where to scale.",
  },
];

const SocialMediaMarketing = () => {
  return (
    <DefaultLayout>
      <ServicesBanner
        bgImage={aboutbannerbg}
        // leftColClass="col-lg-7"
        // rightColClass="col-lg-5"
        title="Turn Engagement Into Sales With <span class='colorYellow'>Social Media Marketing</span>"
        description="Take a step beyond just posting. Our strategies are designed to create meaningful content that’s engaging enough to convert and bring revenue."
        cta1="Talk To Us"
        cta2="Show Us Your Project"
        // servicesbannerimg={servicesbannerimg}
      />

      <ServicesAboutSec
        image={servicesaboutimg}
        title="Your Next-Gen Social Media Marketing Agency"
        description="Social Media Marketing is the modern driver of business growth. Through effective social media marketing, we assist companies of all sizes in creating vibrant online communities, boosting engagement, and producing tangible outcomes. We develop strategies that draw in, convert, and retain visitors on social media sites including Facebook, Instagram, LinkedIn, TikTok, and more. Connect with us and make your social media work for you."
      />

      <GraphicDesignAgency
        className="servicesGDA"
        secTag="WEBSITE DESIGN COMPANY"
        secTitle="Personlized Social Media Marketing Solutions"
        secHeadDescription="We help your brand move forward with a full spectrum of services that are designed to cover everything your brand needs to grow. With us, you’ve got your digital front covered."
        // viewAllServices
        gfxServices={gfxServices}
        gfxLastDescription="Our team of skilled social media marketing experts knows exactly how to craft content, create conversations, and run campaigns that convert. With years of experience in managing brand presence across platforms like Instagram, Facebook, X, LinkedIn, TikTok, YouTube and more, we help you show up consistently, strategically, and successfully. Let us help you manage social media so that you can focus on your core business."
        // gfxLastImgs
        gfxLastImage={webdesignimg}
      />

      <ServicePowerfullTool
        secTitle="Results That Speak for Themselves"
        secDescription="As a trusted social media marketing agency in the USA, we've successfully delivered numerous projects across various industries, helping businesses grow their reach, boost engagement, and convert clicks into customers."
        toolIcon={photoshopicon}
        toolName="Social Media Marketing"
        toolNameDesc="Our tools? Strategy, creativity, and consistency. From content management to running high-converting social media advertising campaigns, our team combines expertise with real-time data to ensure every post, ad, and reply works in your favour."
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
        secTitle="How We Deliver High-Converting Social Media Marketing Results"
        secDescription="Our strategy is designed to maximize visibility, boost engagement, and drive growth. Here’s how  we do it:"
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
        title="What Our Clients Say About Working With Us"
        description=""
        testimonialData={socialMediaTestimoialData}
        // className="bgDark"
      />

      <FAQSection
        // className="bgLight"
        secHeadrag="Got Any Questions?"
        title="Got Any Questions?"
        description="We’ve Got All Your Answers"
        faqsQA={socialMediaFaqs}
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

export default SocialMediaMarketing;
