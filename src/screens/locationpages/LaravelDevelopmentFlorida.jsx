import React, { useState } from "react";
import ReactHelmet from "../../components/ReactHelmet";
import DefaultLayout from "../../components/DefaultLayout";
import aboutbannerbg from "../../assets/images/locationpages/laravel-development-florida/herobanner.webp";
import chooseimg from "../../assets/images/locationpages/laravel-development-florida/chooseimg.webp";
import pixleperfectimg1 from "../../assets/images/locationpages/laravel-development-florida/portfolio-1.webp";
import pixleperfectimg2 from "../../assets/images/locationpages/laravel-development-florida/portfolio-2.webp";
import pixleperfectimg3 from "../../assets/images/locationpages/laravel-development-florida/portfolio-3.webp";
import pixleperfectimg4 from "../../assets/images/locationpages/laravel-development-florida/portfolio-4.webp";
import pixleperfectimg5 from "../../assets/images/locationpages/laravel-development-florida/portfolio-5.webp";
import pixleperfectimg6 from "../../assets/images/locationpages/laravel-development-florida/portfolio-6.webp";
import gooddesignbg from "../../assets/images/locationpages/laravel-development-florida/gooddesignbg.webp";
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

const LaravelDevelopmentFlorida = () => {
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
      header: "What types of projects use Laravel development?",
      content:
        "Laravel is commonly used for custom web applications, admin panels, APIs, and business platforms. Laravel development in Florida supports projects that require secure data handling, custom logic, and scalable backend systems.",
    },
    {
      header: "Why do businesses choose Laravel for backend development?",
      content:
        "Laravel offers strong security, clean code structure, and flexibility. It helps businesses manage complex features while keeping applications easy to maintain. Laravel development services in Florida are ideal for long-term and growing applications.",
    },
    {
      header: "Can Laravel be customized for specific business needs?",
      content:
        "Yes, Laravel is highly customizable. Features, workflows, and integrations can be built based on business requirements. United Web Developers provides custom Laravel development in Florida to support unique business processes.",
    },
    {
      header: "Do you work with existing Laravel applications?",
      content:
        "Yes, we enhance existing Laravel applications. This includes fixing issues, improving performance, upgrading versions, and adding features. Laravel web development services in Florida help improve applications without rebuilding them completely.",
    },
    {
      header: "Is Laravel secure for business applications?",
      content:
        "Laravel includes built-in security features such as authentication and data protection. When developed correctly, Laravel applications provide a secure backend environment for business operations.",
    },
    {
      header: "Do you provide support after Laravel development is completed?",
      content:
        "Yes, we offer ongoing support after development. Our team assists with updates, maintenance, and improvements to ensure your Laravel application continues to perform reliably.",
    },
  ];

  const supportCardsData = [
    { image: support1, title: "Satisfaction Guaranteed" },
    { image: support2, title: "24/7 Customer Support" },
    { image: support3, title: "Ownership Rights" },
    { image: support4, title: "Money Back Guarantee" },
    { image: support5, title: "Industry Specific-Expertise" },
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
        title="Laravel Development Agency in Florida"
        description="Get your website, mobile application, or web application made with Laravel Development for a strong backend that keeps your brand secure and growing at United Web Developers."
        keywords="laravel development company Florida, laravel development services Florida, laravel development agency Florida, laravel web development services Florida, laravel web development services Florida, laravel application development company Florida"
        baseUrl="https://unitedwebdevelopers.com/laravel-development-florida"
      />

      <DefaultLayout>
        <ServicesBanner
          secClass="app-florida-herobanner"
          bgImage={aboutbannerbg}
          title="Laravel Web Development in Florida"
          description="At United Web Developers,  our developers excel at Laravel web development in Florida for businesses that rely on strong and secure backend systems. We build custom Laravel applications, web apps, and websites that handle data, users, and complex logic smoothly. "
          cta1="Talk to Our Backend Experts"
          cta2="hehe"
        />

        <LocationChooseUs
          minihead="Why Choose Us"
          mainhead="Offering Expert-Level Laravel Development Services for Floridian Brands"
          secPara="With years of experience and trust that we have gained over time in the industry, our Laravel development services are designed for stability and scale. We focus on building backend systems that work efficiently behind the scenes. Florida-based businesses choose us for clear communication, strong technical skills, and Laravel solutions built to support real business operations."
          chooseimg={chooseimg}
        />

        <PixelPerfectSec
          minihead="Our Portfolio"
          secTitle="View Our Web Apps, Websites & More"
          secDescription="Explore the Laravel-powered web applications and platforms we have developed for businesses across multiple industries."
          projectsData={webDesignPortfolioData}
          onImageClick={handleImageClick}
        />

        {/* <TabsPricing
          minihead="Pricing Plans"
          mainhead="Laravel Development Packages"
          secPara="Our Laravel development packages in Florida are flexible, transparent, and tailored to different project requirements."
          tabsData={dynamictabsData}
        /> */}

        <ServicesBanner
          secClass="good-design-banner wordpress-good-design"
          bgImage={gooddesignbg}
          title="Laravel Backends That Power Business Applications"
          description="A strong backend built on Laravel keeps your application stable and secure. Our Laravel web development services in Florida help businesses manage data, users, and workflows efficiently while building systems that scale smoothly as business needs grow"
          cta1="More About United Web Developers"
          cta1Link="/about"
          cta2="hehe"
        />

        <LocationSupport
          minihead="Our Expertise"
          mainheadSpan="Laravel Development Built for"
          mainhead="Performance and Reliability"
          mainPara="United Web Developers specializes in Laravel development focused on secure systems, clean code, and long-term backend performance."
          supportCards={supportCardsData}
        />

        <LocationContact
          minihead="Contact Us"
          mainhead="Let’s Begin Working on Your Laravel Project"
          secPara="Share your requirements and basic details with our team and let United Web Developers contact you to create a Laravel solution designed for your business."
          btntxt="Send Message"
        />

        <LocationFaqs
          minihead="FAQs"
          mainhead="Questions We Get About Laravel Development in Florida"
          secPara="Below are answers to common questions about Laravel development services offered by United Web Developers."
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

export default LaravelDevelopmentFlorida;
