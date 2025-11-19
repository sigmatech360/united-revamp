import React from 'react'
import FourDetailBox from '../FourDetailBox'

const Whatwedo = () => {
  return (
    <section className='whatwedo-sec'>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-12">
                    <div className="whatwedo-head">
                        <h6 className='minihead'>What We Do</h6>
                        <h2 className='mainhead'>Designing Frontend So Good Visitors Can’t Help but Convert</h2>
                        <p>Your website’s front end is more than just visuals; it’s the first impression your audience has of you. As a front-end development company in the USA, we strike a balance between design innovation and technical depth to deliver websites and mobile apps that move, react, and convert.</p>
                        <p>We understand that a good, easy-to-navigate design can increase conversion rates by at least 60%. Thus, whatever we build is complete, not just in form, but in functionality, too.</p>
                    </div>
                </div>
            </div>
            <FourDetailBox
                countone="452+"
                headone="Projects Completed"
                counttwo="98.7%"
                headtwo="Success Rate"
                countthree="31"
                headthree="Powering Industries"
                countfour="1231"
                headfour="Happy Clients"    
            />    
        </div>
    </section>
  )
}

export default Whatwedo