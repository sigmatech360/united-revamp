import React from "react";
import ReactHelmet from "../../components/ReactHelmet";
import DefaultLayout from "../../components/DefaultLayout";
import herobanner from "../../assets/images/services/brandvoice/herobanner.webp";
import herobannerinnerimg from "../../assets/images/services/brandvoice/herobannerinner.svg";
import chooseimg1 from "../../assets/images/services/brandvoice/chooseus1.webp";
import chooseimg2 from "../../assets/images/services/brandvoice/chooseus2.webp";
import aboutimg from "../../assets/images/services/brandvoice/aboutus.webp";
import ServicesBanner from "../../components/ServicesBanner";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import BrandStrategyServices from "../../components/BrandStrategyServices";
import Performance from "../../components/Performance";
import performance1 from "../../assets/images/services/brandvoice/icons/performance1.svg";
import performance2 from "../../assets/images/services/brandvoice/icons/performance2.svg";
import performance3 from "../../assets/images/services/brandvoice/icons/performance3.svg";
import FrontendServices from "../../components/FrontendServices";
import BrandStrategyProcess from "../../components/BrandStrategyProcess";
import BrandStartNow from "../../components/BrandStartNow";
import LocationContact from "../../components/LocationContact";
import ServiceFaqs from "../../components/ServiceFaqs";
import TabsPricing from "../../components/TabsPricing";
import { dynamictabsData } from "../../data";
import HomeBlogsSec from "../../components/HomeBlogsSec";
import BrandVoiceServices from "../../components/BrandVoiceServices";
import BrandVoiceImpact from "../../components/BrandVoiceImpact";
import BrandVoiceQuote from "../../components/BrandVoiceQuote";

const BrandVoice = () => {
  const ourServicesData = [
    {
      header: "Brand Purpose Development",
      content:
        "Domain registration is the process of reserving a unique website name on the Internet. It identifies your website and allows people to access it easily.",
    },
    {
      header: "Brand Vision Framework",
      content:
        "Most domains are registered instantly after payment. In rare cases, it can take a few hours, depending on the domain extension and verification requirements.",
    },
    {
      header: "Brand Values Definition",
      content:
        "Yes, you can transfer your current domain to United Web Studios easily. Our support team will guide you through every step for a smooth transfer.",
    },
    {
      header: "Target Audience Identification",
      content:
        "Typically, a domain is registered for one year, but you can choose multi-year options to keep your domain active without yearly renewals.",
    },
    {
      header: "Market Analysis & Insights",
      content:
        "If your domain expires, it enters a grace period where you can renew it. After that, it may become available for public registration again.",
    },
    {
      header: "Awareness Goals Planning",
      content:
        "Yes, we offer WHOIS privacy protection to hide your personal information from public databases and protect you from spam or data misuse.",
    },
    {
      header: "Brand Personality Mapping",
      content:
        "Yes, we offer WHOIS privacy protection to hide your personal information from public databases and protect you from spam or data misuse.",
    },
    {
      header: "Brand Voice Refinement",
      content:
        "Yes, we offer WHOIS privacy protection to hide your personal information from public databases and protect you from spam or data misuse.",
    },
    {
      header: "Brand Tagline Creation",
      content:
        "Yes, we offer WHOIS privacy protection to hide your personal information from public databases and protect you from spam or data misuse.",
    },
  ];

  const performanceData = [
    {
      icon: performance1,
      title: "Custom Solutions",
      description: "Every brand is unique; we create customized strategies, voices, and visuals that fit your business goals precisely.",
    },
    {
      icon: performance2,
      title: "Data-Driven Creativity",
      description: "Insight and analytics guide every decision, ensuring messaging resonates and campaigns deliver measurable results.",
    },
    {
      icon: performance3,
      title: "End-to-End Branding",
      description: "From strategy to execution, we cover every aspect of brand building for consistency and impact.",
    },
  ];

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

  const whyChooseItems = [
    "Distinct brand voices for maximum recognition and relatability.",
    "Identities that align visuals, messaging, and personality seamlessly.",
    "Merchandising and promotional materials that reinforce brand presence.",
    "Positioning strategies that highlight unique competitive advantages clearly.",
  ];
  const frontendservices = [
    {
      title: "01",
      subtitle: "Discovery",
      description:
        "We research your audience, market, and story to uncover insights that define a brand voice both unique and relatable.",
    },
    {
      title: "02",
      subtitle: "Voice Personality",
      description:
        "Establish tone, vocabulary, and emotional cues that make your brand sound human and memorable across platforms.",
    },
    {
      title: "03",
      subtitle: "Audience Alignment",
      description:
        "Tailor messaging to resonate with audience preferences, behaviors, and motivations, encouraging engagement and loyalty.",
    },
    {
      title: "04",
      subtitle: "Messaging Guidelines",
      description:
        "Provide vocabulary, scripts, and rules for consistent communication across campaigns, platforms, and touchpoints.",
    },
    {
      title: "05",
      subtitle: "Integration",
      description:
        "Apply your voice to visuals, website, social media, and merchandising to create a seamless brand identity.",
    },
    {
      title: "06",
      subtitle: "Implementation & Coaching",
      description:
        "Equip teams with tools, training, and guidance to maintain a consistent, high-impact brand voice long-term.",
    },
  ];

  const faqsData = [
    {
      header:
        "What is included in the United Web Developers brand strategy services?",
      content:
        "United Web Developers offers a complete range of brand strategy services in USA designed to cover every step of brand building.",
      contentList: [
        "Brand Purpose Development",
        "Brand Vision Framework",
        "Brand Values Definition",
        "Target Audience Identification",
        "Market Analysis & Insights",
        "Awareness Goals Planning",
        "Brand Personality Mapping",
        "Brand Voice Refinement",
        "Brand Tagline Creation",
      ],
    },
    {
      header: "How does the United Web Developers brand strategy process work?",
      content:
        "The United Web Developers brand strategy development process follows six clear steps. We begin with discovery and alignment, then move to market and audience insights, positioning and value proposition, messaging and brand voice, identity system and touchpoint design, and finally launch, enablement, and measurement. Every step is tailored to your business goals.",
    },
    {
      header:
        "How long does it take to complete a United Web Developers brand strategy project?",
      content:
        "Most brand strategy projects with United Web Developers take about four (4) to eight (8) weeks. Timelines depend on project scope and collaboration. By the end, you receive a complete brand strategy package that includes positioning, messaging, tone of voice, identity guidelines, and an actionable plan to launch your brand successfully across all platforms.",
    },
    {
      header:
        "Why should I choose United Web Developers as my brand strategy agency in USA?",
      content:
        "United Web Developers is recognized as one of the most trusted brand strategy agency in USA because we focus on results. Our expert strategists analyze, design, and implement strategies that help your business outperform competitors, strengthen visibility, and create meaningful brand experiences that connect deeply with your target audience.",
    },
    {
      header:
        "Does United Web Developers help implement the strategy after it is developed?",
      content:
        "Yes, United Web Developers provides ongoing support beyond strategy creation. Our team helps implement your new brand strategy across your website, social media, and marketing materials. We also train your internal teams to maintain consistent brand communication. Our goal is to ensure your new strategy delivers measurable, long-term success.",
    },
    {
      header:
        "How can I get started with United Web Developers brand strategy development service?",
      content:
        "Getting started with United Web Developers is easy. You can schedule a free consultation to discuss your business goals and brand challenges. Our strategists will review your current brand presence and recommend a custom plan that fits your needs. Contact us by phone, email, or through our website to begin today.",
    },
  ];

  return (
    <>
      <ReactHelmet
        title="Brand Voice Agency in USA"
        description={`United Web Developers offers Brand Voicing in USA built for speed, growth, and seamless user experiences. Turn ideas into powerful, scalable web applications that perform nonstop`}
        keywords="web development, custom website, react development, logo design, digital marketing, social media marketing, web design"
        baseUrl="https://unitedwebdevelopers.com/brand-voice"
      />
      <DefaultLayout footerTitle="Let Your <span class='colorYellow'>Mobile Ap</span><br/> Speak For Your Brand’s Brilliance">
        <ServicesBanner
          secClass="app-florida-herobanner doomain-registeration-herobanner"
          bgImage={herobanner}
          title="Your Brand Deserves A Voice That Actually Pops"
          description="We create a brand voice in the USA that defines identity, voice, and positioning. Every campaign, message, and touchpoint is carefully designed to engage audiences, amplify recognition, and grow your business with a consistent, memorable brand presence."
          servicesbannerimg={herobannerinnerimg}
          cta1="Get Started Today"
          cta2="hehe"
        />

        <WordPressPerformanceSection
          reverse
          minihead="About Us"
          miniheadclass="minihead"
          secTitle1="Your Story Deserves A Voice Everyone Remembers"
          secTitle2=""
          description="At United Web Developers, we build brand strategies rooted in understanding your audience, mission, and competitive landscape. Our goal is to craft messaging, voice, and visuals that are authentic, engaging, and memorable."
          descriptiontwo="We help brands communicate consistently across all digital channels with our brand voice services in the USA. With a defined voice and strategic approach, every campaign, touchpoint, and interaction reinforces recognition, builds trust, and drives meaningful engagement for long-term growth."
          image={aboutimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="More About UWD"
          aboutbtnlink="/about"
          learnmorebtn="theme-btn theme-btn__yellow"
        />

        <BrandVoiceServices
          minihead="More of Our Services"
          mainhead="Every Service Your Brand Needs To Slay Online"
          mainpara="We provide end-to-end brand voice services USA designed to strengthen your identity, voice, and marketing efforts, ensuring your brand stands out and connects with your audience."
          services={brandservices}
        />

        <WordPressPerformanceSection
          minihead="Why Choose Us"
          miniheadclass="minihead d-none"
          secTitle1="Get Seen, Trusted, And Loved By Your Audience"
          secTitle2=""
          description="A carefully crafted brand strategy positions your business as credible, recognizable, and memorable. It builds authority and creates emotional connections that turn casual visitors into loyal advocates."
          descriptiontwo="With expert branding, every campaign, message, and interaction communicates consistently. Strategically planned brand voice in the USA ensures your brand stands out, resonates with audiences, and drives long-term growth."
          image={chooseimg1}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Start Today, Start Now."
          aboutbtnlink="/contact-us"
          learnmorebtn="theme-btn theme-btn__yellow"
          reverse={true}
        />
        <WordPressPerformanceSection
          minihead="Why Choose Us"
          miniheadclass="minihead"
          secTitle1="Four Ways We Make Your  "
          secTitle2="Brand Legendary"
          description="Our brand voice company in the USA combines creativity, analytics, and experience to craft branding solutions that resonate, engage audiences, and drive measurable business growth."
          landingList="list-unstyled"
          AngularList="legendary-list "
          AngularChooseListItems={whyChooseItems}
          image={chooseimg2}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Talk to Our Expert Strategist"
          aboutbtnlink="/contact-us"
          learnmorebtn="theme-btn theme-btn__yellow"
        />

        <Performance data={performanceData} />

        <BrandVoiceImpact
          minihead="Our Approach"
          mainhead="Six Moves That Turn Strategy Into Brand Personality"
          mainpara="Branding is basically the process of making your business a successful, known name, which is called a ‘brand’. With our brand strategy development in USA skillset, and the process given below, we make digital success happen for you."
          services={frontendservices}
        />

        <BrandVoiceQuote />

        <LocationContact
          secClass="wordpress-contact-sec"
          minihead="Contact Us"
          mainhead="Connect With Us"
          secPara="Connect with United Web Developers to create a consistent, engaging brand voice in the USA. Fill the form below and let’s start building your story."
          btntxt="Send Message"
        />

        <ServiceFaqs
          minihead="Frequently Asked Questions"
          mainhead="We Got All the Answers for You! "
          mainpara="Have questions about building a stronger brand? United Web Developers is a trusted brand strategy agency in USA offering complete brand strategy services. This section answers common questions about our brand strategy development process, what we deliver, and how we help businesses across the United States stand out with strategies that actually work."
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

export default BrandVoice;
