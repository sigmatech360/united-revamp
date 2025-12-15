import React from "react";
import accordioncheck from "../../assets/images/services/seo/accordion-check.svg";
import { Accordion } from "react-bootstrap";



const NewSeoServices = () => {
  return (
    <section className="newseo-services-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="newseo-service-head">
              <h6 className="minihead">More of Our Services</h6>
              <h2 className="mainhead text-white">We Back Our SEO With These Services:</h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="newseo-service-head">
              <p>To bring maximum results from SEO, we create a perfect space for your brand to grow across multiple digital platforms. We give your SEO support with strong content, robust websites, and a lot more. </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="seoservices-accordions">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header as="h3">Content Writing</Accordion.Header>
                  <Accordion.Body>
                    <div className="row justify-content-center">
                      <div className="col-lg-9">
                        <div className="seoservice-accordion-bodytxt">
                          <p>Clear, purposeful content designed to support search engine optimization services in the USA by speaking to people first and strengthening organic authority.</p>
                          <div className="seo-accordion-flex">
                            <ul>
                              <li>
                                <img src={accordioncheck} alt="img" /> Search-friendly storytelling
                              </li>
                              <li>
                                <img src={accordioncheck} alt="img" /> Brand-aligned messaging
                              </li>
                            </ul>
                            <ul>
                              <li>
                                <img src={accordioncheck} alt="img" /> Consistent publishing strategy
                              </li>
                              <li>
                                <img src={accordioncheck} alt="img" /> Conversion-focused structure
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header as="h3">Custom Web Development</Accordion.Header>
                  <Accordion.Body>
                    <div className="row justify-content-center">
                      <div className="col-lg-9">
                        <div className="seoservice-accordion-bodytxt">
                          <p>Websites built with SEO in mind, giving search engine optimization marketing in the USA a strong technical and structural foundation.</p>
                          <div className="seo-accordion-flex">
                            <ul>
                              <li>
                                <img src={accordioncheck} alt="img" /> Clean site architecture
                              </li>
                              <li>
                                <img src={accordioncheck} alt="img" /> Speed optimized builds
                              </li>
                            </ul>
                            <ul>
                              <li>
                                <img src={accordioncheck} alt="img" /> Scalable frameworks
                              </li>
                              <li>
                                <img src={accordioncheck} alt="img" /> SEO ready development
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header as="h3">Social Media Marketing</Accordion.Header>
                  <Accordion.Body>
                    <div className="row justify-content-center">
                      <div className="col-lg-9">
                        <div className="seoservice-accordion-bodytxt">
                          <p>Social strategies that support SEO services in the USA by strengthening brand visibility and audience engagement over time.</p>
                          <div className="seo-accordion-flex">
                            <ul>
                              <li>
                                <img src={accordioncheck} alt="img" /> Platform-focused content
                              </li>
                              <li>
                                <img src={accordioncheck} alt="img" /> Consistent brand voice
                              </li>
                            </ul>
                            <ul>
                              <li>
                                <img src={accordioncheck} alt="img" /> Audience-driven planning
                              </li>
                              <li>
                                <img src={accordioncheck} alt="img" /> Growth focused execution
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>

                 <Accordion.Item eventKey="3">
                  <Accordion.Header as="h3">Paid Advertising</Accordion.Header>
                  <Accordion.Body>
                    <div className="row justify-content-center">
                      <div className="col-lg-9">
                        <div className="seoservice-accordion-bodytxt">
                          <p>Paid campaigns that work alongside organic SEO services in the USA, helping brands gain traction while long-term rankings develop.</p>
                          <div className="seo-accordion-flex">
                            <ul>
                              <li>
                                <img src={accordioncheck} alt="img" /> Data-guided campaigns
                              </li>
                              <li>
                                <img src={accordioncheck} alt="img" /> Clear conversion goals
                              </li>
                            </ul>
                            <ul>
                              <li>
                                <img src={accordioncheck} alt="img" /> Audience focused targeting
                              </li>
                              <li>
                                <img src={accordioncheck} alt="img" /> Performance tracking
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>

                  <Accordion.Item eventKey="4">
                  <Accordion.Header as="h3">Brand Strategy</Accordion.Header>
                  <Accordion.Body>
                    <div className="row justify-content-center">
                      <div className="col-lg-9">
                        <div className="seoservice-accordion-bodytxt">
                          <p>Brand positioning that aligns with search engine optimization efforts to create trust, clarity, and long-term growth.</p>
                          <div className="seo-accordion-flex">
                            <ul>
                              <li>
                                <img src={accordioncheck} alt="img" /> Clear brand direction
                              </li>
                              <li>
                                <img src={accordioncheck} alt="img" /> Consistent identity
                              </li>
                            </ul>
                            <ul>
                              <li>
                                <img src={accordioncheck} alt="img" /> Market relevance
                              </li>
                              <li>
                                <img src={accordioncheck} alt="img" /> Long term vision
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>



              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewSeoServices;
