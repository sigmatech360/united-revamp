import React from 'react'

const DomainRegisterProcess = ({ minihead, mainhead, mainpara, steps }) => {
  return (
    <section className='domain-register-process'>
      <div className="container">
        
        {/* Head Section */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="register-process-head">
              <h6 className='minihead'>{minihead}</h6>
              <h2 className='mainhead'>{mainhead}</h2>
              <p>{mainpara}</p>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="row">
          {steps?.map((step, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="register-process-box">
                <h3>{step.number}</h3>
                <h5>{step.title}</h5>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default DomainRegisterProcess
