import React, { useState } from "react";
import DefaultLayout from "../../components/DefaultLayout";
import ServicesBanner from "../../components/ServicesBanner";
import aboutbannerbg from "../../assets/images/locationpages/app-development-florida/herobanner.webp";
import chooseimg from "../../assets/images/locationpages/app-development-florida/chooseimg.webp";
import pixleperfectimg1 from "../../assets/images/locationpages/app-development-florida/portfolio-1.webp";
import pixleperfectimg2 from "../../assets/images/locationpages/app-development-florida/portfolio-2.webp";
import pixleperfectimg3 from "../../assets/images/locationpages/app-development-florida/portfolio-3.webp";
import pixleperfectimg4 from "../../assets/images/locationpages/app-development-florida/portfolio-4.webp";
import pixleperfectimg5 from "../../assets/images/locationpages/app-development-florida/portfolio-5.webp";
import pixleperfectimg6 from "../../assets/images/locationpages/app-development-florida/portfolio-6.webp";
import gooddesignbg from "../../assets/images/locationpages/app-development-florida/gooddesignbg.webp";
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

const AppDevelopmentFlorida = () => {
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
      header: "Do you offer both iOS and Android app development in Florida?",
      content:
        "Yes, we offer development for both iOS and Android apps. However, for clients who want apps for both platforms but don’t want to deal with the hassle of maintaining two builds, we also develop cross-platform apps that work seamlessly on both platforms.",
    },
    {
      header: "Do you help with app publishing and launch support?",
      content:
        "Yes, whatever you need. We handle everything, from design and development to deployment on the App Store and Google Play Store, post-deployment testing, and launch maintenance.",
    },
    {
      header: "Can you integrate my app with existing systems or software?",
      content:
        "Of course, our developers are skilled in smooth integrations with CRMs, ERPs, APIs, and other platforms to keep your workflow smooth and connected, and that too with minimum downtime.",
    },
    {
      header: "How long does it take to develop a mobile app?",
      content:
        "It depends upon the complexity of the project; however, ideally, a medium-sized app takes between 8 and 16 weeks from design to deployment. For larger apps or ERP solutions, we create a detailed roadmap by breaking the project into sprints. This way, development stays transparent, and you can see your app come to life with every implementation phase clearly demonstrated.",
    },
    {
      header: "Do you redesign or improve existing mobile apps?",
      content:
        "Yes, we do. If your current app isn’t performing, we can audit, redesign, and rebuild it for better speed, UI, and user engagement, turning what’s outdated into something outstanding.",
    },
    {
      header: "Can you help me plan my app if I only have an idea?",
      content:
        "Absolutely, after all, everything at the beginning is just an idea, isn’t it?  Many of our clients start with just an idea. Our team helps you refine your concept, map user journeys, and create a development roadmap that turns your vision into a fully functional app.",
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
        title="App Development in Florida"
        description="United Web Developers offers App Development in Florida that turns ideas into powerful, high-performing mobile apps."
        keywords="app development Florida, mobile app development Florida, iOS app development, Android app development, custom app solutions, Florida app developers, app design and development, United Web Developers"
        baseUrl="https://unitedwebdevelopers.com/app-development-florida"
      />

      <DefaultLayout>
        <ServicesBanner
          secClass="app-florida-herobanner"
          bgImage={aboutbannerbg}
          title="Engage Your Customers with Mobile App Development in Florida"
          description="Customers now live on their phones, they scroll, they see, and they shop, all through the screen. That’s not just a trend; it’s the new marketplace, and we help you create your space in their devices with our mobile app development services in Florida, so your business is always in their hands, just some taps away from conversions"
          descriptiontwo="Mobile apps increase sales by 54%. Want to revolutionize your brand?"
          cta1="Click Here"
          cta2="hehe"
        />

        <LocationChooseUs
          secClass="location-choose-sec why-choose-sec"
          minihead="Why Choose Us?"
          mainhead="Your Vision. Our Code. One Unstoppable Force"
          imgCol="col-lg-6"
          secPara="When creativity meets clean code, magic happens, and that’s precisely what we do at United Web Developers. We don’t just build mobile apps; we engineer experiences that make users stop scrolling and start engaging. Our mobile app development company in Florida combines design, data, and performance into a seamless package: apps that are fast, flawless, and built to dominate the digital landscape."
          chooseimg={chooseimg}
          btntxt="Let’s Build Powerful Apps"
        />

        <PixelPerfectSec
          minihead="Portfolio"
          secTitle="The Proof of our Success is in our Projects"
          secDescription="Swipe through our goldmine of apps that redefine what “good apps” look like."
          projectsData={webDesignPortfolioData}
          onImageClick={handleImageClick}
        />

        <TabsPricing
          minihead="Pricing Plans"
          mainhead="Prices That Don’t Compromise on Quality"
          secPara="Quality has a cost, and when it comes to custom mobile app development cost in Florida, it’s worth every tap."
          tabsData={dynamictabsData}
        />

        <ServicesBanner
          secClass="good-design-banner"
          bgImage={gooddesignbg}
          title="Tap into 89% of Their Time, and create 100% of Your Opportunity"
          description="When customers unlock their phones, 89% of their time is spent scrolling through apps. Imagine tapping into that space; that’s an 89% increase in potential conversions, simply waiting to happen. That’s why smart businesses are investing in Android and iOS app development in Florida, bridging the gap between visibility and profitability. "
          descriptiontwo="At United Web Developers, we target that space, one where there are limitless opportunities, with eye-catching UIs, high-performing UXs, and an overall app that tops the download charts!"
          cta1="Get Free Consultations"
          cta2="hehe"
        />

        <LocationSupport
          minihead="The Best in Business"
          mainheadSpan="Not Just Another Agency."
          mainhead="The One That Delivers"
          mainPara="Our mission is simple: To make Florida businesses shine on every screen through iOS and Android app development in Florida."
          supportCards={supportCardsData}
        />

        <LocationContact
          minihead="Let’s Connect"
          mainhead="Stop Just Thinking About It! It’s Time to Build!"
          secPara="Want to increase your sales by 54%, your engagement by 67%, and your brand visibility by 80%? Then it’s time for us to talk! Fill out the form and we’ll unleash a new world of business possibilities."
          btntxt="Talk to Us"
        />

        <LocationFaqs
          minihead="Frequently Asked Questions"
          mainhead="Get Confusion Out of the Way!"
          secPara="Got questions? Good… the smartest clients always do. Scroll through our FAQs to find your answers, and if you don’t spot them here, fill out our form and send your query. Our team will get back to you with all the information you need."
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

export default AppDevelopmentFlorida;
