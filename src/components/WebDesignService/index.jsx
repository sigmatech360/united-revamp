import React from 'react'
import service1 from "../../assets/images/services/webdesign/service1.webp";
import service2 from "../../assets/images/services/webdesign/service2.webp";
import service3 from "../../assets/images/services/webdesign/service3.webp";
import { Link } from 'react-router-dom';



const WebDesignService = () => {
  return (
    <section className='webdesign-service-sec'>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="webdesign-head">
                        <h6 className='minihead'>A Detailed Look</h6>
                        <h2 className='mainhead text-white'>The Three Ingredients Every Strong Website Truly Needs</h2>
                        <p className='text-white'>We go beyond visuals to create websites that perform. Every website we build is a combination of design excellence, seamless usability, and search engine visibility.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="webdesign-service-card">
                        <img src={service1} alt="image" />
                        <h4>User Interface</h4>
                        <p>Clean, modern designs that guide users naturally through your site while reflecting your brand personality. Every button, color, and layout is intentional.</p>
                    </div>
                </div>
                 <div className="col-lg-4 col-md-6">
                    <div className="webdesign-service-card">
                        <img src={service2} alt="image" />
                        <h4>User Experience</h4>
                        <p>Smooth, intuitive, and enjoyable navigation that keeps visitors engaged. From flow to accessibility, we make sure your site feels effortless.</p>
                    </div>
                </div>
                 <div className="col-lg-4 col-md-6">
                    <div className="webdesign-service-card">
                        <img src={service3} alt="image" />
                        <h4>Search Engine Optimization </h4>
                        <p>Strategically optimized content, structure, and meta elements for search engines. We build websites that people find and love without sacrificing style or usability.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="webdesign-service-btn">
                        <Link to="/portfolio" className='theme-btn theme-btn__yellow'>Explore Our Designs</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WebDesignService