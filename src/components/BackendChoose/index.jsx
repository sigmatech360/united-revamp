import React from 'react';
import { Link } from 'react-router-dom';

const BackendChoose = ({
  minihead,
  mainhead,
  points,
  doublecheck,
  chooseimg,
  description,
  showButton,
  buttonText,
  mainpara,
  buttonLink
}) => {
  return (
    <section className="backend-choose-sec">
      <div className="container">
        <div className="row">

          {/* Left Side */}
          <div className="col-lg-6">
            <div className="backend-choose-txt">
              <h6 className="minihead">{minihead}</h6>
              <h5 className="mainhead">{mainhead}</h5>
                <p>{mainpara}</p>
              <ul>
                {points?.map((point, index) => (
                  <li key={index}>
                    <img src={doublecheck} alt="double check" /> {point}
                  </li>
                ))}
              </ul>

              {showButton && (
                <Link to={buttonLink} className="theme-btn theme-btn__yellow">
                  {buttonText}
                </Link>
              )}
            </div>
          </div>

          {/* Right Side */}
          <div className="col-lg-6">
            <div className="backend-choose-txt">
              <p>{description}</p>
            </div>

            <div className="backend-choose-img">
              <img src={chooseimg} alt="choose image" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BackendChoose;
