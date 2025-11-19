import React from 'react';
import { Accordion } from 'react-bootstrap';
import serviceimg from "../../assets/images/services/backenddevelopment/serviceimg.webp";

const BackendServices = () => {
  const services = [
    {
      title: "Custom Backend Development",
      description:
        "We build detailed backend frameworks that support your business logic, enhance scalability, and ensure long-term performance stability.",
      img: serviceimg,
    },
    {
      title: "Node.js Development",
      description:
        "Our Node.js backend development in USA ensures fast environments for web and mobile apps. We create scalable solutions that deliver exceptional performance, making it easier for businesses to handle heavy data loads without compromising speed or user experience.",
      img: serviceimg,
    },
    {
      title: "AI Integration",
      description:
        "We help you bring intelligence to your backend through AI integration. From predictive analytics to automation, our solutions enhance efficiency and deliver actionable insights, transforming static systems into adaptive, data-driven frameworks.",
      img: serviceimg,
    },
    {
      title: "CMS Development",
      description:
        "We build strong content management systems with custom backend functionalities that simplify control, improve workflow, and make content handling effortless. Whether WordPress, Drupal, or a custom CMS, our systems ensure efficiency without compromising flexibility.",
      img: serviceimg,
    },
    {
      title: "DevOps Services",
      description:
        "Our DevOps services streamline deployment, monitoring, and updates. We create automated environments for faster iteration, improved collaboration, and stable production, ensuring your applications evolve seamlessly with your business.",
      img: serviceimg,
    },
    {
      title: "Server Management",
      description:
        "We manage, monitor, and optimize your servers for consistent uptime and enhanced performance. From configuration to load balancing, we ensure your backend remains stable, secure, and responsive under any traffic condition.",
      img: serviceimg,
    },
    {
      title: "SSL Hosting",
      description:
        "Our SSL hosting guarantees secure data transmission, encryption, and compliance. We integrate robust security layers that protect your users and enhance your site’s credibility, while maintaining seamless backend performance.",
      img: serviceimg,
    },
  ];

  return (
    <section className="backend-services-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="backend-services-head">
              <h6 className="minihead">More of Our Services</h6>
              <h2 className="mainhead text-white">
                Expanding What Backend Development Can Do for You
              </h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="backend-services-head">
              <p>
                Our broad technical expertise empowers reliable, high-performing digital systems that stand the test of time.
              </p>
            </div>
          </div>
        </div>

        <Accordion defaultActiveKey="0" className="backend-services-accordion mt-4">
          {services.map((service, index) => (
            <Accordion.Item eventKey={index.toString()} key={index}>
              <Accordion.Header as="h3">{service.title}</Accordion.Header>
              <Accordion.Body>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="backend-service-para">
                      <p>{service.description}</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <img src={service.img} alt={service.title} className="img-fluid" />
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default BackendServices;
