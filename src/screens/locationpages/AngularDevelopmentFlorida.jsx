import React, { useState } from 'react'
import aboutbannerbg from "../../assets/images/locationpages/angular-development-florida/herobanner.webp";
import chooseimg from "../../assets/images/locationpages/angular-development-florida/chooseimg.webp";
import pixleperfectimg1 from "../../assets/images/locationpages/angular-development-florida/portfolio-1.webp";
import pixleperfectimg2 from "../../assets/images/locationpages/angular-development-florida/portfolio-2.webp";
import pixleperfectimg3 from "../../assets/images/locationpages/angular-development-florida/portfolio-3.webp";
import pixleperfectimg4 from "../../assets/images/locationpages/angular-development-florida/portfolio-4.webp";
import pixleperfectimg5 from "../../assets/images/locationpages/angular-development-florida/portfolio-5.webp";
import pixleperfectimg6 from "../../assets/images/locationpages/angular-development-florida/portfolio-6.webp";
import gooddesignbg from "../../assets/images/locationpages/angular-development-florida/gooddesignbg.webp";
import support1 from "../../assets/images/locationpages/app-development-florida/gurrantee.svg";
import support2 from "../../assets/images/locationpages/app-development-florida/support.svg";
import support3 from "../../assets/images/locationpages/app-development-florida/ownership.svg";
import support4 from "../../assets/images/locationpages/app-development-florida/money.svg";
import support5 from "../../assets/images/locationpages/app-development-florida/Pentool.svg";
import ReactHelmet from '../../components/ReactHelmet';
import DefaultLayout from '../../components/DefaultLayout';
import ServicesBanner from '../../components/ServicesBanner';
import LocationChooseUs from '../../components/LocationChooseUs';
import PixelPerfectSec from '../../components/PixelPerfectSec';
import TabsPricing from '../../components/TabsPricing';
import { dynamictabsData } from '../../data';
import LocationSupport from '../../components/LocationSupport';
import LocationContact from '../../components/LocationContact';
import LocationFaqs from '../../components/LocationFaqs';
import Lightbox from 'yet-another-react-lightbox';

const AngularDevelopmentFlorida = () => {

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
        header: "What makes Angular ideal for complex projects?",
        content:
          "Angular brings stability, structure, and the ability to manage large feature sets without losing performance.",
      },
      {
        header: "Is Angular designed for fast-loading apps?",
        content:
          "Yes, if it needs to be fast, it needs to be built on Angular. Its architecture supports heavy features while keeping screens responsive and user-friendly.",
      },
      {
        header: "Can Angular support both small and large businesses?",
        content:
          "Absolutely, it scales beautifully for startups and handles complexity effortlessly for established brands.",
      },
      {
        header: "How does Angular outperform competing frameworks?",
        content:
          "Angular maintains consistency across big modules, making it strong where other frameworks slow down.",
      },
      {
        header: "Do Angular projects require ongoing support?",
        content:
          "Ongoing support ensures updates, security, and continued performance as your platform grows over time.",
      },
    ];
  
    const supportCardsData = [
      { image: support1, title: "Best Results. Guaranteed!" },
      { image: support2, title: "Round-the-Clock Support" },
      { image: support3, title: "Your Project, You Own It!" },
      { image: support4, title: "Affordable & Reliable" },
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
        title="Angular development in Florida"
        description="United Web Developers delivers advanced Angular development in Florida, creating fast, scalable, and high-performance web and app solutions built for long-term growth and exceptional user experience."
        keywords="angular development company Florida, angular development services Florida, angular js development company Florida, angular js development services Florida, angular website development Florida, angular js development agency Florida"
        baseUrl="https://unitedwebdevelopers.com/angular-development-florida"
      />

    <main className="angular-location-mainpg">
      <DefaultLayout>
        <ServicesBanner
          secClass="app-florida-herobanner angular-location-herobanner"
          bgImage={aboutbannerbg}
          title="Angular Development Built for Ambitious Projects"
          description="Some web and apps carry simple tasks. Others carry the real weight of high-performance features, and Angular-based website development in Florida is the latter one! If your platform needs to support complex flows, data-heavy dashboards built to track multiple features, AI automation, or everything, working in sync, Angular handles it without breaking a sweat."
          cta1="Let’s Work with Angular"
          cta2="hehe"
        />

        <LocationChooseUs
          minihead="Why Choose Us?"
          mainhead="Framework That Pushes Beyond Limitations"
          secPara="There is no such thing as “It can’t be done” with Angular. When ultimate performance is your priority, partnering with United Web Developers, the leading Angular.js development agency in Florida, gives you the stability and control trusted by the world’s most visited platforms."
          secParatwo="If Google can rely on Angular to carry massive user demand, your business can too."
          chooseimg={chooseimg}
        />

        <PixelPerfectSec
          minihead="Portfolio"
          secTitle="Projects That Prove What Angular Can Do"
          secDescription="Explore our collection of Angular.js development projects across Florida and beyond. Each project showcases the trust our clients place in us and stands as proof of our ability to deliver Angular-based projects that are nothing except powerful, intuitive, and built for high performance."
          projectsData={webDesignPortfolioData}
          onImageClick={handleImageClick}
        />

        {/* <TabsPricing
          minihead="Pricing Plans"
          mainhead="Smart Pricing for High-Performing Projects"
          secPara="For startups, enterprises, or any business seeking web or app solutions that excel in speed, structure, and reliability, Angular development services in Florida provide the performance edge needed to stay ahead of everyone."
          tabsData={dynamictabsData}
        /> */}

        <ServicesBanner
          secClass="good-design-banner wordpress-good-design"
          bgImage={gooddesignbg}
          title="A Framework Where Limits Don’t Exist"
          description="To grasp the real power of Angular.js based website development services in Florida, the only thing you need to understand is that Google built Angular for its own products because nothing else could meet its demands. That alone proves its strength, its power. Angular lets you build at Google level capability, enabling products that other frameworks simply struggle to support."
          descriptiontwo="And if it’s good enough to power the world’s largest search engine, it can surely power you app too."
          cta1="Talk to Our Developers"
          cta2="hehe"
        />  

        <LocationSupport
          minihead="Driven by Results. Trusted by Americans"
          mainheadSpan="The Experts Behind Florida’s"
          mainhead="Strongest Angular Builds"
          mainPara="Excellence? That’s Our Starting point, and we finish by offering you the best services for WordPress Development in FL. That’s why we are the leading choice for development across the USA."
          supportCards={supportCardsData}
        />

        <LocationContact
          minihead="Connect With Us"
          mainhead="Build Your Project with the Right Tech Stack"
          secPara="Your brand deserves excellence in every digital build. Choose Angular.js development services in Florida to create platforms powered by the strongest, most future-ready technology." 
          btntxt="Talk to Us"
        />

        <LocationFaqs
          minihead="FAQs"
          mainhead="Simple Answers About Angular"
          secPara="We’ve gathered the most common questions about Angular so you can easily explore everything you need to know about our Angular.js development services in Florida."
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
      </main>
    </>
  )
}

export default AngularDevelopmentFlorida