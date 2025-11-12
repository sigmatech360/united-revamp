import React from 'react'
import { Link } from 'react-router-dom'

const LocationChooseUs = (props) => {
  return (
    <section className={props.secClass || 'location-choose-sec'}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="location-choose-head">
                        <h6 className='mb-2'>{props.minihead}</h6>
                        <h2 className='mb-2'>{props.mainhead}</h2>
                        <p>{props.secPara}</p>
                        {props.secParatwo &&<p>{props.secParatwo}</p>}
                        {props.btntxt && <Link to="/contact" className="theme-btn theme-btn__yellow">{props.btntxt}</Link>}
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className={props.imgCol || "col-lg-7"}>
                    <div className="location-choose-img">
                        <img src={props.chooseimg} alt="Choose image" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default LocationChooseUs