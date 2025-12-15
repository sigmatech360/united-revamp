import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import ReactHelmet from "../../components/ReactHelmet";
import ServicesBanner from "../../components/ServicesBanner";
import herobanner from "../../assets/images/services/seo/herobanner.webp";
import herobannerinnerimg from "../../assets/images/services/seo/herobanner-inner-img.webp";
import aboutimg1 from "../../assets/images/services/seo/aboutimg1.webp";
import aboutimg2 from "../../assets/images/services/seo/aboutimg2.webp";
import chooseimg from "../../assets/images/services/seo/chooseimg.webp";
import SMMAbout from "../../components/SMMAbout";
import NewSeoServices from "../../components/NewSeoServices";
import NewSeoUsage from "../../components/NewSeoUsage";
import NewSeoProcess from "../../components/NewSeoProcess";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import HomeBlogsSec from "../../components/HomeBlogsSec";
import ServiceFaqs from "../../components/ServiceFaqs";
import LocationContact from "../../components/LocationContact";
import TabsPricing from "../../components/TabsPricing";
import { dynamictabsData } from "../../data";

const NewSEO = () => {

    const faqsData = [
    {
      header: " What is search engine optimization and why does it matter?",
      content:
        "Search engine optimization helps websites appear in search results, bringing consistent traffic and long term visibility.",
    },
    {
      header: "How long does SEO take to show results?",
      content:
        "SEO is a gradual process. Early improvements appear in 3-4 months, while stronger growth builds over time with consistent efforts.",
    },
    {
      header: "Is SEO better than paid advertising?",
      content:
        "SEO builds lasting visibility, while paid ads offer quicker exposure. Both support different stages of growth.",
    },
    {
      header: "What is the difference between on-page and off-page SEO?",
      content:
        "On-page SEO improves content and structure, while off-page SEO builds trust and authority.",
    },
    {
      header: "Does local SEO help businesses in the USA?",
      content:
        "Local SEO in the USA helps businesses appear in nearby searches, making services easier to find."
    },
    {
      header: "How does United Web Developers approach SEO?",
      content:
        "We focus on clarity, consistency, and long term partnerships instead of short term tactics.",
    },
  ];


  return (
    <>
      <ReactHelmet
        title="Search Engine Optimization Agency in the USA"
        description="United Web Developers provides search engine optimization services in the USA focused on organic growth, lasting rankings, and long term business partnerships."
        keywords="search engine optimization agency usa, search engine optimization services usa, search engine optimization marketing usa, seo agency usa, seo services usa, local seo usa, on page seo usa, off page seo usa, seo company in usa"
        baseUrl="https://unitedwebdevelopers.com/search-engine-optimization"
      />

      <DefaultLayout>
        <ServicesBanner
          secClass="app-florida-herobanner"
          bgImage={herobanner}
          servicesbannerimg={herobannerinnerimg}
          title="Sustainable Search Engine Optimization That Grows With You"
          description="Search engine optimization is not about shortcuts. It is about building visibility that lasts. As a trusted search engine optimization agency in the USA, United Web Developers focuses on steady organic growth that supports real business goals."
          cta1="Start Your SEO Journey"
          cta2="hehe"
        />

        <SMMAbout
          aboutImgOne={aboutimg1}
          aboutImgTwo={aboutimg2}
          miniHead="About Us"
          mainHead="We Excel at Growing Brands Through Organic SEO"
          description="United Web Developers is a search engine optimization company in the USA that believes SEO should feel like a partnership, not a transaction. Our approach is grounded in clarity, consistency, and shared growth built around long-term visibility."
          btnText="Learn More About Us"
          btnLink="/about"
        />

        <NewSeoServices/>   


        <NewSeoUsage/>


        <NewSeoProcess/>


        <WordPressPerformanceSection
          reverse
          wordpresssecclass="WordPressPerformanceSection blogwriting-about-sec"
          miniheadclass="minihead"
          secTitle1="Optimize with Us to Maximise Your Brand Visibility "
          description="Search engine optimization grows through consistent effort and focused progress. Each improvement builds on the last, creating momentum that strengthens visibility over time. SEO matters because it places brands in front of people who are actively searching for relevant solutions."
          descriptiontwo="United Web Developers delivers search engine optimization services in the USA that treat SEO as an ongoing process, not a one-time task. Their work combines organic strategy with paid SEO support when needed, helping businesses grow steadily without losing direction. As a trusted SEO company in the USA, they have helped hundreds of clients achieve stronger rankings, better traffic quality, and lasting results through thoughtful planning and continuous refinement."
          image={chooseimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Let’s Discuss Your Project"
          aboutbtnlink="/contact-us"
          learnmorebtn="theme-btn theme-btn__yellow"
        />


           <LocationContact
          secClass="wordpress-contact-sec"
          minihead="Contact Us"
          mainhead="Make Your Brand Visible on the Web!"
          secPara="Partner with United Web Developers, a trusted SEO agency in the USA, to establish search visibility that fosters long-term growth."
          btntxt="Get in Touch"
        />

        <ServiceFaqs
          minihead="FAQs"
          mainhead="Answering Your Questions Related to the Search Engine"
          mainpara="These questions explain search engine optimization services in simple terms to help businesses understand how SEO supports long-term growth."
          faqsData={faqsData}
        />

        {/* <TabsPricing
          secClass="tab-pricing-bg"
          minihead="Packages"
          mainhead="SEO Price Packages"
          secPara="These SEO pricing plans are designed for transparency, steady growth, and long term collaboration based on business needs. Take a look below and pick the one that suits you. "
          tabsData={dynamictabsData}
        /> */}

        <HomeBlogsSec
          blogminihead="Blogs"
          blogSecTitle="Check Out the Trending Topics on Our Blogs"
          blogSubtext="If you want to stay ahead of your cool friends, read our blogs and gain all the insights on all the recent tech trends. "
          // blogsData={blogsData}
          // categorySlug="custom-website-development"
        />




      </DefaultLayout>
    </>
  );
};

export default NewSEO;
