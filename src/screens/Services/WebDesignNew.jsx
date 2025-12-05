import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import ServicesBanner from "../../components/ServicesBanner";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import LocationContact from "../../components/LocationContact";
import ServiceFaqs from "../../components/ServiceFaqs";
import TabsPricing from "../../components/TabsPricing";
import { dynamictabsData } from "../../data";
import HomeBlogsSec from "../../components/HomeBlogsSec";
import herobanner from "../../assets/images/services/webdesign/herobanner.webp";
import aboutimg from "../../assets/images/services/webdesign/aboutimg.webp";
import FourDetailBox from "../../components/FourDetailBox";
import Industryslider from "../../components/Industryslider";
import industry1 from "../../assets/images/services/logodesign/industry1.webp";
import industry2 from "../../assets/images/services/logodesign/industry2.webp";
import industry3 from "../../assets/images/services/logodesign/industry3.webp";
import industry4 from "../../assets/images/services/logodesign/industry4.webp";
import industry5 from "../../assets/images/services/logodesign/industry5.webp";
import WebDesignService from "../../components/WebDesignService";
import OurWorkProcessSec from "../../components/OurWorkProcessSec";
import whychoose1 from "../../assets/images/services/webdesign/whychoose1.svg";
import whychoose2 from "../../assets/images/services/webdesign/whychoose2.svg";
import whychoose3 from "../../assets/images/services/webdesign/whychoose3.svg";
import WebDesignPortfolio from "../../components/WebDesignPortfolio";
import ReactHelmet from "../../components/ReactHelmet";

const WebDesignNew = () => {


    const webwhylist = [
        {
          img: whychoose1,
          title: "Custom Designs",
          text: "Tailored websites that reflect your brand, captivate visitors, and stand out in a crowded digital space.",
        },
        {
          img: whychoose2,
          title: "User-Centered ",
          text: "Each website is intuitive, accessible, and designed to guide users effortlessly toward desired actions.",
        },
        {
          img: whychoose3,
          title: "SEO & Performance",
          text: "Fast, responsive, and optimized for search engines so your brand gets discovered and remembered.",
        },
      ];


  const industries = [
    {
      title: "Logo Design",
      // link: "/ecommerce-development",
      description:
        "Memorable, strategic logos crafted to embody your brand’s story and personality, designed for maximum impact.",
      image: industry1,
    },
    {
      title: "Newsletter Design",
      //link: "/healthcare-development",
      description:
        "Branded, eye-catching emails that grab attention, communicate clearly, and drive action without being spammy.",
      image: industry2,
    },
    {
      title: "Creative Ads",
      //link: "/real-estate-development",
      description:
        "Digital campaigns combining striking visuals, compelling copy, and strategy to engage your audience and boost conversions.",
      image: industry3,
    },
    {
      title: "Video Animation",
      // link: "/ecommerce-development",
      description:
        "Animated content that entertains, informs, and sticks in viewers’ minds, simplifying complex messages with style.",
      image: industry4,
    },
    {
      title: "Product Packaging Design",
      //link: "/healthcare-development",
      description:
        "Packaging that captivates and sells, merging design, functionality, and brand storytelling to create an unforgettable first impression.",
      image: industry5,
    },
    {
      title: "Creative Ads",
      //link: "/real-estate-development",
      description:
        "Digital campaigns combining striking visuals, compelling copy, and strategy to engage your audience and boost conversions.",
      image: industry3,
    },
  ];

    const stepsData = [
    {
      stepNum: "01",
      stepName: "Discovery",
    },
    {
      stepNum: "02",
      stepName: "Planning",
    },
    {
      stepNum: "03",
      stepName: "Design",
    },
    {
      stepNum: "04",
      stepName: "Development",
    },
    {
      stepNum: "05",
      stepName: "Launch",
    },
  ];

  const faqsData = [
    {
      header:
        "How long does it take to design a website?",
      content:
        "Typically 3-6 weeks, depending on complexity, pages, and features. We ensure every website is polished, responsive, and aligned with your brand vision.",
    },
    {
      header: "Can I request revisions?",
      content:
        "Absolutely, we offer multiple rounds of revisions so your website perfectly reflects your brand, voice, and goals without compromise.",
    },
    {
      header:
        "Will my website work on mobile devices?",
      content:
        "Yes, every site is fully responsive, optimized for desktops, tablets, and smartphones to ensure a seamless user experience on any device.",
    },
    {
      header: "Do you provide SEO optimization?",
      content:
        "Yes, we optimize structure, content, and meta elements to help your site rank on search engines while maintaining a user-friendly and engaging design.",
    },
    {
      header: "Can you redesign my existing website?",
      content:
        "Yes, we redesign existing websites by improving visuals, usability, and performance while keeping your brand identity intact.",
    },
    {
      header: "Who owns the website after launch?",
      content:
        "Once the website design process is complete, your website and all assets are fully owned by you, giving you complete freedom for updates, usage, and expansion.",
    },
  ];

  return (
    <>

          <ReactHelmet
        title="United Web Developers | Creative Website Design Services"
        description="From sleek layouts to pixel-perfect UX, United Web Developers builds websites that captivate, convert, and communicate your brand story across every screen."
        keywords="website design usa, website design company​ usa, website design agency usa, website design services usa, ecommerce website design usa, custom website design​ usa, best website designs​ usa, affordable website design usa"
        baseUrl="https://unitedwebdevelopers.com/web-design"
      />



      <DefaultLayout>
        <ServicesBanner
          secClass="app-florida-herobanner doomain-registeration-herobanner"
          bgImage={herobanner}
          title="Building Website Designs that Grow Without a Pause"
          description="Your website isn’t just another page on the web, it’s the digital handshake your brand offers the world. At United Web Developers, we design responsive, visually stunning, and user-friendly websites that tell your story, boost engagement, and leave visitors wanting more."
          cta1="Get Your Website"
          cta2="hehe"
        />

        <WordPressPerformanceSection
          reverse
          minihead="About Us"
          miniheadclass="minihead"
          secTitle1="Building Websites That Actually Feel Like You"
          description="At United Web Developers, we blend creativity, strategy, and modern tech to build websites that actually work across the world. Every layout, color, and interaction is designed to reflect your brand and engage users."
          descriptiontwo="Our team crafts websites that are intuitive, fast, and mobile-friendly. We create website designs in the USA that make your audience stick around and remember you."
          image={aboutimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="More About United Web Developers"
          aboutbtnlink="/about"
          learnmorebtn="theme-btn theme-btn__yellow"
        />


        <WebDesignService/>


        <OurWorkProcessSec
          className="our-work-process__bgWhite"
          secTag="Our Process"
          secTitle="A Smooth Five-Step Process For Website Creation"
          secDescription="We make website design simple, strategic, and stress-free. Our 5-step process ensures your vision comes alive beautifully and efficiently."
          secLastText="Every step is crafted to transform ideas into a digital reality, making your website a true extension of your brand."
          secStepsData={stepsData}
        />


         <WordPressPerformanceSection
          wordpresssecclass="WordPressPerformanceSection wordpress-choose-listsec webdesign-choose-new"
          minihead="Why Choose Us?"
          miniheadclass="minihead"
          secTitle1="Why United Web Developers Stand Out in Web Design"
          description="We don’t just build websites; we create comprehensive digital experiences that effectively connect with your audience, encourage engagement, and leave a lasting impression that wows them."
          whyChooseItems={webwhylist}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Learn More About Our Expertise"
          aboutbtnlink="/about"
          learnmorebtn="d-none"
        />


        <WebDesignPortfolio/>




        <Industryslider
          secClass="webdesign-industry-slider"
          headCol="col-lg-10"
          minihead="More of Our Services "
          mainhead="Expanding Your Brand With Creative Design Services"
          description="Websites are just a part of our design experience. When you launch with our website design agency in the USA, you cover every part of visual and strategic perfection that straight up gets your audience hooked to your brand. "
          industries={industries}
        />

        <section className="four-detail-box">
          <div className="container">
            <FourDetailBox
              countone="500+"
              headone="projects delivered"
              counttwo="90%"
              headtwo="clients satisfaction"
              countthree="5.0"
              headthree="Google Ratings"
              countfour="99%"
              headfour="uptime guarantee"
            />
          </div>
        </section>

        <LocationContact
          secClass="wordpress-contact-sec"
          minihead="Contact Us"
          mainhead="Contact Our Team To Begin Your Website Journey"
          secPara="Your brand deserves a website that leaves an impression every time it shows up. Let’s bring your vision to life with creativity, strategy, and digital expertise."
          btntxt="Get in Touch"
        />

        <ServiceFaqs
          minihead="Frequently Asked Questions"
          mainhead="Helpful Details To Guide Your Website Design Decisions"
          mainpara="Creating a website can feel complex, but there’s nothing that our experts at United Web Developers cannot do. Here’s what you need to know before starting your journey with us:"
          faqsData={faqsData}
        />

        {/* <TabsPricing
          secClass="tab-pricing-bg"
          minihead="Pricing Plans"
          mainhead="Explore the Web Design Packages"
          secPara="We offer plans to fit startups, growing businesses, and enterprises. Each includes custom design, revisions, and full ownership, making your website a long-term digital asset."
          tabsData={dynamictabsData}
        /> */}

        <HomeBlogsSec
          blogminihead="Blogs & More"
          blogSecTitle="Learn about WordPress, Tech, and More on Our Blogs"
          blogSubtext="Read our blogs to stay up-to-date about all the new tech stacks being launched and how they can help you!"
          // blogsData={blogsData}
          // categorySlug="custom-website-development"
        />
      </DefaultLayout>
    </>
  );
};

export default WebDesignNew;
