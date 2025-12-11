import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { SiTicktick } from "react-icons/si";
import { FaCheckCircle, FaPhoneAlt, FaRegCheckCircle } from "react-icons/fa";
import whychoose1 from "../../assets/images/services/ecommercedevelopment/bulb.svg";
import whychoose2 from "../../assets/images/services/ecommercedevelopment/target.svg";
import whychoose3 from "../../assets/images/services/ecommercedevelopment/support.svg";

const WordPressPerformanceSection = (props) => {
  const isReversed = props.reverse;

  const rowClasses = isReversed
    ? "row align-items-center flex-lg-row-reverse flex-column-reverse"
    : "row align-items-center flex-lg-row flex-column-reverse";

  const textAos = isReversed ? "fade-left" : "fade-right";
  const imageAos = isReversed ? "fade-right" : "fade-left";

  return (
    <section
      className={props.wordpresssecclass || "WordPressPerformanceSection"}
    >
      <div className="container">
        <div className={props.afterConainerClass}>
          {/* <div className={props.domainRow || "d-none"}>
            <div className="col-lg-8">
              <div className="domain-transfer-secure">
                <h6>{props.secureminihead}</h6>
                <h2>{props.securebighead}</h2>
              </div>
            </div>
          </div> */}
          <div className={rowClasses}>
            <div className={props.leftCol || "col-lg-6"}>
              <div className={props.textClassbox || "abouttxt-data"}>
                {props.minihead && <h6 className={props.miniheadclass}>{props.minihead}</h6>}
                <h2
                  className="mainhead"
                  data-aos={textAos}
                  data-aos-offset="50"
                >
                  {props.secTitle1}{" "}
                  {props.secTitle2 && <span>{props.secTitle2}</span>}{" "}
                  {props.secTitle3 && props.secTitle3}
                </h2>
                <p
                  data-aos={textAos}
                  data-aos-duration="1000"
                  data-aos-offset="50"
                >
                  {props.description}
                </p>
                <h4 className="d-none">{props.bestvideohead}</h4>
                <p
                  data-aos={textAos}
                  data-aos-duration="1000"
                  data-aos-offset="50"
                  className="desc-two"
                >
                  {props.descriptiontwo}
                </p>
                <h6
                  data-aos={textAos}
                  data-aos-duration="1000"
                  data-aos-offset="50"
                >
                  {props.designpointheadline}
                </h6>
                <ul className="web-whychoose-list d-none">
                  {props.whyChooseItems &&
                    props.whyChooseItems.map((item, index) => (
                      <li key={index}>
                        <img src={item.img} alt="img" />
                        <div className="web-whychoose-listtxt">
                          <h5>{item.title}</h5>
                          <p>{item.text}</p>
                        </div>
                      </li>
                    ))}
                </ul>
                <div className={props.anotherFlexClass}>
                  <div className={props.alllistdata}>
                    <ul
                      className={props.listClass || ""}
                      data-aos={textAos}
                      data-aos-duration="1000"
                      data-aos-offset="50"
                    >
                      {props.listItems &&
                        props.listItems.map((item, index) => (
                          <li key={index}>
                            <SiTicktick /> {item}
                          </li>
                        ))}
                    </ul>
                    <div className={props.listFlex}>
                      <ul
                        className={props.landingList || ""}
                        data-aos={textAos}
                        data-aos-duration="1000"
                        data-aos-offset="50"
                      >
                        {props.landingListItems &&
                          props.landingListItems.map((item, index) => (
                            <li key={index}>
                              <FaCheckCircle className="landing-circle" />
                              <FaRegCheckCircle className="landing-check-none" />{" "}
                              {item}
                            </li>
                          ))}
                      </ul>
                      <ul
                        className={props.AngularList || ""}
                        data-aos={textAos}
                        data-aos-duration="1000"
                        data-aos-offset="50"
                      >
                        {props.AngularChooseListItems &&
                          props.AngularChooseListItems.map((item, index) => (
                            <li key={index}>
                              <FaCheckCircle /> {item}
                            </li>
                          ))}
                      </ul>
                    </div>
                    {props.description2 && (
                      <p
                        data-aos={textAos}
                        data-aos-duration="1000"
                        data-aos-offset="50"
                        className="desc-three"
                      >
                        {props.description2}
                      </p>
                    )}
                    <Link
                      to={"/pricing-plan"}
                      className={props.TouchBtn || "theme-btn"}
                      data-aos={textAos}
                      data-aos-duration="1000"
                      data-aos-offset="50"
                    >
                      {props.btnText || `Get In Touch`}
                    </Link>
                    <div className={props.learnmorebtn}>
                      <Link to={props.aboutbtnlink || "/about"}>
                        {props.btntext}
                      </Link>
                      {(props.phoneNumber || props.phoneLink) && (
                        <div className="about-number about-number-anchor">
                          <a
                            href={`tel:${
                              props.phoneNumberLink || "+16193352364"
                            }`}
                          >
                            <span>
                              <FaPhoneAlt />
                            </span>
                            <p>{props.phoneNumber || "+1 (619) 335-2364"}</p>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                  <div
                    className={props.aboutSmall || "overall-small-about d-none"}
                  >
                    <img
                      src={props.aboutSmallImg}
                      alt="Service About"
                      className="img-fluid"
                      data-aos={imageAos}
                      data-aos-duration="1000"
                      data-aos-offset="50"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className={props.rightCol || "col-lg-6"}>
              <div className={props.serviceImg || "services__about-img"}>
                <img
                  src={props.image}
                  alt="Service About"
                  className={`img-fluid ${props.imgClass || ""} `}
                  data-aos={imageAos}
                  data-aos-duration="1000"
                  data-aos-offset="50"
                />
                <video
                  src={props.videoSrc}
                  autoPlay
                  muted
                  loop
                  className="w-100 d-none"
                ></video>
              </div>
              <div className="service-all-points d-none">
                <div className="mern-service-point">
                  <h6>01</h6>
                  <div className="service-point-txt">
                    <h5>Designing</h5>
                    <p>
                      A digital product succeeds when users don’t have to think
                      twice while finding their way navigating the web app. We
                      build intuitive, user-first experiences that make every
                      interaction simple and satisfying.
                    </p>
                  </div>
                </div>
                <div className="mern-service-point">
                  <h6>02</h6>
                  <div className="service-point-txt">
                    <h5>Developing</h5>
                    <p>
                      Code is our way to innovate, turning complex logic into
                      high-performing systems that think fast, respond
                      instantly, and evolve with technology.
                    </p>
                  </div>
                </div>
                <div className="mern-service-point">
                  <h6>03</h6>
                  <div className="service-point-txt">
                    <h5>Deploying</h5>
                    <p>
                      It’s not about going live, but also about being live. Once
                      your web or app is live, we make sure it stays
                      high-performing by constant monitoring, proactive website
                      maintenance, and weekly backups.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default WordPressPerformanceSection;
