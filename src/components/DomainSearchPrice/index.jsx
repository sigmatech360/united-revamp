import React from 'react'
import { IoSearch } from 'react-icons/io5'
import club from "../../assets/images/services/domainregisteration/club.webp"
import color from "../../assets/images/services/domainregisteration/color.webp"
import online from "../../assets/images/services/domainregisteration/online.webp"
import tv from "../../assets/images/services/domainregisteration/tv.webp"
import ai from "../../assets/images/services/domainregisteration/ai.webp"
import com from "../../assets/images/services/domainregisteration/com.webp"
import trustpilotstar from "../../assets/images/services/domainregisteration/trustpilot-star.svg"
import trustpilotstars from "../../assets/images/services/domainregisteration/trustpilot-stars.svg"

const DomainSearchPrice = () => {
  return (
    <section className='domain-search-buy'>
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="domain-search-bar">
                        <input type="search" name="" id="" placeholder='Find Your Perfect Domain Name...'/>
                        <span><IoSearch /></span>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="domain-prices">
                        <div className="different-domain-price">
                            <img src={club} alt="club" />
                            <h6>$9.99</h6>
                        </div>
                         <div className="different-domain-price">
                            <img src={color} alt="color" />
                            <h6>$39.99</h6>
                        </div>
                         <div className="different-domain-price">
                            <img src={online} alt="online" />
                            <h6>$8.99</h6>
                        </div>
                         <div className="different-domain-price">
                            <img src={tv} alt="tv" />
                            <h6>$6.99</h6>
                        </div>
                         <div className="different-domain-price">
                            <img src={ai} alt="ai" />
                            <h6>$69.99</h6>
                        </div>
                         <div className="different-domain-price">
                            <img src={com} alt="com" />
                            <h6>$69.99</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="trustpilot-txt">
                        <p>Our customers say <span>Excellent</span> <img src={trustpilotstars} className='trustpilot-stars' alt="trustpilot review star" /> 4.7 out of 5 based on 7,560 reviews <img src={trustpilotstar} className='trustpilotstar' alt="trustpilot star" /> Trustpilot</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default DomainSearchPrice