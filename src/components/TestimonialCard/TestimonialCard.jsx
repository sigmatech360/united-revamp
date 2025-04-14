import React from "react";

import quoteicon from "../../assets/images/quote-icon.png";

const TestimonialCard = ({ description, userImg, username, userCity }) => {
  return (
    <div className="home-testimonial-card">
      <img
        src={quoteicon}
        className="testimonial-quote__img"
        alt="Quote Image"
      />
      <p className="testimonial-quote__text">{description}</p>
      <div className="testimonial-user__details">
        <div className="testimonial-user__img">
          <img src={userImg} className="img-fluid" alt="Testimonial User" />
        </div>
        <div className="testimonial-user__content">
          <h4>{username}</h4>
          <p>{userCity}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
