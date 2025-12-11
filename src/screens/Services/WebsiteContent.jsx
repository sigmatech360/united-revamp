import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import ReactHelmet from "../../components/ReactHelmet";
import ServicesBanner from "../../components/ServicesBanner";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import herobanner from "../../assets/images/services/websitecontent/herobanner.webp";
import aboutimg from "../../assets/images/services/websitecontent/aboutimg.webp";
import chooseimg from "../../assets/images/services/websitecontent/chooseimg.webp";
import exceptionalimg from "../../assets/images/services/websitecontent/exceptionalimg.webp";
import herobannerinnerimg from "../../assets/images/services/websitecontent/herobanner-inner-img.webp";
import WebsiteContentServices from "../../components/WebsiteContentServices";
import Performance from "../../components/Performance";
import WebsiteContentProcess from "../../components/WebsiteContentProcess";
import performance1 from "../../assets/images/services/brandstrategy/icons/performance1.svg"
import performance2 from "../../assets/images/services/brandstrategy/icons/performance2.svg"
import performance3 from "../../assets/images/services/brandstrategy/icons/performance3.svg"
import HomeBlogsSec from "../../components/HomeBlogsSec";
import LocationContact from "../../components/LocationContact";
import ServiceFaqs from "../../components/ServiceFaqs";
import TabsPricing from "../../components/TabsPricing";
import { dynamictabsData } from "../../data";



const WebsiteContent = () => {


    const performanceData = [
        {
        //   icon: performance1,
          title: "Pure Human Creativity",
          description:
            "No use of AI or generative tools, just pure human-written content.",
        },
        {
        //   icon: performance2,
          title: "Written Just for You",
          description:
            "Your content is never copied, repeated, or borrowed. Everything is written fresh, original, and for you.",
        },
        {
        //   icon: performance3,
          title: "Tone That Sounds Exactly Like You",
          description:
              "Whatever your tone is, we mimic it and make it shine through every word.",
        },
      ];

      const performanceNewData = [
        {
          icon: performance1,
          title: "SEO-Optimized",
          description:
            "Through On-Page SEO, we help your website reign the search engine by ranking at the very top, way past your competition.",
        },
        {
           icon: performance2,
          title: "AEO-Optimized",
          description:
            "Become the most trustworthy voice on the internet with our AEO-optimization service. We ",
        },
        {
           icon: performance3,
          title: "GEO-Optimized",
          description:
              "For the website that also wants to rank on LLMs such as ChatGPT, through are AEO service, we help be the authoritative voice on the GPTs too.",
        },
      ];

        const faqsData = [
    {
      header:
        "What makes your website content different from others?",
      content:
        "We write everything from scratch, no AI, no templates, and no recycled fluff. Your content sounds like your brand, speaks to your audience, and is built to convert.",
    },
    {
      header: "How long does it take to deliver website content?",
      content:
        "Most projects are delivered within a few days, depending on size. We prioritize quality, clarity, and brand tone without keeping you waiting longer than necessary.",
    },
    {
      header:
        "Do you provide SEO-friendly content?",
      content:
        "Yes, every piece is written with search intent, readability, and keyword strategy in mind to help your website rank better without sounding robotic or stuffed.",
    },
    {
      header:
        "Can you match my brand’s tone and writing style?",
      content:
        "Absolutely, whether your tone is fun, formal, bold, or minimal, we mimic it perfectly so your website feels consistent and authentically you.",
    },
    {
      header:
        "Do you offer revisions if I need changes?",
      content:
        "Yes, we offer revisions to ensure your content fits your expectations perfectly. Your satisfaction matters, and we refine the content until it feels right.",
    },
  ];

  return (
    <>
      <ReactHelmet
        title="Website Content Writing in USA"
        description="Experience the magic of website content writing in USA with United Web Developers. We craft human written, brand aligned content that guides readers, builds confidence, and turns website visitors into conversions."
        keywords="website content writing usa, website copywriting services usa, website content services usa, website content company usa, website content agency usa, affordable website content services usa, SEO website content writing usa, website content editing services usa"
        baseUrl="https://unitedwebdevelopers.com/website-content"
      />

      <DefaultLayout>

          <ServicesBanner
          secClass="app-florida-herobanner"
          bgImage={herobanner}
          servicesbannerimg={herobannerinnerimg}
          title="Your Website Has a Voice, and We Make It Irresistible"
          description="Visitors might not read everything, but they sure do read what’s important. For the words they notice and the ones they skip, we write content that guides, nudges, and inspires, helping you win them over. With our website content writing service in USA, your website doesn’t whisper, it shouts to the world with words that spark confidence. That’s the wizardry of our words."
          cta1="Write Words That Do the Work"
          cta2="hehe"
        />

          <WordPressPerformanceSection
          reverse
          minihead="What We Do"
          miniheadclass="minihead"
          secTitle1="Helping Brands Sell Through the Power of Words"
          description="Content is not just a bunch of words written together. It is the magic created when the right words are used. The words that build trust. The words that inspire visitors. The words that compel them to convert. That is the magic of the right words. And when the right words are used, they work right for you."
          descriptiontwo="This is what we do. Through our website copywriting service in USA, we write content that builds authority, inspires people to take action, and positions your brand as the one they trust without hesitation."
          image={aboutimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="More About United Web Developers"
          aboutbtnlink="/about"
          learnmorebtn="theme-btn theme-btn__yellow"
        />

        <WebsiteContentServices/>


        <WordPressPerformanceSection
        wordpresssecclass="WordPressPerformanceSection websitecontent-exceptional-sec"
          reverse
          miniheadclass="minihead"
          secTitle1="3 Seconds in All We Need to Grab Attention"
          bestvideohead="Words that Make Your Website Impossible to Ignore"
          description="Great content does more than fill space on your website. It shapes how people see you, what they believe about you, and whether they trust you enough to take action. With our website content writing service in USA, we craft messaging that feels natural, sounds like your brand, and nudges visitors toward choosing you with confidence."
          descriptiontwo="Every content leads to a decision. It can either lead to a sale for you or a sale for your competitor. Our content makes sure you don’t lose a sale by turning your website into the one spot where visitors think, “Oh yes, this is exactly what I was looking for.”"
          image={exceptionalimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Talk to Our Writers"
          aboutbtnlink="/contact-us"
          learnmorebtn="theme-btn theme-btn__yellow"
        />


         <Performance secClass="websitecontent-perfomance-sec" data={performanceData} />


         <WebsiteContentProcess/>


         
          <WordPressPerformanceSection
          minihead="The Best in Business"
          miniheadclass="minihead"
          secTitle1="Good Content Tells a Story. Great Content Sells Yours"
          description="People love a story that feels familiar. Something they instantly understand and connect with. Through our website content writing USA, we turn your story into website content that explains who you are and what you do in a way your audience truly feels. "
          image={chooseimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Let’s Write Your Web Content "
          aboutbtnlink="/contact-us"
          learnmorebtn="theme-btn theme-btn__yellow"
        />


        <Performance data={performanceNewData} />



        <LocationContact
          secClass="wordpress-contact-sec"
          minihead="Connect With Us"
          mainhead="Talk to our Writers"
          secPara="Let’s bring your content vision to life. Share your details, and we’ll help you create website content that communicates clearly and converts effectively."
          btntxt="Send Message"
        />

        <ServiceFaqs
          minihead="FAQs"
          mainhead="Got Questions? We Have the Answers"
          mainpara="Swipe through our FAQs and find everything you need to know about SEO website writing in USA. And if your question isn’t there, just fill out the form. We’ll get back to you with the right answer."
          faqsData={faqsData}
        />

        {/* <TabsPricing
          secClass="tab-pricing-bg"
          minihead="Pricing Plans"
          mainhead="Let Our Words Do the Magic On Your Web Page"
          secPara="Choose a plan that fits your goals and let our words bring confidence and conversion to every page on your website."
          tabsData={dynamictabsData}
        /> */}

        <HomeBlogsSec
          blogminihead="Blogs & Articles"
          blogSecTitle="Insights Related to Content, Blogs, and More"
          blogSubtext="If you want to stay ahead of your cool friends, read our blogs and gain all the insights on all the recent tech trends. "
          // blogsData={blogsData}
          // categorySlug="custom-website-development"
        />

      </DefaultLayout>
    </>
  );
};

export default WebsiteContent;
