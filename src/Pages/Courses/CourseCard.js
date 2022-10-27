import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ courseData }) => {
  const { name } = courseData;

  return (
    <div className="max-w-[330px] bg-white rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100 p-3 relative flex flex-col justify-between text-center">
      <div className="bg-info dark:bg-[#019087] p-1.5 rounded-full absolute top-1 right-1">
        $33
      </div>

      <div>
        <img
          src="https://cdn.10minuteschool.com/images/Admission/Thumbnails/hsc_bangla_course.jpg"
          alt=""
          className="object-cover object-center w-full rounded-lg h-44 dark:bg-gray-500"
        />
        <div className="px-3 py-2 space-y-3">
          <h2 className="text-xl font-semibold tracking-wide text-ellipsis ">
            {name ? name : " Donec lectus leo"}
          </h2>
        </div>
      </div>

      <div className="px-3 py-2 space-y-3">
        <Link
          to="/course/slug"
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
