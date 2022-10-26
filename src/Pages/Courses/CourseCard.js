import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ courseData }) => {
  const { name } = courseData;

  return (
    <div className="max-w-[330px] bg-white rounde-lg shadow-md dark:bg-gray-900 dark:text-gray-100 p-3 ">
      <img
        src="https://cdn.10minuteschool.com/images/Admission/Thumbnails/hsc_bangla_course.jpg"
        alt=""
        className="object-cover object-center w-full rounded-lg h-44 dark:bg-gray-500"
      />
      <div className="flex flex-col justify-between px-3 py-2 space-y-3">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold tracking-wide">
            {name ? name : " Donec lectus leo"}
          </h2>
          <p className="dark:text-gray-100 text-sm">
            Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.
          </p>
        </div>

        <Link
          to="/course/slug"
          type="button"
          className="btn btn-primary w-full p-0 m-0 min-h-[1rem] max-h-10"
        >
          Enroll Course
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;