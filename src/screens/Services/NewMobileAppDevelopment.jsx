import React from "react";
import ReactHelmet from "../../components/ReactHelmet";
import DefaultLayout from "../../components/DefaultLayout";
import herobanner from "../../assets/images/services/mobileappdev/herobanner.webp";
import aboutimg from "../../assets/images/services/mobileappdev/aboutimg.webp";
import portfolio1 from "../../assets/images/services/mobileappdev/portfolio1.webp";
import portfolio2 from "../../assets/images/services/mobileappdev/portfolio2.webp";
import portfolio3 from "../../assets/images/services/mobileappdev/portfolio3.webp";
import portfolio4 from "../../assets/images/services/mobileappdev/portfolio4.webp";
import portfolio5 from "../../assets/images/services/mobileappdev/portfolio5.webp";
import portfolio6 from "../../assets/images/services/mobileappdev/portfolio6.webp";
import ServicesBanner from "../../components/ServicesBanner";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import BrandVoiceServices from "../../components/BrandVoiceServices";
import HomeBlogsSec from "../../components/HomeBlogsSec";
import ServiceFaqs from "../../components/ServiceFaqs";
import LocationContact from "../../components/LocationContact";
import TabsPricing from "../../components/TabsPricing";
import { dynamictabsData } from "../../data";
import DomainRegisterationServices from "../../components/DomainRegisterationServices";
import rightIcon from "../../assets/images/services/mobileappdev/arrow.svg";
import MobileAppDevTeam from "../../components/MobileAppDevTeam";
import MobileAppServices from "../../components/MobileAppServices";


  


const NewMobileAppDevelopment = () => {
  const brandservices = [
    {
      subtitle: "Web App Development: ",
      description:
        "We develop secure and high-performing web applications that help you connect better with your audience on the web.",
    },
    {
      subtitle: "iOS App Development: ",
      description:
        "If your audience is the majority of iPhone users, our developers have the expertise to build smooth iOS applications that boost user behavior",
    },
    {
      subtitle: "Android App Development: ",
      description:
        "We excel at building Android applications that allow you to connect better with your audience smoothly, 24/7. ",
    },
    {
      subtitle: "React Native Development: ",
      description:
        "We use one shared codebase to build cross-platform apps with native performance and seamless functionality.",
    },
    {
      subtitle: "Front-End Development: ",
      description:
        "Our expertise includes building visually engaging, responsive interfaces that turn every click into a smooth, meaningful experience.",
    },
    {
      subtitle: "Back-End Development: ",
      description:
        "Every application is strengthened by building strong and scalable backend systems that keep your app fast, secure, and efficient behind the scenes.",
    },
  ];

  const faqsData = [
    {
      header: "What makes you the best mobile app development company in the USA?",
      content:
        "Our approach blends creativity with technology. We focus on user experience, performance, and measurable results for every client.",
    },
    {
      header: "How much does mobile app development cost in the USA?",
      content:
        "The cost depends on features, complexity, and design needs. We provide clear estimates and flexible plans for every project.",
    },
    {
      header: "Do you offer custom mobile app development services in the USA?",
      content:
        "Yes, we build custom apps tailored to your goals, brand, and audience across iOS, Android, and web platforms.",
    },
    {
      header: "Which platforms do you specialize in?",
      content:
        "We specialize in iOS, Android, and React Native app development, providing complete coverage for your audience.",
    },
    {
      header: "Do you provide e-commerce app development in the USA?",
      content:
        "Absolutely, we design e-commerce apps that simplify shopping, enhance engagement, and increase conversions.",
    },
    {
      header: "Why choose your mobile app development agency in the USA?",
      content:
        "We combine skill, empathy, and precision. Each app we create reflects your purpose and offers users something they’ll truly value.",
    },
  ];
 
  const items = [
    {
      no: "01",
      title: "Discovery & Strategy:",
      description:
        "We understand your goals, audience, and market to set a clear direction for your app’s success.",
    },
    {
      no: "02",
      title: "UI/UX Design: ",
      description:
        "We design clean, intuitive interfaces that make every interaction feel effortless and meaningful.",
    },
    {
      no: "03",
      title: "Development: ",
      description:
        "Our experts use proven frameworks and coding practices to ensure performance and security at every layer.",
    },
    {
      no: "04",
      title: "Testing: ",
      description:
        "We test across devices and scenarios to ensure your app runs flawlessly before release.",
    },
    {
      no: "05",
      title: "Deployment: ",
      description:
        "Your app goes live on stores, fully optimized for visibility and user adoption.",
    },
    {
      no: "06",
      title: "Maintenance & Support: ",
      description:
        "We monitor, update, and refine your app to keep it secure and performing at its best.",
    },
  ];

  return (
    <>
      <ReactHelmet
        title="Mobile App Development Company USA | United Web Developers"
        description="Build powerful digital experiences with the best mobile app development company in the USA. We design, develop, and deliver custom mobile app development services for iOS and Android."
        keywords="mobile app development company usa, mobile app development usa, mobile app development services usa, custom mobile app development usa, mobile app development agency usa, mobile app development cost usa, best mobile app development company usa, custom mobile app development services usa, iOS app development usa, Android app development usa, Ecommerce app development usa"
        baseUrl="https://unitedwebdevelopers.com/mobile-app-development"
      />

      <DefaultLayout>
        <ServicesBanner
          secClass="app-florida-herobanner"
          bgImage={herobanner}
          title="Mobile App Development Company Creating Impact in the USA"
          description="United Web Developers is a trusted brand for mobile app development in the USA. What makes our services loved across the country is our vision to implement your ideas into life as fully functioning mobile apps. Every step of the process is done with your goals at the core."
          cta1="Get Your Mobile Application"
          cta2="hehe"
        />

        <WordPressPerformanceSection
          reverse
          wordpresssecclass="WordPressPerformanceSection blogwriting-about-sec"
          minihead="About Us"
          miniheadclass="minihead"
          secTitle1="Building Meaningful Apps Through Design and Technolo"
          description="Our mobile app development agency in the USA is focused on building memorable digital experiences, rather than just any website or application. Each of our mobile development projects starts with an intuitive design made according to the user behavior of your audience, is taken over by powerful development, and ends with consistent support from our project managers."
          image={aboutimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Learn More About Us"
          aboutbtnlink="/about"
          learnmorebtn="theme-btn theme-btn__yellow"
        />

        <BrandVoiceServices
          secClass="mobiledev-service-sec"
          serviceBoxClass="mobileapp-service-box"
          minihead="More Of Our Services"
          mainhead="Explore The Complete Range of Our App Development Expertise"
          mainpara="We offer a complete range of app development solutions so that your dreams face no obstacle because of the unavailability of skills, expertise, or resources."
          rightIcon={rightIcon}
          btntxt="Talk to Our Developers"
          services={brandservices}
        />

        <MobileAppDevTeam />

        <DomainRegisterationServices
          secClass="mobappdev-process-sec"
          minihead="Our Process"
          headTitle="Our Mobile App Development Process"
          headText="It starts with nothing but a brilliant idea and our commitment to bringing your idea to life with our skills, strategy, tools, and expertise. "
          items={items}
          itemNumberClass="mb-3 colorYellow text-decoration-underline"
          isBtn={false}
        />

        <MobileAppServices />

        <LocationContact
          secClass="wordpress-contact-sec"
          minihead="Contact Us"
          mainhead="Ready For A Mobile Application of Your Own Brand?"
          secPara="Please fill out the form below to allow our team to contact you. We’ll discuss your mobile app development project and carve out the perfect plan for you."
          btntxt="Take the Next Step"
        />

        <ServiceFaqs
          minihead="FAQs"
          mainhead="Answering Your Most Asked Questions"
          mainpara="These FAQs are designed to address common questions about mobile app development services in the USA, helping you make informed decisions for your business."
          faqsData={faqsData}
        />

        {/* <TabsPricing
          secClass="tab-pricing-bg"
          minihead="Packages"
          mainhead="We understand different businesses have different branding needs, and that’s why we have multiple packages for our clients. You can simply choose the one you like or contact us and our representative will guide you through it. "
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

export default NewMobileAppDevelopment;
