import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";
import aboutbannerbg from "../../assets/images/about-banner-bg.webp";
import { Link, Links, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../components/Loader";
import { TbCategoryFilled } from "react-icons/tb";
import { FaCalendarDay, FaHourglassStart, FaUser } from "react-icons/fa";

const wpBaseUrl = import.meta.env.VITE_WP_BASE_URL;

const BlogDetail = () => {
  const { id, slug, categorySlug } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [relatedPostsLoading, setRelatedPostsLoading] = useState(false);

  console.log("relatedPosts", relatedPosts);

  const fetchPostBySlug = async () => {
    try {
      const response = await axios.get(
        `${wpBaseUrl}/posts?slug=${slug}&_embed`
      );
      const postData = response.data[0];
      if (!postData) {
        console.log("Post not found");
        return;
      }

      setPost(postData);

      const categoryIds = postData.categories || [];
      if (categoryIds.length > 0) {
        fetchRelatedPosts(categoryIds, postData.id);
      }
    } catch (error) {
      console.error("Error fetching post:", error);
    }
  };

  // const fetchRelatedPosts = async (categoryIds, currentId) => {
  //   try {
  //     // Join multiple category IDs with commas
  //     const categoryParam = categoryIds.join(",");
  //     const response = await axios.get(
  //       `${wpBaseUrl}/posts?categories=${categoryParam}&_embed`
  //     );

  //     // Exclude the current post
  //     const related = response.data.filter((post) => post.id !== currentId);

  //     setRelatedPosts(related.slice(0, 10));
  //   } catch (error) {
  //     console.error("Error fetching related posts:", error);
  //   }
  // };

  const fetchRelatedPosts = async (categoryIds, currentId) => {
    try {
      setRelatedPostsLoading(true); // Start loader
      const categoryParam = categoryIds.join(",");
      const response = await axios.get(
        `${wpBaseUrl}/posts?categories=${categoryParam}&_embed`
      );

      const related = response.data.filter((post) => post.id !== currentId);
      setRelatedPosts(related.slice(0, 10));
    } catch (error) {
      console.error("Error fetching related posts:", error);
    } finally {
      setRelatedPostsLoading(false); // End loader
    }
  };

  useEffect(() => {
    fetchPostBySlug();
    // fetchRelatedPosts();
  }, [slug]);

  if (!post) return <Loader />;

  const featuredImage =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    "https://via.placeholder.com/800x400";

  // Categoroes
  const categories =
    post._embedded?.["wp:term"]?.[0]?.map((cat) => ({
      name: cat.name,
      slug: cat.slug,
    })) || [];

  // 👤 Author
  const authorName = post._embedded?.author?.[0]?.name || "Unknown Author";

  // 📅 Publish Date
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // ⏱️ Read time
  const plainText = post.content?.rendered?.replace(/<[^>]+>/g, "") || "";
  const wordCount = plainText.trim().split(/\s+/).length;
  const readTime = Math.ceil(wordCount / 200); // 200 words/minute

  return (
    <div className="blogDetail-page">
      <DefaultLayout>
        {/* <InnerBanner
          // bgImage={aboutbannerbg}
          // title=""
          // description=""
        /> */}
        <section className="blog-detail-content">
          <div className="container py-5 mt-4">
            <div className="row">
              <div className="col-xl-9 col-lg-8 mb-lg-0 mb-4">
                <section className="blog-detail-banner ">
                  <div className="blog-detail-banner-img">
                    <img src={featuredImage} alt={post.title.rendered} className="img-fluid" />
                  </div>
                </section>

                <h2
                  className="mb-4 blogDetailMain-title"
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />

                <div className="blogDetail-about-info">
                  <div className="blogDetail-about-infoCategories">
                    {categories.map((cat, index) => (
                      <div className="blogDetail-about-infoItem" key={index}>
                        <TbCategoryFilled />
                        <span>
                          <Link to={`/blog/category/${cat.slug}`}>
                            {cat.name}
                          </Link>
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="blogDetail-about-infoItem">
                    <FaUser />
                    <span>{authorName}</span>
                  </div>
                  <div className="blogDetail-about-infoItem">
                    <FaCalendarDay />
                    <span>{formattedDate}</span>
                  </div>
                  <div className="blogDetail-about-infoItem">
                    <FaHourglassStart />
                    <span>{readTime} min read</span>
                  </div>
                </div>

                <div
                  className="post-content"
                  dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                />
              </div>
              <div className="col-xl-3 col-lg-4">
                <h4 className="mb-4">Related Posts</h4>
                {relatedPostsLoading ? (
                  <div className="sideBar-loader">
                    <Loader />{" "}
                  </div>
                ) : (
                  <div className="row">
                    {relatedPosts.length > 0 ? (
                      relatedPosts.map((post, index) => {
                        const image =
                          post._embedded?.["wp:featuredmedia"]?.[0]
                            ?.source_url || "https://via.placeholder.com";
                        const title = post.title?.rendered || "Untitled";
                        const rawDate = post.date;
                        const formattedDate = new Date(
                          rawDate
                        ).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        });

                        return (
                          <div className="col-lg-12 col-md-6" key={index}>
                            <div className="sideBarBlogCard mb-4">
                              <img
                                src={image}
                                className="card-img-top"
                                alt={post.title.rendered}
                              />
                              <div className="sideBarBlogContent">
                                <Link to={`/blog/${post.slug}`}>
                                  <h5
                                    className="card-title"
                                    dangerouslySetInnerHTML={{ __html: title }}
                                  ></h5>
                                </Link>
                                <p className="card-text mb-0">
                                  {formattedDate}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <p>No related posts found.</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </DefaultLayout>
    </div>
  );
};

export default BlogDetail;
