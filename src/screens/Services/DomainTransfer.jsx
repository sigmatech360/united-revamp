import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import ServicesBanner from "../../components/ServicesBanner";
import herobanner from "../../assets/images/services/domainregisteration/herobanner.webp";
import herobannerinnerimg from "../../assets/images/services/domaintransfer/herobanner-inner-img.svg";
import aboutimg from "../../assets/images/services/domaintransfer/aboutimg.webp";
import chooseimg from "../../assets/images/services/domaintransfer/chooseimg.webp";
import domaintransfer from "../../assets/images/services/domaintransfer/domaintransfer-img.webp";
import renewalimg from "../../assets/images/services/domaintransfer/renewal-img.svg";
import check from "../../assets/images/services/domaintransfer/check.svg";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import DomainTransferServices from "../../components/DomainTransferServices";
import DomainRegisterProcess from "../../components/DomainRegisterProcess";
import LocationContact from "../../components/LocationContact";
import ServiceFaqs from "../../components/ServiceFaqs";
import TabsPricing from "../../components/TabsPricing";
import HomeBlogsSec from "../../components/HomeBlogsSec";
import { dynamictabsData } from "../../data";
import ReactHelmet from "../../components/ReactHelmet";

const DomainTransfer = () => {
  const processData = {
    minihead: "Benifits",
    mainhead: "Why and When Domain Transfer is Better",
    mainpara: "If your website is getting slow, lagging, web pages are taking hours to load, or your provider has ghosted you, we think it's time to outgrow the old and embrace the new, more powerful domain for your brand.",
    steps: [
      {
        number: "01",
        title: "Buy Your Domain",
        description:
          "The first step is simple, buying your domain. If you have a new one, simply provide us with the access, or better, we can help you choose the one that suits your needs, your brand name, and much more!",
      },
      {
        number: "02",
        title: "Verify Authorization Codes",
        description:
          "Our team collects your EPP or Authorization codes and initiates a domain registration and transfer process in USA, ensuring all credentials are validated for a trusted start.",
      },
      {
        number: "03",
        title: "Configure DNS & Email",
        description:
          "We reconfigure DNS and email routing, guaranteeing continuity as we move your domain to a new provider in the USA without disrupting site or inbox access.",
      },
      {
        number: "04",
        title: "Finalize & Confirm",
        description:
          "Once your domain migration completes, we verify uptime, data integrity, and SSL setup to ensure your domain name transfer in the USA is live, fast, and flawless.",
      },  
    ],
  };

  const webwhylist = [
    {
      img: check,
      text: "Safe Data Transfer",
    },
    {
      img: check,
      text: "Backups",
    },
    {
      img: check,
      text: "Always On and Protected ",
    },
    {
      img: check,
      text: "24/7 Support",
    },
  ];

  const faqsData = [
    {
      header: "What makes United Web Developers different from other domain transfer providers?",
      content:
        "We don’t just move your domain; we migrate your entire digital identity, data, DNS, and security, with zero downtime and complete transparency.",
    },
    {
      header: "Do you provide domain transfer services for all types of domains and providers?",
      content:
        "Absolutely. We handle transfers across all major registrars and extensions, ensuring smooth transitions and verified ownership, no matter where your domain currently resides.",
    },
    {
      header: "Which platforms and registrars do you specialize in for domain transfers?",
      content:
        "We specialize in providing domain transfer in the USA, managing migrations between GoDaddy, Google Domains, Namecheap, and more, safely, swiftly, and with full compliance.",
    },
    {
      header: "Can you optimize my website during the domain transfer process?",
      content:
        "Yes. Our experts fine-tune DNS and hosting configurations to enhance SEO, AEO, and GEO performance, ensuring faster load times and uninterrupted visibility post-transfer.",
    },
    {
      header: "How long does a typical domain transfer take?",
      content:
        "Timelines depend on the current registrar, but most domain transfers in the USA are completed within 5-7 business days, including setup, verification, and final confirmation.",
    },
  ];

  return (
    <>
      <ReactHelmet
        title="Domain Transfer in USA"
        description="Secure, fast domain transfer in USA with zero downtime. Move your website, data, emails, and DNS safely with expert support that keeps your brand online and unstoppable."
        keywords="domain name transfer USA, transfer domain to another registrar USA, domain transfer service USA, move domain to new provider USA, domain registration transfer USA, ICANN domain transfer USA, domain transfer process USA, transfer website domain USA, domain migration USA"
        baseUrl="https://unitedwebdevelopers.com/domain-registeration"
      />

      <DefaultLayout>
        <ServicesBanner
          secClass="app-florida-herobanner doomain-registeration-herobanner"
          bgImage={herobanner}
          title="Transfer Your Website to a Faster & More Secure Domain"
          description="Switching providers or want to transfer domain to a new registrar in USA? We make the entire process simple, fast, and with zero downtime and no broken links, just fast, technical wizardry!"
          servicesbannerimg={herobannerinnerimg}
          cta1="Transfer Your Domain"
          cta2="hehe"
        />

        <WordPressPerformanceSection
          reverse
          minihead="Not Just a URL"
          miniheadclass="minihead"
          secTitle1="Your Domain is the Heart of Your Brand"
          description="You might see your domain as just a URL, but it’s way more than that. It holds and connects every fragment of your web and app: your passkeys, your integrations, your configurations, and even your email pathways. It’s the invisible thread that keeps your business alive and accessible online. At United Web Developers, our domain registration transfer in the USA makes sure that this core stays protected, stable, and seamlessly functional through every transition. Because when your domain stays healthy, your entire digital ecosystem moves with it, and we make sure nothing breaks on the way.
"
          image={aboutimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext=" Talk to Our Developers"
          aboutbtnlink="/contact-us"
          learnmorebtn="theme-btn theme-btn__yellow"
        />

        <DomainTransferServices />

        <DomainRegisterProcess {...processData} />

        <WordPressPerformanceSection
          wordpresssecclass="renewal-transfer-sec"
          minihead="About Us"
          miniheadclass="minihead d-none"
          secTitle1="Keeping Your Domain Healthy is Keeping Your Brand Healthy"
          description="Your domain isn’t meant to expire; it’s meant to expand with your business. Every renewal is an opportunity to strengthen your digital foundation, and every transfer is a chance to move toward enhanced security, speed, and reliability. At United Web Developers, we handle renewals and transfers as a single, seamless experience. Our team ensures your data, DNS, and hosting connections remain uninterrupted, while executing a domain transfer service in the USA that’s as precise as it is effortless."
          descriptiontwo="You stay focused on growth. We’ll ensure your domain stays up to date."
          image={renewalimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Learn More About United Web Studios"
          aboutbtnlink="/contact-us"
          learnmorebtn="d-none"
        />

        <section className="line-sec">
        <WordPressPerformanceSection
          wordpresssecclass="WordPressPerformanceSection"
          miniheadclass="minihead d-none"
          secTitle1="So, What Exactly Happens When You Transfer Your Domain"
          description="It’s simple, really. Your website or web app gets a boost from the slower provider, ghosting you whenever you complain to a faster, more reliable server."
          image={domaintransfer}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Learn More About United Web Studios"
          aboutbtnlink="/about"
          learnmorebtn="theme-btn theme-btn__yellow"
        />

        <WordPressPerformanceSection
          reverse
          wordpresssecclass="WordPressPerformanceSection transfer-choose-sec"
          minihead="The Best in Business"
          miniheadclass="minihead"
          secTitle1="Trusted by Americans. Powered by Results"
          description="If you think you’re just moving a domain or simply a provider, think again! You’re saving your website data, your backups, emails, and security keys, all to a provider that is fast, secure, and one that can be trusted. Thus, the best way is to help you choose a provider that fits all your needs."
          whyChooseItems={webwhylist}
          image={chooseimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Work With the Experts"
          aboutbtnlink="/contact-us"
          learnmorebtn="theme-btn theme-btn__yellow"
        />
        </section>

        <LocationContact
          secClass="wordpress-contact-sec"
          minihead="Connect With Us"
          mainhead="Start Your Domain Transfer with the Experts in America"
          secPara="Have a question? Want to show us your project? Or simply curious? Talk to us and we’ll show you the possibilities you can unlock with frontend development."
          btntxt="Talk to Us"
        />

        <ServiceFaqs
          minihead="Frequently Asked Questions"
          mainhead="All Your Domain Questions Answered Here!"
          mainpara="Swipe through our FAQs section to find all your answers. If you can’t find what you're looking for, please fill out the form and ask away. We’re sure you’ll find your answers and more with us!"
          faqsData={faqsData}
        />

        {/* <TabsPricing
          secClass="tab-pricing-bg"
          minihead="Pricing Plans"
          mainhead="Choose the Right Plan. Protect Your Domain, Data, and Much More!"
          secPara="There’s no money that can repay the data that can be lost. To ensure it never happens to you, choose the right domain transfer process in USA for your website."
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

export default DomainTransfer;
