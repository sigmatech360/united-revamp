import React, { useState } from "react";
import ReactHelmet from "../../components/ReactHelmet";
import DefaultLayout from "../../components/DefaultLayout";
import aboutbannerbg from "../../assets/images/locationpages/webapp-development-florida/herobanner.webp";
import chooseimg from "../../assets/images/locationpages/webapp-development-florida/chooseimg.webp";
import pixleperfectimg1 from "../../assets/images/locationpages/webapp-development-florida/portfolio-1.webp";
import pixleperfectimg2 from "../../assets/images/locationpages/webapp-development-florida/portfolio-2.webp";
import pixleperfectimg3 from "../../assets/images/locationpages/webapp-development-florida/portfolio-3.webp";
import pixleperfectimg4 from "../../assets/images/locationpages/webapp-development-florida/portfolio-4.webp";
import pixleperfectimg5 from "../../assets/images/locationpages/webapp-development-florida/portfolio-5.webp";
import pixleperfectimg6 from "../../assets/images/locationpages/webapp-development-florida/portfolio-6.webp";
import gooddesignbg from "../../assets/images/locationpages/webapp-development-florida/gooddesignbg.webp";
import support1 from "../../assets/images/locationpages/app-development-florida/gurrantee.svg";
import support2 from "../../assets/images/locationpages/app-development-florida/support.svg";
import support3 from "../../assets/images/locationpages/app-development-florida/ownership.svg";
import support4 from "../../assets/images/locationpages/app-development-florida/money.svg";
import support5 from "../../assets/images/locationpages/app-development-florida/Pentool.svg";
import Lightbox from "yet-another-react-lightbox";
import LocationFaqs from "../../components/LocationFaqs";
import LocationContact from "../../components/LocationContact";
import LocationSupport from "../../components/LocationSupport";
import ServicesBanner from "../../components/ServicesBanner";
import PixelPerfectSec from "../../components/PixelPerfectSec";
import LocationChooseUs from "../../components/LocationChooseUs";
import TabsPricing from "../../components/TabsPricing";
import { dynamictabsData } from "../../data";



const WebAppDevelopmentFlorida = () => {
  const webDesignPortfolioData = [
    {
      id: 1,
      image: pixleperfectimg1,
    },
    {
      id: 2,
      image: pixleperfectimg2,
    },
    {
      id: 3,
      image: pixleperfectimg3,
    },
    {
      id: 4,
      image: pixleperfectimg4,
    },
    {
      id: 5,
      image: pixleperfectimg5,
    },
    {
      id: 6,
      image: pixleperfectimg6,
    },
  ];

  const faqsData = [
    {
      header: "What exactly is a web application?",
      content:
        "A web application is essentially a website that works like an app on any browser.",
    },
    {
      header: "How is a web app different from a website?",
      content:
        "Websites inform, Web apps interact. Web apps respond to users, automate tasks, and power real business operations.",
    },
    {
      header: "Can a web app work on mobile devices?",
      content:
        "Yes, web apps are built to work smoothly across desktops, tablets, and mobile devices without extra downloads.",
    },
    {
      header: "Are web apps secure for business use?",
      content:
        "When built properly, web apps are highly secure and often safer than traditional software due to controlled access and updates.",
    },
    {
      header: "Do web apps scale as my business grows?",
      content:
        "Absolutely, web apps are designed to grow with your users, data, and features without rebuilding from scratch.",
    },
  ];

  const supportCardsData = [
    { image: support1, title: "Best Results. Guaranteed!" },
    { image: support2, title: "Round-the-Clock Support" },
    { image: support3, title: "Your Project, You Own It!" },
    { image: support4, title: "Affordable & Reliable " },
    { image: support5, title: "Industry Specific Designs" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (index, imageArray) => {
    const imageList = imageArray.map((item) => ({
      src: item.image,
    }));
    setImages(imageList);
    setCurrentIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      <ReactHelmet
        title="Web app development in Florida"
        description="Boost your brand with web app development in Florida designed for performance, growth, and reliability. Powered by United Web Developers, build fast, scalable web apps that businesses trust."
        keywords="web app development services Florida, web app development company Florida, web app development agency Florida, custom web app development services Florida, web app development companies Florida, web and mobile app development company Florida, Full stack web app development Florida"
        baseUrl="https://unitedwebdevelopers.com/webapp-development-florida"
      />

      <DefaultLayout>
        <ServicesBanner
          secClass="app-florida-herobanner"
          bgImage={aboutbannerbg}
          title="Web Apps that Skip the Loading Part"
          description="Your website can take all the time it wants to load, but your users might not wait. That’s why businesses turn to web app development services in Florida, where performance comes first."
          cta1="Get a Web App Quote"
          cta2="hehe"
        />

        <LocationChooseUs
          minihead="Benefits"
          mainhead="Built to Rank, Not to Tank"
          secPara="There are billions of websites online, but only a handful actually work. Most are too slow, too heavy, or stitched together with features they can’t handle. We don’t build those."
          secParatwo="At United Web Developers, we build web apps that respond, scale, and stay reliable when real users show up. As the leading web app development agency in Florida businesses trust, our focus is on performance, logic, and usability, not shortcuts or surface-level polish."
          chooseimg={chooseimg}
        />

        <PixelPerfectSec
          minihead="Portfolio"
          secTitle="Web App Projects We’re Proud Of"
          secDescription="Swipe through our portfolio filled with web apps that are making a mark in their industries."
          projectsData={webDesignPortfolioData}
          onImageClick={handleImageClick}
        />

        {/* <TabsPricing
          minihead="Pricing Plans"
          mainhead="Smart Pricing for High-Performing Projects"
          secPara="Your business deserves the best it can get. Choose the right plan and build a web app that brings back more than you invest in it."
          tabsData={dynamictabsData}
        /> */}

        <ServicesBanner
          secClass="good-design-banner wordpress-good-design webapp-perform-sec"
          bgImage={gooddesignbg}
          title="Web Apps Powering Modern Business Needs"
          description="There are dozens of web apps we use every single day without even realizing they are web apps. Gmail. Yahoo Mail. Shopify. Every modern e-commerce store you browse or buy from. None of these are traditional websites. They are web applications, designed this way to deliver uninterrupted performance. And why web apps? Because they:"
          cta1="Talk to Our Developers"
          cta2="hehe"
        />

        <LocationSupport
          minihead="Driven by Results Trusted by Americans"
          mainheadSpan="The Experts Behind Florida’s"
          mainhead="Strongest Web Apps"
          mainPara="Develop web app-based websites in Florida that deliver unmatched speed and reliability."
          supportCards={supportCardsData}
        />

        <LocationContact
          minihead="Contact Us"
          mainhead="Talk to Our Web App Developers"
          secPara="Have a question? Want to share your project? Or simply curious? Talk to us, share your project, and we’ll show the magic web apps can do!"
          btntxt="Talk to Us"
        />

        <LocationFaqs
          minihead="FAQs"
          mainhead="Everything You Need to Know About Web Apps"
          secPara="Swipe through our FAQs to find the answers you’re looking for. If you don’t see your question here, fill out the form and send it our way. We’re confident you’ll find the clarity you need with us."
          faqsData={faqsData}
        />

        {isOpen && images.length > 0 && (
          <Lightbox
            open={isOpen}
            close={() => setIsOpen(false)}
            slides={images}
            index={currentIndex}
          />
        )}
      </DefaultLayout>
    </>
  );
};

export default WebAppDevelopmentFlorida;
