import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import MainBanner from "../../components/MainBanner";
import { Link } from "react-router-dom";

import homeAboutImg from "../../assets/images/home-about-img.png";

import gfxlogo from "../../assets/images/gfx-logo.png";
import gfxwedev from "../../assets/images/gfx-we-dev.png";
import gfcvideoanimation from "../../assets/images/gfc-video-animation.png";
import gfxcontentwriting from "../../assets/images/gfx-content-writing.png";

import portfolioimg1 from "../../assets/images/portfolio-img-1.png";
import portfolioimg2 from "../../assets/images/portfolio-img-2.png";
import portfolioimg3 from "../../assets/images/portfolio-img-3.png";
import portfolioimg4 from "../../assets/images/portfolio-img-4.png";
import portfolioimg5 from "../../assets/images/portfolio-img-5.png";
import portfolioimg6 from "../../assets/images/portfolio-img-6.png";

import gfxglobalimg1 from "../../assets/images/gfx-global-img1.png";
import gfxglobalimg2 from "../../assets/images/gfx-global-img2.png";

import testimonialimg from "../../assets/images/testimonial-img.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import TestimonialCard from "../../components/TestimonialCard/TestimonialCard";
import { blogsData, faqsData } from "../../data";
import OurWorkProcessSec from "../../components/OurWorkProcessSec";
import FAQSection from "../../components/FAQSection";
import BlogsSec from "../../components/BlogsSec";
import GraphicDesignAgency from "../../components/GraphicDesignAgency";

const gfxServices = [
  { title: "Logo Design", img: gfxlogo },
  { title: "Web Development", img: gfxwedev },
  { title: "Video Animation", img: gfcvideoanimation },
  { title: "Content Writing", img: gfxcontentwriting },
];

const testimonials = [
  {
    description: "We’ve worked with other agencies before, but no one matched the level of creativity and professionalism that United Web Developers brought to the table. They nailed our web development and made the whole process easy.",
    userImg: testimonialimg,
    username: "Daniel Brooks",
    userCity: "San Diego, CA"
  },
  {
    description: "Our online store runs smoother than ever, thanks to United Web Developers. Their development team was incredibly responsive, and the result not only looks great but also is high-performing.",
    username: "Priya Mehta",
    userImg: testimonialimg,
    userCity: "Toronto, ON"
  },
  {
    description: "From the very first call, it felt like United Web Developers understood our needs. They took our scattered ideas and turned them into a digital presence we’re proud of. We constantly get compliments on our new site.",
    username: "Marcus Hill",
    userImg: testimonialimg,
    userCity: "Miami, FL"
  },
  {
    description: "Working with United Web Developers was like handing my digital dreams to pros who actually get it. Every update was better than the last. Pure gold.",
    username: "Laura Jensen",
    userImg: testimonialimg,
    userCity: "Seattle, WA"
  },
  {
    description: "They built a digital experience that our customers rave about. Super collaborative, super efficient, super worth it.",
    username: "Ahmed Raza",
    userImg: testimonialimg,
    userCity: "Dubai, UAE"
  },
  {
    description: "Fast timelines, killer design, and a dev team that’s spot on. Our bounce rate dropped, and our engagement skyrocketed. What more could you ask for?",
    username: "Kelsey Moore",
    userImg: testimonialimg,
    userCity: "Atlanta, GA"
  }
];

const gfxLastDescription = [
  "We go beyond being just any design and development company. Our expert team brings your vision and ideas to life through innovative solutions and custom services.",
  "As a leading name in the design and digital industry, we have offerings that hit right on the spot of our customers' needs. Whether you are a business or somebody wanting to have a digital presence, our power-packed services have you covered. From unique and engaging web designs to user-centric marketing strategies, from intriguing logos to perfect mobile apps, we have everything that your business needs to be successful.",
  "Hit us with a message and let the experts do their jobs.",
];

const stepsData = [
  {
    stepNum: "01",
    stepName: "Breaf",
    stepDescription:
      "We start by understanding your vision, goals, and audience. No assumptions, just clear communication with the client.",
  },
  {
    stepNum: "02",
    stepName: "Ideation",
    stepDescription:
      "Our team brainstorms bold ideas and suitable strategies that help you shine in the crowded digital market.",
  },
  {
    stepNum: "03",
    stepName: "Sketch",
    stepDescription:
      "We turn concepts into wireframes and visual drafts, mapping out your digital presence before we bring it to life.",
  },
  {
    stepNum: "04",
    stepName: "Execution",
    stepDescription:
      "Design meets development. This is where creativity and code are combined to create digital magic.",
  },
  {
    stepNum: "05",
    stepName: "Delivery",
    stepDescription:
      "Once perfected, your project is launched and ready to perform, backed by our long-term support option.",
  },
]

const Home = () => {
  return (
    <DefaultLayout footerTitle='Providing <span class="colorYellow">Smart Digital</span>
              <br /> Solutions Designed to Grow Your
              <span class="colorYellow">Business Online</span>'>
      <MainBanner />

      <section className="home-about-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-lg-0 mb-4">
              <div
                className="home-about-img"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <img
                  src={homeAboutImg}
                  className="img-fluid"
                  alt="About Image"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="home-about-content">
                <div className="sec-head">
                  <h2 data-aos="fade-left" data-aos-delay="100">
                    What Sets Us Apart In The Digital World?
                  </h2>
                  <p data-aos="fade-left" data-aos-delay="300">
                    United Web Developers was founded with the idea of elevating
                    brands through custom web design and digital solutions such
                    as SEO, SMM, Mobile apps, Logo design, basically everything
                    that can make a business a running and known BRAND. We blend
                    functionality and creativity to tell your unique story.
                  </p>
                  <p data-aos="fade-left" data-aos-delay="300">
                    Our secret? A mix of creativity, out-of-the-box strategies,
                    and good old-fashioned internet wizardry. We make sure your
                    brand becomes the star of the limelight through stunning
                    graphics, engaging content, and flawless functionality. With
                    our digital expertise, we ensure you’re not just another URL
                    lost in the vast online universe, but a powerful presence
                    that stands out, attracts, and drives revenue.
                  </p>
                  <div
                    className="d-flex gap-2"
                    data-aos="fade-left"
                    data-aos-delay="500"
                  >
                    <Link className="theme-btn theme-btn__black">
                      Get Started
                    </Link>
                    <button className="theme-btn theme-btn__yellow">
                      Call Us Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GraphicDesignAgency
        secTag="Leading Design & Development Agency"
        secTitle="Unlock A World of Digital Possibilities"
        secHeadDescription="Our digital experts are on a mission to deliver stellar digital solutions to brands across the globe, combining visionary creativity with smart development strategies that truly make an impact."
        viewAllServices
        gfxServices={gfxServices}
        gfxLastDescription={gfxLastDescription}
        gfxLastImgs
      />

      <section className="home-portfolio-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12">
              <div className="sec-head">
                <p className="sec-head-tag label-yellow-bg">PORTFOLIO</p>
                <h2 data-aos="fade-up" data-aos-delay={100}>
                  Your Partner In All Things Digital
                </h2>
                <p data-aos="fade-up" data-aos-delay={300}>
                  Our portfolio is filled with the bold, custom digital
                  solutions we’ve created to help brands grow, connect, and lead
                  in their space. See for yourself why our clients trust us.
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="portfolio-imgs__container">
                <div
                  className="portfolio-img"
                  data-aos="flip-right"
                  data-aos-delay={100}
                >
                  <img src={portfolioimg1} alt="Portfolio Image 1" />
                </div>
                <div
                  className="portfolio-img"
                  data-aos="flip-down"
                  data-aos-delay={300}
                >
                  <img src={portfolioimg2} alt="Portfolio Image 2" />
                </div>
                <div
                  className="portfolio-img"
                  data-aos="flip-left"
                  data-aos-delay={500}
                >
                  <img src={portfolioimg3} alt="Portfolio Image 3" />
                </div>
              </div>
              <div className="portfolio-imgs__container">
                <div
                  className="portfolio-img"
                  data-aos="flip-left"
                  data-aos-delay={100}
                >
                  <img src={portfolioimg4} alt="Portfolio Image 3" />
                </div>
                <div
                  className="portfolio-img"
                  data-aos="flip-up"
                  data-aos-delay={200}
                >
                  <img src={portfolioimg5} alt="Portfolio Image 4" />
                </div>
                <div
                  className="portfolio-img"
                  data-aos="flip-left"
                  data-aos-delay={500}
                >
                  <img src={portfolioimg6} alt="Portfolio Image 5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OurWorkProcessSec
        secTag="How We Create Magic"
        secTitle="Transform Your Brand With Tailored Digital Solutions"
        secDescription="We turn rough ideas into digital brilliance with a process that’s equally parts strategy, creativity, and clean execution."
        // secLastText="Taking the brainstorming session to the next stage, our designers come up with various designing sketches converting thoughts into real images."
        secStepsData={stepsData}
      />
      <section className="home-testimonial-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sec-head">
                <p className="sec-head-tag label-yellow-bg">Testimonials</p>
                <h2 data-aos="fade-up" data-aos-delay={100}>
                We Don’t Chase Reviews- We Earn Them
                </h2>
                <p data-aos="fade-up" data-aos-delay={300}>
                Here’s what our clients have to say after working with us (spoiler alert: they’re loving it)
                </p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="swiper-container">
                <Swiper
                  modules={[Pagination]}
                  spaceBetween={20}
                  slidesPerView={1}
                  loop={true}
                  speed={1000}
                  breakpoints={{
                    768: { slidesPerView: 2 },
                  }}
                  pagination={{ clickable: true }}
                >
                  {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                      <TestimonialCard
                        description={testimonial.description}
                        userImg={testimonial.userImg}
                        username={testimonial.username}
                        userCity={testimonial.userCity}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gfx-global-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="gfx-global__content">
                <p className="sec-head-tag label-yellow-bg">
                Bespoke Solutions For You
                </p>
                <h2 data-aos="fade-right" data-aos-delay={100}>
                A Digital Company To Take You Ahead
                </h2>
                <p data-aos="fade-right" data-aos-delay={300}>
                We grow when our clients grow. Our success is rooted in the real, measurable progress our customers achieve through the strategies we build together. At United Web Developers, we have one mission: To help our clients succeed in the best way possible. And we do that through attractive design, advanced development, and smart marketing strategies. Why we say people love working with us is because we genuinely care about their brand, their goals, and their growth rather than just monetary benefits.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="gfx-global__img">
                <img
                  src={gfxglobalimg1}
                  className="gfx-global__img-1 img-fluid"
                  alt="graphic design agency"
                  data-aos="fade-left"
                  data-aos-delay={100}
                />
                <img
                  src={gfxglobalimg2}
                  className="gfx-global__img-2 img-fluid"
                  alt="graphic design agency"
                  data-aos="fade-left"
                  data-aos-delay={300}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        secHeadrag="FREQUENTLY ASKED QUESTIONS"
        title="We’ve Got All The Answers To Your Questions"
        description="From how we build custom websites to what makes our design process different, here are the answers to the questions we hear the most."
        faqsQA={faqsData}
      />

      <BlogsSec
        blogSecTitle='Hot Takes, Fresh Trends, and Digital Know-How'
        blogSubtext="Stay ahead of the digital world with our latest blogs, packed with expert tips, top trends, development insights, and digital news that actually matter."
        blogsData={blogsData}
      />
    </DefaultLayout>
  );
};

export default Home;
