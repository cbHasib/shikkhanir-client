import React from "react";
import { FiArrowRight, FiClock, FiDownload, FiUsers } from "react-icons/fi";
import { FcApproval } from "react-icons/fc";
import { Link } from "react-router-dom";

const CourseDetails = () => {



    const aboutCourseDetails = ''








  return (
    <div className="flex flex-col-reverse justify-center items-center lg:flex-row gap-5 lg:gap-10 p-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-14">
      <div className="mb-5 md:mb-10">
        {/* Course Title and Short Description */}
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

        {/* Instructor Details  */}
        <div>
          <h2 className="mt-5 text-2xl mb-1 font-medium">Instructor</h2>
          <div>
            <Link
              to="/instructor/hasibul-hasan"
              class="shadow border dark:border-gray-600 select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center px-5 py-4"
            >
              <div class="flex flex-col  justify-center items-center mr-4 avatar ">
                <div class="block relative w-16 rounded-full ring">
                  <img
                    alt="profile"
                    src="https://placeimg.com/192/192/people"
                    class="mx-auto"
                  />
                </div>
              </div>
              <div class="flex-1 pl-1 md:mr-16">
                <div class="font-medium dark:text-white text-lg">
                  Hasibul Hasan
                </div>
                <div class="text-gray-600 dark:text-gray-200 text-sm">
                  Junior Web Developer at NexusHand
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* About Course */}
        <div>
          <h2 className="mt-8 text-2xl mb-1 font-medium">
            What you will learn from this course
          </h2>
          <div className="border dark:border-gray-600  bg-white dark:bg-gray-800 rounded-md">
            <div className="px-5 py-4">
              <p className="flex items-center gap-2 leading-5 my-2">
                <span>
                  <FcApproval className="w-5 h-5" />{" "}
                </span>
                Methods and techniques to improve conversational English.
              </p>
              <p className="flex items-center gap-2 leading-5 my-2">
                <span>
                  <FcApproval className="w-5 h-5" />{" "}
                </span>
                To be able to speak English with their teachers, friends, and
                family members in their daily life.
              </p>
            </div>

            <hr className="w-full border-none h-[1px] bg-base-300" />

            <div className="px-5 py-4">
            
                <div>
                  <p>
                    <strong className="text-lg">About this course</strong>
                    <br />
                    Every parent wants their children to know how to speak
                    English fluently and be able to present themselves smartly.
                    Nowadays, being proficient in Spoken English is a
                    prerequisite for presenting oneself smartly in every aspect
                    of life, including institutional, social, and family.
                    Moreover, being fluent in English from an early age makes it
                    relatively easier to grasp the subjects of higher education
                    later on.
                  </p>
                  <br />
                  <p>
                    What if your little one could also speak English flawlessly
                    and stay ahead of others from an early age? Wouldn't that be
                    great? If you think the same, then Ten Minute Schook's
                    “Kid's English” is the perfect choice for you!
                  </p>
                  <br />
                  <p>
                    There is absolutely no substitute for Spoken English in
                    academic life, be it in classrooms or in extra-curricular
                    activities. It even plays a vital role in college and job
                    applications. That's why 10 Minute School has brought to you
                    this Spoken English for Kids course that will help to build
                    your kid's communication skills by following effective
                    techniques.
                  </p>
                  <p>
                    Our Expert Course Instructor Munzereen Shahid will guide
                    your child in the art of Spoken English and help your kid
                    become a confident and fluent English speaker.
                  </p>
                  <br />
                  <p>
                    <strong className="text-lg">About this course</strong>
                  </p>
                  <ul className="ml-4">
                    <li className="list-disc list-inside">
                      This course is specifically designed to keep children and
                      their needs in mind.
                    </li>
                    <li className="list-disc list-inside">
                      It addresses the various challenges faced by children
                      while learning how to read, write and speak English.
                    </li>
                    <li className="list-disc list-inside">
                      It tries to encourage children to learn English while also
                      focusing on helping them lose their fears related to the
                      subject.
                    </li>
                    <li className="list-disc list-inside">
                      The quizzes and flashcards of this course are designed to
                      retain the attention of children.
                    </li>
                  </ul>
                </div>
             
            </div>
          </div>
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
