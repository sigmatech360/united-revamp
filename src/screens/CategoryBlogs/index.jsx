import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";
import aboutbannerbg from "../../assets/images/about-banner-bg.webp";
import BlogCategoriesCard from "../../components/BlogCategoriesCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../components/Loader";

const wpBaseUrl = import.meta.env.VITE_WP_BASE_URL;

const CategoryBlogs = () => {
  const { categorySlug } = useParams();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(null);

  useEffect(() => {
    // Fetch categories to find matching slug
    axios
      .get(`${wpBaseUrl}/categories`)
      .then((res) => {
        const matched = res.data.find((cat) => cat.slug === categorySlug);
        if (matched) {
          setCategoryId(matched.id);
        } else {
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error("Category fetch error:", err);
        setLoading(false);
      });
  }, [categorySlug]);

  useEffect(() => {
    if (!categoryId) return;

    setLoading(true);
    axios
      .get(`${wpBaseUrl}/posts?categories=${categoryId}&_embed`)
      .then((res) => {
        setPosts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Post fetch error:", err);
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) {
    return <Loader />;
  }

  return (
    <DefaultLayout>
      <InnerBanner
        bgImage={aboutbannerbg}
        title={categorySlug.replace("-", " ")}
        description={`Blogs / Category / ${categorySlug.replace("-", " ")}`}
      />

      <section className="category__blogs">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="category__blogs-head">
                <h3 className="mb-4 text-capitalize">
                  {categorySlug.replace("-", " ")}
                </h3>
              </div>
            </div>
            {posts.length > 0 ? (
              posts.map((post, index) => {
                const image =
                  post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                  "https://via.placeholder.com";

                return (
                  <div className="col-md-4 mb-4" key={index}>
                    <BlogCategoriesCard
                      image={image}
                      categories={
                        post._embedded?.["wp:term"]?.[0]?.map((cat) => ({
                          id: cat.id,
                          name: cat.name,
                        })) || []
                      }
                      title={post.title.rendered}
                      publishDate={new Date(post.date).toLocaleDateString()}
                      slug={post.slug} // ✅ This is REQUIRED
                    />
                  </div>
                );
              })
            ) : (
              <p>No posts found for this category.</p>
            )}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default CategoryBlogs;
