import React from 'react'
import doublecheck from "../../assets/images/services/backenddevelopment/doublcheck.svg"
import chooseimg from "../../assets/images/services/backenddevelopment/chooseimg.webp";
import { Link } from 'react-router-dom'


const BackendChoose = () => {
  return (
    <section className='backend-choose-sec'>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="backend-choose-txt">
                        <h6 className='minihead'>Why Choose Us</h6>
                        <h5 className='mainhead'>Our Technical Edge in Backend Development</h5>
                        <ul>
                            <li><img src={doublecheck} alt="double check" /> Expertise in complex backend architecture</li>
                            <li><img src={doublecheck} alt="double check" /> Custom API and database integration capabilities</li>
                            <li><img src={doublecheck} alt="double check" /> Scalable frameworks for future growth</li>
                            <li><img src={doublecheck} alt="double check" /> Security-first development approach</li>
                            <li><img src={doublecheck} alt="double check" />Continuous optimization and performance monitoring</li>
                            <li><img src={doublecheck} alt="double check" /> Transparent communication and project ownership</li>
                        </ul>
                        <Link to="/contact-us" className='theme-btn theme-btn__yellow'>View Our Case Studies</Link>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="backend-choose-txt">
                        <p>At United Web Developers, we don’t just build backends, we engineer dependable infrastructures that drive digital success. Our team ensures every line of code contributes to performance, scalability, and innovation.</p>
                    </div>
                    <div className="backend-choose-img">
                        <img src={chooseimg} alt="choose image" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BackendChoose