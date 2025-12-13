import React, { useState } from "react";
import FormModal from "../FormModal";
import rightIcon from "../../assets/images/icons/general/arrowRightDark.webp"

const BrandVoiceServices = ({
  secClass,
  serviceBoxClass,
  minihead,
  mainhead,
  mainpara,
  services,
  btntxt,
}) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <section className={secClass || "frontend-services-sec brandStategy-process-sec"}>
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

        <div className="row justify-content-center">
          {services?.map((item, idx) => {

            return (
              <div className="col-lg-4 col-sm-6" key={idx}>
                <div
                  className={serviceBoxClass  ||"brand-voice-service-box"}
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                 
                  {/* <h2 className="colorYellow title">{item.title}</h2> */}
                  <h4>{item.subtitle}</h4>
                  <p>{item.description}</p>
                  <span className="right-icon"><img src={rightIcon} className="img-fluid" alt="" /> </span>
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

export default BrandVoiceServices;

