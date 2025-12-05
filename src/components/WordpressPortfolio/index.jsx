import React from 'react'
import portoflio1 from "../../assets/images/services/wordpressdevelopment/portoflio1.webp"
import portoflio2 from "../../assets/images/services/wordpressdevelopment/portfolio-2.webp"
import portoflio3 from "../../assets/images/services/wordpressdevelopment/portfolio-3.webp"
import portoflio4 from "../../assets/images/services/wordpressdevelopment/portfolio-4.webp"
import portoflio5 from "../../assets/images/services/wordpressdevelopment/portfolio-5.webp"
import portoflio6 from "../../assets/images/services/wordpressdevelopment/portfolio-6.webp"
import leftarrow from "../../assets/images/services/wordpressdevelopment/left-arrow.svg";
import rightarrow from "../../assets/images/services/wordpressdevelopment/right-arrow.svg";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const WordpressPortfolio = () => {
  
  const sliderImages = [
    portoflio1,
    portoflio2,
    portoflio3,
    portoflio4,
    portoflio5,
    portoflio6,
  ];

  return (
    <section className="ecommerce-portflio-sec">
      <div className="container">
        
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="ecommerce-portfolio-head">
              <h6 className='shorttop-head'>Portfolio</h6>
              <h2 className='mainhead'>Our Goldmine of WordPress Websites</h2>
              <p>Swipe through our portfolio and you’ll see every design tells a story of a business that dared to trust us with their website, and we offer the best web development tech in the Globe.</p>
            </div>
          </div>
        </div>  

        <div className="row justify-content-center">
          <div className="col-lg-10">
            
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              navigation={true}
              modules={[Navigation]}
              className="ecommerce-portfolio-slider"
            >
              {sliderImages.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="ecommerce-portfolio-img">
                    <img src={img} alt={`portfolio ${index}`} className="img-fluid" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

          </div>
        </div>

      </div>
    </section>
  );
};

export default WordpressPortfolio;
