// import React from "react";
import DefaultLayout from "../../components/DefaultLayout";

import InnerBanner from "../../components/InnerBanner";
import aboutbannerbg from "../../assets/images/about-banner-bg.webp";

import singlecategoriesblogimg from "../../assets/images/single-categories-blog-img.webp";

// import BlogCategoriesCard from "../../components/BlogCategoriesCard";
// import { blogCategoriesData } from "../../data";
import { MdDateRange } from "react-icons/md";
import BlogCategoriesSec from "../../components/BlogCategoriesSec";
import ReactHelmet from "../../components/ReactHelmet";

const Blogs = () => {


  return (
    <>
      <ReactHelmet
        title="United Web Developers"
        description={`description`}
        keywords="web development, custom website, react development, logo design, digital marketing, social media marketing, web design"
        url="https://unitedwebdevelopers.com/blog"
      />
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

      <BlogCategoriesSec />

    </DefaultLayout>
    </>
  );
};

export default Blogs;
