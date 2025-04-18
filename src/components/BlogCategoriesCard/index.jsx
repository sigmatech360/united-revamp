import React from "react";
import { MdDateRange } from "react-icons/md";

const BlogCategoriesCard = (props) => {
  return (
    <div className="blog-categories__card">
      <div className="blog-categories__card-head">
        <img src={props.image} className="img-fluid" alt="" />
      </div>
      <div className="blog-categories__card-body">
        <p className="blog-categories__card-body-category">{props.category}</p>
        <p className="blog-categories__card-body-title">{props.title}</p>
      </div>
      <div className="blog-categories__card-footer">
        <MdDateRange />
        <p>Published: {props.publishDate}</p>
      </div>
    </div>
  );
};

export default BlogCategoriesCard;
