import React from 'react'
import service1 from "../../assets/images/services/logodesign/service1.webp";
import service2 from "../../assets/images/services/logodesign/service2.webp";
import service3 from "../../assets/images/services/logodesign/service3.webp";
import service4 from "../../assets/images/services/logodesign/service4.webp";
import service5 from "../../assets/images/services/logodesign/service5.webp";
import service6 from "../../assets/images/services/logodesign/service6.webp";
import { Link } from 'react-router-dom';

const LogoDesignService = () => {
  return (
    <section className='logo-design-services'>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="logodesign-service-head">
                        <h6 className='minihead'>Our Services </h6>
                        <h2 className='mainhead text-white'>The Wide Range Of Our Logo Designs </h2>
                        <p>From sleek logo designs to the playful bright ones, our logos make your brand shine across all platforms.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="logodesign-service-card">
                        <img src={service1} alt="img" />
                        <h4>Wordmark Logos</h4>
                        <p>Clean, typography-focused logos highlighting your brand name in a visually striking way. Perfect for minimalistic yet memorable branding.</p>
                        <Link to="/contact-us" className='theme-btn theme-btn__yellow'>Get it Now</Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="logodesign-service-card">
                        <img src={service2} alt="img" />
                        <h4>Custom Logos</h4>
                        <p>Tailored logos designed exclusively for your brand identity, ensuring no one else looks like you in the market.</p>
                        <Link to="/contact-us" className='theme-btn theme-btn__yellow'>Get it Now</Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="logodesign-service-card">
                        <img src={service3} alt="img" />
                        <h4>Brandmark Logos</h4>
                        <p>Icon-based logos that distil your brand essence into a simple, recognizable symbol, ideal for quick brand recall.</p>
                        <Link to="/contact-us" className='theme-btn theme-btn__yellow'>Get it Now</Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="logodesign-service-card">
                        <img src={service4} alt="img" />
                        <h4>Mascot Logos: </h4>
                        <p>Fun, character-driven logos that add personality, approachability, and story to your brand presence.</p>
                        <Link to="/contact" className='theme-btn theme-btn__yellow'>Get it Now</Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="logodesign-service-card">
                        <img src={service5} alt="img" />
                        <h4>Combination Mark Logos</h4>
                        <p>A blend of text and symbol to give you flexibility, recognizable both with and without words.</p>
                        <Link to="/contact-us" className='theme-btn theme-btn__yellow'>Get it Now</Link>
                    </div>
                </div>
                 <div className="col-lg-4 col-md-6">
                    <div className="logodesign-service-card">
                        <img src={service6} alt="img" />
                        <h4>Emblem Logos</h4>
                        <p>Encased designs that carry prestige and tradition, ideal for institutions, clubs, or brands with heritage vibes.</p>
                        <Link to="/contact-us" className='theme-btn theme-btn__yellow'>Get it Now</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default LogoDesignService