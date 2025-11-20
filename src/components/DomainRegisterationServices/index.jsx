import React from 'react'
import { Link } from 'react-router-dom'

const DomainRegisterationServices = () => {
  return (
    <section className='domain-registeraton-sec'>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-l0">
                    <div className="domain-registeration-head">
                        <h6 className='minihead'>Complete Web Experience</h6>
                        <h2 className='mainhead text-white'>Explore More Of Our Services</h2>
                        <p>From domain registration to full-scale website management, United Web Studios provides complete web solutions designed to help businesses build, host, and grow their digital presence.</p>
                    </div>
                </div>
            </div>
            <div className="row register-box-line">
                <div className="col-lg-4 col-md-6">
                    <div className="register-service-box">
                        <h3>Web Hosting</h3>
                        <p>Our web hosting services deliver secure servers to keep your website online around the clock. With fast loading speeds and guaranteed uptime, we provide reliable hosting solutions to ensure your visitors enjoy a smooth and uninterrupted experience.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="register-service-box">
                        <h3>Website Design</h3>
                        <p>Our website design team creates modern, user-friendly, and visually engaging sites that connect with your audience. We focus on responsive layouts and professional designs that reflect your brand’s identity and convert visitors into loyal customers.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="register-service-box">
                        <h3>Custom Development</h3>
                        <p>We build powerful, custom-coded websites and applications that deliver performance and flexibility. From complex backend systems to sleek frontends, our development team ensures your website runs smoothly and meets your unique business requirements.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="register-service-box">
                        <h3>Server Management</h3>
                        <p>Our server management services ensure your hosting environment is secure, updated, and optimized for speed. We monitor performance, apply updates, and handle configurations so your servers stay reliable and efficient at all times.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="register-service-box">
                        <h3>Search Engine Optimization</h3>
                        <p>Our SEO experts improve your website's visibility across major search engines. With data-driven strategies, keyword research, and on-page optimization, we help your site rank higher and attract organic traffic.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="register-service-box">
                        <h3>Website Maintenance</h3>
                        <p>We provide regular website updates, backups, and security checks to keep your site running smoothly. We help you in fixing glitches, offer content updates, and even web design because we ensure your website stays functional, secure, and optimized for performance.</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12">
                    <div className="register-service-btn">
                        <Link to="/contact-us" className='theme-btn theme-btn__yellow'>Talk to the Web Experts</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default DomainRegisterationServices