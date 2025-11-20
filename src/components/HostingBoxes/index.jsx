import React from 'react'

const HostingBoxes = () => {
  return (
    <section className='hosting-boxes-sec'>
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="hosting-box">
                        <h3>.com</h3>
                        <p>Special Price <span>$2.99/mo</span></p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="hosting-box">
                        <h3>.net</h3>
                        <p>Special Price <span>$2.99/mo</span></p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="hosting-box">
                        <h3>.org</h3>
                        <p>Special Price <span>$2.99/mo</span></p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="hosting-box">
                        <h3>.co</h3>
                        <p>Special Price <span>$2.99/mo</span></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HostingBoxes