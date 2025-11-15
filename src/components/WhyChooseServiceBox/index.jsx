import React from 'react';

const WhyChooseServiceBox = ({ minihead, mainhead, mainpara, servicePoints }) => {
  return (
    <section className='whychoose-service-sec'>
      <div className="container">
    
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="whychoose-service-head">
              <h6 className='minihead'>{minihead}</h6>
              <h2 className='mainhead'>{mainhead}</h2>
              <p>{mainpara}</p>
            </div>
          </div>
        </div>

        <div className="row">
          {servicePoints?.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="whychoose-service-box">
                <h4>{item.number}</h4>
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseServiceBox;
