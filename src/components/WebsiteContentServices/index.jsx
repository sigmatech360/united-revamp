import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const WebsiteContentServices = () => {
  return (
    <section className='websitecontent-services-sec'>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="websitecontent-serivces-head">
                        <h6 className='minihead'>Services</h6>
                        <h2 className='mainhead'>Where We Let Our Words Do the Magic</h2>
                        <p>Pages convert because of words, and we write those words, helping you gain visibility, authority, and more.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="websitecontent-service-card">
                        <div className="webcontent-service-txt">
                            <h4>Website Content</h4>
                            <p>Turns confused browsers into confident decision makers with the right web content.</p>
                        </div>
                        <div className="webcontent-service-btn">
                            <Link to="/contact-us"> <FaLongArrowAltRight /></Link>
                        </div>
                    </div>
                </div>
                 <div className="col-lg-4 col-md-6">
                    <div className="websitecontent-service-card">
                        <div className="webcontent-service-txt">
                            <h4>Blog Writing</h4>
                            <p>Writing blogs that build trust and visitors actually enjoy reading.</p>
                        </div>
                        <div className="webcontent-service-btn">
                            <Link to="/contact-us"> <FaLongArrowAltRight /></Link>
                        </div>
                    </div>
                </div>
                 <div className="col-lg-4 col-md-6">
                    <div className="websitecontent-service-card">
                        <div className="webcontent-service-txt">
                            <h4>SEO Copywriting</h4>
                            <p>Rank your website to the top of the search engine with keyword-optimized content.</p>
                        </div>
                        <div className="webcontent-service-btn">
                            <Link to="/contact-us"> <FaLongArrowAltRight /></Link>
                        </div>
                    </div>
                </div>
                 <div className="col-lg-4 col-md-6">
                    <div className="websitecontent-service-card">
                        <div className="webcontent-service-txt">
                            <h4>Business Profile</h4>
                            <p>Close deals with business profiles that build credibility at a single glance..</p>
                        </div>
                        <div className="webcontent-service-btn">
                            <Link to="/contact-us"> <FaLongArrowAltRight /></Link>
                        </div>
                    </div>
                </div>
                 <div className="col-lg-4 col-md-6">
                    <div className="websitecontent-service-card">
                        <div className="webcontent-service-txt">
                            <h4>Email & Newsletter Writing</h4>
                            <p>Warmup leads with target content written to help brands convert.</p>
                        </div>
                        <div className="webcontent-service-btn">
                            <Link to="/contact-us"> <FaLongArrowAltRight /></Link>
                        </div>
                    </div>
                </div>
                 <div className="col-lg-4 col-md-6">
                    <div className="websitecontent-service-card">
                        <div className="webcontent-service-txt">
                            <h4>Press Release</h4>
                            <p>Release your important announcements with press releases that establish you as a credible leader in the industry. </p>
                        </div>
                        <div className="webcontent-service-btn">
                            <Link to="/contact-us"> <FaLongArrowAltRight /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WebsiteContentServices