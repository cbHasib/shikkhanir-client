import React from "react";
import { useLoaderData } from "react-router-dom";
import useScrollToTop from "../../hooks/useScrollToTop";
import useTitle from "../../hooks/useTitle";
import CourseCard from "./CourseCard";

const Courses = () => {
  const courses = useLoaderData().data;

  useScrollToTop();
  useTitle("Courses");

  return (
    <div className="px-2 md:px-3 py-10 flex flex-wrap justify-center gap-7">
      {courses.map((course) => (
        <CourseCard course={course} key={course.course_id} />
      ))}
    </div>
  );
};

export default Courses;
