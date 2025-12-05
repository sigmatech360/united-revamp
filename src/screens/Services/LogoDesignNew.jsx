import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import ServicesBanner from "../../components/ServicesBanner";
import herobanner from "../../assets/images/services/logodesign/herobanner.webp";
import herobannerinner from "../../assets/images/services/logodesign/herobanner-inner-img.webp";
import aboutimg from "../../assets/images/services/logodesign/aboutimg.webp";
import service1 from "../../assets/images/services/logodesign/service1.webp";
import service2 from "../../assets/images/services/logodesign/service2.webp";
import service3 from "../../assets/images/services/logodesign/service3.webp";
import service4 from "../../assets/images/services/logodesign/service4.webp";
import service5 from "../../assets/images/services/logodesign/service5.webp";
import service6 from "../../assets/images/services/logodesign/service6.webp";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import LogoDesignService from "../../components/LogoDesignService";
import BackendChoose from "../../components/BackendChoose";
import doublecheck from "../../assets/images/services/backenddevelopment/doublcheck.svg"
import chooseimg from "../../assets/images/services/logodesign/chooseimg.webp";
import LocationContact from "../../components/LocationContact";
import ServiceFaqs from "../../components/ServiceFaqs";
import TabsPricing from "../../components/TabsPricing";
import { dynamictabsData } from "../../data";
import HomeBlogsSec from "../../components/HomeBlogsSec";
import LogoDesignPortfolio from "../../components/LogoDesignPortfolio";
import Industryslider from "../../components/Industryslider";
import industry1 from "../../assets/images/services/logodesign/industry1.webp";
import industry2 from "../../assets/images/services/logodesign/industry2.webp";
import industry3 from "../../assets/images/services/logodesign/industry3.webp";
import industry4 from "../../assets/images/services/logodesign/industry4.webp";
import industry5 from "../../assets/images/services/logodesign/industry5.webp";
import ReactHelmet from "../../components/ReactHelmet";

const LogoDesignNew = () => {


    const industries = [
        {
          title: "Website Design",
         // link: "/ecommerce-development",
          description:
            "We build sleek, responsive websites that feel like your brand. Every layout, color, and button works together to look great, run smoothly, and give users an experience they actually enjoy while boosting your credibility.",
          image: industry1,
        },
        {
          title: "Newsletter Design",
          //link: "/healthcare-development",
          description:
            "We craft newsletters that don’t get ignored. Branded, visually engaging, and tailored for clicks, they grab attention instantly, tell your story clearly, and make readers want to take action without feeling spammy or boring.",
          image: industry2,
        },
        {
          title: "Creative Ads",
          //link: "/real-estate-development",
          description:
            "Our ads aren’t just pretty; they are made to sell. Combining sharp copy, bold design, and smart strategy, we create digital ads that stop scrollers, capture interest, and drive results. Your audience won’t just see them, they’ll click.",
          image: industry3,
        },
         {
          title: "Video Animation",
         // link: "/ecommerce-development",
          description:
            "Bring your brand to life with animated videos that entertain and stick. Fun, dynamic, and shareable, they tell your story in seconds, making complex ideas simple and giving your audience something they actually want to watch.",
          image: industry4,
        },
        {
          title: "Product Packaging Design",
          //link: "/healthcare-development",
          description:
            "Packaging that makes your product irresistible. Every detail, starting from visuals to materials, tells your story, connects with customers emotionally, and boosts sales. Because your product packaging is not just a box; it’s your brand’s first handshake with the buyer.",
          image: industry5,
        },
         {
          title: "Creative Ads",
          //link: "/real-estate-development",
          description:
            "Our ads aren’t just pretty; they are made to sell. Combining sharp copy, bold design, and smart strategy, we create digital ads that stop scrollers, capture interest, and drive results. Your audience won’t just see them, they’ll click.",
          image: industry3,
        },
      ];


     const faqsData = [
    {
      header: " How long does it take to design a logo?",
      content:
        "Logo design usually takes 7-14 business days, depending on complexity and revisions. We ensure each design is polished, unique, and fully aligns with your brand vision.",
    },
    {
      header: "Can I request revisions?",
      content:
        "Yes, you can request multiple revisions until your logo perfectly reflects your brand. Our goal is your complete satisfaction with a design that stands out and resonates.",
    },
    {
      header: "What file formats will I get?",
      content:
        "We provide all essential file formats for logo designs, including vector (AI, EPS), PNG, JPEG, and any custom format for web, print, or social media use.",
    },
    {
      header: " Will my logo work across all platforms?",
      content:
        "Yes, we design logos to be fully adaptable for websites, social media, print, merchandise, and mobile devices, ensuring consistent branding everywhere your audience sees you.",
    },
    {
      header: "Can you redesign an existing logo?",
      content:
        "Yes, we refresh and modernize your current logo while preserving brand identity. The result is a professional, contemporary design ready for digital and print use.",
    },
    {
      header: "Do you provide copyright ownership?",
      content:
        "Yes, after completion, your logo is fully owned by you. You gain complete copyright, giving full control for commercial, digital, and marketing use.",
    },
  ];


  return (
    <section className="overflow-class">

        <ReactHelmet
        title=" United Web Developers | Creative Logo Design Services"
        description="Bring your brand to life with United Web Developers. We craft unique, memorable logo designs in the USA that stand out in the digital era. Discover a range of styles from wordmark, mascot, emblem, and more"
        keywords="Logo Design company Florida, custom mobile Logo Design Florida, Logo Design agency Florida, Logo Design cost Florida, custom logo Design services Florida, logo Design Florida, logo Design Florida"
        baseUrl="https://unitedwebdevelopers.com/logo-design"
      />


      <DefaultLayout>
        <ServicesBanner
          secClass="app-florida-herobanner doomain-registeration-herobanner"
          bgImage={herobanner}
          servicesbannerimg={herobannerinner}
          title="Your Brand, Illustrated With a Bold Logo Design"
          description="We turn the visions and ideas of your brand into logos that speak louder than words. Every curve, color, and line is crafted with digital flair that ensures your brand doesn’t just exist, but it thrives everywhere it’s seen. The logos at United Web Developers aren’t just pretty; they’re a complete strategy."
          cta1="Get Your Logo"
          cta2="hehe"
        />

         <WordPressPerformanceSection
          reverse
          minihead="About Us"
          miniheadclass="minihead"
          secTitle1="Designing Logos With Heart And Brain"
          description="At United Web Developers, we combine creativity with strategy to craft logos that connect. Every brand is unique, and we ensure your logo reflects your story, values, and vibe"
          descriptiontwo="Our team lives and breathes branding in the digital era. From startups to established names, we create logos that leave lasting impressions and make your brand unforgettable."
          image={aboutimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="More About United Web Developers"
          aboutbtnlink="/about"
          learnmorebtn="theme-btn theme-btn__yellow"
        />

        <LogoDesignService/>



        <BackendChoose
            minihead="Why Choose Us?"
            mainhead="Expertly Crafted Logos That Work"
            mainpara="Our logos aren’t another visual design you add to your brand. These logos are made to be your brand voice, how you connect with your audience. Our logos are made to tell stories that can’t be unheard. "
            points={[
              "100% custom, original designs tailored to your brand",
              "Strategic approach: aesthetics + marketing + psychology",
              "Versatile logos for web, print, and social platforms",
              "Quick turnaround without compromising creativity",
              "Expert designers with experience across industries",
              "Friendly, collaborative, and creatively bold process",
            ]}
            doublecheck={doublecheck}
            chooseimg={chooseimg}
            showButton={true}
            buttonText="Get Your Custom Logo Design"
            buttonLink="/contact-us"
          />


          <LogoDesignPortfolio/>



          <Industryslider
          secClass="logodesign-industry-slider"
          headCol="col-lg-10"
          minihead="More of Our Services "
          mainhead="Creative Design Services For Every Platform"
          description="Our services extend beyond just designing logos. Our comprehensive creative suite includes branding, visual identity, marketing materials, and digital assets, all tailored to ensure your brand prospers both online and offline."
          industries={industries}
        />




        <LocationContact
          secClass="wordpress-contact-sec"
          minihead="Contact Us"
          mainhead="Start Your Logo Journey Today"
          secPara="Have a vision you wanna see become real? Let’s bring it to life with a logo design that leaves a mark on every corner it touches."
          btntxt="Get in Touch "
        />

        <ServiceFaqs
          minihead="Frequently Asked Questions"
          mainhead="Everything You Need To Know About Our Logos"
          mainpara="Branding can be tricky, especially when it comes to a logo design. Telling a story with just a little visual requires trust in the designers and the planners. And to gain your trust, we are answering some of the most asked questions below. "
          faqsData={faqsData}
        />
{/* 
        <TabsPricing
          secClass="tab-pricing-bg"
          minihead="Pricing Plans"
          mainhead="Logo Packages For Every Brand"
          secPara="We’ve got a basic logo plan for everyone, and beyond that, we offer plans for startups, growing brands, and enterprises. Each package includes professional design, revisions, and full brand ownership."
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
    </section>
  );
};

export default LogoDesignNew;
