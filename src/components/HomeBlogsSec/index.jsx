import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import Loader from "../Loader";

const wpBaseUrl = import.meta.env.VITE_WP_BASE_URL;

const HomeBlogsSec = ({ blogSecTitle, blogSubtext }) => {
  const [latestBlogs, setLatestBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchLatestPosts = async () => {
    try {
      const res = await axios.get(`${wpBaseUrl}/posts?_embed&per_page=6`);
      setLatestBlogs(res.data);
    } catch (error) {
      console.error("Error fetching latest posts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLatestPosts();
  }, []);

  return (
    <section className="blog-sec">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="sec-head">
              <p className="sec-head-tag label-yellow-bg">
                ADDITIONAL RESOURCES
              </p>
              <h3 data-aos="fade-up" data-aos-delay={100}>
                {blogSecTitle}
              </h3>
              <p data-aos="fade-up" data-aos-delay={300}>
                {blogSubtext}
              </p>
            </div>
          </div>

          <div className="swiper-container">
            {loading ? (
              <div className="sideBar-loader">
                <Loader />
              </div>
            ) : (
              <Swiper
                modules={[Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                autoHeight={true}
                loop={true}
                speed={1000}
                breakpoints={{
                  768: { slidesPerView: 2 },
                  1200: { slidesPerView: 3 },
                }}
                pagination={{ clickable: true }}
              >
                {latestBlogs.map((post, index) => {
                  const image =
                    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                    "https://via.placeholder.com/300";
                  const author =
                    post._embedded?.author?.[0]?.name || "Unknown Author";
                  const date = new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  });

                  return (
                    <SwiperSlide key={post.id}>
                      <div className="mb-lg-0 mb-4">
                        <div
                          className="blog-card"
                          data-aos="fade-up"
                          data-aos-delay={index * 300}
                        >
                          <div className="blog-card__image">
                            <Link to={`/blog/${post.slug}`}>
                              <img
                                src={image}
                                className="img-fluid"
                                alt={post.title.rendered}
                              />
                            </Link>
                          </div>
                          <div className="blog-card__content">
                            <div className="blog-card__content-meta">
                              <p className="h4">By: {author}</p>
                              <p>{date}</p>
                            </div>
                            <Link to={`/blog/${post.slug}`}>
                              <p
                                className="blog-card__content-title"
                                dangerouslySetInnerHTML={{
                                  __html: post.title.rendered,
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
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBlogsSec;
