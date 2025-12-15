import React from 'react'
import service1 from "../../assets/images/services/socialmediamarketing/service1.svg";
import service2 from "../../assets/images/services/socialmediamarketing/service2.svg";
import service3 from "../../assets/images/services/socialmediamarketing/service3.svg";
import service4 from "../../assets/images/services/socialmediamarketing/service4.svg";
import service5 from "../../assets/images/services/socialmediamarketing/service5.svg";
import service6 from "../../assets/images/services/socialmediamarketing/service6.svg";


const SMMServices = () => {
  return (
    <section className='smm-services-sec'>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="smm-services-head">
                        <h6 className='minihead'>More of Our Services</h6>
                        <h2 className='mainhead text-white'>Beyond Social Media Marketing</h2>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="smm-services-head">
                        <p>Explore digital services designed to strengthen your brand, build visibility, and support long-term growth across the entire online world.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <div className="smm-services-box">
                        <img src={service1} alt="image" />
                        <div className="smm-service-boxtxt">
                            <h5>Search Engine Optimization</h5>
                            <p>Our SEO approach helps customers discover you naturally. We combine smart keyword research, strong content, and technical improvements that position your website for long term visibility and meaningful search driven growth.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="smm-services-box">
                        <img src={service2} alt="image" />
                        <div className="smm-service-boxtxt">
                            <h5>Web Development</h5>
                            <p>We build websites that work smoothly and represent your brand with clarity. Every structure, feature, and function is designed to support performance, user experience, and business goals with lasting stability.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="smm-services-box">
                        <img src={service3} alt="image" />
                        <div className="smm-service-boxtxt">
                            <h5>Website Design</h5>
                            <p>Your website should feel inviting and intuitive. Our designs use clean layouts, expressive visuals, and logical flow, helping visitors stay engaged and encouraging them to explore every part of your brand.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="smm-services-box">
                        <img src={service4} alt="image" />
                        <div className="smm-service-boxtxt">
                            <h5>Content Writing</h5>
                            <p>Words shape perception. We write content that informs, persuades, and inspires action. With clear messaging and strategic storytelling, your brand voice stands out and builds trust over time.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="smm-services-box">
                        <img src={service5} alt="image" />
                        <div className="smm-service-boxtxt">
                            <h5>Brand Identity</h5>
                            <p>Your brand identity reflects who you are and what you stand for. We create cohesive visual and verbal elements that help your business become recognizable, consistent, and memorable in every interaction.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="smm-services-box">
                        <img src={service6} alt="image" />
                        <div className="smm-service-boxtxt">
                            <h5>Domain Registration</h5>
                            <p>We help you secure a domain that represents your business professionally. It becomes the foundation of your digital presence and supports your credibility from the moment customers search for you.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default SMMServices
