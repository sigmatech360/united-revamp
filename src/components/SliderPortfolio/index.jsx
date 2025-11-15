import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper CSS
import "swiper/css";
import "swiper/css/autoplay";

// Modules
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

const SliderPortfolio = ({ minihead, mainhead, mainpara, btntxt, slides }) => {
  return (
    <section className="slider-portfolio-sec">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="slider-portfolio-head">
              <h6 className="minihead">{minihead}</h6>
              <h2 className="mainhead">{mainhead}</h2>
              <p>{mainpara}</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <Swiper
              spaceBetween={20}
              slidesPerView={3}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              speed={3000}
              modules={[Autoplay]}
              breakpoints={{
                0: {
                  slidesPerView: 1.2,
                  spaceBetween: 12,
                },
                576: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: 2.5,
                  spaceBetween: 18,
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1200: {
                  slidesPerView: 3.5,
                  spaceBetween: 25,
                },
              }}
            >
              {slides?.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="sliderportfolio-img">
                    <img src={item.img} alt={item.alt || "portfolio"} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        {/* <div className="row">
            <div className="col-lg-12">
                <div className="slider-portfolio-btn">
                    <Link to="/contact-us" className="theme-btn theme-btn__yellow">{btntxt || "view all portfolio"}</Link>
                </div>
            </div>
        </div> */}
      </div>
    </section>
  );
};

export default SliderPortfolio;
