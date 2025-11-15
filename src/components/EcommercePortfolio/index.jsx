import React from 'react'
import portfolioimg from "../../assets/images/services/ecommercedevelopment/portfolio-1.webp"

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const EcommercePortfolio = () => {
  
  const sliderImages = [
    portfolioimg,
    portfolioimg,
    portfolioimg
  ];

  return (
    <section className="ecommerce-portflio-sec">
      <div className="container">
        
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="ecommerce-portfolio-head">
              <h6 className='minihead'>Our Portfolio</h6>
              <h2 className='mainhead text-white'>Our Highest-Selling E-Commerce Websites</h2>
              <p>Explore how our e-commerce website development services USA have empowered businesses to scale sales and visibility.</p>
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

export default EcommercePortfolio;
