import React from 'react'
import { Link } from 'react-router-dom'

import mainbannerimgs from "../../assets/images/main-banner-imgs.png"

const MainBanner = () => {
  return (
    <section className='main-banner'>
      <div className="container">
        <div className="row justify-content-center">
            <div className="col-xxl-7 col-xl-8 col-lg-9">
                <div className="main-banner__content">
                    <h1>Graphic Design Agency For Modern Brands!</h1>
                    <p>We are a new age graphic design agency that help brands to look creative & bold using our cutting-edge design & branding services.</p>
                    <div className='main-banner__content-btns'>
                        <Link to={""} className='theme-btn theme-btn__yellow'>Let's Get Started</Link>
                        <Link to={""} className='theme-btn'>Discuss Your Project</Link>
                    </div>
                    <div className='main-banner__content-imgs'>
                        <img src={mainbannerimgs} className='img-fluid' alt="main-banner-imgs" />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default MainBanner
