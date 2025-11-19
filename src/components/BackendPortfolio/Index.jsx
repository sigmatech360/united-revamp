import React from "react";
import portfolio1 from "../../assets/images/services/backenddevelopment/portoflio1.webp";
import portfolio2 from "../../assets/images/services/backenddevelopment/portoflio2.webp";
import portfolio3 from "../../assets/images/services/backenddevelopment/portoflio3.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const BackendPortfolio = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <FaArrowRight />,
    prevArrow: <FaArrowLeft />,
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 600, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, 
        },
      },
    ],
  };


  return (
    <section className="backend-portfolio-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="backend-portfolio-head">
              <h6 className="minihead">Our Portfolio</h6>
              <h2 className="mainhead text-white">View Our Backend Projects</h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="backend-portfolio-head">
              <p className="text-white">
                Each backend project we work on reflects our focus on speed, structure, and scalability, the essentials that define digital excellence.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <Slider {...settings}>
            <div className="backend-portfolio-img">
              <img src={portfolio1} alt="portfolio image" />
            </div>
            <div className="backend-portfolio-img">
              <img src={portfolio2} alt="portfolio image" />
            </div>
            <div className="backend-portfolio-img">
              <img src={portfolio3} alt="portfolio image" />
            </div>
            <div className="backend-portfolio-img">
              <img src={portfolio1} alt="portfolio image" />
            </div>
            <div className="backend-portfolio-img">
              <img src={portfolio2} alt="portfolio image" />
            </div>
            <div className="backend-portfolio-img">
              <img src={portfolio3} alt="portfolio image" />
            </div>
            <div className="backend-portfolio-img">
              <img src={portfolio1} alt="portfolio image" />
            </div>
            <div className="backend-portfolio-img">
              <img src={portfolio2} alt="portfolio image" />
            </div>
            <div className="backend-portfolio-img">
              <img src={portfolio3} alt="portfolio image" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default BackendPortfolio;
