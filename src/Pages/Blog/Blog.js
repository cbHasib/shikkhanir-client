import React, { useEffect } from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="p-[5%] py-10 text-center">
      <h2 className="font-bold text-4xl my-10">
        Recent <span className="text-primary">Blog</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-8 xl:w-[90%] mx-auto">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default Blog;
