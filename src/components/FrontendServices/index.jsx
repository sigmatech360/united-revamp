import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormModal from "../FormModal";

const FrontendServices = ({
  minihead,
  mainhead,
  mainpara,
  services,
  btntxt,
}) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <section className="frontend-services-sec">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="frontend-service-head">
              <h6 className="minihead">{minihead}</h6>
              <h2 className="mainhead text-white">{mainhead}</h2>
              <p>{mainpara}</p>
            </div>
          </div>
        </div>

        <div className="row">
          {services?.map((item, idx) => {
            let Icon = item.icon;
            console.log("icon", Icon);

            return (
              <div className="col-lg-4 col-md-6" key={idx}>
                <div className="frontend-service-box">
                  {item.icon && (
                    <img src={item.icon} className="frontend-service-icon" />
                  )}
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <ul>
                    {item.list &&
                      item.list.map((listItem, listIdx) => (
                        <li key={listIdx}>{listItem}</li>
                      ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
        {btntxt && (
          <div className="row">
            <div className="col-lg-12">
              <div className="frontend-service-btn">
                <button
                  className="theme-btn theme-btn__yellow"
                  onClick={() => setShowModal(true)}
                >
                  {btntxt}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <FormModal show={showModal} handleClose={() => setShowModal(false)} />
    </section>
  );
};

export default FrontendServices;
