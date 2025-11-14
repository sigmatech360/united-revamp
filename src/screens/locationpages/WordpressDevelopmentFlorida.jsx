import React, { useState } from "react";
import DefaultLayout from "../../components/DefaultLayout";
import ServicesBanner from "../../components/ServicesBanner";
import aboutbannerbg from "../../assets/images/locationpages/wordpress-development-florida/herobanner.webp";
import chooseimg from "../../assets/images/locationpages/wordpress-development-florida/chooseimg.webp";
import pixleperfectimg1 from "../../assets/images/locationpages/wordpress-development-florida/portfolio-1.webp";
import pixleperfectimg2 from "../../assets/images/locationpages/wordpress-development-florida/portfolio-2.webp";
import pixleperfectimg3 from "../../assets/images/locationpages/wordpress-development-florida/portfolio-3.webp";
import pixleperfectimg4 from "../../assets/images/locationpages/wordpress-development-florida/portfolio-4.webp";
import pixleperfectimg5 from "../../assets/images/locationpages/wordpress-development-florida/portfolio-5.webp";
import pixleperfectimg6 from "../../assets/images/locationpages/wordpress-development-florida/portfolio-6.webp";
import gooddesignbg from "../../assets/images/locationpages/wordpress-development-florida/gooddesignbg.webp";
import support1 from "../../assets/images/locationpages/app-development-florida/gurrantee.svg";
import support2 from "../../assets/images/locationpages/app-development-florida/support.svg";
import support3 from "../../assets/images/locationpages/app-development-florida/ownership.svg";
import support4 from "../../assets/images/locationpages/app-development-florida/money.svg";
import support5 from "../../assets/images/locationpages/app-development-florida/Pentool.svg";
import LocationChooseUs from "../../components/LocationChooseUs";
import Lightbox from "yet-another-react-lightbox";
import PixelPerfectSec from "../../components/PixelPerfectSec";
import TabsPricing from "../../components/TabsPricing";
import { dynamictabsData } from "../../data";
import LocationSupport from "../../components/LocationSupport";
import LocationContact from "../../components/LocationContact";
import LocationFaqs from "../../components/LocationFaqs";
import ReactHelmet from "../../components/ReactHelmet";

const WordpressDevelopmentFlorida = () => {
  
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
      header: "What makes your WordPress development agency in Florida different?",
      content:
        "Our WordPress development agency in Florida focuses on custom functionality, SEO architecture, and conversion-driven design to help your business grow faster and stand taller online.",
    },
    {
      header: "Do you offer enterprise WordPress development in FL?",
      content:
        "Yes, our enterprise WordPress development services deliver scalable, high-traffic solutions with cloud-ready hosting, advanced security, and optimized user experience, perfect for growing brands and corporations that demand reliability and speed.",
    },
    {
      header: "How long does a typical WordPress website development in Florida take?",
      content:
        "Timelines vary by complexity, but most WordPress website development in Florida projects are completed within 3-6 weeks.",
    },
    {
      header: "Can you integrate third-party tools with custom WordPress development?",
      content:
        "Yes, WordPress supports thousands of plugins that help in every aspect, from payment integration to boosting security.",
    },
    {
      header: "Do you maintain WordPress websites after launch?",
      content:
        "Yes, as a full-service WordPress development company in Florida, we provide continuous maintenance, updates, weekly/monthly backups, and security checks, ensuring your site remains fast, safe, and performance-driven long after it’s live.",
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
        title="WordPress Development Florida"
        description="Partner with the leaders in WordPress development in Florida. From startups to enterprises, United Web Developers builds brands that are optimized for performance and growth."
        keywords="WordPress development FL, custom WordPress development FL, top wordpress development agencies FL, wordpress website development in Florida, wordpress development agency Florida, wordpress development services FL, wordpress developement company in Florida"
        baseUrl="https://unitedwebdevelopers.com/wordpress-development-florida"
      />


      <DefaultLayout>
        <ServicesBanner
          secClass="app-florida-herobanner"
          bgImage={aboutbannerbg}
          title="Become the Brand That Converts with WordPress Development in Florida"
          description="In a world where websites become endless scrolls and every click on the “back” button costs a lead, be the one where people click “Checkout” instead! At United Web Developers, a top WordPress Development Agency in FL, we build web apps engineered to sell, not just show. Every element we built is with a single intent to help you grow your brand."
          descriptiontwo="Good websites get traffic, great ones turn it into revenue. Be a great one with United Web Developers. Click Now!"
          cta1="Go WordPress"
          cta2="hehe"
        />

        <LocationChooseUs
          minihead="Why Choose Us?"
          mainhead="The World Builds on WordPress. We Just Build It Better."
          secPara="Why choose WordPress? Simple, over 60% of the world's websites are built on it, powered by it, connected with it. That’s the power of WordPress website development in Florida. It’s Fast, scalable, and the first choice of every web developer. And the best part? You don’t need any coding knowledge to control it."
          secParatwo="And with United Web Developers on your side, you get complete control, creative freedom, and a site built to evolve with your business. "
          chooseimg={chooseimg}
        />

        <PixelPerfectSec
          minihead="Portfolio"
          secTitle="See How Businesses Across Florida Thrive with Our WordPress Magic"
          secDescription="Swipe through the portfolio and you’ll see that every project tells the story of a brand chasing growth, and finding it through our custom WordPress development in FL."
          projectsData={webDesignPortfolioData}
          onImageClick={handleImageClick}
        />

        {/* <TabsPricing
          minihead="Pricing Plans"
          mainhead="Smart Pricing Plans for Smarter Businesses"
          secPara="If your website costs a fortune to run like ours, see our prices and think again! Our WordPress development services in FL are affordable and flexible, allowing any business, whether a startup or a corporation, to achieve the same results."
          tabsData={dynamictabsData}
        /> */}

        <ServicesBanner
          secClass="good-design-banner wordpress-good-design"
          bgImage={gooddesignbg}
          title="Build WordPress Websites the UWD Way!"
          description="Spread increases conversion chances by up to 10%, while design increases by up to 60%. At United Web developers, we increase your conversion chances to a solid 70% with a design that looks good and a deployment that is fast and responsive. "
          cta1="Click Here to Convert"
          cta2="hehe"
        />  

        <LocationSupport
          minihead="Our USP"
          mainheadSpan="Excellence Begins with Us,"
          mainhead="and Never Stops!"
          mainPara="Excellence? That’s Our Starting point, and we finish by offering you the best services for WordPress Development in FL. That’s why we are the leading choice for development across the USA."
          supportCards={supportCardsData}
        />

        <LocationContact
          minihead="Let’s Connect"
          mainhead="Bring Your Brand Website Live Today!"
          secPara="While you’re thinking, your competitors are ruling the web. It’s time for a new kind in town! Fill out the form, and we’ll help you establish your reign on the web." 
          btntxt="Talk to Us"
        />

        <LocationFaqs
          minihead="FAQs"
          mainhead="Got Questions? We Have all the Answers!"
          secPara="If you don’t find your answer here, please fill out the form and send us your question; we promise you’ll receive a response"
          faqs={faqsData}
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

export default WordpressDevelopmentFlorida;
