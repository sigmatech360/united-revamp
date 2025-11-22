import React from 'react'
import { Link } from 'react-router-dom'
import comimg from "../../assets/images/services/domaintransfer/com-icon.svg";
import dnsimg from "../../assets/images/services/domaintransfer/dns-icon.svg";
import commagnifier from "../../assets/images/services/domaintransfer/com-magnifier-icon.svg";
import domainsecure from "../../assets/images/services/domaintransfer/web-security-icon.svg";

const DomainTransferServices = () => {
  return (
    <section className='transfer-services-sec'>
        <div className="container">
            <div className="row">
                <div className="col-lg-5">
                    <div className="transfer-service-txt">
                        <h6 className='minihead'>What We Do</h6>
                        <h2 className='mainhead text-white'>Our Domain-Related Services</h2>
                        <p>As a full-stack IT company, we offer every single domain transfer service in USA be it buying, transferring, maintaining, and securing. Below are our domain-related services.</p>
                        <Link to="/contact-us" className='theme-btn theme-btn__yellow'>Let’s Start the Process</Link>
                    </div>
                </div>
                <div className="col-lg-7">  
                    <div className="transfer-service-boxes">
                        <div className="transfer-service-box">
                            <img src={comimg} alt="image" />
                            <h4>Domain Transfer:</h4>
                            <p>If it’s time to switch, come to us; we’ll make it easy and without any downtime so your business stays up and running. Our domain name transfer service in USA isn’t just about moving data, it’s about keeping your brand online, uninterrupted, and totally in sync.</p>
                        </div>
                        <div className="transfer-service-box">
                            <img src={domainsecure} alt="image" />
                            <h4>Domain Registration:</h4>
                            <p>Your business has a physical address; give it the online one too. We simplify the domain registration and transfer in the USA, ensuring your name and identity stay exclusively yours.</p>
                        </div>
                        <div className="transfer-service-box">
                            <img src={commagnifier} alt="image" />
                            <h4>Domain & Web Maintenance:</h4>
                            <p>The best way to keep your site fast and up and running is by maintaining your website and your domain. We offer weekly/monthly website and domain backups, filter all necessary data, and secure it using the relevant tech stack and plugins, ensuring your website stays secure, fast, and up-to-date.</p>
                        </div>
                        <div className="transfer-service-box">
                            <img src={dnsimg} alt="image" />
                            <h4>DNS & Security Configuration:</h4>
                            <p>Protect with precision. We manage every DNS record and safeguard your setup through every domain transfer, ensuring your web integrity stays uncompromised.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default DomainTransferServices