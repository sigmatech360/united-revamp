import React from "react";
import { blogsData } from "../../data";

const BlogsSec = () => {
  return (
    <section className="blog-sec">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="sec-head">
              <p className="sec-head-tag label-yellow-bg">
                ADDITIONAL RESOURCES
              </p>
              <h2>Our Recent Blogs Covering Latest Industry News</h2>
              <p>
                Stay informed about all the latest happenings in the digital
                world, including the latest news about graphic designing, logo
                designing and more.
              </p>
            </div>
          </div>
          {blogsData.map((item, index) => (
            <div className="col-lg-4 col-md-6 mb-lg-0 mb-4" key={index}>
              <div className="blog-card">
                <div className="blog-card__image">
                  <img src={item.img} className="img-fluid" alt="Blog Image" />
                </div>
                <div className="blog-card__content">
                  <div className="blog-card__content-meta">
                    <h4>By: {item.meta.author}</h4>
                    <p>{item.meta.date}</p>
                  </div>
                  <p className="blog-card__content-title">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsSec;
