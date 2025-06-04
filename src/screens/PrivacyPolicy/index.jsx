import React from "react";
import DefaultLayout from "../../components/DefaultLayout";

import InnerBanner from "../../components/InnerBanner";
import aboutbannerbg from "../../assets/images/about-banner-bg.png";

export const privacyPolicySections = [
  {
    id: 1,
    // title: "Terms & Conditions",
    paragraphs: [
      "At United Web Developers, we hold the privacy of our clients in the highest regard on nywebexperts.com. We treat their information with the same care as our own. While we do gather information from our clients, its purpose is solely to enhance our customer services. We acknowledge our responsibility to maintain and utilize our clients’ information appropriately. We want to assure you that we never rent or sell the information provided by our clients online.",
      "This policy outlines how we collect, use, and safeguard personal information obtained from our clients. It also describes the options available to you regarding the collection and use of your information.",
    ],
  },
  {
    id: 2,
    title: "Collection of Personal Information",
    paragraphs: [
      "We collect details such as the client’s name, email, mailing address, and phone number. These pieces of information are provided by the client during the ordering process or when saving their information with us. Additionally, email addresses and mailing addresses obtained through forms like our Contact Us Form might be used to respond to comments and queries.",
      "We also maintain records of past items that interested our clients and their online purchases.",
    ],
  },
  {
    id: 3,
    title: "Use of Collected Data",
    paragraphs: [
      "The information we gather serves various purposes. It's used to process client orders, and we send confirmation emails for these orders. Our customer services may contact clients by phone, mailing address, or email for any inquiries related to their orders.",
      "Clients might receive updates about our site and services, including newsletters and promotional information. Moreover, the information about clients’ interests and purchases helps us enhance our website design and improve the overall purchasing experience.",
    ],
  },
  {
    id: 4,
    title: "Newsletter Opt-out",
    paragraphs: [
      "If you no longer wish to receive our newsletters and promotional communications, you can opt out by following the instructions provided in each communication. Alternatively, you can contact us via email at support@unitedwebdevelopers.com or call us at (619) 326-6066.",
    ],
  },
  {
    id: 5,
    title: "Social Media and Widgets",
    paragraphs: [
      "Our website includes Social Media Features and Widgets, such as the Facebook Like button. These features may collect your IP address and page visits for proper functionality. Interactions with these features are subject to the privacy policies of the respective companies.",
    ],
  },
  {
    id: 6,
    title: "Third-Party Sharing",
    paragraphs: [
      "We do not share personal information with third parties unless described in this policy. We never sell personal information to third parties. We use trusted companies for services like credit card processing and live customer support chat.",
    ],
  },
  {
    id: 7,
    title: "Security of Personal Information",
    paragraphs: [
      "We prioritize the security of client information. We use Secure Sockets Layer (SSL) Software for encryption during transmission. While we strive for industry-standard security measures, no method of online data transmission is entirely foolproof.",
    ],
  },
  {
    id: 8,
    title: "Access to Registered Accounts",
    paragraphs: [
      "Clients can access their registered accounts by signing in on our homepage. This provides access to previous lists and submitted information. Users can update their information through the “My Account” section.",
    ],
  },
  {
    id: 9,
    title: "Changing & Deleting Accounts",
    paragraphs: [
      "Clients can request account cancellation or personal information deletion by emailing us. This will stop further email communication related to online orders.",
    ],
  },
  {
    id: 10,
    title: "Cookies and Clear Gifs",
    paragraphs: [
      "Cookies, or alphanumeric identifiers, are used to enhance the user experience. Clear gifs help manage site content effectively. We maintain IP address logs for site diagnostics and broad demographic data, without tying it to personally identifiable information.",
    ],
  },
  {
    id: 11,
    title: "Testimonials",
    paragraphs: [
      "With consent, we may post testimonials along with names. Removal requests are honored.",
    ],
  },
  {
    id: 12,
    title: "Links to Other Websites",
    paragraphs: [
      "Linked websites have different privacy practices. Personal information submitted to those sites is governed by their privacy statements.",
    ],
  },
  {
    id: 13,
    title: "Changes to Privacy Policy",
    paragraphs: [
      "We may modify this policy and will communicate changes through various means. Review this policy periodically for updates.",
    ],
  },
];

const PrivacyPolicy = () => {
  return (
    <DefaultLayout>
      <InnerBanner bgImage={aboutbannerbg} title="Privacy Policy" />

      <section className="privacy-policy-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* {privacyPolicySections.map((section, index) => (
                <div className="privacy-policy-content" key={index}>
                  {section.title && (
                    <h2
                      data-aos="fade-right"
                      data-aos-duration="2000"
                      data-aos-offset="0"
                    >
                      {section.title}
                    </h2>
                  )}
                  {section.paragraphs.map((para, i) => (
                    <p
                      key={i}
                      data-aos="fade-right"
                      data-aos-duration="2000"
                      data-aos-offset="0"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              ))} */}

              <div className="privacy-policy-content">
                <p>{`United Web Developers ("Company," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and disclose your information when you interact with our website and services. It also outlines your rights and choices under applicable United States privacy laws.`}</p>
                <h2>Information We Collect</h2>
                <p>We collect both personal and non-personal information:</p>

                <h3>Personal Information</h3>
                <ul>
                  {[
                    "Name",
                    "Email address",
                    "Phone number",
                    "Company name",
                    "Company name",
                    "Project-related content you share with us",
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <h3>Non-Personal Information</h3>
                <ul>
                  {[
                    "IP address",
                    "Browser type ",
                    "Device type",
                    "Referring URL",
                    "Pages visited and time spent on our site",
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <h3>Cookies and Tracking Technologies</h3>
                <p>
                  We use cookies, beacons, tags, and scripts to analyze trends,
                  administer the website, track users’ movements around the
                  site, and gather demographic information.
                </p>

                <h2>How We Use Your Information</h2>
                <p>Your information may be used to:</p>
                <ul>
                  {[
                    "Deliver and manage our web development services",
                    "Process transactions and send billing notifications",
                    "Respond to inquiries and provide customer support",
                    "Customize your website experience",
                    "Send service updates and promotional messages (you may opt out)",
                    "Analyze website usage and enhance platform performance",
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <h2>Sharing Your Information</h2>
                <p>
                  We do not sell your personal information. We may share it
                  only:
                </p>
                <ul>
                  {[
                    "With third-party service providers who assist us in operations under confidentiality obligations",
                    "To comply with applicable laws and legal processes",
                    "To protect our rights, privacy, safety, or property",
                    "In connection with a merger, sale, or asset transfer",
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <h2>Data Security</h2>
                <p>
                  We employ industry-standard administrative, technical, and
                  physical safeguards to protect your information. However, no
                  method of transmission over the internet is entirely secure.
                </p>

                <h2>Your Choices and Rights</h2>
                <p>Your Choices and Rights</p>
                <ul>
                  {[
                    "Access and update your personal information",
                    "Request deletion of your personal data (subject to legal obligations)",
                    "Opt out of marketing emails at any time",
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <h2>Opt out of marketing emails at any time</h2>
                <p>
                  Our services are not intended for children under the age of
                  13, and we do not knowingly collect personal data from
                  children.
                </p>

                <h2>Changes to This Privacy Policy</h2>
                <p>
                  We may revise this Privacy Policy periodically. The updated
                  version will be posted on our website with a new effective
                  date.
                </p>

                <div className="privacyPolicyLastDiv">
                  <h2>Contact Us</h2>
                  <p>United Web Developers</p>
                  <p>
                    <span className="fw-bold">Email:</span>{" "}
                    <a href="malto:support@unitedwebdevelopers.com">
                      support@unitedwebdevelopers.com
                    </a>
                  </p>
                  <p>
                    <span className="fw-bold">Phone:</span>{" "}
                    <a href="tel:(619)3266066">(619) 326-6066</a>
                  </p>
                  <p>
                    <span className="fw-bold">Website:</span>{" "}
                    <a href="https://unitedwebdevelopers.com">
                      https://unitedwebdevelopers.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="col-md-12">
              <div className="privacy-policy-content mb-0">
                <h3
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  Questions
                </h3>
                <p
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  For privacy policy inquiries, contact us at{" "}
                  <a href="tel:(619) 326-6066">(619) 326-6066</a> or{" "}
                  <a href="mailto:support@unitedwebdevelopers.com">
                    support@unitedwebdevelopers.com
                  </a>
                  .
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default PrivacyPolicy;
