import React from "react";
import DefaultLayout from "../../components/DefaultLayout";

import InnerBanner from "../../components/InnerBanner";
import aboutbannerbg from "../../assets/images/about-banner-bg.webp";
import ReactHelmet from "../../components/ReactHelmet";

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
    <>
      <ReactHelmet
        title="United Web Developers"
        description={`description`}
        keywords="web development, custom website, react development, logo design, digital marketing, social media marketing, web design"
        url="https://unitedwebdevelopers.com/privacy-policy"
      />
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
                <p>{`At United Web Developers, we hold the privacy of our clients in the highest regard on United Web Developers. We treat their information with the same care as our own. While we do gather information from our clients, its purpose is solely to enhance our customer services. We acknowledge our responsibility to maintain and utilize our clients’ information appropriately. We want to assure you that we never rent or sell the information provided by our clients online.`}</p>
                <p>
                  This policy outlines how we collect, use, and safeguard
                  personal information obtained from our clients. It also
                  describes the options available to you regarding the
                  collection and use of your information.
                </p>

                <h3>Collection of Personal Information</h3>
                <p>
                  We collect details such as the client’s name, email, mailing
                  address, and phone number. These pieces of information are
                  provided by the client during the ordering process or when
                  saving their information with us. Additionally, email
                  addresses and mailing addresses obtained through forms like
                  our Contact Us Form might be used to respond to comments and
                  queries.
                </p>

                <p>
                  We also maintain records of past items that interested our
                  clients and their online purchases.
                </p>

                <h3>Use of Collected Data</h3>
                <p>
                  The information we gather serves various purposes. It’s used
                  to process client orders, and we send confirmation emails for
                  these orders. Our customer services may contact clients by
                  phone, mailing address, or email for any inquiries related to
                  their orders.
                </p>

                <p>
                  Clients might receive updates about our site and services,
                  including newsletters and promotional information. Moreover,
                  the information about clients’ interests and purchases helps
                  us enhance our website design and improve the overall
                  purchasing experience.
                </p>

                <h3>Newsletter Opt-out</h3>
                <p>
                  If you no longer wish to receive our newsletters and
                  promotional communications, you can opt out by following the
                  instructions provided in each communication. Alternatively,
                  you can contact us via email at:
                  support@unitedwebdevelopers.com or call us at (619) 326-6066.
                </p>

                <h3>Social Media and Widgets</h3>
                <p>
                  Our website includes Social Media Features and Widgets, such
                  as the Facebook Like button. These features may collect your
                  IP address and page visits for proper functionality.
                  Interactions with these features are subject to the privacy
                  policies of the respective companies.
                </p>

                <h3>Third-Party Sharing</h3>
                <p>
                  We do not share personal information with third parties unless
                  described in this policy. We never sell personal information
                  to third parties. We use trusted companies for services like
                  credit card processing and live customer support chat.
                </p>

                <h3>Security of Personal Information</h3>
                <p>
                  We prioritize the security of client information. We use
                  Secure Sockets Layer (SSL) Software for encryption during
                  transmission. While we strive for industry-standard security
                  measures, no method of online data transmission is entirely
                  foolproof.
                </p>

                <h3>Access to Registered Accounts</h3>
                <p>
                  Clients can access their registered accounts by signing in on
                  our homepage. This provides access to previous lists and
                  submitted information. Users can update their information
                  through the “My Account” section.
                </p>

                <h3>Changing & Deleting Accounts</h3>
                <p>
                  Clients can request account cancellation or personal
                  information deletion by emailing us. This will stop further
                  email communication related to online orders.
                </p>

                <h3>Cookies and Clear Gifs</h3>
                <p>
                  Cookies, alphanumeric identifiers, are used to enhance user
                  experience. Clear gifs help manage site content effectively.
                  We maintain IP address logs for site diagnostics and broad
                  demographic data, without tying it to personally identifiable
                  information.
                </p>

                <h3>Testimonials</h3>
                <p>
                  With consent, we may post testimonials along with names.
                  Removal requests are honored.
                </p>

                <h3>Links to Other Websites</h3>
                <p>
                  Linked websites have different privacy practices. Personal
                  information submitted to those sites is governed by their
                  privacy statements.
                </p>

                <h3>Changes to Privacy Policy</h3>
                <p>
                  We may modify this policy and will communicate changes through
                  various means. Review this policy periodically for updates.
                </p>

                <h3>Questions</h3>
                <p>
                  For privacy policy inquiries, contact us at (619) 326-6066 or
                  support@unitedwebdevelopers.com
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
          </div>
        </div>
      </section>
    </DefaultLayout>
    </>
  );
};

export default PrivacyPolicy;
