import { useEffect, useState } from "react";
// import { blogCategoriesData } from "../../data";
import BlogCategoriesCard from "../BlogCategoriesCard";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "../Loader";

const wpBaseUrl = import.meta.env.VITE_WP_BASE_URL;

const BlogCategoriesSec = ({
  searchTerm,
  isSearched = false,
  searchTrigger,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [categoryBlogs, setCategoryBlogs] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState("");

  const fetchCategoryBlogs = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(`${wpBaseUrl}/categories`);
      const categoryData = res.data;
      setCategories(categoryData);
      console.log("categoryData", categoryData);

      // fetch blogs for each category
      // categoryData.forEach(async (eachCategory,ind) => {
      //   try {
      //     const postRes = await axios.get(
      //       `${wpBaseUrl}/posts?categories=${eachCategory.id}&_embed`
      //     );
      //     setCategoryBlogs((prev) => ({
      //       ...prev,
      //       [eachCategory.slug]: postRes.data,
      //     }));
      //     console.log('in try','length', categoryData.length, 'index', ind, 'slug',eachCategory.slug);
      //   } catch (postErr) {
      //     console.error(
      //       `Error fetching posts for ${eachCategory.slug}:`,
      //       postErr
      //     );
      //   }

      //   // if(ind == categoryData.length - 1){

      //   //   console.log('categories loaded');

      //   //   setIsLoading(false);
      //   // }
      //   // else{
      //   //   console.log('categories loading', eachCategory.slug);

      //   // }
      // });
      const promises = categoryData.map(async (eachCategory) => {
        const postRes = await axios.get(
          `${wpBaseUrl}/posts?categories=${eachCategory.id}&_embed`
        );
        return {
          slug: eachCategory.slug,
          data: postRes.data,
        };
      });

      const results = await Promise.all(promises);

      // Merge results into state
      setCategoryBlogs((prev) => {
        const newData = { ...prev };
        results.forEach(({ slug, data }) => {
          newData[slug] = data;
        });
        return newData;
      });

      // console.log("✅ All categories loaded", (categoryBlogs) => {
      //   const newData = { ...categoryBlogs };
      //   results.forEach(({ slug, data }) => {
      //     newData[slug] = data;
      //   });
      //   return newData;
      // });
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching categories:", error);
      setIsLoading(false);
    }
  };

  const fetchSearchBlogs = async () => {
    if (!searchTerm.trim()) return;
    setIsLoading(true);
    setError("");
    console.log("searching blogs");

    try {
      // const res = await axios.get(
      //   `${wpBaseUrl}/posts?search=${encodeURIComponent(searchTerm)}&_embed`
      // );
      // console.log("res.data", res.data);

      // // Filter posts where title includes search term
      // const filteredResults = await res.data.filter((post) =>
      //   post.title.rendered.toLowerCase().includes(searchTerm.toLowerCase())
      // );

      // // setSearchResults(res.data);
      // setSearchResults(filteredResults);
      // console.log("filteredResults", filteredResults);
      // if (filteredResults) {
      //   console.log("setIsLoading", false);

      //   setIsLoading(false);
      // }

      const res = await axios.get(
        `${wpBaseUrl}/posts?search=${encodeURIComponent(searchTerm)}&_embed`
      );
      console.log("res.data", res.data);

      const posts = res.data || [];

      // 🔹 pehle category ka map bana lo (id → name)
      const categoryMap = categories.reduce((acc, cat) => {
        acc[cat.id] = cat.name.toLowerCase();
        return acc;
      }, {});

      // 🔹 filter by title OR category name
      const filteredResults = posts.filter((post) => {
        const titleMatch = post.title.rendered
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

        const categoryMatch = (post.categories || []).some((catId) =>
          categoryMap[catId]?.includes(searchTerm.toLowerCase())
        );

        return titleMatch || categoryMatch;
      });

      setSearchResults(filteredResults);
      console.log("filteredResults", filteredResults);

      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch blogs.");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isSearched && searchTerm.trim() != "") {
      console.log("fetching searched blogs");

      fetchSearchBlogs();
    }
    if (!isSearched && searchTerm.trim() == "") {
      console.log("fetching all blogs");
      fetchCategoryBlogs();
    }
  }, [isSearched, searchTerm, searchTrigger]);

  useEffect(() => {
    console.log("isSearched", isSearched);
  }, [isSearched]);
  useEffect(() => {
    console.log("isLoading", isLoading);
  }, [isLoading]);

  return (
    <>
      {!isSearched ? (
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
                      <div
                        className="row blog-categories-row"
                        key={category.id}
                      >
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
                            blog._embedded?.["wp:featuredmedia"]?.[0]
                              ?.source_url || "https://via.placeholder.com/300";

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
                                  blog._embedded?.["wp:term"]?.[0]?.map(
                                    (cat) => ({
                                      id: cat.id,
                                      name: cat.name,
                                    })
                                  ) || []
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
      ) : !isLoading ? (
        <section className="search-results mt-4">
          <div className="container">
            <div className="row">
              <div className="blog-categories__head">
                <h2>Search Results</h2>
              </div>
              {searchResults.length > 0 ? (
                searchResults.map((post) => {
                  const image =
                    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                    "https://via.placeholder.com/400x200";

                  return (
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
                        publishDate={new Date(post.date).toLocaleDateString()}
                        slug={post.slug}
                      />
                    </div>
                  );
                })
              ) : (
                // Agar searchTerm empty nahi hai aur result 0 hai → "No results found"
                <p className="text-muted text-center w-100 py-5">
                  No results found.
                </p>
                // !isLoading && (
                // )
              )}
            </div>
          </div>
        </section>
      ) : (
        <div className="sideBar-loader py-5 my-5">
          <Loader />
        </div>
      )}
    </>
  );
};

export default BlogCategoriesSec;
