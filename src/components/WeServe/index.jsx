import React from "react";

const WeServe = ({ serves, title }) => {
  return (
    <div className="container py-5">
      <h1 className="mb-4 fw-bold">{title}</h1>
      <div className="row">
        {serves?.map((item, idx) => (
          <div
            className="col-lg-2 rounded serve-item"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="50"
            key={idx}
          >
            <img src={item.img} className="img-fluid" alt="" />
            <p className="mt-3 fw-bold">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeServe;
