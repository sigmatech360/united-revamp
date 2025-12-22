import React, { useState } from "react";
import ReactHelmet from "../../components/ReactHelmet";
import DefaultLayout from "../../components/DefaultLayout";
import aboutbannerbg from "../../assets/images/locationpages/shopify-development-florida/herobanner.webp";
import chooseimg from "../../assets/images/locationpages/shopify-development-florida/chooseimg.webp";
import pixleperfectimg1 from "../../assets/images/locationpages/shopify-development-florida/portfolio-1.webp";
import pixleperfectimg2 from "../../assets/images/locationpages/shopify-development-florida/portfolio-2.webp";
import pixleperfectimg3 from "../../assets/images/locationpages/shopify-development-florida/portfolio-3.webp";
import pixleperfectimg4 from "../../assets/images/locationpages/shopify-development-florida/portfolio-4.webp";
import pixleperfectimg5 from "../../assets/images/locationpages/shopify-development-florida/portfolio-5.webp";
import pixleperfectimg6 from "../../assets/images/locationpages/shopify-development-florida/portfolio-6.webp";
import gooddesignbg from "../../assets/images/locationpages/shopify-development-florida/gooddesignbg.webp";
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

const ShopifyDevelopmentFlorida = () => {
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
      header: "How does Shopify website development help businesses in Florida?",
      content:
        "Shopify website development helps businesses create an online store that is easy to manage and simple for customers to use. For Florida businesses, a well developed Shopify website supports online sales, improves customer trust, and allows smooth business growth.",
    },
    {
      header: "Is Shopify suitable for small and growing businesses?",
      content:
        "Yes, Shopify works well for both small and growing businesses as it offers secure payments, easy product management, and flexible features. Shopify website development in Florida allows businesses to launch and grow without technical complexity.",
    },
    {
      header: "Can my Shopify website be customized for my business?",
      content:
        "Yes, Shopify websites can be fully customized. This includes design, branding, layout, and feature setup. United Web Developers offers custom Shopify website development in Florida based on your business goals and customer needs.",
    },
    {
      header: "Will my Shopify website be mobile-friendly?",
      content:
        "Yes, all Shopify websites we develop are mobile-friendly. This ensures customers in Florida can browse and shop easily on phones, tablets, and desktop devices.",
    },
    {
      header: "Do you provide support after the Shopify website launch?",
      content:
        "Yes, we provide ongoing support after launch. Our team assists with updates, improvements, and technical support so your Shopify website continues to perform as your business grows.",
    },
  ];

  const supportCardsData = [
    { image: support1, title: "Satisfaction Guaranteed" },
    { image: support2, title: "24/7 Customer Support" },
    { image: support3, title: "Ownership Rights" },
    { image: support4, title: "Money Back Guarantee" },
    { image: support5, title: "Industry Specific Expertise" },
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
        title="Professional Shopify Website Development Company in Florida"
        description="Professional Shopify website development in Florida. United Web Developers builds secure, scalable, and conversion-focused Shopify ecommerce websites."
        keywords="Shopify website development services Florida, Shopify website development Florida,  Shopify website development company Florida, Shopify website developer Florida, Shopify website development agency Florida"
        baseUrl="https://unitedwebdevelopers.com/shopify-development-florida"
      />

      <DefaultLayout>
        <ServicesBanner
          secClass="app-florida-herobanner"
          bgImage={aboutbannerbg}
          title="Expert Shopify Website Development in Florida"
          description="At United Web Developers, with years of experience in web design and development, we offer professional Shopify website development in Florida for businesses ready to build and expand online. We create secure, easy-to-manage, and high-performing Shopify ecommerce websites that focus on user experience and sales. "
          cta1="Start Your Shopify Project"
          cta2="hehe"
        />

        <LocationChooseUs
          minihead="Why Choose Us"
          mainhead="Why United Web Developers is the Best Choice for Shopify"
          secPara="As a trusted website development company that has worked with 100+ clients, we offer professional Shopify website development in Florida for businesses that are ready to grow online. We focus on clean design, fast-loading stores, and user-friendly experiences. Businesses across Florida trust us to build Shopify websites that are reliable, scalable, and aligned with their business goals."
          chooseimg={chooseimg}
        />

        <PixelPerfectSec
          minihead="Our Portfolio"
          secTitle="View Our Projects"
          secDescription="Explore Shopify ecommerce websites we have developed for businesses across multiple industries and business models."
          projectsData={webDesignPortfolioData}
          onImageClick={handleImageClick}
        />

        {/* <TabsPricing
          minihead="Pricing Plans"
          mainhead="Shopify Web Development Packages"
          secPara="Our Shopify development packages in Florida are flexible, transparent, and designed to match different business needs."
          tabsData={dynamictabsData}
        /> */}

        <ServicesBanner
          secClass="good-design-banner wordpress-good-design"
          bgImage={gooddesignbg}
          title="Shopify Websites That Support Business Growth"
          description="An exceptionally built Shopify website helps website visits turn into consistent sales. Our Shopify ecommerce website development services in Florida focus on speed, usability, and structure to help businesses grow online with confidence and consistency."
          cta1="More About United Web Developers"
          cta1Link="/about"
          cta2="hehe"
        />

        <LocationSupport
          minihead="Our Expertise"
          mainheadSpan="Shopify Website Development"
          mainhead="Floridian Businesses Trust"
          mainPara="United Web Developers provides Shopify website development services focused on quality, performance, and long-term ecommerce success."
          supportCards={supportCardsData}
        />

        <LocationContact
          minihead="Contact Us"
          mainhead="Let’s Start Your Shopify Website Development Project"
          secPara="Fill out the form below with the required details and let our team, United Web Developers, build a Shopify website designed to support your business goals in Florida."
          btntxt="Get in Touch"
        />

        <LocationFaqs
          minihead="FAQs"
          mainhead="Most Asked Questions About Shopify Web Development at United Web Developers"
          secPara="Here are answers to common questions about Shopify website development services offered by United Web Developers."
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

export default ShopifyDevelopmentFlorida;
