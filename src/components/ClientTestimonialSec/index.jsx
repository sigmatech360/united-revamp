import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import ratingstartimg from "../../assets/images/rating-start-img.webp";

const ClientTestimonialSec = (props) => {
  return (
    <section
      className={`client-testimonial client-testimonial__${props.className}`}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="sec-head">
              <p className="sec-head-tag label-yellow-bg">
                CLIENT TESTIMONIALS
              </p>
              <h2
                className="para-title"
                data-aos="fade-right"
                data-aos-delay={100}
              >
                {props.title}
              </h2>
              <p data-aos="fade-right" data-aos-delay={300}>
                {props.description}
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="client-testimonial__container">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                centeredSlides={false}
                speed={1000} // smooth slide speed
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  768: { slidesPerView: 1.2, centeredSlides: false },
                }}
              >
                {props.testimonialData.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div className="client-testimonial__content">
                      <p className="client-testimonial__content-quote">
                        {testimonial.quote}
                      </p>
                      <div className="client-testimonial__content-footer">
                        <div className="client-testimonial__content-footer-meta">
                          <h3>{testimonial.name}</h3>
                          {/* <p className="client-testimonial__content-footer-meta-desc">
                            {testimonial.designation}
                          </p> */}
                        </div>
                        <img src={ratingstartimg} alt="Rating" />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonialSec;
