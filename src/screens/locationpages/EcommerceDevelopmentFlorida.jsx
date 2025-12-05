import React, { useState } from 'react'
import DefaultLayout from '../../components/DefaultLayout';
import ReactHelmet from '../../components/ReactHelmet';
import ServicesBanner from '../../components/ServicesBanner';
import LocationChooseUs from '../../components/LocationChooseUs';
import PixelPerfectSec from '../../components/PixelPerfectSec';
import TabsPricing from '../../components/TabsPricing';
import { dynamictabsData } from '../../data';
import LocationSupport from '../../components/LocationSupport';
import LocationContact from '../../components/LocationContact';
import LocationFaqs from '../../components/LocationFaqs';
import Lightbox from 'yet-another-react-lightbox';
import aboutbannerbg from "../../assets/images/locationpages/ecommerce-development-florida/herobanner.webp";
import chooseimg from "../../assets/images/locationpages/ecommerce-development-florida/chooseimg.webp";
import pixleperfectimg1 from "../../assets/images/locationpages/ecommerce-development-florida/portfolio-1.webp";
import pixleperfectimg2 from "../../assets/images/locationpages/ecommerce-development-florida/portfolio-2.webp";
import pixleperfectimg3 from "../../assets/images/locationpages/ecommerce-development-florida/portfolio-3.webp";
import pixleperfectimg4 from "../../assets/images/locationpages/ecommerce-development-florida/portfolio-4.webp";
import pixleperfectimg5 from "../../assets/images/locationpages/ecommerce-development-florida/portfolio-5.webp";
import pixleperfectimg6 from "../../assets/images/locationpages/ecommerce-development-florida/portfolio-6.webp";
import gooddesignbg from "../../assets/images/locationpages/ecommerce-development-florida/gooddesignbg.webp";
import support1 from "../../assets/images/locationpages/app-development-florida/gurrantee.svg";
import support2 from "../../assets/images/locationpages/app-development-florida/support.svg";
import support3 from "../../assets/images/locationpages/app-development-florida/ownership.svg";
import support4 from "../../assets/images/locationpages/app-development-florida/money.svg";
import support5 from "../../assets/images/locationpages/app-development-florida/Pentool.svg";



const EcommerceDevelopmentFlorida = () => {

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
          header: "Is there a free trial available?",
          content:
            "We offer a free discovery call where our e-commerce website development team in Florida walks you through the best structure for your online store.",
        },
        {
          header: "Can I upgrade my plan later?",
          content:
            "Absolutely, as your store grows, you can shift to a higher plan supported by our e-commerce website developers in Florida.",
        },
        {
          header: "What kind of information can I track?",
          content:
            "There are a whole lot of things you can track and tweak. At the base, you can track visitors, performance, ranking, and much more, and you can use this information to tweak your store, helping you increase sales.",
        },
        {
          header: "How long does it take to build an e-commerce website?",
          content:
            "Timelines vary by project size, but our e-commerce website development services in Florida typically complete most stores within a few weeks to a couple of months. However, if it's a custom project, it will take more time.",
        },
        {
          header: "Do you offer ongoing support after the website is launched?",
          content:
            "Yes, we stay with you after launch to handle updates, improvements, technical support, and anything your store needs to keep performing smoothly.",
        },
         {
          header: "Will my e-commerce website be mobile-friendly?",
          content:
            "Absolutely, every store we build is fully responsive, optimized for mobile shoppers, and designed to deliver a smooth experience on any device.",
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
        title="E-commerce Website Development in Florida"
        description=" Deploy powerful e-commerce websites in Florida with United Web Developers, for brands ready to scale with intelligent design, seamless performance, and customer journeys crafted to drive real revenue."
        keywords="e-commerce website development services Florida, e commerce website development Florida, e-commerce website development company Florida, e commerce website developer Florida, e-commerce website development agency Florida"
        baseUrl="https://unitedwebdevelopers.com/ecommerce-development-florida"
      />


      <DefaultLayout>
        <ServicesBanner
          secClass="app-florida-herobanner"
          bgImage={aboutbannerbg}
          title="Launch Your Products on a Store Built to Win"
          description="Bring your business to millions of shoppers online with our E-commerce website development services in Florida. We develop and deploy winning stores that are way more than nice colors and tidy pages. As the leading company in Florida, we design smart structures, fast paths, and a checkout that feels effortless. "
          descriptiontwo="Partner with our e-commerce website development agency in Florida and watch your store become your strongest sales engine."
          cta1="Deploy Your Store"
          cta2="hehe"
        />

        <LocationChooseUs
          minihead="The Best in Business"
          mainhead="You Imagine It and We Will Build It"
          secPara="Our e-commerce website development services in Florida cover every kind of technology you can imagine, balancing performance, design, and structure into experiences your customers love exploring."
          chooseimg={chooseimg}
        />

        <PixelPerfectSec
          minihead="Portfolio"
          secTitle="Our E Commerce Greatest Hits"
          secDescription="Take a scroll through the stores our e-commerce website developers in Florida have built. Each one started as an idea, supported by dreams of a brand, and made possible by our expertise."
          projectsData={webDesignPortfolioData}
          onImageClick={handleImageClick}
        />

        {/* <TabsPricing
          minihead="Pricing Plans"
          mainhead="Choose the Best Plan for Your Business"
          secPara="Choose a plan that gives your store power, speed, and strategy. With our e-commerce website development company in Florida, you get development that keeps your brand moving forward."
          tabsData={dynamictabsData}
        /> */}

        <ServicesBanner
          secClass="good-design-banner wordpress-good-design"
          bgImage={gooddesignbg}
          title="Why Business in Florida Trust Our E-Commerce Development"
          description="Your customers judge your store in literal seconds, so every detail has to pull its weight. At United Web Developers, we design the kind of shopping experience that feels intentional from the first click to the final checkout. With our e-commerce website development services in Florida, you get stores shaped by psychology, behavior patterns, and the small micro moments that convince people to buy without overthinking. "
          cta1="Work With Us"
          cta2="hehe"
        />  

        <LocationSupport
          minihead="The Best in Business"
          mainheadSpan="Providing Excellent E-commerce Solutions"
          mainhead="to American Businesses"
          mainPara="Excellence? That’s Our Starting point, and we finish by offering you the best services for E-commerce Website Development in Florida. That’s why we are the leading choice for development across the USA."
          supportCards={supportCardsData}
        />

        <LocationContact
          minihead="Let’s Connect"
          mainhead="Bring Your E-commerce Website Live Today!"
          secPara="While you’re thinking, your competitors are ruling the web. It’s time for a new kind in town! Fill out the form, and we’ll help you establish your reign on the web." 
          btntxt="Talk to Us"
        />

        <LocationFaqs
          minihead="FAQs"
          mainhead="Ask Away. We Love Good Questions!"
          secPara="Swipe through our FAQ section and find the answer to your query. And if you don’t find your answer here, fill out the form and ask your question directly; we’re sure you’ll find your answer there!"
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
  )
}

export default EcommerceDevelopmentFlorida