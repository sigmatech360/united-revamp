import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";

import aboutbannerbg from "../../assets/images/about-banner-bg.png";
import aboutimg1 from "../../assets/images/about-img-1.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <DefaultLayout>
      <InnerBanner
        bgImage={aboutbannerbg}
        title="Work With A Leading Full-Service Design Agency"
      />

      <section className="about-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-sec__content">
                <h2>About Our Company</h2>
                <p>
                  Logo Poppin is your one-stop destination to find digital
                  innovation. We are a cutting-edge agency where you can get
                  immaculate graphic designing services as per your custom
                  demands. We love to transform ideas into great designs,
                  helping people like you to represent their businesses using
                  the best creatives. From logo design to digital marketing,
                  branding to web development and more, we help you to take your
                  business forward by offering exceptional digital services.
                </p>
                <p className="fw-medium">
                  Want to innovate your brand with us? Let’s talk. Let’s work
                  together!
                </p>
                <Link to="" className="theme-btn theme-btn__black">
                  Let's Work Together
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-sec__img">
                <img src={aboutimg1} className="img-fluid" alt="About Us" />
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="different-industries-client">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="sec-head">
                        <h2>We Work With Different Industries</h2>
                        <p>We have a diverse clientele from various industries, including:</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default About;
