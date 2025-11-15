    import React, { useState } from 'react'
    import FormModal from '../FormModal'

    const OurServiceTwoSide = (props) => {
        const [showModal, setShowModal] = useState(false);
    return (
        <section className='twoside-service-sec'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="twoside-service-head">
                            <h6 className='minihead'>{props.minhead}</h6>
                            <h2 className='mainhead text-white'>{props.mainhead}</h2>
                            <p>{props.mainpara}</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="twoside-service-img">
                            <img src={props.img1} alt={props.servicehead1} />
                        </div>
                    </div> 
                    <div className="col-lg-6">
                        <div className="twoside-service-txt">
                            <h4>{props.servicehead1}</h4>
                            <p>{props.servicepara1}</p>
                            <button  className="theme-btn theme-btn__yellow" openModal={() => setShowModal(true)} >Explore More</button>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="twoside-service-txt">
                            <h4>{props.servicehead2}</h4>
                            <p>{props.servicepara2}</p>
                            <button  className="theme-btn theme-btn__yellow" openModal={() => setShowModal(true)} >Explore More</button>
                        </div>
                    </div>
                      <div className="col-lg-6">
                        <div className="twoside-service-img">
                            <img src={props.img2} alt={props.servicehead2} />
                        </div>
                    </div> 
                    <div className="col-lg-6">
                        <div className="twoside-service-img">
                            <img src={props.img3} alt={props.servicehead3} />
                        </div>
                    </div> 
                    <div className="col-lg-6">
                        <div className="twoside-service-txt">
                            <h4>{props.servicehead3}</h4>
                            <p>{props.servicepara3}</p>
                            <button  className="theme-btn theme-btn__yellow" openModal={() => setShowModal(true)} >Explore More</button>
                        </div>
                    </div>
                </div>
            </div>
            <FormModal show={showModal} handleClose={() => setShowModal(false)} />
        </section>
    )
    }

    export default OurServiceTwoSide