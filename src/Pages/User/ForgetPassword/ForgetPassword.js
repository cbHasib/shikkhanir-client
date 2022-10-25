import React from "react";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  return (
    <>
      <input
        type="checkbox"
        id="forgetPassword-modal"
        className="modal-toggle"
      />

      <div className="modal">
        <div id="content" role="main" className="w-full max-w-md mx-auto p-6">
          <div className="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <div className="p-4 sm:p-7">
              <div className="text-center">
                <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                  Forgot password?
                </h1>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Remember your password?
                  <label
                    htmlFor="forgetPassword-modal"
                    className="text-blue-600 decoration-2 hover:underline font-medium cursor-pointer"
                  >
                    {" "}
                    Login here
                  </label>
                </p>
              </div>

              <div className="mt-5">
                <form>
                  <div className="grid gap-y-4">
                    <div>
                      <label
                        for="email"
                        className="block text-sm font-bold ml-1 mb-2 dark:text-white"
                      >
                        Email address
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                          required
                          aria-describedby="email-error"
                        />
                      </div>
                      <p
                        className="hidden text-xs text-red-600 mt-2"
                        id="email-error"
                      >
                        Please include a valid email address so we can get back
                        to you
                      </p>
                    </div>
                    <label
                      htmlFor="forgetPassword-modal"
                      type="submit"
                      className="cursor-pointer py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                    >
                      Reset password
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
