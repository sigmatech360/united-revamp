import React from "react";

const PricingCard = (props) => {
  return (
    <div
      className="pricing-card"
      data-aos="fade-up"
      data-aos-delay={props.index * 300}
    >
      <div className="pricing-card__header">
        <div className="pricing-card__header-priceDiv">
          <h5 className="pricing-card__header-price">${props?.price}</h5>
          <h5 className="pricing-card__header-price-discount">
            ${props?.discountPrice}
          </h5>
        </div>
        <h4 className="pricing-card__header-head">{props?.title}</h4>
        <p className="pricing-card__header-per-project">Per Project</p>
      </div>
      <div className="pricing-card__body">
        <ul>
          {props?.features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
      </div>

      <button className="pricing-card__footer" onClick={props.onClick}>Choose Plan</button>
    </div>
  );
};

export default PricingCard;
