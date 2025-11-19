import React, { useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import FormModal from "../FormModal";

const Industryslider = ({
  secClass,
  minihead,
  mainhead,
  mainpara,
  btntxt,
  industries,
}) => {

  const [showModal, setShowModal] = useState(false);
  return (
    <section className={`industry-slider-sec ${secClass}`}>
      <div className="container">
        {/* ======== HEAD ROW ======== */}
        <div className="row frontendindustryhead">
          <div className="col-lg-5">
            <div className="industry-slider-head">
              <h6 className="minihead">{minihead}</h6>
              <h2 className="mainhead">{mainhead}</h2>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="industry-slider-head">
              <p>{mainpara}</p>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="industry-slider-headbtn">
              <Link to="/contact-us" className="theme-btn theme-btn__yellow" >{btntxt}</Link>
            </div>
          </div>
        </div>
        <div className="backend-industry-show d-none">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="backend-industry-head">
              <h6 className="minihead">INDUSTRIES</h6>
              <h2 className="mainhead text-white">Industries We Serve</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularized.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>

      

      <div className="container-fluid">
        {/* ======== INFINITE AUTO SCROLL SLIDER ======== */}
        <div className="industry-marquee-wrapper">
          <div className="industry-marquee-track">
            {industries?.map((item, idx) => (
              <div className="industry-marquee-card" key={idx}>
                <div className="industry-slider-card">
                  <div className="industry-slider-cardheader">
                    <h4>{item.title}</h4>
                    <Link to={item.link}>
                      <MdOutlineArrowOutward />
                    </Link>
                  </div>

                  <div className="industry-slider-card-bottom">
                    <p>{item.description}</p>
                    <img src={item.image} alt={item.title} />
                  </div>
                </div>
              </div>
            ))}

            {/* Duplicate for Seamless Loop */}
            {industries?.map((item, idx) => (
              <div className="industry-marquee-card" key={`dup-${idx}`}>
                <div className="industry-slider-card">
                  <div className="industry-slider-cardheader">
                    <h4>{item.title}</h4>
                    <Link to={item.link}>
                      <MdOutlineArrowOutward />
                    </Link>
                  </div>

                  <div className="industry-slider-card-bottom">
                    <p>{item.description}</p>
                    <img src={item.image} alt={item.title} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FormModal show={showModal} handleClose={() => setShowModal(false)} />
    </section>
  );
};

export default Industryslider;
