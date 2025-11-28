import React, { useState } from "react";
import ReactHelmet from "../../components/ReactHelmet";
import DefaultLayout from "../../components/DefaultLayout";
import ServicesBanner from "../../components/ServicesBanner";
import herobanner from "../../assets/images/services/webappdevelopment/herobanner.webp";
import about from "../../assets/images/services/webappdevelopment/about.webp";
import webappimg3 from "../../assets/images/services/webappdevelopment/webappimg3.webp";
import chooseimg from "../../assets/images/services/webappdevelopment/chooseimg.webp";
import services from "../../assets/images/services/webappdevelopment/services.webp";
import ServicesAboutSec from "../../components/ServicesAboutSec";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import FrontendServices from "../../components/FrontendServices";

import whychoose1 from "../../assets/images/services/ecommercedevelopment/bulb.svg";
import whychoose2 from "../../assets/images/services/ecommercedevelopment/target.svg";
import whychoose3 from "../../assets/images/services/ecommercedevelopment/support.svg";
// import servicesaboutimg from "../../assets/services/webappdevelopment/herobanner.webp";
import service1Icon from "../../assets/images/icons/webapp-development/service1.svg";
import service2Icon from "../../assets/images/icons/webapp-development/service2.svg";
import service3Icon from "../../assets/images/icons/webapp-development/service3.svg";
import service4Icon from "../../assets/images/icons/webapp-development/service4.svg";
import service5Icon from "../../assets/images/icons/webapp-development/service5.svg";
import service6Icon from "../../assets/images/icons/webapp-development/service6.svg";
import pixleperfectimg1 from "../../assets/images/services/webappdevelopment/portfolio1.webp";
import pixleperfectimg2 from "../../assets/images/services/webappdevelopment/portfolio2.webp";
import pixleperfectimg3 from "../../assets/images/services/webappdevelopment/portfolio3.webp";
import pixleperfectimg4 from "../../assets/images/services/webappdevelopment/portfolio4.webp";
import pixleperfectimg5 from "../../assets/images/services/webappdevelopment/portfolio5.webp";
import pixleperfectimg6 from "../../assets/images/services/webappdevelopment/portfolio6.webp";
import serve1 from "../../assets/images/services/webappdevelopment/serve1.webp";
import serve2 from "../../assets/images/services/webappdevelopment/serve2.webp";
import serve3 from "../../assets/images/services/webappdevelopment/serve3.webp";
import serve4 from "../../assets/images/services/webappdevelopment/serve4.webp";
import serve5 from "../../assets/images/services/webappdevelopment/serve5.webp";
import serve6 from "../../assets/images/services/webappdevelopment/serve6.webp";
import DomainRegisterationServices from "../../components/DomainRegisterationServices";
import PixelPerfectSec from "../../components/PixelPerfectSec";
import Lightbox from "yet-another-react-lightbox";
import WeServe from "../../components/WeServe";
import LocationContact from "../../components/LocationContact";
import ServiceFaqs from "../../components/ServiceFaqs";
import { dynamictabsData } from "../../data";
import TabsPricing from "../../components/TabsPricing";
import HomeBlogsSec from "../../components/HomeBlogsSec";

const WebAppDevelopment = () => {
  const frontendservices = [
    {
      title: "Single Page Applications (SPAs):",
      description:
        "A well-built SPA provides your users with a smooth, instant experience, eliminating the need for constant page reloads. Our team delivers SPAs designed with scalability, speed, and intuitive user flow in mind, ensuring you get the most from web app development services in USA without complexity.",
      icon: service1Icon,
      list: [
        "Interactive interface planning",
        "Performance optimized architecture",
        "Smooth user flow design",
      ],
    },
    {
      title: "Progressive Web App Development (PWA)",
      description:
        "PWAs combine the accessibility of the web with the feel of a native mobile app. From offline functionality to fast loading screens, we build PWAs that reflect the standards of a top web app development company in USA with consistency and precision.",
      icon: service2Icon,
      list: [
        "High-performing features",
        "TApp like user experience",
        "Advanced caching strategies",
      ],
    },
    {
      title: "Custom Web Application Development",
      description:
        "Some ideas need more than a drag-and-drop template. Our team creates fully tailored applications that match your operations perfectly, giving your business the advantage of premium custom web app development services in USA that support long-term growth.",
      icon: service3Icon,
      list: [
        "Requirement analysis and planning",
        "Fully custom architecture",
        "Scalable backend systems",
      ],
    },
    {
      title: "Shopify Web Applications",
      description:
        "When your Shopify store needs advanced functionality, custom logic, or intelligent automation, our team develops applications that enhance the entire ecosystem. You get the expertise of a trusted web app development agency in USA with a focus on practical results.",
      icon: service4Icon,
      list: [
        "Custom Shopify app development",
        "Store automation tools",
        "Private and public app creation",
      ],
    },
    {
      title: "WIX Web Application Integrations",
      description:
        "We turn WIX sites into powerful digital systems with custom apps, dashboards, and functional extensions. Our solutions reflect the innovation you expect from leading web app development companies in USA and ensure your site evolves with your goals",
      icon: service5Icon,
      list: [
        "Custom WIX app logic",
        "User dashboard development",
        "API integrations",
      ],
    },
    {
      title: "Full-Stack Web App Engineering",
      description:
        "When your project requires both the frontend and backend, our full-stack team delivers complete systems that communicate smoothly and scale with your business, developing frontends that are intuitive and backends that are as fast and high-performing as mobile apps are.",
      icon: service6Icon,
      list: [
        "Frontend and backend development",
        "Database planning and structuring",
        "API creation and integration",
      ],
    },
  ];

  const items = [
    {
      no: "01",
      title: "Understanding You",
      description:
        "Before we write a single line of code, we understand your brand, needs, audience, and more, everything that is important for success.",
    },
    {
      no: "02",
      title: "Designing the Logic",
      description:
        "Here we develop the logic of your web app. Every screen, button, every pathway is designed and connected on a wireframe so we have how the web app will perform.",
    },
    {
      no: "03",
      title: "Developing the Logic",
      description:
        "Our goal is the same as yours. You want a web app that works the way you want, and we also want to develop a web app that works the way you want.",
    },
    {
      no: "04",
      title: "Testing and QA",
      description:
        "We stress every feature, push every component, and remove anything that slows the experience.",
    },
    {
      no: "05",
      title: "Deploying Your Web App",
      description:
        "Your application is rolled out on whatever platform you want. ",
    },
    {
      no: "06",
      title: "Post-launch Maintenance",
      description:
        "A web app is never truly finished. As your business evolves, we help your platform evolve with it.",
    },
  ];

  const webwhylist = [
    {
      img: whychoose1,
      title: "Ideas with Intent:",
      text: "We do not pitch random features. We design solutions that serve a purpose, support your workflow, and create real value for the people who use your platform.",
    },
    {
      img: whychoose2,
      title: "Built for Your Goals:",
      text: "Every decision, from functionality to user flow, is shaped around what your business wants to achieve.",
    },
    {
      img: whychoose3,
      title: "Support that Understands Growth:",
      text: "Technology changes. Your business changes. We stay with you as your product evolves, helping it stay sharp, fast, and ready for whatever comes next.",
    },
  ];

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

  const faqsData = [
    {
      header: "What makes your web app development approach different from other companies?",
      content:
        "We focus on strategy before screens. Your app is designed around real workflows, real users, and long-term growth, rather than rushed development.",
    },
    {
      header: "How long does it take to build a custom web application?",
      content:
        "Most projects take six to twelve weeks, depending on features, integrations, and complexity. We provide you with a clear timeline before development begins.",
    },
    {
      header: "Do you offer ongoing support after the web app is launched?",
      content:
        "Yes. We provide continuous improvements, performance monitoring, feature additions, and technical support as your business grows.",
    },
    {
      header: "Can you work with my existing tools or systems?",
      content:
        "Absolutely. We integrate seamlessly with CRMs, ERPs, APIs, payment systems, databases, and any tools your business relies on.",
    },
    {
      header: "How much does a custom web app cost?",
      content:
        "Pricing depends on scope and functionality. We create tailored quotes based on your exact needs, not preset packages.",
    },
  ];

  const serves = [
    { text: "Healthcare", img: serve1 },
    { text: "Construction", img: serve2 },
    { text: "Manufacturing", img: serve3 },
    { text: "Sports", img: serve4 },
    { text: "Insurance", img: serve5 },
    { text: "Real Estate", img: serve6 },
  ];
  return (
    <>
      <ReactHelmet
        title="Web App Development in USA"
        description={` United Web Developers offers Web App Development in USA built for speed, growth, and seamless user experiences. Turn ideas into powerful, scalable web applications that perform nonstop`}
        keywords="web development, custom website, react development, logo design, digital marketing, social media marketing, web design"
        baseUrl="https://unitedwebdevelopers.com/web-app-development"
      />
      <DefaultLayout footerTitle="Let Your <span class='colorYellow'>Mobile Ap</span><br/> Speak For Your Brand’s Brilliance">
        <ServicesBanner
          secClass="app-florida-herobanner"
          bgImage={herobanner}
          title="Build Web Apps That Feel Just Like Mobile Apps"
          description="Imagine having an employee who never slows down, always arrives on time, and is ready to deliver whenever you need them to; that’s how web apps are! At United Web Developers, we offer the kind of web app development in USA that keeps your business moving forward even when everyone else is off the clock."
          descriptiontwo="Unlock new possibilities with a custom web app."
          cta2="hehe"
          cta1="Start Your Project"
        />
        <WordPressPerformanceSection
          reverse
          minihead="Built to Perform"
          miniheadclass="minihead"
          secTitle1="One Part of Your Business That "
          secTitle2="Never Slows Down"
          description="A well-built web application does more than sit on a server. It becomes the quiet engine that keeps your business running globally, with focus and consistency. Web apps simplify your processes, automate the tasks you never want to do manually, and give your customers an effortless digital experience that reflects the professionalism of your brand. They scale as you grow, adapt as your needs evolve, and stay available every hour of the day. When a business invests in a strong web application, it gains something rare in the digital world. Speed, stability, and a system that works just as hard as the people behind it."
          image={about}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Talk to Us"
          aboutbtnlink="/contact-us"
          learnmorebtn="theme-btn theme-btn__yellow"
        />

        <FrontendServices
          minihead="Services"
          mainhead="Web App Services Designed to Think, Adapt, and Perform"
          mainpara="Our development is shaped by strategy, engineered with clarity, and delivered with the intention of helping your business grow smartly."
          // btntxt="See How Service Can Help You"
          services={frontendservices}
        />

        <WordPressPerformanceSection
          minihead="About Us"
          miniheadclass="minihead d-none"
          secTitle1="Trusted by Americans. Driven by Results"
          secTitle2="Dream Of"
          description="While most teams focus on screens and buttons, we focus on them too, but also on what happens when visitors are scrolling. The micro decisions, the data flow, the silent operations that make your platform feel alive. This is where clever engineering meets practical strategy, brought together by a web app development company in USA that prefers building solutions with intention, not imitation."
          description2="If you believe your digital product should feel sharp, curious, and unmistakably yours, you are at the right place."
          image={webappimg3}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Get Free Consultation"
          aboutbtnlink="/contact-us"
          learnmorebtn="theme-btn theme-btn__yellow mt-4"
        />
        <DomainRegisterationServices
          minihead="Process"
          headTitle="How Successful Web Apps are Developed"
          headText="Building a great web application is not magic; It’s a method. At United Web Developers, every project follows a structured workflow designed to eliminate uncertainty and enhance clarity."
          items={items}
          itemNumberClass="mb-3 colorYellow text-decoration-underline"
          isBtn={false}
        />

        <WordPressPerformanceSection
          wordpresssecclass="WordPressPerformanceSection wordpress-choose-listsec"
          minihead="The Best in Business"
          miniheadclass="minihead"
          secTitle1="A Smarter Reason to"
          secTitle2="Build With Us"
          description="Your web app deserves a team that thinks before it codes. At United Web Developers, we approach every project with curiosity, strategy, and a commitment to building something that genuinely improves how your business works. You are not getting a vendor. You are getting a team that treats your product like its own."
          image={chooseimg}
          imgClass="w-50 mx-auto d-block"
          whyChooseItems={webwhylist}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Learn More About Our Expertise"
          aboutbtnlink="/contact"
          learnmorebtn="d-none"
          reverse={true}
        />

        <PixelPerfectSec
          minihead="Portfolio"
          secTitle="Designs filled with Industry-Leading Solutions"
          secDescription="Swipe through our web app designs that are developed through logic, creativity, and the way real businesses grow."
          projectsData={webDesignPortfolioData}
          onImageClick={handleImageClick}
        />

        <WeServe title="Industries We Serve" serves={serves} />

        <LocationContact
          secClass="wordpress-contact-sec"
          minihead="Connect With Us"
          mainhead="Start Your Web App Development with United Web Developers"
          secPara="Work with a team that listens, thinks, and builds web apps that truly perform for you."
          btntxt="Talk to Us"
        />

        <ServiceFaqs
          minihead="Frequently Asked Questions"
          mainhead="All Your Web App-Related Queries, Answered Here!"
          mainpara="Got questions about our process, pricing, or performance? You’re in the right place. Here’s everything you need to know before we start building your next big Web App project"
          faqsData={faqsData}
        />

        {/* <TabsPricing
          secClass="tab-pricing-bg"
          minihead="Pricing Plans"
          mainhead="Web App Development Packages for Brands That Expect More"
          secPara="Start your project with a team that transforms ideas into smart, scalable web applications built for real performance and growth."
          tabsData={dynamictabsData}
        /> */}

        <HomeBlogsSec
          blogminihead="Blogs & Articles"
          blogSecTitle="Insights Related to Websites, Web Apps, and More"
          blogSubtext="Explore expert-written blogs on digital marketing, web development services, platform comparisons, and growth strategies for modern online sellers"
          // blogsData={blogsData}
          // categorySlug="custom-website-development"
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

export default WebAppDevelopment;
