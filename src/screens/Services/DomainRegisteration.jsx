import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import ServicesBanner from "../../components/ServicesBanner";
import DomainSearchPrice from "../../components/DomainSearchPrice";
import herobanner from "../../assets/images/services/domainregisteration/herobanner.webp";
import herobannerinnerimg from "../../assets/images/services/domainregisteration/herobanner-inner.svg";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import aboutimg from "../../assets/images/services/domainregisteration/aboutimg.svg";
import chooseimg from "../../assets/images/services/domainregisteration/readytransfer.webp";
import DomainRegisterationServices from "../../components/DomainRegisterationServices";
import DomainRegisterProcess from "../../components/DomainRegisterProcess";
import LocationContact from "../../components/LocationContact";
import ServiceFaqs from "../../components/ServiceFaqs";
import TabsPricing from "../../components/TabsPricing";
import { dynamictabsData } from "../../data";
import HomeBlogsSec from "../../components/HomeBlogsSec";
import DomainRegisterationChoose from "../../components/DomainRegisterationChoose";
import HostingBoxes from "../../components/HostingBoxes";

const DomainRegisteration = () => {

     const faqsData = [
    {
      header: "What makes United Web Developers different from other front-end agencies?",
      content:
        "We don’t just code what you imagine; we translate your ideas into fast, functional, and flawlessly responsive interfaces that actually convert visitors into customers.",
    },
    {
      header: "Do you provide front-end development for all devices and screen sizes?",
      content:
        "Absolutely, every project is built with responsive architecture to ensure pixel-perfect visuals and optimal performance across mobile devices, tablets, desktops, and ultra-wide screens.",
    },
    {
      header: "Which technologies do you specialize in for front-end development?",
      content:
        "We specialize in React, Angular, and Vue.js front-end development in USA, delivering sleek, scalable, and high-performing user interfaces that work flawlessly across browsers and platforms.",
    },
    {
      header: "Can you optimize my website for SEO, AEO, and GEO performance?",
      content:
        "Yes, we craft code structures and content layouts optimized for Search Engines, Answer Engines (AEO), and Geo-targeted SEO, so your site ranks higher and loads smarter.",
    },
    {
      header: "How long does a typical front-end development project take?",
      content:
        "Project timelines depend on scope and complexity, but most front-end builds are completed within 4-8 weeks, including testing, optimization, and revisions.",
    },
    {
      header: "What other web development platforms do you work on?",
      content:
        "Whatever you need, we can design, develop, and deploy with precision. From CMS to offering custom solutions, we offer all IT-related services.",
    },
  ];




  return (
    <>
      <DefaultLayout>
        <ServicesBanner
          secClass="app-florida-herobanner doomain-registeration-herobanner"
          bgImage={herobanner}
          title="E-Commerce Websites that Become Your Brand’s Best Salesperson"
          description="A powerful e-commerce website is made to scale with an impact. We list your products and make sure all of them sell. At United Web Developers, we specialize in e-commerce website development that transforms visitors into loyal customers. From sleek design to simple checkouts, we build online stores that help you start selling today."
          servicesbannerimg={herobannerinnerimg}
          cta1="Start Selling Today"
          cta2="hehe"
        />

        <DomainSearchPrice />

        <WordPressPerformanceSection
          reverse
          minihead="About Us"
          miniheadclass="minihead"
          secTitle1="Known For Our E-Commerce Web Expertise"
          secTitle2="Across the USA"
          description="We’re an e-commerce website development company in USA that blends creativity with code to deliver measurable business results. Every store we build is fast, functional, and fully optimized for conversions."
          image={aboutimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="More About United Web Developers"
          aboutbtnlink="/contact-us"
          learnmorebtn="theme-btn theme-btn__yellow"
        />

        <DomainRegisterationServices/>


        <DomainRegisterProcess/>


         <DomainRegisterationChoose/>


        <WordPressPerformanceSection
          minihead="About Us"
          miniheadclass="minihead"
          secTitle1="Known For Our E-Commerce Web Expertise"
          secTitle2="Across the USA"
          description="We’re an e-commerce website development company in USA that blends creativity with code to deliver measurable business results. Every store we build is fast, functional, and fully optimized for conversions."
          image={chooseimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="More About United Web Developers"
          aboutbtnlink="/contact-us"
          learnmorebtn="theme-btn theme-btn__yellow"
        />

      <HostingBoxes/>


         <LocationContact
          secClass="wordpress-contact-sec"
          minihead="Connect with Us"
          mainhead="Want to Spike Up your Sales?"
          secPara="Have a question? Want to show us your project? Or simply curious? Talk to us and we’ll show you the possibilities you can unlock with frontend development."
          btntxt="Talk to Us"
        />

         <ServiceFaqs
          minihead="Frequently Asked Questions"
          mainhead="All Your Frontend-Related Questions Answered Here!"
          mainpara="Swipe through our FAQs section to find all your answers. If you can’t find what you're looking for, please fill out the form and ask away. We’re sure you’ll find your answers and more with us!"
          faqsData={faqsData}
        />

        <TabsPricing
          secClass="tab-pricing-bg"
          minihead="Pricing Plans"
          mainhead="Select the Right Tech-Stack for Your Brand"
          secPara="The right design has the power to increase your sales by 10x… literally! If you’re a startup or an enterprise, select the right pricing model and see how your sales can skyrocket just with great designs"
          tabsData={dynamictabsData}
        />

        <HomeBlogsSec
          blogminihead="Blogs & More"
          blogSecTitle="Frontend Trends, Tools, and Tech - Straight from the Developers"
          blogSubtext="ead our blogs to stay up-to-date about all the new tech stacks being launched and how they can help you!"
          // blogsData={blogsData}
          // categorySlug="custom-website-development"
        />

      </DefaultLayout>
    </>
  );
};

export default DomainRegisteration;
