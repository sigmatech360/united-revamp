import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import ServicesBanner from "../../components/ServicesBanner";
import herobanner from "../../assets/images/services/wordpressdevelopment/herobanner.webp";
import WhyChooseServiceBox from "../../components/WhyChooseServiceBox";
import OurServiceTwoSide from "../../components/OurServiceTwoSide";
import serviceimg1 from "../../assets/images/services/wordpressdevelopment/service-1.webp";
import serviceimg2 from "../../assets/images/services/wordpressdevelopment/service-2.webp";
import serviceimg3 from "../../assets/images/services/wordpressdevelopment/service-3.webp";
import portfolio1 from "../../assets/images/services/wordpressdevelopment/portfolio-1.webp";
import portfolio2 from "../../assets/images/services/wordpressdevelopment/portfolio-2.webp";
import portfolio3 from "../../assets/images/services/wordpressdevelopment/portfolio-3.webp";
import portfolio4 from "../../assets/images/services/wordpressdevelopment/portfolio-4.webp";
import SliderPortfolio from "../../components/SliderPortfolio";
import LocationContact from "../../components/LocationContact";
import ServiceFaqs from "../../components/ServiceFaqs";
import TabsPricing from "../../components/TabsPricing";
import { dynamictabsData } from "../../data";
import BlogsSec from "../../components/BlogsSec";
import HomeBlogsSec from "../../components/HomeBlogsSec";
import ReactHelmet from "../../components/ReactHelmet";

const WordpressDevelopment = () => {
  const servicePointsData = [
    {
      number: "01",
      title: "100% Custom WordPress Websites",
      desc: "Every website is built from scratch, no templates, no shortcuts. We design, code, and launch WordPress websites tailored to your brand’s vision and business goals.",
    },
    {
      number: "02",
      title: "Fast, Secure, and SEO-Optimized Code",
      desc: "Speed and visibility go hand in hand. Our development approach ensures lightning-fast loading times, robust security, and SEO-ready structures that improve rankings.",
    },
    {
      number: "03",
      title: "Experienced Team of Certified Developers",
      desc: "Our in-house experts bring years of technical mastery and creativity, crafting intelligent solutions that perform flawlessly across industries and platforms.",
    },
    {
      number: "04",
      title: "Fully Responsive & Mobile-First Designs",
      desc: "With over half of global traffic coming from mobile, we ensure your website looks stunning and functions perfectly on every screen and device.",
    },
    {
      number: "05",
      title: "Transparent Communication",
      desc: "We believe in clarity from day one, open collaboration, detailed progress updates, and complete project transparency at every stage.",
    },
    {
      number: "06",
      title: "On-Time Delivery Guaranteed",
      desc: "Deadlines matter. We’ve built our reputation as the most reliable WordPress website development company in USA by delivering excellence, always on time, every time.",
    },
  ];

  const siderportfolioimgs = [
    { img: portfolio1 },
    { img: portfolio2 },
    { img: portfolio3 },
    { img: portfolio4 },
  ];

  const faqsData = [
    {
      header: "Why should I choose United Web Developers for WordPress development?",
      content:
        "Because we don’t just build websites, we build growth systems. Our blend of creativity, clean code, and conversion-driven design sets us apart in the WordPress development company USA market.",
    },
    {
      header: "How long will it take to complete my WordPress website?",
      content:
        "Timelines depend on the project’s complexity. A standard website can take 4–6 weeks from strategy to launch, while large-scale builds or integrations may require more.",
    },
    {
      header: "Can you customize my existing website instead of starting from scratch?",
      content:
        "Absolutely, our custom WordPress development services in the USA include website revamps, redesigns, plugin integrations, and speed optimization, no need to rebuild unless it’s strategically necessary.",
    },
    {
      header: "Will my website be optimized for SEO and mobile?",
      content:
        "Yes, every website we develop is fully mobile-responsive and SEO-ready from the start. We use best practices to ensure high performance and visibility across all devices.",
    },
    {
      header: "Do you provide post-launch support and maintenance?",
      content:
        "We sure do, from routine updates to performance monitoring and backups, our maintenance services keep your WordPress site secure, fast, and future-proof.",
    },
    {
      header: "What other web development platforms do you work on?",
      content:
        "Whatever you need, we can design, develop, and deploy with precision. From CMS to offering custom solutions, we offer all IT-related services.",
    },
  ];

  return (
    <>
      <ReactHelmet
        title=" WordPress Development in USA"
        description="Build smarter with United Web Developers, leading WordPress development company in USA. From eCommerce and WooCommerce to custom sites, we design, code, and optimize high-performing WordPress websites."
        keywords="wordpress development company usa, wordpress development services usa, wordpress website development company usa, custom wordpress development usa, custom wordpress development services usa"
        baseUrl="https://unitedwebdevelopers.com/wordpress-development"
      />

      <DefaultLayout>
        <ServicesBanner
          secClass="app-florida-herobanner"
          bgImage={herobanner}
          title="Power Your Web with Tech That Powers 60% of the World’s Web"
          description="We’re the WordPress development company in USA that turns bold ideas and high-performing dreams into flawless digital realities, by designing, coding, and optimizing websites that perform as beautifully as they look."
          cta1="Build Your Next Big Thing"
          cta2="hehe"
        />

        <WhyChooseServiceBox
          minihead="The Best in Business"
          mainhead="Why Leading Businesses Across the USA Trust United Web Developers"
          mainpara="At United Web Developers, we merge innovation, precision, and experience to build WordPress websites that deliver measurable impact. Every project reflects custom craftsmanship, seamless performance, transparent collaboration, and on-time results trusted by leading businesses across the USA."
          servicePoints={servicePointsData}
        />

        <OurServiceTwoSide
          minhead="Services"
          mainhead="WordPress Development is Not the Only Thing We Do"
          mainpara="We utilise WordPress to create a wide range of web pages."
          img1={serviceimg1}
          servicehead1="WooCommerce Development"
          servicepara1="For businesses that want to sell online and don't want to bear the monthly fees of Shopify, WooCommerce is the way to go. We develop flexible, secure, and fully manageable WooCommerce stores that integrate with your existing tools and help you sell smarter across every channel."
          img2={serviceimg2}
          servicehead2="E-Commerce Development"
          servicepara2="Turn your store into an online sales engine, taking thousands of orders every day! Our e-commerce experts create WooCommerce and custom WordPress development services in USA that load fast, look premium, and deliver smooth checkout experiences. "
          img3={serviceimg3}
          servicehead3="Wix Development"
          servicepara3="Not every business needs complex systems; some need simplicity done right. Our Wix development team builds visually striking, high-performing websites that are easy to manage and ready to grow with your business ambitions."
        />

        <SliderPortfolio
          minihead="Portfolio"
          mainhead="WordPress Projects That are Live and Thriving"
          mainpara="Every project we do is a success story because we take our time and we do it right, every time."
          slides={siderportfolioimgs}
          btntxt="Get In Touch"
        />

        <LocationContact
          secClass="wordpress-contact-sec"
          minihead="Connect with Us"
          mainhead="Work with Expert Developers in USA"
          secPara="Have a question? Want to share your project? Or simply curious? Talk to us, share your project, and we’ll show the magic WordPress can do!"
          btntxt="Talk to Us"
        />

        <ServiceFaqs
          minihead="Frequently Asked Questions"
          mainhead="All Your WordPress-Related Queries, Answered Here!"
          mainpara="Got questions about our process, pricing, or performance? You’re in the right place. Here’s everything you need to know before we start building your next big WordPress project."
          faqsData={faqsData}
        />

        {/* <TabsPricing
          secClass="tab-pricing-bg"
          minihead="Pricing Plans"
          mainhead="Affordable Custom WordPress Development Packages in USA"
          secPara="Swipe through our WordPress development services and find the package that speaks your language, code, creativity, or conversions."
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

export default WordpressDevelopment;
