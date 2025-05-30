import { MdDateRange } from "react-icons/md";
import { Link } from "react-router-dom";

const BlogCategoriesCard = (props) => {
  return (
    <div className="blog-categories__card">
      <div className="blog-categories__card-head">
        <Link to={`/blog/${props.slug}`}>
          <img src={props.image} className="img-fluid" alt="" />
        </Link>
      </div>
      <div className="blog-categories__card-body">
        {/* <div className="blog-categories__card-body-category">{props.category}</div> */}
        <div className="blog-categories__card-body-category">
          {props.categories.map((cat, index) => (
            <span key={cat.id}>
              {cat.name}
              {index < props.categories.length - 1 && ", "}
            </span>
          ))}
        </div>
        <Link to={`/blog/${props.slug}`}>
          <p className="blog-categories__card-body-title">{props.title}</p>
        </Link>
      </div>
      <div className="blog-categories__card-footer">
        <MdDateRange />
        <p>Published: {props.publishDate}</p>
      </div>
    </div>
  );
};

export default BlogCategoriesCard;
