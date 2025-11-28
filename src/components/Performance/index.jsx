import React from "react";

const Performance = ({ data = [] }) => {
  return (
    <div className="container py-5">
      <div className="row">
        {data.map((item, index) => (
          <div className="col-lg-4 col-md-6" key={index}>
            <div
              className="performance-box text-center"
              data-aos="fade-up"
              data-aos-duration={1000 * (index +1)}
              data-aos-delay={100}
            >
              <img src={item.icon} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Performance;
