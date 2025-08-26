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
import { useState } from "react";
import axios from "axios";
import BlogCategoriesCard from "../../components/BlogCategoriesCard";
import Loader from "../../components/Loader";

const Blogs = () => {
  const baseURL = import.meta.env.VITE_WP_BASE_URL;
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;
    setLoading(true);
    setError("");

    try {
      const res = await axios.get(
        `${baseURL}/posts?search=${encodeURIComponent(searchTerm)}&_embed`
      );

      // Filter posts where title includes search term
      const filteredResults = res.data.filter((post) =>
        post.title.rendered.toLowerCase().includes(searchTerm.toLowerCase())
      );

      // setSearchResults(res.data);
      setSearchResults(filteredResults);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch blogs.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ReactHelmet
        title="United Web Developers Blog | Insights, Tips & Trends"
        description={`Explore the United Web Developers Blog for expert web tips, digital trends, and design insights. Stay informed and grow your brand with actionable content.`}
        keywords="web development, custom website, react development, logo design, digital marketing, social media marketing, web design"
        baseUrl="https://unitedwebdevelopers.com/blog"
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
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleSearch();
                        }
                      }}
                    />
                    <button
                      className=" theme-btn__yellow"
                      type="button"
                      id="button-addon2"
                      onClick={handleSearch}
                    >
                      Search Here
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="search-results mt-4">
          <div className="container">
            {loading && (
              <div className="sideBar-loader py-5 my-5">
                <Loader />
              </div>
            )}
            {error && <p className="text-danger">{error}</p>}

            <div className="row">
              {searchResults.length > 0
                ? searchResults.map((post) => {
                    const image =
                      post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                      "https://via.placeholder.com/400x200";

                    return (
                      <>
                        <div className="col-xl-4 col-md-6 mb-4" key={post.id}>
                          <BlogCategoriesCard
                            image={image}
                            categories={
                              post._embedded?.["wp:term"]?.[0]?.map((cat) => ({
                                id: cat.id,
                                name: cat.name,
                              })) || []
                            }
                            title={post.title.rendered}
                            publishDate={new Date(
                              post.date
                            ).toLocaleDateString()}
                            slug={post.slug}
                          />
                        </div>
                      </>
                    );
                  })
                : !loading}
            </div>
          </div>
        </section>

        <BlogCategoriesSec />
      </DefaultLayout>
    </>
  );
};

export default Blogs;
