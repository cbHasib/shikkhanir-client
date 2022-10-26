import React from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import useTitle from "../../hooks/useTitle";
import CourseCard from "./CourseCard";

const Courses = () => {
  useScrollToTop();
  useTitle("Courses");

  return (
    // <div className="bg-base-200 p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div className="bg-base-200 px-2 md:px-3 py-10 flex flex-wrap justify-center gap-7">
      <CourseCard courseData={{ name: "Test" }} />
      <CourseCard courseData={{ name: "Test2" }} />
      <CourseCard courseData={{ name: "Test3" }} />
      <CourseCard courseData={{ name: "Test4" }} />
    </div>
  );
};

export default Courses;
