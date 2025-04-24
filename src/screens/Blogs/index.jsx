import React from "react";
import DefaultLayout from "../../components/DefaultLayout";

import InnerBanner from "../../components/InnerBanner";
import aboutbannerbg from "../../assets/images/about-banner-bg.png";

import singlecategoriesblogimg from "../../assets/images/single-categories-blog-img.png";

import BlogCategoriesCard from "../../components/BlogCategoriesCard";
import { blogCategoriesData } from "../../data";
import { MdDateRange } from "react-icons/md";

const Blogs = () => {
  return (
    <DefaultLayout>
      <InnerBanner
        bgImage={aboutbannerbg}
        title="GRAPHIC DESIGN BLOG"
        description="We define your competition and target audience. Discover what is working in your online industry."
      />

      <section className="search-blogs">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="search-blogs-box">
                <label htmlFor="searchBlog" class="form-label">
                  Search Blogs
                </label>
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search..."
                    id="searchBlog"
                  />
                  <button
                    class=" theme-btn__yellow"
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
                <div className="single-blog__card-img">
                  <img
                    src={singlecategoriesblogimg}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="single-blog__card-body">
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

      <section className="blog-categories">
        <div className="container">
          {blogCategoriesData.map((item, index) => (
            <div className="row blog-categories-row" key={index}>
              <div className="col-md-12">
                <div className="blog-categories__head">
                  <h3>{item.category}</h3>
                  <button className="theme-btn theme-btn__yellow">
                    Find More
                  </button>
                </div>
              </div>
              {item.blogs.map((blogItem, blogIndex) => (
                <div className="col-md-4 mb-md-0 mb-4" key={blogIndex}>
                  <BlogCategoriesCard
                    image={blogItem.image}
                    category={blogItem.category}
                    title={blogItem.title}
                    publishDate={blogItem.date}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Blogs;
