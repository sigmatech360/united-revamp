import React from 'react'
import mobileimg from "../../assets/images/services/frontenddevelopment/mobile.webp";
import tabletimg from "../../assets/images/services/frontenddevelopment/tablet.webp";
import laptopimg from "../../assets/images/services/frontenddevelopment/laptop.webp";
import computerimg from "../../assets/images/services/frontenddevelopment/computer.webp";

const FrontendScreen = () => {
  return (
    <section className='frontend-screen-sec'>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-12">
                    <div className="frontend-screen-head">
                        <h6 className='minihead'>Benefits</h6>
                        <h2 className='mainhead text-white'>Frontend Development Optimized for Every Size and Style!</h2>
                        <p>At United Web Developers, optimization isn’t an afterthought; it’s built right into our DNA. Every design is optimized for every size and type: from a smartwatch screen to a 4K display, deploying lines of code that adapt flawlessly to its environment. As a front-end development agency in USA, we create layouts that breathe with your content, fast, fluid, and search-friendly.</p>
                        <p>Our responsive architectures are engineered to perform equally well on every screen size, device, and resolution. Beyond aesthetics, we design for discoverability: leveraging AEO (Answer Engine Optimization) to help your site appear in featured snippets and voice searches. But we don’t stop there, the new world is now also moving towards GEO (Generative Engine Optimization) to improve your visibility in the LLMs, including ChatGPT and more, so that when someone searches for your industry, they see you listed as the top business!</p>
                    </div>
                </div>
            </div>
            <div className="row screen-row">
                <div className="col-lg-2 col-md-6">
                    <div className="frontend-screen-img">
                        <img src={mobileimg} alt="screen image" />
                    </div>
                </div>
                <div className="col-lg-2 col-md-6">
                    <div className="frontend-screen-img">
                        <img src={tabletimg} alt="screen image" />
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="frontend-screen-img">
                        <img src={laptopimg} alt="screen image" />
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="frontend-screen-img">
                        <img src={computerimg} alt="screen image" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FrontendScreen