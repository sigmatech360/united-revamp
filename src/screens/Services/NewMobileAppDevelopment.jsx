import React from 'react'
import ReactHelmet from '../../components/ReactHelmet'
import DefaultLayout from '../../components/DefaultLayout'
import herobanner from "../../assets/images/services/mobileappdev/herobanner.webp";
import aboutimg from "../../assets/images/services/mobileappdev/aboutimg.webp";
import portfolio1 from "../../assets/images/services/mobileappdev/portfolio1.webp";
import portfolio2 from "../../assets/images/services/mobileappdev/portfolio2.webp";
import portfolio3 from "../../assets/images/services/mobileappdev/portfolio3.webp";
import portfolio4 from "../../assets/images/services/mobileappdev/portfolio4.webp";
import portfolio5 from "../../assets/images/services/mobileappdev/portfolio5.webp";
import portfolio6 from "../../assets/images/services/mobileappdev/portfolio6.webp";
import ServicesBanner from '../../components/ServicesBanner';
import WordPressPerformanceSection from '../../components/WordPressPerformanceSection';
import BrandVoiceServices from '../../components/BrandVoiceServices';
import HomeBlogsSec from '../../components/HomeBlogsSec';
import ServiceFaqs from '../../components/ServiceFaqs';
import LocationContact from '../../components/LocationContact';
import TabsPricing from '../../components/TabsPricing';
import { dynamictabsData } from '../../data';
import DomainRegisterationServices from '../../components/DomainRegisterationServices';


const NewMobileAppDevelopment = () => {


    const brandservices = [
    {
      title: "01",
      subtitle: "Brand Strategy",
      description:
        "We develop actionable strategies that define your voice, positioning, and messaging, creating measurable business impact across channels",
    },
    {
      title: "02",
      subtitle: "Brand Identity Design",
      description:
        "We create cohesive visuals, typography, colors, and logos that reflect your personality and strengthen recognition everywhere",
    },
    {
      title: "03",
      subtitle: "Merchandising",
      description:
        "Products, packaging, and promotional designs that align with your identity and reinforce consistent brand messaging effectively.",
    },
    {
      title: "04",
      subtitle: "Brand Positioning",
      description:
        "Defining market space, messaging, and competitive edge so your brand stands out and connects with ideal audiences",
    },
    {
      title: "05",
      subtitle: "Website Design",
      description:
        "Build engaging, user-friendly websites that reflect your brand voice, drive conversions, and maintain a seamless digital experience.",
    },
    {
      title: "06",
      subtitle: "Social Media Marketing",
      description:
        "Craft campaigns and messaging for every platform that increase engagement, loyalty, and audience interaction consistently.",
    },
  ];


   const faqsData = [
    {
      header:
        "What is included in your blog writing services?",
      content:
        "Our blog writing services include topic research, SEO optimization, clean formatting, and high-quality writing. We follow your brand voice and create content that supports your goals and engages your audience.",
    },
    {
      header: "How long does it take to produce a blog?",
      content:
        "Most blogs take three to five business days, depending on length and complexity. We plan carefully, write clearly, and deliver on time so you always receive polished content when needed.",
    },
    {
      header:
        "Do you offer SEO friendly content?",
      content:
        "Yes, we provide SEO friendly content with researched keywords, metadata, and clear structure. Every blog is written to help your content perform better on search engines and reach the right audience.",
    },
    {
      header:
        "Can you write in my brand voice?",
      content:
        "Yes, we study your tone, audience, and messaging to match your brand voice. This helps every blog read consistently so your content feels familiar, reliable, and aligned with your identity.",
    },
    {
      header:
        "Do you provide revisions?",
      content:
        "Yes, we offer revisions to ensure the blog meets your expectations. You can request changes for clarity, tone, or structure so the final content feels accurate and ready for publishing.",
    },
    {
      header:
        "Can you handle bulk blog writing projects?",
      content:
        "Yes, our team can manage bulk blog writing with consistent quality. We organize topics, maintain deadlines, and deliver multiple blogs each month to support brands with ongoing content needs.",
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



  return (
    <>
       <ReactHelmet
        title="Domain Transfer Services Florida"
        description="Transfer your domain in Florida with safe, quick, and expert guidance. Smooth migration, ICANN-compliant process, and 24/7 support for an easy domain transfer experience."
        keywords="domain transfer Florida, domain transfer services Florida, domain transfer Florida, domain transfer providers in Florida, transfer a domain Florida"
        baseUrl="https://unitedwebdevelopers.com/mobile-app-development"
      />

      <DefaultLayout>
        <ServicesBanner
          secClass="app-florida-herobanner"
          bgImage={herobanner}
          title="Engage Your Audience Through Relatable & Valuable Blog Writing"
          description="Your blog should feel like your brand’s best friend, the one who knows the facts, cracks the jokes, explains the complex stuff, and still keeps things fun. That’s where we slide in and take over with blogs that hit the vibe, feed the algorithm, and make your audience stick around."
          cta1="Start Your Blog!"
          cta2="hehe"
        />



         <WordPressPerformanceSection
         reverse
          wordpresssecclass="WordPressPerformanceSection blogwriting-about-sec"
          minihead="About Section"
          miniheadclass="minihead"
          secTitle1="Building Relationships with Words that Land Just Right"
          description="Your audience doesn’t want boring content. They want stories that feel like conversations and insights they can trust. We craft blog writing with personality, purpose, and SEO smarts so people actually read and return."
          descriptiontwo="We mix creativity with analytics because great blogs are not accidents. They are strategy plus style wrapped into clean, compelling writing."
          description2="Every blog we write is shaped for humans first and platforms second which is exactly why they perform so well online."
          image={aboutimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Learn More About United Web Developers"
          aboutbtnlink="/about"
          learnmorebtn="theme-btn theme-btn__yellow"
        />


         <BrandVoiceServices
          secClass="mobiledev-service-sec"
          serviceBoxClass="mobileapp-service-box"
          minihead="More of Our Services"
          mainhead="Every Service Your Brand Needs To Slay Online"
          mainpara="We provide end-to-end brand voice services USA designed to strengthen your identity, voice, and marketing efforts, ensuring your brand stands out and connects with your audience."
          services={brandservices}
        />


         <DomainRegisterationServices
         secClass="mobappdev-process-sec"
          minihead="Process"
          headTitle="How Successful Web Apps are Developed"
          headText="Building a great web application is not magic; It’s a method. At United Web Developers, every project follows a structured workflow designed to eliminate uncertainty and enhance clarity."
          items={items}
          itemNumberClass="mb-3 colorYellow text-decoration-underline"
          isBtn={false}
        />



          <LocationContact
          secClass="wordpress-contact-sec"
          minihead="Contact Us"
          mainhead="We Would Love to Write For You!"
          secPara="Need a blog that reflects your brand personality and ranks on search engines without feeling robotic or confusing? Fill out the form below and let us turn your ideas into content that is worth every second of the reading."
          btntxt="Get in Touch"
        />

        <ServiceFaqs
          minihead="Frequently Asked Questions"
          mainhead="Answers To Your Writing Concerns"
          mainpara="Here are quick, clear answers to help you decide faster and smarter. We created this section to give you straightforward guidance without confusion, so you can understand our process, what we offer, and how we support your content goals."
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
  )
}

export default NewMobileAppDevelopment