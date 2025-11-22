import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import ServicesBanner from "../../components/ServicesBanner";
import DomainSearchPrice from "../../components/DomainSearchPrice";
import herobanner from "../../assets/images/services/domainregisteration/herobanner.webp";
import herobannerinnerimg from "../../assets/images/services/domainregisteration/herobanner-inner.webp";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import aboutimg from "../../assets/images/services/domainregisteration/aboutimg.webp";
import chooseimg from "../../assets/images/services/domainregisteration/readytransfer.webp";
import DomainRegisterationServices from "../../components/DomainRegisterationServices";
import DomainRegisterProcess from "../../components/DomainRegisterProcess";
import LocationContact from "../../components/LocationContact";
import ServiceFaqs from "../../components/ServiceFaqs";
import TabsPricing from "../../components/TabsPricing";
import { dynamictabsData } from "../../data";
import HomeBlogsSec from "../../components/HomeBlogsSec";
import DomainRegisterationChoose from "../../components/DomainRegisterationChoose";
import HostingBoxes from "../../components/HostingBoxes";
import ReactHelmet from "../../components/ReactHelmet";

const DomainRegisteration = () => {
  const faqsData = [
    {
      header: "What is domain registration?",
      content:
        "Domain registration is the process of reserving a unique website name on the Internet. It identifies your website and allows people to access it easily.",
    },
    {
      header: "How long does domain registration take?",
      content:
        "Most domains are registered instantly after payment. In rare cases, it can take a few hours, depending on the domain extension and verification requirements.",
    },
    {
      header: "Can I transfer my existing domain to you?",
      content:
        "Yes, you can transfer your current domain to United Web Studios easily. Our support team will guide you through every step for a smooth transfer.",
    },
    {
      header: "How long does a domain registration last?",
      content:
        "Typically, a domain is registered for one year, but you can choose multi-year options to keep your domain active without yearly renewals.",
    },
    {
      header: "What happens if my domain expires?",
      content:
        "If your domain expires, it enters a grace period where you can renew it. After that, it may become available for public registration again.",
    },
    {
      header: "Do you offer domain privacy protection?",
      content:
        "Yes, we offer WHOIS privacy protection to hide your personal information from public databases and protect you from spam or data misuse.",
    },
  ];

  const processData = {
    minihead: "Our Process",
    mainhead: "How We Secure Your Perfect Domain",
    mainpara:
      "To get the domain name you want, our team follows an easy and professional process. We work quickly and efficiently without any technical complications or unnecessary delays.",
    steps: [
      {
        number: "01",
        title: "Consultation & Search",
        description:
          "Our strategists suggest relevant and memorable domain names that highlight your business goals and match available domain extensions.",
      },
      {
        number: "02",
        title: "Domain Availability Check",
        description:
          "We verify domain name availability across multiple providers in the USA to secure the best options before competitors take them.",
      },
      {
        number: "03",
        title: "Registration & Verification",
        description:
          "Once approved, we register your domain and complete all verification requirements to ensure that the domain is completely yours.",
      },
      {
        number: "04",
        title: "Setup & Support",
        description:
          "We connect your domain to your hosting and provide ongoing support to make your website live and functional.",
      },
    ],
  };

  return (
    <>
      <ReactHelmet
        title="Domain Registration Services in USA | United Web Studios"
        description="Secure your online identity with United Web Studios. Our service includes reliable and affordable domain registration services in the USA for your website or business."
        keywords="domain name registration usa, domain registration services usa, buy domain name usa, domain providers in usa, register a domain usa"
        baseUrl="https://unitedwebdevelopers.com/domain-registeration"
      />

      <DefaultLayout>
        <ServicesBanner
          secClass="app-florida-herobanner doomain-registeration-herobanner"
          bgImage={herobanner}
          title="Claim Your Digital Identity With Domain Registration at United Web Developers"
          description="Want your own domain name in the USA? At United Web Studios, we offer quick and affordable domain registration services. You can choose from the top domain providers in the USA and get your website online in just a few steps."
          servicesbannerimg={herobannerinnerimg}
          cta1="Register Your Domain"
          cta2="hehe"
        />

        {/* <DomainSearchPrice /> */}

        <WordPressPerformanceSection
          reverse
          minihead="About Us"
          miniheadclass="minihead"
          secTitle1="Your Call to Get Domain Registration Services USA"
          secTitle2="Across the USA"
          description="At United Web Studios, our web experts make domain name registration in the USA simple and reliable. We offer domain names for new websites, and also for businesses expanding their online presence. In all cases, our team ensures a quality experience. We provide personalized support and affordable pricing to help you secure the best domain name for your brand."
          image={aboutimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Learn More About United Web Studios"
          aboutbtnlink="/about"
          learnmorebtn="theme-btn theme-btn__yellow"
        />

        <DomainRegisterationServices />

        <DomainRegisterProcess {...processData} />

        <DomainRegisterationChoose />

        <WordPressPerformanceSection
          minihead="About Us"
          miniheadclass="minihead d-none"
          secTitle1="Get the Domain Name Brands"
          secTitle2="Dream Of"
          description="A domain is your brand’s identity; it should be the one that reflects your brand’s essence. At United Web Studios, we make it simple to buy a domain name in the USA. We give our best in supporting startups or even working with established businesses. Our experts help you choose, register, and manage your domain effortlessly."
          image={chooseimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Get Started Today"
          aboutbtnlink="/contact-us"
          learnmorebtn="theme-btn theme-btn__yellow"
        />

        <HostingBoxes />

        <LocationContact
          secClass="wordpress-contact-sec"
          minihead="Contact Us"
          mainhead="Fill The Form Today"
          secPara="Have questions or need help choosing a domain? Fill out the form below, and domain experts will get back to you with life-changing solutions."
          btntxt="Message Us Now"
        />

        <ServiceFaqs
          minihead="Frequently Asked Questions"
          mainhead="What People Wanna Know About Domain Registration"
          mainpara="Answering some of the frequently asked questions about our domain registration services to help you make an informed decision when registering a domain in the USA."
          faqsData={faqsData}
        />

        {/* <TabsPricing
          secClass="tab-pricing-bg"
          minihead="Pricing Plans"
          mainhead="Domain Registration Pricing Packages"
          secPara="Choose from our flexible domain registration packages that are made for different business sizes. All our packages are based on competitive pricing, free setup, and secure management tools to make owning your domain registration easy and affordable."
          tabsData={dynamictabsData}
        /> */}

        <HomeBlogsSec
          blogminihead="Blogs & Updates"
          blogSecTitle="Read Our Blogs Covering Latest Industry Insights"
          blogSubtext="Explore expert-written blogs on digital marketing, web development services, platform comparisons, and growth strategies for modern online sellers"
          // blogsData={blogsData}
          // categorySlug="custom-website-development"
        />
      </DefaultLayout>
    </>
  );
};

export default DomainRegisteration;
