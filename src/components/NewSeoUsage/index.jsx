import React, { useState } from "react";
import mainserviceimg from "../../assets/images/services/seo/mainserviceimg.webp";
import FormModal from "../FormModal";

const NewSeoUsage = () => {
   const [showModal, setShowModal] = useState(false);
  return (
    <section className="newseo-usage-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="newseo-usage-head">
              <h2 className="mainhead">
                The Backbone of SEO at United Web Developers
              </h2>
              <p>Search engine optimization at United Web Developers is built on consistency, research, and patience, creating sustainable visibility rather than temporary ranking spikes.</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="newseo-usage-txt">
              <img src={mainserviceimg} alt="img" />
              <h3>Focused Process of Organic Growth</h3>
              <p>As an experienced SEO agency in the USA, growth is driven through steady improvements, measured progress, and decisions based on real performance data.</p>
              <div className="seousage-btn-flex">
                <button className="theme-btn theme-btn__black"  onClick={() => setShowModal(true)}>Start Ranking</button>
                <p>A Dedicated SEO Team Ready to Work for You</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="newseo-usage-flex">
              <div className="newseo-usage-box">
                <h3>90%</h3>
                <p>Organic Optimization</p>
              </div>
              <div className="usage-choice-box">
                <h3>100+</h3>
                <p>Ranking Sites</p>
              </div>
            </div>
          </div>
        </div>
      </div>
        <FormModal show={showModal} handleClose={() => setShowModal(false)} />
    </section>
  );
};

export default NewSeoUsage;
