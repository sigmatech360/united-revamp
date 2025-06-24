
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import axios from "axios";
import "swiper/css";
import "swiper/css/pagination";
import Loader from "../Loader";

const wpBaseUrl = import.meta.env.VITE_WP_BASE_URL;

const BlogsSec = ({ blogSecTitle, blogSubtext, categorySlug }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPostsByCategory = async () => {
    try {
      setLoading(true);

      // Step 1: Get category ID from slug
      const categoryRes = await axios.get(
        `${wpBaseUrl}/categories?slug=${categorySlug}`
      );
      const categoryId = categoryRes.data?.[0]?.id;

      if (!categoryId) {
        setBlogs([]);
        setLoading(false);
        return;
      }

      // Step 2: Fetch posts from that category
      const postsRes = await axios.get(
        `${wpBaseUrl}/posts?categories=${categoryId}&_embed`
      );
      setBlogs(postsRes.data);
    } catch (err) {
      console.error("Error fetching blogs:", err);
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (categorySlug) {
      fetchPostsByCategory();
    }
  }, [categorySlug]);
  // if (blogs.length === 0) {
  //   return;
  // }

  return (
    <section className="blog-sec">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="sec-head">
              <p className="sec-head-tag label-yellow-bg">
                ADDITIONAL RESOURCES
              </p>
              <h2 data-aos="fade-up" data-aos-delay={100}>
                {blogSecTitle}
              </h2>
              <p data-aos="fade-up" data-aos-delay={300}>
                {blogSubtext}
              </p>
            </div>
          </div>

          {loading ? (
            // <div className="text-center py-5">Loading...</div>
            <div className="sideBar-loader">
              <Loader />
            </div>
          ) : blogs.length === 0 ? (
            <div className="text-center py-5">No related blog posts found.</div>
          ) : (
            <div className="swiper-container">
              <Swiper
                modules={[Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                autoHeight={true}
                speed={1000}
                breakpoints={{
                  768: { slidesPerView: 2 },
                  1200: { slidesPerView: 3 },
                }}
                pagination={{ clickable: true }}
              >
                {blogs.map((item, index) => {
                  const image =
                    item._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                    "https://via.placeholder.com/600x400";

                  const dateFormatted = new Date(item.date).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    }
                  );

                  return (
                    <SwiperSlide key={item.id}>
                      <div className="mb-lg-0 mb-4">
                        <div
                          className="blog-card"
                          data-aos="fade-up"
                          data-aos-delay={index * 300}
                        >
                          <div className="blog-card__image">
                            <img
                              src={image}
                              className="img-fluid"
                              alt={item.title.rendered}
                            />
                          </div>
                          <div className="blog-card__content">
                            <div className="blog-card__content-meta">
                              <p className="h4">
                                By:{" "}
                                {item._embedded?.author?.[0]?.name || "Admin"}
                              </p>
                              <p>{dateFormatted}</p>
                            </div>
                            <Link to={`/blog/${item.slug}`}>
                              <p
                                className="blog-card__content-title"
                                dangerouslySetInnerHTML={{
                                  __html: item.title.rendered,
                                }}
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogsSec;
