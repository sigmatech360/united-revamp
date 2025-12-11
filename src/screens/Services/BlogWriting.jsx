import React, { useState } from "react";
import ReactHelmet from "../../components/ReactHelmet";
import DefaultLayout from "../../components/DefaultLayout";
import ServicesBanner from "../../components/ServicesBanner";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import herobanner from "../../assets/images/services/blogwriting/herobanner.webp";
import aboutimg from "../../assets/images/services/blogwriting/aboutimg.webp";
import chooseimg from "../../assets/images/services/blogwriting/chooseimg.webp";
import blogorderimg from "../../assets/images/services/blogwriting/blog-order-img.webp";
import BlogWritingServices from "../../components/BlogWritingServices";
import BlogWritingWork from "../../components/BlogWritingWork";
import HomeBlogsSec from "../../components/HomeBlogsSec";
import TabsPricing from "../../components/TabsPricing";
import { dynamictabsData } from "../../data";
import ServiceFaqs from "../../components/ServiceFaqs";
import LocationContact from "../../components/LocationContact";
import HappyClient from "../../components/HappyClient";
import { Link } from "react-router-dom";
import FormModal from "../../components/FormModal";

const BlogWriting = () => {

   const [showModal, setShowModal] = useState(false);


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

   const whyChooseItems = [
    "Ranking blogs on multiple browsers",
    "CTAs that lead to conversion",
    "Loved by AI overview",
    "Researched content that adds value",
  ];

  return (
    <>
      <ReactHelmet
        title="Professional Blog Writing Services in the USA"
        description="Get engaging, value-packed, and search-friendly blogs written by expert content creators in the USA. Professional blog writing that helps you rank, grow, and shine online."
        keywords="blog writing services usa, professional blog writing usa, SEO blog writing services usa, blog writing agency usa, business blog writing usa, website blog writing services usa, blog article writing services usa, blog post writing usa, blog writing and management usa"
        baseUrl="https://unitedwebdevelopers.com/blog-writing"
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

        <BlogWritingServices />

        <BlogWritingWork />


        <WordPressPerformanceSection
          wordpresssecclass="WordPressPerformanceSection blogwriting-choose-sec"
          miniheadclass="minihead"
          secTitle1="Blog Writing in the USA That Knows How to Make You Grow"
          description="Blog writing services in the USA that understand brand identity and search behavior so your blogs attract traffic and actually convert."
          AngularList="blogwriting-list"
          AngularChooseListItems={whyChooseItems}
          image={chooseimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Talk to A Writing Expert"
          aboutbtnlink="/contact-us"
          learnmorebtn="theme-btn theme-btn__yellow"
        />


        <HappyClient/>

        <section className="blogwriting-order-sec">
          <div className="container">
            <div className="blogwriting-order-bg">
              <div className="row">
                <div className="col-lg-8">
                  <div className="blogwrititing-order-txt">
                    <h2 className="mainhead text-white">Ready to Publish Words on the Web?</h2>
                    <div className="blogwrite-order-flex">
                      <div className="blogwrite-order-flextxt">
                        <h4>Pro Writers</h4>
                        <h6>Influential word command</h6>
                      </div>
                      <div className="blogwrite-order-flextxt">
                        <h4>Lightning Fast</h4>
                        <h6>Published within 48h</h6>
                      </div>
                      <div className="blogwrite-order-flextxt">
                        <h4>By Real Humans</h4>
                        <h6>100% human</h6>
                      </div>  
                    </div>
                    <div className="blogwriting-order-btn">
                      <button onClick={() => setShowModal(true)} className="theme-btn theme-btn__yellow">Start Now</button>
                      <Link to="/contact-us" className="theme-btn">Send a Message</Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="blogwriting-order-img">
                    <img src={blogorderimg} alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
        <FormModal show={showModal} handleClose={() => setShowModal(false)} />
      </DefaultLayout>
    </>
  );
};

export default BlogWriting;
