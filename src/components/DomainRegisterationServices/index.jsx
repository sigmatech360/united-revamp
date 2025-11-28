import React from "react";
import { Link } from "react-router-dom";

const DomainRegisterationServices = ({
  minihead,
  headTitle,
  headText,
  items,
  itemNumberClass,
  isBtn = true,
}) => {
  return (
    <section className="domain-registeraton-sec">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-l0">
            <div className="domain-registeration-head">
              <h6 className="minihead">{minihead}</h6>
              <h2 className="mainhead text-white">{headTitle}</h2>
              <p>{headText}</p>
            </div>
          </div>
        </div>
        <div className="row register-box-line">
          {items &&
            items.map((item, idx) => (
              <div className="col-lg-4 col-md-6" key={idx}>
                <div className="register-service-box">
                  {item.no && <h1 className={itemNumberClass}>{item.no}</h1>}
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
        </div>
        {isBtn && (
          <div className="row">
            <div className="col-lg-12">
              <div className="register-service-btn">
                <Link to="/contact-us" className="theme-btn theme-btn__yellow">
                  Talk to the Web Experts
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DomainRegisterationServices;
