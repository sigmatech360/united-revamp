import React from 'react'
import ReactHelmet from '../../components/ReactHelmet'
import DefaultLayout from '../../components/DefaultLayout'
import herobanner from "../../assets/images/services/socialmediamarketing/herobanner.webp";
import herobannerinnerimg from "../../assets/images/services/socialmediamarketing/herobanner-inner-img.webp";
import chooseimg from "../../assets/images/services/socialmediamarketing/chooseimg.webp";
import aboutimg1 from "../../assets/images/services/socialmediamarketing/aboutimg1.webp";
import aboutimg2 from "../../assets/images/services/socialmediamarketing/aboutimg2.webp";
import service1 from "../../assets/images/services/socialmediamarketing/service1.webp";
import ServicesBanner from '../../components/ServicesBanner';
import SMMAbout from '../../components/SMMAbout';
import SMMServices from '../../components/SMMServices';
import SMMDrive from '../../components/SMMDrive';
import SMMProcess from '../../components/SMMProcess';
import WordPressPerformanceSection from '../../components/WordPressPerformanceSection';
import LocationContact from '../../components/LocationContact';
import ServiceFaqs from '../../components/ServiceFaqs';
import HomeBlogsSec from '../../components/HomeBlogsSec';
import TabsPricing from '../../components/TabsPricing';
import { dynamictabsData } from '../../data';



const NewSocialMediaMarketing = () => {


   const faqsData = [
    {
      header: "What does social media marketing in the USA include?",
      content:
        "It includes strategy, content creation, posting, community engagement, analytics, and campaign planning. A social media marketing agency in the USA helps you stay visible and communicate with your audience through thoughtful content and consistent activity.",
    },
    {
      header: "How can a social media marketing agency in the USA help my business grow?",
      content:
        "An agency builds your brand presence by creating engaging content, managing daily interactions, and running targeted campaigns. This helps your business attract attention, build trust, and convert viewers into active customers over time.",
    },
    {
      header: "Why should businesses choose social media marketing services in the USA?",
      content:
        "These services help you stay competitive in a digital first market. With strategic planning, creative content, and structured engagement, your brand gains visibility and builds stronger relationships with your customers.",
    },
    {
      header: "What is the role of social media advertising in brand growth?",
      content:
        "Social media advertising allows you to reach specific audiences fast. It supports visibility, drives traffic, and helps convert interest into action. Pairing organic content with paid ads creates stronger, faster growth.",
    },
    {
      header: "How do social media management companies in the USA operate?",
      content:
        "They handle content scheduling, posting, message responses, and performance tracking. Their goal is to maintain a consistent online presence while ensuring your content aligns with your brand’s voice and audience expectations."
    },
    {
      header: " How long does it take to see results from social media marketing USA strategies?",
      content:
        "You can expect steady improvements within two to three months. Results grow with consistency, strong creative work, and continued engagement. The more active your brand becomes, the faster your visibility increases.",
    },
  ];



  return (
    <>
     <ReactHelmet
        title="Smart Social Media Marketing Services USA for Growth"
        description="Experience strategic social media marketing in the USA that strengthens your brand, attracts engagement, and builds lasting visibility across major platforms."
        keywords="social media marketing usa, social media marketing agency usa, social media marketing services usa, social media marketing company usa, social media advertising usa, social media management companies usa"
        baseUrl="https://unitedwebdevelopers.com/social-media-marketing"
      />

      <DefaultLayout>
         <ServicesBanner
          secClass="app-florida-herobanner"
          bgImage={herobanner}
          servicesbannerimg={herobannerinnerimg}
          title="Social Media Marketing that Builds Your Brand Image"
          description="Your brand should do more than just exist digitally. It deserves actual attention, and you should be striving for it. Our social media marketing services in the USA blend strategy and creativity to help your content stand out. We build brand stories, visuals, and campaigns that spark engagement and build a strong brand image that grows with your audience’s interest and behavior."
          cta1="Optimize Your Social Media"
          cta2="hehe"
        />

         <SMMAbout
            aboutImgOne={aboutimg1}
            aboutImgTwo={aboutimg2}
            miniHead="About Us"
            mainHead="Growing Brands by Strategic Posting and Engagement that Converts"
            description="We work like an extension of your brand. Every post, caption, and engagement touchpoint is shaped with purpose and intention. As a dedicated social media marketing agency in the USA, we bring clarity, research, and creative execution together to help your business build real connections and measurable momentum online."
            btnText="More About Us"
            btnLink="/about"
          />


        <SMMServices/>


        <SMMDrive/>


        <SMMProcess/>



       <WordPressPerformanceSection
          reverse
          wordpresssecclass="WordPressPerformanceSection blogwriting-about-sec"
          miniheadclass="minihead"
          secTitle1="Why Social Media Optimization is a Must-Have for Your Brand"
          description="Audiences spend most of their digital time scrolling, exploring, and connecting. This is your opportunity. Social media marketing in the USA works best when your brand appears exactly where their curiosity rises. "
          descriptiontwo="With the right mix of research and creativity, we shape content that attracts attention, encourages engagement, and builds long-term relationships with your audience."
          image={chooseimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Talk to a Strategist"
          aboutbtnlink="/contact-us"
          learnmorebtn="theme-btn theme-btn__yellow"
        />



         <LocationContact
          secClass="wordpress-contact-sec"
          minihead="Contact Us"
          mainhead="Start Your Social Media Journey Now"
          secPara="Take the first step toward a stronger online presence. Share your details, and our team will help you build a strategy crafted around your brand and audience."
          btntxt="Get in Touch"
        />

        <ServiceFaqs
          minihead="FAQs"
          mainhead="Commonly Asked Questions About Social Media Marketing in the USA"
          mainpara="Simple answers to help you understand how social media marketing in the USA supports your brand growth, visibility, and long term online success."
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

export default NewSocialMediaMarketing