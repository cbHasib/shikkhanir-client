import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { _id, course_title, course_slug, price, thumbnail } = course;

  return (
    <div className="max-w-[330px] bg-white rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100 p-3 relative flex flex-col justify-between text-center hover:-translate-y-1 duration-300">
      <div className="bg-warning text-black p-1.5 rounded-full absolute top-1 right-1">
        <span className="font-serif">৳</span>
        {price}
      </div>

      <div>
        <img
          src={thumbnail}
          alt=""
          className="object-cover object-center w-full rounded-lg h-44 dark:bg-gray-500"
        />
        <div className="px-3 py-2 space-y-3">
          <h2 className="text-xl font-semibold tracking-wide text-ellipsis ">
            {course_title ? course_title : " Course Name"}
          </h2>
        </div>
      </div>

      <div className="px-3 py-2 space-y-3">
        <Link
          to={`/courses/${_id}/${course_slug}`}
          type="button"
          className="btn btn-primary w-full p-0 m-0 min-h-[1rem] max-h-10"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
