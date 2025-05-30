// import React from "react";
import DefaultLayout from "../../components/DefaultLayout";

import InnerBanner from "../../components/InnerBanner";
import aboutbannerbg from "../../assets/images/about-banner-bg.png";

import singlecategoriesblogimg from "../../assets/images/single-categories-blog-img.png";

// import BlogCategoriesCard from "../../components/BlogCategoriesCard";
// import { blogCategoriesData } from "../../data";
import { MdDateRange } from "react-icons/md";
import BlogCategoriesSec from "../../components/BlogCategoriesSec";

const Blogs = () => {


  return (
    <DefaultLayout>
      <InnerBanner
        bgImage={aboutbannerbg}
        title="BLOGS"
        description="We define your competition and target audience. Discover what is working in your online industry."
      />

      <section className="search-blogs">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div
                className="search-blogs-box"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <label htmlFor="searchBlog" className="form-label">
                  Search Blogs
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                    id="searchBlog"
                  />
                  <button
                    className=" theme-btn__yellow"
                    type="button"
                    id="button-addon2"
                  >
                    Search Here
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="single-blog-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="single-blog__card">
                <div
                  className="single-blog__card-img"
                  data-aos="flip-left"
                  data-aos-delay={200}
                >
                  <img
                    src={singlecategoriesblogimg}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div
                  className="single-blog__card-body"
                  data-aos="zoom-in"
                  data-aos-delay={200}
                >
                  <p className="single-blog__card-body-category">Logo Design</p>
                  <p className="single-blog__card-body-title">
                    Hawkeye Logo: Marvel’s Most Iconic Archery Insignia
                  </p>
                  <div className="single-blog__card-footer">
                    <div className="single-blog__card-footer-date">
                      <MdDateRange />
                      <p>Published: March 18, 2025</p>
                    </div>
                    <button className="theme-btn theme-btn__yellow">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BlogCategoriesSec />

    </DefaultLayout>
  );
};

export default Blogs;
