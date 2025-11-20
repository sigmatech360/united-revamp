import React from "react";

const DomainQualityBoxes = ({ items = [] }) => {
  return (
    <div className="row">
      {items.map((item, index) => (
        <div className="col-lg-6 col-md-6" key={index}>
          <div className="quality-box">
            <img src={item.icon} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DomainQualityBoxes;
