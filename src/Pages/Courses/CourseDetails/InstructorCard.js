import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import avatar from "../../../assets/images/user.png";

const InstructorCard = ({ instructorId }) => {
  const [instructor, setInstructor] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:5000/instructor/${instructorId}`)
      .then((res) => res.json())
      .then((data) => setInstructor(data.data));
  }, [instructorId]);

  return (
    <div>
      <h2 className="mt-5 text-2xl mb-1 font-medium">Instructor</h2>
      <div>
        <Link
          to={`/instructor/${
            instructor?.instructor_slug ? instructor?.instructor_slug : ""
          }`}
          className="shadow border dark:border-gray-600 select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center px-5 py-4"
        >
          <div className="flex flex-col  justify-center items-center mr-4 avatar ">
            <div className="block relative w-16 rounded-full ring">
              <img
                alt={instructor?.name ? instructor?.name : "Instructor Photo"}
                src={instructor?.image ? instructor?.image : avatar}
                className="mx-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="flex-1 pl-1 md:mr-16">
            <div className="font-medium dark:text-white text-lg">
              {instructor?.name ? instructor?.name : "Instructor Name"}
            </div>
            <div className="text-gray-600 dark:text-gray-200 text-sm">
              {instructor?.designation
                ? instructor?.designation
                : "Designation"}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default InstructorCard;
