import DefaultLayout from "../../components/DefaultLayout";

import InnerBanner from "../../components/InnerBanner";
import aboutbannerbg from "../../assets/images/about-banner-bg.webp";
import ReactHelmet from "../../components/ReactHelmet";
import ObfuscatedEmail from "../../components/ObfuscatedEmail";
import PhoneLink from "../../components/PhoneLink";

const TermsAndConditions = () => {
  return (
    <>
      <ReactHelmet
        title="United Web Developers"
        description={`description`}
        keywords="web development, custom website, react development, logo design, digital marketing, social media marketing, web design"
        baseUrl="https://unitedwebdevelopers.com/terms-and-conditions"
      />
      <DefaultLayout>
        <InnerBanner bgImage={aboutbannerbg} title="Terms & Conditions" />

        <section className="privacy-policy-sec">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="privacy-policy-content">
                  <p>
                    Before placing an order, United Web Developers urge all
                    visitors to carefully read and familiarize themselves with
                    our website’s terms and conditions. You acknowledge your
                    understanding and agreement with these terms by proceeding
                    with our services. Your satisfaction and compliance are
                    paramount to us.
                  </p>
                  <ul>
                    {[
                      "Site Contents Usage",
                      "Customer Testimonials",
                      "Electronic Communications",
                      "Copyright/Trademarks",
                      "Copyright Complaints",
                      "Refund Policy",
                      "Claim Your Refund",
                      "Quality Assurance Policy",
                      "Account Area",
                      "Delivery Policy",
                      "Revision Policy",
                      "Record Maintenance",
                      "Notice and Procedure for Making Claims of Copyright Violation",
                      "Applicable Law",
                      "Disputes",
                      "Site Policies, Modification & Severability",
                      "Bill of Rights",
                    ].map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h3>Site Contents Usage</h3>

                  <p>
                    Your decision to visit our homepage is voluntary, and we
                    respect your privacy. Any disputes concerning privacy will
                    be governed by this Notice and our Conditions of Use, which
                    include limitations on damages, dispute arbitration, and
                    applicable state laws. Should you have any concerns
                    regarding our Privacy Policy, please don’t hesitate to
                    contact our customer services, which are dedicated to
                    serving you with utmost satisfaction.
                  </p>

                  <p>
                    Kindly be informed that our policies are subject to change
                    at any time. Thus, we recommend you review our policy each
                    time you visit our site for purchase.
                  </p>

                  <p>
                    To improve our services and better understand our clients,
                    we collect navigational information, such as the areas of
                    our website most visited and technical efficiencies like
                    connection and download times. This data enables us to
                    enhance the quality of our site and address any areas that
                    may need improvement.
                  </p>

                  <p>
                    Please be aware that all materials on this site, including
                    images, illustrations, designs, icons, photographs, written
                    content, and other materials (collectively referred to as
                    “Contents”), are copyrighted, trademarks, trade dress, or
                    other intellectual property owned, controlled, or licensed
                    by United Web Developers.
                  </p>

                  <p>
                    Our Site and its Contents are intended solely for personal
                    and non-commercial use. You may download or copy the
                    Contents and other downloadable materials displayed on the
                    site for your personal use only. However, no right, title,
                    or interest in any downloaded materials or software is
                    transferred to you due to such downloading or copying. It is
                    strictly prohibited to reproduce, publish, transmit,
                    distribute, display, modify, create derivatives, sell, or
                    participate in any sale or exploitation of the site, its
                    content, or any related software, except as noted above.
                  </p>

                  <p>
                    We value your compliance with these terms as they help
                    maintain the integrity of our content and ensure a positive
                    experience for all visitors to United Web Developers. Our
                    dedicated customer support team is always ready to assist
                    you with any further queries or require assistance.
                  </p>

                  <h3>Testimonials</h3>

                  <p>
                    Any comments, feedback, postcards, suggestions, ideas, and
                    other submissions disclosed, submitted, or offered to United
                    Web Developers on or in connection with your use of this
                    site (collectively, the “Comments”) shall remain the
                    Company’s exclusive property. The Company shall have
                    unrestricted rights, titles, and interests in the Comments,
                    and it is not obliged to:
                  </p>

                  <ul>
                    {[
                      "Maintain any Comments in confidence.",
                      "Provide any compensation to users for their Comments",
                      "Respond to user Comments.",
                    ].map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <p>
                    Moreover, the Company may use testimonials and client logos
                    on its other web and offline properties.
                  </p>

                  <h3>Electronic Communications</h3>

                  <p>
                    Clients who visit our site or email our contacts consent to
                    communicate with our Company electronically. The receipt of
                    our communications electronically is involuntary. United Web
                    Developers will communicate with the client via email or by
                    posting notices on this site. Therefore, the client agrees
                    that all agreements, notices, disclosures, and relevant
                    communications satisfy all legal requirements and hold the
                    same value as any written statement.
                  </p>

                  <h3>Copyright/Trademarks</h3>

                  <p>
                    All content on this site, including text, graphics, logos,
                    button icons, images, digital downloads, data compilations,
                    and software, is the property of this Company or its content
                    suppliers and is protected by international copyright laws.
                    The compilation of all content on this site is the exclusive
                    property of this Company and is protected by international
                    copyright laws. Any software used on this site is the
                    property of this Company or its software suppliers and is
                    protected by international copyright laws.
                  </p>

                  <p>
                    The trademark names used within our sites belong to their
                    respective companies or subsidiaries. They cannot be used
                    with any product or service not affiliated with that
                    Company.
                  </p>

                  <h3>Copyright Complaints</h3>
                  <p>
                    The Company and its affiliates respect the intellectual
                    property rights of others. If any visitor to the site
                    believes that their work has been copied in a way that
                    constitutes copyright infringement, please follow our Notice
                    and Procedure for Making Claims of Copyright Violation.
                  </p>

                  <p>
                    We take copyright complaints seriously and will address any
                    reported violations promptly and appropriately. Your
                    cooperation in ensuring the protection of intellectual
                    property is greatly appreciated.
                  </p>

                  <h2>Refund Policy</h2>

                  <p>
                    At United Web Developers, we value customer satisfaction and
                    strive to provide the best design services. However, certain
                    conditions apply to our refund policy to ensure fair and
                    transparent dealings. Please read the following guidelines
                    regarding refund eligibility:
                  </p>

                  <ul>
                    {[
                      {
                        title: "No Refund for Special Packages",
                        description:
                          "Refunds are not applicable for special packages that are explicitly stated as non-refundable.",
                      },
                      {
                        title: "Approval of Primary Design Concept",
                        description:
                          "Once you have approved the primary design concept, the refund policy will no longer be applicable.",
                      },
                      {
                        title: "Revisions Requested",
                        description:
                          "If you have requested revisions to the design, a refund will not be provided.",
                      },
                      {
                        title: "Cancellation Unrelated to the Company",
                        description:
                          "If the cancellation is due to reasons unrelated to the Company, a refund will not be issued.",
                      },
                      {
                        title: "No Contact for More than 2 Weeks",
                        description:
                          "Failure to contact the Company for more than two weeks during the project may result in the forfeiture of the refund.",
                      },
                      {
                        title: "Violation of Company Policies",
                        description:
                          "Refunds will not be granted if our company policies are violated.",
                      },
                      {
                        title: "Approach to Other Companies or Designers",
                        description:
                          "A refund will not be entertained if other companies or designers already approached the project.",
                      },
                      {
                        title: "Inadequate Creative Brief",
                        description:
                          "A refund will only be processed if the provided creative brief has the required information.",
                      },
                      {
                        title: "Complete Design Change Demanded",
                        description:
                          "Requests for a complete design change after the project has started will not be eligible for a refund.",
                      },
                      {
                        title: "Exceeding ‘Request for Refund’ Time Span",
                        description:
                          "Refund requests submitted beyond the specified ‘request for refund’ time span will not be considered.",
                      },
                      {
                        title: "Non-Refundable Services",
                        description:
                          "Certain services, such as Social Media, SEO, Domain Registration, and Web Hosting, are not entitled to refunds under any circumstances.",
                      },
                      {
                        title: "Website Development Approvals",
                        description:
                          "Once you have approved the website design and it is sent for development, refunds will not be entertained.",
                      },
                      {
                        title: "Money-Back Guarantee",
                        description:
                          "If the client rejects the initial designs, a money-back guarantee will apply. However, if additional design concepts or modifications are requested after this point, 33% of the total billing amount will be deducted for incurred costs, including processing and management charges.",
                      },
                      {
                        title: "Change of Mind",
                        description:
                          "Refund is not applicable on the change of mind or any concern that is not related to work ethics.",
                      },
                    ].map((item, index) => (
                      <li key={index}>
                        <strong>{item.title}:</strong> {item.description}
                      </li>
                    ))}
                  </ul>

                  <p>
                    Please note that United Web Developers reserves the right to
                    reject any project or cancel a contract if necessary. After
                    a refund is processed, you are not permitted to use the
                    designs for any purpose, as they will become the sole
                    property of United Web Developers. The Company will retain
                    full ownership rights to the designs.
                  </p>

                  <p>
                    Don’t hesitate to contact our customer support team for
                    further clarification or to initiate a refund process. We
                    value your understanding and cooperation in adhering to our
                    refund policy.
                  </p>

                  <h2>
                    To proceed with your refund request, kindly follow these
                    steps:
                  </h2>

                  <h3>You can claim your refund by:</h3>

                  <ul>
                    {[
                      "Contacting our Toll-Free Number: +1 (321) 414-2155",
                      "Engaging in a Live Chat session. Click here to initiate the chat or send us an email.",
                      "We will promptly respond and begin the necessary analysis upon receiving your refund request. Once completed, the refund process will be initiated.",
                      "Please be aware that after the refund is issued, you will no longer retain any rights to the designs or materials submitted by United Web Developers. The relevant information will be submitted to the Government Copyright Agencies to ensure compliance with legal requirements.",
                    ].map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>

                  <h3>Quality Assurance Policy</h3>

                  <p>
                    At United Web Developers, we are dedicated to meeting your
                    requirements and exceeding your expectations. Our designers
                    take pride in crafting well-researched and finely crafted
                    designs to ensure your satisfaction.
                  </p>

                  <p>
                    100% SATISFACTION GUARANTEE: Our commitment to your
                    satisfaction is unwavering. With our unlimited revisions
                    policy, we aim to ensure you are 100% satisfied with the
                    final product.
                  </p>

                  <p>
                    We strive to surpass your expectations and will only rest
                    once you are completely content with your design. The number
                    of revisions available will be according to your package
                    selection.
                  </p>

                  <h3>Account Area</h3>
                  <p>
                    Our Account Area provides a convenient platform for
                    communication. You are responsible for regularly checking
                    the account area for any queries, concerns, or additional
                    instructions from the designer. Failure to utilize the
                    Account Area frequently will not be considered sufficient
                    grounds for a refund. Should you require assistance using
                    this feature, our customer support team can help anytime.
                  </p>

                  <h3>Delivery Policy</h3>
                  <p>
                    Upon confirmation of your order, the complete package will
                    be delivered to the designated account on the specified date
                    mentioned in the Order Confirmation. Additionally, a
                    confirmation email will be sent to you. The turnaround time
                    will align with your chosen package, with the minimum
                    processing time being 2 business days.
                  </p>
                  <p>
                    Don’t hesitate to contact our customer support team for
                    urgent orders.
                  </p>

                  <h3>Revision Policy</h3>
                  <p>
                    The number of revisions available is determined by the
                    package you select, and you may request revisions as
                    specified in your package details. We are committed to
                    delivering top-notch service and will continue revising
                    until your needs are met. You will not incur any additional
                    charges if the design concepts remain unchanged. Revised
                    designs will be provided within 48 hours.
                  </p>

                  <p>
                    Please note that any changes or revisions requested after
                    the finalization of logo designs will be treated as a new
                    order and billed separately.
                  </p>

                  <h3>Record Maintenance</h3>

                  <p>
                    At United Web Developers, we place great importance on
                    record maintenance. We keep detailed records of all
                    finalized designs to ensure that you will be promptly
                    provided with the exact file you need in case of misplaced
                    orders. Our commitment to maintaining accurate and organized
                    records is part of our dedication to delivering a seamless
                    and efficient experience to our valued clients.
                  </p>

                  <h3>Customer Support</h3>
                  <p>
                    Our customer support team is available 24/7 to address all
                    your concerns and queries. You can count on our dedicated
                    team to provide timely and comprehensive responses to your
                    inquiries, no matter the time or day. Your satisfaction is
                    our top priority, and we are here to assist you every step
                    of the way.
                  </p>

                  <h3>Communication Policy</h3>

                  <p>
                    For effective communication, we urge you to exclusively use
                    the following contact details: support
                    <span className="at"></span>unitedwebdevelopers
                    <span className="dot"></span>com and the official numbers
                    provided on our website. We take no responsibility for any
                    communication via other platforms or unauthorized contact
                    details not provided. We highly recommend utilizing our
                    official communication channels to ensure the accuracy and
                    security of your interactions with us.
                  </p>

                  <p>
                    We value the trust you place in us and take full
                    responsibility for all information provided through our
                    official domains. Your privacy and data security are of
                    utmost importance, and we maintain strict measures to
                    safeguard the confidentiality of your information.
                  </p>

                  <h2>
                    Notice and Procedure for Making Claims of Copyright
                    Violation
                  </h2>
                  <p>
                    At United Web Developers, we respect the intellectual
                    property rights of others. If you believe that your work has
                    been copied in a way that constitutes a copyright violation,
                    please follow the procedure outlined below:
                  </p>

                  <ul>
                    {[
                      "Provide an electronic or physical signature of the person authorized to act on behalf of the copyright owner.",
                      "Describe the copyrighted work you claim has been violated.",
                      "Specify the location on the site where the material you claim is copied from can be found, including any relevant ID number.",
                      "Include your address, telephone number, and email address for communication purposes.",
                      "State in good faith that the disputed use is not authorized by the copyright owner, its agent, or the law.",
                      "Make a statement, under penalty of perjury, that the information in your notice is accurate and that you are the copyright owner or authorized to act on their behalf.",
                    ].map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>

                  <p>
                    We take copyright violations seriously and will promptly
                    address any reported issues in compliance with applicable
                    laws and regulations. Your cooperation in helping us
                    maintain a respectful and law-abiding online environment is
                    highly appreciated.
                  </p>

                  <h3>Applicable Law</h3>
                  <p>
                    Your use of the service requires strict compliance with all
                    applicable laws, including any relevant export controls.
                    Additionally, you must adhere to any further limitations or
                    guidelines outlined in written or on-screen notices from
                    United Web Developers. We value ethical conduct and
                    responsible usage of our services and expect all users to
                    respect and abide by the law.
                  </p>

                  <h3>Disputes</h3>
                  <p>
                    If any dispute arises from your visit to our website or the
                    services you purchase through our site, such disputes shall
                    be submitted to our dedicated Dispute Handling Department.
                    We are committed to resolving issues fairly and
                    transparently, ensuring customer satisfaction.
                  </p>
                  <p>
                    The legal proceedings will be conducted in the Courts of
                    Houston, TX, for disputes that lead to court arbitration. We
                    uphold a transparent and efficient dispute resolution
                    process and aim to resolve conflicts amicably and equitably.
                  </p>

                  <h3>Site Policies, Modification & Severability</h3>

                  <p>
                    We encourage all visitors to review our other policies,
                    including our Pricing Policy, which governs your visit to
                    our site. As part of our commitment to continual
                    improvement, United Web Developers reserves the right to
                    change the site, policies, and Conditions of Use at any
                    time. Rest assured, we will communicate any significant
                    changes or updates to our valued clients.
                  </p>

                  <p>
                    Suppose any of these conditions are deemed invalid, void, or
                    unenforceable for any reason. In that case, such provision
                    shall be considered severable and shall not impact the
                    validity and enforceability of the remaining conditions.
                  </p>

                  <h3>Means of Reaching the Company:</h3>
                  <p>
                    To ensure smooth communication from the point of purchase to
                    the completion of your order, we offer multiple means to
                    contact us. You can reach us through the following methods:
                  </p>

                  {/* <ul>
                    {[
                      "Chat – Engage in real-time conversation with our support team.",
                      "support@unitedwebdevelopers.com – Contact us via email for prompt assistance.",
                      "+1 (321) 414-2155 – Call our Toll-Free number to speak directly with our representatives.",
                    ].map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul> */}
                  <ul>
                    <li>
                      Chat – Engage in real-time conversation with our support
                      team.
                    </li>
                    <li>
                      support<span className="at"></span>unitedwebdevelopers
                      <span className="at"></span>com – Contact us via email for
                      prompt assistance.
                    </li>
                    <li>
                      +1 (321) 414-2155 – Call our Toll-Free number to speak
                      directly with our representatives.
                    </li>
                  </ul>

                  <p>
                    Please note that any other means of communication outside
                    these specified methods are not considered valid for
                    contacting United Web Developers. We appreciate your
                    cooperation and understanding in utilizing the designated
                    channels for effective and secure communication.
                  </p>

                  <h2>Bill of Rights</h2>
                  <h3>No Obligation</h3>

                  <p>
                    We provide our Notification Services, such as email, free of
                    charge, and clients are not obligated to make any purchases.
                    Enjoy the benefits of staying informed without any financial
                    commitments.
                  </p>

                  <h3>Unsubscribing</h3>
                  <p>
                    Clients can unsubscribe or modify their subscription to our
                    Notification Services. Visit the My Account section on our
                    site to manage subscriptions easily online.
                  </p>

                  <h3>Updates</h3>
                  <p>
                    As our valued customer, you will occasionally receive email
                    updates about important functionality changes to our
                    website, new services, and special offers that our Client
                    Services team believes you find valuable. However, if you
                    wish not to receive these updates, you can adjust your
                    preferences by logging into the My Account section on our
                    site.
                  </p>

                  <h3>Note</h3>
                  <p>
                    We take cybercrime seriously and strictly prohibit using
                    stolen credit cards on our platform. Any fraudulent
                    activities will be promptly reported to Federal and State
                    Agencies as we work diligently to combat cybercrime and
                    ensure a secure online environment for all our clients. Your
                    safety and trust are of utmost importance to us.
                  </p>

                  {/* ============================================================================== */}

                  <div className="privacyPolicyLastDiv">
                    <h2>Contact Us</h2>
                    <p>United Web Developers</p>
                    <p>
                      <span className="fw-bold">Email:</span>{" "}
                      <ObfuscatedEmail className="terms-condition-email" />
                      {/* <a href="mailto:support@unitedwebdevelopers.com">
                        support<span className="at"></span>unitedwebdevelopers<span className="dot"></span>com
                      </a> */}
                    </p>
                    <p>
                      <span className="fw-bold">Phone:</span>{" "}
                      {/* <a href="tel:+13214142155">+1 (321) 414-2155</a> */}
                      <PhoneLink
                        phoneNumber="+13214142155"
                        // className="contactForm-icons-textContent"
                        label={"+1 (321) 414-2155"}
                      />
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

export default TermsAndConditions;
