import React from 'react'
import serviceicon1 from "../../assets/images/services/blogwriting/serviceicon1.svg";
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const BlogWritingServices = () => {
  return (
    <section className='blogwriting-services-sec'>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="blogwriting-services-head">
                        <h6 className='minihead'>Our Blog Writing Includes</h6>
                        <h2 className='mainhead'>What You Get From Our Blog Writers</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="blogwrting-service-card">
                        <div className="blogwritng-service-icon">
                            <img src={serviceicon1} alt="image" />
                        </div>
                        <div className="blogwritng-service-cardflex">
                            <div className="blogservice-service-txt">
                                <h4>Ghost Writing</h4>
                                <p>Your ideas. Our words. You get the credit, the authority, and the shine.</p>
                            </div>
                            <div className="blogservice-card-arrow">
                                <Link to="/contact-us"><span><FaLongArrowAltRight /></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="blogwrting-service-card">
                        <div className="blogwritng-service-icon">
                            <img src={serviceicon1} alt="image" />
                        </div>
                        <div className="blogwritng-service-cardflex">
                            <div className="blogservice-service-txt">
                                <h4>How To Guides</h4>
                                <p>Step-by-step content that teaches, simplifies, and quietly positions your brand as the expert.</p>
                            </div>
                            <div className="blogservice-card-arrow">
                                 <Link to="/contact-us"><span><FaLongArrowAltRight /></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="blogwrting-service-card">
                        <div className="blogwritng-service-icon">
                            <img src={serviceicon1} alt="image" />
                        </div>
                        <div className="blogwritng-service-cardflex">
                            <div className="blogservice-service-txt">
                                <h4>Repurposing Content</h4>
                                <p>Turn an old piece of content into something new, fresh, and optimized for today’s search behavior.</p>
                            </div>
                            <div className="blogservice-card-arrow">
                                 <Link to="/contact-us"><span><FaLongArrowAltRight /></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="blogwrting-service-card">
                        <div className="blogwritng-service-icon">
                            <img src={serviceicon1} alt="image" />
                        </div>
                        <div className="blogwritng-service-cardflex">
                            <div className="blogservice-service-txt">
                                <h4>SEO Blogs</h4>
                                <p>We write blogs that appear on search results, built to help you rank, attract traffic, and stay visible on any browser.</p>
                            </div>
                            <div className="blogservice-card-arrow">
                                 <Link to="/contact-us"><span><FaLongArrowAltRight /></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="blogwrting-service-card">
                        <div className="blogwritng-service-icon">
                            <img src={serviceicon1} alt="image" />
                        </div>
                        <div className="blogwritng-service-cardflex">
                            <div className="blogservice-service-txt">
                                <h4>Professional Articles</h4>
                                <p>Insight-driven pieces with expert tone and backed with thorough research and clarity.</p>
                            </div>
                            <div className="blogservice-card-arrow">
                                 <Link to="/contact-us"><span><FaLongArrowAltRight /></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="blogwrting-service-card">
                        <div className="blogwritng-service-icon">
                            <img src={serviceicon1} alt="image" />
                        </div>
                        <div className="blogwritng-service-cardflex">
                            <div className="blogservice-service-txt">
                                <h4>News and Trends</h4>
                                <p>Timely content that keeps your audience informed and positions your brand as the one that stays ahead.</p>
                            </div>
                            <div className="blogservice-card-arrow">
                                <Link to="/contact-us"><span><FaLongArrowAltRight /></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BlogWritingServices