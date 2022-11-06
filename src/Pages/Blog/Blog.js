import React, { useEffect, useState } from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import useTitle from "../../hooks/useTitle";
import LoadingSpinner from "../Common/LoadingSpinner";
import BlogCard from "./BlogCard";

const Blog = () => {
  const [error, setError] = useState(null);
  const [load, setLoad] = useState(true);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_serverURL}/blogs`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setBlogs(data.data.reverse());
          setError(null);
        } else {
          setError(data.error);
        }
        setLoad(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoad(false);
      });
  }, []);

  useScrollToTop();
  useTitle("Blog");

  return (
    <>
      {load ? (
        <LoadingSpinner />
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <div className="p-[5%] py-10 text-center">
          <h2 className="font-bold text-4xl my-10">
            Recent <span className="text-primary">Blog</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-8 xl:w-[90%] mx-auto">
            {blogs?.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Blog;
