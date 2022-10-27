import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import Footer from "../Common/Footer";
import Header from "../Common/Header";

const ErrorPage = () => {
  useTitle("Page not found");

  return (
    <>
      <Header />
      <div className="grid h-[90vh] place-content-center bg-white dark:bg-gray-900">
        <div className="text-center">
          <strong className="text-9xl font-black text-gray-200 dark:text-gray-700">
            404
          </strong>

          <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Uh-oh!
          </h1>

          <p className="mt-4 text-gray-500 dark:text-gray-400">
            We can't find that page.
          </p>

          <Link
            to="/"
            className="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
          >
            Go Back Home
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
