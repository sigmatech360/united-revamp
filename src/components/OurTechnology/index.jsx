import React from 'react'
import { Link } from 'react-router-dom'

const OurTechnology = () => {
  return (
    <section className='our-technology-sec'>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="our-technology-head">
                        <h6 className='minihead'>Our Expertise</h6>
                        <h2 className='mainhead'>The Core Elements Behind Every Scalable System</h2>
                        <p>We specialize in backend web development in the USA that transforms static systems into dynamic digital engines. Our work combines precision engineering, advanced frameworks, and constant optimization to ensure your applications operate seamlessly, securely, and at peak performance.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="technology-box">
                        <h4>API Development & Integration</h4>
                        <p>We create well-documented APIs that connect multiple platforms, ensuring smooth data flow, system interoperability, and an ideal user experience across applications and devices.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="technology-box">
                        <h4>Database Management:</h4>
                        <p>Our team designs optimized, secure databases that effortlessly handle large datasets, improving query speed, data consistency, and reliability under high-traffic conditions.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="technology-box">
                        <h4>Server-Side Logic:</h4>
                        <p>We craft efficient server-side structures that process complex tasks behind the scenes, enhancing automation, responsiveness, and the quality of user interaction.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="technology-box">
                        <h4>Authentication & Security:</h4>
                        <p>We build authentication layers and encrypted systems that protect sensitive data and user information, minimizing vulnerabilities and ensuring compliance with global standards.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="technology-box">
                        <h4>Performance Optimization: </h4>
                        <p>We fine-optimize your backend architecture through caching, load balancing, and code refinement, maximizing speed and maintaining performance stability even during traffic spikes.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="technology-box">
                        <h4>Maintenance & Support: </h4>
                        <p>Our dedicated support team provides continuous monitoring, updates, and improvements to keep your backend environment secure, stable, and future-ready.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="our-technology-btn">
                        <Link to="/contact-us" className='theme-btn theme-btn__yellow'>Speak to an Expert</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OurTechnology