import React from "react";
import DefaultLayout from "../../components/DefaultLayout";

import InnerBanner from "../../components/InnerBanner";
import aboutbannerbg from "../../assets/images/about-banner-bg.png";

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
                    placeholder="Recipient's username"
                    id="searchBlog"
                  />
                  <button
                    class=" theme-btn__yellow"
                    type="button"
                    id="button-addon2"
                  >
                    Button
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Blogs;
