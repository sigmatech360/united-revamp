import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import ReactHelmet from "../../components/ReactHelmet";
import ServicesBanner from "../../components/ServicesBanner";
import herobanner from "../../assets/images/services/ecommercedevelopment/herobanner.webp";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import aboutimg from "../../assets/images/services/ecommercedevelopment/about.webp";
import whychoose1 from "../../assets/images/services/ecommercedevelopment/bulb.svg";
import whychoose2 from "../../assets/images/services/ecommercedevelopment/target.svg";
import whychoose3 from "../../assets/images/services/ecommercedevelopment/support.svg";
import EcommercePortfolio from "../../components/EcommercePortfolio";
import OurWorkProcessSec from "../../components/OurWorkProcessSec";
import LocationContact from "../../components/LocationContact";
import ServiceFaqs from "../../components/ServiceFaqs";
import TabsPricing from "../../components/TabsPricing";
import { dynamictabsData } from "../../data";
import HomeBlogsSec from "../../components/HomeBlogsSec";
import EcommerceServices from "../../components/EcommerceServices";
import service1 from "../../assets/images/services/ecommercedevelopment/service-1.webp";
import service2 from "../../assets/images/services/ecommercedevelopment/service-2.webp";
import service3 from "../../assets/images/services/ecommercedevelopment/service-3.webp";
import service4 from "../../assets/images/services/ecommercedevelopment/service-4.webp";
import service5 from "../../assets/images/services/ecommercedevelopment/service-5.webp";
import chooseimg from "../../assets/images/services/ecommercedevelopment/chooseimg.webp";

const EcommerceDevelopment = () => {
  const webwhylist = [
    {
      img: whychoose1,
      title: "Smartly-Thought Designs:",
      text: "Every layout and product page is strategically designed to increase purchase intent.",
    },
    {
      img: whychoose2,
      title: "Strategic Interfaces: ",
      text: "Grow confidently with sites built to handle traffic, sales, and expansion.",
    },
    {
      img: whychoose3,
      title: "Enhanced Customer Interactions: ",
      text: "We utilize analytics to refine your e-commerce strategy and enhance every customer interaction.",
    },
  ];

  const stepsData = [
    {
      stepNum: "01",
      stepName: "Discovery & Strategy",
      stepDescription: "We start by understanding your goals and mapping a personalized e-commerce website development plan built to deliver real growth.",
    },
    {
      stepNum: "02",
      stepName: "Design & Prototyping",
      stepDescription: "We create intuitive, mobile-friendly layouts that simplify buying and build trust instantly.",
    },
    {
      stepNum: "03",
      stepName: "Development & Integration",
      stepDescription:
        "Our e-commerce website developers USA build secure, high-performing sites with seamless payment and product integrations.",
    },
    {
      stepNum: "04",
      stepName: "Testing & Optimization",
      stepDescription: "We ensure flawless performance across all devices and browsers before launch.",
    },
    {
      stepNum: "05",
      stepName: "Launch & Support",
      stepDescription: "Once live, our ongoing support keeps your e-commerce platform running smoothly and efficiently.",
    },
  ];

  const faqsData = [
    {
      header:
        "What’s included in your e-commerce website development services USA?",
      content:
        "We handle everything from UI/UX design and product setup to payment integration, SEO, and ongoing maintenance.",
    },
    {
      header: "How long does it take to build an e-commerce website?",
      content:
        "Most e-commerce websites take 4-6 weeks to build, depending on design complexity, product volume, and required custom features.",
    },
    {
      header:
        "Do you provide SEO for e-commerce websites?",
      content:
        "Yes, we provide SEO for e-commerce websites. Every site we develop includes on-page SEO to help you rank higher and attract organic traffic.",
    },
    {
      header: "Can you migrate my existing online store?",
      content:
        "Absolutely, web migration is our core expertise. We migrate your store safely to a new platform without losing functionality, rankings, or data.",
    },
    {
      header: "What makes you a top e-commerce website developer USA?",
      content:
        "Our team combines strategic design, clean code, and marketing insight to build high-converting online stores.",
    },
    {
      header: "Why should I choose United Web Developers over others?",
      content:
        "We don’t just build websites, we build digital storefronts that drive measurable sales and long-term brand growth.",
    },
  ];

  const ecommerceservice = [
    {
      img: service1,
      title: "Front-End Development",
    },
    {
      img: service2,
      title: "Back-End Development",
    },
    {
      img: service3,
      title: "Website Development",
    },
     {
      img: service4,
      title: "Content Writing",
    },
     {
      img: service5,
      title: "SEO Services",
    },
     {
      img: service3,
      title: "Website Designing",
    },
  ];

  return (
    <>
      <ReactHelmet
        title="E-Commerce Website Development USA | United Web Developers"
        description="At United Web Developers, we build fast and scalable e-commerce websites across the USA, driving more sales with high-performing online store development."
        keywords="e-commerce website development services usa, e commerce website development usa, e-commerce website development company usa, e commerce website developer usa, e-commerce website development agency usa"
        baseUrl="https://unitedwebdevelopers.com/ecommerce-development"
      />

      <DefaultLayout>
        <ServicesBanner
          secClass="app-florida-herobanner ecommerce-pg-herobanner"
          bgImage={herobanner}
          title="E-Commerce Websites that Become Your Brand’s Best Salesperson"
          description="A powerful e-commerce website is made to scale with an impact. We list your products and make sure all of them sell. At United Web Developers, we specialize in e-commerce website development that transforms visitors into loyal customers. From sleek design to simple checkouts, we build online stores that help you start selling today."
          cta1="Start Selling Today"
          cta2="hehe"
        />

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

        <EcommerceServices
          minihead="More of Our Services"
          mainhead="These Services Back Our E-Commerce Expertise"
          mainpara="Our specialized development and marketing services strengthen your online store’s performance, visibility, and scalability for long-term success."
          cards={ecommerceservice}
        />

        <WordPressPerformanceSection
          wordpresssecclass="WordPressPerformanceSection wordpress-choose-listsec"
          minihead="Why Choose Us?"
          miniheadclass="minihead"
          secTitle1="Our E-Commerce Websites Thrive"
          secTitle2="On Technical Precision"
          description="We’re a trusted e-commerce website development agency USA known for combining technology, strategy, and creativity. Our websites are designed with a funnel strategy, where each page is intentionally built to drive sales."
          image={chooseimg}
          whyChooseItems={webwhylist}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Learn More About Our Expertise"
          aboutbtnlink="/contact"
          learnmorebtn="d-none"
        />

        <EcommercePortfolio />

        <OurWorkProcessSec
          className="our-work-process__bgWhite"
          secTag="How it Works"
          secTitle="The Brain Behind Making Your Sales Flow"
          secDescription="Our e-commerce website development process is built on strategy, creativity, and technical mastery. Every step is designed to help your store perform better, sell faster, and scale effortlessly. "
          secLastText="We effectively work on each step to build a high-quality E-Commerce store. Once live, our team offers ongoing support to keep your e-commerce platform running smoothly and efficiently in the long run."
          secStepsData={stepsData}
        />

        <LocationContact
          secClass="wordpress-contact-sec"
          minihead="Contact Us:"
          mainhead="Sell Smoothly, Start Today"
          secPara="Your store deserves a platform that performs as well as your products. Let’s build an e-commerce site designed to convert and grow your brand."
          btntxt="Chat With Us"
        />

        <ServiceFaqs
          minihead="Frequently Asked Questions"
          mainhead="Your Questions. All Valid. All Answered"
          mainpara="We’ve answered some of the most common queries about our e-commerce website development USA services so you can make confident decisions."
          faqsData={faqsData}
        />

        {/* <TabsPricing
          secClass="tab-pricing-bg"
          minihead="Pricing Plans"
          mainhead="Discover Our Packages"
          secPara="We offer tailored packages to fit your business needs. From startup-level e-commerce website development USA to enterprise-scale builds, every plan includes consultation, design, and post-launch support."
          tabsData={dynamictabsData}
        /> */}

        <HomeBlogsSec
          blogminihead="Blogs & Updates"
          blogSecTitle="Read Our Blogs Covering Latest Industry Insights"
          blogSubtext="Explore expert-written blogs on e-commerce website development, platform comparisons, and growth strategies for modern online sellers."
          // blogsData={blogsData}
          // categorySlug="custom-website-development"
        />
      </DefaultLayout>
    </>
  );
};

export default EcommerceDevelopment;
