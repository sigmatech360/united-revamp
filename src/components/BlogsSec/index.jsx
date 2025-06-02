// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Link } from "react-router-dom";

// const wpBaseUrl = import.meta.env.VITE_WP_BASE_URL;

// const BlogsSec = ({ blogSecTitle, blogSubtext }) => {
//   const [latestBlogs, setLatestBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchLatestPosts = async () => {
//     try {
//       const res = await axios.get(`${wpBaseUrl}/posts?_embed&per_page=6`);
//       setLatestBlogs(res.data);
//     } catch (error) {
//       console.error("Error fetching latest posts:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchLatestPosts();
//   }, []);

//   return (
//     <section className="blog-sec">
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-md-12">
//             <div className="sec-head">
//               <p className="sec-head-tag label-yellow-bg">
//                 ADDITIONAL RESOURCES
//               </p>
//               <h3 data-aos="fade-up" data-aos-delay={100}>
//                 {blogSecTitle}
//               </h3>
//               <p data-aos="fade-up" data-aos-delay={300}>
//                 {blogSubtext}
//               </p>
//             </div>
//           </div>

//           <div className="swiper-container">
//             {loading ? (
//               <p>Loading latest blogs...</p>
//             ) : (
//               <Swiper
//                 modules={[Pagination]}
//                 spaceBetween={20}
//                 slidesPerView={1}
//                 loop={true}
//                 speed={1000}
//                 breakpoints={{ 768: { slidesPerView: 3 } }}
//                 pagination={{ clickable: true }}
//               >
//                 {latestBlogs.map((post, index) => {
//                   const image =
//                     post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
//                     "https://via.placeholder.com/300";
//                   const author =
//                     post._embedded?.author?.[0]?.name || "Unknown Author";
//                   const date = new Date(post.date).toLocaleDateString("en-US", {
//                     year: "numeric",
//                     month: "long",
//                     day: "numeric",
//                   });

//                   return (
//                     <SwiperSlide key={post.id}>
//                       <div className="mb-lg-0 mb-4">
//                         <div
//                           className="blog-card"
//                           data-aos="fade-up"
//                           data-aos-delay={index * 300}
//                         >
//                           <div className="blog-card__image">
//                             <Link to={`/blog/${post.slug}`}>
//                               <img
//                                 src={image}
//                                 className="img-fluid"
//                                 alt={post.title.rendered}
//                               />
//                             </Link>
//                           </div>
//                           <div className="blog-card__content">
//                             <div className="blog-card__content-meta">
//                               <p className="h4">By: {author}</p>
//                               <p>{date}</p>
//                             </div>
//                             <Link to={`/blog/${post.slug}`}>
//                               <p
//                                 className="blog-card__content-title"
//                                 dangerouslySetInnerHTML={{
//                                   __html: post.title.rendered,
//                                 }}
//                               />
//                             </Link>
//                           </div>
//                         </div>
//                       </div>
//                     </SwiperSlide>
//                   );
//                 })}
//               </Swiper>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlogsSec;

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
                              alt="Blog Image"
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
