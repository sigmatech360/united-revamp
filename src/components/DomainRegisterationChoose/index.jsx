import React from 'react'
import DomainQualityBoxes from '../DomainQualityBoxes';
import quality from "../../assets/images/services/domainregisteration/quality.svg";
import professional from "../../assets/images/services/domainregisteration/professional.svg";
import trusted from "../../assets/images/services/domainregisteration/trusted.svg";
import commited from "../../assets/images/services/domainregisteration/commited.svg";

const DomainRegisterationChoose = () => {

    const qualityItems = [
  {
    icon: quality,
    title: "Fast & Easy Registration",
    description:
      "Our quick process ensures you can register your domain in minutes without technical complexity or delays.",
  },
  {
    icon: professional,
    title: "Affordable Domain Plans",
    description:
      "We offer budget-friendly packages with no hidden costs, making domain ownership accessible to everyone.",
  },
  {
    icon: trusted,
    title: "24/7 Expert Support",
    description:
        "Our dedicated support team is always available to assist with domain management, renewals, or setup issues.",
  },
  {
    icon: commited,
    title: "Secure Domain Management",
    description:
      "Your domains are protected with advanced security protocols to ensure complete privacy and data safety.",
  },
];


  return (
    <section className='domain-register-choose'>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="register-choose-head">
                        <h6 className='minihead'>At United Web Developers</h6>
                        <h2 className='mainhead text-white'>Prompt & Professional Domain Registration Services USA</h2>
                        <p>United Web Studios is a leading name in domain registration services in the USA. Our simple process, expert support, and affordable plans make it easy to buy and register your domain name. We love helping motivated individuals and hustling businesses become confident in their online identity.</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <DomainQualityBoxes items={qualityItems} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default DomainRegisterationChoose