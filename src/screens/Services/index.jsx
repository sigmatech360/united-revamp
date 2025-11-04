import React from "react";

import DefaultLayout from "../../components/DefaultLayout";
import aboutbannerbg from "../../assets/images/mainServices-banner-bg.webp";

import servicesbannerimg from "../../assets/images/services-banner-img.webp";
import servicesaboutimg from "../../assets/images/mainServices-about-img.webp";

import gfxlogo from "../../assets/images/gfx-logo.webp";
import gfxwedev from "../../assets/images/gfx-we-dev.webp";
import gfcvideoanimation from "../../assets/images/gfc-video-animation.webp";
import gfxcontentwriting from "../../assets/images/gfx-content-writing.webp";

import webdesignimg from "../../assets/images/mainServicesweb-design-img.webp";
import photoshopicon from "../../assets/images/photoshop-icon.webp";

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


import adobephotoshopcardbg from "../../assets/images/portfolio/adobe-photoshop-card-bg.webp";

import websitedesignimg1 from "../../assets/images/services-adobePhotosop-portflio-img-1.webp";
import websitedesignimg2 from "../../assets/images/services-adobePhotosop-portflio-img-2.webp";
import websitedesignimg3 from "../../assets/images/services-adobePhotosop-portflio-img-3.webp";
import websitedesignimg4 from "../../assets/images/services-adobePhotosop-portflio-img-4.webp";
import websitedesignimg5 from "../../assets/images/services-adobePhotosop-portflio-img-5.webp";

const gfxServices = [
  { title: "Logo Design", img: gfxlogo },
  { title: "Web Development", img: gfxwedev },
  { title: "Video Animation", img: gfcvideoanimation },
  { title: "Content Writing", img: gfxcontentwriting },
];

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


export const adobePhotoshopSecData = [
  {
    cardBG: adobephotoshopcardbg,
    image: websitedesignimg1,
  },
  {
    cardBG: adobephotoshopcardbg,
    image: websitedesignimg2,
  },
  {
    cardBG: adobephotoshopcardbg,
    image: websitedesignimg3,
  },
  {
    cardBG: adobephotoshopcardbg,
    image: websitedesignimg4,
  },
  {
    cardBG: adobephotoshopcardbg,
    image: websitedesignimg5,
  },
];

import {
  // adobePhotoshopSecData,
  blogsData,
  oneStopWebBoxesData,
  webDesignFaqs,
  webDesignGuidelinesData,
  webDesignSupportData,
  webDesignTestimoialData,
} from "../../data";
import ReactHelmet from "../../components/ReactHelmet";

const Services = () => {
  return (
    <>
      <ReactHelmet
        title="United Web Developers | Services"
        description={`description`}
        keywords="web development, custom website, react development, logo design, digital marketing, social media marketing, web design"
        baseUrl="https://unitedwebdevelopers.com/services"
      />
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

      <OurWorkProcessSec
        className="our-work-process__bgWhite"
        secTitle="Providing Advanced Digital Services"
        secDescription="Here’s how we produce perfection in graphics design so that your brand can take maximum advantage of increasing customer engagement."
        secLastText="Taking the brainstorming session to the next stage, our designers come up with various designing sketches converting thoughts into real images."
        secStepsData={stepsData}
      />

      <OneStopWebSec
        secTitle="Your One-Stop Website Design Agency"
        secDescription="At United Web Developers, we make sure to deliver website services that suit right according to your brand image, making us a dedicated web design agency for you."
        image={oneStopWebImg}
        boxesData={oneStopWebBoxesData}
      />

      <WebDesignSupportSec
        secTitle="Your Partner To Find Complete Web Designing Support"
        secTitleDescription="From custom designs to dedicated support, we are an experienced website design company that takes care of all your project requirements, with ease."
        webDesignSupport={webDesignSupportData}
      />

      <ClientTestimonialSec
        className="bgDark"
        testimonialData={webDesignTestimoialData}
      />

      <FAQSection
        className="bgLight"
        // secHeadrag=""
        title="Frequently Asked Questions"
        description="Common queries you want us to answer about our web design services."
        faqsQA={webDesignFaqs}
      />

      <WebDesignGuidelines
        secTag="WEBSITE DESIGN GUIDELINES"
        secTitle="Our Recipe for Creating Impactful Website Designs"
        secDescription="We take pride in serving our customers with top-of-the-line
                  web designs. Here’s how we do it with perfection in our
                  projects."
        stepData={webDesignGuidelinesData}
      />

      <BlogsSec blogsData={blogsData} />
    </DefaultLayout>
    </>
  );
};

export default Services;
