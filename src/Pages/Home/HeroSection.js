import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div>
      <section className="relative bg-[url(https://i.ibb.co/7S1rLTW/bg.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/75 dark:sm:from-black/95 sm:to-white/0 dark:sm:to-gray/25"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-base-content dark:text-white">
              Let's learn something
              <strong className="block font-extrabold text-purple-700">
                with ShikkhaNir
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
              Largest online education platform. Enrich your knowledge with
              ShikkhaNir. Make yourself talented!
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <Link
                to="/courses"
                className="block w-full rounded bg-purple-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-purple-700 focus:outline-none focus:ring active:bg-purple-500 sm:w-auto"
              >
                See Course
              </Link>

              <Link
                to="/profile"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-purple-600 shadow hover:text-purple-700 focus:outline-none focus:ring active:text-purple-500 sm:w-auto"
              >
                Profile
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
