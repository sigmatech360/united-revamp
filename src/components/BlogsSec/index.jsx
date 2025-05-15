import React from "react";
import { blogsData } from "../../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const BlogsSec = (props) => {
  return (
    <section className="blog-sec">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="sec-head">
              <p className="sec-head-tag label-yellow-bg">
                ADDITIONAL RESOURCES
              </p>
              <h3 data-aos="fade-up" data-aos-delay={100}>
                {props.blogSecTitle}
              </h3>
              <p data-aos="fade-up" data-aos-delay={300}>
                {props.blogSubtext}
                
              </p>
            </div>
          </div>
          <div className="swiper-container">

            <Swiper
              modules={[Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              speed={1000}
              breakpoints={{
                768: { slidesPerView: 3 },
              }}
              pagination={{ clickable: true }}
            >
              {props.blogsData.map((item, index)=> (
                <SwiperSlide key={index}>
                  {/* <TestimonialCard
                          description={testimonial.description}
                          userImg={testimonial.userImg}
                          username={testimonial.username}
                          userCity={testimonial.userCity}
                        /> */}
                  <div className=" mb-lg-0 mb-4" key={index}>
                    <div
                      className="blog-card"
                      data-aos="fade-up"
                      data-aos-delay={index * 300}
                    >
                      <div className="blog-card__image">
                        <img
                          src={item.img}
                          className="img-fluid"
                          alt="Blog Image"
                        />
                      </div>
                      <div className="blog-card__content">
                        <div className="blog-card__content-meta">
                          <p className="h4">By: {item.meta.author}</p>
                          <p>{item.meta.date}</p>
                        </div>
                        <p className="blog-card__content-title">{item.title}</p>
                      </div>
                    </div>
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

export default BlogsSec;
