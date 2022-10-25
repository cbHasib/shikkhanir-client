import React from "react";

const CourseCard = () => {
  return (
      <div className="max-w-[330px] rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100 p-3 ">
        <img
          src="https://cdn.10minuteschool.com/images/Admission/Thumbnails/hsc_bangla_course.jpg"
          alt=""
          className="object-cover object-center w-full rounded-md h-44 dark:bg-gray-500"
        />
        <div className="flex flex-col justify-between px-3 py-2 space-y-3">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold tracking-wide">
              Donec lectus leo
            </h2>
            <p className="dark:text-gray-100 text-sm">
              Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.
            </p>
          </div>

          <button
            type="button"
            className="btn btn-primary w-full p-0 m-0 min-h-[1rem] max-h-10"
          >
            Read more
          </button>
        </div>
      </div>
  );
};

export default CourseCard;
