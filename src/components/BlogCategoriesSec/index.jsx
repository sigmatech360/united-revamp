import { useEffect, useState } from "react";
// import { blogCategoriesData } from "../../data";
import BlogCategoriesCard from "../BlogCategoriesCard";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "../Loader";

const wpBaseUrl = import.meta.env.VITE_WP_BASE_URL;

const BlogCategoriesSec = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [categoryBlogs, setCategoryBlogs] = useState({});

  console.log("categories", categories);
  console.log("categoryBlogs", categoryBlogs);

  const fetchCategoryBlogs = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(`${wpBaseUrl}/categories`);
      const categoryData = res.data;
      setCategories(categoryData);

      // fetch blogs for each category
      categoryData.forEach(async (eachCategory) => {
        try {
          const postRes = await axios.get(
            `${wpBaseUrl}/posts?categories=${eachCategory.id}&_embed`
          );
          setCategoryBlogs((prev) => ({
            ...prev,
            [eachCategory.slug]: postRes.data,
          }));
        } catch (postErr) {
          console.error(
            `Error fetching posts for ${eachCategory.slug}:`,
            postErr
          );
        }
      });
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCategoryBlogs();
  }, []);

  return (
    <section className="blog-categories">
      <div className="container">
        <section className="blog-categories">
          <div className="container">
            {isLoading ? (
              <div className="sideBar-loader py-5 my-5">
                <Loader />
              </div>
            ) : (
              categories.map((category) => { 
                const blogs = categoryBlogs[category.slug] || [];

                if (blogs.length === 0) return null;

                return (
                  <div className="row blog-categories-row" key={category.id}>
                    <div className="col-md-12">
                      <div className="blog-categories__head">
                        <h2 data-aos="fade-right" data-aos-delay={200}>
                          {category.name}
                        </h2>
                        <Link
                          to={`/blog/category/${category.slug}`}
                          className="theme-btn theme-btn__yellow"
                          data-aos="fade-left"
                          data-aos-delay={200}
                        >
                          Find More
                        </Link>
                      </div>
                    </div>
                    {blogs.map((blog, blogIndex) => {
                      const image =
                        blog._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                        "https://via.placeholder.com/300";

                      return (
                        <div
                          className="col-xl-4 col-md-6 mb-4"
                          key={blog.id}
                          data-aos="fade-up"
                          data-aos-delay={blogIndex * 200}
                        >
                          <BlogCategoriesCard
                            image={image}
                            categories={
                              blog._embedded?.["wp:term"]?.[0]?.map((cat) => ({
                                id: cat.id,
                                name: cat.name,
                              })) || []
                            }
                            title={blog.title.rendered}
                            publishDate={new Date(
                              blog.date
                            ).toLocaleDateString()}
                            slug={blog.slug}
                          />
                        </div>
                      );
                    })}
                  </div>
                );
              })
            )}
          </div>
        </section>

        {/* {categories.map((category) => {
          const blogs = categoryBlogs[category.slug] || [];

          // ✅ Skip rendering if no blogs in the category
          if (blogs.length === 0) return null;
          return (
            <div className="row blog-categories-row" key={category.id}>
              <div className="col-md-12">
                <div className="blog-categories__head">
                  <h3 data-aos="fade-right" data-aos-delay={200}>
                    {category.name}
                  </h3>
                  <Link
                    to={`/blog/category/${category.slug}`}
                    className="theme-btn theme-btn__yellow"
                    data-aos="fade-left"
                    data-aos-delay={200}
                  >
                    Find More
                  </Link>
                </div>
              </div>
              {(categoryBlogs[category.slug] || []).map((blog, blogIndex) => {
                // const image =
                //   blog._embedded?.["wp:featuredmedia"]?.[0]?.source_url ??
                //   "https://via.placeholder.com/300";

                const image =
                  blog._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                  "https://via.placeholder.com/300";

                return (
                  <div
                    className="col-xl-4 col-md-6 mb-4"
                    key={blog.id}
                    data-aos="fade-up"
                    data-aos-delay={blogIndex * 200}
                  >
                    <BlogCategoriesCard
                      image={image}
                      categories={
                        blog._embedded?.["wp:term"]?.[0]?.map((cat) => ({
                          id: cat.id,
                          name: cat.name,
                        })) || []
                      }
                      title={blog.title.rendered}
                      publishDate={new Date(blog.date).toLocaleDateString()}
                      slug={blog.slug}
                    />
                  </div>
                );
              })}
            </div>
          );
        })} */}
      </div>
    </section>
  );
};

export default BlogCategoriesSec;
