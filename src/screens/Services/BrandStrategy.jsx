import React from "react";
import ReactHelmet from "../../components/ReactHelmet";
import DefaultLayout from "../../components/DefaultLayout";
import herobanner from "../../assets/images/services/brandstrategy/herobanner.webp";
import herobannerinnerimg from "../../assets/images/services/brandstrategy/herobannerinner.webp";
import chooseimg from "../../assets/images/services/brandstrategy/chooseus.webp";
import aboutimg from "../../assets/images/services/brandstrategy/aboutus.webp";
import ServicesBanner from "../../components/ServicesBanner";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import BrandStrategyServices from "../../components/BrandStrategyServices";
import Performance from "../../components/Performance";
import performance1 from "../../assets/images/services/brandstrategy/icons/performance1.svg"
import performance2 from "../../assets/images/services/brandstrategy/icons/performance2.svg"
import performance3 from "../../assets/images/services/brandstrategy/icons/performance3.svg"
import FrontendServices from "../../components/FrontendServices";
import BrandStrategyProcess from "../../components/BrandStrategyProcess";
import BrandStartNow from "../../components/BrandStartNow";
import LocationContact from "../../components/LocationContact";
import ServiceFaqs from "../../components/ServiceFaqs";
import TabsPricing from "../../components/TabsPricing";
import { dynamictabsData } from "../../data";
import HomeBlogsSec from "../../components/HomeBlogsSec";

const BrandStrategy = () => {
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
      title: "24/7 Expert Customer Support",
      description:
        "Real humans. Real answers. Anytime.",
    },
    {
      icon: performance2,
      title: "99.9% Uptime Guarantee",
      description:
        "Built for reliability. Be online when your customers are.",
    },
    {
      icon: performance3,
      title: "Easy‑to‑Use Control Panel",
      description:
          "Powerful control without the learning curve.",
    },
  ];

  const frontendservices = [
    {
      title: "01",
      subtitle: "Discovery & Alignment",
      description:
        "Clarify business goals, current brand perception, and competitive context. Audit your website, offerings, metrics, and customer feedback. Align stakeholders on priorities, success criteria, and constraints. For United Web Developers, we define service focus, pricing realities, and technical strengths to anchor strategy before creative work begins. Set clear timelines and governance.",
    },
    {
      title: "02",
      subtitle: "Market & Audience Insights",
      description:
        "Map the market landscape and trends influencing buyer choices. Identify segments, needs, barriers, and triggers. Build data-backed personas using customer interviews, analytics, and sales input. For United Web Developers, pinpoint industries, decision makers, and pain points where speed, reliability, and measurable outcomes matter most. Quantify opportunity and prioritize targets",
    },
    {
      title: "03",
      subtitle: "Positioning & Value Proposition",
      description:
        "Define the unique space that United Web Developers can own. Articulate the customer promise, proof, and reasons to believe. Clarify competitive differentiators, benefits, and outcomes delivered. Translate technical strengths into business value language that clients understand. Stress test statements with real prospects and refine for focus, credibility, and impact across key segments.",
    },
    {
      title: "04",
      subtitle: "Messaging & Brand Voice",
      description:
        "Build a modular messaging hierarchy that scales from website headlines to sales decks. Establish voice principles, tone guidelines, and examples. Create audience specific value messages and objection handling. For United Web Developers, codify proof points, case studies, and service descriptions enabling consistent, persuasive communication by every team member and partner.",
    },
    {
      title: "05",
      subtitle: "Identity System & Touchpoint Design",
      description:
        "Translate strategy into a cohesive visual identity and experience standards. Define logo usage, color, typography, imagery, and layout rules. Prototype key touchpoints like website pages, proposals, and onboarding flows. For United Web Developers, design assets and templates that accelerate production while protecting consistency and accessibility across channels and customer journeys.",
    },
    {
      title: "06",
      subtitle: "Launch, Enablement & Measurement",
      description:
        "Plan rollout across channels with clear responsibilities, timelines, and budgets. Train teams on messaging, tools, and processes. Launch refreshed experiences, content, and campaigns. For United Web Developers, establish dashboards tracking pipeline, win rate, satisfaction, and brand health. Run experiments, gather feedback, and iterate continuously to improve performance and business outcomes.",
    },
  ];

  const faqsData = [
    {
      header: "What is included in the United Web Developers brand strategy services?",
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
      header: "How long does it take to complete a United Web Developers brand strategy project?",
      content:
        "Most brand strategy projects with United Web Developers take about four (4) to eight (8) weeks. Timelines depend on project scope and collaboration. By the end, you receive a complete brand strategy package that includes positioning, messaging, tone of voice, identity guidelines, and an actionable plan to launch your brand successfully across all platforms.",
    },
    {
      header: "Why should I choose United Web Developers as my brand strategy agency in USA?",
      content:
        "United Web Developers is recognized as one of the most trusted brand strategy agency in USA because we focus on results. Our expert strategists analyze, design, and implement strategies that help your business outperform competitors, strengthen visibility, and create meaningful brand experiences that connect deeply with your target audience.",
    },
    {
      header: "Does United Web Developers help implement the strategy after it is developed?",
      content:
        "Yes, United Web Developers provides ongoing support beyond strategy creation. Our team helps implement your new brand strategy across your website, social media, and marketing materials. We also train your internal teams to maintain consistent brand communication. Our goal is to ensure your new strategy delivers measurable, long-term success.",
    },
    {
      header: "How can I get started with United Web Developers brand strategy development service?",
      content:
        "Getting started with United Web Developers is easy. You can schedule a free consultation to discuss your business goals and brand challenges. Our strategists will review your current brand presence and recommend a custom plan that fits your needs. Contact us by phone, email, or through our website to begin today.",
    },
  ];

  return (
    <>
      <ReactHelmet
        title="Brand Strategy Agency in USA"
        description={` United Web Developers offers Web App Development in USA built for speed, growth, and seamless user experiences. Turn ideas into powerful, scalable web applications that perform nonstop`}
        keywords="web development, custom website, react development, logo design, digital marketing, social media marketing, web design"
        baseUrl="https://unitedwebdevelopers.com/brand-strategy"
      />
      <DefaultLayout footerTitle="Let Your <span class='colorYellow'>Mobile Ap</span><br/> Speak For Your Brand’s Brilliance">
        <ServicesBanner
          secClass="app-florida-herobanner doomain-registeration-herobanner"
          bgImage={herobanner}
          title="Strong Brand Building with Personalized Brand Strategy in USA  "
          description="A business becomes a brand only when backed by the right strategies implemented at the right time on the right platforms. At United Web Developers, we cover each element of brand building, from brand positioning to brand visibility to strategy implementation. We do it all for you. "
          servicesbannerimg={herobannerinnerimg}
          cta1="Get Your Strategy Today?"
          cta2="hehe"
        />

        <WordPressPerformanceSection
          reverse
          minihead="About Us"
          miniheadclass="minihead"
          secTitle1="Brand Strategy that Outshines All Your Competitors"
          secTitle2="All Your Competitors"
          description="We, United Web Developers, are one of the leading brand strategy agencies USA, and we promise to provide exactly what’s needed for your brand. Our expert strategists analyze, design, and implement strategies that work specifically for your business, letting you outshine all your competitors in less than no time."
          image={aboutimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Chat to Know More"
          aboutbtnlink="/about"
          learnmorebtn="theme-btn theme-btn__yellow"
        />

        <BrandStrategyServices ourServicesData={ourServicesData} />

        <WordPressPerformanceSection
          minihead="Why Choose Us"
          miniheadclass="minihead"
          secTitle1="Why Choose United Web Developers for Your "
          secTitle2="Brand Strategy in USA?"
          description="If you ask us why you should choose us? Well, simply because we are the best at designing the most effective brand strategies in USA for your business. "
          image={chooseimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Talk to Our Expert Strategist"
          aboutbtnlink="/contact-us"
          learnmorebtn="theme-btn theme-btn__yellow"
        />

        <Performance data={performanceData} />

        <BrandStrategyProcess
          minihead="Our Process"
          mainhead="How We Make Your Business a BRAND!"
          mainpara="Branding is basically the process of making your business a successful, known name, which is called a ‘brand’. With our brand strategy development in USA skillset, and the process given below, we make digital success happen for you."
          btntxt="See How Service Can Help You"
          services={frontendservices}
        />

        <BrandStartNow />

        <LocationContact
          secClass="wordpress-contact-sec"
          minihead="Ready to Get Your Business Branded?"
          mainhead="We are right here for you; all you need to do is fill out our form, and we will reach out to you. "
          secPara="Work with a team that listens, thinks, and builds web apps that truly perform for you."
          btntxt="Talk to Us"
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

export default BrandStrategy;
