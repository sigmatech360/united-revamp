import React from 'react'
import { Link } from 'react-router-dom'
import smmmobimg from "../../assets/images/services/socialmediamarketing/smm-mob-img.webp";

const SMMDrive = () => {
  return (
    <section className='smm-drive-sec'>
        <div className="container">
            <div className="smm-drive-bg">
            <div className="row">
                <div className="col-lg-7">
                    <div className="smm-drive-txt">
                        <h2 className='mainhead'>Grow Visibility and Engagement with Strategic Campaigns</h2>
                        <p>Our campaigns combine research, creativity, and audience insight to help your brand move forward. We focus on visibility, interaction, and storytelling that feels authentic. With every campaign, your audience sees more, engages more, and remembers your brand with clarity.</p>
                        <Link to="/contact-us" className='theme-btn theme-btn__black'>Build Your Strategy</Link>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="smm-drive-img">
                        <img src={smmmobimg} alt="image" />
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default SMMDrive
