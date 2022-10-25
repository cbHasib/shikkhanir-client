import React from "react";
import { useNavigate } from "react-router-dom";
import './BlogCard.css'

const BlogCard = () => {

    const navigate = useNavigate();

    const handleBlog = (slug) => {
      navigate(`/blog/post/${slug}`);
    };

  return (
    <div
      onClick={() => handleBlog('slug')}
      className="card card-compact w-full bg-base-100 shadow-lg overflow-hidden border border-base-300 blogCard cursor-pointer"
    >
      <figure className="relative thumb-blogCard overflow-hidden">
        <img
          className="h-[300px] w-full object-cover"
          src='http://localhost:3000/static/media/logo.dd6573f397e325aeb96e.png'
          alt='thumb'
        />
      </figure>
      <div className="badge badge-primary absolute top-5 left-5 bg-opacity-75 p-4">
        Category
      </div>

      <div className="card-body">
        <h2 className="card-title text-center justify-center">title</h2>
        <p className="text-center">Lorem ipsum dolor sit, amet consectetur</p>
        <hr className="bg-gray-400 w-full h-[1px]" />
        <div className="flex justify-between items-center">
          <span className="m-0 p-0 text-base">Hasibul Hasan</span>
          <span className="m-0 p-0 text-base">Oct 25, 2022</span>
        </div>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default BlogCard;
