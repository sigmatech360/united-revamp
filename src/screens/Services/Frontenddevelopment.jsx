import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import ServicesBanner from "../../components/ServicesBanner";
import herobanner from "../../assets/images/services/frontenddevelopment/herobanner.webp";
import industry1 from "../../assets/images/services/frontenddevelopment/industry1.webp";
import industry2 from "../../assets/images/services/frontenddevelopment/industry2.webp";
import industry3 from "../../assets/images/services/frontenddevelopment/industry3.webp";
import portfolio1 from "../../assets/images/services/frontenddevelopment/portfolio1.webp"; 
import portfolio2 from "../../assets/images/services/frontenddevelopment/portfolio2.webp"; 
import portfolio3 from "../../assets/images/services/frontenddevelopment/portfolio3.webp"; 
import portfolio4 from "../../assets/images/services/frontenddevelopment/portfolio4.webp";
import Whatwedo from "../../components/Whatwedo";
import FrontendServices from "../../components/FrontendServices";
import Industryslider from "../../components/Industryslider";
import FrontendScreen from "../../components/FrontendScreen";
import FrontendProjects from "../../components/FrontendProjects";
import LocationContact from "../../components/LocationContact";
import ServiceFaqs from "../../components/ServiceFaqs";
import TabsPricing from "../../components/TabsPricing";
import HomeBlogsSec from "../../components/HomeBlogsSec";
import { dynamictabsData } from "../../data";
import ReactHelmet from "../../components/ReactHelmet";

const Frontenddevelopment = () => {
  const frontendservices = [
    {
      title: "Custom Front-End Development",
      description:
        "We design from scratch, no templates, no shortcuts. Our custom front-end development solutions in USA ensure your site’s structure, interactivity, and performance align perfectly with your goals.",
    },
    {
      title: "Single Page Apps (SPA) Development",
      description:
        "Build lightning-fast SPAs that feel like native apps. We utilize frameworks such as React, Angular, and Vue.js for frontend development in USA to create seamless transitions and optimized performance for an exceptional user experience.",
    },
    {
      title: "Front-End Architecture & Design",
      description:
        "A website that scales effortlessly starts with the right architecture. We engineer scalable, modular, and maintainable systems that future-proof your digital presence.",
    },
    {
      title: "UI/UX Development",
      description:
        "From visual harmony to micro-interactions, our UI/UX development ensures every click is intuitive and every scroll is enjoyable. It’s not just usability; it’s emotional design.",
    },
    {
      title: "CMS Design & Development",
      description:
        "Need control without complexity? Our CMS front-end solutions integrate flexibility with stunning visuals, enabling you to manage and modify your site with ease and minimal friction.",
    },
    {
      title: "Progressive Web App (PWA) Development",
      description:
        "Harness the speed of native apps and the reach of the web. PWAs we develop are fast, installable, and work offline, providing users with an app-like experience without requiring downloads.",
    },
    {
      title: "Interactive Elements",
      description:
        "Motion meets meaning. We add dynamic animations, scroll effects, and transitions that guide users naturally while keeping your brand’s aesthetic intact.",
    },
    {
      title: "Cross-Browser Compatibility",
      description:
        "Consistency is key. Every website we build performs flawlessly across all browsers, ensuring your message reaches your audience, wherever they are, on any device. ",
    },
    {
      title: "Continuous Integration & Deployment",
      description:
        "Our DevOps-backed CI/CD pipeline ensures faster releases, minimal downtime, and a perfectly smooth post-launch experience.",
    },
  ];

   const faqsData = [
    {
      header: "What makes United Web Developers different from other front-end agencies?",
      content:
        "We don’t just code what you imagine; we translate your ideas into fast, functional, and flawlessly responsive interfaces that actually convert visitors into customers.",
    },
    {
      header: "Do you provide front-end development for all devices and screen sizes?",
      content:
        "Absolutely, every project is built with responsive architecture to ensure pixel-perfect visuals and optimal performance across mobile devices, tablets, desktops, and ultra-wide screens.",
    },
    {
      header: "Which technologies do you specialize in for front-end development?",
      content:
        "We specialize in React, Angular, and Vue.js front-end development in USA, delivering sleek, scalable, and high-performing user interfaces that work flawlessly across browsers and platforms.",
    },
    {
      header: "Can you optimize my website for SEO, AEO, and GEO performance?",
      content:
        "Yes, we craft code structures and content layouts optimized for Search Engines, Answer Engines (AEO), and Geo-targeted SEO, so your site ranks higher and loads smarter.",
    },
    {
      header: "How long does a typical front-end development project take?",
      content:
        "Project timelines depend on scope and complexity, but most front-end builds are completed within 4-8 weeks, including testing, optimization, and revisions.",
    },
    {
      header: "What other web development platforms do you work on?",
      content:
        "Whatever you need, we can design, develop, and deploy with precision. From CMS to offering custom solutions, we offer all IT-related services.",
    },
  ];

  const portfolioImages = [portfolio1, portfolio2, portfolio3, portfolio4];

  const industries = [
    {
      title: "E-Commerce",
      //link: "/ecommerce-development",
      description:
        "We build experiences that sell, literally. From intuitive product grids to frictionless checkout flows, our front-end design and development team in USA ensures that every shopper enjoys a smooth, secure, and visually rich journey. When conversions meet creativity, e-commerce turns into an experience, not just a transaction.",
      image: industry1,
    },
    {
      title: "Sports",
      //link: "/healthcare-development",
      description:
        "We code energy into pixels and designs. Doesn’t matter if it’s real-time scoreboards, athlete dashboards, or fan-centric portals, our front-end developers bring the same thrill of the game to the screen, dynamic, fast, and built for peak performance.",
      image: industry2,
    },
    {
      title: "Logistics",
      //link: "/real-estate-development",
      description:
        "Precision matters in logistics, as well as in code. We build responsive dashboards, tracking systems, and analytics-driven portals that simplify operations and keep businesses moving. Real-time data, zero delay, total clarity.",
      image: industry3,
    },
    {
      title: "Healthcare",
      //link: "/real-estate-development",
      description:
        "Clean, compliant, and easy to navigate. Our healthcare front ends make patient portals, appointment systems, and telemedicine apps intuitive, secure, and fully accessible, turning complexity into clarity.",
      image: industry1,
    },
    {
      title: "Education",
      //link: "/real-estate-development",
      description:
        "From e-learning platforms to student dashboards, we create engaging interfaces that make learning interactive and easy to follow because great UX should teach without distraction.",
      image: industry2,
    },
  ];

  return (
    <>

      <ReactHelmet
        title="Frontend Development in USA"
        description="Experience intelligent-built Frontend Development in USA with United Web Developers, the leader in tech-stack, delivering persuasive, responsive, and conversion-driven interfaces that truly perform."
        keywords="front-end development company usa, front-end development agency usa, front-end development services usa, front-end web development usa, front-end design and development usa, custom front-end development usa, React front-end development usa, Angular front-end development usa, Vue.js front-end development usa"
        baseUrl="https://unitedwebdevelopers.com/frontend-development"
      />


      <DefaultLayout>
        <ServicesBanner
          secClass="app-florida-herobanner"
          bgImage={herobanner}
          title="Design Pixel-Perfect Frontend Development, Just as It Looked on Figma"
          description="At United Web Developers, we don’t “interpret” your design; we photocopy it in your code. Fast, tactile, and easy enough, anyone can navigate! With our frontend design and development company in USA, what you see on Figma is what you get on screen."
          cta1="Create Your Web & App Design"
          cta2="hehe"
        />

        <Whatwedo />

        <FrontendServices
          minihead="Services"
          mainhead="Our Frontend Development Services"
          mainpara="At United Web Dev elopers, our front-end development services go beyond code, we create interfaces that move, respond, and convert."
          btntxt="See How Service Can Help You"
          services={frontendservices}
        />

        <Industryslider
          minihead="Industries We Serve"
          mainhead="Powering Every Industry That Moves the World"
          mainpara="Serving multiple industries and solving the same challenge in all, utilizing Angular and React front-end development in USA to develop web apps that work as the heartbeat of every industry."
          btntxt="Explore More"
          industries={industries}
        />

        <FrontendScreen />

        <FrontendProjects
          minihead="Portfolio"
          mainhead="Business We’ve Empowered through Frontend Development"
          mainpara="Explore how we’ve taken design visions and changed them into interactive realities. Each project showcases our commitment to precision, performance, and seamless front-end development excellence."
          projects={portfolioImages}
          btntxt="View Full Portfolio"
        />


          <LocationContact
          secClass="wordpress-contact-sec"
          minihead="Connect with Us"
          mainhead="Want to Spike Up your Sales?"
          secPara="Have a question? Want to show us your project? Or simply curious? Talk to us and we’ll show you the possibilities you can unlock with frontend development."
          btntxt="Talk to Us"
        />

         <ServiceFaqs
          minihead="Frequently Asked Questions"
          mainhead="All Your Frontend-Related Questions Answered Here!"
          mainpara="Swipe through our FAQs section to find all your answers. If you can’t find what you're looking for, please fill out the form and ask away. We’re sure you’ll find your answers and more with us!"
          faqsData={faqsData}
        />

        {/* <TabsPricing
          secClass="tab-pricing-bg"
          minihead="Pricing Plans"
          mainhead="Select the Right Tech-Stack for Your Brand"
          secPara="The right design has the power to increase your sales by 10x… literally! If you’re a startup or an enterprise, select the right pricing model and see how your sales can skyrocket just with great designs"
          tabsData={dynamictabsData}
        /> */}

        <HomeBlogsSec
          blogminihead="Blogs & More"
          blogSecTitle="Frontend Trends, Tools, and Tech - Straight from the Developers"
          blogSubtext="ead our blogs to stay up-to-date about all the new tech stacks being launched and how they can help you!"
          // blogsData={blogsData}
          // categorySlug="custom-website-development"
        />

      </DefaultLayout>
    </>
  );
};

export default Frontenddevelopment;
