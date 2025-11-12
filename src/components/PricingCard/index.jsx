import React from "react";

const PricingCard = ({
  index = 0,
  price = "",
  discountPrice = "",
  title = "",
  features = [],
  onClick = () => {},
}) => {
  return (
    <div
      className="pricing-card"
      data-aos="fade-up"
      data-aos-delay={index * 300}
    >
      {/* Header */}
      <div className="pricing-card__header">
        <div className="pricing-card__header-priceDiv">
          {price && <h5 className="pricing-card__header-price">${price}</h5>}
          {discountPrice && (
            <h5 className="pricing-card__header-price-discount">
              ${discountPrice}
            </h5>
          )}
        </div>
        {title && <h4 className="pricing-card__header-head">{title}</h4>}
        <p className="pricing-card__header-per-project">Per Project</p>
      </div>

      {/* Body */}
      <div className="pricing-card__body">
        {Array.isArray(features) && features.length > 0 ? (
          <ul>
            {features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        ) : (
          <p className="no-features-text">No features listed</p>
        )}
      </div>

      {/* Footer */}
      <button className="pricing-card__footer" onClick={onClick}>
        Choose Plan
      </button>
      
    </div>
  );
};

export default PricingCard;
