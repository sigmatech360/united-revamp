import React from "react";
import { Link } from "react-router-dom";

const FrontendProjects = ({ minihead, mainhead, mainpara, projects, btntxt }) => {
  return (
    <section className="frontend-projects-sec">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="frontend-project-head">
              <h6 className="minihead">{minihead}</h6>
              <h2 className="mainhead">{mainhead}</h2>
              <p>{mainpara}</p>
            </div>
          </div>
        </div>
      </div>

      {/* ======== INFINITE SLIDER ======== */}
      <div className="container-fluid">
        <div className="frontend-project-marquee-wrapper">
          <div className="frontend-project-marquee-track">

            {/* Original Images */}
            {projects?.map((img, idx) => (
              <div className="frontend-project-marquee-card" key={idx}>
                <div className="frontend-project-img">
                  <img src={img} alt="project image" />
                </div>
              </div>
            ))}

            {/* Duplicate Images for seamless infinite loop */}
            {projects?.map((img, idx) => (
              <div className="frontend-project-marquee-card" key={`dup-${idx}`}>
                <div className="frontend-project-img">
                  <img src={img} alt="project image" />
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
            <div className="col-lg-12">
                {/* <div className="frontend-portfolio-btn">
                    <Link to="" className="theme-btn theme-btn__yellow">{btntxt}</Link>
                </div> */}
            </div>
        </div>
      </div>
    </section>
  );
};

export default FrontendProjects;
