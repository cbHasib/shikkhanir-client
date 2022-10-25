import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const SingleBlog = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="p-3 lg:p-10 bg-base-200">
      <div className="w-[95%] lg:w-[70%] mx-auto rounded-2xl overflow-hidden pb-20 shadow-md bg-base-100">
        <img
          className="shadow border border-base-300 w-full h-80 object-cover rounded-t-2xl"
          src="http://localhost:3000/static/media/logo.dd6573f397e325aeb96e.png"
          alt="title"
        />
        <div className="px-10 lg:px-20">
          <h1 className="text-2xl lg:text-4xl font-semibold mt-10">Ttile</h1>
          <div className="pb-10 pt-4 flex justify-between">
            <div>
              <div className="text-base">
                Posted by
                <Link to="/about" className="text-primary hover:text-secondary">
                  {" "}
                  Hasibul Hasan
                </Link>
              </div>
              <div className="flex gap-2 text-sm text-base-content">
                <span>Date</span> • <span>Time min read</span>
              </div>
            </div>
            <div className="flex gap-2 items-center justify-end">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                rel="noreferrer"
                target="_blank"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 hover:text-primary hover:cursor-pointer"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                </svg>
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=$'{title}'&summary=&source=`}
                rel="noreferrer"
                target="_blank"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[22px] h-[22px] hover:text-primary hover:cursor-pointer"
                >
                  <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"></path>
                </svg>
              </a>
              <div
                onClick={() => {
                  // Copy the text inside the text field
                  navigator.clipboard.writeText(window.location.href);

                  // Toast
                  toast.success("Successfully copied the link!");
                }}
              >
                <svg
                  stroke="currentColor"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  strokeWidth="1.5"
                  className="w-[22px] h-[22px] hover:text-primary hover:cursor-pointer"
                >
                  <path
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="48"
                    d="M200.66 352H144a96 96 0 010-192h55.41m113.18 0H368a96 96 0 010 192h-56.66m-142.27-96h175.86"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="">
            <p>
              Easy to set up for real, you can make it work in less than 10sec!
              Super easy to customize RTL support Swipe to close 👌 Beautiful by
              default Can choose swipe direction Super easy to use an animation
              of your choice Can display a react component inside the toast! Has
              onOpen and onClose hooks. Both can access the props passed to the
              react component rendered inside the toast Can remove a toast
              programmatically Define behavior per toast Pause toast when the
              window loses focus 👁 Fancy progress bar to display the remaining
              time Possibility to update a toast You can control the progress
              bar a la nprogress 😲 You can limit the number of toast displayed
              at the same time Dark mode 🌒 Colored theme Promise support And
              much more ! #Contribute Show your ❤️ and support by giving a ⭐.
              Any suggestions are welcome! Take a look at the contributing
              guide. You can also find me on reactiflux. My pseudo is Fadi.
              #Contributors #Code Contributors This project exists thanks to all
              the people who contribute. [Contribute]. #Financial Contributors
              Become a financial contributor and help us sustain our community.
              [Contribute] #Individuals #Organizations Support this project with
              your organization. Your logo will show up here with a link to your
              website. [Contribute] #License Licensed under MIT
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
