import React from "react";
import { FiArrowRight, FiClock, FiDownload, FiUsers } from "react-icons/fi";
import { Link, useLoaderData } from "react-router-dom";
import useScrollToTop from "../../../hooks/useScrollToTop";
import useTitle from "../../../hooks/useTitle";
import Pdf from "react-to-pdf";
import "./CourseDetails.css";
import InstructorCard from "./InstructorCard";
import CourseFeatures from "./CourseFeatures";
import CourseMainFeature from "./CourseMainFeature";

const ref = React.createRef();

const CourseDetails = () => {
  const course = useLoaderData().data;


  const {
    courseAbout,
    course_description,
    // course_id,
    // course_slug,
    course_title,
    enrolledStudent,
    hoursRequired,
    instructorId,
    learnFeatures,
    mainFeatures,
    price,
    thumbnail,
  } = course;

  useScrollToTop();
  useTitle("Course Details");

  return (
    <div
      ref={ref}
      className="flex flex-col-reverse justify-center lg:flex-row gap-5 lg:gap-10 p-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-14"
    >
      <div className="mb-5 md:mb-10">
        {/* Course Title and Short Description */}
        <div>
          <h1 className="mb-2 text-3xl font-semibold lg:font-bold">
            {course_title}
          </h1>
          <h2>{course_description}</h2>
        </div>

        {/* Instructor Details  */}
        <InstructorCard instructorId={instructorId} />

        {/* About Course */}
        <div>
          <h2 className="mt-8 text-2xl mb-1 font-medium">
            What you will learn from this course
          </h2>
          <div className="border dark:border-gray-600  bg-white dark:bg-gray-800 rounded-md">
            <div className="px-5 py-4">
              {learnFeatures.map((feature, idx) => (
                <CourseFeatures feature={feature} key={idx} />
              ))}
            </div>

            <hr className="w-full border-none h-[1px] bg-base-300" />

            <div
              className="px-5 py-4"
              dangerouslySetInnerHTML={{ __html: courseAbout }}
            ></div>
            <li className="hidden list-disc list-inside"></li>
          </div>
        </div>
      </div>

      <div className="w-full lg:max-w-[470px] border border-base-300 rounded-lg lg:sticky lg:top-20 overflow-hidden h-fit dark:bg-gray-800">
        <div className="rounded-t-lg overflow-hidden duration-300 shadow relative course-image-box courseThumb">
          <figure className="relative thumb-courseThumb overflow-hidden ">
            <img
              className="w-full object-cover"
              src={thumbnail}
              alt={course_title}
            />
          </figure>
        </div>
        <div className="p-5">
          <h2 className="text-2xl font-medium mb-3 text-end text-base-content">
            <span className="font-serif">৳</span> {price}
          </h2>

          <div className="grid grid-cols-7 gap-2">
            <Link
              to="/checkout"
              className="btn btn-primary w-full col-span-7 lg:col-span-4 gap-4"
            >
              Premium Access <FiArrowRight className="w-5 h-5" />{" "}
            </Link>

            <Pdf targetRef={ref} filename="course-details.pdf">
              {({ toPdf }) => (
                <button
                  onClick={toPdf}
                  className="btn btn-warning w-full col-span-7 lg:col-span-3  gap-2"
                >
                  Download PDF
                  <FiDownload className="w-5 h-5" />
                </button>
              )}
            </Pdf>
          </div>

          <div className="flex justify-around items-center py-5">
            <div className="flex items-center gap-3">
              <FiUsers className="h-6 w-6" />
              <div>
                <p className="text-gray-400 dark:text-white/25">Enrolled</p>
                <p className="text-md font-medium">
                  {enrolledStudent} Learners
                </p>
              </div>
            </div>

            <hr className="h-5 w-[1px] bg-gray-500 border-none hidden lg:block" />

            <div className="flex items-center gap-3">
              <FiClock className="h-6 w-6" />
              <div>
                <p className="text-gray-400 dark:text-white/25">
                  Hours Required
                </p>
                <p className="text-md font-medium">{hoursRequired} Hours</p>
              </div>
            </div>
          </div>

          <hr className="h-[0.1px] w-[95%] my-2 mx-auto bg-gray-300 dark:bg-gray-600 border-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 px-5 mt-5">
            {mainFeatures.map((feature, idx) => (
              <CourseMainFeature feature={feature} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
