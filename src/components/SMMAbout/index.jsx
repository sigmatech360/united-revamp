import React from 'react';
import { Link } from 'react-router-dom';

const SMMAbout = ({
  aboutImgOne,
  aboutImgTwo,
  miniHead,
  mainHead,
  description,
  btnText,
  btnLink,
}) => {
  return (
    <section className='smm-about-sec'>
      <div className="container">
        <div className="row">
          
          <div className="col-lg-6">
            <div className="smm-about-img">
              <img
                src={aboutImgOne}
                alt="about img"
                className='smm-about-imgone'
              />
              <img
                src={aboutImgTwo}
                alt="about img"
                className='smm-about-two'
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="smm-about-txt">
              <h6 className='minihead'>{miniHead}</h6>
              <h2 className='mainhead'>{mainHead}</h2>
              <p>{description}</p>
              <Link to={btnLink} className='theme-btn theme-btn__yellow'>
                {btnText}
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SMMAbout;
