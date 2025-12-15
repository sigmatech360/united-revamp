import React from 'react'
import { Link } from 'react-router-dom'
import service1 from "../../assets/images/services/mobileappdev/portfolio1.webp";
import service2 from "../../assets/images/services/mobileappdev/portfolio2.webp";
import service3 from "../../assets/images/services/mobileappdev/portfolio3.webp";
import service4 from "../../assets/images/services/mobileappdev/portfolio4.webp";
import service5 from "../../assets/images/services/mobileappdev/portfolio5.webp";
import service6 from "../../assets/images/services/mobileappdev/portfolio6.webp";


const MobileAppServices = () => {
  return (
    <section className='mobileapp-services-sec'>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="mobileapp-service-head">
                        <h6 className='minihead'>Our Mobile App Portfolio</h6>
                        <h2 className='mainhead'>View Some of Our Brilliant Applications</h2>
                        <p>Check out the portfolio of our exceptional mobile app development services in the USA.  </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <div className="mobileapp-service-card">
                        <img src={service1} alt="image" />
                        {/* <div className="mobileapp-service-cardtxt">
                            <h4>Web App Development</h4>
                            <p>We develop fast, secure, and dynamic web apps that help your business perform better. Each platform is designed to be functional, user-friendly, and easy to maintain.</p>
                        </div> */}
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="mobileapp-service-card downcard-mobileservie">
                        <img src={service2} alt="image" />
                        {/* <div className="mobileapp-service-cardtxt">
                            <h4>iOS App Development</h4>
                            <p>Our iOS app development in Texas focuses on creating simple, elegant apps that deliver reliable performance and intuitive experiences for Apple users across iPhones and iPads.</p>
                        </div> */}
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="mobileapp-service-card upcard-mobiledev">
                        <img src={service3} alt="image" />
                        {/* <div className="mobileapp-service-cardtxt">
                            <h4>Android App Development</h4>
                            <p>We specialize in Android app development in Texas, building responsive, adaptable apps that meet modern demands and bring your ideas to millions of active Android users.</p>
                        </div> */}
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="mobileapp-service-card">
                        <img src={service4} alt="image" />
                        {/* <div className="mobileapp-service-cardtxt">
                            <h4>React Native Development</h4>
                            <p>Our team specializes in React Native to develop cross-platform apps efficiently. This approach ensures smooth performance, consistent design, and faster delivery for both iOS and Android platforms.</p>
                        </div> */}
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="mobileapp-service-card upcard-mobiledev">
                        <img src={service5} alt="image" />
                        {/* <div className="mobileapp-service-cardtxt">
                            <h4>Web App Development</h4>
                            <p>We develop fast, secure, and dynamic web apps that help your business perform better. Each platform is designed to be functional, user-friendly, and easy to maintain.</p>
                        </div> */}
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="mobileapp-service-card">
                        <img src={service6} alt="image" />
                        {/* <div className="mobileapp-service-cardtxt">
                            <h4>Web App Development</h4>
                            <p>We develop fast, secure, and dynamic web apps that help your business perform better. Each platform is designed to be functional, user-friendly, and easy to maintain.</p>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MobileAppServices