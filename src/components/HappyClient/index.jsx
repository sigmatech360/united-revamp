import React from 'react'
import construction from "../../assets/images/services/blogwriting/construction.svg"
import dental from "../../assets/images/services/blogwriting/dental.svg"
import business from "../../assets/images/services/blogwriting/business.svg"
import healthcare from "../../assets/images/services/blogwriting/healthcare.svg"
import entertainment from "../../assets/images/services/blogwriting/entertainment.svg"
import restaurants from "../../assets/images/services/blogwriting/restaurant.svg"
import filmstudio from "../../assets/images/services/blogwriting/filmstudio.svg"
import law from "../../assets/images/services/blogwriting/law.svg"
import consulting from "../../assets/images/services/blogwriting/consulting.svg"
import drug from "../../assets/images/services/blogwriting/drug.svg"
import clothing from "../../assets/images/services/blogwriting/cloth.svg"
import spa from "../../assets/images/services/blogwriting/spa.svg"
import automobile from "../../assets/images/services/blogwriting/automobile.svg"
import fourbusiness from "../../assets/images/services/blogwriting/fourbusiness.svg"
import photography from "../../assets/images/services/blogwriting/photography.svg"
import art from "../../assets/images/services/blogwriting/art.svg"
import hotel from "../../assets/images/services/blogwriting/hotels.svg"
import food from "../../assets/images/services/blogwriting/food.svg"
import ecommerce from "../../assets/images/services/blogwriting/ecommerce.svg"
import education from "../../assets/images/services/blogwriting/education.svg"

const HappyClient = () => {
  return (
    <section className='happy-client-sec'>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="happy-client-head">
                        <h6 className='minihead'>Industries We Serve</h6>
                        <h2 className='mainhead'>Professional Blog Writing in the <span>USA for Everyone!</span> </h2>
                        <p>From tech to wellness to ecommerce to education, we write for brands that want quality content designed for growth, search engines, and real humans.</p>
                    </div>
                    <div className="happy-clients">
                        <div className="happy-client-box">
                            <h3>1000+</h3>
                            <h5>Blogs Delivered</h5>
                        </div>
                        <div className="happy-client-box">
                            <h3>20+</h3>
                            <h5>Professional Writers</h5>
                        </div>
                        <div className="happy-client-box">
                            <h3>300+</h3>
                            <h5>Happy Clients</h5>
                        </div>
                        <div className="happy-client-box">
                            <h3>100+</h3>
                            <h5>Blogs Ranked at #1</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="happy-client-logotxt">
                        <div className="logotxt-box">
                            <img src={construction} alt="img" />
                            <h5>Construcation</h5>
                        </div>
                        <div className="logotxt-box">
                            <img src={dental} alt="img" />
                            <h5>Dental</h5>
                        </div>
                        <div className="logotxt-box">
                            <img src={business} alt="img" />
                            <h5>Business</h5>
                        </div>
                        <div className="logotxt-box">
                            <img src={healthcare} alt="img" />
                            <h5>Healthcare</h5>
                        </div>
                        <div className="logotxt-box">
                            <img src={entertainment} alt="img" />
                            <h5>Entertainment</h5>
                        </div>
                        <div className="logotxt-box">
                            <img src={restaurants} alt="img" />
                            <h5>Resturants</h5>
                        </div>
                        <div className="logotxt-box">
                            <img src={filmstudio} alt="img" />
                            <h5>Film & Studio</h5>
                        </div>
                        <div className="logotxt-box">
                            <img src={law} alt="img" />
                            <h5>Law</h5>
                        </div>
                        <div className="logotxt-box">
                            <img src={consulting} alt="img" />
                            <h5>Consultating</h5>
                        </div>
                        <div className="logotxt-box">
                            <img src={drug} alt="img" />
                            <h5>Drug</h5>
                        </div>
                        <div className="logotxt-box">
                            <img src={clothing} alt="img" />
                            <h5>Clothing</h5>
                        </div><div className="logotxt-box">
                            <img src={spa} alt="img" />
                            <h5>Spa</h5>
                        </div>
                        <div className="logotxt-box">
                            <img src={automobile} alt="img" />
                            <h5>Automobile</h5>
                        </div>
                        <div className="logotxt-box">
                            <img src={fourbusiness} alt="img" />
                            <h5>Business</h5>
                        </div>
                        <div className="logotxt-box">
                            <img src={photography} alt="img" />
                            <h5>Photography</h5>
                        </div>
                        <div className="logotxt-box">
                            <img src={art} alt="img" />
                            <h5>Art</h5>
                        </div>
                        <div className="logotxt-box">
                            <img src={hotel} alt="img" />
                            <h5>Hotels</h5>
                        </div>
                        <div className="logotxt-box">
                            <img src={food} alt="img" />
                            <h5>Food</h5>
                        </div>
                        <div className="logotxt-box">
                            <img src={ecommerce} alt="img" />
                            <h5>E-Commerce</h5>
                        </div>
                        <div className="logotxt-box">
                            <img src={education} alt="img" />
                            <h5>Education</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HappyClient