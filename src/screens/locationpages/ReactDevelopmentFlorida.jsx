import React, { useState } from "react";
import DefaultLayout from "../../components/DefaultLayout";
import ServicesBanner from "../../components/ServicesBanner";
import LocationChooseUs from "../../components/LocationChooseUs";
import PixelPerfectSec from "../../components/PixelPerfectSec";
import TabsPricing from "../../components/TabsPricing";
import { dynamictabsData } from "../../data";
import LocationSupport from "../../components/LocationSupport";
import LocationContact from "../../components/LocationContact";
import LocationFaqs from "../../components/LocationFaqs";
import Lightbox from "yet-another-react-lightbox";
import support1 from "../../assets/images/locationpages/app-development-florida/gurrantee.svg";
import support2 from "../../assets/images/locationpages/app-development-florida/support.svg";
import support3 from "../../assets/images/locationpages/app-development-florida/ownership.svg";
import support4 from "../../assets/images/locationpages/app-development-florida/money.svg";
import support5 from "../../assets/images/locationpages/app-development-florida/Pentool.svg";
import pixleperfectimg1 from "../../assets/images/locationpages/react-development-florida/portfolio-1.webp";
import pixleperfectimg2 from "../../assets/images/locationpages/react-development-florida/portfolio-2.webp";
import pixleperfectimg3 from "../../assets/images/locationpages/react-development-florida/portfolio-3.webp";
import pixleperfectimg4 from "../../assets/images/locationpages/react-development-florida/portfolio-4.webp";
import pixleperfectimg5 from "../../assets/images/locationpages/react-development-florida/portfolio-5.webp";
import pixleperfectimg6 from "../../assets/images/locationpages/react-development-florida/portfolio-6.webp";
import herobanner from "../../assets/images/locationpages/react-development-florida/herobanner.webp";
import chooseimg from "../../assets/images/locationpages/react-development-florida/chooseimg.webp";
import gooddesignbg from "../../assets/images/locationpages/react-development-florida/gooddesignbg.webp";
import ReactHelmet from "../../components/ReactHelmet";

const ReactDevelopmentFlorida = () => {
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
      header: "How long does a typical React project take?",
      content:
        "Most React builds take between four and twelve weeks, depending on the features, integrations, and complexity. We provide a clear timeline before development begins.",
    },
    {
      header: "Can you migrate my existing platform to React?",
      content:
        "Yes. We handle full migrations, partial upgrades, or rebuilding outdated systems using modern, scalable React architecture.",
    },
    {
      header: "Do you offer support after launch?",
      content:
        "Absolutely, we continue to improve performance, add features, and provide technical support long after your React app goes live.",
    },
    {
      header: "Will my React application work smoothly on all devices?",
      content:
        "Yes, we optimize for desktop, tablet, and mobile to ensure fast, responsive behavior across every device your users rely on.",
    },
    {
      header: "How much does a React project usually cost?",
      content:
        "Costs vary based on scope. We prepare a tailored estimate that reflects your goals, features, and long-term requirements.",
    },
  ];

  const supportCardsData = [
    { image: support1, title: "100% Satisfaction" },
    { image: support2, title: "Round-the-Clock Customer Support" },
    { image: support3, title: "You Own it, 100%" },
    { image: support4, title: "Stunning and affordable" },
    { image: support5, title: "Build for Your Business" },
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
        title="React development in Florida"
        description=" Experience top-tier React development in Florida with scalable, high-performing solutions built for real business growth. We craft fast and reliable React applications tailored to your goals."
        keywords="react js development company Florida, react native app development services Florida, react native development services Florida, react development Florida, react development company Florida"
        baseUrl="https://unitedwebdevelopers.com/react-development-florida"
      />



      <DefaultLayout>
        <ServicesBanner
          secClass="app-florida-herobanner"
          bgImage={herobanner}
          title="Give Your Ideas a React Engine That Never Slows Down"
          description="Your business deserves technology that moves as fast as your ambitions. Our team builds high-performing applications powered by React, shaped around real users, and engineered for the way you actually work. As a leading React development company in Florida, we turn complex ideas into smooth, scalable digital experiences."
          cta1="Let’s React Today"
          cta2="hehe"
        />

        <LocationChooseUs
          secClass="location-choose-sec why-choose-sec"
          minihead="Why Choose Us"
          mainhead="Partner With United Web Developers for React Projects"
          imgCol="col-lg-6"
          secPara="React projects succeed when strategy and engineering work together. Our team builds fast, scalable applications with clarity, precision, and the expertise you expect from leading React developers in Florida."
          chooseimg={chooseimg}
        />

        <PixelPerfectSec
          minihead="Portfolio"
          secTitle="React Projects Built for Real Performance"
          secDescription="Explore a selection of our recent React builds and see how we turned complex ideas into fast, reliable, and growth-ready digital experiences."
          projectsData={webDesignPortfolioData}
          onImageClick={handleImageClick}
        />
        {/* 
        <TabsPricing
          minihead="Pricing Plans"
          mainhead="React Solution That’ll Bring in Way More Than You Spend Here "
          secPara="We make quality react native development services in Florida accessible to businesses that want fast, reliable, and scalable digital products."
          tabsData={dynamictabsData}
        /> */}

        <ServicesBanner
          secClass="good-design-banner reactjs-location-goodbanner"
          bgImage={gooddesignbg}
          title="Trust React for Scalability"
          description="React is at its best when it solves real business problems, not just technical ones. As a leading React.js development services provider in Florida, our packages are built to give you the freedom to scale, experiment, and launch digital experiences that actually feel alive. Whether you need a fast interface, a feature-rich platform, or a fully engineered product, we tailor your package to focus on clarity, performance, and the outcomes that matter most to you."
          cta1="Talk to Professionals"
          cta2="hehe"
        />

        <LocationSupport
          minihead="The Best in Business"
          mainheadSpan="Providing Excellent React Solutions to"
          mainhead="American Businesses"
          mainPara="Excellence? That’s Our Starting point, and we finish by offering you the best services for WordPress Development in FL. That’s why we are the leading choice for development across the USA."
          supportCards={supportCardsData}
        />

        <LocationContact
          minihead="Connect With Us"
          mainhead="Ready to Build Something Powerful with React"
          secPara="Start your React project with a team that understands ambition, clarity, performance, and real business needs."
          btntxt="Talk to Us"
        />

        <LocationFaqs
          minihead="FAQs"
          mainhead="Find Your React-Related Answers Here!"
          secPara="If you don’t find your answer here, please fill out the form and send us your question; we promise you’ll receive a response."
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

export default ReactDevelopmentFlorida;
