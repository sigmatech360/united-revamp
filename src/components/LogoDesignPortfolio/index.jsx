import React from 'react'
import portfolio1 from "../../assets/images/services/logodesign/portfolio1.webp";
import portfolio2 from "../../assets/images/services/logodesign/portfolio2.webp";
import portfolio3 from "../../assets/images/services/logodesign/portfolio3.webp";
import portfolio4 from "../../assets/images/services/logodesign/portfolio4.webp";
import portfolio5 from "../../assets/images/services/logodesign/portfolio5.webp";
import portfolio7 from "../../assets/images/services/logodesign/portfolio7.webp";
import portfolio8 from "../../assets/images/services/logodesign/portfolio8.webp";
import portfolio9 from "../../assets/images/services/logodesign/portfolio9.webp";
import portfolio10 from "../../assets/images/services/logodesign/portfolio10.webp";
import portfolio11 from "../../assets/images/services/logodesign/portfolio11.webp";
import portfolio12 from "../../assets/images/services/logodesign/portfolio12.webp";
import portfolio13 from "../../assets/images/services/logodesign/portfolio13.webp";
import portfolio14 from "../../assets/images/services/logodesign/portfolio14.webp";
import portfolio15 from "../../assets/images/services/logodesign/portfolio15.webp";
import portfolio16 from "../../assets/images/services/logodesign/portfolio16.webp";
import { Link } from 'react-router-dom';

const LogoDesignPortfolio = () => {
  return (
    <section className='logodesign-portfolio-sec'>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="logodesign-portfolio-head">
                        <h6 className='minihead'>Our Portfolio </h6>
                        <h2 className='mainhead text-white'>Our Work in Action</h2>
                        <p className='text-white'>From startups to powerhouse brands, our portfolio reflects creativity, precision, and modern branding strategies. Every logo tells a story, crafted with flair.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="logodesign-portfolio-images">
                        <img src={portfolio1} alt="logo image" />
                        <img src={portfolio2} alt="logo image" />
                        <img src={portfolio3} alt="logo image" />
                        <img src={portfolio4} alt="logo image" />
                        <img src={portfolio5} alt="logo image" />
                        <img src={portfolio7} alt="logo image" />
                        <img src={portfolio8} alt="logo image" />
                        <img src={portfolio9} alt="logo image" />
                        <img src={portfolio10} alt="logo image" />
                        <img src={portfolio11} alt="logo image" />
                        <img src={portfolio12} alt="logo image" />
                        <img src={portfolio13} alt="logo image" />
                        <img src={portfolio14} alt="logo image" />
                        <img src={portfolio15} alt="logo image" />
                        <img src={portfolio16} alt="logo image" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="logodesign-portfolio-btn">
                        <Link to="/portfolio" className='theme-btn theme-btn__yellow'>Explore the Portfolio</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default LogoDesignPortfolio