import React from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import useTitle from "../../hooks/useTitle";

const Contact = () => {
  useScrollToTop();
  useTitle("Contact");

  return (
    <section className="py-20 dark:bg-gray-800 dark:text-gray-50">
      <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2">
        <div className="py-6 md:py-0 md:px-6 flex justify-center align-middle flex-col text-center md:text-left">
          <h1 className="text-4xl font-bold">Get in touch</h1>
          <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
          <div className="space-y-4  flex flex-col justify-center items-center md:items-stretch">
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-3 text-primary"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>Rajshahi University, Rajshahi</span>
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-3 text-primary"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              <span>+8801780-568256</span>
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-3 text-primary"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <span>hasibul.pbn@gmail.com</span>
            </p>
          </div>
        </div>

        <form action="#" className="md:pl-">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-base-content"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="input input-bordered w-full"
              placeholder="name@company.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-base-content"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="input input-bordered w-full"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-base-content"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="4"
              className="textarea textarea-bordered w-full"
              placeholder="Your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary w-full p-0 m-0 min-h-[1rem] max-h-10"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
