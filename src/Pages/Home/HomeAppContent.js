import React from "react";
import logo from "../../assets/images/logo.png";

const HomeAppContent = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-lg text-center sm:mx-auto">
        <span className="inline-block mb-4">
          <div className="flex items-center justify-center w-14 h-14 p-2 rounded-full bg-indigo-50">
            <img src={logo} alt="Logo" />
          </div>
        </span>
        <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-none">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-32 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="6b0188f3-b7a1-4e9b-b95e-cad916bb3042"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#6b0188f3-b7a1-4e9b-b95e-cad916bb3042)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative bg-white dark:bg-slate-900">
              Download
            </span>
          </span>{" "}
          our Mobile App to start learning today!
        </h2>

        <hr className="my-8 border-gray-300" />
        <div className="flex items-center mb-3 text-center justify-center">
          <a
            href="https://play.google.com/store/apps/details?id=com.hmsoft.shikkhanir"
            className="transition duration-300 hover:shadow-lg"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1000px-Google_Play_Store_badge_EN.svg.png"
              className="object-cover object-top w-44 mx-auto"
              alt=""
            />
          </a>
        </div>
        <p className="max-w-xs text-xs text-gray-600 dark:text-gray-400 sm:text-sm sm:max-w-sm mx-auto">
          ShikkhaNir is available only on Android
        </p>
      </div>
    </div>
  );
};

export default HomeAppContent;
