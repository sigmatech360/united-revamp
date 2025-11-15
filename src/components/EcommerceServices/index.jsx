import React from 'react'
import { Link } from 'react-router-dom'

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

// Swiper styles
import 'swiper/css'
import 'swiper/css/autoplay'

const EcommerceServices = (props) => {
  return (
    <section className='ecommerce-service-sec'>
      <div className="container-fluid">

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="ecommerce-service-head">
              <h6 className='minihead'>{props.minihead}</h6>
              <h2 className='mainhead text-white'>{props.mainhead}</h2>
              <p>{props.mainpara}</p>
            </div>
          </div>
        </div>

        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          slidesPerView={3}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
          className="ecommerce-swiper"
        >
          {props.cards?.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="ecommerce-service-box">
                <div className="ecommerce-service-img">
                  <img src={card.img} alt={card.title} />
                </div>
                <div className="ecommerce-service-txt">
                  <h4>{card.title}</h4>
                  <p>{card.para}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Button */}
        <div className="row">
          <div className="col-lg-12">
            <div className="ecommerce-service-btn">
              <Link to="/contact-us" className="theme-btn theme-btn__yellow">
                Talk to Our Developers
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default EcommerceServices
