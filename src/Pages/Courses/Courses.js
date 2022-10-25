import React from "react";
import CourseCard from "./CourseCard";

const Courses = () => {
  return (
    // <div className="bg-base-200 p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div className="bg-base-200 p-10 flex flex-wrap justify-center gap-7">
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
    </div>
  );
};

export default Courses;
