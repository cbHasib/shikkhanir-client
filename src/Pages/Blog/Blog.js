import React from "react";
import { useLoaderData } from "react-router-dom";
import useScrollToTop from "../../hooks/useScrollToTop";
import useTitle from "../../hooks/useTitle";
import BlogCard from "./BlogCard";

const Blog = () => {
  const blogs = useLoaderData().data;

  useScrollToTop();
  useTitle("Blog");

  return (
    <div className="p-[5%] py-10 text-center">
      <h2 className="font-bold text-4xl my-10">
        Recent <span className="text-primary">Blog</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-8 xl:w-[90%] mx-auto">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
