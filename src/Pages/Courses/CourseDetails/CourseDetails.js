import React from "react";
import { FiArrowRight, FiClock, FiDownload, FiUsers } from "react-icons/fi";
import { FcApproval } from "react-icons/fc";

const CourseDetails = () => {
  return (
    <div className="flex flex-col-reverse justify-center items-center lg:flex-row gap-5 lg:gap-10 p-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-14">
      <div className="mb-5 md:mb-10">
        <div>
          <h1 className="mb-2 text-3xl font-semibold lg:font-bold">
            Spoken English for Kids
          </h1>
          <h2>
            English course designed to teach kids how to speak English in real
            life situations. Enroll now to keep your kids ahead with English
            Speaking and Reading skills.
          </h2>
        </div>

        <div>
          <h2 className="mt-5 text-2xl font-semibold">Instructor</h2>
        </div>
      </div>

      <div className="min-w-fit max-w-xl border border-base-300 rounded-lg lg:sticky lg:top-5 overflow-hidden">
        <div className="rounded-t-lg overflow-hidden hover:rounded-b-2xl duration-300 shadow">
          <iframe
            className="w-full aspect-video "
            src="https://www.youtube.com/embed/YE5HRqSjbLI?enablejsapi=1&amp;origin=https%3A%2F%2F10minuteschool.com&amp;widgetid=5"
            title="dd"
          ></iframe>
        </div>
        <div className="p-5">
          <h2 className="text-2xl font-medium mb-3 text-end text-base-content">
            <span className="font-serif">৳</span> 0
          </h2>

          <div className="grid grid-cols-7 gap-2">
            <button className="btn btn-primary w-full col-span-7 lg:col-span-4 gap-4">
              Enroll Now <FiArrowRight className="w-5 h-5" />{" "}
            </button>
            <button className="btn btn-warning w-full col-span-7 lg:col-span-3  gap-2">
              Download PDF
              <FiDownload className="w-5 h-5" />
            </button>
          </div>

          <div className="flex justify-around items-center py-5">
            <div className="flex items-center gap-3">
              <FiUsers className="h-6 w-6" />
              <div>
                <p className="text-gray-400 dark:text-white/25">Enrolled</p>
                <p className="text-md font-medium">17872 Learners</p>
              </div>
            </div>

            <hr className="h-5 w-[1px] bg-gray-500 border-none hidden lg:block" />

            <div className="flex items-center gap-3">
              <FiClock className="h-6 w-6" />
              <div>
                <p className="text-gray-400 dark:text-white/25">
                  Hours Required
                </p>
                <p className="text-md font-medium">5 Hours</p>
              </div>
            </div>
          </div>

          <hr className="h-[0.1px] w-[95%] my-2 mx-auto bg-gray-300 dark:bg-gray-600 border-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 px-5 mt-5">
            <span className="flex items-center gap-2 text-lg justify-center">
              <FcApproval className="w-5 h-5" /> 5 Free Videos
            </span>

            <span className="flex items-center gap-2 text-lg justify-center">
              <FcApproval className="w-5 h-5" /> 5 Free Videos
            </span>

            <span className="flex items-center gap-2 text-lg justify-center">
              <FcApproval className="w-5 h-5" /> 5 Free Videos
            </span>

            <span className="flex items-center gap-2 text-lg justify-center">
              <FcApproval className="w-5 h-5" /> 5 Free Videos
            </span>

            <span className="flex items-center gap-2 text-lg justify-center">
              <FcApproval className="w-5 h-5" /> 5 Free Videos
            </span>

            <span className="flex items-center gap-2 text-lg justify-center">
              <FcApproval className="w-5 h-5" /> 5 Free Videos
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
