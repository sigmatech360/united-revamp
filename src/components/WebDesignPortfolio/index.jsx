import React from 'react'
import portfolio1 from "../../assets/images/services/webdesign/portfolio1.webp";
import portfolio2 from "../../assets/images/services/webdesign/portfolio2.webp";
import portfolio3 from "../../assets/images/services/webdesign/portfolio3.webp";
import portfolio4 from "../../assets/images/services/webdesign/portfolio4.webp";
import portfolio5 from "../../assets/images/services/webdesign/portfolio5.webp";
import { Link } from 'react-router-dom';

const WebDesignPortfolio = () => {

     const images = [portfolio1, portfolio2, portfolio3, portfolio4, portfolio5];

  return (
    <section className='webdesign-portfolio-sec'>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="webdesign-portfolio-head">
                        <h6 className='minihead'>Our Portfolio </h6>
                        <h2 className='mainhead'>Our Favorite Website Designs </h2>
                        <p>We’ve built websites across industries, blending creativity, usability, and strategy. Each project tells a story and provides a seamless, memorable experience for visitors.</p>
                    </div>
                </div>
            </div>
            <div className="marquee-slider">
                <div className="marquee-track">
                    {images.concat(images).map((img, index) => (
                    <img key={index} src={img} alt="portfolio" />
                    ))}
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12">
                    <div className="webdesign-portfolio-btn">
                        <Link to="/portfolio" className='theme-btn theme-btn__yellow'>Explore Our Portfolio </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WebDesignPortfolio