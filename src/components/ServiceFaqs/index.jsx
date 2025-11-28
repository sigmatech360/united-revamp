import React from 'react'
import DynamicFaqs from '../dynamicfaqs'

const ServiceFaqs = ({ minihead, mainhead, mainpara, faqsData}) => {
  return (
    <section className='service-faqs-sec'>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="service-faqs-head">
                        <h6 className='minihead'>{minihead}</h6>
                        <h2 className='mainhead'>{mainhead}</h2>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="service-faqs-head">
                        <p>{mainpara}</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <DynamicFaqs faqs={faqsData} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default ServiceFaqs