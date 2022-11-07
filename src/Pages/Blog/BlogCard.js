import React from "react";
import { useNavigate } from "react-router-dom";
import "./BlogCard.css";

const BlogCard = ({ blog }) => {
  const {
    author,
    thumbnail,
    postBody,
    postCategory,
    publishDate,
    slug,
    title,
  } = blog;

  const textBody = postBody.replace(/(<([^>]+)>)/gi, "").substring(0, 100);

  const navigate = useNavigate();

  const handleBlog = (slug) => {
    navigate(`/blog/post/${slug}`);
  };

  return (
    <div
      onClick={() => handleBlog(slug)}
      className="card card-compact w-full bg-base-100 shadow-lg overflow-hidden border border-base-300 blogCard cursor-pointer"
    >
      <figure className="relative thumb-blogCard overflow-hidden">
        <img
          className="lg:h-[240px] w-full object-cover"
          src={thumbnail}
          alt={title}
        />
      </figure>
      <div className="badge badge-primary absolute top-5 left-5 bg-opacity-75 p-4">
        {postCategory}
      </div>

      <div className="card-body">
        <h2 className="card-title text-lg text-center justify-center dark:text-white/90">
          {title}
        </h2>
        <p className="text-center">{textBody + "..."}</p>
        <hr className="bg-gray-400 w-full h-[1px]" />
        <div className="flex justify-between items-center">
          <span className="m-0 p-0 text-base">{author}</span>
          <span className="m-0 p-0 text-base">{publishDate}</span>
        </div>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default BlogCard;
